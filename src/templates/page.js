const { renderPage } = require("./layout");
const { renderBreadcrumb } = require("./breadcrumb");
const { renderSections, collectFaqItems } = require("./components");
const { faqPage, product: productSchema, service: serviceSchema } = require("./schema");
const { localizedPath } = require("../data/i18n");
const { UI } = require("../data/ui-strings");
const { SITE } = require("../data/site");
const { sizeAttrs } = require("../data/image-size");

// Renderer générique utilisé par la quasi-totalité des pages de contenu
// (piliers gazon/palmier, pages villes, catégories, pages confiance, FAQ).
// `page.sections` suit le modèle défini dans components.js.
// `page.basePath` est le chemin canonique FR (ex: "/gazon-tunisie/") ;
// `page.lang` ("fr"/"en"/"ar") détermine le préfixe d'URL réel et les libellés.
// `page.breadcrumb` contient déjà les segments traduits pour cette langue
// (hors "Accueil", ajouté automatiquement ici).
function renderContentPage(page) {
  const lang = page.lang || "fr";
  const localizedBase = localizedPath(page.basePath, lang);
  const breadcrumbItems = [
    { label: UI[lang].breadcrumbHome, path: localizedPath("/", lang) },
    ...page.breadcrumb,
  ];
  const { html: breadcrumbHtml, jsonLd: breadcrumbJsonLd } = renderBreadcrumb(breadcrumbItems);

  const jsonLd = [breadcrumbJsonLd];

  const faqItems = collectFaqItems(page.sections);
  if (faqItems.length) jsonLd.push(faqPage(faqItems));

  if (page.product) jsonLd.push(productSchema({ ...page.product, path: localizedBase }));
  if (page.service) jsonLd.push(serviceSchema({ ...page.service, path: localizedBase }));

  const bodyHtml = `
    ${breadcrumbHtml}
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">${page.eyebrow || ""}</p>
        <h1>${page.h1}</h1>
        <p class="hero-copy">${page.intro}</p>
      </div>
      ${
        page.heroImage
          ? `<div class="page-hero-media"><img src="${page.heroImage.src}" alt="${page.heroImage.alt}" loading="eager" fetchpriority="high" decoding="async"${sizeAttrs(page.heroImage.src)} /></div>`
          : ""
      }
    </section>
    <div class="section-shell content-sections">
      ${renderSections(page.sections)}
    </div>
  `;

  // /quote.js n'est chargé que sur les pages qui portent réellement un
  // calculateur, pour ne pas alourdir les ~190 autres.
  const hasQuote = (page.sections || []).some((s) => s.type === "quote");

  return renderPage({
    basePath: page.basePath,
    lang,
    title: page.title,
    description: page.metaDescription,
    bodyHtml,
    jsonLd,
    ogImage: page.heroImage ? page.heroImage.src : undefined,
    extraScripts: hasQuote
      ? `<script src="/quote.js?v=${SITE.assetVersion}" defer></script>`
      : "",
  });
}

module.exports = { renderContentPage };
