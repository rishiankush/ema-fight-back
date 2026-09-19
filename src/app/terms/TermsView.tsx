"use client";

import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { mailHref, phoneHref, site } from "@/content/site";
import { useCopy } from "@/i18n/copy";

export function TermsView() {
  const terms = useCopy().terms;

  return (
    <>
      <PageHero title={terms.title} description={terms.description} />
      <Section>
        <div className="max-w-3xl space-y-4 leading-7 text-muted">
          {terms.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
      {terms.sections.map((section) => (
        <Section key={section.title} title={section.title}>
          <div className="max-w-3xl space-y-4 leading-7 text-muted">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>
      ))}
      <Section title={terms.contactTitle} intro={terms.contactIntro}>
        <div className="max-w-3xl space-y-2 leading-7 text-muted">
          <p>EMA Fight Back / Extreme Martial Arts (EMA)</p>
          <p>
            {terms.phone}:{" "}
            <a className="font-semibold text-red" href={phoneHref}>
              {site.phoneDisplay}
            </a>
          </p>
          <p>
            {terms.email}:{" "}
            <a className="font-semibold text-red" href={mailHref}>
              {site.email}
            </a>
          </p>
          <p>
            {terms.location}: {site.location}
          </p>
        </div>
      </Section>
    </>
  );
}
