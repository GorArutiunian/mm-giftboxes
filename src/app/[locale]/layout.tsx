import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Cormorant_Garamond,
  Source_Sans_3,
  Noto_Serif_Armenian,
  Noto_Sans_Armenian,
} from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { getDictionary } from "@/data/translations";
import { siteConfig } from "@/data/site";
import { htmlLang, isLocale, locales, type Locale } from "@/lib/i18n";
import { organizationJsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const displayHy = Noto_Serif_Armenian({
  subsets: ["armenian"],
  weight: ["500", "600", "700"],
  variable: "--font-display-hy",
  display: "swap",
});

const sansHy = Noto_Sans_Armenian({
  subsets: ["armenian"],
  weight: ["400", "500", "600"],
  variable: "--font-sans-hy",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  return {
    metadataBase: new URL(siteConfig.getSiteUrl()),
    alternates: {
      languages: Object.fromEntries([
        ...locales.map((l) => [l, absoluteUrl(`/${l}`)]),
        ["x-default", absoluteUrl(`/${locales[0]}`)],
      ]),
    },
    openGraph: {
      siteName: siteConfig.brandName,
      locale: locale === "hy" ? "hy_AM" : locale === "ru" ? "ru_RU" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <html
      lang={htmlLang[locale]}
      className={`${display.variable} ${sans.variable} ${displayHy.variable} ${sansHy.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper-grain font-sans antialiased">
        <JsonLd data={organizationJsonLd()} />
        <Header locale={locale} dict={dict} />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <Footer locale={locale} dict={dict} />
        <MobileStickyCta dict={dict} />
        <Analytics />
      </body>
    </html>
  );
}
