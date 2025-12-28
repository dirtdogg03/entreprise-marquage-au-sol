import { ServiceLocationContent } from '../index';

const services = [
  'marquage-au-sol-parking', 'marquage-au-sol-parking-prive', 'marquage-au-sol-stationnement',
  'marquage-au-sol-parking-entreprise', 'marquage-au-sol-entrepôt', 'marquage-au-sol-industriel',
  'marquage-au-sol-usine', 'marquage-routier-au-sol', 'marquage-garage-automobile',
  'marquage-zones-piétonnes', 'places-handicapees-pmr', 'signalisation-verticale',
  'pose-ralentisseur', 'installation-panneaux-parking', 'pose-miroir-circulation',
  'installation-bornes-parking', 'pose-butees-parking'
];

const serviceNames: Record<string, string> = {
  'marquage-au-sol-parking': 'Marquage au sol parking',
  'marquage-au-sol-parking-prive': 'Marquage parking privé',
  'marquage-au-sol-stationnement': 'Marquage stationnement',
  'marquage-au-sol-parking-entreprise': 'Marquage parking entreprise',
  'marquage-au-sol-entrepôt': 'Marquage entrepôt',
  'marquage-au-sol-industriel': 'Marquage industriel',
  'marquage-au-sol-usine': 'Marquage usine',
  'marquage-routier-au-sol': 'Marquage routier',
  'marquage-garage-automobile': 'Marquage garage automobile',
  'marquage-zones-piétonnes': 'Marquage zones piétonnes',
  'places-handicapees-pmr': 'Places handicapées PMR',
  'signalisation-verticale': 'Signalisation verticale',
  'pose-ralentisseur': 'Pose ralentisseur',
  'installation-panneaux-parking': 'Installation panneaux parking',
  'pose-miroir-circulation': 'Pose miroir circulation',
  'installation-bornes-parking': 'Installation bornes parking',
  'pose-butees-parking': 'Pose butées parking'
};

interface CityData {
  slug: string;
  name: string;
  context: string;
  zones: string[];
}

const cities: CityData[] = [
  {
    slug: 'versailles',
    name: 'Versailles',
    context: 'Préfecture des Yvelines, Versailles accueille le celebre chateau et de nombreuses institutions. Les parkings du centre historique, les résidences de standing et les zones administratives requièrent un marquage de qualité.',
    zones: ['Chateau', 'Notre-Dame', 'Chantiers', 'Montreuil', 'Saint-Louis']
  },
  {
    slug: 'saint-germain-en-laye',
    name: 'Saint-Germain-en-Laye',
    context: 'Saint-Germain-en-Laye est une ville résidentielle haut de gamme avec son chateau et sa forêt. Les parkings des résidences, du centre-ville et des équipements culturels font appel a notre expertise.',
    zones: ['Centre', 'forêt', 'Camp des Loges', 'Bel Air', 'Schnapper']
  },
  {
    slug: 'mantes-la-jolie',
    name: 'Mantes-la-Jolie',
    context: 'Mantes-la-Jolie connaît une importante rénovation urbaine. Les nouveaux programmes, les zones commerciales et les équipements publics génèrent des besoins en marquage professionnel.',
    zones: ['Centre', 'Val Fourre', 'Gassicourt', 'Gare', 'Buchelay']
  },
  {
    slug: 'sartrouville',
    name: 'Sartrouville',
    context: 'Sartrouville combine zones résidentielles et activités économiques. Les parkings des entreprises, des centres commerciaux et des résidences constituent notre marché principal.',
    zones: ['Centre', 'Plateau', 'Vaudoire', 'Lemaignan', 'Gare']
  },
  {
    slug: 'poissy',
    name: 'Poissy',
    context: 'Poissy accueille un important site industriel automobile et des zones logistiques. Les parkings d\'usines, les entrepôts et les résidences font appel a nos services de marquage.',
    zones: ['Centre', 'Beauregard', 'Clos d\'Arcy', 'Migneaux', 'Abbaye']
  },
  {
    slug: 'conflans-sainte-honorine',
    name: 'Conflans-Sainte-Honorine',
    context: 'Conflans-Sainte-Honorine est la capitale de la batellerie. Les zones portuaires, les résidences et les équipements publics nécessitent un marquage adapté a leurs contraintes.',
    zones: ['Centre', 'Acheney', 'Chennevieres', 'Fin d\'Oise', 'Port']
  },
  {
    slug: 'montigny-le-bretonneux',
    name: 'Montigny-le-Bretonneux',
    context: 'Montigny-le-Bretonneux fait partie de Saint-Quentin-en-Yvelines. Les parkings du quartier d\'affaires, les zones commerciales et les résidences modernes demandent un marquage professionnel.',
    zones: ['Saint-Quentin', 'Sourderie', 'Plan de l\'Eglise', 'Manet', 'Gare']
  },
  {
    slug: 'les-mureaux',
    name: 'Les Mureaux',
    context: 'Les Mureaux accueillent des sites industriels aeronautiques et des zones logistiques. Les parkings d\'usines, les entrepôts et les résidences font appel a notre expertise.',
    zones: ['Centre', 'Grand Ouest', 'Becheville', 'Espace', 'Bougimonts']
  },
  {
    slug: 'plaisir',
    name: 'Plaisir',
    context: 'Plaisir dispose de zones commerciales et d\'activités importantes. Les parkings du centre commercial, des entreprises et des résidences constituent notre clientèle.',
    zones: ['Centre', 'Ebisoires', 'Valibout', 'Garennes', 'Deux Portes']
  },
  {
    slug: 'trappes',
    name: 'Trappes',
    context: 'Trappes fait partie de Saint-Quentin-en-Yvelines avec des zones d\'activités dynamiques. Les parkings d\'entreprises, les centres commerciaux et les résidences nécessitent un marquage régulier.',
    zones: ['Centre', 'Merisiers', 'Plaine de Neauphle', 'Square de Prague', 'Gare']
  },
  {
    slug: 'houilles',
    name: 'Houilles',
    context: 'Houilles est une commune résidentielle proche de Paris. Les parkings de copropriétés, les centres commerciaux de quartier et les équipements publics font appel a nos services.',
    zones: ['Centre', 'Belles Vues', 'Gare', 'Tonneaux', 'Revelois']
  },
  {
    slug: 'chatou',
    name: 'Chatou',
    context: 'Chatou, celebre pour l\'Ile des Impressionnistes, combine habitat residentiel et activités tertiaires. Les parkings de résidences et d\'entreprises requièrent un marquage de qualité.',
    zones: ['Centre', 'Ile', 'Berges', 'Bords de Seine', 'Gare']
  }
];

const intros: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    "Les Yvelines comptent de nombreux parkings de résidences de standing, centres commerciaux et entreprises necessitant un marquage professionnel. Notre entreprise intervient dans tout le département 78, de Versailles a Saint-Germain-en-Laye, pour le traçage de vos places de stationnement, flèches de circulation et passages piétons securises.",
    "Dans le 78, les parkings vont des résidences cosues de Versailles aux grandes zones commerciales de Velizy ou Plaisir. Nous aménageons tous ces espaces avec un marquage au sol professionnel : places delimitees avec précision, circulation organisee logiquement, signalisation horizontale complète adaptée à chaque configuration spécifique.",
    "Le département des Yvelines regroupe des parkings aux exigences variees, des copropriétés haut de gamme aux zones d'activités de Saint-Quentin-en-Yvelines. Notre équipe de traceurs professionnels réalise le marquage complet de vos espaces de stationnement avec des peintures routieres certifiees et durables.",
    "De Mantes-la-Jolie a Sartrouville, les parkings du 78 font appel a notre expertise en marquage au sol. Nous intervenons sur tous types de surfaces pour délimiter vos places, tracer les voies de circulation et installer une signalisation horizontale conforme aux normes en vigueur dans le département.",
    "Poissy, Conflans-Sainte-Honorine, Montigny-le-Bretonneux : notre entreprise de marquage couvre l'ensemble des Yvelines. Que votre parking soit en sous-sol, en surface ou en ouvrage, nous realisons un traçage professionnel avec des équipements adaptés à chaque configuration."
  ],
  'marquage-au-sol-parking-prive': [
    "Les copropriétés et résidences privées des Yvelines font appel a notre expertise pour le marquage de leurs parkings. De Versailles a Saint-Germain-en-Laye, nous intervenons dans les résidences de standing pour délimiter les places attribuees, tracer les zones visiteurs et assurer une circulation fluide entre les niveaux.",
    "Dans le 78, les parkings prives des résidences haut de gamme nécessitent un marquage soigné et durable. Notre entreprise réalise le traçage personnalisé de vos emplacements avec numérotation, flèches directionnelles et signalisation complète pour optimiser l'utilisation de votre espace privatif.",
    "Les syndics et gestionnaires d'immeubles des Yvelines nous confient le marquage de leurs parkings prives. Nous intervenons a Chatou, Houilles, Le Vesinet et dans tout le département pour des travaux de traçage respectant le règlement de copropriété et les normes d'accessibilite.",
    "Votre parking prive dans les Yvelines merite un marquage professionnel valorisant votre patrimoine. Des résidences de Maisons-Laffitte aux copropriétés de Conflans-Sainte-Honorine, nous realisons des tracages sur mesure avec places numerotees et signaletique adaptée à votre configuration.",
    "Le marquage des parkings prives du 78 répond à des exigences spécifiques que nous maitrisons parfaitement. Attribution des places, zones réservées aux deux-roues, emplacements visiteurs : notre équipe configure votre parking selon vos besoins avec des materiaux haute résistance."
  ],
  'marquage-au-sol-stationnement': [
    "L'optimisation des zones de stationnement dans les Yvelines requiert une expertise technique que notre entreprise maîtrise depuis des annees. De Versailles a Mantes-la-Jolie, nous reorganisons vos espaces pour maximiser le nombre de places tout en garantissant une circulation sécurisée et fluide.",
    "Dans le département 78, chaque metre carre de stationnement compte. Notre bureau d'études analyse votre espace et propose une configuration optimale avec traçage des places aux dimensions réglementaires, voies de circulation adaptées et signalisation horizontale complète pour une gestion efficace.",
    "Les zones de stationnement des Yvelines bénéficient de notre savoir-faire en optimisation d'espace. Que vous soyez a Poissy, Sartrouville ou Trappes, nous reconfigurons vos parkings pour augmenter leur capacité tout en respectant les normes de sécurité et d'accessibilite en vigueur.",
    "Maximisez la capacité de vos stationnements dans le 78 grâce à notre expertise en marquage au sol. étude de faisabilite, proposition de configuration optimisee, traçage professionnel : nous accompagnons les collectivités et entreprises des Yvelines dans leurs projets d'aménagement.",
    "Le stationnement dans les Yvelines représente un enjeu majeur pour les commerces et entreprises. Notre entreprise vous aide a optimiser vos espaces avec un marquage intelligent : places standard, PMR, livraison, deux-roues, le tout organise pour faciliter la rotation des véhicules."
  ],
  'marquage-au-sol-parking-entreprise': [
    "Les entreprises des Yvelines font confiance a notre expertise pour le marquage de leurs parkings professionnels. Des zones d'activités de Velizy-Villacoublay aux parcs tertiaires de Saint-Quentin-en-Yvelines, nous realisons des aménagements complets avec places nominatives, visiteurs et direction.",
    "Le parking de votre entreprise dans le 78 reflete votre image professionnelle. Nous intervenons dans les zones d'activités de Plaisir, Les Mureaux et tout le département pour un marquage soigné incluant logo d'entreprise, places réservées et signaletique directionnelle personnalisée.",
    "Dans les Yvelines, les parkings d'entreprises nécessitent une organisation rigoureuse. Notre équipe tracé vos places collaborateurs, amenage les zones visiteurs et direction, installe la signalisation verticale et horizontale pour une gestion optimale de votre espace professionnel.",
    "De la start-up de Guyancourt au siege social de Montigny-le-Bretonneux, nous adaptons le marquage à la taille et aux besoins de chaque entreprise du 78. Places nominatives, bornes de recharge, deux-roues : votre parking devient un atout pour l'accueil de vos collaborateurs et clients.",
    "Les zones d'activités des Yvelines concentrent des milliers d'entreprises avec des besoins spécifiques en stationnement. Notre entreprise propose des solutions complètes de marquage incluant étude de flux, configuration optimisee et traçage professionnel avec intervention possible de nuit où le week-end."
  ],
  'marquage-au-sol-entrepôt': [
    "Les entrepôts et plateformes logistiques des Yvelines nécessitent un marquage au sol conforme aux normes de sécurité. De Poissy a Les Mureaux, nous realisons le traçage complet de vos zones de stockage, allees de circulation et quais de chargement avec des peintures industrielles haute résistance.",
    "Dans le 78, le secteur logistique exige un marquage d'entrepôt rigoureux et durable. Notre équipe intervient dans les zones d'activités de Plaisir, Trappes et tout le département pour délimiter vos emplacements palettes, zones de picking et voies de circulation engins conformes aux recommandations INRS.",
    "Le marquage de votre entrepôt dans les Yvelines optimise vos opérations quotidiennes. Codes couleurs normalises, numérotation des emplacements, flèches de circulation : nous structurons votre espace logistique pour ameliorer la productivite et garantir la sécurité de vos operateurs.",
    "Les plateformes logistiques du 78 font appel a notre expertise pour un marquage conforme aux exigences de leurs donneurs d'ordre. Tracage des zones de stockage, délimitation des aires de manoeuvre, signalisation des quais : nous couvrons tous les besoins de votre entrepôt.",
    "De l'entrepôt de e-commerce au centre de distribution, les Yvelines accueillent des installations logistiques majeures. Notre entreprise réalise le marquage complet de ces espaces avec des peintures epoxy resistantes au passage intensif des chariots elevateurs et transpalettes."
  ],
  'marquage-au-sol-industriel': [
    "Le secteur industriel des Yvelines bénéficie de notre expertise en marquage au sol haute performance. Des usines automobiles de Poissy aux sites aeronautiques des Mureaux, nous realisons des tracages resistants aux contraintes spécifiques de l'environnement industriel avec des produits certifies.",
    "Dans le 78, les sites industriels exigent un marquage conforme aux normes de sécurité les plus strictes. Notre équipe intervient pour délimiter les zones de danger, tracer les allees de circulation et installer une signalisation au sol visible et durable dans vos ateliers de production.",
    "Les zones industrielles des Yvelines, de Mantes-la-Jolie a Sartrouville, nous confient le marquage de leurs installations. Peintures epoxy haute résistance, bandes antiderapantes, pictogrammes de sécurité : nous maitrisons toutes les techniques adaptées au milieu industriel.",
    "Le marquage industriel dans le 78 répond à des cahiers des charges exigeants que notre entreprise maîtrise parfaitement. Zones ATEX, délimitation des postes de travail, cheminements piétons securises : nous garantissons la conformité de vos installations aux reglementations en vigueur.",
    "Automobile, aeronautique, pharmacie : les industries des Yvelines ont des besoins spécifiques en marquage au sol. Notre expertise couvre tous ces secteurs avec des solutions adaptées aux contraintes de proprete, de résistance chimique et de visibilité de chaque environnement de production."
  ],
  'marquage-au-sol-usine': [
    "Les usines des Yvelines font appel a notre savoir-faire pour le marquage de leurs zones de production. Du site Stellantis de Poissy aux industries de Saint-Quentin-en-Yvelines, nous intervenons pendant vos arrêts de production pour un traçage précis et resistant aux sollicitations industrielles.",
    "Dans le 78, le marquage d'usine contribue directement à la sécurité et à la productivite. Notre équipe réalise le traçage des allees de circulation, la délimitation des zones machines et l'installation des pictogrammes de sécurité conformes aux exigences de votre secteur d'activité.",
    "Les sites de production des Yvelines nécessitent un marquage au sol capable de resister aux passages intensifs et aux produits industriels. Nous utilisons des peintures epoxy bi-composants et des resines haute performance garantissant une tenue exceptionnelle dans le temps.",
    "Optimisez les flux de votre usine dans le 78 avec un marquage au sol structure et visible. Zones de stockage en-cours, allees logistiques, aires d'expedition : notre traçage organise votre espace de production pour une efficacite maximale de vos opérations quotidiennes.",
    "L'intervention en usine dans les Yvelines requiert une organisation spécifique que nous maitrisons. Travaux pendant les arrêts techniques, coordination avec vos équipes de maintenance, respect des regles de sécurité : notre entreprise s'adapté aux contraintes de votre site industriel."
  ],
  'marquage-routier-au-sol': [
    "Le marquage routier sur voiries privées des Yvelines fait partie de nos specialites. Lotissements, zones d'activités, campus d'entreprises : nous realisons le traçage des lignes, passages piétons et signalisation horizontale avec des produits homologues repondant aux normes routieres en vigueur.",
    "Dans le 78, les voiries privées nécessitent un marquage aussi qualitatif que les routes publiques. Notre entreprise intervient avec des peintures retroreflechissantes et des équipements professionnels pour tracer lignes de rive, axes, flèches directionnelles et passages piétons conformes.",
    "Les lotissements et résidences fermees des Yvelines nous confient le marquage de leurs voiries internes. De Versailles a Saint-Germain-en-Laye, nous garantissons une signalisation horizontale durable et visible assurant la sécurité de tous les usagers de vos espaces prives.",
    "Le marquage routier dans le 78 requiert des competences spécifiques et des équipements adaptés. Notre parc de traceuses professionnelles et notre expertise technique nous permettent d'intervenir sur tous types de voiries privées avec un resultat conforme aux attentes les plus exigeantes.",
    "Zones d'activités de Plaisir, campus de Guyancourt, lotissements de Maisons-Laffitte : le marquage routier des Yvelines répond à des normes strictes. Nos techniciens qualifies realisent des travaux durables avec des materiaux homologues pour une sécurité optimale."
  ],
  'marquage-garage-automobile': [
    "Les garages et concessions automobiles des Yvelines font appel a notre expertise pour le marquage de leurs espaces professionnels. De Poissy a Versailles, nous tracons vos zones atelier, aires de stockage véhicules et espaces clients avec des peintures resistantes aux produits automobiles.",
    "Dans le 78, les concessions automobiles nécessitent un marquage soigné refletant leur image de marque. Notre entreprise réalise le traçage complet de vos parkings exposition, zones SAV et ateliers mecaniques avec des solutions durables adaptées au trafic de véhicules neufs et d'occasion.",
    "Le marquage de votre garage automobile dans les Yvelines optimise votre espace de travail. délimitation des postes de reparation, zones de préparation, aires de lavage : nous organisons votre atelier pour une productivite maximale avec des peintures epoxy haute résistance.",
    "Les professionnels de l'automobile du 78 nous font confiance pour le marquage de leurs installations. Concessions, centres auto, carrosseries : notre équipe intervient avec des produits spécifiques resistants aux hydrocarbures, solvants et passages intensifs de véhicules.",
    "De l'atelier de mecanique independant à la grande concession, nous adaptons le marquage aux besoins de chaque professionnel automobile des Yvelines. Places clients, zone reception, parking collaborateurs : votre espace est organise pour accueillir efficacement votre clientèle."
  ],
  'marquage-zones-piétonnes': [
    "La sécurité des piétons dans les Yvelines est notre priorite lors de chaque intervention. Nous delimitons clairement les zones de circulation piétonne dans vos parkings, entrepôts et sites industriels du 78 avec des peintures contrastees et des revetements antiderapants certifies.",
    "Dans le département 78, la cohabitation piétons-véhicules nécessite un marquage au sol sans ambiguite. Notre entreprise tracé des cheminements securises, des passages piétons visibles et des zones d'attente conformes aux normes d'accessibilite pour proteger tous les usagers de vos espaces.",
    "Les zones piétonnes des entreprises et commerces des Yvelines doivent être clairement identifiées. Nous realisons le marquage de vos allees, traversees et espaces réservés aux piétons avec des couleurs normalisees et des materiaux antiderapants garantissant la sécurité même par temps humide.",
    "De Versailles a Mantes-la-Jolie, nous securisons les circulations piétonnes dans tous types d'établissements. Bandes podotactiles pour malvoyants, passages protégés, zones d'attente : notre marquage complet assure l'accessibilite et la sécurité de tous les usagers dans le 78.",
    "Le marquage des zones piétonnes dans les Yvelines répond à des exigences réglementaires strictes. Notre expertise couvre la délimitation des cheminements, l'installation de bandes de guidage PMR et le traçage des passages piétons conformes aux normes en vigueur sur votre site."
  ],
  'places-handicapees-pmr': [
    "La mise en accessibilite des parkings des Yvelines passe par des places PMR conformes à la réglementation. Notre entreprise réalise le traçage des emplacements handicapes aux dimensions réglementaires avec pictogrammes, signalisation verticale et cheminements accessibles dans tout le 78.",
    "Dans les Yvelines, chaque parking doit disposer de places PMR correctement dimensionnees et signalées. Nous intervenons de Versailles a Saint-Quentin-en-Yvelines pour creer ou remettre aux normes vos emplacements handicapes avec un marquage bleu réglementaire et une signalisation complète.",
    "Les places handicapees du 78 doivent respecter des dimensions précises de 3,30 metres de large minimum. Notre équipe tracé vos emplacements PMR avec le pictogramme réglementaire, les bandes de délimitation et l'espace de manoeuvre lateral obligatoire pour les fauteuils roulants.",
    "La conformité PMR des parkings des Yvelines est une obligation légale que notre entreprise vous aide a respecter. Nous realisons l'audit de vos installations existantes et proposons les aménagements nécessaires : places aux normes, cheminements accessibles, signalisation adaptée.",
    "De la création à la mise en conformité, nous accompagnons les gestionnaires de parkings du 78 dans leurs obligations d'accessibilite. Tracage des places PMR, installation des panneaux réglementaires, bandes de guidage : notre prestation complète garantit le respect des normes en vigueur."
  ],
  'signalisation-verticale': [
    "La signalisation verticale complète votre marquage au sol dans les Yvelines. Notre entreprise installe tous types de panneaux pour parkings, voiries privées et sites industriels du 78 : directionnels, réglementaires, informatifs, avec des supports adaptés à chaque configuration.",
    "Dans le département 78, une signalisation verticale de qualité ameliore la lisibilite de vos espaces. Nous fournissons et posons panneaux de parking, totems directionnels, signalisation PMR et équipements de sécurité pour une signaletique complète et coherente.",
    "Les parkings et zones d'activités des Yvelines nécessitent une signalisation verticale claire et durable. Notre équipe installe vos panneaux sur poteaux, en facade ou suspendus selon la configuration de votre site, avec des fixations adaptées garantissant une tenue parfaite.",
    "De Versailles a Mantes-la-Jolie, nous equipons vos espaces de la signalisation verticale réglementaire. Panneaux de stationnement, flèches directionnelles, indication des places PMR : notre gamme complète répond a tous les besoins de signaletique de votre parking ou site.",
    "La signalisation verticale dans le 78 doit respecter les normes en vigueur tout en s'adaptant à votre environnement. Notre bureau d'études propose des solutions sur mesure integrant panneaux standards et signaletique personnalisée pour une identification optimale de vos espaces."
  ],
  'pose-ralentisseur': [
    "La pose de ralentisseurs dans les Yvelines securise vos zones de circulation. Notre entreprise installe coussins berlinois, dos d'ane et ralentisseurs modulaires homologues dans les parkings, lotissements et zones d'activités du 78 pour maîtriser la vitesse des véhicules.",
    "Dans le département 78, les ralentisseurs contribuent à la sécurité des piétons et usagers. Nous posons des dispositifs conformes aux normes NF en vigueur, avec signalisation verticale et marquage au sol associes pour une efficacite maximale dans vos espaces de circulation.",
    "Les parkings et voiries privées des Yvelines bénéficient de notre expertise en pose de ralentisseurs. Coussins berlinois pour conserver le passage des bus, dos d'ane pour zones 30 : nous conseillons et installons le dispositif adapté à votre configuration et vos objectifs.",
    "Securisez les abords de vos établissements dans le 78 avec des ralentisseurs professionnels. Notre équipe intervient dans les ecoles, résidences et entreprises des Yvelines pour installer des dispositifs de reduction de vitesse efficaces et conformes à la réglementation.",
    "La pose de ralentisseurs dans les Yvelines respecte des regles techniques précises que nous maitrisons. étude d'implantation, choix du dispositif adapté, installation avec signalisation complète : notre prestation clé en main garantit la sécurité de vos zones de circulation."
  ],
  'installation-panneaux-parking': [
    "L'installation de panneaux de parking dans les Yvelines ameliore l'orientation de vos usagers. Notre entreprise pose toute la signaletique nécessaire à vos espaces de stationnement du 78 : entrées, sorties, numéros de niveaux, places réservées, tarifs et informations diverses.",
    "Dans le département 78, une signaletique de parking claire facilite l'experience de vos visiteurs. Nous concevons et installons panneaux directionnels, totems d'entrée, indications de niveaux et affichages informatifs adaptés à la configuration de votre parking souterrain ou de surface.",
    "Les parkings des Yvelines nécessitent une signaletique complète pour guider efficacement les automobilistes. Notre équipe installe panneaux d'orientation, indication des places disponibles par niveau et signalisation de sortie avec des supports robustes adaptés à votre environnement.",
    "De Versailles a Saint-Quentin-en-Yvelines, nous equipons vos parkings d'une signaletique professionnelle. Panneaux sur poteaux, suspendus ou muraux : notre gamme complète de solutions s'adapté a toutes les configurations pour une orientation optimale de vos usagers.",
    "L'installation de panneaux dans les parkings du 78 répond à des enjeux de fluidite et de sécurité. Notre bureau d'études analyse les flux de votre parking et propose une signaletique directionnelle efficace facilitant l'accès aux places et la sortie des véhicules."
  ],
  'pose-miroir-circulation': [
    "La pose de miroirs de circulation dans les Yvelines ameliore la visibilité dans vos parkings et voiries. Notre entreprise installe miroirs convexes et hemisphereiques dans les angles morts, sorties de parking et intersections du 78 pour prevenir les accidents.",
    "Dans le département 78, les miroirs de sécurité sont essentiels dans les parkings souterrains et zones a visibilité reduite. Nous posons des miroirs adaptés à chaque situation : intérieurs, extérieurs, anti-givre, avec fixation murale ou sur poteau selon votre configuration.",
    "Les parkings en ouvrage des Yvelines nécessitent des miroirs aux points strategiques. Notre équipe déterminé les emplacements optimaux et installe des miroirs convexes professionnels offrant un angle de vision large pour sécuriser les manoeuvres dans vos espaces souterrains.",
    "Securisez les zones aveugles de vos installations dans le 78 avec des miroirs de circulation adaptés. Sorties de parking, croisements d'allees, angles de batiments : nous identifions les points critiques et installons les équipements garantissant une visibilité optimale.",
    "La pose de miroirs dans les Yvelines répond à des besoins de sécurité que notre entreprise analyse avec précision. étude des angles morts, choix du diametre adapté, installation à la bonne hauteur : notre expertise garantit l'efficacite de chaque miroir installe."
  ],
  'installation-bornes-parking': [
    "L'installation de bornes de parking dans les Yvelines protège vos places réservées et organise votre stationnement. Notre entreprise pose bornes fixes, amovibles et retractables dans les parkings du 78 pour sécuriser les emplacements direction, PMR ou livraison.",
    "Dans le département 78, les bornes de parking materialisent clairement les places réservées. Nous installons des bornes metalliques robustes, avec système de verrouillage pour les modeles amovibles, garantissant la protection durable de vos emplacements attribues.",
    "Les parkings des Yvelines utilisent les bornes pour délimiter et proteger les places spécifiques. Notre équipe pose bornes fixes en acier, bornes rabattables avec clé et bornes automatiques retractables selon le niveau de sécurité et la frequence d'utilisation souhaitee.",
    "Protegez les places de votre parking dans le 78 avec des bornes adaptées à vos besoins. Direction, visiteurs VIP, pompiers, livraison : nous installons les dispositifs securisant chaque emplacement réservé avec des solutions fixes ou amovibles selon vos contraintes.",
    "L'installation de bornes dans les Yvelines s'adapté à chaque configuration de parking. Scellement dans le beton, fixation mecanique, alimentation électrique pour modeles motorises : notre expertise technique garantit une pose durable et un fonctionnement fiable de vos équipements."
  ],
  'pose-butees-parking': [
    "La pose de butees de parking dans les Yvelines facilite le positionnement des véhicules et protège vos installations. Notre entreprise installe des butees de roues en caoutchouc, beton ou plastique recycle dans les parkings du 78 pour un stationnement securise.",
    "Dans le département 78, les butees de parking guident les conducteurs et protegent murs et équipements. Nous posons des butees aux dimensions standard ou sur mesure, avec fixation mecanique ou collee, adaptées au trafic et aux contraintes de votre parking.",
    "Les parkings des Yvelines bénéficient de notre expertise en pose de butees de roues. Positionnees à la distance optimale, nos butees permettent aux véhicules de se garer correctement tout en preservant l'espace de circulation piéton et les équipements en bout de place.",
    "Securisez les places de votre parking dans le 78 avec des butees professionnelles. Notre équipe installe des butees haute visibilité en caoutchouc recycle, resistantes aux chocs et aux intemperies, pour un stationnement organise et des installations protégées.",
    "La pose de butees dans les Yvelines répond à des objectifs de sécurité et d'organisation. Nous determinons l'emplacement optimal de chaque butee pour garantir le bon positionnement des véhicules tout en preservant les cheminements piétons et accès techniques de votre parking."
  ]
};

const descriptions: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    "Notre équipe réalise le marquage complet de vos parkings dans les Yvelines : délimitation des places numerotees, traçage des flèches directionnelles, passages piétons securises et zones interdites. Nous utilisons des peintures routieres certifiees, resistantes au trafic intense. Places PMR conformes aux normes d'accessibilite incluses dans toutes nos prestations.",
    "Intervention sur tous types de parkings du 78 : souterrains, aeriens, en ouvrage. Nos techniciens tracent vos places aux dimensions réglementaires, installent la signalisation horizontale complète et realisent les finitions soignees. Travaux possibles de nuit où le week-end pour ne pas perturber votre activité.",
    "Marquage professionnel pour parkings des Yvelines avec peintures haute résistance. délimitation précise des emplacements, flèches de circulation visibles, zones de manoeuvre sécurisées. Nos traceurs utilisent des équipements de pointe garantissant un rendu net et durable sur tous types de revetements."
  ],
  'marquage-au-sol-parking-prive': [
    "Nous aménageons les parkings prives des Yvelines avec un marquage personnalisé. numérotation des places attribuees, zones visiteurs clairement identifiées, signalisation adaptée au règlement de copropriété. Nos peintures professionnelles resistent aux passages quotidiens et aux intemperies pour un resultat durable.",
    "Les copropriétés du 78 nous confient le traçage de leurs parkings. Places numerotees selon vos plans, emplacements deux-roues, zones de circulation : nous configurons votre espace selon les besoins de vos résidents. Intervention rapide avec minimum de gene pour les occupants.",
    "Valorisez votre parking prive dans les Yvelines avec un marquage soigné et professionnel. Notre équipe tracé places et circulations avec précision, installe la signaletique nécessaire et garantit un rendu esthetique correspondant au standing de votre résidence ou immeuble."
  ],
  'marquage-au-sol-stationnement': [
    "Optimisez la capacité de vos zones de stationnement dans le 78 avec notre expertise. étude de configuration, traçage aux dimensions réglementaires, integration des places PMR et zones spécifiques. Nos solutions maximisent le nombre de places tout en garantissant une circulation fluide.",
    "Le marquage de vos stationnements dans les Yvelines suit les normes en vigueur. Places standard de 2,30 m, voies de circulation adaptées aux véhicules, zones de manoeuvre sécurisées. Nous integrons places handicapees, livraison et deux-roues selon vos besoins spécifiques.",
    "Nous reorganisons vos espaces de stationnement du 78 pour une utilisation optimale. Analyse des flux, proposition de configuration amelioree, traçage professionnel. Nos solutions augmentent la capacité de vos parkings tout en ameliorant le confort des usagers."
  ],
  'marquage-au-sol-parking-entreprise': [
    "Le parking de votre entreprise dans les Yvelines bénéficie d'un marquage valorisant votre image. Places direction, visiteurs, collaborateurs clairement identifiées. Logo entreprise integrable au traçage. Intervention possible de nuit pour ne pas perturber votre activité professionnelle.",
    "Nous accompagnons les entreprises du 78 dans l'aménagement de leurs parkings. Configuration optimisee des places, signalisation directionnelle complète, integration des bornes de recharge. Un parking bien organise ameliore l'accueil de vos clients et le quotidien de vos équipes.",
    "Marquage professionnel pour parkings d'entreprises des Yvelines. Places nominatives avec plaques, zones visiteurs proches de l'entrée, emplacements livraison accessibles. Nos solutions refletent le professionnalisme de votre societe des l'arrivee sur votre site."
  ],
  'marquage-au-sol-entrepôt': [
    "Le marquage de votre entrepôt dans le 78 respecte les normes de sécurité INRS. Allees de circulation engins, zones de stockage codifiees par couleur, emplacements palettes numerotes. Nos peintures industrielles resistent au passage intensif des chariots elevateurs et transpalettes.",
    "Nous tracons vos zones logistiques dans les Yvelines avec précision. délimitation des aires de picking, zones de reception et expedition, voies de circulation piétons sécurisées. Notre marquage structure optimise vos opérations quotidiennes et renforce la sécurité de vos operateurs.",
    "entrepôts et plateformes logistiques du 78 : notre marquage répond aux exigences de vos donneurs d'ordre. Codes couleurs normalises, numérotation des emplacements, signalisation des zones dangereuses. Intervention rapide avec peintures a sechage accelere pour limiter l'interruption de votre activité."
  ],
  'marquage-au-sol-industriel': [
    "Les sites industriels des Yvelines bénéficient de notre expertise en marquage haute performance. Peintures epoxy resistantes aux produits chimiques, bandes antiderapantes sécurisées, pictogrammes conformes. Nous intervenons dans tous les secteurs : automobile, aeronautique, pharmacie, agroalimentaire.",
    "Marquage industriel dans le 78 conforme aux normes de sécurité les plus strictes. délimitation des zones dangereuses, chemins de circulation piétons, aires de stockage. Nos produits certifies garantissent une visibilité durable même dans les environnements les plus exigeants.",
    "Nous securisons vos installations industrielles des Yvelines avec un marquage professionnel. Zones ATEX, postes de travail, allees de circulation engins et piétons. Notre experience du milieu industriel nous permet de répondre aux cahiers des charges les plus techniques."
  ],
  'marquage-au-sol-usine': [
    "Le marquage de votre usine dans le 78 optimise les flux de production. Allees logistiques, zones de stockage en-cours, aires de préparation. Nos peintures epoxy bi-composants resistent aux contraintes industrielles les plus severes pour une tenue exceptionnelle dans le temps.",
    "Intervention en usine dans les Yvelines pendant vos arrêts techniques. Coordination avec vos équipes de maintenance, respect des délais impartis. Nous realisons le traçage complet de vos zones de production avec des produits adaptés à votre secteur d'activité.",
    "Les usines du 78 nous confient le marquage de leurs ateliers. délimitation des postes de travail, voies de circulation, zones de stockage. Notre traçage structure votre espace de production pour une efficacite maximale et une sécurité renforcee de vos operateurs."
  ],
  'marquage-routier-au-sol': [
    "Marquage routier professionnel sur voiries privées des Yvelines. Lignes axiales et de rive, passages piétons normalises, flèches directionnelles. Nos peintures retroreflechissantes homologuees garantissent une visibilité optimale de jour comme de nuit sur vos voiries internes.",
    "Nous intervenons sur les voiries privées du 78 avec des équipements professionnels. Traceuses autoportees, peintures aux normes routieres, microbilles de verre pour retroreflexion. Votre lotissement ou zone d'activités bénéficie d'un marquage aussi qualitatif que les routes publiques.",
    "Le marquage routier dans les Yvelines respecte les normes de signalisation horizontale. Nos techniciens qualifies realisent lignes, passages piétons et marquages speciaux avec des produits certifies. Travaux possibles de nuit pour les zones a fort trafic."
  ],
  'marquage-garage-automobile': [
    "Nous aménageons les garages automobiles des Yvelines avec des peintures adaptées. Resistantes aux hydrocarbures et solvants, nos solutions supportent le trafic intensif des véhicules. délimitation des postes de travail, zones clients, aires de stockage pour une organisation optimale.",
    "Les concessions du 78 font appel a notre expertise pour le marquage de leurs installations. Parkings exposition, zones SAV, ateliers mecaniques : nous tracons chaque espace avec des produits spécifiques au milieu automobile garantissant une tenue excellente.",
    "Votre garage automobile dans les Yvelines bénéficie d'un marquage professionnel durable. Peintures epoxy haute résistance, délimitation précise des zones, signalisation adaptée. Nous organisons votre espace pour une productivite maximale et un accueil client optimal."
  ],
  'marquage-zones-piétonnes': [
    "La sécurité des piétons dans les Yvelines passe par un marquage clairement visible. Nous delimitons vos cheminements avec des peintures contrastees, installons des revetements antiderapants et posons des bandes podotactiles pour les personnes malvoyantes conformement aux normes.",
    "Separons les flux piétons et véhicules dans vos installations du 78. Passages protégés, zones d'attente sécurisées, allees clairement identifiées. Notre marquage conforme aux codes couleurs normalises garantit la sécurité de tous les usagers de vos espaces.",
    "Marquage des zones piétonnes dans les Yvelines pour entreprises et commerces. Cheminements accessibles PMR, traversees sécurisées, zones d'attente. Nous utilisons des materiaux antiderapants garantissant la sécurité même par temps humide."
  ],
  'places-handicapees-pmr': [
    "création de places PMR conformes dans les Yvelines. Dimensions réglementaires de 3,30 m de large, pictogramme normalise, bandes de délimitation bleues. Nous installons également la signalisation verticale obligatoire et les cheminements accessibles jusqu'a l'entrée de votre établissement.",
    "Mise en conformité PMR de vos parkings du 78. Audit de l'existant, recommandations d'aménagement, traçage aux normes. Nos places handicapees respectent toutes les exigences réglementaires : dimensions, marquage, signalisation, accessibilite du cheminement.",
    "Les places handicapees des Yvelines doivent répondre à des normes précises. Nous realisons le traçage complet avec espace de manoeuvre lateral, pictogramme réglementaire et raccordement au cheminement accessible. Signalisation verticale fournie et installee."
  ],
  'signalisation-verticale': [
    "Installation de panneaux pour parkings et voiries des Yvelines. Signalisation réglementaire, directionnelle, informative. Nous fournissons et posons tous types de panneaux sur poteaux, en facade ou suspendus avec des fixations adaptées à votre configuration.",
    "complète votre marquage au sol dans le 78 avec une signalisation verticale coherente. Panneaux de stationnement, flèches directionnelles, indication PMR. Notre gamme répond a tous les besoins de signaletique pour une orientation optimale des usagers.",
    "Signalisation verticale professionnelle pour sites des Yvelines. Totems d'entrée, panneaux de niveaux, indications de places disponibles. Nous concevons et installons des solutions sur mesure integrant votre charte graphique si souhaite."
  ],
  'pose-ralentisseur': [
    "Installation de ralentisseurs homologues dans les Yvelines. Coussins berlinois, dos d'ane, plateaux traversants conformes aux normes NF. Nous realisons la pose complète avec signalisation verticale et marquage au sol associes pour une efficacite maximale.",
    "Securisez vos zones de circulation dans le 78 avec des ralentisseurs adaptés. étude d'implantation, choix du dispositif selon vos contraintes, installation professionnelle. Nos équipements homologues garantissent la sécurité des piétons et la reduction effective des vitesses.",
    "Les ralentisseurs des Yvelines doivent respecter la réglementation. Nous installons des dispositifs conformes avec signalisation associee. Coussins berlinois preservant le passage des bus, dos d'ane pour zones résidentielles : conseil et pose par nos techniciens."
  ],
  'installation-panneaux-parking': [
    "Signaletique complète pour parkings des Yvelines. Panneaux d'entrée et sortie, indications de niveaux, flèches directionnelles, tarifs. Nous concevons et installons une signalisation claire facilitant l'orientation de vos usagers dans votre parking.",
    "Les parkings du 78 bénéficient de notre expertise en signaletique. Totems d'entrée, panneaux directionnels, indication des places par niveau. Nos solutions sur mesure s'adaptent à la configuration de votre parking souterrain ou de surface.",
    "Installation professionnelle de panneaux de parking dans les Yvelines. Supports robustes, fixations adaptées, panneaux haute visibilité. Nous equipons vos espaces de stationnement d'une signaletique complète pour une experience usager optimale."
  ],
  'pose-miroir-circulation': [
    "Miroirs de sécurité pour parkings et voiries des Yvelines. Modeles convexes et hemisphereiques adaptés à chaque situation. Nous determinons les emplacements optimaux et installons vos miroirs à la bonne hauteur pour une visibilité maximale des angles morts.",
    "Ameliorez la sécurité dans vos parkings du 78 avec des miroirs de circulation professionnels. Sorties, croisements, angles de manoeuvre : nous equipons les zones a risque avec des miroirs adaptés. Installation rapide par nos techniciens.",
    "La pose de miroirs dans les Yvelines securise vos zones de circulation. Miroirs intérieurs ou extérieurs, anti-givre pour les espaces non couverts. Nous analysons votre configuration et installons les équipements garantissant une visibilité parfaite."
  ],
  'installation-bornes-parking': [
    "Bornes de protection pour parkings des Yvelines. Modeles fixes, amovibles ou retractables selon vos besoins. Nous installons des bornes metalliques robustes securisant vos places réservées : direction, PMR, pompiers, livraison.",
    "Protegez les places spécifiques de votre parking dans le 78 avec des bornes adaptées. système de verrouillage pour modeles amovibles, motorisation possible pour bornes retractables. Installation soignée avec scellement ou fixation mecanique selon le support.",
    "Les bornes de parking des Yvelines materialisent clairement vos places réservées. Nous posons bornes fixes en acier, bornes rabattables avec clé et bornes automatiques. Solutions durables avec finitions resistantes à la corrosion."
  ],
  'pose-butees-parking': [
    "Butees de parking pour stationnements des Yvelines. Modeles en caoutchouc recycle, beton ou plastique haute résistance. Nous installons vos butees à la distance optimale pour guider le positionnement des véhicules et proteger vos murs ou équipements.",
    "Facilitez le stationnement dans vos parkings du 78 avec des butees professionnelles. Positionnees avec précision, elles guident les conducteurs et preservent les espaces piétons. Fixation mecanique ou collee selon le type de sol.",
    "La pose de butees dans les Yvelines organise votre parking et protège vos installations. Butees haute visibilité jaune et noir, resistantes aux chocs et intemperies. Installation rapide par nos techniciens avec finition soignée."
  ]
};

function generateVariation(city: CityData, serviceSlug: string, index: number): ServiceLocationContent {
  const serviceName = serviceNames[serviceSlug];
  const introVariants = intros[serviceSlug];
  const descVariants = descriptions[serviceSlug];

  const intro = introVariants[(index + city.zones.length) % introVariants.length];
  const desc = descVariants[(index + city.slug.length) % descVariants.length];

  return {
    serviceSlug,
    locationSlug: city.slug,
    metaTitle: `${serviceName} a ${city.name} (78) | Devis Gratuit`,
    metaDescription: `${serviceName} a ${city.name} dans les Yvelines. Entreprise spécialisée, intervention rapide. Devis gratuit sous 24h.`,
    content: {
      introduction: intro,
      localContext: city.context,
      serviceDescription: desc
    },
    faqs: [
      {
        question: `Quel est le délai d'intervention a ${city.name} ?`,
        answer: `Nous intervenons sous 24 a 48h a ${city.name} (78). La visite technique et le devis sont gratuits.`
      },
      {
        question: `Intervenez-vous dans les quartiers de ${city.name} ?`,
        answer: `Oui, nous couvrons tous les quartiers de ${city.name} : ${city.zones.join(', ')} et environs.`
      },
      {
        question: `Quelles garanties proposez-vous a ${city.name} ?`,
        answer: `Tous nos travaux a ${city.name} sont garantis 5 ans minimum. Peintures professionnelles haute résistance.`
      }
    ]
  };
}

export const yvelinesVariations: ServiceLocationContent[] = [];

cities.forEach((city, cityIndex) => {
  services.forEach((serviceSlug, serviceIndex) => {
    yvelinesVariations.push(generateVariation(city, serviceSlug, cityIndex + serviceIndex));
  });
});
