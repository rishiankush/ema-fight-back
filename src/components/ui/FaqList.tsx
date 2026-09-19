"use client";

import { useState } from "react";
import { useCopy } from "@/i18n/copy";

function uniqueFaqs(pages: readonly { faqs: readonly { q: string; a: string }[] }[]) {
  const seen = new Set<string>();
  const items: { q: string; a: string }[] = [];
  for (const page of pages) {
    for (const item of page.faqs) {
      const key = item.q.trim().toLowerCase();
      if (!key || seen.has(key)) continue;
      seen.add(key);
      items.push(item);
    }
  }
  return items;
}

export function FaqList({
  items,
  plainTitles = false,
}: {
  items?: readonly { q: string; a: string }[];
  plainTitles?: boolean;
}) {
  const copy = useCopy();
  const resolved = items ?? uniqueFaqs(copy.programs);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {resolved.map((item, index) => {
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
