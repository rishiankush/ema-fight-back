import { enquiryEmailHtml, fieldRow } from "./layout";

export function organisationEmail(payload: Record<string, string>) {
  return {
    subject: `Organisation enquiry — ${payload.organization || payload.name}`,
    html: enquiryEmailHtml({
      title: "School, campus & corporate enquiry",
      intro: "An institution asked for a consultancy from Book a Workshop or the safety chat.",
      rows: [
        fieldRow("Name", payload.name),
        fieldRow("Phone / WhatsApp", payload.phone),
        fieldRow("Email", payload.email),
        fieldRow("Organization", payload.organization),
        fieldRow("Role", payload.role),
        fieldRow("Organization type", payload.orgType),
        fieldRow("Looking for", payload.lookingFor),
        fieldRow("Participants", payload.participants),
        fieldRow("City / location", payload.city),
        fieldRow("Source", payload.source),
        fieldRow("Submitted", payload.submittedAt),
      ].join(""),
    }),
  };
}
