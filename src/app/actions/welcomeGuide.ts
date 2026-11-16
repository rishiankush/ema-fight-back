"use server";

import {
  saveWelcomeQuiz,
  submitWelcomeGuide,
  type WelcomeGuideInput,
  type WelcomeQuizInput,
  type WelcomeResult,
} from "@/lib/welcomeGuide";

export async function createWelcomeGuideLead(input: WelcomeGuideInput): Promise<WelcomeResult> {
  return submitWelcomeGuide(input);
}

export async function recordWelcomeQuiz(input: WelcomeQuizInput): Promise<WelcomeResult> {
  return saveWelcomeQuiz(input);
}
