import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { CentresView } from "./CentresView";

export const metadata: Metadata = pageMetadata("centres");

export default function TrainingCentresPage() {
  return <CentresView />;
}
