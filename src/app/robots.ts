import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

/**
 * Crawl policy notes (see SEO_SETUP.md):
 * - Allow Googlebot, Bingbot, and OAI-SearchBot (OpenAI search indexing).
 * - Do NOT block GPTBot by default — crawl eligibility ≠ ChatGPT inclusion.
 * - OAI-SearchBot ≠ GPTBot; verify both in logs / Search Console style tools.
 */
export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      // GPTBot intentionally not Disallow'd by default.
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
