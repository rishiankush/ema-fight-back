"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createEnquiry } from "@/app/actions/enquiry";
import { chatPaths, type ChatField, type ChatPathId } from "@/content/chat";
import { useT } from "@/i18n/LanguageProvider";
import { OPEN_CHAT_EVENT } from "@/lib/chat";
import { phoneHref, site, whatsappHref } from "@/content/site";

type ChatMessage = { id: number; from: "bot" | "user"; text: string };

type Answers = Record<string, string>;

export function SafetyChatbot({ initiallyOpen = false }: { initiallyOpen?: boolean }) {
  const { t } = useT();
  const [open, setOpen] = useState(initiallyOpen);
  const [pathId, setPathId] = useState<ChatPathId | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    initiallyOpen ? [{ id: 1, from: "bot", text: t("chat.greeting") }] : [],
  );
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState<"form" | "confirm" | "sending" | "done" | "error">("form");
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const path = chatPaths.find((item) => item.id === pathId) ?? null;
  const field: ChatField | undefined = path?.fields[step];

  useEffect(() => {
    function onOpen() {
      setMessages((current) =>
        current.length ? current : [{ id: 1, from: "bot", text: t("chat.greeting") }],
      );
      setOpen(true);
    }
    window.addEventListener(OPEN_CHAT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CHAT_EVENT, onOpen);
  }, [t]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, field, status]);

  useEffect(() => {
    if (open && field?.type !== "select") {
      inputRef.current?.focus();
    }
  }, [open, field, step]);

  const summary = useMemo(() => {
    if (!path) return [];
    return path.fields
      .filter((item) => answers[item.id])
      .map((item) => ({
        label: t(item.labelKey),
        value: item.options?.find((option) => option.value === answers[item.id])
          ? t(item.options.find((option) => option.value === answers[item.id])!.labelKey)
          : answers[item.id],
      }));
  }, [answers, path, t]);

  function reset() {
    setPathId(null);
    setStep(0);
    setAnswers({});
    setDraft("");
    setStatus("form");
    setMessages([{ id: Date.now(), from: "bot", text: t("chat.greeting") }]);
  }

  function push(from: ChatMessage["from"], text: string) {
    setMessages((current) => [...current, { id: Date.now() + Math.random(), from, text }]);
  }

  function choosePath(next: ChatPathId) {
    const selected = chatPaths.find((item) => item.id === next);
    if (!selected) return;
    setPathId(next);
    setStep(0);
    setStatus("form");
    push("user", t(selected.labelKey));
    push("bot", t(selected.fields[0].labelKey));
  }

  function applyAnswer(value: string, display: string) {
    if (!path || !field) return;
    const nextAnswers = { ...answers, [field.id]: value };
    setAnswers(nextAnswers);
    setDraft("");
    push("user", display);
    const nextStep = step + 1;
    if (nextStep >= path.fields.length) {
      setStatus("confirm");
      push("bot", t("chat.confirmIntro"));
      return;
    }
    setStep(nextStep);
    push("bot", t(path.fields[nextStep].labelKey));
  }

  function submitText() {
    if (!field) return;
    const value = draft.trim();
    if (!value) return;
    if (field.required && field.type === "tel" && !/^[0-9+\-\s]{8,16}$/.test(value)) {
      push("bot", t("chat.error"));
      return;
    }
    applyAnswer(value, value);
  }

  async function submitEnquiry() {
    if (!path) return;
    setStatus("sending");
    const data = new FormData();
    Object.entries(answers).forEach(([key, value]) => data.set(key, value));
    data.set("source", "chatbot");
    const result = await createEnquiry(path.kind, data);
    if (!result.ok) {
      setStatus("error");
      push("bot", result.error || t("chat.error"));
      return;
    }
    setStatus("done");
    push("bot", t("chat.success"));
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open ? (
        <section
          className="flex h-[min(34rem,74vh)] w-[min(24rem,calc(100vw-1.5rem))] flex-col overflow-hidden border border-line bg-white text-ink shadow-2xl"
          aria-label={t("chat.title")}
        >
          <header className="flex items-start justify-between gap-3 bg-ink px-4 py-3 text-white">
            <div>
              <p className="text-sm font-bold">{t("chat.title")}</p>
              <p className="text-xs text-white/70">{t("chat.subtitle")}</p>
            </div>
            <button
              type="button"
              className="text-lg leading-none text-white/80 hover:text-gold"
              onClick={() => setOpen(false)}
              aria-label={t("chat.close")}
            >
              ×
            </button>
          </header>
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-zinc-50 px-3 py-4">
            {messages.map((message) => (
              <p
                key={message.id}
                className={`max-w-[90%] px-3 py-2 text-sm leading-6 ${
                  message.from === "bot"
                    ? "bg-white text-ink shadow-sm"
                    : "ml-auto bg-red text-white"
                }`}
              >
                {message.text}
              </p>
            ))}
            {status === "form" && !path ? (
              <div className="flex flex-col gap-2">
                {chatPaths.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="border border-line bg-white px-3 py-2 text-left text-sm font-semibold hover:border-red hover:text-red"
                    onClick={() => choosePath(item.id)}
                  >
                    {t(item.labelKey)}
                  </button>
                ))}
              </div>
            ) : null}
            {status === "form" && field?.type === "select" && field.options ? (
              <div className="flex flex-col gap-2">
                {field.options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className="border border-line bg-white px-3 py-2 text-left text-sm hover:border-gold"
                    onClick={() => applyAnswer(option.value, t(option.labelKey))}
                  >
                    {t(option.labelKey)}
                  </button>
                ))}
                {!field.required ? (
                  <button
                    type="button"
                    className="text-left text-xs font-semibold text-muted"
                    onClick={() => applyAnswer("", t("chat.skip"))}
                  >
                    {t("chat.skip")}
                  </button>
                ) : null}
              </div>
            ) : null}
            {status === "confirm" ? (
              <div className="border border-line bg-white p-3 text-sm">
                <ul className="bullet-list mt-0">
                  {summary.map((item) => (
                    <li key={item.label}>
                      <span className="text-muted">{item.label}: </span>
                      {item.value}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-3 w-full bg-red px-3 py-2 text-sm font-bold uppercase tracking-wide text-white"
                  onClick={submitEnquiry}
                >
                  {t("chat.submit")}
                </button>
              </div>
            ) : null}
            {status === "sending" ? (
              <p className="text-sm text-muted">{t("chat.submitting")}</p>
            ) : null}
            {status === "done" || status === "error" ? (
              <button
                type="button"
                className="text-sm font-semibold text-red"
                onClick={reset}
              >
                {t("chat.restart")}
              </button>
            ) : null}
          </div>
          {status === "form" && field && field.type !== "select" ? (
            <form
              className="flex gap-2 border-t border-line p-3"
              onSubmit={(event) => {
                event.preventDefault();
                submitText();
              }}
            >
              <input
                ref={inputRef}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                className="flex-1 border border-line px-3 py-2 text-sm outline-none focus:border-red"
                placeholder={t("chat.typeHere")}
                type={field.type === "tel" ? "tel" : field.type === "email" ? "email" : "text"}
                required={field.required}
              />
              <button
                type="submit"
                className="bg-gold px-3 py-2 text-xs font-bold uppercase tracking-wide text-ink"
              >
                {t("chat.send")}
              </button>
            </form>
          ) : (
            <div className="border-t border-line px-3 py-2 text-[11px] text-muted">
              {site.phoneDisplay}
            </div>
          )}
        </section>
      ) : null}

      <div className="flex flex-col items-end gap-2">
        <a
          href={phoneHref}
          className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-red text-[9px] font-extrabold uppercase tracking-wide text-white shadow-lg"
        >
          {t("fab.call")}
          <span className="text-[8px] font-semibold normal-case tracking-normal">{t("fab.callUs")}</span>
          <span className="sr-only">
            {t("fab.call")} {site.phoneDisplay}
          </span>
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="rounded-sm bg-[#25D366] px-3 py-2 text-xs font-semibold text-ink shadow-lg"
        >
          {t("fab.whatsapp")}
        </a>
        <button
          type="button"
          className="bg-gold px-4 py-3 text-sm font-bold uppercase tracking-wide text-ink shadow-lg"
          onClick={() => {
            setOpen((value) => {
              const next = !value;
              if (next) {
                setMessages((current) =>
                  current.length ? current : [{ id: 1, from: "bot", text: t("chat.greeting") }],
                );
              }
              return next;
            });
          }}
        >
          {open ? t("chat.close") : t("chat.launcher")}
        </button>
      </div>
    </div>
  );
}
