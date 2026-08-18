// Execute quote.js dans un DOM minimal simule et compare ses resultats
// a ceux de src/data/pricing.js, la source de verite.
const path = require("path");
const REPO = path.join(__dirname, "..");

const { quote, GAZON_TIER_THRESHOLD } = require(path.join(REPO, "src/data/pricing.js"));
const { quoteConfig } = require(path.join(REPO, "src/data/quote-config.js"));
const { SITE } = require(path.join(REPO, "src/data/site.js"));

const cfg = quoteConfig("fr");
const PRIX_TERRE = SITE.products.terreVegetale.price;

// --- DOM minimal ---------------------------------------------------------
function el(extra = {}) {
  return Object.assign(
    {
      hidden: false,
      innerHTML: "",
      textContent: "",
      href: "",
      _listeners: {},
      addEventListener(t, fn) {
        (this._listeners[t] = this._listeners[t] || []).push(fn);
      },
      dispatch(t) {
        (this._listeners[t] || []).forEach((fn) => fn({ preventDefault() {} }));
      },
    },
    extra
  );
}

const surfaceInput = el({ value: "" });
const terreSelect = el({ value: "" });
const typeSelect = el({ value: "americain", selectedIndex: 0, options: [{ text: "Gazon américain" }] });

const result = el();
const empty = el();
const cta = el();
const configEl = el({ textContent: JSON.stringify(cfg) });

const section = {
  querySelector(sel) {
    if (sel === "[data-quote-config]") return configEl;
    if (sel === "[data-quote-result]") return result;
    if (sel === "[data-quote-empty]") return empty;
    if (sel === "[data-quote-cta]") return cta;
    return null;
  },
};

const form = el({
  elements: { surface: surfaceInput, terre: terreSelect, type: typeSelect },
  closest: () => section,
});

global.document = { querySelector: (s) => (s === "[data-quote]" ? form : null) };

require(path.join(REPO, "quote.js"));

// --- Comparaison ---------------------------------------------------------
function nombresDe(html) {
  // recupere les montants "1 234" ou "1 234,5" affiches
  return (html.match(/<strong>[^<]*<\/strong>/g) || []).map((s) =>
    s.replace(/<\/?strong>/g, "").replace(/\u202f|\s/g, "").replace(",", ".")
  );
}

let echecs = 0;
function verifie(surface, epaisseur) {
  surfaceInput.value = String(surface);
  terreSelect.value = epaisseur ? String(epaisseur) : "";
  form.dispatch("input");

  const attendu = quote({ surfaceM2: surface, epaisseurCm: epaisseur || null, prixTerreM3: PRIX_TERRE });
  const affiches = nombresDe(result.innerHTML);
  const totalAffiche = parseFloat(affiches[affiches.length - 1]);
  const gazonAffiche = parseFloat(affiches[0]);

  const okGazon = Math.abs(gazonAffiche - attendu.gazon.total) < 0.01;
  const okTotal = Math.abs(totalAffiche - attendu.sousTotal) < 0.01;
  const okLien = cta.href.startsWith("https://wa.me/" + SITE.whatsappNumber);

  const libelle = `${surface} m²${epaisseur ? " + " + epaisseur + " cm" : ""}`;
  if (okGazon && okTotal && okLien) {
    console.log(`  ok  ${libelle.padEnd(20)} gazon ${attendu.gazon.total} / total ${attendu.sousTotal}`);
  } else {
    console.log(
      `  ECHEC ${libelle} -> gazon affiche ${gazonAffiche} (attendu ${attendu.gazon.total}), ` +
        `total affiche ${totalAffiche} (attendu ${attendu.sousTotal}), lien ${okLien ? "ok" : "KO"}`
    );
    echecs++;
  }
}

console.log("Calculateur navigateur vs pricing.js :");
[
  [20, 0], [49, 0], [50, 0], [51, 0], [100, 0], [1, 0],
  [50, 10], [50, 15], [50, 20], [20, 10], [80, 15], [100, 20],
].forEach(([s, e]) => verifie(s, e));

// Etat vide : pas de resultat, CTA generique
surfaceInput.value = "";
form.dispatch("input");
if (!result.hidden || !cta.href.includes("wa.me")) {
  console.log("  ECHEC etat vide");
  echecs++;
} else {
  console.log("  ok  etat vide -> resultat masque, CTA generique conserve");
}

// Le seuil doit rendre 50 m2 moins cher que 49 m2
const q49 = quote({ surfaceM2: 49, prixTerreM3: PRIX_TERRE });
const q50 = quote({ surfaceM2: GAZON_TIER_THRESHOLD, prixTerreM3: PRIX_TERRE });
if (q50.sousTotal >= q49.sousTotal) {
  console.log("  ECHEC effet de seuil incoherent");
  echecs++;
} else {
  console.log(`  ok  effet de seuil : 49 m² = ${q49.sousTotal} DT > 50 m² = ${q50.sousTotal} DT`);
}

console.log(echecs === 0 ? "\nOK : le calculateur suit pricing.js" : `\nECHEC : ${echecs} cas`);
process.exit(echecs === 0 ? 0 : 1);
