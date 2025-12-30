import { ServiceLocationContent } from '../index';

const services = [
  'marquage-au-sol-parking', 'marquage-au-sol-parking-privé', 'marquage-au-sol-stationnement',
  'marquage-au-sol-parking-entreprise', 'marquage-au-sol-entrepôt', 'marquage-au-sol-industriel',
  'marquage-au-sol-usine', 'marquage-routier-au-sol', 'marquage-garage-automobile',
  'marquage-zones-piétonnes', 'places-handicapees-pmr', 'signalisation-verticale',
  'pose-ralentisseur', 'installation-panneaux-parking', 'pose-miroir-circulation',
  'installation-bornes-parking', 'pose-butées-parking',
  'marquage-au-sol-porte-de-garage', 'marquage-au-sol-portail-coulissant',
  'marquage-au-sol-portail-battant', 'marquage-au-sol-barriere-levante'
];

const serviceNames: Record<string, string> = {
  'marquage-au-sol-parking': 'Marquage au sol parking',
  'marquage-au-sol-parking-privé': 'Marquage parking privé',
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
  'pose-butées-parking': 'Pose butées parking',
  'marquage-au-sol-porte-de-garage': 'Marquage porte de garage',
  'marquage-au-sol-portail-coulissant': 'Marquage portail coulissant',
  'marquage-au-sol-portail-battant': 'Marquage portail battant',
  'marquage-au-sol-barriere-levante': 'Marquage barrière levante'
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
    context: 'Préfecture des Yvelines, Versailles accueille le célèbre château et de nombreuses institutions. Les parkings du centre historique, les résidences de standing et les zones administratives requièrent un marquage de qualité.',
    zones: ['Château', 'Notre-Dame', 'Chantiers', 'Montreuil', 'Saint-Louis']
  },
  {
    slug: 'saint-germain-en-laye',
    name: 'Saint-Germain-en-Laye',
    context: 'Saint-Germain-en-Laye est une ville résidentielle haut de gamme avec son château et sa forêt. Les parkings des résidences, du centre-ville et des équipements culturels font appel à notre expertise.',
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
    context: 'Poissy accueille un important site industriel automobile et des zones logistiques. Les parkings d\'usines, les entrepôts et les résidences font appel à nos services de marquage.',
    zones: ['Centre', 'Beauregard', 'Clos d\'Arcy', 'Migneaux', 'Abbaye']
  },
  {
    slug: 'conflans-sainte-honorine',
    name: 'Conflans-Sainte-Honorine',
    context: 'Conflans-Sainte-Honorine est la capitale de la batellerie. Les zones portuaires, les résidences et les équipements publics nécessitent un marquage adapté à leurs contraintes.',
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
    context: 'Les Mureaux accueillent des sites industriels aéronautiques et des zones logistiques. Les parkings d\'usines, les entrepôts et les résidences font appel à notre expertise.',
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
    context: 'Houilles est une commune résidentielle proche de Paris. Les parkings de copropriétés, les centres commerciaux de quartier et les équipements publics font appel à nos services.',
    zones: ['Centre', 'Belles Vues', 'Gare', 'Tonneaux', 'Revelois']
  },
  {
    slug: 'chatou',
    name: 'Chatou',
    context: 'Chatou, célèbre pour l\'Ile des Impressionnistes, combine habitat résidentiel et activités tertiaires. Les parkings de résidences et d\'entreprises requièrent un marquage de qualité.',
    zones: ['Centre', 'Ile', 'Berges', 'Bords de Seine', 'Gare']
  }
];

const intros: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    "Les Yvelines comptent de nombreux parkings de résidences de standing, centres commerciaux et entreprises nécessitant un marquage professionnel. Notre entreprise intervient dans tout le département 78, de Versailles à Saint-Germain-en-Laye, pour le traçage de vos places de stationnement, flèches de circulation et passages piétons sécurisés.",
    "Dans le 78, les parkings vont des résidences cosues de Versailles aux grandes zones commerciales de Vélizy ou Plaisir. Nous aménageons tous ces espaces avec un marquage au sol professionnel : places délimitées avec précision, circulation organisée logiquement, signalisation horizontale complète adaptée à chaque configuration spécifique.",
    "Le département des Yvelines regroupe des parkings aux exigences variées, des copropriétés haut de gamme aux zones d'activités de Saint-Quentin-en-Yvelines. Notre équipe de traceurs professionnels réalise le marquage complet de vos espaces de stationnement avec des peintures routières certifiées et durables.",
    "De Mantes-la-Jolie à Sartrouville, les parkings du 78 font appel à notre expertise en marquage au sol. Nous intervenons sur tous types de surfaces pour délimiter vos places, tracer les voies de circulation et installer une signalisation horizontale conforme aux normes en vigueur dans le département.",
    "Poissy, Conflans-Sainte-Honorine, Montigny-le-Bretonneux : notre entreprise de marquage couvre l'ensemble des Yvelines. Que votre parking soit en sous-sol, en surface ou en ouvrage, nous réalisons un traçage professionnel avec des équipements adaptés à chaque configuration."
  ],
  'marquage-au-sol-parking-privé': [
    "Les copropriétés et résidences privées des Yvelines font appel à notre expertise pour le marquage de leurs parkings. De Versailles à Saint-Germain-en-Laye, nous intervenons dans les résidences de standing pour délimiter les places attribuées, tracer les zones visiteurs et assurer une circulation fluide entre les niveaux.",
    "Dans le 78, les parkings privés des résidences haut de gamme nécessitent un marquage soigné et durable. Notre entreprise réalise le traçage personnalisé de vos emplacements avec numérotation, flèches directionnelles et signalisation complète pour optimiser l'utilisation de votre espace privatif.",
    "Les syndics et gestionnaires d'immeubles des Yvelines nous confient le marquage de leurs parkings privés. Nous intervenons à Chatou, Houilles, Le Vesinet et dans tout le département pour des travaux de traçage respectant le règlement de copropriété et les normes d'accessibilité.",
    "Votre parking privé dans les Yvelines merite un marquage professionnel valorisant votre patrimoine. Des résidences de Maisons-Laffitte aux copropriétés de Conflans-Sainte-Honorine, nous réalisons des traçages sur mesure avec places numérotées et signalétique adaptée à votre configuration.",
    "Le marquage des parkings privés du 78 répond à des exigences spécifiques que nous maîtrisons parfaitement. Attribution des places, zones réservées aux deux-roues, emplacements visiteurs : notre équipe configure votre parking selon vos besoins avec des matériaux haute résistance."
  ],
  'marquage-au-sol-stationnement': [
    "L'optimisation des zones de stationnement dans les Yvelines requiert une expertise technique que notre entreprise maîtrise depuis des années. De Versailles à Mantes-la-Jolie, nous réorganisons vos espaces pour maximiser le nombre de places tout en garantissant une circulation sécurisée et fluide.",
    "Dans le département 78, chaque mètre carré de stationnement compte. Notre bureau d'études analyse votre espace et propose une configuration optimale avec traçage des places aux dimensions réglementaires, voies de circulation adaptées et signalisation horizontale complète pour une gestion efficace.",
    "Les zones de stationnement des Yvelines bénéficient de notre savoir-faire en optimisation d'espace. Que vous soyez à Poissy, Sartrouville ou Trappes, nous reconfigurons vos parkings pour augmenter leur capacité tout en respectant les normes de sécurité et d'accessibilité en vigueur.",
    "Maximisez la capacité de vos stationnements dans le 78 grâce à notre expertise en marquage au sol. étude de faisabilité, proposition de configuration optimisée, traçage professionnel : nous accompagnons les collectivités et entreprises des Yvelines dans leurs projets d'aménagement.",
    "Le stationnement dans les Yvelines représente un enjeu majeur pour les commerces et entreprises. Notre entreprise vous aide à optimiser vos espaces avec un marquage intelligent : places standard, PMR, livraison, deux-roues, le tout organisé pour faciliter la rotation des véhicules."
  ],
  'marquage-au-sol-parking-entreprise': [
    "Les entreprises des Yvelines font confiance à notre expertise pour le marquage de leurs parkings professionnels. Des zones d'activités de Vélizy-Villacoublay aux parcs tertiaires de Saint-Quentin-en-Yvelines, nous réalisons des aménagements complets avec places nominatives, visiteurs et direction.",
    "Le parking de votre entreprise dans le 78 reflète votre image professionnelle. Nous intervenons dans les zones d'activités de Plaisir, Les Mureaux et tout le département pour un marquage soigné incluant logo d'entreprise, places réservées et signalétique directionnelle personnalisée.",
    "Dans les Yvelines, les parkings d'entreprises nécessitent une organisation rigoureuse. Notre équipe trace vos places collaborateurs, aménage les zones visiteurs et direction, installe la signalisation verticale et horizontale pour une gestion optimale de votre espace professionnel.",
    "De la start-up de Guyancourt au siège social de Montigny-le-Bretonneux, nous adaptons le marquage à la taille et aux besoins de chaque entreprise du 78. Places nominatives, bornes de recharge, deux-roues : votre parking devient un atout pour l'accueil de vos collaborateurs et clients.",
    "Les zones d'activités des Yvelines concentrent des milliers d'entreprises avec des besoins spécifiques en stationnement. Notre entreprise propose des solutions complètes de marquage incluant étude de flux, configuration optimisée et traçage professionnel avec intervention possible de nuit ou le week-end."
  ],
  'marquage-au-sol-entrepôt': [
    "Les entrepôts et plateformes logistiques des Yvelines nécessitent un marquage au sol conforme aux normes de sécurité. De Poissy à Les Mureaux, nous réalisons le traçage complet de vos zones de stockage, allées de circulation et quais de chargement avec des peintures industrielles haute résistance.",
    "Dans le 78, le secteur logistique exige un marquage d'entrepôt rigoureux et durable. Notre équipe intervient dans les zones d'activités de Plaisir, Trappes et tout le département pour délimiter vos emplacements palettes, zones de picking et voies de circulation engins conformes aux recommandations INRS.",
    "Le marquage de votre entrepôt dans les Yvelines optimise vos opérations quotidiennes. Codes couleurs normalisés, numérotation des emplacements, flèches de circulation : nous structurons votre espace logistique pour améliorer la productivité et garantir la sécurité de vos opérateurs.",
    "Les plateformes logistiques du 78 font appel à notre expertise pour un marquage conforme aux exigences de leurs donneurs d'ordre. Tracage des zones de stockage, délimitation des aires de manoeuvre, signalisation des quais : nous couvrons tous les besoins de votre entrepôt.",
    "De l'entrepôt de e-commerce au centre de distribution, les Yvelines accueillent des installations logistiques majeures. Notre entreprise réalise le marquage complet de ces espaces avec des peintures époxy résistantes au passage intensif des chariots élévateurs et transpalettes."
  ],
  'marquage-au-sol-industriel': [
    "Le secteur industriel des Yvelines bénéficie de notre expertise en marquage au sol haute performance. Des usines automobiles de Poissy aux sites aéronautiques des Mureaux, nous réalisons des traçages résistants aux contraintes spécifiques de l'environnement industriel avec des produits certifiés.",
    "Dans le 78, les sites industriels exigent un marquage conforme aux normes de sécurité les plus strictes. Notre équipe intervient pour délimiter les zones de danger, tracer les allées de circulation et installer une signalisation au sol visible et durable dans vos ateliers de production.",
    "Les zones industrielles des Yvelines, de Mantes-la-Jolie à Sartrouville, nous confient le marquage de leurs installations. Peintures époxy haute résistance, bandes antidérapantes, pictogrammes de sécurité : nous maîtrisons toutes les techniques adaptées au milieu industriel.",
    "Le marquage industriel dans le 78 répond à des cahiers des charges exigeants que notre entreprise maîtrise parfaitement. Zones ATEX, délimitation des postes de travail, cheminements piétons sécurisés : nous garantissons la conformité de vos installations aux réglementations en vigueur.",
    "Automobile, aéronautique, pharmacie : les industries des Yvelines ont des besoins spécifiques en marquage au sol. Notre expertise couvre tous ces secteurs avec des solutions adaptées aux contraintes de propreté, de résistance chimique et de visibilité de chaque environnement de production."
  ],
  'marquage-au-sol-usine': [
    "Les usines des Yvelines font appel à notre savoir-faire pour le marquage de leurs zones de production. Du site Stellantis de Poissy aux industries de Saint-Quentin-en-Yvelines, nous intervenons pendant vos arrêts de production pour un traçage précis et résistant aux sollicitations industrielles.",
    "Dans le 78, le marquage d'usine contribue directement à la sécurité et à la productivité. Notre équipe réalise le traçage des allées de circulation, la délimitation des zones machines et l'installation des pictogrammes de sécurité conformes aux exigences de votre secteur d'activité.",
    "Les sites de production des Yvelines nécessitent un marquage au sol capable de résister aux passages intensifs et aux produits industriels. Nous utilisons des peintures époxy bi-composants et des résines haute performance garantissant une tenue exceptionnelle dans le temps.",
    "Optimisez les flux de votre usine dans le 78 avec un marquage au sol structure et visible. Zones de stockage en-cours, allées logistiques, aires d'expedition : notre traçage organise votre espace de production pour une efficacité maximale de vos opérations quotidiennes.",
    "L'intervention en usine dans les Yvelines requiert une organisation spécifique que nous maîtrisons. Travaux pendant les arrêts techniques, coordination avec vos équipes de maintenance, respect des règles de sécurité : notre entreprise s'adapte aux contraintes de votre site industriel."
  ],
  'marquage-routier-au-sol': [
    "Le marquage routier sur voiries privées des Yvelines fait partie de nos spécialités. Lotissements, zones d'activités, campus d'entreprises : nous réalisons le traçage des lignes, passages piétons et signalisation horizontale avec des produits homologués répondant aux normes routières en vigueur.",
    "Dans le 78, les voiries privées nécessitent un marquage aussi qualitatif que les routes publiques. Notre entreprise intervient avec des peintures rétroréfléchissantes et des équipements professionnels pour tracer lignes de rive, axes, flèches directionnelles et passages piétons conformes.",
    "Les lotissements et résidences fermées des Yvelines nous confient le marquage de leurs voiries internes. De Versailles à Saint-Germain-en-Laye, nous garantissons une signalisation horizontale durable et visible assurant la sécurité de tous les usagers de vos espaces privés.",
    "Le marquage routier dans le 78 requiert des compétences spécifiques et des équipements adaptés. Notre parc de traceuses professionnelles et notre expertise technique nous permettent d'intervenir sur tous types de voiries privées avec un résultat conforme aux attentes les plus exigeantes.",
    "Zones d'activités de Plaisir, campus de Guyancourt, lotissements de Maisons-Laffitte : le marquage routier des Yvelines répond à des normes strictes. Nos techniciens qualifiés réalisent des travaux durables avec des matériaux homologués pour une sécurité optimale."
  ],
  'marquage-garage-automobile': [
    "Les garages et concessions automobiles des Yvelines font appel à notre expertise pour le marquage de leurs espaces professionnels. De Poissy à Versailles, nous traçons vos zones atelier, aires de stockage véhicules et espaces clients avec des peintures résistantes aux produits automobiles.",
    "Dans le 78, les concessions automobiles nécessitent un marquage soigné reflétant leur image de marque. Notre entreprise réalise le traçage complet de vos parkings exposition, zones SAV et ateliers mécaniques avec des solutions durables adaptées au trafic de véhicules neufs et d'occasion.",
    "Le marquage de votre garage automobile dans les Yvelines optimise votre espace de travail. délimitation des postes de réparation, zones de préparation, aires de lavage : nous organisons votre atelier pour une productivité maximale avec des peintures époxy haute résistance.",
    "Les professionnels de l'automobile du 78 nous font confiance pour le marquage de leurs installations. Concessions, centres auto, carrosseries : notre équipe intervient avec des produits spécifiques résistants aux hydrocarbures, solvants et passages intensifs de véhicules.",
    "De l'atelier de mécanique indépendant à la grande concession, nous adaptons le marquage aux besoins de chaque professionnel automobile des Yvelines. Places clients, zone réception, parking collaborateurs : votre espace est organisé pour accueillir efficacement votre clientèle."
  ],
  'marquage-zones-piétonnes': [
    "La sécurité des piétons dans les Yvelines est notre priorité lors de chaque intervention. Nous délimitons clairement les zones de circulation piétonne dans vos parkings, entrepôts et sites industriels du 78 avec des peintures contrastées et des revêtements antidérapants certifiés.",
    "Dans le département 78, la cohabitation piétons-véhicules nécessite un marquage au sol sans ambiguïté. Notre entreprise trace des cheminements sécurisés, des passages piétons visibles et des zones d'attente conformes aux normes d'accessibilité pour protéger tous les usagers de vos espaces.",
    "Les zones piétonnes des entreprises et commerces des Yvelines doivent être clairement identifiées. Nous réalisons le marquage de vos allées, traversées et espaces réservés aux piétons avec des couleurs normalisées et des matériaux antidérapants garantissant la sécurité même par temps humide.",
    "De Versailles à Mantes-la-Jolie, nous sécurisons les circulations piétonnes dans tous types d'établissements. Bandes podotactiles pour malvoyants, passages protégés, zones d'attente : notre marquage complet assure l'accessibilité et la sécurité de tous les usagers dans le 78.",
    "Le marquage des zones piétonnes dans les Yvelines répond à des exigences réglementaires strictes. Notre expertise couvre la délimitation des cheminements, l'installation de bandes de guidage PMR et le traçage des passages piétons conformes aux normes en vigueur sur votre site."
  ],
  'places-handicapees-pmr': [
    "La mise en accessibilité des parkings des Yvelines passe par des places PMR conformes à la réglementation. Notre entreprise réalise le traçage des emplacements handicapés aux dimensions réglementaires avec pictogrammes, signalisation verticale et cheminements accessibles dans tout le 78.",
    "Dans les Yvelines, chaque parking doit disposer de places PMR correctement dimensionnées et signalées. Nous intervenons de Versailles à Saint-Quentin-en-Yvelines pour créer ou remettre aux normes vos emplacements handicapés avec un marquage bleu réglementaire et une signalisation complète.",
    "Les places handicapées du 78 doivent respecter des dimensions précises de 3,30 mètres de large minimum. Notre équipe trace vos emplacements PMR avec le pictogramme réglementaire, les bandes de délimitation et l'espace de manoeuvre latéral obligatoire pour les fauteuils roulants.",
    "La conformité PMR des parkings des Yvelines est une obligation légale que notre entreprise vous aide à respecter. Nous réalisons l'audit de vos installations existantes et proposons les aménagements nécessaires : places aux normes, cheminements accessibles, signalisation adaptée.",
    "De la création à la mise en conformité, nous accompagnons les gestionnaires de parkings du 78 dans leurs obligations d'accessibilité. Tracage des places PMR, installation des panneaux réglementaires, bandes de guidage : notre prestation complète garantit le respect des normes en vigueur."
  ],
  'signalisation-verticale': [
    "La signalisation verticale complète votre marquage au sol dans les Yvelines. Notre entreprise installe tous types de panneaux pour parkings, voiries privées et sites industriels du 78 : directionnels, réglementaires, informatifs, avec des supports adaptés à chaque configuration.",
    "Dans le département 78, une signalisation verticale de qualité améliore la lisibilité de vos espaces. Nous fournissons et posons panneaux de parking, totems directionnels, signalisation PMR et équipements de sécurité pour une signalétique complète et cohérente.",
    "Les parkings et zones d'activités des Yvelines nécessitent une signalisation verticale claire et durable. Notre équipe installe vos panneaux sur poteaux, en facade ou suspendus selon la configuration de votre site, avec des fixations adaptées garantissant une tenue parfaite.",
    "De Versailles à Mantes-la-Jolie, nous équipons vos espaces de la signalisation verticale réglementaire. Panneaux de stationnement, flèches directionnelles, indication des places PMR : notre gamme complète répond à tous les besoins de signalétique de votre parking ou site.",
    "La signalisation verticale dans le 78 doit respecter les normes en vigueur tout en s'adaptant à votre environnement. Notre bureau d'études propose des solutions sur mesure intégrant panneaux standards et signalétique personnalisée pour une identification optimale de vos espaces."
  ],
  'pose-ralentisseur': [
    "La pose de ralentisseurs dans les Yvelines sécurise vos zones de circulation. Notre entreprise installe coussins berlinois, dos d'ane et ralentisseurs modulaires homologués dans les parkings, lotissements et zones d'activités du 78 pour maîtriser la vitesse des véhicules.",
    "Dans le département 78, les ralentisseurs contribuent à la sécurité des piétons et usagers. Nous posons des dispositifs conformes aux normes NF en vigueur, avec signalisation verticale et marquage au sol associés pour une efficacité maximale dans vos espaces de circulation.",
    "Les parkings et voiries privées des Yvelines bénéficient de notre expertise en pose de ralentisseurs. Coussins berlinois pour conserver le passage des bus, dos d'ane pour zones 30 : nous conseillons et installons le dispositif adapté à votre configuration et vos objectifs.",
    "Sécurisez les abords de vos établissements dans le 78 avec des ralentisseurs professionnels. Notre équipe intervient dans les écoles, résidences et entreprises des Yvelines pour installer des dispositifs de réduction de vitesse efficaces et conformes à la réglementation.",
    "La pose de ralentisseurs dans les Yvelines respecte des règles techniques précises que nous maîtrisons. étude d'implantation, choix du dispositif adapté, installation avec signalisation complète : notre prestation clé en main garantit la sécurité de vos zones de circulation."
  ],
  'installation-panneaux-parking': [
    "L'installation de panneaux de parking dans les Yvelines améliore l'orientation de vos usagers. Notre entreprise pose toute la signalétique nécessaire à vos espaces de stationnement du 78 : entrées, sorties, numéros de niveaux, places réservées, tarifs et informations diverses.",
    "Dans le département 78, une signalétique de parking claire facilite l'expérience de vos visiteurs. Nous concevons et installons panneaux directionnels, totems d'entrée, indications de niveaux et affichages informatifs adaptés à la configuration de votre parking souterrain ou de surface.",
    "Les parkings des Yvelines nécessitent une signalétique complète pour guider efficacement les automobilistes. Notre équipe installe panneaux d'orientation, indication des places disponibles par niveau et signalisation de sortie avec des supports robustes adaptés à votre environnement.",
    "De Versailles à Saint-Quentin-en-Yvelines, nous équipons vos parkings d'une signalétique professionnelle. Panneaux sur poteaux, suspendus ou muraux : notre gamme complète de solutions s'adapte à toutes les configurations pour une orientation optimale de vos usagers.",
    "L'installation de panneaux dans les parkings du 78 répond à des enjeux de fluidité et de sécurité. Notre bureau d'études analyse les flux de votre parking et propose une signalétique directionnelle efficace facilitant l'accès aux places et la sortie des véhicules."
  ],
  'pose-miroir-circulation': [
    "La pose de miroirs de circulation dans les Yvelines améliore la visibilité dans vos parkings et voiries. Notre entreprise installe miroirs convexes et hémisphériques dans les angles morts, sorties de parking et intersections du 78 pour prévenir les accidents.",
    "Dans le département 78, les miroirs de sécurité sont essentiels dans les parkings souterrains et zones à visibilité réduite. Nous posons des miroirs adaptés à chaque situation : intérieurs, extérieurs, anti-givre, avec fixation murale ou sur poteau selon votre configuration.",
    "Les parkings en ouvrage des Yvelines nécessitent des miroirs aux points stratégiques. Notre équipe détermine les emplacements optimaux et installe des miroirs convexes professionnels offrant un angle de vision large pour sécuriser les manoeuvres dans vos espaces souterrains.",
    "Sécurisez les zones aveugles de vos installations dans le 78 avec des miroirs de circulation adaptés. Sorties de parking, croisements d'allées, angles de bâtiments : nous identifions les points critiques et installons les équipements garantissant une visibilité optimale.",
    "La pose de miroirs dans les Yvelines répond à des besoins de sécurité que notre entreprise analyse avec précision. étude des angles morts, choix du diamètre adapté, installation à la bonne hauteur : notre expertise garantit l'efficacité de chaque miroir installé."
  ],
  'installation-bornes-parking': [
    "L'installation de bornes de parking dans les Yvelines protège vos places réservées et organise votre stationnement. Notre entreprise pose bornes fixes, amovibles et rétractables dans les parkings du 78 pour sécuriser les emplacements direction, PMR ou livraison.",
    "Dans le département 78, les bornes de parking matérialisent clairement les places réservées. Nous installons des bornes métalliques robustes, avec système de verrouillage pour les modèles amovibles, garantissant la protection durable de vos emplacements attribués.",
    "Les parkings des Yvelines utilisent les bornes pour délimiter et protéger les places spécifiques. Notre équipe pose bornes fixes en acier, bornes rabattables avec clé et bornes automatiques rétractables selon le niveau de sécurité et la fréquence d'utilisation souhaitée.",
    "Protégez les places de votre parking dans le 78 avec des bornes adaptées à vos besoins. Direction, visiteurs VIP, pompiers, livraison : nous installons les dispositifs sécurisant chaque emplacement réservé avec des solutions fixes ou amovibles selon vos contraintes.",
    "L'installation de bornes dans les Yvelines s'adapte à chaque configuration de parking. Scellement dans le béton, fixation mécanique, alimentation électrique pour modèles motorisés : notre expertise technique garantit une pose durable et un fonctionnement fiable de vos équipements."
  ],
  'pose-butées-parking': [
    "La pose de butées de parking dans les Yvelines facilite le positionnement des véhicules et protège vos installations. Notre entreprise installe des butées de roues en caoutchouc, béton ou plastique recyclé dans les parkings du 78 pour un stationnement sécurisé.",
    "Dans le département 78, les butées de parking guident les conducteurs et protègent murs et équipements. Nous posons des butées aux dimensions standard ou sur mesure, avec fixation mécanique ou collée, adaptées au trafic et aux contraintes de votre parking.",
    "Les parkings des Yvelines bénéficient de notre expertise en pose de butées de roues. Positionnées à la distance optimale, nos butées permettent aux véhicules de se garer correctement tout en préservant l'espace de circulation piéton et les équipements en bout de place.",
    "Sécurisez les places de votre parking dans le 78 avec des butées professionnelles. Notre équipe installe des butées haute visibilité en caoutchouc recyclé, résistantes aux chocs et aux intempéries, pour un stationnement organisé et des installations protégées.",
    "La pose de butées dans les Yvelines répond à des objectifs de sécurité et d'organisation. Nous déterminons l'emplacement optimal de chaque butée pour garantir le bon positionnement des véhicules tout en préservant les cheminements piétons et accès techniques de votre parking."
  ],
  'marquage-au-sol-porte-de-garage': [
    "Le stationnement devant les portes de garage est un problème récurrent dans les Yvelines, particulièrement dans les zones résidentielles de Versailles, Saint-Germain-en-Laye et Chatou. Notre entreprise réalise le marquage réglementaire devant vos portes de garage : bandes hachurées jaunes, ligne d'interdiction et signalisation au sol dissuasive pour protéger efficacement l'accès à votre propriété.",
    "Dans le 78, les résidences pavillonnaires et copropriétés font régulièrement face au stationnement gênant devant leurs garages. Nous intervenons de Poissy à Sartrouville pour tracer les zones d'interdiction conformes au Code de la route, avec des peintures haute visibilité garantissant une dissuasion efficace.",
    "Les communes des Yvelines comme Montigny-le-Bretonneux, Plaisir et Trappes comptent de nombreux pavillons avec garages donnant sur rue. Notre équipe réalise le marquage au sol devant vos portes de garage avec des bandes jaunes réglementaires, assurant la protection de votre accès et le respect par les autres usagers."
  ],
  'marquage-au-sol-portail-coulissant': [
    "Les portails coulissants automatiques sont très répandus dans les résidences des Yvelines. De Versailles à Saint-Quentin-en-Yvelines, nous réalisons le marquage au sol de la zone de débattement : bandes hachurées de sécurité, interdiction de stationnement et signalisation conforme aux normes NF pour protéger le mécanisme et les usagers.",
    "Dans le département 78, les portails coulissants équipent de nombreuses propriétés et résidences sécurisées. Notre entreprise trace la zone de coulissement avec précision, installe les marquages d'interdiction et garantit un espace libre suffisant pour le fonctionnement optimal de votre portail automatique.",
    "Les lotissements et résidences fermées des Yvelines, de Maisons-Laffitte à Le Vésinet, disposent fréquemment de portails coulissants. Nous réalisons le marquage complet de la zone de débattement avec des peintures industrielles résistantes, assurant la sécurité et la longévité de votre installation."
  ],
  'marquage-au-sol-portail-battant': [
    "Les portails battants à deux vantaux sont caractéristiques des belles propriétés des Yvelines. De Saint-Germain-en-Laye à Versailles, nous traçons les arcs de débattement avec précision, délimitant clairement la zone d'ouverture pour éviter tout stationnement gênant et protéger votre portail automatique.",
    "Dans le 78, les entrées de propriétés avec portails battants nécessitent un marquage spécifique. Notre équipe réalise le traçage des zones de débattement, avec bandes hachurées et interdiction de stationnement, pour garantir l'ouverture complète de vos vantaux en toute sécurité.",
    "Les résidences de standing des Yvelines, à Chatou, Houilles ou Conflans-Sainte-Honorine, disposent souvent de portails battants élégants. Nous réalisons un marquage discret mais efficace de la zone d'ouverture, préservant l'esthétique tout en assurant la protection de votre installation."
  ],
  'marquage-au-sol-barriere-levante': [
    "Les barrières levantes équipent de nombreux parkings d'entreprises et résidences sécurisées des Yvelines. De Saint-Quentin-en-Yvelines aux zones d'activités de Vélizy-Villacoublay, nous réalisons le marquage complet des zones de sécurité : ligne d'arrêt, bandes de danger et signalisation au sol pour une utilisation sûre.",
    "Dans le département 78, les parkings avec barrières levantes automatiques nécessitent un marquage adapté. Notre entreprise trace les zones d'arrêt véhicules, délimite les espaces de sécurité et installe la signalisation horizontale conforme pour les parkings de Poissy, Les Mureaux et tout le département.",
    "Les résidences et zones commerciales des Yvelines font appel à notre expertise pour le marquage autour de leurs barrières levantes. Ligne de stop, hachures de sécurité, pictogrammes d'avertissement : nous sécurisons l'accès à vos parkings avec un marquage professionnel et durable."
  ]
};

const descriptions: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    "Notre équipe réalise le marquage complet de vos parkings dans les Yvelines : délimitation des places numérotées, traçage des flèches directionnelles, passages piétons sécurisés et zones interdites. Nous utilisons des peintures routières certifiées, résistantes au trafic intense. Places PMR conformes aux normes d'accessibilité incluses dans toutes nos prestations.",
    "Intervention sur tous types de parkings du 78 : souterrains, aériens, en ouvrage. Nos techniciens tracent vos places aux dimensions réglementaires, installent la signalisation horizontale complète et réalisent les finitions soignées. Travaux possibles de nuit ou le week-end pour ne pas perturber votre activité.",
    "Marquage professionnel pour parkings des Yvelines avec peintures haute résistance. délimitation précise des emplacements, flèches de circulation visibles, zones de manoeuvre sécurisées. Nos traceurs utilisent des équipements de pointe garantissant un rendu net et durable sur tous types de revêtements."
  ],
  'marquage-au-sol-parking-privé': [
    "Nous aménageons les parkings privés des Yvelines avec un marquage personnalisé. numérotation des places attribuées, zones visiteurs clairement identifiées, signalisation adaptée au règlement de copropriété. Nos peintures professionnelles résistent aux passages quotidiens et aux intempéries pour un résultat durable.",
    "Les copropriétés du 78 nous confient le traçage de leurs parkings. Places numérotées selon vos plans, emplacements deux-roues, zones de circulation : nous configurons votre espace selon les besoins de vos résidents. Intervention rapide avec minimum de gêne pour les occupants.",
    "Valorisez votre parking privé dans les Yvelines avec un marquage soigné et professionnel. Notre équipe trace places et circulations avec précision, installe la signalétique nécessaire et garantit un rendu esthétique correspondant au standing de votre résidence ou immeuble."
  ],
  'marquage-au-sol-stationnement': [
    "Optimisez la capacité de vos zones de stationnement dans le 78 avec notre expertise. étude de configuration, traçage aux dimensions réglementaires, intégration des places PMR et zones spécifiques. Nos solutions maximisent le nombre de places tout en garantissant une circulation fluide.",
    "Le marquage de vos stationnements dans les Yvelines suit les normes en vigueur. Places standard de 2,30 m, voies de circulation adaptées aux véhicules, zones de manoeuvre sécurisées. Nous intégrons places handicapées, livraison et deux-roues selon vos besoins spécifiques.",
    "Nous réorganisons vos espaces de stationnement du 78 pour une utilisation optimale. Analyse des flux, proposition de configuration améliorée, traçage professionnel. Nos solutions augmentent la capacité de vos parkings tout en améliorant le confort des usagers."
  ],
  'marquage-au-sol-parking-entreprise': [
    "Le parking de votre entreprise dans les Yvelines bénéficie d'un marquage valorisant votre image. Places direction, visiteurs, collaborateurs clairement identifiées. Logo entreprise intégrable au traçage. Intervention possible de nuit pour ne pas perturber votre activité professionnelle.",
    "Nous accompagnons les entreprises du 78 dans l'aménagement de leurs parkings. Configuration optimisée des places, signalisation directionnelle complète, intégration des bornes de recharge. Un parking bien organisé améliore l'accueil de vos clients et le quotidien de vos équipes.",
    "Marquage professionnel pour parkings d'entreprises des Yvelines. Places nominatives avec plaques, zones visiteurs proches de l'entrée, emplacements livraison accessibles. Nos solutions reflètent le professionnalisme de votre société dès l'arrivée sur votre site."
  ],
  'marquage-au-sol-entrepôt': [
    "Le marquage de votre entrepôt dans le 78 respecte les normes de sécurité INRS. Allées de circulation engins, zones de stockage codifiées par couleur, emplacements palettes numérotés. Nos peintures industrielles résistent au passage intensif des chariots élévateurs et transpalettes.",
    "Nous traçons vos zones logistiques dans les Yvelines avec précision. délimitation des aires de picking, zones de réception et expédition, voies de circulation piétons sécurisées. Notre marquage structure optimise vos opérations quotidiennes et renforce la sécurité de vos opérateurs.",
    "entrepôts et plateformes logistiques du 78 : notre marquage répond aux exigences de vos donneurs d'ordre. Codes couleurs normalisés, numérotation des emplacements, signalisation des zones dangereuses. Intervention rapide avec peintures à séchage accéléré pour limiter l'interruption de votre activité."
  ],
  'marquage-au-sol-industriel': [
    "Les sites industriels des Yvelines bénéficient de notre expertise en marquage haute performance. Peintures époxy résistantes aux produits chimiques, bandes antidérapantes sécurisées, pictogrammes conformes. Nous intervenons dans tous les secteurs : automobile, aéronautique, pharmacie, agroalimentaire.",
    "Marquage industriel dans le 78 conforme aux normes de sécurité les plus strictes. délimitation des zones dangereuses, chemins de circulation piétons, aires de stockage. Nos produits certifiés garantissent une visibilité durable même dans les environnements les plus exigeants.",
    "Nous sécurisons vos installations industrielles des Yvelines avec un marquage professionnel. Zones ATEX, postes de travail, allées de circulation engins et piétons. Notre expérience du milieu industriel nous permet de répondre aux cahiers des charges les plus techniques."
  ],
  'marquage-au-sol-usine': [
    "Le marquage de votre usine dans le 78 optimise les flux de production. Allées logistiques, zones de stockage en-cours, aires de préparation. Nos peintures époxy bi-composants résistent aux contraintes industrielles les plus sévères pour une tenue exceptionnelle dans le temps.",
    "Intervention en usine dans les Yvelines pendant vos arrêts techniques. Coordination avec vos équipes de maintenance, respect des délais impartis. Nous réalisons le traçage complet de vos zones de production avec des produits adaptés à votre secteur d'activité.",
    "Les usines du 78 nous confient le marquage de leurs ateliers. délimitation des postes de travail, voies de circulation, zones de stockage. Notre traçage structure votre espace de production pour une efficacité maximale et une sécurité renforcée de vos opérateurs."
  ],
  'marquage-routier-au-sol': [
    "Marquage routier professionnel sur voiries privées des Yvelines. Lignes axiales et de rive, passages piétons normalisés, flèches directionnelles. Nos peintures rétroréfléchissantes homologuées garantissent une visibilité optimale de jour comme de nuit sur vos voiries internes.",
    "Nous intervenons sur les voiries privées du 78 avec des équipements professionnels. Traceuses autoportées, peintures aux normes routières, microbilles de verre pour rétroréflexion. Votre lotissement ou zone d'activités bénéficie d'un marquage aussi qualitatif que les routes publiques.",
    "Le marquage routier dans les Yvelines respecte les normes de signalisation horizontale. Nos techniciens qualifiés réalisent lignes, passages piétons et marquages spéciaux avec des produits certifiés. Travaux possibles de nuit pour les zones à fort trafic."
  ],
  'marquage-garage-automobile': [
    "Nous aménageons les garages automobiles des Yvelines avec des peintures adaptées. Résistantes aux hydrocarbures et solvants, nos solutions supportent le trafic intensif des véhicules. délimitation des postes de travail, zones clients, aires de stockage pour une organisation optimale.",
    "Les concessions du 78 font appel à notre expertise pour le marquage de leurs installations. Parkings exposition, zones SAV, ateliers mécaniques : nous tracons chaque espace avec des produits spécifiques au milieu automobile garantissant une tenue excellente.",
    "Votre garage automobile dans les Yvelines bénéficie d'un marquage professionnel durable. Peintures époxy haute résistance, délimitation précise des zones, signalisation adaptée. Nous organisons votre espace pour une productivité maximale et un accueil client optimal."
  ],
  'marquage-zones-piétonnes': [
    "La sécurité des piétons dans les Yvelines passe par un marquage clairement visible. Nous délimitons vos cheminements avec des peintures contrastées, installons des revêtements antidérapants et posons des bandes podotactiles pour les personnes malvoyantes conformément aux normes.",
    "Séparons les flux piétons et véhicules dans vos installations du 78. Passages protégés, zones d'attente sécurisées, allées clairement identifiées. Notre marquage conforme aux codes couleurs normalisés garantit la sécurité de tous les usagers de vos espaces.",
    "Marquage des zones piétonnes dans les Yvelines pour entreprises et commerces. Cheminements accessibles PMR, traversées sécurisées, zones d'attente. Nous utilisons des matériaux antidérapants garantissant la sécurité même par temps humide."
  ],
  'places-handicapees-pmr': [
    "création de places PMR conformes dans les Yvelines. Dimensions réglementaires de 3,30 m de large, pictogramme normalisé, bandes de délimitation bleues. Nous installons également la signalisation verticale obligatoire et les cheminements accessibles jusqu'à l'entrée de votre établissement.",
    "Mise en conformité PMR de vos parkings du 78. Audit de l'existant, recommandations d'aménagement, traçage aux normes. Nos places handicapées respectent toutes les exigences réglementaires : dimensions, marquage, signalisation, accessibilité du cheminement.",
    "Les places handicapées des Yvelines doivent répondre à des normes précises. Nous réalisons le traçage complet avec espace de manoeuvre latéral, pictogramme réglementaire et raccordement au cheminement accessible. Signalisation verticale fournie et installée."
  ],
  'signalisation-verticale': [
    "Installation de panneaux pour parkings et voiries des Yvelines. Signalisation réglementaire, directionnelle, informative. Nous fournissons et posons tous types de panneaux sur poteaux, en facade ou suspendus avec des fixations adaptées à votre configuration.",
    "complète votre marquage au sol dans le 78 avec une signalisation verticale cohérente. Panneaux de stationnement, flèches directionnelles, indication PMR. Notre gamme répond à tous les besoins de signalétique pour une orientation optimale des usagers.",
    "Signalisation verticale professionnelle pour sites des Yvelines. Totems d'entrée, panneaux de niveaux, indications de places disponibles. Nous concevons et installons des solutions sur mesure intégrant votre charte graphique si souhaité."
  ],
  'pose-ralentisseur': [
    "Installation de ralentisseurs homologués dans les Yvelines. Coussins berlinois, dos d'ane, plateaux traversants conformes aux normes NF. Nous réalisons la pose complète avec signalisation verticale et marquage au sol associés pour une efficacité maximale.",
    "Sécurisez vos zones de circulation dans le 78 avec des ralentisseurs adaptés. étude d'implantation, choix du dispositif selon vos contraintes, installation professionnelle. Nos équipements homologués garantissent la sécurité des piétons et la réduction effective des vitesses.",
    "Les ralentisseurs des Yvelines doivent respecter la réglementation. Nous installons des dispositifs conformes avec signalisation associée. Coussins berlinois préservant le passage des bus, dos d'ane pour zones résidentielles : conseil et pose par nos techniciens."
  ],
  'installation-panneaux-parking': [
    "Signalétique complète pour parkings des Yvelines. Panneaux d'entrée et sortie, indications de niveaux, flèches directionnelles, tarifs. Nous concevons et installons une signalisation claire facilitant l'orientation de vos usagers dans votre parking.",
    "Les parkings du 78 bénéficient de notre expertise en signalétique. Totems d'entrée, panneaux directionnels, indication des places par niveau. Nos solutions sur mesure s'adaptent à la configuration de votre parking souterrain ou de surface.",
    "Installation professionnelle de panneaux de parking dans les Yvelines. Supports robustes, fixations adaptées, panneaux haute visibilité. Nous équipons vos espaces de stationnement d'une signalétique complète pour une expérience usager optimale."
  ],
  'pose-miroir-circulation': [
    "Miroirs de sécurité pour parkings et voiries des Yvelines. Modèles convexes et hémisphériques adaptés à chaque situation. Nous déterminons les emplacements optimaux et installons vos miroirs à la bonne hauteur pour une visibilité maximale des angles morts.",
    "Améliorez la sécurité dans vos parkings du 78 avec des miroirs de circulation professionnels. Sorties, croisements, angles de manoeuvre : nous équipons les zones à risque avec des miroirs adaptés. Installation rapide par nos techniciens.",
    "La pose de miroirs dans les Yvelines sécurise vos zones de circulation. Miroirs intérieurs ou extérieurs, anti-givre pour les espaces non couverts. Nous analysons votre configuration et installons les équipements garantissant une visibilité parfaite."
  ],
  'installation-bornes-parking': [
    "Bornes de protection pour parkings des Yvelines. Modèles fixes, amovibles ou rétractables selon vos besoins. Nous installons des bornes métalliques robustes sécurisant vos places réservées : direction, PMR, pompiers, livraison.",
    "Protégez les places spécifiques de votre parking dans le 78 avec des bornes adaptées. système de verrouillage pour modèles amovibles, motorisation possible pour bornes rétractables. Installation soignée avec scellement ou fixation mécanique selon le support.",
    "Les bornes de parking des Yvelines matérialisent clairement vos places réservées. Nous posons bornes fixes en acier, bornes rabattables avec clé et bornes automatiques. Solutions durables avec finitions résistantes à la corrosion."
  ],
  'pose-butées-parking': [
    "Butées de parking pour stationnements des Yvelines. Modèles en caoutchouc recyclé, béton ou plastique haute résistance. Nous installons vos butées à la distance optimale pour guider le positionnement des véhicules et protéger vos murs ou équipements.",
    "Facilitez le stationnement dans vos parkings du 78 avec des butées professionnelles. Positionnées avec précision, elles guident les conducteurs et préservent les espaces piétons. Fixation mécanique ou collée selon le type de sol.",
    "La pose de butées dans les Yvelines organise votre parking et protège vos installations. Butées haute visibilité jaune et noir, résistantes aux chocs et intempéries. Installation rapide par nos techniciens avec finition soignée."
  ],
  'marquage-au-sol-porte-de-garage': [
    "Marquage professionnel devant porte de garage dans les Yvelines. Bandes hachurées jaunes réglementaires, ligne d'interdiction de stationnement clairement visible. Nos peintures haute résistance garantissent une durabilité optimale face aux intempéries et au passage répété des véhicules.",
    "Protégez l'accès à votre garage dans le 78 avec un marquage dissuasif. Traçage conforme au Code de la route, couleurs réglementaires, finition soignée. Intervention rapide sur tout le département des Yvelines avec devis gratuit sous 24h.",
    "Notre entreprise réalise le marquage devant les portes de garage des Yvelines avec précision. Zone hachurée jaune et noire, ligne de recul, pictogrammes si nécessaire. Solution efficace contre le stationnement sauvage qui bloque votre accès."
  ],
  'marquage-au-sol-portail-coulissant': [
    "Marquage de zone de débattement pour portail coulissant dans les Yvelines. Nous traçons la zone de coulissement avec bandes de sécurité, hachures d'interdiction et signalisation conforme aux normes NF. Protection optimale de votre mécanisme automatique.",
    "Sécurisez votre portail coulissant dans le 78 avec un marquage professionnel. Délimitation précise de la zone de mouvement, peintures industrielles résistantes, intervention adaptée à votre configuration. Garantie 5 ans sur nos travaux.",
    "Les portails coulissants des Yvelines bénéficient de notre expertise en marquage au sol. Zone de débattement clairement délimitée, interdiction de stationnement matérialisée, signalisation complète pour une sécurité maximale des usagers et de l'installation."
  ],
  'marquage-au-sol-portail-battant': [
    "Marquage des arcs de débattement pour portail battant dans les Yvelines. Traçage précis des zones d'ouverture des vantaux, bandes hachurées de sécurité, interdiction de stationnement. Nos peintures routières résistent aux passages répétés et aux conditions climatiques.",
    "Protégez votre portail battant automatique dans le 78 avec un marquage adapté. Délimitation des zones de débattement des deux vantaux, signalisation au sol visible, finition professionnelle. Intervention sur tout le département des Yvelines.",
    "Le marquage pour portail battant dans les Yvelines assure la sécurité de votre installation. Arcs d'ouverture tracés avec précision, zones interdites clairement identifiées, peintures durables. Devis gratuit et intervention rapide sous 48h."
  ],
  'marquage-au-sol-barriere-levante': [
    "Marquage complet autour de barrière levante dans les Yvelines. Ligne d'arrêt véhicules, zone de sécurité hachurée, pictogrammes d'avertissement. Nos réalisations respectent les normes de sécurité pour parkings et garantissent une utilisation sûre de votre équipement.",
    "Sécurisez votre barrière levante dans le 78 avec un marquage professionnel. Délimitation de la zone de danger, ligne de stop, signalisation horizontale complète. Intervention sur parkings d'entreprises, résidences et commerces des Yvelines.",
    "Notre entreprise réalise le marquage au sol pour barrières levantes dans tout le département 78. Zone d'arrêt, bandes de sécurité, hachures normalisées. Peintures haute résistance adaptées au trafic intense des parkings professionnels."
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
    metaTitle: `${serviceName} à ${city.name} (78) | Devis Gratuit`,
    metaDescription: `${serviceName} à ${city.name} dans les Yvelines. Entreprise spécialisée, intervention rapide. Devis gratuit sous 24h.`,
    content: {
      introduction: intro,
      localContext: city.context,
      serviceDescription: desc
    },
    faqs: [
      {
        question: `Quel est le délai d'intervention à ${city.name} ?`,
        answer: `Nous intervenons sous 24 à 48h à ${city.name} (78). La visite technique et le devis sont gratuits.`
      },
      {
        question: `Intervenez-vous dans les quartiers de ${city.name} ?`,
        answer: `Oui, nous couvrons tous les quartiers de ${city.name} : ${city.zones.join(', ')} et environs.`
      },
      {
        question: `Quelles garanties proposez-vous à ${city.name} ?`,
        answer: `Tous nos travaux à ${city.name} sont garantis 5 ans minimum. Peintures professionnelles haute résistance.`
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
