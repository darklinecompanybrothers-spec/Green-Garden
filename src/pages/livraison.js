const { renderContentPage } = require("../templates/page");
const { villes } = require("../data/villes");
const { SITE } = require("../data/site");

const LIVRAISON_ROOT = { label: "Livraison", path: "/livraison/" };

function hubPage() {
  return renderContentPage({
    path: "/livraison/",
    title: "Zones de livraison Green Garden | Gazon & Palmier en Tunisie",
    metaDescription:
      "Gazon naturel livré gratuitement dans le Grand Tunis et à Nabeul, palmier décoratif livrable dans toute la Tunisie. Découvrez nos zones de livraison.",
    eyebrow: "Livraison",
    h1: "Nos zones de livraison en Tunisie",
    intro:
      "Le gazon naturel est livré gratuitement dans le Grand Tunis et à Nabeul. Le palmier décoratif, comme le gazon dans les autres régions, est livrable partout en Tunisie avec des frais calculés selon la distance.",
    breadcrumb: [{ label: "Livraison", path: "/livraison/" }],
    sections: [
      {
        type: "table",
        h2: "Récapitulatif par zone",
        headers: ["Zone", "Gazon naturel", "Palmier décoratif"],
        rows: [
          ["Grand Tunis", "Livraison gratuite", "Sur devis"],
          ["Nabeul", "Livraison gratuite", "Sur devis"],
          ["Sousse, Monastir, Sfax, Bizerte, Gabès, Hammamet", "Sur devis", "Sur devis"],
          ["Autres gouvernorats", "Sur devis", "Sur devis"],
        ],
      },
      {
        type: "cards",
        h2: "Villes desservies",
        cards: villes.map((v) => ({
          title: v.name,
          text: v.gazonStatus === "free" ? "Gazon livré gratuitement" : "Livraison sur devis",
          path: `/livraison/${v.slug}/`,
        })),
      },
      {
        type: "related",
        h2: "Autres régions",
        links: [
          { label: "Toutes les autres régions de Tunisie", path: "/livraison/autres-regions/", description: "Livraison sur devis dans tout le pays" },
          { label: "Gazon Tunisie", path: "/gazon-tunisie/", description: "Prix et détails du gazon naturel" },
          { label: "Palmier Tunisie", path: "/palmier-tunisie/", description: "Prix et détails du palmier décoratif" },
        ],
      },
      {
        type: "faq",
        h2: "Questions fréquentes sur la livraison",
        items: [
          {
            q: "Pourquoi la livraison du gazon est-elle gratuite seulement dans deux zones ?",
            a: "Le Grand Tunis et Nabeul sont les zones les plus proches de notre dépôt, ce qui nous permet d'offrir la livraison gratuite du gazon sans surcoût. Pour les autres régions, un tarif de transport est calculé selon la distance.",
          },
          {
            q: "Le palmier est-il livrable dans toute la Tunisie ?",
            a: "Oui, nous livrons le palmier décoratif dans tout le pays. Les frais de livraison sont déterminés selon votre région et communiqués avant confirmation de commande.",
          },
        ],
      },
    ],
  });
}

function cityPage(ville) {
  return renderContentPage({
    path: `/livraison/${ville.slug}/`,
    title: ville.metaTitle,
    metaDescription: ville.metaDescription,
    eyebrow: `Livraison ${ville.name}`,
    h1: ville.h1,
    intro: ville.intro,
    breadcrumb: [LIVRAISON_ROOT, { label: ville.name, path: `/livraison/${ville.slug}/` }],
    sections: [
      {
        type: "text",
        h2: `Livrer à ${ville.name}`,
        paragraphs: [ville.useCase, `${ville.name} se trouve ${ville.distanceNote}.`],
      },
      {
        type: "table",
        h2: "Conditions de livraison",
        headers: ["Produit", "Prix", "Livraison"],
        rows: [
          ["Gazon naturel", `${SITE.products.gazon.priceLabel}`, ville.gazonStatus === "free" ? "Gratuite" : "Sur devis"],
          ["Palmier décoratif", `${SITE.products.palmier.priceLabel}`, "Sur devis, selon la région"],
        ],
      },
      {
        type: "cta",
        heading: `Commandez à ${ville.name}`,
        text: "Contactez-nous par WhatsApp avec votre adresse pour recevoir le détail de la livraison.",
        buttonLabel: "Commander sur WhatsApp",
        whatsappMessage: `Bonjour, je souhaite commander du gazon et/ou un palmier, livraison à ${ville.name}.`,
      },
      {
        type: "related",
        h2: "Voir aussi",
        links: [
          { label: "Gazon Tunisie", path: "/gazon-tunisie/", description: "Prix et détails du gazon naturel" },
          { label: "Palmier Tunisie", path: "/palmier-tunisie/", description: "Prix et détails du palmier décoratif" },
          { label: "Toutes les zones de livraison", path: "/livraison/", description: "Vue d'ensemble de nos zones" },
        ],
      },
      { type: "faq", h2: `Questions fréquentes - Livraison ${ville.name}`, items: ville.faq },
    ],
  });
}

function autresRegionsPage() {
  return renderContentPage({
    path: "/livraison/autres-regions/",
    title: "Livraison gazon & palmier dans toute la Tunisie - Green Garden",
    metaDescription:
      "Green Garden livre le gazon naturel et le palmier décoratif dans tout le reste de la Tunisie, sur devis. Contactez-nous pour connaître le tarif de livraison.",
    eyebrow: "Livraison",
    h1: "Livraison dans le reste de la Tunisie",
    intro:
      "En dehors du Grand Tunis, de Nabeul, de Sousse, Monastir, Sfax, Bizerte, Gabès et Hammamet, nous livrons également le gazon naturel et le palmier décoratif dans le reste du pays, sur devis selon la distance.",
    breadcrumb: [LIVRAISON_ROOT, { label: "Autres régions", path: "/livraison/autres-regions/" }],
    sections: [
      {
        type: "text",
        h2: "Une livraison sur devis, partout en Tunisie",
        paragraphs: [
          "Que vous soyez à Kairouan, Kasserine, Gafsa, Médenine, Tozeur, Le Kef, Siliana, Zaghouan, Béja, Jendouba, Kébili, Tataouine, Sidi Bouzid ou Mahdia, contactez-nous avec votre adresse exacte pour recevoir un tarif de livraison transparent.",
        ],
      },
      {
        type: "cta",
        heading: "Demandez votre devis de livraison",
        text: "Indiquez votre ville et le produit souhaité (gazon naturel ou palmier décoratif) pour recevoir un tarif rapide.",
        buttonLabel: "Demander un devis sur WhatsApp",
        whatsappMessage: "Bonjour, je souhaite un devis de livraison pour du gazon et/ou un palmier dans ma région.",
      },
      {
        type: "related",
        h2: "Voir aussi",
        links: [
          { label: "Gazon Tunisie", path: "/gazon-tunisie/", description: "Prix et détails du gazon naturel" },
          { label: "Palmier Tunisie", path: "/palmier-tunisie/", description: "Prix et détails du palmier décoratif" },
          { label: "Toutes les zones de livraison", path: "/livraison/", description: "Vue d'ensemble de nos zones" },
        ],
      },
    ],
  });
}

function build(registerPage) {
  registerPage("/livraison/", hubPage());
  villes.forEach((ville) => registerPage(`/livraison/${ville.slug}/`, cityPage(ville)));
  registerPage("/livraison/autres-regions/", autresRegionsPage());
}

module.exports = { build };
