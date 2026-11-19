import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OrderCta } from "@/components/OrderCta";
import { getDictionary } from "@/data/translations";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: "about",
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="section-space">
      <div className="container-page max-w-3xl">
        <Breadcrumbs
          locale={locale}
          items={[
            { name: dict.common.breadcrumbsHome, path: "" },
            { name: dict.nav.about },
          ]}
        />
        <h1 className="font-display text-4xl text-coffee sm:text-5xl">
          {dict.about.h1}
        </h1>
        <p className="prose-site mt-4">{dict.about.lead}</p>
        <p className="mt-6 text-sm leading-relaxed text-coffee-soft sm:text-base">
          {dict.about.body}
        </p>
        <h2 className="mt-12 font-display text-2xl text-coffee">
          {dict.about.valuesHeading}
        </h2>
        <ul className="mt-6 space-y-4">
          {[dict.about.value1, dict.about.value2, dict.about.value3].map(
            (value) => (
              <li
                key={value}
                className="border-l-2 border-gold/60 pl-4 text-sm text-coffee-soft sm:text-base"
              >
                {value}
              </li>
            ),
          )}
        </ul>
        <div className="mt-12">
          <OrderCta dict={dict} showCopy={false} />
        </div>
      </div>
    </div>
  );
}
