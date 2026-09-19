import type { Metadata } from "next";
import { aboutPage } from "@/content/aboutPage";
import { AboutView } from "./AboutView";

export const metadata: Metadata = {
  title: "About EMA Fight Back",
  description: aboutPage.intro[0],
};

export default function AboutPage() {
  return <AboutView />;
}
