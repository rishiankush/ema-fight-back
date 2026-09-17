import type { Metadata } from "next";
import {
  EnquiryForm,
  contactFields,
} from "@/components/forms/EnquiryForm";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { mailHref, phoneHref, site, whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call ${site.phoneDisplay}, WhatsApp, or send a short message. EMA Fight Back, Chandigarh.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call, WhatsApp, or send a short note"
        description="Phone and WhatsApp are the fastest. If you write, keep it brief — we will take the details on a consultancy call."
        image="/assets/ui/contact-bg.jpg"
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <a href={phoneHref} className="block border border-line bg-paper p-5 hover:border-orange">
              <p className="text-xs uppercase tracking-[0.16em] text-orange">Phone</p>
              <p className="mt-1 font-display text-2xl uppercase">{site.phoneDisplay}</p>
            </a>
            <a href={whatsappHref} className="block border border-line bg-paper p-5 hover:border-orange">
              <p className="text-xs uppercase tracking-[0.16em] text-orange">WhatsApp</p>
              <p className="mt-1 font-display text-2xl uppercase">Message EMA</p>
            </a>
            <a href={mailHref} className="block border border-line bg-paper p-5 hover:border-orange">
              <p className="text-xs uppercase tracking-[0.16em] text-orange">Email</p>
              <p className="mt-1 font-display text-xl uppercase">{site.email}</p>
            </a>
            <div className="border border-line bg-paper p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-orange">Location</p>
              <p className="mt-1 font-display text-2xl uppercase">{site.location}</p>
              <div className="mt-4 aspect-video overflow-hidden border border-line">
                <iframe
                  title="Chandigarh map"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Chandigarh&t=&z=12&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </div>
          <EnquiryForm
            kind="contact"
            title="Contact form"
            intro="Name, phone, email, message. We’ll reply with a time to talk."
            submitLabel="Send message"
            successTitle="Message received"
            successBody="Thank you. The EMA team will review your note and contact you with the next step."
            fields={contactFields}
          />
        </div>
      </Section>
    </>
  );
}
