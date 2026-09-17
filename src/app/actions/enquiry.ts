"use server";

import { submitEnquiry, type EnquiryKind, type EnquiryResult } from "@/lib/enquiries";

export async function createEnquiry(
  kind: EnquiryKind,
  formData: FormData,
): Promise<EnquiryResult> {
  return submitEnquiry(kind, formData);
}
