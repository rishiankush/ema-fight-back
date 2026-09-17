"use client";

import { locales, localeNames, type Locale } from "@/i18n/config";
import { useT } from "@/i18n/LanguageProvider";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useT();

  return (
    <label className={`flex items-center gap-1.5 ${compact ? "" : ""}`}>
      <span className="sr-only">{t("nav.language")}</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        className="max-w-[8.5rem] cursor-pointer border border-line bg-white px-2 py-1.5 text-xs font-semibold text-ink outline-none hover:border-red focus:border-red"
        aria-label={t("nav.language")}
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeNames[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
