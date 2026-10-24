import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { DonateView } from "./DonateView";

export const metadata: Metadata = pageMetadata("donate");

export default function DonatePage() {
  return <DonateView />;
}
