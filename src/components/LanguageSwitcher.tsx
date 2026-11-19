"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();

  function swapLocale(next: Locale): string {
    const parts = pathname.split("/");
    if (parts.length > 1) {
      parts[1] = next;
      return parts.join("/") || `/${next}`;
    }
    return `/${next}`;
  }

  return (
    <div className="flex items-center gap-1" aria-label={label}>
      {locales.map((loc) => {
        const active = loc === locale;
        return (
          <Link
            key={loc}
            href={swapLocale(loc)}
            hrefLang={loc}
            className={`rounded px-2 py-1 text-xs tracking-wide transition ${
              active
                ? "bg-coffee text-ivory"
                : "text-coffee-soft hover:bg-cream hover:text-coffee"
            }`}
            aria-current={active ? "page" : undefined}
          >
            {localeLabels[loc]}
          </Link>
        );
      })}
    </div>
  );
}
