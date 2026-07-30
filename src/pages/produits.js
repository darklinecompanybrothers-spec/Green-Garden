const { renderContentPage } = require("../templates/page");
const { plantesInterieur } = require("../data/produits");
const { localizedPath } = require("../data/i18n");

const HUB_TEXT = {
  fr: {
    label: "Produits",
    title: "Nos produits | Gazon, palmiers, plantes et engrais - Green Garden",
    metaDescription: "Découvrez tous les produits Green Garden : gazon naturel en rouleau, palmiers décoratifs, plantes d'intérieur et engrais, avec livraison en Tunisie.",
    eyebrow: "Catalogue",
    h1: "Nos produits",
    intro: "Green Garden propose une offre complète pour aménager un extérieur ou un intérieur tunisien : gazon naturel, palmiers décoratifs, plantes d'intérieur et engrais.",
    cards: [
      ["Gazon naturel — 9 DT/m²", "Livraison gratuite Grand Tunis et Nabeul.", "/produits/gazon/", "/gazon.jpg"],
      ["Palmiers décoratifs — 275 DT", "Livraison gratuite Grand Tunis et Nabeul.", "/produits/palmiers/", "/Palmier éventail.jpeg"],
      ["Plantes d'intérieur", "Une vingtaine de variétés décoratives.", "/produits/plantes-interieur/", "/Faux philodendron.jpeg"],
      ["Engrais", "Pour renforcer vos plantes et votre jardin.", "/produits/engrais/", "/engrais bio-organique.jpeg"],
    ],
    relatedH2: "Nos pages les plus demandées",
    related: [
      ["Gazon Tunisie", "/gazon-tunisie/", "Prix, zones de livraison, commande"],
      ["Palmier Tunisie", "/palmier-tunisie/", "Prix, livraison, commande"],
      ["Zones de livraison", "/livraison/", "Grand Tunis, Nabeul, Sousse, Sfax..."],
      ["Blog jardinage", "/blog/", "Conseils de pose et d'entretien"],
    ],
  },
  en: {
    label: "Products",
    title: "Our Products | Lawn, Palm Trees, Plants and Fertilizer - Green Garden",
    metaDescription: "Discover all Green Garden products: natural rolled lawn, decorative palm trees, indoor plants and fertilizer, with delivery in Tunisia.",
    eyebrow: "Catalog",
    h1: "Our products",
    intro: "Green Garden offers a complete range to landscape a Tunisian outdoor or indoor space: natural lawn, decorative palm trees, indoor plants and fertilizer.",
    cards: [
      ["Natural lawn — 9 DT/sqm", "Free delivery in Greater Tunis and Nabeul.", "/produits/gazon/", "/gazon.jpg"],
      ["Decorative palm trees — 275 DT", "Free delivery in Greater Tunis and Nabeul.", "/produits/palmiers/", "/Palmier éventail.jpeg"],
      ["Indoor plants", "About twenty decorative varieties.", "/produits/plantes-interieur/", "/Faux philodendron.jpeg"],
      ["Fertilizer", "To strengthen your plants and garden.", "/produits/engrais/", "/engrais bio-organique.jpeg"],
    ],
    relatedH2: "Our most requested pages",
    related: [
      ["Lawn Tunisia", "/gazon-tunisie/", "Price, delivery zones, ordering"],
      ["Palm Tree Tunisia", "/palmier-tunisie/", "Price, delivery, ordering"],
      ["Delivery zones", "/livraison/", "Greater Tunis, Nabeul, Sousse, Sfax..."],
      ["Gardening blog", "/blog/", "Laying and care advice"],
    ],
  },
  ar: {
    label: "المنتجات",
    title: "منتجاتنا | عشب، نخيل، نباتات وأسمدة - Green Garden",
    metaDescription: "اكتشفوا كل منتجات Green Garden: عشب طبيعي على شكل لفائف، نخيل زينة، نباتات داخلية وأسمدة، مع التوصيل في تونس.",
    eyebrow: "الكتالوج",
    h1: "منتجاتنا",
    intro: "تقدم Green Garden عرضاً كاملاً لتهيئة مساحة خارجية أو داخلية تونسية: عشب طبيعي، نخيل زينة، نباتات داخلية وأسمدة.",
    cards: [
      ["عشب طبيعي — 9 دينار/م²", "توصيل مجاني في تونس الكبرى ونابل.", "/produits/gazon/", "/gazon.jpg"],
      ["نخيل زينة — 275 دينار", "توصيل مجاني في تونس الكبرى ونابل.", "/produits/palmiers/", "/Palmier éventail.jpeg"],
      ["نباتات داخلية", "حوالي عشرين صنفاً زخرفياً.", "/produits/plantes-interieur/", "/Faux philodendron.jpeg"],
      ["أسمدة", "لتقوية نباتاتكم وحديقتكم.", "/produits/engrais/", "/engrais bio-organique.jpeg"],
    ],
    relatedH2: "أكثر صفحاتنا طلباً",
    related: [
      ["عشب تونس", "/gazon-tunisie/", "السعر، مناطق التوصيل، الطلب"],
      ["نخيل تونس", "/palmier-tunisie/", "السعر، التوصيل، الطلب"],
      ["مناطق التوصيل", "/livraison/", "تونس الكبرى، نابل، سوسة، صفاقس..."],
      ["مدونة البستنة", "/blog/", "نصائح التركيب والعناية"],
    ],
  },
};

function hubPage(lang) {
  const t = HUB_TEXT[lang];
  return renderContentPage({
    basePath: "/produits/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    breadcrumb: [{ label: t.label, path: localizedPath("/produits/", lang) }],
    sections: [
      {
        type: "cards",
        cards: t.cards.map(([title, text, path, image]) => ({ title, text, path: localizedPath(path, lang), image })),
      },
      {
        type: "related",
        h2: t.relatedH2,
        links: t.related.map(([label, path, description]) => ({ label, path: localizedPath(path, lang), description })),
      },
    ],
  });
}

const CATEGORY_TEXT = {
  gazon: {
    fr: {
      title: "Gazon naturel | Catégorie produit - Green Garden",
      metaDescription: "La catégorie gazon naturel de Green Garden : gazon en rouleau à 9 DT/m², livraison gratuite Grand Tunis et Nabeul, sur devis ailleurs en Tunisie.",
      eyebrow: "Catégorie",
      h1: "Gazon naturel",
      intro: "Notre catégorie gazon regroupe le gazon naturel en rouleau, vendu 9 DT/m² partout en Tunisie, avec livraison gratuite dans le Grand Tunis et à Nabeul.",
      label: "Gazon",
      relatedH2: "Voir aussi",
      related: [
        ["Gazon Tunisie (page complète)", "/gazon-tunisie/", "Prix, zones, FAQ et commande"],
        ["Gazon naturel vs synthétique", "/gazon-naturel/", "Comprendre les différences"],
        ["Gazon en rouleau", "/gazon-en-rouleau/", "Format et calcul de surface"],
        ["Acheter du gazon", "/acheter-gazon/", "Commander en 3 étapes"],
      ],
    },
    en: {
      title: "Natural Lawn | Product Category - Green Garden",
      metaDescription: "Green Garden's natural lawn category: rolled lawn at 9 DT/sqm, free delivery in Greater Tunis and Nabeul, on quote elsewhere in Tunisia.",
      eyebrow: "Category",
      h1: "Natural lawn",
      intro: "Our lawn category covers natural rolled lawn, sold at 9 DT/sqm across Tunisia, with free delivery in Greater Tunis and Nabeul.",
      label: "Lawn",
      relatedH2: "See also",
      related: [
        ["Lawn Tunisia (full page)", "/gazon-tunisie/", "Price, zones, FAQ and ordering"],
        ["Natural vs synthetic lawn", "/gazon-naturel/", "Understanding the differences"],
        ["Rolled lawn", "/gazon-en-rouleau/", "Format and area calculation"],
        ["Buy lawn", "/acheter-gazon/", "Order in 3 steps"],
      ],
    },
    ar: {
      title: "عشب طبيعي | فئة المنتج - Green Garden",
      metaDescription: "فئة العشب الطبيعي من Green Garden: عشب على شكل لفائف بسعر 9 دينار/م²، توصيل مجاني في تونس الكبرى ونابل، حسب الطلب في بقية تونس.",
      eyebrow: "الفئة",
      h1: "عشب طبيعي",
      intro: "تضم فئة العشب لدينا العشب الطبيعي على شكل لفائف، يُباع بسعر 9 دينار/م² في كل تونس، مع توصيل مجاني في تونس الكبرى ونابل.",
      label: "العشب",
      relatedH2: "شاهدوا أيضاً",
      related: [
        ["عشب تونس (الصفحة الكاملة)", "/gazon-tunisie/", "السعر، المناطق، الأسئلة الشائعة والطلب"],
        ["عشب طبيعي مقابل اصطناعي", "/gazon-naturel/", "فهم الاختلافات"],
        ["عشب على شكل لفائف", "/gazon-en-rouleau/", "الشكل وحساب المساحة"],
        ["شراء العشب", "/acheter-gazon/", "الطلب في 3 خطوات"],
      ],
    },
  },
  palmiers: {
    fr: {
      title: "Palmiers décoratifs | Catégorie produit - Green Garden",
      metaDescription: "La catégorie palmiers décoratifs de Green Garden : palmier à 275 DT, livraison gratuite Grand Tunis et Nabeul, sur devis ailleurs.",
      eyebrow: "Catégorie",
      h1: "Palmiers décoratifs",
      intro: "Notre catégorie palmiers regroupe le palmier décoratif d'ornement, vendu 275 DT. La livraison est gratuite dans le Grand Tunis et à Nabeul, et organisée sur devis dans le reste de la Tunisie.",
      label: "Palmiers",
      relatedH2: "Voir aussi",
      related: [
        ["Palmier Tunisie (page complète)", "/palmier-tunisie/", "Prix, livraison, FAQ et commande"],
        ["Acheter un palmier", "/acheter-palmier/", "Commander en 3 étapes"],
        ["Palmier de jardin", "/palmier-jardin/", "Pour l'aménagement paysager"],
        ["Palmier décoratif", "/palmier-decoratif/", "Pour terrasses et entrées"],
      ],
    },
    en: {
      title: "Decorative Palm Trees | Product Category - Green Garden",
      metaDescription: "Green Garden's decorative palm tree category: palm tree at 275 DT, free delivery in Greater Tunis and Nabeul, on quote elsewhere.",
      eyebrow: "Category",
      h1: "Decorative palm trees",
      intro: "Our palm tree category covers the ornamental decorative palm tree, sold at 275 DT. Delivery is free in Greater Tunis and Nabeul, and arranged on quote across the rest of Tunisia.",
      label: "Palm trees",
      relatedH2: "See also",
      related: [
        ["Palm Tree Tunisia (full page)", "/palmier-tunisie/", "Price, delivery, FAQ and ordering"],
        ["Buy a palm tree", "/acheter-palmier/", "Order in 3 steps"],
        ["Garden palm tree", "/palmier-jardin/", "For landscape design"],
        ["Decorative palm tree", "/palmier-decoratif/", "For terraces and entrances"],
      ],
    },
    ar: {
      title: "نخيل زينة | فئة المنتج - Green Garden",
      metaDescription: "فئة نخيل الزينة من Green Garden: نخلة بسعر 275 دينار، توصيل مجاني في تونس الكبرى ونابل، حسب الطلب في بقية الجهات.",
      eyebrow: "الفئة",
      h1: "نخيل زينة",
      intro: "تضم فئة النخيل لدينا نخلة الزينة، تُباع بسعر 275 دينار. التوصيل مجاني في تونس الكبرى ونابل، ومُنظَّم حسب الطلب في بقية تونس.",
      label: "النخيل",
      relatedH2: "شاهدوا أيضاً",
      related: [
        ["نخيل تونس (الصفحة الكاملة)", "/palmier-tunisie/", "السعر، التوصيل، الأسئلة الشائعة والطلب"],
        ["شراء نخلة", "/acheter-palmier/", "الطلب في 3 خطوات"],
        ["نخيل الحديقة", "/palmier-jardin/", "لتهيئة المساحات الخضراء"],
        ["نخيل زينة", "/palmier-decoratif/", "للتراسات والمداخل"],
      ],
    },
  },
};

function categoryPage(key, basePath, lang) {
  const t = CATEGORY_TEXT[key][lang];
  return renderContentPage({
    basePath,
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    breadcrumb: [
      { label: HUB_TEXT[lang].label, path: localizedPath("/produits/", lang) },
      { label: t.label, path: localizedPath(basePath, lang) },
    ],
    sections: [
      {
        type: "related",
        h2: t.relatedH2,
        links: t.related.map(([label, path, description]) => ({ label, path: localizedPath(path, lang), description })),
      },
    ],
  });
}

const PLANTES_TEXT = {
  fr: {
    title: "Plantes d'intérieur | Catalogue Green Garden",
    metaDescription: "Découvrez notre catalogue de plantes d'intérieur décoratives : cactus, palmiers d'intérieur, ficus, dragonniers et plus. Prix sur demande via WhatsApp.",
    eyebrow: "Catégorie",
    h1: "Plantes d'intérieur",
    intro: "Green Garden propose une vingtaine de variétés de plantes d'intérieur décoratives, robustes et faciles à vivre. Consultez le catalogue complet et demandez le prix directement par WhatsApp.",
    label: "Plantes d'intérieur",
    listH2: "Variétés disponibles dans notre catalogue",
    ctaHeading: "Consultez le catalogue complet",
    ctaText: "Retrouvez toutes nos plantes d'intérieur avec photos sur la page d'accueil et demandez le prix par WhatsApp.",
    ctaButton: "Voir le catalogue",
    ctaMessage: "Bonjour, je souhaite des informations sur vos plantes d'intérieur.",
    ctaSecondary: "Voir le catalogue en images",
  },
  en: {
    title: "Indoor Plants | Green Garden Catalog",
    metaDescription: "Discover our catalog of decorative indoor plants: cacti, indoor palms, figs, dragon trees and more. Price on request via WhatsApp.",
    eyebrow: "Category",
    h1: "Indoor plants",
    intro: "Green Garden offers about twenty varieties of decorative, sturdy and easy-care indoor plants. Browse the full catalog and ask for the price directly on WhatsApp.",
    label: "Indoor plants",
    listH2: "Varieties available in our catalog",
    ctaHeading: "Browse the full catalog",
    ctaText: "Find all our indoor plants with photos on the home page and ask for the price on WhatsApp.",
    ctaButton: "See the catalog",
    ctaMessage: "Hello, I would like information about your indoor plants.",
    ctaSecondary: "See the catalog with photos",
  },
  ar: {
    title: "نباتات داخلية | كتالوج Green Garden",
    metaDescription: "اكتشفوا كتالوجنا من النباتات الداخلية الزخرفية: صبار، نخيل داخلي، فيكس، أشجار تنين وأكثر. السعر عند الطلب عبر واتساب.",
    eyebrow: "الفئة",
    h1: "نباتات داخلية",
    intro: "تقدم Green Garden حوالي عشرين صنفاً من النباتات الداخلية الزخرفية، القوية وسهلة العناية. تصفحوا الكتالوج الكامل واطلبوا السعر مباشرة عبر واتساب.",
    label: "نباتات داخلية",
    listH2: "الأصناف المتوفرة في كتالوجنا",
    ctaHeading: "تصفحوا الكتالوج الكامل",
    ctaText: "اعثروا على كل نباتاتنا الداخلية مع صور في الصفحة الرئيسية واطلبوا السعر عبر واتساب.",
    ctaButton: "شاهدوا الكتالوج",
    ctaMessage: "مرحباً، أود معلومات حول نباتاتكم الداخلية.",
    ctaSecondary: "شاهدوا الكتالوج بالصور",
  },
};

function plantesInterieurPage(lang) {
  const t = PLANTES_TEXT[lang];
  return renderContentPage({
    basePath: "/produits/plantes-interieur/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    breadcrumb: [
      { label: HUB_TEXT[lang].label, path: localizedPath("/produits/", lang) },
      { label: t.label, path: localizedPath("/produits/plantes-interieur/", lang) },
    ],
    sections: [
      { type: "list", h2: t.listH2, items: plantesInterieur[lang] },
      {
        type: "cta",
        heading: t.ctaHeading,
        text: t.ctaText,
        buttonLabel: t.ctaButton,
        whatsappMessage: t.ctaMessage,
        secondary: { label: t.ctaSecondary, path: localizedPath("/", lang) + "#plantes" },
      },
    ],
  });
}

const ENGRAIS_TEXT = {
  fr: {
    title: "Engrais pour plantes et jardin | Green Garden",
    metaDescription: "Engrais Green Garden pour renforcer vos plantes d'intérieur, votre gazon et vos palmiers. Conseils d'utilisation et commande par WhatsApp.",
    eyebrow: "Catégorie",
    h1: "Engrais pour plantes et jardin",
    intro: "Un bon engrais soutient la croissance de vos plantes d'intérieur, de votre gazon fraîchement posé et de vos palmiers. Green Garden propose des solutions adaptées à chaque usage.",
    label: "Engrais",
    listH2: "Quand utiliser un engrais ?",
    list: ["Après la pose d'un gazon naturel, pour accélérer l'enracinement", "Au redémarrage de la végétation au printemps", "Pour soutenir la croissance d'un palmier récemment planté", "Pour redonner de la vigueur à des plantes d'intérieur fatiguées"],
    ctaHeading: "Commandez votre engrais",
    ctaText: "Contactez-nous par WhatsApp pour connaître la référence adaptée à votre projet.",
    ctaButton: "Commander sur WhatsApp",
    ctaMessage: "Bonjour, je souhaite commander de l'engrais.",
  },
  en: {
    title: "Fertilizer for Plants and Garden | Green Garden",
    metaDescription: "Green Garden fertilizer to strengthen your indoor plants, your lawn and your palm trees. Usage advice and ordering via WhatsApp.",
    eyebrow: "Category",
    h1: "Fertilizer for plants and garden",
    intro: "A good fertilizer supports the growth of your indoor plants, freshly laid lawn and palm trees. Green Garden offers solutions suited to every use.",
    label: "Fertilizer",
    listH2: "When to use a fertilizer?",
    list: ["After laying natural lawn, to speed up rooting", "When vegetation restarts in spring", "To support the growth of a recently planted palm tree", "To restore vigour to tired indoor plants"],
    ctaHeading: "Order your fertilizer",
    ctaText: "Contact us on WhatsApp to find out which reference suits your project.",
    ctaButton: "Order on WhatsApp",
    ctaMessage: "Hello, I would like to order fertilizer.",
  },
  ar: {
    title: "أسمدة للنباتات والحديقة | Green Garden",
    metaDescription: "أسمدة Green Garden لتقوية نباتاتكم الداخلية وعشبكم ونخيلكم. نصائح الاستعمال والطلب عبر واتساب.",
    eyebrow: "الفئة",
    h1: "أسمدة للنباتات والحديقة",
    intro: "يدعم السماد الجيد نمو نباتاتكم الداخلية وعشبكم المُركَّب حديثاً ونخيلكم. تقدم Green Garden حلولاً مناسبة لكل استعمال.",
    label: "الأسمدة",
    listH2: "متى نستعمل السماد؟",
    list: ["بعد تركيب عشب طبيعي، لتسريع التجذر", "عند انطلاق النمو في الربيع", "لدعم نمو نخلة مغروسة حديثاً", "لإعادة الحيوية لنباتات داخلية متعبة"],
    ctaHeading: "اطلبوا سمادكم",
    ctaText: "تواصلوا معنا عبر واتساب لمعرفة المرجع المناسب لمشروعكم.",
    ctaButton: "اطلبوا عبر واتساب",
    ctaMessage: "مرحباً، أود طلب سماد.",
  },
};

function engraisPage(lang) {
  const t = ENGRAIS_TEXT[lang];
  return renderContentPage({
    basePath: "/produits/engrais/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/engrais bio-organique.jpeg", alt: t.h1 },
    breadcrumb: [
      { label: HUB_TEXT[lang].label, path: localizedPath("/produits/", lang) },
      { label: t.label, path: localizedPath("/produits/engrais/", lang) },
    ],
    sections: [
      { type: "list", h2: t.listH2, items: t.list },
      { type: "cta", heading: t.ctaHeading, text: t.ctaText, buttonLabel: t.ctaButton, whatsappMessage: t.ctaMessage },
    ],
  });
}

function build(registerPage, lang) {
  registerPage(localizedPath("/produits/", lang), hubPage(lang));
  registerPage(localizedPath("/produits/gazon/", lang), categoryPage("gazon", "/produits/gazon/", lang));
  registerPage(localizedPath("/produits/palmiers/", lang), categoryPage("palmiers", "/produits/palmiers/", lang));
  registerPage(localizedPath("/produits/plantes-interieur/", lang), plantesInterieurPage(lang));
  registerPage(localizedPath("/produits/engrais/", lang), engraisPage(lang));
}

module.exports = { build };
