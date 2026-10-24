import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { TestimonialsView } from "./TestimonialsView";

export const metadata: Metadata = pageMetadata("testimonials");

export default function TestimonialsPage() {
  return <TestimonialsView />;
}
