import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { AboutView } from "./AboutView";

export const metadata: Metadata = pageMetadata("about");

export default function AboutPage() {
  return <AboutView />;
}
