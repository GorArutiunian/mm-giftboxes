#!/usr/bin/env node
/**
 * Production smoke checks against a running `next start` (default :3000).
 * Usage: node scripts/smoke.mjs [baseUrl]
 */
const base = (process.argv[2] || "http://127.0.0.1:3000").replace(/\/$/, "");
const locales = ["hy", "en", "ru"];
const productSlug = "coffee-break-gift-box";
const paths = [
  "",
  "gift-boxes",
  "christmas-gift-boxes-yerevan",
  "secret-santa-gifts-yerevan",
  "corporate-gifts-yerevan",
  "delivery-yerevan",
  "about",
  "contact",
  "privacy",
  `products/${productSlug}`,
];

const errors = [];

async function check(url) {
  return fetch(url, { redirect: "manual" });
}

async function expectContains(url, needles) {
  const res = await check(url);
  if (res.status !== 200) {
    errors.push(`${url} → ${res.status}`);
    return;
  }
  const text = await res.text();
  for (const needle of needles) {
    if (!text.includes(needle)) {
      errors.push(`${url} missing: ${needle}`);
    }
  }
}

console.log(`Smoke testing ${base} …`);

const root = await check(`${base}/`);
if (![307, 308, 302].includes(root.status)) {
  errors.push(`GET / → ${root.status} (expected redirect to /hy)`);
} else {
  const loc = root.headers.get("location") || "";
  if (!loc.includes("/hy")) {
    errors.push(`GET / redirected to ${loc}, expected /hy`);
  }
}

await expectContains(`${base}/robots.txt`, [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "Sitemap:",
]);

const robots = await (await check(`${base}/robots.txt`)).text();
if (
  /Disallow:.*GPTBot/i.test(robots) ||
  /User-agent:\s*GPTBot[\s\S]*?Disallow:\s*\//i.test(robots)
) {
  errors.push("robots.txt should not block GPTBot by default");
}

await expectContains(`${base}/sitemap.xml`, [
  "/hy",
  "/en",
  "/ru",
  productSlug,
]);

for (const locale of locales) {
  for (const path of paths) {
    const url = `${base}/${locale}${path ? `/${path}` : ""}`;
    await expectContains(url, [
      "MM Gift Boxes",
      "instagram.com/mmgiftboxes",
      `lang="${locale}"`,
    ]);
  }
}

await expectContains(`${base}/en/products/${productSlug}`, [
  '"@type":"Product"',
  '"price":6900',
  '"priceCurrency":"AMD"',
  "Coffee Break Gift Box",
]);

await expectContains(`${base}/hy`, ['"@type":"Organization"', "mmgiftboxes"]);

if (errors.length) {
  console.error("\nSmoke FAILED:");
  for (const e of errors) console.error(" -", e);
  process.exit(1);
}

console.log(
  `Smoke OK (${locales.length} locales × ${paths.length} paths + robots/sitemap).`,
);
