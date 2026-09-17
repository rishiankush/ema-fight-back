import type { MetadataRoute } from "next";
import { programs } from "@/content/programs";

const routes = [
  "",
  "/about",
  "/programs",
  "/resources",
  "/store",
  "/partners",
  "/testimonials",
  "/contact",
  "/faqs",
  "/book",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const programRoutes = programs.map((program) => `/programs/${program.slug}`);
  return [...routes, ...programRoutes].map((path) => ({
    url: `https://emafightback.example${path}`,
    lastModified: new Date(),
  }));
}
