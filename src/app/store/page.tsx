import type { Metadata } from "next";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { storeItems } from "@/content/site";

export const metadata: Metadata = {
  title: "Store",
  description:
    "EMA Fight Back store: workshop kits, merchandise, and specialty equipment. People Safety remains the brand.",
};

export default function StorePage() {
  return (
    <>
      <PageHero
        eyebrow="Store"
        title="Kits, gear, and teaching tools"
        description="Products support the work. They are not the identity of EMA Fight Back. Enquire for current availability and batches."
        image="/assets/programs/poster-1.jpg"
      />
      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {storeItems.map((item) => (
            <article key={item.title} className="border border-line bg-paper p-6">
              <h2 className="font-display text-2xl uppercase">{item.title}</h2>
              <p className="mt-3 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <CtaBanner
        title="Need something specific?"
        body="WhatsApp the team with what you are looking for. We’ll confirm stock, shipping, and workshop kits."
        primary={{ href: "/contact", labelKey: "nav.contact" }}
      />
    </>
  );
}
