"use client";

import { BulletList } from "@/components/ui/BulletList";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { T } from "@/i18n/LanguageProvider";
import { useCopy } from "@/i18n/copy";

export function FaqsView() {
  const { faqs, resources } = useCopy();

  return (
    <>
      <PageHero
        eyebrow={faqs.eyebrow}
        title={faqs.title}
        description={faqs.description}
        primary={{ href: "/book", label: <T k="hero.book" /> }}
        image="/assets/hero/hero-alt.png"
      />
      <Section title={faqs.common}>
        <FaqList plainTitles />
      </Section>
      <Section dark title={resources.tipsTitle}>
        <BulletList
          light
          items={resources.tips.map((tip) => (
            <>
              <strong>{tip.title}.</strong> {tip.body}
            </>
          ))}
        />
      </Section>
    </>
  );
}
