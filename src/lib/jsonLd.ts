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
          "Martial arts",
          "Karate",
          "Bullying prevention",
        ],
        sport: ["Taekwondo", "Martial Arts"],
        founder: {
          "@type": "Person",
          name: site.founder.name,
          jobTitle: site.founder.role,
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
                "Taekwondo and martial arts classes at EMA training centres in Chandigarh and Mohali.",
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
                "Martial arts and fitness, self-defence classes for children and families in Chandigarh and Mohali.",
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
            name: "Where can I join taekwondo and martial arts classes near Chandigarh?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "EMA martial arts and taekwondo classes run at Legacy Martial Arts in Sector 86, Mohali, Legacy Tiny Warriors in Sector 72, Mohali, and Strawberry Field High School in Sector 26, Chandigarh. Enquire for the current batch.",
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
