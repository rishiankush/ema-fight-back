import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { programImages } from "@/content/media";
import { getProgram, programs } from "@/content/programs";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.summary,
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  return (
    <>
      <PageHero
        eyebrow={program.audience}
        title={program.title}
        description={program.summary}
        primary={{ href: "/book?chat=1", label: "Book consultancy" }}
        secondary={{ href: "/programs", label: "All programs" }}
        image={programImages[slug] ?? "/assets/hero/combat-bg.jpg"}
      />
      <Section title="Who it's for" intro={program.who}>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl uppercase">What you will learn</h3>
            <ul className="mt-4 space-y-2 text-muted">
              {program.learn.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl uppercase">Outcomes</h3>
            <ul className="mt-4 space-y-2 text-muted">
              {program.outcomes.map((item) => (
                <li key={item} className="border-l-2 border-orange pl-3">
                  {item}
                </li>
              ))}
            </ul>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border border-line bg-paper p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-orange">Format</dt>
                <dd className="mt-2 text-sm leading-6">{program.format}</dd>
              </div>
              <div className="border border-line bg-paper p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-orange">Duration</dt>
                <dd className="mt-2 text-sm leading-6">{program.duration}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>
      {slug === "instructor-training" ? <InstructorNotes /> : null}
      <CtaBanner
        title="Capture the need. Then we talk."
        body="Start the safety chat. We will not ask you to complete a long questionnaire before speaking with EMA."
        primary={{ chat: true, labelKey: "home.ctaPrimary" }}
        secondary={{ href: "/contact", labelKey: "nav.contact" }}
      />
    </>
  );
}

function InstructorNotes() {
  const steps = [
    "Short consultancy form",
    "1-to-1 instructor interview",
    "Eligibility & level assessment",
    "Instructor training",
    "Practical + teaching assessment",
    "Certification",
    "EMA instructor network",
  ];

  return (
    <Section
      id="apply"
      eyebrow="Professionals"
      title="How instructor certification actually works"
      intro="Submitting a form does not grant certification. Training, assessment, and certification stay distinct so the credential remains meaningful."
    >
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step} className="border border-line bg-paper p-4">
            <span className="text-xs text-orange">0{index + 1}</span>
            <p className="mt-2 font-display text-lg uppercase">{step}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-3xl text-muted">
        Ideal for teachers, coaches, martial artists, trainers, HR professionals,
        community leaders, school staff, social workers, and parent volunteers. You
        learn to teach EMA’s People Safety system developed since 1984.
      </p>
      <p className="mt-4">
        <Link href="/book#instructor" className="text-sm font-semibold uppercase tracking-[0.14em] text-red">
          Book my instructor consultancy →
        </Link>
      </p>
    </Section>
  );
}
