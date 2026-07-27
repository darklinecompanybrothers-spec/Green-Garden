const { renderPage } = require("../templates/layout");
const { renderBreadcrumb } = require("../templates/breadcrumb");
const { renderSections, renderCards } = require("../templates/components");
const { faqPage, article: articleSchema } = require("../templates/schema");
const { categories, articles } = require("../data/blog");

const BLOG_ROOT = { label: "Blog", path: "/blog/" };

function findArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

function findCategory(slug) {
  return categories.find((c) => c.slug === slug);
}

function formatDate(iso) {
  const [year, month, day] = iso.split("-");
  const months = [
    "janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre",
  ];
  return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;
}

function hubPage() {
  const breadcrumbItems = [{ label: "Accueil", path: "/" }, BLOG_ROOT];
  const { html: breadcrumbHtml, jsonLd } = renderBreadcrumb(breadcrumbItems);

  const sortedArticles = [...articles].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

  const bodyHtml = `
    ${breadcrumbHtml}
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">Ressources</p>
        <h1>Blog jardinage Green Garden</h1>
        <p class="hero-copy">Conseils pratiques sur le gazon naturel, les palmiers et l'aménagement extérieur en Tunisie.</p>
      </div>
    </section>
    <div class="section-shell content-sections">
      ${renderSections([
        {
          type: "related",
          h2: "Catégories",
          links: categories.map((c) => ({ label: c.name, path: `/blog/categorie/${c.slug}/`, description: c.description })),
        },
      ])}
      ${renderCards({
        h2: "Tous les articles",
        cards: sortedArticles.map((a) => ({
          title: a.title,
          text: findCategory(a.category).name,
          path: `/blog/${a.slug}/`,
          image: a.heroImage.src,
        })),
      })}
    </div>
  `;

  return renderPage({
    path: "/blog/",
    title: "Blog jardinage Green Garden | Gazon & Palmiers",
    description:
      "Conseils pratiques sur le gazon naturel, les palmiers décoratifs et l'aménagement extérieur en Tunisie, par Green Garden.",
    bodyHtml,
    jsonLd: [jsonLd],
  });
}

function categoryPage(category) {
  const categoryArticles = articles.filter((a) => a.category === category.slug);
  const breadcrumbItems = [{ label: "Accueil", path: "/" }, BLOG_ROOT, { label: category.name, path: `/blog/categorie/${category.slug}/` }];
  const { html: breadcrumbHtml, jsonLd } = renderBreadcrumb(breadcrumbItems);

  const bodyHtml = `
    ${breadcrumbHtml}
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">Blog</p>
        <h1>${category.name}</h1>
        <p class="hero-copy">${category.description}</p>
      </div>
    </section>
    <div class="section-shell content-sections">
      ${renderCards({
        cards: categoryArticles.map((a) => ({
          title: a.title,
          text: formatDate(a.datePublished),
          path: `/blog/${a.slug}/`,
          image: a.heroImage.src,
        })),
      })}
      ${renderSections([
        {
          type: "related",
          h2: "Autres catégories",
          links: categories.filter((c) => c.slug !== category.slug).map((c) => ({ label: c.name, path: `/blog/categorie/${c.slug}/`, description: c.description })),
        },
      ])}
    </div>
  `;

  return renderPage({
    path: `/blog/categorie/${category.slug}/`,
    title: `${category.name} | Blog Green Garden`,
    description: `${category.description} Retrouvez tous nos articles sur ${category.name.toLowerCase()}.`,
    bodyHtml,
    jsonLd: [jsonLd],
  });
}

function articlePage(a) {
  const category = findCategory(a.category);
  const breadcrumbItems = [
    { label: "Accueil", path: "/" },
    BLOG_ROOT,
    { label: category.name, path: `/blog/categorie/${category.slug}/` },
    { label: a.title, path: `/blog/${a.slug}/` },
  ];
  const { html: breadcrumbHtml, jsonLd: breadcrumbJsonLd } = renderBreadcrumb(breadcrumbItems);

  const jsonLd = [
    breadcrumbJsonLd,
    articleSchema({
      headline: a.title,
      description: a.metaDescription,
      datePublished: a.datePublished,
      image: a.heroImage.src,
      path: `/blog/${a.slug}/`,
    }),
  ];

  const faqItems = a.faq || [];
  if (faqItems.length) jsonLd.push(faqPage(faqItems));

  const relatedArticles = (a.related || [])
    .map((slug) => findArticle(slug))
    .filter(Boolean)
    .map((rel) => ({ label: rel.title, path: `/blog/${rel.slug}/`, description: formatDate(rel.datePublished) }));

  const sections = [...a.sections];
  if (faqItems.length) sections.push({ type: "faq", h2: "Questions fréquentes", items: faqItems });
  if (relatedArticles.length) sections.push({ type: "related", h2: "À lire aussi", links: relatedArticles });

  const bodyHtml = `
    ${breadcrumbHtml}
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">${category.name}</p>
        <h1>${a.h1}</h1>
        <p class="blog-meta">Publié le ${formatDate(a.datePublished)}</p>
        <p class="hero-copy">${a.intro}</p>
      </div>
      <div class="page-hero-media">
        <img src="${a.heroImage.src}" alt="${a.heroImage.alt}" loading="eager" />
      </div>
    </section>
    <div class="section-shell content-sections">
      ${renderSections(sections)}
    </div>
  `;

  return renderPage({
    path: `/blog/${a.slug}/`,
    title: `${a.metaTitle || a.title} - Green Garden`,
    description: a.metaDescription,
    bodyHtml,
    jsonLd,
    ogImage: a.heroImage.src,
    ogType: "article",
  });
}

function build(registerPage) {
  registerPage("/blog/", hubPage());
  categories.forEach((category) => registerPage(`/blog/categorie/${category.slug}/`, categoryPage(category)));
  articles.forEach((a) => registerPage(`/blog/${a.slug}/`, articlePage(a)));
}

module.exports = { build };
