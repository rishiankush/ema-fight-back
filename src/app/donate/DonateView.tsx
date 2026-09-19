"use client";

import { BulletList } from "@/components/ui/BulletList";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { mailHref, phoneHref, site, whatsappHref } from "@/content/site";
import { useCopy } from "@/i18n/copy";

export function DonateView() {
  const donate = useCopy().donate;

  return (
    <>
      <PageHero
        eyebrow={donate.eyebrow}
        title={donate.title}
        description={donate.tagline}
        primary={{ href: "/contact", label: donate.donateNow }}
        secondary={{ href: "/book#organization", label: donate.csrPartner }}
        image="/assets/hero/schools.jpg"
      />

      <Section>
        <div className="max-w-3xl space-y-4 leading-7 text-muted">
          {donate.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section dark title={donate.whyTitle} intro={donate.whyIntro}>
        <BulletList light items={donate.why} />
        {donate.whyClose.map((paragraph) => (
          <p key={paragraph} className="mt-4 max-w-3xl text-steel">
            {paragraph}
          </p>
        ))}
      </Section>

      <Section title={donate.impactTitle}>
        <BulletList items={donate.impact.map((item) => `${item.amount} — ${item.body}`)} />
        <p className="mt-6 font-semibold">{donate.impactClose}</p>
      </Section>

      <Section dark title={donate.waysTitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {donate.ways.map((way) => (
            <article key={way.title} className="border border-white/10 p-6">
              <h3 className="font-display text-2xl uppercase text-gold">{way.title}</h3>
              <p className="mt-3 text-steel">{way.body}</p>
              <p className="mt-4">
                <Button href={way.href} variant="secondary">
                  {way.cta}
                </Button>
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section title={donate.changeTitle} intro={donate.changeIntro}>
        <BulletList items={donate.change} />
        <p className="mt-6 font-semibold">{donate.changeClose}</p>
      </Section>

      <Section dark title={donate.transparencyTitle} intro={donate.transparencyIntro}>
        <BulletList light items={donate.transparency} />
        <p className="mt-6 text-steel">{donate.transparencyClose}</p>
      </Section>

      <Section title={donate.getInTouch} intro={donate.getInTouchIntro}>
        <ul className="bullet-list">
          <li>
            {donate.call}:{" "}
            <a className="font-semibold text-red" href={phoneHref}>
              {site.phoneDisplay}
            </a>
          </li>
          <li>
            {donate.whatsapp}:{" "}
            <a className="font-semibold text-red" href={whatsappHref}>
              {site.phoneDisplay}
            </a>
          </li>
          <li>
            {donate.email}:{" "}
            <a className="font-semibold text-red" href={mailHref}>
              {site.email}
            </a>
          </li>
        </ul>
      </Section>

      <CtaBanner
        title={donate.close}
        body={donate.tagline}
        primary={{ href: "/contact", labelKey: "nav.contact" }}
        secondary={{ href: "/book#organization", labelKey: "aboutPage.partnerCta" }}
      />
    </>
  );
}
