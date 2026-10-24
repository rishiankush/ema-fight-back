type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: string, name: string, params?: EventParams) => void;
  }
}

export function trackEvent(name: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

export function trackLink(href: string) {
  if (href.startsWith("tel:")) {
    trackEvent("click_call", { link: href });
    return;
  }
  if (href.includes("wa.me") || href.includes("whatsapp")) {
    trackEvent("click_whatsapp", { link: href });
    return;
  }
  if (href === "/book" || href.startsWith("/book")) {
    trackEvent("click_book", { link: href });
  }
}
