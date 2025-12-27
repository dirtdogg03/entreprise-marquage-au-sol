/**
 * Trames de contenu pour chaque service
 *
 * Chaque trame contient:
 * - Points cles a couvrir
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
    'Places de stationnement numerotees',
    'Fleches directionnelles',
    'Passages pietons',
    'Zones interdites',
    'Places PMR reglementaires'
  ],
  introFormulations: [
    '[VILLE] compte de nombreux parkings necessitant un marquage professionnel pour optimiser la circulation et le stationnement.',
    'Le marquage au sol des parkings a [VILLE] est essentiel pour garantir securite et fluidite des vehicules.',
    'A [VILLE], nos equipes interviennent pour le tracage complet de vos parkings, qu\'ils soient souterrains ou exterieurs.',
    'Specialistes du marquage parking a [VILLE], nous realisons la signalisation horizontale de tous vos espaces de stationnement.',
    'Votre parking a [VILLE] merite un marquage conforme et durable. Notre entreprise intervient rapidement.'
  ],
  descriptionFormulations: [
    'Notre equipe trace les places de stationnement, fleches de circulation et passages pietons selon les normes en vigueur. Nous utilisons des peintures haute resistance pour une durabilite optimale.',
    'Nous realisons le tracage complet de votre parking : delimitation des places, sens de circulation, zones reservees. Peintures professionnelles garanties plusieurs annees.',
    'De la conception a la realisation, nous marquons vos parkings avec precision : numerotation, fleches, zebras, places PMR. Materiaux certifies et equipes qualifiees.',
    'Tracage professionnel de parkings : places standard et PMR, voies de circulation, signalisation au sol. Intervention rapide, resultat conforme aux reglementations.',
    'Marquage complet pour parkings : delimitation places, fleches directionnelles, passages pietons, zones interdites. Devis gratuit et intervention sous 48h.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Combien coute le marquage d\'un parking a [VILLE] ?',
        'Quel est le prix du tracage de parking a [VILLE] ?',
        'Quel budget prevoir pour marquer un parking a [VILLE] ?'
      ],
      answerVariants: [
        'Le cout depend de la surface et du nombre de places. Comptez entre 15 et 35 euros par place. Devis gratuit sur site a [VILLE].',
        'Nos tarifs a [VILLE] varient selon la surface : de 15 a 35 euros la place. Nous etablissons un devis personnalise gratuit.',
        'A [VILLE], le marquage de parking coute entre 15 et 35 euros par place selon la complexite. Demandez votre devis gratuit.'
      ]
    },
    {
      questionVariants: [
        'Combien de temps dure le marquage de parking a [VILLE] ?',
        'Quelle est la duree d\'intervention pour un parking a [VILLE] ?',
        'En combien de temps marquez-vous un parking a [VILLE] ?'
      ],
      answerVariants: [
        'Pour un parking de 50 places a [VILLE], comptez 1 a 2 jours d\'intervention. Le sechage est rapide : circulation possible sous 2h.',
        'L\'intervention dure generalement 1 a 2 jours selon la taille du parking. A [VILLE], nous pouvons intervenir de nuit si necessaire.',
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
        'Oui, nous intervenons dans tous types de parkings a [VILLE] : souterrains, couverts, exterieurs. Nos peintures sont adaptees a chaque environnement.',
        'Absolument, nos equipes marquent les parkings souterrains a [VILLE] avec des produits specifiques resines ou peintures selon le support.',
        'Nous sommes specialises dans les parkings souterrains a [VILLE]. Intervention possible de nuit pour ne pas perturber votre activite.'
      ]
    }
  ]
};

// Trame 2: Marquage au sol parking prive
export const trameMarquageParkingPrive: ServiceTrame = {
  serviceSlug: 'marquage-au-sol-parking-prive',
  serviceName: 'Marquage au Sol Parking Prive',
  points: [
    'Identification places privatives',
    'Marquage nominatif',
    'Zones visiteurs',
    'Acces reserves',
    'Conformite copropriete'
  ],
  introFormulations: [
    'Les parkings prives de [VILLE] necessitent un marquage clair pour identifier les places attribuees et eviter les conflits.',
    'A [VILLE], nous marquons vos parkings prives : residences, coproprietes, entreprises. Identification precise de chaque emplacement.',
    'Specialistes du marquage de parkings prives a [VILLE], nous realisons la signalisation adaptee a vos besoins specifiques.',
    'Votre parking prive a [VILLE] merite un marquage professionnel : places numerotees, zones visiteurs, acces reserves.',
    'Pour les parkings prives de [VILLE], nous proposons des solutions de marquage personnalisees et durables.'
  ],
  descriptionFormulations: [
    'Nous realisons le marquage complet de parkings prives : numerotation des places, identification proprietaires, zones visiteurs. Solutions adaptees aux coproprietes et entreprises.',
    'Marquage sur mesure pour parkings prives : places attribuees, emplacements visiteurs, zones reservees direction. Peintures durables et conformes.',
    'Notre equipe trace vos parkings prives avec precision : numerotation, identification par nom ou numero de lot, delimitation zones. Devis gratuit.',
    'Solutions de marquage pour parkings privatifs : places nominatives, zones visiteurs, acces PMR. Intervention rapide et propre.',
    'Tracage professionnel de parkings prives : identification claire des emplacements, signalisation zones communes, marquage PMR conforme.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Pouvez-vous marquer les noms sur les places a [VILLE] ?',
        'Faites-vous du marquage nominatif de parking a [VILLE] ?',
        'Est-il possible d\'inscrire les numeros de lot a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, nous realisons le marquage nominatif a [VILLE] : noms, numeros de lot ou d\'appartement. Peinture durable et lisible.',
        'Absolument, nous pouvons inscrire noms ou numeros sur chaque place de votre parking a [VILLE]. Technique au pochoir professionnel.',
        'A [VILLE], nous proposons le marquage personnalise : noms, numeros, logos. Solution ideale pour les coproprietes.'
      ]
    },
    {
      questionVariants: [
        'Quelle peinture utilisez-vous pour les parkings prives a [VILLE] ?',
        'Les marquages sont-ils durables a [VILLE] ?',
        'Combien de temps tient la peinture de parking a [VILLE] ?'
      ],
      answerVariants: [
        'Nous utilisons des peintures routieres professionnelles a [VILLE], garanties 3 a 5 ans selon le trafic. Resistantes a l\'usure et aux intemperies.',
        'A [VILLE], nos marquages durent 3 a 5 ans minimum. Peintures certifiees NF, adaptees au trafic de votre parking.',
        'Nos peintures professionnelles tiennent 3 a 5 ans a [VILLE]. Nous proposons aussi des resines epoxy pour une durabilite accrue.'
      ]
    },
    {
      questionVariants: [
        'Intervenez-vous dans les coproprietes a [VILLE] ?',
        'Faites-vous les parkings de residences a [VILLE] ?',
        'Marquez-vous les parkings d\'immeubles a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, nous intervenons regulierement dans les coproprietes de [VILLE]. Coordination avec le syndic et intervention en dehors des heures de pointe.',
        'Absolument, les residences de [VILLE] sont notre specialite. Nous nous adaptons aux contraintes des coproprietes.',
        'A [VILLE], nous marquons de nombreux parkings de residences. Devis gratuit et intervention planifiee avec votre syndic.'
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
    'Marquage voirie privee',
    'Zones bleues',
    'Stationnement minute',
    'Livraisons'
  ],
  introFormulations: [
    'L\'organisation du stationnement a [VILLE] passe par un marquage au sol clair et reglementaire.',
    'A [VILLE], nous optimisons vos zones de stationnement grace a un marquage professionnel et conforme.',
    'Specialistes du marquage de stationnement a [VILLE], nous maximisons la capacite de vos espaces.',
    'Le marquage de zones de stationnement a [VILLE] permet d\'organiser efficacement l\'espace disponible.',
    'Pour un stationnement ordonne a [VILLE], faites confiance a notre expertise en marquage au sol.'
  ],
  descriptionFormulations: [
    'Nous optimisons vos espaces de stationnement : tracage des places, zones minute, emplacements livraison. Marquage conforme et durable.',
    'Organisation complete du stationnement : delimitation places, zones temporaires, espaces reserves. Intervention rapide a [VILLE].',
    'Marquage professionnel de zones de stationnement : places standard, minute, livraison, PMR. Maximisez votre capacite d\'accueil.',
    'Notre equipe organise vos aires de stationnement : tracage optimal des places, signalisation claire. Devis personnalise gratuit.',
    'Solutions de marquage pour stationnement : places visiteurs, employes, livraisons. Optimisation de l\'espace garanti.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Comment optimiser le nombre de places a [VILLE] ?',
        'Pouvez-vous augmenter la capacite de stationnement a [VILLE] ?',
        'Gagnez-vous des places avec un nouveau marquage a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], un retracage optimise peut gagner 10 a 15% de places supplementaires. Etude gratuite de votre espace.',
        'Oui, a [VILLE] nous realisons une etude d\'optimisation gratuite. Gain moyen : 10 a 15% de places en plus.',
        'Notre expertise a [VILLE] permet souvent de gagner des places. Visite technique gratuite pour evaluer le potentiel.'
      ]
    },
    {
      questionVariants: [
        'Faites-vous les zones de livraison a [VILLE] ?',
        'Marquez-vous les emplacements livraison a [VILLE] ?',
        'Pouvez-vous tracer une zone de dechargement a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, nous marquons les zones de livraison a [VILLE] : delimitation, mention LIVRAISON, horaires si necessaire.',
        'Absolument, a [VILLE] nous realisons le marquage complet des zones de livraison conformes a la reglementation.',
        'A [VILLE], nous tracons vos zones de livraison avec les marquages reglementaires. Devis gratuit sous 24h.'
      ]
    },
    {
      questionVariants: [
        'Intervenez-vous sur voirie privee a [VILLE] ?',
        'Marquez-vous les parkings de surface a [VILLE] ?',
        'Faites-vous le tracage sur enrobe a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, nous intervenons sur toutes voiries privees a [VILLE] : parkings de surface, allees, cours d\'entreprise.',
        'A [VILLE], nous marquons tous types de surfaces : enrobe, beton, paves. Peintures adaptees a chaque support.',
        'Notre equipe trace sur tous supports a [VILLE]. Voirie privee, parking de surface, esplanade. Devis gratuit.'
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
    'Parking salaries',
    'Acces livraison',
    'Signalisation interne'
  ],
  introFormulations: [
    'Les entreprises de [VILLE] ont besoin d\'un marquage de parking professionnel pour organiser le stationnement de leurs collaborateurs et visiteurs.',
    'A [VILLE], nous marquons les parkings d\'entreprise : places direction, salaries, visiteurs. Organisation optimale de vos espaces.',
    'Le marquage de parking entreprise a [VILLE] reflete votre image professionnelle et facilite l\'accueil de vos clients.',
    'Specialistes des parkings d\'entreprise a [VILLE], nous realisons un marquage fonctionnel et esthetique.',
    'Pour votre parking d\'entreprise a [VILLE], un marquage clair ameliore la circulation et l\'image de votre societe.'
  ],
  descriptionFormulations: [
    'Marquage complet de parkings d\'entreprise : places reservees direction, zones visiteurs, parking salaries. Signalisation professionnelle et durable.',
    'Nous organisons vos parkings d\'entreprise : identification des places, fleches de circulation, zones de livraison. Image professionnelle garantie.',
    'Notre equipe realise le marquage de votre parking d\'entreprise : numerotation, places nominatives, zones PMR. Intervention rapide et soignee.',
    'Solutions de marquage pour entreprises : organisation du stationnement, signalisation claire, places visiteurs identifiees. Devis gratuit.',
    'Tracage professionnel de parking d\'entreprise : optimisation de l\'espace, identification des zones, fleches directionnelles. Resultat impeccable.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Pouvez-vous integrer notre logo dans le marquage a [VILLE] ?',
        'Faites-vous des marquages personnalises a [VILLE] ?',
        'Est-il possible d\'ajouter le nom de l\'entreprise a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous integrons logos et noms d\'entreprise dans le marquage. Pochoirs sur mesure pour un rendu professionnel.',
        'Absolument, nous realisons des marquages personnalises a [VILLE] : logo, nom de societe, charte graphique respectee.',
        'A [VILLE], nous pouvons reproduire votre logo et identite visuelle sur le parking. Technique pochoir haute precision.'
      ]
    },
    {
      questionVariants: [
        'Intervenez-vous le week-end a [VILLE] ?',
        'Pouvez-vous travailler en dehors des heures de bureau a [VILLE] ?',
        'Faites-vous le marquage de nuit a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous intervenons le week-end ou de nuit pour ne pas perturber votre activite. Supplement applicable.',
        'Absolument, nous nous adaptons a vos contraintes a [VILLE]. Interventions possibles soirs, nuits et week-ends.',
        'A [VILLE], nous proposons des interventions hors heures ouvrables. Planification selon vos besoins. Devis sur demande.'
      ]
    },
    {
      questionVariants: [
        'Combien de temps pour marquer un parking d\'entreprise a [VILLE] ?',
        'Quelle duree pour un parking de 100 places a [VILLE] ?',
        'En combien de temps tracez-vous un parking moyen a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], un parking de 100 places prend 2 a 3 jours. Nous pouvons echelonner pour maintenir une partie accessible.',
        'Comptez 2 a 3 jours pour un parking moyen a [VILLE]. Organisation possible par zones pour limiter la gene.',
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
    'Securite pietons',
    'Zonage couleurs'
  ],
  introFormulations: [
    'Les entrepots de [VILLE] necessitent un marquage au sol precis pour organiser les flux et garantir la securite.',
    'A [VILLE], nous realisons le marquage complet de vos entrepots : voies, zones de stockage, securite.',
    'Le marquage d\'entrepot a [VILLE] est essentiel pour une logistique efficace et des conditions de travail securisees.',
    'Specialistes du marquage d\'entrepots a [VILLE], nous tracons vos zones de circulation et de stockage.',
    'Pour vos entrepots a [VILLE], un marquage professionnel optimise l\'espace et renforce la securite.'
  ],
  descriptionFormulations: [
    'Marquage complet d\'entrepots : voies de circulation, zones de stockage, quais de chargement. Securite et organisation optimales.',
    'Nous tracons vos entrepots selon les normes de securite : allees pietons, voies engins, zones dangereuses. Peintures industrielles resistantes.',
    'Notre equipe marque vos entrepots : delimitation zones, fleches directionnelles, marquage securite. Conformite reglementaire assuree.',
    'Solutions de marquage pour entrepots : organisation spatiale, securite des personnes, optimisation des flux. Intervention sans arret d\'activite.',
    'Tracage professionnel d\'entrepots : zones de stockage codifiees, allees de circulation, espaces de securite. Devis gratuit sous 24h.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Quelles couleurs utilisez-vous pour les entrepots a [VILLE] ?',
        'Y a-t-il un code couleur pour le marquage d\'entrepot a [VILLE] ?',
        'Comment codifiez-vous les zones d\'entrepot a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous appliquons le code couleur standard : jaune pour circulation, blanc pour stockage, rouge pour danger, vert pour securite.',
        'Le marquage d\'entrepot a [VILLE] suit les normes : jaune (voies), blanc (zones), rouge (danger), bleu (obligation). Personnalisation possible.',
        'Nous utilisons le code couleur reglementaire a [VILLE] : jaune, blanc, rouge, vert. Adaptation a votre organisation interne si besoin.'
      ]
    },
    {
      questionVariants: [
        'Pouvez-vous intervenir sans arreter l\'activite a [VILLE] ?',
        'Travaillez-vous pendant les heures d\'exploitation a [VILLE] ?',
        'Comment minimiser l\'impact sur notre activite a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous intervenons par zones pour maintenir votre activite. Travail de nuit ou week-end egalement possible.',
        'A [VILLE], nous organisons le chantier par phases. Votre entrepot reste partiellement operationnel pendant les travaux.',
        'Notre methode a [VILLE] permet de travailler zone par zone. Planification avec votre responsable logistique.'
      ]
    },
    {
      questionVariants: [
        'Les peintures resistent-elles aux chariots elevateurs a [VILLE] ?',
        'Quelle durabilite pour un marquage d\'entrepot a [VILLE] ?',
        'Les marquages supportent-ils le trafic intense a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous utilisons des resines epoxy ou polyurethane haute resistance, garanties 5 a 10 ans meme sous trafic intense.',
        'Nos peintures industrielles a [VILLE] resistent aux chariots et transpalettes. Garantie 5 ans minimum.',
        'Pour les entrepots de [VILLE], nous appliquons des revetements industriels tres resistants. Durabilite 5 a 10 ans.'
      ]
    }
  ]
};

// Trame 6: Marquage au sol industriel
export const trameMarquageIndustriel: ServiceTrame = {
  serviceSlug: 'marquage-au-sol-industriel',
  serviceName: 'Marquage au Sol Industriel',
  points: [
    'Securite au travail',
    'Zones machines',
    'Voies engins',
    'Evacuation',
    'Normes industrielles'
  ],
  introFormulations: [
    'Les sites industriels de [VILLE] requierent un marquage au sol conforme aux normes de securite et d\'organisation.',
    'A [VILLE], nous realisons le marquage de vos installations industrielles selon les exigences reglementaires.',
    'Le marquage industriel a [VILLE] garantit la securite de vos equipes et l\'efficacite de vos operations.',
    'Specialistes du marquage industriel a [VILLE], nous tracons vos zones de production, circulation et securite.',
    'Pour vos sites industriels a [VILLE], un marquage professionnel est gage de securite et de conformite.'
  ],
  descriptionFormulations: [
    'Marquage industriel complet : zones machines, voies de circulation, espaces de securite. Conformite aux normes du travail.',
    'Nous securisons vos sites industriels : delimitation postes de travail, allees pietons, zones dangereuses. Peintures haute resistance.',
    'Notre equipe trace vos installations industrielles : zonage production, voies engins, issues de secours. Respect des normes.',
    'Solutions de marquage industriel : organisation des flux, securite des personnes, signalisation reglementaire. Devis sur mesure.',
    'Tracage professionnel de sites industriels : zones de travail, circulation, stockage, danger. Intervention adaptee a votre activite.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Etes-vous conformes aux normes de securite a [VILLE] ?',
        'Le marquage respecte-t-il la reglementation a [VILLE] ?',
        'Vos marquages sont-ils aux normes industrielles a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] tous nos marquages respectent le Code du travail et les normes NF. Certificat de conformite fourni.',
        'Absolument, nous appliquons les normes en vigueur a [VILLE] : NF X 08-003 pour les couleurs, Code du travail pour la securite.',
        'A [VILLE], nos marquages sont 100% conformes. Nous connaissons parfaitement les exigences reglementaires industrielles.'
      ]
    },
    {
      questionVariants: [
        'Pouvez-vous marquer les zones machines a [VILLE] ?',
        'Faites-vous la delimitation des postes de travail a [VILLE] ?',
        'Tracez-vous les zones dangereuses a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous marquons toutes les zones : perimetres machines, postes de travail, zones dangereuses. Couleurs normalisees.',
        'Absolument, la delimitation des zones machines est notre specialite a [VILLE]. Marquage jaune et noir reglementaire.',
        'A [VILLE], nous tracons les zones machines avec le marquage de securite obligatoire. Conformite garantie.'
      ]
    },
    {
      questionVariants: [
        'Quelle peinture pour sols industriels a [VILLE] ?',
        'Utilisez-vous des produits speciaux pour l\'industrie a [VILLE] ?',
        'Les marquages resistent-ils aux produits chimiques a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous utilisons des resines epoxy et polyurethane resistantes aux produits chimiques, huiles et solvants.',
        'Nos peintures industrielles a [VILLE] sont formulees pour resister aux agressions chimiques et mecaniques.',
        'Pour l\'industrie a [VILLE], nous appliquons des revetements techniques haute performance. Resistance chimique garantie.'
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
    'Zones de securite',
    'Stockage matieres',
    'Flux logistiques',
    'Conformite HSE'
  ],
  introFormulations: [
    'Les usines de [VILLE] necessitent un marquage au sol rigoureux pour securiser la production et optimiser les flux.',
    'A [VILLE], nous intervenons dans les usines pour le marquage des lignes, zones de securite et voies de circulation.',
    'Le marquage d\'usine a [VILLE] est essentiel pour la securite des operateurs et l\'efficacite de la production.',
    'Specialistes du marquage en milieu industriel a [VILLE], nous tracons vos usines selon les normes HSE.',
    'Pour votre usine a [VILLE], un marquage professionnel garantit securite et organisation optimale.'
  ],
  descriptionFormulations: [
    'Marquage complet d\'usines : lignes de production, zones de stockage, voies de circulation. Conformite HSE assuree.',
    'Nous organisons vos usines par le marquage : delimitation postes, flux matieres, zones dangereuses. Securite renforcee.',
    'Notre equipe trace vos usines : perimetres machines, allees securisees, stockage identifie. Normes respectees.',
    'Solutions de marquage pour usines : organisation production, securite operateurs, flux optimises. Intervention sans arret.',
    'Tracage professionnel d\'usines : zones de travail, circulation engins, evacuation. Conformite reglementaire garantie.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Intervenez-vous pendant la production a [VILLE] ?',
        'Pouvez-vous travailler sans arreter l\'usine a [VILLE] ?',
        'Comment minimiser l\'arret de production a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous intervenons par zones pendant les pauses ou arrets programmes. Planification avec votre responsable production.',
        'Oui, a [VILLE] nous travaillons par secteurs pour maintenir la production. Interventions possibles le week-end.',
        'Notre methode a [VILLE] permet de travailler zone par zone. Coordination avec vos equipes pour minimiser l\'impact.'
      ]
    },
    {
      questionVariants: [
        'Connaissez-vous les normes HSE pour le marquage a [VILLE] ?',
        'Le marquage est-il conforme aux audits a [VILLE] ?',
        'Vos tracages passent-ils les inspections a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous maitrisons parfaitement les normes HSE. Nos marquages passent tous les audits de securite.',
        'Absolument, nos marquages a [VILLE] sont conformes aux exigences des audits HSE et inspections du travail.',
        'A [VILLE], nous garantissons la conformite HSE. Documentation et certificats fournis pour vos audits.'
      ]
    },
    {
      questionVariants: [
        'Marquez-vous les issues de secours a [VILLE] ?',
        'Faites-vous le marquage d\'evacuation a [VILLE] ?',
        'Tracez-vous les chemins d\'evacuation a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous marquons les issues de secours et chemins d\'evacuation selon les normes incendie.',
        'Absolument, le marquage d\'evacuation fait partie de nos prestations a [VILLE]. Fleches, bandes, pictogrammes.',
        'A [VILLE], nous tracons les voies d\'evacuation conformes : bandes vertes, fleches directionnelles, zones de rassemblement.'
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
    'Passages pietons',
    'Voies de circulation',
    'Stop et cedez',
    'Bandes podotactiles'
  ],
  introFormulations: [
    'Le marquage routier a [VILLE] garantit la securite des usagers sur vos voiries privees et parkings.',
    'A [VILLE], nous realisons la signalisation horizontale de vos voies de circulation privees.',
    'Specialistes du marquage routier a [VILLE], nous tracons passages pietons, stops et voies de circulation.',
    'La signalisation au sol a [VILLE] est essentielle pour guider et securiser la circulation sur vos espaces.',
    'Pour vos voiries privees a [VILLE], nous appliquons un marquage routier conforme et durable.'
  ],
  descriptionFormulations: [
    'Marquage routier professionnel : passages pietons, lignes de rive, stops, fleches. Signalisation horizontale complete.',
    'Nous realisons la signalisation routiere de vos voies privees : passages pietons, bandes, fleches directionnelles.',
    'Notre equipe trace votre signalisation horizontale : lignes, passages pietons, marquages reglementaires. Normes routieres respectees.',
    'Solutions de marquage routier : voies de circulation, passages proteges, arrets. Peintures routieres homologuees.',
    'Tracage routier pour voiries privees : signalisation complete, passages pietons, stops. Conformite garantie.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Utilisez-vous des peintures homologuees a [VILLE] ?',
        'Vos peintures routieres sont-elles certifiees a [VILLE] ?',
        'Le marquage est-il conforme aux normes routieres a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous utilisons exclusivement des peintures routieres certifiees NF et homologuees.',
        'Absolument, nos peintures a [VILLE] sont conformes aux normes routieres francaises. Certificats disponibles.',
        'A [VILLE], nous appliquons des peintures homologuees type 1 ou 2 selon l\'usage. Conformite totale.'
      ]
    },
    {
      questionVariants: [
        'Faites-vous les passages pietons a [VILLE] ?',
        'Tracez-vous les passages proteges a [VILLE] ?',
        'Pouvez-vous refaire un passage pieton a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous tracons tous types de passages pietons : bandes blanches, zebras. Dimensions reglementaires.',
        'Absolument, les passages pietons sont notre specialite a [VILLE]. Tracage conforme aux normes de securite.',
        'A [VILLE], nous realisons les passages pietons selon les specifications officielles. Largeur et espacement respectes.'
      ]
    },
    {
      questionVariants: [
        'Posez-vous des bandes podotactiles a [VILLE] ?',
        'Faites-vous le marquage pour malvoyants a [VILLE] ?',
        'Installez-vous des dalles d\'eveil a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous posons les bandes podotactiles d\'eveil a la vigilance pour les personnes malvoyantes.',
        'Absolument, nous installons les bandes podotactiles a [VILLE] conformes a la reglementation accessibilite.',
        'A [VILLE], nous equipons vos passages pietons de dalles d\'eveil pour l\'accessibilite PMR.'
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
    'Stockage vehicules',
    'Securite mecaniciens',
    'Circulation clients'
  ],
  introFormulations: [
    'Les garages automobiles de [VILLE] ont besoin d\'un marquage au sol organisant l\'atelier et securisant les mecaniciens.',
    'A [VILLE], nous marquons vos garages : zones de travail, ponts, stockage vehicules. Organisation et securite.',
    'Le marquage de garage automobile a [VILLE] optimise l\'espace de travail et renforce la securite de l\'atelier.',
    'Specialistes du marquage de garages a [VILLE], nous tracons postes de travail, voies et zones de stockage.',
    'Pour votre garage a [VILLE], un marquage professionnel ameliore l\'organisation et la securite quotidienne.'
  ],
  descriptionFormulations: [
    'Marquage complet de garages : postes de travail, zones de stockage, voies de circulation. Securite et organisation optimales.',
    'Nous organisons vos ateliers mecaniques : delimitation ponts, zones outillage, stockage pieces. Marquage resistant aux huiles.',
    'Notre equipe trace vos garages : postes de travail identifies, circulation clients, zones dangereuses. Peintures speciales garages.',
    'Solutions de marquage pour garages : organisation atelier, securite personnel, accueil clients. Intervention rapide.',
    'Tracage professionnel de garages automobiles : zones de travail, stockage, circulation. Revetements resistants.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Les peintures resistent-elles aux huiles a [VILLE] ?',
        'Le marquage tient-il malgre les graisses a [VILLE] ?',
        'Vos peintures supportent-elles les produits mecaniques a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous utilisons des resines epoxy speciales garages, resistantes aux huiles, graisses et solvants.',
        'Absolument, nos peintures pour garages a [VILLE] sont formulees pour resister aux produits mecaniques.',
        'A [VILLE], nous appliquons des revetements techniques haute resistance aux hydrocarbures et produits d\'atelier.'
      ]
    },
    {
      questionVariants: [
        'Delimitez-vous les postes de travail a [VILLE] ?',
        'Marquez-vous les emplacements des ponts a [VILLE] ?',
        'Tracez-vous les zones d\'intervention a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous delimitons chaque poste de travail, emplacement pont et zone d\'intervention.',
        'Absolument, le marquage des postes est notre specialite a [VILLE]. Organisation claire de l\'atelier.',
        'A [VILLE], nous tracons tous les postes : ponts, fosses, zones de travail au sol. Couleurs standardisees.'
      ]
    },
    {
      questionVariants: [
        'Pouvez-vous travailler le dimanche a [VILLE] ?',
        'Intervenez-vous hors horaires d\'ouverture a [VILLE] ?',
        'Faites-vous le marquage pendant la fermeture a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous intervenons le dimanche ou en soiree pour ne pas perturber votre activite.',
        'Absolument, nous nous adaptons a vos horaires a [VILLE]. Week-end et soirees possibles.',
        'A [VILLE], nous pouvons travailler pendant vos jours de fermeture. Planification selon vos besoins.'
      ]
    }
  ]
};

// Trame 10: Marquage zones pietonnes
export const trameMarquageZonesPietonnes: ServiceTrame = {
  serviceSlug: 'marquage-zones-pietonnes',
  serviceName: 'Marquage Zones Pietonnes',
  points: [
    'Chemins pietons',
    'Zones protegees',
    'Traversees securisees',
    'Accessibilite PMR',
    'Separation vehicules'
  ],
  introFormulations: [
    'La securite des pietons a [VILLE] passe par un marquage au sol clair delimitant les zones de circulation.',
    'A [VILLE], nous tracons vos zones pietonnes : chemins securises, traversees, espaces proteges.',
    'Le marquage de zones pietonnes a [VILLE] protege les usagers et organise les flux de circulation.',
    'Specialistes des zones pietonnes a [VILLE], nous securisons vos espaces par un marquage visible et durable.',
    'Pour proteger les pietons a [VILLE], faites confiance a notre expertise en marquage de zones dedicees.'
  ],
  descriptionFormulations: [
    'Marquage de zones pietonnes : chemins dedies, traversees securisees, separation vehicules. Securite des usagers garantie.',
    'Nous securisons vos espaces pietons : allees delimitees, passages proteges, zones d\'attente. Marquage visible et conforme.',
    'Notre equipe trace vos zones pietonnes : chemins de circulation, traversees, espaces PMR. Accessibilite assuree.',
    'Solutions de marquage pour zones pietonnes : delimitation claire, traversees securisees, signalisation au sol.',
    'Tracage professionnel de zones pietonnes : allees dedicees, passages proteges, separation avec les vehicules.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Comment securisez-vous les traversees a [VILLE] ?',
        'Quels marquages pour proteger les pietons a [VILLE] ?',
        'Comment delimitez-vous les zones pietonnes a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous utilisons des bandes blanches ou jaunes bien visibles, passages zebres et pictogrammes pietons.',
        'Nos marquages a [VILLE] incluent : bandes de delimitation, passages proteges, fleches directionnelles pour pietons.',
        'A [VILLE], nous securisons par des marquages contrastes, des passages zebres et des zones d\'attente delimitees.'
      ]
    },
    {
      questionVariants: [
        'Le marquage est-il accessible PMR a [VILLE] ?',
        'Respectez-vous les normes d\'accessibilite a [VILLE] ?',
        'Les zones pietonnes sont-elles PMR conformes a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] tous nos marquages respectent les normes d\'accessibilite PMR : largeurs, contrastes, bandes podotactiles.',
        'Absolument, nos zones pietonnes a [VILLE] sont conformes a la reglementation accessibilite. Audit possible.',
        'A [VILLE], nous integrons systematiquement les exigences PMR : passages adaptes, guidage au sol, contrastes.'
      ]
    },
    {
      questionVariants: [
        'Marquez-vous les parkings de supermarches a [VILLE] ?',
        'Faites-vous les zones pietonnes de centres commerciaux a [VILLE] ?',
        'Intervenez-vous sur les parkings clients a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous marquons les parkings de commerces : zones pietonnes, passages, chemins vers l\'entree.',
        'Absolument, les centres commerciaux de [VILLE] font appel a nous pour securiser leurs zones pietonnes.',
        'A [VILLE], nous securisons les parkings clients : allees pietons, traversees, zones d\'attente.'
      ]
    }
  ]
};

// Trame 11: Places handicapees PMR
export const tramePlacesPMR: ServiceTrame = {
  serviceSlug: 'places-handicapees-pmr',
  serviceName: 'Places Handicapees PMR',
  points: [
    'Dimensions reglementaires',
    'Pictogramme handicape',
    'Bandes d\'acces',
    'Proximite entrees',
    'Conformite ERP'
  ],
  introFormulations: [
    'Les places PMR a [VILLE] doivent respecter des normes strictes de dimensions et de signalisation.',
    'A [VILLE], nous realisons le marquage de places handicapees conformes a la reglementation en vigueur.',
    'Le marquage de places PMR a [VILLE] garantit l\'accessibilite de vos etablissements aux personnes handicapees.',
    'Specialistes des places handicapees a [VILLE], nous tracons des emplacements conformes et accessibles.',
    'Pour vos places PMR a [VILLE], faites appel a notre expertise pour un marquage reglementaire.'
  ],
  descriptionFormulations: [
    'Marquage de places PMR aux normes : dimensions 3.30m x 5m, pictogramme, bandes d\'acces. Conformite ERP garantie.',
    'Nous tracons vos places handicapees : emplacement elargi, pictogramme officiel, acces securise. Reglementation respectee.',
    'Notre equipe realise vos places PMR conformes : dimensions reglementaires, signalisation, bandes de guidage.',
    'Solutions de marquage PMR : places aux normes, pictogrammes, bandes podotactiles. Accessibilite assuree.',
    'Tracage professionnel de places handicapees : dimensions officielles, pictogramme bleu, acces degage.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Quelles sont les dimensions d\'une place PMR a [VILLE] ?',
        'Quelle taille pour une place handicapee a [VILLE] ?',
        'Combien mesure une place PMR reglementaire a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], une place PMR mesure 3.30m de large sur 5m de long minimum, avec une bande d\'acces de 0.80m.',
        'Les dimensions reglementaires a [VILLE] sont : 3.30m x 5m minimum, plus bande d\'acces laterale.',
        'A [VILLE], nous tracons les places PMR aux normes : 3.30m de largeur, 5m de longueur, acces 0.80m.'
      ]
    },
    {
      questionVariants: [
        'Combien de places PMR sont obligatoires a [VILLE] ?',
        'Quel nombre de places handicapees requis a [VILLE] ?',
        'Quelle proportion de places PMR a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], la reglementation impose 2% des places en PMR pour les ERP, avec un minimum de 1 place.',
        'Le nombre obligatoire a [VILLE] est de 2% du total des places, ou 1 place minimum pour les petits parkings.',
        'A [VILLE], comptez 2% de places PMR. Pour 50 places, il faut au minimum 1 place handicapee.'
      ]
    },
    {
      questionVariants: [
        'Fournissez-vous le pictogramme handicape a [VILLE] ?',
        'Le logo PMR est-il inclus dans le marquage a [VILLE] ?',
        'Tracez-vous le symbole handicape a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] le pictogramme handicape est inclus : tracage au pochoir, couleur bleue reglementaire.',
        'Absolument, nous tracons le logo PMR officiel a [VILLE]. Pochoir professionnel, peinture durable.',
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
    'Fleches directionnelles',
    'Interdictions',
    'Information',
    'Securite'
  ],
  introFormulations: [
    'La signalisation verticale complete le marquage au sol a [VILLE] pour guider efficacement les usagers.',
    'A [VILLE], nous installons panneaux et signalisation verticale pour vos parkings et voiries privees.',
    'La signalisation verticale a [VILLE] renforce la lisibilite de vos espaces de circulation et stationnement.',
    'Specialistes de la signalisation verticale a [VILLE], nous posons panneaux, fleches et pictogrammes.',
    'Pour une signalisation complete a [VILLE], associez marquage au sol et panneaux verticaux.'
  ],
  descriptionFormulations: [
    'Installation de signalisation verticale : panneaux directionnels, interdictions, information. Complement au marquage au sol.',
    'Nous posons votre signalisation verticale : fleches, panneaux parking, pictogrammes. Guidage complet des usagers.',
    'Notre equipe installe panneaux et signalisation : direction, interdiction, information. Fixation durable.',
    'Solutions de signalisation verticale : panneaux normalises, poteaux, supports. Installation professionnelle.',
    'Pose professionnelle de signalisation : panneaux parking, fleches, interdictions. Complement ideal du marquage.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Posez-vous les panneaux de parking a [VILLE] ?',
        'Installez-vous la signaletique de parking a [VILLE] ?',
        'Fournissez-vous les panneaux avec la pose a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous fournissons et posons tous types de panneaux de parking : direction, P, interdiction.',
        'Absolument, nous installons la signaletique complete a [VILLE]. Fourniture et pose incluses.',
        'A [VILLE], nous proposons panneaux et pose : parking, fleches, interdictions. Devis global.'
      ]
    },
    {
      questionVariants: [
        'Les panneaux sont-ils aux normes a [VILLE] ?',
        'Utilisez-vous des panneaux homologues a [VILLE] ?',
        'Vos panneaux sont-ils reglementaires a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] tous nos panneaux sont conformes aux normes NF et homologues pour voirie privee.',
        'Absolument, nous utilisons des panneaux certifies a [VILLE]. Qualite et conformite garanties.',
        'A [VILLE], nos panneaux respectent les specifications officielles. Retroreflechissants classe 1 ou 2.'
      ]
    },
    {
      questionVariants: [
        'Faites-vous les panneaux personnalises a [VILLE] ?',
        'Pouvez-vous creer des panneaux sur mesure a [VILLE] ?',
        'Proposez-vous des panneaux avec logo a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous realisons des panneaux personnalises : logo, texte specifique, dimensions sur mesure.',
        'Absolument, nous creons des panneaux sur mesure a [VILLE]. Integration de votre identite visuelle.',
        'A [VILLE], nous proposons des panneaux personnalises. Envoyez-nous votre logo pour un devis.'
      ]
    }
  ]
};

// Trame 13: Pose ralentisseur
export const tramePoseRalentisseur: ServiceTrame = {
  serviceSlug: 'pose-ralentisseur',
  serviceName: 'Pose Ralentisseur',
  points: [
    'Dos d\'ane',
    'Coussins berlinois',
    'Ralentisseurs modulaires',
    'Signalisation associee',
    'Normes de securite'
  ],
  introFormulations: [
    'Les ralentisseurs a [VILLE] securisent vos voiries privees en forcant la reduction de vitesse des vehicules.',
    'A [VILLE], nous installons ralentisseurs et dos d\'ane pour securiser vos parkings et voies de circulation.',
    'La pose de ralentisseurs a [VILLE] est essentielle pour la securite des pietons sur vos espaces prives.',
    'Specialistes de la pose de ralentisseurs a [VILLE], nous securisons vos voiries avec des equipements conformes.',
    'Pour ralentir la circulation a [VILLE], faites installer des ralentisseurs adaptes a vos besoins.'
  ],
  descriptionFormulations: [
    'Installation de ralentisseurs : dos d\'ane, coussins berlinois, modules caoutchouc. Securisation des voiries privees.',
    'Nous posons tous types de ralentisseurs : prefabriques ou en enrobe. Signalisation et marquage associes.',
    'Notre equipe installe vos ralentisseurs : choix du type, fixation, signalisation. Conformite aux normes.',
    'Solutions de ralentissement : dos d\'ane, coussins, bandes rugueuses. Pose professionnelle et durable.',
    'Pose professionnelle de ralentisseurs : selection adaptee, installation, marquage d\'approche. Securite garantie.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Quel type de ralentisseur pour mon parking a [VILLE] ?',
        'Dos d\'ane ou coussin berlinois a [VILLE] ?',
        'Quel ralentisseur choisir a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], le choix depend du trafic : dos d\'ane pour fort ralentissement, coussin berlinois pour les bus.',
        'Nous vous conseillons a [VILLE] selon votre usage. Visite gratuite pour determiner la solution adaptee.',
        'A [VILLE], nous etudions votre situation : trafic, vitesse souhaitee, passage de vehicules speciaux.'
      ]
    },
    {
      questionVariants: [
        'Les ralentisseurs sont-ils aux normes a [VILLE] ?',
        'Vos ralentisseurs sont-ils homologues a [VILLE] ?',
        'Respectez-vous la reglementation des ralentisseurs a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] tous nos ralentisseurs sont conformes aux normes NF P 98-300. Homologation garantie.',
        'Absolument, nous installons des ralentisseurs homologues a [VILLE]. Hauteur et dimensions reglementaires.',
        'A [VILLE], nos ralentisseurs respectent les normes : hauteur max 10cm pour dos d\'ane, signalisation obligatoire.'
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
        'Absolument, notre prestation a [VILLE] comprend ralentisseur, panneaux et marquage. Offre complete.',
        'A [VILLE], nous posons ralentisseur et signalisation associee. Conformite totale garantie.'
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
    'Places reservees',
    'Tarification'
  ],
  introFormulations: [
    'L\'installation de panneaux de parking a [VILLE] ameliore le guidage et l\'experience des usagers.',
    'A [VILLE], nous posons tous types de panneaux pour parkings : direction, information, interdiction.',
    'Les panneaux de parking a [VILLE] facilitent la circulation et l\'identification des places disponibles.',
    'Specialistes de la signaletique parking a [VILLE], nous installons panneaux et fleches directionnelles.',
    'Pour un parking bien signale a [VILLE], faites appel a notre expertise en pose de panneaux.'
  ],
  descriptionFormulations: [
    'Installation de panneaux parking : symbole P, fleches, niveaux, places reservees. Guidage efficace des usagers.',
    'Nous equipons vos parkings : panneaux directionnels, numerotation etages, signalisation places speciales.',
    'Notre equipe pose votre signaletique parking : panneaux normalises, supports robustes, fixation durable.',
    'Solutions de panneaux parking : direction, information, interdiction. Fourniture et pose professionnelle.',
    'Pose professionnelle de panneaux parking : fleches, P, PMR, niveaux. Signalisation complete et coherente.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Quels panneaux pour un parking souterrain a [VILLE] ?',
        'Quelle signaletique pour parking couvert a [VILLE] ?',
        'Comment signaler les niveaux de parking a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous conseillons : panneaux directionnels fleches, numerotation des niveaux, signalisation sorties.',
        'Pour un parking souterrain a [VILLE] : fleches lumineuses ou retroreflechissantes, numeros d\'etage, sorties.',
        'A [VILLE], nous installons la signaletique adaptee : fleches, niveaux, places libres. Etude sur site gratuite.'
      ]
    },
    {
      questionVariants: [
        'Fournissez-vous les poteaux avec les panneaux a [VILLE] ?',
        'Les supports sont-ils inclus a [VILLE] ?',
        'Posez-vous panneaux et poteaux a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous fournissons panneaux et supports : poteaux, platines murales, fixations. Prestation complete.',
        'Absolument, notre offre a [VILLE] inclut panneaux et poteaux. Scellement ou platine selon le support.',
        'A [VILLE], nous installons l\'ensemble : panneaux, poteaux, fixations. Devis global fourniture et pose.'
      ]
    },
    {
      questionVariants: [
        'Faites-vous les panneaux lumineux a [VILLE] ?',
        'Installez-vous des panneaux eclaires a [VILLE] ?',
        'Proposez-vous de la signaletique lumineuse a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous installons des panneaux lumineux : LED, retroeclaires, pour une visibilite optimale.',
        'Absolument, nous proposons des panneaux eclaires a [VILLE]. Ideal pour parkings souterrains.',
        'A [VILLE], nous fournissons signaletique lumineuse : panneaux LED, fleches eclairees. Devis sur demande.'
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
    'Securite pietons',
    'Visibilite amelioree'
  ],
  introFormulations: [
    'Les miroirs de circulation a [VILLE] eliminent les angles morts et securisent vos sorties de parking.',
    'A [VILLE], nous installons miroirs et convexes pour ameliorer la visibilite dans vos espaces de circulation.',
    'La pose de miroirs de circulation a [VILLE] previent les accidents aux intersections et sorties.',
    'Specialistes des miroirs routiers a [VILLE], nous securisons vos angles morts et points aveugles.',
    'Pour une meilleure visibilite a [VILLE], faites poser des miroirs de circulation adaptes.'
  ],
  descriptionFormulations: [
    'Installation de miroirs de circulation : angles morts, sorties parking, intersections. Securite renforcee.',
    'Nous posons miroirs convexes et panoramiques : visibilite des angles morts, prevention des collisions.',
    'Notre equipe installe vos miroirs : choix du diametre, positionnement optimal, fixation durable.',
    'Solutions de miroirs routiers : convexes, demi-spheres, grands angles. Pose professionnelle securisee.',
    'Pose professionnelle de miroirs : selection adaptee, installation sur poteau ou mur. Angles morts elimines.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Quel diametre de miroir pour mon parking a [VILLE] ?',
        'Quelle taille de miroir choisir a [VILLE] ?',
        'Comment determiner la taille du miroir a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], le diametre depend de la distance de vision : 40cm pour 5m, 60cm pour 10m, 80cm pour 15m.',
        'Nous vous conseillons a [VILLE] selon la configuration. Visite gratuite pour determiner la taille ideale.',
        'A [VILLE], nous calculons le diametre selon la distance et l\'angle a couvrir. Etude sur site gratuite.'
      ]
    },
    {
      questionVariants: [
        'Les miroirs resistent-ils aux intemperies a [VILLE] ?',
        'Vos miroirs sont-ils pour l\'exterieur a [VILLE] ?',
        'Quelle durabilite des miroirs a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nos miroirs sont en acrylique ou polycarbonate, resistants UV et intemperies. Garantie 5 ans.',
        'Absolument, nos miroirs sont concus pour l\'exterieur a [VILLE]. Anti-UV, incassables, durables.',
        'A [VILLE], nous installons des miroirs haute resistance. Materiaux incassables, pas de rouille, longue duree.'
      ]
    },
    {
      questionVariants: [
        'Posez-vous les miroirs en hauteur a [VILLE] ?',
        'Pouvez-vous fixer un miroir en angle mort a [VILLE] ?',
        'Installez-vous les miroirs sur poteau a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous fixons les miroirs : sur poteau, mur, plafond. Hauteur et angle optimises.',
        'Absolument, nous installons dans toutes les configurations a [VILLE]. Materiel d\'acces inclus.',
        'A [VILLE], nous posons sur tous supports : poteau dedie, existant, mur, plafond de parking.'
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
    'Acces controle',
    'Delimitation zones'
  ],
  introFormulations: [
    'Les bornes de parking a [VILLE] protegent vos places reservees et controlent les acces a vos espaces.',
    'A [VILLE], nous installons bornes et potelets pour securiser et delimiter vos zones de stationnement.',
    'L\'installation de bornes de parking a [VILLE] garantit le respect des places attribuees.',
    'Specialistes des bornes de parking a [VILLE], nous posons potelets fixes ou escamotables selon vos besoins.',
    'Pour proteger vos places a [VILLE], faites installer des bornes adaptees a votre configuration.'
  ],
  descriptionFormulations: [
    'Installation de bornes parking : potelets fixes, bornes escamotables, arceau velos. Protection des places.',
    'Nous posons vos bornes de protection : delimitation places reservees, controle d\'acces, securisation zones.',
    'Notre equipe installe bornes et potelets : scellement sol, systemes a cle ou automatiques. Durabilite garantie.',
    'Solutions de bornes parking : fixes, rabattables, escamotables. Adaptation a tous types de parkings.',
    'Pose professionnelle de bornes : protection places, delimitation zones, controle acces. Fixation durable.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Bornes fixes ou escamotables a [VILLE] ?',
        'Quel type de borne pour mon parking a [VILLE] ?',
        'Comment choisir entre borne fixe et rabattable a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], les bornes fixes conviennent pour protection permanente, les escamotables pour acces variable.',
        'Nous vous conseillons selon l\'usage a [VILLE]. Fixe pour delimitation, escamotable pour places attribuees.',
        'A [VILLE], le choix depend de votre besoin : protection permanente ou acces ponctuel. Etude gratuite.'
      ]
    },
    {
      questionVariants: [
        'Posez-vous des bornes avec cle a [VILLE] ?',
        'Installez-vous des bornes verrouillables a [VILLE] ?',
        'Avez-vous des bornes a serrure a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nous installons des bornes a cle : triangle standard, cle personnalisee ou pass general.',
        'Absolument, nos bornes escamotables a [VILLE] sont equipees de serrures. Plusieurs options de cles.',
        'A [VILLE], nous proposons bornes verrouillables : cle triangle, cadenas, ou serrure sur mesure.'
      ]
    },
    {
      questionVariants: [
        'Les bornes resistent-elles aux chocs a [VILLE] ?',
        'Vos bornes sont-elles solides a [VILLE] ?',
        'Quelle resistance des bornes a [VILLE] ?'
      ],
      answerVariants: [
        'Oui, a [VILLE] nos bornes sont en acier galvanise ou inox, resistantes aux chocs et a la corrosion.',
        'Absolument, nous installons des bornes robustes a [VILLE]. Acier epais, traitement anticorrosion.',
        'A [VILLE], nos bornes sont concues pour durer. Scellement beton, materiaux haute resistance.'
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
    'Securite vehicules',
    'Materiaux durables'
  ],
  introFormulations: [
    'Les butees de parking a [VILLE] delimitent les places et protegent les murs des impacts de pare-chocs.',
    'A [VILLE], nous installons butees et arrets de roue pour organiser le stationnement et proteger vos infrastructures.',
    'La pose de butees de parking a [VILLE] facilite le positionnement des vehicules et evite les degats.',
    'Specialistes des butees de parking a [VILLE], nous posons arrets de roue en beton, caoutchouc ou plastique.',
    'Pour delimiter vos places a [VILLE], faites poser des butees adaptees a votre type de parking.'
  ],
  descriptionFormulations: [
    'Installation de butees parking : arrets de roue, protection murs, delimitation places. Materiaux au choix.',
    'Nous posons vos butees de stationnement : beton, caoutchouc recycle, plastique. Fixation durable au sol.',
    'Notre equipe installe butees et arrets : positionnement optimal, fixation mecanique ou chimique.',
    'Solutions de butees parking : tous materiaux, toutes tailles. Adaptation a vos places et vehicules.',
    'Pose professionnelle de butees : delimitation places, protection infrastructures. Installation rapide.'
  ],
  faqTemplates: [
    {
      questionVariants: [
        'Quel materiau de butee choisir a [VILLE] ?',
        'Butee beton ou caoutchouc a [VILLE] ?',
        'Quelle butee pour mon parking a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], le beton est tres resistant, le caoutchouc plus souple et recyclable, le plastique leger et colore.',
        'Nous conseillons selon l\'usage a [VILLE] : beton pour l\'exterieur, caoutchouc pour parking couvert.',
        'A [VILLE], le choix depend du trafic et de l\'esthetique souhaitee. Visite conseil gratuite.'
      ]
    },
    {
      questionVariants: [
        'Comment fixez-vous les butees a [VILLE] ?',
        'Les butees sont-elles scellees a [VILLE] ?',
        'Quelle fixation pour les arrets de roue a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous fixons par chevillage mecanique ou scellement chimique selon le support. Tenue garantie.',
        'Nos butees sont solidement fixees a [VILLE]. Vis inox ou goujons selon le materiau du sol.',
        'A [VILLE], nous adaptons la fixation : chevilles beton, goujons enrobe, colle pour sols fragiles.'
      ]
    },
    {
      questionVariants: [
        'Quelle longueur de butee standard a [VILLE] ?',
        'Quelles dimensions de butees proposez-vous a [VILLE] ?',
        'Avez-vous des butees courtes a [VILLE] ?'
      ],
      answerVariants: [
        'A [VILLE], nous proposons des butees de 55cm a 180cm. Choix selon largeur des places et type de vehicules.',
        'Nos butees a [VILLE] vont de 55cm (motos) a 180cm (camions). Dimensions standards et sur mesure.',
        'A [VILLE], longueurs standard : 55cm, 90cm, 120cm, 180cm. Butees speciales sur demande.'
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
  trameMarquageZonesPietonnes,
  tramePlacesPMR,
  trameSignalisationVerticale,
  tramePoseRalentisseur,
  trameInstallationPanneauxParking,
  tramePoseMiroirCirculation,
  trameInstallationBornesParking,
  tramePoseButeesParking
];

// Fonction pour recuperer une trame par slug de service
export function getTrameByServiceSlug(serviceSlug: string): ServiceTrame | undefined {
  return allTrames.find(t => t.serviceSlug === serviceSlug);
}
