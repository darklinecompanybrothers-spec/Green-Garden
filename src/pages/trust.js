const { renderContentPage } = require("../templates/page");
const { renderPage } = require("../templates/layout");
const { renderBreadcrumb } = require("../templates/breadcrumb");
const { renderSections } = require("../templates/components");
const { faqPage } = require("../templates/schema");
const { SITE, buildWhatsAppUrl } = require("../data/site");

function pourquoiChoisirPage() {
  return renderContentPage({
    path: "/pourquoi-choisir-green-garden/",
    title: "Pourquoi choisir Green Garden ? | Gazon & Palmier en Tunisie",
    metaDescription:
      "Prix clair, livraison gratuite Grand Tunis & Nabeul, réactivité WhatsApp : pourquoi choisir Green Garden pour votre gazon et vos palmiers.",
    eyebrow: "Green Garden",
    h1: "Pourquoi choisir Green Garden ?",
    intro:
      "Un prix clair, une livraison organisée dans toute la Tunisie et des conseils concrets : voici ce qui distingue Green Garden pour votre gazon naturel et vos palmiers décoratifs.",
    breadcrumb: [{ label: "Pourquoi nous choisir", path: "/pourquoi-choisir-green-garden/" }],
    sections: [
      {
        type: "list",
        h2: "Ce qui nous distingue",
        items: [
          "Un prix unique et transparent : 9 DT/m² pour le gazon, 275 DT pour le palmier, sans coût caché",
          "Une livraison gratuite dans le Grand Tunis et à Nabeul pour le gazon naturel",
          "Une livraison organisée dans toute la Tunisie pour le palmier décoratif",
          "Une prise de contact rapide et directe par WhatsApp, sans compte à créer",
          "Des conseils de pose et d'entretien fournis avec chaque commande",
          "Une offre complète : gazon, palmiers, plantes d'intérieur et engrais",
        ],
      },
      {
        type: "cta",
        heading: "Discutons de votre projet",
        text: "Décrivez-nous votre jardin ou votre projet d'aménagement, nous vous conseillons la meilleure solution.",
        buttonLabel: "Contacter Green Garden",
        whatsappMessage: "Bonjour, je souhaite être conseillé pour mon projet de jardin.",
        secondary: { label: "En savoir plus sur nous", path: "/a-propos/" },
      },
      {
        type: "related",
        h2: "Découvrir nos produits",
        links: [
          { label: "Gazon Tunisie", path: "/gazon-tunisie/", description: "9 DT/m², livraison gratuite Grand Tunis et Nabeul" },
          { label: "Palmier Tunisie", path: "/palmier-tunisie/", description: "275 DT, livraison dans toute la Tunisie" },
        ],
      },
    ],
  });
}

function aProposPage() {
  return renderContentPage({
    path: "/a-propos/",
    title: "À propos de Green Garden | Jardinerie en Tunisie",
    metaDescription:
      "Green Garden est une jardinerie tunisienne basée à Nabeul, spécialisée dans le gazon naturel, les palmiers décoratifs, les plantes d'intérieur et l'engrais.",
    eyebrow: "À propos",
    h1: "Green Garden, une jardinerie tunisienne basée à Nabeul",
    intro:
      "Green Garden accompagne particuliers et professionnels en Tunisie dans l'aménagement de leurs espaces verts, avec une offre centrée sur le gazon naturel, les palmiers décoratifs, les plantes d'intérieur et l'engrais.",
    breadcrumb: [{ label: "À propos", path: "/a-propos/" }],
    sections: [
      {
        type: "text",
        h2: "Notre activité",
        paragraphs: [
          `Basé à ${SITE.address.locality}, Green Garden livre du gazon naturel en rouleau et des palmiers décoratifs dans toute la Tunisie, avec une livraison gratuite du gazon dans le Grand Tunis et à Nabeul.`,
          "Notre catalogue comprend également une sélection de plantes d'intérieur décoratives et des engrais pour accompagner la croissance de vos plantes, de votre gazon et de vos palmiers.",
        ],
      },
      {
        type: "text",
        h2: "Notre approche",
        paragraphs: [
          "Nous privilégions un contact direct et rapide par WhatsApp pour répondre à vos questions, établir un devis de livraison ou vous conseiller sur le choix d'une variété adaptée à votre région et à votre projet.",
        ],
      },
      {
        type: "cta",
        heading: "Une question sur nos produits ou nos délais ?",
        text: "Contactez-nous directement, nous répondons rapidement.",
        buttonLabel: "Nous contacter sur WhatsApp",
        whatsappMessage: "Bonjour, j'ai une question sur Green Garden.",
        secondary: { label: "Voir nos coordonnées", path: "/contact/" },
      },
    ],
  });
}

function faqPageContent() {
  const items = [
    {
      q: "Quels produits vend Green Garden ?",
      a: "Green Garden vend du gazon naturel en rouleau (9 DT/m²), des palmiers décoratifs (275 DT), des plantes d'intérieur décoratives et des engrais.",
    },
    {
      q: "Dans quelles régions livrez-vous ?",
      a: "Le gazon naturel est livré gratuitement dans le Grand Tunis et à Nabeul. Le gazon et le palmier décoratif sont livrables dans le reste de la Tunisie sur devis, selon la distance.",
    },
    {
      q: "Comment commander un produit ?",
      a: "La commande se fait directement par WhatsApp : indiquez le produit souhaité, la quantité et votre ville de livraison pour recevoir une confirmation rapide.",
    },
    {
      q: "Quels sont vos horaires de disponibilité ?",
      a: `Nous sommes disponibles ${SITE.hours.label.toLowerCase()} pour répondre à vos demandes par téléphone ou WhatsApp.`,
    },
    {
      q: "Proposez-vous des conseils d'entretien après l'achat ?",
      a: "Oui, nous fournissons des conseils de pose et d'entretien avec chaque commande, et vous pouvez retrouver des guides détaillés sur notre blog.",
    },
    {
      q: "Livrez-vous les professionnels (paysagistes, hôtels, entreprises) ?",
      a: "Oui, nous fournissons aussi bien des particuliers que des professionnels du paysagisme et des établissements touristiques pour des commandes en volume.",
    },
  ];

  const breadcrumbItems = [{ label: "Accueil", path: "/" }, { label: "FAQ", path: "/faq/" }];
  const { html: breadcrumbHtml, jsonLd: breadcrumbJsonLd } = renderBreadcrumb(breadcrumbItems);

  const bodyHtml = `
    ${breadcrumbHtml}
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">Aide</p>
        <h1>Questions fréquentes</h1>
        <p class="hero-copy">Tout ce que vous devez savoir sur nos produits, notre livraison et nos délais.</p>
      </div>
    </section>
    <div class="section-shell content-sections">
      ${renderSections([{ type: "faq", h2: "Questions générales", items }])}
      ${renderSections([
        {
          type: "related",
          h2: "Vous ne trouvez pas votre réponse ?",
          links: [
            { label: "Contactez-nous", path: "/contact/", description: "Par téléphone ou WhatsApp" },
            { label: "Gazon Tunisie", path: "/gazon-tunisie/", description: "FAQ dédiée au gazon" },
            { label: "Palmier Tunisie", path: "/palmier-tunisie/", description: "FAQ dédiée au palmier" },
          ],
        },
      ])}
    </div>
  `;

  return renderPage({
    path: "/faq/",
    title: "Questions fréquentes | Green Garden",
    description:
      "Livraison, prix, commande, entretien : retrouvez les réponses aux questions les plus fréquentes sur les produits Green Garden.",
    bodyHtml,
    jsonLd: [breadcrumbJsonLd, faqPage(items)],
  });
}

function contactPage() {
  const breadcrumbItems = [{ label: "Accueil", path: "/" }, { label: "Contact", path: "/contact/" }];
  const { html: breadcrumbHtml, jsonLd: breadcrumbJsonLd } = renderBreadcrumb(breadcrumbItems);

  const bodyHtml = `
    ${breadcrumbHtml}
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">Contact</p>
        <h1>Contactez Green Garden</h1>
        <p class="hero-copy">Par téléphone, WhatsApp ou via le formulaire de devis ci-dessous.</p>
      </div>
    </section>
    <div class="section-shell content-sections">
      <section class="content-block">
        <h2>Nos coordonnées</h2>
        <div class="contact-info">
          <p>📍 ${SITE.address.locality}, ${SITE.country}</p>
          <p>📞 <a href="tel:${SITE.phoneE164}">${SITE.phoneDisplay}</a></p>
          <p>💬 <a href="${SITE.social.whatsapp}" target="_blank" rel="noreferrer">Discuter sur WhatsApp</a></p>
          <p>🕐 ${SITE.hours.label}</p>
        </div>
      </section>

      <section class="content-block">
        <h2>Demande de devis</h2>
        <p>Remplissez ce formulaire : il ouvre directement une conversation WhatsApp pré-remplie avec vos informations.</p>
        <form id="devisForm" class="devis-form">
          <label>Nom
            <input id="devisName" type="text" required autocomplete="name" />
          </label>
          <label>Téléphone
            <input id="devisPhone" type="tel" required autocomplete="tel" />
          </label>
          <label>Produit souhaité
            <select id="devisProduct">
              <option>Gazon naturel</option>
              <option>Palmier décoratif</option>
              <option>Plantes d'intérieur</option>
              <option>Engrais</option>
              <option>Autre</option>
            </select>
          </label>
          <label>Ville de livraison
            <input id="devisCity" type="text" autocomplete="address-level2" />
          </label>
          <label>Message
            <textarea id="devisMessage" rows="4"></textarea>
          </label>
          <button type="submit" class="pill-button">Envoyer via WhatsApp</button>
        </form>
      </section>

      ${renderSections([
        {
          type: "related",
          h2: "Voir aussi",
          links: [
            { label: "Zones de livraison", path: "/livraison/", description: "Grand Tunis, Nabeul et le reste de la Tunisie" },
            { label: "FAQ", path: "/faq/", description: "Questions fréquentes" },
          ],
        },
      ])}
    </div>
  `;

  return renderPage({
    path: "/contact/",
    title: "Contact | Green Garden",
    description: `Contactez Green Garden par téléphone (${SITE.phoneDisplay}), WhatsApp ou via notre formulaire de devis. Basé à ${SITE.address.locality}.`,
    bodyHtml,
    jsonLd: [breadcrumbJsonLd],
    extraScripts: '<script src="/contact.js" defer></script>',
  });
}

function build(registerPage) {
  registerPage("/pourquoi-choisir-green-garden/", pourquoiChoisirPage());
  registerPage("/a-propos/", aProposPage());
  registerPage("/faq/", faqPageContent());
  registerPage("/contact/", contactPage());
}

module.exports = { build };
