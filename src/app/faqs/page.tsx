import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { FaqsView } from "./FaqsView";

export const metadata: Metadata = pageMetadata("faqs");

export default function FaqsPage() {
  return <FaqsView />;
}
