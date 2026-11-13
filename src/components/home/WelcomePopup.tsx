"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState, type FormEvent } from "react";
import { createEnquiry } from "@/app/actions/enquiry";
import { trackEvent } from "@/lib/analytics";
import { T, useT } from "@/i18n/LanguageProvider";
import { useCopy } from "@/i18n/copy";

const destinations = [
  { href: "/programs", labelKey: "welcome.children" },
  { href: "/programs/women", labelKey: "welcome.women" },
  { href: "/programs/family", labelKey: "welcome.family" },
  { href: "/programs/schools", labelKey: "welcome.schools" },
  { href: "/programs/corporate", labelKey: "welcome.workplaces" },
  { href: "/programs/seniors", labelKey: "welcome.seniors" },
  { href: "/programs/adults", labelKey: "welcome.adults" },
  { href: "/resources", labelKey: "welcome.tips" },
] as const;

const inputClass =
  "mt-1 w-full rounded-sm border border-line bg-paper px-3 py-2 text-ink outline-none focus:border-orange";

export function WelcomePopup() {
  const { t } = useT();
  const router = useRouter();
  const forms = useCopy().forms;
  const titleId = useId();
  const introId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const dismiss = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") dismiss();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, dismiss]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setPending(true);
    setError(null);
    const result = await createEnquiry("contact", new FormData(form));
    setPending(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    trackEvent("generate_lead", { form_kind: "welcome" });
    setStatus("success");
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-ink/70"
        aria-label={t("welcome.close")}
        onClick={dismiss}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={introId}
        className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden border border-line bg-white shadow-2xl"
      >
        <div className="stripe h-1.5 shrink-0" />
        <div className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">EMA Fight Back</p>
            <h2 id={titleId} className="mt-2 font-display text-3xl font-extrabold uppercase sm:text-4xl">
              <T k="welcome.heading" />
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={dismiss}
            className="shrink-0 px-2 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-muted hover:text-ink"
          >
            <T k="welcome.close" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-8 sm:pb-8">
          <p className="font-display text-xl font-bold uppercase sm:text-2xl">
            <T k="welcome.question" />
          </p>
          <p id={introId} className="mt-2 max-w-2xl leading-7 text-muted">
            <T k="welcome.intro" />
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {destinations.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  trackEvent("welcome_navigate", { link: item.href });
                  setOpen(false);
                  router.push(item.href);
                }}
                className="flex items-center justify-between border-2 border-red/40 bg-red/[0.06] px-4 py-3.5 text-left text-sm font-bold text-red shadow-sm hover:border-red hover:bg-red hover:text-white"
              >
                <span>
                  <T k={item.labelKey} />
                </span>
                <span aria-hidden="true" className="text-base font-extrabold">
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 border-t border-line pt-6">
            {status === "success" ? (
              <div role="status">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">{forms.received}</p>
                <h3 className="mt-2 font-display text-2xl uppercase">
                  <T k="welcome.successTitle" />
                </h3>
                <p className="mt-2 leading-7 text-muted">
                  <T k="welcome.successBody" />
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3 className="font-display text-2xl uppercase">
                  <T k="welcome.contactTitle" />
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">
                  <T k="welcome.contactIntro" />
                </p>
                <input type="hidden" name="source" value="welcome-popup" />
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <label className="block text-sm font-medium">
                    <T k="chat.fields.name" />
                    <span className="text-red"> *</span>
                    <input name="name" required className={inputClass} autoComplete="name" />
                  </label>
                  <label className="block text-sm font-medium">
                    <T k="chat.fields.phoneShort" />
                    <span className="text-red"> *</span>
                    <input name="phone" type="tel" required className={inputClass} autoComplete="tel" />
                  </label>
                </div>
                <label className="mt-3 block text-sm font-medium">
                  <T k="chat.fields.message" />
                  <textarea name="message" rows={2} className={inputClass} />
                </label>
                {error ? <p className="mt-3 text-sm text-red">{error}</p> : null}
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={pending}
                    className="inline-flex items-center justify-center rounded-sm bg-red px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white hover:bg-red-dark disabled:opacity-60"
                  >
                    {pending ? forms.sending : t("welcome.submit")}
                  </button>
                  <button
                    type="button"
                    onClick={dismiss}
                    className="text-sm font-semibold uppercase tracking-[0.12em] text-muted hover:text-ink"
                  >
                    <T k="welcome.browse" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
