// Configuration du calculateur de devis, sérialisée dans la page et lue par
// /quote.js. Les montants viennent de pricing.js et de site.js : aucun prix
// n'est écrit en dur ici, ni dans le script navigateur.
const { SITE } = require("./site");
const {
  GAZON_TIER_THRESHOLD,
  GAZON_PRICE_BELOW,
  GAZON_PRICE_FROM,
  GAZON_TYPES,
  TERRE_PACKS,
} = require("./pricing");

const PRIX_TERRE_M3 = SITE.products.terreVegetale.price;

const LABELS = {
  fr: {
    surface: "Surface de gazon à couvrir (m²)",
    type: "Type de gazon naturel",
    terre: "Terre végétale (épaisseur)",
    terreNone: "Sans terre végétale",
    terreOption: (cm) => `${cm} cm d'épaisseur`,
    empty: "Indiquez une surface pour voir votre estimation.",
    cta: "Envoyer ce devis sur WhatsApp",
    note: "Estimation indicative, hors livraison. Les frais de livraison dépendent de votre adresse et vous sont communiqués avant toute confirmation de commande.",
    fallbackMessage: "Bonjour, je souhaite un devis pour du gazon naturel. Voici ma surface : ",
    rowGazon: "Gazon naturel",
    rowTerre: "Terre végétale",
    rowLivraison: "Livraison",
    livraisonValue: "Selon votre adresse",
    rowTotal: "Total hors livraison",
    unitPrice: (p) => `${p} DT/m²`,
    volume: (v) => `${v} m³`,
    money: (n) => `${n} DT`,
    tierHint: (seuil, bas, haut) =>
      `À partir de ${seuil} m², le tarif passe de ${bas} à ${haut} DT/m².`,
    roundUpHint: (seuil, actuel, total, totalSeuil) =>
      `Astuce : ${actuel} m² reviennent à ${total} DT, alors que ${seuil} m² ne coûtent que ${totalSeuil} DT. Il est plus avantageux d'arrondir à ${seuil} m².`,
    message: ({ surface, type, terre, volume, total }) =>
      `Bonjour, je souhaite un devis Green Garden.\n` +
      `• Gazon naturel : ${type}\n` +
      `• Surface : ${surface} m²\n` +
      (terre ? `• Terre végétale : ${terre} cm (${volume} m³)\n` : "") +
      `• Total estimé hors livraison : ${total} DT\n` +
      `Pouvez-vous me confirmer les frais de livraison pour mon adresse ?`,
  },
  en: {
    surface: "Lawn area to cover (sqm)",
    type: "Type of natural lawn",
    terre: "Topsoil (depth)",
    terreNone: "No topsoil",
    terreOption: (cm) => `${cm} cm deep`,
    empty: "Enter an area to see your estimate.",
    cta: "Send this quote on WhatsApp",
    note: "Indicative estimate, excluding delivery. Delivery fees depend on your address and are confirmed before you place your order.",
    fallbackMessage: "Hello, I would like a quote for natural lawn. Here is my area: ",
    rowGazon: "Natural lawn",
    rowTerre: "Topsoil",
    rowLivraison: "Delivery",
    livraisonValue: "Quoted by address",
    rowTotal: "Total excluding delivery",
    unitPrice: (p) => `${p} DT/sqm`,
    volume: (v) => `${v} m³`,
    money: (n) => `${n} DT`,
    tierHint: (seuil, bas, haut) =>
      `From ${seuil} sqm, the rate drops from ${bas} to ${haut} DT/sqm.`,
    roundUpHint: (seuil, actuel, total, totalSeuil) =>
      `Tip: ${actuel} sqm comes to ${total} DT, while ${seuil} sqm costs only ${totalSeuil} DT. Rounding up to ${seuil} sqm is cheaper.`,
    message: ({ surface, type, terre, volume, total }) =>
      `Hello, I would like a Green Garden quote.\n` +
      `• Natural lawn: ${type}\n` +
      `• Area: ${surface} sqm\n` +
      (terre ? `• Topsoil: ${terre} cm (${volume} m³)\n` : "") +
      `• Estimated total excluding delivery: ${total} DT\n` +
      `Could you confirm the delivery fees for my address?`,
  },
  ar: {
    surface: "مساحة العشب المطلوب تغطيتها (م²)",
    type: "نوع العشب الطبيعي",
    terre: "التربة الزراعية (السمك)",
    terreNone: "دون تربة زراعية",
    terreOption: (cm) => `سمك ${cm} سم`,
    empty: "أدخلوا مساحة لعرض تقديركم.",
    cta: "أرسلوا عرض السعر عبر واتساب",
    note: "تقدير إرشادي، دون التوصيل. تعتمد مصاريف التوصيل على عنوانكم وتُبلَّغ قبل تأكيد أي طلب.",
    fallbackMessage: "مرحباً، أود عرض سعر لعشب طبيعي. إليكم مساحتي: ",
    rowGazon: "عشب طبيعي",
    rowTerre: "تربة زراعية",
    rowLivraison: "التوصيل",
    livraisonValue: "حسب عنوانكم",
    rowTotal: "المجموع دون التوصيل",
    unitPrice: (p) => `${p} دينار/م²`,
    volume: (v) => `${v} م³`,
    money: (n) => `${n} دينار`,
    tierHint: (seuil, bas, haut) =>
      `ابتداءً من ${seuil} م²، تنخفض التعريفة من ${bas} إلى ${haut} دينار/م².`,
    roundUpHint: (seuil, actuel, total, totalSeuil) =>
      `نصيحة: ${actuel} م² تكلف ${total} دينار، بينما ${seuil} م² لا تكلف سوى ${totalSeuil} دينار. من الأفضل التقريب إلى ${seuil} م².`,
    message: ({ surface, type, terre, volume, total }) =>
      `مرحباً، أود عرض سعر من Green Garden.\n` +
      `• عشب طبيعي: ${type}\n` +
      `• المساحة: ${surface} م²\n` +
      (terre ? `• تربة زراعية: ${terre} سم (${volume} م³)\n` : "") +
      `• المجموع التقديري دون التوصيل: ${total} دينار\n` +
      `هل يمكنكم تأكيد مصاريف التوصيل لعنواني؟`,
  },
};

// Les fonctions ne sont pas sérialisables en JSON : on les applique ici pour
// produire des gabarits texte que /quote.js remplira par simple substitution.
function quoteConfig(lang) {
  const L = LABELS[lang];
  return {
    lang,
    threshold: GAZON_TIER_THRESHOLD,
    priceBelow: GAZON_PRICE_BELOW,
    priceFrom: GAZON_PRICE_FROM,
    prixTerreM3: PRIX_TERRE_M3,
    whatsappNumber: SITE.whatsappNumber,
    types: GAZON_TYPES.map((t) => ({ key: t.key, label: t.t[lang] })),
    packs: TERRE_PACKS.map((p) => ({
      epaisseurCm: p.epaisseurCm,
      label: L.terreOption(p.epaisseurCm),
    })),
    labels: {
      surface: L.surface,
      type: L.type,
      terre: L.terre,
      terreNone: L.terreNone,
      empty: L.empty,
      cta: L.cta,
      note: L.note,
      fallbackMessage: L.fallbackMessage,
      rowGazon: L.rowGazon,
      rowTerre: L.rowTerre,
      rowLivraison: L.rowLivraison,
      livraisonValue: L.livraisonValue,
      rowTotal: L.rowTotal,
      // Gabarits : {p}, {v}, {n}, {seuil}, {bas}, {haut}, {actuel}, {total}, {totalSeuil}
      unitPrice: L.unitPrice("{p}"),
      volume: L.volume("{v}"),
      money: L.money("{n}"),
      tierHint: L.tierHint("{seuil}", "{bas}", "{haut}"),
      roundUpHint: L.roundUpHint("{seuil}", "{actuel}", "{total}", "{totalSeuil}"),
      message: L.message({
        surface: "{surface}",
        type: "{type}",
        terre: "{terre}",
        volume: "{volume}",
        total: "{total}",
      }),
      messageNoTerre: L.message({
        surface: "{surface}",
        type: "{type}",
        terre: null,
        volume: null,
        total: "{total}",
      }),
    },
  };
}

module.exports = { quoteConfig };
