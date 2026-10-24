"use client";

import Image from "next/image";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { BulletList } from "@/components/ui/BulletList";
import { aboutPage } from "@/content/aboutPage";
import { T } from "@/i18n/LanguageProvider";
import { useCopy } from "@/i18n/copy";

export function FounderView() {
  const about = useCopy().about;
  const founder = about.founder ?? aboutPage.founder;

  return (
    <>
      <PageHero
        eyebrow={founder.eyebrow}
        title={founder.name}
        description={founder.rank}
        primary={{ href: "/book", label: <T k="aboutPage.bookWorkshop" /> }}
        secondary={{ href: "/about", label: <T k="nav.about" /> }}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
          <div className="relative aspect-[3/4] overflow-hidden border border-line bg-[#f3f3f3]">
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 280px"
            />
          </div>
          <div>
            <p className="max-w-3xl text-lg leading-8">{founder.rank}</p>
            <p className="mt-2 max-w-3xl text-muted">{founder.role}</p>
            <ul className="mt-6 bullet-list">
              {founder.honors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm">
              {founder.phones.map((phone, index) => (
                <span key={phone}>
                  {index > 0 ? <span className="mx-2 text-muted">·</span> : null}
                  <a className="font-semibold text-red" href={`tel:+91${phone.replace(/\D/g, "")}`}>
                    {phone}
                  </a>
                </span>
              ))}
              <span className="mx-2 text-muted">·</span>
              <a className="font-semibold text-red" href={`mailto:${founder.email}`}>
                {founder.email}
              </a>
            </p>
          </div>
        </div>
      </Section>

      <Section dark title={founder.journeyTitle}>
        {founder.journey.map((paragraph) => (
          <p key={paragraph} className="mt-4 max-w-3xl text-lg leading-8 text-white/90 first:mt-0">
            {paragraph}
          </p>
        ))}
        <h3 className="mt-10 font-display text-2xl font-bold uppercase text-gold">{founder.learningTitle}</h3>
        {founder.learning.map((paragraph) => (
          <p key={paragraph} className="mt-4 max-w-3xl leading-7 text-white/90">
            {paragraph}
          </p>
        ))}
        <h3 className="mt-10 font-display text-2xl font-bold uppercase text-gold">{founder.missionTitle}</h3>
        {founder.mission.map((paragraph) => (
          <p key={paragraph} className="mt-4 max-w-3xl leading-7 text-white/90">
            {paragraph}
          </p>
        ))}
        <p className="mt-8 max-w-3xl text-lg font-semibold text-cream">{founder.close}</p>
      </Section>

      <Section title={founder.qualificationsTitle}>
        <BulletList items={founder.qualifications} />
        <blockquote className="mt-10 max-w-3xl border border-line bg-paper p-6">
          <p className="font-display text-xl leading-8">“{founder.quote}”</p>
          <footer className="mt-4 text-sm font-semibold text-muted">— {founder.quoteBy}</footer>
        </blockquote>
      </Section>

      <Section dark title={founder.experienceTitle}>
        <BulletList light items={founder.experience} />
      </Section>

      <Section title={founder.trainingTitle}>
        <BulletList items={founder.training} />
      </Section>

      <Section dark title={founder.seminarsTitle}>
        <div className="grid gap-8 md:grid-cols-2">
          {founder.seminarGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-xl font-bold uppercase text-gold">{group.title}</h3>
              <BulletList light items={group.items} />
            </div>
          ))}
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
