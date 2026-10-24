import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { PartnersView } from "./PartnersView";

export const metadata: Metadata = pageMetadata("partners");

export default function PartnersPage() {
  return <PartnersView />;
}
