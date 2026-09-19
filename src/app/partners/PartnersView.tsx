"use client";

import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { BulletList } from "@/components/ui/BulletList";
import { Button } from "@/components/ui/Button";
import { T } from "@/i18n/LanguageProvider";
import { useCopy } from "@/i18n/copy";

export function PartnersView() {
  const { about, partners } = useCopy();

  return (
    <>
      <PageHero
        eyebrow={partners.eyebrow}
        title={partners.title}
        description={about.partnerIntro}
        primary={{ href: "/donate", label: partners.supportUs }}
        secondary={{ href: "/book#organization", label: <T k="aboutPage.partnerCta" /> }}
        image="/assets/hero/schools.jpg"
      />
      <Section>
        <BulletList items={about.partners} />
        <p className="mt-8 font-semibold">{about.partnerAlso}</p>
        <BulletList items={about.collaborations} />
        <p className="mt-8 max-w-3xl leading-7 text-muted">{partners.csrBody}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/book#organization" variant="primary">
            {partners.csrCta}
          </Button>
          <Button href="/donate" variant="ghost">
            {partners.sponsorCta}
          </Button>
        </div>
      </Section>
      <CtaBanner
        titleKey="aboutPage.joinTitle"
        bodyKey="aboutPage.joinBody"
        primary={{ href: "/contact", labelKey: "aboutPage.contactUs" }}
        secondary={{ href: "/book", labelKey: "aboutPage.bookWorkshop" }}
      />
    </>
  );
}
