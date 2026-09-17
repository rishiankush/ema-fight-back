import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { instructors } from "@/content/media";
import { about, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: about.intro,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About EMA Fight Back"
        title="People Safety is the brand"
        description={about.intro}
        primary={{ href: "/book", label: "Talk to us" }}
        secondary={{ href: "/programs", label: "Programs" }}
        image="/assets/hero/family-safety.png"
      />
      <Section title="Why EMA is different" intro={about.difference}>
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="border border-line bg-paper p-6">
            <h3 className="font-display text-2xl uppercase">Vision</h3>
            <p className="mt-3 leading-7 text-muted">{about.vision}</p>
          </article>
          <article className="border border-line bg-paper p-6">
            <h3 className="font-display text-2xl uppercase">Mission</h3>
            <p className="mt-3 leading-7 text-muted">{about.mission}</p>
          </article>
          <article className="border border-line bg-paper p-6">
            <div className="relative mx-auto h-40 w-32">
              <Image
                src="/assets/instructors/bs-handa.png"
                alt={site.founder.name}
                fill
                className="object-contain object-bottom"
                sizes="128px"
              />
            </div>
            <h3 className="mt-3 font-display text-2xl uppercase">Founder</h3>
            <p className="mt-3 font-semibold">{site.founder.name}</p>
            <p className="text-sm text-orange">{site.founder.role}</p>
            <p className="mt-3 leading-7 text-muted">{site.founder.note}</p>
          </article>
        </div>
      </Section>
      <Section dark title="Values">
        <div className="grid gap-4 sm:grid-cols-2">
          {about.values.map((value) => (
            <article key={value.title} className="border border-white/10 p-6">
              <h3 className="font-display text-2xl uppercase text-gold">{value.title}</h3>
              <p className="mt-3 text-steel">{value.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section dark title="Instructors">
        <div className="grid gap-8 sm:grid-cols-3">
          {instructors.map((person) => (
            <article key={person.name} className="text-center">
              <div className="relative mx-auto h-56 w-44">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-contain object-bottom"
                  sizes="176px"
                />
              </div>
              <h3 className="mt-3 font-display text-xl font-bold uppercase">{person.name}</h3>
              <p className="text-sm font-semibold text-gold">{person.role}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Who we serve">
        <ul className="grid gap-3 sm:grid-cols-2">
          {about.serve.map((item) => (
            <li key={item} className="border-l-2 border-gold bg-paper px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-muted">
          The safety system has been developed since {site.founded}. We teach in{" "}
          {site.location} and run institutional programs wherever the conversation
          takes us — online, on campus, or in the workplace.
        </p>
      </Section>
      <CtaBanner
        title="Ready when you are"
        body="A short consultancy is enough for us to recommend the right next step."
        primary={{ href: "/contact", labelKey: "nav.contact" }}
        secondary={{ href: "/book?chat=1", labelKey: "nav.book" }}
      />
    </>
  );
}
