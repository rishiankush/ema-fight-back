import { escapeHtml } from "@/emails/layout";
import { GUIDE_PATH } from "@/content/welcomeDestinations";
import { absoluteUrl } from "@/lib/siteUrl";

export { GUIDE_PATH };

export type LookingFor = "myself" | "someone-else";
export type YesNo = "yes" | "no";
export type GuideChannel = "whatsapp" | "email";

export function guideUrl() {
  return absoluteUrl(GUIDE_PATH);
}

export function lookingPhrase(lookingFor: LookingFor) {
  return lookingFor === "myself" ? "yourself" : "your family";
}

function activityBookLine(lookingFor: LookingFor) {
  const url = process.env.ACTIVITY_BOOK_URL?.trim();
  if (lookingFor !== "someone-else" || !url) return "";
  return `Parents: our activity book Safe Kids, Strong Kids (English + Hindi, for ages 4 to 8) helps you start the safety talk with your child at home. Get it here: ${url}`;
}

export function whatsappWelcomeMessage(name: string, lookingFor: LookingFor) {
  const book = activityBookLine(lookingFor);
  return [
    `Hello ${name}! 🙏`,
    "Thank you for your interest in EMA Fight Back. Here is your FREE Safety Guide:",
    guideUrl(),
    "It has simple safety steps you can start using today.",
    `Our team will also message you about the best program for ${lookingPhrase(lookingFor)}. If you have any question, just reply here.`,
    book,
    "Stay safe,",
    "Grandmaster B.S. Handa",
    "EMA Fight Back, Chandigarh",
  ]
    .filter(Boolean)
    .join("\n");
}

export function whatsappFollowUpMessage(name: string) {
  return [
    `Hello ${name}, this is the EMA Fight Back team. Did you get a chance to read the Safety Guide?`,
    "If you tell us who you’re looking for (yourself, your child or your family), we can suggest the right class or online program. Just reply with a few words. 😊",
  ].join("\n");
}

export function visitorGuideEmail(name: string, lookingFor: LookingFor) {
  const download = guideUrl();
  const book = activityBookLine(lookingFor);
  const bookHtml = book ? `<p style="margin:18px 0 0;color:#333;font-size:15px;line-height:1.7">${escapeHtml(book)}</p>` : "";

  const text = [
    `Hello ${name},`,
    "",
    "Thank you for visiting EMA Fight Back. Your free Safety Guide is ready:",
    download,
    "",
    "Inside, you’ll find easy steps that anyone can learn, with no special training needed.",
    "",
    "I have been teaching safety skills since 1984, and more than 1,00,000 students have learned from us. My goal is simple: every person should know how to stay safe.",
    "",
    "If you’d like to learn more, you can:",
    "- Visit https://www.emafitness.com to see our programs",
    "- Reply to this email with any question",
    "- WhatsApp us on 9216-444-949",
    book ? `\n${book}` : "",
    "",
    "Stay safe,",
    "Grandmaster B.S. Handa",
    "EMA Fight Back, Chandigarh",
  ]
    .filter((line) => line !== undefined)
    .join("\n");

  return {
    subject: "Your FREE Safety Guide is here",
    text,
    html: `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;color:#111">
    <div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #e8e8e8">
      <div style="background:#111;padding:20px 24px">
        <p style="margin:0;color:#f2c231;font-size:11px;letter-spacing:0.16em;text-transform:uppercase">EMA Fight Back</p>
        <h1 style="margin:8px 0 0;color:#fff;font-size:22px">Your FREE Safety Guide is here</h1>
      </div>
      <div style="padding:24px">
        <p style="margin:0 0 16px;color:#333;font-size:15px;line-height:1.7">Hello ${escapeHtml(name)},</p>
        <p style="margin:0 0 16px;color:#333;font-size:15px;line-height:1.7">Thank you for visiting EMA Fight Back. Your free Safety Guide is ready:</p>
        <p style="margin:0 0 16px">
          <a href="${escapeHtml(download)}" style="display:inline-block;background:#e0262a;color:#fff;text-decoration:none;padding:12px 18px;font-size:14px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase">Download the Safety Guide</a>
        </p>
        <p style="margin:0 0 16px;color:#555;font-size:13px;line-height:1.6">${escapeHtml(download)}</p>
        <p style="margin:0 0 16px;color:#333;font-size:15px;line-height:1.7">Inside, you’ll find easy steps that anyone can learn, with no special training needed.</p>
        <p style="margin:0 0 16px;color:#333;font-size:15px;line-height:1.7">I have been teaching safety skills since 1984, and more than 1,00,000 students have learned from us. My goal is simple: every person should know how to stay safe.</p>
        <p style="margin:0 0 8px;color:#333;font-size:15px;line-height:1.7">If you’d like to learn more, you can:</p>
        <ul style="margin:0 0 16px;padding-left:20px;color:#333;font-size:15px;line-height:1.7">
          <li>Visit <a href="https://www.emafitness.com" style="color:#e0262a">www.emafitness.com</a> to see our programs</li>
          <li>Reply to this email with any question</li>
          <li>WhatsApp us on 9216-444-949</li>
        </ul>
        ${bookHtml}
        <p style="margin:24px 0 0;color:#333;font-size:15px;line-height:1.7">Stay safe,<br />Grandmaster B.S. Handa<br />EMA Fight Back, Chandigarh</p>
      </div>
    </div>
  </body>
</html>`,
  };
}
