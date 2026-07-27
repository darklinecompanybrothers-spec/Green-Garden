const { renderPage } = require("./layout");
const { renderBreadcrumb } = require("./breadcrumb");
const { renderSections, collectFaqItems } = require("./components");
const { faqPage, product: productSchema } = require("./schema");

// Renderer générique utilisé par la quasi-totalité des pages de contenu
// (piliers gazon/palmier, pages villes, catégories, pages confiance, FAQ).
// `page.sections` suit le modèle défini dans components.js.
function renderContentPage(page) {
  const breadcrumbItems = [{ label: "Accueil", path: "/" }, ...page.breadcrumb];
  const { html: breadcrumbHtml, jsonLd: breadcrumbJsonLd } = renderBreadcrumb(breadcrumbItems);

  const jsonLd = [breadcrumbJsonLd];

  const faqItems = collectFaqItems(page.sections);
  if (faqItems.length) jsonLd.push(faqPage(faqItems));

  if (page.product) jsonLd.push(productSchema({ ...page.product, path: page.path }));

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
          ? `<div class="page-hero-media"><img src="${page.heroImage.src}" alt="${page.heroImage.alt}" loading="eager" width="${page.heroImage.width || 800}" height="${page.heroImage.height || 600}" /></div>`
          : ""
      }
    </section>
    <div class="section-shell content-sections">
      ${renderSections(page.sections)}
    </div>
  `;

  return renderPage({
    path: page.path,
    title: page.title,
    description: page.metaDescription,
    bodyHtml,
    jsonLd,
    ogImage: page.heroImage ? page.heroImage.src : undefined,
  });
}

module.exports = { renderContentPage };
