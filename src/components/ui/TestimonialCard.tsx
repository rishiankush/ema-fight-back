function initials(name: string) {
  const words = name
    .replace(/[–,]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const first = words[0]?.[0] ?? "E";
  const last = words.length > 1 ? words[words.length - 1][0] : words[0]?.[1] ?? "M";
  return `${first}${last}`.toUpperCase();
}

const avatars = [
  "bg-red text-white",
  "bg-gold text-ink",
  "bg-ink text-gold",
] as const;

export function TestimonialCard({
  headline,
  quote,
  name,
  index = 0,
}: {
  headline: string;
  quote: string;
  name: string;
  index?: number;
}) {
  return (
    <blockquote className="relative flex h-full flex-col bg-white p-7 shadow-[0_12px_40px_rgba(17,17,17,0.08)] ring-1 ring-line">
      <span
        className="pointer-events-none absolute right-5 top-2 font-display text-7xl leading-none text-gold/80"
        aria-hidden
      >
        ”
      </span>
      <div className="mb-5 h-1 w-12 bg-red" />
      <p className="relative pr-8 font-display text-xl font-bold uppercase leading-snug">{headline}</p>
      <p className="relative mt-4 flex-1 text-[15px] leading-7 text-muted">“{quote}”</p>
      <footer className="relative mt-8 flex items-center gap-3 border-t border-line pt-5">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center font-display text-sm font-bold ${avatars[index % avatars.length]}`}
          aria-hidden
        >
          {initials(name)}
        </span>
        <cite className="not-italic">
          <span className="block text-sm font-semibold text-ink">{name}</span>
        </cite>
      </footer>
    </blockquote>
  );
}
