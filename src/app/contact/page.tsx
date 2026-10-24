import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { ContactView } from "./ContactView";

export const metadata: Metadata = pageMetadata("contact");

export default function ContactPage() {
  return <ContactView />;
}
