import type { Metadata } from "next";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { partners } from "@/content/site";

export const metadata: Metadata = {
  title: "Partners & Sponsors",
  description:
    "Partner with EMA Fight Back for school, healthcare, corporate CSR, and community safety programs.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners & sponsors"
        title="Build safety programs with us"
        description="Schools, hospitals, corporates, clubs, and NGOs host EMA programs. Sponsorship can underwrite community workshops without turning People Safety into a product pitch."
        primary={{ href: "/book#organization", label: "Partner enquiry" }}
        image="/assets/hero/schools.jpg"
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {partners.map((item) => (
            <article key={item.title} className="border border-line bg-paper p-6">
              <h2 className="font-display text-2xl uppercase">{item.title}</h2>
              <p className="mt-3 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <CtaBanner
        title="Propose a collaboration"
        body="Tell us who you serve and what you want to fund or host. We will follow up with a consultancy."
        primary={{ href: "/contact", labelKey: "nav.contact" }}
      />
    </>
  );
}
