import { defaultLocale, locales, type Locale, LOCALE_COOKIE } from "@/i18n/config";

const listeners = new Set<() => void>();

export function isLocale(value: string | null | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function readLocaleCookie(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function readStoredLocale(fallback: Locale = defaultLocale): Locale {
  if (typeof window === "undefined") return fallback;
  const stored = window.localStorage.getItem(LOCALE_COOKIE);
  return isLocale(stored) ? stored : fallback;
}

export function writeStoredLocale(next: Locale) {
  window.localStorage.setItem(LOCALE_COOKIE, next);
  const secure = window.location.protocol === "https:" ? ";secure" : "";
  document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;samesite=lax${secure}`;
  document.documentElement.lang = next;
  listeners.forEach((listener) => listener());
}

export function subscribeLocale(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
