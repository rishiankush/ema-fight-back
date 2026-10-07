import { enquiryEmailHtml, fieldRow } from "./layout";

export function instructorEmail(payload: Record<string, string>) {
  return {
    subject: `Instructor consultancy — ${payload.name}`,
    html: enquiryEmailHtml({
      title: "Instructor training enquiry",
      intro: "Someone requested an instructor consultancy from Book a Workshop or the safety chat.",
      rows: [
        fieldRow("Name", payload.name),
        fieldRow("Phone / WhatsApp", payload.phone),
        fieldRow("Email", payload.email),
        fieldRow("Age group", payload.ageGroup),
        fieldRow("Background", payload.background),
        fieldRow("Interest", payload.interest),
        fieldRow("City / area", payload.city),
        fieldRow("Teaching / martial arts experience", payload.experience),
        fieldRow("Experience note", payload.experienceNote),
        fieldRow("Source", payload.source),
        fieldRow("Submitted", payload.submittedAt),
      ].join(""),
    }),
  };
}
