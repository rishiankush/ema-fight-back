import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home/HomeHero";
import { homeProgramCards } from "@/content/homePage";
import { programImages } from "@/content/media";
import { BulletList } from "@/components/ui/BulletList";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Section } from "@/components/ui/Section";
import { T } from "@/i18n/LanguageProvider";

const whyItems = [
  "home.whyItem1",
  "home.whyItem2",
  "home.whyItem3",
  "home.whyItem4",
  "home.whyItem5",
  "home.whyItem6",
] as const;

const differentItems = [
  "home.differentItem1",
  "home.differentItem2",
  "home.differentItem3",
  "home.differentItem4",
  "home.differentItem5",
  "home.differentItem6",
  "home.differentItem7",
] as const;

const teachItems = [
  "home.teachItem1",
  "home.teachItem2",
  "home.teachItem3",
  "home.teachItem4",
  "home.teachItem5",
] as const;

const trustItems = [
  "home.trustItem1",
  "home.trustItem2",
  "home.trustItem3",
  "home.trustItem4",
  "home.trustItem5",
] as const;

const learnItems = [
  "home.learnItem1",
  "home.learnItem2",
  "home.learnItem3",
  "home.learnItem4",
  "home.learnItem5",
  "home.learnItem6",
  "home.learnItem7",
  "home.learnItem8",
] as const;

const partnerItems = [
  "home.partnerItem1",
  "home.partnerItem2",
  "home.partnerItem3",
  "home.partnerItem4",
  "home.partnerItem5",
  "home.partnerItem6",
  "home.partnerItem7",
  "home.partnerItem8",
] as const;

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <Section title={<T k="home.whyTitle" />} intro={<T k="home.whySubtitle" />}>
        <p className="max-w-3xl leading-7 text-muted">
          <T k="home.whyIntro" />
        </p>
        <p className="mt-6 font-semibold">
          <T k="home.whyWeTeach" />
        </p>
        <BulletList items={whyItems.map((key) => <T key={key} k={key} />)} />
        <p className="mt-6 max-w-3xl leading-7 text-muted">
          <T k="home.whyClose" />
        </p>
      </Section>

      <Section title={<T k="home.programsTitle" />} intro={<T k="home.programsIntro" />}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {homeProgramCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group overflow-hidden border border-line bg-white hover:border-red"
            >
              <div className="relative aspect-[4/3] bg-[#f3f3f3]">
                <Image
                  src={programImages[card.slug] ?? "/assets/programs/class-1.jpg"}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold uppercase">
                  <T k={card.titleKey} />
                </h3>
                <p className="mt-3 text-muted">
                  <T k={card.summaryKey} />
                </p>
                <span className="mt-4 inline-block text-sm font-semibold uppercase tracking-[0.14em] text-red">
                  <T k="home.viewProgram" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-10">
          <Button href="/programs" variant="primary">
            <T k="home.exploreAllPrograms" />
          </Button>
        </p>
      </Section>

      <Section title={<T k="home.differentTitle" />} intro={<T k="home.differentSubtitle" />}>
        <BulletList items={differentItems.map((key) => <T key={key} k={key} />)} />
        <p className="mt-6 max-w-3xl leading-7 text-muted">
          <T k="home.differentClose" />
        </p>
      </Section>

      <Section dark title={<T k="home.teachTitle" />} intro={<T k="home.teachIntro" />}>
        <BulletList light items={teachItems.map((key) => <T key={key} k={key} />)} />
        <p className="mt-6 max-w-3xl leading-7 text-steel">
          <T k="home.teachClose" />
        </p>
      </Section>

      <Section title={<T k="home.trustTitle" />} intro={<T k="home.trustIntro" />}>
        <BulletList items={trustItems.map((key) => <T key={key} k={key} />)} />
        <p className="mt-6 max-w-3xl leading-7 text-muted">
          <T k="home.trustClose" />
        </p>
      </Section>

      <Section dark title={<T k="home.learnTitle" />} intro={<T k="home.learnIntro" />}>
        <BulletList light items={learnItems.map((key) => <T key={key} k={key} />)} />
      </Section>

      <Section title={<T k="home.partnerTitle" />} intro={<T k="home.partnerIntro" />}>
        <BulletList items={partnerItems.map((key) => <T key={key} k={key} />)} />
        <p className="mt-6 max-w-3xl leading-7 text-muted">
          <T k="home.partnerClose" />
        </p>
      </Section>

      <CtaBanner
        titleKey="home.ctaTitle"
        bodyKey="home.ctaBody"
        primary={{ href: "/book", labelKey: "home.ctaPrimary" }}
        secondary={{ href: "/contact", labelKey: "home.ctaSecondary" }}
      />
    </>
  );
}
