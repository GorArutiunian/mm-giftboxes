export const locales = ["hy", "en", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "hy";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocaleFromParam(param: string): Locale {
  return isLocale(param) ? param : defaultLocale;
}

export const localeLabels: Record<Locale, string> = {
  hy: "Հայ",
  en: "EN",
  ru: "RU",
};

export const htmlLang: Record<Locale, string> = {
  hy: "hy",
  en: "en",
  ru: "ru",
};
