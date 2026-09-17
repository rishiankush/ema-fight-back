"use client";

import { useState, type FormEvent } from "react";
import { createEnquiry } from "@/app/actions/enquiry";
import type { EnquiryKind } from "@/lib/enquiries";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: string[];
};

type EnquiryFormProps = {
  id?: string;
  kind: EnquiryKind;
  title: string;
  intro: string;
  submitLabel: string;
  successTitle: string;
  successBody: string;
  fields: Field[];
};

const inputClass =
  "mt-1 w-full rounded-sm border border-line bg-paper px-3 py-2.5 text-ink outline-none focus:border-orange";

export function EnquiryForm({
  id,
  kind,
  title,
  intro,
  submitLabel,
  successTitle,
  successBody,
  fields,
}: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setPending(true);
    setError(null);
    const result = await createEnquiry(kind, new FormData(form));
    setPending(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        id={id}
        className="border border-gold bg-paper p-6 sm:p-8"
        role="status"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
          Received
        </p>
        <h3 className="mt-2 font-display text-2xl uppercase">{successTitle}</h3>
        <p className="mt-3 leading-7 text-muted">{successBody}</p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="border border-line bg-paper p-6 sm:p-8"
      noValidate
    >
      <h3 className="font-display text-2xl uppercase">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{intro}</p>
      <div className="mt-6 grid gap-4">
        {fields.map((field) => (
          <label key={field.name} className="block text-sm font-medium">
            {field.label}
            {field.required ? <span className="text-red"> *</span> : null}
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                required={field.required}
                rows={4}
                className={inputClass}
              />
            ) : field.type === "select" ? (
              <select
                name={field.name}
                required={field.required}
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  Select
                </option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                className={inputClass}
              />
            )}
          </label>
        ))}
      </div>
      {error ? <p className="mt-4 text-sm text-red">{error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-red px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white hover:bg-red-dark disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}

export const individualFields: Field[] = [
  { name: "name", label: "Your name", required: true },
  { name: "phone", label: "Mobile / WhatsApp number", type: "tel", required: true },
  {
    name: "ageGroup",
    label: "Age group",
    type: "select",
    required: true,
    options: ["Child (3–8)", "Junior (9–12)", "Teen (13–18)", "Adult", "Senior Citizen"],
  },
  {
    name: "forWhom",
    label: "Who is the training for?",
    type: "select",
    required: true,
    options: [
      "Myself",
      "My Child",
      "My Teenager",
      "Woman / Women",
      "Senior Citizen",
      "Family",
      "Small Group",
      "Other",
    ],
  },
  {
    name: "lookingFor",
    label: "What are you looking for?",
    type: "select",
    required: true,
    options: [
      "Self-Defense",
      "Personal Safety",
      "Child Safety",
      "Women's Safety",
      "Family Safety",
      "Confidence Building",
      "Awareness & Prevention",
      "Fitness + Self-Defense",
      "Not Sure — Need Guidance",
    ],
  },
  {
    name: "format",
    label: "Preferred format",
    type: "select",
    options: [
      "Offline Classes",
      "Online Training",
      "Weekend Workshop",
      "Private / Small Group",
      "Not Sure",
    ],
  },
  { name: "city", label: "City / area", required: true },
];

export const organizationFields: Field[] = [
  { name: "name", label: "Your name", required: true },
  { name: "phone", label: "Mobile / WhatsApp number", type: "tel", required: true },
  { name: "email", label: "Email", type: "email" },
  { name: "organization", label: "Your organization", required: true },
  {
    name: "role",
    label: "Your role",
    type: "select",
    required: true,
    options: [
      "School Management",
      "Principal / Head",
      "Teacher / Coordinator",
      "Corporate HR",
      "Corporate Admin / Management",
      "Other",
    ],
  },
  {
    name: "orgType",
    label: "Organization type",
    type: "select",
    required: true,
    options: [
      "School",
      "College / University",
      "Medical College / Healthcare Institution",
      "Corporate / Workplace",
      "Society / Community",
      "Other",
    ],
  },
  {
    name: "lookingFor",
    label: "What are you looking for?",
    type: "select",
    required: true,
    options: [
      "Self-Defense Training",
      "Staff Safety Training",
      "Student Safety Program",
      "Women's Safety",
      "Workplace Safety",
      "Awareness / Prevention Program",
      "One-Day Workshop",
      "Regular Training Program",
      "Not Sure — Need Guidance",
    ],
  },
  {
    name: "participants",
    label: "Approximate number of participants",
    type: "select",
    options: ["1–20", "20–50", "50–100", "100–300", "300+"],
  },
  { name: "city", label: "City / location", required: true },
];

export const instructorFields: Field[] = [
  { name: "name", label: "Full name", required: true },
  { name: "phone", label: "Mobile / WhatsApp number", type: "tel", required: true },
  { name: "email", label: "Email", type: "email" },
  {
    name: "ageGroup",
    label: "Age group",
    type: "select",
    required: true,
    options: ["Under 18", "18–25", "26–40", "41–60", "60+"],
  },
  {
    name: "background",
    label: "Your background",
    type: "select",
    required: true,
    options: [
      "Martial Arts",
      "Teacher / School Staff",
      "Sports / Fitness",
      "HR / Corporate",
      "Social Work / Community",
      "Parent",
      "Other",
    ],
  },
  {
    name: "interest",
    label: "What interests you about becoming an EMA instructor?",
    type: "select",
    required: true,
    options: [
      "Teaching Safety & Self-Defense",
      "Working with Children / Teens",
      "Women's Safety",
      "School / Corporate Programs",
      "Building a Career / Income",
      "Community Service",
      "Expanding My Existing Training",
      "Not Sure — I Need Guidance",
    ],
  },
  { name: "city", label: "City / area", required: true },
  {
    name: "experience",
    label: "Do you have teaching, training or martial arts experience?",
    type: "select",
    options: ["Yes", "No"],
  },
  { name: "experienceNote", label: "If yes, briefly mention (optional)", type: "textarea" },
];

export const contactFields: Field[] = [
  { name: "name", label: "Full name", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "email", label: "Email", type: "email" },
  { name: "message", label: "Message", type: "textarea", required: true },
];
