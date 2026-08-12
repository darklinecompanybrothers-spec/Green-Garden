const { renderContentPage } = require("../templates/page");
const { renderPage } = require("../templates/layout");
const { renderBreadcrumb } = require("../templates/breadcrumb");
const { renderSections } = require("../templates/components");
const { faqPage } = require("../templates/schema");
const { SITE } = require("../data/site");
const { localizedPath } = require("../data/i18n");
const { UI } = require("../data/ui-strings");

const POURQUOI_TEXT = {
  fr: {
    title: "Pourquoi choisir Green Garden ? | Gazon & Palmier en Tunisie",
    metaDescription: "Prix clair, livraison gratuite Grand Tunis & Nabeul, réactivité WhatsApp : pourquoi choisir Green Garden pour votre gazon et vos palmiers.",
    eyebrow: "Green Garden",
    h1: "Pourquoi choisir Green Garden ?",
    intro: "Un prix clair, une livraison organisée dans toute la Tunisie et des conseils concrets : voici ce qui distingue Green Garden pour votre gazon naturel et vos palmiers décoratifs.",
    label: "Pourquoi nous choisir",
    listH2: "Ce qui nous distingue",
    list: ["Un prix unique et transparent : 9 DT/m² pour le gazon, 490 DT/m pour le palmier, sans coût caché", "Une livraison gratuite dans le Grand Tunis et à Nabeul pour le gazon naturel et le palmier décoratif", "Une livraison organisée sur devis dans le reste de la Tunisie", "Une prise de contact rapide et directe par WhatsApp, sans compte à créer", "Des conseils de pose et d'entretien fournis avec chaque commande", "Une offre complète : gazon, palmiers, plantes d'intérieur et engrais"],
    ctaHeading: "Discutons de votre projet",
    ctaText: "Décrivez-nous votre jardin ou votre projet d'aménagement, nous vous conseillons la meilleure solution.",
    ctaButton: "Contacter Green Garden",
    ctaMessage: "Bonjour, je souhaite être conseillé pour mon projet de jardin.",
    ctaSecondary: "En savoir plus sur nous",
    relatedH2: "Découvrir nos produits",
    related: [
      ["Gazon Tunisie", "/gazon-tunisie/", "9 DT/m², livraison gratuite Grand Tunis et Nabeul"],
      ["Palmier Tunisie", "/palmier-tunisie/", "490 DT/m, livraison gratuite Grand Tunis et Nabeul"],
    ],
  },
  en: {
    title: "Why Choose Green Garden? | Lawn & Palm Tree in Tunisia",
    metaDescription: "Clear pricing, free delivery in Greater Tunis & Nabeul, WhatsApp responsiveness: why choose Green Garden for your lawn and palm trees.",
    eyebrow: "Green Garden",
    h1: "Why choose Green Garden?",
    intro: "A clear price, delivery arranged across Tunisia and concrete advice: here is what sets Green Garden apart for your natural lawn and decorative palm trees.",
    label: "Why choose us",
    listH2: "What sets us apart",
    list: ["A single, transparent price: 9 DT/sqm for lawn, 490 DT/m for the palm tree, no hidden cost", "Free delivery in Greater Tunis and Nabeul for natural lawn and the decorative palm tree", "Delivery arranged on quote across the rest of Tunisia", "Fast, direct contact via WhatsApp, no account needed", "Laying and care advice provided with every order", "A complete range: lawn, palm trees, indoor plants and fertilizer"],
    ctaHeading: "Let's discuss your project",
    ctaText: "Tell us about your garden or landscaping project, we will advise you on the best solution.",
    ctaButton: "Contact Green Garden",
    ctaMessage: "Hello, I would like advice for my garden project.",
    ctaSecondary: "Learn more about us",
    relatedH2: "Discover our products",
    related: [
      ["Lawn Tunisia", "/gazon-tunisie/", "9 DT/sqm, free delivery in Greater Tunis and Nabeul"],
      ["Palm Tree Tunisia", "/palmier-tunisie/", "490 DT/m, free delivery in Greater Tunis and Nabeul"],
    ],
  },
  ar: {
    title: "لماذا تختارون Green Garden؟ | عشب ونخيل في تونس",
    metaDescription: "سعر واضح، توصيل مجاني في تونس الكبرى ونابل، سرعة استجابة عبر واتساب: لماذا تختارون Green Garden لعشبكم ونخيلكم.",
    eyebrow: "Green Garden",
    h1: "لماذا تختارون Green Garden؟",
    intro: "سعر واضح، توصيل مُنظَّم في كل تونس ونصائح ملموسة: إليكم ما يميز Green Garden لعشبكم الطبيعي ونخيلكم الزينة.",
    label: "لماذا نحن",
    listH2: "ما يميزنا",
    list: ["سعر موحد وشفاف: 9 دينار/م² للعشب، 490 دينار/م للنخلة، دون تكلفة مخفية", "توصيل مجاني في تونس الكبرى ونابل للعشب الطبيعي ونخيل الزينة", "توصيل مُنظَّم حسب الطلب في بقية تونس", "تواصل سريع ومباشر عبر واتساب، دون حساب يُنشأ", "نصائح تركيب وعناية مع كل طلبية", "عرض كامل: عشب، نخيل، نباتات داخلية وأسمدة"],
    ctaHeading: "لنتحدث عن مشروعكم",
    ctaText: "صفوا لنا حديقتكم أو مشروع التهيئة، وسننصحكم بأفضل حل.",
    ctaButton: "تواصلوا مع Green Garden",
    ctaMessage: "مرحباً، أود الحصول على نصيحة لمشروع حديقتي.",
    ctaSecondary: "اعرفوا المزيد عنا",
    relatedH2: "اكتشفوا منتجاتنا",
    related: [
      ["عشب تونس", "/gazon-tunisie/", "9 دينار/م²، توصيل مجاني في تونس الكبرى ونابل"],
      ["نخيل تونس", "/palmier-tunisie/", "490 دينار/م، توصيل مجاني في تونس الكبرى ونابل"],
    ],
  },
};

function pourquoiChoisirPage(lang) {
  const t = POURQUOI_TEXT[lang];
  return renderContentPage({
    basePath: "/pourquoi-choisir-green-garden/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    breadcrumb: [{ label: t.label, path: localizedPath("/pourquoi-choisir-green-garden/", lang) }],
    sections: [
      { type: "list", h2: t.listH2, items: t.list },
      {
        type: "cta",
        heading: t.ctaHeading,
        text: t.ctaText,
        buttonLabel: t.ctaButton,
        whatsappMessage: t.ctaMessage,
        secondary: { label: t.ctaSecondary, path: localizedPath("/a-propos/", lang) },
      },
      {
        type: "related",
        h2: t.relatedH2,
        links: t.related.map(([label, path, description]) => ({ label, path: localizedPath(path, lang), description })),
      },
    ],
  });
}

const APROPOS_TEXT = {
  fr: {
    title: "À propos de Green Garden | Jardinerie en Tunisie",
    metaDescription: "Green Garden est une jardinerie tunisienne basée à Nabeul, spécialisée dans le gazon naturel, les palmiers décoratifs, les plantes d'intérieur et l'engrais.",
    eyebrow: "À propos",
    h1: "Green Garden, une jardinerie tunisienne basée à Nabeul",
    intro: "Green Garden accompagne particuliers et professionnels en Tunisie dans l'aménagement de leurs espaces verts, avec une offre centrée sur le gazon naturel, les palmiers décoratifs, les plantes d'intérieur et l'engrais.",
    label: "À propos",
    h2a: "Notre activité",
    pa: [
      `Basé à ${SITE.address.locality}, Green Garden livre du gazon naturel en rouleau et des palmiers décoratifs dans toute la Tunisie, avec une livraison gratuite des deux produits dans le Grand Tunis et à Nabeul.`,
      "Notre catalogue comprend également une sélection de plantes d'intérieur décoratives et des engrais pour accompagner la croissance de vos plantes, de votre gazon et de vos palmiers.",
    ],
    h2b: "Notre approche",
    pb: ["Nous privilégions un contact direct et rapide par WhatsApp pour répondre à vos questions, établir un devis de livraison ou vous conseiller sur le choix d'une variété adaptée à votre région et à votre projet."],
    ctaHeading: "Une question sur nos produits ou nos délais ?",
    ctaText: "Contactez-nous directement, nous répondons rapidement.",
    ctaButton: "Nous contacter sur WhatsApp",
    ctaMessage: "Bonjour, j'ai une question sur Green Garden.",
    ctaSecondary: "Voir nos coordonnées",
  },
  en: {
    title: "About Green Garden | Garden Center in Tunisia",
    metaDescription: "Green Garden is a Tunisian garden center based in Nabeul, specialising in natural lawn, decorative palm trees, indoor plants and fertilizer.",
    eyebrow: "About",
    h1: "Green Garden, a Tunisian garden center based in Nabeul",
    intro: "Green Garden supports individuals and professionals across Tunisia in landscaping their green spaces, with a range centred on natural lawn, decorative palm trees, indoor plants and fertilizer.",
    label: "About",
    h2a: "Our activity",
    pa: [
      `Based in ${SITE.address.locality}, Green Garden delivers natural rolled lawn and decorative palm trees across Tunisia, with free delivery of both products in Greater Tunis and Nabeul.`,
      "Our catalog also includes a selection of decorative indoor plants and fertilizers to support the growth of your plants, lawn and palm trees.",
    ],
    h2b: "Our approach",
    pb: ["We favour fast, direct contact via WhatsApp to answer your questions, provide a delivery quote or advise you on a variety suited to your region and project."],
    ctaHeading: "A question about our products or lead times?",
    ctaText: "Contact us directly, we reply quickly.",
    ctaButton: "Contact us on WhatsApp",
    ctaMessage: "Hello, I have a question about Green Garden.",
    ctaSecondary: "See our contact details",
  },
  ar: {
    title: "من نحن - Green Garden | جردينري في تونس",
    metaDescription: "Green Garden جردينري تونسية مقرها نابل، متخصصة في العشب الطبيعي ونخيل الزينة والنباتات الداخلية والأسمدة.",
    eyebrow: "من نحن",
    h1: "Green Garden، جردينري تونسية مقرها نابل",
    intro: "ترافق Green Garden الأفراد والمهنيين في تونس في تهيئة مساحاتهم الخضراء، بعرض يتمحور حول العشب الطبيعي ونخيل الزينة والنباتات الداخلية والأسمدة.",
    label: "من نحن",
    h2a: "نشاطنا",
    pa: [
      `تُوصل Green Garden، ومقرها ${SITE.address.locality}، العشب الطبيعي على شكل لفائف ونخيل الزينة في كل تونس، مع توصيل مجاني للمنتجين في تونس الكبرى ونابل.`,
      "يضم كتالوجنا أيضاً مجموعة من النباتات الداخلية الزخرفية والأسمدة لمرافقة نمو نباتاتكم وعشبكم ونخيلكم.",
    ],
    h2b: "نهجنا",
    pb: ["نُفضل التواصل المباشر والسريع عبر واتساب للإجابة على أسئلتكم أو تقديم عرض سعر توصيل أو إرشادكم حول اختيار صنف مناسب لجهتكم ومشروعكم."],
    ctaHeading: "سؤال حول منتجاتنا أو آجالنا؟",
    ctaText: "تواصلوا معنا مباشرة، نرد بسرعة.",
    ctaButton: "تواصلوا معنا عبر واتساب",
    ctaMessage: "مرحباً، لدي سؤال حول Green Garden.",
    ctaSecondary: "شاهدوا معلومات الاتصال",
  },
};

function aProposPage(lang) {
  const t = APROPOS_TEXT[lang];
  return renderContentPage({
    basePath: "/a-propos/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    breadcrumb: [{ label: t.label, path: localizedPath("/a-propos/", lang) }],
    sections: [
      { type: "text", h2: t.h2a, paragraphs: t.pa },
      { type: "text", h2: t.h2b, paragraphs: t.pb },
      {
        type: "cta",
        heading: t.ctaHeading,
        text: t.ctaText,
        buttonLabel: t.ctaButton,
        whatsappMessage: t.ctaMessage,
        secondary: { label: t.ctaSecondary, path: localizedPath("/contact/", lang) },
      },
    ],
  });
}

const FAQ_TEXT = {
  fr: {
    title: "Questions fréquentes | Green Garden",
    description: "Livraison, prix, commande, entretien : retrouvez les réponses aux questions les plus fréquentes sur les produits Green Garden.",
    eyebrow: "Aide",
    h1: "Questions fréquentes",
    intro: "Tout ce que vous devez savoir sur nos produits, notre livraison et nos délais.",
    label: "FAQ",
    generalH2: "Questions générales",
    items: [
      ["Quels produits vend Green Garden ?", "Green Garden vend du gazon naturel en rouleau (9 DT/m²), des palmiers décoratifs (490 DT/m), des plantes d'intérieur décoratives et des engrais."],
      ["Dans quelles régions livrez-vous ?", "Le gazon naturel et le palmier décoratif sont livrés gratuitement dans le Grand Tunis et à Nabeul. Ailleurs en Tunisie, les deux produits restent livrables, sur devis selon la distance."],
      ["Comment commander un produit ?", "La commande se fait directement par WhatsApp : indiquez le produit souhaité, la quantité et votre ville de livraison pour recevoir une confirmation rapide."],
      ["Quels sont vos horaires de disponibilité ?", `Nous sommes disponibles ${UI.fr.hoursLabel.toLowerCase()} pour répondre à vos demandes par téléphone ou WhatsApp.`],
      ["Proposez-vous des conseils d'entretien après l'achat ?", "Oui, nous fournissons des conseils de pose et d'entretien avec chaque commande, et vous pouvez retrouver des guides détaillés sur notre blog."],
      ["Livrez-vous les professionnels (paysagistes, hôtels, entreprises) ?", "Oui, nous fournissons aussi bien des particuliers que des professionnels du paysagisme et des établissements touristiques pour des commandes en volume."],
    ],
    relatedH2: "Vous ne trouvez pas votre réponse ?",
    related: [
      ["Contactez-nous", "/contact/", "Par téléphone ou WhatsApp"],
      ["Gazon Tunisie", "/gazon-tunisie/", "FAQ dédiée au gazon"],
      ["Palmier Tunisie", "/palmier-tunisie/", "FAQ dédiée au palmier"],
    ],
  },
  en: {
    title: "Frequently Asked Questions | Green Garden",
    description: "Delivery, price, ordering, care: find answers to the most frequently asked questions about Green Garden products.",
    eyebrow: "Help",
    h1: "Frequently asked questions",
    intro: "Everything you need to know about our products, delivery and lead times.",
    label: "FAQ",
    generalH2: "General questions",
    items: [
      ["What products does Green Garden sell?", "Green Garden sells natural rolled lawn (9 DT/sqm), decorative palm trees (490 DT/m), decorative indoor plants and fertilizer."],
      ["Which regions do you deliver to?", "Natural lawn and the decorative palm tree are delivered free in Greater Tunis and Nabeul. Elsewhere in Tunisia, both products remain deliverable, on quote based on distance."],
      ["How do I order a product?", "Orders are placed directly on WhatsApp: tell us the desired product, quantity and delivery city to receive a quick confirmation."],
      ["What are your availability hours?", `We are available ${UI.en.hoursLabel.toLowerCase()} to answer your requests by phone or WhatsApp.`],
      ["Do you offer care advice after purchase?", "Yes, we provide laying and care advice with every order, and you can find detailed guides on our blog."],
      ["Do you deliver to professionals (landscapers, hotels, businesses)?", "Yes, we supply both individuals and landscaping professionals and tourist establishments for bulk orders."],
    ],
    relatedH2: "Can't find your answer?",
    related: [
      ["Contact us", "/contact/", "By phone or WhatsApp"],
      ["Lawn Tunisia", "/gazon-tunisie/", "Lawn-specific FAQ"],
      ["Palm Tree Tunisia", "/palmier-tunisie/", "Palm tree-specific FAQ"],
    ],
  },
  ar: {
    title: "الأسئلة الشائعة | Green Garden",
    description: "التوصيل، السعر، الطلب، العناية: اعثروا على إجابات لأكثر الأسئلة شيوعاً حول منتجات Green Garden.",
    eyebrow: "مساعدة",
    h1: "الأسئلة الشائعة",
    intro: "كل ما تحتاجون معرفته حول منتجاتنا وتوصيلنا وآجالنا.",
    label: "الأسئلة الشائعة",
    generalH2: "أسئلة عامة",
    items: [
      ["ما هي المنتجات التي تبيعها Green Garden؟", "تبيع Green Garden عشباً طبيعياً على شكل لفائف (9 دينار/م²)، نخيل زينة (490 دينار/م)، نباتات داخلية زخرفية وأسمدة."],
      ["إلى أي جهات توصلون؟", "يُوصَّل العشب الطبيعي ونخيل الزينة مجاناً في تونس الكبرى ونابل. في بقية تونس، يبقى المنتجان قابلين للتوصيل حسب الطلب وحسب المسافة."],
      ["كيف أطلب منتجاً؟", "يتم الطلب مباشرة عبر واتساب: أذكروا المنتج المرغوب والكمية ومدينة التوصيل لتلقي تأكيد سريع."],
      ["ما هي أوقات توفركم؟", `نحن متوفرون ${UI.ar.hoursLabel} للرد على طلباتكم هاتفياً أو عبر واتساب.`],
      ["هل تقدمون نصائح عناية بعد الشراء؟", "نعم، نقدم نصائح تركيب وعناية مع كل طلبية، ويمكنكم الاطلاع على أدلة مفصلة في مدونتنا."],
      ["هل توصلون المهنيين (مهيئي الحدائق، الفنادق، الشركات)؟", "نعم، نزود الأفراد ومهنيي تهيئة الحدائق والمؤسسات السياحية على حد سواء بطلبيات بكميات كبيرة."],
    ],
    relatedH2: "لم تجدوا إجابتكم؟",
    related: [
      ["تواصلوا معنا", "/contact/", "هاتفياً أو عبر واتساب"],
      ["عشب تونس", "/gazon-tunisie/", "أسئلة شائعة خاصة بالعشب"],
      ["نخيل تونس", "/palmier-tunisie/", "أسئلة شائعة خاصة بالنخيل"],
    ],
  },
};

function faqPageContent(lang) {
  const t = FAQ_TEXT[lang];
  const items = t.items.map(([q, a]) => ({ q, a }));
  const breadcrumbItems = [
    { label: UI[lang].breadcrumbHome, path: localizedPath("/", lang) },
    { label: t.label, path: localizedPath("/faq/", lang) },
  ];
  const { html: breadcrumbHtml, jsonLd: breadcrumbJsonLd } = renderBreadcrumb(breadcrumbItems);

  const bodyHtml = `
    ${breadcrumbHtml}
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">${t.eyebrow}</p>
        <h1>${t.h1}</h1>
        <p class="hero-copy">${t.intro}</p>
      </div>
    </section>
    <div class="section-shell content-sections">
      ${renderSections([{ type: "faq", h2: t.generalH2, items }])}
      ${renderSections([
        {
          type: "related",
          h2: t.relatedH2,
          links: t.related.map(([label, path, description]) => ({ label, path: localizedPath(path, lang), description })),
        },
      ])}
    </div>
  `;

  return renderPage({
    basePath: "/faq/",
    lang,
    title: t.title,
    description: t.description,
    bodyHtml,
    jsonLd: [breadcrumbJsonLd, faqPage(items)],
  });
}

const CONTACT_TEXT = {
  fr: {
    title: "Contact | Green Garden",
    description: (p) => `Contactez Green Garden par téléphone (${p}), WhatsApp ou via notre formulaire de devis. Basé à ${SITE.address.locality}.`,
    eyebrow: "Contact",
    h1: "Contactez Green Garden",
    intro: "Par téléphone, WhatsApp ou via le formulaire de devis ci-dessous.",
    label: "Contact",
    coordsH2: "Nos coordonnées",
    whatsappLink: "Discuter sur WhatsApp",
    devisH2: "Demande de devis",
    devisIntro: "Remplissez ce formulaire : il ouvre directement une conversation WhatsApp pré-remplie avec vos informations.",
    nameLabel: "Nom",
    phoneLabel: "Téléphone",
    productLabel: "Produit souhaité",
    products: ["Gazon naturel", "Palmier décoratif", "Plantes d'intérieur", "Engrais", "Autre"],
    cityLabel: "Ville de livraison",
    messageLabel: "Message",
    submitLabel: "Envoyer via WhatsApp",
    relatedH2: "Voir aussi",
    related: [
      ["Zones de livraison", "/livraison/", "Grand Tunis, Nabeul et le reste de la Tunisie"],
      ["FAQ", "/faq/", "Questions fréquentes"],
    ],
  },
  en: {
    title: "Contact | Green Garden",
    description: (p) => `Contact Green Garden by phone (${p}), WhatsApp or via our quote form. Based in ${SITE.address.locality}.`,
    eyebrow: "Contact",
    h1: "Contact Green Garden",
    intro: "By phone, WhatsApp or via the quote form below.",
    label: "Contact",
    coordsH2: "Our contact details",
    whatsappLink: "Chat on WhatsApp",
    devisH2: "Quote request",
    devisIntro: "Fill in this form: it opens a WhatsApp conversation directly pre-filled with your information.",
    nameLabel: "Name",
    phoneLabel: "Phone",
    productLabel: "Desired product",
    products: ["Natural lawn", "Decorative palm tree", "Indoor plants", "Fertilizer", "Other"],
    cityLabel: "Delivery city",
    messageLabel: "Message",
    submitLabel: "Send via WhatsApp",
    relatedH2: "See also",
    related: [
      ["Delivery zones", "/livraison/", "Greater Tunis, Nabeul and the rest of Tunisia"],
      ["FAQ", "/faq/", "Frequently asked questions"],
    ],
  },
  ar: {
    title: "اتصل بنا | Green Garden",
    description: (p) => `تواصلوا مع Green Garden هاتفياً (${p})، عبر واتساب أو عبر نموذج طلب عرض السعر. مقرنا ${SITE.address.locality}.`,
    eyebrow: "اتصل بنا",
    h1: "تواصلوا مع Green Garden",
    intro: "هاتفياً أو عبر واتساب أو عبر نموذج طلب عرض السعر أدناه.",
    label: "اتصل بنا",
    coordsH2: "معلومات الاتصال",
    whatsappLink: "التحدث عبر واتساب",
    devisH2: "طلب عرض سعر",
    devisIntro: "املؤوا هذا النموذج: سيفتح مباشرة محادثة واتساب مُعبأة مسبقاً بمعلوماتكم.",
    nameLabel: "الاسم",
    phoneLabel: "الهاتف",
    productLabel: "المنتج المرغوب",
    products: ["عشب طبيعي", "نخلة زينة", "نباتات داخلية", "أسمدة", "آخر"],
    cityLabel: "مدينة التوصيل",
    messageLabel: "الرسالة",
    submitLabel: "إرسال عبر واتساب",
    relatedH2: "شاهدوا أيضاً",
    related: [
      ["مناطق التوصيل", "/livraison/", "تونس الكبرى، نابل وبقية تونس"],
      ["الأسئلة الشائعة", "/faq/", "الأسئلة الشائعة"],
    ],
  },
};

function contactPage(lang) {
  const t = CONTACT_TEXT[lang];
  const breadcrumbItems = [
    { label: UI[lang].breadcrumbHome, path: localizedPath("/", lang) },
    { label: t.label, path: localizedPath("/contact/", lang) },
  ];
  const { html: breadcrumbHtml, jsonLd: breadcrumbJsonLd } = renderBreadcrumb(breadcrumbItems);

  const bodyHtml = `
    ${breadcrumbHtml}
    <section class="page-hero section-shell">
      <div class="page-hero-content">
        <p class="eyebrow">${t.eyebrow}</p>
        <h1>${t.h1}</h1>
        <p class="hero-copy">${t.intro}</p>
      </div>
    </section>
    <div class="section-shell content-sections">
      <section class="content-block">
        <h2>${t.coordsH2}</h2>
        <div class="contact-info">
          <p>📍 ${SITE.address.locality}, ${SITE.country}</p>
          <p>📞 <a href="tel:${SITE.phoneE164}">${SITE.phoneDisplay}</a></p>
          <p>💬 <a href="${SITE.social.whatsapp}" target="_blank" rel="noreferrer">${t.whatsappLink}</a></p>
          <p>🕐 ${UI[lang].hoursLabel}</p>
        </div>
      </section>

      <section class="content-block">
        <h2>${t.devisH2}</h2>
        <p>${t.devisIntro}</p>
        <form id="devisForm" class="devis-form">
          <label>${t.nameLabel}
            <input id="devisName" type="text" required autocomplete="name" />
          </label>
          <label>${t.phoneLabel}
            <input id="devisPhone" type="tel" required autocomplete="tel" />
          </label>
          <label>${t.productLabel}
            <select id="devisProduct">
              ${t.products.map((p) => `<option>${p}</option>`).join("")}
            </select>
          </label>
          <label>${t.cityLabel}
            <input id="devisCity" type="text" autocomplete="address-level2" />
          </label>
          <label>${t.messageLabel}
            <textarea id="devisMessage" rows="4"></textarea>
          </label>
          <button type="submit" class="pill-button">${t.submitLabel}</button>
        </form>
      </section>

      ${renderSections([
        {
          type: "related",
          h2: t.relatedH2,
          links: t.related.map(([label, path, description]) => ({ label, path: localizedPath(path, lang), description })),
        },
      ])}
    </div>
  `;

  return renderPage({
    basePath: "/contact/",
    lang,
    title: t.title,
    description: t.description(SITE.phoneDisplay),
    bodyHtml,
    jsonLd: [breadcrumbJsonLd],
    extraScripts: `<script src="/contact.js?v=${SITE.assetVersion}" defer></script>`,
  });
}

function build(registerPage, lang) {
  registerPage(localizedPath("/pourquoi-choisir-green-garden/", lang), pourquoiChoisirPage(lang));
  registerPage(localizedPath("/a-propos/", lang), aProposPage(lang));
  registerPage(localizedPath("/faq/", lang), faqPageContent(lang));
  registerPage(localizedPath("/contact/", lang), contactPage(lang));
}

module.exports = { build };
