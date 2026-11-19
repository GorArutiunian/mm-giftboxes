import Image from "next/image";
import Link from "next/link";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import {
  formatProductPrice,
  type Product,
} from "@/data/products";
import type { Dictionary } from "@/data/translations";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/seo";

export function ProductCard({
  product,
  locale,
  dict,
}: {
  product: Product;
  locale: Locale;
  dict: Dictionary;
}) {
  const href = localePath(locale, `products/${product.slug}`);
  const name = product.name[locale];
  const image = product.images[0];

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-coffee/10 bg-ivory/60 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-sage/40">
      <Link href={href} className="block overflow-hidden">
        {image ? (
          <div className="relative aspect-square bg-cream">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ) : (
          <PlaceholderImage dict={dict} label={name} />
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-xl text-coffee">
            <Link href={href} className="transition hover:text-sage-deep">
              {name}
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-coffee-soft">
            {product.shortDescription[locale]}
          </p>
        </div>
        <div className="mt-auto flex items-end justify-between gap-3 pt-2">
          <p className="text-sm font-medium tracking-wide text-coffee">
            <span className="sr-only">{dict.common.priceLabel}: </span>
            {formatProductPrice(
              product,
              locale,
              dict.common.priceOnInstagram,
            )}
          </p>
          <Link
            href={href}
            className="text-xs font-medium uppercase tracking-[0.16em] text-sage-deep transition hover:text-coffee"
          >
            {dict.common.viewBox}
          </Link>
        </div>
      </div>
    </article>
  );
}
