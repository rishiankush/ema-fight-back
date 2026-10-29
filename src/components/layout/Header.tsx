"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { nav, phoneHref, site } from "@/content/site";
import { trackLink } from "@/lib/analytics";
import { useT } from "@/i18n/LanguageProvider";

type Item = (typeof nav.primary)[number];

function isActive(pathname: string, href: string) {
  const clean = href.split("#")[0];
  if (clean === "/") return pathname === "/";
  return pathname === clean || pathname.startsWith(`${clean}/`);
}

export function Header() {
  const pathname = usePathname();
  const { t } = useT();
  const [menuState, setMenuState] = useState({ pathname, open: false, expanded: null as string | null });
  const open = menuState.pathname === pathname && menuState.open;
  const expanded = menuState.pathname === pathname ? menuState.expanded : null;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white text-ink shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-2 sm:px-5">
        <Link href="/" className="shrink-0">
          <Logo onLight />
        </Link>

        <a
          href={phoneHref}
          onClick={() => trackLink(phoneHref)}
          className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-ink hover:text-red lg:flex"
        >
          <span className="rounded-sm bg-red px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {t("nav.callBooking")}
          </span>
          <span className="font-extrabold">{site.phoneDisplay}</span>
        </a>

        <nav className="ml-auto hidden items-center gap-0 xl:flex" aria-label="Main">
          {nav.primary.map((item) => (
            <DesktopItem key={`${item.href}-${pathname}`} item={item} pathname={pathname} t={t} />
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-3">
          <LanguageSwitcher />
          <div className="hidden lg:block">
            <Button href={nav.cta.href} variant="gold" className="whitespace-nowrap">
              {t(nav.cta.labelKey)}
            </Button>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-line xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() =>
              setMenuState((current) => {
                const samePath = current.pathname === pathname;
                return {
                  pathname,
                  open: !(samePath && current.open),
                  expanded: samePath ? current.expanded : null,
                };
              })
            }
          >
            <span className="sr-only">{open ? t("nav.closeMenu") : t("nav.openMenu")}</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span className={`h-0.5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-white px-4 py-4 xl:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.primary.map((item) => {
              const children = "children" in item ? item.children : undefined;
              if (!children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-3 text-sm font-semibold ${isActive(pathname, item.href) ? "text-red" : ""}`}
                    onClick={() => setMenuState({ pathname, open: false, expanded: null })}
                  >
                    {t(item.labelKey)}
                  </Link>
                );
              }
              const isExpanded = expanded === item.labelKey;
              return (
                <div key={item.labelKey}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-semibold"
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setMenuState({ pathname, open: true, expanded: isExpanded ? null : item.labelKey })
                    }
                  >
                    {t(item.labelKey)}
                    <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
                  </button>
                  {isExpanded
                    ? children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-6 py-2 text-sm text-muted"
                          onClick={() => {
                            setMenuState({ pathname, open: false, expanded: null });
                          }}
                        >
                          {t(child.labelKey)}
                        </Link>
                      ))
                    : null}
                </div>
              );
            })}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button href={nav.cta.href} variant="gold">
              {t(nav.cta.labelKey)}
            </Button>
            <a href={phoneHref} onClick={() => trackLink(phoneHref)} className="px-3 py-2 text-sm font-semibold text-red">
              {t("nav.callBooking")} {site.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function DesktopItem({
  item,
  pathname,
  t,
}: {
  item: Item;
  pathname: string;
  t: (key: string) => string;
}) {
  const [menuState, setMenuState] = useState({ pathname, open: false });
  const menuOpen = menuState.pathname === pathname && menuState.open;
  const children = "children" in item ? item.children : undefined;

  if (!children) {
    return (
      <Link
        href={item.href}
        className={`whitespace-nowrap px-2.5 py-2 text-[13px] font-semibold leading-none hover:text-red ${isActive(pathname, item.href) ? "text-red" : ""}`}
      >
        {t(item.labelKey)}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setMenuState({ pathname, open: true })}
      onMouseLeave={() => setMenuState({ pathname, open: false })}
    >
      <Link
        href={item.href}
        className={`inline-flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-[13px] font-semibold leading-none hover:text-red ${isActive(pathname, item.href) ? "text-red" : ""}`}
      >
        {t(item.labelKey)}
        <span aria-hidden="true" className="text-[10px]">
          ▾
        </span>
      </Link>
      <div
        className={`absolute left-0 top-full z-20 min-w-56 border border-line bg-white py-2 shadow-xl transition ${
          menuOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        {children.map((child) => (
          <Link
            key={`${child.href}-${child.labelKey}`}
            href={child.href}
            className="block px-4 py-2 text-sm text-ink hover:bg-zinc-50 hover:text-red"
            onClick={() => setMenuState({ pathname, open: false })}
          >
            {t(child.labelKey)}
          </Link>
        ))}
      </div>
    </div>
  );
}
