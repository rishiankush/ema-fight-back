export type Testimonial = {
  group: string;
  headline: string;
  quote: string;
  name: string;
};

export const testimonialGroups: { title: string; items: Testimonial[] }[] = [
  {
    title: "Parents Speak",
    items: [
      {
        group: "parents",
        headline: "My son is more confident than ever.",
        quote:
          "I was surprised how quickly my 7-year-old started using safety words at home. He now tells us clearly when something feels uncomfortable. This program has made our family safer and more connected.",
        name: "Parent, Chandigarh",
      },
      {
        group: "parents",
        headline: "Best decision we made for our daughter.",
        quote:
          "The workshop helped my daughter handle bullying in school calmly and confidently. She now knows exactly what to do.",
        name: "Mother of a 10-year-old",
      },
      {
        group: "parents",
        headline: "Every parent must attend this.",
        quote:
          "The family workshop opened my eyes. I now understand how to teach safety to my kids without scaring them.",
        name: "Parent at a society workshop",
      },
    ],
  },
  {
    title: "Schools & Educators Speak",
    items: [
      {
        group: "schools",
        headline: "A complete safety solution for schools.",
        quote:
          "EMA Fight Back created a safety culture in our school. Students are more responsible, and teachers feel empowered. We highly recommend their programs.",
        name: "School Principal",
      },
      {
        group: "schools",
        headline: "Bullying incidents reduced dramatically.",
        quote:
          "After the Junior and Teenpower sessions, students became more aware and respectful. The difference is visible every day.",
        name: "School Counselor",
      },
      {
        group: "schools",
        headline: "Teachers felt confident and prepared.",
        quote:
          "The Staff Training workshop helped our teachers handle conflicts, boundaries, and unsafe behaviours with professional clarity.",
        name: "Coordinator, Chandigarh School",
      },
    ],
  },
  {
    title: "Kids & Juniors Share Their Experience",
    items: [
      {
        group: "kids",
        headline: "I learnt how to say STOP!",
        quote: "I am not scared anymore. I know what to do.",
        name: "7-year-old student",
      },
      {
        group: "kids",
        headline: "Now I can handle problems calmly.",
        quote: "The class taught me how to stay safe online and at school.",
        name: "11-year-old student",
      },
    ],
  },
  {
    title: "Teens Share Their Journey",
    items: [
      {
        group: "teens",
        headline: "This actually works in real life.",
        quote:
          "I used the skills I learnt on the bus when someone made me uncomfortable. It helped me so much.",
        name: "17-year-old participant",
      },
      {
        group: "teens",
        headline: "I feel stronger and more confident.",
        quote: "The Teenpower workshop helped me handle peer pressure and speak up.",
        name: "Teen girl, Chandigarh",
      },
    ],
  },
  {
    title: "Corporate Participants Speak",
    items: [
      {
        group: "corporate",
        headline: "One of the best corporate trainings we’ve had.",
        quote:
          "Employees felt more confident about workplace safety and travel safety. The techniques are practical and easy.",
        name: "HR Manager, IT Company",
      },
      {
        group: "corporate",
        headline: "Very professional and effective.",
        quote:
          "The instructor covered harassment prevention, conflict management, and emergency skills. Our staff loved it.",
        name: "Corporate Admin Lead",
      },
    ],
  },
  {
    title: "Women Participants Speak",
    items: [
      {
        group: "women",
        headline: "Life-changing.",
        quote:
          "I learnt how to say NO with confidence. The whole program was respectful and practical.",
        name: "Corporate employee",
      },
      {
        group: "women",
        headline: "Every woman should attend this.",
        quote: "I now know how to stay safe when travelling alone or in difficult situations.",
        name: "College student",
      },
    ],
  },
  {
    title: "Seniors Share Their Experience",
    items: [
      {
        group: "seniors",
        headline: "I feel safe again.",
        quote:
          "The Senior Safety Program taught me how to react calmly if someone troubles me. Simple and very helpful.",
        name: "65-year-old participant",
      },
      {
        group: "seniors",
        headline: "Gentle and very supportive.",
        quote:
          "The trainers were extremely patient. I learnt how to avoid scams and stay safe at home.",
        name: "Senior citizen group member",
      },
    ],
  },
  {
    title: "Special Needs & Challengers Families Speak",
    items: [
      {
        group: "special",
        headline: "Perfect for my child.",
        quote:
          "The instructor understood my son’s needs and adapted every activity. He now uses safe words confidently.",
        name: "Parent of a child with autism",
      },
      {
        group: "special",
        headline: "Kind, patient, and effective.",
        quote: "This program really respects and supports special needs students.",
        name: "Special educator",
      },
    ],
  },
  {
    title: "Instructors & Trainers Speak",
    items: [
      {
        group: "instructors",
        headline: "The best instructor training I have attended.",
        quote:
          "The structured curriculum and real-life practice gave me confidence to teach students of all ages.",
        name: "Certified Instructor",
      },
      {
        group: "instructors",
        headline: "Clear, powerful, and practical.",
        quote: "The teaching system makes it easy for anyone to deliver high-quality safety programs.",
        name: "Senior Trainer",
      },
    ],
  },
];

export const testimonials = testimonialGroups.flatMap((group) => group.items);
