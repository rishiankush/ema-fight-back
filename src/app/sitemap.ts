import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blogPosts";
import { programs } from "@/content/programs";

const routes = [
  "",
  "/about",
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
  const programRoutes = programs.map((program) => `/programs/${program.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  return [...routes, ...programRoutes, ...blogRoutes].map((path) => ({
    url: `https://emafightback.example${path}`,
    lastModified: new Date(),
  }));
}
