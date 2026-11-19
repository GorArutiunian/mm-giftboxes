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
    path: "delivery-yerevan",
    title: dict.meta.deliveryTitle,
    description: dict.meta.deliveryDescription,
  });
}

export default async function DeliveryPage({
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
            { name: dict.nav.delivery },
          ]}
        />
        <h1 className="font-display text-4xl text-coffee sm:text-5xl">
          {dict.delivery.h1}
        </h1>
        <p className="prose-site mt-4">{dict.delivery.lead}</p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="font-display text-2xl text-coffee">
              {dict.delivery.coverageHeading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-coffee-soft sm:text-base">
              {dict.delivery.coverageText}
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-coffee">
              {dict.delivery.feesHeading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-coffee-soft sm:text-base">
              {dict.delivery.feesText}
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-coffee">
              {dict.delivery.howHeading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-coffee-soft sm:text-base">
              {dict.delivery.howText}
            </p>
          </section>
        </div>

        <div className="mt-12">
          <OrderCta dict={dict} showCopy={false} />
        </div>
      </div>
    </div>
  );
}
