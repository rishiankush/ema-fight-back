import { enquiryEmailHtml, fieldRow } from "./layout";

export function contactEmail(payload: Record<string, string>) {
  return {
    subject: `Contact form — ${payload.name}`,
    html: enquiryEmailHtml({
      title: "Contact form",
      intro: "Someone sent a message from the Contact page.",
      rows: [
        fieldRow("Name", payload.name),
        fieldRow("Phone / WhatsApp", payload.phone),
        fieldRow("Email", payload.email),
        fieldRow("Message", payload.message),
        fieldRow("Submitted", payload.submittedAt),
      ].join(""),
    }),
  };
}
