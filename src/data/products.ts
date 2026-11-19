import type { Locale } from "@/lib/i18n";

export type ProductCategory = "gift-box";
export type ProductOccasion =
  | "christmas"
  | "new-year"
  | "secret-santa"
  | "corporate"
  | "general";

export type LocalizedString = Record<Locale, string>;

export type ProductAvailability =
  | "in_stock"
  | "limited"
  | "made_to_order"
  | "unknown";

export interface Product {
  id: string;
  slug: string;
  name: LocalizedString;
  shortDescription: LocalizedString;
  description: LocalizedString;
  category: ProductCategory;
  occasions: ProductOccasion[];
  priceAMD: number;
  /** Paths under /public — empty until owner adds photos. */
  images: string[];
  /**
   * Exact contents unknown until owner confirms.
   * Keep empty or TODO — never invent items.
   */
  contents: LocalizedString[];
  availability: ProductAvailability;
  featured: boolean;
  inquiryText: LocalizedString;
}

/**
 * Confirmed catalog. Add new products here; pages pick them up automatically.
 * Never publish invented inventory.
 */
export const products: Product[] = [
  {
    id: "coffee-break",
    slug: "coffee-break-gift-box",
    name: {
      hy: "Coffee Break նվեր տուփ",
      en: "Coffee Break Gift Box",
      ru: "Подарочный набор Coffee Break",
    },
    shortDescription: {
      hy: "Ջերմ, խնամքով հավաքված նվեր տուփ՝ սուրճի ընդմիջման համար։ Ճշգրիտ պարունակությունը կհաստատվի պատվիրելիս։",
      en: "A warm, thoughtfully assembled gift box for a coffee break moment. Exact contents confirmed when you order.",
      ru: "Тёплый, заботливо собранный подарочный набор для кофе-брейка. Точный состав подтверждается при заказе.",
    },
    description: {
      hy: "Coffee Break նվեր տուփը MM Gift Boxes-ի հաստատված առաջարկներից է՝ նախատեսված փոքր ուշադրության, Secret Santa-ի կամ աշխատակիցների նվերների համար Երևանում։ Գինը՝ 6․900 AMD։ Ճշգրիտ պարունակությունը և առկայությունը խնդրում ենք հաստատել Instagram Direct-ով՝ @mmgiftboxes։",
      en: "The Coffee Break Gift Box is a confirmed MM Gift Boxes offering — ideal for a small gesture, Secret Santa, or employee gifts in Yerevan. Price: 6,900 AMD. Please confirm exact contents and availability via Instagram Direct at @mmgiftboxes.",
      ru: "Подарочный набор Coffee Break — подтверждённое предложение MM Gift Boxes: для небольшого внимания, Тайного Санты или подарков сотрудникам в Ереване. Цена: 6 900 AMD. Точный состав и наличие уточняйте в Instagram Direct: @mmgiftboxes.",
    },
    category: "gift-box",
    occasions: ["christmas", "new-year", "secret-santa", "corporate", "general"],
    priceAMD: 6900,
    images: [],
    contents: [],
    availability: "unknown",
    featured: true,
    inquiryText: {
      hy: "Բարև ձեզ։ Հետաքրքրված եմ Coffee Break նվեր տուփով (6․900 AMD)։ Կխնդրեի հաստատել առկայությունը և առաքումը Երևանում։",
      en: "Hello! I'm interested in the Coffee Break Gift Box (6,900 AMD). Could you please confirm availability and delivery in Yerevan?",
      ru: "Здравствуйте! Интересует подарочный набор Coffee Break (6 900 AMD). Подскажите, пожалуйста, наличие и доставку по Еревану.",
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByOccasion(occasion: ProductOccasion): Product[] {
  return products.filter((p) => p.occasions.includes(occasion));
}

export function formatPriceAMD(amount: number, locale: Locale): string {
  const formatted = new Intl.NumberFormat(
    locale === "hy" ? "hy-AM" : locale === "ru" ? "ru-RU" : "en-US",
  ).format(amount);
  return `${formatted} AMD`;
}
