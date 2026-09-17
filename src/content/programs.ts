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
      "Parents and teachers report significant improvement in behaviour, responsibility, and confidence.",
    ],
  },
  {
    slug: "adults",
    title: "Adults",
    audience: "18+",
    summary:
      "Practical awareness, verbal de-escalation, and Fullpower self-defense for everyday adult life — home, commute, travel, and work.",
    format: "Evening classes, private/small groups, or weekend intensives.",
    duration: "60–90 minutes · drop-in workshop or ongoing class",
    who: "Working adults, families, mixed community groups.",
    learn: [
      "Reading situations before they become incidents",
      "Voice, posture, and verbal skills",
      "Releases, escapes, and simple defensive skills",
      "Home, travel, and parking-lot awareness",
      "Family safety planning",
    ],
    outcomes: [
      "Skills you can remember under stress",
      "A calmer, more deliberate safety mindset",
      "A clear next step into family or workplace programs",
    ],
  },
  {
    slug: "women",
    title: "Women’s Self-Defense",
    audience: "Women & girls’ groups",
    summary:
      "EMA Fight Back women’s workshops: awareness, avoidance, voice, and practical skills — including everyday objects — built for real situations, not sport.",
    format: "Half-day / full-day workshops, office batches, community groups, or a short series.",
    duration: "2–6 hours for a workshop · series available",
    who: "Women, colleges, corporates, RWAs, and community organisations.",
    learn: [
      "Early warning signs and avoidance",
      "Boundary language that is clear and usable",
      "Harassment and verbal conflict scenarios",
      "Practical Fullpower skills and escapes",
      "Safety with daily-use items and travel habits",
    ],
    outcomes: [
      "Participants practise, they do not only watch a demo",
      "Groups leave with shared language and a follow-up path",
      "Institutions can repeat the program for new batches",
    ],
  },
  {
    slug: "seniors",
    title: "Senior Citizens",
    audience: "Older adults",
    summary:
      "Respectful, adapted safety training: confidence, voice, simple releases, and community awareness — never copied from a youth class.",
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
    title: "Special Needs / Challengers",
    audience: "Adapted groups & caregivers",
    summary:
      "A modified People Safety curriculum delivered with patience, respect, and caregiver partnership. We adapt — we do not force a standard class.",
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
    title: "Schools & Institutions",
    audience: "Schools, colleges, medical campuses",
    summary:
      "Structured People Safety for campuses: students, staff, faculty, and — for healthcare institutions — the full ecosystem including security and housekeeping.",
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
    title: "Instructor Training",
    audience: "Professionals & community leaders",
    summary:
      "Prepare to teach People Safety, bullying prevention, emotional safety, and Fullpower skills. Short consultancy first. Training, assessment, and certification are separate steps.",
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
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}
