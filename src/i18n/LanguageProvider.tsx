"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { dictionaries, getMessage } from "@/i18n";
import { defaultLocale, LOCALE_COOKIE, type Locale } from "@/i18n/config";
import { isLocale, readStoredLocale, subscribeLocale, writeStoredLocale } from "@/i18n/localeStore";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const fallback = initialLocale ?? defaultLocale;
  const locale = useSyncExternalStore(
    subscribeLocale,
    () => readStoredLocale(fallback),
    () => fallback,
  );

  const setLocale = useCallback((next: Locale) => {
    writeStoredLocale(next);
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem(LOCALE_COOKIE);
    if (isLocale(stored)) writeStoredLocale(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key: string) => getMessage(dictionaries[locale], key),
    }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useT() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useT must be used within LanguageProvider");
  }
  return context;
}

export function T({ k }: { k: string }) {
  const { t } = useT();
  return <>{t(k)}</>;
}
