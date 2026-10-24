"use client";

import Image from "next/image";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { EnquiryForm, centreFields } from "@/components/forms/EnquiryForm";
import { centres, centreNameById, isCentreId } from "@/content/centresPage";
import { whatsappHref } from "@/content/site";
import { T, useT } from "@/i18n/LanguageProvider";

function centreWhatsapp(name: string, location: string) {
  const text = `Namaste. I want to enquire about EMA classes at ${name}, ${location}.`;
  return `${whatsappHref}?text=${encodeURIComponent(text)}`;
}

function mapHref(query: string) {
  return `https://maps.google.com/?q=${encodeURIComponent(query)}`;
}

function CentreEnquiryForm() {
  const { t } = useT();
  const params = useSearchParams();
  const centreId = params.get("centre");
  const preferredCentre = isCentreId(centreId) ? centreNameById[centreId] : undefined;

  return (
    <EnquiryForm
      key={preferredCentre ?? "any"}
      id="enquire"
      kind="centre"
      title={t("centres.formTitle")}
      intro={t("centres.formIntro")}
      submitLabel={t("centres.submit")}
      successTitle={t("centres.successTitle")}
      successBody={t("centres.successBody")}
      fields={centreFields}
      defaults={preferredCentre ? { preferredCentre } : undefined}
      hidden={{ source: "training-centres" }}
    />
  );
}

export function CentresView() {
  const { t } = useT();

  return (
    <>
      <PageHero
        eyebrow={<T k="centres.eyebrow" />}
        title={<T k="centres.title" />}
        description={<T k="centres.description" />}
        primary={{ href: "#enquire", label: <T k="centres.enquireNow" /> }}
        secondary={{ href: whatsappHref, label: <T k="centres.whatsapp" /> }}
        image="/assets/hero/whatsapp-training.jpeg"
      />

      <Section title={<T k="centres.locationsTitle" />} intro={<T k="centres.note" />}>
        <div className="grid gap-8">
          {centres.map((centre) => (
            <article
              key={centre.id}
              id={centre.id}
              className="overflow-hidden border border-line bg-white md:grid md:grid-cols-[minmax(0,280px)_1fr]"
            >
              <div className="relative aspect-[4/3] bg-[#f3f3f3] md:aspect-auto md:min-h-[260px]">
                <Image
                  src={centre.image}
                  alt={centre.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red">
                  <T k="centres.locationLabel" />
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold uppercase">{centre.name}</h2>
                <p className="mt-2 text-muted">{centre.location}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-orange">
                  <T k="centres.scheduleLabel" />
                </p>
                {centre.schedule ? (
                  <ul className="mt-2 text-sm leading-7">
                    {centre.schedule.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {centre.detailsPending ? t("centres.confirmDetails") : t("centres.confirmSchedule")}
                  </p>
                )}
                {centre.description.map((paragraph) => (
                  <p key={paragraph} className="mt-4 max-w-2xl leading-7 text-muted">
                    {paragraph}
                  </p>
                ))}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href={`/training-centres?centre=${centre.id}#enquire`} variant="primary">
                    <T k="centres.enquireNow" />
                  </Button>
                  <Button href={centreWhatsapp(centre.name, centre.location)} variant="ghost">
                    <T k="centres.whatsapp" />
                  </Button>
                  <a
                    href={mapHref(centre.mapQuery)}
                    className="inline-flex items-center justify-center px-2 py-3 text-sm font-semibold text-red hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <T k="centres.viewMap" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <Suspense fallback={null}>
          <CentreEnquiryForm />
        </Suspense>
      </Section>

      <CtaBanner
        titleKey="centres.formTitle"
        bodyKey="centres.note"
        primary={{ href: "/contact", labelKey: "aboutPage.contactUs" }}
        secondary={{ href: "/book", labelKey: "aboutPage.bookWorkshop" }}
      />
    </>
  );
}
