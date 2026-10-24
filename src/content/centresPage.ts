export type CentreId = "strawberry" | "sector-86" | "sector-72";

export type Centre = {
  id: CentreId;
  name: string;
  location: string;
  mapQuery: string;
  image: string;
  imageAlt: string;
  schedule?: string[];
  schedulePending?: boolean;
  detailsPending?: boolean;
  description: string[];
};

export const centresPage = {
  title: "Training Centres & Classes",
  description:
    "Regular EMA classes at confirmed venues in Chandigarh and Mohali. Enquire for the current batch at your preferred centre.",
} as const;

export const centres: Centre[] = [
  {
    id: "strawberry",
    name: "Strawberry Field High School",
    location: "Sector 26, Chandigarh",
    mapQuery: "Strawberry Field High School, Sector 26, Chandigarh",
    image: "/assets/hero/schools.jpg",
    imageAlt: "EMA class photograph at a school venue",
    schedule: ["Monday, Wednesday and Friday", "4–5 PM", "5–6 PM"],
    description: [
      "Kids/Children (5 to 12 years) Fitness, Self Defence & Martial Arts Classes.",
      "The program teaches children how to stay safe, speak up, set boundaries, and make safer choices in daily life.",
    ],
  },
  {
    id: "sector-86",
    name: "Legacy Martial Arts",
    location: "Sector 86, Mohali",
    mapQuery: "Legacy Martial Arts, Sector 86, Mohali",
    image: "/assets/programs/class-1.jpg",
    imageAlt: "EMA martial arts class photograph",
    schedulePending: true,
    description: [
      "EMA martial arts and people-safety classes at Legacy Martial Arts, Sector 86, Mohali.",
      "Current class timings will be shared after confirmation.",
    ],
  },
  {
    id: "sector-72",
    name: "Legacy Tiny Warriors Playway & Activity Club",
    location: "Sector 72, Mohali",
    mapQuery: "Legacy Tiny Warriors Playway and Activity Club, Sector 72, Mohali",
    image: "/assets/programs/kids.jpg",
    imageAlt: "EMA kids class photograph",
    schedulePending: true,
    detailsPending: true,
    description: [
      "EMA classes at Legacy Tiny Warriors Playway & Activity Club, Sector 72, Mohali.",
      "Current activity details and timings will be shared after confirmation.",
    ],
  },
];

export const centreNameById: Record<CentreId, string> = {
  strawberry: "Strawberry Field High School, Sector 26, Chandigarh",
  "sector-86": "Legacy Martial Arts, Sector 86, Mohali",
  "sector-72": "Legacy Tiny Warriors Playway & Activity Club, Sector 72, Mohali",
};

export function isCentreId(value: string | null | undefined): value is CentreId {
  return value === "strawberry" || value === "sector-86" || value === "sector-72";
}
