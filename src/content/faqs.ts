import { programPages } from "@/content/programPages";

const seen = new Set<string>();

export const faqs = programPages.flatMap((page) => page.faqs).filter((item) => {
  const key = item.q.trim().toLowerCase();
  if (!key || seen.has(key)) return false;
  seen.add(key);
  return true;
});
