type SectionProps = {
  id?: string;
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  dark?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  dark = false,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-4 py-16 sm:px-6 sm:py-20 lg:py-24 ${dark ? "bg-ink text-cream" : "bg-cream text-ink"} ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || intro) && (
          <header className="mb-10 max-w-3xl">
            {eyebrow ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="heading-accent font-display text-3xl font-extrabold uppercase sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            ) : null}
            {intro ? (
              <p className={`mt-4 text-base leading-7 sm:text-lg ${dark ? "text-steel" : "text-muted"}`}>
                {intro}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
