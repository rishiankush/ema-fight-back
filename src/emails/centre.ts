import { enquiryEmailHtml, fieldRow } from "./layout";

export function centreEmail(payload: Record<string, string>) {
  return {
    subject: `Class enquiry — ${payload.name}`,
    html: enquiryEmailHtml({
      title: "Training centre class enquiry",
      intro: "A parent sent a class enquiry from the Training Centres & Classes page.",
      rows: [
        fieldRow("Parent's name", payload.name),
        fieldRow("Phone / WhatsApp", payload.phone),
        fieldRow("Child's age", payload.childAge),
        fieldRow("Preferred centre", payload.preferredCentre),
        fieldRow("Preferred batch", payload.preferredBatch),
        fieldRow("Source", payload.source),
        fieldRow("Submitted", payload.submittedAt),
      ].join(""),
    }),
  };
}
