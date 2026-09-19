"use client";

import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { mailHref, phoneHref, site } from "@/content/site";
import { useCopy } from "@/i18n/copy";

export function PrivacyView() {
  const privacy = useCopy().privacy;

  return (
    <>
      <PageHero title={privacy.title} description={privacy.description} />
      {privacy.sections.map((section) => (
        <Section key={section.title} title={section.title}>
          <div className="max-w-3xl space-y-4 leading-7 text-muted">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>
      ))}
      <Section title={privacy.contactTitle} intro={privacy.contactIntro}>
        <div className="max-w-3xl space-y-2 leading-7 text-muted">
          <p>EMA Fight Back</p>
          <p>
            {privacy.phone}:{" "}
            <a className="font-semibold text-red" href={phoneHref}>
              {site.phoneDisplay}
            </a>
          </p>
          <p>
            {privacy.email}:{" "}
            <a className="font-semibold text-red" href={mailHref}>
              {site.email}
            </a>
          </p>
          <p>
            {privacy.location}: {site.location}
          </p>
        </div>
      </Section>
    </>
  );
}
