import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { programImages } from "@/content/media";
import { programs } from "@/content/programs";
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
        eyebrow="Programs & workshops"
        title="Choose the people you want to protect"
        description="Age groups, campuses and workplaces sit together. If you are unsure, start the chat and we will route you."
        primary={{ href: "/book?chat=1", label: "Need guidance?" }}
        image="/assets/hero/family-safety.png"
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className="group overflow-hidden border border-line bg-white hover:border-red"
            >
              <div className="relative h-48">
                <Image
                  src={programImages[program.slug] ?? "/assets/programs/class-1.jpg"}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red">
                  {program.audience}
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold uppercase">{program.title}</h2>
                <p className="mt-3 text-muted">{program.summary}</p>
              </div>
            </Link>
          ))}
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
              <h2 className="font-display text-2xl uppercase">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section dark title={<T k="programsPage.calendar" />}>
        <ul className="grid gap-4 lg:grid-cols-2">
          {events.map((event) => (
            <li key={event.title} className="border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-gold">{event.date}</p>
              <h3 className="mt-2 font-display text-2xl uppercase">{event.title}</h3>
              <p className="mt-3 text-steel">{event.detail}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
