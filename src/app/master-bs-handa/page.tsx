import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { FounderView } from "./FounderView";

export const metadata: Metadata = pageMetadata("founder");

export default function FounderPage() {
  return <FounderView />;
}
