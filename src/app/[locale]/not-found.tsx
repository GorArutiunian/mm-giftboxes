import Link from "next/link";
import { getDictionary } from "@/data/translations";
import { defaultLocale } from "@/lib/i18n";
import { localePath } from "@/lib/seo";

export default function LocaleNotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <div className="section-space">
      <div className="container-page max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-4xl text-coffee">{dict.notFound.h1}</h1>
        <p className="prose-site mx-auto mt-4">{dict.notFound.lead}</p>
        <Link href={localePath(defaultLocale)} className="btn-primary mt-8">
          {dict.notFound.cta}
        </Link>
      </div>
    </div>
  );
}
