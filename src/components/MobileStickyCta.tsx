"use client";

import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/data/translations";

export function MobileStickyCta({ dict }: { dict: Dictionary }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-coffee/10 bg-ivory/95 p-3 backdrop-blur-md md:hidden">
      <a
        href={siteConfig.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full"
      >
        {dict.common.orderOnInstagram}
        <span aria-hidden>↗</span>
      </a>
    </div>
  );
}
