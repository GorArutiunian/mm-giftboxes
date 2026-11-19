import { siteConfig } from "@/data/site";
import type { Product } from "@/data/products";
import type { Locale } from "@/lib/i18n";
import { absoluteUrl, localePath } from "@/lib/seo";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brandName,
    url: absoluteUrl("/"),
    sameAs: [...siteConfig.social.sameAs],
  };
}

export function productJsonLd(product: Product, locale: Locale) {
  const url = absoluteUrl(localePath(locale, `products/${product.slug}`));
  const images = product.images.map((src) => absoluteUrl(src));

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name[locale],
    description: product.description[locale],
    url,
    brand: {
      "@type": "Brand",
      name: siteConfig.brandName,
    },
  };

  // Offer with price only when confirmed — never invent AMD amounts.
  if (product.priceAMD != null) {
    data.offers = {
      "@type": "Offer",
      url,
      priceCurrency: "AMD",
      price: product.priceAMD,
      ...(product.availability === "in_stock"
        ? { availability: "https://schema.org/InStock" }
        : product.availability === "limited"
          ? { availability: "https://schema.org/LimitedAvailability" }
          : product.availability === "made_to_order"
            ? { availability: "https://schema.org/PreOrder" }
            : {}),
    };
  }

  if (images.length > 0) {
    data.image = images;
  }

  return data;
}
