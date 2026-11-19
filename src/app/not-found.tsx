import Link from "next/link";
import {
  Cormorant_Garamond,
  Source_Sans_3,
  Noto_Serif_Armenian,
  Noto_Sans_Armenian,
} from "next/font/google";
import { getDictionary } from "@/data/translations";
import { defaultLocale, htmlLang } from "@/lib/i18n";
import { localePath } from "@/lib/seo";

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const displayHy = Noto_Serif_Armenian({
  subsets: ["armenian"],
  weight: ["600"],
  variable: "--font-display-hy",
  display: "swap",
});

const sansHy = Noto_Sans_Armenian({
  subsets: ["armenian"],
  weight: ["400", "500"],
  variable: "--font-sans-hy",
  display: "swap",
});

export default function GlobalNotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <html
      lang={htmlLang[defaultLocale]}
      className={`${display.variable} ${sans.variable} ${displayHy.variable} ${sansHy.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper-grain font-sans antialiased">
        <main className="flex flex-1 items-center justify-center px-5 py-20">
          <div className="max-w-xl text-center">
            <p className="eyebrow">404</p>
            <h1 className="mt-4 font-display text-4xl text-coffee">
              {dict.notFound.h1}
            </h1>
            <p className="prose-site mx-auto mt-4">{dict.notFound.lead}</p>
            <Link href={localePath(defaultLocale)} className="btn-primary mt-8">
              {dict.notFound.cta}
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
