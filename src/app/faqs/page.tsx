import type { Metadata } from "next";
import { FaqList } from "@/components/ui/FaqList";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Common questions about EMA Fight Back programs, consultancies, instructor certification, and workshops.",
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Straight answers"
        description="If your question is about fit, timing, or a specific group, a consultancy is faster than a long FAQ."
        primary={{ href: "/book", label: "Book consultancy" }}
        image="/assets/hero/hero-alt.png"
      />
      <Section>
        <FaqList />
      </Section>
    </>
  );
}
