import type { Metadata } from "next";
import { StoreView } from "./StoreView";

export const metadata: Metadata = {
  title: "Store",
  description: "EMA Fight Back store: ebooks, teaching kits, comics, and manuals.",
};

export default function StorePage() {
  return <StoreView />;
}
