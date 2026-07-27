// Contenu du blog : catégories + articles. Chaque article suit le même modèle
// de sections que les pages de contenu (voir templates/components.js).

const categories = [
  { slug: "gazon", name: "Gazon", description: "Pose, choix et entretien du gazon naturel en Tunisie." },
  { slug: "palmiers", name: "Palmiers", description: "Choisir, planter et entretenir un palmier décoratif." },
  { slug: "entretien-jardin", name: "Entretien du jardin", description: "Conseils pratiques pour un jardin tunisien en bonne santé." },
  { slug: "amenagement-exterieur", name: "Aménagement extérieur", description: "Idées et inspirations pour vos espaces extérieurs." },
];

const articles = [
  {
    slug: "comment-poser-gazon-en-rouleau",
    category: "gazon",
    title: "Comment poser du gazon en rouleau : guide étape par étape",
    metaTitle: "Comment poser du gazon en rouleau",
    metaDescription:
      "Guide complet pour poser du gazon en rouleau en Tunisie : préparation du sol, pose, arrosage. Conseils Green Garden pour une pelouse réussie.",
    h1: "Comment poser du gazon en rouleau : guide étape par étape",
    datePublished: "2026-05-04",
    heroImage: { src: "/gazon.jpg", alt: "Pose de gazon en rouleau étape par étape" },
    intro:
      "Poser du gazon en rouleau permet d'obtenir une pelouse dense en une journée, à condition de respecter quelques étapes clés. Voici comment procéder du début à la fin.",
    sections: [
      {
        type: "list",
        h2: "Le matériel nécessaire",
        items: [
          "Un râteau et une bêche pour préparer le sol",
          "Un rouleau à gazon ou à défaut une planche large pour tasser",
          "Un tuyau d'arrosage ou un arrosoir",
          "Un cutter pour ajuster les bords",
        ],
      },
      {
        type: "list",
        h2: "Les étapes de la pose",
        ordered: true,
        items: [
          "Désherbez entièrement la zone et retirez cailloux, racines et débris",
          "Ameublissez le sol sur 10 à 15 cm de profondeur et nivelez-le soigneusement",
          "Apportez si besoin un peu de terreau ou de compost pour enrichir la surface",
          "Déroulez les plaques de gazon en quinconce, en les plaçant bord à bord sans les chevaucher",
          "Tassez chaque plaque avec un rouleau ou une planche pour assurer le contact avec le sol",
          "Arrosez abondamment dans les 30 minutes suivant la pose",
        ],
      },
      {
        type: "text",
        h2: "Les erreurs à éviter",
        paragraphs: [
          "Les erreurs les plus fréquentes sont un sol mal nivelé (qui laisse des creux), un arrosage insuffisant les premiers jours, ou une pose trop tardive après réception du gazon. Posez votre gazon dans les 24 à 48h suivant la livraison pour une reprise optimale.",
        ],
      },
      {
        type: "cta",
        heading: "Recevez votre gazon en rouleau prêt à poser",
        text: "9 DT/m², livraison gratuite dans le Grand Tunis et à Nabeul.",
        buttonLabel: "Commander sur WhatsApp",
        whatsappMessage: "Bonjour, je souhaite commander du gazon en rouleau après avoir lu votre guide de pose.",
        secondary: { label: "Voir la page Gazon Tunisie", path: "/gazon-tunisie/" },
      },
    ],
    faq: [
      {
        q: "Combien de temps après la livraison faut-il poser le gazon ?",
        a: "Idéalement dans les 24 à 48h, pour éviter que les plaques ne jaunissent ou ne se dessèchent avant la pose.",
      },
      {
        q: "Faut-il arroser tous les jours après la pose ?",
        a: "Oui, un arrosage quotidien est recommandé pendant les deux premières semaines, le temps que les racines s'installent dans le sol.",
      },
    ],
    related: ["preparer-sol-avant-gazon", "entretien-gazon-apres-pose", "quel-gazon-choisir-tunisie"],
  },
  {
    slug: "quel-gazon-choisir-tunisie",
    category: "gazon",
    title: "Quel gazon choisir en Tunisie selon votre région et le climat",
    metaTitle: "Quel gazon choisir en Tunisie ?",
    metaDescription:
      "Comment choisir son gazon naturel selon la région tunisienne : nord humide, centre tempéré ou sud aride. Conseils Green Garden.",
    h1: "Quel gazon choisir en Tunisie selon votre région et le climat",
    datePublished: "2026-05-11",
    heroImage: { src: "/gazon.jpg", alt: "Gazon naturel adapté au climat tunisien" },
    intro:
      "La Tunisie regroupe plusieurs zones climatiques, du nord plus humide au sud aride. Le choix du gazon et surtout son entretien doivent en tenir compte pour un résultat durable.",
    sections: [
      {
        type: "text",
        h2: "Les grandes zones climatiques tunisiennes",
        paragraphs: [
          "Le nord (Bizerte, Grand Tunis) bénéficie d'un climat méditerranéen plus humide, favorable à une pelouse dense avec un arrosage modéré. Le centre et le littoral est (Sousse, Monastir, Sfax) connaissent des étés chauds et secs nécessitant un arrosage plus soutenu. Le sud (Gabès et au-delà) est plus aride et demande une vigilance accrue sur l'arrosage en été.",
        ],
      },
      {
        type: "list",
        h2: "Nos recommandations selon votre région",
        items: [
          "Grand Tunis et Nabeul : entretien standard, arrosage 3 à 4 fois par semaine en été",
          "Sousse, Monastir, Hammamet : arrosage quotidien en été, tôt le matin ou en soirée",
          "Sfax, Gabès et régions plus arides : arrosage quotidien impératif en été, paillage recommandé",
          "Bizerte et régions du nord : arrosage 2 à 3 fois par semaine suffit généralement",
        ],
      },
      {
        type: "cta",
        heading: "Un conseil personnalisé pour votre région",
        text: "Indiquez-nous votre ville, nous vous conseillons sur la quantité et l'entretien adaptés.",
        buttonLabel: "Demander conseil sur WhatsApp",
        whatsappMessage: "Bonjour, je souhaite un conseil sur le gazon adapté à ma région.",
        secondary: { label: "Voir la page Gazon Tunisie", path: "/gazon-tunisie/" },
      },
    ],
    related: ["gazon-naturel-vs-synthetique", "entretien-gazon-apres-pose", "quand-planter-gazon-tunisie"],
  },
  {
    slug: "quand-planter-gazon-tunisie",
    category: "gazon",
    title: "Quand planter du gazon en Tunisie : calendrier par saison",
    metaTitle: "Quand planter du gazon en Tunisie ?",
    metaDescription:
      "Quelle est la meilleure période pour poser du gazon en Tunisie ? Découvrez notre calendrier saison par saison avec Green Garden.",
    h1: "Quand planter du gazon en Tunisie : calendrier par saison",
    datePublished: "2026-05-18",
    heroImage: { src: "/gazon.jpg", alt: "Calendrier de plantation du gazon en Tunisie" },
    intro:
      "Contrairement au semis, le gazon en rouleau peut être posé presque toute l'année en Tunisie. Certaines saisons restent toutefois plus favorables pour limiter le stress hydrique des jeunes plaques.",
    sections: [
      {
        type: "table",
        h2: "Calendrier de pose recommandé",
        headers: ["Saison", "Conditions", "Recommandation"],
        rows: [
          ["Automne (sept-nov)", "Températures douces, pluies plus fréquentes", "Période idéale, arrosage réduit"],
          ["Hiver (déc-fév)", "Températures fraîches, peu de stress hydrique", "Favorable, croissance plus lente"],
          ["Printemps (mars-mai)", "Températures douces à chaudes", "Bonne période, arrosage régulier nécessaire"],
          ["Été (juin-août)", "Fortes chaleurs, évaporation rapide", "Possible mais arrosage quotidien indispensable"],
        ],
      },
      {
        type: "text",
        h2: "Peut-on poser du gazon en plein été tunisien ?",
        paragraphs: [
          "Oui, c'est possible grâce au gazon en rouleau qui offre un enracinement plus rapide que le semis, mais un arrosage rigoureux (parfois biquotidien les premiers jours) est indispensable pour éviter le dessèchement des plaques.",
        ],
      },
      {
        type: "cta",
        heading: "Commandez au meilleur moment pour votre projet",
        text: "Quelle que soit la saison, nous vous conseillons sur les bons gestes pour une pose réussie.",
        buttonLabel: "Commander sur WhatsApp",
        whatsappMessage: "Bonjour, je souhaite poser du gazon et j'aimerais un conseil sur la période.",
        secondary: { label: "Voir la page Gazon Tunisie", path: "/gazon-tunisie/" },
      },
    ],
    related: ["comment-poser-gazon-en-rouleau", "prix-gazon-tunisie-m2", "quel-gazon-choisir-tunisie"],
  },
  {
    slug: "prix-gazon-tunisie-m2",
    category: "gazon",
    title: "Prix du gazon en Tunisie : comment il est calculé au m²",
    metaTitle: "Prix du gazon en Tunisie au m²",
    metaDescription:
      "Comment est calculé le prix du gazon naturel en Tunisie ? Green Garden détaille son tarif de 9 DT/m² et les frais de livraison selon la région.",
    h1: "Prix du gazon en Tunisie : comment il est calculé au m²",
    datePublished: "2026-05-25",
    heroImage: { src: "/gazon.jpg", alt: "Calcul du prix du gazon naturel au m² en Tunisie" },
    intro:
      "Le prix du gazon naturel dépend principalement de la surface à couvrir et de la zone de livraison. Voici comment Green Garden calcule son tarif, simple et transparent.",
    sections: [
      {
        type: "list",
        h2: "Ce qui compose le prix final",
        items: [
          "Le prix du gazon lui-même : 9 DT/m², quel que soit le volume commandé",
          "Les frais de livraison : gratuits dans le Grand Tunis et à Nabeul, sur devis ailleurs",
          "Aucun frais caché : ni frais de découpe, ni minimum de commande imposé",
        ],
      },
      {
        type: "table",
        h2: "Exemples de budget selon la surface",
        headers: ["Surface", "Prix du gazon", "Livraison Grand Tunis/Nabeul"],
        rows: [
          ["20 m²", "180 DT", "Gratuite"],
          ["50 m²", "450 DT", "Gratuite"],
          ["100 m²", "900 DT", "Gratuite"],
        ],
      },
      {
        type: "cta",
        heading: "Recevez un devis précis pour votre surface",
        text: "Indiquez-nous la surface de votre jardin, nous calculons votre budget exact.",
        buttonLabel: "Demander mon devis",
        whatsappMessage: "Bonjour, je souhaite un devis pour du gazon naturel. Voici ma surface : ",
        secondary: { label: "Voir la page Gazon Tunisie", path: "/gazon-tunisie/" },
      },
    ],
    related: ["comment-poser-gazon-en-rouleau", "gazon-naturel-vs-synthetique"],
  },
  {
    slug: "gazon-naturel-vs-synthetique",
    category: "gazon",
    title: "Gazon naturel vs gazon synthétique : quel choix pour votre jardin tunisien",
    metaTitle: "Gazon naturel vs synthétique",
    metaDescription:
      "Gazon naturel ou synthétique en Tunisie ? Comparatif entretien, prix, confort et impact environnemental pour bien choisir.",
    h1: "Gazon naturel vs gazon synthétique : quel choix pour votre jardin tunisien",
    datePublished: "2026-06-01",
    heroImage: { src: "/gazon.jpg", alt: "Comparatif gazon naturel et gazon synthétique" },
    intro:
      "Face à la chaleur tunisienne, beaucoup hésitent entre gazon naturel et gazon synthétique. Voici les critères essentiels pour faire le bon choix selon votre usage.",
    sections: [
      {
        type: "table",
        h2: "Comparatif détaillé",
        headers: ["Critère", "Gazon naturel", "Gazon synthétique"],
        rows: [
          ["Confort au toucher", "Naturel, frais", "Peut chauffer fortement au soleil"],
          ["Entretien", "Arrosage et tonte régulière", "Peu d'entretien, nettoyage occasionnel"],
          ["Durée de vie", "Illimitée avec entretien", "8 à 10 ans en moyenne"],
          ["Impact environnemental", "Favorable, biodégradable", "Matière plastique non biodégradable"],
          ["Investissement initial", "9 DT/m²", "Généralement plus élevé"],
        ],
      },
      {
        type: "text",
        h2: "Notre recommandation",
        paragraphs: [
          "Pour un usage résidentiel classique (jardin de villa, espace de détente), le gazon naturel reste le choix le plus agréable au quotidien et le plus économique à l'achat. Le synthétique peut se justifier pour des zones à très fort passage ou peu ensoleillées où le naturel a du mal à pousser.",
        ],
      },
      {
        type: "cta",
        heading: "Optez pour le gazon naturel Green Garden",
        text: "9 DT/m², livraison gratuite dans le Grand Tunis et à Nabeul.",
        buttonLabel: "Commander sur WhatsApp",
        whatsappMessage: "Bonjour, je souhaite commander du gazon naturel.",
        secondary: { label: "Voir la page Gazon Tunisie", path: "/gazon-tunisie/" },
      },
    ],
    related: ["prix-gazon-tunisie-m2", "quel-gazon-choisir-tunisie"],
  },
  {
    slug: "entretien-gazon-apres-pose",
    category: "entretien-jardin",
    title: "Comment entretenir son gazon après la pose",
    metaDescription:
      "Arrosage, tonte, engrais : découvrez comment entretenir votre gazon naturel après la pose pour une pelouse dense et durable en Tunisie.",
    h1: "Comment entretenir son gazon après la pose",
    datePublished: "2026-06-08",
    heroImage: { src: "/gazon.jpg", alt: "Entretien du gazon naturel après la pose" },
    intro:
      "Les premières semaines suivant la pose sont déterminantes pour la reprise du gazon. Voici les bons gestes à adopter, puis l'entretien courant à maintenir dans la durée.",
    sections: [
      {
        type: "list",
        h2: "Les 3 premières semaines",
        items: [
          "Arrosez quotidiennement, idéalement tôt le matin ou en fin de journée",
          "Évitez de marcher sur le gazon pendant les 10 à 15 premiers jours",
          "Ne tondez pas avant que le gazon n'ait atteint 6 à 8 cm de hauteur",
        ],
      },
      {
        type: "list",
        h2: "L'entretien courant",
        items: [
          "Tondez régulièrement sans couper plus d'un tiers de la hauteur des brins",
          "Espacez l'arrosage à 2-4 fois par semaine selon la saison et votre région",
          "Apportez un engrais adapté au printemps pour relancer la croissance",
          "Scarifiez une fois par an pour éliminer la mousse et le feutrage",
        ],
      },
      {
        type: "cta",
        heading: "Besoin d'un engrais adapté à votre gazon ?",
        text: "Découvrez notre gamme d'engrais pour soutenir la croissance de votre pelouse.",
        buttonLabel: "Voir nos engrais",
        whatsappMessage: "Bonjour, je cherche un engrais adapté à mon gazon.",
        secondary: { label: "Voir la page Engrais", path: "/produits/engrais/" },
      },
    ],
    faq: [
      {
        q: "Pourquoi mon gazon jaunit-il après la pose ?",
        a: "C'est souvent le signe d'un manque d'eau. Vérifiez que l'arrosage est suffisant et régulier, en particulier durant les premières semaines.",
      },
    ],
    related: ["comment-poser-gazon-en-rouleau", "preparer-sol-avant-gazon"],
  },
  {
    slug: "preparer-sol-avant-gazon",
    category: "entretien-jardin",
    title: "Préparer le sol avant la pose de gazon : les étapes essentielles",
    metaTitle: "Préparer le sol avant la pose de gazon",
    metaDescription:
      "Comment bien préparer son sol avant de poser du gazon naturel : désherbage, nivellement, amendement. Guide Green Garden.",
    h1: "Préparer le sol avant la pose de gazon : les étapes essentielles",
    datePublished: "2026-06-15",
    heroImage: { src: "/gazon.jpg", alt: "Préparation du sol avant la pose de gazon" },
    intro:
      "Un sol bien préparé est la garantie d'une pelouse qui prend racine rapidement et reste dense dans le temps. Voici les étapes à ne pas négliger avant de recevoir votre gazon.",
    sections: [
      {
        type: "list",
        h2: "Les étapes de préparation",
        ordered: true,
        items: [
          "Désherbez entièrement la parcelle, y compris les racines des mauvaises herbes",
          "Retirez cailloux, gravats et débris de construction éventuels",
          "Ameublissez le sol sur 10 à 15 cm avec une bêche ou un motoculteur",
          "Nivelez soigneusement pour éviter les creux qui retiendraient l'eau",
          "Apportez un amendement (compost ou terreau) si le sol est pauvre ou très sableux",
          "Tassez légèrement puis arrosez la veille de la pose pour humidifier le sol",
        ],
      },
      {
        type: "text",
        h2: "Cas particulier des sols argileux ou très sableux",
        paragraphs: [
          "Un sol argileux retient trop l'eau et doit être allégé avec du sable grossier et du compost. Un sol très sableux, au contraire, draine trop vite et gagne à recevoir un apport de terreau pour retenir l'humidité nécessaire aux jeunes racines.",
        ],
      },
      {
        type: "cta",
        heading: "Votre sol est prêt ? Commandez votre gazon",
        text: "9 DT/m², livraison gratuite dans le Grand Tunis et à Nabeul.",
        buttonLabel: "Commander sur WhatsApp",
        whatsappMessage: "Bonjour, mon terrain est prêt, je souhaite commander du gazon naturel.",
        secondary: { label: "Voir la page Gazon Tunisie", path: "/gazon-tunisie/" },
      },
    ],
    related: ["comment-poser-gazon-en-rouleau", "entretien-gazon-apres-pose"],
  },
  {
    slug: "entretien-palmier",
    category: "palmiers",
    title: "Comment entretenir un palmier : arrosage, taille et fertilisation",
    metaTitle: "Comment entretenir un palmier",
    metaDescription:
      "Guide d'entretien du palmier décoratif en Tunisie : fréquence d'arrosage, taille des palmes et fertilisation. Conseils Green Garden.",
    h1: "Comment entretenir un palmier : arrosage, taille et fertilisation",
    datePublished: "2026-06-22",
    heroImage: { src: "/Palmier éventail.jpeg", alt: "Entretien d'un palmier décoratif" },
    intro:
      "Un palmier bien entretenu demande finalement assez peu d'attention une fois installé. Voici l'essentiel sur l'arrosage, la taille et la fertilisation.",
    sections: [
      {
        type: "list",
        h2: "Arrosage",
        items: [
          "Arrosage abondant et régulier durant les 2 à 3 premiers mois suivant la plantation",
          "Ensuite, un arrosage hebdomadaire suffit généralement en dehors des fortes chaleurs",
          "En été dans le sud du pays, augmentez la fréquence pour éviter le stress hydrique",
        ],
      },
      {
        type: "list",
        h2: "Taille des palmes",
        items: [
          "Ne coupez que les palmes complètement sèches ou jaunies",
          "Évitez de tailler les palmes encore vertes, elles nourrissent le palmier",
          "Utilisez un outil désinfecté pour éviter de transmettre des maladies",
        ],
      },
      {
        type: "text",
        h2: "Fertilisation",
        paragraphs: [
          "Un apport d'engrais au printemps et en été favorise une croissance saine, en particulier durant les deux premières années suivant la plantation. Un sol pauvre peut ralentir sensiblement le développement du palmier.",
        ],
      },
      {
        type: "cta",
        heading: "Besoin d'un palmier ou d'un engrais adapté ?",
        text: "Découvrez notre palmier décoratif à 275 DT et notre gamme d'engrais.",
        buttonLabel: "Voir le palmier décoratif",
        whatsappMessage: "Bonjour, je souhaite des conseils sur l'entretien de mon palmier.",
        secondary: { label: "Voir la page Palmier Tunisie", path: "/palmier-tunisie/" },
      },
    ],
    related: ["quel-palmier-choisir-tunisie", "palmier-pot-ou-pleine-terre"],
  },
  {
    slug: "quel-palmier-choisir-tunisie",
    category: "palmiers",
    title: "Quels palmiers poussent le mieux en Tunisie : variétés adaptées au climat",
    metaTitle: "Quel palmier choisir en Tunisie ?",
    metaDescription:
      "Quelles variétés de palmiers s'adaptent le mieux au climat tunisien ? Green Garden vous guide pour choisir le bon palmier décoratif.",
    h1: "Quels palmiers poussent le mieux en Tunisie : variétés adaptées au climat",
    datePublished: "2026-06-29",
    heroImage: { src: "/Palmier éventail.jpeg", alt: "Variétés de palmiers adaptées à la Tunisie" },
    intro:
      "Le climat tunisien, chaud et sec une grande partie de l'année, convient à de nombreuses variétés de palmiers décoratifs. Voici les critères qui font un bon choix pour votre jardin.",
    sections: [
      {
        type: "list",
        h2: "Ce qui rend un palmier adapté au climat tunisien",
        items: [
          "Une bonne tolérance à la chaleur et à la sécheresse estivale",
          "Une résistance correcte au vent, fréquent sur le littoral",
          "Une adaptation aux sols parfois calcaires du pays",
          "Un besoin d'entretien limité une fois bien installé",
        ],
      },
      {
        type: "text",
        h2: "Usage décoratif : quel palmier pour quel espace ?",
        paragraphs: [
          "Pour une grande propriété ou une allée, un palmier de taille imposante crée un effet immédiat. Pour une terrasse ou un patio plus restreint, une variété plus compacte reste préférable pour ne pas envahir l'espace avec le temps.",
        ],
      },
      {
        type: "cta",
        heading: "Découvrez notre palmier décoratif",
        text: "275 DT, livraison dans toute la Tunisie selon votre région.",
        buttonLabel: "Commander sur WhatsApp",
        whatsappMessage: "Bonjour, je souhaite des conseils pour choisir mon palmier.",
        secondary: { label: "Voir la page Palmier Tunisie", path: "/palmier-tunisie/" },
      },
    ],
    related: ["entretien-palmier", "palmier-pot-ou-pleine-terre", "erreurs-a-eviter-plantation-palmier"],
  },
  {
    slug: "palmier-pot-ou-pleine-terre",
    category: "palmiers",
    title: "Palmier en pot ou en pleine terre : lequel choisir pour votre jardin",
    metaTitle: "Palmier en pot ou pleine terre",
    metaDescription:
      "Faut-il planter votre palmier décoratif en pot ou en pleine terre ? Avantages, contraintes et conseils Green Garden.",
    h1: "Palmier en pot ou en pleine terre : lequel choisir pour votre jardin",
    datePublished: "2026-07-06",
    heroImage: { src: "/Palmier nain.jpeg", alt: "Palmier en pot sur une terrasse" },
    intro:
      "Le choix entre pot et pleine terre dépend surtout de l'espace disponible et de l'usage recherché. Voici les avantages et limites de chaque option.",
    sections: [
      {
        type: "table",
        h2: "Comparatif pot vs pleine terre",
        headers: ["Critère", "En pot", "En pleine terre"],
        rows: [
          ["Espace requis", "Terrasse, balcon, patio", "Jardin avec espace suffisant"],
          ["Croissance", "Limitée par la taille du contenant", "Développement complet du palmier"],
          ["Entretien", "Arrosage plus fréquent, rempotage à prévoir", "Arrosage plus espacé une fois installé"],
          ["Mobilité", "Déplaçable selon les saisons", "Fixe, emplacement définitif"],
        ],
      },
      {
        type: "list",
        h2: "Nos conseils pratiques",
        items: [
          "En pot, choisissez un contenant large avec un bon drainage pour éviter l'excès d'eau",
          "En pleine terre, prévoyez un espace dégagé d'au moins 1,5 à 2 mètres autour du tronc",
          "Dans les deux cas, un arrosage soutenu les premiers mois favorise un bon enracinement",
        ],
      },
      {
        type: "cta",
        heading: "Quel que soit votre projet, nous vous conseillons",
        text: "Palmier décoratif à 275 DT, livraison dans toute la Tunisie.",
        buttonLabel: "Demander conseil sur WhatsApp",
        whatsappMessage: "Bonjour, j'hésite entre planter mon palmier en pot ou en pleine terre.",
        secondary: { label: "Voir la page Palmier décoratif", path: "/palmier-decoratif/" },
      },
    ],
    related: ["quel-palmier-choisir-tunisie", "entretien-palmier"],
  },
  {
    slug: "erreurs-a-eviter-plantation-palmier",
    category: "palmiers",
    title: "Planter un palmier : les erreurs à éviter",
    metaDescription:
      "Les erreurs les plus fréquentes lors de la plantation d'un palmier décoratif en Tunisie, et comment les éviter. Conseils Green Garden.",
    h1: "Planter un palmier : les erreurs à éviter",
    datePublished: "2026-07-13",
    heroImage: { src: "/Palmier éventail.jpeg", alt: "Plantation d'un palmier décoratif" },
    intro:
      "Une plantation réussie évite bien des soucis les mois suivants. Voici les erreurs les plus courantes constatées lors de la plantation d'un palmier décoratif.",
    sections: [
      {
        type: "list",
        h2: "Les erreurs fréquentes",
        items: [
          "Planter trop profondément, ce qui peut faire pourrir la base du tronc",
          "Négliger l'arrosage les premières semaines, période critique pour l'enracinement",
          "Choisir un emplacement trop proche d'une construction ou d'une canalisation",
          "Ignorer la nature du sol (trop argileux ou trop compact sans amendement)",
          "Planter en period de vent fort sans tuteurage temporaire",
        ],
      },
      {
        type: "text",
        h2: "Comment sécuriser la reprise du palmier",
        paragraphs: [
          "Un trou de plantation environ deux fois plus large que la motte, un sol ameubli et bien drainé, et un arrosage généreux juste après la plantation permettent d'éviter la plupart des problèmes de reprise.",
        ],
      },
      {
        type: "cta",
        heading: "Faites-vous conseiller avant de planter",
        text: "Nous vous accompagnons dans le choix de l'emplacement et de l'entretien de votre palmier.",
        buttonLabel: "Contacter Green Garden",
        whatsappMessage: "Bonjour, je souhaite des conseils avant de planter mon palmier.",
        secondary: { label: "Voir la page Palmier Tunisie", path: "/palmier-tunisie/" },
      },
    ],
    related: ["entretien-palmier", "palmier-pot-ou-pleine-terre"],
  },
  {
    slug: "meilleurs-arbres-jardin-tunisien",
    category: "amenagement-exterieur",
    title: "Les meilleurs arbres et plantes pour un jardin tunisien",
    metaTitle: "Meilleurs arbres pour un jardin tunisien",
    metaDescription:
      "Quels arbres et plantes choisir pour un jardin tunisien résistant à la chaleur ? Sélection Green Garden entre palmiers, ficus et plantes décoratives.",
    h1: "Les meilleurs arbres et plantes pour un jardin tunisien",
    datePublished: "2026-07-18",
    heroImage: { src: "/Arbre du voyageur.jpeg", alt: "Arbres et plantes pour jardin tunisien" },
    intro:
      "Entre chaleur estivale et hivers doux, certaines essences se distinguent particulièrement pour composer un jardin tunisien résistant et esthétique.",
    sections: [
      {
        type: "list",
        h2: "Nos sélections pour un jardin résistant",
        items: [
          "Le palmier décoratif, pour un effet structurant immédiat",
          "Le figuier pleureur et le figuier caoutchouc, pour une présence végétale dense",
          "Le dragonnier de Madagascar, graphique et peu gourmand en eau",
          "L'arbre du voyageur, pour une touche exotique marquée",
          "Un tapis de gazon naturel pour unifier l'ensemble du jardin",
        ],
      },
      {
        type: "text",
        h2: "Composer un jardin cohérent",
        paragraphs: [
          "L'association d'un ou plusieurs palmiers, d'arbustes décoratifs et d'un gazon naturel bien entretenu permet de structurer un jardin tunisien sans multiplier les essences fragiles ou gourmandes en entretien.",
        ],
      },
      {
        type: "cta",
        heading: "Composez votre jardin avec Green Garden",
        text: "Gazon naturel, palmiers décoratifs et plantes d'intérieur pour transformer votre extérieur.",
        buttonLabel: "Demander un devis",
        whatsappMessage: "Bonjour, je souhaite un devis pour aménager mon jardin.",
        secondary: { label: "Voir tous nos produits", path: "/produits/" },
      },
    ],
    related: ["idees-amenagement-exterieur-villa-terrasse", "jardin-econome-en-eau-tunisie"],
  },
  {
    slug: "idees-amenagement-exterieur-villa-terrasse",
    category: "amenagement-exterieur",
    title: "Idées d'aménagement extérieur pour une villa ou une terrasse en Tunisie",
    metaTitle: "Idées d'aménagement extérieur en Tunisie",
    metaDescription:
      "Inspirations d'aménagement extérieur pour villa ou terrasse en Tunisie : gazon, palmiers et plantes décoratives. Conseils Green Garden.",
    h1: "Idées d'aménagement extérieur pour une villa ou une terrasse en Tunisie",
    datePublished: "2026-07-20",
    heroImage: { src: "/123699.jpeg", alt: "Aménagement extérieur d'une villa en Tunisie" },
    intro:
      "Que vous disposiez d'un grand jardin de villa ou d'une terrasse plus modeste, quelques associations simples suffisent à transformer un extérieur tunisien.",
    sections: [
      {
        type: "list",
        h2: "Pour un jardin de villa",
        items: [
          "Une pelouse de gazon naturel en cœur de jardin pour un effet immédiat",
          "Un ou plusieurs palmiers en bordure d'allée ou autour de la piscine",
          "Des massifs de plantes décoratives pour structurer les abords de la maison",
        ],
      },
      {
        type: "list",
        h2: "Pour une terrasse ou un patio",
        items: [
          "Un palmier décoratif en pot pour une touche exotique verticale",
          "Des plantes d'intérieur robustes disposées en pots pour habiller les angles",
          "Un éclairage doux le soir pour mettre en valeur les silhouettes végétales",
        ],
      },
      {
        type: "cta",
        heading: "Un projet d'aménagement en tête ?",
        text: "Décrivez-nous votre espace, nous vous conseillons les bons produits.",
        buttonLabel: "Demander un devis",
        whatsappMessage: "Bonjour, je souhaite un devis pour l'aménagement de ma terrasse/villa.",
        secondary: { label: "Voir tous nos produits", path: "/produits/" },
      },
    ],
    related: ["meilleurs-arbres-jardin-tunisien", "jardin-econome-en-eau-tunisie"],
  },
  {
    slug: "jardin-econome-en-eau-tunisie",
    category: "amenagement-exterieur",
    title: "Créer un jardin économe en eau adapté au climat tunisien",
    metaTitle: "Jardin économe en eau en Tunisie",
    metaDescription:
      "Comment aménager un jardin économe en eau en Tunisie sans renoncer à la verdure ? Conseils pratiques Green Garden.",
    h1: "Créer un jardin économe en eau adapté au climat tunisien",
    datePublished: "2026-07-22",
    heroImage: { src: "/gazon.jpg", alt: "Jardin économe en eau en Tunisie" },
    intro:
      "Face aux étés chauds et secs, limiter la consommation d'eau de son jardin est devenu une préoccupation courante en Tunisie. Voici comment y parvenir sans sacrifier l'esthétique.",
    sections: [
      {
        type: "list",
        h2: "Les bons réflexes pour économiser l'eau",
        items: [
          "Arroser tôt le matin ou en soirée pour limiter l'évaporation",
          "Pailler les massifs pour conserver l'humidité du sol plus longtemps",
          "Regrouper les plantes selon leurs besoins en eau pour un arrosage plus ciblé",
          "Privilégier un arrosage profond et moins fréquent plutôt que de courts arrosages quotidiens sur les arbustes installés",
        ],
      },
      {
        type: "text",
        h2: "Le gazon naturel a-t-il sa place dans un jardin économe en eau ?",
        paragraphs: [
          "Oui, à condition d'adapter la fréquence d'arrosage à la saison et à votre région, et de ne pas tondre trop court, ce qui aide le sol à conserver son humidité plus longtemps.",
        ],
      },
      {
        type: "cta",
        heading: "Composez un jardin durable avec Green Garden",
        text: "Gazon naturel, palmiers et plantes adaptées au climat tunisien.",
        buttonLabel: "Demander conseil",
        whatsappMessage: "Bonjour, je souhaite des conseils pour un jardin économe en eau.",
        secondary: { label: "Voir la page Gazon Tunisie", path: "/gazon-tunisie/" },
      },
    ],
    related: ["meilleurs-arbres-jardin-tunisien", "quel-gazon-choisir-tunisie"],
  },
];

module.exports = { categories, articles };
