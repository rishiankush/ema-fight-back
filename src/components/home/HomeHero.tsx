"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { phoneHref, site, sitemapGroups, whatsappHref } from "@/content/site";
import { useT } from "@/i18n/LanguageProvider";
import { openSafetyChat } from "@/lib/chat";

export function HomeHero() {
  const { t } = useT();

  return (
    <section className="relative overflow-hidden text-white">
      <Image
        src="/assets/hero/brush.png"
        alt=""
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/25 via-black/55 to-[#7a0c12]/80" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="ml-auto max-w-xl text-right">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
            {t("hero.name")}
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
            {t("hero.tagline")}
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-5 text-base leading-7 text-white/90 sm:text-lg">{t("hero.body")}</p>
          <div className="mt-7 flex flex-wrap justify-end gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-sm bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink hover:bg-orange"
              onClick={openSafetyChat}
            >
              {t("hero.book")}
            </button>
            <Button href="/programs" variant="secondary">
              {t("hero.programs")}
            </Button>
            <Button href={whatsappHref} variant="primary">
              {t("hero.whatsapp")}
            </Button>
          </div>
        </div>

        <div className="mt-12 border border-white/20 bg-black/55 p-4 shadow-2xl backdrop-blur-sm sm:p-6">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
                {t("hero.sitemap")}
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold uppercase sm:text-3xl">
                {t("hero.exploreTitle")}
              </h2>
            </div>
            <a href={phoneHref} className="text-sm font-semibold text-gold hover:text-white">
              {t("hero.call")} {site.phoneDisplay}
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sitemapGroups.map((group) => (
              <div key={group.titleKey}>
                <h3 className="border-b border-gold/70 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-gold">
                  {t(group.titleKey)}
                </h3>
                <ul className="mt-3 space-y-2">
                  {group.links.map((link) => (
                    <li key={`${group.titleKey}-${link.href}-${link.labelKey}`}>
                      <Link href={link.href} className="group block leading-tight">
                        <span className="text-sm font-semibold text-white group-hover:text-gold">
                          {t(link.labelKey)}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-white/65">
                          {t(link.detailKey)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
