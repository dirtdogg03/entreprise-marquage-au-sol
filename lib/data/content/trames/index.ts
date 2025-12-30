/**
 * Trames de contenu pour chaque service
 *
 * Chaque trame contient:
 * - Points clés a couvrir
 * - Formulations alternatives pour l'introduction
 * - Formulations alternatives pour la description
 * - Templates de FAQs avec variations
 */

export interface ServiceTrame {
  serviceSlug: string;
  serviceName: string;
  points: string[];
  introFormulations: string[];
  descriptionFormulations: string[];
  faqTemplates: Array<{
    questionVariants: string[];
    answerVariants: string[];
  }>;
}

// Trame 1: Marquage au sol parking
export const trameMarquageParking: ServiceTrame = {
  serviceSlug: 'marquage-au-sol-parking',
  serviceName: 'Marquage au Sol Parking',
  points: [
    'Places de stationnement numérotées',
    'Flèches directionnelles',
    'Passages piétons',
    'Zones interdites',
    'Places PMR réglementaires'
  ],
  introFormulations: [
    '[VILLE] compte de nombreux parkings nécessitant un marquage professionnel pour optimiser la circulation et le stationnement.',
    'Le marquage au sol des parkings a [VILLE] est essentiel pour garantir sécurité et fluidité des véhicules.',
    'A [VILLE], nos équipes interviennent pour le traçage complet de vos parkings, qu\'ils soient souterrains ou extérieurs.',
    'Spécialistes du marquage parking a [VILLE], nous réalisons la signalisation horizontale de tous vos espaces de stationnement.',
    'Votre parking a [VILLE] mérite un marquage conforme et durable. Notre entreprise intervient rapidement.'
  ],
  descriptionFormulations: [
    'Notre équipe trace les places de stationnement, flèches de circulation et passages piétons selon les normes en vigueur. Nous utilisons des peintures haute résistance pour une durabilité optimale.',
    'Nous réalisons le traçage complet de votre parking : délimitation des places, sens de circulation, zones réservées. Peintures professionnelles garanties plusieurs années.',
    'De la conception a la realisation, nous marquons vos parkings avec précision : numérotation, flèches, zébras, places PMR. Matériaux certifiés et équipes qualifiées.',
    'Traçage professionnel de parkings : places standard et PMR, voies de circulation, signalisation au sol. Intervention rapide, résultat conforme aux réglementations.',
    'Marquage complet pour parkings : délimitation places, flèches directionnelles, passages piétons, zones interdites. Devis gratuit et intervention sous 48h.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Combien coûte le marquage d\'un parking a [VILLE] ?',
        'Quel est le prix du traçage de parking a [VILLE] ?',
        'Quel budget prévoir pour marquer un parking a [VILLE] ?'
      ],
      answerVariants: [
        'Le coût dépend de la surface et du nombre de places. Comptez entre 15 et 35 euros par place. Devis gratuit sur site a [VILLE].',
        'Nos tarifs a [VILLE] varient selon la surface : de 15 a 35 euros la place. Nous établissons un devis personnaliségratuit.',
        'A [VILLE], le marquage de parking coûte entre 15 et 35 euros par place selon la complexite. Demandez votre devis gratuit.'
      ]
    },
    {
      questionVariants: [
        'Combien de temps dure le marquage de parking a [VILLE] ?',
        'Quelle est la durée d\'intervention pour un parking a [VILLE] ?',
        'En combien de temps marquez-vous un parking a [VILLE] ?'
      ],
      answerVariants: [
        'Pour un parking de 50 places a [VILLE], comptez 1 a 2 jours d\'intervention. Le séchage est rapide : circulation possible sous 2h.',
        'L\'intervention dure généralement 1 a 2 jours selon la taille du parking. A [VILLE], nous pouvons intervenir de nuit si nécessaire.',
        'A [VILLE], nous marquons un parking moyen en 1 journee. Sechage rapide permettant une remise en service sous quelques heures.'
      ]
    },
    {
      questionVariants: [
        'Intervenez-vous pour les parkings souterrains a [VILLE] ?',
        'Faites-vous le marquage des parkings en sous-sol a [VILLE] ?',
        'Pouvez-vous marquer un parking couvert a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, nous intervenons dans tous types de parkings a [VILLE] : souterrains, couverts, extérieurs. Nos peintures sont adaptées a chaque environnement.',
        'Absolument, nos équipes marquent les parkings souterrains a [VILLE] avec des produits spécifiques résines ou peintures selon le support.',
        'Nous sommes specialises dans les parkings souterrains a [VILLE]. Intervention possible de nuit pour ne pas perturber votre activité.'
      ]
    }
  ]
};

// Trame 2: Marquage au sol parking privé
export const trameMarquageParkingPrive: ServiceTrame = {
  serviceSlug: 'marquage-au-sol-parking-prive',
  serviceName: 'Marquage au Sol Parking Prive',
  points: [
    'Identification places privatives',
    'Marquage nominatif',
    'Zones visiteurs',
    'Acces reserves',
    'Conformité copropriété'
  ],
  introFormulations: [
    'Les parkings privés de [VILLE] nécessitent un marquage clair pour identifier les places attribuées et éviter les conflits.',
    'A [VILLE], nous marquons vos parkings privés : résidences, copropriétés, entreprises. Identification précise de chaque emplacement.',
    'Spécialistes du marquage de parkings privés a [VILLE], nous réalisons la signalisation adaptée a vos besoins spécifiques.',
    'Votre parking privé a [VILLE] mérite un marquage professionnel : places numérotées, zones visiteurs, accès réservés.',
    'Pour les parkings privés de [VILLE], nous proposons des solutions de marquage personnalisées et durables.'
  ],
  descriptionFormulations: [
    'Nous réalisons le marquage complet de parkings privés : numérotation des places, identification propriétaires, zones visiteurs. Solutions adaptées aux copropriétés et entreprises.',
    'Marquage sur mesure pour parkings privés : places attribuées, emplacements visiteurs, zones réservées direction. Peintures durables et conformes.',
    'Notre équipe trace vos parkings privés avec précision : numérotation, identification par nom ou numéro de lot, délimitation zones. Devis gratuit.',
    'Solutions de marquage pour parkings privatifs : places nominatives, zones visiteurs, accèsPMR. Intervention rapide et propre.',
    'Traçage professionnel de parkings privés : identification claire des emplacements, signalisation zones communes, marquage PMR conforme.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Pouvez-vous marquer les noms sur les places a [VILLE] ?',
        'Faites-vous du marquage nominatif de parking a [VILLE] ?',
        'Est-il possible d\'inscrire les numéros de lot a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, nous réalisons le marquage nominatif a [VILLE] : noms, numéros de lot ou d\'appartement. Peinture durable et lisible.',
        'Absolument, nous pouvons inscrire noms ou numéros sur chaque place de votre parking a [VILLE]. Technique au pochoir professionnel.',
        'A [VILLE], nous proposons le marquage personnalisé: noms, numéros, logos. Solution idéale pour les copropriétés.'
      ]
    },
    {
      questionVariants: [
        'Quelle peinture utilisez-vous pour les parkings privés a [VILLE] ?',
        'Les marquages sont-ils durables a [VILLE] ?',
        'Combien de temps tient la peinture de parking a [VILLE] ?'
      ],
      answerVariants: [
        'Nous utilisons des peintures routières professionnelles a [VILLE], garanties 3 a 5 ans selon le trafic. Résistantes a l\'usure et aux intempéries.',
        'A [VILLE], nos marquages durent 3 a 5 ans minimum. Peintures certifiées NF, adaptées au trafic de votre parking.',
        'Nos peintures professionnelles tiennent 3 a 5 ans a [VILLE]. Nous proposons aussi des résines époxy pour une durabilité accrue.'
      ]
    },
    {
      questionVariants: [
        'Intervenez-vous dans les copropriétés a [VILLE] ?',
        'Faites-vous les parkings de résidences a [VILLE] ?',
        'Marquez-vous les parkings d\'immeubles a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, nous intervenons régulièrement dans les copropriétés de [VILLE]. Coordination avec le syndic et intervention en dehors des heures de pointe.',
        'Absolument, les résidences de [VILLE] sont notre spécialité. Nous nous adaptons aux contraintes des copropriétés.',
        'A [VILLE], nous marquons de nombreux parkings de résidences. Devis gratuit et intervention planifiée avec votre syndic.'
      ]
    }
  ]
};

// Trame 3: Marquage au sol stationnement
export const trameMarquageStationnement: ServiceTrame = {
  serviceSlug: 'marquage-au-sol-stationnement',
  serviceName: 'Marquage au Sol Stationnement',
  points: [
    'Optimisation des places',
    'Marquage voirie privée',
    'Zones bleues',
    'Stationnement minute',
    'Livraisons'
  ],
  introFormulations: [
    'L\'organisation du stationnement a [VILLE] passe par un marquage au sol clair et réglementaire.',
    'A [VILLE], nous optimisons vos zones de stationnement grace a un marquage professionnel et conforme.',
    'Spécialistes du marquage de stationnement a [VILLE], nous maximisons la capacité de vos espaces.',
    'Le marquage de zones de stationnement a [VILLE] permet d\'organiser efficacement l\'espace disponible.',
    'Pour un stationnement ordonné a [VILLE], faites confiance a notre expertise en marquage au sol.'
  ],
  descriptionFormulations: [
    'Nous optimisons vos espaces de stationnement : traçage des places, zones minute, emplacements livraison. Marquage conforme et durable.',
    'Organisation complète du stationnement : délimitation places, zones temporaires, espaces reserves. Intervention rapide a [VILLE].',
    'Marquage professionnel de zones de stationnement : places standard, minute, livraison, PMR. Maximisez votre capacité d\'accueil.',
    'Notre équipe organise vos aires de stationnement : traçage optimal des places, signalisation claire. Devis personnaliségratuit.',
    'Solutions de marquage pour stationnement : places visiteurs, employés, livraisons. Optimisation de l\'espace garanti.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Comment optimiser le nombre de places a [VILLE] ?',
        'Pouvez-vous augmenter la capacité de stationnement a [VILLE] ?',
        'Gagnez-vous des places avec un nouveau marquage a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], un retraçage optimise peut gagner 10 a 15% de places supplémentaires. Étude gratuite de votre espace.',
        'Oui, a [VILLE] nous réalisons une étude d\'optimisation gratuite. Gain moyen : 10 a 15% de places en plus.',
        'Notre expertise a [VILLE] permet souvent de gagner des places. Visite technique gratuite pour évaluer le potentiel.'
      ]
    },
    {
      questionVariants: [
        'Faites-vous les zones de livraison a [VILLE] ?',
        'Marquez-vous les emplacements livraison a [VILLE] ?',
        'Pouvez-vous tracer une zone de déchargement a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, nous marquons les zones de livraison a [VILLE] : délimitation, mention LIVRAISON, horaires si nécessaire.',
        'Absolument, a [VILLE] nous réalisons le marquage complet des zones de livraison conformes a la réglementation.',
        'A [VILLE], nous traçons vos zones de livraison avec les marquages réglementaires. Devis gratuit sous 24h.'
      ]
    },
    {
      questionVariants: [
        'Intervenez-vous sur voirie privée a [VILLE] ?',
        'Marquez-vous les parkings de surface a [VILLE] ?',
        'Faites-vous le traçage sur enrobé a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, nous intervenons sur toutes voiries privées a [VILLE] : parkings de surface, allées, cours d\'entreprise.',
        'A [VILLE], nous marquons tous types de surfaces : enrobé, béton, pavés. Peintures adaptées a chaque support.',
        'Notre équipe trace sur tous supports a [VILLE]. Voirie privée, parking de surface, esplanade. Devis gratuit.'
      ]
    }
  ]
};

// Trame 4: Marquage au sol parking entreprise
export const trameMarquageParkingEntreprise: ServiceTrame = {
  serviceSlug: 'marquage-au-sol-parking-entreprise',
  serviceName: 'Marquage au Sol Parking Entreprise',
  points: [
    'Places direction',
    'Zones visiteurs',
    'Parking salariés',
    'Acces livraison',
    'Signalisation interne'
  ],
  introFormulations: [
    'Les entreprises de [VILLE] ont besoin d\'un marquage de parking professionnel pour organiser le stationnement de leurs collaborateurs et visiteurs.',
    'A [VILLE], nous marquons les parkings d\'entreprise : places direction, salariés, visiteurs. Organisation optimale de vos espaces.',
    'Le marquage de parking entreprise a [VILLE] reflète votre image professionnelle et facilite l\'accueil de vos clients.',
    'Spécialistes des parkings d\'entreprise a [VILLE], nous réalisons un marquage fonctionnel et esthétique.',
    'Pour votre parking d\'entreprise a [VILLE], un marquage clair améliore la circulation et l\'image de votre société.'
  ],
  descriptionFormulations: [
    'Marquage complet de parkings d\'entreprise : places réservées direction, zones visiteurs, parking salariés. Signalisation professionnelle et durable.',
    'Nous organisons vos parkings d\'entreprise : identification des places, flèches de circulation, zones de livraison. Image professionnelle garantie.',
    'Notre équipe réalisele marquage de votre parking d\'entreprise : numérotation, places nominatives, zones PMR. Intervention rapide et soignée.',
    'Solutions de marquage pour entreprises : organisation du stationnement, signalisation claire, places visiteurs identifiées. Devis gratuit.',
    'Traçage professionnel de parking d\'entreprise : optimisation de l\'espace, identification des zones, flèches directionnelles. Résultat impeccable.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Pouvez-vous intégrer notre logo dans le marquage a [VILLE] ?',
        'Faites-vous des marquages personnalisés a [VILLE] ?',
        'Est-il possible d\'ajouter le nom de l\'entreprise a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous intégrons logos et noms d\'entreprise dans le marquage. Pochoirs sur mesure pour un rendu professionnel.',
        'Absolument, nous réalisons des marquages personnalisés a [VILLE] : logo, nom de société, charte graphique respectée.',
        'A [VILLE], nous pouvons reproduire votre logo et identité visuelle sur le parking. Technique pochoir haute précision.'
      ]
    },
    {
      questionVariants: [
        'Intervenez-vous le week-end a [VILLE] ?',
        'Pouvez-vous travailler en dehors des heures de bureau a [VILLE] ?',
        'Faites-vous le marquage de nuit a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous intervenons le week-end ou de nuit pour ne pas perturber votre activité. Supplément applicable.',
        'Absolument, nous nous adaptons a vos contraintes a [VILLE]. Interventions possibles soirs, nuits et week-ends.',
        'A [VILLE], nous proposons des interventions hors heures ouvrables. Planification selon vos besoins. Devis sur demande.'
      ]
    },
    {
      questionVariants: [
        'Combien de temps pour marquer un parking d\'entreprise a [VILLE] ?',
        'Quelle durée pour un parking de 100 places a [VILLE] ?',
        'En combien de temps tracez-vous un parking moyen a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], un parking de 100 places prend 2 a 3 jours. Nous pouvons échelonner pour maintenir une partie accessible.',
        'Comptez 2 a 3 jours pour un parking moyen a [VILLE]. Organisation possible par zones pour limiter la gêne.',
        'Pour un parking d\'entreprise a [VILLE], prevoyez 2 a 3 jours. Intervention par phases si vous le souhaitez.'
      ]
    }
  ]
};

// Trame 5: Marquage au sol entrepot
export const trameMarquageEntrepot: ServiceTrame = {
  serviceSlug: 'marquage-au-sol-entrepot',
  serviceName: 'Marquage au Sol Entrepot',
  points: [
    'Voies de circulation',
    'Zones de stockage',
    'Quais de chargement',
    'Sécurité piétons',
    'Zonage couleurs'
  ],
  introFormulations: [
    'Les entrepôts de [VILLE] nécessitent un marquage au sol précis pour organiser les flux et garantir la sécurité.',
    'A [VILLE], nous réalisons le marquage complet de vos entrepôts : voies, zones de stockage, sécurité.',
    'Le marquage d\'entrepot a [VILLE] est essentiel pour une logistique efficace et des conditions de travail sécurisées.',
    'Spécialistes du marquage d\'entrepôts a [VILLE], nous traçons vos zones de circulation et de stockage.',
    'Pour vos entrepôts a [VILLE], un marquage professionnel optimise l\'espace et renforce la sécurité.'
  ],
  descriptionFormulations: [
    'Marquage complet d\'entrepôts : voies de circulation, zones de stockage, quais de chargement. Sécurité et organisation optimales.',
    'Nous traçons vos entrepôts selon les normes de sécurité : allées piétons, voies engins, zones dangereuses. Peintures industrielles résistantes.',
    'Notre équipe marque vos entrepôts : délimitation zones, flèches directionnelles, marquage sécurité. Conformité réglementaire assurée.',
    'Solutions de marquage pour entrepôts : organisation spatiale, sécurité des personnes, optimisation des flux. Intervention sans arrêt d\'activité.',
    'Traçage professionnel d\'entrepôts : zones de stockage codifiées, allées de circulation, espaces de sécurité. Devis gratuit sous 24h.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Quelles couleurs utilisez-vous pour les entrepôts a [VILLE] ?',
        'Y a-t-il un code couleur pour le marquage d\'entrepot a [VILLE] ?',
        'Comment codifiez-vous les zones d\'entrepot a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous appliquons le code couleur standard : jaune pour circulation, blanc pour stockage, rouge pour danger, vert pour sécurité.',
        'Le marquage d\'entrepot a [VILLE] suit les normes : jaune (voies), blanc (zones), rouge (danger), bleu (obligation). Personnalisation possible.',
        'Nous utilisons le code couleur réglementaire a [VILLE] : jaune, blanc, rouge, vert. Adaptation a votre organisation interne si besoin.'
      ]
    },
    {
      questionVariants: [
        'Pouvez-vous intervenir sans arrêter l\'activité a [VILLE] ?',
        'Travaillez-vous pendant les heures d\'exploitation a [VILLE] ?',
        'Comment minimiser l\'impact sur notre activité a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous intervenons par zones pour maintenir votre activité. Travail de nuit ou week-end également possible.',
        'A [VILLE], nous organisons le chantier par phases. Votre entrepot reste partiellement opérationnel pendant les travaux.',
        'Notre méthode a [VILLE] permet de travailler zone par zone. Planification avec votre responsable logistique.'
      ]
    },
    {
      questionVariants: [
        'Les peintures résistent-elles aux chariots elevateurs a [VILLE] ?',
        'Quelle durabilité pour un marquage d\'entrepot a [VILLE] ?',
        'Les marquages supportent-ils le trafic intense a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous utilisons des résines époxy ou polyuréthane haute résistance, garanties 5 a 10 ans même sous trafic intense.',
        'Nos peintures industrielles a [VILLE] résistent aux chariots et transpalettes. Garantie 5 ans minimum.',
        'Pour les entrepôts de [VILLE], nous appliquons des revêtements industriels très résistants. Durabilité 5 a 10 ans.'
      ]
    }
  ]
};

// Trame 6: Marquage au sol industriel
export const trameMarquageIndustriel: ServiceTrame = {
  serviceSlug: 'marquage-au-sol-industriel',
  serviceName: 'Marquage au Sol Industriel',
  points: [
    'Sécurité au travail',
    'Zones machines',
    'Voies engins',
    'Evacuation',
    'Normes industrielles'
  ],
  introFormulations: [
    'Les sites industriels de [VILLE] requièrent un marquage au sol conforme aux normes de sécurité et d\'organisation.',
    'A [VILLE], nous réalisons le marquage de vos installations industrielles selon les exigences réglementaires.',
    'Le marquage industriel a [VILLE] garantit la sécurité de vos équipes et l\'efficacité de vos opérations.',
    'Spécialistes du marquage industriel a [VILLE], nous traçons vos zones de production, circulation et sécurité.',
    'Pour vos sites industriels a [VILLE], un marquage professionnel est gage de sécurité et de conformité.'
  ],
  descriptionFormulations: [
    'Marquage industriel complet : zones machines, voies de circulation, espaces de sécurité. Conformité aux normes du travail.',
    'Nous sécurisons vos sites industriels : délimitation postes de travail, allées piétons, zones dangereuses. Peintures haute résistance.',
    'Notre équipe trace vos installations industrielles : zonage production, voies engins, issues de secours. Respect des normes.',
    'Solutions de marquage industriel : organisation des flux, sécurité des personnes, signalisation réglementaire. Devis sur mesure.',
    'Traçage professionnel de sites industriels : zones de travail, circulation, stockage, danger. Intervention adaptée a votre activité.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Etes-vous conformes aux normes de sécurité a [VILLE] ?',
        'Le marquage respecte-t-il la réglementation a [VILLE] ?',
        'Vos marquages sont-ils aux normes industrielles a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] tous nos marquages respectent le Code du travail et les normes NF. Certificat de conformité fourni.',
        'Absolument, nous appliquons les normes en vigueur a [VILLE] : NF X 08-003 pour les couleurs, Code du travail pour la sécurité.',
        'A [VILLE], nos marquages sont 100% conformes. Nous connaissons parfaitement les exigences réglementaires industrielles.'
      ]
    },
    {
      questionVariants: [
        'Pouvez-vous marquer les zones machines a [VILLE] ?',
        'Faites-vous la délimitation des postes de travail a [VILLE] ?',
        'Tracez-vous les zones dangereuses a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous marquons toutes les zones : périmètrès machines, postes de travail, zones dangereuses. Couleurs normalisées.',
        'Absolument, la délimitation des zones machines est notre spécialité a [VILLE]. Marquage jaune et noir réglementaire.',
        'A [VILLE], nous traçons les zones machines avec le marquage de sécurité obligatoire. Conformité garantie.'
      ]
    },
    {
      questionVariants: [
        'Quelle peinture pour sols industriels a [VILLE] ?',
        'Utilisez-vous des produits spéciaux pour l\'industrie a [VILLE] ?',
        'Les marquages résistent-ils aux produits chimiques a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous utilisons des résines époxy et polyuréthane résistantes aux produits chimiques, huiles et solvants.',
        'Nos peintures industrielles a [VILLE] sont formulées pour resister aux agressions chimiques et mécaniques.',
        'Pour l\'industrie a [VILLE], nous appliquons des revêtements techniques haute performance. Resistance chimique garantie.'
      ]
    }
  ]
};

// Trame 7: Marquage au sol usine
export const trameMarquageUsine: ServiceTrame = {
  serviceSlug: 'marquage-au-sol-usine',
  serviceName: 'Marquage au Sol Usine',
  points: [
    'Lignes de production',
    'Zones de sécurité',
    'Stockage matières',
    'Flux logistiques',
    'Conformité HSE'
  ],
  introFormulations: [
    'Les usines de [VILLE] nécessitent un marquage au sol rigoureux pour sécuriser la production et optimiser les flux.',
    'A [VILLE], nous intervenons dans les usines pour le marquage des lignes, zones de sécurité et voies de circulation.',
    'Le marquage d\'usine a [VILLE] est essentiel pour la sécurité des opérateurs et l\'efficacité de la production.',
    'Spécialistes du marquage en milieu industriel a [VILLE], nous traçons vos usines selon les normes HSE.',
    'Pour votre usine a [VILLE], un marquage professionnel garantit sécurité et organisation optimale.'
  ],
  descriptionFormulations: [
    'Marquage complet d\'usines : lignes de production, zones de stockage, voies de circulation. Conformité HSE assurée.',
    'Nous organisons vos usines par le marquage : délimitation postes, flux matières, zones dangereuses. Sécurité renforcée.',
    'Notre équipe trace vos usines : périmètrès machines, allées sécurisées, stockage identifié. Normes respectées.',
    'Solutions de marquage pour usines : organisation production, sécurité opérateurs, flux optimisés. Intervention sans arrêt.',
    'Traçage professionnel d\'usines : zones de travail, circulation engins, évacuation. Conformité réglementaire garantie.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Intervenez-vous pendant la production a [VILLE] ?',
        'Pouvez-vous travailler sans arrêter l\'usine a [VILLE] ?',
        'Comment minimiser l\'arrêt de production a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous intervenons par zones pendant les pauses ou arrêts programmés. Planification avec votre responsable production.',
        'Oui, a [VILLE] nous travaillons par secteurs pour maintenir la production. Interventions possibles le week-end.',
        'Notre méthode a [VILLE] permet de travailler zone par zone. Coordination avec vos équipes pour minimiser l\'impact.'
      ]
    },
    {
      questionVariants: [
        'Connaissez-vous les normes HSE pour le marquage a [VILLE] ?',
        'Le marquage est-il conforme aux audits a [VILLE] ?',
        'Vos traçages passent-ils les inspections a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous maîtrisons parfaitement les normes HSE. Nos marquages passent tous les audits de sécurité.',
        'Absolument, nos marquages a [VILLE] sont conformes aux exigences des audits HSE et inspections du travail.',
        'A [VILLE], nous garantissons la conformité HSE. Documentation et certificats fournis pour vos audits.'
      ]
    },
    {
      questionVariants: [
        'Marquez-vous les issues de secours a [VILLE] ?',
        'Faites-vous le marquage d\'évacuation a [VILLE] ?',
        'Tracez-vous les chemins d\'évacuation a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous marquons les issues de secours et chemins d\'évacuation selon les normes incendie.',
        'Absolument, le marquage d\'évacuation fait partie de nos prestations a [VILLE]. Fleches, bandes, pictogrammes.',
        'A [VILLE], nous traçons les voies d\'évacuation conformes : bandes vertes, flèches directionnelles, zones de rassemblement.'
      ]
    }
  ]
};

// Trame 8: Marquage routier au sol
export const trameMarquageRoutier: ServiceTrame = {
  serviceSlug: 'marquage-routier-au-sol',
  serviceName: 'Marquage Routier au Sol',
  points: [
    'Signalisation horizontale',
    'Passages piétons',
    'Voies de circulation',
    'Stop et cedez',
    'Bandes podotactiles'
  ],
  introFormulations: [
    'Le marquage routier a [VILLE] garantit la sécurité des usagers sur vos voiries privées et parkings.',
    'A [VILLE], nous réalisons la signalisation horizontale de vos voies de circulation privées.',
    'Spécialistes du marquage routier a [VILLE], nous traçons passages piétons, stops et voies de circulation.',
    'La signalisation au sol a [VILLE] est essentielle pour guider et sécuriser la circulation sur vos espaces.',
    'Pour vos voiries privées a [VILLE], nous appliquons un marquage routier conforme et durable.'
  ],
  descriptionFormulations: [
    'Marquage routier professionnel : passages piétons, lignes de rive, stops, flèches. Signalisation horizontale complète.',
    'Nous réalisons la signalisation routière de vos voies privées : passages piétons, bandes, flèches directionnelles.',
    'Notre équipe trace votre signalisation horizontale : lignes, passages piétons, marquages réglementaires. Normes routières respectées.',
    'Solutions de marquage routier : voies de circulation, passages protégés, arrêts. Peintures routières homologuées.',
    'Traçage routier pour voiries privées : signalisation complète, passages piétons, stops. Conformité garantie.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Utilisez-vous des peintures homologuées a [VILLE] ?',
        'Vos peintures routières sont-elles certifiées a [VILLE] ?',
        'Le marquage est-il conforme aux normes routières a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous utilisons exclusivement des peintures routières certifiées NF et homologuées.',
        'Absolument, nos peintures a [VILLE] sont conformes aux normes routières françaises. Certificats disponibles.',
        'A [VILLE], nous appliquons des peintures homologuées type 1 ou 2 selon l\'usage. Conformité totale.'
      ]
    },
    {
      questionVariants: [
        'Faites-vous les passages piétons a [VILLE] ?',
        'Tracez-vous les passages protégés a [VILLE] ?',
        'Pouvez-vous refaire un passage piéton a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous traçons tous types de passages piétons : bandes blanches, zébras. Dimensions réglementaires.',
        'Absolument, les passages piétons sont notre spécialité a [VILLE]. Traçage conforme aux normes de sécurité.',
        'A [VILLE], nous réalisons les passages piétons selon les spécifications officielles. Largeur et espacement respectés.'
      ]
    },
    {
      questionVariants: [
        'Posez-vous des bandes podotactiles a [VILLE] ?',
        'Faites-vous le marquage pour malvoyants a [VILLE] ?',
        'Installez-vous des dalles d\'éveil a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous posons les bandes podotactiles d\'éveil a la vigilance pour les personnes malvoyantes.',
        'Absolument, nous installons les bandes podotactiles a [VILLE] conformes a la réglementation accessibilité.',
        'A [VILLE], nous équipons vos passages piétons de dalles d\'éveil pour l\'accessibilité PMR.'
      ]
    }
  ]
};

// Trame 9: Marquage garage automobile
export const trameMarquageGarage: ServiceTrame = {
  serviceSlug: 'marquage-garage-automobile',
  serviceName: 'Marquage Garage Automobile',
  points: [
    'Zones atelier',
    'Postes de travail',
    'Stockage véhicules',
    'Sécurité mécaniciens',
    'Circulation clients'
  ],
  introFormulations: [
    'Les garages automobiles de [VILLE] ont besoin d\'un marquage au sol organisant l\'atelier et securisant les mécaniciens.',
    'A [VILLE], nous marquons vos garages : zones de travail, ponts, stockage véhicules. Organisation et sécurité.',
    'Le marquage de garage automobile a [VILLE] optimise l\'espace de travail et renforce la sécurité de l\'atelier.',
    'Spécialistes du marquage de garages a [VILLE], nous traçons postes de travail, voies et zones de stockage.',
    'Pour votre garage a [VILLE], un marquage professionnel améliore l\'organisation et la sécurité quotidienne.'
  ],
  descriptionFormulations: [
    'Marquage complet de garages : postes de travail, zones de stockage, voies de circulation. Sécurité et organisation optimales.',
    'Nous organisons vos ateliers mécaniques : délimitation ponts, zones outillage, stockage pièces. Marquage resistant aux huiles.',
    'Notre équipe trace vos garages : postes de travail identifiés, circulation clients, zones dangereuses. Peintures spéciales garages.',
    'Solutions de marquage pour garages : organisation atelier, sécurité personnel, accueil clients. Intervention rapide.',
    'Traçage professionnel de garages automobiles : zones de travail, stockage, circulation. Revetements résistants.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Les peintures résistent-elles aux huiles a [VILLE] ?',
        'Le marquage tient-il malgre les graisses a [VILLE] ?',
        'Vos peintures supportent-elles les produits mécaniques a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous utilisons des résines époxy spéciales garages, résistantes aux huiles, graisses et solvants.',
        'Absolument, nos peintures pour garages a [VILLE] sont formulées pour resister aux produits mécaniques.',
        'A [VILLE], nous appliquons des revêtements techniques haute résistance aux hydrocarbures et produits d\'atelier.'
      ]
    },
    {
      questionVariants: [
        'Délimitez-vous les postes de travail a [VILLE] ?',
        'Marquez-vous les emplacements des ponts a [VILLE] ?',
        'Tracez-vous les zones d\'intervention a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous délimitons chaque poste de travail, emplacement pont et zone d\'intervention.',
        'Absolument, le marquage des postes est notre spécialité a [VILLE]. Organisation claire de l\'atelier.',
        'A [VILLE], nous traçons tous les postes : ponts, fosses, zones de travail au sol. Couleurs standardisées.'
      ]
    },
    {
      questionVariants: [
        'Pouvez-vous travailler le dimanche a [VILLE] ?',
        'Intervenez-vous hors horaires d\'ouverture a [VILLE] ?',
        'Faites-vous le marquage pendant la fermeture a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous intervenons le dimanche ou en soirée pour ne pas perturber votre activité.',
        'Absolument, nous nous adaptons a vos horaires a [VILLE]. Week-end et soirées possibles.',
        'A [VILLE], nous pouvons travailler pendant vos jours de fermeture. Planification selon vos besoins.'
      ]
    }
  ]
};

// Trame 10: Marquage zones piétonnes
export const trameMarquageZonesPiétonnes: ServiceTrame = {
  serviceSlug: 'marquage-zones-piétonnes',
  serviceName: 'Marquage Zones Piétonnes',
  points: [
    'Chemins piétons',
    'Zones protégées',
    'Traversees sécurisées',
    'Accessibilité PMR',
    'Separation véhicules'
  ],
  introFormulations: [
    'La sécurité des piétons a [VILLE] passe par un marquage au sol clair delimitant les zones de circulation.',
    'A [VILLE], nous traçons vos zones piétonnes : chemins sécurisés, traversées, espaces protégés.',
    'Le marquage de zones piétonnes a [VILLE] protege les usagers et organise les flux de circulation.',
    'Spécialistes des zones piétonnes a [VILLE], nous sécurisons vos espaces par un marquage visible et durable.',
    'Pour proteger les piétons a [VILLE], faites confiance a notre expertise en marquage de zones dédiées.'
  ],
  descriptionFormulations: [
    'Marquage de zones piétonnes : chemins dédiés, traversées sécurisées, separation véhicules. Sécurité des usagers garantie.',
    'Nous sécurisons vos espaces piétons : allées délimitées, passages protégés, zones d\'attente. Marquage visible et conforme.',
    'Notre équipe trace vos zones piétonnes : chemins de circulation, traversées, espaces PMR. Accessibilité assurée.',
    'Solutions de marquage pour zones piétonnes : délimitation claire, traversées sécurisées, signalisation au sol.',
    'Traçage professionnel de zones piétonnes : allées dédiées, passages protégés, separation avec les véhicules.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Comment sécurisez-vous les traversées a [VILLE] ?',
        'Quels marquages pour proteger les piétons a [VILLE] ?',
        'Comment délimitez-vous les zones piétonnes a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous utilisons des bandes blanches ou jaunes bien visibles, passages zèbres et pictogrammes piétons.',
        'Nos marquages a [VILLE] incluent : bandes de délimitation, passages protégés, flèches directionnelles pour piétons.',
        'A [VILLE], nous sécurisons par des marquages contrastés, des passages zèbres et des zones d\'attente délimitées.'
      ]
    },
    {
      questionVariants: [
        'Le marquage est-il accessible PMR a [VILLE] ?',
        'Respectez-vous les normes d\'accèssibilité a [VILLE] ?',
        'Les zones piétonnes sont-elles PMR conformes a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] tous nos marquages respectent les normes d\'accèssibilité PMR : largeurs, contrastés, bandes podotactiles.',
        'Absolument, nos zones piétonnes a [VILLE] sont conformes a la réglementation accessibilité. Audit possible.',
        'A [VILLE], nous intégrons systematiquement les exigences PMR : passages adaptés, guidage au sol, contrastés.'
      ]
    },
    {
      questionVariants: [
        'Marquez-vous les parkings de supermarches a [VILLE] ?',
        'Faites-vous les zones piétonnes de centrès commerciaux a [VILLE] ?',
        'Intervenez-vous sur les parkings clients a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous marquons les parkings de commerces : zones piétonnes, passages, chemins vers l\'entree.',
        'Absolument, les centrès commerciaux de [VILLE] font appel a nous pour sécuriser leurs zones piétonnes.',
        'A [VILLE], nous sécurisons les parkings clients : allées piétons, traversées, zones d\'attente.'
      ]
    }
  ]
};

// Trame 11: Places handicapées PMR
export const tramePlacesPMR: ServiceTrame = {
  serviceSlug: 'places-handicapées-pmr',
  serviceName: 'Places Handicapees PMR',
  points: [
    'Dimensions réglementaires',
    'Pictogramme handicape',
    'Bandes d\'accès',
    'Proximité entrées',
    'Conformité ERP'
  ],
  introFormulations: [
    'Les places PMR a [VILLE] doivent respecter des normes strictes de dimensions et de signalisation.',
    'A [VILLE], nous réalisons le marquage de places handicapées conformes a la réglementation en vigueur.',
    'Le marquage de places PMR a [VILLE] garantit l\'accessibilité de vos établissements aux personnes handicapées.',
    'Spécialistes des places handicapées a [VILLE], nous traçons des emplacements conformes et accessibles.',
    'Pour vos places PMR a [VILLE], faites appel a notre expertise pour un marquage réglementaire.'
  ],
  descriptionFormulations: [
    'Marquage de places PMR aux normes : dimensions 3.30m x 5m, pictogramme, bandes d\'accès. Conformité ERP garantie.',
    'Nous traçons vos places handicapées : emplacement élargi, pictogramme officiel, accès sécurisé. Réglementation respectée.',
    'Notre équipe réalise vos places PMR conformes : dimensions réglementaires, signalisation, bandes de guidage.',
    'Solutions de marquage PMR : places aux normes, pictogrammes, bandes podotactiles. Accessibilité assurée.',
    'Traçage professionnel de places handicapées : dimensions officielles, pictogramme bleu, accès dégagé.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Quelles sont les dimensions d\'une place PMR a [VILLE] ?',
        'Quelle taille pour une place handicapée a [VILLE] ?',
        'Combien mesure une place PMR réglementaire a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], une place PMR mesure 3.30m de large sur 5m de long minimum, avec une bande d\'accès de 0.80m.',
        'Les dimensions réglementaires a [VILLE] sont : 3.30m x 5m minimum, plus bande d\'accès latérale.',
        'A [VILLE], nous traçons les places PMR aux normes : 3.30m de largeur, 5m de longueur, accès 0.80m.'
      ]
    },
    {
      questionVariants: [
        'Combien de places PMR sont obligatoires a [VILLE] ?',
        'Quel nombre de places handicapées requis a [VILLE] ?',
        'Quelle proportion de places PMR a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], la réglementation impose 2% des places en PMR pour les ERP, avec un minimum de 1 place.',
        'Le nombre obligatoire a [VILLE] est de 2% du total des places, ou 1 place minimum pour les petits parkings.',
        'A [VILLE], comptez 2% de places PMR. Pour 50 places, il faut au minimum 1 place handicapée.'
      ]
    },
    {
      questionVariants: [
        'Fournissez-vous le pictogramme handicape a [VILLE] ?',
        'Le logo PMR est-il inclus dans le marquage a [VILLE] ?',
        'Tracez-vous le symbole handicape a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] le pictogramme handicape est inclus : traçage au pochoir, couleur bleue réglementaire.',
        'Absolument, nous traçons le logo PMR officiel a [VILLE]. Pochoir professionnel, peinture durable.',
        'A [VILLE], le pictogramme fait partie de notre prestation standard. Dimensions et couleurs conformes.'
      ]
    }
  ]
};

// Trame 12: Signalisation verticale
export const trameSignalisationVerticale: ServiceTrame = {
  serviceSlug: 'signalisation-verticale',
  serviceName: 'Signalisation Verticale',
  points: [
    'Panneaux de parking',
    'Flèches directionnelles',
    'Interdictions',
    'Information',
    'Sécurité'
  ],
  introFormulations: [
    'La signalisation verticale complète le marquage au sol a [VILLE] pour guider efficacement les usagers.',
    'A [VILLE], nous installons panneaux et signalisation verticale pour vos parkings et voiries privées.',
    'La signalisation verticale a [VILLE] renforce la lisibilite de vos espaces de circulation et stationnement.',
    'Spécialistes de la signalisation verticale a [VILLE], nous posons panneaux, flèches et pictogrammes.',
    'Pour une signalisation complète a [VILLE], associez marquage au sol et panneaux verticaux.'
  ],
  descriptionFormulations: [
    'Installation de signalisation verticale : panneaux directionnels, interdictions, information. Complement au marquage au sol.',
    'Nous posons votre signalisation verticale : flèches, panneaux parking, pictogrammes. Guidage complet des usagers.',
    'Notre équipe installe panneaux et signalisation : direction, interdiction, information. Fixation durable.',
    'Solutions de signalisation verticale : panneaux normalises, poteaux, supports. Installation professionnelle.',
    'Pose professionnelle de signalisation : panneaux parking, flèches, interdictions. Complement ideal du marquage.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Posez-vous les panneaux de parking a [VILLE] ?',
        'Installez-vous la signalétique de parking a [VILLE] ?',
        'Fournissez-vous les panneaux avec la pose a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous fournissons et posons tous types de panneaux de parking : direction, P, interdiction.',
        'Absolument, nous installons la signalétique complète a [VILLE]. Fourniture et pose incluses.',
        'A [VILLE], nous proposons panneaux et pose : parking, flèches, interdictions. Devis global.'
      ]
    },
    {
      questionVariants: [
        'Les panneaux sont-ils aux normes a [VILLE] ?',
        'Utilisez-vous des panneaux homologués a [VILLE] ?',
        'Vos panneaux sont-ils réglementaires a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] tous nos panneaux sont conformes aux normes NF et homologués pour voirie privée.',
        'Absolument, nous utilisons des panneaux certifiés a [VILLE]. Qualite et conformité garanties.',
        'A [VILLE], nos panneaux respectent les spécifications officielles. Retroreflechissants classe 1 ou 2.'
      ]
    },
    {
      questionVariants: [
        'Faites-vous les panneaux personnalisés a [VILLE] ?',
        'Pouvez-vous creer des panneaux sur mesure a [VILLE] ?',
        'Proposez-vous des panneaux avec logo a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous réalisons des panneaux personnalisés : logo, texte spécifique, dimensions sur mesure.',
        'Absolument, nous creons des panneaux sur mesure a [VILLE]. Integration de votre identité visuelle.',
        'A [VILLE], nous proposons des panneaux personnalisés. Envoyez-nous votre logo pour un devis.'
      ]
    }
  ]
};

// Trame 13: Pose ralentisseur
export const tramePoseRalentisseur: ServiceTrame = {
  serviceSlug: 'pose-ralentisseur',
  serviceName: 'Pose Ralentisseur',
  points: [
    'Dos d\'âne',
    'Coussins berlinois',
    'Ralentisseurs modulaires',
    'Signalisation associée',
    'Normes de sécurité'
  ],
  introFormulations: [
    'Les ralentisseurs a [VILLE] sécurisent vos voiries privées en forçant la réduction de vitesse des véhicules.',
    'A [VILLE], nous installons ralentisseurs et dos d\'âne pour sécuriser vos parkings et voies de circulation.',
    'La pose de ralentisseurs a [VILLE] est essentielle pour la sécurité des piétons sur vos espaces privés.',
    'Spécialistes de la pose de ralentisseurs a [VILLE], nous sécurisons vos voiries avec des équipements conformes.',
    'Pour ralentir la circulation a [VILLE], faites installer des ralentisseurs adaptés a vos besoins.'
  ],
  descriptionFormulations: [
    'Installation de ralentisseurs : dos d\'âne, coussins berlinois, modules caoutchouc. Sécurisation des voiries privées.',
    'Nous posons tous types de ralentisseurs : préfabriqués ou en enrobé. Signalisation et marquage associés.',
    'Notre équipe installe vos ralentisseurs : choix du type, fixation, signalisation. Conformité aux normes.',
    'Solutions de ralentissement : dos d\'âne, coussins, bandes rugueuses. Pose professionnelle et durable.',
    'Pose professionnelle de ralentisseurs : sélection adaptée, installation, marquage d\'approche. Sécurité garantie.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Quel type de ralentisseur pour mon parking a [VILLE] ?',
        'Dos d\'âne ou coussin berlinois a [VILLE] ?',
        'Quel ralentisseur choisir a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], le choix dépend du trafic : dos d\'âne pour fort ralentissement, coussin berlinois pour les bus.',
        'Nous vous conseillons a [VILLE] selon votre usage. Visite gratuite pour déterminer la solution adaptée.',
        'A [VILLE], nous étudions votre situation : trafic, vitesse souhaitée, passage de véhicules spéciaux.'
      ]
    },
    {
      questionVariants: [
        'Les ralentisseurs sont-ils aux normes a [VILLE] ?',
        'Vos ralentisseurs sont-ils homologués a [VILLE] ?',
        'Respectez-vous la réglementation des ralentisseurs a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] tous nos ralentisseurs sont conformes aux normes NF P 98-300. Homologation garantie.',
        'Absolument, nous installons des ralentisseurs homologués a [VILLE]. Hauteur et dimensions réglementaires.',
        'A [VILLE], nos ralentisseurs respectent les normes : hauteur max 10cm pour dos d\'âne, signalisation obligatoire.'
      ]
    },
    {
      questionVariants: [
        'La signalisation est-elle incluse a [VILLE] ?',
        'Posez-vous les panneaux avec le ralentisseur a [VILLE] ?',
        'Le marquage d\'approche est-il compris a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous incluons la signalisation : panneaux d\'annonce et marquage au sol d\'approche.',
        'Absolument, notre prestation a [VILLE] comprend ralentisseur, panneaux et marquage. Offre complète.',
        'A [VILLE], nous posons ralentisseur et signalisation associée. Conformité totale garantie.'
      ]
    }
  ]
};

// Trame 14: Installation panneaux parking
export const trameInstallationPanneauxParking: ServiceTrame = {
  serviceSlug: 'installation-panneaux-parking',
  serviceName: 'Installation Panneaux Parking',
  points: [
    'Panneaux P',
    'Fleches direction',
    'Numerotation niveaux',
    'Places réservées',
    'Tarification'
  ],
  introFormulations: [
    'L\'installation de panneaux de parking a [VILLE] améliore le guidage et l\'experience des usagers.',
    'A [VILLE], nous posons tous types de panneaux pour parkings : direction, information, interdiction.',
    'Les panneaux de parking a [VILLE] facilitent la circulation et l\'identification des places disponibles.',
    'Spécialistes de la signalétique parking a [VILLE], nous installons panneaux et flèches directionnelles.',
    'Pour un parking bien signale a [VILLE], faites appel a notre expertise en pose de panneaux.'
  ],
  descriptionFormulations: [
    'Installation de panneaux parking : symbole P, flèches, niveaux, places réservées. Guidage efficace des usagers.',
    'Nous équipons vos parkings : panneaux directionnels, numérotation étages, signalisation places spéciales.',
    'Notre équipe pose votre signalétique parking : panneaux normalises, supports robustes, fixation durable.',
    'Solutions de panneaux parking : direction, information, interdiction. Fourniture et pose professionnelle.',
    'Pose professionnelle de panneaux parking : flèches, P, PMR, niveaux. Signalisation complète et coherente.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Quels panneaux pour un parking souterrain a [VILLE] ?',
        'Quelle signalétique pour parking couvert a [VILLE] ?',
        'Comment signaler les niveaux de parking a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous conseillons : panneaux directionnels flèches, numérotation des niveaux, signalisation sorties.',
        'Pour un parking souterrain a [VILLE] : flèches lumineuses ou retroreflechissantes, numéros d\'etage, sorties.',
        'A [VILLE], nous installons la signalétique adaptée : flèches, niveaux, places libres. Étude sur site gratuite.'
      ]
    },
    {
      questionVariants: [
        'Fournissez-vous les poteaux avec les panneaux a [VILLE] ?',
        'Les supports sont-ils inclus a [VILLE] ?',
        'Posez-vous panneaux et poteaux a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous fournissons panneaux et supports : poteaux, platines murales, fixations. Prestation complète.',
        'Absolument, notre offre a [VILLE] inclut panneaux et poteaux. Scellement ou platine selon le support.',
        'A [VILLE], nous installons l\'ensemble : panneaux, poteaux, fixations. Devis global fourniture et pose.'
      ]
    },
    {
      questionVariants: [
        'Faites-vous les panneaux lumineux a [VILLE] ?',
        'Installez-vous des panneaux éclairés a [VILLE] ?',
        'Proposez-vous de la signalétique lumineuse a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous installons des panneaux lumineux : LED, retroéclairés, pour une visibilite optimale.',
        'Absolument, nous proposons des panneaux éclairés a [VILLE]. Ideal pour parkings souterrains.',
        'A [VILLE], nous fournissons signalétique lumineuse : panneaux LED, flèches eclairees. Devis sur demande.'
      ]
    }
  ]
};

// Trame 15: Pose miroir circulation
export const tramePoseMiroirCirculation: ServiceTrame = {
  serviceSlug: 'pose-miroir-circulation',
  serviceName: 'Pose Miroir Circulation',
  points: [
    'Angles morts',
    'Sorties de parking',
    'Carrefours internes',
    'Sécurité piétons',
    'Visibilite améliorée'
  ],
  introFormulations: [
    'Les miroirs de circulation a [VILLE] éliminent les angles morts et sécurisent vos sorties de parking.',
    'A [VILLE], nous installons miroirs et convexes pour améliorer la visibilite dans vos espaces de circulation.',
    'La pose de miroirs de circulation a [VILLE] previent les accidents aux intersections et sorties.',
    'Spécialistes des miroirs routiers a [VILLE], nous sécurisons vos angles morts et points aveugles.',
    'Pour une meilleure visibilite a [VILLE], faites poser des miroirs de circulation adaptés.'
  ],
  descriptionFormulations: [
    'Installation de miroirs de circulation : angles morts, sorties parking, intersections. Sécurité renforcée.',
    'Nous posons miroirs convexes et panoramiques : visibilite des angles morts, prevention des collisions.',
    'Notre équipe installe vos miroirs : choix du diamètre, positionnement optimal, fixation durable.',
    'Solutions de miroirs routiers : convexes, demi-spheres, grands angles. Pose professionnelle sécurisée.',
    'Pose professionnelle de miroirs : sélection adaptée, installation sur poteau ou mur. Angles morts elimines.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Quel diamètre de miroir pour mon parking a [VILLE] ?',
        'Quelle taille de miroir choisir a [VILLE] ?',
        'Comment déterminer la taille du miroir a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], le diamètre dépend de la distance de vision : 40cm pour 5m, 60cm pour 10m, 80cm pour 15m.',
        'Nous vous conseillons a [VILLE] selon la configuration. Visite gratuite pour déterminer la taille idéale.',
        'A [VILLE], nous calculons le diamètre selon la distance et l\'angle a couvrir. Étude sur site gratuite.'
      ]
    },
    {
      questionVariants: [
        'Les miroirs résistent-ils aux intempéries a [VILLE] ?',
        'Vos miroirs sont-ils pour l\'extérieur a [VILLE] ?',
        'Quelle durabilité des miroirs a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nos miroirs sont en acrylique ou polycarbonate, résistants UV et intempéries. Garantie 5 ans.',
        'Absolument, nos miroirs sont conçus pour l\'extérieur a [VILLE]. Anti-UV, incassables, durables.',
        'A [VILLE], nous installons des miroirs haute résistance. Matériaux incassables, pas de rouille, longue durée.'
      ]
    },
    {
      questionVariants: [
        'Posez-vous les miroirs en hauteur a [VILLE] ?',
        'Pouvez-vous fixer un miroir en angle mort a [VILLE] ?',
        'Installez-vous les miroirs sur poteau a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous fixons les miroirs : sur poteau, mur, plafond. Hauteur et angle optimisés.',
        'Absolument, nous installons dans toutes les configurations a [VILLE]. Matériel d\'accèsinclus.',
        'A [VILLE], nous posons sur tous supports : poteau dédié, existant, mur, plafond de parking.'
      ]
    }
  ]
};

// Trame 16: Installation bornes parking
export const trameInstallationBornesParking: ServiceTrame = {
  serviceSlug: 'installation-bornes-parking',
  serviceName: 'Installation Bornes Parking',
  points: [
    'Protection places',
    'Bornes escamotables',
    'Potelets fixes',
    'Acces contrôle',
    'Delimitation zones'
  ],
  introFormulations: [
    'Les bornes de parking a [VILLE] protègent vos places réservées et contrôlent les accèsa vos espaces.',
    'A [VILLE], nous installons bornes et potelets pour sécuriser et délimiter vos zones de stationnement.',
    'L\'installation de bornes de parking a [VILLE] garantit le respect des places attribuées.',
    'Spécialistes des bornes de parking a [VILLE], nous posons potelets fixes ou escamotables selon vos besoins.',
    'Pour proteger vos places a [VILLE], faites installer des bornes adaptées a votre configuration.'
  ],
  descriptionFormulations: [
    'Installation de bornes parking : potelets fixes, bornes escamotables, arceau velos. Protection des places.',
    'Nous posons vos bornes de protection : délimitation places réservées, contrôle d\'accès, sécurisation zones.',
    'Notre équipe installe bornes et potelets : scellement sol, systèmes à clé ou automatiques. Durabilité garantie.',
    'Solutions de bornes parking : fixes, rabattables, escamotables. Adaptation a tous types de parkings.',
    'Pose professionnelle de bornes : protection places, délimitation zones, contrôle accès. Fixation durable.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Bornes fixes ou escamotables a [VILLE] ?',
        'Quel type de borne pour mon parking a [VILLE] ?',
        'Comment choisir entre borne fixe et rabattable a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], les bornes fixes conviennent pour protection permanente, les escamotables pour accès variable.',
        'Nous vous conseillons selon l\'usage a [VILLE]. Fixe pour délimitation, escamotable pour places attribuées.',
        'A [VILLE], le choix dépend de votre besoin : protection permanente ou accès ponctuel. Étude gratuite.'
      ]
    },
    {
      questionVariants: [
        'Posez-vous des bornes avec cle a [VILLE] ?',
        'Installez-vous des bornes verrouillables a [VILLE] ?',
        'Avez-vous des bornes a serrure a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous installons des bornes à clé : triangle standard, cle personnalisée ou pass général.',
        'Absolument, nos bornes escamotables a [VILLE] sont équipées de serrures. Plusieurs options de clés.',
        'A [VILLE], nous proposons bornes verrouillables : clé triangle, cadenas, ou serrure sur mesure.'
      ]
    },
    {
      questionVariants: [
        'Les bornes résistent-elles aux chocs a [VILLE] ?',
        'Vos bornes sont-elles solides a [VILLE] ?',
        'Quelle résistance des bornes a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nos bornes sont en acier galvanise ou inox, résistantes aux chocs et a la corrosion.',
        'Absolument, nous installons des bornes robustes a [VILLE]. Acier épais, traitement anticorrosion.',
        'A [VILLE], nos bornes sont conçues pour durer. Scellement béton, matériaux haute résistance.'
      ]
    }
  ]
};

// Trame 17: Pose butees parking
export const tramePoseButeesParking: ServiceTrame = {
  serviceSlug: 'pose-butees-parking',
  serviceName: 'Pose Butees Parking',
  points: [
    'Arrets de roue',
    'Protection murs',
    'Delimitation places',
    'Sécurité véhicules',
    'Matériaux durables'
  ],
  introFormulations: [
    'Les butees de parking a [VILLE] délimitent les places et protègent les murs des impacts de pare-chocs.',
    'A [VILLE], nous installons butees et arrêts de roue pour organiser le stationnement et proteger vos infrastructures.',
    'La pose de butees de parking a [VILLE] facilite le positionnement des véhicules et évite les dégâts.',
    'Spécialistes des butees de parking a [VILLE], nous posons arrêts de roue en béton, caoutchouc ou plastique.',
    'Pour délimiter vos places a [VILLE], faites poser des butees adaptées a votre type de parking.'
  ],
  descriptionFormulations: [
    'Installation de butees parking : arrêts de roue, protection murs, délimitation places. Matériaux au choix.',
    'Nous posons vos butees de stationnement : béton, caoutchouc recyclé, plastique. Fixation durable au sol.',
    'Notre équipe installe butees et arrêts : positionnement optimal, fixation mecanique ou chimique.',
    'Solutions de butees parking : tous matériaux, toutes tailles. Adaptation a vos places et véhicules.',
    'Pose professionnelle de butees : délimitation places, protection infrastructures. Installation rapide.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Quel materiau de butee choisir a [VILLE] ?',
        'Butee béton ou caoutchouc a [VILLE] ?',
        'Quelle butee pour mon parking a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], le béton est très resistant, le caoutchouc plus souple et recyclable, le plastique léger et coloré.',
        'Nous conseillons selon l\'usage a [VILLE] : béton pour l\'extérieur, caoutchouc pour parking couvert.',
        'A [VILLE], le choix dépend du trafic et de l\'esthétique souhaitée. Visite conseil gratuite.'
      ]
    },
    {
      questionVariants: [
        'Comment fixez-vous les butees a [VILLE] ?',
        'Les butees sont-elles scellées a [VILLE] ?',
        'Quelle fixation pour les arrêts de roue a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous fixons par chevillage mecanique ou scellement chimique selon le support. Tenue garantie.',
        'Nos butees sont solidement fixees a [VILLE]. Vis inox ou goujons selon le materiau du sol.',
        'A [VILLE], nous adaptons la fixation : chevilles béton, goujons enrobé, colle pour sols fragiles.'
      ]
    },
    {
      questionVariants: [
        'Quelle longueur de butee standard a [VILLE] ?',
        'Quelles dimensions de butees proposez-vous a [VILLE] ?',
        'Avez-vous des butees courtes a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous proposons des butees de 55cm a 180cm. Choix selon largeur des places et type de véhicules.',
        'Nos butees a [VILLE] vont de 55cm (motos) a 180cm (camions). Dimensions standards et sur mesure.',
        'A [VILLE], longueurs standard : 55cm, 90cm, 120cm, 180cm. Butees spéciales sur demande.'
      ]
    }
  ]
};

// Export de toutes les trames
export const allTrames: ServiceTrame[] = [
  trameMarquageParking,
  trameMarquageParkingPrive,
  trameMarquageStationnement,
  trameMarquageParkingEntreprise,
  trameMarquageEntrepot,
  trameMarquageIndustriel,
  trameMarquageUsine,
  trameMarquageRoutier,
  trameMarquageGarage,
  trameMarquageZonesPiétonnes,
  tramePlacesPMR,
  trameSignalisationVerticale,
  tramePoseRalentisseur,
  trameInstallationPanneauxParking,
  tramePoseMiroirCirculation,
  trameInstallationBornesParking,
  tramePoseButeesParking
];

// Fonction pour récupérer une trame par slug de service
export function getTrameByServiceSlug(serviceSlug: string): ServiceTrame | undefined {
  return allTrames.find(t => t.serviceSlug === serviceSlug);
}
