import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { BlogView } from "./BlogView";

export const metadata: Metadata = pageMetadata("blog");

export default function BlogPage() {
  return <BlogView />;
}
