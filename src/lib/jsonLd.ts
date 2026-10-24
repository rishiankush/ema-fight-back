import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/siteUrl";

export function organizationJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["SportsActivityLocation", "LocalBusiness", "EducationalOrganization"],
        "@id": `${url}/#organization`,
        name: site.name,
        alternateName: "Extreme Martial Arts",
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
        founder: {
          "@type": "Person",
          name: site.founder.name,
          jobTitle: site.founder.role,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: site.name,
        publisher: { "@id": `${url}/#organization` },
      },
    ],
  };
}
