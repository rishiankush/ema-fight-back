"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { createWelcomeGuideLead, recordWelcomeQuiz } from "@/app/actions/welcomeGuide";
import {
  GUIDE_PATH,
  myselfDestinations,
  sharedDestinations,
  someoneElseDestinations,
  visitorWhatsAppHref,
} from "@/content/welcomeDestinations";
import type { GuideChannel, LookingFor, YesNo } from "@/content/welcomeGuide";
import { trackEvent } from "@/lib/analytics";
import { T, useT } from "@/i18n/LanguageProvider";
import { useCopy } from "@/i18n/copy";

const inputClass =
  "mt-1 w-full rounded-sm border border-line bg-paper px-3 py-3 text-base text-ink outline-none focus:border-orange";

function ChoiceButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-12 flex-1 rounded-sm border-2 px-3 py-3 text-sm font-bold uppercase tracking-[0.08em] sm:min-h-14 ${
        selected
          ? "border-red bg-red text-white"
          : "border-red/40 bg-red/[0.06] text-red hover:border-red"
      }`}
    >
      {children}
    </button>
  );
}

export function WelcomePopup() {
  const { t } = useT();
  const router = useRouter();
  const forms = useCopy().forms;
  const titleId = useId();
  const introId = useId();
  const consentId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [compact, setCompact] = useState(true);
  const [safetyWorry, setSafetyWorry] = useState<YesNo | "">("");
  const [everyoneShouldKnow, setEveryoneShouldKnow] = useState<YesNo | "">("");
  const [lookingFor, setLookingFor] = useState<LookingFor | "">("");
  const [channels, setChannels] = useState<GuideChannel[]>(["whatsapp", "email"]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [whatsappHref, setWhatsappHref] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const dismiss = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const sync = () => setCompact(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
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

  const quizReady = Boolean(everyoneShouldKnow && lookingFor && (compact || safetyWorry));
  const destinations =
    lookingFor === "someone-else"
      ? [...someoneElseDestinations, ...sharedDestinations]
      : [...myselfDestinations, ...sharedDestinations];

  function toggleChannel(channel: GuideChannel) {
    setChannels((current) =>
      current.includes(channel) ? current.filter((item) => item !== channel) : [...current, channel],
    );
  }

  function goToExplore() {
    setError(null);
    setStep(3);
  }

  async function onNext() {
    if (!quizReady || !everyoneShouldKnow || !lookingFor) return;
    setStep(2);
  }

  async function onSkip() {
    if (everyoneShouldKnow && lookingFor) {
      void recordWelcomeQuiz({
        safetyWorry: compact ? "" : safetyWorry,
        everyoneShouldKnow,
        lookingFor,
      });
    }
    goToExplore();
  }

  async function onSendGuide() {
    if (!everyoneShouldKnow || !lookingFor) return;
    if (name.trim().length < 2) {
      setError(t("welcome.errorName"));
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError(t("welcome.errorPhone"));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError(t("welcome.errorEmail"));
      return;
    }
    if (channels.length === 0) {
      setError(t("welcome.errorChannel"));
      return;
    }
    if (!consent) {
      setError(t("welcome.errorConsent"));
      return;
    }
    setPending(true);
    setError(null);
    const result = await createWelcomeGuideLead({
      safetyWorry: compact ? "" : safetyWorry,
      everyoneShouldKnow,
      lookingFor,
      channels,
      name,
      phone,
      email,
      consent,
    });
    setPending(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    trackEvent("generate_lead", { form_kind: "welcome_guide" });
    setSubmittedName(name.trim());
    if (channels.includes("whatsapp")) {
      const href = visitorWhatsAppHref(name.trim());
      setWhatsappHref(href);
      window.open(href, "_blank", "noopener,noreferrer");
      trackEvent("click_whatsapp", { link: href });
    }
    goToExplore();
  }

  function goTo(href: string) {
    trackEvent("welcome_navigate", { link: href });
    setOpen(false);
    router.push(href);
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
        className="relative z-10 flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden border border-line bg-white shadow-2xl"
      >
        <div className="stripe h-1.5 shrink-0" />
        <div className="flex items-center justify-between gap-4 px-4 pt-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">
            {t("welcome.step").replace("{n}", String(step))}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={dismiss}
            className="shrink-0 px-2 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-muted hover:text-ink"
          >
            <T k="welcome.close" />
          </button>
        </div>

        {step === 1 ? (
          <>
            <div className="flex min-h-0 flex-1 flex-col justify-center gap-5 overflow-hidden px-4 py-4 sm:gap-6 sm:px-6 sm:py-5">
              {!compact ? (
                <fieldset>
                  <legend id={titleId} className="text-base font-semibold leading-6 sm:text-lg">
                    <T k="welcome.qA" />
                  </legend>
                  <div className="mt-3 flex gap-3">
                    <ChoiceButton selected={safetyWorry === "yes"} onClick={() => setSafetyWorry("yes")}>
                      <T k="welcome.yes" />
                    </ChoiceButton>
                    <ChoiceButton selected={safetyWorry === "no"} onClick={() => setSafetyWorry("no")}>
                      <T k="welcome.no" />
                    </ChoiceButton>
                  </div>
                </fieldset>
              ) : null}

              <fieldset>
                <legend
                  id={compact ? titleId : undefined}
                  className="text-base font-semibold leading-6 sm:text-lg"
                >
                  <T k="welcome.qB" />
                </legend>
                <div className="mt-3 flex gap-3">
                  <ChoiceButton
                    selected={everyoneShouldKnow === "yes"}
                    onClick={() => setEveryoneShouldKnow("yes")}
                  >
                    <T k="welcome.yes" />
                  </ChoiceButton>
                  <ChoiceButton
                    selected={everyoneShouldKnow === "no"}
                    onClick={() => setEveryoneShouldKnow("no")}
                  >
                    <T k="welcome.no" />
                  </ChoiceButton>
                </div>
              </fieldset>

              <fieldset>
                <legend id={introId} className="text-base font-semibold leading-6 sm:text-lg">
                  <T k="welcome.qC" />
                </legend>
                <div className="mt-3 flex gap-3">
                  <ChoiceButton selected={lookingFor === "myself"} onClick={() => setLookingFor("myself")}>
                    <T k="welcome.myself" />
                  </ChoiceButton>
                  <ChoiceButton
                    selected={lookingFor === "someone-else"}
                    onClick={() => setLookingFor("someone-else")}
                  >
                    <T k="welcome.someoneElse" />
                  </ChoiceButton>
                </div>
              </fieldset>
            </div>
            <div className="shrink-0 border-t border-line bg-white px-4 py-3 sm:px-6">
              <button
                type="button"
                onClick={onNext}
                disabled={!quizReady}
                className={`w-full rounded-sm px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] ${
                  quizReady
                    ? "bg-red text-white hover:bg-red-dark"
                    : "cursor-not-allowed bg-zinc-300 text-zinc-500"
                }`}
              >
                <T k="welcome.next" />
              </button>
            </div>
          </>
        ) : null}

        {step === 2 ? (
          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:pb-6">
            <h2 id={titleId} className="font-display text-2xl font-extrabold uppercase sm:text-3xl">
              <T k="welcome.guideHeading" />
            </h2>
            <p id={introId} className="mt-2 leading-6 text-muted">
              <T k="welcome.guideIntro" />
            </p>

            <p className="mt-5 text-sm font-semibold">
              <T k="welcome.sendOn" />
            </p>
            <div className="mt-2 flex gap-3">
              <ChoiceButton selected={channels.includes("whatsapp")} onClick={() => toggleChannel("whatsapp")}>
                <T k="welcome.channelWhatsapp" />
              </ChoiceButton>
              <ChoiceButton selected={channels.includes("email")} onClick={() => toggleChannel("email")}>
                <T k="welcome.channelEmail" />
              </ChoiceButton>
            </div>

            <label className="mt-5 block text-sm font-medium">
              <T k="welcome.name" />
              <span className="text-red"> *</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className={inputClass}
                autoComplete="name"
                required
              />
            </label>
            <label className="mt-3 block text-sm font-medium">
              <T k="welcome.mobile" />
              <span className="text-red"> *</span>
              <div className="mt-1 flex">
                <span className="inline-flex items-center border border-r-0 border-line bg-zinc-50 px-3 text-sm font-semibold text-muted">
                  +91
                </span>
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))}
                  className={`${inputClass} mt-0 rounded-l-none`}
                  inputMode="numeric"
                  autoComplete="tel"
                  required
                />
              </div>
            </label>
            <label className="mt-3 block text-sm font-medium">
              <T k="welcome.email" />
              <span className="text-red"> *</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={inputClass}
                autoComplete="email"
                required
              />
            </label>

            <label htmlFor={consentId} className="mt-4 flex cursor-pointer items-start gap-3 text-sm leading-6">
              <input
                id={consentId}
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-red"
              />
              <span>
                <T k="welcome.consent" />
              </span>
            </label>

            {error ? <p className="mt-3 text-sm text-red">{error}</p> : null}

            <button
              type="button"
              onClick={onSendGuide}
              disabled={pending}
              className="mt-5 w-full rounded-sm bg-red px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white hover:bg-red-dark disabled:opacity-60"
            >
              {pending ? forms.sending : t("welcome.sendGuide")}
            </button>
            <button
              type="button"
              onClick={onSkip}
              className="mt-3 w-full py-2 text-sm font-semibold uppercase tracking-[0.12em] text-muted hover:text-ink"
            >
              <T k="welcome.skip" />
            </button>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:pb-6">
            <h2 id={titleId} className="font-display text-2xl font-extrabold uppercase sm:text-3xl">
              <T k="welcome.exploreHeading" />
            </h2>
            {submittedName ? (
              <p id={introId} className="mt-2 leading-6 text-muted">
                {t("welcome.thanks").replace("{name}", submittedName)}
              </p>
            ) : (
              <span id={introId} className="sr-only">
                <T k="welcome.exploreHeading" />
              </span>
            )}
            {whatsappHref ? (
              <div className="mt-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("click_whatsapp", { link: whatsappHref })}
                  className="flex w-full items-center justify-center rounded-sm bg-red px-5 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white hover:bg-red-dark"
                >
                  <T k="welcome.whatsappCta" />
                </a>
                <p className="mt-2 text-sm leading-6 text-muted">
                  <T k="welcome.whatsappHint" />
                </p>
              </div>
            ) : null}
            {submittedName ? (
              <a
                href={GUIDE_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-red underline underline-offset-4"
              >
                <T k="welcome.downloadGuide" />
              </a>
            ) : null}
            <div className="mt-5 grid gap-3">
              {destinations.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    goTo(item.href);
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
          </div>
        ) : null}
      </div>
    </div>
  );
}
