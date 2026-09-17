import Image from "next/image";
import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
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
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
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
