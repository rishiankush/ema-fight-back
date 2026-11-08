"use client";

import { BlogPostCards } from "@/components/blog/BlogPostCards";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { blogPosts } from "@/content/blogPosts";
import { T } from "@/i18n/LanguageProvider";

export function BlogView() {
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
        <BlogPostCards posts={blogPosts} />
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
