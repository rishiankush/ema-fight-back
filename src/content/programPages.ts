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
        id: "teach",
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
        "Ask for help immediately",
        "Stay calm in confusing moments",
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
        a: "Yes. We conduct workshops at schools, societies, and community halls.",
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
        id: "teach",
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
        "3-Day Workshop Series",
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
      venues: ["School", "Society", "Coaching centre", "Club", "Community group"],
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
      intro: "Teenagers regularly face situations like:",
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
      close:
        "Teens often know something “feels wrong,” but don’t always know what to do. This program fills that gap.",
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
        id: "teach",
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
      items: [
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
  {
    slug: "adults",
    title: "Adults Program",
    tagline: "Practical, Real-World Safety Skills for Everyday Life",
    overview: [
      "The EMA Fight Back Adults Program empowers individuals with the practical People Safety and Fullpower Self-Defense skills needed to stay safe at home, at work, while travelling, and in public places.",
      "This program is designed for men, women, parents, seniors, professionals, and young adults who want to feel more confident, aware, and prepared — without fear, panic, or aggression.",
      "The focus is on prevention first, followed by simple, effective self-defense skills only for real emergencies.",
    ],
    why: {
      title: "Why Adults Need People Safety Skills",
      intro: "Adults face situations like:",
      items: [
        "Workplace harassment or disrespect",
        "Threatening behaviour in public places",
        "Home safety concerns",
        "Travel risks (late hours, isolated places)",
        "Boundary issues with known people",
        "Verbal aggression or intimidation",
        "Unexpected emergencies",
        "Stressful or confusing confrontations",
        "Protecting children and seniors in the family",
      ],
      close:
        "Most unsafe incidents can be prevented through awareness, calm communication, and assertive boundaries — skills we teach clearly and simply.",
    },
    learn: {
      title: "What Adults Learn",
      groups: [
        {
          title: "1. Situational Awareness",
          items: [
            "Reading environments quickly",
            "Identifying danger signs early",
            "Understanding safe vs. unsafe people",
            "Reducing risks while travelling",
          ],
        },
        {
          title: "2. Boundary Setting",
          items: [
            "Using strong body language",
            "Firm, respectful communication",
            "De-escalating tense situations",
            "Handling rude or aggressive people",
          ],
        },
        {
          title: "3. Conflict Resolution",
          items: [
            "Calming down verbal conflicts",
            "Maintaining emotional balance",
            "Responding to anger or threats",
            "Avoiding escalation",
          ],
        },
        {
          title: "4. Safety Planning",
          items: [
            "Safety in the workplace",
            "Home and family safety",
            "Travel and night-time safety",
            "Emergency decision-making",
          ],
        },
        {
          title: "5. Fullpower Self-Defense (Emergency Skills)",
          intro: "Simple, effective techniques:",
          items: [
            "Releases from grabs or holds",
            "Escaping wrist, arm, or clothing grabs",
            "Defensive positioning",
            "Using body weight effectively",
            "Breakaways and exits",
            "Protecting yourself long enough to escape",
          ],
        },
        {
          title: "6. Emotional Strength",
          items: [
            "Staying calm in fear",
            "Clear thinking under pressure",
            "Overcoming freeze response",
            "Building internal confidence",
          ],
        },
      ],
      note: "These skills are purely defensive — not aggressive fighting.",
    },
    extraSections: [
      {
        id: "who",
        title: "Who This Program Is For",
        items: [
          "Professionals",
          "Teachers & staff",
          "Parents",
          "Women’s groups",
          "Corporate teams",
          "College students",
          "Senior citizens",
          "Community groups",
          "Individuals wanting more confidence",
        ],
        close: "The program can be customized for any group or environment.",
      },
      {
        id: "teach",
        title: "Teaching Approach",
        groups: [
          {
            title: "Our Fullpower method is:",
            items: [
              "Respectful",
              "Realistic",
              "Evidence-based",
              "Practical and hands-on",
              "Non-fear-based",
              "Comfortable for all ages",
            ],
          },
          {
            title: "Sessions include:",
            items: [
              "Real-life scenario practice",
              "Partner drills",
              "Clear step-by-step guidance",
              "Discussion and problem-solving",
              "Positive, supportive coaching",
            ],
          },
        ],
        close: "Adults learn skills they can use the same day.",
      },
    ],
    format: {
      title: "Program Format",
      intro: "We offer:",
      options: [
        "1-Day Fullpower Intensive",
        "3-Day Safety Series",
        "6–8 Week Course (Weekly Sessions)",
        "Workplace Safety Workshops",
        "Corporate Trainings",
        "Women’s Self-Defense Programs",
        "Senior Safety Workshops",
        "Family Safety Sessions",
      ],
      duration: "60–90 minutes per session",
      groupSize: "10–40 adults",
    },
    outcomes: {
      title: "Outcomes",
      intro: "After completing the Adults Program, participants will:",
      items: [
        "Feel more confident and prepared",
        "Make safer decisions",
        "Set and enforce boundaries",
        "Handle harassment effectively",
        "De-escalate conflicts",
        "Stay calm under pressure",
        "Protect themselves in emergencies",
        "Safeguard their family and workplace",
      ],
      note: "These skills benefit daily life immediately.",
    },
    faqs: [
      {
        q: "Is this a martial arts program?",
        a: "No. It is a practical people safety and self-defense program — no belts, no fights, no complex techniques.",
      },
      {
        q: "Is the training suitable for beginners?",
        a: "Yes. No prior experience or fitness level is required.",
      },
      {
        q: "Is the physical part difficult?",
        a: "No. All techniques are simple, safe, and designed for everyday people.",
      },
      {
        q: "Can this be offered at workplaces?",
        a: "Absolutely. We conduct corporate safety and self-defense workshops.",
      },
    ],
    book: {
      title: "Book the Adults Safety Program",
      intro: "Bring Fullpower to your:",
      venues: ["Workplace", "School staff", "Society", "Corporate team", "Group or club", "Family"],
    },
  },
  {
    slug: "women",
    title: "Women’s Self-Defense Program",
    tagline: "Practical, Realistic & Confidence-Building Safety Skills for Women",
    overview: [
      "The EMA Fight Back Women’s Self-Defense Program empowers women of all ages with the essential skills to stay safe in daily life — at home, at work, while travelling, and in challenging public situations.",
      "The program is not aggressive, not fear-based, and does not require any martial arts background. It focuses on awareness, boundaries, verbal assertiveness, and simple, effective physical techniques for emergencies.",
      "Our goal is to give every woman practical tools to protect herself with confidence and clarity.",
    ],
    why: {
      title: "Why Women Need Self-Defense Skills",
      intro: "Women today face real challenges, such as:",
      items: [
        "Harassment in public places",
        "Inappropriate behaviour from known or unknown people",
        "Workplace boundary issues",
        "Unsafe travel situations",
        "Online threats and blackmail",
        "Domestic or relationship risks",
        "Fear, hesitation, or confusion in emergencies",
      ],
      close:
        "Most women are never taught how to respond safely, calmly, and effectively. This program fills that gap with real, actionable skills.",
    },
    learn: {
      title: "What Women Learn",
      groups: [
        {
          title: "1. Situational Awareness",
          items: [
            "Spotting danger early",
            "Recognizing unsafe behaviours",
            "Reducing risk during travel",
            "Understanding safe vs. unsafe environments",
          ],
        },
        {
          title: "2. Boundaries & Assertiveness",
          items: [
            "Using strong body language",
            "Speaking firmly without aggression",
            "Setting limits with known people",
            "Handling unwanted touch or comments",
          ],
        },
        {
          title: "3. Verbal Self-Defense",
          items: [
            "Using your voice effectively",
            "Safe words and strong statements",
            "How to de-escalate confrontations",
            "How to attract attention when needed",
          ],
        },
        {
          title: "4. Emotional Strength Building",
          items: [
            "Staying calm under pressure",
            "Managing fear and hesitation",
            "Trusting your instincts",
            "Overcoming freeze response",
          ],
        },
        {
          title: "5. Fullpower Physical Self-Defense (Emergency Only)",
          intro: "Simple, powerful techniques:",
          items: [
            "Wrist, arm, and clothing release",
            "Escaping holds and grabs",
            "Defensive blocking",
            "Using body weight effectively",
            "Targeted strikes for escape",
            "Ground survival basics",
            "Fast exit strategies",
          ],
        },
        {
          title: "6. Travel & Daily Life Safety",
          items: [
            "Bus/auto/metro safety habits",
            "Safety while commuting alone",
            "Parking lot and lift safety",
            "Emergency decision-making",
          ],
        },
      ],
      note: "All techniques are safe, practical, and designed for women regardless of size, age, or fitness level.",
    },
    extraSections: [
      {
        id: "who",
        title: "Who Can Join?",
        intro: "This program is perfect for:",
        items: [
          "Women & girls (13 years and above)",
          "College students",
          "Working professionals",
          "Homemakers",
          "Corporate teams",
          "Teachers & staff",
          "Mothers",
          "Women’s groups",
          "Community organizations",
        ],
        close: "No previous experience required. All fitness levels welcome.",
      },
      {
        id: "topics",
        title: "Special Women-Focused Topics",
        items: [
          "Safety with known people",
          "Saying NO without guilt",
          "Boundary-setting in relationships",
          "Online safety & digital boundaries",
          "Protecting children & family",
          "Handling uncomfortable situations politely but firmly",
        ],
      },
      {
        id: "teach",
        title: "Safe & Supportive Learning Environment",
        groups: [
          {
            title: "Our teaching is:",
            items: [
              "Respectful",
              "Positive",
              "Practical",
              "Non-judgmental",
              "Trauma-aware",
              "Comfortable for beginners",
            ],
          },
        ],
        close: "Women feel supported and encouraged throughout.",
      },
    ],
    format: {
      title: "Program Format",
      intro: "You can choose from:",
      options: [
        "1-Day Women’s Self-Defense Workshop",
        "3-Day Intensive Program",
        "4–8 Week Course",
        "Corporate Women’s Safety Workshop",
        "College Safety Sessions",
        "Society / Community Programs",
        "Private Groups / Custom Workshops",
      ],
      duration: "60–90 minutes",
      groupSize: "10–60 participants",
    },
    outcomes: {
      title: "Outcomes",
      intro: "After completing the program, women will be able to:",
      items: [
        "Identify unsafe behaviour early",
        "Set and enforce boundaries",
        "Use clear, strong communication",
        "Protect themselves using simple techniques",
        "Escape from common attacks",
        "Stay calm and make quick decisions",
        "Travel with confidence",
        "Protect their children and family",
        "Feel safer, stronger, and more independent",
      ],
      note: "This program builds confidence that becomes part of daily life.",
    },
    faqs: [
      {
        q: "Do I need to be fit or athletic?",
        a: "No. The program is designed for all body types and skill levels.",
      },
      {
        q: "Will this involve difficult martial arts techniques?",
        a: "No. Only simple, easy-to-learn techniques that work in real life.",
      },
      {
        q: "Can we organize this in our college, company, or society?",
        a: "Yes. We conduct sessions anywhere.",
      },
      {
        q: "Is the environment safe and comfortable?",
        a: "Absolutely. Our sessions are respectful, supportive, and women-friendly.",
      },
    ],
    book: {
      title: "Book the Women’s Self-Defense Program",
      intro: "We conduct workshops for:",
      venues: [
        "Colleges & universities",
        "Corporates & offices",
        "Schools (for senior girls)",
        "Societies & communities",
        "Gyms & clubs",
        "Groups of friends",
        "Mothers’ groups",
      ],
    },
  },
  {
    slug: "seniors",
    title: "Senior Citizens Safety Program",
    tagline: "Confidence, Awareness & Practical Safety Skills for Older Adults",
    overview: [
      "The EMA Fight Back Senior Citizens Safety Program is specially designed for older adults who want to stay confident, independent, and safe in their daily lives.",
      "This program addresses the unique challenges seniors face — mobility, balance, isolation, scams, emotional stress, and vulnerability in public spaces. All skills are gentle, practical, and easy to follow, regardless of age, fitness level, or physical limitations.",
      "We focus on awareness, simple safety habits, emotional strength, and very safe physical responses only when required.",
    ],
    why: {
      title: "Why Seniors Need a Dedicated Safety Program",
      intro: "Senior citizens are often targeted because:",
      items: [
        "They may hesitate to speak up",
        "They may be physically slower",
        "They are more trusting by nature",
        "They may feel fearful when alone",
        "They may have limited mobility",
        "They face growing online and phone scams",
      ],
      close:
        "This program helps seniors protect themselves without aggression and without needing speed or strength.",
    },
    learn: {
      title: "What Seniors Learn",
      groups: [
        {
          title: "1. Awareness & Prevention",
          items: [
            "Recognizing unsafe people and situations",
            "Staying alert at home, in markets, and in public",
            "Safe walking habits",
            "Reducing fall risks and mobility hazards",
          ],
        },
        {
          title: "2. Verbal Safety Skills",
          items: [
            "How to speak firmly but respectfully",
            "Handling pushy or rude behaviour",
            "Saying “NO” with confidence",
            "Calling for help effectively",
          ],
        },
        {
          title: "3. Emotional Confidence",
          items: [
            "Staying calm during fear or confusion",
            "Managing stress",
            "Overcoming hesitation",
            "Building inner confidence",
          ],
        },
        {
          title: "4. Phone, Online & Scam Safety",
          items: [
            "Avoiding fraud and cheating",
            "Safe mobile banking habits",
            "Spotting fake calls and messages",
            "Protecting personal information",
          ],
        },
        {
          title: "5. Physical Self-Defense (Very Safe & Simple)",
          intro: "Techniques adapted for seniors:",
          items: [
            "Balance-safe movements",
            "Escaping wrist or arm grabs",
            "Gentle release techniques",
            "Defensive posture",
            "Creating space for escape",
            "How to get help quickly",
          ],
        },
        {
          title: "6. Home & Daily Life Safety",
          items: [
            "Door, gate, and visitor safety",
            "Safety with household staff",
            "Lift, stair, and parking safety",
            "Safe travel tips",
          ],
        },
      ],
      note: "No aggressive fighting — only self-protection for emergencies.",
    },
    extraSections: [
      {
        id: "teach",
        title: "Teaching Approach",
        intro: "Our approach for seniors is:",
        items: [
          "Slow-paced",
          "Clear and simple",
          "Age-friendly",
          "Respectful and encouraging",
          "Mobility-adapted",
          "Completely safe",
        ],
        close:
          "We ensure seniors feel comfortable, supported, and encouraged throughout the session.",
      },
      {
        id: "who",
        title: "Who This Program Is For",
        items: [
          "Senior citizens (55+)",
          "Elderly parents living alone",
          "Senior clubs",
          "Community groups",
          "Resident welfare associations",
          "Religious or cultural groups",
          "Senior employees or managers",
          "Families wanting safety training for elders",
        ],
        close: "No fitness level required.",
      },
    ],
    format: {
      title: "Program Format",
      intro: "Choose from:",
      options: [
        "1-Day Senior Safety Workshop",
        "3-Day Safety Series",
        "Weekly Slow-Paced Training",
        "Society / Community Hall Sessions",
        "Private Family Safety Programs",
      ],
      duration: "45–60 minutes",
      groupSize: "10–40 seniors",
    },
    outcomes: {
      title: "Outcomes",
      intro: "After completing the Senior Citizens Program, participants will:",
      items: [
        "Feel safer and more confident",
        "Speak up without hesitation",
        "Handle strangers and pushy behaviour",
        "Protect themselves calmly",
        "Avoid scams and fraud",
        "Stay safe at home and outdoors",
        "Know how to escape unsafe situations",
        "Maintain dignity and independence",
      ],
      note: "Families notice improved emotional health and confidence in their elders.",
    },
    faqs: [
      {
        q: "I have limited mobility. Can I still participate?",
        a: "Yes. The program is adapted to your comfort level.",
      },
      {
        q: "Is this a martial arts class?",
        a: "No. It is a gentle, safety-focused program.",
      },
      {
        q: "Can we organize this in our society or senior club?",
        a: "Yes. We conduct workshops anywhere.",
      },
      {
        q: "Is it safe for people with knee/back issues?",
        a: "Yes. All movements are slow, controlled, and optional.",
      },
    ],
    book: {
      title: "Book the Senior Citizens Program",
      intro: "We conduct sessions at:",
      venues: [
        "Societies",
        "Senior clubs",
        "Community halls",
        "Religious/cultural groups",
        "Schools (for grandparents’ day)",
        "Family gatherings",
        "Private batches",
      ],
    },
  },
  {
    slug: "special-needs",
    title: "Special Needs / Challengers Safety Program",
    tagline: "Gentle, Adapted & Inclusive People Safety Training for All Abilities",
    overview: [
      "The EMA Fight Back Special Needs / Challengers Program is designed for individuals with developmental, physical, emotional, behavioural, or learning challenges. This program uses gentle, simple, step-by-step teaching, ensuring that every participant — regardless of ability — can learn essential People Safety skills with confidence.",
      "Our approach is person-centred, inclusive, and fully adapted to each participant’s physical and emotional needs.",
    ],
    why: {
      title: "Why Safety Training Matters for Special Needs",
      intro: "People with disabilities may face:",
      items: [
        "Difficulty recognizing unsafe behaviour",
        "Communication challenges",
        "Over-trusting others",
        "Trouble saying “NO”",
        "Bullying or teasing",
        "Meltdowns or confusion in stressful moments",
        "Difficulty asking for help",
        "Higher risk of exploitation or abuse",
      ],
    },
    learn: {
      title: "What Participants Learn",
      groups: [
        {
          title: "1. Awareness & Safe Choices",
          items: [
            "Noticing unsafe situations",
            "Staying close to trusted adults",
            "Understanding “safe vs. unsafe” behaviour",
            "Recognizing confusing feelings",
          ],
        },
        {
          title: "2. Body Safety & Boundaries",
          items: [
            "Personal space",
            "Private body rules",
            "Saying “STOP” clearly",
            "Moving away from unsafe touch",
            "Understanding when to ask for help",
          ],
        },
        {
          title: "3. Communication Skills",
          items: [
            "How to express discomfort",
            "Asking for help using voice, gestures, or alternatives",
            "Using simple safe words",
            "Dealing with teasing or bullying",
          ],
        },
        {
          title: "4. Emotional Safety & Regulation",
          items: [
            "Calming skills",
            "Handling overwhelm or meltdown moments",
            "Breathing and grounding techniques",
            "Managing fear and confusion",
          ],
        },
        {
          title: "5. Safe Physical Responses (Emergency Only)",
          intro: "Gentle, ability-based movements:",
          items: [
            "Simple step-away techniques",
            "Wrist releases",
            "Soft blocking",
            "Protective stances",
            "Safe movement for escape",
          ],
        },
        {
          title: "6. Online & Digital Safety Basics",
          intro: "Optional, for older children & teens",
          items: [
            "Protecting privacy",
            "Handling online strangers",
            "Dealing with bullying online",
          ],
        },
      ],
      note: "All techniques are non-aggressive, slow, and suitable for limited mobility.",
    },
    extraSections: [
      {
        id: "who",
        title: "Who This Program Is For",
        intro: "This program is suitable for children, teens, and adults with:",
        items: [
          "Autism Spectrum Disorder (ASD)",
          "ADHD",
          "Down Syndrome",
          "Learning disabilities",
          "Mild to moderate developmental delays",
          "Physical disabilities",
          "Speech or communication challenges",
          "Emotional or behavioural difficulties",
          "Sensory sensitivities",
          "Social anxiety or shyness",
        ],
        close: "We also support caregivers, parents, and teachers during the learning process.",
      },
      {
        id: "can-learn",
        title: "With the right training, they can learn to:",
        items: [
          "Understand boundaries",
          "Protect themselves",
          "Speak up",
          "Move away from danger",
          "Stay emotionally calm",
          "Seek help quickly",
        ],
      },
      {
        id: "caregivers",
        title: "Involvement of Parents & Caregivers",
        intro: "Parents, teachers, and caregivers are encouraged to participate.",
        groups: [
          {
            title: "They learn:",
            items: [
              "How to reinforce safety skills at home",
              "How to teach boundaries consistently",
              "How to support communication",
              "How to keep routines simple and predictable",
              "How to manage a safety plan for their child",
            ],
          },
        ],
        close: "This makes learning stronger and longer lasting.",
      },
      {
        id: "teach",
        title: "Teaching Approach",
        intro: "Our teaching is:",
        items: [
          "Slow-paced",
          "Clear and structured",
          "Positive and supportive",
          "Sensory-friendly",
          "Step-by-step",
          "Repetitive for better retention",
          "Adapted for mobility, attention, and communication levels",
        ],
        close:
          "Participants NEVER feel rushed or pressured. We celebrate small successes and encourage at every step.",
      },
    ],
    format: {
      title: "Program Format",
      intro: "We offer sessions through:",
      options: [
        "Individual 1-on-1 training",
        "Small group classes",
        "Special school sessions",
        "Therapy centre programs",
        "Inclusive school workshops",
        "Community & society programs",
        "Parent–child training sessions",
      ],
      duration: "30–45 minutes",
      groupSize: "1–10 participants",
    },
    outcomes: {
      title: "Outcomes",
      intro: "Participants will:",
      items: [
        "Understand basic safety rules",
        "Learn to say “NO” or signal discomfort",
        "Recognize unsafe behaviour",
        "Know how to ask for help",
        "Use simple safety techniques",
        "Stay calmer in stressful moments",
        "Develop more independence",
        "Build self-confidence",
      ],
      note: "Parents and teachers often report better communication and more consistent boundary-setting.",
    },
    faqs: [
      {
        q: "Is the program too difficult for my child?",
        a: "No. Every activity is adapted to their individual needs.",
      },
      {
        q: "Do parents or therapists need to join?",
        a: "Yes, involvement is recommended for best results.",
      },
      {
        q: "Is this safe for children with sensory issues?",
        a: "Yes. We use sensory-friendly teaching methods.",
      },
      {
        q: "Is physical strength required?",
        a: "Not at all. Movements are gentle and ability-based.",
      },
    ],
    book: {
      title: "Book the Special Needs / Challengers Program",
      intro: "We work with:",
      venues: [
        "Special schools",
        "Therapy centres",
        "Inclusive schools",
        "Societies & communities",
        "NGOs",
        "Small groups",
        "Families",
        "Individual learners",
      ],
    },
  },
  {
    slug: "schools",
    title: "Schools & Institutions Program",
    tagline: "Empowering Students, Teachers & Staff With Life-Saving People Safety Skills",
    overview: [
      "EMA Fight Back provides comprehensive People Safety & Self-Defense programs for schools, colleges, and educational institutions. Our goal is to help students, teachers, and staff learn practical, age-appropriate skills to prevent bullying, abuse, harassment, and unsafe behaviour — while building confidence, respect, and responsibility.",
      "We offer on-campus workshops, curriculum-based modules, and demonstration programs tailored to each institution.",
    ],
    why: {
      title: "Why Schools Need People Safety Training",
      intro: "Schools today face:",
      items: [
        "Bullying (physical, verbal, emotional, online)",
        "Conflict among students",
        "Unwanted touch or unsafe behaviour",
        "Stranger or outsider risks",
        "Travel & transport safety",
        "Communication issues between students and staff",
        "Low confidence & emotional stress",
        "Lack of boundary awareness",
        "Emergencies where quick decisions matter",
      ],
      close:
        "EMA Fight Back equips students and staff with the exact skills needed to stay safe, communicate clearly, and respond calmly.",
    },
    learn: {
      title: "What Students & Staff Learn",
      groups: [
        {
          title: "Students Learn:",
          items: [
            "Spotting unsafe situations",
            "Strong & safe boundaries",
            "Bullying prevention tools",
            "Online & digital safety",
            "Staying safe with known people & strangers",
            "Confidence in asking for help",
            "Escaping from physical danger (emergency-only)",
            "Staying calm under stress",
          ],
        },
        {
          title: "Teachers & Staff Learn:",
          items: [
            "Clear action steps for unsafe behaviour",
            "Conflict de-escalation",
            "Managing emotional safety",
            "Responding to bullying reports",
            "Safe intervention techniques",
            "How to speak to children about safety",
            "Safety planning during events",
          ],
        },
      ],
    },
    extraSections: [
      {
        id: "available",
        title: "Programs are available for:",
        items: [
          "Pre-primary",
          "Primary",
          "Middle school",
          "High school & teens",
          "Teachers",
          "Support staff",
          "Admin & management",
          "Parents (orientation sessions)",
        ],
      },
      {
        id: "students",
        title: "Programs for Students (Age-Wise Modules)",
        groups: [
          {
            title: "1. Kidpower (3–8 Years)",
            items: [
              "Focus: Awareness, boundaries, body safety, speaking up.",
              "Teaching through stories, games, and parent involvement.",
            ],
          },
          {
            title: "2. Juniors (9–12 Years)",
            items: [
              "Focus: Bullying prevention, handling peer pressure, safe online habits, emergency responses.",
            ],
          },
          {
            title: "3. Teenpower (13–18 Years)",
            items: [
              "Focus: Harassment prevention, conflict resolution, travel safety, emotional regulation, social media safety, and defensive strategies.",
            ],
          },
        ],
        close: "Each age group receives carefully crafted sessions based on developmental needs.",
      },
      {
        id: "staff",
        title: "Programs for Teachers & Staff",
        intro:
          "Teachers and school staff are the first responders in most safety situations. We provide professional training in:",
        items: [
          "Handling bullying and conflict",
          "Managing unsafe or aggressive behaviour",
          "Boundary setting with students",
          "Creating emotionally safe classrooms",
          "Reporting and escalation protocols",
          "Personal safety and self-protection",
          "Safety planning during events and emergencies",
        ],
        close: "These sessions make your staff confident, prepared, and safeguarded.",
      },
      {
        id: "ecosystem",
        title: "School Safety Ecosystem (Complete Solution)",
        intro: "We help schools build a complete safety culture, including:",
        items: [
          "Safety guidelines",
          "Student-safe behaviour rules",
          "Staff protocols",
          "Travel & transport safety tips",
          "Digital safety instructions",
          "Reporting & support processes",
          "Emergency drills & role-plays",
        ],
        close: "We also offer annual safety planning support.",
      },
      {
        id: "where",
        title: "Where These Skills Are Used",
        items: [
          "Classrooms",
          "School corridors",
          "Buses & transportation",
          "Playgrounds",
          "Washrooms",
          "Public events",
          "School trips & picnics",
          "Online learning platforms",
          "Neighbourhoods & commute routes",
        ],
        close: "The skills are simple, practical, and directly usable by students.",
      },
      {
        id: "teach",
        title: "Teaching Method",
        intro: "Our teaching is:",
        items: [
          "Positive",
          "Non-fear-based",
          "Practical & hands-on",
          "Respectful & age-appropriate",
          "Based on role-plays & real-life examples",
          "Supported by teachers & school leadership",
        ],
        close:
          "We ensure students feel safe, respected, and supported throughout every activity.",
      },
    ],
    format: {
      title: "Program Format",
      intro: "We offer flexible formats to suit school schedules:",
      options: [
        "1-Day Campus Workshop. Ideal for annual safety events.",
        "3-Day Safety Series. Progressive learning for all age groups.",
        "Weekly Program (Curriculum-Based). Integrated into physical education or life-skills periods.",
        "Demonstration Programs. For Annual Day, PTA meetings, or special events.",
        "Teacher & Staff Training Modules. Separate sessions for educators and non-teaching staff.",
        "Parent Orientation Sessions. Helping parents support safety skills at home.",
      ],
      duration: "45–60 minutes",
      groupSize: "30–150 (depending on format)",
    },
    outcomes: {
      title: "Outcomes for Schools",
      intro: "After implementing EMA Fight Back, schools experience:",
      items: [
        "Reduction in bullying & conflicts",
        "Increased student confidence",
        "Better communication between students & teachers",
        "Clearer boundaries & respectful behaviour",
        "Safer school environment",
        "Empowered teachers & staff",
        "Stronger parent trust",
        "A positive school culture",
      ],
      note: "Our programs contribute directly to child protection, mental health, and discipline standards.",
    },
    faqs: [
      {
        q: "Can sessions be conducted during school hours?",
        a: "Yes. We adjust to your timetable.",
      },
      {
        q: "Are boys and girls trained together?",
        a: "Yes, or separately — based on your preference.",
      },
      {
        q: "Do you provide certificates?",
        a: "Yes, certificates can be provided for students and staff.",
      },
      {
        q: "Can sessions be customised?",
        a: "Absolutely. Every school receives a tailored program.",
      },
      {
        q: "Is this suitable for large groups?",
        a: "Yes, we regularly train groups of 50–500 students.",
      },
    ],
    book: {
      title: "Bring EMA Fight Back to Your Institution",
      intro: "We work with:",
      venues: [
        "Schools",
        "Colleges",
        "Activity centres",
        "Day-care centres",
        "Coaching institutes",
        "Clubs & academies",
        "Community education programs",
      ],
    },
  },
  {
    slug: "corporate",
    title: "Corporate Safety & Self-Defense Workshops",
    tagline: "Empowering Employees With Practical Safety, Confidence & Workplace Protection Skills",
    overview: [
      "The EMA Fight Back Corporate Safety & Self-Defense Program is designed to equip employees, managers, HR teams, and leadership groups with practical personal safety, conflict management, and emergency response skills for the workplace and beyond.",
      "These workshops help companies create a safe, respectful, and empowered work culture, reduce risks, and improve employee confidence — both at work and while travelling.",
      "Sessions are suitable for corporates, startups, offices, IT companies, BPOs, schools, hospitals, hospitality teams, factories, and all professional environments.",
    ],
    why: {
      title: "Why Corporates Need Safety Training",
      intro: "Modern workplaces face challenges such as:",
      items: [
        "Employee travel risks",
        "Workplace harassment or misconduct",
        "Customer aggression or confrontation",
        "Safety during late shifts",
        "Stress & emotional pressure",
        "Workplace conflicts",
        "Emergency situations",
        "Lack of awareness in public and office areas",
      ],
      close:
        "Companies today are responsible for the physical and emotional safety of their teams. Our workshop helps organizations raise safety standards and improve employee wellbeing.",
    },
    learn: {
      title: "What Employees Learn",
      groups: [
        {
          title: "1. Situational Awareness",
          items: [
            "Spotting early signs of danger",
            "Safe travel habits (cabs, autos, buses)",
            "Office and parking lot safety",
            "Recognizing unsafe behaviours",
          ],
        },
        {
          title: "2. Boundary Setting at Workplace",
          items: [
            "Respectful communication",
            "Handling inappropriate behaviour",
            "Dealing with pushy or aggressive individuals",
            "Professional assertiveness",
          ],
        },
        {
          title: "3. Workplace Harassment Prevention",
          items: [
            "Types of harassment",
            "How to respond safely",
            "How to report correctly",
            "Legal rights & responsibilities",
          ],
        },
        {
          title: "4. Verbal Self-Defense",
          items: [
            "Using voice and body language effectively",
            "De-escalating conflicts",
            "Handling angry customers",
            "Statements to protect yourself",
          ],
        },
        {
          title: "5. Emergency Physical Self-Defense (Fullpower)",
          intro: "Simple, effective responses:",
          items: [
            "Escape from wrist, arm & clothing grabs",
            "Release from chokes or holds",
            "Defensive blocking",
            "Using body weight for protection",
            "Ground survival basics",
            "Quick safe exit strategies",
          ],
        },
        {
          title: "6. Stress Management & Emotional Control",
          items: [
            "Staying calm under pressure",
            "Handling fear and confusion",
            "Thinking clearly during emergencies",
          ],
        },
        {
          title: "7. Digital & Online Safety",
          items: [
            "Protecting devices",
            "Avoiding cyber fraud & social engineering",
            "Safe communication rules",
            "Privacy & data protection habits",
          ],
        },
      ],
      note: "These are non-aggressive, easy-to-learn, and highly practical.",
    },
    extraSections: [
      {
        id: "who",
        title: "Who This Program Is For",
        items: [
          "Corporate employees",
          "Managers & teams",
          "HR departments",
          "Customer-facing staff",
          "Women employees",
          "New joiners & trainees",
          "Night-shift teams",
          "Field staff",
          "Workplace security & support teams",
        ],
        close: "Custom modules can be created for each department.",
      },
      {
        id: "industries",
        title: "Industries We Serve",
        items: [
          "IT & Software",
          "BPO & Call Centres",
          "Banks & Finance",
          "Hospitality & Hotels",
          "Schools & Educational Institutions",
          "Healthcare",
          "Retail & Malls",
          "Real Estate",
          "Factories & Manufacturing",
          "Government & NGOs",
        ],
      },
      {
        id: "teach",
        title: "Training Method",
        groups: [
          {
            title: "Our approach is:",
            items: [
              "Professional",
              "Respectful",
              "Realistic",
              "Hands-on",
              "Non-fear-based",
              "Suitable for all fitness levels",
            ],
          },
          {
            title: "Sessions include:",
            items: [
              "Real-life role-plays",
              "Group practice",
              "Demonstrations",
              "Safety discussions",
              "Team-building activities",
            ],
          },
        ],
        close: "No complex martial arts. Just purely practical, real-world safety skills.",
      },
    ],
    format: {
      title: "Program Format",
      intro: "We offer flexible corporate formats:",
      options: [
        "1-Day Safety & Self-Defense Workshop. Perfect for corporate events and group training.",
        "2–3 Day Deep Training Series. For more detailed learning and practice.",
        "Weekly Corporate Safety Program. Integrated into HR / wellness initiative.",
        "Women’s Workplace Safety Training. Specially designed for female employees.",
        "Night-Shift & Travel Safety Workshop. Focus on safe commuting and emergency action.",
        "Custom Corporate Modules. Based on your industry and employee needs.",
      ],
      duration: "60–120 minutes",
      groupSize: "15–200+ employees",
    },
    outcomes: {
      title: "Benefits to the Company",
      intro: "Companies report:",
      items: [
        "Increased employee confidence",
        "Reduced workplace incidents",
        "Improved team communication",
        "Higher safety awareness",
        "Better corporate culture",
        "Enhanced employee wellbeing",
        "Stronger trust in HR & leadership",
        "Demonstrated responsibility for employee safety",
      ],
      note: "This training is excellent for CSR, HR wellness, training days, and onboarding programs.",
    },
    faqs: [
      {
        q: "Do employees need fitness or martial arts experience?",
        a: "No. Everything is simple and suitable for all.",
      },
      {
        q: "Can we conduct the session inside our office?",
        a: "Yes, in any hall, cafeteria, conference room, or open area.",
      },
      {
        q: "Do you conduct women-only sessions?",
        a: "Yes, if the company prefers.",
      },
      {
        q: "Do you give certificates?",
        a: "Yes, certificates can be provided for all participants.",
      },
    ],
    book: {
      title: "Book a Corporate Workshop",
      intro: "We conduct sessions across:",
      venues: [
        "Offices",
        "Corporate campuses",
        "Training centres",
        "Co-working spaces",
        "Company offsites",
        "Conferences & seminars",
      ],
    },
  },
  {
    slug: "instructor-training",
    title: "Instructor Training Program",
    tagline: "Become a Certified EMA Fight Back People Safety & Self-Defense Instructor",
    overview: [
      "The EMA Fight Back Instructor Training Program prepares motivated individuals to teach People Safety, Bullying Prevention, Emotional Safety, and Fullpower Self-Defense skills to children, teens, adults, seniors, and special groups.",
      "You will learn how to teach clear, effective, age-appropriate skills using EMA’s proven safety system developed since 1984.",
    ],
    why: {
      title: "Why Become an EMA Certified Instructor?",
      intro: "There is a growing need for trained professionals who can deliver:",
      items: [
        "Bullying prevention programs",
        "Child safety education",
        "Teenpower & emotional safety sessions",
        "Women’s safety workshops",
        "Senior citizen safety",
        "Corporate safety training",
        "School staff development",
        "Special needs safety programs",
      ],
    },
    learn: {
      title: "What You Will Learn in the Instructor Program",
      groups: [
        {
          title: "1. Core Teaching Skills",
          items: [
            "How to teach People Safety in a simple, effective way",
            "How to use demonstration, role-play & practice",
            "How to teach different age groups",
            "How to create a safe learning environment",
            "Voice, body language, and presentation skills",
          ],
        },
        {
          title: "2. Curriculum Mastery",
          items: [
            "Kids Program curriculum",
            "Juniors Program curriculum",
            "Teens Program curriculum",
            "Adults & Women’s Program",
            "Seniors Program",
            "Special Needs modified curriculum",
            "Corporate training modules",
          ],
        },
        {
          title: "3. Managing Groups & Class Flow",
          items: [
            "How to engage children and teens",
            "How to control class without force or fear",
            "Managing shy, anxious or disruptive participants",
            "Adapting lessons for slow or fast learners",
          ],
        },
        {
          title: "4. Safety & Ethics",
          items: [
            "Instructor responsibilities",
            "Professional boundaries",
            "Emotional safety of students",
            "Respectful teaching principles",
            "Trauma-aware communication",
          ],
        },
        {
          title: "5. Emergency Physical Skills (Fullpower)",
          intro: "You will learn:",
          items: [
            "Safe defensive techniques",
            "Escape & release skills",
            "Instructor-level control & safety procedures",
            "Correct teaching methods",
            "Padded-suit instructor work (optional advanced level)",
          ],
        },
        {
          title: "6. Real-Life Scenario Training",
          items: [
            "Bullying situations",
            "Stranger safety",
            "Harassment & verbal conflict",
            "Boundary violations",
            "Safety planning for school environments",
            "Family safety scenarios",
          ],
        },
        {
          title: "7. Instructor Tools & Materials",
          items: [
            "Lesson plans",
            "Session scripts",
            "Safety guidelines",
            "Age-specific teaching methods",
            "Assessment and feedback forms",
          ],
        },
      ],
    },
    extraSections: [
      {
        id: "ideal-for",
        title: "This program is ideal for:",
        items: [
          "Teachers",
          "Coaches",
          "Martial artists",
          "Trainers",
          "HR professionals",
          "Community leaders",
          "School staff",
          "Social workers",
          "Parent volunteers",
          "Anyone passionate about safety education",
        ],
      },
      {
        id: "as-instructor",
        title: "As an instructor, you can:",
        items: [
          "Generate income",
          "Build reputation & credibility",
          "Support your community",
          "Work with schools, corporates, societies & groups",
          "Join a recognized training system",
          "Create long-term impact",
        ],
        close:
          "EMA Fight Back instructors are respected for their professionalism, clarity, empathy, and real-world skillset.",
      },
      {
        id: "who",
        title: "Who Can Apply?",
        intro: "This program is open to:",
        items: [
          "Individuals with a passion for teaching",
          "People who care about safety education",
          "Martial arts teachers",
          "School teachers / staff",
          "Sports coaches",
          "Counselors / social workers",
          "Community volunteers",
          "Parents with commitment",
          "Anyone seeking a meaningful career",
        ],
        close: "No martial arts experience is required — the training focuses on people safety first.",
      },
      {
        id: "levels",
        title: "Levels of Instructor Certification",
        intro: "We offer multi-stage instructor pathways:",
        groups: [
          {
            title: "1. Associate Instructor",
            items: ["For beginners who want to teach Kids & Juniors."],
          },
          {
            title: "2. Certified Instructor",
            items: ["Qualified to teach all age groups including Teens & Adults."],
          },
          {
            title: "3. Senior Instructor",
            items: ["Advanced trainer with experience in multiple environments."],
          },
          {
            title: "4. Padded Instructor (Advanced)",
            items: ["Specialized in Fullpower padded suit work for realistic sessions."],
          },
          {
            title: "5. Master Trainer",
            items: ["Train other instructors and lead institutional-level programs."],
          },
        ],
      },
      {
        id: "includes",
        title: "Each training includes:",
        items: ["Theory", "Demonstration", "Practice teaching", "Assessment", "Certification"],
      },
      {
        id: "career",
        title: "Career Opportunities After Certification",
        intro: "Certified instructors can work with:",
        items: [
          "Schools",
          "Training centres",
          "Corporates",
          "Colleges",
          "Societies & communities",
          "NGOs",
          "Senior groups",
          "Private coaching",
          "Self–run workshops",
        ],
        close: "Many instructors build a highly respected and stable income using EMA programs.",
      },
      {
        id: "requirements",
        title: "Requirements",
        items: [
          "Age 18+",
          "Good communication skills",
          "Strong interest in safety education",
          "Commitment to ethics & student safety",
          "Willingness to practice teaching",
        ],
        close: "No fitness requirement. No martial arts background required.",
      },
    ],
    format: {
      title: "Training Format",
      intro: "We offer flexible training modes:",
      options: [
        "Online + In-Person Hybrid. Ideal for busy professionals.",
        "Intensive 3-Day Certification. Focused learning & practice.",
        "6–8 Week Instructor Course. Perfect for deeper mastery.",
        "Private / Small Group Instructor Training. Customized for your pace and goals.",
      ],
      duration: "",
      groupSize: "",
    },
    outcomes: {
      title: "What You Will Receive",
      intro: "",
      items: [
        "Official Instructor Certification",
        "Instructor Handbook",
        "Full Curriculum Access",
        "Teaching Plans & Scripts",
        "Branding Support (for presentations)",
        "Listing on EMA’s official registry",
        "Ongoing mentorship opportunities",
        "Eligibility for school & corporate assignments",
      ],
    },
    faqs: [
      {
        q: "Do I need physical strength or martial arts experience?",
        a: "No. This program focuses on People Safety teaching skills.",
      },
      {
        q: "Will I be allowed to teach under the EMA Fight Back name?",
        a: "Yes, after certification and adherence to teaching standards.",
      },
      {
        q: "Can I conduct workshops independently?",
        a: "Yes. Certified instructors can offer workshops in schools, corporates & communities.",
      },
      {
        q: "Do I need equipment?",
        a: "Basic items are included. Padded suit training (optional) is provided separately.",
      },
      {
        q: "Can I earn income as an instructor?",
        a: "Absolutely. Many instructors earn through school contracts, corporate workshops, and private sessions.",
      },
    ],
    book: {
      title: "Apply for Instructor Training",
      intro:
        "Join the mission to empower children, families, and communities with real-life safety skills. We offer training in:",
      venues: ["Chandigarh", "New Chandigarh", "Across India (on request)", "Online sessions"],
    },
  },
  {
    slug: "family",
    title: "Family Safety Program",
    tagline: "Practical Safety Skills for Parents & Children — Together as a Team",
    overview: [
      "The EMA Fight Back Family Safety Program brings parents and children together to learn essential People Safety skills in a fun, positive, and interactive environment.",
      "Families learn how to communicate better, set healthy boundaries, stay safe in daily life, and support each other during challenging situations. This program is perfect for parents who want to empower their children while also learning skills themselves.",
      "It strengthens trust, confidence, and family bonding.",
    ],
    why: {
      title: "Why Families Need This Program",
      intro: "Children often face situations where they need parental guidance, but parents may not know:",
      items: [
        "What to teach",
        "How to talk about safety",
        "How to build confidence without fear",
        "How to improve communication",
        "How to respond calmly when their child is scared or confused",
      ],
    },
    learn: {
      title: "What Parents & Children Learn Together",
      groups: [
        {
          title: "1. Communication & Trust Building",
          items: [
            "How to create open conversations",
            "How children can talk about worries",
            "How parents should respond calmly",
            "Building emotional connection",
          ],
        },
        {
          title: "2. Boundary Setting for Everyone",
          items: [
            "Personal space and safety rules",
            "Saying “STOP” confidently",
            "Respecting each other’s boundaries at home",
            "Handling rude or pushy behaviour",
          ],
        },
        {
          title: "3. Family Safety Planning",
          items: [
            "Safety at home",
            "Safety while travelling together",
            "Safety when children are alone at school, playground or neighbourhood",
            "Emergency planning and safe habits",
          ],
        },
        {
          title: "4. Online & Digital Safety",
          items: [
            "Device rules",
            "Social media boundaries",
            "Screen-time safety",
            "Cyberbullying basics",
            "Protecting private information",
          ],
        },
        {
          title: "5. Emotional Safety",
          items: [
            "Handling fear, anger, confusion",
            "Building resilience",
            "Teaching children to stay calm",
            "Parents learning supportive techniques",
          ],
        },
        {
          title: "6. Physical Self-Defense (Emergency Only)",
          intro: "Simple defensive skills for kids and parents:",
          items: [
            "Step-away skills",
            "Safe body movement",
            "Wrist releases",
            "Creating space",
            "Clear exit strategies",
          ],
        },
      ],
      note: "No aggressive fighting — only purely defensive actions.",
    },
    extraSections: [
      {
        id: "handles",
        title: "This program gives families a clear, practical system for handling:",
        items: [
          "Bullying",
          "Unsafe touch",
          "Conflicts",
          "Travel worries",
          "Emotional stress",
          "Online risks",
          "Strangers or known-person danger",
          "Emergency situations",
        ],
        close: "It creates a shared family language for safety.",
      },
      {
        id: "teach",
        title: "Teaching Approach",
        intro: "Our sessions are:",
        items: [
          "Fun and interactive",
          "Age-appropriate",
          "Family-friendly",
          "Gentle and positive",
          "Encouraging, not fear-based",
          "Based on games, practice, and role-plays",
        ],
        close: "Families enjoy learning together in a supportive atmosphere.",
      },
      {
        id: "where",
        title: "Where This Program Is Most Useful",
        items: [
          "Homes",
          "Societies",
          "Schools (Parent-Child events)",
          "Parks & playgrounds",
          "Markets & malls",
          "Public transport",
          "Festivals & gatherings",
          "Online platforms",
        ],
        close: "The skills work everywhere.",
      },
    ],
    format: {
      title: "Program Format",
      intro: "We offer flexible options:",
      options: [
        "1-Day Family Workshop. Perfect for weekends or society events.",
        "3-Day Family Safety Series. Deeper learning and practice.",
        "Weekly Family Safety Program. Ideal for skill development over time.",
        "Private Family Sessions. Customized family-specific training.",
        "Society & Community Workshops. Group-based family learning.",
      ],
      duration: "45–90 minutes",
      groupSize: "3–20 families",
    },
    outcomes: {
      title: "Program Benefits for Families",
      intro: "Families become:",
      items: [
        "More connected",
        "More confident",
        "Better at communication",
        "More aware of safety",
        "Equipped with practical tools",
        "Emotionally stronger",
        "Safer at home and outside",
      ],
      note: "Parents gain peace of mind, and children gain confidence & courage.",
    },
    faqs: [
      {
        q: "Do parents need to participate?",
        a: "Yes. This is a family-based program.",
      },
      {
        q: "Can children of different ages join together?",
        a: "Yes. The activities are flexible for mixed-age families.",
      },
      {
        q: "Is this a self-defense class?",
        a: "It includes basic defensive techniques but is mainly a People Safety program.",
      },
      {
        q: "Can this be held in societies or clubs?",
        a: "Yes, we conduct family workshops anywhere.",
      },
    ],
    book: {
      title: "Book the Family Safety Program",
      intro: "We conduct programs for:",
      venues: [
        "Societies & housing communities",
        "Schools & parent groups",
        "Clubs & gyms",
        "Private families",
        "Community centres",
        "Groups of friends",
      ],
    },
  },
];

export function getProgramPage(slug: string) {
  return programPages.find((page) => page.slug === slug);
}
