import { aboutPage } from "@/content/aboutPage";
import { donatePage } from "@/content/donatePage";
import { privacySections, termsIntro, termsSections } from "@/content/legal";
import { programPages } from "@/content/programPages";
import { quickSafetyTips, resourceArticles } from "@/content/resourcesPage";
import { storeItems } from "@/content/site";
import { testimonialGroups } from "@/content/testimonials";

export const enCopy = {
  about: {
    eyebrow: "About",
    title: "About EMA Fight Back",
    uniqueTrackTitle: "Strong track record with institutions",
    ...aboutPage,
  },
  resources: {
    eyebrow: "Resources",
    title: "Safety Tips & Awareness Blog",
    description:
      "Practical Advice to Stay Safe at Home, School, Work & In Public Spaces. Easy-to-follow tips, real-life advice, and expert guidance to help children, teens, adults, families, and seniors stay safe every day.",
    articlesTitle: "Featured Safety Articles",
    articlesIntro:
      "Welcome to the EMA Fight Back Safety Blog, your trusted resource for People Safety, Bullying Prevention, Emotional Safety, and Self-Defense insights.",
    tipsTitle: "Quick Safety Tips Everyone Should Know",
    questionTitle: "Submit a Safety Question",
    questionIntro: "Have a safety question? We’ll answer it in our next blog post.",
    ask: "Ask a Question",
    workshopTitle: "Need a Safety Workshop?",
    workshopBody: "If you want your school, company, community or family to learn practical skills:",
    callNow: "Call Now",
    articles: resourceArticles.map((item) => ({
      title: item.title,
      intro: item.intro,
      items: [...item.items],
    })),
    tips: quickSafetyTips.map((tip) => ({ title: tip.title, body: tip.body })),
  },
  donate: {
    eyebrow: "Support Us",
    donateNow: "Donate Now",
    csrPartner: "Become a CSR Partner",
    getInTouch: "Get in Touch",
    getInTouchIntro: "Have questions about donating or sponsoring? We are happy to assist you.",
    call: "Call",
    whatsapp: "WhatsApp",
    email: "Email",
    ...donatePage,
  },
  partners: {
    eyebrow: "Partners & Sponsors",
    title: "Partner With Us",
    csrBody:
      "We partner with corporates to deliver school safety programs, women’s safety workshops, community outreach projects, and large-scale training missions. This is ideal for companies looking to create social impact and community upliftment.",
    csrCta: "CSR Partnership Inquiry",
    sponsorCta: "Sponsor a Program",
    supportUs: "Support Us",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What Parents, Schools, Corporates & Participants Say About EMA Fight Back",
    description:
      "Real stories. Real confidence. Real impact. For over 40 years, EMA Fight Back has empowered children, teens, adults, women, seniors, teachers, corporates, and families with practical People Safety & Self-Defense skills.",
    groups: testimonialGroups,
  },
  faqs: {
    eyebrow: "FAQs / Safety Tips",
    title: "FAQs / Safety Tips",
    description:
      "Short answers for common questions about EMA Fight Back programs, plus practical safety tips you can use today.",
    common: "Common questions",
  },
  book: {
    eyebrow: "Book a Workshop",
    title: "Book a Workshop",
    description:
      "Bring EMA Fight Back Training to Your School, Corporate Office, Society, or Community. Fill out the form below to schedule a People Safety, Bullying Prevention, or Self-Defense workshop. Our team will contact you within 24 hours to confirm details and help you select the right program for your group.",
    seeWorkshops: "See workshop types",
    intro:
      "Choose the form that matches you. Detailed questions — concerns, timing, budget, previous experience — belong in the consultancy.",
    personalTitle: "Personal safety consultancy",
    personalIntro: "For individuals and families. Preferred consultancy: online EMA Safety Consultancy — ₹99.",
    personalSubmit: "Book my ₹99 safety consultancy",
    personalSuccessTitle: "Thank you for contacting EMA Fight Back",
    personalSuccessBody:
      "Your enquiry has been received. The next step is a personal 1-to-1 consultancy. We will contact you to schedule it and recommend the most suitable online, offline, workshop, family, or community program.",
    orgTitle: "Schools, campuses & corporates",
    orgIntro: "A short form so we understand your organization and connect you with the right EMA consultant.",
    orgSubmit: "Request organisation consultancy",
    orgSuccessTitle: "Your institutional enquiry is in",
    orgSuccessBody:
      "Thank you. An EMA representative will contact you to schedule a consultancy for your school, college, medical campus, workplace, or community group.",
    instructorTitle: "Instructor training — consultancy request",
    instructorIntro:
      "Interested in becoming an EMA Fight Back Instructor? Tell us a little about yourself. Suitability is discussed in a personal consultancy — not decided by a long form.",
    instructorSubmit: "Book my instructor consultancy",
    instructorSuccessTitle: "Thank you for your interest in EMA Fight Back Instructor Training",
    instructorSuccessBody:
      "Your enquiry has been received. The next step is a personal 1-to-1 consultancy with an EMA representative. We will discuss your background, what you want to teach, training requirements, the certification pathway, and next steps. We will contact you to schedule your consultancy.",
    preferTalk: "Prefer to talk now?",
    contactLink: "Call, WhatsApp, or use the contact page.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Call, WhatsApp, or send a short note",
    description:
      "Phone and WhatsApp are the fastest. If you write, keep it brief — we will take the details on a consultancy call.",
    phone: "Phone",
    whatsapp: "WhatsApp",
    messageEma: "Message EMA",
    email: "Email",
    location: "Location",
    mapTitle: "Chandigarh map",
    formTitle: "Contact form",
    formIntro: "Name, phone, email, message. We’ll reply with a time to talk.",
    submit: "Send message",
    successTitle: "Message received",
    successBody: "Thank you. The EMA team will review your note and contact you with the next step.",
  },
  store: {
    eyebrow: "Store",
    title: "Store",
    description: "ebooks, teaching kits, comics, manuals.",
    items: storeItems.map((item) => ({ title: item.title, body: item.body })),
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "EMA Fight Back respects your privacy and is committed to protecting the personal information you provide when you visit our website, submit an enquiry, register for a program, book a workshop, or request a consultancy.",
    contactTitle: "18. Contact Us",
    contactIntro: "For privacy-related questions, requests or complaints:",
    phone: "Phone",
    email: "Email",
    location: "Location",
    sections: privacySections,
  },
  terms: {
    title: "Terms & Conditions",
    description:
      "These Terms govern your access to and use of the EMA Fight Back website, online courses, safety consultancy, workshops, training programs, digital resources and other services.",
    intro: termsIntro,
    sections: termsSections,
    contactTitle: "24. Contact Us",
    contactIntro: "For questions regarding these Terms, please contact:",
    phone: "Phone",
    email: "Email",
    location: "Location",
  },
  forms: {
    received: "Received",
    sending: "Sending…",
    select: "Select",
  },
  programs: programPages,
};

type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? Widen<U>[]
        : T extends object
          ? { [K in keyof T]: Widen<T[K]> }
          : T;

export type SiteCopy = Widen<typeof enCopy>;
