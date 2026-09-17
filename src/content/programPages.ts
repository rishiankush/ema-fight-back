export type ProgramFaq = { q: string; a: string };

export type ProgramLearnGroup = {
  title: string;
  intro?: string;
  items: string[];
};

export type ProgramExtraSection = {
  id: string;
  title: string;
  intro?: string;
  groups?: { title: string; items: string[] }[];
  items?: string[];
  close?: string;
};

export type ProgramPageContent = {
  slug: string;
  title: string;
  tagline: string;
  overview: string[];
  why: { title: string; intro: string; items: string[]; close?: string };
  learn: { title: string; groups: ProgramLearnGroup[]; note?: string };
  extraSections: ProgramExtraSection[];
  format: {
    title: string;
    intro: string;
    options: string[];
    duration: string;
    groupSize: string;
  };
  outcomes: { title: string; intro: string; items: string[]; note?: string };
  faqs: ProgramFaq[];
  book: { title: string; intro: string; venues: string[] };
};

export const programPages: ProgramPageContent[] = [
  {
    slug: "kids",
    title: "Kids Program (3–8 Years)",
    tagline: "Building Safety, Confidence & Good Habits from the Very Beginning",
    overview: [
      "The EMA Fight Back Kids Program is a fun, age-appropriate, and family-friendly safety program designed especially for young children between 3 to 8 years. These early years are the foundation of a child’s emotional and physical safety. Our program teaches children — along with their parents — how to stay safe, speak up, set boundaries, and make safer choices in daily life.",
      "This program is gentle, positive, and empowering. We focus on building confidence, not fear.",
    ],
    why: {
      title: "Why Kids Need People Safety Skills",
      intro: "Children often face situations where:",
      items: [
        "Someone takes their things",
        "They feel scared or confused",
        "Someone touches them in an unsafe way",
        "They get separated from parents in public",
        "Another child pushes, hits, or bullies",
        "They don’t know how to say “NO”",
        "They don’t feel confident to speak up",
      ],
      close:
        "The Kids Program gives them simple, practical tools to handle these challenges safely and confidently.",
    },
    learn: {
      title: "What Children Learn",
      groups: [
        {
          title: "1. Awareness Skills",
          items: [
            "Recognizing safe vs. unsafe situations",
            "Staying close to trusted adults",
            "Understanding “Uh-Oh” feelings",
          ],
        },
        {
          title: "2. Body Safety & Boundaries",
          items: [
            "Identifying safe and unsafe touch",
            "Saying “STOP!” with confidence",
            "Moving away from danger",
            "Protecting personal space",
          ],
        },
        {
          title: "3. Emotional Safety",
          items: [
            "Managing fear and confusion",
            "Asking for help calmly",
            "Expressing feelings respectfully",
          ],
        },
        {
          title: "4. Communication Skills",
          items: [
            "Talking to parents about worries",
            "Asking for help confidently",
            "Using strong, clear words",
          ],
        },
        {
          title: "5. Practical Safety Habits",
          items: [
            "What to do if they get lost",
            "Safety with known people & strangers",
            "Safe movements: step back, turn away",
            "Basic physical responses for emergencies",
          ],
        },
      ],
    },
    extraSections: [
      {
        id: "parent-child",
        title: "Parent–Child Learning",
        intro:
          "Parents play a major role in the Kids Program. Every session includes activities that parents and children practice together.",
        groups: [
          {
            title: "Parents learn:",
            items: [
              "How to teach safety at home",
              "How to talk about boundaries",
              "How to build trust so children report problems early",
              "How to reduce fear and increase confidence",
            ],
          },
        ],
        close: "Parents become partners in their child’s safety.",
      },
      {
        id: "teaching",
        title: "How We Teach Kids (Fun & Friendly)",
        groups: [
          {
            title: "Our teaching style is:",
            items: [
              "Playful and imaginative",
              "Full of stories, games, and role-plays",
              "Simple and easy to remember",
              "Non-scary and positive",
              "Age-appropriate and gentle",
            ],
          },
        ],
        close: "Children enjoy every session while learning strong safety habits.",
      },
    ],
    format: {
      title: "Program Format",
      intro: "You can choose from:",
      options: [
        "1-Day Parent–Child Workshop",
        "3-Day Safety Series",
        "Weekly Classes (Monthly)",
        "School Programs (During School Hours)",
        "Special Sessions for Groups & Societies",
      ],
      duration: "45–60 minutes per session",
      groupSize: "10–30 children",
    },
    outcomes: {
      title: "Outcomes",
      intro: "After completing the Kids Program, children will be able to:",
      items: [
        "Say “NO!” in a strong voice",
        "Set clear boundaries with children and adults",
        "Recognize unsafe situations",
        "Move away from danger",
        "Stay calm in confusing moments",
        "Ask for help immediately",
        "Trust their own feelings",
        "Use simple safe-body techniques",
      ],
      note: "Parents will notice improved confidence and communication in their child.",
    },
    faqs: [
      {
        q: "Is this program scary for children?",
        a: "No. The program is very positive and friendly. We focus on confidence, not fear.",
      },
      {
        q: "Do parents need to attend?",
        a: "Yes, especially for ages 3–8. It builds trust, bonding, and long-term learning.",
      },
      {
        q: "Do children learn physical self-defense?",
        a: "Only very light, age-appropriate safety movements — no fighting techniques.",
      },
      {
        q: "Can we do this program in our school or society?",
        a: "Yes. We conduct workshops at schools, societies, and community halls",
      },
    ],
    book: {
      title: "Book the Kids Safety Program",
      intro: "Bring EMA Fight Back to your:",
      venues: ["School", "Society", "Group", "Club", "Community", "Family"],
    },
  },
  {
    slug: "juniors",
    title: "Juniors Program (9–12 Years)",
    tagline: "Confidence, Awareness & Smart Safety Skills for Growing Kids",
    overview: [
      "The EMA Fight Back Juniors Program is designed for children aged 9 to 12 years, a stage where they begin to experience more independence — travelling alone, interacting with peers, using devices, and facing social challenges.",
      "This program teaches practical People Safety Skills that help children stay safe, act confidently, and handle situations that commonly arise at school, home, playgrounds, online, and in public places.",
      "It builds confidence, courage, communication skills, and responsibility.",
    ],
    why: {
      title: "Why Juniors Need This Program",
      intro: "Children aged 9–12 experience:",
      items: [
        "Bullying or teasing at school",
        "Pressure from friends",
        "Conflicts and misunderstandings",
        "Unsafe touching or behaviour",
        "Being alone at home or outside",
        "Feeling shy or nervous to speak up",
        "Online interactions and digital risks",
        "Travel safety issues (bus stops, shops, lifts, parks)",
      ],
      close:
        "They are smart enough to understand danger but still developing the confidence to stand up for themselves. This program bridges that gap.",
    },
    learn: {
      title: "What Juniors Learn",
      groups: [
        {
          title: "1. Awareness & Early Prevention",
          items: [
            "Spotting unsafe situations",
            "Responding before things get worse",
            "Reading people’s behaviour",
            "Staying alert without fear",
          ],
        },
        {
          title: "2. Boundary Setting & Assertiveness",
          items: [
            "Using strong words and strong body language",
            "Saying “NO” clearly and respectfully",
            "Handling pushy behaviour",
            "Standing up to mild bullying",
          ],
        },
        {
          title: "3. Handling Bullying & Teasing",
          items: [
            "What to do when someone bothers you",
            "Safe ways to walk away",
            "How to get adult help",
            "Strategies for verbal, social, and physical bullying",
          ],
        },
        {
          title: "4. Online Safety Basics",
          items: [
            "Safe screen habits",
            "Handling online strangers",
            "Dealing with cyberbullying",
            "Protecting privacy",
          ],
        },
        {
          title: "5. Emotional Safety",
          items: [
            "Staying calm in confusing moments",
            "Managing fear and frustration",
            "Asking for help without hesitation",
          ],
        },
        {
          title: "6. Emergency Physical Responses",
          intro: "Age-appropriate self-defence skills:",
          items: [
            "Breakaways",
            "Escapes from holds",
            "Defensive blocking",
            "Safe exit strategies",
          ],
        },
      ],
      note: "No aggressive fighting — only safe, controlled techniques for emergencies.",
    },
    extraSections: [
      {
        id: "life-skills",
        title: "Life Skills They Develop",
        items: [
          "Confidence",
          "Courage",
          "Self-respect",
          "Peer communication",
          "Problem-solving",
          "Calm thinking",
          "Responsible decision-making",
        ],
        close: "These skills support daily life at home, school, and outdoors.",
      },
      {
        id: "teaching",
        title: "Teaching Approach",
        groups: [
          {
            title: "Our teaching style is:",
            items: [
              "Energizing and interactive",
              "Respectful and positive",
              "Developmentally appropriate",
              "Based on real-life practice",
            ],
          },
          {
            title: "We use:",
            items: [
              "Role-plays",
              "Games and activities",
              "Discussion circles",
              "Practice drills",
              "Real-life examples",
            ],
          },
        ],
        close: "Juniors learn by doing — not just by listening.",
      },
    ],
    format: {
      title: "Program Format",
      intro: "Available options:",
      options: [
        "1-Day Junior Safety Workshop",
        "Weekly Classes (Monthly Curriculum)",
        "School-Based Programs",
        "Community / Society Workshops",
      ],
      duration: "60 minutes",
      groupSize: "15–35 children",
    },
    outcomes: {
      title: "Outcomes",
      intro: "After finishing the Juniors Program, kids will:",
      items: [
        "Speak with confidence",
        "Set and maintain boundaries",
        "Handle bullying smartly",
        "Stay calm during emergencies",
        "Protect themselves online",
        "Move away from unsafe situations",
        "Seek help quickly",
        "Make safer choices every day",
      ],
      note: "Parents report strong improvement in their child’s independence and communication.",
    },
    faqs: [
      {
        q: "Is this suitable for shy kids?",
        a: "Yes. Our approach builds confidence gently, without pressure.",
      },
      {
        q: "Do children learn self-defence?",
        a: "Only age-safe emergency techniques — not aggressive fighting.",
      },
      {
        q: "Is this program different from the Kids Program?",
        a: "Yes. It is more advanced, with a focus on independence, school challenges, and peer pressure.",
      },
      {
        q: "Can this be conducted in schools?",
        a: "Absolutely. Schools frequently book this program.",
      },
    ],
    book: {
      title: "Book the Juniors Safety Program",
      intro: "Bring EMA Fight Back to your:",
      venues: ["School", "Society", "Club", "Coaching centre", "Community group"],
    },
  },
  {
    slug: "teens",
    title: "Teens Program (13–18 Years)",
    tagline: "Strong Minds. Strong Boundaries. Strong Safety.",
    overview: [
      "The EMA Fight Back Teens Program empowers young people (13–18 years) with the practical People Safety Skills they need to handle the real-world challenges of adolescence — school pressure, social conflicts, bullying, harassment, unsafe situations, independence, and online risks.",
      "Teens learn to stay calm, confident, aware, and in control — without aggression, fear, or panic.",
      "This program builds inner strength, communication skills, and real-life readiness.",
    ],
    why: {
      title: "Why Teens Need This Program",
      intro: "Teenages regularly face situations link:",
      items: [
        "Peer pressure",
        "Bullying at school or online",
        "Harassment in public places",
        "Group pressure to do something unsafe",
        "Unwanted touch or behaviour",
        "Travel safety concerns",
        "Misunderstandings turning into fights",
        "Emotional stress, confusion, or anger",
        "Difficulty setting boundaries",
        "Trouble speaking up when needed",
      ],
      close: "Teens often know something “feels wrong,” but don’t always know what to do.",
    },
    learn: {
      title: "What Teens Learn",
      groups: [
        {
          title: "1. Situational Awareness",
          items: [
            "Noticing danger signals early",
            "Reading body language",
            "Understanding safe vs. unsafe environments",
            "Risk assessment for daily travel, school, and public places",
          ],
        },
        {
          title: "2. Boundary Setting",
          items: [
            "Saying “STOP” with confidence",
            "Handling disrespect or pushy behaviour",
            "Setting boundaries with friends, peers, and strangers",
            "Understanding personal rights and safety",
          ],
        },
        {
          title: "3. Emotional Safety & Mindset",
          items: [
            "Staying calm under stress",
            "Managing fear, anger, and confusion",
            "Responding instead of reacting",
            "Building self-respect and self-confidence",
          ],
        },
        {
          title: "4. Communication & Assertion",
          items: [
            "Using strong body language",
            "Speaking firmly without aggression",
            "Getting help from trusted adults",
            "Handling peer pressure effectively",
          ],
        },
        {
          title: "5. Online & Digital Safety",
          items: [
            "Protecting privacy",
            "Handling cyberbullying",
            "Safe social media practices",
            "Keeping boundaries in online friendships and relationships",
          ],
        },
        {
          title: "6. Physical Safety Responses (Emergency Only)",
          intro: "Age-appropriate skills for dangerous situations:",
          items: [
            "Escape techniques",
            "Basic releases and breakaways",
            "Defensive positioning",
            "Safe movement and exit strategies",
          ],
        },
      ],
      note: "No aggressive fighting. Only purely defensive skills for emergencies.",
    },
    extraSections: [
      {
        id: "life-skills",
        title: "Life Skills Teens Will Use Forever",
        items: [
          "Confidence",
          "Self-discipline",
          "Respectful communication",
          "Calm decision-making",
          "Clear boundaries",
          "Assertiveness",
          "Improved judgment",
          "Leadership and responsibility",
        ],
      },
      {
        id: "teaching",
        title: "Teaching Method",
        groups: [
          {
            title: "Our Teenpower method is:",
            items: [
              "Realistic",
              "Respectful",
              "Non-judgmental",
              "Suitable for all personalities (shy, bold, anxious, confident)",
              "Based on practice, not lectures",
            ],
          },
          {
            title: "Sessions include:",
            items: [
              "Real-life role-plays",
              "Safe scenario practice",
              "Group discussions",
              "Problem-solving exercises",
              "Confidence-building activities",
            ],
          },
        ],
        close: "Teens don’t just learn — they experience the skills.",
      },
    ],
    format: {
      title: "Program Format",
      intro: "Choose from:",
      options: [
        "1-Day Intensive Teenpower Workshop",
        "3-Day Teenpower Series",
        "6–8 Week Course (Weekly Classes)",
        "School Safety Workshops",
        "Online or In-Person Modules",
        "Special workshops for girls, boys, or mixed groups",
      ],
      duration: "60–75 minutes",
      groupSize: "15–40 teens",
    },
    outcomes: {
      title: "Outcomes",
      intro: "After completing the Teens Program, participants will:",
      items: [],
      note: "Parents and teachers report significant improvement in behaviour, responsibility, and confidence.",
    },
    faqs: [
      {
        q: "Is this a self-defence class?",
        a: "It is primarily a People Safety program. Physical skills are taught only for emergencies and are age-appropriate.",
      },
      {
        q: "Will shy teens be comfortable?",
        a: "Yes. The program is respectful, supportive, and designed to include shy, introverted, or anxious teens comfortably.",
      },
      {
        q: "Can boys and girls join together?",
        a: "Yes. We also offer separate boys’ and girls’ workshops if requested.",
      },
      {
        q: "Is this suitable for school groups?",
        a: "Absolutely. Schools book this program regularly.",
      },
    ],
    book: {
      title: "Book the Teens Safety Program",
      intro: "Bring Teenpower training to your:",
      venues: ["School", "Coaching centre", "Community", "Society", "Youth group", "Family"],
    },
  },
];

export function getProgramPage(slug: string) {
  return programPages.find((page) => page.slug === slug);
}
