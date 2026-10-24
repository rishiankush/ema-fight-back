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
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  return [...routes, ...programRoutes, ...blogRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/blog/") ? "monthly" : "weekly",
    priority: path === "" ? 1 : path.startsWith("/programs") || path === "/training-centres" ? 0.8 : 0.6,
  }));
}
