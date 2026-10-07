import type { Metadata } from "next";
import { BlogView } from "./BlogView";

export const metadata: Metadata = {
  title: "Blog",
  description: "News, seminars and safety updates from EMA Fight Back.",
};

export default function BlogPage() {
  return <BlogView />;
}
