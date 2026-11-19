import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OrderCta } from "@/components/OrderCta";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByOccasion } from "@/data/products";
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
    path: "christmas-gift-boxes-yerevan",
    title: dict.meta.christmasTitle,
    description: dict.meta.christmasDescription,
  });
}

export default async function ChristmasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const list = [
    ...getProductsByOccasion("christmas"),
    ...getProductsByOccasion("new-year"),
  ].filter(
    (p, i, arr) => arr.findIndex((x) => x.id === p.id) === i,
  );

  return (
    <div className="section-space">
      <div className="container-page">
        <Breadcrumbs
          locale={locale}
          items={[
            { name: dict.common.breadcrumbsHome, path: "" },
            { name: dict.nav.christmas },
          ]}
        />
        <h1 className="max-w-3xl font-display text-4xl text-coffee sm:text-5xl">
          {dict.christmas.h1}
        </h1>
        <p className="prose-site mt-4">{dict.christmas.lead}</p>
        {list.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                locale={locale}
                dict={dict}
              />
            ))}
          </div>
        ) : (
          <p className="mt-10 max-w-2xl text-sm text-coffee-soft">
            {dict.christmas.emptyNote}
          </p>
        )}
        <div className="mt-12">
          <OrderCta dict={dict} showCopy={false} />
        </div>
      </div>
    </div>
  );
}
