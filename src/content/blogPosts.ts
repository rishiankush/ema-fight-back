export type BlogBlock =
  | { type: "p" | "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "img"; src: string; alt: string }
  | { type: "video"; src: string }
  | { type: "youtube"; id: string };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  blocks: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    "slug": "global-media-strategist-dr-amrinder-pal-singh-joins-project-1-lakh-as-ambassador",
    "title": "Global Media Strategist Dr. Amrinder Pal Singh Joins Project 1 Lakh as Ambassador",
    "date": "2026-03-26",
    "excerpt": "MOHALI, INDIA — Project 1 Lakh is pleased to announce a strategic partnership with Dr. Amrinder Pal Singh, who joins the mission as an official Ambassador and Media Partner. Dr. Singh brings over a decade of experience in digital publishing and community development. As the founder of DXB News Network and Markazia Solutions, he has",
    "blocks": [
      {
        "type": "p",
        "text": "MOHALI, INDIA — Project 1 Lakh is pleased to announce a strategic partnership with Dr. Amrinder Pal Singh, who joins the mission as an official Ambassador and Media Partner."
      },
      {
        "type": "p",
        "text": "Dr. Singh brings over a decade of experience in digital publishing and community development. As the founder of DXB News Network and Markazia Solutions, he has built a reputation for helping brands and individuals achieve strategic visibility through modern storytelling. His appointment as the Supreme Chair Governor of the International News Alliance in Paris further highlights his influence in the global media landscape."
      },
      {
        "type": "p",
        "text": "Beyond his professional success, Dr. Singh is a dedicated social impact leader. Since 2008, his NGO, Salaam Zindagi India, has impacted over 2.2 million people through collaborations with defense institutions, universities, and corporations."
      },
      {
        "type": "p",
        "text": "“Dr. Singh’s commitment to innovation and community upliftment perfectly aligns with our goal of teaching Self Defense to 100,000 citizens,” said Grandmaster B.S. Handa. “His media expertise will ensure that our message of Safety Intelligence reaches those who need it most.”"
      }
    ]
  },
  {
    "slug": "a-triple-victory-for-safety-project-1-lakh-expands-to-cgc-quest-group",
    "title": "A Triple Victory for Safety! Project 1 Lakh Expands to CGC & Quest Group",
    "date": "2026-03-11",
    "excerpt": "By: The Editorial Team, EMA Fitness Date: March 10, 2026 The mission to empower India has just shifted into high gear. Under the visionary leadership of Grandmaster B.S. Handa (9th Dan Black Belt, 50+ Years Experience), the Project 1 Lakh Mission has officially secured three massive partnerships in a single week. We are proud to",
    "blocks": [
      {
        "type": "img",
        "src": "/assets/blog/Project-1-Lakh-8.png",
        "alt": "A Triple Victory for Safety! Project 1 Lakh Expands to CGC & Quest Group"
      },
      {
        "type": "p",
        "text": "By: The Editorial Team, EMA Fitness Date: March 10, 2026"
      },
      {
        "type": "p",
        "text": "The mission to empower India has just shifted into high gear."
      },
      {
        "type": "p",
        "text": "Under the visionary leadership of Grandmaster B.S. Handa (9th Dan Black Belt, 50+ Years Experience), the Project 1 Lakh Mission has officially secured three massive partnerships in a single week. We are proud to announce that CGC Landran, CGC Mohali, and Quest Group of Institutions have all joined forces with us to make their campuses “Fearless.”"
      },
      {
        "type": "h2",
        "text": "1. CGC Landran: The Green Signal for Student Welfare"
      },
      {
        "type": "p",
        "text": "Our journey reached a milestone today at CGC Landran. After a high-level meeting with Dr. Gagandeep Bhullar (Director, Students Welfare & Alumni Affairs), we received the official “Green Signal” to launch our specialized Self-Defense Seminars and Nunchaku Workshops."
      },
      {
        "type": "p",
        "text": "Dr. Bhullar’s commitment to student safety aligns perfectly with our goal of training the youth in Situational Intelligence and the “3-Second Rule.”"
      },
      {
        "type": "h2",
        "text": "2. CGC Mohali: Strengthening the Sports & Safety Bond"
      },
      {
        "type": "p",
        "text": "The momentum continued at CGC Mohali, where Mr. Satish K. Sarhadi (Senior Director of Sports) gave his enthusiastic approval for our project. With his deep background in sports leadership, Mr. Sarhadi recognizes that self-defense is not just about physical strength—it’s about the mental discipline and lightning-fast reflexes that our EMA (Explosive Martial Arts) system provides."
      },
      {
        "type": "h2",
        "text": "3. Quest Group of Institutions: Building a Secure Future"
      },
      {
        "type": "p",
        "text": "Completing this historic “Hat-Trick” of approvals, Dr. Harish Chander Mohindroo (Campus Director, Quest Group of Institutions) has officially invited the Project 1 Lakh Trust to train their students. Dr. Mohindroo’s vision for a holistic education includes the “Safety Sense” that every modern student needs to navigate the world confidently."
      },
      {
        "type": "h2",
        "text": "Why These Institutions Chose Project 1 Lakh"
      },
      {
        "type": "p",
        "text": "It’s not just about “learning to fight.” Grandmaster B.S. Handa’s curriculum is built on 50+ years of mastery, focusing on:"
      },
      {
        "type": "p",
        "text": "The 3-Second Rule: Decisive action when every millisecond counts."
      },
      {
        "type": "p",
        "text": "Applied Self-Defense: Practical techniques that work in street clothes, not just the gym."
      },
      {
        "type": "p",
        "text": "Nunchaku Mastery: Featuring our Nunchaku Queen, Rashi, to show that speed and skill have no gender or age limits."
      },
      {
        "type": "h2",
        "text": "What’s Next for the Students?"
      },
      {
        "type": "p",
        "text": "Students at these campuses will soon see our “Big Banners” and QR codes appearing across their grounds. By scanning these codes, they can:"
      },
      {
        "type": "p",
        "text": "Join the Project 1 Lakh WhatsApp Community."
      },
      {
        "type": "p",
        "text": "Download our Free “Safety Sense” PDF Guide."
      },
      {
        "type": "p",
        "text": "Access the Nunchaku Basic Actions course to start their journey from home."
      },
      {
        "type": "h2",
        "text": "A Message from Grandmaster B.S. Handa"
      },
      {
        "type": "p",
        "text": "“Our mission is to move safety from the ‘dojo’ to the ‘doorstep.’ With the support of these three prestigious institutions, we are now closer than ever to our goal of training 100,000 protectors. We thank Dr. Bhullar, Mr. Sarhadi, and Dr. Mohindroo for their trust and vision.”"
      },
      {
        "type": "p",
        "text": "Are you ready to join the mission? Whether you are a student, a parent, or a business leader, there is a place for you in Project 1 Lakh."
      }
    ],
    "image": "/assets/blog/Project-1-Lakh-8.png"
  },
  {
    "slug": "why-tricity-parents-choose-extreme-martial-arts-ema-over-ordinary-gyms",
    "title": "Why Tricity Parents Choose Extreme Martial Arts (EMA) over Ordinary Gyms",
    "date": "2026-03-02",
    "excerpt": "It is a difficult time to be a parent in the Tricity. Between digital screens, fast food, and academic stress, every parent asks: “How can I build my child’s body and mind?” While ordinary gyms offer a basic class, Extreme Martial Arts (EMA) offers a Legacy. This March, families are moving to our elite headquarters",
    "blocks": [
      {
        "type": "p",
        "text": "It is a difficult time to be a parent in the Tricity. Between digital screens, fast food, and academic stress, every parent asks: “How can I build my child’s body and mind?” While ordinary gyms offer a basic class, Extreme Martial Arts (EMA) offers a Legacy."
      },
      {
        "type": "p",
        "text": "This March, families are moving to our elite headquarters at Sector 86 and our massive 3,000 sq. ft. facility at Legacy Martial Arts World (inside ProUltimate Gym, Sector 72, Mohali)."
      },
      {
        "type": "p",
        "text": "Here are the 3 reasons why EMA is the Tricity’s first choice for children:"
      },
      {
        "type": "h2",
        "text": "1. 50+ Years of ‘Safety Intelligence’"
      },
      {
        "type": "p",
        "text": "An ordinary gym teaches a child how to punch a bag. At EMA, we teach them how to think. Grandmaster B.S. Handa brings five decades of expertise directly to the curriculum at both our Sector 86 and Sector 72 centers."
      },
      {
        "type": "p",
        "text": "Our “3-Second Rule” is a game-changer for bully prevention."
      },
      {
        "type": "p",
        "text": "We don’t just teach kids how to fight; we teach them Safety Intelligence—how to avoid a fight before it starts."
      },
      {
        "type": "h2",
        "text": "2. A “Military-Grade” Break from Screens"
      },
      {
        "type": "p",
        "text": "Screens are the enemy of focus. The EMA centers are sacred spaces of discipline. Whether it is the Morning Playway (9:00 AM – 12:30 PM) or the Evening Activity Club (3:00 PM – 8:00 PM) led by Nancy, we provide a structured, screen-free environment."
      },
      {
        "type": "p",
        "text": "We build core strength and coordination that ordinary playways cannot match."
      },
      {
        "type": "p",
        "text": "We are fully inclusive, supporting children with ADHD, Anxiety, and Autism through a disciplined “Military Regime” at both locations."
      },
      {
        "type": "h2",
        "text": "3. Joining the EMA National Movement: Project 1 Lakh"
      },
      {
        "type": "p",
        "text": "At EMA, your child isn’t just a student; they are a Protector. By enrolling at our Sector 86 or Sector 72 facilities, they become part of our mission to train 100,000 citizens in Self Defense across India."
      },
      {
        "type": "p",
        "text": "Led by the power duo of Grandmaster Handa and Nancy, we are building a safer India."
      },
      {
        "type": "p",
        "text": "Every child at EMA learns to be a leader and a role model for their generation."
      },
      {
        "type": "h2",
        "text": "📍 Our EMA Locations:"
      },
      {
        "type": "img",
        "src": "/assets/blog/Ncy-Academy.png",
        "alt": "Why Tricity Parents Choose Extreme Martial Arts (EMA) over Ordinary Gyms"
      },
      {
        "type": "p",
        "text": "EMA Sector 86 (Legacy World): Our dedicated center for elite training and discipline."
      },
      {
        "type": "p",
        "text": "EMA Sector 72 (Legacy World): 3,000 sq. ft. of excellence inside ProUltimate Gym."
      }
    ],
    "image": "/assets/blog/Ncy-Academy.png"
  },
  {
    "slug": "securing-the-future-project-1-lakh-ignites-safety-sense-at-chandigarh-university",
    "title": "Securing the Future: Project 1 Lakh Ignites ‘Safety Sense’ at Chandigarh University",
    "date": "2026-02-03",
    "excerpt": "The Vision of a Safer Campus When we think of a university, we think of degrees, careers, and the future. But at Project 1 Lakh, we believe that the foundation of a great future is a Safe Present. Recently, Chandigarh University became the epicenter of a safety revolution as we conducted our “Safety Intelligence” masterclass",
    "blocks": [
      {
        "type": "img",
        "src": "/assets/blog/IMG_4130.JPG-2048x1191.jpeg",
        "alt": "Securing the Future: Project 1 Lakh Ignites ‘Safety Sense’ at Chandigarh University"
      },
      {
        "type": "p",
        "text": "Securing the Future:"
      },
      {
        "type": "video",
        "src": "https://emafitness.com/emafit/wp-content/uploads/2026/02/Dbl-Nunchaku-VID_20260129_154613547.mp4"
      },
      {
        "type": "img",
        "src": "/assets/blog/IMG_4100.JPG-2048x1102.jpeg",
        "alt": "Securing the Future: Project 1 Lakh Ignites ‘Safety Sense’ at Chandigarh University"
      },
      {
        "type": "p",
        "text": "Securing the Future:"
      },
      {
        "type": "p",
        "text": "The Vision of a Safer Campus When we think of a university, we think of degrees, careers, and the future. But at Project 1 Lakh, we believe that the foundation of a great future is a Safe Present. Recently, Chandigarh University became the epicenter of a safety revolution as we conducted our “Safety Intelligence” masterclass for its vibrant student community."
      },
      {
        "type": "p",
        "text": "Bridging the Gap Between Education and Security Following the visionary guidance of Brig. Brar Sir and the support of Prachy Mam, I brought 50+ years of martial arts wisdom to the CU campus. The goal was simple yet profound: Safety is being ignored because of a ‘lack of time’—and that is exactly where the danger lies."
      },
      {
        "type": "p",
        "text": "We taught the students that they don’t need to spend years in a gym to stay safe. They need to master the first 3 seconds."
      },
      {
        "type": "p",
        "text": "Highlights from the CU Masterclass:"
      },
      {
        "type": "p",
        "text": "Breaking the ‘Freeze’: We demonstrated live how to stop the brain from locking up during an awkward or dangerous situation."
      },
      {
        "type": "p",
        "text": "Mind as a Weapon: Students learned that ‘Safety Sense’ is 90% mental awareness and 10% physical action."
      },
      {
        "type": "p",
        "text": "The Digital Leap: Using the Exly Platform, we moved away from old-school paperwork. Hundreds of students joined our digital community instantly, gaining lifetime access to safety tips and their Official Certificates of Participation."
      },
      {
        "type": "p",
        "text": "A Commitment to Every Department The response at CU was overwhelming. From the Health Department to the engineering blocks, the message is clear: students want to feel empowered. We are now preparing to take this seminar to every single department across the university to ensure CU remains the safest campus in India."
      },
      {
        "type": "p",
        "text": "The Mission Continues Chandigarh University has set the gold standard. We are now inviting more institutions and corporate partners to join Project 1 Lakh."
      },
      {
        "type": "p",
        "text": "“Education empowers your mind; Safety Sense empowers your life.”"
      }
    ],
    "image": "/assets/blog/IMG_4130.JPG-2048x1191.jpeg"
  },
  {
    "slug": "3-seconds-to-safety-grandmaster-b-s-handa-empowers-ggsd-students-with-safety-sense",
    "title": "3 Seconds to Safety: Grandmaster B.S. Handa Empowers GGSD Students with ‘Safety Sense’",
    "date": "2026-02-03",
    "excerpt": "The Reality Check Is our education truly complete if we don’t know how to protect ourselves? At GGDSD College, we recently asked this critical question. In a world where “lack of time” is the biggest excuse for ignoring safety, we proved that you don’t need hours to learn survival—you only need to master the first",
    "blocks": [
      {
        "type": "img",
        "src": "/assets/blog/IMG_20260114_101219644_HDR.jpg",
        "alt": "3 Seconds to Safety: Grandmaster B.S. Handa Empowers GGSD Students with ‘Safety Sense’"
      },
      {
        "type": "p",
        "text": "3 Seconds to Safety:"
      },
      {
        "type": "img",
        "src": "/assets/blog/IMG_20260114_100718968_HDR-2048x1536.jpg",
        "alt": "3 Seconds to Safety: Grandmaster B.S. Handa Empowers GGSD Students with ‘Safety Sense’"
      },
      {
        "type": "p",
        "text": "3 Seconds to Safety:"
      },
      {
        "type": "video",
        "src": "/assets/blog/video_2026-01-15_15-48-25.mp4"
      },
      {
        "type": "p",
        "text": "The Reality Check Is our education truly complete if we don’t know how to protect ourselves? At GGDSD College, we recently asked this critical question. In a world where “lack of time” is the biggest excuse for ignoring safety, we proved that you don’t need hours to learn survival—you only need to master the first 3 seconds."
      },
      {
        "type": "p",
        "text": "The Event: Project 1 Lakh Hits GGDSD The energy was electric as students gathered to move beyond textbooks and into the world of Safety Intelligence. I was honored to lead this seminar, sharing the culmination of my 50+ years of martial arts experience with the next generation of leaders."
      },
      {
        "type": "p",
        "text": "What We Taught: The “Switch On” Mindset Most people think self defense is about 10-minute fights or complex moves. We corrected that myth. At the GGSD seminar, we focused on:"
      },
      {
        "type": "p",
        "text": "The 3-Second Rule: How to stop the “freeze” response and take action immediately."
      },
      {
        "type": "p",
        "text": "Situational Awareness: Training the eyes to see a threat before it arrives."
      },
      {
        "type": "p",
        "text": "Self Defense (Not just Survival): Moving from a victim mindset to a warrior mindset."
      },
      {
        "type": "p",
        "text": "A Digital Mission To make safety a permanent part of their lives, we introduced the students to our Exly Digital Platform. We are removing all barriers—no paperwork, no long wait times. By scanning a simple code, students joined our lifetime community, ensuring that the lessons learned in the seminar stay with them forever."
      },
      {
        "type": "p",
        "text": "The Road Ahead GGSD was a massive success, but the journey to 1 Lakh has just begun. We are taking this mission to every department, every college, and every corporate office."
      },
      {
        "type": "p",
        "text": "A Special Message to Students: Your safety is your responsibility. Don’t wait for an emergency to realize you should have been prepared."
      }
    ],
    "image": "/assets/blog/IMG_20260114_101219644_HDR.jpg"
  },
  {
    "slug": "why-most-self-defense-classes-fail-and-how-project-1-lakh-is-different",
    "title": "Why Most Self Defense Classes Fail (And How Project 1 Lakh is Different)",
    "date": "2026-01-22",
    "excerpt": "Have you ever watched a self defense video, thought it was great, but then forgot the move just ten minutes later? You are not alone. In my 50+ years of martial arts, I have seen thousands of people go “blank” when a real awkward situation arises. They forget the “steps” because fear takes over. The",
    "blocks": [
      {
        "type": "img",
        "src": "/assets/blog/Project-1-Lakh.jpg",
        "alt": "Why Most Self Defense Classes Fail (And How Project 1 Lakh is Different)"
      },
      {
        "type": "p",
        "text": "Have you ever watched a self defense video, thought it was great, but then forgot the move just ten minutes later?"
      },
      {
        "type": "p",
        "text": "You are not alone. In my 50+ years of martial arts, I have seen thousands of people go “blank” when a real awkward situation arises. They forget the “steps” because fear takes over."
      },
      {
        "type": "p",
        "text": "The Problem: Complex Moves Most classes teach you how to fight like a pro athlete. But a mother, a student, or a working professional doesn’t have 10 years to practice. They need safety now."
      },
      {
        "type": "p",
        "text": "The Solution: The Handa Safety Instinct Through Project 1 Lakh, I am not teaching you how to win a trophy. I am teaching you how to survive. We focus on three things that your brain already knows how to do:"
      },
      {
        "type": "p",
        "text": "Awareness (The Eye Test): Spotting a bad situation before it touches you."
      },
      {
        "type": "p",
        "text": "The Voice Shield: Using your words and posture to stop a person in their tracks."
      },
      {
        "type": "p",
        "text": "Simple Triggers: Using natural body movements (like escaping a thumb-grip) that are impossible to forget."
      },
      {
        "type": "p",
        "text": "My Mission I was once a weak child struggling with asthma. I found my strength through these simple instincts. Now, my goal is to create 100,000 Safety Leaders across India."
      },
      {
        "type": "p",
        "text": "Self defense is 90% mental and 10% physical. If your mind is ready, your body will follow."
      },
      {
        "type": "p",
        "text": "Don’t wait for a bad situation to happen. Start trusting your instinct today."
      },
      {
        "type": "p",
        "text": "Want to join the mission? Contact me at 9216444949 to attend our next session."
      },
      {
        "type": "p",
        "text": "Or use this link to join our WhatsApp Community “Project 1 Lack Self Defense Awareness”: https://chat.whatsapp.com/CSBv9kMarEhAq6shezOgH8"
      }
    ],
    "image": "/assets/blog/Project-1-Lakh.jpg"
  },
  {
    "slug": "why-kids-self-defense-is-chandigarhs-top-priority-in-2025",
    "title": "Why Kids Self-Defense is Chandigarh’s Top Priority in 2025",
    "date": "2025-12-26",
    "excerpt": "In 2025, parenting in the Tricity comes with new challenges. From the rise of screen addiction to concerns about school-yard bullying, parents in Chandigarh are looking for more than just a hobby for their children—they are looking for a “shield.” At Extreme Martial Arts (EMA), we have been teaching children in Chandigarh (since 1984) and",
    "blocks": [
      {
        "type": "p",
        "text": "In 2025, parenting in the Tricity comes with new challenges. From the rise of screen addiction to concerns about school-yard bullying, parents in Chandigarh are looking for more than just a hobby for their children—they are looking for a “shield.”"
      },
      {
        "type": "p",
        "text": "At Extreme Martial Arts (EMA), we have been teaching children in Chandigarh (since 1984) and presently at Sector 26, Chandigarh. We’ve seen that while sports are great, Self-Defense is a life skill that every child needs. Here is why self-defense training is growing faster than any other kids’ activity in Chandigarh this year."
      },
      {
        "type": "p",
        "text": "1. Real-World Safety, Not Just Sport\nUnlike competitive sports where the goal is to win a trophy, our kids program is about Safety. In 2025, parents want their children to be “Bully-Proof.” We teach kids how to recognize “stranger danger,” how to use their voice to de-escalate a conflict, and—only as a last resort—how to use physical techniques to escape a grab and get to safety."
      },
      {
        "type": "p",
        "text": "2. Replacing “Screen Time” with “Focus Time”\nThe biggest struggle for Chandigarh parents today is the digital world. Martial arts training requires total presence. When a child is practicing their blocks or balance at EMA, they aren’t thinking about a phone or a tablet. This “brain training” improves their attention span, which leads to better performance in school and exams."
      },
      {
        "type": "p",
        "text": "3. Building “Internal” Confidence\nConfidence doesn’t come from being the strongest kid in the room; it comes from knowing you can handle a difficult situation. By learning traditional self-defense values, children at EMA develop a quiet, steady confidence. They learn to carry themselves with respect, which naturally discourages bullies from targeting them."
      },
      {
        "type": "p",
        "text": "4. Discipline and Respect (The Traditional Way)\nAs the oldest academy in Chandigarh, we stick to the core values of martial arts: Respect, Discipline, and Humility. In our classes, kids learn to bow to their seniors, follow instructions instantly, and value hard work. These are the “Old School” values that are more important than ever in 2025."
      },
      {
        "type": "p",
        "text": "5. Fitness with a Purpose\nWhile our students get a fantastic physical workout, they don’t even realize they are “exercising.” Through agility drills and self-defense movements, they build coordination, strength, and flexibility. It is fitness that serves a practical purpose: keeping them safe and healthy for life."
      },
      {
        "type": "p",
        "text": "Start Your Child’s Journey at EMA Chandigarh\nYour child’s safety and confidence are our mission. With over 40 years of experience in the Tricity, we provide a safe, family-friendly environment where every child is treated with care."
      },
      {
        "type": "p",
        "text": "Is your child ready to become “Bully-Proof”? Book a FREE Kids’ Self-Defense Trial Class in Sector 26 Today!"
      }
    ]
  },
  {
    "slug": "2153-2",
    "title": "Announcements (Jan 2025)",
    "date": "2025-01-31",
    "excerpt": "Our center at Kharar, Punjab",
    "blocks": [
      {
        "type": "p",
        "text": "Our center at Kharar, Punjab"
      },
      {
        "type": "img",
        "src": "/assets/blog/Screenshot-2025-01-31-123636.png",
        "alt": "Announcements (Jan 2025)"
      }
    ],
    "image": "/assets/blog/Screenshot-2025-01-31-123636.png"
  },
  {
    "slug": "50-children-joined-the-jalvayu-towers-sunny-enclave-mohali",
    "title": "50 children joined the Jalvayu Towers, Sunny Enclave, Mohali",
    "date": "2024-09-06",
    "excerpt": "Extreme Martial Arts Poggo Games and Competition held at Jalvayu Towers, Sunny Enclave, Kharar, Mohali Nearly 50 children joined the Jalvayu Towers, Sunny Enclave, Mohali, at EMA Poggo Games and Competition, and everyone had so much fun! The kids were full of energy and wanted to keep playing. Even those who came late enjoyed watching. Parents also",
    "blocks": [
      {
        "type": "h2",
        "text": "Extreme Martial Arts Poggo Games and Competition held at Jalvayu Towers, Sunny Enclave, Kharar, Mohali"
      },
      {
        "type": "p",
        "text": "Nearly 50 children joined the Jalvayu Towers, Sunny Enclave, Mohali, at EMA Poggo Games and Competition, and everyone had so much fun!"
      },
      {
        "type": "p",
        "text": "The kids were full of energy and wanted to keep playing. Even those who came late enjoyed watching. Parents also joined in and felt great."
      },
      {
        "type": "p",
        "text": "जलवायु ईएमए पोगो गेम्स और प्रतियोगिता में लगभग 50 बच्चे शामिल हुए और सभी ने खूब मस्ती की!"
      },
      {
        "type": "p",
        "text": "बच्चे ऊर्जा से भरे हुए थे और खेलते रहना चाहते थे। जो बच्चे देर से आए थे, उन्होंने भी खेल का आनंद लिया।"
      },
      {
        "type": "img",
        "src": "/assets/blog/Jalvayu-Towers-01-2048x1536.jpeg",
        "alt": "50 children joined the Jalvayu Towers, Sunny Enclave, Mohali"
      },
      {
        "type": "p",
        "text": "Extreme Martial Arts Poggo Games and Competition"
      },
      {
        "type": "img",
        "src": "/assets/blog/Jalvayu-Towers-02-2048x1536.jpeg",
        "alt": "50 children joined the Jalvayu Towers, Sunny Enclave, Mohali"
      },
      {
        "type": "p",
        "text": "Extreme Martial Arts Poggo Games and Competition"
      },
      {
        "type": "img",
        "src": "/assets/blog/Jalvayu-Towers-03-2048x1536.jpeg",
        "alt": "50 children joined the Jalvayu Towers, Sunny Enclave, Mohali"
      },
      {
        "type": "p",
        "text": "Extreme Martial Arts Poggo Games and Competition"
      },
      {
        "type": "video",
        "src": "/assets/blog/Jalvayu-Towers-04.mp4"
      },
      {
        "type": "video",
        "src": "/assets/blog/Jalvayu-Towers-05.mp4"
      },
      {
        "type": "video",
        "src": "/assets/blog/Jalvayu-Towers-06.mp4"
      },
      {
        "type": "video",
        "src": "/assets/blog/Jalvayu-Towers-07.mp4"
      }
    ],
    "image": "/assets/blog/Jalvayu-Towers-01-2048x1536.jpeg"
  },
  {
    "slug": "kolkatas-heartbreaking-incident-a-call-to-action-for-self-defense-awareness",
    "title": "Kolkata’s Heartbreaking Incident: A Call to Action for Self-Defense Awareness",
    "date": "2024-08-19",
    "excerpt": "Protecting Our Women: Lessons from the Kolkata Rape and Murder Case Recent Tragedy: We are deeply saddened by the recent tragic events involving a young female trainee doctor. This heartbreaking incident reminds us of the importance of self-defense and personal safety. An Urgent Appeal: We strongly urge all women, including those in schools, colleges, corporate",
    "blocks": [
      {
        "type": "img",
        "src": "/assets/blog/Screenshot-2024-08-19-164321.png",
        "alt": "Kolkata’s Heartbreaking Incident: A Call to Action for Self-Defense Awareness"
      },
      {
        "type": "h2",
        "text": "Protecting Our Women: Lessons from the Kolkata Rape and Murder Case"
      },
      {
        "type": "h2",
        "text": "Recent Tragedy:"
      },
      {
        "type": "p",
        "text": "We are deeply saddened by the recent tragic events involving a young female trainee doctor. This heartbreaking incident reminds us of the importance of self-defense and personal safety."
      },
      {
        "type": "h2",
        "text": "An Urgent Appeal:"
      },
      {
        "type": "p",
        "text": "We strongly urge all women, including those in schools, colleges, corporate offices, and other workplaces, to consider undergoing self-defense training. It is crucial to be prepared and aware of the risks in today’s world."
      },
      {
        "type": "h2",
        "text": "Self-Defense Training:"
      },
      {
        "type": "p",
        "text": "If you or your organization is interested in self-defense training, we are here to help. We offer a comprehensive self-defense certificate course that covers:\n– Awareness of dangerous situations.\n– Practical tips and tricks to escape from threats.\n– Early warning signs to avoid danger before it happens."
      },
      {
        "type": "h2",
        "text": "How to Get Started:"
      },
      {
        "type": "h2",
        "text": "Individuals:"
      },
      {
        "type": "p",
        "text": "Contact us directly or simply send a message with the word “Help” for more information on our online and offline training options.\nInstitutions: Schools, colleges, and corporate offices can approach us to arrange seminars and workshops tailored to your needs."
      },
      {
        "type": "h2",
        "text": "Take Action Today:"
      },
      {
        "type": "p",
        "text": "Don’t wait until it’s too late. Equip yourself and those around you with the knowledge and skills to stay safe. Reach out to us, and together, we can make a difference."
      }
    ],
    "image": "/assets/blog/Screenshot-2024-08-19-164321.png"
  },
  {
    "slug": "nancy-is-back-taekwondo-classes-take-a-new-twist",
    "title": "Nancy is Back – Taekwondo Classes Take a New Twist",
    "date": "2024-08-04",
    "excerpt": "Master Nancy – “Accomplished North Indian Taekwondo Athlete and Coach” Introduction First North Indian girl to go Olympic-style Taekwondo in South Korea. Completed a degree in sports science. Achievements 14 Gold medals in state, national, and international championships. 2 Silver medals. 2 Bronze medals. Experience 30 years in Taekwondo. Over a decade of teaching. Influenced",
    "blocks": [
      {
        "type": "h2",
        "text": "Master Nancy – “Accomplished North Indian Taekwondo Athlete and Coach”"
      },
      {
        "type": "p",
        "text": "Introduction"
      },
      {
        "type": "ul",
        "items": [
          "First North Indian girl to go Olympic-style Taekwondo in South Korea.",
          "Completed a degree in sports science."
        ]
      },
      {
        "type": "img",
        "src": "/assets/blog/pamphlet-3-scaled.jpg",
        "alt": "Nancy is Back – Taekwondo Classes Take a New Twist"
      },
      {
        "type": "p",
        "text": "Achievements"
      },
      {
        "type": "ul",
        "items": [
          "14 Gold medals in state, national, and international championships.",
          "2 Silver medals.",
          "2 Bronze medals."
        ]
      },
      {
        "type": "p",
        "text": "Experience"
      },
      {
        "type": "ul",
        "items": [
          "30 years in Taekwondo.",
          "Over a decade of teaching.",
          "Influenced 80,000+ students in the US, South Korea, and Canada."
        ]
      },
      {
        "type": "p",
        "text": "Credentials"
      },
      {
        "type": "ul",
        "items": [
          "Recognized as an international coach.",
          "Holds a 4th Dan black belt."
        ]
      },
      {
        "type": "p",
        "text": "Expertise"
      },
      {
        "type": "ul",
        "items": [
          "Proficient in Taekwondo, Taekwondo Jejudo, and Aikido.",
          "Mastery in Nunchucks, short sticks, and tonfa."
        ]
      }
    ],
    "image": "/assets/blog/pamphlet-3-scaled.jpg"
  },
  {
    "slug": "10-days-of-health-marathon-9-seats-left",
    "title": "10 Days of Health Marathon – 9 Seats Left !!!",
    "date": "2024-08-04",
    "excerpt": "**Join the Team for a Health Marathon! ????** 9 spots left. Enroll now for the 10 Days Health Marathon. Limited seats available. First come, first served! ????‍♂️???? #FitnessMarathon #HealthChallenge",
    "blocks": [
      {
        "type": "p",
        "text": "**Join the Team for a Health Marathon! ????** 9 spots left. Enroll now for the 10 Days Health Marathon. Limited seats available. First come, first served! ????‍♂️???? #FitnessMarathon #HealthChallenge"
      },
      {
        "type": "video",
        "src": "/assets/blog/10-Days-of-Marathon-2024-07-30-06-14-36copy-highlight.mp4"
      }
    ]
  },
  {
    "slug": "introduction-of-long-stick-basic-actions-to-our-martial-arts-students-at-strawberry-school-sec-26-chandigarh",
    "title": "Introduction of Long Stick Basic Actions to our Martial Arts students at Strawberry School, Sec 26, Chandigarh",
    "date": "2023-11-03",
    "excerpt": "The Long Stick, often referred to as the Bo Staff in martial arts, is a versatile weapon that offers numerous benefits to children when they practice its basic actions. Here are some key points about the Long Stick weapon and the advantages it provides: 1. Versatility: The Long Stick is a weapon that can be",
    "blocks": [
      {
        "type": "p",
        "text": "The Long Stick, often referred to as the Bo Staff in martial arts, is a versatile weapon that offers numerous benefits to children when they practice its basic actions. Here are some key points about the Long Stick weapon and the advantages it provides:"
      },
      {
        "type": "p",
        "text": "1. Versatility: The Long Stick is a weapon that can be used for both offensive and defensive techniques. It offers a wide range of movements, from striking to blocking, making it a well-rounded tool in martial arts training."
      },
      {
        "type": "p",
        "text": "2. Coordination: Practicing with the Long Stick enhances a child’s coordination and balance. They learn to control the weapon’s movements, which translates into improved body coordination."
      },
      {
        "type": "p",
        "text": "3. Strength and Flexibility: The act of wielding the Long Stick requires strength, which children develop as they engage in training. Additionally, it promotes flexibility as they work on their stances and movements."
      },
      {
        "type": "p",
        "text": "4. Focus and Concentration: Training with the Long Stick demands a high level of focus and concentration. Children learn to pay attention to the weapon’s positioning and their body movements, which improves their ability to concentrate."
      },
      {
        "type": "p",
        "text": "5. Discipline: Martial arts, including the use of weapons like the Long Stick, instill discipline in children. They must follow specific techniques and routines, promoting a sense of responsibility and self-control."
      },
      {
        "type": "p",
        "text": "6. Confidence: As children become proficient in the basic actions of the Long Stick, their confidence grows. They gain a sense of accomplishment and self-assurance in their abilities."
      },
      {
        "type": "p",
        "text": "7. Self-Defense Skills: Learning to use the Long Stick provides children with valuable self-defense skills. They develop techniques to protect themselves if ever faced with a threatening situation."
      },
      {
        "type": "p",
        "text": "8. Physical Fitness: The practice of Long Stick techniques contributes to improved physical fitness. Children build strength, endurance, and cardiovascular health as they engage in this dynamic martial art form."
      },
      {
        "type": "p",
        "text": "9. Respect and Sportsmanship: Martial arts emphasize respect for both the art itself and fellow practitioners. Children learn the values of respect and sportsmanship, which carry over into other aspects of their lives."
      },
      {
        "type": "p",
        "text": "10. Teamwork: Many martial arts classes involve group training. Children learn to work together, encourage their peers, and appreciate the benefits of teamwork."
      },
      {
        "type": "p",
        "text": "In summary, the Long Stick, or Bo Staff, is a valuable weapon in martial arts that offers numerous advantages to children. It not only equips them with self-defense skills but also promotes physical fitness, mental focus, and important life values like discipline and respect. Practicing the basic actions of the Long Stick is an excellent way for children to experience these benefits and grow in their martial arts journey."
      },
      {
        "type": "youtube",
        "id": "f-6kaYTAixc"
      }
    ]
  },
  {
    "slug": "women-international-day-8th-march-2023",
    "title": "Women International Day – 8th March 2023",
    "date": "2023-03-08",
    "excerpt": "On this International Women’s Day, let us celebrate the strength, resilience, and perseverance of all the women out there. Let us acknowledge their contribution to the world and their communities, despite facing numerous challenges and obstacles. Let us strive towards creating a world where every woman has the opportunity to reach her full potential and",
    "blocks": [
      {
        "type": "img",
        "src": "/assets/blog/EMA-Ncy-Pic-1364x2048.png",
        "alt": "Women International Day – 8th March 2023"
      },
      {
        "type": "p",
        "text": "Extreme Martial Arts Instructor"
      },
      {
        "type": "p",
        "text": "On this International Women’s Day, let us celebrate the strength, resilience, and perseverance of all the women out there. Let us acknowledge their contribution to the world and their communities, despite facing numerous challenges and obstacles."
      },
      {
        "type": "p",
        "text": "Let us strive towards creating a world where every woman has the opportunity to reach her full potential and is valued and respected for her unique talents and abilities. Let us stand in solidarity with all women, advocating for gender equality and empowering them to shatter any glass ceilings that stand in their way."
      },
      {
        "type": "p",
        "text": "Remember, a woman’s potential is limitless, and her determination unbreakable. Let us continue to support and uplift women, not just on International Women’s Day but every day, because a better world is only possible with their unwavering strength and resilience."
      }
    ],
    "image": "/assets/blog/EMA-Ncy-Pic-1364x2048.png"
  },
  {
    "slug": "self-defence-seminar-held-at-lm-thapar-school-of-management-dera-bassi-rajpura-punjab",
    "title": "Self Defence Seminar held at LM Thapar School of Management, Dera Bassi, Rājpura, Punjab",
    "date": "2021-11-21",
    "excerpt": "A self defence seminar was held at at at LM Thapar School of Management, Dera Bassi, Rājpura, Punjab on 20th November 2021 where many girls attended and felt more stronger after the seminar. They felt that these types of seminar or workshop should be held time to time to aware the self safety tips and",
    "blocks": [
      {
        "type": "p",
        "text": "A self defence seminar was held at at at LM Thapar School of Management, Dera Bassi, Rājpura, Punjab on 20th November 2021 where many girls attended and felt more stronger after the seminar. They felt that these types of seminar or workshop should be held time to time to aware the self safety tips and tricks."
      },
      {
        "type": "img",
        "src": "/assets/blog/WhatsApp-Image-2021-11-21-at-10.06.55.jpeg",
        "alt": "Self Defence Seminar held at LM Thapar School of Management, Dera Bassi, Rājpura, Punjab"
      },
      {
        "type": "video",
        "src": "/assets/blog/WhatsApp-Video-2021-11-21-at-10.07.11-2.mp4"
      }
    ],
    "image": "/assets/blog/WhatsApp-Image-2021-11-21-at-10.06.55.jpeg"
  },
  {
    "slug": "kids-children-5-to-12-years-classes-are-on-at-strawberry-field-high-school-sec-26-chd",
    "title": "Kids/Children (5 to 12 years) Fitness, Self Defence & Martial Arts Classes are on at Strawberry Field High School, Sec 26, CHD",
    "date": "2021-11-21",
    "excerpt": "Evening FItness, Self Defence & Martial Arts Classes Mon, Wed, Fri 4 to 5 PM 5 to 6 PM Venue: Strawberry Field High School Sector 26, Chandigarh Fee: 2000/- Monthly",
    "blocks": [
      {
        "type": "p",
        "text": "Evening FItness, Self Defence & Martial Arts Classes"
      },
      {
        "type": "p",
        "text": "Mon, Wed, Fri"
      },
      {
        "type": "p",
        "text": "4 to 5 PM"
      },
      {
        "type": "p",
        "text": "5 to 6 PM"
      },
      {
        "type": "p",
        "text": "Venue: Strawberry Field High School"
      },
      {
        "type": "p",
        "text": "Sector 26, Chandigarh"
      },
      {
        "type": "p",
        "text": "Fee: 2000/- Monthly"
      },
      {
        "type": "video",
        "src": "/assets/blog/My-Video.mp4"
      }
    ]
  },
  {
    "slug": "our-online-martial-arts-classes-still-on",
    "title": "Our Online Martial Arts Classes still on",
    "date": "2021-11-21",
    "excerpt": "Yes we are stil looking forward to enroll more students for our online martial arts classes. The online classes are still running and students are enjoying its benefits. Just message us “Online” to enroll with us at 9216444949.",
    "blocks": [
      {
        "type": "p",
        "text": "Yes we are stil looking forward to enroll more students for our online martial arts classes. The online classes are still running and students are enjoying its benefits. Just message us “Online” to enroll with us at 9216444949."
      }
    ]
  },
  {
    "slug": "self-defence-techniques-by-b-s-handa-extreme-martial-arts-chandigarh",
    "title": "Self Defence Techniques by B S Handa- Extreme Martial Arts Chandigarh",
    "date": "2021-03-03",
    "excerpt": "We offer you the most exciting, thrilling and life-shaping journey through Martial Arts. Along with intense workouts, we teach you discipline, meditation, self-defense for getting the most of life physically, mentally, spiritually. At Extreme Martial Arts Academy, we hammer out to",
    "blocks": [
      {
        "type": "youtube",
        "id": "xdzloj_N4Co"
      },
      {
        "type": "p",
        "text": "We offer you the most exciting, thrilling and life-shaping journey through Martial Arts. Along with intense workouts, we teach you discipline, meditation, self-defense for getting the most of life physically, mentally, spiritually. At Extreme Martial Arts Academy, we hammer out to set new rules to get you supreme self-confidence, self-esteem, experience weight loss, improves focus and makes you a person of great morals and values."
      }
    ]
  },
  {
    "slug": "fighting-sparring-week-11th-nov-to-22-nov-2019",
    "title": "Fighting (Sparring) Week At EMA Sec 15, CHD",
    "date": "2019-11-12",
    "excerpt": "Join us for the feel of Kicks and learn the latest techniques used for sparring (fighting) in Taekwondo. Master B S Handa (International Asian Player) with 47 years of experience will train you along with his team and help you learn the basic to advance levels. Call now at 9216444949, 7888721512 7380009222 for joining.",
    "blocks": [
      {
        "type": "p",
        "text": "Join us for the feel of Kicks and learn the latest techniques used for sparring (fighting) in Taekwondo. Master B S Handa (International Asian Player) with 47 years of experience will train you along with his team and help you learn the basic to advance levels. Call now at 9216444949, 7888721512 7380009222 for joining."
      }
    ]
  },
  {
    "slug": "international-womens-day",
    "title": "Self Defence Seminar-cum-workshop on International Women’s Day",
    "date": "2018-03-10",
    "excerpt": "International Women’s Day was celebrated at AISIN Automotive Haryana Pvt. Ltd., Rohtak by conducting a Self Defence Seminar-cum-workshop and aware them how to use common things like pen, pencil, specks, keys, comb and body parts as weapons. Nearly 50 plus girl employees attended the camp.",
    "blocks": [
      {
        "type": "img",
        "src": "/assets/blog/AISIN-SD-1.jpg",
        "alt": "Self Defence Seminar-cum-workshop on International Women’s Day"
      },
      {
        "type": "p",
        "text": "International Women’s Day was celebrated at AISIN Automotive Haryana Pvt. Ltd., Rohtak by conducting a Self Defence Seminar-cum-workshop and aware them how to use common things like pen, pencil, specks, keys, comb and body parts as weapons. Nearly 50 plus girl employees attended the camp."
      }
    ],
    "image": "/assets/blog/AISIN-SD-1.jpg"
  },
  {
    "slug": "8-13th-feb-2018-ema-self-defense-seminar-at-lovely-professional-university-jalandhar",
    "title": "Self Defence Seminar at Lovely Professional University, Jalandhar.",
    "date": "2018-02-08",
    "excerpt": "A six days awareness campaign for girls and women on sexual assault and harassment along with workshop on self-defense was held in Lovely Professional University (Jalandhar). This seminar was arranged by Dr. Neelam Sharma, Head of physical education department.",
    "blocks": [
      {
        "type": "p",
        "text": "A six days awareness campaign for girls and women on sexual assault and harassment along with workshop on self-defense was held in Lovely Professional University (Jalandhar)."
      },
      {
        "type": "p",
        "text": "This seminar was arranged by Dr. Neelam Sharma, Head of physical education department."
      },
      {
        "type": "img",
        "src": "/assets/blog/Martial-Arts-LPU.jpg",
        "alt": "Self Defence Seminar at Lovely Professional University, Jalandhar."
      }
    ],
    "image": "/assets/blog/Martial-Arts-LPU.jpg"
  },
  {
    "slug": "10-14th-july-2017-ema-self-defence-seminar-at-rajiv-gandhi-national-institute-of-youth-development-chandigarh",
    "title": "Self Defence Seminar at Rajiv Gandhi National Institute of Youth Development – Chandigarh",
    "date": "2017-07-10",
    "excerpt": "A Workshop on Disaster Management, organised by Rajiv Gandhi National Institute of Youth Development- Chandigarh. The Workshop was conducted by martial arts expert, Master B.S Handa, Black Belt 6th Dan (Kukkiwon, Korea). Talking about the workshop, martial arts expert, Mr. B.S Handa told, “It happened a lot many times that I listened to few disturbing",
    "blocks": [
      {
        "type": "img",
        "src": "/assets/blog/NCC-Camp-8.jpg",
        "alt": "Self Defence Seminar at Rajiv Gandhi National Institute of Youth Development – Chandigarh"
      },
      {
        "type": "p",
        "text": "A Workshop on Disaster Management, organised by Rajiv Gandhi National Institute of Youth Development- Chandigarh. The Workshop was conducted by martial arts expert, Master B.S Handa, Black Belt 6th Dan (Kukkiwon, Korea).\nTalking about the workshop, martial arts expert, Mr. B.S Handa told, “It happened a lot many times that I listened to few disturbing incidents happening with young girls and even elderly women. May it be the eve-teasing or stalking, all these incidents forced me to organised this camp where the females can learn to defend themselves from the goons.”To boost up the self-confidence among women and to make them prepare to fight back. A 5 Day Workshop on Disaster Management workshop was orgnized by Rajiv Gandhi National Institute of Youth Development, Regional Center from 10-14 July, 2017, attended by selected NCC candidates from North Zone for this self-defense workshop."
      },
      {
        "type": "img",
        "src": "/assets/blog/ncc-camp-new.jpg",
        "alt": "Self Defence Seminar at Rajiv Gandhi National Institute of Youth Development – Chandigarh"
      },
      {
        "type": "p",
        "text": "As this is a special camp, it is designed to make the participant more aware, prepared, and ready for any situation that may occur in their everyday life on any given day which would prove to be helpful for them. The participants learned many techniques in this workshop."
      }
    ],
    "image": "/assets/blog/NCC-Camp-8.jpg"
  },
  {
    "slug": "10-11th-jan-2017-ema-self-defence-seminar-at-godrej-consumer-products-limited-baddi",
    "title": "Self Defence Seminar at Godrej Consumer Products Limited, Baddi",
    "date": "2017-01-10",
    "excerpt": "A Self Defence seminar was held at Godrej Consumer Products Limited, Baddi on 10-11th Jan 2017 where nearly 100 members took part in the Seminar as well as attended the workshop. Their comments are as under: Manish Kumar: This training session was very helpful to protect ourself from any violence or any other sexual harassment and can",
    "blocks": [
      {
        "type": "img",
        "src": "/assets/blog/Self-Defence-111.jpg",
        "alt": "Self Defence Seminar at Godrej Consumer Products Limited, Baddi"
      },
      {
        "type": "p",
        "text": "A Self Defence seminar was held at Godrej Consumer Products Limited, Baddi on 10-11th Jan 2017 where nearly 100 members took part in the Seminar as well as attended the workshop. Their comments are as under:"
      },
      {
        "type": "ul",
        "items": [
          "Manish Kumar: This training session was very helpful to protect ourself from any violence or any other sexual harassment and can be used to protect ourself and our family. And these exercises can make benefit us physically and can make us more flexible and active. And I believe that these seminars should be conducted in regular basis.",
          "Pankaj Kumar: It was very informative training on self-defence. We learnt various techniques of self-defence. It was very good session. The trainer was very experienced and have very good presentation skills. He demonstrated all techniques in very easy way so that a lay man can also understand it easily.",
          "Abhas Barman Roy: Training session delivered was awesome and I would like to take self-defence in depth.",
          "Pankaj Pathania: This training is very beneficial for us. We can guide our family members to protect inside and outside home. We got to know how to use daily used things as weapons for our protection.",
          "Manjot Kumar: Training was very fruitful, especially the practical part. Trainer with team was explaining all the things in very good manner.",
          "Manjot Kumar Sharma: Very Good and informatory session. I learned many new things and techniques which can help me to defend from an attacker.",
          "Shalini Kaushik: These types of training should be conducted time to time. Overall seminar was very good. I learned many new things to save my life.",
          "Anjna: Session was very useful and learning. It helps one to make sensitize over the small techniques which are very useful in today’s world.",
          "Vijaylakshmi: Feeling more independent and secure then earlier. Can defend myself better from any attack.",
          "Ravinder Kumar: Its good for ourselves as well for our family members. It teaches how to handle the situation and react immediately, it’s a good form of exercise for body and have complete physical fitness.",
          "Aditya Rana: Learnt how easily we can use our body parts to protect ourselves without using any extra force.",
          "Ajay Kumar: Good learning, gain confidence about handling situations which can go worst. Feeling energized and fresh."
        ]
      }
    ],
    "image": "/assets/blog/Self-Defence-111.jpg"
  },
  {
    "slug": "21st-jan-2014-ema-women-fight-back-self-defence-seminar-was-held-at-govt-college-ropar",
    "title": "Self Defence Seminar was held at Govt. College, Ropar",
    "date": "2014-01-21",
    "excerpt": "",
    "blocks": []
  },
  {
    "slug": "9th-jan-2014-ema-women-fight-back-sd-at-bajaj-allianz-life-insurance-co-ltd-chandigarh",
    "title": "Self Defence Seminar at Bajaj Allianz Life Insurance Co. Ltd., Chandigarh",
    "date": "2014-01-09",
    "excerpt": "",
    "blocks": [
      {
        "type": "img",
        "src": "/assets/blog/2014-01-09-9thJan14_A.jpg",
        "alt": "Self Defence Seminar at Bajaj Allianz Life Insurance Co. Ltd., Chandigarh"
      }
    ],
    "image": "/assets/blog/2014-01-09-9thJan14_A.jpg"
  },
  {
    "slug": "9th-jan-2014-ema-women-fight-back-self-defence-seminar-in-collaboration-with-94-3-myfm-was-held-at-guru-gobind-singh-bhawan-sector-15-chandigarh",
    "title": "Self Defence Seminar in collaboration with 94.3 MyFM was held at Guru Gobind Singh Bhawan, Sector 15, Chandigarh",
    "date": "2014-01-09",
    "excerpt": "",
    "blocks": [
      {
        "type": "img",
        "src": "/assets/blog/2014-01-11-9thJan141.jpg",
        "alt": "Self Defence Seminar in collaboration with 94.3 MyFM was held at Guru Gobind Singh Bhawan, Sector 15, Chandigarh"
      }
    ],
    "image": "/assets/blog/2014-01-11-9thJan141.jpg"
  },
  {
    "slug": "3rd-jan-2014-women-fight-back-sd-seminar-at-wep-solutions-baddi",
    "title": "Self Defence Seminar at WeP Solutions, Baddi",
    "date": "2014-01-03",
    "excerpt": "",
    "blocks": [
      {
        "type": "img",
        "src": "/assets/blog/2014-01-04-3Jan14.jpg",
        "alt": "Self Defence Seminar at WeP Solutions, Baddi"
      }
    ],
    "image": "/assets/blog/2014-01-04-3Jan14.jpg"
  },
  {
    "slug": "women-fight-back-self-defence-seminar",
    "title": "Women Fight Back Self Defence Seminar",
    "date": "2013-11-21",
    "excerpt": "In collaboration with Inner Wheel Club Chandigarh Midtown, the Extreme Martial Arts conducted a Free Women Fight Back Self Defence seminar at Govt.High School Manimajra on 21st Nov 2013.Principal Mrs.Kund Bala Goyal, with their School Staff members, President Mrs.Rama Gupta and their members along with 200 girls of the school witness the Self Defence Seminar",
    "blocks": [
      {
        "type": "p",
        "text": "In collaboration with Inner Wheel Club Chandigarh Midtown, the Extreme Martial Arts conducted a Free Women Fight Back Self Defence seminar at Govt.High School Manimajra on 21st Nov 2013.Principal Mrs.Kund Bala Goyal, with their School Staff members, President Mrs.Rama Gupta and their members along with 200 girls of the school witness the Self Defence Seminar which was conducted by Master B S Handa, Harjot Singh Handa and Dev Narayan:"
      }
    ]
  },
  {
    "slug": "fight-back-women-self-defence-seminar",
    "title": "Fight Back Women Self Defence Seminar",
    "date": "2013-11-18",
    "excerpt": "Held at Book Fair at Parade Ground, Sector 17, Chandigarh:",
    "blocks": [
      {
        "type": "p",
        "text": "Held at Book Fair at Parade Ground, Sector 17, Chandigarh:"
      },
      {
        "type": "img",
        "src": "/assets/blog/2013-11-20-18thNov13.jpg",
        "alt": "Fight Back Women Self Defence Seminar"
      }
    ],
    "image": "/assets/blog/2013-11-20-18thNov13.jpg"
  },
  {
    "slug": "23rd-march-2013",
    "title": "Self Defence Seminar at The British School, Sector 8, Panchkula",
    "date": "2013-03-23",
    "excerpt": "EMA Women Fight Back Self Defence Seminar was held on 23rd Mar 2013 at The British School, Sector 8, Panchkula for the School Teachers and Staff.",
    "blocks": [
      {
        "type": "p",
        "text": "EMA Women Fight Back Self Defence Seminar was held on 23rd Mar 2013 at The British School, Sector 8, Panchkula for the School Teachers and Staff."
      },
      {
        "type": "img",
        "src": "/assets/blog/BrtshPKL.jpg",
        "alt": "Self Defence Seminar at The British School, Sector 8, Panchkula"
      }
    ],
    "image": "/assets/blog/BrtshPKL.jpg"
  },
  {
    "slug": "22nd-march-2013",
    "title": "Self Defence Seminar at The National Institute of Nursing Education (NINE), PGI, Chandigarh.",
    "date": "2013-03-22",
    "excerpt": "EMA Women Fight Back Self Defence Seminar was held on 22nd Mar 2013 at The National Institute of Nursing Education (NINE), PGI, Chandigarh. Comments by the participants: Charanpreet Kaur : It was a nice learning experience. As we learned how to protect ourselves and how to make use ofvarious things easily available with us and",
    "blocks": [
      {
        "type": "p",
        "text": "EMA Women Fight Back Self Defence Seminar was held on 22nd Mar 2013 at The National Institute of Nursing Education (NINE), PGI, Chandigarh."
      },
      {
        "type": "p",
        "text": "Comments by the participants:\nCharanpreet Kaur : It was a nice learning experience. As we learned how to protect ourselves and how to make use ofvarious things easily available with us and the whistle concept is also nice."
      },
      {
        "type": "p",
        "text": "Parninder Kaur : You taught us very well about self defence techniques. It will really be very useful for us specially the techniques to be used in bus."
      },
      {
        "type": "p",
        "text": "Bhawna: Enjoyed the lecture and learnt new things. I learnt how to defend ourselves in case of emergency. I want to attend the workshop."
      },
      {
        "type": "p",
        "text": "Karamdeep Kaur : It was a learning experience and the lecture was delivered nicely and has provided us with very useful information that we can inculcate in our lives."
      },
      {
        "type": "p",
        "text": "Maniz Panesar : These are little things which are always there around us. The important thing is to know about them. You made us know that, we are obliged."
      },
      {
        "type": "p",
        "text": "Bhavika Choudhary: This lecture is really going to help us in future, to defend ourselves. I liked that whistle revolution part. It was really empowering lecture. May that whistle revolution will come soon."
      },
      {
        "type": "p",
        "text": "Bhavika Choudhary: This lecture is really going to help us in future, to defend ourselves. I liked that whistle revolution part. It was really empowering lecture. May that whistle revolution will come soon."
      },
      {
        "type": "p",
        "text": "Ramandeep Kaur “ Workshop on self defence was excellent. we came to know about a lot of strength power in ourselves which we can use to protect us from victims. Thank you after such an excellent workshop."
      },
      {
        "type": "p",
        "text": "Deepika : it was a good session. It can help us a lot; through this I learnt that I have enough power to trouble shoot any emergency condition. Nice approach!!!"
      },
      {
        "type": "p",
        "text": "Amritpal Kaur : It is very nice attempt for women empowerment and strengthening. We came to know about the weapon that we can use at emergency time without seeking any sharp equipments."
      },
      {
        "type": "p",
        "text": "Deepika Kumari : it is extremely good that you people came year and teaches us by such good demonstrations. I have faced such bad situations but I was not really aware at that time how to act but after this program I am sure that nest time I can fight, I can do something. Thank you very much."
      },
      {
        "type": "p",
        "text": "Mandeep Kaur : it is excellent workshop and everyone must attend it. We have too many powers but we don’t know. Now after this workshop, I can be able to know that even I am less than anyone. I can know do anything, means I am totally independent and not a weak personality."
      },
      {
        "type": "p",
        "text": "Jashandeep Kaur : we learnt a lot about self defence. It is really important for girls these days. We enjoyed also. Lecture delivered was very good. We came to know about the weapon we are having with us all the time."
      },
      {
        "type": "p",
        "text": "Aphrna Joseph : Hit hard, Hit first, Hit low and stay unharmed."
      }
    ]
  },
  {
    "slug": "self-defence-seminar-was-held-on-15th-mar-2013-at-punjab-engineering-college",
    "title": "Self Defence Seminar at Punjab Engineering College, Sec 11, Chandigarh",
    "date": "2013-03-15",
    "excerpt": "EMA Women Fight Back Self Defence Seminar was held on 15th Mar 2013 at Punjab Engineering College, Sec 12, Chandigarh Comments by the participants: Sukhmani : It was a very informative workshop. I had a pleasure to attend it. Arushi : Very good Demonstration. I learned a lot. I would like to see you again in the",
    "blocks": [
      {
        "type": "p",
        "text": "EMA Women Fight Back Self Defence Seminar was held on 15th Mar 2013 at Punjab Engineering College, Sec 12, Chandigarh"
      },
      {
        "type": "h2",
        "text": "Comments by the participants:"
      },
      {
        "type": "p",
        "text": "Sukhmani : It was a very informative workshop. I had a pleasure to attend it."
      },
      {
        "type": "p",
        "text": "Arushi : Very good Demonstration. I learned a lot. I would like to see you again in the college."
      },
      {
        "type": "p",
        "text": "Payal Niharika : it was very nice workshop. I got to learn a lot. It was wonderful to know how well everyone is equipped."
      },
      {
        "type": "p",
        "text": "Heema Sharma : It was very good. I got to learn many things about self defence."
      },
      {
        "type": "p",
        "text": "Nikita Varshney :  It was very good and useful. I am feeling much mire stronger and confident."
      },
      {
        "type": "p",
        "text": "Sakshi Goyal : it was very good. I am feeling somewhat confident after attending it."
      },
      {
        "type": "p",
        "text": "Shreya Kumar : Knowledge gaining experience, instilled confident."
      },
      {
        "type": "p",
        "text": "Ravneet Kaur : wonderful workshop. Sir, I remember you; I have learned martial arts from you when I was in 8th standard. Good to see you after so many years."
      },
      {
        "type": "p",
        "text": "Sonam : I liked it. I mean I feel more confident after this. Hoping forward to attend workshop."
      },
      {
        "type": "p",
        "text": "Disha Jinda :  it was really good. I got to know or I can say realized general things that we can do but don’t come to mind. So, thank you sir."
      },
      {
        "type": "p",
        "text": "Bhavna : Awareness enhancement program was really good."
      },
      {
        "type": "p",
        "text": "Chakshu Puri : Good experience. Never had this type of workshop on self defence."
      },
      {
        "type": "p",
        "text": "Kamalpreet Kaur : it was very useful and interesting."
      },
      {
        "type": "p",
        "text": "Sanjali : We got to know about a lot of things but is could be better for us if we could our self do have the practically. Seeing the things on the screen helped us a lot but practically may help more."
      },
      {
        "type": "p",
        "text": "Shreya Jain : workshop was really nice. We got to learn a lot from it."
      },
      {
        "type": "p",
        "text": "Ritu Aggarwal : Awareness is required among people today very much and you are spreading the same thing. So, you are doing a great job."
      },
      {
        "type": "p",
        "text": "Geetika Gupta : It was good, informative. It really helped me to be aware to protect myself."
      }
    ]
  },
  {
    "slug": "15th-march-2013",
    "title": "Self Defence Seminar at Dell International Services Pvt Ltd, Mohali",
    "date": "2013-03-15",
    "excerpt": "EMA Women Fight Back Self Defence Seminar was held on 15th Mar 2013 at Dell International Services Pvt Ltd, Mohali. Comments",
    "blocks": [
      {
        "type": "img",
        "src": "/assets/blog/DELL_15Mar13.jpg",
        "alt": "Self Defence Seminar at Dell International Services Pvt Ltd, Mohali"
      },
      {
        "type": "img",
        "src": "/assets/blog/Dell_15Mar13_2.jpg",
        "alt": "Self Defence Seminar at Dell International Services Pvt Ltd, Mohali"
      },
      {
        "type": "p",
        "text": "EMA Women Fight Back Self Defence Seminar was held on 15th Mar 2013 at Dell International Services Pvt Ltd, Mohali."
      },
      {
        "type": "h2",
        "text": "Comments by the participants:"
      },
      {
        "type": "p",
        "text": "Natasha: Awsm tips, Great Help. Enhance lot of Self Confidence"
      },
      {
        "type": "p",
        "text": "Amrita: The session was very interactive and I am feeling very confident that I can save myself if in case I am in any kind of trouble.So the session was wonderful and was very knowledgeable."
      },
      {
        "type": "p",
        "text": "Amandeep: Very informative and interesting session.Lots of learning. Great Tips!! Thank You."
      },
      {
        "type": "p",
        "text": "Priya: Session was really very useful and has boosted the energy. It made us realize that we do not need anyone else to protect us. Need to attend more sessions."
      },
      {
        "type": "p",
        "text": "Rubeka: Session was helpful. Got to know how we can use our body parts for self-defence.  Would love to attend more sessions."
      },
      {
        "type": "p",
        "text": "Amandeep: It really helpful in teaching Self-defence techniques."
      },
      {
        "type": "p",
        "text": "Parminder: Very helpful and informative session. Thank you."
      },
      {
        "type": "p",
        "text": "Harsimran: We actually learnt good and new things. It is really Good!!"
      },
      {
        "type": "p",
        "text": "Amrinder: It was a good awareness session. Thanks a lot for tips and tricks."
      },
      {
        "type": "p",
        "text": "Gunjan: It was nice and knowledgeable."
      },
      {
        "type": "p",
        "text": "Priyanka: Your session was really very helpful. I look forward to any such workshop or trainings. Thank you!!"
      },
      {
        "type": "p",
        "text": "Preeti: Very Educating and Interesting. Helped to build our self-confidence."
      },
      {
        "type": "p",
        "text": "Ranmeet: Tricks were easy to learn. Knowledgeable session."
      },
      {
        "type": "p",
        "text": "Yamini: The session of amazing and taught very simple ways in which we can protect ourselves. Thanks for the session."
      },
      {
        "type": "p",
        "text": "Ashima: It is very helpful and useful with easy tricks."
      },
      {
        "type": "p",
        "text": "Harsimrat: It was very helpful and has boost Confidence in me, will try the tricks for sure. Thank you!!"
      },
      {
        "type": "p",
        "text": "Heena: Was good to learn bit of self-defence. Was very helpful. Thanks."
      },
      {
        "type": "p",
        "text": "Amanmeet: It was a nice session. Come to know very easy tricks and tips to defend ourselves."
      },
      {
        "type": "p",
        "text": "Neha: Training was good. Learned self-defence tricks."
      },
      {
        "type": "p",
        "text": "Gitu: Very helpful tricks have been shared."
      },
      {
        "type": "p",
        "text": "Priyanka: Great learning experience. The tricks are very helpful."
      },
      {
        "type": "p",
        "text": "Shivani: Very Informative."
      },
      {
        "type": "p",
        "text": "Simranjit: Very knowledgeable."
      },
      {
        "type": "p",
        "text": "Gaganpreet: Awesome and lots of learning. Thanks"
      },
      {
        "type": "p",
        "text": "Payal: It was very helpful. Thank you."
      },
      {
        "type": "p",
        "text": "Agreeta: It was a great leaning!! Thank you."
      }
    ],
    "image": "/assets/blog/DELL_15Mar13.jpg"
  },
  {
    "slug": "8th-march-2013",
    "title": "Self Defence Seminar at Procter & Gamble Home Product Limited, Baddi",
    "date": "2013-03-08",
    "excerpt": "EMA Women Fight Back Self Defence Seminar was held for the employees of Procter & Gamble Home Product Limited, Baddi held on 8th March 2013 held at Best Western Royal Park",
    "blocks": [
      {
        "type": "p",
        "text": "EMA Women Fight Back Self Defence Seminar was held for the employees of Procter & Gamble Home Product Limited, Baddi held on 8th March 2013 held at Best Western Royal Park"
      }
    ]
  },
  {
    "slug": "23rd-feb-2013",
    "title": "Self Defence Seminar at Chitkara University at Rajpura, Punjab ….",
    "date": "2013-02-23",
    "excerpt": "EMA Women Fight Back Self Defence Seminar at Chitkara University at Rajpura, Punjab.",
    "blocks": [
      {
        "type": "p",
        "text": "EMA Women Fight Back Self Defence Seminar at Chitkara University at Rajpura, Punjab."
      }
    ]
  },
  {
    "slug": "22th-feb-2013",
    "title": "Self Defence Seminar at Chandigarh Group of Colleges, Landran, Mohali",
    "date": "2013-02-22",
    "excerpt": "EMA Women Fight Back Self Defence Seminar was held on 22th Feb 2013 at Chandigarh Group of Colleges, Landran, Mohali in association with Group “Atitvya”. Again the hall was jam packed. Nearly 1600 students attended the seminar. Comments by the participants: Krishna Sharma : I really appreciate your efforts for spreading such awareness among the masses as",
    "blocks": [
      {
        "type": "p",
        "text": "EMA Women Fight Back Self Defence Seminar was held on 22th Feb 2013 at Chandigarh Group of Colleges, Landran, Mohali in association with Group “Atitvya”. Again the hall was jam packed. Nearly 1600 students attended the seminar."
      },
      {
        "type": "img",
        "src": "/assets/blog/22Feb13.jpg",
        "alt": "Self Defence Seminar at Chandigarh Group of Colleges, Landran, Mohali"
      },
      {
        "type": "h2",
        "text": "Comments by the participants:"
      },
      {
        "type": "p",
        "text": "Krishna Sharma : I really appreciate your efforts for spreading such awareness among the masses as nowadays it has become really important from the fact we get to know about the increasing number of rape cases."
      },
      {
        "type": "p",
        "text": "Deepika : I like the way you are helping the girls to protect themselves from the person who wants to harm them. Because self defence is important in today’s life specially for girls. Who are especially far from their homes…"
      },
      {
        "type": "p",
        "text": "Nishima : This seminar proved to be very useful for girls. This type of seminar should be conducted in college time to time as these prove very useful for girls to learn self defence. Techniques given by them were tremendous."
      },
      {
        "type": "p",
        "text": "Preeti Arora : It was good and eye opener. Many innovative techniques had been used. It was really appreciating effort. Many new things had brought to notice of the students."
      },
      {
        "type": "p",
        "text": "Lovepreet kaur : feel very good to attend this seminar they provide helpful in getting secure from another person. In daily life they need very important points to secure from other thanks to help in provide secure from another to provide important points."
      },
      {
        "type": "p",
        "text": "Sumati Chadha : It was my good experience of attending seminar. I got good confidence to defense myself from any trouble. I really enjoyed it and got to know many things."
      },
      {
        "type": "p",
        "text": "Gaganeet : Seminar war really good and get immense knowledge how to defend our self and how to use the things to protect our self and I get awareness about the techniques that are used for the defense mechanism. I really appreciate all the things that they used to make us aware. I get confidence a lot. Interesting."
      },
      {
        "type": "p",
        "text": "Simranjeet Kaur :  Seminar was very good and we were aware of many things from this seminar for our protection and in future I want to attend other seminar."
      },
      {
        "type": "p",
        "text": "Manpreet : Seminar revived various techniques in my mind and generated awareness regarding the methods for self defence."
      },
      {
        "type": "p",
        "text": "Gurkiranjeet Kaur : it was excellent. I learned a lot how to save myself in any problem. This really encourages girls. I am really thankful to all your team for giving courage to us."
      },
      {
        "type": "p",
        "text": "Japneet Kaur : Learnt pretty good techniques and never knew small things like pen/pencil key etc. were so amazingly effective for self defence. The seminar definitely did increase the confidence level."
      },
      {
        "type": "p",
        "text": "Sukhjot Kaur : it is good for self defence of girls. The seminar was really good and helped me gaining confidence in myself. I am very thankful to sir for telling all these simple tricks."
      },
      {
        "type": "p",
        "text": "Amanpreet kaur : It was good for self-defence of girls. This seminar was really good and helped me gaining confidence in myself. I am very thankful to sir and his team for telling all those simple tricks."
      },
      {
        "type": "p",
        "text": "Amandeep Kaur : It was really excellent. I really learned a lot how to save myself from any problem. I am very thankful to you and all team of yours for giving courage to us."
      },
      {
        "type": "p",
        "text": "Jashanjeet Kaur : it was a good experience. It is very helpful to save our dignity that is very much important for a girl."
      }
    ],
    "image": "/assets/blog/22Feb13.jpg"
  },
  {
    "slug": "20th-feb-2013",
    "title": "Self Defence Seminar at Chandigarh Group of Colleges, Landran, Mohali",
    "date": "2013-02-20",
    "excerpt": "EMA Women Fight Back Self Defence Seminar was held on 20th Feb 2013 at Chandigarh Group of Colleges, Landran, Mohali in association with Group “Atitvya”. It was held in two sessions and every time the hall got house full. Comments by the participants: Amamnpreet Kaur : The seminar was really good and helped me gaining confidence",
    "blocks": [
      {
        "type": "p",
        "text": "EMA Women Fight Back Self Defence Seminar was held on 20th Feb 2013 at Chandigarh Group of Colleges, Landran, Mohali in association with Group “Atitvya”. It was held in two sessions and every time the hall got house full."
      },
      {
        "type": "img",
        "src": "/assets/blog/20Feb13.jpg",
        "alt": "Self Defence Seminar at Chandigarh Group of Colleges, Landran, Mohali"
      },
      {
        "type": "h2",
        "text": "Comments by the participants:"
      },
      {
        "type": "p",
        "text": "Amamnpreet Kaur : The seminar was really good and helped me gaining confidence in myself. I am very thankful to sir for telling all these simple tricks."
      },
      {
        "type": "p",
        "text": "Jatinder Kaur : Thanks allot for making us aware. Now we have many ideas for our safety in homes or away from the home or also on the road. Now we are confident girl. And now we don’t have fear form anyone. Thank you."
      },
      {
        "type": "p",
        "text": "Alpi Singh: Thank you for great workshop. This really inspired me allot and made me too confident about my own tricks. It help me be aware for mishappening which may occur in the surroundings anytime. It is really good for girls specially."
      },
      {
        "type": "p",
        "text": "Davinder Kaur : very impressive seminar. It tells us very important things about which we use in our daily life and how to avoid by getting victimized."
      },
      {
        "type": "p",
        "text": "Sheena Chawla : These tricks are very helpful for every human being who is in trouble like eve teasing, robbery, etc. This seminar must be conducted in every college and schools for making everyone aware about these tricks."
      },
      {
        "type": "p",
        "text": "Indu Bala : Seminar was really impressive. I made me feel so strong that I really want to join and become a member of self defence activities. I want to learn more. I really want to became the member of you group."
      },
      {
        "type": "p",
        "text": "Prabhjot Kaur : The seminar was very good and taught us many techniques to defend our self. It would definitely help people especially girls. Thanks a lot sir. Seminar motivated us a lot. Self defence is the best weapon. None can help us better than our self. These types of seminar are important as our studies. So, girls can never be the victims."
      },
      {
        "type": "p",
        "text": "Gurmillanpreet Kaur – The seminar was really good and will really help me in many situations and steps of my life. Defence is must for a protection survival and I will be glad to be a part of your academy."
      },
      {
        "type": "p",
        "text": "Kiran Priya Lohiya : We are very thankful to you for giving us your precious time and also very thankful for making aware, we have learnt to many things today and I hope if I will face any problem in future I will definitely face it will full confident."
      },
      {
        "type": "p",
        "text": "Neha Parma : we really appreciates you for the bold actions you make us learn. We really learnt bold things after attending you seminar we are really thankful to you for your guide full action. Really you are doing a really good thing."
      },
      {
        "type": "p",
        "text": "Anureet kaur : I joined this type of seminar first time in my life. It is too interesting and surely I am going to do it in my personal life. I like this workshop very much. Thanks a lot sir for giving us your special time."
      }
    ],
    "image": "/assets/blog/20Feb13.jpg"
  },
  {
    "slug": "14th-feb-2013",
    "title": "Self Defence Seminar at Government Museum and Art Gallery, Sector 10, Chandigarh",
    "date": "2013-02-14",
    "excerpt": "EMA Women Fight Back Self Defence Seminar was held on 14th Feb 2013 at Government Museum and Art Gallery, Sector 10, Chandigarh on the occasion of “ONE BILLION RISING”. Mr. Naunihal Singh, IPS, SSP Chandigarh & Mrs. Savita Bhatti were present.",
    "blocks": [
      {
        "type": "p",
        "text": "EMA Women Fight Back Self Defence Seminar was held on 14th Feb 2013 at Government Museum and Art Gallery, Sector 10, Chandigarh on the occasion of “ONE BILLION RISING”. Mr. Naunihal Singh, IPS, SSP Chandigarh & Mrs. Savita Bhatti were present."
      }
    ]
  },
  {
    "slug": "12th-feb-2013",
    "title": "Self Defence Seminar at SD College, Sector 32, Chandigarh.",
    "date": "2013-02-12",
    "excerpt": "EMA Women Fight Back Self Defence Seminar was held on 12th Feb 2013 at SD College, Sector 32, Chandigarh. Comments of the Participants: Vashvani Singla : It has boosted my confidence. Now I can think of fighting back. Thanks for knowledge. Madhuri Bansal : Good one, as learnt self defense technique easy to adapt, require no training",
    "blocks": [
      {
        "type": "p",
        "text": "EMA Women Fight Back Self Defence Seminar was held on 12th Feb 2013 at SD College, Sector 32, Chandigarh."
      },
      {
        "type": "h2",
        "text": "Comments of the Participants:"
      },
      {
        "type": "p",
        "text": "Vashvani Singla : It has boosted my confidence. Now I can think of fighting back. Thanks for knowledge."
      },
      {
        "type": "p",
        "text": "Madhuri Bansal : Good one, as learnt self defense technique easy to adapt, require no training and are effective."
      },
      {
        "type": "p",
        "text": "Aastha Kashyap : it is a good source for self- defense and protection and also makes us confident and active."
      },
      {
        "type": "p",
        "text": "Geetu Hasija : Simple things were told but really beneficial..! Quite good techniques..!"
      },
      {
        "type": "p",
        "text": "Anjali Mishara : Great job it is good initiative started by you all. Feeling grateful to you."
      },
      {
        "type": "p",
        "text": "Ashima : Great job. Its feeling very good to learn from you something useful. Thank you so much."
      },
      {
        "type": "p",
        "text": "Rinki : Martial arts is very important to a girl for safety. Because in India. Crimes are increasing. So I think every girl should get stronger for her safety."
      },
      {
        "type": "p",
        "text": "Nobila : it was really good to learn certain tactics of self defense. It is really helping me walk confidently."
      },
      {
        "type": "p",
        "text": "Kirti tholia : I really like this self defense session, I feel now I can protect myself."
      },
      {
        "type": "p",
        "text": "Priyanka Goel : I think it was very good job and I also came to know this tricks or moves to protect myself."
      },
      {
        "type": "p",
        "text": "Priya Gupta : Build confidence, give tricks for our safety which are very useful for us."
      },
      {
        "type": "p",
        "text": "Neha Singla : Useful for girls, appreciated your efforts. Thank you."
      },
      {
        "type": "p",
        "text": "Rishu : Seminar really helped in creating awareness about the bad incidents happening to girls. Precautions were helpful and life saving. Thanks a lot. Glad I attended this seminar."
      },
      {
        "type": "p",
        "text": "Sharantit Kaur : This seminar was really impressive and helpful. It helped us to make us more active and aware towards such crimes against women. I would like to learn more. Thanks for visiting GGDSD College. J"
      },
      {
        "type": "p",
        "text": "Shivali choudhary : Knowledge gaining..! Protection Oriented..! Really Felt Confident! Get Going..!"
      },
      {
        "type": "p",
        "text": "Shubham Goyal : Very Interesting session. Helped to learn protected our self and increased self confidence."
      },
      {
        "type": "p",
        "text": "Apoorva Rana : Martial arts is helpful for everyone to protect yourself. Feeling great and happy to learn something useful from you. Thank you."
      },
      {
        "type": "p",
        "text": "Sandeep Kaur : This seminar has helped us in following ways:\n* How to save ourself.\n* What to do when we are in problem (efficient for women)\n* Help us increase the confidence to face any problem.\n* How we can use our body parts to save ourself."
      },
      {
        "type": "p",
        "text": "Ekta Arya : It increased by confidence level more. I was really very impressed by the courage of nancy. The knowledge which B.S.Handa gave us, it will definitely help we people in future. I would like to join. I am really very impressed by this."
      },
      {
        "type": "p",
        "text": "Sakshi Minnas : This seminar taught us a lot about self- defense. I got many new points how I will protect myself if something happens to me. I will surely want to join Martial arts as Taekwondo . I appreciate B.S. Handa sir for this. Thank you."
      },
      {
        "type": "p",
        "text": "Manjinder Kaur : Through this seminar my confidence level is up as compare to earlier. Thanks to B.S. Handa. Now I know how to handle myself in difficult situations. Thanks allot sir."
      },
      {
        "type": "p",
        "text": "Sonam : Very good for girls and everyone. Through this seminar I can feel the confidence level of mine is increased and can go outside home more confidently and can protect myself in any kind of situation."
      },
      {
        "type": "p",
        "text": "Neha David : It was a good experience. I came to know how little things can be used as weapon for my defense."
      },
      {
        "type": "p",
        "text": "Ashima : WTF is best source of spreading awareness and building confidence among girls. Since myself is a part of this form of martial arts, I feel it is very helpful."
      },
      {
        "type": "p",
        "text": "Dr. Aruna Saini : Very well explained. It is really need of the hour when crime against women particularly young girls is on the rise."
      },
      {
        "type": "p",
        "text": "Harmeet Kaur : It is very helpful and I came to know many defense activities which even I have thought ever. Very uncourageous."
      },
      {
        "type": "p",
        "text": "Sheena : it is very informative and useful. Encourages girls will be more confident and bold now."
      },
      {
        "type": "p",
        "text": "Karishma : It was a great seminar. Nice techniques. It helped to gain knowledge about self- defense."
      },
      {
        "type": "p",
        "text": "Priya khokhar : Thank you for creating awareness about self defense which is very much in need."
      },
      {
        "type": "p",
        "text": "Shubhani Agnihotri : It was very educative. I learned a lot from this program. I am walking out from here with lots of confidence. Now, I will tell my friends, how to protect themselves and make them strong. Thank you very much sir. J"
      },
      {
        "type": "p",
        "text": "Diksha : It is very helpful for us. We shall be very thankful to you for giving this knowledge."
      },
      {
        "type": "p",
        "text": "Monika Saini : Seminar was too good and motivated us to protect our self against any kind of harm."
      },
      {
        "type": "p",
        "text": "Prabhjot kaur : It is really good for girls. In life first time I join these classes. It is good."
      },
      {
        "type": "p",
        "text": "Manila Arora : It is really a very nice technique of self defense. It would be really interested to learn more."
      },
      {
        "type": "p",
        "text": "Pardeep kaur : (Applicable knowledge for the future) I like the most. It has boosted my confidence. Now I can think of fighting back instead of just running away. I am lucky to attend the seminar. I have learned many things. Thanks..!! To the team of EMA."
      },
      {
        "type": "p",
        "text": "Lata : I like this seminar because during this seminar we taught lot about self defense. I appreciate Mr. Handa. Self defense is compulsory for everyone."
      },
      {
        "type": "p",
        "text": "Swati Mittal : It was a very educative demo. Which really build up my confidence. Glad to be a part of it. Big thanks to the authorities for taking so much pain."
      },
      {
        "type": "p",
        "text": "Meera Sharma : I was an excellent seminar, very well conducted giving practical training using easily available resources. Such programmers should be frequently, which should be conducted for the benefit of the society. Congratulations to the team led by Mr. Handa."
      },
      {
        "type": "p",
        "text": "Prabhjot kaur : In today,s word, self defense being an essential learning in our life. So, this seminar was really very informative, inspiring to boost our self- confidence. Thanks for everything..!!"
      },
      {
        "type": "p",
        "text": "Simerpreet Kaur : Too Too good..!! Very helpful for girls. Awesome seminar. One of the best seminars for girls."
      },
      {
        "type": "p",
        "text": "Tripti Mehra : just loved this seminar, wanted to learn more. It build lot of confidence in me, loved this tricks I learnt today. Really helped us a lot."
      },
      {
        "type": "p",
        "text": "Jyoti Rawat :This is awesome to save everybody life. I learnt many more things from this seminar. Great seminar to aware girls."
      },
      {
        "type": "p",
        "text": "Aarti Garg : It was a very great experience, because we learnt many things that how to protect ourselves. Best part of the seminar is that we learnt how to use own body part as weapon."
      },
      {
        "type": "p",
        "text": "Manseerat Kaur : It was a great seminar. I got a lot of learn. It was very good to be a part of this seminar. It has given me more confidence and I believe that I will be surely able to fight back and protect myself in case any problem arises. Moreover, I have become more aware about avoiding such problems."
      }
    ]
  },
  {
    "slug": "6th-feb-2013",
    "title": "Self Defence Seminar at Gandhi Bhawan, Panjab University, Chandigarh.",
    "date": "2013-02-06",
    "excerpt": "EMA Women Fight Back Self Defence Seminar was held on 7th Feb 2013 at Gandhi Bhawan, Panjab University, Chandigarh. Comments by the participants: Neha Sharma : We have become more aware after this seminar. It is must for all girls. Anu Aggarwal : We find the seminar really useful. We would like to know more tactics",
    "blocks": [
      {
        "type": "p",
        "text": "EMA Women Fight Back Self Defence Seminar was held on 7th Feb 2013 at Gandhi Bhawan, Panjab University, Chandigarh."
      },
      {
        "type": "img",
        "src": "/assets/blog/PU_7thFeb.jpg",
        "alt": "Self Defence Seminar at Gandhi Bhawan, Panjab University, Chandigarh."
      },
      {
        "type": "h2",
        "text": "Comments by the participants:"
      },
      {
        "type": "p",
        "text": "Neha Sharma : We have become more aware after this seminar. It is must for all girls."
      },
      {
        "type": "p",
        "text": "Anu Aggarwal : We find the seminar really useful. We would like to know more tactics on this."
      },
      {
        "type": "p",
        "text": "Manjeet Kaur : Good, boost up confidence, very informative. If you provide evening classes in PU, we shall be very grateful."
      },
      {
        "type": "p",
        "text": "Amrit Pal Kaur : Informative, helpful, need of the hour. Can you please provide evening classes in PU or at least at weekends?"
      },
      {
        "type": "p",
        "text": "Harshita Sapra : I think today,s seminar will definitely change my various journey or further upcoming days."
      },
      {
        "type": "p",
        "text": "Sapna Manchanda : It is very good. You gave us a lot of information about self defense mechanism. It is interesting and informative."
      },
      {
        "type": "p",
        "text": "Divya : Very good seminar, lots of things to learn. This is very helpful for our life long journey."
      },
      {
        "type": "p",
        "text": "Priya Sharma : Good seminar. Full of information. I want to join martial arts academy."
      },
      {
        "type": "p",
        "text": "Reema Grover : Very helpful and effective, confidence building, positive effect."
      },
      {
        "type": "p",
        "text": "Neha : You are doing a good job. First time I have attended something like this and this will really help me in future. Keep it up."
      },
      {
        "type": "p",
        "text": "Gurpreet Kaur : I feel more confident after attending this seminar. I think it will prove more beneficial for long goal."
      },
      {
        "type": "p",
        "text": "Simran Sandhu :Informative and good. I have learnt how simple things like key, pen, comb, phone etc. can help us when we are in problem. Great job. Thank you."
      },
      {
        "type": "p",
        "text": "Priyanka : Very informative! Got to know about things which came handy."
      },
      {
        "type": "p",
        "text": "Varsha Dhamenia : Self-defense technique was very helpful. So many things which we have they can be used as weapon for our protection is new and very helpful because attackers wouldn’t think that it can hit them."
      },
      {
        "type": "p",
        "text": "Poorti Verma : Commendable efforts made to aware the girls how to help themselves on case of eve- teasing. These tricks taught were easy to understand and could prove very helpful."
      },
      {
        "type": "p",
        "text": "Nupur : Excellent initiative. Must for all girls as students who unfortunately tend to ignore such practice which otherwise are necessary today."
      },
      {
        "type": "p",
        "text": "Neha Thankur : it is great to attend this class. Now I am more confident to face this cruel world. And after attending this class we came to know the advantages of our body which are gifted weapon to us."
      },
      {
        "type": "p",
        "text": "Vaishali Dua : it is really good. A good step to save our life and change the world."
      },
      {
        "type": "p",
        "text": "Chamanjot Kaur : Very informative and helpful. Creates awareness and increase confidence. Essential in today’s time."
      },
      {
        "type": "p",
        "text": "Disha Dhar : The seminar on self-defense was very nice. It made me aware a lot on defensive techniques. I travel in bus a lot so the seminar has enlightened me a lot. Thank you."
      },
      {
        "type": "p",
        "text": "Diksha Thakur : This seminar helped me to know how can I help myself with very simple steps, I came to know about the sensitive body parts where I can hit."
      },
      {
        "type": "p",
        "text": "Priya : It was encouraging and learnt a lot of simple techniques."
      },
      {
        "type": "p",
        "text": "Nainy : Good ideas. Feel safer and more aware. Just difficult to implement when more people are around. Luck factor decreased."
      }
    ],
    "image": "/assets/blog/PU_7thFeb.jpg"
  },
  {
    "slug": "30th-jan-2013",
    "title": "Self Defence Seminar at Home Science College, Sector 10, Chandigarh",
    "date": "2013-01-30",
    "excerpt": "EMA Women Fight Back Self Defence Seminar was held on 30th Jan 2013 at Home Science College, Sector 10, Chandigarh. More than 400 Students witness the Seminar. Comments by the participants: Vinita Goyal; I enjoyed this seminar. Due to this seminar, I got a lot of confidence, not too much but that much confidence that",
    "blocks": [
      {
        "type": "p",
        "text": "EMA Women Fight Back Self Defence Seminar was held on 30th Jan 2013 at Home Science College, Sector 10, Chandigarh. More than 400 Students witness the Seminar.\nComments by the participants:"
      },
      {
        "type": "p",
        "text": "Vinita Goyal; I enjoyed this seminar. Due to this seminar, I got a lot of confidence, not too much but that much confidence that I can protect myself."
      },
      {
        "type": "p",
        "text": "Sukhamdeep Kaur: I really like this, it just helps in developing confidence and very intelligent techniques are learned today."
      },
      {
        "type": "p",
        "text": "Kanupriya: I like the seminar. I would say people should know to protect themselves. Nice seminar. I learned a lot, how we can use things in a better way, how we can protect ourselves in a better way."
      },
      {
        "type": "p",
        "text": "Deepa Sundriyal: Martial Arts is very useful to all people. It is a very good way to protect or defense self from those who harm us. I am interested to learn it. It provides self-confidence, self-reliant for us."
      },
      {
        "type": "p",
        "text": "Radhika: This was a very informative knowledge for me. I can protect myself with no anyone helps. This type of seminar grows up confidence in girls and help self-motivated and self-confidence. I am interested to learn it and thankful to you for giving instructions and talking about the latest social issues for being safe to our and all girls."
      },
      {
        "type": "p",
        "text": "Shruti Sharma: This seminar on martial arts was just awesome. I gained a lot of confidence by attending it. I think that it should be an extra course in college and schools."
      },
      {
        "type": "p",
        "text": "Shagun Bakshi: A very innovative class of martial arts and self-defense. Got to learn a lot from this class. Very enjoyable!"
      },
      {
        "type": "p",
        "text": "Bhumika Rishi: It was outstanding and we really enjoyed a lot. Now, we are aware of things around us and hence, we are ready to face them without any fear."
      },
      {
        "type": "p",
        "text": "Shikha Verma: I have learned so much confidence and awareness and from a few things have got the awareness that how to protect our self from the second person. Enjoyed a lot and loved it. Very important, Loved it and gained confidence also."
      },
      {
        "type": "p",
        "text": "Priya Mittal: Safety is everything. Thank you for enlightening us for our own safety. You do a great job."
      },
      {
        "type": "p",
        "text": "Shivika: Very interesting. The techniques which were discussed and showed are very easy to implement in life."
      },
      {
        "type": "p",
        "text": "Navneet Kaur: thanks for coming here and teaching so many simple techniques to us, which will definitely help us. Thanks."
      },
      {
        "type": "p",
        "text": "Lili Kumari: It was so good. I gained so much confidence that I can also defense myself. If don’t have any equipment. Thank you!"
      },
      {
        "type": "p",
        "text": "Amandeep Kaur: it is very good and interesting. Now I can do what I can’t do before this seminar."
      },
      {
        "type": "p",
        "text": "Raini Deb Barhan: I really liked it as it really helped us and gave me lots of information for self-defense. Three Cheers to you all."
      },
      {
        "type": "p",
        "text": "Risha: Very nice. Confidence builds in me after listening to you. Thanks for encouraging us for self-defense."
      },
      {
        "type": "p",
        "text": "Tanuja Sharma: This is a beneficial and safe technique for all the girls. I request mam that as soon as martial arts class start please let the college know about it because we are very much interested in it."
      },
      {
        "type": "p",
        "text": "Manu Choudhary: I am feeling very confident after joining this seminar. And want to learn more things about self-defense. I am very thankful to master B.S Handa for giving us a nice seminar about self-defense."
      },
      {
        "type": "p",
        "text": "Jashangeet Kaur: A very knowledge and helpful seminar for self-safety. Very new and easy tricks told to handle tough situations. Thanks a lot for providing us the knowledge and enhancing courage for our own help."
      },
      {
        "type": "p",
        "text": "Harpreet Kaur: it was an amazing lecture. I learn a lot from this. Like I travel alone on the bus. So, for my protection. I learned so many things to protect myself. Thanks for giving us."
      },
      {
        "type": "p",
        "text": "Arpana: I am so happy to learn Martial Arts and me have more confidence to learn about all things and I must like this seminar and martial arts information. Sir thankful to you comes to here and talks about self-defense. It is really a good job. Thankful to you sir."
      },
      {
        "type": "p",
        "text": "Neeru: We are very empress and enthusing of this self-defense program. According to me every institution or organization try to provide the self-defense class to their students so that they can help their sake as well as others for good deed. Live fear free life and safe life. Able to face each and every phase of their life."
      },
      {
        "type": "p",
        "text": "Savi Dua: it was really good training to develop confidence and removing fear. Form next time I want this thing or martial arts again but more action of that."
      },
      {
        "type": "p",
        "text": "Vinita Goal: I enjoyed the seminar. Due to this seminar, I got a lot of confidence that I can protect myself."
      }
    ]
  },
  {
    "slug": "18th-jan-2013",
    "title": "Self Defence Seminar at Cheema Boilers Ltd, Sector 70, Mohali",
    "date": "2013-01-18",
    "excerpt": "EMA Women Fight Back Self Defence Seminar was held on 18th Jan 2013 at Cheema Boilers Ltd, Sector 70, Mohali. Comments by Head-HR (S. S Cheema): The training imparted was good and was appreciated by all. It is the need of the hour. The employees were boosted for self safety after the training. It is",
    "blocks": [
      {
        "type": "p",
        "text": "EMA Women Fight Back Self Defence Seminar was held on 18th Jan 2013 at Cheema Boilers Ltd, Sector 70, Mohali."
      },
      {
        "type": "p",
        "text": "Comments by Head-HR (S. S Cheema): The training imparted was good and was appreciated by all. It is the need of the hour. The employees were boosted for self safety after the training. It is great work please keep it up. The overall evaluation of the training was scored at 93%, which is on very higher side."
      },
      {
        "type": "p",
        "text": "Comments by the participants:"
      },
      {
        "type": "p",
        "text": "Amampreet: Need this type of training in regular basis. It’s help us on Self Defence. Have learned many tips on Self Defence and how to protect us if any bad situation arises."
      },
      {
        "type": "p",
        "text": "Nidhi Sharma: It was excellent seminar. It educate clever steps to save oneself from unwanted situations and how to protect our-self and how to use common things as a weapon in need. It was very useful for me."
      },
      {
        "type": "p",
        "text": "Richa Sharma: This seminar is good for our awareness and also for self protection. It’s better if there are more classes regarding same."
      },
      {
        "type": "p",
        "text": "Anjali: It is very good seminar for us. Now we can defend our-self with basic things. It has made me more stronger. I will convey the same techniques to my family and friends."
      }
    ]
  },
  {
    "slug": "11th-jan-2013-2",
    "title": "Self Defence Seminar at at The British School for “Humanity” Group",
    "date": "2013-01-11",
    "excerpt": "Extreme Martial Arts Women Fight Back Self Defence Program held at The British School for “Humanity” Group",
    "blocks": [
      {
        "type": "p",
        "text": "Extreme Martial Arts Women Fight Back Self Defence Program held at The British School for “Humanity” Group"
      }
    ]
  },
  {
    "slug": "11th-jan-2013",
    "title": "Self Defence Seminar at at Dev Samaj College for Women (Hostel Students), Chandigarh",
    "date": "2013-01-11",
    "excerpt": "Extreme Martial Arts Women Fight Back Self Defence Program held at Dev Samaj College for Women (Hostel Students), Chandigarh on 11th Jan 2012 Comments by the participants: Kawaljeet Kaur: Thank you Extreme Martial Arts. You are doing a very good work and we praise you for that. Your techniques to deal with problems and eve-teasing",
    "blocks": [
      {
        "type": "p",
        "text": "Extreme Martial Arts Women Fight Back Self Defence Program held at Dev Samaj College for Women (Hostel Students), Chandigarh on 11th Jan 2012"
      },
      {
        "type": "h2",
        "text": "Comments by the participants:"
      },
      {
        "type": "p",
        "text": "Kawaljeet Kaur: Thank you Extreme Martial Arts. You are doing a very good work and we praise you for that. Your techniques to deal with problems and eve-teasing will certainly protect us in future."
      },
      {
        "type": "p",
        "text": "Himani Sachdeva: It was really a good effort to aware girls from the evil works that are happening around the world. I am really impressed with this seminar and now I can save my self from the tips told to us. Thanks a lot for teaching us Self Defence."
      },
      {
        "type": "p",
        "text": "Nisha Rani: This self defence seminar is really very good and beneficial to us. I realize the importance of this seminar and from today onwards I will promise that whatever Handa Sir has taught us I will take care and will use those techniques when any trouble arises. I really want to thank Mr. B S Handa and all the team members for this seminar."
      },
      {
        "type": "p",
        "text": "Renu Kamboj: It was wonderful experience to me. This one is the one of the best seminar in my life where I got the knowledge about the self defence. But at first, I din’t know about these tricks which help us and can easily save our life with just common things like comb, key etc. Thanks a lot for the knowledge given to us."
      },
      {
        "type": "p",
        "text": "Manmeet Kaur: Seminar was excellent. I learn many things which can help us in worse conditions. And today it’s necessary to protect from bad people specially for girls. It makes girls brave and helps to face the conditions of Today’s world. I am thankful to you to make me a part of this seminar. Its really good for girls and request you to conduct the same in all girls School and Colleges so every girl become strong and achieves success in her life."
      },
      {
        "type": "p",
        "text": "Pooja Junelia: I like very much this show, It’s was very interesting and knowledgeable. These tricks are very important for saving our life. So I will give my full contribution to your team and try to spread your tricks to friends, society and family. Thank you very much for this Knowledgeable show."
      },
      {
        "type": "p",
        "text": "Romal Arora: Martial Art is something I feel that every women/girl should learn. After just watching the 1 hour seminar, I was filled with more confidence. For me martial arts are a way to keep in a great shape without running a treadmill. Confidence is the best shield against violence, and we can get through martial arts."
      },
      {
        "type": "p",
        "text": "Samta: It was really very very good and also very useful for the girls to aware them about their self Defence. Today girls has to face many problems in their daily life even in the college, market and in the buses. With the help of martial arts a girl can face these problems strongly and also can fight at the time of problem. Thanks a lot for teaching us the techniques of Self Defence."
      },
      {
        "type": "p",
        "text": "Baljinder Kaur: It’s a very good interesting program. We learnt a lot that how can protect ourselves from wrong persons using small things as weapons. I really thank Handa Sir to conduct this seminar in our Hostel, to aware girls about these things. It has also improved our confidence. Thanks a lot to Handa Sir and Humanity Team."
      },
      {
        "type": "p",
        "text": "Kiran Raj: I really want to thank Mr. B S Handa and his team for great Self Defence Seminar and appreciate his team for doing this great job."
      },
      {
        "type": "p",
        "text": "Vasvi Jain: It was very productive. Made us aware how we can save our selves just with small tactics. Thankyou for your valuable time and efforts. It was learning with fun!"
      }
    ]
  },
  {
    "slug": "29th-dec-11",
    "title": "Self Defence Seminar at at Infosys, Rajiv Gandhi IT Park, Chandigarh",
    "date": "2012-12-29",
    "excerpt": "Fight Back Self Defence Seminar was held at Infosys, Rajiv Gandhi IT Park, Chandigarh on 29th Dec 2011. The feedback was as follows: The feedback from the participants: “Excellent Session” Amer Singh Thakur, Sr. Principal, Business Consulting. Overall it was good session for making us aware about selfdefence techniques without much training “Kanika Gupta I",
    "blocks": [
      {
        "type": "p",
        "text": "Fight Back Self Defence Seminar was held at Infosys, Rajiv Gandhi IT Park, Chandigarh on 29th Dec 2011. The feedback was as follows:"
      },
      {
        "type": "h2",
        "text": "The feedback from the participants:"
      },
      {
        "type": "p",
        "text": "“Excellent Session” Amer Singh Thakur, Sr. Principal, Business Consulting."
      },
      {
        "type": "p",
        "text": "Overall it was good session for making us aware about selfdefence techniques without much training “Kanika Gupta"
      },
      {
        "type": "p",
        "text": "I liked the basic things and actions which can be utilized at the time of need and emergency“ Hemant Kumari"
      },
      {
        "type": "p",
        "text": "It was good techniques for self defence “ Mayank Kumar"
      },
      {
        "type": "p",
        "text": "Practical application of Self Defence – Bhanupriya Sharma"
      },
      {
        "type": "p",
        "text": "Liked the way to combat “ Abhishek Sharma"
      },
      {
        "type": "p",
        "text": "Very Knowledgeable and have given me confidence “ Rupali Tuli"
      },
      {
        "type": "p",
        "text": "Great Presentation, Great awareness tips for self-defence “ Ashish Ranjan"
      },
      {
        "type": "p",
        "text": "Liked the awareness of weapons we always carry that can be used for self-defence “ Gaurav"
      },
      {
        "type": "p",
        "text": "There are many basic things which we can use for self-defence, but we generally avoid it “ Gifty Arora"
      },
      {
        "type": "p",
        "text": "Liked the small things which help you in improving your self-defence skills. Usage of various techniques and objects around us “ Nishant Sood"
      },
      {
        "type": "p",
        "text": "Nice techniques, nice points about awareness “ Nidhi Arora"
      },
      {
        "type": "p",
        "text": "Liked the techniques taught, specially clever responses “ Neha"
      },
      {
        "type": "p",
        "text": "Liked the Self-defence techniques and the training style “ Abhishek Kumar"
      },
      {
        "type": "p",
        "text": "Liked the different Self-defence techniques and how to build confidence “ Sonia Kanwar"
      },
      {
        "type": "p",
        "text": "Was very practical & simple things told makes a lot of difference “ Neeraj Sullhan"
      },
      {
        "type": "p",
        "text": "Excellent session, I would like to learn more practically “ Anil Sehgal"
      },
      {
        "type": "p",
        "text": "Liked the techniques which are easy & needs presence of mind. It will certainly help one if we come across any such situation. THANKS! “ Priyanka Singh"
      },
      {
        "type": "p",
        "text": "Liked the tricks to be followed for self-defence “ Amrit Koul"
      },
      {
        "type": "p",
        "text": "Liked the various self-defence techniques with the presence of mind usage and with some easily available weapons “ Piyush Sewal"
      },
      {
        "type": "p",
        "text": "Liked the way things were taught in the session “ Raghav Arora"
      },
      {
        "type": "p",
        "text": "Liked the applications of self-defence & use of various bodyparts in self-defence “ Mayank Chawla"
      },
      {
        "type": "p",
        "text": "Liked the knowledge about self-defence. Very informative “ Karandeep Kaur"
      },
      {
        "type": "p",
        "text": "Liked the things I know but was not aware that these can be used for self-defence “ Prashul Agarwal"
      },
      {
        "type": "p",
        "text": "Liked the description and demonstration “ Diwakar"
      },
      {
        "type": "p",
        "text": "Liked the awareness of different things which can be used for self-defence “ Ratika Singh"
      },
      {
        "type": "p",
        "text": "The entire session was very useful “ Priya"
      },
      {
        "type": "p",
        "text": "Good strategies to use for self-defence during critical situations “ Chetan Sharma"
      },
      {
        "type": "p",
        "text": "The way of explaining the things was good “ Deepika Sharma"
      },
      {
        "type": "p",
        "text": "Liked the small techniques taught for self-defence “ Megha Gupta"
      },
      {
        "type": "p",
        "text": "The data and demonstration was too good “ Nikhil Singhal"
      },
      {
        "type": "p",
        "text": "Liked the session explained. I would like to learn more techniques & would like to attend individual workship “ Sonia Mehla"
      },
      {
        "type": "p",
        "text": "Liked the techniques and demo. Daily life things which can be helpful for self-defence “ Heena"
      },
      {
        "type": "p",
        "text": "Liked the whole of it “ Ramneet Jaggi"
      },
      {
        "type": "p",
        "text": "Was an eye opener “ Nitin Raj Garg"
      },
      {
        "type": "p",
        "text": "Liked the Presence of mind as a weapon in self-defence “ Shishir Verma"
      },
      {
        "type": "p",
        "text": "Easy to understand and apply “ Bhaskar Jindal"
      },
      {
        "type": "p",
        "text": "YES! It’s very helpful “ Megha Mehta"
      },
      {
        "type": "p",
        "text": "Liked the tricks and methods “ Sanchita Gupta"
      },
      {
        "type": "p",
        "text": "Liked 3 H “ Hit First, Hit Hard, Hit Low “ Ankur Jain"
      },
      {
        "type": "p",
        "text": "Practical Demonstration “ Sanjna Hans"
      },
      {
        "type": "p",
        "text": "This is good. In National GEO (TV Channel) see program of Fight Science from 9:30 to 10:30 “ Munish Bahl"
      },
      {
        "type": "p",
        "text": "Liked the tricks & techniques, power of Martial Arts “ Anuj Malik"
      },
      {
        "type": "p",
        "text": "Practical Exposure “ Munish"
      },
      {
        "type": "p",
        "text": "Liked all the tips! We can start the sessions in Infosys ECC “ Kirandeep Kaur"
      }
    ]
  },
  {
    "slug": "23rd-nov-2012",
    "title": "Self Defence Seminar at “Dainik Bhaskar’s” Office by “94.7 MyFM”",
    "date": "2012-11-23",
    "excerpt": "Self Defence Seminar at “Dainik Bhaskar’s” Office by “94.7 MyFM” conducted by Master B S Handa and Ekjot Kaur (Nancy) The feedback from the participants: Asma: I really liked this seminar. It was knowledgeable. And it gifted me with some tricks, I can use at the time of need. Sumeet Kaur: I really liked the",
    "blocks": [
      {
        "type": "p",
        "text": "Self Defence Seminar at “Dainik Bhaskar’s” Office by “94.7 MyFM” conducted by Master B S Handa and Ekjot Kaur (Nancy)"
      },
      {
        "type": "img",
        "src": "/assets/blog/2012-11-20.jpg",
        "alt": "Self Defence Seminar at “Dainik Bhaskar’s” Office by “94.7 MyFM”"
      },
      {
        "type": "h2",
        "text": "The feedback from the participants:"
      },
      {
        "type": "p",
        "text": "Asma: I really liked this seminar. It was knowledgeable. And it gifted me with some tricks, I can use at the time of need."
      },
      {
        "type": "p",
        "text": "Sumeet Kaur: I really liked the seminar. Thanks to MyFM for the opportunity. I have gained a lot."
      },
      {
        "type": "p",
        "text": "Garima: It was excellent, made me more aware and alert, and very encouraging."
      },
      {
        "type": "p",
        "text": "Neha: Very informative seminar."
      },
      {
        "type": "p",
        "text": "Dr. Gautamdeep: I am highly inspired with the seminar and I hope I will make good use of it and pass the message on."
      },
      {
        "type": "p",
        "text": "Kanta: I am feeling very good and will try to change myself accordingly."
      },
      {
        "type": "p",
        "text": "Renu Sharma: I am really thankful to Mr. Handa and Nancy to aware us for Self Defence."
      }
    ],
    "image": "/assets/blog/2012-11-20.jpg"
  },
  {
    "slug": "19th-nov-2012",
    "title": "Self Defence Seminar at Shri Guru Gobind Singh College for Women, Sector 26, Chandigarh",
    "date": "2012-11-19",
    "excerpt": "EMA Women Fight Back Self Defence Seminar was held at Shri Guru Gobind Singh College for Women, Sector 26, Chandigarh on 19th Nov 2012. On this Seminar RJ Meenakshi (94.7 My FM) was also present. Besides teachers, 500 Students witness the Seminar. RJ Meenakshi from 94.7 MyFM was also present at the Seminar",
    "blocks": [
      {
        "type": "p",
        "text": "EMA Women Fight Back Self Defence Seminar was held at Shri Guru Gobind Singh College for Women, Sector 26, Chandigarh on 19th Nov 2012. On this Seminar RJ Meenakshi (94.7 My FM) was also present."
      },
      {
        "type": "p",
        "text": "Besides teachers, 500 Students witness the Seminar."
      },
      {
        "type": "p",
        "text": "RJ Meenakshi from 94.7 MyFM was also present at the Seminar"
      }
    ]
  },
  {
    "slug": "28th-oct-2012",
    "title": "Harjot and Ekjot (Nancy) in News (Dainik Bhaskar)",
    "date": "2012-10-28",
    "excerpt": "Harjot and Ekjot (Nancy) in News (Dainik Bhaskar)",
    "blocks": [
      {
        "type": "p",
        "text": "Harjot and Ekjot (Nancy) in News (Dainik Bhaskar)"
      }
    ]
  },
  {
    "slug": "27th-oct-2012",
    "title": "Self Defence Seminar at Dainik Bhaskar Office along with 94.7 MyFM Crew (RJ Meenakshi, RJ Laila, RJ Manav)",
    "date": "2012-10-27",
    "excerpt": "EMA Women Fight Back Self Defence was held at Dainik Bhaskar Office along with 94.7 MyFM Crew (RJ Meenakshi, RJ Laila, RJ Manav) The feedback from the participants: Sheenam – Training like that is a must for everybody to attend. Excellent way of spreading awareness. It really does feel strong after having attended the training.",
    "blocks": [
      {
        "type": "p",
        "text": "EMA Women Fight Back Self Defence was held at Dainik Bhaskar Office along with 94.7 MyFM Crew (RJ Meenakshi, RJ Laila, RJ Manav)"
      },
      {
        "type": "h2",
        "text": "The feedback from the participants:"
      },
      {
        "type": "p",
        "text": "Sheenam – Training like that is a must for everybody to attend. Excellent way of spreading awareness. It really does feel strong after having attended the training. Thank you."
      },
      {
        "type": "p",
        "text": "Chander Kanta – It was great to attend the seminar. Helped learning new things. Simply awesome!"
      },
      {
        "type": "p",
        "text": "Jasleen – Informative and good session on Self Defence. Should have been for a longer duration."
      },
      {
        "type": "p",
        "text": "Rekha Pasrija– Good techniques were taught to us for our Self Defence. Good Weapons, which we generally carry with us – in our purse, their use were told to us. Overall, its very interesting topic."
      },
      {
        "type": "p",
        "text": "Vandana – The session was very good. We came to know about small small things which we use them for our Self Defence. The tips will help us in future in case of any trouble."
      },
      {
        "type": "p",
        "text": "Harsh Sharma – Every Girl should learn Self Defence."
      },
      {
        "type": "p",
        "text": "Monika – Very faithful session. Raised my Self Confidence"
      },
      {
        "type": "p",
        "text": "Shivani – Very fruitful session. Raised my self confidence"
      },
      {
        "type": "p",
        "text": "Meenakshi – Admirable Seminar. Develops Self Confidence in Girls"
      },
      {
        "type": "p",
        "text": "Priya – We learnt alot from the seminar. Excellent"
      },
      {
        "type": "p",
        "text": "Manav – The session was very enlighting, entertaining and knowledgeful"
      },
      {
        "type": "p",
        "text": "Ankita – Helpful in Boosting Confidence."
      },
      {
        "type": "p",
        "text": "Isha – Very interesting session"
      },
      {
        "type": "p",
        "text": "Rajni – Very good session"
      }
    ]
  },
  {
    "slug": "11th-oct-2012",
    "title": "Self Defence Seminar at 94.3 MyFM Studio, Sector 24, Chandigarh.",
    "date": "2012-10-11",
    "excerpt": "EMA Women Fight Back Self-Defence Seminar was held at 94.3 MyFM Studio, Sector 24, Chandigarh. Sandeep Tyagi “Awesome! Eye Opener! Fantastic! Neha Sharma It’s a nice concept to implement these types of action at the time of any problem occurs (especially in physical case) with instant action on the same in powerful manner. It’s very",
    "blocks": [
      {
        "type": "p",
        "text": "EMA Women Fight Back Self-Defence Seminar was held at 94.3 MyFM Studio, Sector 24, Chandigarh."
      },
      {
        "type": "p",
        "text": "Sandeep Tyagi “Awesome! Eye Opener! Fantastic!"
      },
      {
        "type": "p",
        "text": "Neha Sharma It’s a nice concept to implement these types of action at the time of any problem occurs (especially in physical case) with instant action on the same in powerful manner. It’s very good and I appreciate Extreme Martial Arts to take initiative for girls safety."
      },
      {
        "type": "p",
        "text": "RJ Laila Good Seminar conducted by Mr. Handa. Very useful tips for daily use and any small to worse situations. I feel it’s not just how you hit the person but teaches you the presence of mind. You can use in such worse situations. Amazing! Wants to be a part of this."
      },
      {
        "type": "p",
        "text": "Manav A Ahuja (RJ Manav) – Never knew small things can be so powerful. Feeling lot more safe now. Thanks for the session. It was entertaining and knowledgeful. And I am really excited to join the classes."
      },
      {
        "type": "p",
        "text": "Ekta Sharma “The session was wonderful. We learnt a lot that can be used as a weapon. Especially things that are kept in ladies handbags. It’s was a privilege having you here and making us learn the tricks."
      },
      {
        "type": "p",
        "text": "RJ Gagan “This workshop was really an eye opener. Not only for Girls but for everyone it’s helpful. Everyone should learn Martial Arts."
      },
      {
        "type": "p",
        "text": "Geetan “The workshop was amazing, very nice and I had a good learning experience. The techniques were very good and I liked the ones involving common sense."
      },
      {
        "type": "p",
        "text": "Ninusha Sharma “Session was good. Examples were interesting."
      }
    ]
  },
  {
    "slug": "23rd-may-11",
    "title": "Self Defence Seminar at The British School, Sector 44, Chandigarh",
    "date": "2011-05-23",
    "excerpt": "Self Defence Seminar conducted by Master B S Handa at The British School, Sector 44, Chandigarh Mrs Mona Sri Sethi, It was good input for the teachers as they will be able to convey the self defence strategies to the students and being awareness about alertness and confidence. One should not feel threatened in the",
    "blocks": [
      {
        "type": "img",
        "src": "/assets/blog/DSC_0054.jpg",
        "alt": "Self Defence Seminar at The British School, Sector 44, Chandigarh"
      },
      {
        "type": "img",
        "src": "/assets/blog/DSC_0065.jpg",
        "alt": "Self Defence Seminar at The British School, Sector 44, Chandigarh"
      },
      {
        "type": "p",
        "text": "Self Defence Seminar conducted by Master B S Handa at The British School, Sector 44, Chandigarh"
      },
      {
        "type": "ul",
        "items": [
          "Mrs Mona Sri Sethi, It was good input for the teachers as they will be able to convey the self defence strategies to the students and being awareness about alertness and confidence. One should not feel threatened in the place of an assent rather fight with self defence techniques.",
          "Ms. Amrita Kaur, First of all, on the behalf of TBS members I would like to thank you for making us aware of these things. I really like the workshop, stunts, weapons and how to make the best use of it. Now I am feeling myself safe and secure and I think I can take care of myself and this is really very helpful in future.",
          "Mrs Ritu Shadley, A very helpful and informative, infer- active and concise workshop. Extremely enjoyable while being educated too.",
          "Ms. Seema Baluja, Informative and very useful workshop.",
          "Ms. Suman Thukral, I liked the workshop. I think it is very informative.",
          "Mrs. Harleen Marwah, Very useful and informative workshop.",
          "Miss. Harneet, I would like to thank you for conducting such educative seminar. I really like the workshop, stunts, weapons and with this weapon and stunts I am feeling myself safe. It is very helpful for me.",
          "Mrs. Sonia Sharma, A very informative seminar.",
          "Mrs. Renu Poddar, The workshop was truly an eye opener. The methods thought to me were easy to implement. A feeling of security and having the power to protect myself has also enhanced. The trainer taught and guides us like a true teacher and as motivator. Thank you for the wonderful workshop.",
          "Mrs. Suman Bala, The session was very interesting and now I am able to build up the confidence that in case of any miss happening I could survive myself and the people surroundings me. I got to know the tools which can be used at that time and are easily accessible.",
          "Sunny Dawesar, Martial Arts gives the confidence to me. I am beginning to observe in a better way. My parents think that my height has increased. A Master cannot be measured by any means.",
          "Sonalika, My all teachers guide nicely and teach properly.",
          "Simardeep Singh, My Master is very cooperative, straight forward and ambitious. Martial Arts is very helpful game in our life. It is a much disciplined game.",
          "Miss Ira, It was an interesting class. It builds up confidence & I got many ideas how to protect myself in any case of an attack. It will help me a lot in future.",
          "Rajat Chauhan, Very well organized academy of its kind in Chandigarh. Our Master is very professional, very patient and very inspiring person. I must say he is the best teacher ever. An all-rounder. Pratik sir is calm & patient, a good listener. All and all EMA is the Best.",
          "Miss. Jaya Bhargava, The little thing told by Master Handa would really prove beneficial if (goal forbid!) One is caught in a situation requiring self defence. I had never really thought while going out of station about stepping my newspaper or shouting Fire, Fire!! in case of emergency. If the session had been a little longer, and little ahead around 1 clock, we would have benefited more.",
          "Mrs. Annamma Aniyan, It was really an enriching workshop."
        ]
      }
    ],
    "image": "/assets/blog/DSC_0054.jpg"
  },
  {
    "slug": "24th-feb-10",
    "title": "Self Defence Seminar at The British School, Sector 70, Mohali",
    "date": "2010-02-24",
    "excerpt": "Self Defence Seminar held Tips on Self Defence were given by Master B S Handa to the teachers of The British School, Sector 70, Mohali. The Suman Madam pointed out “Now I can use many techniques if any one try to misbehave with me when we are outside.",
    "blocks": [
      {
        "type": "h2",
        "text": "Self Defence Seminar held"
      },
      {
        "type": "p",
        "text": "Tips on Self Defence were given by Master B S Handa to the teachers of The British School, Sector 70, Mohali. The Suman Madam pointed out “Now I can use many techniques if any one try to misbehave with me when we are outside."
      }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
