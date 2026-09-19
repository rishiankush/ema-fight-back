import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { programImages } from "@/content/media";
import { programs, programListingKeys } from "@/content/programs";
import { events, workshopTypes } from "@/content/site";
import { T } from "@/i18n/LanguageProvider";

export const metadata: Metadata = {
  title: "Programs & Workshops",
  description:
    "People Safety programs for kids, juniors, teens, adults, women, seniors, special groups, schools, corporates, and instructor training.",
};

export default function ProgramsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow={<T k="programsPage.eyebrow" />}
        title={<T k="programsPage.title" />}
        description={<T k="programsPage.description" />}
        primary={{ href: "/book", label: <T k="hero.book" /> }}
        image="/assets/hero/family-safety.png"
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {programs.map((program) => {
            const keys = programListingKeys[program.slug];
            return (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="group overflow-hidden border border-line bg-white hover:border-red"
              >
                <div className="relative aspect-[4/3] bg-[#f3f3f3]">
                  <Image
                    src={programImages[program.slug] ?? "/assets/programs/class-1.jpg"}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red">
                    <T k={keys.audience} />
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold uppercase">
                    <T k={keys.title} />
                  </h2>
                  <p className="mt-3 text-muted">
                    <T k={keys.summary} />
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
      <Section
        id="workshops"
        eyebrow={<T k="programsPage.eyebrow" />}
        title={<T k="programsPage.workshopsTitle" />}
        intro={<T k="programsPage.workshopsIntro" />}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workshopTypes.map((item) => (
            <Link
              key={item.id}
              id={item.id}
              href={item.href}
              className="border border-line bg-paper p-6 hover:border-orange"
            >
              <h2 className="font-display text-2xl uppercase">
                <T k={item.titleKey} />
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                <T k={item.bodyKey} />
              </p>
            </Link>
          ))}
        </div>
      </Section>
      <Section dark title={<T k="programsPage.calendar" />}>
        <ul className="grid gap-4 lg:grid-cols-2">
          {events.map((event) => (
            <li key={event.titleKey} className="border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-gold">
                <T k={event.dateKey} />
              </p>
              <h3 className="mt-2 font-display text-2xl uppercase">
                <T k={event.titleKey} />
              </h3>
              <p className="mt-3 text-steel">
                <T k={event.detailKey} />
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
