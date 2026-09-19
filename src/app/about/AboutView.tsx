"use client";

import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { BulletList } from "@/components/ui/BulletList";
import { Button } from "@/components/ui/Button";
import { T } from "@/i18n/LanguageProvider";
import { useCopy } from "@/i18n/copy";

export function AboutView() {
  const about = useCopy().about;

  return (
    <>
      <PageHero
        eyebrow={about.eyebrow}
        title={about.title}
        description={about.intro[0]}
        primary={{ href: "/book", label: <T k="aboutPage.bookWorkshop" /> }}
        secondary={{ href: "/partners", label: <T k="aboutPage.partnerCta" /> }}
        image="/assets/hero/family-safety.png"
      />

      <Section>
        <p className="max-w-3xl text-lg leading-8 text-muted">{about.intro[1]}</p>
      </Section>

      <Section title={<T k="aboutPage.visionTitle" />}>
        <p className="max-w-3xl text-lg leading-8">{about.vision}</p>
      </Section>

      <Section dark title={<T k="aboutPage.missionTitle" />}>
        <BulletList light items={about.mission} />
      </Section>

      <Section title={<T k="aboutPage.goalsTitle" />}>
        <BulletList items={about.goals} />
      </Section>

      <Section dark title={<T k="aboutPage.valuesTitle" />}>
        <BulletList
          light
          items={about.values.map((value) => `${value.title} — ${value.body}`)}
        />
      </Section>

      <Section title={<T k="aboutPage.uniqueTitle" />}>
        <BulletList items={about.unique} />
        <p className="mt-6 font-semibold">{about.uniqueTrackTitle}</p>
      </Section>

      <Section dark title={<T k="aboutPage.teachTitle" />} intro={<T k="aboutPage.teachLead" />}>
        <BulletList light items={about.teach} />
        <p className="mt-6 max-w-3xl text-steel">{about.teachClose}</p>
      </Section>

      <Section title={<T k="aboutPage.commitmentTitle" />}>
        {about.commitment.map((paragraph) => (
          <p key={paragraph} className="mt-4 max-w-3xl leading-7 text-muted first:mt-0">
            {paragraph}
          </p>
        ))}
      </Section>

      <Section dark title={<T k="aboutPage.globalTitle" />} intro={about.globalIntro}>
        <BulletList light items={about.global} />
        <p className="mt-6 max-w-3xl text-steel">{about.globalClose}</p>
      </Section>

      <Section title={<T k="aboutPage.partnerTitle" />} intro={about.partnerIntro}>
        <BulletList items={about.partners} />
        <p className="mt-8 font-semibold">{about.partnerAlso}</p>
        <BulletList items={about.collaborations} />
        <div className="mt-8">
          <Button href="/partners" variant="primary">
            <T k="aboutPage.partnerCta" />
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
