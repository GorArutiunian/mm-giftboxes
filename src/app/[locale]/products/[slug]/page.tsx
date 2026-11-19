import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { OrderCta } from "@/components/OrderCta";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ProductCard } from "@/components/ProductCard";
import {
  formatProductPrice,
  getProductBySlug,
  products,
} from "@/data/products";
import { getDictionary } from "@/data/translations";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { productJsonLd } from "@/lib/schema";
import { buildPageMetadata, localePath } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return buildPageMetadata({
    locale,
    path: `products/${product.slug}`,
    title: product.name[locale],
    description: product.shortDescription[locale],
    ogImage: product.images[0],
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const dict = getDictionary(locale);
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="section-space">
      <JsonLd data={productJsonLd(product, locale)} />
      <div className="container-page">
        <Breadcrumbs
          locale={locale}
          items={[
            { name: dict.common.breadcrumbsHome, path: "" },
            { name: dict.nav.giftBoxes, path: "gift-boxes" },
            { name: product.name[locale] },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            {product.images[0] ? (
              <div className="relative aspect-square overflow-hidden rounded-sm bg-cream">
                <Image
                  src={product.images[0]}
                  alt={product.name[locale]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : (
              <PlaceholderImage
                dict={dict}
                label={product.name[locale]}
                aspect="square"
              />
            )}
            {product.images.length > 1 ? (
              <div className="mt-3 grid grid-cols-3 gap-3">
                {product.images.slice(1, 4).map((src) => (
                  <div
                    key={src}
                    className="relative aspect-square overflow-hidden rounded-sm bg-cream"
                  >
                    <Image
                      src={src}
                      alt={product.name[locale]}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <p className="eyebrow">{dict.common.brand}</p>
            <h1 className="mt-3 font-display text-4xl text-coffee sm:text-5xl">
              {product.name[locale]}
            </h1>
            <p className="mt-4 text-xl font-medium tracking-wide text-coffee">
              {formatProductPrice(
                product,
                locale,
                dict.common.priceOnInstagram,
              )}
            </p>
            <p className="mt-2 text-sm text-coffee-soft">
              {dict.product.availabilityLabel}: {dict.common.availabilityUnknown}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-coffee-soft sm:text-base">
              {product.description[locale]}
            </p>

            <section className="mt-10">
              <h2 className="font-display text-2xl text-coffee">
                {dict.product.contentsHeading}
              </h2>
              {product.contents.length > 0 ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-coffee-soft">
                  {product.contents.map((item, i) => (
                    <li key={i}>{item[locale]}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-coffee-soft">
                  {dict.common.contentsTodo}
                </p>
              )}
            </section>

            <section className="mt-10 rounded-sm border border-coffee/10 bg-cream/50 p-6">
              <h2 className="font-display text-2xl text-coffee">
                {dict.product.inquiryHeading}
              </h2>
              <p className="mt-2 text-sm text-coffee-soft">
                {dict.product.inquiryLead}
              </p>
              <p className="mt-4 rounded-sm bg-ivory/80 p-4 text-sm italic text-coffee-soft">
                {product.inquiryText[locale]}
              </p>
              <div className="mt-5">
                <OrderCta
                  dict={dict}
                  productName={product.name[locale]}
                  inquiryText={product.inquiryText[locale]}
                />
              </div>
            </section>

            <Link
              href={localePath(locale, "gift-boxes")}
              className="mt-8 inline-block text-sm text-sage-deep underline-offset-4 hover:underline"
            >
              ← {dict.common.backToBoxes}
            </Link>
          </div>
        </div>

        {related.length > 0 ? (
          <section className="mt-20">
            <h2 className="font-display text-3xl text-coffee">
              {dict.product.relatedHeading}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  locale={locale}
                  dict={dict}
                />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
