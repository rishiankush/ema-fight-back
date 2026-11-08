"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blogPosts";
import { useT } from "@/i18n/LanguageProvider";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(date: string) {
  const [year, month, day] = date.split("-");
  const monthName = months[Number(month) - 1];
  if (!year || !monthName || !day) return date;
  return `${Number(day)} ${monthName} ${year}`;
}

export function BlogPostCards({
  posts,
  heading = "h2",
}: {
  posts: BlogPost[];
  heading?: "h2" | "h3";
}) {
  const { t } = useT();
  const Heading = heading;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
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
              {formatDate(post.date)}
            </p>
            <Heading className="mt-3 font-display text-2xl uppercase leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-red">
                {post.title}
              </Link>
            </Heading>
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
  );
}
