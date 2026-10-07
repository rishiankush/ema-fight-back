"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { getProgramMediaPosts } from "@/content/programMedia";
import { T, useT } from "@/i18n/LanguageProvider";

function formatDate(date: string, locale: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function ProgramMedia({ slug }: { slug: string }) {
  const { locale } = useT();
  const posts = getProgramMediaPosts(slug);
  if (!posts.length) return null;

  return (
    <Section id="photos-videos" title={<T k="program.photosAndVideos" />}>
      <div className="grid gap-16">
        {posts.map((post) => (
          <article key={post.slug} className="border border-line bg-paper p-4 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">
              {formatDate(post.date, locale)}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold uppercase leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-red">
                {post.title}
              </Link>
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {post.media.map((block, index) => {
                if (block.type === "img") {
                  return (
                    <div
                      key={`${block.src}-${index}`}
                      className="relative aspect-[4/3] overflow-hidden border border-line bg-[#f3f3f3]"
                    >
                      <Image
                        src={block.src}
                        alt={block.alt || post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  );
                }
                if (block.type === "video") {
                  return (
                    <video
                      key={`${block.src}-${index}`}
                      className="aspect-video w-full border border-line bg-black md:col-span-2"
                      src={block.src}
                      controls
                      playsInline
                      preload="metadata"
                    />
                  );
                }
                return (
                  <div
                    key={`${block.id}-${index}`}
                    className="relative aspect-video overflow-hidden border border-line bg-black md:col-span-2"
                  >
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${block.id}`}
                      title={post.title}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                );
              })}
            </div>
            <p className="mt-4">
              <Link href={`/blog/${post.slug}`} className="text-sm font-semibold uppercase tracking-[0.14em] text-red">
                <T k="blog.readMore" />
              </Link>
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
