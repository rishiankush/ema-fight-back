import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy"
        description="We collect only what we need to respond to an enquiry. Forms on this site are for consultancy requests, not public profiles."
      />
      <Section>
        <div className="max-w-3xl space-y-4 leading-7 text-muted">
          <p>
            {site.name} uses contact details you submit — name, phone, email, and
            related answers — to understand your requirement and schedule a
            conversation. We do not sell this information.
          </p>
          <p>
            WhatsApp and phone calls are handled by the EMA team. Do not send
            sensitive medical, legal, or identity documents through the website
            forms.
          </p>
          <p>
            For removal of your details, email {site.email} or call{" "}
            {site.phoneDisplay}.
          </p>
        </div>
      </Section>
    </>
  );
}
