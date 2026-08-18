/* Formulaire de demande de devis Green Garden.
 *
 * Ce script ne calcule AUCUN prix et n'affiche AUCUN montant : le client fait
 * son propre calcul a partir des tarifs publies sur la page. Le formulaire ne
 * sert qu'a composer proprement sa demande WhatsApp, que le vendeur chiffre
 * ensuite. Ne jamais y reintroduire de total, de sous-total ni de prix
 * unitaire.
 *
 * Le site est entierement statique : il n'y a ni panier ni commande en ligne,
 * tout passe par le message WhatsApp.
 */
(function () {
  "use strict";

  var form = document.querySelector("[data-quote]");
  if (!form) return;

  var section = form.closest(".quote-calc");
  var configEl = section.querySelector("[data-quote-config]");
  var ctaEl = section.querySelector("[data-quote-cta]");

  var cfg;
  try {
    cfg = JSON.parse(configEl.textContent);
  } catch (e) {
    return; // config illisible : on laisse le lien WhatsApp generique en place
  }
  var L = cfg.labels;

  function fill(tpl, values) {
    return String(tpl).replace(/\{(\w+)\}/g, function (m, key) {
      return Object.prototype.hasOwnProperty.call(values, key) ? values[key] : m;
    });
  }

  function waUrl(message) {
    return "https://wa.me/" + cfg.whatsappNumber + "?text=" + encodeURIComponent(message);
  }

  function render() {
    var surface = form.elements.surface.value.trim();
    var epaisseur = form.elements.terre.value;
    var typeSelect = form.elements.type;
    var typeLabel = typeSelect.options[typeSelect.selectedIndex].text;

    /* Sans surface saisie, on garde le message generique : le client peut
       toujours ecrire au vendeur sans passer par le formulaire. */
    if (!surface) {
      ctaEl.href = waUrl(L.fallbackMessage);
      return;
    }

    ctaEl.href = waUrl(
      fill(epaisseur ? L.message : L.messageNoTerre, {
        surface: surface,
        type: typeLabel,
        terre: epaisseur
      })
    );
  }

  form.addEventListener("input", render);
  form.addEventListener("change", render);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
  render();
})();
