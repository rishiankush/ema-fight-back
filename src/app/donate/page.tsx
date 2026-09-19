import type { Metadata } from "next";
import { donatePage } from "@/content/donatePage";
import { DonateView } from "./DonateView";

export const metadata: Metadata = {
  title: donatePage.title,
  description: donatePage.tagline,
};

export default function DonatePage() {
  return <DonateView />;
}
