import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

export function absoluteUrl(path = ""): string {
  const base = siteConfig.getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\//, "");
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

export function buildPageMetadata(options: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  ogImage?: string;
}): Metadata {
  const { locale, path, title, description, ogImage } = options;
  const url = absoluteUrl(localePath(locale, path));
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = absoluteUrl(localePath(loc, path));
  }
  languages["x-default"] = absoluteUrl(localePath(defaultLocale, path));

  const fullTitle = title.includes(siteConfig.brandName)
    ? title
    : `${title} | ${siteConfig.brandName}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      locale: locale === "hy" ? "hy_AM" : locale === "ru" ? "ru_RU" : "en_US",
      url,
      siteName: siteConfig.brandName,
      title: fullTitle,
      description,
      ...(ogImage
        ? { images: [{ url: absoluteUrl(ogImage), alt: title }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(ogImage ? { images: [absoluteUrl(ogImage)] } : {}),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
