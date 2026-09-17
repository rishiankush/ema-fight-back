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
    role: "Founder / Chief Instructor",
    image: "/assets/instructors/bs-handa.png",
    bio: "International Asian player. Teaching People Safety across schools, corporates, and communities since 1984.",
  },
  {
    name: "Ekjot Kaur",
    role: "Instructor",
    image: "/assets/instructors/ekjot-kaur.png",
    bio: "Women’s safety, kids programs, and practical Fullpower skills.",
  },
  {
    name: "Harjot Singh",
    role: "Instructor",
    image: "/assets/instructors/harjot-singh.png",
    bio: "Youth, adult, and campus workshops with a focus on real-world practice.",
  },
] as const;

export const audienceIcons = [
  { href: "/programs/schools", label: "School", image: "/assets/icons/school.png" },
  { href: "/programs#corporate", label: "Workplace", image: "/assets/icons/workplace.png" },
  { href: "/book?chat=1", label: "Family", image: "/assets/icons/family.png" },
  { href: "/programs#workshops", label: "Community", image: "/assets/icons/community.png" },
  { href: "/programs#workshops", label: "Club", image: "/assets/icons/club.png" },
  { href: "/partners", label: "Sponsor", image: "/assets/icons/sponsor.png" },
] as const;
