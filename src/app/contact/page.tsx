import type { Metadata } from "next";
import { site } from "@/content/site";
import { ContactView } from "./ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call ${site.phoneDisplay}, WhatsApp, or send a short message. EMA Fight Back, Chandigarh.`,
};

export default function ContactPage() {
  return <ContactView />;
}
