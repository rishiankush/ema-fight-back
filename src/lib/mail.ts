import { Resend } from "resend";
import { site } from "@/content/site";
import { enquiryEmail } from "@/emails";

export function teamRecipients() {
  return (process.env.RESEND_TO || site.email)
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function testingRecipient(message: string) {
  const match = message.match(/\(([^)\s]+@[^)\s]+)\)/);
  return match?.[1];
}

function fromAddress() {
  return process.env.RESEND_FROM || "EMA Fight Back <onboarding@resend.dev>";
}

export async function sendHtmlEmail(options: {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is missing");
    return { ok: false, error: "Email is not configured." };
  }

  const resend = new Resend(apiKey);
  const to = (Array.isArray(options.to) ? options.to : [options.to])
    .map((value) => value.trim())
    .filter(Boolean);
  const delivered = new Set<string>();
  let lastError = "";

  for (const recipient of to) {
    if (delivered.has(recipient)) continue;
    const result = await resend.emails.send({
      from: fromAddress(),
      to: [recipient],
      replyTo: options.replyTo,
      subject: options.subject,
      html: options.html,
    });
    if (!result.error) {
      delivered.add(recipient);
      continue;
    }

    lastError = result.error.message;
    const allowed = testingRecipient(result.error.message);
    if (allowed && !delivered.has(allowed)) {
      const retry = await resend.emails.send({
        from: fromAddress(),
        to: [allowed],
        replyTo: options.replyTo,
        subject: options.subject,
        html: options.html,
      });
      if (!retry.error) {
        delivered.add(allowed);
        continue;
      }
      lastError = retry.error.message;
    }
    console.error(`Resend failed for ${recipient}:`, result.error);
  }

  if (delivered.size > 0) return { ok: true };
  return { ok: false, error: lastError || "Could not send email." };
}

async function send(resend: Resend, to: string[], payload: Record<string, string>) {
  const template = enquiryEmail(payload.kind, payload);
  return resend.emails.send({
    from: fromAddress(),
    to,
    replyTo: payload.email || undefined,
    subject: template.subject,
    html: template.html,
  });
}

export async function sendEnquiryEmail(payload: Record<string, string>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is missing");
    return { ok: false as const, error: "Email is not configured." };
  }

  const resend = new Resend(apiKey);
  const to = teamRecipients();
  const delivered = new Set<string>();
  let lastError = "";

  for (const recipient of to) {
    if (delivered.has(recipient)) continue;
    const result = await send(resend, [recipient], payload);
    if (!result.error) {
      delivered.add(recipient);
      continue;
    }

    lastError = result.error.message;
    const allowed = testingRecipient(result.error.message);
    if (allowed && !delivered.has(allowed)) {
      const retry = await send(resend, [allowed], payload);
      if (!retry.error) {
        delivered.add(allowed);
        continue;
      }
      lastError = retry.error.message;
    }
    console.error(`Resend failed for ${recipient}:`, result.error);
  }

  if (delivered.size > 0) return { ok: true as const };

  console.error("Resend failed:", lastError);
  return { ok: false as const, error: lastError || "Could not send email." };
}
