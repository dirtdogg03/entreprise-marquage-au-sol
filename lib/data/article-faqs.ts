// FAQs pour tous les articles du blog
// Chaque article a 3-6 questions/reponses pour le composant FAQSection

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export const articleFaqs: Record<string, ArticleFAQ[]> = {
  // ========== ARTICLES PILIERS ==========

  'choisir-type-marquage': [
    {
      question: 'Quelle est la difference entre peinture, resine et thermoplastique ?',
      answer: 'La peinture est economique (1-3 ans), la resine offre une duree de vie superieure (5-10 ans) avec une meilleure resistance chimique, et le thermoplastique est le plus durable (8-15 ans) ideal pour le trafic intense. Le choix depend de votre budget, du trafic et des contraintes environnementales.'
    },
    {
      question: 'Quel type de marquage pour un parking exterieur ?',
      answer: 'Pour un parking exterieur, privilegiez le thermoplastique ou la peinture routiere renforcee. Ces materiaux resistent aux UV, intemperies et au trafic vehicule. Comptez 5-8 ans de duree de vie minimum avec un entretien correct.'
    },
    {
      question: 'La resine epoxy convient-elle pour l\'exterieur ?',
      answer: 'Non, la resine epoxy standard jaunit et se degrade aux UV. Pour l\'exterieur, optez pour une resine polyurethane aliphatique ou un thermoplastique. L\'epoxy reste ideale pour les environnements interieurs (entrepots, usines).'
    },
    {
      question: 'Combien coute un marquage au sol professionnel ?',
      answer: 'Les prix varient selon le materiau : peinture (5-15 euros/m2), resine epoxy (25-60 euros/m2), thermoplastique (20-45 euros/ml). Un parking de 50 places coute entre 2 000 et 8 000 euros selon les materiaux choisis.'
    },
    {
      question: 'Peut-on appliquer un nouveau marquage sur l\'ancien ?',
      answer: 'Oui, si l\'ancien marquage est en bon etat et bien adherent. Un nettoyage haute pression et un leger poncage suffisent. Si l\'ancien marquage s\'ecaille, il faut le retirer completement pour garantir l\'adherence du nouveau.'
    }
  ],

  'reglementation-parking-2025': [
    {
      question: 'Quelles sont les dimensions reglementaires d\'une place de parking ?',
      answer: 'Une place standard mesure minimum 2,30 m de large x 5 m de long. Les places PMR doivent faire 3,30 m de large (place + bande laterale de 0,80 m). Les places en epi ou en bataille ont des dimensions specifiques selon l\'angle.'
    },
    {
      question: 'Combien de places PMR sont obligatoires dans un parking ?',
      answer: 'La reglementation impose 2% des places en PMR avec un minimum de 1 place. Pour un parking de 50 places, vous devez avoir au minimum 1 place PMR. Ces places doivent etre situees au plus pres des entrees.'
    },
    {
      question: 'Le marquage au sol jaune est-il obligatoire pour les zones de stationnement interdit ?',
      answer: 'Oui, le marquage jaune en zigzag ou continu signale l\'interdiction de stationnement. Il doit etre accompagne d\'une signalisation verticale (panneau). Sans ces deux elements, l\'interdiction peut etre contestee.'
    },
    {
      question: 'Quelles sanctions en cas de non-conformite du marquage parking ?',
      answer: 'L\'absence de places PMR conformes expose a des amendes de 1 500 a 5 000 euros. En cas d\'accident lie a un defaut de signalisation, la responsabilite civile et penale du gestionnaire peut etre engagee.'
    },
    {
      question: 'Faut-il un permis pour refaire le marquage d\'un parking prive ?',
      answer: 'Non, aucun permis n\'est requis pour un parking prive. Cependant, si le parking est ouvert au public (ERP), vous devez respecter les normes d\'accessibilite et de securite. Une declaration prealable peut etre necessaire pour les gros travaux.'
    }
  ],

  'normes-securite-industriel': [
    {
      question: 'Quelles couleurs utiliser pour le marquage de securite en usine ?',
      answer: 'Selon la norme ISO 3864 : jaune/noir pour les dangers, rouge pour les interdictions et incendie, bleu pour les obligations, vert pour les issues de secours et premiers soins, blanc pour les voies de circulation.'
    },
    {
      question: 'Quelle largeur minimum pour les voies de circulation en entrepot ?',
      answer: 'Les voies pietonnes doivent faire minimum 0,80 m (1,20 m recommande). Les voies pour chariots elevateurs : largeur du vehicule + 1 m minimum. Les voies mixtes : 2 m minimum avec separation claire.'
    },
    {
      question: 'Le marquage des zones dangereuses est-il obligatoire ?',
      answer: 'Oui, le Code du travail (article R4224-3) impose le balisage des zones de danger. Les zones a risques chimiques, electriques, mecaniques doivent etre clairement delimitees par un marquage jaune/noir.'
    },
    {
      question: 'A quelle frequence faut-il renouveler le marquage industriel ?',
      answer: 'Un controle visuel mensuel est recommande. La renovation depend de l\'usure : tous les 2-3 ans pour zones a fort trafic, 5-7 ans pour zones moins sollicitees. Tout marquage efface a plus de 50% doit etre renouvele immediatement.'
    },
    {
      question: 'Qui est responsable du marquage de securite dans une entreprise ?',
      answer: 'L\'employeur est legalement responsable (Code du travail). Il peut deleguer la gestion au responsable HSE ou maintenance, mais reste juridiquement responsable en cas de manquement. Un contrat d\'entretien avec un prestataire specialise est recommande.'
    }
  ],

  'prix-marquage-guide': [
    {
      question: 'Quel budget prevoir pour le marquage d\'un parking de 30 places ?',
      answer: 'Comptez entre 1 500 et 5 000 euros selon le materiau. Peinture standard : 1 500-2 500 euros. Peinture renforcee : 2 500-3 500 euros. Thermoplastique : 3 500-5 000 euros. Ajoutez 500-1 000 euros si preparation du sol necessaire.'
    },
    {
      question: 'Pourquoi les devis de marquage varient-ils autant ?',
      answer: 'Les ecarts s\'expliquent par : la qualite des materiaux (peinture basique vs premium), la preparation du sol incluse ou non, les garanties offertes, l\'experience du prestataire, et la region (Paris +20-30% vs province).'
    },
    {
      question: 'Le marquage au sol est-il deductible fiscalement ?',
      answer: 'Oui, le marquage au sol est une charge d\'exploitation deductible du resultat fiscal. Pour les investissements importants (>500 euros HT), vous pouvez l\'amortir sur 5-10 ans. Consultez votre comptable pour optimiser.'
    },
    {
      question: 'Vaut-il mieux payer plus cher pour une duree de vie plus longue ?',
      answer: 'Generalement oui. Un thermoplastique a 4 000 euros durant 10 ans revient moins cher qu\'une peinture a 1 500 euros renouvelee 4 fois (6 000 euros). Analysez le cout total sur 10-15 ans, pas le prix initial.'
    },
    {
      question: 'Les devis de marquage sont-ils negociables ?',
      answer: 'Oui, surtout pour les grandes surfaces (>500 m2). Vous pouvez negocier 10-15% sur les materiaux et la main d\'oeuvre. Regroupez plusieurs zones ou batiments pour obtenir un tarif degressif. Evitez de negocier la qualite des materiaux.'
    }
  ],

  'entretien-duree-vie': [
    {
      question: 'Comment nettoyer un marquage au sol sans l\'abimer ?',
      answer: 'Utilisez un nettoyeur haute pression (max 150 bars) avec de l\'eau claire ou un detergent neutre. Evitez les produits acides ou chlores qui attaquent la peinture. Nettoyez regulierement pour eviter l\'incrustation des salissures.'
    },
    {
      question: 'Quand faut-il refaire un marquage au sol ?',
      answer: 'Renouvelez quand le marquage est efface a plus de 50%, quand les couleurs sont ternies au point de ne plus etre reconnaissables, ou quand des ecaillages apparaissent. Un controle annuel permet d\'anticiper les travaux.'
    },
    {
      question: 'Les taches d\'huile abiment-elles le marquage ?',
      answer: 'Oui, l\'huile penetre et decolle la peinture standard. Nettoyez immediatement avec un absorbant puis un degraissant. Pour les zones a risque (garages, ateliers), optez pour une resine epoxy resistante aux hydrocarbures.'
    },
    {
      question: 'Peut-on reparer localement un marquage abime ?',
      answer: 'Oui, les retouches ponctuelles sont possibles et economiques. Nettoyez la zone, poncez legerement, et appliquez la meme peinture. Cependant, si plus de 30% du marquage est touche, une refection complete est plus rentable.'
    },
    {
      question: 'Le sel de deneigement abime-t-il le marquage ?',
      answer: 'Le sel accelere l\'usure mais n\'est pas le principal ennemi. Le vrai probleme est le gel-degel repete qui fait eclater la peinture. Utilisez du thermoplastique ou une peinture routiere certifiee pour les zones exposees au gel.'
    }
  ],

  'places-pmr-obligations': [
    {
      question: 'Quelles sont les dimensions exactes d\'une place PMR ?',
      answer: 'Une place PMR fait 3,30 m de large minimum (2,50 m pour le vehicule + 0,80 m pour la bande d\'acces laterale). La longueur est de 5 m minimum. La bande laterale peut etre partagee entre deux places PMR.'
    },
    {
      question: 'A quelle distance de l\'entree doit etre la place PMR ?',
      answer: 'La reglementation impose le trajet le plus court et le plus praticable jusqu\'a l\'entree. En pratique, les places PMR doivent etre les plus proches de l\'entree accessible, avec un cheminement sans obstacle de plus de 2 cm.'
    },
    {
      question: 'Le pictogramme handicape au sol est-il obligatoire ?',
      answer: 'Oui, le pictogramme bleu/blanc (fauteuil roulant) est obligatoire au sol ET sur un panneau vertical. Les dimensions minimales du pictogramme au sol sont de 0,50 m x 0,60 m. Il doit etre visible et lisible.'
    },
    {
      question: 'Peut-on avoir une place PMR sur un terrain en pente ?',
      answer: 'Oui, mais la pente ne doit pas exceder 2% dans le sens de la largeur et 5% dans le sens de la longueur. Au-dela, la place n\'est pas conforme et peut etre contestee. Prevoyez un sol antiderapant.'
    },
    {
      question: 'Qui controle la conformite des places PMR ?',
      answer: 'Les commissions de securite pour les ERP, l\'inspection du travail pour les entreprises, et toute personne handicapee peut signaler un manquement. Les associations de defense des droits des personnes handicapees effectuent aussi des controles.'
    }
  ],

  'marquage-entrepot-bonnes-pratiques': [
    {
      question: 'Comment organiser les zones de stockage par marquage au sol ?',
      answer: 'Utilisez des couleurs distinctes : blanc pour les zones de stockage standard, jaune pour les zones temporaires, vert pour les zones d\'expedition, rouge pour les zones de rebuts/quarantaine. Numerotez chaque emplacement pour faciliter la gestion.'
    },
    {
      question: 'Quelle largeur pour les allees de circulation en entrepot ?',
      answer: 'Allees pietonnes : 1,20 m minimum. Allees pour transpalettes : 2 m minimum. Allees pour chariots elevateurs : largeur du chariot + 1 m de chaque cote. Allees principales : 3-4 m pour le croisement.'
    },
    {
      question: 'Le marquage 5S est-il obligatoire ?',
      answer: 'Non, le marquage 5S n\'est pas une obligation legale mais une bonne pratique d\'organisation. Cependant, la norme ISO impose un marquage de securite clair. Le 5S (silhouettes d\'outils, zones definies) ameliore la productivite de 15-25%.'
    },
    {
      question: 'Comment marquer les zones de chargement/dechargement ?',
      answer: 'Delimitez les quais par des bandes jaunes/noires (danger). Marquez les zones d\'attente des camions, les aires de manoeuvre, et les passages pietons securises. Ajoutez des butees de roues et des miroirs aux angles morts.'
    },
    {
      question: 'Quel marquage pour les zones ATEX (atmospheres explosives) ?',
      answer: 'Les zones ATEX necessitent un marquage specifique : triangle jaune avec EX, delimitation au sol de la zone concernee, et signalisation des equipements autorises. Utilisez des peintures antistatiques et conformes ATEX.'
    }
  ],

  'signalisation-horizontale-verticale': [
    {
      question: 'Quelle est la difference entre signalisation horizontale et verticale ?',
      answer: 'La signalisation horizontale est au sol (lignes, fleches, pictogrammes). La signalisation verticale est en hauteur (panneaux, feux). Les deux sont complementaires : l\'horizontale guide au quotidien, la verticale alerte et informe a distance.'
    },
    {
      question: 'Peut-on avoir du marquage au sol sans panneau ?',
      answer: 'Pour les informations reglementaires (interdictions, obligations), les deux sont necessaires. Un marquage seul n\'a pas de valeur juridique pour une interdiction. Pour l\'organisation interne (zones, fleches), le marquage seul suffit.'
    },
    {
      question: 'Quelle signalisation privilegier en entrepot ?',
      answer: 'Privilegiez le marquage au sol (signalisation horizontale) car il reste visible meme avec des rayonnages hauts. Completez par des panneaux suspendus aux intersections et des miroirs aux angles morts.'
    },
    {
      question: 'La signalisation au sol doit-elle etre reflechissante ?',
      answer: 'Pour l\'exterieur et les zones peu eclairees, oui. Les billes de verre integrees a la peinture ou au thermoplastique assurent la retroreflexion. En interieur bien eclaire, ce n\'est pas obligatoire mais recommande pour les passages pietons.'
    },
    {
      question: 'Qui est habilite a poser la signalisation reglementaire ?',
      answer: 'Sur voie publique, seules les entreprises agreees peuvent intervenir. Sur voie privee ouverte au public, un prestataire qualifie suffit. Sur site prive ferme, vous pouvez intervenir vous-meme en respectant les normes en vigueur.'
    }
  ],

  'marquage-exterieur-materiaux': [
    {
      question: 'Quel materiau resiste le mieux aux intemperies ?',
      answer: 'Le thermoplastique est le plus resistant : 8-15 ans en exterieur. Ensuite la peinture polyurethane aliphatique (5-8 ans) puis la peinture acrylique routiere (3-5 ans). Evitez l\'epoxy standard qui jaunit aux UV.'
    },
    {
      question: 'Peut-on appliquer du marquage sur sol mouille ?',
      answer: 'Non, le sol doit etre parfaitement sec pour une bonne adherence. Attendez 24-48h apres une pluie. La temperature doit etre superieure a 8C et l\'humidite relative inferieure a 85%. Verifiez les previsions meteo avant intervention.'
    },
    {
      question: 'Le marquage sur beton est-il different de celui sur enrobe ?',
      answer: 'Oui, le beton necessite un primaire d\'accrochage specifique car il est plus lisse. L\'enrobe (asphalte) offre une meilleure accroche naturelle. Sur beton neuf, attendez 28 jours de sechage avant application.'
    },
    {
      question: 'Comment proteger le marquage du trafic poids lourds ?',
      answer: 'Optez pour du thermoplastique de 3-4 mm d\'epaisseur ou une resine polyurethane haute resistance. Evitez les virages serres qui creent une usure prematuree. Prevoyez un budget maintenance de 10-15% par an.'
    },
    {
      question: 'Les marquages anti-UV existent-ils ?',
      answer: 'Oui, les peintures polyurethane aliphatiques et les thermoplastiques de qualite integrent des stabilisants UV. Ils coutent 20-30% plus cher mais durent 2-3 fois plus longtemps. Indispensables pour les parkings exposes plein sud.'
    }
  ],

  'cas-client-parking': [
    {
      question: 'Combien de temps dure la realisation d\'un marquage parking complet ?',
      answer: 'Pour un parking de 100-200 places : 2-4 jours de travaux. Comptez 1 jour de preparation (nettoyage, tracage), 2-3 jours d\'application, et 24-48h de sechage avant remise en service. Les travaux de nuit sont possibles.'
    },
    {
      question: 'Faut-il fermer le parking pendant les travaux ?',
      answer: 'Idealement oui, pour un resultat optimal. Sinon, travaillez par zones avec une rotation (fermer 30-50% a la fois). Prevoyez une signalisation temporaire et informez les usagers a l\'avance. Les travaux de nuit minimisent la gene.'
    },
    {
      question: 'Peut-on personnaliser les couleurs du marquage ?',
      answer: 'Oui, pour les elements non reglementaires (numerotation, logos, fleches directionnelles). Les elements reglementaires (places PMR, passages pietons, interdictions) doivent respecter les couleurs normalisees.'
    },
    {
      question: 'Comment numerorer les places de parking efficacement ?',
      answer: 'Utilisez un systeme logique : lettre pour la zone (A, B, C) + numero sequentiel (01, 02...). Les numeros doivent faire minimum 30 cm de haut pour etre lisibles depuis un vehicule. Placez-les en tete de place, pas au centre.'
    },
    {
      question: 'Quel gain d\'espace attendre apres un remarquage optimise ?',
      answer: 'Un remarquage optimise peut gagner 10-15% de places en ajustant les dimensions et l\'orientation (epi vs bataille). Sur un parking de 100 places, cela represente 10-15 places supplementaires, soit un ROI rapide sur l\'investissement.'
    }
  ],

  // ========== ARTICLES AVEC FAQs EXISTANTES (EXTRAITES) ==========

  'epoxy-vs-polyurethane': [
    {
      question: 'Peut-on appliquer du polyurethane sur de l\'epoxy existant ?',
      answer: 'Oui, mais une preparation adequate est indispensable. Il faut decaper legerement l\'epoxy existant (poncage doux) pour assurer l\'adherence du polyurethane. Inversement, l\'application d\'epoxy sur polyurethane est plus delicate et deconseillee.'
    },
    {
      question: 'Quel est le cout total d\'un revetement sol industriel ?',
      answer: 'Le cout varie entre 25 et 80 euros par m2 (fournitures + application) selon le type de revetement, la preparation requise et la region. L\'epoxy coute generalement moins cher (25-50 euros/m2) que le polyurethane (40-80 euros/m2).'
    },
    {
      question: 'Comment entretenir une peinture epoxy sol ou polyurethane ?',
      answer: 'Nettoyage regulier avec un savon neutre et de l\'eau tiede suffit. Eviter les produits trop agressifs. Un renouvellement de vernis protecteur peut etre utile tous les 3-5 ans pour maintenir l\'eclat.'
    },
    {
      question: 'Est-il possible d\'appliquer soi-meme une peinture sol garage ?',
      answer: 'Techniquement possible pour des petites surfaces, mais fortement deconseille. Une application professionnelle garantit un rendu durable et uniforme. Les erreurs de preparation ou d\'application peuvent compromettre l\'ensemble du projet.'
    },
    {
      question: 'Quelle est la meilleure resine sol pour un environnement alimentaire ?',
      answer: 'L\'epoxy offre une meilleure resistance chimique pour les environnements agroalimentaires, mais doit respecter les normes alimentaires. Le polyurethane peut egalement convenir s\'il beneficie de certifications specifiques. Consulter un expert avant de decider.'
    }
  ],

  'resine-sol-avantages': [
    {
      question: 'Quelle est la duree de vie d\'une resine de sol ?',
      answer: 'Une resine de sol bien appliquee dure 10 a 20 ans en fonction du trafic et de l\'entretien. L\'epoxy dure 10-15 ans en interieur, le polyurethane 15-20 ans. La duree depend de la preparation du support et de la qualite d\'application.'
    },
    {
      question: 'La resine de sol convient-elle pour une cuisine professionnelle ?',
      answer: 'Oui, les resines epoxy et polyurethane sont ideales pour les cuisines professionnelles. Elles sont impermeables, faciles a nettoyer et resistantes aux produits chimiques. Choisissez une finition antiderapante (R10-R11) pour la securite.'
    },
    {
      question: 'Peut-on appliquer une resine sur un carrelage existant ?',
      answer: 'Oui, avec une preparation adaptee : poncage du carrelage, rebouchage des joints, primaire d\'accrochage specifique. Le resultat sera durable si le carrelage est bien adherent. Deconseille si le carrelage se decolle.'
    },
    {
      question: 'Quel est le temps de sechage d\'une resine epoxy ?',
      answer: 'Sechage au toucher : 12-24h. Circulation pietonne legere : 24-48h. Circulation normale : 72h. Durcissement complet : 7 jours. Ces delais varient selon la temperature (plus long en dessous de 15C) et l\'humidite.'
    },
    {
      question: 'La resine de sol est-elle glissante ?',
      answer: 'Une resine lisse peut etre glissante, surtout mouillee. Pour les zones a risque, ajoutez des granules antiderapantes dans la couche de finition ou optez pour une finition texturee. Les normes R9 a R13 classent l\'antiderapance.'
    }
  ],

  'thermoplastique-marquage': [
    {
      question: 'Quelle est la frequence de renouvellement d\'un marquage parking ?',
      answer: 'Cela depend du type de peinture et de l\'intensite du trafic. La peinture standard dure 18 a 36 mois, la thermoplastique 5 a 7 ans, et les resines 8 a 10 ans. Un parking de centre commercial tres frequente necessitera des retouches tous les 12 a 18 mois.'
    },
    {
      question: 'Combien de places handicapees parking dois-je installer ?',
      answer: 'Le nombre est reglemente : 1 place pour 1-25 places totales, 2 places pour 26-50, etc. Ces places doivent etre situees au plus proche des acces et disposer d\'une bande de circulation laterale de 1,30 m minimum.'
    },
    {
      question: 'Une fleche directionnelle est-elle obligatoire ?',
      answer: 'Techniquement non, mais fortement recommandee. Si vous avez des voies a sens unique, les fleches directionnelles sont essentielles pour la securite et la conformite. Elles reduisent les erreurs de sens et les accidents.'
    },
    {
      question: 'Puis-je utiliser d\'autres couleurs que le blanc pour le marquage ?',
      answer: 'Oui, avec des restrictions. Le blanc est la norme pour le marquage au sol standard. Le jaune ou des couleurs contrastees peuvent signaler des zones particulieres (interdiction de stationnement, zones de danger). Consultez les normes NF P91-100 pour les specifications exactes.'
    }
  ],

  'parking-centre-commercial': [
    {
      question: 'Comment optimiser la circulation dans un parking de centre commercial ?',
      answer: 'Utilisez des fleches directionnelles claires, des sens uniques dans les allees etroites, des couleurs differentes par niveau/zone, et un marquage au sol lumineux aux intersections. Prevoyez des allees principales larges (6 m) pour fluidifier le trafic.'
    },
    {
      question: 'Combien de places PMR pour un centre commercial ?',
      answer: 'Minimum 2% des places avec 1 place minimum. Pour un parking de 500 places, prevoyez au moins 10 places PMR. Elles doivent etre reparties pres de chaque entree accessible, pas regroupees a un seul endroit.'
    },
    {
      question: 'Faut-il un marquage specifique pour les places families ?',
      answer: 'Il n\'y a pas d\'obligation legale pour les places families. Cependant, elles ameliorent l\'experience client. Marquez-les avec un pictogramme distinctif et situez-les pres des entrees, a cote des places PMR.'
    },
    {
      question: 'Comment gerer les places VE (vehicules electriques) ?',
      answer: 'Les places VE doivent etre identifiees par un pictogramme vert au sol et un panneau. Prevoyez 5-10% des places avec l\'infrastructure de recharge. La reglementation evolue vers 20% minimum pour les nouveaux parkings.'
    },
    {
      question: 'Quel budget pour le marquage d\'un parking de 300 places ?',
      answer: 'Comptez 15 000 a 40 000 euros selon le materiau choisi. Peinture standard : 15 000-20 000 euros. Peinture renforcee : 20 000-30 000 euros. Thermoplastique : 30 000-40 000 euros. Incluez 3 000-5 000 euros pour les pictogrammes et signalisation.'
    }
  ],

  'marquage-usine-atelier': [
    {
      question: 'Quelles sont les couleurs standard pour le marquage industriel ?',
      answer: 'Selon ISO 3864 : jaune pour les dangers et attention, blanc pour les voies de circulation, rouge pour les interdictions et incendie, bleu pour les obligations, vert pour les issues de secours. Les rayures jaune/noir signalent les obstacles.'
    },
    {
      question: 'Comment marquer les emplacements machines (5S) ?',
      answer: 'Tracez le contour au sol avec de la peinture ou du ruban adhesif. Utilisez des silhouettes pour les outils et accessoires. Les couleurs : blanc pour l\'emplacement, jaune pour les zones de mouvement, rouge pour les zones interdites.'
    },
    {
      question: 'Quelle frequence de controle du marquage en usine ?',
      answer: 'Inspection visuelle mensuelle, controle approfondi trimestriel, audit annuel complet. Tout marquage efface a plus de 30% dans une zone de securite doit etre renouvele immediatement. Documentez chaque controle.'
    },
    {
      question: 'Le marquage au sol suffit-il pour la conformite ICPE ?',
      answer: 'Non, le marquage est une composante parmi d\'autres. Les ICPE (Installations Classees) necessitent egalement : signalisation verticale, plans d\'evacuation, formation du personnel, registres de securite. Le marquage renforce la prevention.'
    },
    {
      question: 'Comment integrer le marquage au sol dans une demarche Lean ?',
      answer: 'Le marquage 5S est la base du Lean : chaque chose a sa place, visualisation immediate des anomalies. Utilisez des codes couleur coherents, des zones definies pour les en-cours, des allees degagees. Mesurez les temps de deplacement avant/apres.'
    }
  ],

  'voirie-privee': [
    {
      question: 'Le Code de la route s\'applique-t-il sur voirie privee ?',
      answer: 'Partiellement. Sur voie privee ouverte a la circulation publique, le Code de la route s\'applique. Sur voie privee fermee (site industriel cloture), seules les regles de securite au travail s\'appliquent. La signalisation reste recommandee dans les deux cas.'
    },
    {
      question: 'Peut-on mettre des ralentisseurs sur voirie privee ?',
      answer: 'Oui, sans autorisation pour une voirie privee fermee. Pour une voirie privee ouverte au public, les ralentisseurs doivent respecter les normes (hauteur max 10 cm, signalisation). Prevoyez un marquage au sol jaune/noir en amont.'
    },
    {
      question: 'Qui est responsable en cas d\'accident sur voirie privee ?',
      answer: 'Le proprietaire ou gestionnaire de la voirie est responsable si l\'accident resulte d\'un defaut d\'entretien ou de signalisation. D\'ou l\'importance d\'un marquage au sol conforme et bien entretenu, meme sur voirie privee.'
    },
    {
      question: 'Faut-il un arrete pour limiter la vitesse sur voirie privee ?',
      answer: 'Non pour une voirie privee fermee : la limitation de vitesse releve du reglement interieur. Pour une voirie privee ouverte au public, un arrete municipal peut etre necessaire pour la rendre opposable.'
    },
    {
      question: 'Comment marquer un passage pieton sur voirie privee ?',
      answer: 'Utilisez les memes standards qu\'en voirie publique : bandes blanches de 50 cm de large, espacees de 50 cm, sur 2,50-4 m de largeur. Completez par des panneaux C20a si la voirie est ouverte au public.'
    }
  ],

  'code-couleur-marquage': [
    {
      question: 'Puis-je utiliser d\'autres couleurs que celles normalisees ?',
      answer: 'Non, le code couleur marquage au sol est normatif (ISO 1942, NF X 08-003). Utiliser d\'autres couleurs peut creer une confusion dangereuse et viole les obligations legales. Vous pouvez utiliser des combinaisons (rayures, chevrons) pour adapter le message, mais les cinq couleurs principales doivent correspondre a la norme.'
    },
    {
      question: 'Quelle est la duree de vie d\'un marquage au sol normalise ?',
      answer: 'Elle depend du systeme choisi. Les peintures polyurethane durent 3 a 5 ans en environnement standard. Les bandes adhesives haute performance durent 2 a 3 ans. Dans les zones tres usees (forte circulation, chocs mecaniques), la duree peut etre reduite de moitie.'
    },
    {
      question: 'Quel est le cout approximatif d\'un marquage au sol professionnel ?',
      answer: 'Le cout varie selon la surface, le systeme choisi et la complexite. En moyenne, comptez 15 a 50 euros par metre lineaire pour un marquage en bandes adhesives, et 5 a 15 euros par metre lineaire pour une peinture. Un petit entrepot de 500 m2 peut couter entre 2 500 et 10 000 euros pour un marquage complet.'
    },
    {
      question: 'Un collaborateur peut-il contester un marquage au sol qui lui semble incorrect ?',
      answer: 'Oui, et c\'est meme recommande. Tout collaborateur ayant une inquietude sur la clarte ou la correction d\'un marquage peut la signaler au responsable HSE ou au manager. Une signification couleur marquage ambigue ou un marquage endommage cree un risque. C\'est une culture de securite positive.'
    }
  ],

  'non-conformite-sanctions': [
    {
      question: 'Quelles amendes en cas de marquage parking non conforme ?',
      answer: 'L\'absence de places PMR conformes expose a des amendes de 1 500 a 5 000 euros par place manquante. Le defaut de signalisation de securite : 3 750 euros par infraction. En cas de recidive, les montants peuvent etre doubles.'
    },
    {
      question: 'Qui effectue les controles de conformite du marquage ?',
      answer: 'L\'inspection du travail pour les entreprises, les commissions de securite pour les ERP, les assureurs lors des visites de risque. Toute personne (client, salarie) peut egalement signaler un manquement aux autorites competentes.'
    },
    {
      question: 'Ma responsabilite penale est-elle engagee en cas d\'accident ?',
      answer: 'Oui, si l\'accident resulte d\'un defaut de signalisation. L\'employeur ou gestionnaire peut etre poursuivi pour mise en danger d\'autrui, blessures involontaires, voire homicide involontaire. Les peines vont de l\'amende a l\'emprisonnement.'
    },
    {
      question: 'Comment prouver que mon marquage etait conforme avant un accident ?',
      answer: 'Conservez les photos datees du marquage, les factures des travaux, les rapports de controle periodiques, les fiches d\'entretien. Un registre de securite tenu a jour constitue votre meilleure protection juridique.'
    },
    {
      question: 'Existe-t-il un delai de mise en conformite apres un controle ?',
      answer: 'L\'inspection du travail peut accorder un delai raisonnable (1 a 3 mois) pour les manquements mineurs. Pour les risques graves, une mise en demeure avec delai court (quelques jours) peut etre emise, voire un arret d\'activite immediat.'
    }
  ],

  'zones-danger-delimitation': [
    {
      question: 'Quelle est la difference entre une zone dangereuse et une zone interdite ?',
      answer: 'Une zone dangereuse signale la presence d\'un risque mais permet l\'acces sous certaines conditions (personnel forme, equipement de protection). Une zone interdite (avec croix rouge ou ruban) interdit formellement l\'acces. Certaines zones passent de dangereuses a interdites en fonction de la situation (maintenance, nettoyage).'
    },
    {
      question: 'Faut-il un permis de travail dans une zone dangereuse ?',
      answer: 'Cela depend du niveau de risque. Pour les zones a risque grave (machines industrielles, hauteur, chimie), un permis de travail ou au minimum une habilitation est obligatoire. Le responsable HSE doit evaluer le risque. Le marquage au sol avise du danger, mais ne dispense pas des autres mesures.'
    },
    {
      question: 'Qui est responsable de l\'entretien du marquage au sol ?',
      answer: 'L\'employeur est legalement responsable. Dans la pratique, il nomme generalement un responsable maintenance ou un agent HSE. Un contrat d\'entretien aupres d\'une entreprise specialisee peut etre souscrit. Le calendrier et les responsables doivent etre documentes.'
    },
    {
      question: 'Les bandes adhesives sont-elles plus efficaces que la peinture ?',
      answer: 'Les deux ont des avantages. Les bandes adhesives resistent mieux a l\'usure mecanique et au lavage, mais necessitent une preparation du sol. La peinture epoxy adhere mieux sur les sols irreguliers. Le choix depend du type de sol, du taux de circulation et du budget.'
    },
    {
      question: 'Comment mettre en conformite un site existant avec un marquage deficient ?',
      answer: 'Realisez un audit complet identifiant toutes les zones dangereuses, classez par priorite (risques graves d\'abord), elaborez un plan de mise a jour sur 6 a 12 mois, formez les salaries aux nouveaux marquages, et mettez en place un calendrier de maintenance.'
    }
  ],

  'marquage-antiderapant': [
    {
      question: 'Quel coefficient de friction minimum dois-je viser pour mes locaux ?',
      answer: 'Le minimum legal varie selon l\'environnement. Pour zones seches : R11 minimum (coefficient 0,60). Pour zones humides : R13 recommande (coefficient 0,90+). Les escaliers et zones de transition necessitent R13 minimum.'
    },
    {
      question: 'Combien de temps dure reellement une peinture antiderapante ?',
      answer: 'En conditions normales, 3-5 ans. Cependant, la duree reelle depend de plusieurs facteurs : intensite du trafic, conditions humides regulieres, produits d\'entretien utilises, et qualite d\'installation.'
    },
    {
      question: 'Les revetements coules epoxy en valent-ils vraiment la peine financierement ?',
      answer: 'Oui, si vous avez une perspective long terme. L\'investissement initial (2-3 fois plus cher que peinture) est compense par : duree de vie 8-12 ans, maintenance reduite de 40%, coefficient de friction stable dans le temps.'
    },
    {
      question: 'Comment tester l\'antiderapance d\'un sol ?',
      answer: 'Utilisez un pendule de frottement (methode normalisee) ou un tribometre portatif. Les tests doivent etre effectues en conditions seches et humides. Faites appel a un laboratoire agree pour un resultat opposable.'
    },
    {
      question: 'Le nettoyage affecte-t-il les proprietes antiderapantes ?',
      answer: 'Oui, les produits trop agressifs peuvent lisser la surface et reduire l\'antiderapance. Utilisez des detergents neutres, evitez les cires et traitements qui bouchent les pores. Rincez abondamment apres nettoyage.'
    }
  ],

  'flux-pietons-vehicules': [
    {
      question: 'Quelle est la difference entre une allee pietons et un passage pieton industriel ?',
      answer: 'Une allee pietons est une zone de circulation permanente exclusivement reservee aux pietons, delimitee en continu sur la longueur. Un passage pieton industriel est un point de passage temporaire ou pietons et vehicules se croisent, typiquement au-dessus d\'une voie de circulation.'
    },
    {
      question: 'La peinture jaune-noir est-elle obligatoire selon l\'INRS ?',
      answer: 'L\'INRS recommande fortement jaune-noir pour son contraste optimal, mais n\'impose pas de maniere stricte. Les couleurs blanc-noir ou autres contrastes eleves sont acceptables si la lisibilite est equivalente. Cependant, jaune-noir est le standard de fait dans 90% des installations conformes.'
    },
    {
      question: 'A quelle frequence renouveler un marquage peinture epoxy ?',
      answer: 'En circulation intensive (>300 passage/jour), renouvellement tous les 2 ans. En circulation moderee, tous les 3-4 ans. L\'inspection mensuelle reste obligatoire pour detecter usure anormale.'
    },
    {
      question: 'Comment concilier une allee pietons avec la geometrie existante du site ?',
      answer: 'Si l\'espace physique est limite : reduire les zones de coactivite par des barrieres ou rehaussements, modifier le flux vehicules (creer des sens uniques, ralentisseurs), augmenter la signalisation et la formation, ou reamenager le site pour fluidifier les flux naturels.'
    },
    {
      question: 'Quel impact fiscal et assurance d\'une non-conformite du marquage ?',
      answer: 'Risque penal : amende 750-7500 euros pour manquement aux obligations de l\'employeur. Responsabilite civile : degats-interets considerables en cas d\'accident. Cotisations assurance : augmentation 10-30% apres sinistre lie a manquement securite.'
    }
  ],

  'marquage-evacuation': [
    {
      question: 'Quelles sont les distances exactes entre les bandes photoluminescentes au sol ?',
      answer: 'Les bandes doivent etre espacees de maximum 500 millimetres (50 centimetres) en itineraire continu. Cet espacement garantit qu\'en cas de chute ou de visibilite reduite, une personne beneficie constamment d\'une ligne de repere.'
    },
    {
      question: 'Combien de temps dure une bande photoluminescente conforme ?',
      answer: 'Une bande photoluminescente de qualite conforme NF S61-950 dure minimum 12 ans en conditions normales d\'usage. Ce delai peut etre reduit par exposition excessive aux UV, temperature/humidite extremes, passage intense de pietons, ou nettoyage inadapte.'
    },
    {
      question: 'Une bande photoluminescente seule suffit-elle, sans eclairage electrique ?',
      answer: 'Legalement, oui, la photoluminescence seule respecte les normes pour les ERP standard. Cependant, les bonnes pratiques recommandent une signalisation hybride combinant bandes photoluminescentes au sol et panneaux lumineux electriques.'
    },
    {
      question: 'Quel est le cout d\'installation d\'un marquage evacuation complet pour un petit ERP ?',
      answer: 'A titre indicatif : bandes photoluminescentes 15 a 30 euros/metre lineaire, panneaux 50 a 200 euros l\'unite, pose et main d\'oeuvre 50 a 80 euros/heure. Pour un petit ERP (500-1000 m2) : 1500 a 5000 euros en installation complete.'
    },
    {
      question: 'Y a-t-il des differences de luminance entre les types de photoluminescence ?',
      answer: 'Oui, selon la technologie utilisee : aluminate de strontium (300-500+ mcd/m2, haute performance, plus cher), sulfure de zinc (150-250 mcd/m2, moins cher, performance inferieure). Les normes NF S61-950 exigent un minimum absolu de 300 mcd/m2.'
    },
    {
      question: 'Qu\'est-ce qui invalide un marquage evacuation ?',
      answer: 'Un marquage evacuation devient non-conforme si : luminance mesuree <300 mcd/m2, decollements ou dechirures visibles, salete opacifiante permanente, delai de 12 ans depuis installation atteint, non-respect des espacements reglementaires, ou itineraire incomplet vers une issue.'
    }
  ],

  'devis-marquage-comparer': [
    {
      question: 'Quel est le prix moyen d\'un devis marquage au sol ?',
      answer: 'Le prix marquage sol varie selon le produit. Peinture standard : 8-15 euros/m2 HT. Peinture renforcee : 15-25 euros/m2 HT. Thermocollant : 25-50 euros/m2 HT. Resine epoxy : 40-80 euros/m2 HT. Ces prix incluent materiaux et main-d\'oeuvre.'
    },
    {
      question: 'Combien de devis dois-je demander ?',
      answer: 'Idealement 3 a 5 devis aupres d\'entreprises differentes. Trois permet une moyenne, cinq aide a reperer les outliers. Au-dela, vous perdez du temps sans gain d\'information.'
    },
    {
      question: 'Pourquoi les devis varient autant sur le tarif peinture sol ?',
      answer: 'Les ecarts de cout marquage sont dus a : qualite des materiaux (peinture vs. thermocollant vs. resine), inclusion ou non de preparation complete, structure de couts regionale, experience et reputation du prestataire, complexite des motifs demandes, volume des travaux.'
    },
    {
      question: 'Quel est le meilleur rapport qualite-prix ?',
      answer: 'Pour un parking ou zone logistique standard, la peinture renforcee offre souvent le meilleur equilibre : moins chere que le thermocollant, plus durable que la peinture standard, et necessite peu d\'entretien.'
    },
    {
      question: 'Dois-je accepter un devis sans conditions ecrites ?',
      answer: 'Non, jamais. Un engagement oral n\'a aucune valeur legale. Insistez toujours pour un devis marquage ecrit, date, signe et comportant toutes les conditions. C\'est votre seule protection.'
    },
    {
      question: 'Quel est le delai de validite normal d\'un devis ?',
      answer: 'Generalement 30 jours. Au-dela, les prix des materiaux peuvent avoir change. Une clause de revision tous les 30 jours est standard.'
    }
  ],

  'renovation-creation-marquage': [
    {
      question: 'Peut-on appliquer une renovation marquage sur une surface fissuree ?',
      answer: 'Non, pas sans risques. Les fissures s\'agrandissent sous les rayures des pneus et l\'expansion thermique. Une simple renovation marquage echouerait en 12-18 mois. Il faut d\'abord reboucher les fissures avec enduit polyester. Au-dela de 3-4 fissures larges, une remise en etat complete est plus rentable.'
    },
    {
      question: 'Quel est le bon timing pour refaire marquage parking ?',
      answer: 'Inspectez chaque annee. Une renovation marquage convient si adherence reste >80% et surface <3 ans. Si marquage >7 ans, degradation visible, usure directionnelle : lancez creation neuve. La preparation sol determine tout.'
    },
    {
      question: 'Comment effacer marquage ancien sans endommager le support ?',
      answer: 'Plusieurs techniques selon materiau. Peinture : meulage (risque, poussiéreux), hydrogommage (optimal mais couteux, 50-100 euros/m2), poncage doux. Resine : meulage imperatif, puis poncage grain 80. L\'effacer marquage mal fait reduit adherence future de 40-60%.'
    },
    {
      question: 'Peinture vs. resine : quel materiau choisir pour creation neuve ?',
      answer: 'Peinture : cout bas (5 000-10 000 euros), duree 7-10 ans, bonne visibilite, entretien facile. Resine epoxy : cout eleve (10 000-18 000 euros), duree 12-15 ans, ultra-adherence, resistance chimique/huile excellente. Pour creation neuve en zones fort trafic, la resine est superieure.'
    },
    {
      question: 'Peut-on garantir une renovation marquage pour 7+ ans ?',
      answer: 'Tres rarement. Les garanties renovation marquage plafonnent 3-5 ans, car base existante vieillit. Une creation neuve offre garantie 12-15 ans. Si prestataire propose 7-10 ans sur renovation, verifiez les conditions ou la garantie est sans valeur.'
    }
  ],

  'roi-marquage-sol': [
    {
      question: 'Comment calculer le ROI d\'un projet de marquage au sol ?',
      answer: 'ROI = (Gains - Investissement) / Investissement x 100. Les gains incluent : reduction des accidents (cout evite), gains de productivite (temps gagne), reduction des erreurs de stockage. Un marquage bien concu genere un ROI de 150-300% sur 3 ans.'
    },
    {
      question: 'Quel est le cout moyen d\'un accident du travail ?',
      answer: 'Accident benin : 1 500-3 000 euros (arret court, soins). Accident grave : 10 000-50 000 euros (hospitalisation, remplacement, enquete). Accident mortel : 100 000 euros minimum (indemnisation, procedure, impact image). Le marquage reduit les accidents de 25-40%.'
    },
    {
      question: 'En combien de temps le marquage est-il rentabilise ?',
      answer: 'Generalement 3 a 6 mois pour une PME avec un marquage complet. Les gains commencent immediatement : moins de temps perdu a chercher, moins d\'erreurs de stockage, moins d\'accidents mineurs. Le retour sur investissement est rapide et mesurable.'
    },
    {
      question: 'Le marquage 5S ameliore-t-il vraiment la productivite ?',
      answer: 'Oui, les etudes montrent des gains de 15-25% de productivite apres implementation du 5S. Le marquage au sol (emplacements, silhouettes, zones) represente 60% du visuel 5S. Le temps de recherche d\'outils et materiaux diminue de 30-50%.'
    },
    {
      question: 'Comment justifier un budget marquage aupres de la direction ?',
      answer: 'Presentez un business case chiffre : cout des accidents passes, estimation des gains de productivite, comparaison avec le cout de l\'investissement. Ajoutez les aspects conformite (eviter les sanctions) et image de marque. Le ROI parle aux decideurs.'
    }
  ]
};

// Fonction utilitaire pour obtenir les FAQs d'un article
export const getArticleFaqs = (articleId: string): ArticleFAQ[] => {
  return articleFaqs[articleId] || [];
};

// Fonction pour verifier si un article a des FAQs
export const hasArticleFaqs = (articleId: string): boolean => {
  return articleId in articleFaqs && articleFaqs[articleId].length > 0;
};
