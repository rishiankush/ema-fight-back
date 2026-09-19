"use client";

import { useState, type FormEvent } from "react";
import { createEnquiry } from "@/app/actions/enquiry";
import type { EnquiryKind } from "@/lib/enquiries";
import { useCopy } from "@/i18n/copy";
import { useT } from "@/i18n/LanguageProvider";

type FieldOption = { value: string; labelKey: string };

type Field = {
  name: string;
  labelKey: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: FieldOption[];
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
  const { t } = useT();
  const forms = useCopy().forms;
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
      <div id={id} className="border border-gold bg-paper p-6 sm:p-8" role="status">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{forms.received}</p>
        <h3 className="mt-2 font-display text-2xl uppercase">{successTitle}</h3>
        <p className="mt-3 leading-7 text-muted">{successBody}</p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} className="border border-line bg-paper p-6 sm:p-8" noValidate>
      <h3 className="font-display text-2xl uppercase">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{intro}</p>
      <div className="mt-6 grid gap-4">
        {fields.map((field) => (
          <label key={field.name} className="block text-sm font-medium">
            {t(field.labelKey)}
            {field.required ? <span className="text-red"> *</span> : null}
            {field.type === "textarea" ? (
              <textarea name={field.name} required={field.required} rows={4} className={inputClass} />
            ) : field.type === "select" ? (
              <select name={field.name} required={field.required} defaultValue="" className={inputClass}>
                <option value="" disabled>
                  {forms.select}
                </option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {t(option.labelKey)}
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
        {pending ? forms.sending : submitLabel}
      </button>
    </form>
  );
}

export const individualFields: Field[] = [
  { name: "name", labelKey: "chat.fields.name", required: true },
  { name: "phone", labelKey: "chat.fields.phone", type: "tel", required: true },
  {
    name: "ageGroup",
    labelKey: "chat.fields.ageGroup",
    type: "select",
    required: true,
    options: [
      { value: "Child (3–8)", labelKey: "chat.options.child" },
      { value: "Junior (9–12)", labelKey: "chat.options.junior" },
      { value: "Teen (13–18)", labelKey: "chat.options.teen" },
      { value: "Adult", labelKey: "chat.options.adult" },
      { value: "Senior Citizen", labelKey: "chat.options.senior" },
    ],
  },
  {
    name: "forWhom",
    labelKey: "chat.fields.forWhom",
    type: "select",
    required: true,
    options: [
      { value: "Myself", labelKey: "chat.options.myself" },
      { value: "My Child", labelKey: "chat.options.myChild" },
      { value: "My Teenager", labelKey: "chat.options.myTeen" },
      { value: "Woman / Women", labelKey: "chat.options.women" },
      { value: "Senior Citizen", labelKey: "chat.options.senior" },
      { value: "Family", labelKey: "chat.options.family" },
      { value: "Small Group", labelKey: "chat.options.smallGroup" },
      { value: "Other", labelKey: "chat.options.other" },
    ],
  },
  {
    name: "lookingFor",
    labelKey: "chat.fields.lookingFor",
    type: "select",
    required: true,
    options: [
      { value: "Self-Defense", labelKey: "chat.options.selfDefense" },
      { value: "Personal Safety", labelKey: "chat.options.personalSafety" },
      { value: "Child Safety", labelKey: "chat.options.childSafety" },
      { value: "Women's Safety", labelKey: "chat.options.womenSafety" },
      { value: "Family Safety", labelKey: "chat.options.familySafety" },
      { value: "Confidence Building", labelKey: "chat.options.confidence" },
      { value: "Awareness & Prevention", labelKey: "chat.options.awareness" },
      { value: "Fitness + Self-Defense", labelKey: "chat.options.fitness" },
      { value: "Not Sure — Need Guidance", labelKey: "chat.options.notSure" },
    ],
  },
  {
    name: "format",
    labelKey: "chat.fields.format",
    type: "select",
    options: [
      { value: "Offline Classes", labelKey: "chat.options.offline" },
      { value: "Online Training", labelKey: "chat.options.online" },
      { value: "Weekend Workshop", labelKey: "chat.options.weekend" },
      { value: "Private / Small Group", labelKey: "chat.options.privateGroup" },
      { value: "Not Sure", labelKey: "chat.options.notSure" },
    ],
  },
  { name: "city", labelKey: "chat.fields.city", required: true },
];

export const organizationFields: Field[] = [
  { name: "name", labelKey: "chat.fields.name", required: true },
  { name: "phone", labelKey: "chat.fields.phone", type: "tel", required: true },
  { name: "email", labelKey: "chat.fields.email", type: "email" },
  { name: "organization", labelKey: "chat.fields.organization", required: true },
  {
    name: "role",
    labelKey: "chat.fields.role",
    type: "select",
    required: true,
    options: [
      { value: "School Management", labelKey: "chat.options.schoolMgmt" },
      { value: "Principal / Head", labelKey: "chat.options.principal" },
      { value: "Teacher / Coordinator", labelKey: "chat.options.teacher" },
      { value: "Corporate HR", labelKey: "chat.options.hr" },
      { value: "Corporate Admin / Management", labelKey: "chat.options.admin" },
      { value: "Other", labelKey: "chat.options.other" },
    ],
  },
  {
    name: "orgType",
    labelKey: "chat.fields.orgType",
    type: "select",
    required: true,
    options: [
      { value: "School", labelKey: "chat.options.school" },
      { value: "College / University", labelKey: "chat.options.college" },
      { value: "Medical College / Healthcare Institution", labelKey: "chat.options.medical" },
      { value: "Corporate / Workplace", labelKey: "chat.options.corporate" },
      { value: "Society / Community", labelKey: "chat.options.society" },
      { value: "Other", labelKey: "chat.options.other" },
    ],
  },
  {
    name: "lookingFor",
    labelKey: "chat.fields.orgLookingFor",
    type: "select",
    required: true,
    options: [
      { value: "Self-Defense Training", labelKey: "chat.options.selfDefense" },
      { value: "Staff Safety Training", labelKey: "chat.options.staffSafety" },
      { value: "Student Safety Program", labelKey: "chat.options.studentSafety" },
      { value: "Women's Safety", labelKey: "chat.options.womenSafety" },
      { value: "Workplace Safety", labelKey: "chat.options.workplaceSafety" },
      { value: "Awareness / Prevention Program", labelKey: "chat.options.awareness" },
      { value: "One-Day Workshop", labelKey: "chat.options.oneDay" },
      { value: "Regular Training Program", labelKey: "chat.options.regular" },
      { value: "Not Sure — Need Guidance", labelKey: "chat.options.notSure" },
    ],
  },
  {
    name: "participants",
    labelKey: "chat.fields.participants",
    type: "select",
    options: [
      { value: "1–20", labelKey: "chat.options.p20" },
      { value: "20–50", labelKey: "chat.options.p50" },
      { value: "50–100", labelKey: "chat.options.p100" },
      { value: "100–300", labelKey: "chat.options.p300" },
      { value: "300+", labelKey: "chat.options.p300plus" },
    ],
  },
  { name: "city", labelKey: "chat.fields.city", required: true },
];

export const instructorFields: Field[] = [
  { name: "name", labelKey: "chat.fields.fullName", required: true },
  { name: "phone", labelKey: "chat.fields.phone", type: "tel", required: true },
  { name: "email", labelKey: "chat.fields.email", type: "email" },
  {
    name: "ageGroup",
    labelKey: "chat.fields.instructorAge",
    type: "select",
    required: true,
    options: [
      { value: "Under 18", labelKey: "chat.options.u18" },
      { value: "18–25", labelKey: "chat.options.a18" },
      { value: "26–40", labelKey: "chat.options.a26" },
      { value: "41–60", labelKey: "chat.options.a41" },
      { value: "60+", labelKey: "chat.options.a60" },
    ],
  },
  {
    name: "background",
    labelKey: "chat.fields.background",
    type: "select",
    required: true,
    options: [
      { value: "Martial Arts", labelKey: "chat.options.martial" },
      { value: "Teacher / School Staff", labelKey: "chat.options.schoolStaff" },
      { value: "Sports / Fitness", labelKey: "chat.options.sports" },
      { value: "HR / Corporate", labelKey: "chat.options.hr" },
      { value: "Social Work / Community", labelKey: "chat.options.social" },
      { value: "Parent", labelKey: "chat.options.parent" },
      { value: "Other", labelKey: "chat.options.other" },
    ],
  },
  {
    name: "interest",
    labelKey: "chat.fields.interest",
    type: "select",
    required: true,
    options: [
      { value: "Teaching Safety & Self-Defense", labelKey: "chat.options.teachSafety" },
      { value: "Working with Children / Teens", labelKey: "chat.options.workKids" },
      { value: "Women's Safety", labelKey: "chat.options.womenSafety" },
      { value: "School / Corporate Programs", labelKey: "chat.options.schoolCorp" },
      { value: "Building a Career / Income", labelKey: "chat.options.career" },
      { value: "Community Service", labelKey: "chat.options.community" },
      { value: "Expanding My Existing Training", labelKey: "chat.options.expand" },
      { value: "Not Sure — I Need Guidance", labelKey: "chat.options.notSure" },
    ],
  },
  { name: "city", labelKey: "chat.fields.city", required: true },
  {
    name: "experience",
    labelKey: "chat.fields.experience",
    type: "select",
    options: [
      { value: "Yes", labelKey: "chat.options.yes" },
      { value: "No", labelKey: "chat.options.no" },
    ],
  },
  { name: "experienceNote", labelKey: "chat.fields.experienceNote", type: "textarea" },
];

export const contactFields: Field[] = [
  { name: "name", labelKey: "chat.fields.fullName", required: true },
  { name: "phone", labelKey: "chat.fields.phoneShort", type: "tel", required: true },
  { name: "email", labelKey: "chat.fields.emailShort", type: "email" },
  { name: "message", labelKey: "chat.fields.message", type: "textarea", required: true },
];
