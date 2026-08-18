const { renderContentPage } = require("../templates/page");
const { villes } = require("../data/villes");
const { SITE } = require("../data/site");
const { localizedPath } = require("../data/i18n");
const { CITY_NAMES } = require("../data/ui-strings");

const HUB_BASE = "/livraison/";

const HUB_TEXT = {
  fr: {
    title: "Zones de livraison Green Garden | Gazon & Palmier en Tunisie",
    metaDescription:
      "Gazon naturel et palmier décoratif livrés dans toute la Tunisie. Les frais de livraison sont calculés selon votre adresse et communiqués avant confirmation.",
    eyebrow: "Livraison",
    h1: "Nos zones de livraison en Tunisie",
    intro:
      "Le gazon naturel et le palmier décoratif sont livrables partout en Tunisie. Les frais de livraison dépendent de votre adresse : indiquez-nous votre ville et nous vous communiquons le montant exact avant toute confirmation de commande.",
    label: "Livraison",
    tableH2: "Récapitulatif par zone",
    headers: ["Zone", "Gazon naturel", "Palmier décoratif"],
    rowGrandTunis: ["Grand Tunis", "Selon votre adresse", "Selon votre adresse"],
    rowNabeul: ["Nabeul", "Selon votre adresse", "Selon votre adresse"],
    rowOtherCities: ["Sousse, Monastir, Sfax, Bizerte, Gabès, Hammamet", "Sur devis", "Sur devis"],
    rowOtherGov: ["Autres gouvernorats", "Sur devis", "Sur devis"],
    citiesH2: "Villes desservies",
    freeLabel: "Livraison selon votre adresse",
    quoteLabel: "Livraison selon votre adresse",
    tableFree: "Selon votre adresse",
    otherRegionsH2: "Autres régions",
    otherRegionsLabel: "Toutes les autres régions de Tunisie",
    otherRegionsDesc: "Livraison sur devis dans tout le pays",
    gazonLabel: "Gazon Tunisie",
    gazonDesc: "Prix et détails du gazon naturel",
    palmierLabel: "Palmier Tunisie",
    palmierDesc: "Prix et détails du palmier décoratif",
    faqH2: "Questions fréquentes sur la livraison",
    faq: [
      { q: "Comment sont calculés les frais de livraison ?", a: "Les frais dépendent de votre adresse exacte et de la distance depuis notre dépôt de Nabeul, ainsi que du volume commandé. Indiquez-nous votre ville par WhatsApp : le montant vous est communiqué avant toute confirmation de commande." },
      { q: "Le palmier est-il livrable dans toute la Tunisie ?", a: "Oui, nous livrons le palmier décoratif dans tout le pays. Les frais de livraison sont déterminés selon votre adresse et communiqués avant confirmation de commande." },
    ],
  },
  en: {
    title: "Green Garden Delivery Zones | Lawn & Palm Tree in Tunisia",
    metaDescription:
      "Natural lawn and decorative palm tree delivered across Tunisia. Delivery fees are calculated for your address and confirmed before you order.",
    eyebrow: "Delivery",
    h1: "Our delivery zones in Tunisia",
    intro:
      "Natural lawn and the decorative palm tree can be delivered anywhere in Tunisia. Delivery fees depend on your address: tell us your city and we will confirm the exact amount before you place your order.",
    label: "Delivery",
    tableH2: "Summary by zone",
    headers: ["Zone", "Natural lawn", "Decorative palm tree"],
    rowGrandTunis: ["Greater Tunis", "Quoted by address", "Quoted by address"],
    rowNabeul: ["Nabeul", "Quoted by address", "Quoted by address"],
    rowOtherCities: ["Sousse, Monastir, Sfax, Bizerte, Gabes, Hammamet", "On quote", "On quote"],
    rowOtherGov: ["Other governorates", "On quote", "On quote"],
    citiesH2: "Cities we serve",
    freeLabel: "Delivery quoted by address",
    quoteLabel: "Delivery quoted by address",
    tableFree: "Quoted by address",
    otherRegionsH2: "Other regions",
    otherRegionsLabel: "All other regions of Tunisia",
    otherRegionsDesc: "Delivery on quote across the country",
    gazonLabel: "Lawn Tunisia",
    gazonDesc: "Price and details of natural lawn",
    palmierLabel: "Palm Tree Tunisia",
    palmierDesc: "Price and details of the decorative palm tree",
    faqH2: "Frequently asked questions about delivery",
    faq: [
      { q: "How are delivery fees calculated?", a: "Fees depend on your exact address and the distance from our Nabeul depot, as well as the volume ordered. Send us your city on WhatsApp: the amount is confirmed before you place your order." },
      { q: "Can the palm tree be delivered anywhere in Tunisia?", a: "Yes, we deliver the decorative palm tree across the whole country. Delivery fees are determined by your address and confirmed before you place your order." },
    ],
  },
  ar: {
    title: "مناطق توصيل Green Garden | عشب ونخيل في تونس",
    metaDescription:
      "عشب طبيعي ونخيل زينة يُوصَّلان في كل تونس. تُحتسب مصاريف التوصيل حسب عنوانكم وتُبلَّغ قبل تأكيد الطلب.",
    eyebrow: "التوصيل",
    h1: "مناطق التوصيل لدينا في تونس",
    intro:
      "يمكن توصيل العشب الطبيعي ونخيل الزينة في كل أنحاء تونس. تعتمد مصاريف التوصيل على عنوانكم: أذكروا لنا مدينتكم وسنبلغكم بالمبلغ الدقيق قبل تأكيد أي طلب.",
    label: "التوصيل",
    tableH2: "ملخص حسب المنطقة",
    headers: ["المنطقة", "العشب الطبيعي", "النخيل الزينة"],
    rowGrandTunis: ["تونس الكبرى", "حسب عنوانكم", "حسب عنوانكم"],
    rowNabeul: ["نابل", "حسب عنوانكم", "حسب عنوانكم"],
    rowOtherCities: ["سوسة، المنستير، صفاقس، بنزرت، قابس، الحمامات", "حسب الطلب", "حسب الطلب"],
    rowOtherGov: ["ولايات أخرى", "حسب الطلب", "حسب الطلب"],
    citiesH2: "المدن التي نخدمها",
    freeLabel: "توصيل حسب عنوانكم",
    quoteLabel: "توصيل حسب عنوانكم",
    tableFree: "حسب عنوانكم",
    otherRegionsH2: "مناطق أخرى",
    otherRegionsLabel: "كل المناطق الأخرى في تونس",
    otherRegionsDesc: "توصيل حسب الطلب في كل البلاد",
    gazonLabel: "عشب تونس",
    gazonDesc: "سعر وتفاصيل العشب الطبيعي",
    palmierLabel: "نخيل تونس",
    palmierDesc: "سعر وتفاصيل النخيل الزينة",
    faqH2: "أسئلة شائعة حول التوصيل",
    faq: [
      { q: "كيف تُحتسب مصاريف التوصيل؟", a: "تعتمد المصاريف على عنوانكم الدقيق والمسافة من مستودعنا بنابل، وكذلك على الكمية المطلوبة. أرسلوا لنا مدينتكم عبر واتساب: يُبلَّغ المبلغ قبل تأكيد الطلب." },
      { q: "هل النخيل قابل للتوصيل في كل تونس؟", a: "نعم، نوصل النخيل الزينة في كل البلاد. تُحدَّد مصاريف التوصيل حسب عنوانكم وتُبلَّغ قبل تأكيد الطلب." },
    ],
  },
};

function hubPage(lang) {
  const t = HUB_TEXT[lang];
  return renderContentPage({
    basePath: HUB_BASE,
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    breadcrumb: [{ label: t.label, path: localizedPath(HUB_BASE, lang) }],
    sections: [
      {
        type: "table",
        h2: t.tableH2,
        headers: t.headers,
        rows: [t.rowGrandTunis, t.rowNabeul, t.rowOtherCities, t.rowOtherGov],
      },
      {
        type: "cards",
        h2: t.citiesH2,
        cards: villes.map((v) => ({
          title: CITY_NAMES[v.slug][lang],
          text: v.gazonStatus === "free" ? t.freeLabel : t.quoteLabel,
          path: localizedPath(`/livraison/${v.slug}/`, lang),
        })),
      },
      {
        type: "related",
        h2: t.otherRegionsH2,
        links: [
          { label: t.otherRegionsLabel, path: localizedPath("/livraison/autres-regions/", lang), description: t.otherRegionsDesc },
          { label: t.gazonLabel, path: localizedPath("/gazon-tunisie/", lang), description: t.gazonDesc },
          { label: t.palmierLabel, path: localizedPath("/palmier-tunisie/", lang), description: t.palmierDesc },
        ],
      },
      { type: "faq", h2: t.faqH2, items: t.faq },
    ],
  });
}

function cityPage(ville, lang) {
  const v = ville.t[lang];
  const hubLabel = HUB_TEXT[lang].label;
  const name = CITY_NAMES[ville.slug][lang];
  return renderContentPage({
    basePath: `/livraison/${ville.slug}/`,
    lang,
    title: v.metaTitle,
    metaDescription: v.metaDescription,
    eyebrow: `${hubLabel} ${name}`,
    h1: v.h1,
    intro: v.intro,
    breadcrumb: [
      { label: hubLabel, path: localizedPath("/livraison/", lang) },
      { label: name, path: localizedPath(`/livraison/${ville.slug}/`, lang) },
    ],
    sections: [
      {
        type: "text",
        h2: v.h1,
        paragraphs: [v.useCase, `${name} — ${v.distanceNote}.`],
      },
      {
        type: "table",
        h2: HUB_TEXT[lang].tableH2,
        headers: [
          lang === "fr" ? "Produit" : lang === "en" ? "Product" : "المنتج",
          lang === "fr" ? "Prix" : lang === "en" ? "Price" : "السعر",
          lang === "fr" ? "Livraison" : lang === "en" ? "Delivery" : "التوصيل",
        ],
        rows: [
          [
            lang === "fr" ? "Gazon naturel" : lang === "en" ? "Natural lawn" : "عشب طبيعي",
            SITE.products.gazon.priceLabel,
            ville.gazonStatus === "free" ? HUB_TEXT[lang].tableFree : HUB_TEXT[lang].quoteLabel,
          ],
          [
            lang === "fr" ? "Palmier décoratif" : lang === "en" ? "Decorative palm tree" : "نخيل زينة",
            SITE.products.palmier.priceLabel,
            ville.gazonStatus === "free" ? HUB_TEXT[lang].tableFree : HUB_TEXT[lang].quoteLabel,
          ],
        ],
      },
      {
        type: "cta",
        heading: lang === "fr" ? `Commandez à ${name}` : lang === "en" ? `Order in ${name}` : `اطلبوا في ${name}`,
        text:
          lang === "fr"
            ? "Contactez-nous par WhatsApp avec votre adresse pour recevoir le détail de la livraison."
            : lang === "en"
            ? "Contact us on WhatsApp with your address to receive delivery details."
            : "تواصلوا معنا عبر واتساب مع عنوانكم لتلقي تفاصيل التوصيل.",
        buttonLabel:
          lang === "fr" ? "Commander sur WhatsApp" : lang === "en" ? "Order on WhatsApp" : "اطلبوا عبر واتساب",
        whatsappMessage:
          lang === "fr"
            ? `Bonjour, je souhaite commander du gazon et/ou un palmier, livraison à ${name}.`
            : lang === "en"
            ? `Hello, I would like to order lawn and/or a palm tree, delivery to ${name}.`
            : `مرحباً، أود طلب عشب و/أو نخلة، التوصيل إلى ${name}.`,
      },
      {
        type: "related",
        h2: lang === "fr" ? "Voir aussi" : lang === "en" ? "See also" : "شاهدوا أيضاً",
        links: [
          { label: HUB_TEXT[lang].gazonLabel, path: localizedPath("/gazon-tunisie/", lang), description: HUB_TEXT[lang].gazonDesc },
          { label: HUB_TEXT[lang].palmierLabel, path: localizedPath("/palmier-tunisie/", lang), description: HUB_TEXT[lang].palmierDesc },
          { label: HUB_TEXT[lang].h1, path: localizedPath("/livraison/", lang), description: "" },
        ],
      },
      { type: "faq", h2: `${lang === "fr" ? "Questions fréquentes -" : lang === "en" ? "Frequently asked questions -" : "أسئلة شائعة -"} ${name}`, items: v.faq },
    ],
  });
}

const AUTRES_REGIONS_TEXT = {
  fr: {
    title: "Livraison gazon & palmier dans toute la Tunisie - Green Garden",
    metaDescription:
      "Green Garden livre le gazon naturel et le palmier décoratif dans tout le reste de la Tunisie, sur devis. Contactez-nous pour connaître le tarif de livraison.",
    eyebrow: "Livraison",
    h1: "Livraison dans le reste de la Tunisie",
    intro:
      "En dehors du Grand Tunis, de Nabeul, de Sousse, Monastir, Sfax, Bizerte, Gabès et Hammamet, nous livrons également le gazon naturel et le palmier décoratif dans le reste du pays, sur devis selon la distance.",
    textH2: "Une livraison sur devis, partout en Tunisie",
    textBody:
      "Que vous soyez à Kairouan, Kasserine, Gafsa, Médenine, Tozeur, Le Kef, Siliana, Zaghouan, Béja, Jendouba, Kébili, Tataouine, Sidi Bouzid ou Mahdia, contactez-nous avec votre adresse exacte pour recevoir un tarif de livraison transparent.",
    ctaHeading: "Demandez votre devis de livraison",
    ctaText: "Indiquez votre ville et le produit souhaité (gazon naturel ou palmier décoratif) pour recevoir un tarif rapide.",
    ctaButton: "Demander un devis sur WhatsApp",
    ctaMessage: "Bonjour, je souhaite un devis de livraison pour du gazon et/ou un palmier dans ma région.",
    relatedH2: "Voir aussi",
  },
  en: {
    title: "Lawn & Palm Tree Delivery Across Tunisia - Green Garden",
    metaDescription:
      "Green Garden delivers natural lawn and decorative palm trees across the rest of Tunisia, on quote. Contact us for a delivery rate.",
    eyebrow: "Delivery",
    h1: "Delivery across the rest of Tunisia",
    intro:
      "Beyond Greater Tunis, Nabeul, Sousse, Monastir, Sfax, Bizerte, Gabes and Hammamet, we also deliver natural lawn and decorative palm trees across the rest of the country, on quote depending on distance.",
    textH2: "Delivery on quote, anywhere in Tunisia",
    textBody:
      "Whether you are in Kairouan, Kasserine, Gafsa, Medenine, Tozeur, Le Kef, Siliana, Zaghouan, Beja, Jendouba, Kebili, Tataouine, Sidi Bouzid or Mahdia, contact us with your exact address to receive a transparent delivery rate.",
    ctaHeading: "Request your delivery quote",
    ctaText: "Tell us your city and the desired product (natural lawn or decorative palm tree) to receive a quick rate.",
    ctaButton: "Request a quote on WhatsApp",
    ctaMessage: "Hello, I would like a delivery quote for lawn and/or a palm tree in my region.",
    relatedH2: "See also",
  },
  ar: {
    title: "توصيل العشب والنخيل في كل تونس - Green Garden",
    metaDescription:
      "توصل Green Garden العشب الطبيعي والنخيل الزينة في بقية تونس، حسب الطلب. تواصلوا معنا لمعرفة تعريفة التوصيل.",
    eyebrow: "التوصيل",
    h1: "التوصيل في بقية تونس",
    intro:
      "خارج تونس الكبرى ونابل وسوسة والمنستير وصفاقس وبنزرت وقابس والحمامات، نوصل أيضاً العشب الطبيعي والنخيل الزينة في بقية البلاد، حسب الطلب وحسب المسافة.",
    textH2: "توصيل حسب الطلب، في كل تونس",
    textBody:
      "سواء كنتم في القيروان أو القصرين أو قفصة أو مدنين أو توزر أو الكاف أو سليانة أو زغوان أو باجة أو جندوبة أو قبلي أو تطاوين أو سيدي بوزيد أو المهدية، تواصلوا معنا مع عنوانكم الدقيق لتلقي تعريفة توصيل شفافة.",
    ctaHeading: "اطلبوا عرض سعر التوصيل",
    ctaText: "أذكروا مدينتكم والمنتج المرغوب (عشب طبيعي أو نخيل زينة) لتلقي تعريفة سريعة.",
    ctaButton: "اطلبوا عرض سعر عبر واتساب",
    ctaMessage: "مرحباً، أود عرض سعر توصيل لعشب و/أو نخلة في جهتي.",
    relatedH2: "شاهدوا أيضاً",
  },
};

function autresRegionsPage(lang) {
  const t = AUTRES_REGIONS_TEXT[lang];
  return renderContentPage({
    basePath: "/livraison/autres-regions/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    breadcrumb: [
      { label: HUB_TEXT[lang].label, path: localizedPath("/livraison/", lang) },
      { label: t.h1, path: localizedPath("/livraison/autres-regions/", lang) },
    ],
    sections: [
      { type: "text", h2: t.textH2, paragraphs: [t.textBody] },
      { type: "cta", heading: t.ctaHeading, text: t.ctaText, buttonLabel: t.ctaButton, whatsappMessage: t.ctaMessage },
      {
        type: "related",
        h2: t.relatedH2,
        links: [
          { label: HUB_TEXT[lang].gazonLabel, path: localizedPath("/gazon-tunisie/", lang), description: HUB_TEXT[lang].gazonDesc },
          { label: HUB_TEXT[lang].palmierLabel, path: localizedPath("/palmier-tunisie/", lang), description: HUB_TEXT[lang].palmierDesc },
          { label: HUB_TEXT[lang].h1, path: localizedPath("/livraison/", lang), description: "" },
        ],
      },
    ],
  });
}

function build(registerPage, lang) {
  registerPage(localizedPath("/livraison/", lang), hubPage(lang));
  villes.forEach((ville) => registerPage(localizedPath(`/livraison/${ville.slug}/`, lang), cityPage(ville, lang)));
  registerPage(localizedPath("/livraison/autres-regions/", lang), autresRegionsPage(lang));
}

module.exports = { build };
