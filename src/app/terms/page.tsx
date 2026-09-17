import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms"
        description="Training, assessment, and certification are separate. Completing a form or paying a consultancy fee does not guarantee a place, a result, or instructor status."
      />
      <Section>
        <div className="max-w-3xl space-y-4 leading-7 text-muted">
          <p>
            Workshops and classes involve physical activity. Participants (or
            guardians) are responsible for disclosing relevant health constraints
            during consultancy. EMA may adapt or decline a format that is not
            safe for the group.
          </p>
          <p>
            Website copy describes typical programs. Exact duration, fees, and
            venue are confirmed after a 1-to-1 conversation.
          </p>
          <p>
            Instructor certification is granted only after EMA’s training and
            assessment requirements are met.
          </p>
        </div>
      </Section>
    </>
  );
}
