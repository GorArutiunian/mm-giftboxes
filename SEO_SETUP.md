# SEO setup — MM Gift Boxes

This site ships with per-page metadata, `hreflang` (hy / en / ru / x-default), `sitemap.xml`, `robots.txt`, Organization JSON-LD, Product/Offer JSON-LD for confirmed products, BreadcrumbList, and FAQ schema where FAQs are accurate.

Crawl eligibility ≠ rankings ≠ ChatGPT citations. Do not assume perfect Lighthouse scores or automatic inclusion in AI answers.

## Before launch

1. Set `SITE_URL` to the real production origin (no placeholder domain).
2. Deploy and open `/sitemap.xml` + `/robots.txt` to verify URLs.
3. Confirm Instagram CTAs point to https://www.instagram.com/mmgiftboxes/

## Google Search Console

1. Add the production property (URL-prefix or Domain).
2. Verify ownership (HTML tag, DNS, or file upload).
3. Submit `https://YOUR_DOMAIN/sitemap.xml`.
4. Use URL Inspection on `/hy`, `/en`, `/ru`, and the Coffee Break product URL.
5. Monitor Coverage / Pages for soft 404s and hreflang issues.

## Bing Webmaster Tools (optional)

1. Import from Google or verify the site.
2. Submit the same sitemap.
3. Confirm Bingbot is allowed (it is, in `src/app/robots.ts`).

## OpenAI crawlers — GPTBot vs OAI-SearchBot

| Crawler | Role (high level) | Default on this site |
| --- | --- | --- |
| **OAI-SearchBot** | Used for OpenAI **search** indexing features | **Allowed** in `robots.txt` |
| **GPTBot** | Used for model / training-related crawling (policies evolve) | **Not blocked by default** |

Important:

- Allowing a crawler does **not** guarantee appearance in ChatGPT answers.
- Blocking GPTBot does **not** necessarily block OAI-SearchBot (and vice versa) — treat them as separate.
- Document any future policy change in this file and in `src/app/robots.ts`.

### Verify crawlers

1. After launch, check access logs / Vercel logs for `OAI-SearchBot` and `GPTBot` user-agents.
2. Confirm responses are `200` for public commercial pages (no accidental `noindex`).
3. Re-fetch `/robots.txt` from an external network to ensure CDN caching is not serving a stale disallow.

### If you later decide to block GPTBot

Add an explicit rule in `src/app/robots.ts` (keep OAI-SearchBot allowed unless you intend otherwise), redeploy, and note the date + reason here.

## ChatGPT referrals

Where analytics or server logs expose a referrer, look for ChatGPT-related referrers. This will **not** identify every customer who discovered you via ChatGPT. Do not claim analytics prove AI attribution.

## JSON-LD accuracy rules

- Organization: brand name + Instagram `sameAs` only — no invented address/phone.
- Product: real name, description, price `6900` AMD for Coffee Break.
- Omit `availability` until verified (`availability: "unknown"` in data → no schema availability).
- Never add fake `aggregateRating`.

## Ongoing

- Keep product copy and prices in sync with Instagram reality.
- Replace labeled image placeholders with owned photos (`public/products/`).
- Re-submit sitemap after major URL or locale changes.
