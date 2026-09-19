"use client";

import type { Locale } from "@/i18n/config";
import { useT } from "@/i18n/LanguageProvider";
import { enCopy, type SiteCopy } from "./en";
import { hiCopy } from "./hi";
import { paCopy } from "./pa";
import { bnCopy } from "./bn";
import { taCopy } from "./ta";
import { teCopy } from "./te";
import { mrCopy } from "./mr";
import { guCopy } from "./gu";
import { knCopy } from "./kn";
import { mlCopy } from "./ml";

export type { SiteCopy };

const copies: Record<Locale, SiteCopy> = {
  en: enCopy,
  hi: hiCopy,
  pa: paCopy,
  bn: bnCopy,
  ta: taCopy,
  te: teCopy,
  mr: mrCopy,
  gu: guCopy,
  kn: knCopy,
  ml: mlCopy,
};

export function getCopy(locale: Locale): SiteCopy {
  return copies[locale] ?? enCopy;
}

export function useCopy(): SiteCopy {
  const { locale } = useT();
  return getCopy(locale);
}
