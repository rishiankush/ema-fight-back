"use client";

import { BlogPostCards } from "@/components/blog/BlogPostCards";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { blogPosts } from "@/content/blogPosts";
import { T } from "@/i18n/LanguageProvider";

const homePosts = blogPosts.filter((post) => post.image).slice(0, 4);

export function HomeNews() {
  if (!homePosts.length) return null;

  return (
    <Section eyebrow={<T k="blog.eyebrow" />} title={<T k="blog.title" />} intro={<T k="blog.description" />}>
      <BlogPostCards posts={homePosts} heading="h3" />
      <p className="mt-10">
        <Button href="/blog" variant="primary">
          <T k="home.viewAllPosts" />
        </Button>
      </p>
    </Section>
  );
}
