# Product photos

Place owner-supplied product images in this folder.

## Naming

Suggested pattern:

```
coffee-break-1.jpg
coffee-break-2.jpg
```

Then reference them from `src/data/products.ts`:

```ts
images: ["/products/coffee-break-1.jpg", "/products/coffee-break-2.jpg"],
```

## Rules

- Only use photos you own or have permission to publish.
- Do **not** scrape Instagram.
- Until real photos are added, the site shows labeled placeholders — they are not inventory.
- Prefer optimized JPG/WebP, roughly 1200–1600px on the long edge.
