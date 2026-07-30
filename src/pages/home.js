const { renderPage } = require("../templates/layout");
const { renderCards } = require("../templates/components");
const { SITE } = require("../data/site");
const { localizedPath } = require("../data/i18n");

const HOME_TEXT = {
  fr: {
    title: "Green Garden | Gazon naturel & Palmiers en Tunisie",
    description: "Gazon naturel 9 DT/m² (livraison gratuite Grand Tunis & Nabeul) et palmiers décoratifs 275 DT en Tunisie. Plantes d'intérieur et engrais.",
    heroEyebrow: "Votre jardinerie en Tunisie",
    heroTitle: "Bienvenue chez Green Garden",
    heroCopy: "Green Garden cultive des espaces extérieurs plus verts et plus vivants : gazon naturel en rouleau, palmiers décoratifs, plantes d'intérieur et engrais, livrés partout en Tunisie avec des conseils personnalisés à chaque commande.",
    heroImgAlt: "Jardinerie Green Garden en Tunisie",
    ctaPrimary: "Découvrir nos produits",
    ctaSecondary: "Nous contacter",
    flagshipH2: "Nos deux produits phares",
    flagshipIntro: "Deux références conçues pour transformer un extérieur tunisien rapidement : le gazon naturel en rouleau et le palmier décoratif.",
    flagshipCards: [
      [`Gazon naturel — ${SITE.products.gazon.priceLabel}`, "Livraison gratuite dans le Grand Tunis et à Nabeul. Pose rapide, rendu immédiat.", "/gazon-tunisie/", "/gazon.jpg"],
      [`Palmier décoratif — ${SITE.products.palmier.priceLabel}`, "Livraison gratuite dans le Grand Tunis et à Nabeul, sur devis ailleurs.", "/palmier-tunisie/", "/Palmier éventail.jpeg"],
      ["Plantes d'intérieur", "Une sélection de plantes décoratives robustes et faciles à vivre.", "#plantes", "/Faux philodendron.jpeg"],
      ["Engrais", "Des solutions pour renforcer vos plantes et soutenir une croissance saine.", "/produits/engrais/", "/engrais bio-organique.jpeg"],
    ],
    collectionsKicker: "Collections",
    collectionsTitle: "Jungles d'intérieur",
    collectionsCopy: "Une sélection de plantes graphiques, robustes et faciles à vivre pour créer un coin végétal apaisant dans votre intérieur tunisien.",
    careKicker: "Entretien des plantes",
    careTitle: "Des gestes simples, des plantes heureuses.",
    careLight: "Lumière douce",
    careWater: "Arrosage maîtrisé",
    catalogKicker: "Nos plantes",
    catalogTitle: "Catalogue Green Garden",
    catalogCopy: "Parcourez les articles disponibles et demandez le prix directement via WhatsApp.",
    searchLabel: "Recherche",
    searchPlaceholder: "Ex: palmier, cactus, yucca...",
    emptyState: "Aucun article ne correspond a cette recherche pour le moment.",
    engraisKicker: "Nutrition végétale",
    engraisTitle: "Engrais",
    engraisCopy: "Des solutions pour renforcer vos plantes et soutenir une croissance saine.",
    engraisWhatsapp: "Commander de l'engrais",
    engraisCtaLabel: "Commander sur WhatsApp",
    engraisLink: "Voir la page engrais",
    gazonKicker: "Extérieur",
    gazonTitle: "Gazon naturel Tunisie",
    gazonCopy: "Gazon naturel en rouleau à 9 DT/m², livraison gratuite dans le Grand Tunis et à Nabeul.",
    gazonCta: "Découvrir le gazon",
    palmierKicker: "Extérieur",
    palmierTitle: "Palmier décoratif Tunisie",
    palmierCopy: "Palmier décoratif à 275 DT, livraison gratuite dans le Grand Tunis et à Nabeul, sur devis ailleurs en Tunisie.",
    palmierCta: "Découvrir les palmiers",
    deliveryH2: "Livraison partout en Tunisie",
    deliveryIntro: "Gazon livré gratuitement dans le Grand Tunis et à Nabeul, palmier livrable dans toute la Tunisie sur devis.",
    deliveryCards: [
      ["Grand Tunis", "Gazon et palmier livrés gratuitement.", "/livraison/grand-tunis/", "/123699.jpeg"],
      ["Nabeul", "Gazon et palmier livrés gratuitement.", "/livraison/nabeul/", "/gazon.jpg"],
      ["Sousse, Sfax, Monastir...", "Livraison sur devis dans toute la Tunisie.", "/livraison/", "/Palmier éventail.jpeg"],
    ],
    blogH2: "Conseils de jardinage",
    blogIntro: "Nos derniers articles pour réussir votre gazon, vos palmiers et votre jardin.",
    blogCards: [
      ["Comment poser du gazon en rouleau", "Le guide étape par étape pour une pose réussie.", "/blog/comment-poser-gazon-en-rouleau/", "/gazon.jpg"],
      ["Quel palmier choisir en Tunisie", "Les variétés les mieux adaptées au climat tunisien.", "/blog/quel-palmier-choisir-tunisie/", "/Palmier éventail.jpeg"],
      ["Prix du gazon en Tunisie", "Comment le prix au m² est calculé et à quoi s'attendre.", "/blog/prix-gazon-tunisie-m2/", "/123699.jpeg"],
    ],
    blogSeeAll: "Voir tous les articles du blog",
    aboutKicker: "À propos",
    aboutTitle: "Green Garden cultive le végétal accessible.",
    aboutCopy: "Notre boutique accompagne les amoureux des plantes avec des variétés décoratives, des conseils simples et une réservation rapide via WhatsApp.",
    aboutLink1: "En savoir plus sur Green Garden",
    aboutLink2: "Pourquoi nous choisir",
  },
  en: {
    title: "Green Garden | Natural Lawn & Palm Trees in Tunisia",
    description: "Natural lawn 9 DT/sqm (free delivery Greater Tunis & Nabeul) and decorative palm trees 275 DT in Tunisia. Indoor plants and fertilizer.",
    heroEyebrow: "Your garden center in Tunisia",
    heroTitle: "Welcome to Green Garden",
    heroCopy: "Green Garden grows greener, livelier outdoor spaces: natural rolled lawn, decorative palm trees, indoor plants and fertilizer, delivered across Tunisia with personal advice on every order.",
    heroImgAlt: "Green Garden garden center in Tunisia",
    ctaPrimary: "Discover our products",
    ctaSecondary: "Contact us",
    flagshipH2: "Our two flagship products",
    flagshipIntro: "Two references designed to transform a Tunisian outdoor space quickly: natural rolled lawn and the decorative palm tree.",
    flagshipCards: [
      [`Natural lawn — ${SITE.products.gazon.priceLabel}`, "Free delivery in Greater Tunis and Nabeul. Fast laying, instant result.", "/gazon-tunisie/", "/gazon.jpg"],
      [`Decorative palm tree — ${SITE.products.palmier.priceLabel}`, "Free delivery in Greater Tunis and Nabeul, on quote elsewhere.", "/palmier-tunisie/", "/Palmier éventail.jpeg"],
      ["Indoor plants", "A selection of sturdy, easy-care decorative plants.", "#plantes", "/Faux philodendron.jpeg"],
      ["Fertilizer", "Solutions to strengthen your plants and support healthy growth.", "/produits/engrais/", "/engrais bio-organique.jpeg"],
    ],
    collectionsKicker: "Collections",
    collectionsTitle: "Indoor jungles",
    collectionsCopy: "A selection of graphic, sturdy and easy-care plants to create a soothing green corner in your Tunisian home.",
    careKicker: "Plant care",
    careTitle: "Simple gestures, happy plants.",
    careLight: "Soft light",
    careWater: "Balanced watering",
    catalogKicker: "Our plants",
    catalogTitle: "Green Garden Catalog",
    catalogCopy: "Browse available items and ask for the price directly on WhatsApp.",
    searchLabel: "Search",
    searchPlaceholder: "E.g.: palm, cactus, yucca...",
    emptyState: "No items match this search yet.",
    engraisKicker: "Plant nutrition",
    engraisTitle: "Fertilizer",
    engraisCopy: "Solutions to strengthen your plants and support healthy growth.",
    engraisWhatsapp: "Order fertilizer",
    engraisCtaLabel: "Order on WhatsApp",
    engraisLink: "See the fertilizer page",
    gazonKicker: "Outdoor",
    gazonTitle: "Natural Lawn Tunisia",
    gazonCopy: "Natural rolled lawn at 9 DT/sqm, free delivery in Greater Tunis and Nabeul.",
    gazonCta: "Discover our lawn",
    palmierKicker: "Outdoor",
    palmierTitle: "Decorative Palm Tree Tunisia",
    palmierCopy: "Decorative palm tree at 275 DT, free delivery in Greater Tunis and Nabeul, on quote elsewhere in Tunisia.",
    palmierCta: "Discover our palm trees",
    deliveryH2: "Delivery across Tunisia",
    deliveryIntro: "Lawn delivered free in Greater Tunis and Nabeul, palm tree deliverable across Tunisia on quote.",
    deliveryCards: [
      ["Greater Tunis", "Lawn and palm tree delivered free.", "/livraison/grand-tunis/", "/123699.jpeg"],
      ["Nabeul", "Lawn and palm tree delivered free.", "/livraison/nabeul/", "/gazon.jpg"],
      ["Sousse, Sfax, Monastir...", "Delivery on quote across Tunisia.", "/livraison/", "/Palmier éventail.jpeg"],
    ],
    blogH2: "Gardening advice",
    blogIntro: "Our latest articles to help your lawn, palm trees and garden thrive.",
    blogCards: [
      ["How to lay rolled lawn", "The step-by-step guide for a successful laying.", "/blog/comment-poser-gazon-en-rouleau/", "/gazon.jpg"],
      ["Which palm tree to choose in Tunisia", "The varieties best suited to the Tunisian climate.", "/blog/quel-palmier-choisir-tunisie/", "/Palmier éventail.jpeg"],
      ["Lawn prices in Tunisia", "How the price per sqm is calculated and what to expect.", "/blog/prix-gazon-tunisie-m2/", "/123699.jpeg"],
    ],
    blogSeeAll: "See all blog articles",
    aboutKicker: "About",
    aboutTitle: "Green Garden makes plants accessible.",
    aboutCopy: "Our shop supports plant lovers with decorative varieties, simple advice and quick booking via WhatsApp.",
    aboutLink1: "Learn more about Green Garden",
    aboutLink2: "Why choose us",
  },
  ar: {
    title: "Green Garden | عشب طبيعي ونخيل في تونس",
    description: "عشب طبيعي بسعر 9 دينار/م² (توصيل مجاني في تونس الكبرى ونابل) ونخيل زينة بسعر 275 دينار في تونس. نباتات داخلية وأسمدة.",
    heroEyebrow: "مشتلكم في تونس",
    heroTitle: "مرحباً بكم في Green Garden",
    heroCopy: "تصنع Green Garden مساحات خارجية أكثر خضرة وحيوية: عشب طبيعي على شكل لفائف، نخيل زينة، نباتات داخلية وأسمدة، تُوصَّل في كل أنحاء تونس مع نصائح شخصية مع كل طلبية.",
    heroImgAlt: "مشتل Green Garden في تونس",
    ctaPrimary: "اكتشفوا منتجاتنا",
    ctaSecondary: "تواصلوا معنا",
    flagshipH2: "منتجانا الرئيسيان",
    flagshipIntro: "مرجعان مصممان لتحويل مساحة خارجية تونسية بسرعة: العشب الطبيعي على شكل لفائف ونخيل الزينة.",
    flagshipCards: [
      [`عشب طبيعي — ${SITE.products.gazon.priceLabel}`, "توصيل مجاني في تونس الكبرى ونابل. تركيب سريع، نتيجة فورية.", "/gazon-tunisie/", "/gazon.jpg"],
      [`نخيل زينة — ${SITE.products.palmier.priceLabel}`, "توصيل مجاني في تونس الكبرى ونابل، حسب الطلب في بقية تونس.", "/palmier-tunisie/", "/Palmier éventail.jpeg"],
      ["نباتات داخلية", "مجموعة من النباتات الزخرفية القوية وسهلة العناية.", "#plantes", "/Faux philodendron.jpeg"],
      ["أسمدة", "حلول لتقوية نباتاتكم ودعم نمو صحي.", "/produits/engrais/", "/engrais bio-organique.jpeg"],
    ],
    collectionsKicker: "المجموعات",
    collectionsTitle: "غابات داخلية",
    collectionsCopy: "مجموعة من النباتات الجميلة والقوية وسهلة العناية لصنع زاوية خضراء هادئة في منزلكم التونسي.",
    careKicker: "العناية بالنباتات",
    careTitle: "خطوات بسيطة ونباتات سعيدة.",
    careLight: "إضاءة ناعمة",
    careWater: "ري متوازن",
    catalogKicker: "نباتاتنا",
    catalogTitle: "كتالوج Green Garden",
    catalogCopy: "تصفحوا العناصر المتاحة واطلبوا السعر مباشرة عبر واتساب.",
    searchLabel: "بحث",
    searchPlaceholder: "مثال: نخلة، صبار، يوكا...",
    emptyState: "لا توجد عناصر مطابقة لهذا البحث حالياً.",
    engraisKicker: "تغذية النباتات",
    engraisTitle: "أسمدة",
    engraisCopy: "حلول لتقوية نباتاتكم ودعم نمو صحي.",
    engraisWhatsapp: "طلب سماد",
    engraisCtaLabel: "اطلبوا عبر واتساب",
    engraisLink: "شاهدوا صفحة الأسمدة",
    gazonKicker: "خارجي",
    gazonTitle: "عشب طبيعي تونس",
    gazonCopy: "عشب طبيعي على شكل لفائف بسعر 9 دينار/م²، توصيل مجاني في تونس الكبرى ونابل.",
    gazonCta: "اكتشفوا العشب",
    palmierKicker: "خارجي",
    palmierTitle: "نخيل زينة تونس",
    palmierCopy: "نخلة زينة بسعر 275 دينار، توصيل مجاني في تونس الكبرى ونابل، حسب الطلب في بقية تونس.",
    palmierCta: "اكتشفوا النخيل",
    deliveryH2: "توصيل في كل أنحاء تونس",
    deliveryIntro: "عشب يُوصَّل مجاناً في تونس الكبرى ونابل، نخيل قابل للتوصيل في كل تونس حسب الطلب.",
    deliveryCards: [
      ["تونس الكبرى", "عشب ونخلة يُوصَّلان مجاناً.", "/livraison/grand-tunis/", "/123699.jpeg"],
      ["نابل", "عشب ونخلة يُوصَّلان مجاناً.", "/livraison/nabeul/", "/gazon.jpg"],
      ["سوسة، صفاقس، المنستير...", "توصيل حسب الطلب في كل تونس.", "/livraison/", "/Palmier éventail.jpeg"],
    ],
    blogH2: "نصائح البستنة",
    blogIntro: "أحدث مقالاتنا لإنجاح عشبكم ونخيلكم وحديقتكم.",
    blogCards: [
      ["كيف تركبون العشب على شكل لفائف", "الدليل خطوة بخطوة لتركيب ناجح.", "/blog/comment-poser-gazon-en-rouleau/", "/gazon.jpg"],
      ["أي نخلة تختارون في تونس", "الأصناف الأكثر ملاءمة للمناخ التونسي.", "/blog/quel-palmier-choisir-tunisie/", "/Palmier éventail.jpeg"],
      ["سعر العشب في تونس", "كيف يُحسب السعر بالمتر المربع وما يجب توقعه.", "/blog/prix-gazon-tunisie-m2/", "/123699.jpeg"],
    ],
    blogSeeAll: "شاهدوا كل مقالات المدونة",
    aboutKicker: "من نحن",
    aboutTitle: "Green Garden تجعل النبات في متناول الجميع.",
    aboutCopy: "متجرنا يرافق محبي النباتات بأصناف زخرفية ونصائح بسيطة وحجز سريع عبر واتساب.",
    aboutLink1: "اعرفوا المزيد عن Green Garden",
    aboutLink2: "لماذا تختاروننا",
  },
};

function renderHome(lang) {
  const t = HOME_TEXT[lang];
  const p = (path) => localizedPath(path, lang);

  const bodyHtml = `
    <section id="accueil" class="hero hero-with-image section-shell">
      <div class="hero-content">
        <p class="eyebrow">${t.heroEyebrow}</p>
        <h1>${t.heroTitle}</h1>
        <p class="hero-copy">${t.heroCopy}</p>
        <div class="hero-actions">
          <a class="pill-button" href="${p("/produits/")}">${t.ctaPrimary}</a>
          <a class="pill-button pill-button-ghost" href="${p("/contact/")}">${t.ctaSecondary}</a>
        </div>
      </div>
      <div class="hero-media">
        <img src="/123699.jpeg" alt="${t.heroImgAlt}" loading="lazy" />
      </div>
    </section>

    <section id="produits-phares" class="section-shell">
      ${renderCards({
        h2: t.flagshipH2,
        intro: t.flagshipIntro,
        cards: t.flagshipCards.map(([title, text, path, image]) => ({
          title,
          text,
          path: path.startsWith("#") ? path : p(path),
          image,
        })),
      })}
    </section>

    <section id="nouveautes" class="organic-grid section-shell">
      <article class="collection-card">
        <span class="eyebrow">${t.collectionsKicker}</span>
        <h2>${t.collectionsTitle}</h2>
        <p>${t.collectionsCopy}</p>
        <div class="petal-stack" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </article>

      <div class="floating-leaf" aria-hidden="true">
        <svg viewBox="0 0 120 160" role="img">
          <path d="M103 8C49 18 13 55 15 103c1 28 22 48 47 45 38-4 56-50 41-140Z" />
          <path d="M62 143C63 88 75 48 103 8" />
        </svg>
      </div>

      <article class="care-card">
        <span class="eyebrow">${t.careKicker}</span>
        <h2>${t.careTitle}</h2>
        <div class="care-list">
          <div>
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M22 25h20l-4 28H26L22 25Z" />
              <path d="M18 25h28" />
              <path d="M32 25c-9-5-10-13-4-18 6 5 8 12 4 18Z" />
              <path d="M34 24c3-9 10-12 17-9-2 8-8 12-17 9Z" />
            </svg>
            <span>${t.careLight}</span>
          </div>
          <div>
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M14 31c9-10 20-14 32-12l4 8c-12-1-22 2-31 11l-5-7Z" />
              <path d="M48 27c5 2 8 5 9 10" />
              <path d="M15 38c4 0 7 3 7 7a7 7 0 1 1-14 0c0-4 3-7 7-7Z" />
            </svg>
            <span>${t.careWater}</span>
          </div>
        </div>
      </article>
    </section>

    <section id="plantes" class="catalog-section section-shell">
      <div class="section-heading">
        <span class="eyebrow">${t.catalogKicker}</span>
        <h2>${t.catalogTitle}</h2>
        <p>${t.catalogCopy}</p>
      </div>

      <div class="filters" aria-label="${t.searchLabel}">
        <label class="search-field">
          <span>${t.searchLabel}</span>
          <input
            id="searchInput"
            type="search"
            placeholder="${t.searchPlaceholder}"
            autocomplete="off"
          />
        </label>
      </div>

      <div id="productGrid" class="product-grid" aria-live="polite"></div>
      <p id="emptyState" class="empty-state" hidden>
        ${t.emptyState}
      </p>
    </section>

    <section id="engrais" class="feature-section section-shell">
      <div class="feature-copy">
        <span class="eyebrow">${t.engraisKicker}</span>
        <h2>${t.engraisTitle}</h2>
        <p>${t.engraisCopy}</p>
        <a
          class="pill-button"
          href="https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(t.engraisWhatsapp)}"
          target="_blank"
          rel="noreferrer"
        >
          ${t.engraisCtaLabel}
        </a>
        <p><a href="${p("/produits/engrais/")}">${t.engraisLink}</a></p>
      </div>
      <div class="feature-media">
        <img
          src="/engrais bio-organique.jpeg"
          alt="${t.engraisTitle}"
          loading="lazy"
        />
      </div>
    </section>

    <section id="gazon" class="feature-section feature-section-reverse section-shell">
      <div class="feature-copy">
        <span class="eyebrow">${t.gazonKicker}</span>
        <h2>${t.gazonTitle}</h2>
        <p>${t.gazonCopy}</p>
        <a class="pill-button" href="${p("/gazon-tunisie/")}">${t.gazonCta}</a>
      </div>
      <div class="feature-media">
        <img
          src="/gazon.jpg"
          alt="${t.gazonTitle}"
          loading="lazy"
        />
      </div>
    </section>

    <section id="palmier" class="feature-section section-shell">
      <div class="feature-copy">
        <span class="eyebrow">${t.palmierKicker}</span>
        <h2>${t.palmierTitle}</h2>
        <p>${t.palmierCopy}</p>
        <a class="pill-button" href="${p("/palmier-tunisie/")}">${t.palmierCta}</a>
      </div>
      <div class="feature-media">
        <img
          src="/Palmier éventail.jpeg"
          alt="${t.palmierTitle}"
          loading="lazy"
        />
      </div>
    </section>

    <section class="section-shell">
      ${renderCards({
        h2: t.deliveryH2,
        intro: t.deliveryIntro,
        cards: t.deliveryCards.map(([title, text, path, image]) => ({ title, text, path: p(path), image })),
      })}
    </section>

    <section class="section-shell">
      ${renderCards({
        h2: t.blogH2,
        intro: t.blogIntro,
        cards: t.blogCards.map(([title, text, path, image]) => ({ title, text, path: p(path), image })),
      })}
      <p style="text-align:center; margin-top: 12px;"><a href="${p("/blog/")}">${t.blogSeeAll}</a></p>
    </section>

    <section id="apropos" class="about-section section-shell">
      <div>
        <span class="eyebrow">${t.aboutKicker}</span>
        <h2>${t.aboutTitle}</h2>
        <p>${t.aboutCopy}</p>
      </div>
      <p class="about-links">
        <a href="${p("/a-propos/")}">${t.aboutLink1}</a> ·
        <a href="${p("/pourquoi-choisir-green-garden/")}">${t.aboutLink2}</a>
      </p>
    </section>
  `;

  return renderPage({
    basePath: "/",
    lang,
    title: t.title,
    description: t.description,
    bodyHtml,
    extraScripts: `<script>window.GG_LANG=${JSON.stringify(lang)};</script><script src="/app.js?v=${SITE.assetVersion}" defer></script>`,
  });
}

module.exports = { renderHome };
