"use client";

import { EnquiryForm, contactFields } from "@/components/forms/EnquiryForm";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { mailHref, phoneHref, site, whatsappHref } from "@/content/site";
import { useCopy } from "@/i18n/copy";

export function ContactView() {
  const contact = useCopy().contact;

  return (
    <>
      <PageHero
        eyebrow={contact.eyebrow}
        title={contact.title}
        description={contact.description}
        image="/assets/ui/contact-bg.jpg"
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <a href={phoneHref} className="block border border-line bg-paper p-5 hover:border-orange">
              <p className="text-xs uppercase tracking-[0.16em] text-orange">{contact.phone}</p>
              <p className="mt-1 font-display text-2xl uppercase">{site.phoneDisplay}</p>
            </a>
            <a href={whatsappHref} className="block border border-line bg-paper p-5 hover:border-orange">
              <p className="text-xs uppercase tracking-[0.16em] text-orange">{contact.whatsapp}</p>
              <p className="mt-1 font-display text-2xl uppercase">{contact.messageEma}</p>
            </a>
            <a href={mailHref} className="block border border-line bg-paper p-5 hover:border-orange">
              <p className="text-xs uppercase tracking-[0.16em] text-orange">{contact.email}</p>
              <p className="mt-1 font-display text-xl uppercase">{site.email}</p>
            </a>
            <div className="border border-line bg-paper p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-orange">{contact.location}</p>
              <p className="mt-1 font-display text-2xl uppercase">{site.location}</p>
              <div className="mt-4 aspect-video overflow-hidden border border-line">
                <iframe
                  title={contact.mapTitle}
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
            title={contact.formTitle}
            intro={contact.formIntro}
            submitLabel={contact.submit}
            successTitle={contact.successTitle}
            successBody={contact.successBody}
            fields={contactFields}
          />
        </div>
      </Section>
    </>
  );
}
