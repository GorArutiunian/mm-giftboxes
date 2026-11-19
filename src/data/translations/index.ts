import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "./types";
import hy from "./hy";
import en from "./en";
import ru from "./ru";

const dictionaries: Record<Locale, Dictionary> = { hy, en, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
