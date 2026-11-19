import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
    path: "privacy",
    title: dict.meta.privacyTitle,
    description: dict.meta.privacyDescription,
  });
}

export default async function PrivacyPage({
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
            { name: dict.footer.privacy },
          ]}
        />
        <h1 className="font-display text-4xl text-coffee sm:text-5xl">
          {dict.privacy.h1}
        </h1>
        <p className="prose-site mt-4">{dict.privacy.lead}</p>
        <p className="mt-6 text-sm leading-relaxed text-coffee-soft sm:text-base">
          {dict.privacy.body}
        </p>
      </div>
    </div>
  );
}
