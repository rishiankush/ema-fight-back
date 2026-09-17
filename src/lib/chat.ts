export const OPEN_CHAT_EVENT = "ema-open-chat";

export function openSafetyChat() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_CHAT_EVENT));
}
