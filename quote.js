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
  var errorEl = section.querySelector("[data-quote-error]");

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

  /* Desactive le bouton sans le retirer du flux : il reste lisible et
     annonce par les lecteurs d'ecran, mais n'est plus actionnable. */
  function bloque(actif) {
    if (actif) {
      ctaEl.setAttribute("aria-disabled", "true");
      ctaEl.setAttribute("tabindex", "-1");
      ctaEl.classList.add("is-disabled");
    } else {
      ctaEl.removeAttribute("aria-disabled");
      ctaEl.removeAttribute("tabindex");
      ctaEl.classList.remove("is-disabled");
    }
  }

  function render() {
    var brut = form.elements.surface.value.trim();
    var surface = parseFloat(brut);
    var epaisseur = form.elements.terre.value;
    var typeSelect = form.elements.type;
    var typeLabel = typeSelect.options[typeSelect.selectedIndex].text;

    /* Sans surface saisie, on garde le message generique : le client peut
       toujours ecrire au vendeur sans passer par le formulaire. */
    if (!brut) {
      errorEl.hidden = true;
      bloque(false);
      ctaEl.href = waUrl(L.fallbackMessage);
      return;
    }

    /* Sous le minimum commandable, la demande n'est pas envoyable. */
    if (!isFinite(surface) || surface < cfg.minSurface) {
      errorEl.textContent = L.minError;
      errorEl.hidden = false;
      bloque(true);
      ctaEl.removeAttribute("href");
      return;
    }

    errorEl.hidden = true;
    bloque(false);
    ctaEl.href = waUrl(
      fill(epaisseur ? L.message : L.messageNoTerre, {
        surface: brut,
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
  /* Un lien desactive reste cliquable au clavier et a la souris tant qu'on
     n'intercepte pas l'evenement. */
  ctaEl.addEventListener("click", function (e) {
    if (ctaEl.getAttribute("aria-disabled") === "true") e.preventDefault();
  });
  render();
})();
