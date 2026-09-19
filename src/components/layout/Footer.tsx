"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { mailHref, phoneHref, site, sitemapGroups, whatsappHref } from "@/content/site";
import { useT } from "@/i18n/LanguageProvider";

export function Footer() {
  const { t } = useT();

  return (
    <footer className="relative overflow-hidden bg-ink-soft text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{ backgroundImage: "url(/assets/ui/footer-overlay.png)", backgroundSize: "cover" }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo compact />
          <p className="mt-4 text-sm leading-6 text-white/65">{t("common.description")}</p>
          <p className="mt-4 text-sm font-semibold text-gold">{t("common.philosophy")}</p>
        </div>
        {sitemapGroups.map((group) => (
          <div key={group.titleKey}>
            <h2 className="font-display text-lg font-bold uppercase">{t(group.titleKey)}</h2>
            <ul className="mt-4 grid gap-2 text-sm">
              {group.links.map((link) => (
                <li key={`${group.titleKey}-${link.href}-${link.labelKey}`}>
                  <Link
                    className="block border border-white/20 px-3 py-2 text-white/80 underline decoration-white/40 underline-offset-4 hover:border-gold hover:text-gold hover:decoration-gold"
                    href={link.href}
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative border-t border-white/10 px-4 py-5 text-xs text-white/55 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {t("common.copyright")} {site.founded}.
          </p>
          <p className="flex flex-wrap gap-4">
            <a className="hover:text-gold" href={phoneHref}>
              {site.phoneDisplay}
            </a>
            <a className="hover:text-gold" href={whatsappHref}>
              {t("fab.whatsapp")}
            </a>
            <a className="hover:text-gold" href={mailHref}>
              {site.email}
            </a>
            <Link className="hover:text-gold" href="/privacy">
              {t("common.privacy")}
            </Link>
            <Link className="hover:text-gold" href="/terms">
              {t("common.terms")}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
