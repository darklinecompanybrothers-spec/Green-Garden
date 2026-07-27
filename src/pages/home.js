const { renderPage } = require("../templates/layout");
const { renderCards } = require("../templates/components");
const { buildWhatsAppUrl, SITE } = require("../data/site");

function renderHome() {
  const bodyHtml = `
    <section id="accueil" class="hero hero-with-image section-shell">
      <div class="hero-content">
        <p class="eyebrow">Jardinerie naturelle & minimaliste</p>
        <h1>Green Garden — Gazon naturel et Palmiers en Tunisie</h1>
        <p class="hero-copy">
          Gazon naturel en rouleau à 9 DT/m² livré gratuitement dans le Grand Tunis et à Nabeul,
          palmiers décoratifs à 275 DT livrés dans toute la Tunisie, plantes d'intérieur et
          engrais pour composer des espaces plus frais, plus vivants et faciles à entretenir.
        </p>
        <a class="pill-button" href="/gazon-tunisie/">Découvrir le gazon</a>
      </div>
      <div class="hero-media">
        <img src="/123699.jpeg" alt="Jardinerie Green Garden en Tunisie" loading="lazy" />
      </div>
    </section>

    <section id="produits-phares" class="section-shell">
      ${renderCards({
        h2: "Nos deux produits phares",
        intro:
          "Deux références conçues pour transformer un extérieur tunisien rapidement : le gazon naturel en rouleau et le palmier décoratif.",
        cards: [
          {
            title: `Gazon naturel — ${SITE.products.gazon.priceLabel}`,
            text: "Livraison gratuite dans le Grand Tunis et à Nabeul. Pose rapide, rendu immédiat.",
            path: "/gazon-tunisie/",
            image: "/gazon.jpg",
          },
          {
            title: `Palmier décoratif — ${SITE.products.palmier.priceLabel}`,
            text: "Livrable dans toute la Tunisie, frais calculés selon votre région.",
            path: "/palmier-tunisie/",
            image: "/Palmier éventail.jpeg",
          },
          {
            title: "Plantes d'intérieur",
            text: "Une sélection de plantes décoratives robustes et faciles à vivre.",
            path: "#plantes",
            image: "/Faux philodendron.jpeg",
          },
          {
            title: "Engrais",
            text: "Des solutions pour renforcer vos plantes et soutenir une croissance saine.",
            path: "/produits/engrais/",
            image: "/engrais bio-organique.jpeg",
          },
        ],
      })}
    </section>

    <section id="nouveautes" class="organic-grid section-shell">
      <article class="collection-card">
        <span class="eyebrow">Collections</span>
        <h2>Jungles d'intérieur</h2>
        <p>
          Une sélection de plantes graphiques, robustes et faciles à vivre
          pour créer un coin végétal apaisant dans votre intérieur tunisien.
        </p>
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
        <span class="eyebrow">Entretien des plantes</span>
        <h2>Des gestes simples, des plantes heureuses.</h2>
        <div class="care-list">
          <div>
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M22 25h20l-4 28H26L22 25Z" />
              <path d="M18 25h28" />
              <path d="M32 25c-9-5-10-13-4-18 6 5 8 12 4 18Z" />
              <path d="M34 24c3-9 10-12 17-9-2 8-8 12-17 9Z" />
            </svg>
            <span>Lumière douce</span>
          </div>
          <div>
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M14 31c9-10 20-14 32-12l4 8c-12-1-22 2-31 11l-5-7Z" />
              <path d="M48 27c5 2 8 5 9 10" />
              <path d="M15 38c4 0 7 3 7 7a7 7 0 1 1-14 0c0-4 3-7 7-7Z" />
            </svg>
            <span>Arrosage maîtrisé</span>
          </div>
        </div>
      </article>
    </section>

    <section id="plantes" class="catalog-section section-shell">
      <div class="section-heading">
        <span class="eyebrow">Nos plantes</span>
        <h2>Catalogue Green Garden</h2>
        <p>
          Parcourez les articles disponibles et demandez le prix directement
          via WhatsApp.
        </p>
      </div>

      <div class="filters" aria-label="Filtres du catalogue">
        <label class="search-field">
          <span>Recherche</span>
          <input
            id="searchInput"
            type="search"
            placeholder="Ex: palmier, cactus, yucca..."
            autocomplete="off"
          />
        </label>
      </div>

      <div id="productGrid" class="product-grid" aria-live="polite"></div>
      <p id="emptyState" class="empty-state" hidden>
        Aucun article ne correspond a cette recherche pour le moment.
      </p>
    </section>

    <section id="engrais" class="feature-section section-shell">
      <div class="feature-copy">
        <span class="eyebrow">Nutrition végétale</span>
        <h2>Engrais</h2>
        <p>
          Des solutions pour renforcer vos plantes et soutenir une croissance saine.
        </p>
        <a
          class="pill-button"
          href="${buildWhatsAppUrl("Commander de l'engrais")}"
          target="_blank"
          rel="noreferrer"
        >
          Commander sur WhatsApp
        </a>
        <p><a href="/produits/engrais/">Voir la page engrais</a></p>
      </div>
      <img
        src="/engrais bio-organique.jpeg"
        alt="Engrais bio-organique Green Garden"
        loading="lazy"
      />
    </section>

    <section id="gazon" class="feature-section feature-section-reverse section-shell">
      <div class="feature-copy">
        <span class="eyebrow">Extérieur</span>
        <h2>Gazon naturel Tunisie</h2>
        <p>
          Gazon naturel en rouleau à 9 DT/m², livraison gratuite dans le Grand Tunis et à Nabeul.
        </p>
        <a
          class="pill-button"
          href="/gazon-tunisie/"
        >
          Découvrir le gazon
        </a>
      </div>
      <img
        src="/gazon.jpg"
        alt="Gazon naturel en rouleau Green Garden"
        loading="lazy"
      />
    </section>

    <section id="palmier" class="feature-section section-shell">
      <div class="feature-copy">
        <span class="eyebrow">Extérieur</span>
        <h2>Palmier décoratif Tunisie</h2>
        <p>
          Palmier décoratif à 275 DT, livrable dans toute la Tunisie avec des frais de livraison
          déterminés selon votre région.
        </p>
        <a class="pill-button" href="/palmier-tunisie/">Découvrir les palmiers</a>
      </div>
      <img
        src="/Palmier éventail.jpeg"
        alt="Palmier décoratif Green Garden"
        loading="lazy"
      />
    </section>

    <section class="section-shell">
      ${renderCards({
        h2: "Livraison partout en Tunisie",
        intro:
          "Gazon livré gratuitement dans le Grand Tunis et à Nabeul, palmier livrable dans toute la Tunisie sur devis.",
        cards: [
          { title: "Grand Tunis", text: "Gazon livré gratuitement.", path: "/livraison/grand-tunis/", image: "/123699.jpeg" },
          { title: "Nabeul", text: "Gazon livré gratuitement.", path: "/livraison/nabeul/", image: "/gazon.jpg" },
          { title: "Sousse, Sfax, Monastir...", text: "Livraison sur devis dans toute la Tunisie.", path: "/livraison/", image: "/Palmier éventail.jpeg" },
        ],
      })}
    </section>

    <section class="section-shell">
      ${renderCards({
        h2: "Conseils de jardinage",
        intro: "Nos derniers articles pour réussir votre gazon, vos palmiers et votre jardin.",
        cards: [
          {
            title: "Comment poser du gazon en rouleau",
            text: "Le guide étape par étape pour une pose réussie.",
            path: "/blog/comment-poser-gazon-en-rouleau/",
            image: "/gazon.jpg",
          },
          {
            title: "Quel palmier choisir en Tunisie",
            text: "Les variétés les mieux adaptées au climat tunisien.",
            path: "/blog/quel-palmier-choisir-tunisie/",
            image: "/Palmier éventail.jpeg",
          },
          {
            title: "Prix du gazon en Tunisie",
            text: "Comment le prix au m² est calculé et à quoi s'attendre.",
            path: "/blog/prix-gazon-tunisie-m2/",
            image: "/123699.jpeg",
          },
        ],
      })}
      <p style="text-align:center; margin-top: 12px;"><a href="/blog/">Voir tous les articles du blog</a></p>
    </section>

    <section id="apropos" class="about-section section-shell">
      <div>
        <span class="eyebrow">À propos</span>
        <h2>Green Garden cultive le végétal accessible.</h2>
        <p>
          Notre boutique accompagne les amoureux des plantes avec des variétés
          décoratives, des conseils simples et une réservation rapide via WhatsApp.
        </p>
      </div>
      <p class="about-links">
        <a href="/a-propos/">En savoir plus sur Green Garden</a> ·
        <a href="/pourquoi-choisir-green-garden/">Pourquoi nous choisir</a>
      </p>
    </section>
  `;

  return renderPage({
    path: "/",
    title: "Green Garden | Gazon naturel & Palmiers en Tunisie",
    description:
      "Gazon naturel 9 DT/m² (livraison gratuite Grand Tunis & Nabeul) et palmiers décoratifs 275 DT en Tunisie. Plantes d'intérieur et engrais.",
    bodyHtml,
    showLangSwitch: true,
    extraScripts: `<script src="/app.js?v=${SITE.assetVersion}" defer></script>`,
  });
}

module.exports = { renderHome };
