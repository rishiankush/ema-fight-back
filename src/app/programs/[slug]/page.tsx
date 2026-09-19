import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProgramDetail } from "@/components/programs/ProgramDetail";
import { BulletList } from "@/components/ui/BulletList";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { programImages } from "@/content/media";
import { getProgram, programListingKeys, programs } from "@/content/programs";
import { getProgramPage } from "@/content/programPages";
import { T } from "@/i18n/LanguageProvider";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  const page = getProgramPage(slug);
  return {
    title: page?.title ?? program.title,
    description: page?.tagline ?? program.summary,
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();
  const page = getProgramPage(slug);
  const keys = programListingKeys[slug];

  return (
    <>
      <PageHero
        eyebrow={<T k={keys.audience} />}
        title={<T k={keys.title} />}
        description={<T k={keys.summary} />}
        primary={{ href: "/book", label: <T k="program.bookConsultancy" /> }}
        secondary={{ href: "/programs", label: <T k="program.allPrograms" /> }}
        image={programImages[slug] ?? "/assets/hero/combat-bg.jpg"}
      />
      {page ? <ProgramDetail slug={slug} /> : <SimpleProgramBody program={program} slug={slug} />}
    </>
  );
}

function SimpleProgramBody({
  program,
  slug,
}: {
  program: NonNullable<ReturnType<typeof getProgram>>;
  slug: string;
}) {
  return (
    <>
      <Section title={<T k="program.who" />} intro={program.who}>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl uppercase">
              <T k="program.learn" />
            </h3>
            <BulletList items={program.learn} />
          </div>
          <div>
            <h3 className="font-display text-2xl uppercase">
              <T k="program.outcomes" />
            </h3>
            <BulletList items={program.outcomes} />
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border border-line bg-paper p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-orange">
                  <T k="program.format" />
                </dt>
                <dd className="mt-2 text-sm leading-6">{program.format}</dd>
              </div>
              <div className="border border-line bg-paper p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-orange">
                  <T k="program.duration" />
                </dt>
                <dd className="mt-2 text-sm leading-6">{program.duration}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>
      {slug === "instructor-training" ? <InstructorNotes /> : null}
      <CtaBanner
        titleKey="home.ctaTitle"
        bodyKey="home.ctaBody"
        primary={{ chat: true, labelKey: "home.ctaPrimary" }}
        secondary={{ href: "/contact", labelKey: "nav.contact" }}
      />
    </>
  );
}

const instructorSteps = [
  "program.instructorStep1",
  "program.instructorStep2",
  "program.instructorStep3",
  "program.instructorStep4",
  "program.instructorStep5",
  "program.instructorStep6",
  "program.instructorStep7",
] as const;

function InstructorNotes() {
  return (
    <Section
      id="apply"
      eyebrow={<T k="program.professionals" />}
      title={<T k="program.instructorHowTitle" />}
      intro={<T k="program.instructorHowIntro" />}
    >
      <BulletList items={instructorSteps.map((step) => <T key={step} k={step} />)} />
      <p className="mt-8 max-w-3xl text-muted">
        <T k="program.instructorWho" />
      </p>
      <p className="mt-4">
        <Link href="/book#instructor" className="text-sm font-semibold uppercase tracking-[0.14em] text-red">
          <T k="program.instructorBook" />
        </Link>
      </p>
    </Section>
  );
}
