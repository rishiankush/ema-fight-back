import type { Metadata } from "next";
import { FaqsView } from "./FaqsView";

export const metadata: Metadata = {
  title: "FAQs / Safety Tips",
  description: "Short answers for common questions, plus practical safety tips from EMA Fight Back.",
};

export default function FaqsPage() {
  return <FaqsView />;
}
