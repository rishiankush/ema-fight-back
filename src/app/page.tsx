import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Section } from "@/components/ui/Section";
import { FaqList } from "@/components/ui/FaqList";
import { gallery, instructors, programImages } from "@/content/media";
import { benefits, stats } from "@/content/site";
import { programs, programListingKeys } from "@/content/programs";
import { testimonials } from "@/content/testimonials";
import { T } from "@/i18n/LanguageProvider";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <Section
        eyebrow={<T k="home.why" />}
        title={<T k="home.whyTitle" />}
        intro={<T k="home.whyIntro" />}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.titleKey} className="border border-line bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-bold uppercase">
                <T k={benefit.titleKey} />
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                <T k={benefit.bodyKey} />
              </p>
            </article>
          ))}
        </div>
      </Section>

      <section
        className="relative overflow-hidden bg-ink px-4 py-12 text-white sm:px-6"
        style={{ backgroundImage: "url(/assets/ui/counter-bg.png)", backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <dl className="relative mx-auto grid max-w-6xl grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.labelKey}>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                <T k={stat.labelKey} />
              </dt>
              <dd className="mt-2 font-display text-3xl font-extrabold uppercase">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section
        eyebrow={<T k="home.programs" />}
        title={<T k="home.programsTitle" />}
        intro={<T k="home.programsIntro" />}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className="group overflow-hidden border border-line bg-white shadow-sm transition hover:border-red"
            >
              <div className="relative h-44">
                <Image
                  src={programImages[program.slug] ?? "/assets/programs/class-1.jpg"}
                  alt={program.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red">
                  {program.audience}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold uppercase group-hover:text-red">
                  <T k={programListingKeys[program.slug].title} />
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  <T k={programListingKeys[program.slug].summary} />
                </p>
                <span className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.16em] text-ink">
                  <T k="home.viewProgram" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section dark eyebrow={<T k="home.instructors" />} title={<T k="home.instructorsTitle" />}>
        <div className="grid gap-8 sm:grid-cols-3">
          {instructors.map((person) => (
            <article key={person.name} className="text-center">
              <div className="relative mx-auto h-64 w-52">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-contain object-bottom"
                  sizes="208px"
                />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold uppercase">{person.name}</h3>
              <p className="text-sm font-semibold text-gold">
                <T k={person.roleKey} />
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                <T k={person.bioKey} />
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow={<T k="home.gallery" />} title={<T k="home.galleryTitle" />}>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.map((src) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden">
              <Image src={src} alt="EMA Fight Back training" fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
      </Section>

      <Section dark eyebrow={<T k="home.trust" />} title={<T k="home.trustTitle" />}>
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((item) => (
            <blockquote key={item.name} className="border border-white/10 p-6">
              <p className="leading-7 text-white">“{item.quote}”</p>
              <footer className="mt-4 text-sm text-gold">
                {item.name}
                <span className="block text-white/55">{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-6">
          <Link href="/testimonials" className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            <T k="home.allTestimonials" />
          </Link>
        </p>
      </Section>

      <Section
        eyebrow={<T k="home.questions" />}
        title={<T k="home.questionsTitle" />}
        intro={<T k="home.questionsIntro" />}
      >
        <FaqList />
      </Section>

      <CtaBanner
        titleKey="home.ctaTitle"
        bodyKey="home.ctaBody"
        primary={{ chat: true, labelKey: "home.ctaPrimary" }}
        secondary={{ href: "/contact", labelKey: "home.ctaSecondary" }}
      />
    </>
  );
}
