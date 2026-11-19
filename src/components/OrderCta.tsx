"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/data/translations";

interface OrderCtaProps {
  dict: Dictionary;
  productName?: string;
  inquiryText?: string;
  variant?: "primary" | "secondary" | "compact";
  className?: string;
  showCopy?: boolean;
}

export function OrderCta({
  dict,
  productName,
  inquiryText,
  variant = "primary",
  className = "",
  showCopy = true,
}: OrderCtaProps) {
  const [copied, setCopied] = useState<"name" | "inquiry" | null>(null);

  async function copy(text: string, kind: "name" | "inquiry") {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(kind);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      // Clipboard may be unavailable; Instagram link still works.
    }
  }

  const btnClass = variant === "secondary" ? "btn-secondary" : "btn-primary";

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <a
        href={siteConfig.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnClass} ${variant === "compact" ? "px-4 py-2.5 text-xs" : ""}`}
      >
        {dict.common.orderOnInstagram}
        <span aria-hidden>↗</span>
      </a>
      {showCopy && (productName || inquiryText) ? (
        <div className="flex flex-wrap gap-2">
          {productName ? (
            <button
              type="button"
              onClick={() => copy(productName, "name")}
              className="text-xs text-coffee-soft underline-offset-4 transition hover:text-coffee hover:underline"
            >
              {copied === "name" ? dict.common.copied : dict.common.copyName}
            </button>
          ) : null}
          {inquiryText ? (
            <button
              type="button"
              onClick={() => copy(inquiryText, "inquiry")}
              className="text-xs text-coffee-soft underline-offset-4 transition hover:text-coffee hover:underline"
            >
              {copied === "inquiry" ? dict.common.copied : dict.common.copyInquiry}
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
