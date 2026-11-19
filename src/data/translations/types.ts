export interface Dictionary {
  meta: {
    homeTitle: string;
    homeDescription: string;
    giftBoxesTitle: string;
    giftBoxesDescription: string;
    christmasTitle: string;
    christmasDescription: string;
    secretSantaTitle: string;
    secretSantaDescription: string;
    corporateTitle: string;
    corporateDescription: string;
    deliveryTitle: string;
    deliveryDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
    privacyTitle: string;
    privacyDescription: string;
    notFoundTitle: string;
    notFoundDescription: string;
  };
  nav: {
    home: string;
    giftBoxes: string;
    christmas: string;
    secretSanta: string;
    corporate: string;
    delivery: string;
    about: string;
    contact: string;
    order: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  common: {
    brand: string;
    tagline: string;
    orderOnInstagram: string;
    visitInstagram: string;
    copyInquiry: string;
    copied: string;
    copyName: string;
    priceFrom: string;
    priceLabel: string;
    availabilityUnknown: string;
    contentsTodo: string;
    imagePlaceholder: string;
    imagePlaceholderHint: string;
    learnMore: string;
    viewBox: string;
    backToBoxes: string;
    yerevanOnly: string;
    noMatchingProducts: string;
    inquireInstagram: string;
    featured: string;
    allBoxes: string;
    occasions: string;
    howToOrder: string;
    delivery: string;
    faq: string;
    gallery: string;
    ourStory: string;
    breadcrumbsHome: string;
  };
  home: {
    h1: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    featuredHeading: string;
    featuredLead: string;
    occasionsHeading: string;
    occasionsLead: string;
    occasionChristmas: string;
    occasionChristmasText: string;
    occasionSecretSanta: string;
    occasionSecretSantaText: string;
    occasionCorporate: string;
    occasionCorporateText: string;
    orderHeading: string;
    orderLead: string;
    orderStep1: string;
    orderStep2: string;
    orderStep3: string;
    galleryHeading: string;
    galleryLead: string;
    galleryNote: string;
    storyHeading: string;
    storyLead: string;
    deliveryTeaser: string;
    deliveryTeaserCta: string;
  };
  giftBoxes: {
    h1: string;
    lead: string;
  };
  christmas: {
    h1: string;
    lead: string;
    emptyNote: string;
  };
  secretSanta: {
    h1: string;
    lead: string;
    emptyNote: string;
  };
  corporate: {
    h1: string;
    lead: string;
    inquiryOnly: string;
    noPromises: string;
  };
  delivery: {
    h1: string;
    lead: string;
    coverageHeading: string;
    coverageText: string;
    feesHeading: string;
    feesText: string;
    howHeading: string;
    howText: string;
  };
  about: {
    h1: string;
    lead: string;
    body: string;
    valuesHeading: string;
    value1: string;
    value2: string;
    value3: string;
  };
  contact: {
    h1: string;
    lead: string;
    channelHeading: string;
    channelText: string;
    noPhone: string;
  };
  privacy: {
    h1: string;
    lead: string;
    body: string;
  };
  product: {
    contentsHeading: string;
    inquiryHeading: string;
    inquiryLead: string;
    relatedHeading: string;
    availabilityLabel: string;
  };
  faq: {
    heading: string;
    items: { q: string; a: string }[];
  };
  footer: {
    tagline: string;
    explore: string;
    order: string;
    legal: string;
    privacy: string;
    rights: string;
    deliveryNote: string;
  };
  notFound: {
    h1: string;
    lead: string;
    cta: string;
  };
}
