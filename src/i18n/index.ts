import type { Locale } from "./config";
import { en } from "./en";
import { hi } from "./hi";
import { pa } from "./pa";
import { bn } from "./bn";
import { ta } from "./ta";
import { te } from "./te";
import { mr } from "./mr";
import { gu } from "./gu";
import { kn } from "./kn";
import { ml } from "./ml";

export type Messages = typeof en;

export const dictionaries: Record<Locale, Messages> = {
  en,
  hi,
  pa,
  bn,
  ta,
  te,
  mr,
  gu,
  kn,
  ml,
};

function lookup(messages: Messages, key: string): string | undefined {
  const parts = key.split(".");
  let current: unknown = messages;
  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return typeof current === "string" ? current : undefined;
}

export function getMessage(messages: Messages, key: string): string {
  return lookup(messages, key) ?? lookup(en, key) ?? key;
}
