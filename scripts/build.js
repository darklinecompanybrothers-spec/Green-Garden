// Générateur de site statique Green Garden.
// Régénère toutes les pages HTML + sitemap.xml + robots.txt depuis src/data + src/templates.
// Usage : node scripts/build.js
const fs = require("fs");
const path = require("path");
const { SITE, absoluteUrl } = require("../src/data/site");

const ROOT = path.join(__dirname, "..");
const routes = [];

function registerPage(routePath, html) {
  const dir = routePath === "/" ? ROOT : path.join(ROOT, routePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
  routes.push(routePath);
  return routePath;
}

function writeRootFile(name, content) {
  fs.writeFileSync(path.join(ROOT, name), content, "utf8");
}

function buildRobotsTxt() {
  const content = `User-agent: *
Allow: /

Sitemap: ${SITE.domain}/sitemap.xml
`;
  writeRootFile("robots.txt", content);
}

function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${absoluteUrl(route)}</loc>
    <lastmod>${today}</lastmod>
  </url>`
    )
    .join("\n");

  const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  writeRootFile("sitemap.xml", content);
}

function build404() {
  const { renderPage } = require("../src/templates/layout");
  const bodyHtml = `
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">Erreur 404</p>
        <h1>Page introuvable</h1>
        <p class="hero-copy">
          La page que vous cherchez n'existe pas ou a été déplacée. Retrouvez nos
          produits phares ou revenez à l'accueil.
        </p>
        <a class="pill-button" href="/">Retour à l'accueil</a>
      </div>
    </section>
    <div class="section-shell content-sections">
      <section class="content-block related-links">
        <h2>Pages populaires</h2>
        <div class="related-grid">
          <a class="related-card" href="/gazon-tunisie/"><span>Gazon Tunisie</span><small>9 DT/m², livraison gratuite Grand Tunis &amp; Nabeul</small></a>
          <a class="related-card" href="/palmier-tunisie/"><span>Palmier Tunisie</span><small>275 DT, livraison dans toute la Tunisie</small></a>
          <a class="related-card" href="/blog/"><span>Blog jardinage</span><small>Conseils gazon, palmiers et aménagement</small></a>
          <a class="related-card" href="/contact/"><span>Contact</span><small>Par téléphone ou WhatsApp</small></a>
        </div>
      </section>
    </div>
  `;

  const html = renderPage({
    path: "/404.html",
    title: "Page introuvable | Green Garden",
    description: "Cette page n'existe pas. Retrouvez le gazon naturel, les palmiers décoratifs et le blog jardinage Green Garden.",
    bodyHtml,
    robots: "noindex, follow",
  });

  writeRootFile("404.html", html);
}

function build() {
  const { renderHome } = require("../src/pages/home");
  registerPage("/", renderHome());

  const { build: buildGazonCluster } = require("../src/pages/gazon-cluster");
  buildGazonCluster(registerPage);

  const { build: buildPalmierCluster } = require("../src/pages/palmier-cluster");
  buildPalmierCluster(registerPage);

  const { build: buildProduits } = require("../src/pages/produits");
  buildProduits(registerPage);

  const { build: buildLivraison } = require("../src/pages/livraison");
  buildLivraison(registerPage);

  const { build: buildTrust } = require("../src/pages/trust");
  buildTrust(registerPage);

  const { build: buildBlog } = require("../src/pages/blog-pages");
  buildBlog(registerPage);

  const { build: buildSitemapHtml } = require("../src/pages/plan-du-site");
  buildSitemapHtml(registerPage, routes);

  build404();
  buildRobotsTxt();
  buildSitemap();

  console.log(`Build terminé : ${routes.length} pages générées.`);
}

build();
