import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, localePath } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

export interface Crumb {
  name: string;
  path?: string;
}

export function Breadcrumbs({
  locale,
  items,
}: {
  locale: Locale;
  items: Crumb[];
}) {
  const withHome: Crumb[] = items;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: withHome.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path
        ? { item: absoluteUrl(localePath(locale, item.path)) }
        : {}),
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-coffee-soft">
        <ol className="flex flex-wrap items-center gap-2">
          {withHome.map((item, index) => {
            const isLast = index === withHome.length - 1;
            return (
              <li key={`${item.name}-${index}`} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden className="text-gold">/</span> : null}
                {item.path && !isLast ? (
                  <Link
                    href={localePath(locale, item.path)}
                    className="transition hover:text-coffee"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className={isLast ? "text-coffee" : undefined}>{item.name}</span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
