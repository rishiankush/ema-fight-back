import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { TermsView } from "./TermsView";

export const metadata: Metadata = pageMetadata("terms");

export default function TermsPage() {
  return <TermsView />;
}
