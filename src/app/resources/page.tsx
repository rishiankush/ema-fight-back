import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { ResourcesView } from "./ResourcesView";

export const metadata: Metadata = pageMetadata("resources");

export default function ResourcesPage() {
  return <ResourcesView />;
}
