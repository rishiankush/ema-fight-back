"use client";

import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { T } from "@/i18n/LanguageProvider";
import { useCopy } from "@/i18n/copy";

export function StoreView() {
  const store = useCopy().store;

  return (
    <>
      <PageHero
        eyebrow={store.eyebrow}
        title={store.title}
        description={store.description}
        primary={{ href: "/contact", label: <T k="aboutPage.contactUs" /> }}
        image="/assets/programs/poster-1.jpg"
      />
      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          {store.items.map((item) => (
            <article key={item.title} className="border border-line bg-paper p-6">
              <h2 className="font-display text-2xl uppercase">{item.title}</h2>
              <p className="mt-3 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <CtaBanner
        titleKey="home.ctaTitle"
        bodyKey="home.ctaBody"
        primary={{ href: "/contact", labelKey: "nav.contact" }}
      />
    </>
  );
}
