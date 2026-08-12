// Pages locales de livraison. Chaque ville a un contenu réellement différencié
// (statut de livraison gazon, contexte local, FAQ propre) pour éviter les pages
// quasi-identiques ("doorway pages") pénalisées par Google. Contenu disponible
// en français, anglais et arabe (clé `t`).
//
// Statut gazon : "free" (Grand Tunis + Nabeul, conforme à l'offre réelle),
// "quote" (livraison disponible mais sur devis, pas de fausse promesse de gratuité).
// Le palmier suit désormais le même statut que le gazon : livraison gratuite
// au Grand Tunis et à Nabeul, sur devis ailleurs (offre réelle mise à jour).

const villes = [
  {
    slug: "grand-tunis",
    name: "Grand Tunis",
    gazonStatus: "free",
    t: {
      fr: {
        metaTitle: "Gazon & Palmier Grand Tunis - Green Garden",
        metaDescription:
          "Gazon naturel et palmiers décoratifs livrés gratuitement dans tout le Grand Tunis (Tunis, Ariana, Ben Arous, Manouba). Gazon à 9 DT/m², palmier à 490 DT/m.",
        h1: "Gazon et palmier dans le Grand Tunis",
        intro:
          "Le Grand Tunis (Tunis, Ariana, Ben Arous et Manouba) est l'une de nos deux zones de livraison gratuite pour le gazon naturel en rouleau. Que vous aménagiez un jardin de villa à La Marsa, un espace vert à Ariana ou les abords d'un local professionnel à Ben Arous, notre équipe organise la livraison et peut vous conseiller sur la pose.",
        useCase:
          "Nous livrons régulièrement des particuliers et des professionnels du paysagisme dans les banlieues nord (La Marsa, Carthage, Sidi Bou Said), le centre de Tunis et les zones résidentielles d'Ariana et de Ben Arous.",
        distanceNote: "à environ 65 km au nord-ouest de notre dépôt de Nabeul",
        faq: [
          { q: "La livraison de gazon est-elle vraiment gratuite dans tout le Grand Tunis ?", a: "Oui. Le Grand Tunis (Tunis, Ariana, Ben Arous, Manouba) fait partie de nos deux zones de livraison gratuite pour le gazon naturel, au prix de 9 DT/m², sans minimum de commande caché." },
          { q: "Peut-on commander un palmier pour une adresse dans le Grand Tunis ?", a: "Oui, et la livraison du palmier décoratif à 490 DT/m est gratuite dans tout le Grand Tunis, comme pour le gazon naturel." },
          { q: "Sous quel délai la livraison est-elle effectuée ?", a: "En général sous 24 à 72h ouvrées selon la disponibilité du stock et votre secteur précis dans le Grand Tunis. Le délai exact est confirmé par WhatsApp lors de la prise de commande." },
        ],
      },
      en: {
        metaTitle: "Lawn & Palm Tree Greater Tunis - Green Garden",
        metaDescription:
          "Natural lawn and decorative palm trees delivered free of charge across Greater Tunis (Tunis, Ariana, Ben Arous, Manouba). Lawn at 9 DT/sqm, palm tree at 490 DT/m.",
        h1: "Lawn and palm tree in Greater Tunis",
        intro:
          "Greater Tunis (Tunis, Ariana, Ben Arous and Manouba) is one of our two free-delivery zones for natural rolled lawn. Whether you are landscaping a villa garden in La Marsa, a green space in Ariana, or the surroundings of a business premises in Ben Arous, our team organises delivery and can advise you on installation.",
        useCase:
          "We regularly deliver to individuals and landscaping professionals in the northern suburbs (La Marsa, Carthage, Sidi Bou Said), central Tunis, and the residential areas of Ariana and Ben Arous.",
        distanceNote: "about 65 km north-west of our Nabeul depot",
        faq: [
          { q: "Is lawn delivery really free across all of Greater Tunis?", a: "Yes. Greater Tunis (Tunis, Ariana, Ben Arous, Manouba) is one of our two free-delivery zones for natural lawn, priced at 9 DT/sqm, with no hidden minimum order." },
          { q: "Can I order a palm tree for an address in Greater Tunis?", a: "Yes, and delivery of the decorative palm tree at 490 DT/m is free anywhere in Greater Tunis, just like natural lawn." },
          { q: "What is the delivery timeframe?", a: "Generally within 24 to 72 business hours depending on stock availability and your specific area in Greater Tunis. The exact timeframe is confirmed via WhatsApp when you place your order." },
        ],
      },
      ar: {
        metaTitle: "عشب ونخيل تونس الكبرى - Green Garden",
        metaDescription:
          "عشب طبيعي ونخيل زينة يُوصَّلان مجاناً في كامل تونس الكبرى (تونس، أريانة، بن عروس، منوبة). عشب بسعر 9 دينار/م²، نخلة بسعر 490 دينار/م.",
        h1: "عشب ونخيل في تونس الكبرى",
        intro:
          "تُعد تونس الكبرى (تونس، أريانة، بن عروس ومنوبة) إحدى منطقتينا للتوصيل المجاني للعشب الطبيعي على شكل لفائف. سواء كنتم تُهيّئون حديقة فيلا بالمرسى أو مساحة خضراء بأريانة أو محيط مقر مهني ببن عروس، يتكفل فريقنا بتنظيم التوصيل ويمكنه إرشادكم حول التركيب.",
        useCase:
          "نوصل بانتظام إلى الأفراد ومهنيي تهيئة الحدائق في الضواحي الشمالية (المرسى، قرطاج، سيدي بوسعيد)، وسط تونس، والمناطق السكنية بأريانة وبن عروس.",
        distanceNote: "على بعد حوالي 65 كم شمال غرب مستودعنا بنابل",
        faq: [
          { q: "هل التوصيل مجاني فعلاً في كل تونس الكبرى؟", a: "نعم، تونس الكبرى (تونس، أريانة، بن عروس، منوبة) هي إحدى منطقتينا للتوصيل المجاني للعشب الطبيعي بسعر 9 دينار/م²، دون أي حد أدنى مخفي للطلب." },
          { q: "هل يمكن طلب نخلة لعنوان في تونس الكبرى؟", a: "نعم، وتوصيل نخلة الزينة بسعر 490 دينار/م مجاني في كل تونس الكبرى، تماماً مثل العشب الطبيعي." },
          { q: "ما هي مدة التوصيل؟", a: "عادة بين 24 و72 ساعة عمل حسب توفر المخزون ومنطقتكم الدقيقة في تونس الكبرى. تُؤكَّد المدة الدقيقة عبر واتساب عند تأكيد الطلب." },
        ],
      },
    },
  },
  {
    slug: "nabeul",
    name: "Nabeul",
    gazonStatus: "free",
    t: {
      fr: {
        metaTitle: "Gazon & Palmier Nabeul | Livraison gratuite - Green Garden",
        metaDescription:
          "Green Garden est basé à Nabeul : gazon naturel à 9 DT/m² et palmiers décoratifs à 490 DT/m livrés gratuitement dans toute la région.",
        h1: "Gazon et palmier à Nabeul",
        intro:
          "Nabeul est la région où se trouve notre dépôt Green Garden. C'est ici que nous préparons chaque commande de gazon en rouleau et de palmiers avant expédition, ce qui nous permet d'offrir la livraison gratuite du gazon et du palmier sur toute la région et les délais les plus courts de tout notre réseau.",
        useCase:
          "Nous accompagnons de nombreux projets de jardins de villas, de riads et d'espaces verts hôteliers dans la région de Nabeul, Hammamet, Dar Chaabane et Béni Khiar.",
        distanceNote: "notre région de base",
        faq: [
          { q: "Livrez-vous le gazon gratuitement à Nabeul ?", a: "Oui, Nabeul est notre région de base : la livraison du gazon naturel y est gratuite, quel que soit le volume commandé, au prix de 9 DT/m²." },
          { q: "Le palmier est-il aussi livré gratuitement à Nabeul ?", a: "Oui, comme le gazon, le palmier décoratif à 490 DT/m est livré gratuitement partout dans la région de Nabeul." },
          { q: "Quel délai pour une commande à Nabeul ?", a: "Étant notre région de base, les commandes à Nabeul sont généralement livrées sous 24 à 48h ouvrées." },
        ],
      },
      en: {
        metaTitle: "Lawn & Palm Tree Nabeul | Free Delivery - Green Garden",
        metaDescription:
          "Green Garden is based in Nabeul: natural lawn at 9 DT/sqm and decorative palm trees at 490 DT/m delivered free across the region.",
        h1: "Lawn and palm tree in Nabeul",
        intro:
          "Nabeul is home to our Green Garden depot. This is where every order of rolled lawn and palm trees is prepared before shipping, which is why we can offer free delivery of both lawn and palm trees across the whole region and the shortest lead times in our entire network.",
        useCase:
          "We support many villa garden projects, riads and hotel green spaces in the Nabeul, Hammamet, Dar Chaabane and Béni Khiar area.",
        distanceNote: "our home base",
        faq: [
          { q: "Do you deliver lawn for free in Nabeul?", a: "Yes, Nabeul is our home base: natural lawn delivery there is free regardless of the volume ordered, at 9 DT/sqm." },
          { q: "Is the palm tree also delivered free in Nabeul?", a: "Yes, like lawn, the decorative palm tree at 490 DT/m is delivered free anywhere in the Nabeul region." },
          { q: "What is the delivery timeframe in Nabeul?", a: "As our home base, orders in Nabeul are generally delivered within 24 to 48 business hours." },
        ],
      },
      ar: {
        metaTitle: "عشب ونخيل نابل | توصيل مجاني - Green Garden",
        metaDescription:
          "Green Garden مقرها نابل: عشب طبيعي بسعر 9 دينار/م² ونخيل زينة بسعر 490 دينار/م يُوصَّلان مجاناً في كل الجهة.",
        h1: "عشب ونخيل في نابل",
        intro:
          "نابل هي المنطقة التي يوجد بها مستودع Green Garden. هنا نُحضّر كل طلبية من العشب الطبيعي والنخيل قبل الشحن، مما يتيح لنا تقديم توصيل مجاني للعشب والنخيل في كامل الجهة وأقصر الآجال في كل شبكتنا.",
        useCase:
          "نرافق العديد من مشاريع حدائق الفيلات والرياضات والمساحات الخضراء الفندقية في جهة نابل، الحمامات، دار شعبان وبني خيار.",
        distanceNote: "جهتنا الأساسية",
        faq: [
          { q: "هل توصلون العشب مجاناً في نابل؟", a: "نعم، نابل هي جهتنا الأساسية: توصيل العشب الطبيعي مجاني مهما كانت كمية الطلب، بسعر 9 دينار/م²." },
          { q: "هل تُوصَّل النخلة أيضاً مجاناً في نابل؟", a: "نعم، مثل العشب، تُوصَّل نخلة الزينة بسعر 490 دينار/م مجاناً في كل أنحاء جهة نابل." },
          { q: "ما هي مدة التوصيل في نابل؟", a: "بما أنها جهتنا الأساسية، تُوصَّل الطلبيات في نابل عادة خلال 24 إلى 48 ساعة عمل." },
        ],
      },
    },
  },
  {
    slug: "sousse",
    name: "Sousse",
    gazonStatus: "quote",
    t: {
      fr: {
        metaTitle: "Gazon & Palmier Sousse | Livraison sur devis - Green Garden",
        metaDescription:
          "Gazon naturel à 9 DT/m² et palmiers décoratifs à 490 DT/m livrés à Sousse. Livraison organisée sur devis, contactez Green Garden par WhatsApp.",
        h1: "Gazon et palmier à Sousse",
        intro:
          "Sousse et sa région (Port El Kantaoui, Kalâa Kebira, Hammam Sousse) font partie des zones que nous desservons régulièrement pour le gazon naturel en rouleau et les palmiers décoratifs. La livraison y est organisée sur devis : nous calculons le tarif exact selon votre adresse et le volume de la commande.",
        useCase:
          "Beaucoup de nos commandes vers Sousse concernent des jardins de villas, des complexes résidentiels et des aménagements autour de zones touristiques du littoral.",
        distanceNote: "à environ 90 km au sud de notre dépôt de Nabeul",
        faq: [
          { q: "Le gazon est-il livrable jusqu'à Sousse ?", a: "Oui. Le gazon naturel Green Garden est livrable à Sousse. La livraison n'est pas gratuite dans cette zone (réservée au Grand Tunis et à Nabeul), mais nous vous communiquons un tarif de transport clair avant toute commande." },
          { q: "Combien coûte la livraison d'un palmier à Sousse ?", a: "Le tarif dépend de la distance exacte et du volume à transporter. Envoyez-nous votre adresse par WhatsApp pour recevoir un devis précis sous quelques heures." },
        ],
      },
      en: {
        metaTitle: "Lawn & Palm Tree Sousse | Delivery on Quote - Green Garden",
        metaDescription:
          "Natural lawn at 9 DT/sqm and decorative palm trees at 490 DT/m delivered to Sousse. Delivery arranged on quote, contact Green Garden on WhatsApp.",
        h1: "Lawn and palm tree in Sousse",
        intro:
          "Sousse and its area (Port El Kantaoui, Kalâa Kebira, Hammam Sousse) are among the zones we regularly serve with natural rolled lawn and decorative palm trees. Delivery there is arranged on quote: we calculate the exact rate based on your address and order volume.",
        useCase:
          "Many of our orders to Sousse are for villa gardens, residential complexes and landscaping around coastal tourist areas.",
        distanceNote: "about 90 km south of our Nabeul depot",
        faq: [
          { q: "Can lawn be delivered as far as Sousse?", a: "Yes. Green Garden natural lawn can be delivered to Sousse. Delivery is not free in this zone (reserved for Greater Tunis and Nabeul), but we give you a clear transport rate before any order." },
          { q: "How much does palm tree delivery to Sousse cost?", a: "The rate depends on the exact distance and volume to transport. Send us your address on WhatsApp to receive an accurate quote within a few hours." },
        ],
      },
      ar: {
        metaTitle: "عشب ونخيل سوسة | توصيل حسب الطلب - Green Garden",
        metaDescription:
          "عشب طبيعي بسعر 9 دينار/م² ونخيل زينة بسعر 490 دينار/م يُوصَّلان إلى سوسة. توصيل مُنظّم حسب الطلب، تواصلوا مع Green Garden عبر واتساب.",
        h1: "عشب ونخيل في سوسة",
        intro:
          "تُعد سوسة وجهتها (بورت الكانتاوي، قلعة كبيرة، حمام سوسة) من بين المناطق التي نخدمها بانتظام بالعشب الطبيعي على شكل لفائف والنخيل الزينة. يُنظَّم التوصيل هناك حسب الطلب: نحسب التعريفة الدقيقة حسب عنوانكم وحجم الطلبية.",
        useCase:
          "العديد من طلبياتنا نحو سوسة تخص حدائق الفيلات والمجمعات السكنية والتهيئات حول المناطق السياحية الساحلية.",
        distanceNote: "على بعد حوالي 90 كم جنوب مستودعنا بنابل",
        faq: [
          { q: "هل العشب قابل للتوصيل إلى سوسة؟", a: "نعم. عشب Green Garden الطبيعي قابل للتوصيل إلى سوسة. التوصيل ليس مجانياً في هذه المنطقة (مخصص لتونس الكبرى ونابل)، لكننا نُبلغكم بتعريفة نقل واضحة قبل أي طلب." },
          { q: "كم تكلفة توصيل نخلة إلى سوسة؟", a: "تعتمد التعريفة على المسافة الدقيقة وحجم الشحنة. أرسلوا لنا عنوانكم عبر واتساب لتلقي عرض سعر دقيق خلال ساعات قليلة." },
        ],
      },
    },
  },
  {
    slug: "monastir",
    name: "Monastir",
    gazonStatus: "quote",
    t: {
      fr: {
        metaTitle: "Gazon & Palmier Monastir | Livraison sur devis - Green Garden",
        metaDescription:
          "Gazon naturel en rouleau et palmiers décoratifs livrés à Monastir. Devis de livraison rapide par WhatsApp avec Green Garden.",
        h1: "Gazon et palmier à Monastir",
        intro:
          "Nous livrons régulièrement du gazon naturel et des palmiers décoratifs à Monastir et dans les localités environnantes (Skanes, Ksar Hellal, Ksibet el Mediouni). Comme pour les autres zones hors Grand Tunis et Nabeul, la livraison est organisée sur devis.",
        useCase:
          "Monastir compte de nombreuses résidences en bord de mer et complexes hôteliers pour lesquels nous fournissons du gazon en rouleau prêt à poser et des palmiers d'ornement.",
        distanceNote: "à environ 110 km au sud de notre dépôt de Nabeul",
        faq: [
          { q: "Peut-on faire poser le gazon directement à Monastir ?", a: "Nous livrons le gazon en rouleau jusqu'à votre adresse à Monastir. Nous pouvons également vous conseiller sur la pose ou vous mettre en relation avec des poseurs partenaires selon votre projet." },
          { q: "Quel est le délai de livraison à Monastir ?", a: "Comptez généralement 48 à 96h ouvrées selon le stock disponible, à confirmer lors de votre demande de devis par WhatsApp." },
        ],
      },
      en: {
        metaTitle: "Lawn & Palm Tree Monastir | Delivery on Quote - Green Garden",
        metaDescription:
          "Natural rolled lawn and decorative palm trees delivered to Monastir. Fast delivery quote on WhatsApp with Green Garden.",
        h1: "Lawn and palm tree in Monastir",
        intro:
          "We regularly deliver natural lawn and decorative palm trees to Monastir and surrounding towns (Skanes, Ksar Hellal, Ksibet el Mediouni). As with other zones outside Greater Tunis and Nabeul, delivery is arranged on quote.",
        useCase:
          "Monastir has many seafront residences and hotel complexes for which we supply ready-to-lay rolled lawn and ornamental palm trees.",
        distanceNote: "about 110 km south of our Nabeul depot",
        faq: [
          { q: "Can lawn be laid directly in Monastir?", a: "We deliver rolled lawn to your address in Monastir. We can also advise you on installation or put you in touch with partner installers depending on your project." },
          { q: "What is the delivery timeframe in Monastir?", a: "Generally allow 48 to 96 business hours depending on available stock, to be confirmed when you request a quote on WhatsApp." },
        ],
      },
      ar: {
        metaTitle: "عشب ونخيل المنستير | توصيل حسب الطلب - Green Garden",
        metaDescription:
          "عشب طبيعي على شكل لفائف ونخيل زينة يُوصَّلان إلى المنستير. عرض سعر توصيل سريع عبر واتساب مع Green Garden.",
        h1: "عشب ونخيل في المنستير",
        intro:
          "نوصل بانتظام العشب الطبيعي والنخيل الزينة إلى المنستير والمناطق المجاورة (سكانس، قصر هلال، قصيبة المديوني). كما هو الحال في المناطق الأخرى خارج تونس الكبرى ونابل، يُنظَّم التوصيل حسب الطلب.",
        useCase:
          "تضم المنستير العديد من المساكن الساحلية والمجمعات الفندقية التي نزودها بالعشب الطبيعي الجاهز للتركيب ونخيل الزينة.",
        distanceNote: "على بعد حوالي 110 كم جنوب مستودعنا بنابل",
        faq: [
          { q: "هل يمكن تركيب العشب مباشرة في المنستير؟", a: "نوصل العشب على شكل لفائف إلى عنوانكم بالمنستير. يمكننا أيضاً إرشادكم حول التركيب أو ربطكم بمُركِّبين شركاء حسب مشروعكم." },
          { q: "ما هي مدة التوصيل في المنستير؟", a: "احسبوا عادة بين 48 و96 ساعة عمل حسب المخزون المتوفر، تُؤكَّد عند طلب عرض السعر عبر واتساب." },
        ],
      },
    },
  },
  {
    slug: "sfax",
    name: "Sfax",
    gazonStatus: "quote",
    t: {
      fr: {
        metaTitle: "Gazon & Palmier Sfax | Livraison sur devis - Green Garden",
        metaDescription:
          "Green Garden livre gazon naturel en rouleau et palmiers décoratifs jusqu'à Sfax. Demandez votre devis de livraison par WhatsApp.",
        h1: "Gazon et palmier à Sfax",
        intro:
          "Sfax est l'une des principales villes du sud vers laquelle nous expédions du gazon naturel et des palmiers décoratifs. La distance étant plus importante, la livraison y est systématiquement organisée sur devis pour vous garantir un tarif transparent.",
        useCase:
          "Nos commandes vers Sfax concernent principalement des projets de jardins privés et des aménagements paysagers pour des sociétés locales.",
        distanceNote: "à environ 200 km au sud de notre dépôt de Nabeul",
        faq: [
          { q: "Livrez-vous vraiment jusqu'à Sfax ?", a: "Oui, Sfax fait partie de nos zones de livraison sur devis pour le gazon naturel et les palmiers décoratifs. Contactez-nous pour connaître le délai et le tarif exact selon votre adresse." },
          { q: "Le palmier résiste-t-il au climat de Sfax ?", a: "Nos variétés de palmiers décoratifs sont adaptées au climat tunisien, y compris aux étés chauds et secs du sud-est. Nous vous conseillons sur l'entretien après livraison." },
        ],
      },
      en: {
        metaTitle: "Lawn & Palm Tree Sfax | Delivery on Quote - Green Garden",
        metaDescription:
          "Green Garden delivers natural rolled lawn and decorative palm trees as far as Sfax. Request your delivery quote on WhatsApp.",
        h1: "Lawn and palm tree in Sfax",
        intro:
          "Sfax is one of the main southern cities we ship natural lawn and decorative palm trees to. Given the greater distance, delivery there is always arranged on quote to guarantee you a transparent rate.",
        useCase:
          "Our orders to Sfax mostly involve private garden projects and landscaping for local companies.",
        distanceNote: "about 200 km south of our Nabeul depot",
        faq: [
          { q: "Do you really deliver as far as Sfax?", a: "Yes, Sfax is one of our delivery-on-quote zones for natural lawn and decorative palm trees. Contact us to find out the exact timeframe and rate for your address." },
          { q: "Does the palm tree withstand the climate in Sfax?", a: "Our decorative palm tree varieties are suited to the Tunisian climate, including the hot, dry summers of the south-east. We advise you on care after delivery." },
        ],
      },
      ar: {
        metaTitle: "عشب ونخيل صفاقس | توصيل حسب الطلب - Green Garden",
        metaDescription:
          "توصل Green Garden العشب الطبيعي على شكل لفائف والنخيل الزينة إلى صفاقس. اطلبوا عرض سعر التوصيل عبر واتساب.",
        h1: "عشب ونخيل في صفاقس",
        intro:
          "تُعد صفاقس إحدى المدن الجنوبية الرئيسية التي نشحن إليها العشب الطبيعي والنخيل الزينة. نظراً للمسافة الأكبر، يُنظَّم التوصيل هناك دائماً حسب الطلب لضمان تعريفة شفافة لكم.",
        useCase:
          "تخص طلبياتنا نحو صفاقس بالأساس مشاريع حدائق خاصة وتهيئات مساحات خضراء لشركات محلية.",
        distanceNote: "على بعد حوالي 200 كم جنوب مستودعنا بنابل",
        faq: [
          { q: "هل توصلون فعلاً إلى صفاقس؟", a: "نعم، صفاقس هي إحدى مناطق التوصيل حسب الطلب لدينا للعشب الطبيعي والنخيل الزينة. تواصلوا معنا لمعرفة المدة والتعريفة الدقيقة حسب عنوانكم." },
          { q: "هل يتحمل النخيل مناخ صفاقس؟", a: "أصناف النخيل الزينة لدينا مكيّفة مع المناخ التونسي، بما في ذلك صيف الجنوب الشرقي الحار والجاف. نرشدكم حول العناية بعد التوصيل." },
        ],
      },
    },
  },
  {
    slug: "bizerte",
    name: "Bizerte",
    gazonStatus: "quote",
    t: {
      fr: {
        metaTitle: "Gazon & Palmier Bizerte | Livraison sur devis - Green Garden",
        metaDescription:
          "Gazon naturel et palmiers décoratifs livrés à Bizerte et sa région. Green Garden vous envoie un devis de livraison rapide par WhatsApp.",
        h1: "Gazon et palmier à Bizerte",
        intro:
          "Bizerte et ses environs (Menzel Bourguiba, Menzel Jemil, Ras Jebel) sont desservis pour nos deux produits phares : le gazon naturel en rouleau et le palmier décoratif. La livraison y est proposée sur devis, en fonction de la distance depuis notre dépôt de Nabeul via le Grand Tunis.",
        useCase:
          "La région de Bizerte, avec son climat plus humide, convient particulièrement bien à l'installation de gazon naturel qui y demande un entretien légèrement réduit qu'au sud du pays.",
        distanceNote: "à environ 120 km au nord de notre dépôt de Nabeul",
        faq: [
          { q: "Le climat de Bizerte convient-il au gazon naturel ?", a: "Oui, le climat plus humide du nord de la Tunisie est favorable à l'implantation du gazon naturel, avec des besoins en arrosage généralement inférieurs à ceux des régions plus sèches." },
          { q: "Quels délais pour une livraison à Bizerte ?", a: "Comptez en moyenne 48 à 96h ouvrées ; le délai précis vous est confirmé lors de votre demande de devis." },
        ],
      },
      en: {
        metaTitle: "Lawn & Palm Tree Bizerte | Delivery on Quote - Green Garden",
        metaDescription:
          "Natural lawn and decorative palm trees delivered to Bizerte and its region. Green Garden sends you a fast delivery quote on WhatsApp.",
        h1: "Lawn and palm tree in Bizerte",
        intro:
          "Bizerte and its surroundings (Menzel Bourguiba, Menzel Jemil, Ras Jebel) are served for both our flagship products: natural rolled lawn and decorative palm trees. Delivery there is offered on quote, based on the distance from our Nabeul depot via Greater Tunis.",
        useCase:
          "The Bizerte region, with its more humid climate, is particularly well suited to natural lawn, which needs slightly less maintenance there than in the south of the country.",
        distanceNote: "about 120 km north of our Nabeul depot",
        faq: [
          { q: "Does the Bizerte climate suit natural lawn?", a: "Yes, the more humid climate of northern Tunisia is favourable to natural lawn, with watering needs generally lower than in drier regions." },
          { q: "What are the delivery timeframes for Bizerte?", a: "Allow 48 to 96 business hours on average; the exact timeframe is confirmed when you request a quote." },
        ],
      },
      ar: {
        metaTitle: "عشب ونخيل بنزرت | توصيل حسب الطلب - Green Garden",
        metaDescription:
          "عشب طبيعي ونخيل زينة يُوصَّلان إلى بنزرت وجهتها. ترسل لكم Green Garden عرض سعر توصيل سريع عبر واتساب.",
        h1: "عشب ونخيل في بنزرت",
        intro:
          "تُخدَم بنزرت ومحيطها (منزل بورقيبة، منزل جميل، رأس الجبل) بمنتجينا الرئيسيين: العشب الطبيعي على شكل لفائف والنخيل الزينة. يُقترح التوصيل هناك حسب الطلب، حسب المسافة من مستودعنا بنابل عبر تونس الكبرى.",
        useCase:
          "تُلائم جهة بنزرت، بمناخها الأكثر رطوبة، تركيب العشب الطبيعي الذي يتطلب هناك عناية أقل قليلاً مقارنة بجنوب البلاد.",
        distanceNote: "على بعد حوالي 120 كم شمال مستودعنا بنابل",
        faq: [
          { q: "هل يناسب مناخ بنزرت العشب الطبيعي؟", a: "نعم، المناخ الأكثر رطوبة في شمال تونس مناسب لزراعة العشب الطبيعي، مع احتياجات ري أقل عموماً مقارنة بالمناطق الأكثر جفافاً." },
          { q: "ما هي آجال التوصيل إلى بنزرت؟", a: "احسبوا في المتوسط بين 48 و96 ساعة عمل؛ تُؤكَّد المدة الدقيقة عند طلب عرض السعر." },
        ],
      },
    },
  },
  {
    slug: "gabes",
    name: "Gabès",
    gazonStatus: "quote",
    t: {
      fr: {
        metaTitle: "Gazon & Palmier Gabès | Livraison sur devis - Green Garden",
        metaDescription:
          "Green Garden livre du gazon naturel en rouleau et des palmiers décoratifs jusqu'à Gabès. Devis de livraison rapide par WhatsApp.",
        h1: "Gazon et palmier à Gabès",
        intro:
          "Gabès, région historiquement liée à la culture du palmier dattier grâce à son oasis, est aussi l'une des zones où nous livrons nos palmiers décoratifs d'ornement et notre gazon naturel en rouleau, sur devis selon la distance depuis Nabeul.",
        useCase:
          "Nos livraisons vers Gabès concernent aussi bien des jardins privés que des aménagements d'espaces verts en complément de la palmeraie locale.",
        distanceNote: "à environ 320 km au sud de notre dépôt de Nabeul",
        faq: [
          { q: "Pourquoi la livraison n'est-elle pas gratuite à Gabès ?", a: "La livraison gratuite est réservée aux deux zones les plus proches de notre dépôt (Grand Tunis et Nabeul). Pour Gabès, un tarif de transport est calculé selon la distance et vous est communiqué avant confirmation de commande." },
          { q: "Vendez-vous aussi des palmiers dattiers à Gabès ?", a: "Notre offre porte sur le palmier décoratif d'ornement à 490 DT/m pour l'aménagement de jardins, et non sur la production de palmiers dattiers destinés à l'exploitation agricole." },
        ],
      },
      en: {
        metaTitle: "Lawn & Palm Tree Gabes | Delivery on Quote - Green Garden",
        metaDescription:
          "Green Garden delivers natural rolled lawn and decorative palm trees as far as Gabes. Fast delivery quote on WhatsApp.",
        h1: "Lawn and palm tree in Gabes",
        intro:
          "Gabes, a region historically linked to date palm growing thanks to its oasis, is also one of the zones where we deliver our ornamental decorative palm trees and natural rolled lawn, on quote depending on the distance from Nabeul.",
        useCase:
          "Our deliveries to Gabes involve both private gardens and green-space landscaping alongside the local palm grove.",
        distanceNote: "about 320 km south of our Nabeul depot",
        faq: [
          { q: "Why isn't delivery free in Gabes?", a: "Free delivery is reserved for the two zones closest to our depot (Greater Tunis and Nabeul). For Gabes, a transport rate is calculated based on distance and communicated to you before order confirmation." },
          { q: "Do you also sell date palms in Gabes?", a: "Our offer is for the ornamental decorative palm tree at 490 DT/m for garden landscaping, not for date palm production intended for agricultural use." },
        ],
      },
      ar: {
        metaTitle: "عشب ونخيل قابس | توصيل حسب الطلب - Green Garden",
        metaDescription:
          "توصل Green Garden العشب الطبيعي على شكل لفائف والنخيل الزينة إلى قابس. عرض سعر توصيل سريع عبر واتساب.",
        h1: "عشب ونخيل في قابس",
        intro:
          "قابس، الجهة المرتبطة تاريخياً بزراعة نخيل التمر بفضل واحتها، هي أيضاً إحدى المناطق التي نوصل إليها نخيل الزينة والعشب الطبيعي على شكل لفائف، حسب الطلب وحسب المسافة من نابل.",
        useCase:
          "تخص توصيلاتنا نحو قابس حدائق خاصة وتهيئات مساحات خضراء مكمّلة للواحة المحلية.",
        distanceNote: "على بعد حوالي 320 كم جنوب مستودعنا بنابل",
        faq: [
          { q: "لماذا التوصيل غير مجاني في قابس؟", a: "التوصيل المجاني مخصص لأقرب منطقتين من مستودعنا (تونس الكبرى ونابل). بالنسبة لقابس، تُحسب تعريفة نقل حسب المسافة وتُبلَّغ لكم قبل تأكيد الطلب." },
          { q: "هل تبيعون أيضاً نخيل التمر في قابس؟", a: "عرضنا يخص نخيل الزينة بسعر 490 دينار/م لتهيئة الحدائق، وليس إنتاج نخيل التمر الموجه للاستغلال الفلاحي." },
        ],
      },
    },
  },
  {
    slug: "hammamet",
    name: "Hammamet",
    gazonStatus: "free",
    t: {
      fr: {
        metaTitle: "Gazon & Palmier Hammamet - Green Garden",
        metaDescription:
          "Gazon naturel à 9 DT/m² et palmiers décoratifs à 490 DT/m livrés gratuitement à Hammamet, idéal pour villas et hôtels. Commandez via Green Garden.",
        h1: "Gazon et palmier à Hammamet",
        intro:
          "Hammamet fait partie du gouvernorat de Nabeul, l'une de nos deux zones de livraison gratuite pour le gazon naturel et le palmier décoratif. Ville touristique par excellence, Hammamet compte de nombreuses villas, résidences et complexes hôteliers pour lesquels le gazon en rouleau et le palmier décoratif sont des choix d'aménagement très demandés.",
        useCase:
          "Nous livrons régulièrement à Hammamet Nord, Hammamet Sud et Yasmine Hammamet pour des projets de jardins de villas et d'espaces verts hôteliers, où le palmier décoratif est particulièrement recherché pour son effet visuel.",
        distanceNote: "à environ 15 km au sud de notre dépôt de Nabeul",
        faq: [
          { q: "La livraison de gazon est-elle gratuite à Hammamet ?", a: "Oui, Hammamet fait partie du gouvernorat de Nabeul, l'une de nos deux zones de livraison gratuite pour le gazon naturel à 9 DT/m²." },
          { q: "Proposez-vous des palmiers adaptés aux hôtels et complexes touristiques ?", a: "Oui, le palmier décoratif Green Garden à 490 DT/m est un choix courant pour les allées, piscines et jardins de complexes touristiques à Hammamet, et sa livraison y est gratuite, y compris pour les commandes en volume." },
        ],
      },
      en: {
        metaTitle: "Lawn & Palm Tree Hammamet - Green Garden",
        metaDescription:
          "Natural lawn at 9 DT/sqm and decorative palm trees at 490 DT/m delivered free to Hammamet, ideal for villas and hotels. Order with Green Garden.",
        h1: "Lawn and palm tree in Hammamet",
        intro:
          "Hammamet is part of Nabeul governorate, one of our two free-delivery zones for natural lawn and the decorative palm tree. A quintessential tourist town, Hammamet has many villas, residences and hotel complexes for which rolled lawn and decorative palm trees are highly sought-after landscaping choices.",
        useCase:
          "We regularly deliver to Hammamet North, Hammamet South and Yasmine Hammamet for villa garden projects and hotel green spaces, where the decorative palm tree is especially popular for its visual impact.",
        distanceNote: "about 15 km south of our Nabeul depot",
        faq: [
          { q: "Is lawn delivery free in Hammamet?", a: "Yes, Hammamet is part of Nabeul governorate, one of our two free-delivery zones for natural lawn at 9 DT/sqm." },
          { q: "Do you offer palm trees suited to hotels and tourist complexes?", a: "Yes, the Green Garden decorative palm tree at 490 DT/m is a common choice for driveways, pools and gardens of tourist complexes in Hammamet, and delivery there is free, including for bulk orders." },
        ],
      },
      ar: {
        metaTitle: "عشب ونخيل الحمامات - Green Garden",
        metaDescription:
          "عشب طبيعي بسعر 9 دينار/م² ونخيل زينة بسعر 490 دينار/م يُوصَّلان مجاناً إلى الحمامات، مثالي للفيلات والفنادق. اطلبوا عبر Green Garden.",
        h1: "عشب ونخيل في الحمامات",
        intro:
          "تنتمي الحمامات إلى ولاية نابل، إحدى منطقتينا للتوصيل المجاني للعشب الطبيعي ونخيل الزينة. مدينة سياحية بامتياز، تضم الحمامات العديد من الفيلات والمساكن والمجمعات الفندقية التي يُعد فيها العشب على شكل لفائف والنخيل الزينة خيارات تهيئة مطلوبة جداً.",
        useCase:
          "نوصل بانتظام إلى الحمامات الشمالية والحمامات الجنوبية وياسمين الحمامات لمشاريع حدائق الفيلات والمساحات الخضراء الفندقية، حيث يُطلب النخيل الزينة بشكل خاص لتأثيره البصري.",
        distanceNote: "على بعد حوالي 15 كم جنوب مستودعنا بنابل",
        faq: [
          { q: "هل التوصيل مجاني في الحمامات؟", a: "نعم، تنتمي الحمامات إلى ولاية نابل، إحدى منطقتينا للتوصيل المجاني للعشب الطبيعي بسعر 9 دينار/م²." },
          { q: "هل تقدمون نخيلاً مناسباً للفنادق والمجمعات السياحية؟", a: "نعم، نخيل الزينة من Green Garden بسعر 490 دينار/م خيار شائع للممرات والمسابح وحدائق المجمعات السياحية بالحمامات، وتوصيله مجاني هناك، حتى للطلبيات الكبيرة." },
        ],
      },
    },
  },
  {
    slug: "tunis",
    name: "Tunis",
    gazonStatus: "free",
    t: {
      fr: {
        metaTitle: "Gazon & Palmier Tunis | Livraison gratuite - Green Garden",
        metaDescription:
          "Gazon naturel à 9 DT/m² et palmiers décoratifs à 490 DT/m livrés gratuitement à Tunis ville. Devis rapide par WhatsApp avec Green Garden.",
        h1: "Gazon et palmier à Tunis",
        intro:
          "Tunis ville fait partie du Grand Tunis, l'une de nos deux zones de livraison gratuite pour le gazon naturel et le palmier décoratif. Entre appartements avec terrasse et villas avec jardin, la capitale a des besoins d'aménagement très variés que nous accompagnons au quotidien.",
        useCase:
          "Nous livrons régulièrement le centre-ville, Le Bardo, Le Belvédère, Le Menzah, El Manar et Ennasr, aussi bien pour des jardins de villas que pour des palmiers en pot sur des terrasses et balcons.",
        distanceNote: "à environ 65 km au nord-ouest de notre dépôt de Nabeul",
        faq: [
          { q: "La livraison est-elle gratuite partout à Tunis ville ?", a: "Oui, Tunis ville fait partie du Grand Tunis, l'une de nos deux zones de livraison gratuite pour le gazon naturel et le palmier décoratif, sans minimum de commande." },
          { q: "Proposez-vous des palmiers adaptés aux petites terrasses en centre-ville ?", a: "Oui, certaines variétés compactes de notre palmier décoratif conviennent très bien à une terrasse ou un balcon urbain. Contactez-nous pour un conseil adapté à votre espace." },
        ],
      },
      en: {
        metaTitle: "Lawn & Palm Tree Tunis | Free Delivery - Green Garden",
        metaDescription:
          "Natural lawn at 9 DT/sqm and decorative palm trees at 490 DT/m delivered free to Tunis city. Fast quote on WhatsApp with Green Garden.",
        h1: "Lawn and palm tree in Tunis",
        intro:
          "Tunis city is part of Greater Tunis, one of our two free-delivery zones for natural lawn and the decorative palm tree. Between apartments with a terrace and villas with a garden, the capital has very varied landscaping needs that we support daily.",
        useCase:
          "We regularly deliver to the city centre, Le Bardo, Le Belvédère, Le Menzah, El Manar and Ennasr, for both villa gardens and potted palm trees on terraces and balconies.",
        distanceNote: "about 65 km north-west of our Nabeul depot",
        faq: [
          { q: "Is delivery free everywhere in Tunis city?", a: "Yes, Tunis city is part of Greater Tunis, one of our two free-delivery zones for natural lawn and the decorative palm tree, with no minimum order." },
          { q: "Do you offer palm trees suited to small city-centre terraces?", a: "Yes, some compact varieties of our decorative palm tree suit an urban terrace or balcony very well. Contact us for advice suited to your space." },
        ],
      },
      ar: {
        metaTitle: "عشب ونخيل تونس | توصيل مجاني - Green Garden",
        metaDescription:
          "عشب طبيعي بسعر 9 دينار/م² ونخيل زينة بسعر 490 دينار/م يُوصَّلان مجاناً إلى مدينة تونس. عرض سعر سريع عبر واتساب مع Green Garden.",
        h1: "عشب ونخيل في تونس",
        intro:
          "تنتمي مدينة تونس إلى تونس الكبرى، إحدى منطقتينا للتوصيل المجاني للعشب الطبيعي ونخيل الزينة. بين شقق ذات تراس وفيلات ذات حديقة، تتنوع احتياجات تهيئة العاصمة كثيراً ونرافقها يومياً.",
        useCase:
          "نوصل بانتظام إلى وسط المدينة والباردو والبلفيدير والمنزه والمنار والنصر، سواء لحدائق الفيلات أو لنخيل في أصص على التراسات والشرفات.",
        distanceNote: "على بعد حوالي 65 كم شمال غرب مستودعنا بنابل",
        faq: [
          { q: "هل التوصيل مجاني في كل مدينة تونس؟", a: "نعم، تنتمي مدينة تونس إلى تونس الكبرى، إحدى منطقتينا للتوصيل المجاني للعشب الطبيعي ونخيل الزينة، دون حد أدنى للطلب." },
          { q: "هل تقدمون نخيلاً مناسباً للتراسات الصغيرة في وسط المدينة؟", a: "نعم، بعض الأصناف المدمجة من نخيل الزينة لدينا تناسب جيداً تراساً حضرياً أو شرفة. تواصلوا معنا لنصيحة مناسبة لمساحتكم." },
        ],
      },
    },
  },
  {
    slug: "ariana",
    name: "Ariana",
    gazonStatus: "free",
    t: {
      fr: {
        metaTitle: "Gazon & Palmier Ariana | Livraison gratuite - Green Garden",
        metaDescription:
          "Gazon naturel à 9 DT/m² et palmiers décoratifs à 490 DT/m livrés gratuitement à Ariana. Ville verte du Grand Tunis, devis rapide par WhatsApp.",
        h1: "Gazon et palmier à Ariana",
        intro:
          "Ariana fait partie du Grand Tunis, l'une de nos deux zones de livraison gratuite pour le gazon naturel et le palmier décoratif. Surnommée historiquement la ville des jardins, Ariana compte de nombreuses villas avec espaces verts pour lesquelles le gazon et le palmier sont des choix d'aménagement naturels.",
        useCase:
          "Nous livrons régulièrement Ariana ville, La Soukra et Raoued pour des jardins de villas, ainsi que des espaces verts résidentiels et de petits commerces le long des grands axes.",
        distanceNote: "à environ 60 km au nord-ouest de notre dépôt de Nabeul",
        faq: [
          { q: "La livraison de gazon est-elle gratuite à Ariana ?", a: "Oui, Ariana fait partie du Grand Tunis, l'une de nos deux zones de livraison gratuite pour le gazon naturel et le palmier décoratif." },
          { q: "Le palmier convient-il aux jardins d'Ariana ?", a: "Tout à fait, Ariana étant historiquement une ville de jardins, le climat et les sols y sont favorables au palmier décoratif comme au gazon naturel." },
        ],
      },
      en: {
        metaTitle: "Lawn & Palm Tree Ariana | Free Delivery - Green Garden",
        metaDescription:
          "Natural lawn at 9 DT/sqm and decorative palm trees at 490 DT/m delivered free to Ariana. Greater Tunis' garden city, fast quote on WhatsApp.",
        h1: "Lawn and palm tree in Ariana",
        intro:
          "Ariana is part of Greater Tunis, one of our two free-delivery zones for natural lawn and the decorative palm tree. Historically known as the city of gardens, Ariana has many villas with green spaces for which lawn and palm trees are natural landscaping choices.",
        useCase:
          "We regularly deliver to Ariana city, La Soukra and Raoued for villa gardens, as well as residential green spaces and small businesses along the main roads.",
        distanceNote: "about 60 km north-west of our Nabeul depot",
        faq: [
          { q: "Is lawn delivery free in Ariana?", a: "Yes, Ariana is part of Greater Tunis, one of our two free-delivery zones for natural lawn and the decorative palm tree." },
          { q: "Does the palm tree suit gardens in Ariana?", a: "Absolutely, as Ariana is historically a city of gardens, the climate and soil there are favourable to both the decorative palm tree and natural lawn." },
        ],
      },
      ar: {
        metaTitle: "عشب ونخيل أريانة | توصيل مجاني - Green Garden",
        metaDescription:
          "عشب طبيعي بسعر 9 دينار/م² ونخيل زينة بسعر 490 دينار/م يُوصَّلان مجاناً إلى أريانة. مدينة الحدائق في تونس الكبرى، عرض سعر سريع عبر واتساب.",
        h1: "عشب ونخيل في أريانة",
        intro:
          "تنتمي أريانة إلى تونس الكبرى، إحدى منطقتينا للتوصيل المجاني للعشب الطبيعي ونخيل الزينة. المعروفة تاريخياً بمدينة الحدائق، تضم أريانة العديد من الفيلات ذات المساحات الخضراء التي يُعد فيها العشب والنخيل خيارات تهيئة طبيعية.",
        useCase:
          "نوصل بانتظام إلى مدينة أريانة والسوقرة ورواد لحدائق الفيلات، وكذلك المساحات الخضراء السكنية والمحلات التجارية الصغيرة على طول الطرق الرئيسية.",
        distanceNote: "على بعد حوالي 60 كم شمال غرب مستودعنا بنابل",
        faq: [
          { q: "هل توصيل العشب مجاني في أريانة؟", a: "نعم، تنتمي أريانة إلى تونس الكبرى، إحدى منطقتينا للتوصيل المجاني للعشب الطبيعي ونخيل الزينة." },
          { q: "هل يناسب النخيل حدائق أريانة؟", a: "بالتأكيد، بما أن أريانة تاريخياً مدينة الحدائق، فإن المناخ والتربة هناك مناسبان لنخيل الزينة والعشب الطبيعي." },
        ],
      },
    },
  },
  {
    slug: "la-marsa",
    name: "La Marsa",
    gazonStatus: "free",
    t: {
      fr: {
        metaTitle: "Gazon & Palmier La Marsa | Livraison gratuite - Green Garden",
        metaDescription:
          "Gazon naturel à 9 DT/m² et palmiers décoratifs à 490 DT/m livrés gratuitement à La Marsa. Idéal pour les villas en bord de mer, devis via WhatsApp.",
        h1: "Gazon et palmier à La Marsa",
        intro:
          "La Marsa fait partie du Grand Tunis, l'une de nos deux zones de livraison gratuite pour le gazon naturel et le palmier décoratif. Cette banlieue balnéaire prisée compte de nombreuses villas avec jardins en bord de mer, où le palmier décoratif est un choix d'aménagement particulièrement recherché.",
        useCase:
          "Nous livrons régulièrement La Marsa Corniche, La Marsa Ville et les quartiers résidentiels proches de Carthage et Sidi Bou Said, pour des jardins de villas exposés aux embruns marins.",
        distanceNote: "à environ 70 km au nord-ouest de notre dépôt de Nabeul",
        faq: [
          { q: "La livraison de gazon et de palmier est-elle gratuite à La Marsa ?", a: "Oui, La Marsa fait partie du Grand Tunis, l'une de nos deux zones de livraison gratuite pour le gazon naturel et le palmier décoratif." },
          { q: "Le palmier résiste-t-il à l'air marin de La Marsa ?", a: "Oui, nos variétés de palmier décoratif tolèrent bien l'exposition aux embruns typique du littoral de La Marsa. Nous vous conseillons sur l'entretien adapté à un jardin en bord de mer." },
        ],
      },
      en: {
        metaTitle: "Lawn & Palm Tree La Marsa | Free Delivery - Green Garden",
        metaDescription:
          "Natural lawn at 9 DT/sqm and decorative palm trees at 490 DT/m delivered free to La Marsa. Ideal for seaside villas, quote via WhatsApp.",
        h1: "Lawn and palm tree in La Marsa",
        intro:
          "La Marsa is part of Greater Tunis, one of our two free-delivery zones for natural lawn and the decorative palm tree. This sought-after seaside suburb has many villas with gardens by the sea, where the decorative palm tree is a particularly popular landscaping choice.",
        useCase:
          "We regularly deliver to La Marsa Corniche, La Marsa town and the residential areas near Carthage and Sidi Bou Said, for villa gardens exposed to sea spray.",
        distanceNote: "about 70 km north-west of our Nabeul depot",
        faq: [
          { q: "Is lawn and palm tree delivery free in La Marsa?", a: "Yes, La Marsa is part of Greater Tunis, one of our two free-delivery zones for natural lawn and the decorative palm tree." },
          { q: "Does the palm tree withstand the sea air in La Marsa?", a: "Yes, our decorative palm tree varieties tolerate the sea spray exposure typical of the La Marsa coastline well. We advise you on care suited to a seaside garden." },
        ],
      },
      ar: {
        metaTitle: "عشب ونخيل المرسى | توصيل مجاني - Green Garden",
        metaDescription:
          "عشب طبيعي بسعر 9 دينار/م² ونخيل زينة بسعر 490 دينار/م يُوصَّلان مجاناً إلى المرسى. مثالي للفيلات الساحلية، عرض سعر عبر واتساب.",
        h1: "عشب ونخيل في المرسى",
        intro:
          "تنتمي المرسى إلى تونس الكبرى، إحدى منطقتينا للتوصيل المجاني للعشب الطبيعي ونخيل الزينة. تضم هذه الضاحية الساحلية المرغوبة العديد من الفيلات ذات الحدائق المطلة على البحر، حيث يُعد نخيل الزينة خياراً مطلوباً بشكل خاص.",
        useCase:
          "نوصل بانتظام إلى كورنيش المرسى ومدينة المرسى والأحياء السكنية القريبة من قرطاج وسيدي بوسعيد، لحدائق الفيلات المعرضة لرذاذ البحر.",
        distanceNote: "على بعد حوالي 70 كم شمال غرب مستودعنا بنابل",
        faq: [
          { q: "هل توصيل العشب والنخيل مجاني في المرسى؟", a: "نعم، تنتمي المرسى إلى تونس الكبرى، إحدى منطقتينا للتوصيل المجاني للعشب الطبيعي ونخيل الزينة." },
          { q: "هل يتحمل النخيل هواء البحر في المرسى؟", a: "نعم، تتحمل أصناف نخيل الزينة لدينا جيداً التعرض لرذاذ البحر المعتاد على ساحل المرسى. ننصحكم بالعناية المناسبة لحديقة على شاطئ البحر." },
        ],
      },
    },
  },
];

module.exports = { villes };
