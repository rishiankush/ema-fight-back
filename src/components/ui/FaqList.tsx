"use client";

import { useState } from "react";
import { faqs } from "@/content/faqs";

export function FaqList({
  items = faqs,
  plainTitles = false,
}: {
  items?: readonly { q: string; a: string }[];
  plainTitles?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className={`font-display text-lg sm:text-xl ${plainTitles ? "" : "uppercase"}`}>
                {item.q}
              </span>
              <span className="text-orange" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? <p className="pb-5 leading-7 text-muted">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
