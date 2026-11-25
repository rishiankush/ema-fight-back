import { centres } from "@/content/centresPage";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/siteUrl";

export function organizationJsonLd() {
  const url = getSiteUrl();
  const orgId = `${url}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["SportsActivityLocation", "LocalBusiness", "EducationalOrganization"],
        "@id": orgId,
        name: site.name,
        alternateName: ["Extreme Martial Arts", "EMA"],
        description: site.description,
        url,
        telephone: `+91${site.phone}`,
        email: site.email,
        foundingDate: String(site.founded),
        image: `${url}/assets/logo/extreme-martial-arts.png`,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.location,
          addressCountry: "IN",
        },
        areaServed: [
          { "@type": "City", name: "Chandigarh" },
          { "@type": "City", name: "Mohali" },
        ],
        knowsAbout: [
          "Self-defense",
          "People Safety",
          "Taekwondo",
          "Karate",
          "Martial arts",
          "Bullying prevention",
        ],
        sport: ["Taekwondo", "Karate", "Martial Arts"],
        founder: {
          "@type": "Person",
          name: site.founder.name,
          jobTitle: site.founder.role,
          description:
            "Black Belt 9th Dan (Extreme Martial Arts); Black Belt 6th Dan (World Taekwondo Headquarters, Kukkiwon, South Korea)",
        },
        sameAs: ["https://www.instagram.com/legacymartialarts_world"],
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Self-defense classes",
              description:
                "Practical self-defence and People Safety classes in Chandigarh and Mohali.",
              provider: { "@id": orgId },
            },
            areaServed: ["Chandigarh", "Mohali"],
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Taekwondo classes",
              description:
                "Taekwondo classes in Chandigarh and Mohali at EMA training centres, including Sector 26, Sector 86, and Sector 72.",
              provider: { "@id": orgId },
            },
            areaServed: ["Chandigarh", "Mohali"],
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Karate classes",
              description:
                "Karate classes and martial arts training for children and families in Chandigarh and Mohali.",
              provider: { "@id": orgId },
            },
            areaServed: ["Chandigarh", "Mohali"],
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Martial arts classes",
              description:
                "Martial arts school classes for fitness, self-defence, taekwondo, and karate in Chandigarh and Mohali.",
              provider: { "@id": orgId },
            },
            areaServed: ["Chandigarh", "Mohali"],
          },
        ],
        department: centres.map((centre) => ({
          "@type": "SportsActivityLocation",
          name: centre.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: centre.location,
            addressLocality: centre.location.includes("Chandigarh") ? "Chandigarh" : "Mohali",
            addressCountry: "IN",
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: site.name,
        publisher: { "@id": orgId },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you offer self defence classes in Chandigarh?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. EMA Fight Back teaches self-defence and People Safety classes in Chandigarh and Mohali, including Strawberry Field High School in Sector 26, Chandigarh.",
            },
          },
          {
            "@type": "Question",
            name: "Where can I join taekwondo classes in Chandigarh or near me?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Taekwondo classes run at Strawberry Field High School in Sector 26, Chandigarh, Legacy Martial Arts in Sector 86, Mohali, and Legacy Tiny Warriors in Sector 72, Mohali. Enquire for the current batch.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer karate classes in Chandigarh?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Karate classes and martial arts training are available through EMA Fight Back at our Chandigarh and Mohali centres. Call or WhatsApp to confirm the current batch.",
            },
          },
          {
            "@type": "Question",
            name: "Is EMA Fight Back a martial arts school in Chandigarh?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Extreme Martial Arts (EMA Fight Back) has taught martial arts, taekwondo, karate, and People Safety in Chandigarh since 1984, with classes also in Mohali.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer MMA in Chandigarh?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "EMA Fight Back is not a cage-MMA gym. We teach People Safety, self-defence, taekwondo, karate, and martial arts classes in Chandigarh and Mohali. If you searched for MMA in Chandigarh, enquire and we will guide you to the right class.",
            },
          },
          {
            "@type": "Question",
            name: "Are EMA classes only sport martial arts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Martial arts can be a tool. EMA Fight Back is a People Safety and self-defense system: awareness, boundaries, and practical skills for real life, with taekwondo and martial arts classes at confirmed centres.",
            },
          },
        ],
      },
    ],
  };
}
