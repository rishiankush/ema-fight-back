"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { blogPosts } from "@/content/blogPosts";
import { T, useT } from "@/i18n/LanguageProvider";

function formatDate(date: string, locale: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogView() {
  const { locale, t } = useT();

  return (
    <>
      <PageHero
        eyebrow={<T k="blog.eyebrow" />}
        title={<T k="blog.title" />}
        description={<T k="blog.description" />}
        primary={{ href: "/book", label: <T k="program.requestWorkshop" /> }}
        secondary={{ href: "/resources", label: <T k="nav.library" /> }}
        image="/assets/gallery/fb.jpg"
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="flex flex-col border border-line bg-paper">
              {post.image ? (
                <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-[#f3f3f3]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </Link>
              ) : null}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">
                  {formatDate(post.date, locale)}
                </p>
                <h2 className="mt-3 font-display text-2xl uppercase leading-tight">
                  <Link href={`/blog/${post.slug}`} className="hover:text-red">
                    {post.title}
                  </Link>
                </h2>
                {post.excerpt ? <p className="mt-3 flex-1 text-sm leading-6 text-muted">{post.excerpt}</p> : null}
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-red"
                >
                  {t("blog.readMore")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBanner
        titleKey="home.ctaTitle"
        bodyKey="home.ctaBody"
        primary={{ href: "/book", labelKey: "home.ctaPrimary" }}
        secondary={{ href: "/contact", labelKey: "nav.contact" }}
      />
    </>
  );
}
