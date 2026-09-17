import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "gold";
  className?: string;
};

const variants = {
  primary:
    "bg-red text-white hover:bg-red-dark focus-visible:outline-gold",
  secondary:
    "bg-transparent text-white border border-white/40 hover:border-gold hover:text-gold",
  ghost:
    "bg-ink text-cream hover:bg-ink-soft",
  gold:
    "bg-gold text-ink hover:bg-orange focus-visible:outline-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classNames = `inline-flex items-center justify-center rounded-sm px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (external) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}
