"use client";

import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { useCopy } from "@/i18n/copy";

export function TestimonialsView() {
  const testimonials = useCopy().testimonials;

  return (
    <>
      <PageHero
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
        description={testimonials.description}
        image="/assets/gallery/fb.jpg"
      />
      {testimonials.groups.map((group) => (
        <Section key={group.title} title={group.title}>
          <div className="grid gap-4 md:grid-cols-2">
            {group.items.map((item) => (
              <blockquote key={`${item.headline}-${item.name}`} className="border border-line bg-paper p-6">
                <p className="font-display text-xl uppercase">{item.headline}</p>
                <p className="mt-3 text-lg leading-8">“{item.quote}”</p>
                <footer className="mt-4 text-sm font-semibold text-muted">— {item.name}</footer>
              </blockquote>
            ))}
          </div>
        </Section>
      ))}
      <CtaBanner
        titleKey="home.ctaTitle"
        bodyKey="home.ctaBody"
        primary={{ href: "/book", labelKey: "home.ctaPrimary" }}
        secondary={{ href: "/contact", labelKey: "home.ctaSecondary" }}
      />
    </>
  );
}
