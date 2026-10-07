"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { getBlogPost } from "@/content/blogPosts";
import { T, useT } from "@/i18n/LanguageProvider";

function formatDate(date: string, locale: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogPostView({ slug }: { slug: string }) {
  const { locale, t } = useT();
  const post = getBlogPost(slug);
  if (!post) return null;

  return (
    <>
      <PageHero
        eyebrow={formatDate(post.date, locale)}
        title={post.title}
        description={post.excerpt || formatDate(post.date, locale)}
        primary={{ href: "/blog", label: t("blog.back") }}
        secondary={{ href: "/book", label: <T k="program.requestWorkshop" /> }}
        image={post.image ?? "/assets/gallery/fb.jpg"}
      />

      <Section>
        <article className="max-w-3xl">
          {post.blocks.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2 key={`${block.text}-${index}`} className="mt-10 font-display text-2xl font-bold uppercase">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="bullet-list mt-6">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === "img") {
              return (
                <div key={`${block.src}-${index}`} className="relative my-8 aspect-[4/3] overflow-hidden border border-line bg-[#f3f3f3]">
                  <Image
                    src={block.src}
                    alt={block.alt || post.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
              );
            }
            if (block.type === "video") {
              return (
                <video
                  key={`${block.src}-${index}`}
                  className="my-8 w-full border border-line bg-black"
                  src={block.src}
                  controls
                  playsInline
                  preload="metadata"
                />
              );
            }
            if (block.type === "youtube") {
              return (
                <div key={`${block.id}-${index}`} className="relative my-8 aspect-video overflow-hidden border border-line bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${block.id}`}
                    title={post.title}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              );
            }
            return (
              <p key={`${block.text}-${index}`} className="mt-5 text-base leading-7 text-muted sm:text-lg">
                {block.text}
              </p>
            );
          })}
          <p className="mt-10">
            <Link href="/blog" className="text-sm font-semibold uppercase tracking-[0.14em] text-red">
              {t("blog.back")}
            </Link>
          </p>
        </article>
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
