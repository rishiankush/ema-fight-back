import type { Metadata } from "next";
import { PartnersView } from "./PartnersView";

export const metadata: Metadata = {
  title: "Partners & Sponsors",
  description:
    "Partner with EMA Fight Back — schools, corporates, community centres, NGOs, government departments, foundations and sponsors.",
};

export default function PartnersPage() {
  return <PartnersView />;
}
