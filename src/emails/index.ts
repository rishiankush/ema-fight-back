import type { EnquiryKind } from "@/lib/enquiries";
import { contactEmail } from "./contact";
import { instructorEmail } from "./instructor";
import { organisationEmail } from "./organisation";
import { personalEmail } from "./personal";

export function enquiryEmail(kind: EnquiryKind | string, payload: Record<string, string>) {
  if (kind === "contact") return contactEmail(payload);
  if (kind === "personal") return personalEmail(payload);
  if (kind === "organisation") return organisationEmail(payload);
  if (kind === "instructor") return instructorEmail(payload);
  return personalEmail({ ...payload, lookingFor: payload.lookingFor || "Workshop" });
}
