"use client";

import { BulletList } from "@/components/ui/BulletList";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { mailHref, phoneHref } from "@/content/site";
import { T } from "@/i18n/LanguageProvider";
import { useCopy } from "@/i18n/copy";

export function ResourcesView() {
  const resources = useCopy().resources;

  return (
    <>
      <PageHero
        eyebrow={resources.eyebrow}
        title={resources.title}
        description={resources.description}
        primary={{ href: "/book", label: <T k="program.requestWorkshop" /> }}
        secondary={{ href: phoneHref, label: resources.callNow }}
        image="/assets/programs/info-card.png"
      />

      <Section title={resources.articlesTitle} intro={resources.articlesIntro}>
        <div className="grid gap-4 md:grid-cols-2">
          {resources.articles.map((item) => (
            <article key={item.title} className="border border-line bg-paper p-6">
              <h2 className="font-display text-2xl uppercase">{item.title}</h2>
              <p className="mt-3 text-sm font-semibold text-orange">{item.intro}</p>
              <BulletList items={item.items} />
            </article>
          ))}
        </div>
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

      <Section title={resources.questionTitle} intro={resources.questionIntro}>
        <a className="text-sm font-semibold uppercase tracking-[0.14em] text-red" href={mailHref}>
          {resources.ask}
        </a>
      </Section>

      <CtaBanner
        title={resources.workshopTitle}
        body={resources.workshopBody}
        primary={{ href: "/book", labelKey: "program.requestWorkshop" }}
        secondary={{ href: "/contact", labelKey: "nav.contact" }}
      />
    </>
  );
}
