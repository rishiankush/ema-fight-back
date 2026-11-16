import type { NextConfig } from "next";
import { blogPosts } from "./src/content/blogPosts";

const pageRedirects = [
  { source: "/video", destination: "/blog" },
  { source: "/videos", destination: "/blog" },
  { source: "/video-gallery", destination: "/blog" },
  { source: "/photo-gallery", destination: "/blog" },
  { source: "/gallery", destination: "/blog" },
  { source: "/with-celebrities", destination: "/blog" },
  { source: "/category/:path*", destination: "/blog" },
  { source: "/author/:path*", destination: "/blog" },
  { source: "/self-defense", destination: "/programs" },
  { source: "/self-defence", destination: "/programs" },
  { source: "/workshops", destination: "/programs" },
  { source: "/founder", destination: "/master-bs-handa" },
  { source: "/classes", destination: "/training-centres" },
  { source: "/women-fight-back", destination: "/programs/women" },
  { source: "/women-self-defense", destination: "/programs/women" },
  { source: "/women-self-defence", destination: "/programs/women" },
  { source: "/about-us", destination: "/about" },
  { source: "/contact-us", destination: "/contact" },
  { source: "/shop", destination: "/store" },
  { source: "/faqs-2", destination: "/faqs" },
  { source: "/privacy-policy", destination: "/privacy" },
  { source: "/terms-and-conditions", destination: "/terms" },
] as const;

const reservedTopLevel = new Set([
  ...pageRedirects.map((rule) => rule.source.split("/")[1]?.replace(":path*", "")).filter(Boolean),
  "about",
  "blog",
  "book",
  "contact",
  "donate",
  "faqs",
  "master-bs-handa",
  "partners",
  "privacy",
  "programs",
  "resources",
  "store",
  "terms",
  "testimonials",
  "training-centres",
]);

const blogRedirects = blogPosts
  .filter((post) => !reservedTopLevel.has(post.slug))
  .map((post) => ({
    source: `/${post.slug}`,
    destination: `/blog/${post.slug}`,
  }));

const nextConfig: NextConfig = {
  async redirects() {
    return [...pageRedirects, ...blogRedirects].map((rule) => ({
      ...rule,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/guides/:path*",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="EMA-Free-Safety-Guide.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
