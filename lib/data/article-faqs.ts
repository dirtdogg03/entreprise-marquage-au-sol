// FAQs pour tous les articles du blog
// Chaque article à 3-6 questions/réponses pour le composant FAQSection

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export const articleFaqs: Record<string, ArticleFAQ[]> = {
  // ========== ARTICLES PILIERS ==========

  'choisir-type-marquage': [
    {
      question: 'Quelle est la différence entre peinture, résine et thermoplastique ?',
      answer: 'La peinture est économique (1-3 ans), la résine offre une durée de vie supérieure (5-10 ans) avec une meilleure résistance chimique, et le thermoplastique est le plus durable (8-15 ans) idéal pour le trafic intense. Le choix dépend de votre budget, du trafic et des contraintes environnementales.'
    },
    {
      question: 'Quel type de marquage pour un parking extérieur ?',
      answer: 'Pour un parking extérieur, privilégiez le thermoplastique ou la peinture routière renforcée. Ces matériaux résistent aux UV, intempéries et au trafic véhicule. Comptez 5-8 ans de durée de vie minimum avec un entretien correct.'
    },
    {
      question: 'La résine époxy convient-elle pour l\'extérieur ?',
      answer: 'Non, la résine époxy standard jaunit et se dégrade aux UV. Pour l\'extérieur, optez pour une résine polyuréthane aliphatique ou un thermoplastique. L\'époxy reste idéale pour les environnements intérieurs (entrepôts, usines).'
    },
    {
      question: 'Combien coûte un marquage au sol professionnel ?',
      answer: 'Les prix varient selon le matériau : peinture (5-15 euros/m2), résine époxy (25-60 euros/m2), thermoplastique (20-45 euros/ml). Un parking de 50 places coûte entre 2 000 et 8 000 euros selon les matériaux choisis.'
    },
    {
      question: 'Peut-on appliquer un nouveau marquage sur l\'ancien ?',
      answer: 'Oui, si l\'ancien marquage est en bon état et bien adhérent. Un nettoyage haute pression et un léger ponçage suffisent. Si l\'ancien marquage s\'écaille, il faut le retirer complètement pour garantir l\'adhérence du nouveau.'
    }
  ],

  'reglementation-parking-2025': [
    {
      question: 'Quelles sont les dimensions réglementaires d\'une place de parking ?',
      answer: 'Une place standard mesure minimum 2,30 m de large x 5 m de long. Les places PMR doivent faire 3,30 m de large (place + bande latérale de 0,80 m). Les places en épi ou en bataille ont des dimensions spécifiques selon l\'angle.'
    },
    {
      question: 'Combien de places PMR sont obligatoires dans un parking ?',
      answer: 'La réglementation impose 2% des places en PMR avec un minimum de 1 place. Pour un parking de 50 places, vous devez avoir au minimum 1 place PMR. Ces places doivent être situées au plus près des entrées.'
    },
    {
      question: 'Le marquage au sol jaune est-il obligatoire pour les zones de stationnement interdit ?',
      answer: 'Oui, le marquage jaune en zigzag ou continu signale l\'interdiction de stationnement. Il doit être accompagné d\'une signalisation verticale (panneau). Sans ces deux éléments, l\'interdiction peut être contestée.'
    },
    {
      question: 'Quelles sanctions en cas de non-conformité du marquage parking ?',
      answer: 'L\'absence de places PMR conformes expose à des amendes de 1 500 à 5 000 euros. En cas d\'accident lié à un défaut de signalisation, la responsabilité civile et pénale du gestionnaire peut être engagée.'
    },
    {
      question: 'Faut-il un permis pour refaire le marquage d\'un parking privé ?',
      answer: 'Non, aucun permis n\'est requis pour un parking privé. Cependant, si le parking est ouvert au public (ERP), vous devez respecter les normes d\'accessibilité et de sécurité. Une déclaration préalable peut être nécessaire pour les gros travaux.'
    }
  ],

  'normes-securite-industriel': [
    {
      question: 'Quelles couleurs utiliser pour le marquage de sécurité en usine ?',
      answer: 'Selon la norme ISO 3864 : jaune/noir pour les dangers, rouge pour les interdictions et incendie, bleu pour les obligations, vert pour les issues de secours et premiers soins, blanc pour les voies de circulation.'
    },
    {
      question: 'Quelle largeur minimum pour les voies de circulation en entrepôt ?',
      answer: 'Les voies piétonnes doivent faire minimum 0,80 m (1,20 m recommandé). Les voies pour chariots élévateurs : largeur du véhicule + 1 m minimum. Les voies mixtes : 2 m minimum avec séparation claire.'
    },
    {
      question: 'Le marquage des zones dangereuses est-il obligatoire ?',
      answer: 'Oui, le Code du travail (article R4224-3) impose le balisage des zones de danger. Les zones à risques chimiques, électriques, mécaniques doivent être clairement délimitées par un marquage jaune/noir.'
    },
    {
      question: 'À quelle fréquence faut-il renouveler le marquage industriel ?',
      answer: 'Un contrôle visuel mensuel est recommandé. La rénovation dépend de l\'usure : tous les 2-3 ans pour zones à fort trafic, 5-7 ans pour zones moins sollicitées. Tout marquage effacé à plus de 50% doit être renouvelé immédiatement.'
    },
    {
      question: 'Qui est responsable du marquage de sécurité dans une entreprise ?',
      answer: 'L\'employeur est légalement responsable (Code du travail). Il peut déléguer la gestion au responsable HSE ou maintenance, mais reste juridiquement responsable en cas de manquement. Un contrat d\'entretien avec un prestataire spécialisé est recommandé.'
    }
  ],

  'prix-marquage-guide': [
    {
      question: 'Quel budget prévoir pour le marquage d\'un parking de 30 places ?',
      answer: 'Comptez entre 1 500 et 5 000 euros selon le matériau. Peinture standard : 1 500-2 500 euros. Peinture renforcée : 2 500-3 500 euros. Thermoplastique : 3 500-5 000 euros. Ajoutez 500-1 000 euros si préparation du sol nécessaire.'
    },
    {
      question: 'Pourquoi les devis de marquage varient-ils autant ?',
      answer: 'Les écarts s\'expliquent par : la qualité des matériaux (peinture basique vs premium), la préparation du sol incluse ou non, les garanties offertes, l\'expérience du prestataire, et la région (Paris +20-30% vs province).'
    },
    {
      question: 'Le marquage au sol est-il déductible fiscalement ?',
      answer: 'Oui, le marquage au sol est une charge d\'exploitation déductible du résultat fiscal. Pour les investissements importants (>500 euros HT), vous pouvez l\'amortir sur 5-10 ans. Consultez votre comptable pour optimiser.'
    },
    {
      question: 'Vaut-il mieux payer plus cher pour une durée de vie plus longue ?',
      answer: 'Généralement oui. Un thermoplastique à 4 000 euros durant 10 ans revient moins cher qu\'une peinture à 1 500 euros renouvelée 4 fois (6 000 euros). Analysez le coût total sur 10-15 ans, pas le prix initial.'
    },
    {
      question: 'Les devis de marquage sont-ils négociables ?',
      answer: 'Oui, surtout pour les grandes surfaces (>500 m2). Vous pouvez négocier 10-15% sur les matériaux et la main d\'œuvre. Regroupez plusieurs zones ou bâtiments pour obtenir un tarif dégressif. Évitez de négocier la qualité des matériaux.'
    }
  ],

  'entretien-duree-vie': [
    {
      question: 'Comment nettoyer un marquage au sol sans l\'abîmer ?',
      answer: 'Utilisez un nettoyeur haute pression (max 150 bars) avec de l\'eau claire ou un détergent neutre. Évitez les produits acides ou chlorés qui attaquent la peinture. Nettoyez régulièrement pour éviter l\'incrustation des salissures.'
    },
    {
      question: 'Quand faut-il refaire un marquage au sol ?',
      answer: 'Renouvelez quand le marquage est effacé à plus de 50%, quand les couleurs sont ternies au point de ne plus être reconnaissables, ou quand des écaillages apparaissent. Un contrôle annuel permet d\'anticiper les travaux.'
    },
    {
      question: 'Les taches d\'huile abîment-elles le marquage ?',
      answer: 'Oui, l\'huile pénètre et décolle la peinture standard. Nettoyez immédiatement avec un absorbant puis un dégraissant. Pour les zones à risque (garages, ateliers), optez pour une résine époxy résistante aux hydrocarbures.'
    },
    {
      question: 'Peut-on réparer localement un marquage abîmé ?',
      answer: 'Oui, les retouches ponctuelles sont possibles et économiques. Nettoyez la zone, poncez légèrement, et appliquez la même peinture. Cependant, si plus de 30% du marquage est touché, une réfection complète est plus rentable.'
    },
    {
      question: 'Le sel de déneigement abîme-t-il le marquage ?',
      answer: 'Le sel accélère l\'usure mais n\'est pas le principal ennemi. Le vrai problème est le gel-dégel répété qui fait éclater la peinture. Utilisez du thermoplastique ou une peinture routière certifiée pour les zones exposées au gel.'
    }
  ],

  'places-pmr-obligations': [
    {
      question: 'Quelles sont les dimensions exactes d\'une place PMR ?',
      answer: 'Une place PMR fait 3,30 m de large minimum (2,50 m pour le véhicule + 0,80 m pour la bande d\'accès latérale). La longueur est de 5 m minimum. La bande latérale peut être partagée entre deux places PMR.'
    },
    {
      question: 'À quelle distance de l\'entrée doit être la place PMR ?',
      answer: 'La réglementation impose le trajet le plus court et le plus praticable jusqu\'à l\'entrée. En pratique, les places PMR doivent être les plus proches de l\'entrée accessible, avec un cheminement sans obstacle de plus de 2 cm.'
    },
    {
      question: 'Le pictogramme handicapé au sol est-il obligatoire ?',
      answer: 'Oui, le pictogramme bleu/blanc (fauteuil roulant) est obligatoire au sol ET sur un panneau vertical. Les dimensions minimales du pictogramme au sol sont de 0,50 m x 0,60 m. Il doit être visible et lisible.'
    },
    {
      question: 'Peut-on avoir une place PMR sur un terrain en pente ?',
      answer: 'Oui, mais la pente ne doit pas excéder 2% dans le sens de la largeur et 5% dans le sens de la longueur. Au-delà, la place n\'est pas conforme et peut être contestée. Prévoyez un sol antidérapant.'
    },
    {
      question: 'Qui contrôle la conformité des places PMR ?',
      answer: 'Les commissions de sécurité pour les ERP, l\'inspection du travail pour les entreprises, et toute personne handicapée peut signaler un manquement. Les associations de défense des droits des personnes handicapées effectuent aussi des contrôles.'
    }
  ],

  'marquage-entrepot-bonnes-pratiques': [
    {
      question: 'Comment organiser les zones de stockage par marquage au sol ?',
      answer: 'Utilisez des couleurs distinctes : blanc pour les zones de stockage standard, jaune pour les zones temporaires, vert pour les zones d\'expédition, rouge pour les zones de rebuts/quarantaine. Numérotez chaque emplacement pour faciliter la gestion.'
    },
    {
      question: 'Quelle largeur pour les allées de circulation en entrepôt ?',
      answer: 'Allées piétonnes : 1,20 m minimum. Allées pour transpalettes : 2 m minimum. Allées pour chariots élévateurs : largeur du chariot + 1 m de chaque côté. Allées principales : 3-4 m pour le croisement.'
    },
    {
      question: 'Le marquage 5S est-il obligatoire ?',
      answer: 'Non, le marquage 5S n\'est pas une obligation légale mais une bonne pratique d\'organisation. Cependant, la norme ISO impose un marquage de sécurité clair. Le 5S (silhouettes d\'outils, zones définies) améliore la productivité de 15-25%.'
    },
    {
      question: 'Comment marquer les zones de chargement/déchargement ?',
      answer: 'Délimitez les quais par des bandes jaunes/noires (danger). Marquez les zones d\'attente des camions, les aires de manœuvre, et les passages piétons sécurisés. Ajoutez des butées de roues et des miroirs aux angles morts.'
    },
    {
      question: 'Quel marquage pour les zones ATEX (atmosphères explosives) ?',
      answer: 'Les zones ATEX nécessitent un marquage spécifique : triangle jaune avec EX, délimitation au sol de la zone concernée, et signalisation des équipements autorisés. Utilisez des peintures antistatiques et conformes ATEX.'
    }
  ],

  'signalisation-horizontale-verticale': [
    {
      question: 'Quelle est la différence entre signalisation horizontale et verticale ?',
      answer: 'La signalisation horizontale est au sol (lignes, flèches, pictogrammes). La signalisation verticale est en hauteur (panneaux, feux). Les deux sont complémentaires : l\'horizontale guide au quotidien, la verticale alerte et informe à distance.'
    },
    {
      question: 'Peut-on avoir du marquage au sol sans panneau ?',
      answer: 'Pour les informations réglementaires (interdictions, obligations), les deux sont nécessaires. Un marquage seul n\'a pas de valeur juridique pour une interdiction. Pour l\'organisation interne (zones, flèches), le marquage seul suffit.'
    },
    {
      question: 'Quelle signalisation privilégier en entrepôt ?',
      answer: 'Privilégiez le marquage au sol (signalisation horizontale) car il reste visible même avec des rayonnages hauts. Complétez par des panneaux suspendus aux intersections et des miroirs aux angles morts.'
    },
    {
      question: 'La signalisation au sol doit-elle être réfléchissante ?',
      answer: 'Pour l\'extérieur et les zones peu éclairées, oui. Les billes de verre intégrées à la peinture ou au thermoplastique assurent la rétroréflexion. En intérieur bien éclairé, ce n\'est pas obligatoire mais recommandé pour les passages piétons.'
    },
    {
      question: 'Qui est habilité à poser la signalisation réglementaire ?',
      answer: 'Sur voie publique, seules les entreprises agréées peuvent intervenir. Sur voie privée ouverte au public, un prestataire qualifié suffit. Sur site privé fermé, vous pouvez intervenir vous-même en respectant les normes en vigueur.'
    }
  ],

  'marquage-exterieur-materiaux': [
    {
      question: 'Quel matériau résiste le mieux aux intempéries ?',
      answer: 'Le thermoplastique est le plus résistant : 8-15 ans en extérieur. Ensuite la peinture polyuréthane aliphatique (5-8 ans) puis la peinture acrylique routière (3-5 ans). Évitez l\'époxy standard qui jaunit aux UV.'
    },
    {
      question: 'Peut-on appliquer du marquage sur sol mouillé ?',
      answer: 'Non, le sol doit être parfaitement sec pour une bonne adhérence. Attendez 24-48h après une pluie. La température doit être supérieure à 8°C et l\'humidité relative inférieure à 85%. Vérifiez les prévisions météo avant intervention.'
    },
    {
      question: 'Le marquage sur béton est-il différent de celui sur enrobé ?',
      answer: 'Oui, le béton nécessite un primaire d\'accrochage spécifique car il est plus lisse. L\'enrobé (asphalte) offre une meilleure accroche naturelle. Sur béton neuf, attendez 28 jours de séchage avant application.'
    },
    {
      question: 'Comment protéger le marquage du trafic poids lourds ?',
      answer: 'Optez pour du thermoplastique de 3-4 mm d\'épaisseur ou une résine polyuréthane haute résistance. Évitez les virages serrés qui créent une usure prématurée. Prévoyez un budget maintenance de 10-15% par an.'
    },
    {
      question: 'Les marquages anti-UV existent-ils ?',
      answer: 'Oui, les peintures polyuréthane aliphatiques et les thermoplastiques de qualité intègrent des stabilisants UV. Ils coûtent 20-30% plus cher mais durent 2-3 fois plus longtemps. Indispensables pour les parkings exposés plein sud.'
    }
  ],

  'cas-client-parking': [
    {
      question: 'Combien de temps dure la réalisation d\'un marquage parking complet ?',
      answer: 'Pour un parking de 100-200 places : 2-4 jours de travaux. Comptez 1 jour de préparation (nettoyage, traçage), 2-3 jours d\'application, et 24-48h de séchage avant remise en service. Les travaux de nuit sont possibles.'
    },
    {
      question: 'Faut-il fermer le parking pendant les travaux ?',
      answer: 'Idéalement oui, pour un résultat optimal. Sinon, travaillez par zones avec une rotation (fermer 30-50% à la fois). Prévoyez une signalisation temporaire et informez les usagers à l\'avance. Les travaux de nuit minimisent la gêne.'
    },
    {
      question: 'Peut-on personnaliser les couleurs du marquage ?',
      answer: 'Oui, pour les éléments non réglementaires (numérotation, logos, flèches directionnelles). Les éléments réglementaires (places PMR, passages piétons, interdictions) doivent respecter les couleurs normalisées.'
    },
    {
      question: 'Comment numéroter les places de parking efficacement ?',
      answer: 'Utilisez un système logique : lettre pour la zone (A, B, C) + numéro séquentiel (01, 02...). Les numéros doivent faire minimum 30 cm de haut pour être lisibles depuis un véhicule. Placez-les en tête de place, pas au centre.'
    },
    {
      question: 'Quel gain d\'espace attendre après un remarquage optimisé ?',
      answer: 'Un remarquage optimisé peut gagner 10-15% de places en ajustant les dimensions et l\'orientation (épi vs bataille). Sur un parking de 100 places, cela représente 10-15 places supplémentaires, soit un ROI rapide sur l\'investissement.'
    }
  ],

  // ========== ARTICLES AVEC FAQs EXISTANTES (EXTRAITES) ==========

  'epoxy-vs-polyurethane': [
    {
      question: 'Peut-on appliquer du polyuréthane sur de l\'époxy existant ?',
      answer: 'Oui, mais une préparation adéquate est indispensable. Il faut décaper légèrement l\'époxy existant (ponçage doux) pour assurer l\'adhérence du polyuréthane. Inversement, l\'application d\'époxy sur polyuréthane est plus délicate et déconseillée.'
    },
    {
      question: 'Quel est le coût total d\'un revêtement sol industriel ?',
      answer: 'Le coût varie entre 25 et 80 euros par m2 (fournitures + application) selon le type de revêtement, la préparation requise et la région. L\'époxy coûte généralement moins cher (25-50 euros/m2) que le polyuréthane (40-80 euros/m2).'
    },
    {
      question: 'Comment entretenir une peinture époxy sol ou polyuréthane ?',
      answer: 'Nettoyage régulier avec un savon neutre et de l\'eau tiède suffit. Éviter les produits trop agressifs. Un renouvellement de vernis protecteur peut être utile tous les 3-5 ans pour maintenir l\'éclat.'
    },
    {
      question: 'Est-il possible d\'appliquer soi-même une peinture sol garage ?',
      answer: 'Techniquement possible pour des petites surfaces, mais fortement déconseillé. Une application professionnelle garantit un rendu durable et uniforme. Les erreurs de préparation ou d\'application peuvent compromettre l\'ensemble du projet.'
    },
    {
      question: 'Quelle est la meilleure résine sol pour un environnement alimentaire ?',
      answer: 'L\'époxy offre une meilleure résistance chimique pour les environnements agroalimentaires, mais doit respecter les normes alimentaires. Le polyuréthane peut également convenir s\'il bénéficie de certifications spécifiques. Consulter un expert avant de décider.'
    }
  ],

  'resine-sol-avantages': [
    {
      question: 'Quelle est la durée de vie d\'une résine de sol ?',
      answer: 'Une résine de sol bien appliquée dure 10 à 20 ans en fonction du trafic et de l\'entretien. L\'époxy dure 10-15 ans en intérieur, le polyuréthane 15-20 ans. La durée dépend de la préparation du support et de la qualité d\'application.'
    },
    {
      question: 'La résine de sol convient-elle pour une cuisine professionnelle ?',
      answer: 'Oui, les résines époxy et polyuréthane sont idéales pour les cuisines professionnelles. Elles sont imperméables, faciles à nettoyer et résistantes aux produits chimiques. Choisissez une finition antidérapante (R10-R11) pour la sécurité.'
    },
    {
      question: 'Peut-on appliquer une résine sur un carrelage existant ?',
      answer: 'Oui, avec une préparation adaptée : ponçage du carrelage, rebouchage des joints, primaire d\'accrochage spécifique. Le résultat sera durable si le carrelage est bien adhérent. Déconseillé si le carrelage se décolle.'
    },
    {
      question: 'Quel est le temps de séchage d\'une résine époxy ?',
      answer: 'Séchage au toucher : 12-24h. Circulation piétonne légère : 24-48h. Circulation normale : 72h. Durcissement complet : 7 jours. Ces délais varient selon la température (plus long en dessous de 15°C) et l\'humidité.'
    },
    {
      question: 'La résine de sol est-elle glissante ?',
      answer: 'Une résine lisse peut être glissante, surtout mouillée. Pour les zones à risque, ajoutez des granulés antidérapants dans la couche de finition ou optez pour une finition texturée. Les normes R9 à R13 classent l\'antidérapance.'
    }
  ],

  'thermoplastique-marquage': [
    {
      question: 'Quelle est la fréquence de renouvellement d\'un marquage parking ?',
      answer: 'Cela dépend du type de peinture et de l\'intensité du trafic. La peinture standard dure 18 à 36 mois, la thermoplastique 5 à 7 ans, et les résines 8 à 10 ans. Un parking de centre commercial très fréquenté nécessitera des retouches tous les 12 à 18 mois.'
    },
    {
      question: 'Combien de places handicapées parking dois-je installer ?',
      answer: 'Le nombre est réglementé : 1 place pour 1-25 places totales, 2 places pour 26-50, etc. Ces places doivent être situées au plus proche des accès et disposer d\'une bande de circulation latérale de 1,30 m minimum.'
    },
    {
      question: 'Une flèche directionnelle est-elle obligatoire ?',
      answer: 'Techniquement non, mais fortement recommandée. Si vous avez des voies à sens unique, les flèches directionnelles sont essentielles pour la sécurité et la conformité. Elles réduisent les erreurs de sens et les accidents.'
    },
    {
      question: 'Puis-je utiliser d\'autres couleurs que le blanc pour le marquage ?',
      answer: 'Oui, avec des restrictions. Le blanc est la norme pour le marquage au sol standard. Le jaune ou des couleurs contrastées peuvent signaler des zones particulières (interdiction de stationnement, zones de danger). Consultez les normes NF P91-100 pour les spécifications exactes.'
    }
  ],

  'parking-centre-commercial': [
    {
      question: 'Comment optimiser la circulation dans un parking de centre commercial ?',
      answer: 'Utilisez des flèches directionnelles claires, des sens uniques dans les allées étroites, des couleurs différentes par niveau/zone, et un marquage au sol lumineux aux intersections. Prévoyez des allées principales larges (6 m) pour fluidifier le trafic.'
    },
    {
      question: 'Combien de places PMR pour un centre commercial ?',
      answer: 'Minimum 2% des places avec 1 place minimum. Pour un parking de 500 places, prévoyez au moins 10 places PMR. Elles doivent être réparties près de chaque entrée accessible, pas regroupées à un seul endroit.'
    },
    {
      question: 'Faut-il un marquage spécifique pour les places familles ?',
      answer: 'Il n\'y a pas d\'obligation légale pour les places familles. Cependant, elles améliorent l\'expérience client. Marquez-les avec un pictogramme distinctif et situez-les près des entrées, à côté des places PMR.'
    },
    {
      question: 'Comment gérer les places VE (véhicules électriques) ?',
      answer: 'Les places VE doivent être identifiées par un pictogramme vert au sol et un panneau. Prévoyez 5-10% des places avec l\'infrastructure de recharge. La réglementation évolue vers 20% minimum pour les nouveaux parkings.'
    },
    {
      question: 'Quel budget pour le marquage d\'un parking de 300 places ?',
      answer: 'Comptez 15 000 à 40 000 euros selon le matériau choisi. Peinture standard : 15 000-20 000 euros. Peinture renforcée : 20 000-30 000 euros. Thermoplastique : 30 000-40 000 euros. Incluez 3 000-5 000 euros pour les pictogrammes et signalisation.'
    }
  ],

  'marquage-usine-atelier': [
    {
      question: 'Quelles sont les couleurs standard pour le marquage industriel ?',
      answer: 'Selon ISO 3864 : jaune pour les dangers et attention, blanc pour les voies de circulation, rouge pour les interdictions et incendie, bleu pour les obligations, vert pour les issues de secours. Les rayures jaune/noir signalent les obstacles.'
    },
    {
      question: 'Comment marquer les emplacements machines (5S) ?',
      answer: 'Tracez le contour au sol avec de la peinture ou du ruban adhésif. Utilisez des silhouettes pour les outils et accessoires. Les couleurs : blanc pour l\'emplacement, jaune pour les zones de mouvement, rouge pour les zones interdites.'
    },
    {
      question: 'Quelle fréquence de contrôle du marquage en usine ?',
      answer: 'Inspection visuelle mensuelle, contrôle approfondi trimestriel, audit annuel complet. Tout marquage effacé à plus de 30% dans une zone de sécurité doit être renouvelé immédiatement. Documentez chaque contrôle.'
    },
    {
      question: 'Le marquage au sol suffit-il pour la conformité ICPE ?',
      answer: 'Non, le marquage est une composante parmi d\'autres. Les ICPE (Installations Classées) nécessitent également : signalisation verticale, plans d\'évacuation, formation du personnel, registres de sécurité. Le marquage renforce la prévention.'
    },
    {
      question: 'Comment intégrer le marquage au sol dans une démarche Lean ?',
      answer: 'Le marquage 5S est la base du Lean : chaque chose à sa place, visualisation immédiate des anomalies. Utilisez des codes couleur cohérents, des zones définies pour les en-cours, des allées dégagées. Mesurez les temps de déplacement avant/après.'
    }
  ],

  'voirie-privee': [
    {
      question: 'Le Code de la route s\'applique-t-il sur voirie privée ?',
      answer: 'Partiellement. Sur voie privée ouverte à la circulation publique, le Code de la route s\'applique. Sur voie privée fermée (site industriel clôturé), seules les règles de sécurité au travail s\'appliquent. La signalisation reste recommandée dans les deux cas.'
    },
    {
      question: 'Peut-on mettre des ralentisseurs sur voirie privée ?',
      answer: 'Oui, sans autorisation pour une voirie privée fermée. Pour une voirie privée ouverte au public, les ralentisseurs doivent respecter les normes (hauteur max 10 cm, signalisation). Prévoyez un marquage au sol jaune/noir en amont.'
    },
    {
      question: 'Qui est responsable en cas d\'accident sur voirie privée ?',
      answer: 'Le propriétaire ou gestionnaire de la voirie est responsable si l\'accident résulte d\'un défaut d\'entretien ou de signalisation. D\'où l\'importance d\'un marquage au sol conforme et bien entretenu, même sur voirie privée.'
    },
    {
      question: 'Faut-il un arrêté pour limiter la vitesse sur voirie privée ?',
      answer: 'Non pour une voirie privée fermée : la limitation de vitesse relève du règlement intérieur. Pour une voirie privée ouverte au public, un arrêté municipal peut être nécessaire pour la rendre opposable.'
    },
    {
      question: 'Comment marquer un passage piéton sur voirie privée ?',
      answer: 'Utilisez les mêmes standards qu\'en voirie publique : bandes blanches de 50 cm de large, espacées de 50 cm, sur 2,50-4 m de largeur. Complétez par des panneaux C20a si la voirie est ouverte au public.'
    }
  ],

  'code-couleur-marquage': [
    {
      question: 'Puis-je utiliser d\'autres couleurs que celles normalisées ?',
      answer: 'Non, le code couleur marquage au sol est normatif (ISO 1942, NF X 08-003). Utiliser d\'autres couleurs peut créer une confusion dangereuse et viole les obligations légales. Vous pouvez utiliser des combinaisons (rayures, chevrons) pour adapter le message, mais les cinq couleurs principales doivent correspondre à la norme.'
    },
    {
      question: 'Quelle est la durée de vie d\'un marquage au sol normalisé ?',
      answer: 'Elle dépend du système choisi. Les peintures polyuréthane durent 3 à 5 ans en environnement standard. Les bandes adhésives haute performance durent 2 à 3 ans. Dans les zones très usées (forte circulation, chocs mécaniques), la durée peut être réduite de moitié.'
    },
    {
      question: 'Quel est le coût approximatif d\'un marquage au sol professionnel ?',
      answer: 'Le coût varie selon la surface, le système choisi et la complexité. En moyenne, comptez 15 à 50 euros par mètre linéaire pour un marquage en bandes adhésives, et 5 à 15 euros par mètre linéaire pour une peinture. Un petit entrepôt de 500 m² peut coûter entre 2 500 et 10 000 euros pour un marquage complet.'
    },
    {
      question: 'Un collaborateur peut-il contester un marquage au sol qui lui semble incorrect ?',
      answer: 'Oui, et c\'est même recommandé. Tout collaborateur ayant une inquiétude sur la clarté ou la correction d\'un marquage peut la signaler au responsable HSE ou au manager. Une signification couleur marquage ambiguë ou un marquage endommagé crée un risque. C\'est une culture de sécurité positive.'
    }
  ],

  'non-conformite-sanctions': [
    {
      question: 'Quelles amendes en cas de marquage parking non conforme ?',
      answer: 'L\'absence de places PMR conformes expose à des amendes de 1 500 à 5 000 euros par place manquante. Le défaut de signalisation de sécurité : 3 750 euros par infraction. En cas de récidive, les montants peuvent être doublés.'
    },
    {
      question: 'Qui effectue les contrôles de conformité du marquage ?',
      answer: 'L\'inspection du travail pour les entreprises, les commissions de sécurité pour les ERP, les assureurs lors des visites de risque. Toute personne (client, salarié) peut également signaler un manquement aux autorités compétentes.'
    },
    {
      question: 'Ma responsabilité pénale est-elle engagée en cas d\'accident ?',
      answer: 'Oui, si l\'accident résulte d\'un défaut de signalisation. L\'employeur ou gestionnaire peut être poursuivi pour mise en danger d\'autrui, blessures involontaires, voire homicide involontaire. Les peines vont de l\'amende à l\'emprisonnement.'
    },
    {
      question: 'Comment prouver que mon marquage était conforme avant un accident ?',
      answer: 'Conservez les photos datées du marquage, les factures des travaux, les rapports de contrôle périodiques, les fiches d\'entretien. Un registre de sécurité tenu à jour constitue votre meilleure protection juridique.'
    },
    {
      question: 'Existe-t-il un délai de mise en conformité après un contrôle ?',
      answer: 'L\'inspection du travail peut accorder un délai raisonnable (1 à 3 mois) pour les manquements mineurs. Pour les risques graves, une mise en demeure avec délai court (quelques jours) peut être émise, voire un arrêt d\'activité immédiat.'
    }
  ],

  'zones-danger-delimitation': [
    {
      question: 'Quelle est la différence entre une zone dangereuse et une zone interdite ?',
      answer: 'Une zone dangereuse signale la présence d\'un risque mais permet l\'accès sous certaines conditions (personnel formé, équipement de protection). Une zone interdite (avec croix rouge ou ruban) interdit formellement l\'accès. Certaines zones passent de dangereuses à interdites en fonction de la situation (maintenance, nettoyage).'
    },
    {
      question: 'Faut-il un permis de travail dans une zone dangereuse ?',
      answer: 'Cela dépend du niveau de risque. Pour les zones à risque grave (machines industrielles, hauteur, chimie), un permis de travail ou au minimum une habilitation est obligatoire. Le responsable HSE doit évaluer le risque. Le marquage au sol avise du danger, mais ne dispense pas des autres mesures.'
    },
    {
      question: 'Qui est responsable de l\'entretien du marquage au sol ?',
      answer: 'L\'employeur est légalement responsable. Dans la pratique, il nomme généralement un responsable maintenance ou un agent HSE. Un contrat d\'entretien auprès d\'une entreprise spécialisée peut être souscrit. Le calendrier et les responsables doivent être documentés.'
    },
    {
      question: 'Les bandes adhésives sont-elles plus efficaces que la peinture ?',
      answer: 'Les deux ont des avantages. Les bandes adhésives résistent mieux à l\'usure mécanique et au lavage, mais nécessitent une préparation du sol. La peinture époxy adhère mieux sur les sols irréguliers. Le choix dépend du type de sol, du taux de circulation et du budget.'
    },
    {
      question: 'Comment mettre en conformité un site existant avec un marquage déficient ?',
      answer: 'Réalisez un audit complet identifiant toutes les zones dangereuses, classez par priorité (risques graves d\'abord), élaborez un plan de mise à jour sur 6 à 12 mois, formez les salariés aux nouveaux marquages, et mettez en place un calendrier de maintenance.'
    }
  ],

  'marquage-antiderapant': [
    {
      question: 'Quel coefficient de friction minimum dois-je viser pour mes locaux ?',
      answer: 'Le minimum légal varie selon l\'environnement. Pour zones sèches : R11 minimum (coefficient 0,60). Pour zones humides : R13 recommandé (coefficient 0,90+). Les escaliers et zones de transition nécessitent R13 minimum.'
    },
    {
      question: 'Combien de temps dure réellement une peinture antidérapante ?',
      answer: 'En conditions normales, 3-5 ans. Cependant, la durée réelle dépend de plusieurs facteurs : intensité du trafic, conditions humides régulières, produits d\'entretien utilisés, et qualité d\'installation.'
    },
    {
      question: 'Les revêtements coulés époxy en valent-ils vraiment la peine financièrement ?',
      answer: 'Oui, si vous avez une perspective long terme. L\'investissement initial (2-3 fois plus cher que peinture) est compensé par : durée de vie 8-12 ans, maintenance réduite de 40%, coefficient de friction stable dans le temps.'
    },
    {
      question: 'Comment tester l\'antidérapance d\'un sol ?',
      answer: 'Utilisez un pendule de frottement (méthode normalisée) ou un tribomètre portatif. Les tests doivent être effectués en conditions sèches et humides. Faites appel à un laboratoire agréé pour un résultat opposable.'
    },
    {
      question: 'Le nettoyage affecte-t-il les propriétés antidérapantes ?',
      answer: 'Oui, les produits trop agressifs peuvent lisser la surface et réduire l\'antidérapance. Utilisez des détergents neutres, évitez les cires et traitements qui bouchent les pores. Rincez abondamment après nettoyage.'
    }
  ],

  'flux-pietons-vehicules': [
    {
      question: 'Quelle est la différence entre une allée piétons et un passage piéton industriel ?',
      answer: 'Une allée piétons est une zone de circulation permanente exclusivement réservée aux piétons, délimitée en continu sur la longueur. Un passage piéton industriel est un point de passage temporaire où piétons et véhicules se croisent, typiquement au-dessus d\'une voie de circulation.'
    },
    {
      question: 'La peinture jaune-noir est-elle obligatoire selon l\'INRS ?',
      answer: 'L\'INRS recommande fortement jaune-noir pour son contraste optimal, mais n\'impose pas de manière stricte. Les couleurs blanc-noir ou autres contrastes élevés sont acceptables si la lisibilité est équivalente. Cependant, jaune-noir est le standard de fait dans 90% des installations conformes.'
    },
    {
      question: 'À quelle fréquence renouveler un marquage peinture époxy ?',
      answer: 'En circulation intensive (>300 passage/jour), renouvellement tous les 2 ans. En circulation modérée, tous les 3-4 ans. L\'inspection mensuelle reste obligatoire pour détecter usure anormale.'
    },
    {
      question: 'Comment concilier une allée piétons avec la géométrie existante du site ?',
      answer: 'Si l\'espace physique est limité : réduire les zones de coactivité par des barrières ou rehaussements, modifier le flux véhicules (créer des sens uniques, ralentisseurs), augmenter la signalisation et la formation, ou réaménager le site pour fluidifier les flux naturels.'
    },
    {
      question: 'Quel impact fiscal et assurance d\'une non-conformité du marquage ?',
      answer: 'Risque pénal : amende 750-7500 euros pour manquement aux obligations de l\'employeur. Responsabilité civile : dégâts-intérêts considérables en cas d\'accident. Cotisations assurance : augmentation 10-30% après sinistre lié à manquement sécurité.'
    }
  ],

  'marquage-evacuation': [
    {
      question: 'Quelles sont les distances exactes entre les bandes photoluminescentes au sol ?',
      answer: 'Les bandes doivent être espacées de maximum 500 millimètres (50 centimètres) en itinéraire continu. Cet espacement garantit qu\'en cas de chute ou de visibilité réduite, une personne bénéficie constamment d\'une ligne de repère.'
    },
    {
      question: 'Combien de temps dure une bande photoluminescente conforme ?',
      answer: 'Une bande photoluminescente de qualité conforme NF S61-950 dure minimum 12 ans en conditions normales d\'usage. Ce délai peut être réduit par exposition excessive aux UV, température/humidité extrêmes, passage intense de piétons, ou nettoyage inadapté.'
    },
    {
      question: 'Une bande photoluminescente seule suffit-elle, sans éclairage électrique ?',
      answer: 'Légalement, oui, la photoluminescence seule respecte les normes pour les ERP standard. Cependant, les bonnes pratiques recommandent une signalisation hybride combinant bandes photoluminescentes au sol et panneaux lumineux électriques.'
    },
    {
      question: 'Quel est le coût d\'installation d\'un marquage évacuation complet pour un petit ERP ?',
      answer: 'À titre indicatif : bandes photoluminescentes 15 à 30 euros/mètre linéaire, panneaux 50 à 200 euros l\'unité, pose et main d\'œuvre 50 à 80 euros/heure. Pour un petit ERP (500-1000 m²) : 1500 à 5000 euros en installation complète.'
    },
    {
      question: 'Y a-t-il des différences de luminance entre les types de photoluminescence ?',
      answer: 'Oui, selon la technologie utilisée : aluminate de strontium (300-500+ mcd/m², haute performance, plus cher), sulfure de zinc (150-250 mcd/m², moins cher, performance inférieure). Les normes NF S61-950 exigent un minimum absolu de 300 mcd/m².'
    },
    {
      question: 'Qu\'est-ce qui invalide un marquage évacuation ?',
      answer: 'Un marquage évacuation devient non-conforme si : luminance mesurée <300 mcd/m², décollements ou déchirures visibles, saleté opacifiante permanente, délai de 12 ans depuis installation atteint, non-respect des espacements réglementaires, ou itinéraire incomplet vers une issue.'
    }
  ],

  'devis-marquage-comparer': [
    {
      question: 'Quel est le prix moyen d\'un devis marquage au sol ?',
      answer: 'Le prix marquage sol varie selon le produit. Peinture standard : 8-15 euros/m² HT. Peinture renforcée : 15-25 euros/m² HT. Thermocollant : 25-50 euros/m² HT. Résine époxy : 40-80 euros/m² HT. Ces prix incluent matériaux et main-d\'œuvre.'
    },
    {
      question: 'Combien de devis dois-je demander ?',
      answer: 'Idéalement 3 à 5 devis auprès d\'entreprises différentes. Trois permet une moyenne, cinq aide à repérer les outliers. Au-delà, vous perdez du temps sans gain d\'information.'
    },
    {
      question: 'Pourquoi les devis varient autant sur le tarif peinture sol ?',
      answer: 'Les écarts de coût marquage sont dus à : qualité des matériaux (peinture vs. thermocollant vs. résine), inclusion ou non de préparation complète, structure de coûts régionale, expérience et réputation du prestataire, complexité des motifs demandés, volume des travaux.'
    },
    {
      question: 'Quel est le meilleur rapport qualité-prix ?',
      answer: 'Pour un parking ou zone logistique standard, la peinture renforcée offre souvent le meilleur équilibre : moins chère que le thermocollant, plus durable que la peinture standard, et nécessite peu d\'entretien.'
    },
    {
      question: 'Dois-je accepter un devis sans conditions écrites ?',
      answer: 'Non, jamais. Un engagement oral n\'a aucune valeur légale. Insistez toujours pour un devis marquage écrit, daté, signé et comportant toutes les conditions. C\'est votre seule protection.'
    },
    {
      question: 'Quel est le délai de validité normal d\'un devis ?',
      answer: 'Généralement 30 jours. Au-delà, les prix des matériaux peuvent avoir changé. Une clause de révision tous les 30 jours est standard.'
    }
  ],

  'renovation-creation-marquage': [
    {
      question: 'Peut-on appliquer une rénovation marquage sur une surface fissurée ?',
      answer: 'Non, pas sans risques. Les fissures s\'agrandissent sous les rayures des pneus et l\'expansion thermique. Une simple rénovation marquage échouerait en 12-18 mois. Il faut d\'abord reboucher les fissures avec enduit polyester. Au-delà de 3-4 fissures larges, une remise en état complète est plus rentable.'
    },
    {
      question: 'Quel est le bon timing pour refaire marquage parking ?',
      answer: 'Inspectez chaque année. Une rénovation marquage convient si adhérence reste >80% et surface <3 ans. Si marquage >7 ans, dégradation visible, usure directionnelle : lancez création neuve. La préparation sol détermine tout.'
    },
    {
      question: 'Comment effacer marquage ancien sans endommager le support ?',
      answer: 'Plusieurs techniques selon matériau. Peinture : meulage (risque, poussiéreux), hydrogommage (optimal mais coûteux, 50-100 euros/m²), ponçage doux. Résine : meulage impératif, puis ponçage grain 80. L\'effacer marquage mal fait réduit adhérence future de 40-60%.'
    },
    {
      question: 'Peinture vs. résine : quel matériau choisir pour création neuve ?',
      answer: 'Peinture : coût bas (5 000-10 000 euros), durée 7-10 ans, bonne visibilité, entretien facile. Résine époxy : coût élevé (10 000-18 000 euros), durée 12-15 ans, ultra-adhérence, résistance chimique/huile excellente. Pour création neuve en zones fort trafic, la résine est supérieure.'
    },
    {
      question: 'Peut-on garantir une rénovation marquage pour 7+ ans ?',
      answer: 'Très rarement. Les garanties rénovation marquage plafonnent 3-5 ans, car base existante vieillit. Une création neuve offre garantie 12-15 ans. Si prestataire propose 7-10 ans sur rénovation, vérifiez les conditions ou la garantie est sans valeur.'
    }
  ],

  'roi-marquage-sol': [
    {
      question: 'Comment calculer le ROI d\'un projet de marquage au sol ?',
      answer: 'ROI = (Gains - Investissement) / Investissement x 100. Les gains incluent : réduction des accidents (coût évité), gains de productivité (temps gagné), réduction des erreurs de stockage. Un marquage bien conçu génère un ROI de 150-300% sur 3 ans.'
    },
    {
      question: 'Quel est le coût moyen d\'un accident du travail ?',
      answer: 'Accident bénin : 1 500-3 000 euros (arrêt court, soins). Accident grave : 10 000-50 000 euros (hospitalisation, remplacement, enquête). Accident mortel : 100 000 euros minimum (indemnisation, procédure, impact image). Le marquage réduit les accidents de 25-40%.'
    },
    {
      question: 'En combien de temps le marquage est-il rentabilisé ?',
      answer: 'Généralement 3 à 6 mois pour une PME avec un marquage complet. Les gains commencent immédiatement : moins de temps perdu à chercher, moins d\'erreurs de stockage, moins d\'accidents mineurs. Le retour sur investissement est rapide et mesurable.'
    },
    {
      question: 'Le marquage 5S améliore-t-il vraiment la productivité ?',
      answer: 'Oui, les études montrent des gains de 15-25% de productivité après implémentation du 5S. Le marquage au sol (emplacements, silhouettes, zones) représente 60% du visuel 5S. Le temps de recherche d\'outils et matériaux diminue de 30-50%.'
    },
    {
      question: 'Comment justifier un budget marquage auprès de la direction ?',
      answer: 'Présentez un business case chiffré : coût des accidents passés, estimation des gains de productivité, comparaison avec le coût de l\'investissement. Ajoutez les aspects conformité (éviter les sanctions) et image de marque. Le ROI parle aux décideurs.'
    }
  ]
};

// Fonction utilitaire pour obtenir les FAQs d'un article
export const getArticleFaqs = (articleId: string): ArticleFAQ[] => {
  return articleFaqs[articleId] || [];
};

// Fonction pour vérifier si un article a des FAQs
export const hasArticleFaqs = (articleId: string): boolean => {
  return articleId in articleFaqs && articleFaqs[articleId].length > 0;
};
