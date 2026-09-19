import type { ReactNode } from "react";

type BulletListProps = {
  items: readonly ReactNode[];
  light?: boolean;
  className?: string;
};

export function BulletList({ items, light = false, className = "" }: BulletListProps) {
  if (items.length === 0) return null;

  return (
    <ul className={`bullet-list ${light ? "bullet-list-light" : ""} ${className}`.trim()}>
      {items.map((item, index) => (
        <li key={typeof item === "string" ? item : index}>{item}</li>
      ))}
    </ul>
  );
}
