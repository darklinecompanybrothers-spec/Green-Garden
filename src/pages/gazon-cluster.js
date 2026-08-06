const { renderContentPage } = require("../templates/page");
const { SITE } = require("../data/site");
const { localizedPath } = require("../data/i18n");

function relatedCluster(lang) {
  const T = {
    fr: {
      h2: "Explorez notre offre gazon",
      links: [
        ["Gazon Tunisie", "/gazon-tunisie/", "La page de référence : prix, zones, commande"],
        ["Gazon naturel", "/gazon-naturel/", "Naturel vs synthétique, ce qu'il faut savoir"],
        ["Gazon en rouleau", "/gazon-en-rouleau/", "Format, dimensions, calcul de surface"],
        ["Acheter du gazon", "/acheter-gazon/", "Comment commander en 3 étapes"],
        ["Gazon Grand Tunis", "/gazon-grand-tunis/", "Livraison gratuite dans le Grand Tunis"],
        ["Gazon Nabeul", "/gazon-nabeul/", "Livraison gratuite à Nabeul"],
        ["Palmier décoratif", "/palmier-tunisie/", "Notre autre produit phare, 275 DT"],
        ["Toutes les zones de livraison", "/livraison/", "Sousse, Monastir, Sfax, Bizerte, Gabès, Hammamet..."],
      ],
    },
    en: {
      h2: "Explore our lawn range",
      links: [
        ["Lawn Tunisia", "/gazon-tunisie/", "The reference page: price, zones, ordering"],
        ["Natural lawn", "/gazon-naturel/", "Natural vs synthetic, what you need to know"],
        ["Rolled lawn", "/gazon-en-rouleau/", "Format, dimensions, area calculation"],
        ["Buy lawn", "/acheter-gazon/", "How to order in 3 steps"],
        ["Lawn Greater Tunis", "/gazon-grand-tunis/", "Free delivery in Greater Tunis"],
        ["Lawn Nabeul", "/gazon-nabeul/", "Free delivery in Nabeul"],
        ["Decorative palm tree", "/palmier-tunisie/", "Our other flagship product, 275 DT"],
        ["All delivery zones", "/livraison/", "Sousse, Monastir, Sfax, Bizerte, Gabes, Hammamet..."],
      ],
    },
    ar: {
      h2: "اكتشفوا عرضنا من العشب",
      links: [
        ["عشب تونس", "/gazon-tunisie/", "الصفحة المرجعية: السعر، المناطق، الطلب"],
        ["عشب طبيعي", "/gazon-naturel/", "طبيعي مقابل اصطناعي، ما يجب معرفته"],
        ["عشب على شكل لفائف", "/gazon-en-rouleau/", "الشكل، الأبعاد، حساب المساحة"],
        ["شراء العشب", "/acheter-gazon/", "كيفية الطلب في 3 خطوات"],
        ["عشب تونس الكبرى", "/gazon-grand-tunis/", "توصيل مجاني في تونس الكبرى"],
        ["عشب نابل", "/gazon-nabeul/", "توصيل مجاني في نابل"],
        ["نخيل زينة", "/palmier-tunisie/", "منتجنا الرئيسي الآخر، 275 دينار"],
        ["كل مناطق التوصيل", "/livraison/", "سوسة، المنستير، صفاقس، بنزرت، قابس، الحمامات..."],
      ],
    },
  };
  const t = T[lang];
  return {
    h2: t.h2,
    links: t.links.map(([label, path, description]) => ({ label, path: localizedPath(path, lang), description })),
  };
}

function guidesCluster(lang) {
  const T = {
    fr: {
      h2: "Guides et conseils pour réussir votre gazon",
      links: [
        ["Comment poser du gazon en rouleau", "/blog/comment-poser-gazon-en-rouleau/", "Le guide étape par étape"],
        ["Entretenir son gazon après la pose", "/blog/entretien-gazon-apres-pose/", "Arrosage, tonte et engrais"],
        ["Quand planter du gazon en Tunisie", "/blog/quand-planter-gazon-tunisie/", "Le calendrier par saison"],
        ["Terre végétale — 70 DT/m³", "/acheter-terre-vegetale/", "Pour préparer votre sol avant la pose"],
      ],
    },
    en: {
      h2: "Guides and tips for a successful lawn",
      links: [
        ["How to lay rolled lawn", "/blog/comment-poser-gazon-en-rouleau/", "The step-by-step guide"],
        ["Caring for your lawn after laying", "/blog/entretien-gazon-apres-pose/", "Watering, mowing and fertilizer"],
        ["When to plant lawn in Tunisia", "/blog/quand-planter-gazon-tunisie/", "The season-by-season calendar"],
        ["Topsoil — 70 DT/m³", "/acheter-terre-vegetale/", "To prepare your soil before laying"],
      ],
    },
    ar: {
      h2: "أدلة ونصائح لعشب ناجح",
      links: [
        ["كيف تركبون العشب على شكل لفائف", "/blog/comment-poser-gazon-en-rouleau/", "الدليل خطوة بخطوة"],
        ["العناية بعشبكم بعد التركيب", "/blog/entretien-gazon-apres-pose/", "الري والجزّ والسماد"],
        ["متى تغرسون العشب في تونس", "/blog/quand-planter-gazon-tunisie/", "التقويم حسب الفصول"],
        ["تربة زراعية — 70 دينار/م³", "/acheter-terre-vegetale/", "لتحضير تربتكم قبل التركيب"],
      ],
    },
  };
  const t = T[lang];
  return {
    h2: t.h2,
    links: t.links.map(([label, path, description]) => ({ label, path: localizedPath(path, lang), description })),
  };
}

function gazonCta(lang) {
  const T = {
    fr: {
      heading: "Commandez votre gazon naturel dès aujourd'hui",
      text: `${SITE.products.gazon.priceLabel}, livraison gratuite dans le Grand Tunis et à Nabeul, sur devis ailleurs en Tunisie.`,
      buttonLabel: "Commander sur WhatsApp",
      whatsappMessage: "Bonjour, je souhaite commander du gazon naturel en rouleau (9 DT/m²).",
      secondaryLabel: "Voir les zones de livraison",
    },
    en: {
      heading: "Order your natural lawn today",
      text: `${SITE.products.gazon.priceLabel}, free delivery in Greater Tunis and Nabeul, on quote elsewhere in Tunisia.`,
      buttonLabel: "Order on WhatsApp",
      whatsappMessage: "Hello, I would like to order natural rolled lawn (9 DT/sqm).",
      secondaryLabel: "See delivery zones",
    },
    ar: {
      heading: "اطلبوا عشبكم الطبيعي اليوم",
      text: `${SITE.products.gazon.priceLabel}، توصيل مجاني في تونس الكبرى ونابل، حسب الطلب في بقية تونس.`,
      buttonLabel: "اطلبوا عبر واتساب",
      whatsappMessage: "مرحباً، أود طلب عشب طبيعي على شكل لفائف (9 دينار/م²).",
      secondaryLabel: "شاهدوا مناطق التوصيل",
    },
  };
  const t = T[lang];
  return {
    heading: t.heading,
    text: t.text,
    buttonLabel: t.buttonLabel,
    whatsappMessage: t.whatsappMessage,
    secondary: { label: t.secondaryLabel, path: localizedPath("/livraison/", lang) },
  };
}

function pillarPage(lang) {
  const T = {
    fr: {
      title: "Gazon Tunisie | Gazon naturel en rouleau à 9 DT/m² - Green Garden",
      metaDescription: "Gazon naturel en rouleau à 9 DT/m² en Tunisie. Livraison gratuite dans le Grand Tunis et à Nabeul, sur devis ailleurs. Commandez sur WhatsApp.",
      eyebrow: "Gazon naturel",
      h1: "Gazon Tunisie : gazon naturel en rouleau à 9 DT/m²",
      intro: "Green Garden vend et livre du gazon naturel en rouleau partout en Tunisie, au prix clair de 9 DT/m², avec livraison gratuite dans le Grand Tunis et à Nabeul. Une solution rapide pour obtenir un jardin vert et homogène dès la pose, sans attendre des semaines de germination.",
      breadcrumbLabel: "Gazon Tunisie",
      productDescription: "Gazon naturel en rouleau, prêt à poser, vendu au m² en Tunisie. Livraison gratuite dans le Grand Tunis et à Nabeul.",
      h2a: "Le gazon naturel Green Garden, une référence en Tunisie",
      pa: ["Que ce soit pour le jardin d'une villa, les abords d'une piscine, un espace vert professionnel ou un terrain de sport privé, notre gazon naturel en rouleau permet d'obtenir un résultat immédiat et homogène, contrairement au semis qui demande plusieurs semaines avant d'être praticable.",
        "Chaque rouleau est cultivé puis découpé et livré rapidement pour garantir une reprise optimale après la pose. Nos clients sont principalement des particuliers qui aménagent leur jardin et des professionnels du paysagisme sur l'ensemble du territoire tunisien."],
      h2b: "Pourquoi choisir notre gazon naturel en rouleau ?",
      listB: ["Un rendu vert et homogène dès la pose, sans semis ni attente", "Une variété adaptée au climat tunisien, chaud et sec une grande partie de l'année", "Un prix clair et unique : 9 DT/m², sans surprise", "Une livraison gratuite dans le Grand Tunis et à Nabeul", "Des conseils de pose et d'entretien fournis avec chaque commande"],
      h2c: "Prix et zones de livraison",
      headersC: ["Zone", "Tarif du gazon", "Livraison"],
      rowsC: [["Grand Tunis", "9 DT/m²", "Gratuite"], ["Nabeul", "9 DT/m²", "Gratuite"], ["Sousse, Monastir, Sfax, Bizerte, Gabès, Hammamet et autres régions", "9 DT/m²", "Sur devis, selon la distance"]],
      faqH2: "Questions fréquentes sur le gazon Green Garden",
      faq: [
        ["Quel est le prix du gazon naturel en Tunisie chez Green Garden ?", "Notre gazon naturel en rouleau est vendu 9 DT/m² partout en Tunisie. La livraison est gratuite dans le Grand Tunis et à Nabeul ; ailleurs, elle est facturée sur devis selon la distance."],
        ["Le gazon est-il livré prêt à poser ?", "Oui, le gazon est livré en rouleaux prêts à être installés directement sur un sol préparé. Nous vous conseillons de le poser rapidement après réception pour une meilleure reprise."],
        ["Quel entretien après la pose du gazon ?", "Un arrosage quotidien est recommandé durant les deux premières semaines, puis un arrosage plus espacé et une tonte régulière suffisent. Retrouvez notre guide complet sur le blog."],
        ["Proposez-vous aussi des palmiers décoratifs ?", "Oui, Green Garden vend également des palmiers décoratifs à 275 DT, livrables dans toute la Tunisie. Découvrez notre offre sur la page dédiée aux palmiers."],
      ],
    },
    en: {
      title: "Lawn Tunisia | Natural Rolled Lawn at 9 DT/sqm - Green Garden",
      metaDescription: "Natural rolled lawn at 9 DT/sqm in Tunisia. Free delivery in Greater Tunis and Nabeul, on quote elsewhere. Order on WhatsApp.",
      eyebrow: "Natural lawn",
      h1: "Lawn Tunisia: natural rolled lawn at 9 DT/sqm",
      intro: "Green Garden sells and delivers natural rolled lawn across Tunisia, at the clear price of 9 DT/sqm, with free delivery in Greater Tunis and Nabeul. A fast way to get a green, even garden right after laying, without weeks of waiting for seeds to grow.",
      breadcrumbLabel: "Lawn Tunisia",
      productDescription: "Natural rolled lawn, ready to lay, sold per square metre in Tunisia. Free delivery in Greater Tunis and Nabeul.",
      h2a: "Green Garden natural lawn, a reference in Tunisia",
      pa: ["Whether for a villa garden, poolside area, professional green space or private sports field, our natural rolled lawn delivers an immediate, even result, unlike seeding which needs several weeks before it can be used.",
        "Each roll is grown, cut and delivered quickly to guarantee optimal rooting after laying. Our customers are mainly homeowners landscaping their gardens and landscaping professionals across Tunisia."],
      h2b: "Why choose our natural rolled lawn?",
      listB: ["A green, even result right after laying, no seeding or waiting", "A variety suited to the Tunisian climate, hot and dry for much of the year", "A clear, single price: 9 DT/sqm, no surprises", "Free delivery in Greater Tunis and Nabeul", "Laying and care advice provided with every order"],
      h2c: "Price and delivery zones",
      headersC: ["Zone", "Lawn rate", "Delivery"],
      rowsC: [["Greater Tunis", "9 DT/sqm", "Free"], ["Nabeul", "9 DT/sqm", "Free"], ["Sousse, Monastir, Sfax, Bizerte, Gabes, Hammamet and other regions", "9 DT/sqm", "On quote, based on distance"]],
      faqH2: "Frequently asked questions about Green Garden lawn",
      faq: [
        ["What is the price of natural lawn in Tunisia at Green Garden?", "Our natural rolled lawn is sold at 9 DT/sqm across Tunisia. Delivery is free in Greater Tunis and Nabeul; elsewhere, it is charged on quote based on distance."],
        ["Is the lawn delivered ready to lay?", "Yes, the lawn is delivered in rolls ready to be installed directly on prepared soil. We recommend laying it quickly after receipt for better rooting."],
        ["What care is needed after laying the lawn?", "Daily watering is recommended for the first two weeks, then less frequent watering and regular mowing are enough. Find our full guide on the blog."],
        ["Do you also offer decorative palm trees?", "Yes, Green Garden also sells decorative palm trees at 275 DT, deliverable across Tunisia. Discover our offer on the dedicated palm tree page."],
      ],
    },
    ar: {
      title: "عشب تونس | عشب طبيعي على شكل لفائف بسعر 9 دينار/م² - Green Garden",
      metaDescription: "عشب طبيعي على شكل لفائف بسعر 9 دينار/م² في تونس. توصيل مجاني في تونس الكبرى ونابل، حسب الطلب في بقية الجهات. اطلبوا عبر واتساب.",
      eyebrow: "عشب طبيعي",
      h1: "عشب تونس: عشب طبيعي على شكل لفائف بسعر 9 دينار/م²",
      intro: "تبيع Green Garden وتوصل العشب الطبيعي على شكل لفائف في كل تونس، بسعر واضح قدره 9 دينار/م²، مع توصيل مجاني في تونس الكبرى ونابل. حل سريع للحصول على حديقة خضراء ومتجانسة فور التركيب، دون انتظار أسابيع من الإنبات.",
      breadcrumbLabel: "عشب تونس",
      productDescription: "عشب طبيعي على شكل لفائف، جاهز للتركيب، يُباع بالمتر المربع في تونس. توصيل مجاني في تونس الكبرى ونابل.",
      h2a: "عشب Green Garden الطبيعي، مرجع في تونس",
      pa: ["سواء كان الأمر يتعلق بحديقة فيلا أو محيط مسبح أو مساحة خضراء مهنية أو ملعب رياضي خاص، يتيح عشبنا الطبيعي على شكل لفائف نتيجة فورية ومتجانسة، على عكس البذر الذي يتطلب عدة أسابيع قبل أن يصبح صالحاً للاستخدام.",
        "يُزرع كل لفيف ثم يُقطع ويُوصَّل بسرعة لضمان تجذر مثالي بعد التركيب. عملاؤنا هم بالأساس أفراد يُهيئون حدائقهم ومهنيو تهيئة الحدائق في كل أنحاء تونس."],
      h2b: "لماذا تختارون عشبنا الطبيعي على شكل لفائف؟",
      listB: ["نتيجة خضراء ومتجانسة فور التركيب، دون بذر أو انتظار", "صنف مكيّف مع المناخ التونسي، الحار والجاف معظم أوقات السنة", "سعر واضح وموحد: 9 دينار/م²، دون مفاجآت", "توصيل مجاني في تونس الكبرى ونابل", "نصائح تركيب وعناية مع كل طلبية"],
      h2c: "السعر ومناطق التوصيل",
      headersC: ["المنطقة", "سعر العشب", "التوصيل"],
      rowsC: [["تونس الكبرى", "9 دينار/م²", "مجاني"], ["نابل", "9 دينار/م²", "مجاني"], ["سوسة، المنستير، صفاقس، بنزرت، قابس، الحمامات ومناطق أخرى", "9 دينار/م²", "حسب الطلب، حسب المسافة"]],
      faqH2: "أسئلة شائعة حول عشب Green Garden",
      faq: [
        ["ما هو سعر العشب الطبيعي في تونس لدى Green Garden؟", "يُباع عشبنا الطبيعي على شكل لفائف بسعر 9 دينار/م² في كل تونس. التوصيل مجاني في تونس الكبرى ونابل؛ في بقية الجهات، يُحتسب حسب الطلب وحسب المسافة."],
        ["هل يُوصَّل العشب جاهزاً للتركيب؟", "نعم، يُوصَّل العشب على شكل لفائف جاهزة للتركيب مباشرة على تربة مُحضَّرة. ننصح بتركيبه بسرعة بعد الاستلام لتجذر أفضل."],
        ["ما هي العناية اللازمة بعد تركيب العشب؟", "يُنصح بالري اليومي خلال الأسبوعين الأولين، ثم يكفي ري أقل تكراراً وجزّ منتظم. اطلعوا على دليلنا الكامل في المدونة."],
        ["هل تقدمون أيضاً نخيل الزينة؟", "نعم، تبيع Green Garden أيضاً نخيل الزينة بسعر 275 دينار، قابل للتوصيل في كل تونس. اكتشفوا عرضنا في الصفحة المخصصة للنخيل."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/gazon-tunisie/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/gazon.jpg", alt: t.h1 },
    breadcrumb: [{ label: t.breadcrumbLabel, path: localizedPath("/gazon-tunisie/", lang) }],
    product: {
      key: "gazon-naturel",
      name: SITE.products.gazon.name,
      price: SITE.products.gazon.price,
      currency: SITE.products.gazon.currency,
      unit: SITE.products.gazon.unit,
      description: t.productDescription,
      image: SITE.products.gazon.image,
      freeShippingRegions: ["Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul"],
    },
    sections: [
      { type: "text", h2: t.h2a, paragraphs: t.pa },
      { type: "list", h2: t.h2b, items: t.listB },
      { type: "table", h2: t.h2c, headers: t.headersC, rows: t.rowsC },
      { type: "cta", ...gazonCta(lang) },
      { type: "related", ...relatedCluster(lang) },
      { type: "related", ...guidesCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function gazonNaturelPage(lang) {
  const T = {
    fr: {
      title: "Gazon Naturel : Variétés et Entretien - Green Garden",
      metaDescription: "Gazon naturel en Tunisie : variétés adaptées au climat, avantages face au synthétique et conseils d'entretien. Green Garden vous accompagne avant l'achat.",
      eyebrow: "Gazon naturel",
      h1: "Gazon naturel : variétés, avantages et entretien",
      intro: "Le gazon naturel reste le choix privilégié des jardins tunisiens pour son rendu authentique, sa fraîcheur et son impact positif sur le microclimat d'un extérieur. Voici ce qui le distingue du gazon synthétique et comment bien l'entretenir selon votre région.",
      crumb: [["Gazon Tunisie", "/gazon-tunisie/"], ["Gazon naturel", "/gazon-naturel/"]],
      h2a: "Qu'est-ce que le gazon naturel en rouleau ?",
      pa: ["Le gazon naturel en rouleau est cultivé en pleine terre puis découpé en plaques avec ses racines et une fine couche de terre, avant d'être livré et posé directement sur un sol préparé. Contrairement au semis, il offre un rendu vert immédiat.",
        "En Tunisie, les variétés utilisées sont sélectionnées pour leur résistance à la chaleur et leur capacité à conserver une couleur dense malgré des étés secs."],
      h2b: "Gazon naturel vs gazon synthétique",
      headersB: ["Critère", "Gazon naturel", "Gazon synthétique"],
      rowsB: [["Sensation et aspect", "Naturel, évolutif selon les saisons", "Uniforme, identique toute l'année"], ["Effet rafraîchissant", "Oui, abaisse la température au sol", "Non, peut chauffer au soleil"], ["Entretien", "Arrosage et tonte régulière", "Nettoyage occasionnel, pas de tonte"], ["Impact environnemental", "Favorable (absorption d'eau, biodiversité)", "Matière plastique non biodégradable"], ["Prix Green Garden", "9 DT/m²", "Non proposé actuellement"]],
      h2c: "Le gazon naturel est-il adapté au climat tunisien ?",
      introC: "Oui, à condition de choisir la bonne variété et d'adopter quelques bons réflexes :",
      listC: ["Arroser tôt le matin ou en soirée pour limiter l'évaporation en été", "Tondre régulièrement sans couper trop court pour préserver la fraîcheur du sol", "Prévoir un arrosage plus soutenu les deux premières semaines suivant la pose", "Adapter la fréquence d'arrosage selon la région (plus fréquent à Sfax ou Gabès qu'à Bizerte)"],
      faqH2: "Questions fréquentes sur le gazon naturel",
      faq: [
        ["Le gazon naturel demande-t-il beaucoup d'eau en Tunisie ?", "Les besoins en eau sont plus importants dans les régions chaudes et sèches du sud, et plus modérés dans le nord. Un arrosage adapté à la saison permet de limiter la consommation d'eau."],
        ["Combien de temps met le gazon naturel à s'enraciner ?", "Généralement entre 2 et 3 semaines, à condition de maintenir un arrosage régulier durant cette période."],
        ["Peut-on marcher sur le gazon naturel juste après la pose ?", "Il est préférable d'attendre 2 à 3 semaines avant un usage intensif, le temps que les racines s'installent correctement dans le sol."],
      ],
    },
    en: {
      title: "Natural Lawn: Varieties and Care - Green Garden",
      metaDescription: "Natural lawn in Tunisia: varieties suited to the climate, benefits over synthetic turf and care tips. Green Garden guides you before you buy.",
      eyebrow: "Natural lawn",
      h1: "Natural lawn: varieties, benefits and care",
      intro: "Natural lawn remains the preferred choice for Tunisian gardens for its authentic look, freshness and positive impact on an outdoor microclimate. Here is what sets it apart from synthetic lawn and how to care for it well by region.",
      crumb: [["Lawn Tunisia", "/gazon-tunisie/"], ["Natural lawn", "/gazon-naturel/"]],
      h2a: "What is natural rolled lawn?",
      pa: ["Natural rolled lawn is grown in open ground then cut into slabs with its roots and a thin layer of soil, before being delivered and laid directly on prepared ground. Unlike seeding, it offers an immediate green result.",
        "In Tunisia, the varieties used are selected for their heat resistance and their ability to keep a dense colour despite dry summers."],
      h2b: "Natural lawn vs synthetic lawn",
      headersB: ["Criterion", "Natural lawn", "Synthetic lawn"],
      rowsB: [["Feel and look", "Natural, changes with the seasons", "Uniform, identical all year"], ["Cooling effect", "Yes, lowers ground temperature", "No, can heat up in the sun"], ["Maintenance", "Watering and regular mowing", "Occasional cleaning, no mowing"], ["Environmental impact", "Favourable (water absorption, biodiversity)", "Non-biodegradable plastic material"], ["Green Garden price", "9 DT/sqm", "Not currently offered"]],
      h2c: "Is natural lawn suited to the Tunisian climate?",
      introC: "Yes, provided you choose the right variety and adopt a few good habits:",
      listC: ["Water early morning or evening to limit evaporation in summer", "Mow regularly without cutting too short to preserve soil freshness", "Plan for heavier watering the first two weeks after laying", "Adjust watering frequency by region (more often in Sfax or Gabes than in Bizerte)"],
      faqH2: "Frequently asked questions about natural lawn",
      faq: [
        ["Does natural lawn need a lot of water in Tunisia?", "Water needs are higher in the hot, dry regions of the south, and more moderate in the north. Watering adapted to the season helps limit water consumption."],
        ["How long does natural lawn take to root?", "Generally between 2 and 3 weeks, provided regular watering is maintained during this period."],
        ["Can you walk on natural lawn right after laying?", "It is best to wait 2 to 3 weeks before intensive use, giving the roots time to settle properly into the soil."],
      ],
    },
    ar: {
      title: "عشب طبيعي: الأنواع والعناية - Green Garden",
      metaDescription: "عشب طبيعي في تونس: أنواع مكيّفة مع المناخ، مزايا مقابل الاصطناعي ونصائح العناية. ترشدكم Green Garden قبل الشراء.",
      eyebrow: "عشب طبيعي",
      h1: "عشب طبيعي: الأنواع والمزايا والعناية",
      intro: "يبقى العشب الطبيعي الخيار المفضل للحدائق التونسية لمظهره الأصيل ونضارته وتأثيره الإيجابي على المناخ المصغر للمساحة الخارجية. إليكم ما يميزه عن العشب الاصطناعي وكيفية العناية به جيداً حسب جهتكم.",
      crumb: [["عشب تونس", "/gazon-tunisie/"], ["عشب طبيعي", "/gazon-naturel/"]],
      h2a: "ما هو العشب الطبيعي على شكل لفائف؟",
      pa: ["يُزرع العشب الطبيعي على شكل لفائف في تربة مفتوحة ثم يُقطع إلى ألواح بجذوره وطبقة رقيقة من التراب، قبل أن يُوصَّل ويُركَّب مباشرة على تربة مُحضَّرة. على عكس البذر، يوفر نتيجة خضراء فورية.",
        "في تونس، تُختار الأصناف المستعملة لمقاومتها للحرارة وقدرتها على الحفاظ على لون كثيف رغم الصيف الجاف."],
      h2b: "العشب الطبيعي مقابل العشب الاصطناعي",
      headersB: ["المعيار", "العشب الطبيعي", "العشب الاصطناعي"],
      rowsB: [["الإحساس والمظهر", "طبيعي، يتغير حسب الفصول", "موحد، مطابق طوال السنة"], ["تأثير التبريد", "نعم، يخفض درجة حرارة التربة", "لا، يمكن أن يسخن تحت الشمس"], ["الصيانة", "ري وجزّ منتظم", "تنظيف عرضي، دون جزّ"], ["الأثر البيئي", "إيجابي (امتصاص الماء، التنوع البيولوجي)", "مادة بلاستيكية غير قابلة للتحلل"], ["سعر Green Garden", "9 دينار/م²", "غير متوفر حالياً"]],
      h2c: "هل العشب الطبيعي مناسب للمناخ التونسي؟",
      introC: "نعم، بشرط اختيار الصنف المناسب واتباع بعض العادات الجيدة:",
      listC: ["الري في الصباح الباكر أو المساء للحد من التبخر صيفاً", "الجزّ بانتظام دون قص قصير جداً للحفاظ على نضارة التربة", "توقع ري أكثر كثافة خلال الأسبوعين الأولين بعد التركيب", "تكييف وتيرة الري حسب الجهة (أكثر تكراراً في صفاقس أو قابس مقارنة ببنزرت)"],
      faqH2: "أسئلة شائعة حول العشب الطبيعي",
      faq: [
        ["هل يحتاج العشب الطبيعي كمية كبيرة من الماء في تونس؟", "احتياجات الماء أكبر في المناطق الحارة والجافة بالجنوب، وأكثر اعتدالاً في الشمال. الري المناسب للموسم يساعد على الحد من استهلاك الماء."],
        ["كم من الوقت يحتاج العشب الطبيعي ليتجذر؟", "عادة بين أسبوعين و3 أسابيع، بشرط الحفاظ على ري منتظم خلال هذه الفترة."],
        ["هل يمكن المشي على العشب الطبيعي فور التركيب؟", "يُفضَّل الانتظار أسبوعين إلى 3 أسابيع قبل الاستخدام المكثف، ريثما تستقر الجذور جيداً في التربة."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/gazon-naturel/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/gazon.jpg", alt: t.h1 },
    breadcrumb: t.crumb.map(([label, path]) => ({ label, path: localizedPath(path, lang) })),
    sections: [
      { type: "text", h2: t.h2a, paragraphs: t.pa },
      { type: "table", h2: t.h2b, headers: t.headersB, rows: t.rowsB },
      { type: "list", h2: t.h2c, intro: t.introC, items: t.listC },
      { type: "cta", ...gazonCta(lang) },
      { type: "related", ...relatedCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function gazonEnRouleauPage(lang) {
  const T = {
    fr: {
      title: "Gazon en rouleau Tunisie - Green Garden",
      metaDescription: "Gazon en rouleau en Tunisie : dimensions des plaques, calcul de la surface nécessaire et étapes de pose. Livraison Green Garden à 9 DT/m².",
      eyebrow: "Gazon naturel",
      h1: "Gazon en rouleau en Tunisie : format, pose et calcul de surface",
      intro: "Le gazon en rouleau (aussi appelé gazon en plaques) est la méthode la plus rapide pour obtenir une pelouse dense en Tunisie. Voici comment il se présente, comment calculer la quantité nécessaire et comment réussir sa pose.",
      crumb: [["Gazon Tunisie", "/gazon-tunisie/"], ["Gazon en rouleau", "/gazon-en-rouleau/"]],
      h2a: "Comment se présente le gazon en rouleau ?",
      pa: ["Chaque plaque de gazon en rouleau mesure généralement autour de 40 x 60 cm à 40 x 200 cm selon la découpe, avec quelques millimètres de terre et de racines. Une fois déroulé, le gazon forme un tapis végétal continu, sans coutures visibles après quelques jours de reprise."],
      h2b: "Comment calculer la surface de gazon nécessaire ?",
      introB: "Avant de commander, mesurez votre terrain pour connaître le nombre de m² à couvrir :",
      listB: ["Mesurez la longueur et la largeur de chaque zone à engazonner", "Multipliez longueur x largeur pour obtenir la surface en m² de chaque zone", "Additionnez les surfaces si votre jardin comporte plusieurs zones distinctes", "Ajoutez une marge de 5 à 10% pour les découpes et les bords irréguliers", "Multipliez le total par 9 DT pour connaître le prix de votre commande"],
      h2c: "Les grandes étapes de la pose",
      listC: ["Désherber et niveler le sol, retirer cailloux et débris", "Enrichir la terre avec un peu de compost ou d'engrais si nécessaire", "Dérouler les plaques de gazon en quinconce, sans laisser d'espace entre elles", "Tasser légèrement avec un rouleau ou le dos d'un râteau pour assurer le contact avec le sol", "Arroser abondamment dans les heures qui suivent la pose"],
      ctaHeading: "Recevez votre gazon en rouleau prêt à poser",
      ctaText: "9 DT/m², livraison gratuite dans le Grand Tunis et à Nabeul.",
      ctaButton: "Commander sur WhatsApp",
      ctaMessage: "Bonjour, je souhaite commander du gazon en rouleau. Voici la surface à couvrir : ",
      ctaSecondary: "Lire le guide de pose complet",
      faqH2: "Questions fréquentes sur le gazon en rouleau",
      faq: [
        ["Quelle est la taille d'une plaque de gazon en rouleau ?", "Les plaques mesurent généralement entre 40x60 cm et 40x200 cm. Le prix est calculé au m² total commandé, quelle que soit la découpe."],
        ["Combien de temps le gazon en rouleau reste-t-il utilisable avant la pose ?", "Il est recommandé de poser le gazon dans les 24 à 48h suivant la livraison pour garantir une bonne reprise."],
        ["Faut-il préparer le sol avant de recevoir le gazon ?", "Oui, un sol nivelé, désherbé et légèrement ameubli donne les meilleurs résultats. Nous pouvons vous conseiller selon votre terrain."],
      ],
    },
    en: {
      title: "Rolled Lawn Tunisia - Green Garden",
      metaDescription: "Rolled lawn in Tunisia: slab dimensions, calculating the required area and laying steps. Green Garden delivery at 9 DT/sqm.",
      eyebrow: "Natural lawn",
      h1: "Rolled lawn in Tunisia: format, laying and area calculation",
      intro: "Rolled lawn (also called turf) is the fastest way to get a dense lawn in Tunisia. Here is how it comes packaged, how to calculate the quantity needed and how to lay it successfully.",
      crumb: [["Lawn Tunisia", "/gazon-tunisie/"], ["Rolled lawn", "/gazon-en-rouleau/"]],
      h2a: "What does rolled lawn look like?",
      pa: ["Each rolled lawn slab typically measures around 40 x 60 cm to 40 x 200 cm depending on the cut, with a few millimetres of soil and roots. Once unrolled, the lawn forms a continuous green carpet, with no visible seams after a few days of rooting."],
      h2b: "How to calculate the lawn area needed?",
      introB: "Before ordering, measure your plot to know how many square metres to cover:",
      listB: ["Measure the length and width of each area to be lawned", "Multiply length x width to get the area in sqm of each zone", "Add up the areas if your garden has several distinct zones", "Add a 5 to 10% margin for cutting and irregular edges", "Multiply the total by 9 DT to know the price of your order"],
      h2c: "The main laying steps",
      listC: ["Weed and level the ground, remove stones and debris", "Enrich the soil with a little compost or fertiliser if needed", "Unroll the lawn slabs in a staggered pattern, without leaving gaps between them", "Tamp lightly with a roller or the back of a rake to ensure contact with the ground", "Water abundantly within hours of laying"],
      ctaHeading: "Get your rolled lawn ready to lay",
      ctaText: "9 DT/sqm, free delivery in Greater Tunis and Nabeul.",
      ctaButton: "Order on WhatsApp",
      ctaMessage: "Hello, I would like to order rolled lawn. Here is the area to cover: ",
      ctaSecondary: "Read the full laying guide",
      faqH2: "Frequently asked questions about rolled lawn",
      faq: [
        ["What size is a rolled lawn slab?", "Slabs generally measure between 40x60 cm and 40x200 cm. The price is calculated on the total sqm ordered, regardless of the cut."],
        ["How long does rolled lawn stay usable before laying?", "It is recommended to lay the lawn within 24 to 48 hours of delivery to guarantee good rooting."],
        ["Do I need to prepare the soil before receiving the lawn?", "Yes, level, weeded and slightly loosened soil gives the best results. We can advise you based on your plot."],
      ],
    },
    ar: {
      title: "عشب على شكل لفائف تونس - Green Garden",
      metaDescription: "عشب على شكل لفائف في تونس: أبعاد الألواح، حساب المساحة اللازمة وخطوات التركيب. توصيل Green Garden بسعر 9 دينار/م².",
      eyebrow: "عشب طبيعي",
      h1: "عشب على شكل لفائف في تونس: الشكل، التركيب وحساب المساحة",
      intro: "العشب على شكل لفائف هو أسرع طريقة للحصول على عشب كثيف في تونس. إليكم كيف يُقدَّم، وكيفية حساب الكمية اللازمة، وكيفية نجاح تركيبه.",
      crumb: [["عشب تونس", "/gazon-tunisie/"], ["عشب على شكل لفائف", "/gazon-en-rouleau/"]],
      h2a: "كيف يُقدَّم العشب على شكل لفائف؟",
      pa: ["يبلغ حجم كل لوح من العشب على شكل لفائف عادة حوالي 40x60 سم إلى 40x200 سم حسب القطع، مع بضعة ملليمترات من التراب والجذور. بمجرد فرده، يشكل العشب سجادة نباتية متواصلة، دون خيوط ظاهرة بعد أيام قليلة من التجذر."],
      h2b: "كيف تحسبون مساحة العشب اللازمة؟",
      introB: "قبل الطلب، قيسوا أرضكم لمعرفة عدد الأمتار المربعة الواجب تغطيتها:",
      listB: ["قيسوا طول وعرض كل منطقة يُراد تعشيبها", "اضربوا الطول في العرض للحصول على المساحة بالمتر المربع لكل منطقة", "اجمعوا المساحات إذا كانت حديقتكم تضم عدة مناطق منفصلة", "أضيفوا هامشاً من 5 إلى 10% للقطع والحواف غير المنتظمة", "اضربوا المجموع في 9 دينار لمعرفة سعر طلبيتكم"],
      h2c: "المراحل الكبرى للتركيب",
      listC: ["إزالة الأعشاب الضارة وتسوية التربة، إزالة الحصى والمخلفات", "إثراء التربة بقليل من السماد إذا لزم الأمر", "فرد ألواح العشب بشكل متداخل، دون ترك مسافات بينها", "الدك الخفيف بأسطوانة أو ظهر مِجرفة لضمان التلامس مع التربة", "الري بغزارة في الساعات التي تلي التركيب"],
      ctaHeading: "احصلوا على عشبكم على شكل لفائف جاهزاً للتركيب",
      ctaText: "9 دينار/م²، توصيل مجاني في تونس الكبرى ونابل.",
      ctaButton: "اطلبوا عبر واتساب",
      ctaMessage: "مرحباً، أود طلب عشب على شكل لفائف. إليكم المساحة الواجب تغطيتها: ",
      ctaSecondary: "اقرؤوا دليل التركيب الكامل",
      faqH2: "أسئلة شائعة حول العشب على شكل لفائف",
      faq: [
        ["ما هو حجم لوح العشب على شكل لفائف؟", "تتراوح أبعاد الألواح عادة بين 40x60 سم و40x200 سم. يُحسب السعر حسب مجموع الأمتار المربعة المطلوبة، مهما كان القطع."],
        ["كم من الوقت يبقى العشب على شكل لفائف صالحاً قبل التركيب؟", "يُنصح بتركيب العشب خلال 24 إلى 48 ساعة من التوصيل لضمان تجذر جيد."],
        ["هل يجب تحضير التربة قبل استلام العشب؟", "نعم، تربة مستوية ومنزوعة الأعشاب ومفككة قليلاً تعطي أفضل النتائج. يمكننا إرشادكم حسب أرضكم."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/gazon-en-rouleau/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/gazon.jpg", alt: t.h1 },
    breadcrumb: t.crumb.map(([label, path]) => ({ label, path: localizedPath(path, lang) })),
    sections: [
      { type: "text", h2: t.h2a, paragraphs: t.pa },
      { type: "list", h2: t.h2b, intro: t.introB, items: t.listB },
      { type: "list", h2: t.h2c, ordered: true, items: t.listC },
      {
        type: "cta",
        heading: t.ctaHeading,
        text: t.ctaText,
        buttonLabel: t.ctaButton,
        whatsappMessage: t.ctaMessage,
        secondary: { label: t.ctaSecondary, path: localizedPath("/blog/comment-poser-gazon-en-rouleau/", lang) },
      },
      { type: "related", ...relatedCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function acheterGazonPage(lang) {
  const T = {
    fr: {
      title: "Acheter du gazon en Tunisie | Commande en 3 étapes - Green Garden",
      metaDescription: "Comment acheter du gazon naturel en Tunisie avec Green Garden : prix, zones de livraison et commande simple par WhatsApp. Gazon à 9 DT/m².",
      eyebrow: "Commander",
      h1: "Acheter du gazon en Tunisie avec Green Garden",
      intro: "Commander du gazon naturel en Tunisie n'a jamais été aussi simple : un prix clair au m², une livraison gratuite dans deux régions et une commande finalisée directement par WhatsApp.",
      crumb: [["Gazon Tunisie", "/gazon-tunisie/"], ["Acheter du gazon", "/acheter-gazon/"]],
      h2a: "Comment acheter votre gazon en 3 étapes",
      listA: ["Mesurez la surface de votre jardin en m² à couvrir", "Contactez-nous par WhatsApp avec la surface souhaitée et votre ville", "Recevez votre gazon (livraison gratuite Grand Tunis et Nabeul, sur devis ailleurs) et procédez à la pose"],
      h2b: "Récapitulatif du prix",
      headersB: ["Produit", "Prix", "Livraison"],
      rowsB: [["Gazon naturel en rouleau", "9 DT/m²", "Gratuite (Grand Tunis, Nabeul) / sur devis ailleurs"]],
      faqH2: "Questions fréquentes avant d'acheter",
      faq: [
        ["Quel est le montant minimum de commande ?", "Il n'y a pas de minimum imposé : vous commandez la surface exacte dont vous avez besoin, calculée au m²."],
        ["Comment se passe le paiement ?", "Les modalités de paiement (à la livraison ou autre) vous sont communiquées lors de la confirmation de commande sur WhatsApp."],
        ["Puis-je commander pour un chantier professionnel ?", "Oui, nous fournissons aussi bien des particuliers que des professionnels du paysagisme pour des volumes plus importants."],
      ],
    },
    en: {
      title: "Buy Lawn in Tunisia | Order in 3 Steps - Green Garden",
      metaDescription: "How to buy natural lawn in Tunisia with Green Garden: price, delivery zones and simple ordering via WhatsApp. Lawn at 9 DT/sqm.",
      eyebrow: "Order",
      h1: "Buy lawn in Tunisia with Green Garden",
      intro: "Ordering natural lawn in Tunisia has never been simpler: a clear price per sqm, free delivery in two regions and an order finalised directly on WhatsApp.",
      crumb: [["Lawn Tunisia", "/gazon-tunisie/"], ["Buy lawn", "/acheter-gazon/"]],
      h2a: "How to buy your lawn in 3 steps",
      listA: ["Measure the area of your garden in sqm to cover", "Contact us on WhatsApp with the desired area and your city", "Receive your lawn (free delivery in Greater Tunis and Nabeul, on quote elsewhere) and lay it"],
      h2b: "Price summary",
      headersB: ["Product", "Price", "Delivery"],
      rowsB: [["Natural rolled lawn", "9 DT/sqm", "Free (Greater Tunis, Nabeul) / on quote elsewhere"]],
      faqH2: "Frequently asked questions before buying",
      faq: [
        ["What is the minimum order amount?", "There is no imposed minimum: you order the exact area you need, calculated per sqm."],
        ["How does payment work?", "Payment terms (on delivery or otherwise) are communicated when you confirm your order on WhatsApp."],
        ["Can I order for a professional project?", "Yes, we supply both individuals and landscaping professionals for larger volumes."],
      ],
    },
    ar: {
      title: "شراء العشب في تونس | الطلب في 3 خطوات - Green Garden",
      metaDescription: "كيفية شراء العشب الطبيعي في تونس مع Green Garden: السعر، مناطق التوصيل والطلب البسيط عبر واتساب. عشب بسعر 9 دينار/م².",
      eyebrow: "الطلب",
      h1: "شراء العشب في تونس مع Green Garden",
      intro: "لم يكن طلب العشب الطبيعي في تونس يوماً بهذه البساطة: سعر واضح بالمتر المربع، توصيل مجاني في جهتين وطلب يُنجز مباشرة عبر واتساب.",
      crumb: [["عشب تونس", "/gazon-tunisie/"], ["شراء العشب", "/acheter-gazon/"]],
      h2a: "كيف تشترون عشبكم في 3 خطوات",
      listA: ["قيسوا مساحة حديقتكم بالمتر المربع الواجب تغطيتها", "تواصلوا معنا عبر واتساب مع المساحة المرغوبة ومدينتكم", "استلموا عشبكم (توصيل مجاني في تونس الكبرى ونابل، حسب الطلب في بقية الجهات) وابدؤوا التركيب"],
      h2b: "ملخص السعر",
      headersB: ["المنتج", "السعر", "التوصيل"],
      rowsB: [["عشب طبيعي على شكل لفائف", "9 دينار/م²", "مجاني (تونس الكبرى، نابل) / حسب الطلب في بقية الجهات"]],
      faqH2: "أسئلة شائعة قبل الشراء",
      faq: [
        ["ما هو الحد الأدنى لمبلغ الطلبية؟", "لا يوجد حد أدنى مفروض: تطلبون المساحة الدقيقة التي تحتاجونها، محسوبة بالمتر المربع."],
        ["كيف يتم الدفع؟", "تُبلَّغ لكم طرق الدفع (عند التسليم أو غيرها) عند تأكيد الطلب عبر واتساب."],
        ["هل يمكنني الطلب لمشروع مهني؟", "نعم، نزود الأفراد ومهنيي تهيئة الحدائق على حد سواء بكميات أكبر."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/acheter-gazon/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/gazon.jpg", alt: t.h1 },
    breadcrumb: t.crumb.map(([label, path]) => ({ label, path: localizedPath(path, lang) })),
    sections: [
      { type: "list", h2: t.h2a, ordered: true, items: t.listA },
      { type: "table", h2: t.h2b, headers: t.headersB, rows: t.rowsB },
      { type: "cta", ...gazonCta(lang) },
      { type: "related", ...relatedCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function gazonGrandTunisPage(lang) {
  const T = {
    fr: {
      title: "Gazon Grand Tunis | Livraison gratuite à 9 DT/m² - Green Garden",
      metaDescription: "Gazon naturel en rouleau livré gratuitement dans tout le Grand Tunis (Tunis, Ariana, Ben Arous, Manouba) à 9 DT/m². Commandez avec Green Garden.",
      eyebrow: "Gazon local",
      h1: "Gazon Grand Tunis : livraison gratuite à 9 DT/m²",
      intro: "Le Grand Tunis (Tunis, Ariana, Ben Arous, Manouba) est l'une de nos deux zones de livraison gratuite pour le gazon naturel en rouleau, au prix unique de 9 DT/m².",
      crumb: [["Gazon Tunisie", "/gazon-tunisie/"], ["Gazon Grand Tunis", "/gazon-grand-tunis/"]],
      h2a: "Gazon naturel livré partout dans le Grand Tunis",
      pa: ["Tunis, Ariana, Ben Arous et Manouba bénéficient de la livraison gratuite de notre gazon naturel en rouleau, sans minimum de commande. Que vous soyez à La Marsa, au Bardo, à Ariana ville ou à Ben Arous, notre équipe organise la livraison selon votre disponibilité."],
      h2b: "Secteurs desservis dans le Grand Tunis",
      listB: ["Tunis et ses banlieues nord : La Marsa, Carthage, Sidi Bou Said, Le Kram", "Ariana : Ariana ville, La Soukra, Raoued", "Ben Arous : Ben Arous ville, Rades, Mégrine, Hammam Lif", "Manouba : Manouba ville, Den Den, Oued Ellil"],
      faqH2: "Questions fréquentes - Gazon Grand Tunis",
      faq: [
        ["La livraison est-elle vraiment gratuite partout dans le Grand Tunis ?", "Oui, sans exception, pour toute commande de gazon naturel livrée à Tunis, Ariana, Ben Arous ou Manouba."],
        ["Quel délai de livraison dans le Grand Tunis ?", "En général 24 à 72h ouvrées selon le stock disponible et votre secteur précis."],
      ],
    },
    en: {
      title: "Lawn Greater Tunis | Free Delivery at 9 DT/sqm - Green Garden",
      metaDescription: "Natural rolled lawn delivered free across Greater Tunis (Tunis, Ariana, Ben Arous, Manouba) at 9 DT/sqm. Order with Green Garden.",
      eyebrow: "Local lawn",
      h1: "Lawn Greater Tunis: free delivery at 9 DT/sqm",
      intro: "Greater Tunis (Tunis, Ariana, Ben Arous, Manouba) is one of our two free-delivery zones for natural rolled lawn, at the single price of 9 DT/sqm.",
      crumb: [["Lawn Tunisia", "/gazon-tunisie/"], ["Lawn Greater Tunis", "/gazon-grand-tunis/"]],
      h2a: "Natural lawn delivered everywhere in Greater Tunis",
      pa: ["Tunis, Ariana, Ben Arous and Manouba benefit from free delivery of our natural rolled lawn, with no minimum order. Whether you are in La Marsa, Le Bardo, Ariana city or Ben Arous, our team arranges delivery according to your availability."],
      h2b: "Areas served in Greater Tunis",
      listB: ["Tunis and its northern suburbs: La Marsa, Carthage, Sidi Bou Said, Le Kram", "Ariana: Ariana city, La Soukra, Raoued", "Ben Arous: Ben Arous city, Rades, Megrine, Hammam Lif", "Manouba: Manouba city, Den Den, Oued Ellil"],
      faqH2: "Frequently asked questions - Lawn Greater Tunis",
      faq: [
        ["Is delivery really free everywhere in Greater Tunis?", "Yes, without exception, for any natural lawn order delivered to Tunis, Ariana, Ben Arous or Manouba."],
        ["What is the delivery timeframe in Greater Tunis?", "Generally 24 to 72 business hours depending on available stock and your specific area."],
      ],
    },
    ar: {
      title: "عشب تونس الكبرى | توصيل مجاني بسعر 9 دينار/م² - Green Garden",
      metaDescription: "عشب طبيعي على شكل لفائف يُوصَّل مجاناً في كل تونس الكبرى (تونس، أريانة، بن عروس، منوبة) بسعر 9 دينار/م². اطلبوا مع Green Garden.",
      eyebrow: "عشب محلي",
      h1: "عشب تونس الكبرى: توصيل مجاني بسعر 9 دينار/م²",
      intro: "تُعد تونس الكبرى (تونس، أريانة، بن عروس، منوبة) إحدى منطقتينا للتوصيل المجاني للعشب الطبيعي على شكل لفائف، بسعر موحد قدره 9 دينار/م².",
      crumb: [["عشب تونس", "/gazon-tunisie/"], ["عشب تونس الكبرى", "/gazon-grand-tunis/"]],
      h2a: "عشب طبيعي يُوصَّل في كل أنحاء تونس الكبرى",
      pa: ["تستفيد تونس وأريانة وبن عروس ومنوبة من التوصيل المجاني لعشبنا الطبيعي على شكل لفائف، دون حد أدنى للطلب. سواء كنتم بالمرسى أو الباردو أو مدينة أريانة أو بن عروس، ينظم فريقنا التوصيل حسب توفركم."],
      h2b: "المناطق المخدومة في تونس الكبرى",
      listB: ["تونس وضواحيها الشمالية: المرسى، قرطاج، سيدي بوسعيد، الكرم", "أريانة: مدينة أريانة، السوقرة، رواد", "بن عروس: مدينة بن عروس، رادس، مقرين، حمام الأنف", "منوبة: مدينة منوبة، دن دن، وادي الليل"],
      faqH2: "أسئلة شائعة - عشب تونس الكبرى",
      faq: [
        ["هل التوصيل مجاني فعلاً في كل تونس الكبرى؟", "نعم، دون استثناء، لكل طلبية عشب طبيعي تُوصَّل إلى تونس أو أريانة أو بن عروس أو منوبة."],
        ["ما هي مدة التوصيل في تونس الكبرى؟", "عادة بين 24 و72 ساعة عمل حسب المخزون المتوفر ومنطقتكم الدقيقة."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/gazon-grand-tunis/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/123699.jpeg", alt: t.h1 },
    breadcrumb: t.crumb.map(([label, path]) => ({ label, path: localizedPath(path, lang) })),
    sections: [
      { type: "text", h2: t.h2a, paragraphs: t.pa },
      { type: "list", h2: t.h2b, items: t.listB },
      { type: "cta", ...gazonCta(lang) },
      { type: "related", ...relatedCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function gazonNabeulPage(lang) {
  const T = {
    fr: {
      title: "Gazon Nabeul | Livraison gratuite à 9 DT/m² - Green Garden",
      metaDescription: "Gazon naturel en rouleau livré gratuitement à Nabeul et sa région à 9 DT/m². Green Garden est basé à Nabeul : délais les plus courts du réseau.",
      eyebrow: "Gazon local",
      h1: "Gazon Nabeul : livraison gratuite à 9 DT/m²",
      intro: "Nabeul est la région où se trouve notre dépôt Green Garden. La livraison du gazon naturel y est donc gratuite, avec les délais les plus courts de tout notre réseau de livraison.",
      crumb: [["Gazon Tunisie", "/gazon-tunisie/"], ["Gazon Nabeul", "/gazon-nabeul/"]],
      h2a: "Gazon naturel à Nabeul : notre région de base",
      pa: ["Nabeul, Hammamet, Dar Chaabane El Fehri et Béni Khiar font partie des localités que nous livrons quotidiennement. Étant notre région de base, les délais de livraison y sont les plus courts et le gazon y est toujours livré gratuitement."],
      h2b: "Secteurs desservis dans la région de Nabeul",
      listB: ["Nabeul ville", "Hammamet Nord et Sud", "Dar Chaabane El Fehri", "Béni Khiar", "Korba et Menzel Temime (sur devis selon distance)"],
      faqH2: "Questions fréquentes - Gazon Nabeul",
      faq: [
        ["Le gazon est-il gratuit à livrer partout dans le gouvernorat de Nabeul ?", "La gratuité s'applique à Nabeul ville et aux localités proches comme Hammamet ; pour les zones plus éloignées du gouvernorat, un tarif peut s'appliquer selon la distance exacte."],
        ["Peut-on retirer sa commande directement au dépôt ?", "Selon la disponibilité, un retrait peut être organisé. Contactez-nous par WhatsApp pour le vérifier."],
      ],
    },
    en: {
      title: "Lawn Nabeul | Free Delivery at 9 DT/sqm - Green Garden",
      metaDescription: "Natural rolled lawn delivered free to Nabeul and its region at 9 DT/sqm. Green Garden is based in Nabeul: shortest lead times in the network.",
      eyebrow: "Local lawn",
      h1: "Lawn Nabeul: free delivery at 9 DT/sqm",
      intro: "Nabeul is home to our Green Garden depot. Natural lawn delivery there is therefore free, with the shortest lead times of our entire delivery network.",
      crumb: [["Lawn Tunisia", "/gazon-tunisie/"], ["Lawn Nabeul", "/gazon-nabeul/"]],
      h2a: "Natural lawn in Nabeul: our home base",
      pa: ["Nabeul, Hammamet, Dar Chaabane El Fehri and Béni Khiar are among the towns we deliver to daily. As our home base, delivery times there are the shortest and lawn is always delivered free."],
      h2b: "Areas served in the Nabeul region",
      listB: ["Nabeul city", "Hammamet North and South", "Dar Chaabane El Fehri", "Béni Khiar", "Korba and Menzel Temime (on quote depending on distance)"],
      faqH2: "Frequently asked questions - Lawn Nabeul",
      faq: [
        ["Is lawn free to deliver everywhere in Nabeul governorate?", "Free delivery applies to Nabeul city and nearby towns like Hammamet; for areas further from the governorate, a rate may apply depending on the exact distance."],
        ["Can I pick up my order directly at the depot?", "Depending on availability, pickup can be arranged. Contact us on WhatsApp to check."],
      ],
    },
    ar: {
      title: "عشب نابل | توصيل مجاني بسعر 9 دينار/م² - Green Garden",
      metaDescription: "عشب طبيعي على شكل لفائف يُوصَّل مجاناً إلى نابل وجهتها بسعر 9 دينار/م². مقر Green Garden في نابل: أقصر آجال في الشبكة.",
      eyebrow: "عشب محلي",
      h1: "عشب نابل: توصيل مجاني بسعر 9 دينار/م²",
      intro: "نابل هي الجهة التي يوجد بها مستودع Green Garden. لذلك يكون توصيل العشب الطبيعي هناك مجانياً، بأقصر آجال في كل شبكة توصيلنا.",
      crumb: [["عشب تونس", "/gazon-tunisie/"], ["عشب نابل", "/gazon-nabeul/"]],
      h2a: "العشب الطبيعي في نابل: جهتنا الأساسية",
      pa: ["نابل والحمامات ودار شعبان الفهري وبني خيار من بين المناطق التي نوصل إليها يومياً. بما أنها جهتنا الأساسية، فإن آجال التوصيل هناك هي الأقصر ويُوصَّل العشب دائماً مجاناً."],
      h2b: "المناطق المخدومة في جهة نابل",
      listB: ["مدينة نابل", "الحمامات الشمالية والجنوبية", "دار شعبان الفهري", "بني خيار", "قربة ومنزل تميم (حسب الطلب وحسب المسافة)"],
      faqH2: "أسئلة شائعة - عشب نابل",
      faq: [
        ["هل التوصيل مجاني في كل ولاية نابل؟", "تنطبق المجانية على مدينة نابل والمناطق القريبة مثل الحمامات؛ بالنسبة للمناطق الأبعد في الولاية، قد تُطبَّق تعريفة حسب المسافة الدقيقة."],
        ["هل يمكن استلام الطلبية مباشرة من المستودع؟", "حسب التوفر، يمكن تنظيم استلام. تواصلوا معنا عبر واتساب للتحقق من ذلك."],
      ],
    },
  };
  const t = T[lang];
  return renderContentPage({
    basePath: "/gazon-nabeul/",
    lang,
    title: t.title,
    metaDescription: t.metaDescription,
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    heroImage: { src: "/gazon.jpg", alt: t.h1 },
    breadcrumb: t.crumb.map(([label, path]) => ({ label, path: localizedPath(path, lang) })),
    sections: [
      { type: "text", h2: t.h2a, paragraphs: t.pa },
      { type: "list", h2: t.h2b, items: t.listB },
      { type: "cta", ...gazonCta(lang) },
      { type: "related", ...relatedCluster(lang) },
      { type: "faq", h2: t.faqH2, items: t.faq.map(([q, a]) => ({ q, a })) },
    ],
  });
}

function build(registerPage, lang) {
  registerPage(localizedPath("/gazon-tunisie/", lang), pillarPage(lang));
  registerPage(localizedPath("/gazon-naturel/", lang), gazonNaturelPage(lang));
  registerPage(localizedPath("/gazon-en-rouleau/", lang), gazonEnRouleauPage(lang));
  registerPage(localizedPath("/acheter-gazon/", lang), acheterGazonPage(lang));
  registerPage(localizedPath("/gazon-grand-tunis/", lang), gazonGrandTunisPage(lang));
  registerPage(localizedPath("/gazon-nabeul/", lang), gazonNabeulPage(lang));
}

module.exports = { build };
