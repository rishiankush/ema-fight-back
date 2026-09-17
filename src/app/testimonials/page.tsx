import type { Metadata } from "next";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Feedback from schools, community groups, parents, coaches, and workplace partners of EMA Fight Back.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Evidence from real sessions"
        description="Workshops succeed when people can reuse the language the next day. These notes reflect that standard."
        image="/assets/gallery/fb.jpg"
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.quote} className="border border-line bg-paper p-6">
              <p className="text-lg leading-8">“{item.quote}”</p>
              <footer className="mt-4 text-sm">
                <span className="font-semibold">{item.name}</span>
                <span className="block text-muted">{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>
      <CtaBanner
        title="Host a session worth talking about"
        body="Book a consultancy. We’ll design a workshop your people can actually remember."
        primary={{ href: "/book?chat=1", labelKey: "nav.book" }}
      />
    </>
  );
}
