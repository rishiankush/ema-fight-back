import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-orange">404</p>
      <h1 className="mt-3 font-display text-5xl uppercase">Page not found</h1>
      <p className="mt-4 text-muted">That route isn’t in the EMA Fight Back sitemap.</p>
      <Link
        href="/"
        className="mt-8 inline-flex bg-red px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white"
      >
        Back home
      </Link>
    </div>
  );
}
