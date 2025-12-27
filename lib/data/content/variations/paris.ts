/**
 * Variations de contenu pour Paris (75)
 * 17 services x 1 ville = 17 variations
 */

import { ServiceLocationContent } from '../index';

export const parisVariations: ServiceLocationContent[] = [
  // 1. Marquage au sol parking - Paris
  {
    serviceSlug: 'marquage-au-sol-parking',
    locationSlug: 'paris',
    metaTitle: 'Marquage au Sol Parking Paris (75) | Devis Gratuit 24h',
    metaDescription: 'Entreprise de marquage au sol pour parkings a Paris. Tracage places, fleches, PMR. Intervention dans tous les arrondissements. Devis gratuit sous 24h.',
    content: {
      introduction: 'Paris compte des milliers de parkings souterrains et de surface necessitant un marquage professionnel. Notre entreprise intervient dans tous les arrondissements pour le tracage de vos places de stationnement, fleches de circulation et passages pietons.',
      localContext: 'Dans la capitale, les parkings souterrains des immeubles haussmanniens cotoient les grands parkings publics de Bercy, La Defense ou Montparnasse. Nous connaissons parfaitement les contraintes des parkings parisiens : espaces optimises, normes de securite strictes, intervention de nuit pour les sites actifs. Des Champs-Elysees au Marais, de Belleville a Passy, nous intervenons partout dans Paris.',
      serviceDescription: 'Notre equipe realise le marquage complet de vos parkings parisiens : delimitation des places numerotees, tracage des fleches directionnelles, passages pietons securises et zones interdites. Nous utilisons des peintures routieres certifiees, resistantes au trafic intense des parkings de la capitale. Places PMR conformes aux normes d\'accessibilite incluses.'
    },
    faqs: [
      {
        question: 'Dans quels arrondissements de Paris intervenez-vous ?',
        answer: 'Nous intervenons dans les 20 arrondissements de Paris, du 1er au 20e. Que votre parking soit dans le centre historique, les quartiers d\'affaires ou les arrondissements peripheriques, nous nous deplacons partout dans la capitale.'
      },
      {
        question: 'Pouvez-vous intervenir de nuit dans les parkings parisiens ?',
        answer: 'Oui, nous proposons des interventions nocturnes pour les parkings parisiens actifs en journee. C\'est souvent la solution ideale pour les parkings de bureaux ou de commerces qui ne peuvent fermer.'
      },
      {
        question: 'Quel est le delai d\'intervention a Paris ?',
        answer: 'A Paris, nous intervenons sous 24 a 48h pour la visite technique et le devis. Les travaux peuvent demarrer des la semaine suivante selon votre planning et les autorisations necessaires.'
      }
    ]
  },

  // 2. Marquage au sol parking prive - Paris
  {
    serviceSlug: 'marquage-au-sol-parking-prive',
    locationSlug: 'paris',
    metaTitle: 'Marquage Parking Prive Paris (75) | Coproprietes, Residences',
    metaDescription: 'Specialiste marquage de parkings prives a Paris. Coproprietes, residences, entreprises. Places numerotees, visiteurs, PMR. Devis gratuit.',
    content: {
      introduction: 'Les parkings prives parisiens, qu\'ils appartiennent a des coproprietes, residences ou entreprises, necessitent un marquage clair pour identifier chaque emplacement. Notre entreprise realise le tracage de vos places privatives dans tout Paris.',
      localContext: 'Paris regorge de parkings de coproprietes dans les immeubles des beaux quartiers comme le 16e ou le 7e arrondissement, mais aussi dans les residences plus recentes des 13e, 14e ou 19e. Les syndics parisiens nous font confiance pour le marquage nominatif des places, la creation de zones visiteurs et la mise en conformite PMR. Nous coordonnons avec les gardiens et adaptons nos horaires.',
      serviceDescription: 'Nous marquons vos parkings prives parisiens avec precision : numerotation des places par lot ou nom de proprietaire, zones visiteurs clairement identifiees, places PMR reglementaires. Nos peintures sont choisies pour resister au trafic des parkings de copropriete tout en offrant une finition soignee adaptee aux residences de standing.'
    },
    faqs: [
      {
        question: 'Travaillez-vous avec les syndics parisiens ?',
        answer: 'Oui, nous collaborons regulierement avec les syndics de copropriete a Paris. Nous etablissons des devis detailles pour les AG et coordonnons les travaux avec le conseil syndical.'
      },
      {
        question: 'Pouvez-vous inscrire les numeros de lot sur les places a Paris ?',
        answer: 'Absolument, nous realisons le marquage personnalise a Paris : numeros de lot, noms de famille, numeros d\'appartement. Technique au pochoir pour un rendu net et durable.'
      },
      {
        question: 'Quel delai pour un parking de copropriete parisienne ?',
        answer: 'Pour un parking de copropriete a Paris, comptez 1 a 3 jours selon le nombre de places. Nous pouvons echelonner sur plusieurs nuits pour minimiser la gene des residents.'
      }
    ]
  },

  // 3. Marquage au sol stationnement - Paris
  {
    serviceSlug: 'marquage-au-sol-stationnement',
    locationSlug: 'paris',
    metaTitle: 'Marquage Stationnement Paris (75) | Optimisation Places',
    metaDescription: 'Optimisez vos zones de stationnement a Paris. Tracage places, livraisons, minute. Gain de capacite jusqu\'a 15%. Devis gratuit sous 24h.',
    content: {
      introduction: 'L\'optimisation du stationnement est un enjeu majeur a Paris ou chaque metre carre compte. Notre expertise permet de maximiser le nombre de places tout en garantissant une circulation fluide et securisee.',
      localContext: 'A Paris, l\'espace de stationnement est precieux. Que ce soit pour les cours d\'immeubles du Marais, les parkings de surface du 15e arrondissement ou les espaces de livraison du quartier Sentier, chaque configuration demande une etude precise. Nous optimisons vos espaces parisiens en tenant compte des contraintes architecturales et des usages specifiques de chaque quartier.',
      serviceDescription: 'Notre service d\'optimisation du stationnement a Paris comprend : etude de votre espace, proposition de nouveau plan de marquage, gain de places evalue, tracage professionnel. Nous creons des zones minute, des emplacements livraison et des places visiteurs adaptees a vos besoins parisiens.'
    },
    faqs: [
      {
        question: 'Combien de places peut-on gagner avec un nouveau marquage a Paris ?',
        answer: 'A Paris, un retracage optimise permet generalement de gagner 10 a 15% de places supplementaires. Pour un parking de 50 places, cela represente 5 a 7 emplacements en plus. Etude gratuite.'
      },
      {
        question: 'Faites-vous les zones de livraison a Paris ?',
        answer: 'Oui, nous tracons les zones de livraison pour les commerces et entreprises parisiennes. Marquage conforme avec mention des horaires si necessaire.'
      },
      {
        question: 'Intervenez-vous sur les cours d\'immeubles parisiennes ?',
        answer: 'Absolument, les cours d\'immeubles haussmanniens sont notre specialite a Paris. Nous optimisons ces espaces souvent contraints tout en respectant l\'esthetique des lieux.'
      }
    ]
  },

  // 4. Marquage au sol parking entreprise - Paris
  {
    serviceSlug: 'marquage-au-sol-parking-entreprise',
    locationSlug: 'paris',
    metaTitle: 'Marquage Parking Entreprise Paris (75) | Direction, Visiteurs',
    metaDescription: 'Marquage professionnel de parkings d\'entreprise a Paris. Places direction, salaries, visiteurs. Logo entreprise possible. Devis gratuit.',
    content: {
      introduction: 'Le parking de votre entreprise parisienne est la premiere impression de vos visiteurs. Un marquage soigne et organise reflete le professionnalisme de votre societe. Nous intervenons pour toutes les entreprises de la capitale.',
      localContext: 'Paris accueille des milliers de sieges sociaux, des tours de La Defense aux immeubles de bureaux du 8e et 9e arrondissement. Les entreprises parisiennes ont des besoins specifiques : places direction a proximite des ascenseurs, zones visiteurs bien identifiees, stationnement salaries organise. Nous adaptons notre marquage a l\'image de marque de chaque entreprise.',
      serviceDescription: 'Notre equipe trace les parkings d\'entreprise parisiens avec professionnalisme : places nominatives direction, zones visiteurs accueillantes, parking salaries optimise. Sur demande, nous integrons votre logo et vos couleurs corporate. Intervention possible le week-end pour ne pas perturber votre activite.'
    },
    faqs: [
      {
        question: 'Pouvez-vous integrer notre logo dans le marquage a Paris ?',
        answer: 'Oui, nous reproduisons votre logo sur le sol de votre parking parisien. Pochoir sur mesure realise d\'apres votre fichier vectoriel pour un rendu fidele et professionnel.'
      },
      {
        question: 'Intervenez-vous le week-end dans les entreprises parisiennes ?',
        answer: 'Absolument, la majorite de nos interventions en entreprise a Paris se font le week-end. Nous pouvons egalement travailler de nuit en semaine selon vos contraintes.'
      },
      {
        question: 'Combien coute le marquage d\'un parking d\'entreprise a Paris ?',
        answer: 'Le tarif depend de la surface et des prestations. A Paris, comptez 15 a 35 euros par place pour un marquage standard, plus pour les personnalisations. Devis gratuit sur site.'
      }
    ]
  },

  // 5. Marquage au sol entrepot - Paris
  {
    serviceSlug: 'marquage-au-sol-entrepot',
    locationSlug: 'paris',
    metaTitle: 'Marquage Entrepot Paris (75) | Zones Stockage, Circulation',
    metaDescription: 'Marquage au sol d\'entrepots a Paris et proche couronne. Voies circulation, zones stockage, quais. Resines industrielles. Devis gratuit.',
    content: {
      introduction: 'Bien que Paris intra-muros compte peu d\'entrepots, la proche couronne et certains quartiers comme le 18e ou le 19e arrondissement accueillent encore des sites logistiques. Nous marquons ces espaces selon les normes de securite.',
      localContext: 'Les entrepots parisiens sont souvent d\'anciens sites industriels reconvertis, avec des contraintes specifiques : sols anciens, hauteurs limitees, acces parfois etroits. Dans le nord-est parisien, pres du canal de l\'Ourcq ou dans le secteur de la Chapelle, nous intervenons pour organiser ces espaces de stockage et de distribution du dernier kilometre.',
      serviceDescription: 'Nous tracons vos entrepots parisiens selon les normes de securite : voies de circulation pour chariots, zones de stockage codifiees par couleur, quais de chargement securises. Nos resines epoxy resistent au trafic intense des plateformes logistiques urbaines.'
    },
    faqs: [
      {
        question: 'Intervenez-vous dans les entrepots du nord de Paris ?',
        answer: 'Oui, nous intervenons frequemment dans les zones logistiques du 18e, 19e arrondissement et la proche couronne. Ces secteurs concentrent les entrepots de distribution urbaine.'
      },
      {
        question: 'Quelles couleurs pour le marquage d\'entrepot a Paris ?',
        answer: 'Nous appliquons le code couleur standard : jaune pour les voies de circulation, blanc pour les zones de stockage, rouge pour les zones dangereuses, vert pour la securite.'
      },
      {
        question: 'Pouvez-vous travailler sans interrompre l\'activite a Paris ?',
        answer: 'Oui, nous organisons le chantier par zones pour maintenir votre activite. Interventions de nuit possibles pour les plateformes logistiques fonctionnant en continu.'
      }
    ]
  },

  // 6. Marquage au sol industriel - Paris
  {
    serviceSlug: 'marquage-au-sol-industriel',
    locationSlug: 'paris',
    metaTitle: 'Marquage Industriel Paris (75) | Securite, Normes',
    metaDescription: 'Marquage au sol industriel a Paris et petite couronne. Zones machines, securite, evacuation. Conformite Code du travail. Devis gratuit.',
    content: {
      introduction: 'Les sites industriels parisiens et de proche couronne doivent respecter des normes strictes de securite. Notre expertise en marquage industriel garantit la conformite de vos installations et la protection de vos equipes.',
      localContext: 'Si l\'industrie lourde a quitte Paris, de nombreux ateliers et sites de production subsistent : imprimeries du 11e, ateliers du faubourg Saint-Antoine, laboratoires pharmaceutiques du 13e. Ces sites doivent respecter le Code du travail en matiere de marquage de securite. Nous connaissons les exigences des inspecteurs du travail parisiens.',
      serviceDescription: 'Notre marquage industriel a Paris comprend : delimitation des zones machines, voies de circulation pietons et engins, marquage des zones dangereuses, chemins d\'evacuation. Nous utilisons des peintures et resines conformes aux normes NF, resistantes aux produits industriels.'
    },
    faqs: [
      {
        question: 'Vos marquages sont-ils conformes aux audits de securite a Paris ?',
        answer: 'Oui, tous nos marquages respectent le Code du travail et les normes NF. Nous fournissons une attestation de conformite pour vos audits et inspections.'
      },
      {
        question: 'Marquez-vous les zones machines a Paris ?',
        answer: 'Absolument, la delimitation des zones machines est notre specialite. Marquage jaune et noir reglementaire, perimetres de securite, zones d\'intervention.'
      },
      {
        question: 'Quelle peinture pour les sols d\'atelier parisiens ?',
        answer: 'Nous utilisons des resines epoxy ou polyurethane resistantes aux huiles, solvants et produits chimiques. Duree de vie 5 a 10 ans selon le trafic.'
      }
    ]
  },

  // 7. Marquage au sol usine - Paris
  {
    serviceSlug: 'marquage-au-sol-usine',
    locationSlug: 'paris',
    metaTitle: 'Marquage Usine Paris (75) | Production, Securite HSE',
    metaDescription: 'Marquage au sol d\'usines a Paris et region parisienne. Lignes production, zones securite, conformite HSE. Intervention sans arret. Devis gratuit.',
    content: {
      introduction: 'Les usines de Paris et sa proche banlieue doivent maintenir un marquage au sol rigoureux pour la securite des operateurs et l\'efficacite de la production. Nous intervenons sur tous les sites industriels de la region.',
      localContext: 'La region parisienne conserve un tissu industriel diversifie : usines pharmaceutiques de Sanofi, sites de production agroalimentaire, ateliers de fabrication high-tech. Ces usines aux portes de Paris ont des exigences HSE strictes. Nous maitrisons parfaitement les normes de securite et les contraintes de production continue.',
      serviceDescription: 'Nous tracons vos usines selon les standards HSE : lignes de production delimitees, zones de stockage matieres identifiees, voies de circulation securisees, chemins d\'evacuation conformes. Intervention par zones pour maintenir la production.'
    },
    faqs: [
      {
        question: 'Pouvez-vous intervenir pendant la production a Paris ?',
        answer: 'Oui, nous travaillons par secteurs pour maintenir votre production. Coordination avec votre responsable HSE pour planifier les zones et les horaires d\'intervention.'
      },
      {
        question: 'Vos marquages passent-ils les audits HSE a Paris ?',
        answer: 'Absolument, nos marquages sont conformes aux exigences des audits HSE et des inspections du travail. Documentation et certificats fournis.'
      },
      {
        question: 'Marquez-vous les issues de secours a Paris ?',
        answer: 'Oui, le marquage d\'evacuation fait partie de nos prestations : fleches vertes, bandes photoluminescentes, zones de rassemblement. Conformite incendie assuree.'
      }
    ]
  },

  // 8. Marquage routier au sol - Paris
  {
    serviceSlug: 'marquage-routier-au-sol',
    locationSlug: 'paris',
    metaTitle: 'Marquage Routier Paris (75) | Passages Pietons, Signalisation',
    metaDescription: 'Signalisation horizontale a Paris. Passages pietons, stops, lignes. Voiries privees et parkings. Peintures homologuees. Devis gratuit.',
    content: {
      introduction: 'Le marquage routier a Paris assure la securite des usagers sur vos voiries privees, parkings et acces. Nous realisons la signalisation horizontale conforme aux normes routieres francaises.',
      localContext: 'Paris presente des configurations variees necessitant un marquage routier soigne : entrees de parking sur les grands boulevards, voies privees des coproprietes, acces des hopitaux et etablissements scolaires. La signalisation doit etre parfaitement visible pour les conducteurs parisiens habitues a une circulation dense.',
      serviceDescription: 'Notre equipe trace votre signalisation routiere a Paris : passages pietons reglementaires, lignes de rive, stops et cedez-le-passage, fleches directionnelles. Peintures routieres homologuees type 1 ou 2 selon l\'usage, resistantes au trafic parisien.'
    },
    faqs: [
      {
        question: 'Utilisez-vous des peintures homologuees a Paris ?',
        answer: 'Oui, exclusivement des peintures routieres certifiees NF et homologuees. Nous fournissons les certificats de conformite sur demande.'
      },
      {
        question: 'Faites-vous les passages pietons a Paris ?',
        answer: 'Absolument, les passages pietons sont notre specialite. Tracage aux dimensions reglementaires, bandes blanches normalisees, option avec bandes podotactiles.'
      },
      {
        question: 'Posez-vous les bandes podotactiles a Paris ?',
        answer: 'Oui, nous installons les bandes d\'eveil a la vigilance pour les personnes malvoyantes. Conformite accessibilite PMR garantie.'
      }
    ]
  },

  // 9. Marquage garage automobile - Paris
  {
    serviceSlug: 'marquage-garage-automobile',
    locationSlug: 'paris',
    metaTitle: 'Marquage Garage Auto Paris (75) | Atelier, Postes Travail',
    metaDescription: 'Marquage au sol pour garages automobiles a Paris. Zones atelier, ponts, stockage. Peintures resistantes huiles. Intervention dimanche possible.',
    content: {
      introduction: 'Les garages automobiles parisiens necessitent un marquage au sol organisant l\'atelier et securisant les mecaniciens. Nous intervenons dans les concessions, garages independants et centres auto de la capitale.',
      localContext: 'Paris compte de nombreux garages : concessions des grands boulevards, garages de quartier, centres auto en peripherie. Chaque garage a ses contraintes : espace limite, sols anciens, activite continue. Nous adaptons notre intervention aux horaires des garages parisiens, souvent le dimanche ou en soiree.',
      serviceDescription: 'Nous tracons vos garages parisiens : delimitation des postes de travail et emplacements de ponts, zones de stockage vehicules, circulation clients. Nos resines speciales resistent aux huiles, graisses et produits mecaniques.'
    },
    faqs: [
      {
        question: 'Vos peintures resistent-elles aux huiles de vidange a Paris ?',
        answer: 'Oui, nous utilisons des resines epoxy speciales garages, formulees pour resister aux hydrocarbures, huiles et graisses. Nettoyage facilite.'
      },
      {
        question: 'Pouvez-vous intervenir le dimanche dans les garages parisiens ?',
        answer: 'Absolument, nous intervenons le dimanche, jour de fermeture de la plupart des garages a Paris. Travaux termines pour la reouverture lundi.'
      },
      {
        question: 'Delimitez-vous les emplacements de ponts a Paris ?',
        answer: 'Oui, nous tracons les zones de chaque pont elevateur, les perimetres de securite et les voies de circulation dans l\'atelier.'
      }
    ]
  },

  // 10. Marquage zones pietonnes - Paris
  {
    serviceSlug: 'marquage-zones-pietonnes',
    locationSlug: 'paris',
    metaTitle: 'Marquage Zones Pietonnes Paris (75) | Securite, Accessibilite',
    metaDescription: 'Tracage de zones pietonnes a Paris. Chemins securises, traversees, separation vehicules. Conformite PMR. Devis gratuit sous 24h.',
    content: {
      introduction: 'La protection des pietons a Paris est primordiale dans vos espaces prives. Nous tracons des zones pietonnes clairement delimitees pour securiser la circulation des personnes.',
      localContext: 'A Paris, les flux pietons sont importants : parkings de centres commerciaux comme Beaugrenelle ou les Halles, cours d\'ecoles, hopitaux de l\'AP-HP, gares. Ces espaces necessitent une delimitation claire entre zones pietonnes et circulation vehicules. Nous securisons ces zones sensibles selon les normes d\'accessibilite.',
      serviceDescription: 'Notre marquage de zones pietonnes a Paris comprend : chemins dedies aux pietons, traversees securisees, separation claire avec les voies vehicules. Bandes de guidage, contrastes visuels et bandes podotactiles pour une accessibilite totale.'
    },
    faqs: [
      {
        question: 'Comment securisez-vous les traversees pietonnes a Paris ?',
        answer: 'Nous utilisons des bandes blanches bien visibles, des pictogrammes pietons et des bandes podotactiles pour les malvoyants. Marquage conforme aux normes de securite.'
      },
      {
        question: 'Le marquage est-il accessible PMR a Paris ?',
        answer: 'Oui, tous nos marquages de zones pietonnes respectent les normes d\'accessibilite PMR : largeurs, contrastes, bandes de guidage, absence d\'obstacles.'
      },
      {
        question: 'Intervenez-vous dans les ecoles parisiennes ?',
        answer: 'Oui, nous securisons les cours d\'ecoles et les acces d\'etablissements scolaires a Paris. Intervention pendant les vacances scolaires.'
      }
    ]
  },

  // 11. Places handicapees PMR - Paris
  {
    serviceSlug: 'places-handicapees-pmr',
    locationSlug: 'paris',
    metaTitle: 'Places PMR Paris (75) | Handicape, Conformite ERP',
    metaDescription: 'Marquage de places handicapees a Paris. Dimensions reglementaires, pictogramme officiel. Mise en conformite ERP. Devis gratuit.',
    content: {
      introduction: 'Les places PMR a Paris doivent respecter des normes strictes pour garantir l\'accessibilite des personnes handicapees. Nous realisons le marquage conforme de vos emplacements reserves.',
      localContext: 'Paris applique rigoureusement les normes d\'accessibilite dans ses ERP : commerces, bureaux, residences. Les places PMR doivent etre situees au plus pres des acces, avec les dimensions reglementaires. La Mairie de Paris et les commissions d\'accessibilite sont vigilantes sur ces points. Nous garantissons des marquages conformes.',
      serviceDescription: 'Nous tracons vos places PMR parisiennes aux normes : emplacement de 3.30m x 5m minimum, pictogramme handicape officiel, bande d\'acces de 0.80m. Marquage bleu reglementaire, signalisation verticale associee si necessaire.'
    },
    faqs: [
      {
        question: 'Quelles sont les dimensions d\'une place PMR a Paris ?',
        answer: 'A Paris comme partout en France, une place PMR mesure 3.30m de large sur 5m de long minimum, avec une bande d\'acces laterale de 0.80m.'
      },
      {
        question: 'Combien de places PMR sont obligatoires a Paris ?',
        answer: 'La reglementation impose 2% des places en PMR pour les ERP parisiens, avec un minimum d\'une place. Pour un parking de 50 places, il faut au moins 1 place PMR.'
      },
      {
        question: 'Le pictogramme est-il inclus dans votre prestation a Paris ?',
        answer: 'Oui, le pictogramme handicape fait partie de notre prestation standard. Tracage au pochoir professionnel, couleur bleue reglementaire.'
      }
    ]
  },

  // 12. Signalisation verticale - Paris
  {
    serviceSlug: 'signalisation-verticale',
    locationSlug: 'paris',
    metaTitle: 'Signalisation Verticale Paris (75) | Panneaux Parking',
    metaDescription: 'Installation de panneaux et signalisation verticale a Paris. Fleches, P, interdictions. Complement au marquage au sol. Devis gratuit.',
    content: {
      introduction: 'La signalisation verticale complete le marquage au sol pour guider efficacement les usagers de vos parkings et voiries privees parisiennes. Nous installons panneaux et supports.',
      localContext: 'Dans les parkings souterrains parisiens, la signalisation verticale est essentielle pour le guidage : fleches directionnelles, indication des niveaux, places disponibles. En surface, les panneaux d\'interdiction et de direction organisent la circulation. Nous connaissons les contraintes des parkings de la capitale.',
      serviceDescription: 'Nous installons votre signalisation verticale a Paris : panneaux directionnels avec fleches, symboles P, numerotation des niveaux, pictogrammes PMR. Supports robustes, fixation durable, retroreflechissants pour une visibilite optimale.'
    },
    faqs: [
      {
        question: 'Posez-vous les panneaux de parking a Paris ?',
        answer: 'Oui, nous fournissons et posons tous types de panneaux pour parkings parisiens : direction, P, niveaux, interdictions. Fourniture et pose incluses.'
      },
      {
        question: 'Les panneaux sont-ils aux normes a Paris ?',
        answer: 'Absolument, tous nos panneaux sont conformes aux normes NF. Retroreflechissants classe 1 ou 2 selon les besoins.'
      },
      {
        question: 'Faites-vous les panneaux lumineux pour parkings a Paris ?',
        answer: 'Oui, nous installons des panneaux lumineux LED pour les parkings souterrains parisiens. Ideal pour ameliorer la visibilite.'
      }
    ]
  },

  // 13. Pose ralentisseur - Paris
  {
    serviceSlug: 'pose-ralentisseur',
    locationSlug: 'paris',
    metaTitle: 'Pose Ralentisseur Paris (75) | Dos d\'Ane, Coussin Berlinois',
    metaDescription: 'Installation de ralentisseurs a Paris. Dos d\'ane, coussins berlinois homologues. Signalisation incluse. Voiries privees. Devis gratuit.',
    content: {
      introduction: 'Les ralentisseurs securisent la circulation sur vos voiries privees parisiennes en forcant la reduction de vitesse. Nous installons dos d\'ane et coussins berlinois homologues.',
      localContext: 'A Paris, les voiries privees de residences et d\'entreprises necessitent souvent des ralentisseurs pour proteger les pietons. Dans les parkings de surface, les ralentisseurs limitent la vitesse des vehicules. Nous choisissons le type de ralentisseur adapte a chaque configuration parisienne.',
      serviceDescription: 'Nous posons vos ralentisseurs a Paris : dos d\'ane en enrobe ou prefabriques, coussins berlinois, modules caoutchouc. Installation complete avec signalisation d\'approche obligatoire : panneaux et marquage au sol.'
    },
    faqs: [
      {
        question: 'Dos d\'ane ou coussin berlinois a Paris ?',
        answer: 'Le dos d\'ane ralentit tous les vehicules, le coussin berlinois permet le passage des bus. Nous vous conseillons selon votre configuration et le trafic.'
      },
      {
        question: 'Les ralentisseurs sont-ils aux normes a Paris ?',
        answer: 'Oui, tous nos ralentisseurs sont conformes a la norme NF P 98-300. Hauteur reglementaire, signalisation obligatoire incluse.'
      },
      {
        question: 'La signalisation est-elle incluse a Paris ?',
        answer: 'Oui, notre prestation inclut les panneaux d\'annonce du ralentisseur et le marquage au sol d\'approche. Conformite totale.'
      }
    ]
  },

  // 14. Installation panneaux parking - Paris
  {
    serviceSlug: 'installation-panneaux-parking',
    locationSlug: 'paris',
    metaTitle: 'Panneaux Parking Paris (75) | Direction, Niveaux, P',
    metaDescription: 'Pose de panneaux de parking a Paris. Fleches directionnelles, numerotation niveaux, symbole P. Fourniture et installation. Devis gratuit.',
    content: {
      introduction: 'L\'installation de panneaux ameliore le guidage dans vos parkings parisiens. Nous fournissons et posons une signaletique complete pour une experience usager optimale.',
      localContext: 'Les parkings parisiens, souvent sur plusieurs niveaux, necessitent une signaletique claire : fleches de direction, indication des niveaux, places disponibles. Dans les grands parkings comme ceux de Bercy ou Montparnasse, le guidage est essentiel. Nous equipons tous types de parkings dans la capitale.',
      serviceDescription: 'Nous installons vos panneaux de parking a Paris : fleches directionnelles, symboles P, numerotation des niveaux et zones, places PMR signalees. Supports muraux ou sur poteaux, fixation durable, materiaux retroreflechissants.'
    },
    faqs: [
      {
        question: 'Quels panneaux pour un parking souterrain a Paris ?',
        answer: 'Pour un parking souterrain parisien, nous conseillons : fleches directionnelles retroreflechissantes, numeros de niveaux, signalisation des sorties et places PMR.'
      },
      {
        question: 'Les supports sont-ils inclus a Paris ?',
        answer: 'Oui, notre prestation inclut panneaux et supports : poteaux, platines murales, fixations. Installation complete, pret a l\'emploi.'
      },
      {
        question: 'Proposez-vous des panneaux lumineux a Paris ?',
        answer: 'Oui, nous installons des panneaux LED et eclaires pour les parkings souterrains parisiens. Meilleure visibilite, consommation reduite.'
      }
    ]
  },

  // 15. Pose miroir circulation - Paris
  {
    serviceSlug: 'pose-miroir-circulation',
    locationSlug: 'paris',
    metaTitle: 'Miroir Circulation Paris (75) | Angles Morts, Sorties Parking',
    metaDescription: 'Installation de miroirs de circulation a Paris. Elimination des angles morts, securisation sorties. Miroirs convexes resistants. Devis gratuit.',
    content: {
      introduction: 'Les miroirs de circulation eliminent les angles morts dangereux dans vos parkings et voiries parisiennes. Nous installons des miroirs convexes adaptes a chaque configuration.',
      localContext: 'A Paris, les sorties de parking sur rue sont souvent a visibilite reduite. Les parkings souterrains presentent des angles morts aux intersections entre niveaux. Nos miroirs de circulation ameliorent la securite dans ces configurations typiquement parisiennes : sorties sur trottoir, virages a 90 degres, croisements etroits.',
      serviceDescription: 'Nous posons vos miroirs de circulation a Paris : miroirs convexes grand angle, diametres de 40 a 80cm selon la distance de vision. Installation sur poteau, mur ou plafond. Materiaux incassables et anti-UV.'
    },
    faqs: [
      {
        question: 'Quel diametre de miroir pour une sortie de parking a Paris ?',
        answer: 'Pour une sortie de parking parisienne, nous recommandons un miroir de 60 a 80cm de diametre selon la largeur de la voie et la distance de vision necessaire.'
      },
      {
        question: 'Les miroirs resistent-ils aux intemperies a Paris ?',
        answer: 'Oui, nos miroirs sont en acrylique ou polycarbonate, resistants UV et intemperies. Garantie 5 ans, adaptes au climat parisien.'
      },
      {
        question: 'Posez-vous les miroirs en plafond de parking a Paris ?',
        answer: 'Oui, nous installons des miroirs au plafond des parkings souterrains parisiens pour les angles morts aux intersections de niveaux.'
      }
    ]
  },

  // 16. Installation bornes parking - Paris
  {
    serviceSlug: 'installation-bornes-parking',
    locationSlug: 'paris',
    metaTitle: 'Bornes Parking Paris (75) | Protection Places, Escamotables',
    metaDescription: 'Pose de bornes de parking a Paris. Potelets fixes, bornes escamotables a cle. Protection des places reservees. Devis gratuit.',
    content: {
      introduction: 'Les bornes de parking protegent vos places reservees et controlent les acces dans les parkings parisiens. Nous installons potelets fixes et bornes escamotables.',
      localContext: 'A Paris, la pression sur le stationnement rend les bornes indispensables pour proteger les places attribuees. Dans les coproprietes du centre, les bornes escamotables protegent les places des residents. Les entreprises securisent les places direction. Nous installons tous types de bornes adaptees aux besoins parisiens.',
      serviceDescription: 'Nous posons vos bornes de parking a Paris : potelets fixes en acier galvanise, bornes escamotables a cle ou automatiques, arceaux velos. Scellement beton, finition soignee, systemes de verrouillage au choix.'
    },
    faqs: [
      {
        question: 'Bornes fixes ou escamotables a Paris ?',
        answer: 'Les bornes fixes conviennent pour la delimitation permanente, les escamotables pour les places attribuees. Nous vous conseillons selon votre usage.'
      },
      {
        question: 'Posez-vous des bornes a cle a Paris ?',
        answer: 'Oui, nous installons des bornes escamotables a cle : cle triangle standard ou cle personnalisee. Ideal pour les places privatives parisiennes.'
      },
      {
        question: 'Les bornes resistent-elles aux chocs a Paris ?',
        answer: 'Oui, nos bornes sont en acier galvanise ou inox, resistantes aux chocs et a la corrosion. Scellement beton pour une tenue optimale.'
      }
    ]
  },

  // 17. Pose butees parking - Paris
  {
    serviceSlug: 'pose-butees-parking',
    locationSlug: 'paris',
    metaTitle: 'Butees Parking Paris (75) | Arrets Roue, Protection Murs',
    metaDescription: 'Installation de butees de parking a Paris. Arrets de roue, protection murs. Beton, caoutchouc ou plastique. Devis gratuit.',
    content: {
      introduction: 'Les butees de parking delimitent vos places et protegent les murs des impacts de pare-chocs a Paris. Nous posons des arrets de roue adaptes a chaque configuration.',
      localContext: 'Dans les parkings parisiens, les butees sont essentielles : protection des murs anciens dans les immeubles haussmanniens, delimitation des places dans les parkings de copropriete, arrets de roue dans les parkings de commerce. Nous choisissons le materiau adapte a chaque situation.',
      serviceDescription: 'Nous installons vos butees de parking a Paris : beton pour l\'exterieur, caoutchouc recycle pour les parkings couverts, plastique colore pour une visibilite accrue. Fixation mecanique ou chimique selon le support.'
    },
    faqs: [
      {
        question: 'Quel materiau de butee pour mon parking parisien ?',
        answer: 'Le beton resiste bien en exterieur, le caoutchouc est ideal pour les parkings couverts, le plastique offre des couleurs vives. Nous vous conseillons selon votre usage.'
      },
      {
        question: 'Comment fixez-vous les butees a Paris ?',
        answer: 'Nous fixons par chevillage mecanique sur beton ou scellement chimique sur enrobe. Tenue garantie meme sous trafic intense.'
      },
      {
        question: 'Quelles dimensions de butees proposez-vous a Paris ?',
        answer: 'Nous proposons des butees de 55cm a 180cm de long selon la largeur des places et le type de vehicules. Dimensions standards et sur mesure.'
      }
    ]
  }
];
