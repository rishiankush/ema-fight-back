import type { Metadata } from "next";
import Link from "next/link";
import {
  EnquiryForm,
  individualFields,
  instructorFields,
  organizationFields,
} from "@/components/forms/EnquiryForm";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Book a Workshop",
  description:
    "Short consultancy forms for individuals, institutions, and instructor training. Capture the lead, then have the conversation.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Events / calendar / book"
        title="Book a workshop or consultancy"
        description="Don't complete a long form before speaking with us. Open the safety chat, or use a short form below. We will contact you to schedule the right 1-to-1 conversation."
        secondary={{ href: "/programs#workshops", label: "See workshop types" }}
        image="/assets/hero/family-safety.png"
      />
      <Section intro="Choose the form that matches you. Detailed questions — concerns, timing, budget, previous experience — belong in the consultancy.">
        <div className="grid gap-8 lg:grid-cols-2">
          <EnquiryForm
            id="individual"
            kind="personal"
            title="Personal safety consultancy"
            intro="For individuals and families. Preferred consultancy: online EMA Safety Consultancy — ₹99."
            submitLabel="Book my ₹99 safety consultancy"
            successTitle="Thank you for contacting EMA Fight Back"
            successBody="Your enquiry has been received. The next step is a personal 1-to-1 consultancy. We will contact you to schedule it and recommend the most suitable online, offline, workshop, family, or community program."
            fields={individualFields}
          />
          <EnquiryForm
            id="organization"
            kind="organisation"
            title="Schools, campuses & corporates"
            intro="A short form so we understand your organization and connect you with the right EMA consultant."
            submitLabel="Request organisation consultancy"
            successTitle="Your institutional enquiry is in"
            successBody="Thank you. An EMA representative will contact you to schedule a consultancy for your school, college, medical campus, workplace, or community group."
            fields={organizationFields}
          />
        </div>
        <div className="mt-8">
          <EnquiryForm
            id="instructor"
            kind="instructor"
            title="Instructor training — consultancy request"
            intro="Interested in becoming an EMA Fight Back Instructor? Tell us a little about yourself. Suitability is discussed in a personal consultancy — not decided by a long form."
            submitLabel="Book my instructor consultancy"
            successTitle="Thank you for your interest in EMA Fight Back Instructor Training"
            successBody="Your enquiry has been received. The next step is a personal 1-to-1 consultancy with an EMA representative. We will discuss your background, what you want to teach, training requirements, the certification pathway, and next steps. We will contact you to schedule your consultancy."
            fields={instructorFields}
          />
        </div>
        <p className="mt-6 text-sm text-muted">
          Prefer to talk now?{" "}
          <Link className="font-semibold text-red" href="/contact">
            Call, WhatsApp, or use the contact page.
          </Link>
        </p>
      </Section>
    </>
  );
}
