# MM Gift Boxes

Premium, mobile-first gift box catalog for **MM Gift Boxes** (Yerevan, Armenia).

- Next.js App Router + TypeScript + Tailwind CSS
- Locales: Armenian (`/hy`, default), English (`/en`), Russian (`/ru`)
- Orders via [Instagram Direct](https://www.instagram.com/mmgiftboxes/) only
- No database, auth, checkout, or payments

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — `/` redirects to `/hy`.

```bash
npm run lint
npm run typecheck
npm run build
npm run start
npm run smoke   # requires `npm run start` in another terminal
```

## Environment

Copy `.env.example` to `.env.local`:

```bash
SITE_URL=https://your-production-domain.com
```

`SITE_URL` drives canonical URLs, sitemap, and Open Graph. Do not ship a fake production domain.

Optional: `NEXT_PUBLIC_ANALYTICS_ID` — analytics stay disabled until set (see `src/components/Analytics.tsx`).

## Add product photos

1. Put owned images in `public/products/` (see `public/products/README.md`).
2. Reference paths in `src/data/products.ts` → `images: ["/products/your-file.jpg"]`.
3. Do **not** scrape Instagram.

## Add or edit products

Edit `src/data/products.ts`. Each product needs `id`, `slug`, localized `name` / descriptions, `priceAMD`, `occasions`, etc. Use TODO placeholders for unknown contents — never invent inventory.

Translations for UI chrome live in `src/data/translations/{hy,en,ru}.ts`.

## Create GitHub remote (if not already)

This VM was not logged into `gh`. From a machine with GitHub access:

```bash
cd mm-giftboxes
gh auth login
gh repo create mm-giftboxes --public --source=. --remote=origin --push
```

Or manually: create an empty repo on GitHub, then:

```bash
git remote add origin git@github.com:YOUR_USER/mm-giftboxes.git
git push -u origin cursor/mm-giftboxes-catalog-f097
# optionally also push main
git push -u origin main
```

## Shortest Vercel path

1. Push this repo to GitHub (see above).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: Next.js (default).
4. Add environment variable `SITE_URL` = your production URL (after first deploy you can set the final domain and redeploy).
5. Deploy.

No special build command — `next build` is enough.

## Docs in this repo

- [SEO_SETUP.md](./SEO_SETUP.md) — Search Console, OpenAI crawlers, sitemap
- [CONTENT_CHECKLIST.md](./CONTENT_CHECKLIST.md) — missing real content / images

## Brand facts (do not invent beyond these)

- Brand: MM Gift Boxes
- Instagram: https://www.instagram.com/mmgiftboxes/
- Delivery: Yerevan only
- Confirmed product: Coffee Break Gift Box — 6,900 AMD
