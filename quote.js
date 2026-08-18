/* Calculateur de devis Green Garden.
 *
 * Ce script ne contient aucun prix ni aucune traduction : il lit la
 * configuration serialisee par le build dans <script data-quote-config>,
 * elle-meme issue de src/data/pricing.js. Modifier un tarif se fait donc
 * uniquement dans pricing.js.
 *
 * Le site est entierement statique : il n'y a ni panier ni commande en ligne.
 * Le calculateur produit une estimation et compose un message WhatsApp que le
 * client envoie au vendeur. La livraison n'est jamais chiffree ici.
 */
(function () {
  "use strict";

  var form = document.querySelector("[data-quote]");
  if (!form) return;

  var section = form.closest(".quote-calc");
  var configEl = section.querySelector("[data-quote-config]");
  var resultEl = section.querySelector("[data-quote-result]");
  var emptyEl = section.querySelector("[data-quote-empty]");
  var ctaEl = section.querySelector("[data-quote-cta]");

  var cfg;
  try {
    cfg = JSON.parse(configEl.textContent);
  } catch (e) {
    return; // config illisible : on laisse le CTA WhatsApp generique en place
  }
  var L = cfg.labels;

  function fill(tpl, values) {
    return String(tpl).replace(/\{(\w+)\}/g, function (m, key) {
      return Object.prototype.hasOwnProperty.call(values, key) ? values[key] : m;
    });
  }

  function round2(n) {
    return Math.round(n * 100) / 100;
  }

  /* Groupe les milliers, et rend la decimale avec le separateur de la langue. */
  function fmt(n, lang) {
    var parts = String(round2(n)).split(".");
    var groupe = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    if (!parts[1]) return groupe;
    return groupe + (lang === "fr" ? "," : ".") + parts[1];
  }

  function unitPrice(surface) {
    return surface >= cfg.threshold ? cfg.priceFrom : cfg.priceBelow;
  }

  function compute(surface, epaisseurCm) {
    var pu = unitPrice(surface);
    var gazon = round2(surface * pu);
    var terre = null;
    if (epaisseurCm) {
      var volume = round2((surface * epaisseurCm) / 100);
      terre = { epaisseurCm: epaisseurCm, volumeM3: volume, total: round2(volume * cfg.prixTerreM3) };
    }
    return { unitPrice: pu, gazon: gazon, terre: terre, total: round2(gazon + (terre ? terre.total : 0)) };
  }

  function row(label, value) {
    return "<div class=\"quote-row\"><span>" + label + "</span><strong>" + value + "</strong></div>";
  }

  function render() {
    var surface = parseFloat(form.elements.surface.value);
    var epaisseur = parseInt(form.elements.terre.value, 10) || 0;
    var typeSelect = form.elements.type;
    var typeLabel = typeSelect.options[typeSelect.selectedIndex].text;

    if (!isFinite(surface) || surface <= 0) {
      resultEl.hidden = true;
      resultEl.innerHTML = "";
      emptyEl.hidden = false;
      ctaEl.href = "https://wa.me/" + cfg.whatsappNumber + "?text=" + encodeURIComponent(L.fallbackMessage);
      return;
    }

    var q = compute(surface, epaisseur);
    var lang = cfg.lang;
    var html = "";

    html += row(
      L.rowGazon + " (" + fill(L.unitPrice, { p: fmt(q.unitPrice, lang) }) + ")",
      fill(L.money, { n: fmt(q.gazon, lang) })
    );
    if (q.terre) {
      html += row(
        L.rowTerre + " (" + fill(L.volume, { v: fmt(q.terre.volumeM3, lang) }) + ")",
        fill(L.money, { n: fmt(q.terre.total, lang) })
      );
    }
    html += row(L.rowLivraison, L.livraisonValue);
    html += "<div class=\"quote-row quote-row-total\"><span>" + L.rowTotal + "</span><strong>" +
      fill(L.money, { n: fmt(q.total, lang) }) + "</strong></div>";

    /* Sous le seuil, on montre ce que coute reellement le passage au palier
       superieur : c'est une consequence directe de la regle de prix, et
       arrondir est souvent moins cher que la surface demandee. */
    if (surface < cfg.threshold) {
      var auSeuil = compute(cfg.threshold, epaisseur);
      if (auSeuil.total < q.total) {
        html += "<p class=\"quote-hint\">" + fill(L.roundUpHint, {
          seuil: cfg.threshold,
          actuel: fmt(surface, lang),
          total: fmt(q.total, lang),
          totalSeuil: fmt(auSeuil.total, lang)
        }) + "</p>";
      } else {
        html += "<p class=\"quote-hint\">" + fill(L.tierHint, {
          seuil: cfg.threshold,
          bas: fmt(cfg.priceBelow, lang),
          haut: fmt(cfg.priceFrom, lang)
        }) + "</p>";
      }
    }

    resultEl.innerHTML = html;
    resultEl.hidden = false;
    emptyEl.hidden = true;

    var message = fill(q.terre ? L.message : L.messageNoTerre, {
      surface: fmt(surface, lang),
      type: typeLabel,
      terre: q.terre ? q.terre.epaisseurCm : "",
      volume: q.terre ? fmt(q.terre.volumeM3, lang) : "",
      total: fmt(q.total, lang)
    });
    ctaEl.href = "https://wa.me/" + cfg.whatsappNumber + "?text=" + encodeURIComponent(message);
  }

  form.addEventListener("input", render);
  form.addEventListener("change", render);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
  render();
})();
