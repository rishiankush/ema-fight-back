import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  visitorGuideEmail,
  whatsappFollowUpMessage,
  whatsappWelcomeMessage,
  type GuideChannel,
  type LookingFor,
  type YesNo,
} from "@/content/welcomeGuide";
import { sendHtmlEmail, teamRecipients } from "@/lib/mail";
import { sendWhatsAppText } from "@/lib/whatsapp";
import { enquiryEmailHtml, escapeHtml, fieldRow } from "@/emails/layout";

export type WelcomeQuizInput = {
  safetyWorry?: YesNo | "";
  everyoneShouldKnow: YesNo;
  lookingFor: LookingFor;
};

export type WelcomeGuideInput = WelcomeQuizInput & {
  channels: GuideChannel[];
  name: string;
  phone: string;
  email: string;
  consent: boolean;
};

export type WelcomeLead = Record<string, string>;

export type WelcomeResult = { ok: true } | { ok: false; error: string };

const filePath = path.join(process.cwd(), "data", "welcome-leads.json");

const indianMobile = /^[6-9]\d{9}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function digits(value: string) {
  const raw = value.replace(/\D/g, "");
  if (raw.length === 12 && raw.startsWith("91")) return raw.slice(2);
  if (raw.length === 11 && raw.startsWith("0")) return raw.slice(1);
  return raw;
}

async function readLeads(): Promise<WelcomeLead[]> {
  try {
    return JSON.parse(await readFile(filePath, "utf8")) as WelcomeLead[];
  } catch {
    return [];
  }
}

async function persist(entry: WelcomeLead) {
  await mkdir(path.dirname(filePath), { recursive: true });
  const existing = await readLeads();
  existing.push(entry);
  await writeFile(filePath, JSON.stringify(existing, null, 2));
}

async function writeLeads(entries: WelcomeLead[]) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(entries, null, 2));
}

async function postSheet(entry: WelcomeLead) {
  const url = process.env.GUIDE_SHEET_WEBHOOK_URL?.trim();
  if (!url) return;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  });
  if (!response.ok) {
    console.error("Guide sheet webhook failed:", response.status, await response.text());
  }
}

function followUpDueIso() {
  return new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString();
}

function teamLeadEmail(entry: WelcomeLead, welcomeText: string, followUpText: string) {
  const followDate = new Date(entry.followUpDue).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
  const whatsappNote = entry.whatsappStatus.startsWith("sent")
    ? "Automated WhatsApp was sent."
    : "Automated WhatsApp was not sent. Please send the message below from 9216-444-949 within a minute.";

  return enquiryEmailHtml({
    title: "Welcome popup — Safety Guide lead",
    intro: "A visitor completed the welcome popup. Send the WhatsApp within a minute if it was not sent automatically. Skip leads are not included here.",
    rows: [
      fieldRow("Name", entry.name),
      fieldRow("Phone / WhatsApp", `+91 ${entry.phone}`),
      fieldRow("Email", entry.email),
      fieldRow("Send guide on", entry.channel),
      fieldRow("Looking for", entry.lookingFor),
      fieldRow("Everyone should know self-defense", entry.everyoneShouldKnow),
      fieldRow("Safety a bigger worry today", entry.safetyWorry),
      fieldRow("Consent", entry.consent),
      fieldRow("WhatsApp status", entry.whatsappStatus),
      fieldRow("Submitted", entry.submittedAt),
      `<tr><td colspan="2" style="padding:18px 0 8px;color:#111;font-size:14px;font-weight:700">${escapeHtml(whatsappNote)}</td></tr>`,
      `<tr><td colspan="2" style="padding:8px 0;border:1px solid #eee;background:#fafafa"><pre style="margin:0;padding:12px;white-space:pre-wrap;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6">${escapeHtml(welcomeText)}</pre></td></tr>`,
      `<tr><td colspan="2" style="padding:18px 0 8px;color:#111;font-size:14px;font-weight:700">Follow-up WhatsApp on ${escapeHtml(followDate)}</td></tr>`,
      `<tr><td colspan="2" style="padding:8px 0;border:1px solid #eee;background:#fafafa"><pre style="margin:0;padding:12px;white-space:pre-wrap;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6">${escapeHtml(followUpText)}</pre></td></tr>`,
    ].join(""),
  });
}

export async function saveWelcomeQuiz(input: WelcomeQuizInput): Promise<WelcomeResult> {
  const entry: WelcomeLead = {
    skipped: "yes",
    safetyWorry: input.safetyWorry || "",
    everyoneShouldKnow: input.everyoneShouldKnow,
    lookingFor: input.lookingFor,
    consent: "no",
    source: "welcome-popup",
    submittedAt: new Date().toISOString(),
  };
  try {
    await persist(entry);
  } catch {
    // Local JSON is optional on serverless hosts.
  }
  try {
    await postSheet(entry);
  } catch (error) {
    console.error("Guide sheet webhook failed:", error);
  }
  return { ok: true };
}

export async function submitWelcomeGuide(input: WelcomeGuideInput): Promise<WelcomeResult> {
  if (!input.consent) {
    return { ok: false, error: "Please tick the box to receive the guide." };
  }

  const name = input.name.trim();
  const phone = digits(input.phone);
  const email = input.email.trim().toLowerCase();
  const channels = Array.from(new Set(input.channels));

  if (name.length < 2) return { ok: false, error: "Please enter your name." };
  if (!indianMobile.test(phone)) return { ok: false, error: "Please enter a valid 10-digit mobile number." };
  if (!emailPattern.test(email)) return { ok: false, error: "Please enter a valid email address." };
  if (channels.length === 0) return { ok: false, error: "Choose WhatsApp or email." };

  const lookingFor = input.lookingFor;
  const welcomeText = whatsappWelcomeMessage(name, lookingFor);
  const followUpText = whatsappFollowUpMessage(name);
  const visitor = visitorGuideEmail(name, lookingFor);

  const wantsWhatsApp = channels.includes("whatsapp");
  const wantsEmail = channels.includes("email");

  let whatsappStatus = "not requested";
  if (wantsWhatsApp) {
    const sent = await sendWhatsAppText(phone, welcomeText);
    if (sent.ok) whatsappStatus = "sent";
    else if ("skipped" in sent && sent.skipped) whatsappStatus = "not configured — send by hand";
    else whatsappStatus = `failed — send by hand (${sent.error.slice(0, 180)})`;
  }

  const shouldEmailVisitor = wantsEmail || (wantsWhatsApp && whatsappStatus !== "sent");
  let visitorEmailStatus = "not requested";
  if (shouldEmailVisitor) {
    const sent = await sendHtmlEmail({
      to: email,
      subject: visitor.subject,
      html: visitor.html,
      replyTo: teamRecipients()[0],
    });
    visitorEmailStatus = sent.ok ? "sent" : `failed (${sent.error})`;
  }

  const entry: WelcomeLead = {
    skipped: "no",
    name,
    phone,
    email,
    channel: channels.join(", "),
    lookingFor,
    everyoneShouldKnow: input.everyoneShouldKnow,
    safetyWorry: input.safetyWorry || "",
    consent: "yes",
    source: "welcome-popup",
    submittedAt: new Date().toISOString(),
    followUpDue: followUpDueIso(),
    followUpSent: "",
    whatsappStatus,
    visitorEmailStatus,
  };

  try {
    await persist(entry);
  } catch {
    // Local JSON is optional on serverless hosts.
  }
  try {
    await postSheet(entry);
  } catch (error) {
    console.error("Guide sheet webhook failed:", error);
  }

  const team = await sendHtmlEmail({
    to: teamRecipients(),
    subject: `Safety Guide lead — ${name}`,
    html: teamLeadEmail(entry, welcomeText, followUpText),
    replyTo: email,
  });

  if (!team.ok && visitorEmailStatus !== "sent" && whatsappStatus !== "sent") {
    return { ok: false, error: "Could not send your guide. Please call or WhatsApp us." };
  }

  return { ok: true };
}

export async function sendDueGuideFollowUps() {
  const now = Date.now();
  const leads = await readLeads();
  let sent = 0;

  for (const lead of leads) {
    if (lead.skipped === "yes" || lead.followUpSent || !lead.followUpDue || !lead.name || !lead.phone) continue;
    if (Date.parse(lead.followUpDue) > now) continue;

    const result = await sendWhatsAppText(lead.phone, whatsappFollowUpMessage(lead.name));
    if (result.ok) {
      lead.followUpSent = new Date().toISOString();
      sent += 1;
      continue;
    }

    const team = await sendHtmlEmail({
      to: teamRecipients(),
      subject: `Safety Guide follow-up due — ${lead.name}`,
      html: enquiryEmailHtml({
        title: "Safety Guide follow-up due",
        intro: "This visitor received the guide two days ago. Send the WhatsApp below from 9216-444-949.",
        rows: [
          fieldRow("Name", lead.name),
          fieldRow("Phone / WhatsApp", `+91 ${lead.phone}`),
          fieldRow("Email", lead.email),
          fieldRow("Looking for", lead.lookingFor),
          `<tr><td colspan="2" style="padding:8px 0;border:1px solid #eee;background:#fafafa"><pre style="margin:0;padding:12px;white-space:pre-wrap;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6">${escapeHtml(whatsappFollowUpMessage(lead.name))}</pre></td></tr>`,
        ].join(""),
      }),
      replyTo: lead.email,
    });
    if (team.ok) {
      lead.followUpSent = new Date().toISOString();
      sent += 1;
    }
  }

  try {
    await writeLeads(leads);
  } catch {
    // Local JSON is optional on serverless hosts.
  }

  return { sent };
}
