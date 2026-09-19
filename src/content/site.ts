export const site = {
  name: "EMA Fight Back",
  tagline: "People Safety & Self-Defense",
  description:
    "Practical safety skills for real life — for individuals, families, schools, colleges, healthcare institutions, workplaces and communities.",
  philosophy: "Safety is a Skill — Let's Build It Together.",
  founded: 1984,
  location: "Chandigarh, India",
  phone: "9216444949",
  phoneDisplay: "9216-444-949",
  email: "bs.handa@gmail.com",
  whatsapp: "919216444949",
  founder: {
    name: "Master B. S. Handa",
    role: "Founder / Chief Instructor",
    note: "International Asian player with decades of teaching experience across schools, corporates, and communities.",
  },
} as const;

export const whatsappHref = `https://wa.me/${site.whatsapp}`;
export const phoneHref = `tel:+91${site.phone}`;
export const mailHref = `mailto:${site.email}`;

export const nav = {
  primary: [
    { href: "/", labelKey: "nav.home" },
    { href: "/about", labelKey: "nav.about" },
    {
      href: "/programs",
      labelKey: "nav.programs",
      children: [
        { href: "/programs/kids", labelKey: "nav.kids" },
        { href: "/programs/juniors", labelKey: "nav.juniors" },
        { href: "/programs/teens", labelKey: "nav.teens" },
        { href: "/programs/adults", labelKey: "nav.adults" },
        { href: "/programs/women", labelKey: "nav.women" },
        { href: "/programs/seniors", labelKey: "nav.seniors" },
        { href: "/programs/special-needs", labelKey: "nav.special" },
        { href: "/programs/schools", labelKey: "nav.schools" },
        { href: "/programs/corporate", labelKey: "nav.corporate" },
        { href: "/programs/instructor-training", labelKey: "nav.instructor" },
        { href: "/programs/family", labelKey: "nav.family" },
      ],
    },
    {
      href: "/resources",
      labelKey: "nav.resources",
      children: [
        { href: "/resources", labelKey: "nav.library" },
        { href: "/faqs", labelKey: "nav.faqs" },
        { href: "/store", labelKey: "nav.store" },
        { href: "/partners", labelKey: "nav.partners" },
        { href: "/donate", labelKey: "nav.donate" },
      ],
    },
    { href: "/testimonials", labelKey: "nav.testimonials" },
    { href: "/contact", labelKey: "nav.contact" },
  ],
  cta: { href: "/book", labelKey: "nav.book" },
} as const;

export const audiences = [
  { href: "/programs/kids", label: "Parent", detail: "Child or junior safety" },
  { href: "/programs/teens", label: "Student", detail: "Teen & college safety" },
  { href: "/programs/women", label: "Woman", detail: "Personal safety skills" },
  { href: "/programs/adults", label: "Adult", detail: "Everyday self-defense" },
  { href: "/programs/schools", label: "School", detail: "Campus safety programs" },
  { href: "/programs/schools", label: "College", detail: "Medical & university" },
  { href: "/programs/corporate", label: "Corporate", detail: "Workplace workshops" },
  { href: "/programs#workshops", label: "Community", detail: "Societies & groups" },
] as const;

export const benefits = [
  { titleKey: "home.benefit1Title", bodyKey: "home.benefit1Body" },
  { titleKey: "home.benefit2Title", bodyKey: "home.benefit2Body" },
  { titleKey: "home.benefit3Title", bodyKey: "home.benefit3Body" },
  { titleKey: "home.benefit4Title", bodyKey: "home.benefit4Body" },
  { titleKey: "home.benefit5Title", bodyKey: "home.benefit5Body" },
  { titleKey: "home.benefit6Title", bodyKey: "home.benefit6Body" },
] as const;

export const stats = [
  { value: "1984", labelKey: "home.statSince" },
  { value: "All ages", labelKey: "home.statAges" },
  { value: "1-to-1", labelKey: "home.statConsult" },
  { value: "Chandigarh", labelKey: "home.statBase" },
] as const;

export const about = {
  intro:
    "EMA Fight Back is a People Safety and Self-Defense system. We teach awareness, boundaries, confidence, and practical skills that work in real life — for individuals, families, schools, healthcare campuses, workplaces, and communities.",
  difference:
    "We are not primarily a martial arts academy. Martial arts can be a tool. People Safety is the brand. Every program is designed around who you are protecting — a child, a teenager, a woman, a senior, a campus, or a workplace — not around belts and sport fighting.",
  vision:
    "A culture where safety is taught as a life skill — as ordinary, and as essential, as first aid.",
  mission:
    "To deliver clear, age-appropriate People Safety, bullying prevention, emotional safety, and Fullpower self-defense training that people can actually use.",
  values: [
    { title: "Clarity", body: "Simple language. Practical examples. No intimidation." },
    { title: "Respect", body: "Trauma-aware teaching. Professional boundaries. Inclusive groups." },
    { title: "Credibility", body: "Training, assessment, and certification are distinct. We do not sell empty titles." },
    { title: "Conversation first", body: "Short forms capture the need. A 1-to-1 consultancy finds the right program." },
  ],
  serve: [
    "Children and families",
    "Teens and college students",
    "Women and working professionals",
    "Senior citizens",
    "Special needs groups and caregivers",
    "Schools, medical colleges, and universities",
    "Corporates and societies",
  ],
};

export const resources = [
  {
    title: "Awareness before technique",
    category: "Safety Tips",
    body: "Most incidents have a lead-up: isolation, testing of boundaries, or ignored discomfort. We teach people to notice that lead-up early.",
  },
  {
    title: "Voice is a safety tool",
    category: "Safety Tips",
    body: "A clear, loud, specific sentence (“Stop. I do not want this.”) is often more useful than a complex physical skill.",
  },
  {
    title: "Bullying is a pattern",
    category: "Kids & Teens",
    body: "EMA programs treat bullying as repeated targeting — not a one-time fight. Children learn reporting, buddy systems, and adult help paths.",
  },
  {
    title: "Women’s safety is not only physical",
    category: "Women",
    body: "Workshops cover travel, workplace, digital boundaries, and home safety — then add simple Fullpower skills for when words are not enough.",
  },
  {
    title: "Campus programs need every role",
    category: "Institutions",
    body: "A medical college or school program should reach students, faculty, staff, housekeeping, and security — not only one batch of students.",
  },
  {
    title: "Seniors need confidence, not sparring",
    category: "Seniors",
    body: "Balance, voice, simple releases, and community awareness. Training is adapted, never copied from a kids or adult class.",
  },
] as const;

export const storeItems = [
  { title: "ebooks", body: "Enquire for current availability." },
  { title: "teaching kits", body: "Enquire for current availability." },
  { title: "comics", body: "Enquire for current availability." },
  { title: "manuals", body: "Enquire for current availability." },
] as const;

export const partners = [
  {
    title: "Schools & colleges",
    body: "Host a campus safety week, staff development day, or year-long student program.",
  },
  {
    title: "Healthcare institutions",
    body: "Medical colleges and hospitals: students, doctors, nurses, faculty, admin, housekeeping, and security.",
  },
  {
    title: "Corporates & CSR",
    body: "Workplace safety, women’s safety, and community CSR programs with measurable attendance and feedback.",
  },
  {
    title: "Clubs, RWAs & NGOs",
    body: "Society workshops, women’s groups, and community events. We can co-brand and document impact.",
  },
] as const;

export const sitemapGroups = [
  {
    titleKey: "sitemap.explore",
    links: [
      { href: "/", labelKey: "sitemap.home", detailKey: "sitemap.homeDetail" },
      { href: "/about", labelKey: "sitemap.about", detailKey: "sitemap.aboutDetail" },
      { href: "/testimonials", labelKey: "sitemap.testimonials", detailKey: "sitemap.testimonialsDetail" },
      { href: "/faqs", labelKey: "sitemap.faqs", detailKey: "sitemap.faqsDetail" },
      { href: "/contact", labelKey: "sitemap.contact", detailKey: "sitemap.contactDetail" },
    ],
  },
  {
    titleKey: "sitemap.programs",
    links: [
      { href: "/programs", labelKey: "sitemap.allPrograms", detailKey: "sitemap.allProgramsDetail" },
      { href: "/programs/kids", labelKey: "sitemap.kids", detailKey: "sitemap.kidsDetail" },
      { href: "/programs/juniors", labelKey: "sitemap.juniors", detailKey: "sitemap.juniorsDetail" },
      { href: "/programs/teens", labelKey: "sitemap.teens", detailKey: "sitemap.teensDetail" },
      { href: "/programs/adults", labelKey: "sitemap.adults", detailKey: "sitemap.adultsDetail" },
      { href: "/programs/women", labelKey: "sitemap.women", detailKey: "sitemap.womenDetail" },
      { href: "/programs/seniors", labelKey: "sitemap.seniors", detailKey: "sitemap.seniorsDetail" },
      { href: "/programs/special-needs", labelKey: "sitemap.special", detailKey: "sitemap.specialDetail" },
      { href: "/programs/schools", labelKey: "sitemap.schools", detailKey: "sitemap.schoolsDetail" },
      { href: "/programs/corporate", labelKey: "sitemap.corporate", detailKey: "sitemap.corporateDetail" },
      { href: "/programs/family", labelKey: "sitemap.family", detailKey: "sitemap.familyDetail" },
      { href: "/programs/instructor-training", labelKey: "sitemap.instructor", detailKey: "sitemap.instructorDetail" },
      { href: "/book", labelKey: "sitemap.book", detailKey: "sitemap.bookDetail" },
    ],
  },
  {
    titleKey: "sitemap.resources",
    links: [
      { href: "/resources", labelKey: "sitemap.library", detailKey: "sitemap.libraryDetail" },
      { href: "/store", labelKey: "sitemap.store", detailKey: "sitemap.storeDetail" },
      { href: "/partners", labelKey: "sitemap.partners", detailKey: "sitemap.partnersDetail" },
      { href: "/donate", labelKey: "nav.donate", detailKey: "sitemap.partnersDetail" },
    ],
  },
] as const;

export const workshopTypes = [
  {
    id: "schools",
    titleKey: "programsPage.workshopSchoolsTitle",
    bodyKey: "programsPage.workshopSchoolsBody",
    href: "/programs/schools",
  },
  {
    id: "colleges",
    titleKey: "programsPage.workshopCollegesTitle",
    bodyKey: "programsPage.workshopCollegesBody",
    href: "/programs/schools",
  },
  {
    id: "corporate",
    titleKey: "programsPage.workshopCorporateTitle",
    bodyKey: "programsPage.workshopCorporateBody",
    href: "/programs/corporate",
  },
  {
    id: "women",
    titleKey: "programsPage.workshopWomenTitle",
    bodyKey: "programsPage.workshopWomenBody",
    href: "/programs/women",
  },
  {
    id: "community",
    titleKey: "programsPage.workshopCommunityTitle",
    bodyKey: "programsPage.workshopCommunityBody",
    href: "/book?chat=1",
  },
  {
    id: "instructor",
    titleKey: "programsPage.workshopInstructorTitle",
    bodyKey: "programsPage.workshopInstructorBody",
    href: "/programs/instructor-training",
  },
] as const;

export const events = [
  {
    dateKey: "programsPage.eventOngoing",
    titleKey: "programsPage.eventConsultTitle",
    detailKey: "programsPage.eventConsultDetail",
  },
  {
    dateKey: "programsPage.eventOnRequest",
    titleKey: "programsPage.eventSchoolTitle",
    detailKey: "programsPage.eventSchoolDetail",
  },
  {
    dateKey: "programsPage.eventOnRequest",
    titleKey: "programsPage.eventWomenTitle",
    detailKey: "programsPage.eventWomenDetail",
  },
  {
    dateKey: "programsPage.eventOnRequest",
    titleKey: "programsPage.eventInstructorTitle",
    detailKey: "programsPage.eventInstructorDetail",
  },
] as const;
