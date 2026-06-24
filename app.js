const WHATSAPP_NUMBER = "21698226502";
const IMAGE_DIR = "Image";

const products = [
  { id: "arbre-voyageur", labels: { fr: "Arbre du voyageur", en: "Travelers Tree", ar: "شجرة المسافر" }, image: `${IMAGE_DIR}/Arbre du voyageur.jpeg` },
  { id: "cactus-oursin", labels: { fr: "Cactus oursin", en: "Sea urchin cactus", ar: "صبار القنفذ البحري" }, image: `${IMAGE_DIR}/Cactus oursin.jpeg` },
  { id: "cactus-vieillard", labels: { fr: "Cactus vieillard du Pérou", en: "Old man cactus of Peru", ar: "صبار عجوز بيرو" }, image: `${IMAGE_DIR}/Cactus vieillard du Pérou.jpeg` },
  { id: "chataignier-guyane", labels: { fr: "Châtaignier de la Guyane", en: "Guyana chestnut", ar: "كستناء غيانا" }, image: `${IMAGE_DIR}/Châtaignier de la Guyane.jpeg` },
  { id: "cintha", labels: { fr: "Cintha", en: "Cinta", ar: "سينثا" }, image: `${IMAGE_DIR}/Cintha.jpeg` },
  { id: "dragonnier-madagascar", labels: { fr: "Dragonnier de Madagascar", en: "Madagascar dragon tree", ar: "شجرة تنين مدغشقر" }, image: `${IMAGE_DIR}/Dragonnier de Madagascar.jpeg` },
  { id: "dragonnier-massange", labels: { fr: "Dragonnier de Massange", en: "Massange dragon tree", ar: "شجرة تنين ماسانج" }, image: `${IMAGE_DIR}/Dragonnier de Massange.jpeg` },
  { id: "echeveria-dionysos", labels: { fr: "Echeveria 'Dionysos'", en: "Echeveria 'Dionysos'", ar: "إشفيرية ديونيسوس" }, image: `${IMAGE_DIR}/Echeveria 'Dionysos'.jpeg` },
  { id: "faux-philodendron", labels: { fr: "Faux philodendron", en: "False philodendron", ar: "فيلوديندرون مزيف" }, image: `${IMAGE_DIR}/Faux philodendron.jpeg` },
  { id: "figuier-caoutchouc", labels: { fr: "Figuier caoutchouc", en: "Rubber fig", ar: "فيكس مطاطي" }, image: `${IMAGE_DIR}/Figuier caoutchouc.jpeg` },
  { id: "figuier-pleureur", labels: { fr: "Figuier pleureur", en: "Weeping fig", ar: "فيكس باكي" }, image: `${IMAGE_DIR}/Figuier pleureur.jpeg` },
  { id: "fleur-lune", labels: { fr: "Fleur de lune", en: "Peace lily", ar: "زنبق السلام" }, image: `${IMAGE_DIR}/Fleur de lune.jpeg` },
  { id: "gymnocalycium", labels: { fr: "Gymnocalycium baldianum", en: "Gymnocalycium baldianum", ar: "جمنوكاليسيوم بالدينوم" }, image: `${IMAGE_DIR}/Gymnocalycium baldianum.jpeg` },
  { id: "palmier-nain", labels: { fr: "Palmier nain", en: "Dwarf palm", ar: "نخيل قزم" }, image: `${IMAGE_DIR}/Palmier nain.jpeg` },
  { id: "palmier-eventail", labels: { fr: "Palmier éventail", en: "Fan palm", ar: "نخيل مروحي" }, image: `${IMAGE_DIR}/Palmier éventail.jpeg` },
  { id: "plante-mais", labels: { fr: "Plante maïs", en: "Corn plant", ar: "نبات الذرة" }, image: `${IMAGE_DIR}/Plante maïs.jpeg` },
  { id: "plante-mosaique", labels: { fr: "Plante mosaïque", en: "Mosaic plant", ar: "نبات الفسيفساء" }, image: `${IMAGE_DIR}/Plante mosaïque.jpeg` },
  { id: "plante-zebre", labels: { fr: "Plante zèbre", en: "Zebra plant", ar: "نبات الحمار الوحشي" }, image: `${IMAGE_DIR}/Plante zèbre.jpeg` },
  { id: "scindapsus-dore", labels: { fr: "Scindapsus doré", en: "Golden pothos", ar: "بوتس ذهبي" }, image: `${IMAGE_DIR}/Scindapsus doré.jpeg` },
  { id: "tricolor", labels: { fr: "Variété 'Tricolor'", en: "'Tricolor' variety", ar: "صنف ثلاثي الألوان" }, image: `${IMAGE_DIR}/variété 'Tricolor'.jpeg` },
  { id: "yucca-interieur", labels: { fr: "Yucca d'intérieur", en: "Indoor yucca", ar: "يوكا داخلية" }, image: `${IMAGE_DIR}/Yucca d'intérieur.jpeg` },
];

const translations = {
  fr: {
    productButton: "DEMANDER LE PRIX",
    emptyState: "Aucun article ne correspond à cette recherche pour le moment.",
    productMessage: (name) => `Bonjour, je souhaite avoir plus d'informations et connaître le prix pour l'article : ${name}`
  },
  en: {
    productButton: "ASK FOR PRICE",
    emptyState: "No items match this search yet.",
    productMessage: (name) => `Hello, I would like more information and the price for this item: ${name}`
  },
  ar: {
    productButton: "اطلب السعر",
    emptyState: "لا توجد عناصر مطابقة لهذا البحث حالياً.",
    productMessage: (name) => `مرحباً، أود معرفة المزيد والسعر الخاص بهذا المنتج: ${name}`
  }
};

let currentLang = "fr";
const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");

function renderProducts() {
  if (!productGrid) return;
  const search = searchInput.value.trim().toLowerCase();
  const t = translations[currentLang];
  
  const filteredProducts = products.filter((product) =>
    Object.values(product.labels).some((label) => label.toLowerCase().includes(search))
  );

  productGrid.innerHTML = filteredProducts
    .map((product) => {
      const localizedName = product.labels[currentLang] || product.labels.fr;
      return `
        <article class="product-card">
          <img src="${product.image}" alt="${localizedName}" loading="lazy" />
          <div class="product-info">
            <h3>${localizedName}</h3>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.productMessage(localizedName))}" target="_blank" class="btn-card">
              ${t.productButton}
            </a>
          </div>
        </article>
      `;
    })
    .join("");

  if (emptyState) {
    emptyState.textContent = t.emptyState;
    emptyState.style.display = filteredProducts.length > 0 ? "none" : "block";
  }
}

if (searchInput) {
  searchInput.addEventListener("input", renderProducts);
}

// Gestion basique du changement de langue (Boutons)
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    currentLang = e.target.dataset.lang;
    renderProducts();
  });
});

// Premier rendu au chargement
renderProducts();
