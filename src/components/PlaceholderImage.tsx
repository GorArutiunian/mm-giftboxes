import type { Dictionary } from "@/data/translations";

interface PlaceholderImageProps {
  dict: Dictionary;
  label?: string;
  className?: string;
  aspect?: "square" | "wide" | "portrait";
}

export function PlaceholderImage({
  dict,
  label,
  className = "",
  aspect = "square",
}: PlaceholderImageProps) {
  const aspectClass =
    aspect === "wide"
      ? "aspect-[16/10]"
      : aspect === "portrait"
        ? "aspect-[4/5]"
        : "aspect-square";

  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-gradient-to-br from-cream via-ivory to-sage/20 ${aspectClass} ${className}`}
      role="img"
      aria-label={`${dict.common.imagePlaceholder}${label ? `: ${label}` : ""}`}
    >
      <div className="absolute inset-0 bg-hero-glow animate-soft-pulse" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
        <span className="font-display text-2xl text-coffee/40" aria-hidden>
          MM
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-coffee-soft/70">
          {dict.common.imagePlaceholder}
        </span>
        <span className="max-w-[14rem] text-[11px] leading-snug text-coffee-soft/60">
          {dict.common.imagePlaceholderHint}
        </span>
        {label ? (
          <span className="mt-1 text-sm text-coffee/70">{label}</span>
        ) : null}
      </div>
    </div>
  );
}
