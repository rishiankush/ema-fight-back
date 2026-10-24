import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { PrivacyView } from "./PrivacyView";

export const metadata: Metadata = pageMetadata("privacy");

export default function PrivacyPage() {
  return <PrivacyView />;
}
