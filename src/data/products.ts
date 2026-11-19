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
  /** Confirmed AMD price only — never invent. */
  priceAMD: number;
  /** Paths under /public. */
  images: string[];
  contents: LocalizedString[];
  availability: ProductAvailability;
  featured: boolean;
  inquiryText: LocalizedString;
}

/**
 * Confirmed catalog only. Unpriced Instagram frames live in
 * public/products/_archive/ — see CONTENT_CHECKLIST.md.
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
      hy: "Փոքրիկ Coffee Break՝ գեղեցիկ նվերի մեջ։ Սուրճի թեմայով տուփ՝ 6․900 AMD։",
      en: "A little Coffee Break in a beautiful gift. Coffee-themed box — 6,900 AMD.",
      ru: "Маленький Coffee Break в красивом подарке. Кофейный набор — 6 900 AMD.",
    },
    description: {
      hy: "Coffee Break նվեր տուփը MM Gift Boxes-ի հաստատված առաջարկն է՝ սուրճ սիրող ընկերոջ համար։ Գինը՝ 6․900 AMD։ Պարունակությունը՝ ստորև։ Առկայությունը և առաքումը Երևանում հաստատեք Instagram Direct-ով՝ @mmgiftboxes։",
      en: "The Coffee Break Gift Box is a confirmed MM Gift Boxes offering for a coffee-loving friend. Price: 6,900 AMD. Contents listed below. Confirm availability and Yerevan delivery via Instagram Direct at @mmgiftboxes.",
      ru: "Подарочный набор Coffee Break — подтверждённое предложение MM Gift Boxes для друга, который любит кофе. Цена: 6 900 AMD. Состав — ниже. Наличие и доставку по Еревану уточняйте в Instagram Direct: @mmgiftboxes.",
    },
    category: "gift-box",
    occasions: ["christmas", "new-year", "secret-santa", "corporate", "general"],
    priceAMD: 6900,
    images: [
      "/products/coffee-break/01.jpg",
      "/products/coffee-break/02.jpg",
      "/products/coffee-break/03.jpg",
      "/products/coffee-break/04.jpg",
      "/products/coffee-break/05.jpg",
    ],
    contents: [
      {
        hy: "SADOER Coffee Hand Cream (սուրճի ձեռքի կրեմ)",
        en: "SADOER Coffee Hand Cream",
        ru: "Крем для рук SADOER Coffee Hand Cream",
      },
      {
        hy: "Սպիտակ կերամիկական բաժակ՝ սուրճի հատիկի դեկորով",
        en: "White ceramic coffee-bean mug",
        ru: "Белая керамическая кружка с декором «кофейное зерно»",
      },
      {
        hy: "Շագանակագույն սրբիչ (սուրճի մոտիվ)՝ գրիչով",
        en: "Brown rolled hand towel (coffee motif) with pen",
        ru: "Коричневое свёрнутое полотенце (кофейный мотив) с ручкой",
      },
      {
        hy: "Սպիտակ ափսե + գդալ՝ սուրճի հատիկի բռնակով և շագանակագույն ժապավենով",
        en: "White saucer + coffee-bean spoon with brown ribbon",
        ru: "Белое блюдце + ложка с ручкой «кофейное зерно» и коричневой лентой",
      },
      {
        hy: "Թխվածքաբլիթների տոպրակ՝ «Thank You» պիտակով",
        en: "Bag of cookies with thank-you tag",
        ru: "Пакет печенья с биркой «Thank You»",
      },
      {
        hy: "Դեկորատիվ սուրճի գնոմ արձանիկ",
        en: "Decorative coffee gnome figurine",
        ru: "Декоративная фигурка кофейного гнома",
      },
    ],
    availability: "unknown",
    featured: true,
    inquiryText: {
      hy: "Բարև ձեզ։ Հետաքրքրված եմ Coffee Break նվեր տուփով (6․900 AMD)։ Կխնդրեի հաստատել առկայությունը և առաքումը Երևանում։",
      en: "Hello! I'm interested in the Coffee Break Gift Box (6,900 AMD). Could you please confirm availability and delivery in Yerevan?",
      ru: "Здравствуйте! Интересует подарочный набор Coffee Break (6 900 AMD). Подскажите, пожалуйста, наличие и доставку по Еревану.",
    },
  },
  {
    id: "cozy-blanket",
    slug: "cozy-blanket-gift-box",
    name: {
      hy: "Փափուկ ծածկոց նվեր տուփ",
      en: "Cozy Blanket Gift Box",
      ru: "Подарочный набор с мягким пледом",
    },
    shortDescription: {
      hy: "Փափուկ ջերմացնող ծածկոց, գուլպա, նոթատետր և այլն։ Գինը՝ 11․900 AMD։",
      en: "Soft warming blanket, socks, notebook, and more. Price: 11,900 AMD.",
      ru: "Мягкий согревающий плед, носки, блокнот и другое. Цена: 11 900 AMD.",
    },
    description: {
      hy: "Փափուկ ծածկոցով նվեր տուփ՝ MM Gift Boxes-ի հաստատված առաջարկ (11․900 AMD)։ Պարունակությունը՝ ստորև (ներառյալ թերմոս բաժակ և տակդիր՝ ըստ caption-ի)։ Առկայությունը հաստատեք Instagram Direct-ով՝ @mmgiftboxes։",
      en: "A soft-blanket gift box — a confirmed MM Gift Boxes offering at 11,900 AMD. Contents listed below (including thermos cup and coaster from the owner caption). Confirm availability via Instagram Direct at @mmgiftboxes.",
      ru: "Подарочный набор с мягким пледом — подтверждённое предложение MM Gift Boxes за 11 900 AMD. Состав ниже (включая термокружку и подставку по подписи владельца). Наличие уточняйте в Instagram Direct: @mmgiftboxes.",
    },
    category: "gift-box",
    occasions: ["christmas", "new-year", "secret-santa", "corporate", "general"],
    priceAMD: 11900,
    images: [
      "/products/cozy-blanket/01.jpg",
      "/products/cozy-blanket/02.jpg",
    ],
    contents: [
      {
        hy: "Փափուկ ջերմացնող ծածկոց",
        en: "Soft warming blanket",
        ru: "Мягкий согревающий плед",
      },
      {
        hy: "Փափուկ գուլպա",
        en: "Soft socks",
        ru: "Мягкие носки",
      },
      {
        hy: "Նոթատետր",
        en: "Notebook",
        ru: "Блокнот",
      },
      {
        hy: "Գրիչ",
        en: "Pen",
        ru: "Ручка",
      },
      {
        hy: "Թերմոս բաժակ",
        en: "Thermos cup",
        ru: "Термокружка",
      },
      {
        hy: "Բաժակի տակդիր",
        en: "Coaster",
        ru: "Подставка под кружку",
      },
    ],
    availability: "unknown",
    featured: true,
    inquiryText: {
      hy: "Բարև ձեզ։ Հետաքրքրված եմ փափուկ ծածկոց նվեր տուփով (11․900 AMD)։ Կխնդրեի հաստատել առկայությունը և առաքումը Երևանում։",
      en: "Hello! I'm interested in the Cozy Blanket Gift Box (11,900 AMD). Could you please confirm availability and delivery in Yerevan?",
      ru: "Здравствуйте! Интересует подарочный набор с мягким пледом (11 900 AMD). Подскажите, пожалуйста, наличие и доставку по Еревану.",
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
