import { enquiryEmailHtml, fieldRow } from "./layout";

export function personalEmail(payload: Record<string, string>) {
  return {
    subject: `Personal consultancy — ${payload.name}`,
    html: enquiryEmailHtml({
      title: "Personal safety consultancy",
      intro: "A personal / family enquiry was submitted from Book a Workshop or the safety chat.",
      rows: [
        fieldRow("Name", payload.name),
        fieldRow("Phone / WhatsApp", payload.phone),
        fieldRow("Age group", payload.ageGroup),
        fieldRow("Who is the training for?", payload.forWhom),
        fieldRow("Looking for", payload.lookingFor),
        fieldRow("Preferred format", payload.format),
        fieldRow("City / area", payload.city),
        fieldRow("Source", payload.source),
        fieldRow("Submitted", payload.submittedAt),
      ].join(""),
    }),
  };
}
