import type { Metadata } from "next";
import { BookView } from "./BookView";

export const metadata: Metadata = {
  title: "Book a Workshop",
  description:
    "Short consultancy forms for individuals, institutions, and instructor training. Capture the lead, then have the conversation.",
};

export default function BookPage() {
  return <BookView />;
}
