import type { Metadata } from "next";
import { TermsView } from "./TermsView";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return <TermsView />;
}
