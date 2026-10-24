import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { BookView } from "./BookView";

export const metadata: Metadata = pageMetadata("book");

export default function BookPage() {
  return <BookView />;
}
