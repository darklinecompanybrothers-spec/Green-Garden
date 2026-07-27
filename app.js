// Catalogue interactif de plantes d'intérieur (recherche + commande WhatsApp).
// La langue de la page est fixée côté serveur (voir window.GG_LANG, défini par
// un <script> inline sur chaque variante /,/en/,/ar/ de la page d'accueil) :
// tout le reste du contenu de la page est déjà traduit dans le HTML généré.
const WHATSAPP_NUMBER = "21658233020";

const products = [
  { id: "arbre-voyageur", labels: { fr: "Arbre du voyageur", en: "Travelers Tree", ar: "شجرة المسافر" }, image: "Arbre du voyageur.jpeg" },
  { id: "cactus-oursin", labels: { fr: "Cactus oursin", en: "Sea urchin cactus", ar: "صبار القنفذ البحري" }, image: "Cactus oursin.jpeg" },
  { id: "cactus-vieillard", labels: { fr: "Cactus vieillard du Pérou", en: "Old man cactus of Peru", ar: "صبار عجوز بيرو" }, image: "Cactus vieillard du Pérou.jpeg" },
  { id: "chataignier-guyane", labels: { fr: "Châtaignier de la Guyane", en: "Guyana chestnut", ar: "كستناء غيانا" }, image: "Châtaignier de la Guyane.jpeg" },
  { id: "cintha", labels: { fr: "Cintha", en: "Cinta", ar: "سينثا" }, image: "Cintha.jpeg" },
  { id: "dragonnier-madagascar", labels: { fr: "Dragonnier de Madagascar", en: "Madagascar dragon tree", ar: "شجرة تنين مدغشقر" }, image: "Dragonnier de Madagascar.jpeg" },
  { id: "dragonnier-massange", labels: { fr: "Dragonnier de Massange", en: "Massange dragon tree", ar: "شجرة تنين ماسانج" }, image: "Dragonnier de Massange.jpeg" },
  { id: "echeveria-dionysos", labels: { fr: "Echeveria 'Dionysos'", en: "Echeveria 'Dionysos'", ar: "إشفيرية ديونيسوس" }, image: "Echeveria 'Dionysos'.jpeg" },
  { id: "faux-philodendron", labels: { fr: "Faux philodendron", en: "False philodendron", ar: "فيلوديندرون مزيف" }, image: "Faux philodendron.jpeg" },
  { id: "figuier-caoutchouc", labels: { fr: "Figuier caoutchouc", en: "Rubber fig", ar: "فيكس مطاطي" }, image: "Figuier caoutchouc.jpeg" },
  { id: "figuier-pleureur", labels: { fr: "Figuier pleureur", en: "Weeping fig", ar: "فيكس باكي" }, image: "Figuier pleureur.jpeg" },
  { id: "fleur-lune", labels: { fr: "Fleur de lune", en: "Peace lily", ar: "زنبق السلام" }, image: "Fleur de lune.jpeg" },
  { id: "gymnocalycium", labels: { fr: "Gymnocalycium baldianum", en: "Gymnocalycium baldianum", ar: "جمنوكاليسيوم بالدينوم" }, image: "Gymnocalycium baldianum.jpeg" },
  { id: "palmier-nain", labels: { fr: "Palmier nain", en: "Dwarf palm", ar: "نخيل قزم" }, image: "Palmier nain.jpeg" },
  { id: "palmier-eventail", labels: { fr: "Palmier éventail", en: "Fan palm", ar: "نخيل مروحي" }, image: "Palmier éventail.jpeg" },
  { id: "plante-mais", labels: { fr: "Plante maïs", en: "Corn plant", ar: "نبات الذرة" }, image: "Plante maïs.jpeg" },
  { id: "plante-mosaique", labels: { fr: "Plante mosaïque", en: "Mosaic plant", ar: "نبات الفسيفساء" }, image: "Plante mosaïque.jpeg" },
  { id: "plante-zebre", labels: { fr: "Plante zèbre", en: "Zebra plant", ar: "نبات الحمار الوحشي" }, image: "Plante zèbre.jpeg" },
  { id: "scindapsus-dore", labels: { fr: "Scindapsus doré", en: "Golden pothos", ar: "بوتس ذهبي" }, image: "Scindapsus doré.jpeg" },
  { id: "tricolor", labels: { fr: "Variété 'Tricolor'", en: "'Tricolor' variety", ar: "صنف ثلاثي الألوان" }, image: "variété 'Tricolor'.jpeg" },
  { id: "yucca-interieur", labels: { fr: "Yucca d'intérieur", en: "Indoor yucca", ar: "يوكا داخلية" }, image: "Yucca d'intérieur.jpeg" },
];

const catalogText = {
  fr: {
    productButton: "Demander le prix",
    productMessage: (name) => `Bonjour, je souhaite avoir plus d'informations et connaitre le prix pour l'article : ${name}`,
  },
  en: {
    productButton: "Ask for price",
    productMessage: (name) => `Hello, I would like more information and the price for this item: ${name}`,
  },
  ar: {
    productButton: "اطلب السعر",
    productMessage: (name) => `مرحباً، أود معرفة المزيد والسعر الخاص بهذا المنتج: ${name}`,
  },
};

const lang = catalogText[window.GG_LANG] ? window.GG_LANG : "fr";
const t = catalogText[lang];

const productGrid = document.querySelector("#productGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getLocalizedProductName(product) {
  return product.labels[lang] || product.labels.fr;
}

function renderProducts() {
  const search = searchInput.value.trim().toLowerCase();
  const filteredProducts = products.filter((product) =>
    Object.values(product.labels).some((label) => label.toLowerCase().includes(search))
  );

  productGrid.innerHTML = filteredProducts
    .map((product) => {
      const localizedName = getLocalizedProductName(product);
      return `
        <article class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${localizedName}" loading="lazy" />
          </div>
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
    })
    .join("");

  emptyState.hidden = filteredProducts.length > 0;
}

searchInput.addEventListener("input", renderProducts);

renderProducts();
