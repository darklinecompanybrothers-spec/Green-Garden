const { buildWhatsAppUrl } = require("../data/site");

function renderCta({ heading, text, buttonLabel, whatsappMessage, secondary }) {
  return `
    <section class="content-cta">
      <div>
        <h2>${heading}</h2>
        <p>${text}</p>
      </div>
      <div class="content-cta-actions">
        <a class="pill-button" href="${buildWhatsAppUrl(whatsappMessage)}" target="_blank" rel="noreferrer">${buttonLabel}</a>
        ${secondary ? `<a class="pill-button pill-button-ghost" href="${secondary.path}">${secondary.label}</a>` : ""}
      </div>
    </section>`;
}

function renderText({ h2, paragraphs, id }) {
  return `
    <section class="content-block"${id ? ` id="${id}"` : ""}>
      ${h2 ? `<h2>${h2}</h2>` : ""}
      ${paragraphs.map((p) => `<p>${p}</p>`).join("")}
    </section>`;
}

function renderList({ h2, intro, items, ordered }) {
  const Tag = ordered ? "ol" : "ul";
  return `
    <section class="content-block">
      ${h2 ? `<h2>${h2}</h2>` : ""}
      ${intro ? `<p>${intro}</p>` : ""}
      <${Tag} class="content-list">
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </${Tag}>
    </section>`;
}

function renderTable({ h2, headers, rows }) {
  return `
    <section class="content-block">
      ${h2 ? `<h2>${h2}</h2>` : ""}
      <div class="table-wrap">
        <table class="content-table">
          <thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
          <tbody>
            ${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    </section>`;
}

function renderFaq({ h2, items }) {
  return `
    <section class="content-block faq-block">
      <h2>${h2 || "Questions fréquentes"}</h2>
      <div class="faq-list">
        ${items
          .map(
            (item) => `
          <details class="faq-item">
            <summary>${item.q}</summary>
            <p>${item.a}</p>
          </details>`
          )
          .join("")}
      </div>
    </section>`;
}

function renderRelated({ h2, links }) {
  return `
    <section class="content-block related-links">
      <h2>${h2 || "Pages liées"}</h2>
      <div class="related-grid">
        ${links
          .map(
            (link) => `
          <a class="related-card" href="${link.path}">
            <span>${link.label}</span>
            ${link.description ? `<small>${link.description}</small>` : ""}
          </a>`
          )
          .join("")}
      </div>
    </section>`;
}

function renderImageText({ h2, paragraphs, image, reverse, cta }) {
  return `
    <section class="content-block feature-section${reverse ? " feature-section-reverse" : ""}">
      <div class="feature-copy">
        ${h2 ? `<h2>${h2}</h2>` : ""}
        ${paragraphs.map((p) => `<p>${p}</p>`).join("")}
        ${
          cta
            ? `<a class="pill-button" href="${buildWhatsAppUrl(cta.whatsappMessage)}" target="_blank" rel="noreferrer">${cta.label}</a>`
            : ""
        }
      </div>
      <div class="feature-media">
        <img src="${image.src}" alt="${image.alt}" loading="lazy" />
      </div>
    </section>`;
}

function renderCards({ h2, intro, cards }) {
  return `
    <section class="content-block">
      ${h2 ? `<h2>${h2}</h2>` : ""}
      ${intro ? `<p>${intro}</p>` : ""}
      <div class="card-grid">
        ${cards
          .map(
            (card) => `
          <a class="info-card" href="${card.path}">
            ${card.image ? `<div class="info-card-image"><img src="${card.image}" alt="${card.title}" loading="lazy" /></div>` : ""}
            <div class="info-card-body">
              <h3>${card.title}</h3>
              <p>${card.text}</p>
            </div>
          </a>`
          )
          .join("")}
      </div>
    </section>`;
}

const RENDERERS = {
  text: renderText,
  list: renderList,
  table: renderTable,
  cta: renderCta,
  faq: renderFaq,
  related: renderRelated,
  "image-text": renderImageText,
  cards: renderCards,
};

function renderSections(sections = []) {
  return sections.map((section) => RENDERERS[section.type](section)).join("\n");
}

function collectFaqItems(sections = []) {
  return sections.filter((s) => s.type === "faq").flatMap((s) => s.items);
}

module.exports = { renderSections, collectFaqItems, renderCards, renderCta, renderFaq };
