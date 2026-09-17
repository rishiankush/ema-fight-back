import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { resources } from "@/content/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "EMA Fight Back safety library: awareness, voice, bullying prevention, women’s safety, and campus programs.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Library"
        title="Safety resources you can use today"
        description="Short, practical notes — the same ideas we teach in workshops. For videos, downloads, and school packs, start a consultancy."
        primary={{ href: "/book", label: "Get a resource pack" }}
        image="/assets/programs/info-card.png"
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {resources.map((item) => (
            <article key={item.title} className="border border-line bg-paper p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-orange">
                {item.category}
              </p>
              <h2 className="mt-2 font-display text-2xl uppercase">{item.title}</h2>
              <p className="mt-3 leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
