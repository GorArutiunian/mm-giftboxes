export const siteConfig = {
  brandName: "MM Gift Boxes",
  instagramUrl: "https://www.instagram.com/mmgiftboxes/",
  instagramHandle: "@mmgiftboxes",
  /** Orders are Instagram Direct only — no phone or email claimed. */
  orderChannel: "instagram" as const,
  delivery: {
    coverage: "yerevan" as const,
    /** Exact fees unknown — do not invent. */
    feeNote: "TODO" as const,
  },
  market: "Armenia",
  focus: [
    "Christmas 2026",
    "New Year gifts",
    "Secret Santa",
    "corporate employee gifts",
    "thoughtful gift boxes",
  ],
  social: {
    sameAs: ["https://www.instagram.com/mmgiftboxes/"] as const,
  },
  /** Set SITE_URL in production (e.g. https://example.com). No placeholder domain. */
  getSiteUrl(): string {
    const raw = process.env.SITE_URL?.trim();
    if (raw) {
      return raw.replace(/\/$/, "");
    }
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
    }
    return "http://localhost:3000";
  },
} as const;

export type SiteConfig = typeof siteConfig;
