const WHATSAPP_NUMBER = "21698226502";
const IMAGE_DIR = ""; // Vide car les images ont été déplacées à la racine du dépôt

const products = [
  { id: "arbre-voyageur", labels: { fr: "Arbre du voyageur", en: "Travelers Tree", ar: "شجرة المسافر" }, image: "Arbre du voyageur.jpeg", width: 1200, height: 1600 },
  { id: "cactus-oursin", labels: { fr: "Cactus oursin", en: "Sea urchin cactus", ar: "صبار القنفذ البحري" }, image: "Cactus oursin.jpeg", width: 739, height: 1600 },
  { id: "cactus-vieillard", labels: { fr: "Cactus vieillard du Pérou", en: "Old man cactus of Peru", ar: "صبار عجوز بيرو" }, image: "Cactus vieillard du Pérou.jpeg", width: 739, height: 1600 },
  { id: "chataignier-guyane", labels: { fr: "Châtaignier de la Guyane", en: "Guyana chestnut", ar: "كستناء غيانا" }, image: "Châtaignier de la Guyane.jpeg", width: 739, height: 1600 },
  { id: "cintha", labels: { fr: "Cintha", en: "Cinta", ar: "سينثا" }, image: "Cintha.jpeg", width: 739, height: 1600 },
  { id: "dragonnier-madagascar", labels: { fr: "Dragonnier de Madagascar", en: "Madagascar dragon tree", ar: "شجرة تنين مدغشقر" }, image: "Dragonnier de Madagascar.jpeg", width: 739, height: 1600 },
  { id: "dragonnier-massange", labels: { fr: "Dragonnier de Massange", en: "Massange dragon tree", ar: "شجرة تنين ماسانج" }, image: "Dragonnier de Massange.jpeg", width: 739, height: 1600 },
  { id: "echeveria-dionysos", labels: { fr: "Echeveria 'Dionysos'", en: "Echeveria 'Dionysos'", ar: "إشفيرية ديونيسوس" }, image: "Echeveria 'Dionysos'.jpeg", width: 739, height: 1600 },
  { id: "faux-philodendron", labels: { fr: "Faux philodendron", en: "False philodendron", ar: "فيلوديندرون مزيف" }, image: "Faux philodendron.jpeg", width: 739, height: 1600 },
  { id: "figuier-caoutchouc", labels: { fr: "Figuier caoutchouc", en: "Rubber fig", ar: "فيكس مطاطي" }, image: "Figuier caoutchouc.jpeg", width: 739, height: 1600 },
  { id: "figuier-pleureur", labels: { fr: "Figuier pleureur", en: "Weeping fig", ar: "فيكس باكي" }, image: "Figuier pleureur.jpeg", width: 739, height: 1600 },
  { id: "fleur-lune", labels: { fr: "Fleur de lune", en: "Peace lily", ar: "زنبق السلام" }, image: "Fleur de lune.jpeg", width: 739, height: 1600 },
  { id: "gymnocalycium", labels: { fr: "Gymnocalycium baldianum", en: "Gymnocalycium baldianum", ar: "جمنوكاليسيوم بالدينوم" }, image: "Gymnocalycium baldianum.jpeg", width: 739, height: 1600 },
  { id: "palmier-nain", labels: { fr: "Palmier nain", en: "Dwarf palm", ar: "نخيل قزم" }, image: "Palmier nain.jpeg", width: 600, height: 600 },
  { id: "palmier-eventail", labels: { fr: "Palmier éventail", en: "Fan palm", ar: "نخيل مروحي" }, image: "Palmier éventail.jpeg", width: 739, height: 1600 },
  { id: "plante-mais", labels: { fr: "Plante maïs", en: "Corn plant", ar: "نبات الذرة" }, image: "Plante maïs.jpeg", width: 739, height: 1600 },
  { id: "plante-mosaique", labels: { fr: "Plante mosaïque", en: "Mosaic plant", ar: "نبات الفسيفساء" }, image: "Plante mosaïque.jpeg", width: 739, height: 1600 },
  { id: "plante-zebre", labels: { fr: "Plante zèbre", en: "Zebra plant", ar: "نبات الحمار الوحشي" }, image: "Plante zèbre.jpeg", width: 739, height: 1600 },
  { id: "scindapsus-dore", labels: { fr: "Scindapsus doré", en: "Golden pothos", ar: "بوتس ذهبي" }, image: "Scindapsus doré.jpeg", width: 739, height: 1600 },
  { id: "tricolor", labels: { fr: "Variété 'Tricolor'", en: "'Tricolor' variety", ar: "صنف ثلاثي الألوان" }, image: "variété 'Tricolor'.jpeg", width: 739, height: 1600 },
  { id: "yucca-interieur", labels: { fr: "Yucca d'intérieur", en: "Indoor yucca", ar: "يوكا داخلية" }, image: "Yucca d'intérieur.jpeg", width: 739, height: 1600 },
];

const translations = {
  fr: {
    htmlLang: "fr",
    dir: "ltr",
    brand: "Green Garden",
    navAria: "Navigation principale",
    nav: ["Accueil", "Nos plantes", "Engrais", "Gazon", "A propos"],
    heroKicker: "Jardinerie naturelle & minimaliste",
    heroTitle: "Green Garden",
    heroCopy:
      "Plantes d'interieur, engrais et gazon pour composer des espaces plus frais, plus vivants et faciles a entretenir.",
    heroCta: "Decouvrir le catalogue",
    collectionsKicker: "Collections",
    collectionsTitle: "Jungles d'interieur",
    collectionsCopy:
      "Une selection de plantes graphiques, robustes et faciles a vivre pour creer un coin vegetal apaisant.",
    careKicker: "Entretien des plantes",
    careTitle: "Des gestes simples, des plantes heureuses.",
    careLight: "Lumiere douce",
    careWater: "Arrosage maitrise",
    catalogKicker: "Nos plantes",
    catalogTitle: "Catalogue Green Garden",
    catalogCopy: "Parcourez les articles disponibles et demandez le prix directement via WhatsApp.",
    searchLabel: "Recherche",
    searchPlaceholder: "Ex: palmier, cactus, yucca...",
    emptyState: "Aucun article ne correspond a cette recherche pour le moment.",
    engraisKicker: "Nutrition vegetale",
    engraisTitle: "Engrais",
    engraisCopy: "Des solutions pour renforcer vos plantes et soutenir une croissance saine.",
    engraisCta: "Commander sur WhatsApp",
    gazonKicker: "Exterieur",
    gazonTitle: "Gazon",
    gazonCopy: "Commandez votre gazon et discutez avec nous du chantier d'installation.",
    gazonCta: "Commander le gazon",
    aboutKicker: "A propos",
    aboutTitle: "Green Garden cultive le vegetal accessible.",
    aboutCopy:
      "Notre boutique accompagne les amoureux des plantes avec des varietes decoratives, des conseils simples et une reservation rapide via WhatsApp.",
    footerLocation: "Tunisie - Jardinerie & plantes decoratives",
    productButton: "Demander le prix",
    productMessage: (name) => `Bonjour, je souhaite avoir plus d'informations et connaitre le prix pour l'article : ${name}`,
    brandAria: "Accueil Green Garden",
    footerBrand: "Green Garden",
    pageTitle: "Green Garden | Jardinerie moderne",
    metaDescription: "Green Garden - jardinerie moderne pour plantes, engrais et gazon.",
  },
  en: {
    htmlLang: "en",
    dir: "ltr",
    brand: "Green Garden",
    navAria: "Primary navigation",
    nav: ["Home", "Plants", "Fertilizer", "Lawn", "About"],
    heroKicker: "Natural & minimalist gardening",
    heroTitle: "Green Garden",
    heroCopy:
      "Indoor plants, fertilizer and lawn solutions to shape cooler, livelier spaces that are easy to maintain.",
    heroCta: "Explore the catalog",
    collectionsKicker: "Collections",
    collectionsTitle: "Indoor jungles",
    collectionsCopy:
      "A selection of graphic, resilient and easy-care plants to build a calming green corner.",
    careKicker: "Plant care",
    careTitle: "Simple gestures, happy plants.",
    careLight: "Soft light",
    careWater: "Balanced watering",
    catalogKicker: "Our plants",
    catalogTitle: "Green Garden Catalog",
    catalogCopy: "Browse available items and ask for the price directly on WhatsApp.",
    searchLabel: "Search",
    searchPlaceholder: "Ex: palm, cactus, yucca...",
    emptyState: "No items match this search yet.",
    engraisKicker: "Plant nutrition",
    engraisTitle: "Fertilizer",
    engraisCopy: "Solutions to strengthen your plants and support healthy growth.",
    engraisCta: "Order on WhatsApp",
    gazonKicker: "Outdoor",
    gazonTitle: "Lawn",
    gazonCopy: "Order your lawn and discuss the installation project with us.",
    gazonCta: "Order lawn",
    aboutKicker: "About",
    aboutTitle: "Green Garden makes plants feel accessible.",
    aboutCopy:
      "Our shop helps plant lovers with decorative varieties, simple advice and quick WhatsApp ordering.",
    footerLocation: "Tunisia - Garden center & decorative plants",
    productButton: "Ask for price",
    productMessage: (name) => `Hello, I would like more information and the price for this item: ${name}`,
    brandAria: "Green Garden home",
    footerBrand: "Green Garden",
  },
  ar: {
    htmlLang: "ar",
    dir: "rtl",
    brand: "جرين جاردن",
    navAria: "التنقل الرئيسي",
    nav: ["الرئيسية", "النباتات", "الأسمدة", "العشب", "من نحن"],
    heroKicker: "بستنة طبيعية وبسيطة",
    heroTitle: "جرين جاردن",
    heroCopy:
      "نباتات داخلية وأسمدة وحلول للعشب لتكوين مساحات أكثر انتعاشا وحيوية وأسهل في العناية.",
    heroCta: "استكشف الكتالوج",
    collectionsKicker: "المجموعات",
    collectionsTitle: "غابات داخلية",
    collectionsCopy:
      "مجموعة من النباتات الجميلة والقوية وسهلة العناية لصنع زاوية خضراء هادئة.",
    careKicker: "العناية بالنباتات",
    careTitle: "خطوات بسيطة ونباتات سعيدة.",
    careLight: "إضاءة ناعمة",
    careWater: "ري متوازن",
    catalogKicker: "نباتاتنا",
    catalogTitle: "كتالوج Green Garden",
    catalogCopy: "تصفح العناصر المتاحة واطلب السعر مباشرة عبر واتساب.",
    searchLabel: "بحث",
    searchPlaceholder: "مثال: نخلة، صبار، يوكا...",
    emptyState: "لا توجد عناصر مطابقة لهذا البحث حاليا.",
    engraisKicker: "تغذية النباتات",
    engraisTitle: "الأسمدة",
    engraisCopy: "حلول لتقوية نباتاتك ودعم نمو صحي.",
    engraisCta: "اطلب عبر واتساب",
    gazonKicker: "خارجي",
    gazonTitle: "العشب",
    gazonCopy: "اطلب العشب وتحدث معنا حول مشروع التركيب.",
    gazonCta: "اطلب العشب",
    aboutKicker: "من نحن",
    aboutTitle: "Green Garden تجعل النبات أقرب وأسهل.",
    aboutCopy:
      "متجرنا يساعد محبي النباتات على اختيار الأصناف الزخرفية مع نصائح بسيطة وطلب سريع عبر واتساب.",
    footerLocation: "قربة، تونس · مشتل ونباتات زينة",
    productButton: "اطلب السعر",
    productMessage: (name) => `مرحباً، أود معرفة المزيد والسعر الخاص بهذا المنتج: ${name}`,
    brandAria: "الصفحة الرئيسية لـ Green Garden",
    footerBrand: "جرين جاردن",
  },
};

const state = {
  lang: "fr",
};

const productGrid = document.querySelector("#productGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const languageButtons = document.querySelectorAll("[data-lang]");
const brandSpans = document.querySelectorAll(".brand span");
const footerBrandSpans = document.querySelectorAll(".footer-brand span");

const pageTitle = document.querySelector("title");
const descriptionMeta = document.querySelector('meta[name="description"]');

const i18nNodes = {
  navLinks: [...document.querySelectorAll(".main-nav a")],
  heroKicker: document.querySelector("#accueil .eyebrow"),
  heroTitle: document.querySelector("#accueil h1"),
  heroCopy: document.querySelector("#accueil .hero-copy"),
  heroCta: document.querySelector("#accueil .pill-button"),
  collectionsKicker: document.querySelector("#nouveautes .collection-card .eyebrow"),
  collectionsTitle: document.querySelector("#nouveautes .collection-card h2"),
  collectionsCopy: document.querySelector("#nouveautes .collection-card p"),
  careKicker: document.querySelector("#nouveautes .care-card .eyebrow"),
  careTitle: document.querySelector("#nouveautes .care-card h2"),
  careLabels: [...document.querySelectorAll("#nouveautes .care-list span")],
  catalogKicker: document.querySelector("#plantes .section-heading .eyebrow"),
  catalogTitle: document.querySelector("#plantes .section-heading h2"),
  catalogCopy: document.querySelector("#plantes .section-heading p"),
  searchLabel: document.querySelector(".search-field span"),
  searchInput,
  emptyState,
  engraisKicker: document.querySelector("#engrais .feature-copy .eyebrow"),
  engraisTitle: document.querySelector("#engrais .feature-copy h2"),
  engraisCopy: document.querySelector("#engrais .feature-copy p"),
  engraisCta: document.querySelector("#engrais .feature-copy a"),
  gazonKicker: document.querySelector("#gazon .feature-copy .eyebrow"),
  gazonTitle: document.querySelector("#gazon .feature-copy h2"),
  gazonCopy: document.querySelector("#gazon .feature-copy p"),
  gazonCta: document.querySelector("#gazon .feature-copy a"),
  aboutKicker: document.querySelector("#apropos .eyebrow"),
  aboutTitle: document.querySelector("#apropos h2"),
  aboutCopy: document.querySelector("#apropos p"),
  footerLocation: document.querySelector(".site-footer p"),
};

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getLanguage() {
  return translations[state.lang] || translations.fr;
}

function getLocalizedProductName(product) {
  const t = getLanguage();
  return product.labels[t.htmlLang] || product.labels.fr;
}

function renderProducts() {
  const search = searchInput.value.trim().toLowerCase();
  const t = getLanguage();
  const filteredProducts = products.filter((product) =>
    Object.values(product.labels).some((label) => label.toLowerCase().includes(search))
  );

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => {
        const localizedName = getLocalizedProductName(product);
        return `
          <article class="product-card">
            <img class="product-image" src="${product.image}" alt="${localizedName}" loading="lazy" />
            <div class="product-content">
              <h3>${localizedName}</h3>
              <a
                class="whatsapp-link"
                href="${buildWhatsAppUrl(t.productMessage(localizedName))}"
                target="_blank"
                rel="noreferrer"
              >
                ${t.productButton}
              </a>
            </div>
          </article>
        `;
      }
    )
    .join("");

  emptyState.textContent = t.emptyState;
  emptyState.hidden = filteredProducts.length > 0;
}

function applyLanguage(lang) {
  state.lang = translations[lang] ? lang : "fr";
  const t = getLanguage();

  document.documentElement.lang = t.htmlLang;
  document.documentElement.dir = t.dir;
  document.body.classList.toggle("rtl", t.dir === "rtl");
  document.title = t.pageTitle;
  if (descriptionMeta) {
    descriptionMeta.content = t.metaDescription;
  }
  mainNav.setAttribute("aria-label", t.navAria);

  brandSpans.forEach((span) => {
    span.textContent = t.brand;
  });

  footerBrandSpans.forEach((span) => {
    span.textContent = t.footerBrand;
  });

  i18nNodes.navLinks.forEach((link, index) => {
    link.textContent = t.nav[index] || link.textContent;
  });

  i18nNodes.heroKicker.textContent = t.heroKicker;
  i18nNodes.heroTitle.textContent = t.heroTitle;
  i18nNodes.heroCopy.textContent = t.heroCopy;
  i18nNodes.heroCta.textContent = t.heroCta;
  i18nNodes.collectionsKicker.textContent = t.collectionsKicker;
  i18nNodes.collectionsTitle.textContent = t.collectionsTitle;
  i18nNodes.collectionsCopy.textContent = t.collectionsCopy;
  i18nNodes.careKicker.textContent = t.careKicker;
  i18nNodes.careTitle.textContent = t.careTitle;
  i18nNodes.careLabels[0].textContent = t.careLight;
  i18nNodes.careLabels[1].textContent = t.careWater;
  i18nNodes.catalogKicker.textContent = t.catalogKicker;
  i18nNodes.catalogTitle.textContent = t.catalogTitle;
  i18nNodes.catalogCopy.textContent = t.catalogCopy;
  i18nNodes.searchLabel.textContent = t.searchLabel;
  i18nNodes.searchInput.placeholder = t.searchPlaceholder;
  i18nNodes.emptyState.textContent = t.emptyState;
  i18nNodes.engraisKicker.textContent = t.engraisKicker;
  i18nNodes.engraisTitle.textContent = t.engraisTitle;
  i18nNodes.engraisCopy.textContent = t.engraisCopy;
  i18nNodes.engraisCta.textContent = t.engraisCta;
  i18nNodes.gazonKicker.textContent = t.gazonKicker;
  i18nNodes.gazonTitle.textContent = t.gazonTitle;
  i18nNodes.gazonCopy.textContent = t.gazonCopy;
  i18nNodes.gazonCta.textContent = t.gazonCta;
  i18nNodes.aboutKicker.textContent = t.aboutKicker;
  i18nNodes.aboutTitle.textContent = t.aboutTitle;
  i18nNodes.aboutCopy.textContent = t.aboutCopy;
  i18nNodes.footerLocation.textContent = t.footerLocation;

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });

  renderProducts();
}

searchInput.addEventListener("input", renderProducts);

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("is-open");
});

mainNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    mainNav.classList.remove("is-open");
  }
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage("fr");
