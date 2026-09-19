"use client";

import Link from "next/link";
import {
  EnquiryForm,
  individualFields,
  instructorFields,
  organizationFields,
} from "@/components/forms/EnquiryForm";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { useCopy } from "@/i18n/copy";

export function BookView() {
  const book = useCopy().book;

  return (
    <>
      <PageHero
        eyebrow={book.eyebrow}
        title={book.title}
        description={book.description}
        secondary={{ href: "/programs#workshops", label: book.seeWorkshops }}
        image="/assets/hero/family-safety.png"
      />
      <Section intro={book.intro}>
        <div className="grid gap-8 lg:grid-cols-2">
          <EnquiryForm
            id="individual"
            kind="personal"
            title={book.personalTitle}
            intro={book.personalIntro}
            submitLabel={book.personalSubmit}
            successTitle={book.personalSuccessTitle}
            successBody={book.personalSuccessBody}
            fields={individualFields}
          />
          <EnquiryForm
            id="organization"
            kind="organisation"
            title={book.orgTitle}
            intro={book.orgIntro}
            submitLabel={book.orgSubmit}
            successTitle={book.orgSuccessTitle}
            successBody={book.orgSuccessBody}
            fields={organizationFields}
          />
        </div>
        <div className="mt-8">
          <EnquiryForm
            id="instructor"
            kind="instructor"
            title={book.instructorTitle}
            intro={book.instructorIntro}
            submitLabel={book.instructorSubmit}
            successTitle={book.instructorSuccessTitle}
            successBody={book.instructorSuccessBody}
            fields={instructorFields}
          />
        </div>
        <p className="mt-6 text-sm text-muted">
          {book.preferTalk}{" "}
          <Link className="font-semibold text-red" href="/contact">
            {book.contactLink}
          </Link>
        </p>
      </Section>
    </>
  );
}
