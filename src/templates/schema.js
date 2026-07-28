// Générateurs de données structurées schema.org (JSON-LD).
const { SITE, absoluteUrl } = require("../data/site");

function jsonLdScript(data) {
  const payload = Array.isArray(data) ? data : [data];
  return `<script type="application/ld+json">${JSON.stringify(
    payload.length === 1 ? payload[0] : payload
  )}</script>`;
}

function organization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.domain}/#organization`,
    name: SITE.name,
    url: SITE.domain,
    logo: absoluteUrl(SITE.logo),
    image: absoluteUrl(SITE.defaultOgImage),
    telephone: SITE.phoneE164,
    email: SITE.email,
    sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.whatsapp],
  };
}

function localBusiness({ areaServed } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "GardenStore",
    "@id": `${SITE.domain}/#localbusiness`,
    name: SITE.name,
    url: SITE.domain,
    image: absoluteUrl(SITE.defaultOgImage),
    telephone: SITE.phoneE164,
    priceRange: "9 DT - 275 DT",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: SITE.hours.days,
      opens: SITE.hours.opens,
      closes: SITE.hours.closes,
    },
    areaServed: (areaServed || ["Grand Tunis", "Nabeul", "Tunisie"]).map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.whatsapp],
  };
}

function website() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.domain}/#website`,
    url: SITE.domain,
    name: SITE.name,
    inLanguage: "fr-TN",
    publisher: { "@id": `${SITE.domain}/#organization` },
  };
}

function breadcrumbList(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.path),
    })),
  };
}

function product({ key, name, price, currency, unit, description, image, path, freeShippingRegions }) {
  const offer = {
    "@type": "Offer",
    url: absoluteUrl(path),
    priceCurrency: currency,
    price: String(price),
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
    validFrom: "2026-01-01",
    seller: { "@id": `${SITE.domain}/#organization` },
    // Produits vivants / coupés sur mesure : pas de retour possible (confirmé par le client).
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
      applicableCountry: "TN",
    },
    ...(unit ? { eligibleQuantity: { "@type": "QuantitativeValue", unitText: unit } } : {}),
  };

  // Uniquement pour les zones où la livraison gratuite est réellement garantie
  // (pas de montant inventé pour les zones facturées sur devis).
  if (freeShippingRegions && freeShippingRegions.length) {
    offer.shippingDetails = {
      "@type": "OfferShippingDetails",
      shippingRate: { "@type": "MonetaryAmount", value: "0", currency },
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "TN",
        addressRegion: freeShippingRegions,
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
        transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 2, unitCode: "DAY" },
      },
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE.domain}${path}#product`,
    name,
    description,
    image: absoluteUrl(image),
    brand: { "@type": "Brand", name: SITE.name },
    sku: key,
    offers: offer,
  };
}

function faqPage(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

function article({ headline, description, datePublished, dateModified, image, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: absoluteUrl(image),
    datePublished,
    dateModified: dateModified || datePublished,
    author: { "@id": `${SITE.domain}/#organization` },
    publisher: { "@id": `${SITE.domain}/#organization` },
    mainEntityOfPage: absoluteUrl(path),
  };
}

module.exports = {
  jsonLdScript,
  organization,
  localBusiness,
  website,
  breadcrumbList,
  product,
  faqPage,
  article,
};
