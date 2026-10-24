import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { StoreView } from "./StoreView";

export const metadata: Metadata = pageMetadata("store");

export default function StorePage() {
  return <StoreView />;
}
