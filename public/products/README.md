# Product photos

Owner-supplied crops only (no Instagram scraping).

## Published (wired in `src/data/products.ts`)

- `coffee-break/` — Coffee Break Gift Box (6,900 AMD)
- `cozy-blanket/` — Cozy Blanket Gift Box (11,900 AMD)

## Not for sale listings

- `_archive/` — unpriced frames (daisy, forest green, sage tea, double-mug coffee, delivery teaser, etc.)

## Adding new photos

1. Place owned images under `public/products/<slug>/`.
2. Reference paths in `src/data/products.ts` → `images: ["/products/<slug>/01.jpg"]`.
