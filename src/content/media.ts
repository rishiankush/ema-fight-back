export const programImages: Record<string, string> = {
  kids: "/assets/programs/kids.jpg",
  juniors: "/assets/programs/juniors.jpg",
  teens: "/assets/programs/teens.jpg",
  adults: "/assets/programs/adults.jpg",
  women: "/assets/programs/action.jpg",
  seniors: "/assets/gallery/3Jan14-052.jpg",
  "special-needs": "/assets/gallery/schools.jpeg",
  schools: "/assets/hero/schools.jpg",
  "instructor-training": "/assets/programs/class-1.jpg",
};

export const gallery = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/fb.jpg",
  "/assets/gallery/10-IMG_5147.jpg",
  "/assets/gallery/16-IMG_5159.jpg",
  "/assets/gallery/17-IMG_5160.jpg",
  "/assets/gallery/18-IMG_5161.jpg",
  "/assets/gallery/3Jan14-020.jpg",
  "/assets/gallery/3Jan14-025.jpg",
  "/assets/gallery/3Jan14-032.jpg",
  "/assets/gallery/20May11-259.jpg",
  "/assets/gallery/16Aug13-011.jpg",
] as const;

export const instructors = [
  {
    name: "Master B. S. Handa",
    roleKey: "home.instructorFounderRole",
    image: "/assets/instructors/bs-handa.png",
    bioKey: "home.instructorFounderBio",
  },
  {
    name: "Ekjot Kaur",
    roleKey: "home.instructorRole",
    image: "/assets/instructors/ekjot-kaur.png",
    bioKey: "home.instructorEkjotBio",
  },
  {
    name: "Harjot Singh",
    roleKey: "home.instructorRole",
    image: "/assets/instructors/harjot-singh.png",
    bioKey: "home.instructorHarjotBio",
  },
] as const;

export const audienceIcons = [
  { href: "/programs/schools", labelKey: "home.audienceSchool", image: "/assets/icons/school.png" },
  { href: "/programs#corporate", labelKey: "home.audienceWorkplace", image: "/assets/icons/workplace.png" },
  { href: "/book?chat=1", labelKey: "home.audienceFamily", image: "/assets/icons/family.png" },
  { href: "/programs#workshops", labelKey: "home.audienceCommunity", image: "/assets/icons/community.png" },
  { href: "/programs#workshops", labelKey: "home.audienceClub", image: "/assets/icons/club.png" },
  { href: "/partners", labelKey: "home.audienceSponsor", image: "/assets/icons/sponsor.png" },
] as const;
