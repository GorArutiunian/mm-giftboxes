import Link from "next/link";
import type { Dictionary } from "@/data/translations";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/seo";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-coffee/10 bg-coffee-deep text-ivory">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-2xl tracking-wide">{dict.common.brand}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/70">
            {dict.footer.tagline}
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-gold-soft">
            {dict.footer.deliveryNote}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
            {dict.footer.explore}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/80">
            <li>
              <Link className="hover:text-ivory" href={localePath(locale, "gift-boxes")}>
                {dict.nav.giftBoxes}
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-ivory"
                href={localePath(locale, "christmas-gift-boxes-yerevan")}
              >
                {dict.nav.christmas}
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-ivory"
                href={localePath(locale, "secret-santa-gifts-yerevan")}
              >
                {dict.nav.secretSanta}
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-ivory"
                href={localePath(locale, "corporate-gifts-yerevan")}
              >
                {dict.nav.corporate}
              </Link>
            </li>
            <li>
              <Link className="hover:text-ivory" href={localePath(locale, "about")}>
                {dict.nav.about}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
            {dict.footer.order}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/80">
            <li>
              <a
                className="hover:text-ivory"
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.instagramHandle}
              </a>
            </li>
            <li>
              <Link
                className="hover:text-ivory"
                href={localePath(locale, "delivery-yerevan")}
              >
                {dict.nav.delivery}
              </Link>
            </li>
            <li>
              <Link className="hover:text-ivory" href={localePath(locale, "contact")}>
                {dict.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
            {dict.footer.legal}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/80">
            <li>
              <Link className="hover:text-ivory" href={localePath(locale, "privacy")}>
                {dict.footer.privacy}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {dict.footer.rights}
          </p>
          <p>{dict.common.yerevanOnly}</p>
        </div>
      </div>
    </footer>
  );
}
