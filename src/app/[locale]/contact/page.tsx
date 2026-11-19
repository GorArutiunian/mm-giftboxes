import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OrderCta } from "@/components/OrderCta";
import { getDictionary } from "@/data/translations";
import { siteConfig } from "@/data/site";
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
    path: "contact",
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
  });
}

export default async function ContactPage({
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
            { name: dict.nav.contact },
          ]}
        />
        <h1 className="font-display text-4xl text-coffee sm:text-5xl">
          {dict.contact.h1}
        </h1>
        <p className="prose-site mt-4">{dict.contact.lead}</p>

        <section className="mt-12">
          <h2 className="font-display text-2xl text-coffee">
            {dict.contact.channelHeading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-coffee-soft sm:text-base">
            {dict.contact.channelText}
          </p>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-sage-deep underline-offset-4 hover:underline"
          >
            {siteConfig.instagramHandle}
          </a>
        </section>

        <p className="mt-8 text-sm text-coffee-soft">{dict.contact.noPhone}</p>

        <div className="mt-12">
          <OrderCta dict={dict} showCopy={false} />
        </div>
      </div>
    </div>
  );
}
