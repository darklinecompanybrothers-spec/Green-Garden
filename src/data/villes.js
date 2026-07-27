// Pages locales de livraison. Chaque ville a un contenu réellement différencié
// (statut de livraison gazon, contexte local, FAQ propre) pour éviter les pages
// quasi-identiques ("doorway pages") pénalisées par Google.
//
// Statut gazon : "free" (Grand Tunis + Nabeul, conforme à l'offre réelle),
// "quote" (livraison disponible mais sur devis, pas de fausse promesse de gratuité).
// Le palmier est livrable partout, frais déterminés selon la région (offre réelle).

const villes = [
  {
    slug: "grand-tunis",
    name: "Grand Tunis",
    governorate: "Tunis, Ariana, Ben Arous, Manouba",
    metaTitle: "Gazon & Palmier Grand Tunis - Green Garden",
    metaDescription:
      "Gazon naturel livré gratuitement dans tout le Grand Tunis (Tunis, Ariana, Ben Arous, Manouba) à 9 DT/m². Palmiers décoratifs livrables sur devis.",
    h1: "Gazon et palmier dans le Grand Tunis",
    gazonStatus: "free",
    intro:
      "Le Grand Tunis (Tunis, Ariana, Ben Arous et Manouba) est l'une de nos deux zones de livraison gratuite pour le gazon naturel en rouleau. Que vous aménagiez un jardin de villa à La Marsa, un espace vert à Ariana ou les abords d'un local professionnel à Ben Arous, notre équipe organise la livraison et peut vous conseiller sur la pose.",
    useCase:
      "Nous livrons régulièrement des particuliers et des professionnels du paysagisme dans les banlieues nord (La Marsa, Carthage, Sidi Bou Said), le centre de Tunis et les zones résidentielles d'Ariana et de Ben Arous.",
    distanceNote: "à environ 65 km au nord-ouest de notre dépôt de Nabeul",
    faq: [
      {
        q: "La livraison de gazon est-elle vraiment gratuite dans tout le Grand Tunis ?",
        a: "Oui. Le Grand Tunis (Tunis, Ariana, Ben Arous, Manouba) fait partie de nos deux zones de livraison gratuite pour le gazon naturel, au prix de 9 DT/m², sans minimum de commande caché.",
      },
      {
        q: "Peut-on commander un palmier pour une adresse dans le Grand Tunis ?",
        a: "Oui, le palmier décoratif à 275 DT est livrable dans tout le Grand Tunis. Les frais de livraison sont calculés selon votre adresse exacte et vous sont communiqués avant confirmation.",
      },
      {
        q: "Sous quel délai la livraison est-elle effectuée ?",
        a: "En général sous 24 à 72h ouvrées selon la disponibilité du stock et votre secteur précis dans le Grand Tunis. Le délai exact est confirmé par WhatsApp lors de la prise de commande.",
      },
    ],
  },
  {
    slug: "nabeul",
    name: "Nabeul",
    governorate: "Nabeul",
    metaTitle: "Gazon & Palmier Nabeul | Livraison gratuite gazon - Green Garden",
    metaDescription:
      "Green Garden est basé à Nabeul : gazon naturel à 9 DT/m² livré gratuitement, palmiers décoratifs à 275 DT, retrait ou livraison rapide dans toute la région.",
    h1: "Gazon et palmier à Nabeul",
    gazonStatus: "free",
    intro:
      "Nabeul est la région où se trouve notre dépôt Green Garden. C'est ici que nous préparons chaque commande de gazon en rouleau et de palmiers avant expédition, ce qui nous permet d'offrir la livraison gratuite du gazon sur toute la région et les délais les plus courts de tout notre réseau.",
    useCase:
      "Nous accompagnons de nombreux projets de jardins de villas, de riads et d'espaces verts hôteliers dans la région de Nabeul, Hammamet, Dar Chaabane et Béni Khiar.",
    distanceNote: "notre région de base",
    faq: [
      {
        q: "Livrez-vous le gazon gratuitement à Nabeul ?",
        a: "Oui, Nabeul est notre région de base : la livraison du gazon naturel y est gratuite, quel que soit le volume commandé, au prix de 9 DT/m².",
      },
      {
        q: "Peut-on venir chercher un palmier directement ?",
        a: "Selon la disponibilité, un retrait sur notre dépôt à Nabeul peut être organisé pour éviter les frais de livraison du palmier. Contactez-nous par WhatsApp pour vérifier la disponibilité.",
      },
      {
        q: "Quel délai pour une commande à Nabeul ?",
        a: "Étant notre région de base, les commandes à Nabeul sont généralement livrées sous 24 à 48h ouvrées.",
      },
    ],
  },
  {
    slug: "sousse",
    name: "Sousse",
    governorate: "Sousse",
    metaTitle: "Gazon & Palmier Sousse | Livraison sur devis - Green Garden",
    metaDescription:
      "Gazon naturel à 9 DT/m² et palmiers décoratifs à 275 DT livrés à Sousse. Livraison organisée sur devis, contactez Green Garden par WhatsApp.",
    h1: "Gazon et palmier à Sousse",
    gazonStatus: "quote",
    intro:
      "Sousse et sa région (Port El Kantaoui, Kalâa Kebira, Hammam Sousse) font partie des zones que nous desservons régulièrement pour le gazon naturel en rouleau et les palmiers décoratifs. La livraison y est organisée sur devis : nous calculons le tarif exact selon votre adresse et le volume de la commande.",
    useCase:
      "Beaucoup de nos commandes vers Sousse concernent des jardins de villas, des complexes résidentiels et des aménagements autour de zones touristiques du littoral.",
    distanceNote: "à environ 90 km au sud de notre dépôt de Nabeul",
    faq: [
      {
        q: "Le gazon est-il livrable jusqu'à Sousse ?",
        a: "Oui. Le gazon naturel Green Garden est livrable à Sousse. La livraison n'est pas gratuite dans cette zone (réservée au Grand Tunis et à Nabeul), mais nous vous communiquons un tarif de transport clair avant toute commande.",
      },
      {
        q: "Combien coûte la livraison d'un palmier à Sousse ?",
        a: "Le tarif dépend de la distance exacte et du volume à transporter. Envoyez-nous votre adresse par WhatsApp pour recevoir un devis précis sous quelques heures.",
      },
    ],
  },
  {
    slug: "monastir",
    name: "Monastir",
    governorate: "Monastir",
    metaTitle: "Gazon & Palmier Monastir | Livraison sur devis - Green Garden",
    metaDescription:
      "Gazon naturel en rouleau et palmiers décoratifs livrés à Monastir. Devis de livraison rapide par WhatsApp avec Green Garden.",
    h1: "Gazon et palmier à Monastir",
    gazonStatus: "quote",
    intro:
      "Nous livrons régulièrement du gazon naturel et des palmiers décoratifs à Monastir et dans les localités environnantes (Skanes, Ksar Hellal, Ksibet el Mediouni). Comme pour les autres zones hors Grand Tunis et Nabeul, la livraison est organisée sur devis.",
    useCase:
      "Monastir compte de nombreuses résidences en bord de mer et complexes hôteliers pour lesquels nous fournissons du gazon en rouleau prêt à poser et des palmiers d'ornement.",
    distanceNote: "à environ 110 km au sud de notre dépôt de Nabeul",
    faq: [
      {
        q: "Peut-on faire poser le gazon directement à Monastir ?",
        a: "Nous livrons le gazon en rouleau jusqu'à votre adresse à Monastir. Nous pouvons également vous conseiller sur la pose ou vous mettre en relation avec des poseurs partenaires selon votre projet.",
      },
      {
        q: "Quel est le délai de livraison à Monastir ?",
        a: "Comptez généralement 48 à 96h ouvrées selon le stock disponible, à confirmer lors de votre demande de devis par WhatsApp.",
      },
    ],
  },
  {
    slug: "sfax",
    name: "Sfax",
    governorate: "Sfax",
    metaTitle: "Gazon & Palmier Sfax | Livraison sur devis - Green Garden",
    metaDescription:
      "Green Garden livre gazon naturel en rouleau et palmiers décoratifs jusqu'à Sfax. Demandez votre devis de livraison par WhatsApp.",
    h1: "Gazon et palmier à Sfax",
    gazonStatus: "quote",
    intro:
      "Sfax est l'une des principales villes du sud vers laquelle nous expédions du gazon naturel et des palmiers décoratifs. La distance étant plus importante, la livraison y est systématiquement organisée sur devis pour vous garantir un tarif transparent.",
    useCase:
      "Nos commandes vers Sfax concernent principalement des projets de jardins privés et des aménagements paysagers pour des sociétés locales.",
    distanceNote: "à environ 200 km au sud de notre dépôt de Nabeul",
    faq: [
      {
        q: "Livrez-vous vraiment jusqu'à Sfax ?",
        a: "Oui, Sfax fait partie de nos zones de livraison sur devis pour le gazon naturel et les palmiers décoratifs. Contactez-nous pour connaître le délai et le tarif exact selon votre adresse.",
      },
      {
        q: "Le palmier résiste-t-il au climat de Sfax ?",
        a: "Nos variétés de palmiers décoratifs sont adaptées au climat tunisien, y compris aux étés chauds et secs du sud-est. Nous vous conseillons sur l'entretien après livraison.",
      },
    ],
  },
  {
    slug: "bizerte",
    name: "Bizerte",
    governorate: "Bizerte",
    metaTitle: "Gazon & Palmier Bizerte | Livraison sur devis - Green Garden",
    metaDescription:
      "Gazon naturel et palmiers décoratifs livrés à Bizerte et sa région. Green Garden vous envoie un devis de livraison rapide par WhatsApp.",
    h1: "Gazon et palmier à Bizerte",
    gazonStatus: "quote",
    intro:
      "Bizerte et ses environs (Menzel Bourguiba, Menzel Jemil, Ras Jebel) sont desservis pour nos deux produits phares : le gazon naturel en rouleau et le palmier décoratif. La livraison y est proposée sur devis, en fonction de la distance depuis notre dépôt de Nabeul via le Grand Tunis.",
    useCase:
      "La région de Bizerte, avec son climat plus humide, convient particulièrement bien à l'installation de gazon naturel qui y demande un entretien légèrement réduit qu'au sud du pays.",
    distanceNote: "à environ 120 km au nord de notre dépôt de Nabeul",
    faq: [
      {
        q: "Le climat de Bizerte convient-il au gazon naturel ?",
        a: "Oui, le climat plus humide du nord de la Tunisie est favorable à l'implantation du gazon naturel, avec des besoins en arrosage généralement inférieurs à ceux des régions plus sèches.",
      },
      {
        q: "Quels délais pour une livraison à Bizerte ?",
        a: "Comptez en moyenne 48 à 96h ouvrées ; le délai précis vous est confirmé lors de votre demande de devis.",
      },
    ],
  },
  {
    slug: "gabes",
    name: "Gabès",
    governorate: "Gabès",
    metaTitle: "Gazon & Palmier Gabès | Livraison sur devis - Green Garden",
    metaDescription:
      "Green Garden livre du gazon naturel en rouleau et des palmiers décoratifs jusqu'à Gabès. Devis de livraison rapide par WhatsApp.",
    h1: "Gazon et palmier à Gabès",
    gazonStatus: "quote",
    intro:
      "Gabès, région historiquement liée à la culture du palmier dattier grâce à son oasis, est aussi l'une des zones où nous livrons nos palmiers décoratifs d'ornement et notre gazon naturel en rouleau, sur devis selon la distance depuis Nabeul.",
    useCase:
      "Nos livraisons vers Gabès concernent aussi bien des jardins privés que des aménagements d'espaces verts en complément de la palmeraie locale.",
    distanceNote: "à environ 320 km au sud de notre dépôt de Nabeul",
    faq: [
      {
        q: "Pourquoi la livraison n'est-elle pas gratuite à Gabès ?",
        a: "La livraison gratuite est réservée aux deux zones les plus proches de notre dépôt (Grand Tunis et Nabeul). Pour Gabès, un tarif de transport est calculé selon la distance et vous est communiqué avant confirmation de commande.",
      },
      {
        q: "Vendez-vous aussi des palmiers dattiers à Gabès ?",
        a: "Notre offre porte sur le palmier décoratif d'ornement à 275 DT pour l'aménagement de jardins, et non sur la production de palmiers dattiers destinés à l'exploitation agricole.",
      },
    ],
  },
  {
    slug: "hammamet",
    name: "Hammamet",
    governorate: "Nabeul",
    metaTitle: "Gazon & Palmier Hammamet - Green Garden",
    metaDescription:
      "Gazon naturel à 9 DT/m² livré gratuitement à Hammamet et palmiers décoratifs à 275 DT, idéal pour villas et hôtels. Commandez via Green Garden.",
    h1: "Gazon et palmier à Hammamet",
    gazonStatus: "free",
    intro:
      "Hammamet fait partie du gouvernorat de Nabeul, l'une de nos deux zones de livraison gratuite pour le gazon naturel. Ville touristique par excellence, Hammamet compte de nombreuses villas, résidences et complexes hôteliers pour lesquels le gazon en rouleau et le palmier décoratif sont des choix d'aménagement très demandés.",
    useCase:
      "Nous livrons régulièrement à Hammamet Nord, Hammamet Sud et Yasmine Hammamet pour des projets de jardins de villas et d'espaces verts hôteliers, où le palmier décoratif est particulièrement recherché pour son effet visuel.",
    distanceNote: "à environ 15 km au sud de notre dépôt de Nabeul",
    faq: [
      {
        q: "La livraison de gazon est-elle gratuite à Hammamet ?",
        a: "Oui, Hammamet fait partie du gouvernorat de Nabeul, l'une de nos deux zones de livraison gratuite pour le gazon naturel à 9 DT/m².",
      },
      {
        q: "Proposez-vous des palmiers adaptés aux hôtels et complexes touristiques ?",
        a: "Oui, le palmier décoratif Green Garden à 275 DT est un choix courant pour les allées, piscines et jardins de complexes touristiques à Hammamet. Les frais de livraison pour les commandes en volume sont établis sur devis.",
      },
    ],
  },
];

module.exports = { villes };
