import type { Metadata } from "next";
import { ResourcesView } from "./ResourcesView";

export const metadata: Metadata = {
  title: "Safety Tips & Awareness Blog",
  description:
    "Practical advice to stay safe at home, school, work, and in public spaces — People Safety, bullying prevention, emotional safety, and self-defense insights.",
};

export default function ResourcesPage() {
  return <ResourcesView />;
}
