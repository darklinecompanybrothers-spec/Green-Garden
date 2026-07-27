const { renderContentPage } = require("../templates/page");
const { SITE } = require("../data/site");

const GAZON_HOME = { label: "Accueil", path: "/" };
const GAZON_ROOT = { label: "Gazon Tunisie", path: "/gazon-tunisie/" };

const RELATED_CLUSTER = {
  h2: "Explorez notre offre gazon",
  links: [
    { label: "Gazon Tunisie", path: "/gazon-tunisie/", description: "La page de référence : prix, zones, commande" },
    { label: "Gazon naturel", path: "/gazon-naturel/", description: "Naturel vs synthétique, ce qu'il faut savoir" },
    { label: "Gazon en rouleau", path: "/gazon-en-rouleau/", description: "Format, dimensions, calcul de surface" },
    { label: "Acheter du gazon", path: "/acheter-gazon/", description: "Comment commander en 3 étapes" },
    { label: "Gazon Grand Tunis", path: "/gazon-grand-tunis/", description: "Livraison gratuite dans le Grand Tunis" },
    { label: "Gazon Nabeul", path: "/gazon-nabeul/", description: "Livraison gratuite à Nabeul" },
    { label: "Palmier décoratif", path: "/palmier-tunisie/", description: "Notre autre produit phare, 275 DT" },
    { label: "Toutes les zones de livraison", path: "/livraison/", description: "Sousse, Monastir, Sfax, Bizerte, Gabès, Hammamet..." },
  ],
};

const GAZON_CTA = {
  heading: "Commandez votre gazon naturel dès aujourd'hui",
  text: `${SITE.products.gazon.priceLabel}, livraison gratuite dans le Grand Tunis et à Nabeul, sur devis ailleurs en Tunisie.`,
  buttonLabel: "Commander sur WhatsApp",
  whatsappMessage: "Bonjour, je souhaite commander du gazon naturel en rouleau (9 DT/m²).",
  secondary: { label: "Voir les zones de livraison", path: "/livraison/" },
};

function pillarPage() {
  return renderContentPage({
    path: "/gazon-tunisie/",
    title: "Gazon Tunisie | Gazon naturel en rouleau à 9 DT/m² - Green Garden",
    metaDescription:
      "Gazon naturel en rouleau à 9 DT/m² en Tunisie. Livraison gratuite dans le Grand Tunis et à Nabeul, sur devis ailleurs. Commandez sur WhatsApp.",
    eyebrow: "Gazon naturel",
    h1: "Gazon Tunisie : gazon naturel en rouleau à 9 DT/m²",
    intro:
      "Green Garden vend et livre du gazon naturel en rouleau partout en Tunisie, au prix clair de 9 DT/m², avec livraison gratuite dans le Grand Tunis et à Nabeul. Une solution rapide pour obtenir un jardin vert et homogène dès la pose, sans attendre des semaines de germination.",
    heroImage: { src: "/gazon.jpg", alt: "Gazon naturel en rouleau Green Garden en Tunisie", width: 1200, height: 900 },
    breadcrumb: [{ label: "Gazon Tunisie", path: "/gazon-tunisie/" }],
    product: {
      key: "gazon-naturel",
      name: SITE.products.gazon.name,
      price: SITE.products.gazon.price,
      currency: SITE.products.gazon.currency,
      unit: SITE.products.gazon.unit,
      description:
        "Gazon naturel en rouleau, prêt à poser, vendu au m² en Tunisie. Livraison gratuite dans le Grand Tunis et à Nabeul.",
      image: SITE.products.gazon.image,
    },
    sections: [
      {
        type: "text",
        h2: "Le gazon naturel Green Garden, une référence en Tunisie",
        paragraphs: [
          "Que ce soit pour le jardin d'une villa, les abords d'une piscine, un espace vert professionnel ou un terrain de sport privé, notre gazon naturel en rouleau permet d'obtenir un résultat immédiat et homogène, contrairement au semis qui demande plusieurs semaines avant d'être praticable.",
          "Chaque rouleau est cultivé puis découpé et livré rapidement pour garantir une reprise optimale après la pose. Nos clients sont principalement des particuliers qui aménagent leur jardin et des professionnels du paysagisme sur l'ensemble du territoire tunisien.",
        ],
      },
      {
        type: "list",
        h2: "Pourquoi choisir notre gazon naturel en rouleau ?",
        items: [
          "Un rendu vert et homogène dès la pose, sans semis ni attente",
          "Une variété adaptée au climat tunisien, chaud et sec une grande partie de l'année",
          "Un prix clair et unique : 9 DT/m², sans surprise",
          "Une livraison gratuite dans le Grand Tunis et à Nabeul",
          "Des conseils de pose et d'entretien fournis avec chaque commande",
        ],
      },
      {
        type: "table",
        h2: "Prix et zones de livraison",
        headers: ["Zone", "Tarif du gazon", "Livraison"],
        rows: [
          ["Grand Tunis", "9 DT/m²", "Gratuite"],
          ["Nabeul", "9 DT/m²", "Gratuite"],
          ["Sousse, Monastir, Sfax, Bizerte, Gabès, Hammamet et autres régions", "9 DT/m²", "Sur devis, selon la distance"],
        ],
      },
      { type: "cta", ...GAZON_CTA },
      { type: "related", ...RELATED_CLUSTER },
      {
        type: "faq",
        h2: "Questions fréquentes sur le gazon Green Garden",
        items: [
          {
            q: "Quel est le prix du gazon naturel en Tunisie chez Green Garden ?",
            a: "Notre gazon naturel en rouleau est vendu 9 DT/m² partout en Tunisie. La livraison est gratuite dans le Grand Tunis et à Nabeul ; ailleurs, elle est facturée sur devis selon la distance.",
          },
          {
            q: "Le gazon est-il livré prêt à poser ?",
            a: "Oui, le gazon est livré en rouleaux prêts à être installés directement sur un sol préparé. Nous vous conseillons de le poser rapidement après réception pour une meilleure reprise.",
          },
          {
            q: "Quel entretien après la pose du gazon ?",
            a: "Un arrosage quotidien est recommandé durant les deux premières semaines, puis un arrosage plus espacé et une tonte régulière suffisent. Retrouvez notre guide complet sur le blog.",
          },
          {
            q: "Proposez-vous aussi des palmiers décoratifs ?",
            a: "Oui, Green Garden vend également des palmiers décoratifs à 275 DT, livrables dans toute la Tunisie. Découvrez notre offre sur la page dédiée aux palmiers.",
          },
        ],
      },
    ],
  });
}

function gazonNaturelPage() {
  return renderContentPage({
    path: "/gazon-naturel/",
    title: "Gazon naturel Tunisie : avantages et entretien - Green Garden",
    metaDescription:
      "Tout savoir sur le gazon naturel en Tunisie : avantages face au gazon synthétique, entretien, climat, prix au m². Green Garden vous conseille avant votre achat.",
    eyebrow: "Gazon naturel",
    h1: "Gazon naturel en Tunisie : ce qu'il faut savoir avant d'acheter",
    intro:
      "Le gazon naturel reste le choix privilégié des jardins tunisiens pour son rendu authentique, sa fraîcheur et son impact positif sur le microclimat d'un extérieur. Voici ce qui le distingue du gazon synthétique et comment bien le choisir.",
    heroImage: { src: "/gazon.jpg", alt: "Pelouse de gazon naturel dans un jardin tunisien", width: 1200, height: 900 },
    breadcrumb: [{ label: "Gazon Tunisie", path: "/gazon-tunisie/" }, { label: "Gazon naturel", path: "/gazon-naturel/" }],
    sections: [
      {
        type: "text",
        h2: "Qu'est-ce que le gazon naturel en rouleau ?",
        paragraphs: [
          "Le gazon naturel en rouleau est cultivé en pleine terre puis découpé en plaques avec ses racines et une fine couche de terre, avant d'être livré et posé directement sur un sol préparé. Contrairement au semis, il offre un rendu vert immédiat.",
          "En Tunisie, les variétés utilisées sont sélectionnées pour leur résistance à la chaleur et leur capacité à conserver une couleur dense malgré des étés secs.",
        ],
      },
      {
        type: "table",
        h2: "Gazon naturel vs gazon synthétique",
        headers: ["Critère", "Gazon naturel", "Gazon synthétique"],
        rows: [
          ["Sensation et aspect", "Naturel, évolutif selon les saisons", "Uniforme, identique toute l'année"],
          ["Effet rafraîchissant", "Oui, abaisse la température au sol", "Non, peut chauffer au soleil"],
          ["Entretien", "Arrosage et tonte régulière", "Nettoyage occasionnel, pas de tonte"],
          ["Impact environnemental", "Favorable (absorption d'eau, biodiversité)", "Matière plastique non biodégradable"],
          ["Prix Green Garden", "9 DT/m²", "Non proposé actuellement"],
        ],
      },
      {
        type: "list",
        h2: "Le gazon naturel est-il adapté au climat tunisien ?",
        intro: "Oui, à condition de choisir la bonne variété et d'adopter quelques bons réflexes :",
        items: [
          "Arroser tôt le matin ou en soirée pour limiter l'évaporation en été",
          "Tondre régulièrement sans couper trop court pour préserver la fraîcheur du sol",
          "Prévoir un arrosage plus soutenu les deux premières semaines suivant la pose",
          "Adapter la fréquence d'arrosage selon la région (plus fréquent à Sfax ou Gabès qu'à Bizerte)",
        ],
      },
      { type: "cta", ...GAZON_CTA },
      { type: "related", ...RELATED_CLUSTER },
      {
        type: "faq",
        h2: "Questions fréquentes sur le gazon naturel",
        items: [
          {
            q: "Le gazon naturel demande-t-il beaucoup d'eau en Tunisie ?",
            a: "Les besoins en eau sont plus importants dans les régions chaudes et sèches du sud, et plus modérés dans le nord. Un arrosage adapté à la saison permet de limiter la consommation d'eau.",
          },
          {
            q: "Combien de temps met le gazon naturel à s'enraciner ?",
            a: "Généralement entre 2 et 3 semaines, à condition de maintenir un arrosage régulier durant cette période.",
          },
          {
            q: "Peut-on marcher sur le gazon naturel juste après la pose ?",
            a: "Il est préférable d'attendre 2 à 3 semaines avant un usage intensif, le temps que les racines s'installent correctement dans le sol.",
          },
        ],
      },
    ],
  });
}

function gazonEnRouleauPage() {
  return renderContentPage({
    path: "/gazon-en-rouleau/",
    title: "Gazon en rouleau Tunisie - Green Garden",
    metaDescription:
      "Gazon en rouleau en Tunisie : dimensions des plaques, calcul de la surface nécessaire et étapes de pose. Livraison Green Garden à 9 DT/m².",
    eyebrow: "Gazon naturel",
    h1: "Gazon en rouleau en Tunisie : format, pose et calcul de surface",
    intro:
      "Le gazon en rouleau (aussi appelé gazon en plaques) est la méthode la plus rapide pour obtenir une pelouse dense en Tunisie. Voici comment il se présente, comment calculer la quantité nécessaire et comment réussir sa pose.",
    heroImage: { src: "/gazon.jpg", alt: "Rouleaux de gazon naturel prêts à poser", width: 1200, height: 900 },
    breadcrumb: [{ label: "Gazon Tunisie", path: "/gazon-tunisie/" }, { label: "Gazon en rouleau", path: "/gazon-en-rouleau/" }],
    sections: [
      {
        type: "text",
        h2: "Comment se présente le gazon en rouleau ?",
        paragraphs: [
          "Chaque plaque de gazon en rouleau mesure généralement autour de 40 x 60 cm à 40 x 200 cm selon la découpe, avec quelques millimètres de terre et de racines. Une fois déroulé, le gazon forme un tapis végétal continu, sans coutures visibles après quelques jours de reprise.",
        ],
      },
      {
        type: "list",
        h2: "Comment calculer la surface de gazon nécessaire ?",
        intro: "Avant de commander, mesurez votre terrain pour connaître le nombre de m² à couvrir :",
        items: [
          "Mesurez la longueur et la largeur de chaque zone à engazonner",
          "Multipliez longueur x largeur pour obtenir la surface en m² de chaque zone",
          "Additionnez les surfaces si votre jardin comporte plusieurs zones distinctes",
          "Ajoutez une marge de 5 à 10% pour les découpes et les bords irréguliers",
          "Multipliez le total par 9 DT pour connaître le prix de votre commande",
        ],
      },
      {
        type: "list",
        h2: "Les grandes étapes de la pose",
        ordered: true,
        items: [
          "Désherber et niveler le sol, retirer cailloux et débris",
          "Enrichir la terre avec un peu de compost ou d'engrais si nécessaire",
          "Dérouler les plaques de gazon en quinconce, sans laisser d'espace entre elles",
          "Tasser légèrement avec un rouleau ou le dos d'un râteau pour assurer le contact avec le sol",
          "Arroser abondamment dans les heures qui suivent la pose",
        ],
      },
      {
        type: "cta",
        heading: "Recevez votre gazon en rouleau prêt à poser",
        text: "9 DT/m², livraison gratuite dans le Grand Tunis et à Nabeul.",
        buttonLabel: "Commander sur WhatsApp",
        whatsappMessage: "Bonjour, je souhaite commander du gazon en rouleau. Voici la surface à couvrir : ",
        secondary: { label: "Lire le guide de pose complet", path: "/blog/comment-poser-gazon-en-rouleau/" },
      },
      { type: "related", ...RELATED_CLUSTER },
      {
        type: "faq",
        h2: "Questions fréquentes sur le gazon en rouleau",
        items: [
          {
            q: "Quelle est la taille d'une plaque de gazon en rouleau ?",
            a: "Les plaques mesurent généralement entre 40x60 cm et 40x200 cm. Le prix est calculé au m² total commandé, quelle que soit la découpe.",
          },
          {
            q: "Combien de temps le gazon en rouleau reste-t-il utilisable avant la pose ?",
            a: "Il est recommandé de poser le gazon dans les 24 à 48h suivant la livraison pour garantir une bonne reprise.",
          },
          {
            q: "Faut-il préparer le sol avant de recevoir le gazon ?",
            a: "Oui, un sol nivelé, désherbé et légèrement ameubli donne les meilleurs résultats. Nous pouvons vous conseiller selon votre terrain.",
          },
        ],
      },
    ],
  });
}

function acheterGazonPage() {
  return renderContentPage({
    path: "/acheter-gazon/",
    title: "Acheter du gazon en Tunisie | Commande en 3 étapes - Green Garden",
    metaDescription:
      "Comment acheter du gazon naturel en Tunisie avec Green Garden : prix, zones de livraison et commande simple par WhatsApp. Gazon à 9 DT/m².",
    eyebrow: "Commander",
    h1: "Acheter du gazon en Tunisie avec Green Garden",
    intro:
      "Commander du gazon naturel en Tunisie n'a jamais été aussi simple : un prix clair au m², une livraison gratuite dans deux régions et une commande finalisée directement par WhatsApp.",
    heroImage: { src: "/gazon.jpg", alt: "Achat de gazon naturel en Tunisie", width: 1200, height: 900 },
    breadcrumb: [{ label: "Gazon Tunisie", path: "/gazon-tunisie/" }, { label: "Acheter du gazon", path: "/acheter-gazon/" }],
    sections: [
      {
        type: "list",
        h2: "Comment acheter votre gazon en 3 étapes",
        ordered: true,
        items: [
          "Mesurez la surface de votre jardin en m² à couvrir",
          "Contactez-nous par WhatsApp avec la surface souhaitée et votre ville",
          "Recevez votre gazon (livraison gratuite Grand Tunis et Nabeul, sur devis ailleurs) et procédez à la pose",
        ],
      },
      {
        type: "table",
        h2: "Récapitulatif du prix",
        headers: ["Produit", "Prix", "Livraison"],
        rows: [
          ["Gazon naturel en rouleau", "9 DT/m²", "Gratuite (Grand Tunis, Nabeul) / sur devis ailleurs"],
        ],
      },
      { type: "cta", ...GAZON_CTA },
      { type: "related", ...RELATED_CLUSTER },
      {
        type: "faq",
        h2: "Questions fréquentes avant d'acheter",
        items: [
          {
            q: "Quel est le montant minimum de commande ?",
            a: "Il n'y a pas de minimum imposé : vous commandez la surface exacte dont vous avez besoin, calculée au m².",
          },
          {
            q: "Comment se passe le paiement ?",
            a: "Les modalités de paiement (à la livraison ou autre) vous sont communiquées lors de la confirmation de commande sur WhatsApp.",
          },
          {
            q: "Puis-je commander pour un chantier professionnel ?",
            a: "Oui, nous fournissons aussi bien des particuliers que des professionnels du paysagisme pour des volumes plus importants.",
          },
        ],
      },
    ],
  });
}

function gazonGrandTunisPage() {
  return renderContentPage({
    path: "/gazon-grand-tunis/",
    title: "Gazon Grand Tunis | Livraison gratuite à 9 DT/m² - Green Garden",
    metaDescription:
      "Gazon naturel en rouleau livré gratuitement dans tout le Grand Tunis (Tunis, Ariana, Ben Arous, Manouba) à 9 DT/m². Commandez avec Green Garden.",
    eyebrow: "Gazon local",
    h1: "Gazon Grand Tunis : livraison gratuite à 9 DT/m²",
    intro:
      "Le Grand Tunis (Tunis, Ariana, Ben Arous, Manouba) est l'une de nos deux zones de livraison gratuite pour le gazon naturel en rouleau, au prix unique de 9 DT/m².",
    heroImage: { src: "/123699.jpeg", alt: "Jardin avec gazon naturel dans le Grand Tunis", width: 1200, height: 1500 },
    breadcrumb: [{ label: "Gazon Tunisie", path: "/gazon-tunisie/" }, { label: "Gazon Grand Tunis", path: "/gazon-grand-tunis/" }],
    sections: [
      {
        type: "text",
        h2: "Gazon naturel livré partout dans le Grand Tunis",
        paragraphs: [
          "Tunis, Ariana, Ben Arous et Manouba bénéficient de la livraison gratuite de notre gazon naturel en rouleau, sans minimum de commande. Que vous soyez à La Marsa, au Bardo, à Ariana ville ou à Ben Arous, notre équipe organise la livraison selon votre disponibilité.",
        ],
      },
      {
        type: "list",
        h2: "Secteurs desservis dans le Grand Tunis",
        items: [
          "Tunis et ses banlieues nord : La Marsa, Carthage, Sidi Bou Said, Le Kram",
          "Ariana : Ariana ville, La Soukra, Raoued",
          "Ben Arous : Ben Arous ville, Rades, Mégrine, Hammam Lif",
          "Manouba : Manouba ville, Den Den, Oued Ellil",
        ],
      },
      { type: "cta", ...GAZON_CTA },
      { type: "related", ...RELATED_CLUSTER },
      {
        type: "faq",
        h2: "Questions fréquentes - Gazon Grand Tunis",
        items: [
          {
            q: "La livraison est-elle vraiment gratuite partout dans le Grand Tunis ?",
            a: "Oui, sans exception, pour toute commande de gazon naturel livrée à Tunis, Ariana, Ben Arous ou Manouba.",
          },
          {
            q: "Quel délai de livraison dans le Grand Tunis ?",
            a: "En général 24 à 72h ouvrées selon le stock disponible et votre secteur précis.",
          },
        ],
      },
    ],
  });
}

function gazonNabeulPage() {
  return renderContentPage({
    path: "/gazon-nabeul/",
    title: "Gazon Nabeul | Livraison gratuite à 9 DT/m² - Green Garden",
    metaDescription:
      "Gazon naturel en rouleau livré gratuitement à Nabeul et sa région à 9 DT/m². Green Garden est basé à Nabeul : délais les plus courts du réseau.",
    eyebrow: "Gazon local",
    h1: "Gazon Nabeul : livraison gratuite à 9 DT/m²",
    intro:
      "Nabeul est la région où se trouve notre dépôt Green Garden. La livraison du gazon naturel y est donc gratuite, avec les délais les plus courts de tout notre réseau de livraison.",
    heroImage: { src: "/gazon.jpg", alt: "Gazon naturel livré à Nabeul", width: 1200, height: 900 },
    breadcrumb: [{ label: "Gazon Tunisie", path: "/gazon-tunisie/" }, { label: "Gazon Nabeul", path: "/gazon-nabeul/" }],
    sections: [
      {
        type: "text",
        h2: "Gazon naturel à Nabeul : notre région de base",
        paragraphs: [
          "Nabeul, Hammamet, Dar Chaabane El Fehri et Béni Khiar font partie des localités que nous livrons quotidiennement. Étant notre région de base, les délais de livraison y sont les plus courts et le gazon y est toujours livré gratuitement.",
        ],
      },
      {
        type: "list",
        h2: "Secteurs desservis dans la région de Nabeul",
        items: ["Nabeul ville", "Hammamet Nord et Sud", "Dar Chaabane El Fehri", "Béni Khiar", "Korba et Menzel Temime (sur devis selon distance)"],
      },
      { type: "cta", ...GAZON_CTA },
      { type: "related", ...RELATED_CLUSTER },
      {
        type: "faq",
        h2: "Questions fréquentes - Gazon Nabeul",
        items: [
          {
            q: "Le gazon est-il gratuit à livrer partout dans le gouvernorat de Nabeul ?",
            a: "La gratuité s'applique à Nabeul ville et aux localités proches comme Hammamet ; pour les zones plus éloignées du gouvernorat, un tarif peut s'appliquer selon la distance exacte.",
          },
          {
            q: "Peut-on retirer sa commande directement au dépôt ?",
            a: "Selon la disponibilité, un retrait peut être organisé. Contactez-nous par WhatsApp pour le vérifier.",
          },
        ],
      },
    ],
  });
}

function build(registerPage) {
  registerPage("/gazon-tunisie/", pillarPage());
  registerPage("/gazon-naturel/", gazonNaturelPage());
  registerPage("/gazon-en-rouleau/", gazonEnRouleauPage());
  registerPage("/acheter-gazon/", acheterGazonPage());
  registerPage("/gazon-grand-tunis/", gazonGrandTunisPage());
  registerPage("/gazon-nabeul/", gazonNabeulPage());
}

module.exports = { build };
