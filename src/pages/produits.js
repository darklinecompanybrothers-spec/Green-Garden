const { renderContentPage } = require("../templates/page");
const { plantesInterieur } = require("../data/produits");

const PRODUITS_BREADCRUMB_ROOT = { label: "Produits", path: "/produits/" };

function hubPage() {
  return renderContentPage({
    path: "/produits/",
    title: "Nos produits | Gazon, palmiers, plantes et engrais - Green Garden",
    metaDescription:
      "Découvrez tous les produits Green Garden : gazon naturel en rouleau, palmiers décoratifs, plantes d'intérieur et engrais, avec livraison en Tunisie.",
    eyebrow: "Catalogue",
    h1: "Nos produits",
    intro:
      "Green Garden propose une offre complète pour aménager un extérieur ou un intérieur tunisien : gazon naturel, palmiers décoratifs, plantes d'intérieur et engrais.",
    breadcrumb: [{ label: "Produits", path: "/produits/" }],
    sections: [
      {
        type: "cards",
        cards: [
          { title: "Gazon naturel — 9 DT/m²", text: "Livraison gratuite Grand Tunis et Nabeul.", path: "/produits/gazon/", image: "/gazon.jpg" },
          { title: "Palmiers décoratifs — 275 DT", text: "Livraison dans toute la Tunisie.", path: "/produits/palmiers/", image: "/Palmier éventail.jpeg" },
          { title: "Plantes d'intérieur", text: "Une vingtaine de variétés décoratives.", path: "/produits/plantes-interieur/", image: "/Faux philodendron.jpeg" },
          { title: "Engrais", text: "Pour renforcer vos plantes et votre jardin.", path: "/produits/engrais/", image: "/engrais bio-organique.jpeg" },
        ],
      },
      {
        type: "related",
        h2: "Nos pages les plus demandées",
        links: [
          { label: "Gazon Tunisie", path: "/gazon-tunisie/", description: "Prix, zones de livraison, commande" },
          { label: "Palmier Tunisie", path: "/palmier-tunisie/", description: "Prix, livraison, commande" },
          { label: "Zones de livraison", path: "/livraison/", description: "Grand Tunis, Nabeul, Sousse, Sfax..." },
          { label: "Blog jardinage", path: "/blog/", description: "Conseils de pose et d'entretien" },
        ],
      },
    ],
  });
}

function gazonCategoryPage() {
  return renderContentPage({
    path: "/produits/gazon/",
    title: "Gazon naturel | Catégorie produit - Green Garden",
    metaDescription:
      "La catégorie gazon naturel de Green Garden : gazon en rouleau à 9 DT/m², livraison gratuite Grand Tunis et Nabeul, sur devis ailleurs en Tunisie.",
    eyebrow: "Catégorie",
    h1: "Gazon naturel",
    intro:
      "Notre catégorie gazon regroupe le gazon naturel en rouleau, vendu 9 DT/m² partout en Tunisie, avec livraison gratuite dans le Grand Tunis et à Nabeul.",
    breadcrumb: [PRODUITS_BREADCRUMB_ROOT, { label: "Gazon", path: "/produits/gazon/" }],
    sections: [
      {
        type: "related",
        h2: "Voir aussi",
        links: [
          { label: "Gazon Tunisie (page complète)", path: "/gazon-tunisie/", description: "Prix, zones, FAQ et commande" },
          { label: "Gazon naturel vs synthétique", path: "/gazon-naturel/", description: "Comprendre les différences" },
          { label: "Gazon en rouleau", path: "/gazon-en-rouleau/", description: "Format et calcul de surface" },
          { label: "Acheter du gazon", path: "/acheter-gazon/", description: "Commander en 3 étapes" },
        ],
      },
    ],
  });
}

function palmiersCategoryPage() {
  return renderContentPage({
    path: "/produits/palmiers/",
    title: "Palmiers décoratifs | Catégorie produit - Green Garden",
    metaDescription:
      "La catégorie palmiers décoratifs de Green Garden : palmier à 275 DT, livraison dans toute la Tunisie selon la région.",
    eyebrow: "Catégorie",
    h1: "Palmiers décoratifs",
    intro:
      "Notre catégorie palmiers regroupe le palmier décoratif d'ornement, vendu 275 DT et livrable dans toute la Tunisie, frais calculés selon votre région.",
    breadcrumb: [PRODUITS_BREADCRUMB_ROOT, { label: "Palmiers", path: "/produits/palmiers/" }],
    sections: [
      {
        type: "related",
        h2: "Voir aussi",
        links: [
          { label: "Palmier Tunisie (page complète)", path: "/palmier-tunisie/", description: "Prix, livraison, FAQ et commande" },
          { label: "Acheter un palmier", path: "/acheter-palmier/", description: "Commander en 3 étapes" },
          { label: "Palmier de jardin", path: "/palmier-jardin/", description: "Pour l'aménagement paysager" },
          { label: "Palmier décoratif", path: "/palmier-decoratif/", description: "Pour terrasses et entrées" },
        ],
      },
    ],
  });
}

function plantesInterieurPage() {
  return renderContentPage({
    path: "/produits/plantes-interieur/",
    title: "Plantes d'intérieur | Catalogue Green Garden",
    metaDescription:
      "Découvrez notre catalogue de plantes d'intérieur décoratives : cactus, palmiers d'intérieur, ficus, dragonniers et plus. Prix sur demande via WhatsApp.",
    eyebrow: "Catégorie",
    h1: "Plantes d'intérieur",
    intro:
      "Green Garden propose une vingtaine de variétés de plantes d'intérieur décoratives, robustes et faciles à vivre. Consultez le catalogue complet et demandez le prix directement par WhatsApp.",
    breadcrumb: [PRODUITS_BREADCRUMB_ROOT, { label: "Plantes d'intérieur", path: "/produits/plantes-interieur/" }],
    sections: [
      {
        type: "list",
        h2: "Variétés disponibles dans notre catalogue",
        items: plantesInterieur,
      },
      {
        type: "cta",
        heading: "Consultez le catalogue complet",
        text: "Retrouvez toutes nos plantes d'intérieur avec photos sur la page d'accueil et demandez le prix par WhatsApp.",
        buttonLabel: "Voir le catalogue",
        whatsappMessage: "Bonjour, je souhaite des informations sur vos plantes d'intérieur.",
        secondary: { label: "Voir le catalogue en images", path: "/#plantes" },
      },
    ],
  });
}

function engraisPage() {
  return renderContentPage({
    path: "/produits/engrais/",
    title: "Engrais pour plantes et jardin | Green Garden",
    metaDescription:
      "Engrais Green Garden pour renforcer vos plantes d'intérieur, votre gazon et vos palmiers. Conseils d'utilisation et commande par WhatsApp.",
    eyebrow: "Catégorie",
    h1: "Engrais pour plantes et jardin",
    intro:
      "Un bon engrais soutient la croissance de vos plantes d'intérieur, de votre gazon fraîchement posé et de vos palmiers. Green Garden propose des solutions adaptées à chaque usage.",
    heroImage: { src: "/engrais bio-organique.jpeg", alt: "Engrais bio-organique Green Garden", width: 800, height: 600 },
    breadcrumb: [PRODUITS_BREADCRUMB_ROOT, { label: "Engrais", path: "/produits/engrais/" }],
    sections: [
      {
        type: "list",
        h2: "Quand utiliser un engrais ?",
        items: [
          "Après la pose d'un gazon naturel, pour accélérer l'enracinement",
          "Au redémarrage de la végétation au printemps",
          "Pour soutenir la croissance d'un palmier récemment planté",
          "Pour redonner de la vigueur à des plantes d'intérieur fatiguées",
        ],
      },
      {
        type: "cta",
        heading: "Commandez votre engrais",
        text: "Contactez-nous par WhatsApp pour connaître la référence adaptée à votre projet.",
        buttonLabel: "Commander sur WhatsApp",
        whatsappMessage: "Bonjour, je souhaite commander de l'engrais.",
      },
    ],
  });
}

function build(registerPage) {
  registerPage("/produits/", hubPage());
  registerPage("/produits/gazon/", gazonCategoryPage());
  registerPage("/produits/palmiers/", palmiersCategoryPage());
  registerPage("/produits/plantes-interieur/", plantesInterieurPage());
  registerPage("/produits/engrais/", engraisPage());
}

module.exports = { build };
