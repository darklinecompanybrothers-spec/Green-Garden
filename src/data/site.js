// Données globales du site : identité de marque, coordonnées (NAP), horaires,
// tarifs des produits phares et réseaux sociaux. Modifier ici se répercute
// automatiquement sur tout le site généré (schema.org, footer, CTA...).

// Incrémenter cette valeur à chaque modification de styles.css / app.js / nav.js /
// contact.js pour forcer les navigateurs à récupérer la nouvelle version au lieu
// de servir un fichier mis en cache (évite un site "cassé" après une mise à jour).
const ASSET_VERSION = "10";

const SITE = {
  name: "Green Garden",
  assetVersion: ASSET_VERSION,
  legalName: "Green Garden",
  domain: "https://greengardentn.shop",
  defaultLocale: "fr_TN",
  language: "fr",
  country: "Tunisie",
  description:
    "Green Garden est une jardinerie tunisienne spécialisée dans la vente de gazon naturel en rouleau, de palmiers décoratifs, de plantes d'intérieur et d'engrais, avec livraison dans tout le pays.",

  phoneDisplay: "+216 58 233 020",
  phoneE164: "+21658233020",
  whatsappNumber: "21658233020",
  email: "contact@greengardentn.shop",

  address: {
    locality: "Nabeul",
    region: "Nabeul",
    country: "TN",
    countryName: "Tunisie",
  },

  hours: {
    opens: "08:00",
    closes: "19:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    label: "Tous les jours, 8h - 19h",
  },

  social: {
    instagram: "https://www.instagram.com/greengardentnshop/",
    facebook: "https://www.facebook.com/jardinerie.green.garden/?locale=fr_FR",
    whatsapp: "https://wa.me/21658233020",
    googleMaps:
      "https://www.google.com/maps/place/Green+Garden/data=!4m2!3m1!1s0x0:0xbcffd81209e52333?sa=X&ved=1t:2428&ictx=111",
  },

  logo: "/logo.png",
  defaultOgImage: "/123699.jpeg",

  products: {
    gazon: {
      name: "Gazon naturel",
      price: 9,
      currency: "TND",
      unit: "m²",
      priceLabel: "9 DT / m²",
      image: "/gazon.jpg",
    },
    palmier: {
      name: "Palmier décoratif",
      price: 490,
      currency: "TND",
      unit: "m",
      priceLabel: "490 DT / m",
      deliveryNote: "Livraison calculée selon votre adresse, communiquée avant confirmation de commande.",
      image: "/palmier-eventail.jpeg",
    },
    terreVegetale: {
      name: "Terre végétale",
      price: 100,
      currency: "TND",
      unit: "m³",
      priceLabel: "100 DT / m³",
      deliveryNote: "Livraison calculée selon votre adresse, communiquée avant confirmation de commande.",
      image: "/acheter-terre-vegetale-tunisie.jpg",
    },
  },

  credit: {
    label: "DCB Authority Group",
    url: "https://dcbag.net/",
  },
};

function buildWhatsAppUrl(message) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function absoluteUrl(path) {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.domain}${clean}`;
}

module.exports = { SITE, buildWhatsAppUrl, absoluteUrl };
