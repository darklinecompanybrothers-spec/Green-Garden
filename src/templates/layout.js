const { SITE, absoluteUrl } = require("../data/site");
const { villes } = require("../data/villes");
const { jsonLdScript, organization, localBusiness, website } = require("./schema");

const NAV = [
  { label: "Accueil", path: "/" },
  {
    label: "Produits",
    path: "/produits/",
    children: [
      { label: "Gazon naturel", path: "/gazon-tunisie/" },
      { label: "Palmiers décoratifs", path: "/palmier-tunisie/" },
      { label: "Plantes d'intérieur", path: "/produits/plantes-interieur/" },
      { label: "Engrais", path: "/produits/engrais/" },
      { label: "Tous nos produits", path: "/produits/" },
    ],
  },
  {
    label: "Livraison",
    path: "/livraison/",
    children: [
      ...villes.map((v) => ({ label: v.name, path: `/livraison/${v.slug}/` })),
      { label: "Toutes les zones desservies", path: "/livraison/" },
    ],
  },
  { label: "Blog", path: "/blog/" },
  { label: "Pourquoi nous choisir", path: "/pourquoi-choisir-green-garden/" },
  { label: "Contact", path: "/contact/" },
];

function renderNavItem(item) {
  if (item.children) {
    return `
      <div class="nav-item has-dropdown">
        <a href="${item.path}" class="nav-link">${item.label}</a>
        <ul class="dropdown-menu">
          ${item.children.map((child) => `<li><a href="${child.path}">${child.label}</a></li>`).join("")}
        </ul>
      </div>`;
  }
  return `<div class="nav-item"><a href="${item.path}" class="nav-link">${item.label}</a></div>`;
}

function renderHeader(showLangSwitch) {
  return `
    <header class="site-header">
      <a class="brand" href="/" aria-label="Accueil Green Garden">
        <img src="/logo.png" alt="" class="brand-mark" loading="lazy" width="40" height="40" />
        <span>Green Garden</span>
      </a>

      ${
        showLangSwitch
          ? `<div class="lang-switch" aria-label="Language switcher">
        <button type="button" class="lang-button is-active" data-lang="fr" aria-label="Francais">FR</button>
        <button type="button" class="lang-button" data-lang="en" aria-label="English">EN</button>
        <button type="button" class="lang-button" data-lang="ar" aria-label="العربية">AR</button>
      </div>`
          : ""
      }

      <button class="nav-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false">
        <span></span>
        <span></span>
      </button>

      <nav class="main-nav" aria-label="Navigation principale">
        ${NAV.map(renderNavItem).join("")}
      </nav>
    </header>`;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-main">
        <div class="footer-col footer-brand-col">
          <a class="brand footer-brand" href="/">
            <img src="/logo.png" alt="" class="brand-mark" loading="lazy" width="40" height="40" />
            <span>Green Garden</span>
          </a>
          <p>${SITE.address.locality}, ${SITE.country} — Vente de gazon naturel, palmiers et plantes décoratives</p>
          <p><a href="tel:${SITE.phoneE164}">${SITE.phoneDisplay}</a></p>
          <p>${SITE.hours.label}</p>
        </div>

        <div class="footer-col">
          <h3>Produits</h3>
          <ul class="footer-links">
            <li><a href="/gazon-tunisie/">Gazon naturel Tunisie</a></li>
            <li><a href="/palmier-tunisie/">Palmier décoratif Tunisie</a></li>
            <li><a href="/produits/plantes-interieur/">Plantes d'intérieur</a></li>
            <li><a href="/produits/engrais/">Engrais</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Livraison</h3>
          <ul class="footer-links">
            ${villes
              .slice(0, 6)
              .map((v) => `<li><a href="/livraison/${v.slug}/">Livraison ${v.name}</a></li>`)
              .join("")}
            <li><a href="/livraison/">Toutes les zones</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Ressources</h3>
          <ul class="footer-links">
            <li><a href="/blog/">Blog jardinage</a></li>
            <li><a href="/faq/">Questions fréquentes</a></li>
            <li><a href="/a-propos/">À propos</a></li>
            <li><a href="/contact/">Contact</a></li>
            <li><a href="/plan-du-site/">Plan du site</a></li>
          </ul>
        </div>

        <div class="footer-col footer-actions">
          <h3>Suivez-nous</h3>
          <div class="social-links" aria-label="Réseaux sociaux">
            <a href="${SITE.social.instagram}" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-.7a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" /></svg>
            </a>
            <a href="${SITE.social.facebook}" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V3h-3c-4 0-6 2.4-6 6v3H5v5h3v5h5v-5h4l1-5h-5V9c0-.7.4-1 1-1Z" /></svg>
            </a>
            <a href="${SITE.social.whatsapp}" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.1c-.2.7-1.4 1.3-2 1.4-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.2-1.4-1.9-1.4-3.5s.9-2.5 1.2-2.8c.3-.3.7-.4.9-.4h.7c.2 0 .5 0 .7.6l1 2.4c.1.3.1.5 0 .7l-.5.8c-.2.2-.3.4-.1.7.2.3.8 1.3 1.8 2.1 1.2 1.1 2.2 1.4 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.5-.3.8-.2l2.4 1.1c.3.2.6.3.7.5.1.1.1.8-.1 1.3Z" /></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-credits">
        <p>© 2026 Green Garden – Tous Droits Réservés</p>
        <p>Site web développé par: <a href="${SITE.credit.url}" target="_blank" rel="noopener noreferrer">${SITE.credit.label}</a></p>
      </div>
    </footer>`;
}

function renderStickyWhatsApp() {
  const message = encodeURIComponent("Bonjour, je souhaite avoir plus d'informations sur vos produits Green Garden.");
  return `
    <a class="sticky-whatsapp" href="https://wa.me/${SITE.whatsappNumber}?text=${message}" target="_blank" rel="noreferrer" aria-label="Contacter Green Garden sur WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.1c-.2.7-1.4 1.3-2 1.4-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.2-1.4-1.9-1.4-3.5s.9-2.5 1.2-2.8c.3-.3.7-.4.9-.4h.7c.2 0 .5 0 .7.6l1 2.4c.1.3.1.5 0 .7l-.5.8c-.2.2-.3.4-.1.7.2.3.8 1.3 1.8 2.1 1.2 1.1 2.2 1.4 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.5-.3.8-.2l2.4 1.1c.3.2.6.3.7.5.1.1.1.8-.1 1.3Z" /></svg>
      <span>WhatsApp</span>
    </a>`;
}

function renderPage({
  path,
  title,
  description,
  bodyHtml,
  jsonLd = [],
  ogImage,
  ogType = "website",
  robots = "index, follow",
  showLangSwitch = false,
  extraScripts = "",
}) {
  const canonical = absoluteUrl(path);
  const image = absoluteUrl(ogImage || SITE.defaultOgImage);
  const schemas = [organization(), localBusiness(), website(), ...jsonLd];

  return `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" type="image/png" href="/logo.png" />
    <link rel="shortcut icon" type="image/png" href="/logo.png" />
    <link rel="apple-touch-icon" href="/logo.png" />

    <meta property="og:type" content="${ogType}" />
    <meta property="og:site_name" content="Green Garden" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:locale" content="fr_TN" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/styles.css" />
    ${jsonLdScript(schemas)}
  </head>
  <body>
    <div class="page-glow page-glow-left" aria-hidden="true"></div>
    <div class="page-glow page-glow-right" aria-hidden="true"></div>

    ${renderHeader(showLangSwitch)}

    <main>
      ${bodyHtml}
    </main>

    ${renderFooter()}
    ${renderStickyWhatsApp()}

    <script src="/nav.js" defer></script>
    ${extraScripts}
  </body>
</html>
`;
}

module.exports = { renderPage, NAV };
