import type { Metadata } from "next";
import { TestimonialsView } from "./TestimonialsView";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What parents, schools, corporates, and participants say about EMA Fight Back. Real stories. Real confidence. Real impact.",
};

export default function TestimonialsPage() {
  return <TestimonialsView />;
}
