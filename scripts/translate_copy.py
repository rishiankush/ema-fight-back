#!/usr/bin/env python3
from __future__ import annotations

import json
import os
import re
import threading
import time
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / ".doc-extract" / "en-copy.json"
CACHE_PATH = ROOT / ".doc-extract" / "copy-cache.json"
OUT_DIR = ROOT / "src" / "i18n" / "copy"

LOCALES = {
    "hi": "hi",
    "pa": "pa",
    "bn": "bn",
    "ta": "ta",
    "te": "te",
    "mr": "mr",
    "gu": "gu",
    "kn": "kn",
    "ml": "ml",
}

CACHE_LOCK = threading.Lock()
SKIP_KEYS = {"slug", "href", "id", "group"}
DELIM = "\n§§\n"
SKIP_STRING = re.compile(r"^(?:₹[\d,.\-+]+|[\d,.\-+]+|https?://\S+|/[A-Za-z0-9#\-_/\?=&]*)$")

PROTECTED = [
    "EMA Fight Back",
    "Extreme Martial Arts",
    "People Safety",
    "Teenpower",
    "Fullpower",
    "WhatsApp",
    "Chandigarh",
    "Master B. S. Handa",
]


def load_cache() -> dict[str, dict[str, str]]:
    if CACHE_PATH.exists():
        return json.loads(CACHE_PATH.read_text())
    return {}


def save_cache(cache: dict[str, dict[str, str]]) -> None:
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    with CACHE_LOCK:
        CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=False, indent=2))


def collect_strings(node, acc: set[str], key: str | None = None) -> None:
    if isinstance(node, dict):
        for child_key, value in node.items():
            collect_strings(value, acc, child_key)
        return
    if isinstance(node, list):
        for value in node:
            collect_strings(value, acc, key)
        return
    if isinstance(node, str) and key not in SKIP_KEYS and node.strip() and not SKIP_STRING.match(node.strip()):
        acc.add(node)


def protect(text: str) -> str:
    result = text
    for index, token in enumerate(PROTECTED):
        result = result.replace(token, f"⟦{index}⟧")
    return result


def unprotect(text: str) -> str:
    result = text
    for index, token in enumerate(PROTECTED):
        result = result.replace(f"⟦{index}⟧", token)
        result = result.replace(f"[[{index}]]", token)
    return result


def translate_google(text: str, target: str) -> str:
    query = urllib.parse.urlencode(
        {
            "client": "gtx",
            "sl": "en",
            "tl": target,
            "dt": "t",
            "q": text,
        }
    )
    url = f"https://translate.googleapis.com/translate_a/single?{query}"
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, timeout=30) as response:
        payload = json.loads(response.read().decode("utf-8"))
    return "".join(part[0] for part in payload[0] if part and part[0])


def translate_string(text: str, target: str, cache: dict[str, dict[str, str]]) -> str:
    with CACHE_LOCK:
        cached = cache.setdefault(target, {}).get(text)
    if cached:
        return cached
    protected = protect(text)
    last_error = None
    for attempt in range(5):
        try:
            translated = unprotect(translate_google(protected, target)).strip() or text
            with CACHE_LOCK:
                cache.setdefault(target, {})[text] = translated
            return translated
        except Exception as error:  # noqa: BLE001
            last_error = error
            time.sleep(1.5 * (attempt + 1))
    print(f"failed {target}: {text[:80]!r} ({last_error})")
    with CACHE_LOCK:
        cache.setdefault(target, {})[text] = text
    return text


def apply(node, target: str, cache: dict[str, dict[str, str]], key: str | None = None):
    if isinstance(node, dict):
        return {child_key: apply(value, target, cache, child_key) for child_key, value in node.items()}
    if isinstance(node, list):
        return [apply(value, target, cache, key) for value in node]
    if isinstance(node, str) and key not in SKIP_KEYS and node.strip() and not SKIP_STRING.match(node.strip()):
        return cache.get(target, {}).get(node, node)
    return node


def translate_batch(texts: list[str], target: str) -> list[str]:
    protected = [protect(text) for text in texts]
    joined = DELIM.join(protected)
    translated = translate_google(joined, target)
    parts = [unprotect(part.strip()) for part in translated.split("§§")]
    if len(parts) != len(texts):
        raise ValueError(f"batch size mismatch {len(parts)} != {len(texts)}")
    return [part or original for part, original in zip(parts, texts)]


def fill_cache(strings: set[str], target: str, cache: dict[str, dict[str, str]]) -> None:
    missing = [text for text in sorted(strings) if text not in cache.setdefault(target, {})]
    if not missing:
        return
    print(f"  {target}: {len(missing)} strings")
    batches = [missing[i : i + 12] for i in range(0, len(missing), 12)]
    done = 0
    with ThreadPoolExecutor(max_workers=4) as pool:
        futures = {pool.submit(translate_batch, batch, target): batch for batch in batches}
        for future in as_completed(futures):
            batch = futures[future]
            try:
                translated = future.result()
                with CACHE_LOCK:
                    bucket = cache.setdefault(target, {})
                    for original, value in zip(batch, translated):
                        bucket[original] = value
                done += len(batch)
            except Exception as error:  # noqa: BLE001
                print(f"  batch fallback {target}: {error}")
                for text in batch:
                    translate_string(text, target, cache)
                    done += 1
            if done % 60 == 0 or done == len(missing):
                print(f"  {target}: {done}/{len(missing)}")
                save_cache(cache)
    save_cache(cache)


def write_locale(locale: str, data: dict) -> None:
    json_text = json.dumps(data, ensure_ascii=False, indent=2)
    OUT_DIR.joinpath(f"{locale}.ts").write_text(
        f'import type {{ SiteCopy }} from "./en";\n\nexport const {locale}Copy = {json_text} as unknown as SiteCopy;\n',
        encoding="utf-8",
    )


def main() -> None:
    source = json.loads(SOURCE.read_text())
    cache = load_cache()
    strings: set[str] = set()
    collect_strings(source, strings)
    print(f"{len(strings)} unique strings")
    only = os.environ.get("ONLY_LOCALES", "")
    locales = [item.strip() for item in only.split(",") if item.strip()] or list(LOCALES)
    for locale in locales:
        fill_cache(strings, LOCALES[locale], cache)
        write_locale(locale, apply(source, LOCALES[locale], cache))
        print(f"wrote {locale}")


if __name__ == "__main__":
    main()
