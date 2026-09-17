import Link from "next/link";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FaqList } from "@/components/ui/FaqList";
import { Section } from "@/components/ui/Section";
import type { ProgramPageContent } from "@/content/programPages";

function BulletList({ items, light = false }: { items: string[]; light?: boolean }) {
  if (items.length === 0) return null;
  return (
    <ul className={`mt-4 space-y-2 ${light ? "text-white/80" : "text-muted"}`}>
      {items.map((item) => (
        <li key={item} className="border-l-2 border-gold pl-3">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProgramDetail({ page }: { page: ProgramPageContent }) {
  const toc = [
    { href: "#overview", label: "Overview" },
    { href: "#why", label: page.why.title },
    { href: "#learn", label: page.learn.title },
    ...page.extraSections.map((section) => ({ href: `#${section.id}`, label: section.title })),
    { href: "#format", label: page.format.title },
    { href: "#outcomes", label: page.outcomes.title },
    { href: "#faqs", label: "FAQs" },
    { href: "#book", label: page.book.title },
  ];

  return (
    <>
      <div className="border-b border-line bg-white">
        <nav
          aria-label="On this page"
          className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 text-sm sm:px-6"
        >
          {toc.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 px-2 py-1 text-muted hover:text-red"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <Section id="overview" title="Overview">
        <div className="max-w-3xl space-y-4 text-base leading-7 text-muted sm:text-lg">
          {page.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="why" title={page.why.title} dark>
        <p className="text-lg text-cream">{page.why.intro}</p>
        <BulletList items={page.why.items} light />
        {page.why.close ? <p className="mt-6 max-w-3xl text-steel">{page.why.close}</p> : null}
      </Section>

      <Section id="learn" title={page.learn.title}>
        <div className="grid gap-6 md:grid-cols-2">
          {page.learn.groups.map((group) => (
            <article key={group.title} className="border border-line bg-white p-5">
              <h3 className="font-display text-xl font-bold uppercase">{group.title}</h3>
              {group.intro ? <p className="mt-2 text-sm text-muted">{group.intro}</p> : null}
              <BulletList items={group.items} />
            </article>
          ))}
        </div>
        {page.learn.note ? <p className="mt-8 max-w-3xl text-muted">{page.learn.note}</p> : null}
      </Section>

      {page.extraSections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title}>
          {section.intro ? <p className="max-w-3xl text-lg text-muted">{section.intro}</p> : null}
          {section.items ? <BulletList items={section.items} /> : null}
          {section.groups?.map((group) => (
            <div key={group.title} className="mt-8">
              <h3 className="font-display text-xl font-bold uppercase">{group.title}</h3>
              <BulletList items={group.items} />
            </div>
          ))}
          {section.close ? <p className="mt-6 max-w-3xl text-muted">{section.close}</p> : null}
        </Section>
      ))}

      <Section id="format" title={page.format.title} dark>
        <p className="text-lg text-cream">{page.format.intro}</p>
        <BulletList items={page.format.options} light />
        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="border border-white/15 bg-ink-soft p-4">
            <dt className="text-xs uppercase tracking-[0.16em] text-gold">Duration</dt>
            <dd className="mt-2">{page.format.duration}</dd>
          </div>
          <div className="border border-white/15 bg-ink-soft p-4">
            <dt className="text-xs uppercase tracking-[0.16em] text-gold">Group size</dt>
            <dd className="mt-2">{page.format.groupSize}</dd>
          </div>
        </dl>
      </Section>

      <Section id="outcomes" title={page.outcomes.title} intro={page.outcomes.intro}>
        <BulletList items={page.outcomes.items} />
        {page.outcomes.note ? (
          <p className="mt-6 max-w-3xl text-lg text-muted">{page.outcomes.note}</p>
        ) : null}
      </Section>

      <Section id="faqs" title="FAQs">
        <FaqList items={page.faqs} plainTitles />
      </Section>

      <Section id="book" title={page.book.title} intro={page.book.intro}>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {page.book.venues.map((venue) => (
            <li key={venue} className="border border-line bg-white px-4 py-5 font-display text-xl uppercase">
              {venue}
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link href="/book?chat=1" className="text-sm font-semibold uppercase tracking-[0.14em] text-red">
            Request a workshop →
          </Link>
        </p>
      </Section>

      <CtaBanner
        title="Capture the need. Then we talk."
        body="Start the safety chat. We will not ask you to complete a long questionnaire before speaking with EMA."
        primary={{ chat: true, labelKey: "home.ctaPrimary" }}
        secondary={{ href: "/contact", labelKey: "nav.contact" }}
      />
    </>
  );
}
