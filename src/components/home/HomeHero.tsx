"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { T } from "@/i18n/LanguageProvider";

export function HomeHero() {
  return (
    <header className="relative overflow-hidden text-white">
      <Image
        src="/assets/hero/family-safety.png"
        alt=""
        fill
        priority
        className="object-cover object-[82%_center]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-black/80 sm:bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.86)_38%,rgba(0,0,0,0.45)_68%,rgba(0,0,0,0.22)_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-xl sm:max-w-2xl">
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
            <T k="hero.title" />
            <span className="mt-3 block text-gold">
              — <T k="hero.tagline" />
            </span>
          </h1>
          <p className="mt-5 text-base leading-7 text-white sm:text-lg">
            <T k="hero.body" />
          </p>
          <p className="mt-4 text-base leading-7 text-white sm:text-lg">
            <T k="hero.body2" />
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/book" variant="gold">
              <T k="hero.book" />
            </Button>
            <Button href="/resources" variant="secondary">
              <T k="hero.guide" />
            </Button>
          </div>
        </div>
      </div>
      <div className="relative stripe h-1.5" />
    </header>
  );
}
