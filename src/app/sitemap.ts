import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blogPosts";
import { programs } from "@/content/programs";
import { getSiteUrl } from "@/lib/siteUrl";

const routes = [
  "",
  "/about",
  "/master-bs-handa",
  "/training-centres",
  "/programs",
  "/resources",
  "/blog",
  "/store",
  "/partners",
  "/donate",
  "/testimonials",
  "/contact",
  "/faqs",
  "/book",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const programRoutes = programs.map((program) => `/programs/${program.slug}`);
  const pages = [...routes, ...programRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority:
      path === ""
        ? 1
        : path.startsWith("/programs") || path === "/training-centres" || path === "/master-bs-handa"
          ? 0.8
          : 0.6,
  }));
  const posts = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));
  return [...pages, ...posts];
}
