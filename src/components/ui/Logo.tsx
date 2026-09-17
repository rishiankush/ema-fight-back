import Image from "next/image";

export function Logo({
  compact = false,
  onLight = false,
}: {
  compact?: boolean;
  onLight?: boolean;
}) {
  return (
    <span className="flex items-center">
      <Image
        src="/assets/logo/extreme-martial-arts.png"
        alt="Extreme Martial Arts — EMA Fight Back"
        width={compact ? 140 : 210}
        height={compact ? 62 : 93}
        className={`h-11 w-auto object-contain sm:h-12 ${onLight ? "mix-blend-multiply" : ""}`}
        priority
      />
    </span>
  );
}
