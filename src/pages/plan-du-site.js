const { renderPage } = require("../templates/layout");
const { renderBreadcrumb } = require("../templates/breadcrumb");
const { villes } = require("../data/villes");
const { categories, articles } = require("../data/blog");

const SECTIONS = [
  {
    title: "Pages principales",
    links: [
      { label: "Accueil", path: "/" },
      { label: "Nos produits", path: "/produits/" },
      { label: "Zones de livraison", path: "/livraison/" },
      { label: "Blog jardinage", path: "/blog/" },
      { label: "Pourquoi choisir Green Garden", path: "/pourquoi-choisir-green-garden/" },
      { label: "À propos", path: "/a-propos/" },
      { label: "Contact", path: "/contact/" },
      { label: "FAQ", path: "/faq/" },
    ],
  },
  {
    title: "Gazon naturel",
    links: [
      { label: "Gazon Tunisie", path: "/gazon-tunisie/" },
      { label: "Gazon naturel", path: "/gazon-naturel/" },
      { label: "Gazon en rouleau", path: "/gazon-en-rouleau/" },
      { label: "Acheter du gazon", path: "/acheter-gazon/" },
      { label: "Gazon Grand Tunis", path: "/gazon-grand-tunis/" },
      { label: "Gazon Nabeul", path: "/gazon-nabeul/" },
    ],
  },
  {
    title: "Palmier décoratif",
    links: [
      { label: "Palmier Tunisie", path: "/palmier-tunisie/" },
      { label: "Acheter un palmier", path: "/acheter-palmier/" },
      { label: "Palmier de jardin", path: "/palmier-jardin/" },
      { label: "Palmier décoratif", path: "/palmier-decoratif/" },
    ],
  },
  {
    title: "Catégories de produits",
    links: [
      { label: "Gazon (catégorie)", path: "/produits/gazon/" },
      { label: "Palmiers (catégorie)", path: "/produits/palmiers/" },
      { label: "Plantes d'intérieur", path: "/produits/plantes-interieur/" },
      { label: "Engrais", path: "/produits/engrais/" },
    ],
  },
  {
    title: "Zones de livraison",
    links: [
      ...villes.map((v) => ({ label: `Livraison ${v.name}`, path: `/livraison/${v.slug}/` })),
      { label: "Autres régions", path: "/livraison/autres-regions/" },
    ],
  },
  {
    title: "Blog - Catégories",
    links: categories.map((c) => ({ label: c.name, path: `/blog/categorie/${c.slug}/` })),
  },
  {
    title: "Blog - Articles",
    links: articles.map((a) => ({ label: a.title, path: `/blog/${a.slug}/` })),
  },
];

function renderSitemapPage() {
  const breadcrumbItems = [{ label: "Accueil", path: "/" }, { label: "Plan du site", path: "/plan-du-site/" }];
  const { html: breadcrumbHtml, jsonLd } = renderBreadcrumb(breadcrumbItems);

  const bodyHtml = `
    ${breadcrumbHtml}
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">Navigation</p>
        <h1>Plan du site</h1>
        <p class="hero-copy">Toutes les pages de Green Garden, classées par thème.</p>
      </div>
    </section>
    <div class="section-shell content-sections">
      ${SECTIONS.map(
        (section) => `
        <section class="content-block">
          <h2>${section.title}</h2>
          <ul class="content-list">
            ${section.links.map((link) => `<li><a href="${link.path}">${link.label}</a></li>`).join("")}
          </ul>
        </section>`
      ).join("")}
    </div>
  `;

  return renderPage({
    path: "/plan-du-site/",
    title: "Plan du site | Green Garden",
    description: "Toutes les pages du site Green Garden : produits, zones de livraison et blog jardinage.",
    bodyHtml,
    jsonLd: [jsonLd],
  });
}

function build(registerPage) {
  registerPage("/plan-du-site/", renderSitemapPage());
}

module.exports = { build };
