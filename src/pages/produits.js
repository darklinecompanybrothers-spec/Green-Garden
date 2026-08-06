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
      ["Arbres d'ornement", "Pour structurer et ombrager votre jardin.", "/produits/arbres/", "/Arbre du voyageur.jpeg"],
      ["Arbustes", "Pour habiller haies et massifs.", "/produits/arbustes/", null],
      ["Terre végétale", "Pour préparer vos massifs et plantations.", "/produits/terre-vegetale/", "/acheter-terre-vegetale-tunisie.png"],
      ["Gravier décoratif", "Pour allées, bordures et paillage minéral.", "/produits/gravier-decoratif/", null],
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
      ["Ornamental trees", "To structure and shade your garden.", "/produits/arbres/", "/Arbre du voyageur.jpeg"],
      ["Shrubs", "For hedges and flower beds.", "/produits/arbustes/", null],
      ["Topsoil", "To prepare your beds and plantings.", "/produits/terre-vegetale/", "/acheter-terre-vegetale-tunisie.png"],
      ["Decorative gravel", "For paths, borders and mineral mulching.", "/produits/gravier-decoratif/", null],
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
      ["أشجار الزينة", "لهيكلة حديقتكم وتظليلها.", "/produits/arbres/", "/Arbre du voyageur.jpeg"],
      ["شجيرات", "للأسيجة والأحواض.", "/produits/arbustes/", null],
      ["تراب زراعي", "لتحضير أحواضكم وغراساتكم.", "/produits/terre-vegetale/", "/acheter-terre-vegetale-tunisie.png"],
      ["حصى زخرفي", "للممرات والحواف والتغطية المعدنية.", "/produits/gravier-decoratif/", null],
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

const LIGHT_CATEGORY_TEXT = {
  arbres: {
    fr: {
      title: "Arbres d'ornement | Green Garden",
      metaDescription: "Arbres d'ornement Green Garden pour structurer, ombrager ou délimiter votre jardin en Tunisie. Variétés et prix sur demande via WhatsApp.",
      eyebrow: "Catégorie",
      h1: "Arbres d'ornement",
      intro: "Au-delà du gazon et des palmiers, notre catalogue comprend aussi des arbres d'ornement pour structurer un jardin, créer de l'ombre ou marquer une allée.",
      label: "Arbres",
      heroImage: "/Arbre du voyageur.jpeg",
      listH2: "Pourquoi ajouter un arbre d'ornement à votre jardin ?",
      list: ["Créer de l'ombre naturelle sur une terrasse ou un coin détente", "Structurer visuellement un grand jardin ou une allée", "Délimiter une propriété ou marquer une entrée", "Apporter du volume et de la verdure sur la durée"],
      ctaHeading: "Découvrez les variétés disponibles",
      ctaText: "Contactez-nous par WhatsApp pour connaître les arbres actuellement disponibles et leur prix selon la variété et la taille.",
      ctaButton: "Demander les variétés disponibles",
      ctaMessage: "Bonjour, je souhaite des informations sur les arbres d'ornement disponibles chez Green Garden.",
    },
    en: {
      title: "Ornamental Trees | Green Garden",
      metaDescription: "Green Garden ornamental trees to structure, shade or border your garden in Tunisia. Varieties and prices on request via WhatsApp.",
      eyebrow: "Category",
      h1: "Ornamental trees",
      intro: "Beyond lawn and palm trees, our catalog also includes ornamental trees to structure a garden, create shade or mark a driveway.",
      label: "Trees",
      heroImage: "/Arbre du voyageur.jpeg",
      listH2: "Why add an ornamental tree to your garden?",
      list: ["Create natural shade on a terrace or relaxation area", "Visually structure a large garden or driveway", "Mark the boundary of a property or an entrance", "Add volume and greenery over time"],
      ctaHeading: "Discover the available varieties",
      ctaText: "Contact us on WhatsApp to find out which trees are currently available and their price by variety and size.",
      ctaButton: "Ask about available varieties",
      ctaMessage: "Hello, I would like information about the ornamental trees available at Green Garden.",
    },
    ar: {
      title: "أشجار الزينة | Green Garden",
      metaDescription: "أشجار زينة من Green Garden لهيكلة أو تظليل أو تحديد حديقتكم في تونس. الأصناف والأسعار عند الطلب عبر واتساب.",
      eyebrow: "الفئة",
      h1: "أشجار الزينة",
      intro: "إلى جانب العشب والنخيل، يضم كتالوجنا أيضاً أشجار زينة لهيكلة الحديقة أو خلق الظل أو تمييز ممر.",
      label: "الأشجار",
      heroImage: "/Arbre du voyageur.jpeg",
      listH2: "لماذا تضيفون شجرة زينة إلى حديقتكم؟",
      list: ["خلق ظل طبيعي على تراس أو ركن استرخاء", "هيكلة بصرية لحديقة كبيرة أو ممر", "تحديد ملكية أو تمييز مدخل", "إضافة حجم وخضرة مع الوقت"],
      ctaHeading: "اكتشفوا الأصناف المتوفرة",
      ctaText: "تواصلوا معنا عبر واتساب لمعرفة الأشجار المتوفرة حالياً وسعرها حسب الصنف والحجم.",
      ctaButton: "اطلبوا معرفة الأصناف المتوفرة",
      ctaMessage: "مرحباً، أود معلومات حول أشجار الزينة المتوفرة لدى Green Garden.",
    },
  },
  arbustes: {
    fr: {
      title: "Arbustes | Green Garden",
      metaDescription: "Arbustes Green Garden pour habiller haies, massifs et bordures en Tunisie. Variétés et prix sur demande via WhatsApp.",
      eyebrow: "Catégorie",
      h1: "Arbustes",
      intro: "Nos arbustes permettent d'habiller une haie, un massif ou une bordure, en complément du gazon et des arbres d'ornement.",
      label: "Arbustes",
      heroImage: null,
      listH2: "Utilisations courantes des arbustes",
      list: ["Former une haie pour délimiter ou protéger un jardin", "Habiller un massif en complément de fleurs et de plantes basses", "Border une allée ou une terrasse", "Structurer un espace vert sans attendre la croissance d'un grand arbre"],
      ctaHeading: "Découvrez les variétés disponibles",
      ctaText: "Contactez-nous par WhatsApp pour connaître les arbustes actuellement disponibles et leur prix.",
      ctaButton: "Demander les variétés disponibles",
      ctaMessage: "Bonjour, je souhaite des informations sur les arbustes disponibles chez Green Garden.",
    },
    en: {
      title: "Shrubs | Green Garden",
      metaDescription: "Green Garden shrubs for hedges, flower beds and borders in Tunisia. Varieties and prices on request via WhatsApp.",
      eyebrow: "Category",
      h1: "Shrubs",
      intro: "Our shrubs help dress up a hedge, a flower bed or a border, alongside lawn and ornamental trees.",
      label: "Shrubs",
      heroImage: null,
      listH2: "Common uses for shrubs",
      list: ["Form a hedge to border or protect a garden", "Dress up a flower bed alongside flowers and low plants", "Border a driveway or terrace", "Structure a green space without waiting for a large tree to grow"],
      ctaHeading: "Discover the available varieties",
      ctaText: "Contact us on WhatsApp to find out which shrubs are currently available and their price.",
      ctaButton: "Ask about available varieties",
      ctaMessage: "Hello, I would like information about the shrubs available at Green Garden.",
    },
    ar: {
      title: "شجيرات | Green Garden",
      metaDescription: "شجيرات من Green Garden للأسيجة والأحواض والحواف في تونس. الأصناف والأسعار عند الطلب عبر واتساب.",
      eyebrow: "الفئة",
      h1: "شجيرات",
      intro: "تساعد شجيراتنا على تزيين سياج أو حوض أو حافة، بالتكامل مع العشب وأشجار الزينة.",
      label: "الشجيرات",
      heroImage: null,
      listH2: "استعمالات شائعة للشجيرات",
      list: ["تشكيل سياج لتحديد أو حماية حديقة", "تزيين حوض بالتكامل مع الزهور والنباتات المنخفضة", "تحديد حواف ممر أو تراس", "هيكلة مساحة خضراء دون انتظار نمو شجرة كبيرة"],
      ctaHeading: "اكتشفوا الأصناف المتوفرة",
      ctaText: "تواصلوا معنا عبر واتساب لمعرفة الشجيرات المتوفرة حالياً وسعرها.",
      ctaButton: "اطلبوا معرفة الأصناف المتوفرة",
      ctaMessage: "مرحباً، أود معلومات حول الشجيرات المتوفرة لدى Green Garden.",
    },
  },
  "terre-vegetale": {
    fr: {
      title: "Terre végétale | 70 DT/m³ - Green Garden",
      metaDescription: "Terre végétale Green Garden à 70 DT/m³ pour préparer vos massifs, plantations et pelouses en Tunisie. Livraison partout dans le pays.",
      eyebrow: "Catégorie",
      h1: "Terre végétale",
      intro: "Une bonne terre végétale est la base d'un jardin qui pousse bien : elle enrichit le sol avant la pose du gazon, la plantation d'un arbre ou d'un massif. Vendue 70 DT/m³, livrable partout en Tunisie.",
      label: "Terre végétale",
      heroImage: "/acheter-terre-vegetale-tunisie.png",
      listH2: "Quand utiliser de la terre végétale ?",
      list: ["Avant la pose d'un gazon en rouleau, pour enrichir un sol pauvre", "Lors de la plantation d'un arbre, d'un arbuste ou d'un palmier", "Pour créer ou rehausser un massif de fleurs", "Pour combler et niveler une zone avant aménagement"],
      ctaHeading: "Commandez votre terre végétale",
      ctaText: "70 DT/m³, livraison partout en Tunisie. Consultez le détail des quantités et commandez sur la page dédiée.",
      ctaButton: "Voir le prix et commander",
      ctaMessage: "Bonjour, je souhaite des informations sur la terre végétale disponible chez Green Garden.",
      ctaSecondaryPath: "/acheter-terre-vegetale/",
      ctaSecondaryLabel: "Acheter de la terre végétale",
    },
    en: {
      title: "Topsoil | 70 DT/m³ - Green Garden",
      metaDescription: "Green Garden topsoil at 70 DT/m³ to prepare your beds, plantings and lawns in Tunisia. Delivery across the country.",
      eyebrow: "Category",
      h1: "Topsoil",
      intro: "Good topsoil is the foundation of a garden that grows well: it enriches the soil before laying lawn, planting a tree or setting up a flower bed. Sold at 70 DT/m³, deliverable across Tunisia.",
      label: "Topsoil",
      heroImage: "/acheter-terre-vegetale-tunisie.png",
      listH2: "When to use topsoil?",
      list: ["Before laying rolled lawn, to enrich poor soil", "When planting a tree, shrub or palm tree", "To create or raise a flower bed", "To fill and level an area before landscaping"],
      ctaHeading: "Order your topsoil",
      ctaText: "70 DT/m³, delivery across Tunisia. See the full quantity guide and order on the dedicated page.",
      ctaButton: "See price and order",
      ctaMessage: "Hello, I would like information about the topsoil available at Green Garden.",
      ctaSecondaryPath: "/acheter-terre-vegetale/",
      ctaSecondaryLabel: "Buy topsoil",
    },
    ar: {
      title: "تراب زراعي | 70 دينار/م³ - Green Garden",
      metaDescription: "تراب زراعي من Green Garden بسعر 70 دينار/م³ لتحضير أحواضكم وغراساتكم وعشبكم في تونس. توصيل في كل البلاد.",
      eyebrow: "الفئة",
      h1: "تراب زراعي",
      intro: "التراب الزراعي الجيد هو أساس حديقة تنمو جيداً: فهو يُثري التربة قبل تركيب العشب أو غرس شجرة أو حوض. يُباع بسعر 70 دينار/م³، قابل للتوصيل في كل تونس.",
      label: "التراب الزراعي",
      heroImage: "/acheter-terre-vegetale-tunisie.png",
      listH2: "متى نستعمل التراب الزراعي؟",
      list: ["قبل تركيب العشب على شكل لفائف، لإثراء تربة فقيرة", "عند غرس شجرة أو شجيرة أو نخلة", "لإنشاء أو رفع حوض زهور", "لملء وتسوية منطقة قبل التهيئة"],
      ctaHeading: "اطلبوا ترابكم الزراعي",
      ctaText: "70 دينار/م³، توصيل في كل تونس. اطلعوا على تفاصيل الكميات واطلبوا في الصفحة المخصصة.",
      ctaButton: "شاهدوا السعر واطلبوا",
      ctaMessage: "مرحباً، أود معلومات حول التراب الزراعي المتوفر لدى Green Garden.",
      ctaSecondaryPath: "/acheter-terre-vegetale/",
      ctaSecondaryLabel: "شراء التربة الزراعية",
    },
  },
  "gravier-decoratif": {
    fr: {
      title: "Gravier décoratif | Green Garden",
      metaDescription: "Gravier décoratif Green Garden pour allées, bordures et paillage minéral en Tunisie. Prix sur demande via WhatsApp.",
      eyebrow: "Catégorie",
      h1: "Gravier décoratif",
      intro: "Le gravier décoratif habille une allée, une bordure ou un massif avec un rendu propre et peu d'entretien, en complément du gazon et des plantations.",
      label: "Gravier décoratif",
      heroImage: null,
      listH2: "Utilisations courantes du gravier décoratif",
      list: ["Habiller une allée piétonne ou carrossable", "Border un massif ou une pelouse avec un rendu net", "Pailler le pied d'un arbre, d'un arbuste ou d'un palmier", "Limiter la pousse des mauvaises herbes sur une zone minérale"],
      ctaHeading: "Commandez votre gravier décoratif",
      ctaText: "Contactez-nous par WhatsApp pour connaître les couleurs disponibles et le prix selon votre projet.",
      ctaButton: "Demander un devis",
      ctaMessage: "Bonjour, je souhaite des informations sur le gravier décoratif disponible chez Green Garden.",
    },
    en: {
      title: "Decorative Gravel | Green Garden",
      metaDescription: "Green Garden decorative gravel for paths, borders and mineral mulching in Tunisia. Prices on request via WhatsApp.",
      eyebrow: "Category",
      h1: "Decorative gravel",
      intro: "Decorative gravel dresses up a path, a border or a bed with a clean, low-maintenance look, alongside lawn and plantings.",
      label: "Decorative gravel",
      heroImage: null,
      listH2: "Common uses for decorative gravel",
      list: ["Dress up a pedestrian or driveable path", "Border a bed or lawn with a neat look", "Mulch around the base of a tree, shrub or palm tree", "Limit weed growth on a mineral area"],
      ctaHeading: "Order your decorative gravel",
      ctaText: "Contact us on WhatsApp to find out the available colours and the price for your project.",
      ctaButton: "Request a quote",
      ctaMessage: "Hello, I would like information about the decorative gravel available at Green Garden.",
    },
    ar: {
      title: "حصى زخرفي | Green Garden",
      metaDescription: "حصى زخرفي من Green Garden للممرات والحواف والتغطية المعدنية في تونس. الأسعار عند الطلب عبر واتساب.",
      eyebrow: "الفئة",
      h1: "حصى زخرفي",
      intro: "يُزيّن الحصى الزخرفي ممراً أو حافة أو حوضاً بمظهر نظيف وصيانة قليلة، بالتكامل مع العشب والغراسات.",
      label: "الحصى الزخرفي",
      heroImage: null,
      listH2: "استعمالات شائعة للحصى الزخرفي",
      list: ["تزيين ممر للمشاة أو للسيارات", "تحديد حوض أو عشب بمظهر أنيق", "تغطية قاعدة شجرة أو شجيرة أو نخلة", "الحد من نمو الأعشاب الضارة في منطقة معدنية"],
      ctaHeading: "اطلبوا حصاكم الزخرفي",
      ctaText: "تواصلوا معنا عبر واتساب لمعرفة الألوان المتوفرة والسعر حسب مشروعكم.",
      ctaButton: "اطلبوا عرض سعر",
      ctaMessage: "مرحباً، أود معلومات حول الحصى الزخرفي المتوفر لدى Green Garden.",
    },
  },
};

function lightCategoryPage(key, lang) {
  const t = LIGHT_CATEGORY_TEXT[key][lang];
  const basePath = `/produits/${key}/`;
  return renderContentPage({
    basePath,
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: t.heroImage ? { src: t.heroImage, alt: t.h1 } : undefined,
    breadcrumb: [
      { label: HUB_TEXT[lang].label, path: localizedPath("/produits/", lang) },
      { label: t.label, path: localizedPath(basePath, lang) },
    ],
    sections: [
      { type: "list", h2: t.listH2, items: t.list },
      {
        type: "cta",
        heading: t.ctaHeading,
        text: t.ctaText,
        buttonLabel: t.ctaButton,
        whatsappMessage: t.ctaMessage,
        secondary: t.ctaSecondaryPath ? { label: t.ctaSecondaryLabel, path: localizedPath(t.ctaSecondaryPath, lang) } : undefined,
      },
    ],
  });
}

function build(registerPage, lang) {
  registerPage(localizedPath("/produits/", lang), hubPage(lang));
  registerPage(localizedPath("/produits/gazon/", lang), categoryPage("gazon", "/produits/gazon/", lang));
  registerPage(localizedPath("/produits/palmiers/", lang), categoryPage("palmiers", "/produits/palmiers/", lang));
  registerPage(localizedPath("/produits/plantes-interieur/", lang), plantesInterieurPage(lang));
  registerPage(localizedPath("/produits/engrais/", lang), engraisPage(lang));
  Object.keys(LIGHT_CATEGORY_TEXT).forEach((key) => {
    registerPage(localizedPath(`/produits/${key}/`, lang), lightCategoryPage(key, lang));
  });
}

module.exports = { build };
