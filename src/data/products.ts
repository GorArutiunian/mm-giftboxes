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
  /**
   * Confirmed AMD price only.
   * `null` = unknown — show inquire / Price on Instagram (never invent).
   */
  priceAMD: number | null;
  images: string[];
  contents: LocalizedString[];
  availability: ProductAvailability;
  featured: boolean;
  inquiryText: LocalizedString;
}

/**
 * Full staff/catalog from owner-supplied photos.
 * Only Coffee Break (6900) and Cozy Blanket (11900) have confirmed prices.
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
      hy: "Փափուկ ծածկոցով նվեր տուփ՝ MM Gift Boxes-ի հաստատված առաջարկ (11․900 AMD)։ Պարունակությունը՝ ստորև։ Առկայությունը հաստատեք Instagram Direct-ով՝ @mmgiftboxes։",
      en: "A soft-blanket gift box — a confirmed MM Gift Boxes offering at 11,900 AMD. Contents listed below. Confirm availability via Instagram Direct at @mmgiftboxes.",
      ru: "Подарочный набор с мягким пледом — подтверждённое предложение MM Gift Boxes за 11 900 AMD. Состав ниже. Наличие уточняйте в Instagram Direct: @mmgiftboxes.",
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
  {
    id: "daisy-set",
    slug: "daisy-gift-box",
    name: {
      hy: "Երիցուկ նվեր տուփ",
      en: "Daisy Gift Box",
      ru: "Подарочный набор «Ромашка»",
    },
    shortDescription: {
      hy: "Երիցուկի թեմայով նվեր տուփ։ Գինը՝ հարցրեք Instagram-ում (TODO)։",
      en: "Daisy-themed gift box. Price: ask on Instagram (TODO).",
      ru: "Подарочный набор в теме ромашек. Цену уточняйте в Instagram (TODO).",
    },
    description: {
      hy: "Երիցուկի մոտիվով նվեր տուփ՝ ըստ սեփականատիրոջ լուսանկարի։ Պաշտոնական անունը, գինը և ճշգրիտ պարունակությունը դեռ հաստատված չեն այս կայքում — հարցրեք @mmgiftboxes։",
      en: "A daisy-motif gift box from owner photos. Official name, price, and exact contents are not confirmed on this site yet — ask @mmgiftboxes.",
      ru: "Подарочный набор с мотивом ромашек по фото владельца. Официальное название, цена и точный состав на сайте пока не подтверждены — спросите @mmgiftboxes.",
    },
    category: "gift-box",
    occasions: ["general", "secret-santa", "christmas", "new-year"],
    priceAMD: null,
    images: ["/products/daisy-set/01.jpg"],
    contents: [],
    availability: "unknown",
    featured: false,
    inquiryText: {
      hy: "Բարև ձեզ։ Հետաքրքրված եմ երիցուկ նվեր տուփով։ Կխնդրեի ասել գինը, պարունակությունը և առկայությունը Երևանում։",
      en: "Hello! I'm interested in the Daisy Gift Box. Could you please share the price, contents, and availability in Yerevan?",
      ru: "Здравствуйте! Интересует подарочный набор «Ромашка». Подскажите, пожалуйста, цену, состав и наличие в Ереване.",
    },
  },
  {
    id: "floral-stationery",
    slug: "floral-stationery-gift-box",
    name: {
      hy: "Ծաղկային գրենական նվեր տուփ",
      en: "Floral Stationery Gift Box",
      ru: "Подарочный набор с цветочной канцелярией",
    },
    shortDescription: {
      hy: "Ծաղկային բաժակ, նոթատետր և գրենական։ Գինը՝ Instagram (TODO)։",
      en: "Floral mug, notebook, and stationery. Price on Instagram (TODO).",
      ru: "Цветочная кружка, блокнот и канцелярия. Цена в Instagram (TODO).",
    },
    description: {
      hy: "Ծաղկային գրենական նվեր տուփ՝ սեփականատիրոջ լուսանկարից։ Գինը և պաշտոնական անունը դեռ TODO են — հարցրեք Instagram Direct-ով։",
      en: "Floral stationery gift box from owner photography. Price and official name are still TODO — inquire on Instagram Direct.",
      ru: "Цветочный канцелярский набор по фото владельца. Цена и официальное название пока TODO — уточняйте в Instagram Direct.",
    },
    category: "gift-box",
    occasions: ["general", "secret-santa", "corporate"],
    priceAMD: null,
    images: ["/products/floral-stationery/01.jpg"],
    contents: [],
    availability: "unknown",
    featured: false,
    inquiryText: {
      hy: "Բարև ձեզ։ Հետաքրքրված եմ ծաղկային գրենական նվեր տուփով։ Կխնդրեի գինը և առկայությունը։",
      en: "Hello! I'm interested in the Floral Stationery Gift Box. Could you please share the price and availability?",
      ru: "Здравствуйте! Интересует набор с цветочной канцелярией. Подскажите, пожалуйста, цену и наличие.",
    },
  },
  {
    id: "forest-green",
    slug: "forest-green-gift-box",
    name: {
      hy: "Անտառային կանաչ նվեր տուփ",
      en: "Forest Green Gift Box",
      ru: "Подарочный набор «Лесная зелень»",
    },
    shortDescription: {
      hy: "Խոր կանաչ ծածկոց, գուլպա, սոճու բաժակ։ Գինը՝ Instagram (TODO)։",
      en: "Deep green blanket, socks, pine mug. Price on Instagram (TODO).",
      ru: "Тёмно-зелёный плед, носки, кружка с соснами. Цена в Instagram (TODO).",
    },
    description: {
      hy: "Անտառային կանաչ թեմայով նվեր տուփ՝ սեփականատիրոջ լուսանկարից։ Գինը հաստատված չէ այս կայքում — հարցրեք @mmgiftboxes։",
      en: "Forest-green themed gift box from owner photos. Price is not confirmed on this site — ask @mmgiftboxes.",
      ru: "Набор в лесной зелёной теме по фото владельца. Цена на сайте не подтверждена — спросите @mmgiftboxes.",
    },
    category: "gift-box",
    occasions: ["christmas", "new-year", "general", "secret-santa"],
    priceAMD: null,
    images: ["/products/forest-green/01.jpg"],
    contents: [],
    availability: "unknown",
    featured: false,
    inquiryText: {
      hy: "Բարև ձեզ։ Հետաքրքրված եմ անտառային կանաչ նվեր տուփով։ Կխնդրեի գինը և առկայությունը։",
      en: "Hello! I'm interested in the Forest Green Gift Box. Could you please share the price and availability?",
      ru: "Здравствуйте! Интересует набор «Лесная зелень». Подскажите, пожалуйста, цену и наличие.",
    },
  },
  {
    id: "sage-tea",
    slug: "sage-tea-gift-box",
    name: {
      hy: "Եղեսպակ + թեյ նվեր տուփ",
      en: "Sage Tea Gift Box",
      ru: "Подарочный набор «Шалфей и чай»",
    },
    shortDescription: {
      hy: "Եղեսպակ ծածկոց, մեղր/թեյի աքսեսուարներ։ Գինը՝ Instagram (TODO)։",
      en: "Sage blanket with honey/tea accessories. Price on Instagram (TODO).",
      ru: "Плед шалфейного цвета с чайно-медовыми акцентами. Цена в Instagram (TODO).",
    },
    description: {
      hy: "Եղեսպակ և թեյի թեմայով նվեր տուփ՝ սեփականատիրոջ լուսանկարից։ Գինը և պաշտոնական անունը TODO են։",
      en: "Sage-and-tea themed gift box from owner photography. Price and official name are TODO.",
      ru: "Набор в теме шалфея и чая по фото владельца. Цена и официальное название — TODO.",
    },
    category: "gift-box",
    occasions: ["general", "christmas", "new-year", "secret-santa"],
    priceAMD: null,
    images: ["/products/sage-tea/01.jpg"],
    contents: [],
    availability: "unknown",
    featured: false,
    inquiryText: {
      hy: "Բարև ձեզ։ Հետաքրքրված եմ եղեսպակ/թեյ նվեր տուփով։ Կխնդրեի գինը և առկայությունը։",
      en: "Hello! I'm interested in the Sage Tea Gift Box. Could you please share the price and availability?",
      ru: "Здравствуйте! Интересует набор «Шалфей и чай». Подскажите, пожалуйста, цену и наличие.",
    },
  },
  {
    id: "sage-wheat",
    slug: "sage-wheat-gift-box",
    name: {
      hy: "Եղեսպակ + ցորեն նվեր տուփ",
      en: "Sage Wheat Gift Box",
      ru: "Подарочный набор «Шалфей и пшеница»",
    },
    shortDescription: {
      hy: "Եղեսպակ ծածկոց, ցորենի ափսե, թեյի աքսեսուարներ։ Գինը՝ Instagram (TODO)։",
      en: "Sage blanket, wheat plate, tea accessories. Price on Instagram (TODO).",
      ru: "Плед шалфейного цвета, тарелка с пшеницей, чайные аксессуары. Цена в Instagram (TODO).",
    },
    description: {
      hy: "Եղեսպակ և ցորենի թեմայով նվեր տուփ՝ սեփականատիրոջ լուսանկարից։ Գինը հաստատված չէ — հարցրեք Instagram-ում։",
      en: "Sage-and-wheat themed gift box from owner photos. Price not confirmed — inquire on Instagram.",
      ru: "Набор в теме шалфея и пшеницы по фото владельца. Цена не подтверждена — уточняйте в Instagram.",
    },
    category: "gift-box",
    occasions: ["general", "christmas", "new-year"],
    priceAMD: null,
    images: ["/products/sage-wheat/01.jpg"],
    contents: [],
    availability: "unknown",
    featured: false,
    inquiryText: {
      hy: "Բարև ձեզ։ Հետաքրքրված եմ եղեսպակ/ցորեն նվեր տուփով։ Կխնդրեի գինը և առկայությունը։",
      en: "Hello! I'm interested in the Sage Wheat Gift Box. Could you please share the price and availability?",
      ru: "Здравствуйте! Интересует набор «Шалфей и пшеница». Подскажите, пожалуйста, цену и наличие.",
    },
  },
  {
    id: "coffee-feast",
    slug: "coffee-feast-gift-box",
    name: {
      hy: "Կրկնակի բաժակ սուրճի նվեր տուփ",
      en: "Coffee Feast Gift Box",
      ru: "Кофейный набор на две кружки",
    },
    shortDescription: {
      hy: "Երկու սուրճի բաժակով մեծ տուփ։ Գինը՝ Instagram (TODO) — տարբեր է Coffee Break 6900-ից։",
      en: "Larger coffee box with two mugs. Price on Instagram (TODO) — distinct from Coffee Break 6,900.",
      ru: "Большой кофейный набор с двумя кружками. Цена в Instagram (TODO) — отдельно от Coffee Break 6 900.",
    },
    description: {
      hy: "Կրկնակի բաժակով սուրճի նվեր տուփ՝ սեփականատիրոջ լուսանկարից։ Գինը caption-ում չկա — մի շփոթեք Coffee Break (6․900 AMD) տուփի հետ։ Հարցրեք @mmgiftboxes։",
      en: "Double-mug coffee gift box from owner photos. No price in the caption — do not confuse with Coffee Break (6,900 AMD). Ask @mmgiftboxes.",
      ru: "Кофейный набор с двумя кружками по фото владельца. Цены в подписи нет — не путать с Coffee Break (6 900 AMD). Спросите @mmgiftboxes.",
    },
    category: "gift-box",
    occasions: ["general", "christmas", "new-year", "secret-santa", "corporate"],
    priceAMD: null,
    images: ["/products/coffee-feast/01.jpg"],
    contents: [],
    availability: "unknown",
    featured: false,
    inquiryText: {
      hy: "Բարև ձեզ։ Հետաքրքրված եմ կրկնակի բաժակ սուրճի նվեր տուփով (ոչ Coffee Break 6900)։ Կխնդրեի գինը և առկայությունը։",
      en: "Hello! I'm interested in the double-mug Coffee Feast Gift Box (not the Coffee Break 6,900). Could you please share the price and availability?",
      ru: "Здравствуйте! Интересует кофейный набор на две кружки (не Coffee Break 6 900). Подскажите, пожалуйста, цену и наличие.",
    },
  },
  {
    id: "cozy-home",
    slug: "cozy-home-gift-box",
    name: {
      hy: "Տնային հարմարավետ նվեր տուփ",
      en: "Cozy Home Gift Box",
      ru: "Домашний уютный подарочный набор",
    },
    shortDescription: {
      hy: "Կրաֆտ տուփ՝ ծածկոցով, բաժակով և քաղցրավենիքով։ Գինը՝ Instagram (TODO)։",
      en: "Kraft box with blanket, mug, and treats. Price on Instagram (TODO).",
      ru: "Крафт-коробка с пледом, кружкой и сладостями. Цена в Instagram (TODO).",
    },
    description: {
      hy: "Տնային հարմարավետության նվեր տուփ՝ սեփականատիրոջ լուսանկարից։ Գինը և պաշտոնական անունը TODO են — հարցրեք Instagram-ում։",
      en: "Cozy home gift box from owner photography. Price and official name are TODO — inquire on Instagram.",
      ru: "Домашний уютный набор по фото владельца. Цена и официальное название — TODO; уточняйте в Instagram.",
    },
    category: "gift-box",
    occasions: ["general", "christmas", "new-year", "secret-santa"],
    priceAMD: null,
    images: ["/products/cozy-home/01.jpg"],
    contents: [],
    availability: "unknown",
    featured: false,
    inquiryText: {
      hy: "Բարև ձեզ։ Հետաքրքրված եմ տնային հարմարավետ նվեր տուփով։ Կխնդրեի գինը և առկայությունը։",
      en: "Hello! I'm interested in the Cozy Home Gift Box. Could you please share the price and availability?",
      ru: "Здравствуйте! Интересует домашний уютный набор. Подскажите, пожалуйста, цену и наличие.",
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

/** Display price or Instagram inquire label when unknown. */
export function formatProductPrice(
  product: Product,
  locale: Locale,
  inquireLabel: string,
): string {
  if (product.priceAMD == null) return inquireLabel;
  return formatPriceAMD(product.priceAMD, locale);
}
