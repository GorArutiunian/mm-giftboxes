import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: undefined,
  title: {
    default: siteConfig.brandName,
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "Thoughtfully assembled gift boxes in Yerevan. Order via Instagram Direct.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
