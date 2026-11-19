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
    path: "secret-santa-gifts-yerevan",
    title: dict.meta.secretSantaTitle,
    description: dict.meta.secretSantaDescription,
  });
}

export default async function SecretSantaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const list = getProductsByOccasion("secret-santa");

  return (
    <div className="section-space">
      <div className="container-page">
        <Breadcrumbs
          locale={locale}
          items={[
            { name: dict.common.breadcrumbsHome, path: "" },
            { name: dict.nav.secretSanta },
          ]}
        />
        <h1 className="max-w-3xl font-display text-4xl text-coffee sm:text-5xl">
          {dict.secretSanta.h1}
        </h1>
        <p className="prose-site mt-4">{dict.secretSanta.lead}</p>
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
            {dict.secretSanta.emptyNote}
          </p>
        )}
        <div className="mt-12">
          <OrderCta dict={dict} showCopy={false} />
        </div>
      </div>
    </div>
  );
}
