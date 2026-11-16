import { whatsappHref } from "@/content/site";
import { absoluteUrl } from "@/lib/siteUrl";

export const GUIDE_PATH = "/guides/EMA-Free-Safety-Guide.pdf";

export function visitorWhatsAppHref(name: string) {
  const text = [
    `Hello, this is ${name}. I requested the FREE Safety Guide from EMA Fight Back.`,
    "",
    "Here is my copy:",
    absoluteUrl(GUIDE_PATH),
  ].join("\n");
  return `${whatsappHref}?text=${encodeURIComponent(text)}`;
}

export const myselfDestinations = [
  { href: "/programs/women", labelKey: "welcome.women" },
  { href: "/programs/adults", labelKey: "welcome.adults" },
  { href: "/programs/seniors", labelKey: "welcome.seniors" },
  { href: "/book", labelKey: "welcome.online" },
] as const;

export const someoneElseDestinations = [
  { href: "/programs", labelKey: "welcome.children" },
  { href: "/programs/family", labelKey: "welcome.family" },
  { href: "/programs/schools", labelKey: "welcome.schools" },
  { href: "/programs/corporate", labelKey: "welcome.workplaces" },
] as const;

export const sharedDestinations = [{ href: "/resources", labelKey: "welcome.tips" }] as const;
