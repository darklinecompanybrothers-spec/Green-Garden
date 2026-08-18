const { renderContentPage } = require("../templates/page");
const { SITE } = require("../data/site");
const { localizedPath } = require("../data/i18n");

const HERO_IMAGE = SITE.products.terreVegetale.image;

const TEXT = {
  fr: {
    title: "Terre Végétale Tunisie – 100 DT/m³ | Green Garden",
    metaDescription: "Terre végétale en Tunisie à 100 DT/m³, livraison gratuite au Grand Tunis et à Nabeul. Idéale pour gazon et plantation. Commandez sur WhatsApp.",
    eyebrow: "Terre végétale",
    h1: "Acheter de la terre végétale en Tunisie",
    heroAlt: "acheter terre végétale en Tunisie",
    intro: "Green Garden vend et livre de la terre végétale partout en Tunisie, au prix clair de 100 DT le mètre cube (m³), avec livraison gratuite dans le Grand Tunis et à Nabeul. Une base essentielle pour préparer un sol avant la pose de gazon, une plantation ou la création d'un massif.",
    breadcrumbLabel: "Acheter terre végétale",
    productDescription: "Terre végétale vendue au m³, livrable dans toute la Tunisie, pour préparer un sol avant gazon, plantation ou création de massif. Livraison gratuite dans le Grand Tunis et à Nabeul.",
    priceH2: "Le prix de la terre végétale Green Garden",
    priceText: "100 DT le mètre cube (m³), avec livraison gratuite dans le Grand Tunis et à Nabeul. Ailleurs en Tunisie, la livraison reste possible et le tarif vous est communiqué selon votre région.",
    whatH2: "Qu'est-ce que la terre végétale et pour quoi l'utiliser ?",
    whatPa: [
      "La terre végétale est la couche de terre fertile prélevée en surface, riche en matière organique. Contrairement au terreau (souvent allégé et enrichi artificiellement pour les pots), elle sert de base pour préparer un sol en pleine terre avant d'y installer du gazon, des plantations ou un aménagement.",
      "Elle est particulièrement utile avant la pose d'un gazon en rouleau sur un sol pauvre ou sableux, avant la plantation d'un arbre, d'un arbuste ou d'un palmier, ou encore pour créer ou rehausser un massif de fleurs dans un jardin tunisien.",
    ],
    quantityH2: "Quelle quantité de terre végétale commander ?",
    quantityIntro: "La quantité nécessaire dépend de la surface à couvrir et de l'épaisseur de terre souhaitée. À titre indicatif :",
    quantityHeaders: ["Épaisseur de terre", "Surface couverte par 1 m³"],
    quantityRows: [
      ["5 cm", "~20 m²"],
      ["10 cm", "~10 m²"],
      ["15 cm", "~6,7 m²"],
      ["20 cm", "~5 m²"],
    ],
    deliveryH2: "Livraison dans toute la Tunisie",
    deliveryPa: [
      "La livraison est gratuite dans le Grand Tunis et à Nabeul, les deux régions les plus proches de notre dépôt. Ailleurs en Tunisie — Sousse, Monastir, Sfax, Bizerte, Gabès, Hammamet et autres régions — la terre végétale reste livrable, avec un tarif calculé selon la distance et la quantité, communiqué avant confirmation de commande.",
    ],
    ctaHeading: "Commandez votre terre végétale",
    ctaText: "100 DT/m³, livraison gratuite au Grand Tunis et à Nabeul. Indiquez-nous la quantité souhaitée et votre ville.",
    ctaButton: "Commander sur WhatsApp",
    ctaMessage: "Bonjour, je souhaite commander de la terre végétale (100 DT/m³). Voici la quantité souhaitée : ",
    ctaSecondary: "Voir la catégorie Terre végétale",
    faqH2: "Questions fréquentes sur la terre végétale",
    faq: [
      ["Quel est le prix de la terre végétale en Tunisie ?", "La terre végétale Green Garden est vendue 100 DT le mètre cube (m³). La livraison est gratuite dans le Grand Tunis et à Nabeul ; ailleurs en Tunisie, elle est facturée sur devis selon la distance."],
      ["Y a-t-il une quantité minimum de commande ?", "Non, il n'y a pas de minimum imposé : vous commandez le volume exact dont vous avez besoin, calculé au m³."],
      ["Comment se passe la livraison ?", "Contactez-nous par WhatsApp avec votre ville et la quantité souhaitée. Si vous êtes dans le Grand Tunis ou à Nabeul, la livraison est gratuite ; ailleurs, le tarif vous est communiqué avant confirmation de commande."],
      ["Quelle différence entre terre végétale et terreau ?", "La terre végétale est une terre naturelle de pleine terre, utilisée pour préparer un sol de jardin en grande quantité. Le terreau est un substrat plus léger, souvent enrichi, conçu pour la culture en pot ou en jardinière."],
      ["La terre végétale convient-elle avant la pose de gazon ?", "Oui, elle est particulièrement recommandée sur un sol pauvre ou sableux pour enrichir la surface avant la pose d'un gazon en rouleau."],
    ],
  },
  en: {
    title: "Topsoil Tunisia – 100 DT/m³ Fast Delivery | Green Garden",
    metaDescription: "Topsoil in Tunisia at 100 DT/m³, free delivery in Greater Tunis and Nabeul. Ideal for lawn and planting. Order on WhatsApp with Green Garden.",
    eyebrow: "Topsoil",
    h1: "Buy topsoil in Tunisia",
    heroAlt: "buy topsoil in Tunisia",
    intro: "Green Garden sells and delivers topsoil across Tunisia, at the clear price of 100 DT per cubic metre (m³), with free delivery in Greater Tunis and Nabeul. An essential base for preparing soil before laying lawn, planting, or creating a flower bed.",
    breadcrumbLabel: "Buy topsoil",
    productDescription: "Topsoil sold per m³, deliverable across Tunisia, to prepare soil before lawn, planting or a flower bed. Free delivery in Greater Tunis and Nabeul.",
    priceH2: "The price of Green Garden topsoil",
    priceText: "100 DT per cubic metre (m³), with free delivery in Greater Tunis and Nabeul. Elsewhere in Tunisia delivery remains available, with a rate given for your region.",
    whatH2: "What is topsoil and what is it used for?",
    whatPa: [
      "Topsoil is the fertile surface layer of soil, rich in organic matter. Unlike potting soil (usually lighter and artificially enriched for containers), it is used as a base to prepare open ground before installing lawn, plantings or landscaping.",
      "It is especially useful before laying rolled lawn on poor or sandy soil, before planting a tree, shrub or palm tree, or to create or raise a flower bed in a Tunisian garden.",
    ],
    quantityH2: "How much topsoil should you order?",
    quantityIntro: "The quantity needed depends on the area to cover and the desired soil depth. As a guide:",
    quantityHeaders: ["Soil depth", "Area covered by 1 m³"],
    quantityRows: [
      ["5 cm", "~20 sqm"],
      ["10 cm", "~10 sqm"],
      ["15 cm", "~6.7 sqm"],
      ["20 cm", "~5 sqm"],
    ],
    deliveryH2: "Delivery across Tunisia",
    deliveryPa: [
      "Delivery is free in Greater Tunis and Nabeul, the two regions closest to our depot. Elsewhere in Tunisia — Sousse, Monastir, Sfax, Bizerte, Gabes, Hammamet and other regions — topsoil remains deliverable, with a rate based on distance and quantity, given before you confirm your order.",
    ],
    ctaHeading: "Order your topsoil",
    ctaText: "100 DT/m³, free delivery in Greater Tunis and Nabeul. Tell us the quantity you need and your city.",
    ctaButton: "Order on WhatsApp",
    ctaMessage: "Hello, I would like to order topsoil (100 DT/m³). Here is the quantity I need: ",
    ctaSecondary: "See the Topsoil category",
    faqH2: "Frequently asked questions about topsoil",
    faq: [
      ["What is the price of topsoil in Tunisia?", "Green Garden topsoil is sold at 100 DT per cubic metre (m³). Delivery is free in Greater Tunis and Nabeul; elsewhere in Tunisia it is charged on quote based on distance."],
      ["Is there a minimum order quantity?", "No, there is no imposed minimum: you order the exact volume you need, calculated per m³."],
      ["How does delivery work?", "Contact us on WhatsApp with your city and the quantity needed. If you are in Greater Tunis or Nabeul, delivery is free; elsewhere, the rate is given before you confirm your order."],
      ["What is the difference between topsoil and potting soil?", "Topsoil is natural open-ground soil, used to prepare a garden's soil in large quantities. Potting soil is a lighter, often enriched substrate designed for growing in pots or planters."],
      ["Is topsoil suitable before laying lawn?", "Yes, it is especially recommended on poor or sandy soil to enrich the surface before laying rolled lawn."],
    ],
  },
  ar: {
    title: "شراء التربة الزراعية تونس – 100 دينار/م³ | Green Garden",
    metaDescription: "تربة زراعية في تونس بسعر 100 دينار/م³، توصيل مجاني في تونس الكبرى ونابل. مثالية للعشب والغراسة. اطلبوا عبر واتساب مع Green Garden.",
    eyebrow: "التربة الزراعية",
    h1: "شراء التربة في تونس",
    heroAlt: "شراء التربة في تونس",
    intro: "تبيع Green Garden وتوصل التربة الزراعية في كل تونس، بسعر واضح قدره 100 دينار للمتر المكعب (م³)، مع توصيل مجاني في تونس الكبرى ونابل. أساس ضروري لتحضير التربة قبل تركيب العشب أو الغراسة أو إنشاء حوض زهور.",
    breadcrumbLabel: "شراء التربة الزراعية",
    productDescription: "تربة زراعية تُباع بالمتر المكعب، قابلة للتوصيل في كل تونس، لتحضير التربة قبل العشب أو الغراسة أو إنشاء حوض. توصيل مجاني في تونس الكبرى ونابل.",
    priceH2: "سعر التربة الزراعية من Green Garden",
    priceText: "100 دينار للمتر المكعب (م³)، مع توصيل مجاني في تونس الكبرى ونابل. في بقية تونس يبقى التوصيل متاحاً، وتُبلَّغ التعريفة حسب جهتكم.",
    whatH2: "ما هي التربة الزراعية ولماذا نستعملها؟",
    whatPa: [
      "التربة الزراعية هي الطبقة السطحية الخصبة من التربة، الغنية بالمواد العضوية. على عكس التراب الجاهز (الأخف وزناً والمُثرى صناعياً للأصص عادة)، تُستعمل كأساس لتحضير تربة مفتوحة قبل تركيب العشب أو الغراسة أو التهيئة.",
      "تُعد مفيدة بشكل خاص قبل تركيب العشب على شكل لفائف على تربة فقيرة أو رملية، أو قبل غرس شجرة أو شجيرة أو نخلة، أو لإنشاء أو رفع حوض زهور في حديقة تونسية.",
    ],
    quantityH2: "ما هي كمية التربة الزراعية الواجب طلبها؟",
    quantityIntro: "تعتمد الكمية اللازمة على المساحة الواجب تغطيتها وسمك التربة المرغوب. على سبيل التوضيح:",
    quantityHeaders: ["سمك التربة", "المساحة المُغطاة بـ 1 م³"],
    quantityRows: [
      ["5 سم", "~20 م²"],
      ["10 سم", "~10 م²"],
      ["15 سم", "~6.7 م²"],
      ["20 سم", "~5 م²"],
    ],
    deliveryH2: "توصيل في كل تونس",
    deliveryPa: [
      "التوصيل مجاني في تونس الكبرى ونابل، وهما أقرب جهتين من مستودعنا. في بقية تونس — سوسة، المنستير، صفاقس، بنزرت، قابس، الحمامات وجهات أخرى — تبقى التربة الزراعية قابلة للتوصيل، بتعريفة تُحسب حسب المسافة والكمية وتُبلَّغ قبل تأكيد الطلب.",
    ],
    ctaHeading: "اطلبوا ترابكم الزراعي",
    ctaText: "100 دينار/م³، توصيل مجاني في تونس الكبرى ونابل. أذكروا لنا الكمية المرغوبة ومدينتكم.",
    ctaButton: "اطلبوا عبر واتساب",
    ctaMessage: "مرحباً، أود طلب تربة زراعية (100 دينار/م³). إليكم الكمية المرغوبة: ",
    ctaSecondary: "شاهدوا فئة التربة الزراعية",
    faqH2: "أسئلة شائعة حول التربة الزراعية",
    faq: [
      ["ما هو سعر التربة الزراعية في تونس؟", "تُباع تربة Green Garden الزراعية بسعر 100 دينار للمتر المكعب (م³). التوصيل مجاني في تونس الكبرى ونابل؛ في بقية تونس يُحتسب حسب الطلب وحسب المسافة."],
      ["هل توجد كمية دنيا للطلب؟", "لا، لا يوجد حد أدنى مفروض: تطلبون الحجم الدقيق الذي تحتاجونه، محسوباً بالمتر المكعب."],
      ["كيف يتم التوصيل؟", "تواصلوا معنا عبر واتساب مع مدينتكم والكمية المرغوبة. إذا كنتم في تونس الكبرى أو نابل، فالتوصيل مجاني؛ في بقية الجهات، تُبلَّغ التعريفة قبل تأكيد الطلب."],
      ["ما الفرق بين التربة الزراعية والتراب الجاهز؟", "التربة الزراعية تربة طبيعية من الأرض المفتوحة، تُستعمل لتحضير تربة الحديقة بكميات كبيرة. أما التراب الجاهز فهو ركيزة أخف وزناً ومُثراة غالباً، مصممة للزراعة في أصص أو صناديق."],
      ["هل تناسب التربة الزراعية قبل تركيب العشب؟", "نعم، يُنصح بها بشكل خاص على تربة فقيرة أو رملية لإثراء السطح قبل تركيب العشب على شكل لفائف."],
    ],
  },
};

function acheterTerreVegetalePage(lang) {
  const t = TEXT[lang];
  return renderContentPage({
    basePath: "/acheter-terre-vegetale/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: HERO_IMAGE, alt: t.heroAlt },
    breadcrumb: [{ label: t.breadcrumbLabel, path: localizedPath("/acheter-terre-vegetale/", lang) }],
    product: {
      key: "terre-vegetale",
      name: SITE.products.terreVegetale.name,
      price: SITE.products.terreVegetale.price,
      currency: SITE.products.terreVegetale.currency,
      unit: SITE.products.terreVegetale.unit,
      description: t.productDescription,
      image: SITE.products.terreVegetale.image,
    },
    sections: [
      { type: "text", h2: t.priceH2, paragraphs: [t.priceText] },
      { type: "text", h2: t.whatH2, paragraphs: t.whatPa },
      { type: "table", h2: t.quantityH2, headers: t.quantityHeaders, rows: t.quantityRows },
      { type: "text", h2: t.deliveryH2, paragraphs: t.deliveryPa },
      {
        type: "cta",
        heading: t.ctaHeading,
        text: t.ctaText,
        buttonLabel: t.ctaButton,
        whatsappMessage: t.ctaMessage,
        secondary: { label: t.ctaSecondary, path: localizedPath("/produits/terre-vegetale/", lang) },
      },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function build(registerPage, lang) {
  registerPage(localizedPath("/acheter-terre-vegetale/", lang), acheterTerreVegetalePage(lang));
}

module.exports = { build };
