import type { Metadata } from "next";
import { site } from "@/content/site";

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  keywords?: string[];
};

const localClassKeywords = [
  "self defence classes Chandigarh",
  "self defense classes Chandigarh",
  "taekwondo classes Chandigarh",
  "martial arts in Chandigarh",
  "karate classes Chandigarh",
  "martial arts classes Mohali",
] as const;

/** One primary topic per page. Titles stay unique and are not keyword-stuffed. */
export const seoPages = {
  home: {
    path: "/",
    title: `${site.name} | Self-Defense & Martial Arts Classes in Chandigarh`,
    description: site.description,
    image: "/assets/hero/family-safety.png",
    imageAlt: "Family safety training with EMA Fight Back",
    keywords: [...localClassKeywords],
  },
  about: {
    path: "/about",
    title: "About EMA Fight Back",
    description:
      "EMA Fight Back, established in 1984 in Chandigarh, teaches People Safety, self-defense, taekwondo, and martial arts for children, families, schools, and workplaces.",
    image: "/assets/hero/family-safety.png",
    imageAlt: "EMA Fight Back People Safety program",
    keywords: [...localClassKeywords],
  },
  founder: {
    path: "/master-bs-handa",
    title: "Master B. S. Handa | Taekwondo 6th Dan, Chandigarh",
    description:
      "Master B. S. Handa is the founder of EMA Fight Back. Black Belt 6th Dan (Kukkiwon), founder of the Chandigarh Taekwondo Association, teaching People Safety and martial arts since 1984.",
    image: "/assets/instructors/bs-handa.png",
    imageAlt: "Master B. S. Handa, founder of EMA Fight Back",
    keywords: ["taekwondo Chandigarh", "Master B S Handa", "Chandigarh Taekwondo Association"],
  },
  centres: {
    path: "/training-centres",
    title: "Self-Defense & Taekwondo Classes in Chandigarh",
    description:
      "Self-defence, taekwondo, and martial arts classes at Strawberry Field (Sector 26, Chandigarh), Legacy Martial Arts (Sector 86, Mohali), and Tiny Warriors (Sector 72, Mohali).",
    image: "/assets/centres/hero-class.jpg",
    imageAlt: "Children in a martial arts class",
    keywords: [
      ...localClassKeywords,
      "self defence classes near me",
      "taekwondo classes near me",
    ],
  },
  programs: {
    path: "/programs",
    title: "People Safety Programs & Workshops",
    description:
      "Age-appropriate People Safety, self-defense, and martial arts programs in Chandigarh for kids, teens, women, seniors, schools, and workplaces.",
    image: "/assets/hero/family-safety.png",
    imageAlt: "EMA Fight Back program photograph",
  },
  kids: {
    path: "/programs/kids",
    title: "Child Safety Program for Ages 3–8",
    description:
      "A gentle People Safety program for young children and parents: boundaries, awareness, and asking for help.",
    image: "/assets/programs/kids.jpg",
    imageAlt: "Children practising EMA kids safety skills",
  },
  juniors: {
    path: "/programs/juniors",
    title: "Junior Safety & Bullying Prevention",
    description:
      "Safety skills for children aged 9 to 12: bullying prevention, clear boundaries, and everyday awareness.",
    image: "/assets/programs/juniors.jpg",
    imageAlt: "Juniors in an EMA safety class",
  },
  teens: {
    path: "/programs/teens",
    title: "Teen Self-Defense & Personal Safety",
    description:
      "Practical safety skills for teens aged 13 to 18, including awareness, boundaries, and emergency-only physical skills.",
    image: "/assets/programs/teens.jpg",
    imageAlt: "Teens in an EMA self-defense session",
  },
  adults: {
    path: "/programs/adults",
    title: "Adult Self-Defense Training",
    description:
      "Practical self-defense and People Safety skills for adults who want to feel more prepared in daily life.",
    image: "/assets/programs/adults.jpg",
    imageAlt: "Adults training in EMA self-defense",
  },
  women: {
    path: "/programs/women",
    title: "Women's Self-Defense & Safety",
    description:
      "Women’s Fight Back: awareness, voice, boundaries, and practical self-defense for women and girls’ groups.",
    image: "/assets/programs/action.jpg",
    imageAlt: "Women’s self-defense workshop with EMA Fight Back",
  },
  seniors: {
    path: "/programs/seniors",
    title: "Senior Citizen Safety Program",
    description:
      "Adapted, respectful safety training for older adults — awareness, balance, and simple protective skills.",
    image: "/assets/gallery/3Jan14-052.jpg",
    imageAlt: "Senior participants in an EMA safety session",
  },
  special: {
    path: "/programs/special-needs",
    title: "Safety Training for Special Needs",
    description:
      "Caregiver-inclusive People Safety sessions adapted for special-needs groups and the people who support them.",
    image: "/assets/gallery/schools.jpeg",
    imageAlt: "Adapted EMA safety session",
  },
  schools: {
    path: "/programs/schools",
    title: "School & College Safety Workshops",
    description:
      "On-campus People Safety workshops for schools, colleges, and medical colleges, including students, staff, and security.",
    image: "/assets/hero/schools.jpg",
    imageAlt: "School safety workshop by EMA Fight Back",
  },
  corporate: {
    path: "/programs/corporate",
    title: "Corporate & Workplace Safety Workshops",
    description:
      "Workplace and institutional People Safety workshops for offices, hospitals, and professional teams.",
    image: "/assets/hero/schools.jpg",
    imageAlt: "Workplace safety workshop by EMA Fight Back",
  },
  instructor: {
    path: "/programs/instructor-training",
    title: "Instructor Training for People Safety",
    description:
      "Consultancy-first instructor training for people who want to teach EMA’s People Safety system.",
    image: "/assets/programs/class-1.jpg",
    imageAlt: "EMA instructor training class",
  },
  family: {
    path: "/programs/family",
    title: "Family Safety Program",
    description:
      "Parents and children learn People Safety skills together — communication, boundaries, and everyday safety.",
    image: "/assets/hero/family-safety.png",
    imageAlt: "Family safety training with EMA Fight Back",
  },
  resources: {
    path: "/resources",
    title: "Safety Library",
    description:
      "Practical People Safety tips for home, school, work, and public spaces. Ask a question or book a workshop.",
    image: "/assets/programs/info-card.png",
    imageAlt: "EMA Fight Back safety library",
  },
  blog: {
    path: "/blog",
    title: "Blog",
    description: "Seminar notes, class updates, and People Safety news from EMA Fight Back.",
    image: "/opengraph-image.png",
    imageAlt: "EMA Fight Back blog",
  },
  store: {
    path: "/store",
    title: "Store",
    description: "Enquire for EMA ebooks, teaching kits, comics, and manuals currently available.",
    image: "/opengraph-image.png",
    imageAlt: "EMA Fight Back store",
  },
  partners: {
    path: "/partners",
    title: "Partners & Sponsors",
    description:
      "Partner with EMA Fight Back for school, corporate, community, and CSR People Safety programs.",
    image: "/assets/hero/schools.jpg",
    imageAlt: "EMA institutional partnership",
  },
  donate: {
    path: "/donate",
    title: "Support EMA Fight Back",
    description: "Support People Safety training for families, schools, and communities.",
    image: "/opengraph-image.png",
    imageAlt: "Support EMA Fight Back",
  },
  testimonials: {
    path: "/testimonials",
    title: "Testimonials",
    description:
      "What parents, schools, corporates, and participants say after EMA Fight Back workshops.",
    image: "/opengraph-image.png",
    imageAlt: "EMA Fight Back testimonials",
  },
  contact: {
    path: "/contact",
    title: "Contact EMA Fight Back",
    description: `Enquire for self-defence and martial arts classes in Chandigarh. Call ${site.phoneDisplay} or WhatsApp EMA Fight Back.`,
    image: "/assets/ui/contact-bg.jpg",
    imageAlt: "Contact EMA Fight Back in Chandigarh",
    keywords: ["self defence classes Chandigarh", "martial arts in Chandigarh"],
  },
  faqs: {
    path: "/faqs",
    title: "FAQs",
    description: "Short answers to common questions about EMA Fight Back programs and workshops.",
    image: "/opengraph-image.png",
    imageAlt: "EMA Fight Back FAQs",
  },
  book: {
    path: "/book",
    title: "Book a People Safety Workshop",
    description:
      "Request a consultancy for a family, school, campus, workplace, or instructor pathway. EMA will confirm the next step.",
    image: "/assets/hero/family-safety.png",
    imageAlt: "Book an EMA Fight Back workshop",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy",
    description: "How EMA Fight Back collects and uses information from enquiries and website visits.",
    image: "/opengraph-image.png",
    imageAlt: "EMA Fight Back privacy policy",
  },
  terms: {
    path: "/terms",
    title: "Terms & Conditions",
    description: "Terms for using the EMA Fight Back website and requesting programs.",
    image: "/opengraph-image.png",
    imageAlt: "EMA Fight Back terms and conditions",
  },
} as const satisfies Record<string, SeoPage>;

export const programSeo: Record<string, keyof typeof seoPages> = {
  kids: "kids",
  juniors: "juniors",
  teens: "teens",
  adults: "adults",
  women: "women",
  seniors: "seniors",
  "special-needs": "special",
  schools: "schools",
  corporate: "corporate",
  "instructor-training": "instructor",
  family: "family",
};

export const relatedPrograms: Record<string, { href: string; label: string }[]> = {
  kids: [
    { href: "/programs/juniors", label: "Juniors program" },
    { href: "/programs/family", label: "Family program" },
    { href: "/training-centres", label: "Training centres" },
  ],
  juniors: [
    { href: "/programs/kids", label: "Kids program" },
    { href: "/programs/teens", label: "Teens program" },
    { href: "/training-centres", label: "Training centres" },
  ],
  teens: [
    { href: "/programs/juniors", label: "Juniors program" },
    { href: "/programs/women", label: "Women’s self-defense" },
    { href: "/programs/schools", label: "School workshops" },
  ],
  women: [
    { href: "/book", label: "Book a workshop" },
    { href: "/programs/schools", label: "School & campus workshops" },
    { href: "/testimonials", label: "Testimonials" },
  ],
  schools: [
    { href: "/programs/corporate", label: "Corporate workshops" },
    { href: "/book", label: "Book a workshop" },
    { href: "/programs/women", label: "Women’s self-defense" },
  ],
  corporate: [
    { href: "/programs/schools", label: "School & college workshops" },
    { href: "/programs/women", label: "Women’s self-defense" },
    { href: "/book", label: "Book a workshop" },
  ],
  family: [
    { href: "/programs/kids", label: "Kids program" },
    { href: "/training-centres", label: "Training centres" },
    { href: "/resources", label: "Safety library" },
  ],
};

export function pageMetadata(key: keyof typeof seoPages): Metadata {
  const page = seoPages[key];
  const isHome = page.path === "/";
  const keywords = "keywords" in page ? [...page.keywords] : undefined;
  return {
    title: isHome ? { absolute: page.title } : page.title,
    description: page.description,
    keywords,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      type: "website",
      locale: "en_IN",
      images: [{ url: page.image, alt: page.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.image],
    },
  };
}
