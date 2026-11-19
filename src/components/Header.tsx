"use client";

import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/data/translations";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/seo";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: localePath(locale, "gift-boxes"), label: dict.nav.giftBoxes },
    {
      href: localePath(locale, "christmas-gift-boxes-yerevan"),
      label: dict.nav.christmas,
    },
    {
      href: localePath(locale, "secret-santa-gifts-yerevan"),
      label: dict.nav.secretSanta,
    },
    {
      href: localePath(locale, "corporate-gifts-yerevan"),
      label: dict.nav.corporate,
    },
    { href: localePath(locale, "delivery-yerevan"), label: dict.nav.delivery },
    { href: localePath(locale, "about"), label: dict.nav.about },
    { href: localePath(locale, "contact"), label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-coffee/10 bg-ivory/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <Link
          href={localePath(locale)}
          className="font-display text-xl tracking-wide text-coffee transition hover:text-coffee-deep sm:text-2xl"
        >
          {dict.common.brand}
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-coffee-soft transition hover:text-coffee"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher locale={locale} label={dict.nav.language} />
          </div>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden px-4 py-2 text-xs md:inline-flex"
          >
            {dict.nav.order}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-coffee/15 text-coffee lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden className="text-lg">
              {open ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-coffee/10 bg-ivory lg:hidden"
        >
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm text-coffee hover:bg-cream"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 px-3">
              <LanguageSwitcher locale={locale} label={dict.nav.language} />
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-4 py-2 text-xs"
              >
                {dict.nav.order}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
