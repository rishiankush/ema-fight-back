import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type EnquiryKind = "personal" | "organisation" | "instructor" | "workshop" | "contact";

export type EnquiryResult = { ok: true } | { ok: false; error: string };

const filePath = path.join(process.cwd(), "data", "enquiries.json");

async function persist(entry: Record<string, string>) {
  await mkdir(path.dirname(filePath), { recursive: true });
  let existing: Record<string, string>[] = [];
  try {
    existing = JSON.parse(await readFile(filePath, "utf8")) as Record<string, string>[];
  } catch {
    existing = [];
  }
  existing.push(entry);
  await writeFile(filePath, JSON.stringify(existing, null, 2));
}

function required(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function isPhone(value: string) {
  return /^[0-9+\-\s]{8,16}$/.test(value);
}

export async function submitEnquiry(
  kind: EnquiryKind,
  formData: FormData,
): Promise<EnquiryResult> {
  const name = required(formData, "name");
  const phone = required(formData, "phone");

  if (name.length < 2) {
    return { ok: false, error: "Please enter your full name." };
  }
  if (!isPhone(phone)) {
    return { ok: false, error: "Please enter a valid mobile / WhatsApp number." };
  }

  const payload: Record<string, string> = {
    kind,
    name,
    phone,
    email: required(formData, "email"),
    city: required(formData, "city"),
    submittedAt: new Date().toISOString(),
  };

  for (const [key, value] of formData.entries()) {
    if (typeof value === "string" && !(key in payload)) {
      payload[key] = value;
    }
  }

  await persist(payload);
  return { ok: true };
}
