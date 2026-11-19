import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { locales } from "@/lib/i18n";
import { absoluteUrl, localePath } from "@/lib/seo";

const staticPaths = [
  "",
  "gift-boxes",
  "christmas-gift-boxes-yerevan",
  "secret-santa-gifts-yerevan",
  "corporate-gifts-yerevan",
  "delivery-yerevan",
  "about",
  "contact",
  "privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Ensure SITE_URL is used when set; do not invent a production domain.
  void siteConfig.getSiteUrl();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: absoluteUrl(localePath(locale, path)),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "gift-boxes" ? 0.9 : 0.7,
      });
    }

    for (const product of products) {
      entries.push({
        url: absoluteUrl(localePath(locale, `products/${product.slug}`)),
        changeFrequency: "weekly",
        priority: 0.85,
      });
    }
  }

  return entries;
}
