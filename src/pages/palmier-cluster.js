const { renderContentPage } = require("../templates/page");
const { SITE } = require("../data/site");

const RELATED_CLUSTER = {
  h2: "Explorez notre offre palmier",
  links: [
    { label: "Palmier Tunisie", path: "/palmier-tunisie/", description: "La page de référence : prix, livraison, commande" },
    { label: "Acheter un palmier", path: "/acheter-palmier/", description: "Comment commander en 3 étapes" },
    { label: "Palmier de jardin", path: "/palmier-jardin/", description: "Pour l'aménagement paysager" },
    { label: "Palmier décoratif", path: "/palmier-decoratif/", description: "Pour terrasses, entrées et intérieurs" },
    { label: "Gazon naturel", path: "/gazon-tunisie/", description: "Notre autre produit phare, 9 DT/m²" },
    { label: "Toutes les zones de livraison", path: "/livraison/", description: "Frais calculés selon votre région" },
  ],
};

const PALMIER_CTA = {
  heading: "Commandez votre palmier décoratif",
  text: `${SITE.products.palmier.priceLabel}. Livrable dans toute la Tunisie, frais de livraison déterminés selon votre région.`,
  buttonLabel: "Commander sur WhatsApp",
  whatsappMessage: "Bonjour, je souhaite commander un palmier décoratif (275 DT).",
  secondary: { label: "Voir les zones de livraison", path: "/livraison/" },
};

function pillarPage() {
  return renderContentPage({
    path: "/palmier-tunisie/",
    title: "Palmier Tunisie | Palmier décoratif à 275 DT - Green Garden",
    metaDescription:
      "Vente de palmier décoratif en Tunisie à 275 DT. Livraison dans toute la Tunisie, frais déterminés selon la région. Commandez sur WhatsApp avec Green Garden.",
    eyebrow: "Palmier décoratif",
    h1: "Palmier Tunisie : palmier décoratif à 275 DT",
    intro:
      "Green Garden vend et livre des palmiers décoratifs partout en Tunisie, au prix de 275 DT. Les frais de livraison sont déterminés selon votre région et vous sont communiqués avant confirmation de commande.",
    heroImage: { src: "/Palmier éventail.jpeg", alt: "Palmier décoratif Green Garden en Tunisie", width: 900, height: 1600 },
    breadcrumb: [{ label: "Palmier Tunisie", path: "/palmier-tunisie/" }],
    product: {
      key: "palmier-decoratif",
      name: SITE.products.palmier.name,
      price: SITE.products.palmier.price,
      currency: SITE.products.palmier.currency,
      unit: SITE.products.palmier.unit,
      description:
        "Palmier décoratif d'ornement pour jardin, terrasse ou entrée de villa, livrable dans toute la Tunisie.",
      image: SITE.products.palmier.image,
    },
    sections: [
      {
        type: "text",
        h2: "Le palmier décoratif Green Garden",
        paragraphs: [
          "Symbole du jardin méditerranéen et tunisien, le palmier structure un extérieur en un seul sujet : il apporte de la hauteur, de l'ombre légère et un effet immédiatement qualitatif à une allée, une piscine ou une entrée de villa.",
          "Notre palmier décoratif est vendu à l'unité à 275 DT et livrable dans toute la Tunisie. Contrairement au gazon, la livraison n'est pas incluse d'office : elle est calculée selon la distance et votre adresse exacte, puis confirmée avant toute commande.",
        ],
      },
      {
        type: "list",
        h2: "Pourquoi choisir notre palmier décoratif ?",
        items: [
          "Un sujet adapté au climat tunisien, résistant à la chaleur estivale",
          "Un effet visuel immédiat pour structurer un jardin, une entrée ou une terrasse",
          "Un entretien limité une fois le palmier bien installé",
          "Un prix clair et unique de 275 DT",
          "Une livraison organisée dans toute la Tunisie, frais calculés selon la région",
        ],
      },
      { type: "cta", ...PALMIER_CTA },
      { type: "related", ...RELATED_CLUSTER },
      {
        type: "faq",
        h2: "Questions fréquentes sur le palmier Green Garden",
        items: [
          {
            q: "Quel est le prix du palmier décoratif chez Green Garden ?",
            a: "Le palmier décoratif est vendu 275 DT. Les frais de livraison sont déterminés selon votre région et vous sont communiqués avant confirmation.",
          },
          {
            q: "Le palmier est-il livrable partout en Tunisie ?",
            a: "Oui, nous organisons la livraison dans toute la Tunisie. Plus la distance depuis notre dépôt de Nabeul est importante, plus le tarif de livraison peut varier.",
          },
          {
            q: "Quel entretien pour un palmier après plantation ?",
            a: "Un arrosage régulier les premières semaines, puis un arrosage plus espacé suffit pour la plupart des variétés adaptées au climat tunisien. Consultez notre guide d'entretien sur le blog.",
          },
          {
            q: "Vendez-vous aussi du gazon naturel ?",
            a: "Oui, notre gazon naturel en rouleau est vendu 9 DT/m², livré gratuitement dans le Grand Tunis et à Nabeul. Découvrez notre offre sur la page dédiée au gazon.",
          },
        ],
      },
    ],
  });
}

function acheterPalmierPage() {
  return renderContentPage({
    path: "/acheter-palmier/",
    title: "Acheter un palmier en Tunisie - Green Garden",
    metaDescription:
      "Comment acheter un palmier décoratif en Tunisie avec Green Garden : prix 275 DT, livraison dans toute la Tunisie, commande simple par WhatsApp.",
    eyebrow: "Commander",
    h1: "Acheter un palmier en Tunisie avec Green Garden",
    intro:
      "Acheter un palmier décoratif en Tunisie est simple avec Green Garden : un prix fixe, une livraison organisée dans tout le pays et une commande finalisée par WhatsApp.",
    heroImage: { src: "/Palmier éventail.jpeg", alt: "Achat de palmier décoratif en Tunisie", width: 900, height: 1600 },
    breadcrumb: [{ label: "Palmier Tunisie", path: "/palmier-tunisie/" }, { label: "Acheter un palmier", path: "/acheter-palmier/" }],
    sections: [
      {
        type: "list",
        h2: "Comment acheter votre palmier en 3 étapes",
        ordered: true,
        items: [
          "Contactez-nous par WhatsApp en précisant votre ville de livraison",
          "Recevez le tarif de livraison calculé selon votre région et confirmez votre commande",
          "Recevez votre palmier décoratif à 275 DT et procédez à la plantation",
        ],
      },
      {
        type: "table",
        h2: "Récapitulatif du prix",
        headers: ["Produit", "Prix", "Livraison"],
        rows: [["Palmier décoratif", "275 DT", "Sur devis, selon la région"]],
      },
      { type: "cta", ...PALMIER_CTA },
      { type: "related", ...RELATED_CLUSTER },
      {
        type: "faq",
        h2: "Questions fréquentes avant d'acheter un palmier",
        items: [
          {
            q: "Puis-je commander plusieurs palmiers en une seule fois ?",
            a: "Oui, il n'y a pas de limite de quantité. Indiquez le nombre souhaité lors de votre demande sur WhatsApp pour recevoir un devis de livraison groupé.",
          },
          {
            q: "Comment est calculé le tarif de livraison ?",
            a: "Il dépend de la distance entre notre dépôt de Nabeul et votre adresse, ainsi que du nombre de palmiers commandés.",
          },
        ],
      },
    ],
  });
}

function palmierJardinPage() {
  return renderContentPage({
    path: "/palmier-jardin/",
    title: "Palmier de jardin Tunisie | Aménagement paysager - Green Garden",
    metaDescription:
      "Palmier de jardin en Tunisie pour structurer une allée, une piscine ou un espace vert. Palmier décoratif Green Garden à 275 DT, livré dans toute la Tunisie.",
    eyebrow: "Aménagement extérieur",
    h1: "Palmier de jardin en Tunisie : structurer votre extérieur",
    intro:
      "Dans un jardin tunisien, le palmier joue souvent le rôle de point focal : il attire le regard, structure les allées et apporte une ombre légère sans alourdir l'espace. Voici comment bien l'intégrer à votre aménagement.",
    heroImage: { src: "/Arbre du voyageur.jpeg", alt: "Palmier dans un jardin tunisien aménagé", width: 1200, height: 1600 },
    breadcrumb: [{ label: "Palmier Tunisie", path: "/palmier-tunisie/" }, { label: "Palmier de jardin", path: "/palmier-jardin/" }],
    sections: [
      {
        type: "text",
        h2: "Le rôle du palmier dans l'aménagement d'un jardin",
        paragraphs: [
          "Contrairement à une haie ou un massif, un seul palmier bien positionné suffit à donner du caractère à un jardin. Il est souvent utilisé en bordure d'allée, autour d'une piscine, ou en isolé au centre d'une pelouse.",
          "Associé à notre gazon naturel en rouleau, le palmier permet de composer rapidement un extérieur complet, du sol jusqu'à la canopée.",
        ],
      },
      {
        type: "list",
        h2: "Où positionner un palmier dans son jardin ?",
        items: [
          "En bordure d'allée pour accompagner un cheminement",
          "Autour d'une piscine pour un effet resort",
          "En isolé au centre d'une pelouse comme point focal",
          "Près d'une entrée de villa pour marquer l'accès",
        ],
      },
      {
        type: "cta",
        heading: "Composez votre jardin avec palmier et gazon naturel",
        text: "Palmier décoratif à 275 DT et gazon naturel à 9 DT/m², livraison gratuite dans le Grand Tunis et à Nabeul.",
        buttonLabel: "Demander un devis",
        whatsappMessage: "Bonjour, je souhaite un devis pour un palmier et du gazon naturel pour mon jardin.",
        secondary: { label: "Découvrir le gazon naturel", path: "/gazon-tunisie/" },
      },
      { type: "related", ...RELATED_CLUSTER },
      {
        type: "faq",
        h2: "Questions fréquentes - Palmier de jardin",
        items: [
          {
            q: "Quel espace prévoir autour d'un palmier planté en pleine terre ?",
            a: "Prévoyez un espace dégagé suffisant pour l'étalement futur des racines et des palmes, généralement à au moins 1,5 à 2 mètres de toute construction ou canalisation.",
          },
          {
            q: "Peut-on associer plusieurs palmiers dans un même jardin ?",
            a: "Oui, un alignement de palmiers le long d'une allée est un choix d'aménagement fréquent. Contactez-nous pour un devis groupé.",
          },
        ],
      },
    ],
  });
}

function palmierDecoratifPage() {
  return renderContentPage({
    path: "/palmier-decoratif/",
    title: "Palmier décoratif Tunisie - Green Garden",
    metaDescription:
      "Palmier décoratif en Tunisie pour terrasse, entrée de villa ou intérieur lumineux. Palmier Green Garden à 275 DT, livraison dans toute la Tunisie.",
    eyebrow: "Décoration extérieure",
    h1: "Palmier décoratif en Tunisie : effet immédiat pour votre extérieur",
    intro:
      "Au-delà du grand jardin, le palmier décoratif trouve aussi sa place sur une terrasse, près d'une entrée ou dans un patio lumineux, pour un effet exotique immédiat et peu d'entretien.",
    heroImage: { src: "/Palmier nain.jpeg", alt: "Palmier décoratif pour terrasse et entrée", width: 600, height: 600 },
    breadcrumb: [{ label: "Palmier Tunisie", path: "/palmier-tunisie/" }, { label: "Palmier décoratif", path: "/palmier-decoratif/" }],
    sections: [
      {
        type: "text",
        h2: "Un palmier décoratif pour chaque type d'espace",
        paragraphs: [
          "Selon la variété et la taille, un palmier décoratif s'adapte aussi bien à une grande propriété qu'à une terrasse urbaine ou un patio. Il apporte une touche méditerranéenne reconnaissable en un seul élément.",
        ],
      },
      {
        type: "list",
        h2: "Usages courants du palmier décoratif",
        items: [
          "En pot sur une terrasse ou un balcon spacieux",
          "De part et d'autre d'une entrée de villa ou d'un portail",
          "Dans un patio ou une cour intérieure lumineuse",
          "Pour habiller les abords d'une piscine résidentielle",
        ],
      },
      { type: "cta", ...PALMIER_CTA },
      { type: "related", ...RELATED_CLUSTER },
      {
        type: "faq",
        h2: "Questions fréquentes - Palmier décoratif",
        items: [
          {
            q: "Un palmier décoratif peut-il rester en pot durablement ?",
            a: "Certaines variétés s'adaptent bien à la culture en pot pendant plusieurs années, à condition de prévoir un contenant suffisamment grand et un arrosage régulier.",
          },
          {
            q: "Le palmier décoratif convient-il aux professionnels (hôtels, restaurants) ?",
            a: "Oui, de nombreux établissements touristiques et commerces choisissent le palmier décoratif pour leur entrée ou leur terrasse. Contactez-nous pour une commande en volume.",
          },
        ],
      },
    ],
  });
}

function build(registerPage) {
  registerPage("/palmier-tunisie/", pillarPage());
  registerPage("/acheter-palmier/", acheterPalmierPage());
  registerPage("/palmier-jardin/", palmierJardinPage());
  registerPage("/palmier-decoratif/", palmierDecoratifPage());
}

module.exports = { build };
