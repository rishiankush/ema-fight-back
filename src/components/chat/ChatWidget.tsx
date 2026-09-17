"use client";

import { useSearchParams } from "next/navigation";
import { SafetyChatbot } from "@/components/chat/SafetyChatbot";

export function ChatWidget() {
  const searchParams = useSearchParams();
  const openFromQuery = searchParams.get("chat") === "1";
  return <SafetyChatbot key={openFromQuery ? "open" : "closed"} initiallyOpen={openFromQuery} />;
}
