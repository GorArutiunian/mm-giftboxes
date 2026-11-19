import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { Gallery } from "@/components/Gallery";
import { OrderCta } from "@/components/OrderCta";
import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";
import { getDictionary } from "@/data/translations";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata, localePath } from "@/lib/seo";
import { notFound } from "next/navigation";

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
    path: "",
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const featured = getFeaturedProducts();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" aria-hidden />
        <div className="container-page relative grid min-h-[calc(100vh-4.25rem)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          <div>
            <p className="eyebrow animate-fade-up">{dict.common.brand}</p>
            <h1 className="mt-4 max-w-xl font-display text-4xl leading-tight text-coffee animate-fade-up-delay sm:text-5xl lg:text-[3.4rem]">
              {dict.home.h1}
            </h1>
            <p className="prose-site mt-5 animate-fade-up-delay-2">{dict.home.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
              <OrderCta dict={dict} showCopy={false} />
              <Link href={localePath(locale, "gift-boxes")} className="btn-secondary">
                {dict.home.ctaSecondary}
              </Link>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-sage-deep">
              {dict.common.yerevanOnly}
            </p>
          </div>
          <div className="relative animate-fade-up-delay">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cream shadow-soft">
              <Image
                src="/products/coffee-break/01.jpg"
                alt={dict.common.brand}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space" aria-labelledby="featured-heading">
        <div className="container-page">
          <p className="eyebrow">{dict.common.featured}</p>
          <h2
            id="featured-heading"
            className="mt-3 font-display text-3xl text-coffee sm:text-4xl"
          >
            {dict.home.featuredHeading}
          </h2>
          <p className="prose-site mt-4">{dict.home.featuredLead}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                locale={locale}
                dict={dict}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-coffee/10 bg-ivory/40" aria-labelledby="occasions-heading">
        <div className="container-page">
          <p className="eyebrow">{dict.common.occasions}</p>
          <h2
            id="occasions-heading"
            className="mt-3 font-display text-3xl text-coffee sm:text-4xl"
          >
            {dict.home.occasionsHeading}
          </h2>
          <p className="prose-site mt-4">{dict.home.occasionsLead}</p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                href: "christmas-gift-boxes-yerevan",
                title: dict.home.occasionChristmas,
                text: dict.home.occasionChristmasText,
              },
              {
                href: "secret-santa-gifts-yerevan",
                title: dict.home.occasionSecretSanta,
                text: dict.home.occasionSecretSantaText,
              },
              {
                href: "corporate-gifts-yerevan",
                title: dict.home.occasionCorporate,
                text: dict.home.occasionCorporateText,
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                className="group block border-t border-gold/50 pt-5 transition hover:border-sage"
              >
                <h3 className="font-display text-2xl text-coffee transition group-hover:text-sage-deep">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-coffee-soft">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space" aria-labelledby="order-heading">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">{dict.common.howToOrder}</p>
          <h2
            id="order-heading"
            className="mt-3 font-display text-3xl text-coffee sm:text-4xl"
          >
            {dict.home.orderHeading}
          </h2>
          <p className="prose-site mt-4">{dict.home.orderLead}</p>
          <ol className="mt-10 space-y-6">
            {[dict.home.orderStep1, dict.home.orderStep2, dict.home.orderStep3].map(
              (step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="font-display text-2xl text-gold">{i + 1}</span>
                  <p className="pt-1 text-sm leading-relaxed text-coffee-soft sm:text-base">
                    {step}
                  </p>
                </li>
              ),
            )}
          </ol>
          <div className="mt-8">
            <OrderCta dict={dict} showCopy={false} />
          </div>
        </div>
      </section>

      <Gallery dict={dict} />

      <section className="section-space" aria-labelledby="story-heading">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">{dict.common.ourStory}</p>
            <h2
              id="story-heading"
              className="mt-3 font-display text-3xl text-coffee sm:text-4xl"
            >
              {dict.home.storyHeading}
            </h2>
            <p className="prose-site mt-4">{dict.home.storyLead}</p>
            <Link
              href={localePath(locale, "about")}
              className="mt-6 inline-block text-sm font-medium text-sage-deep underline-offset-4 hover:underline"
            >
              {dict.common.learnMore}
            </Link>
          </div>
          <div className="rounded-sm border border-coffee/10 bg-cream/60 p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-coffee-soft">
              {dict.home.deliveryTeaser}
            </p>
            <Link
              href={localePath(locale, "delivery-yerevan")}
              className="mt-4 inline-block text-sm font-medium text-coffee underline-offset-4 hover:underline"
            >
              {dict.home.deliveryTeaserCta}
            </Link>
          </div>
        </div>
      </section>

      <FaqSection dict={dict} />
    </>
  );
}
