"use client";

import Link from "next/link";
import { T } from "@/i18n/LanguageProvider";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-orange">404</p>
      <h1 className="mt-3 font-display text-5xl uppercase">
        <T k="common.notFoundTitle" />
      </h1>
      <p className="mt-4 text-muted">
        <T k="common.notFoundBody" />
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex bg-red px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white"
      >
        <T k="common.backHome" />
      </Link>
    </div>
  );
}
