"use client";

import { Button } from "@/components/ui/Button";
import { useT } from "@/i18n/LanguageProvider";
import { openSafetyChat } from "@/lib/chat";

type CtaBannerProps = {
  titleKey?: string;
  bodyKey?: string;
  title?: string;
  body?: string;
  primary?: { href?: string; labelKey: string; chat?: boolean };
  secondary?: { href: string; labelKey: string };
};

export function CtaBanner({
  titleKey,
  bodyKey,
  title,
  body,
  primary,
  secondary,
}: CtaBannerProps) {
  const { t } = useT();
  const heading = titleKey ? t(titleKey) : title;
  const copy = bodyKey ? t(bodyKey) : body;

  return (
    <section className="relative overflow-hidden bg-ink px-4 py-14 text-white sm:px-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ backgroundImage: "url(/assets/ui/footer-overlay.png)", backgroundSize: "cover" }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold uppercase sm:text-4xl">{heading}</h2>
          <p className="mt-3 text-white/70">{copy}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {primary?.chat ? (
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-sm bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink hover:bg-orange"
              onClick={openSafetyChat}
            >
              {t(primary.labelKey)}
            </button>
          ) : primary?.href ? (
            <Button href={primary.href} variant="gold">
              {t(primary.labelKey)}
            </Button>
          ) : null}
          {secondary ? (
            <Button href={secondary.href} variant="secondary">
              {t(secondary.labelKey)}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
