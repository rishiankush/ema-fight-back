import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  primary?: { href: string; label: ReactNode };
  secondary?: { href: string; label: ReactNode };
  image?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  image = "/assets/hero/combat-bg.jpg",
}: PageHeroProps) {
  return (
    <header className="relative overflow-hidden text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover object-[80%_center]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-black/80 sm:bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.84)_40%,rgba(0,0,0,0.42)_72%,rgba(0,0,0,0.22)_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.95] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white sm:text-lg">
          {description}
        </p>
        {(primary || secondary) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primary ? (
              <Button href={primary.href} variant="gold">
                {primary.label}
              </Button>
            ) : null}
            {secondary ? (
              <Button href={secondary.href} variant="secondary">
                {secondary.label}
              </Button>
            ) : null}
          </div>
        )}
      </div>
      <div className="relative stripe h-1.5" />
    </header>
  );
}
