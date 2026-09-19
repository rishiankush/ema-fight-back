export type Program = {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  format: string;
  duration: string;
  learn: string[];
  outcomes: string[];
  who: string;
};

export const programs: Program[] = [
  {
    slug: "kids",
    title: "Kids Program (3–8 Years)",
    audience: "Ages 3–8",
    summary: "Building Safety, Confidence & Good Habits from the Very Beginning",
    format:
      "1-Day Parent–Child Workshop, 3-Day Safety Series, weekly classes, school programs, or society sessions.",
    duration: "45–60 minutes per session · group size 10–30",
    who: "Parents and young children between 3 and 8 years.",
    learn: [
      "Recognizing safe vs. unsafe situations",
      "Identifying safe and unsafe touch",
      "Saying “STOP!” with confidence",
      "Asking for help calmly",
      "What to do if they get lost",
    ],
    outcomes: [
      "Say “NO!” in a strong voice",
      "Set clear boundaries with children and adults",
      "Recognize unsafe situations",
      "Ask for help immediately",
    ],
  },
  {
    slug: "juniors",
    title: "Juniors Program (9–12 Years)",
    audience: "Ages 9–12",
    summary: "Confidence, Awareness & Smart Safety Skills for Growing Kids",
    format:
      "1-Day Junior Safety Workshop, weekly classes, school-based programs, or community / society workshops.",
    duration: "60 minutes · group size 15–35",
    who: "Children aged 9 to 12 years, parents, schools, and community groups.",
    learn: [
      "Spotting unsafe situations",
      "Saying “NO” clearly and respectfully",
      "Strategies for verbal, social, and physical bullying",
      "Online safety basics",
      "Age-appropriate emergency breakaways and exits",
    ],
    outcomes: [
      "Speak with confidence",
      "Handle bullying smartly",
      "Protect themselves online",
      "Make safer choices every day",
    ],
  },
  {
    slug: "teens",
    title: "Teens Program (13–18 Years)",
    audience: "Ages 13–18",
    summary: "Strong Minds. Strong Boundaries. Strong Safety.",
    format:
      "1-Day Intensive Teenpower Workshop, 3-Day Series, 6–8 week course, school workshops, or online / in-person modules.",
    duration: "60–75 minutes · group size 15–40",
    who: "Young people aged 13–18 years, schools, coaching centres, and youth groups.",
    learn: [
      "Situational awareness and risk assessment",
      "Boundary setting and saying “STOP” with confidence",
      "Emotional safety and calm decision-making",
      "Online and digital safety",
      "Emergency-only physical safety responses",
    ],
    outcomes: [
      "Recognize unsafe situations early",
      "Set strong boundaries",
      "Handle bullies and peer pressure",
      "Stay calm and think clearly",
      "Use assertive communication",
      "Protect themselves online and offline",
      "Know how to escape physical danger",
      "Ask for help without hesitation",
      "Feel more confident in daily life",
    ],
  },
  {
    slug: "adults",
    title: "Adults Program",
    audience: "18+",
    summary: "Practical, Real-World Safety Skills for Everyday Life",
    format:
      "1-Day Fullpower Intensive, 3-Day Safety Series, 6–8 week course, workplace workshops, or family sessions.",
    duration: "60–90 minutes per session · group size 10–40",
    who: "Men, women, parents, seniors, professionals, and young adults.",
    learn: [
      "Situational awareness and early danger signs",
      "Boundary setting and de-escalation",
      "Conflict resolution and calm communication",
      "Home, workplace, and travel safety planning",
      "Emergency-only Fullpower self-defense",
    ],
    outcomes: [
      "Feel more confident and prepared",
      "Make safer decisions",
      "Set and enforce boundaries",
      "Stay calm under pressure",
      "Protect themselves in emergencies",
      "Safeguard their family and workplace",
    ],
  },
  {
    slug: "women",
    title: "Women’s Self-Defense Program",
    audience: "Women & girls’ groups",
    summary: "Practical, Realistic & Confidence-Building Safety Skills for Women",
    format:
      "1-Day Women’s Self-Defense Workshop, 3-Day Intensive, 4–8 week course, corporate, college, or community sessions.",
    duration: "60–90 minutes · group size 10–60",
    who: "Women & girls (13 years and above), colleges, corporates, homemakers, mothers, and community organizations.",
    learn: [
      "Situational awareness and spotting danger early",
      "Boundaries, assertiveness, and verbal self-defense",
      "Emotional strength and overcoming freeze response",
      "Emergency-only Fullpower physical self-defense",
      "Travel and daily-life safety habits",
    ],
    outcomes: [
      "Identify unsafe behaviour early",
      "Set and enforce boundaries",
      "Protect themselves using simple techniques",
      "Travel with confidence",
      "Feel safer, stronger, and more independent",
    ],
  },
  {
    slug: "seniors",
    title: "Senior Citizens Safety Program",
    audience: "Older adults",
    summary: "Confidence, Awareness & Practical Safety Skills for Older Adults",
    format: "Short sessions, society workshops, or family-inclusive groups.",
    duration: "45–60 minutes · gentle pacing",
    who: "Senior groups, RWAs, families supporting parents.",
    learn: [
      "Awareness at home and in the neighbourhood",
      "Voice and help-seeking without embarrassment",
      "Simple releases and balance-aware movement",
      "Scam and stranger-at-the-door habits",
      "How family members can support, not take over",
    ],
    outcomes: [
      "Dignity and independence stay at the centre",
      "Families get a realistic home safety plan",
      "Communities can host this as a regular offering",
    ],
  },
  {
    slug: "special-needs",
    title: "Special Needs / Challengers Safety Program",
    audience: "Adapted groups & caregivers",
    summary: "Gentle, Adapted & Inclusive People Safety Training for All Abilities",
    format: "Small groups, caregiver-inclusive sessions, school/NGO partnerships.",
    duration: "Decided after a 1-to-1 consultancy",
    who: "Families, special educators, NGOs, and inclusive schools.",
    learn: [
      "Personal safety concepts at the right cognitive level",
      "Help-seeking and trusted-adult maps",
      "Boundary language and consent in simple terms",
      "Caregiver strategies for public spaces",
      "Modified physical skills only where appropriate",
    ],
    outcomes: [
      "The plan fits the person, not the other way around",
      "Caregivers are part of the training, not spectators",
      "Institutions get a respectful, documented approach",
    ],
  },
  {
    slug: "schools",
    title: "Schools & Institutions Program",
    audience: "Schools, colleges, institutions",
    summary: "Empowering Students, Teachers & Staff With Life-Saving People Safety Skills",
    format: "Awareness demos, year-wise batches, staff development, safety week, or year-long modules.",
    duration: "From a one-day workshop to a 2–4 week campus program",
    who: "Principals, coordinators, medical college administrators, university student affairs.",
    learn: [
      "Age-wise student safety and anti-bullying",
      "Staff and teacher response language",
      "Women’s safety for campus communities",
      "Healthcare campus coverage: students, clinicians, admin, security",
      "Feedback, attendance, and follow-up offers",
    ],
    outcomes: [
      "A program, not a one-time assembly",
      "Every role on campus has a relevant session",
      "Leadership gets a clear proposal after a short consultancy",
    ],
  },
  {
    slug: "instructor-training",
    title: "Instructor Training Program",
    audience: "Professionals & community leaders",
    summary: "Become a Certified EMA Fight Back People Safety & Self-Defense Instructor",
    format: "1-to-1 consultancy, then training by eligibility. In-person / online / hybrid.",
    duration: "Decided after consultancy and screening",
    who: "Teachers, coaches, martial artists, trainers, HR, school staff, social workers, parent volunteers.",
    learn: [
      "How to teach People Safety simply — demonstration, role-play, practice",
      "Age-specific curriculum: kids through seniors and special groups",
      "Class flow, inclusion, and managing anxious or disruptive participants",
      "Ethics, professional boundaries, trauma-aware communication",
      "Instructor-level Fullpower skills and scenario teaching",
    ],
    outcomes: [
      "You are screened before you train — the credential stays meaningful",
      "You leave with teaching tools, not only personal skills",
      "Opportunities to run EMA programs are discussed, never promised for a fee",
    ],
  },
  {
    slug: "corporate",
    title: "Corporate Safety & Self-Defense Workshops",
    audience: "Workplaces & organisations",
    summary:
      "Empowering Employees With Practical Safety, Confidence & Workplace Protection Skills",
    format: "Corporate workshops for offices, factories, and organisations.",
    duration: "Decided after consultancy",
    who: "Employees, managers, HR teams, and leadership groups.",
    learn: [
      "Situational awareness",
      "Boundary setting at workplace",
      "Workplace harassment prevention",
      "Verbal self-defense",
      "Emergency response skills",
    ],
    outcomes: [
      "Safer, more confident teams",
      "Clearer workplace boundaries",
      "Practical emergency responses",
    ],
  },
  {
    slug: "family",
    title: "Family Safety Program",
    audience: "Parents, children, and teens",
    summary: "Practical Safety Skills for Parents & Children — Together as a Team",
    format: "1-Day Family Workshop, 3-Day Series, weekly program, or private family sessions.",
    duration: "45–90 minutes · group size 3–20 families",
    who: "Parents and children who want to learn together.",
    learn: [
      "Communication and trust building",
      "Boundary setting for everyone",
      "Family safety planning",
      "Shared safety language at home",
    ],
    outcomes: [
      "Families learn together",
      "Parents know how to teach safety without fear",
      "Children have a shared safety language",
    ],
  },
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}

export const programListingKeys: Record<
  string,
  { title: string; summary: string; audience: string }
> = {
  kids: { title: "listing.kidsTitle", summary: "listing.kidsSummary", audience: "listing.kidsAudience" },
  juniors: {
    title: "listing.juniorsTitle",
    summary: "listing.juniorsSummary",
    audience: "listing.juniorsAudience",
  },
  teens: { title: "listing.teensTitle", summary: "listing.teensSummary", audience: "listing.teensAudience" },
  adults: { title: "listing.adultsTitle", summary: "listing.adultsSummary", audience: "listing.adultsAudience" },
  women: { title: "listing.womenTitle", summary: "listing.womenSummary", audience: "listing.womenAudience" },
  seniors: {
    title: "listing.seniorsTitle",
    summary: "listing.seniorsSummary",
    audience: "listing.seniorsAudience",
  },
  "special-needs": {
    title: "listing.specialTitle",
    summary: "listing.specialSummary",
    audience: "listing.specialAudience",
  },
  schools: {
    title: "listing.schoolsTitle",
    summary: "listing.schoolsSummary",
    audience: "listing.schoolsAudience",
  },
  "instructor-training": {
    title: "listing.instructorTitle",
    summary: "listing.instructorSummary",
    audience: "listing.instructorAudience",
  },
  corporate: {
    title: "listing.corporateTitle",
    summary: "listing.corporateSummary",
    audience: "listing.corporateAudience",
  },
  family: {
    title: "listing.familyTitle",
    summary: "listing.familySummary",
    audience: "listing.familyAudience",
  },
};
