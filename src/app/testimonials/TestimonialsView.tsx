"use client";

import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
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
      {testimonials.groups.map((group, groupIndex) => (
        <Section
          key={group.title}
          title={group.title}
          dark={groupIndex % 2 === 1}
          className={groupIndex % 2 === 0 ? "bg-[#f6f6f6]" : undefined}
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {group.items.map((item, index) => (
              <TestimonialCard
                key={`${item.headline}-${item.name}`}
                headline={item.headline}
                quote={item.quote}
                name={item.name}
                index={index}
              />
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
