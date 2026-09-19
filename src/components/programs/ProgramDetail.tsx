import Link from "next/link";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FaqList } from "@/components/ui/FaqList";
import { Section } from "@/components/ui/Section";
import type { ProgramPageContent } from "@/content/programPages";
import { T } from "@/i18n/LanguageProvider";

function BulletList({ items, light = false }: { items: string[]; light?: boolean }) {
  if (items.length === 0) return null;
  return (
    <ul
      className={`mt-4 list-outside list-disc space-y-2 pl-6 ${light ? "text-white/85 marker:text-gold" : "text-muted marker:text-red"}`}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ProgramDetail({ page }: { page: ProgramPageContent }) {
  const toc = [
    { href: "#overview", label: "Overview", labelKey: "program.overview" as const },
    { href: "#why", label: page.why.title },
    { href: "#learn", label: page.learn.title },
    ...page.extraSections.map((section) => ({ href: `#${section.id}`, label: section.title })),
    { href: "#format", label: page.format.title },
    { href: "#outcomes", label: page.outcomes.title },
    { href: "#faqs", label: "FAQs", labelKey: "program.faqs" as const },
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
              className="shrink-0 border-b border-transparent px-2 py-1 text-muted hover:border-red hover:text-red"
            >
              {"labelKey" in item && item.labelKey ? <T k={item.labelKey} /> : item.label}
            </a>
          ))}
        </nav>
      </div>

      <Section id="overview" title={<T k="program.overview" />}>
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
        <div className="grid gap-8 md:grid-cols-2">
          {page.learn.groups.map((group) => (
            <article key={group.title}>
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
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-gold">
              <T k="program.duration" />
            </dt>
            <dd className="mt-2">{page.format.duration}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-gold">
              <T k="program.groupSize" />
            </dt>
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

      <Section id="faqs" title={<T k="program.faqs" />}>
        <FaqList items={page.faqs} plainTitles />
      </Section>

      <Section id="book" title={page.book.title} intro={page.book.intro}>
        <BulletList items={page.book.venues} />
        <p className="mt-8">
          <Link href="/book?chat=1" className="text-sm font-semibold uppercase tracking-[0.14em] text-red">
            <T k="program.requestWorkshop" />
          </Link>
        </p>
      </Section>

      <CtaBanner
        titleKey="home.ctaTitle"
        bodyKey="home.ctaBody"
        primary={{ chat: true, labelKey: "home.ctaPrimary" }}
        secondary={{ href: "/contact", labelKey: "nav.contact" }}
      />
    </>
  );
}
