import { ServiceLocationContent } from '../index';

const services = [
  'marquage-au-sol-parking', 'marquage-au-sol-parking-prive', 'marquage-au-sol-stationnement',
  'marquage-au-sol-parking-entreprise', 'marquage-au-sol-entrepot', 'marquage-au-sol-industriel',
  'marquage-au-sol-usine', 'marquage-routier-au-sol', 'marquage-garage-automobile',
  'marquage-zones-pietonnes', 'places-handicapees-pmr', 'signalisation-verticale',
  'pose-ralentisseur', 'installation-panneaux-parking', 'pose-miroir-circulation',
  'installation-bornes-parking', 'pose-butees-parking'
];

const serviceNames: Record<string, string> = {
  'marquage-au-sol-parking': 'Marquage au sol parking',
  'marquage-au-sol-parking-prive': 'Marquage parking prive',
  'marquage-au-sol-stationnement': 'Marquage stationnement',
  'marquage-au-sol-parking-entreprise': 'Marquage parking entreprise',
  'marquage-au-sol-entrepot': 'Marquage entrepot',
  'marquage-au-sol-industriel': 'Marquage industriel',
  'marquage-au-sol-usine': 'Marquage usine',
  'marquage-routier-au-sol': 'Marquage routier',
  'marquage-garage-automobile': 'Marquage garage automobile',
  'marquage-zones-pietonnes': 'Marquage zones pietonnes',
  'places-handicapees-pmr': 'Places handicapees PMR',
  'signalisation-verticale': 'Signalisation verticale',
  'pose-ralentisseur': 'Pose ralentisseur',
  'installation-panneaux-parking': 'Installation panneaux parking',
  'pose-miroir-circulation': 'Pose miroir circulation',
  'installation-bornes-parking': 'Installation bornes parking',
  'pose-butees-parking': 'Pose butees parking'
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
    context: 'Prefecture des Yvelines, Versailles accueille le celebre chateau et de nombreuses institutions. Les parkings du centre historique, les residences de standing et les zones administratives requierent un marquage de qualite.',
    zones: ['Chateau', 'Notre-Dame', 'Chantiers', 'Montreuil', 'Saint-Louis']
  },
  {
    slug: 'saint-germain-en-laye',
    name: 'Saint-Germain-en-Laye',
    context: 'Saint-Germain-en-Laye est une ville residentielle haut de gamme avec son chateau et sa foret. Les parkings des residences, du centre-ville et des equipements culturels font appel a notre expertise.',
    zones: ['Centre', 'Foret', 'Camp des Loges', 'Bel Air', 'Schnapper']
  },
  {
    slug: 'mantes-la-jolie',
    name: 'Mantes-la-Jolie',
    context: 'Mantes-la-Jolie connait une importante renovation urbaine. Les nouveaux programmes, les zones commerciales et les equipements publics generent des besoins en marquage professionnel.',
    zones: ['Centre', 'Val Fourre', 'Gassicourt', 'Gare', 'Buchelay']
  },
  {
    slug: 'sartrouville',
    name: 'Sartrouville',
    context: 'Sartrouville combine zones residentielles et activites economiques. Les parkings des entreprises, des centres commerciaux et des residences constituent notre marche principal.',
    zones: ['Centre', 'Plateau', 'Vaudoire', 'Lemaignan', 'Gare']
  },
  {
    slug: 'poissy',
    name: 'Poissy',
    context: 'Poissy accueille un important site industriel automobile et des zones logistiques. Les parkings d\'usines, les entrepots et les residences font appel a nos services de marquage.',
    zones: ['Centre', 'Beauregard', 'Clos d\'Arcy', 'Migneaux', 'Abbaye']
  },
  {
    slug: 'conflans-sainte-honorine',
    name: 'Conflans-Sainte-Honorine',
    context: 'Conflans-Sainte-Honorine est la capitale de la batellerie. Les zones portuaires, les residences et les equipements publics necessitent un marquage adapte a leurs contraintes.',
    zones: ['Centre', 'Acheney', 'Chennevieres', 'Fin d\'Oise', 'Port']
  },
  {
    slug: 'montigny-le-bretonneux',
    name: 'Montigny-le-Bretonneux',
    context: 'Montigny-le-Bretonneux fait partie de Saint-Quentin-en-Yvelines. Les parkings du quartier d\'affaires, les zones commerciales et les residences modernes demandent un marquage professionnel.',
    zones: ['Saint-Quentin', 'Sourderie', 'Plan de l\'Eglise', 'Manet', 'Gare']
  },
  {
    slug: 'les-mureaux',
    name: 'Les Mureaux',
    context: 'Les Mureaux accueillent des sites industriels aeronautiques et des zones logistiques. Les parkings d\'usines, les entrepots et les residences font appel a notre expertise.',
    zones: ['Centre', 'Grand Ouest', 'Becheville', 'Espace', 'Bougimonts']
  },
  {
    slug: 'plaisir',
    name: 'Plaisir',
    context: 'Plaisir dispose de zones commerciales et d\'activites importantes. Les parkings du centre commercial, des entreprises et des residences constituent notre clientele.',
    zones: ['Centre', 'Ebisoires', 'Valibout', 'Garennes', 'Deux Portes']
  },
  {
    slug: 'trappes',
    name: 'Trappes',
    context: 'Trappes fait partie de Saint-Quentin-en-Yvelines avec des zones d\'activites dynamiques. Les parkings d\'entreprises, les centres commerciaux et les residences necessitent un marquage regulier.',
    zones: ['Centre', 'Merisiers', 'Plaine de Neauphle', 'Square de Prague', 'Gare']
  },
  {
    slug: 'houilles',
    name: 'Houilles',
    context: 'Houilles est une commune residentielle proche de Paris. Les parkings de coproprietes, les centres commerciaux de quartier et les equipements publics font appel a nos services.',
    zones: ['Centre', 'Belles Vues', 'Gare', 'Tonneaux', 'Revelois']
  },
  {
    slug: 'chatou',
    name: 'Chatou',
    context: 'Chatou, celebre pour l\'Ile des Impressionnistes, combine habitat residentiel et activites tertiaires. Les parkings de residences et d\'entreprises requierent un marquage de qualite.',
    zones: ['Centre', 'Ile', 'Berges', 'Bords de Seine', 'Gare']
  }
];

const intros: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    "Les Yvelines comptent de nombreux parkings de residences de standing, centres commerciaux et entreprises necessitant un marquage professionnel. Notre entreprise intervient dans tout le departement 78, de Versailles a Saint-Germain-en-Laye, pour le tracage de vos places de stationnement, fleches de circulation et passages pietons securises.",
    "Dans le 78, les parkings vont des residences cosues de Versailles aux grandes zones commerciales de Velizy ou Plaisir. Nous amenageons tous ces espaces avec un marquage au sol professionnel : places delimitees avec precision, circulation organisee logiquement, signalisation horizontale complete adaptee a chaque configuration specifique.",
    "Le departement des Yvelines regroupe des parkings aux exigences variees, des coproprietes haut de gamme aux zones d'activites de Saint-Quentin-en-Yvelines. Notre equipe de traceurs professionnels realise le marquage complet de vos espaces de stationnement avec des peintures routieres certifiees et durables.",
    "De Mantes-la-Jolie a Sartrouville, les parkings du 78 font appel a notre expertise en marquage au sol. Nous intervenons sur tous types de surfaces pour delimiter vos places, tracer les voies de circulation et installer une signalisation horizontale conforme aux normes en vigueur dans le departement.",
    "Poissy, Conflans-Sainte-Honorine, Montigny-le-Bretonneux : notre entreprise de marquage couvre l'ensemble des Yvelines. Que votre parking soit en sous-sol, en surface ou en ouvrage, nous realisons un tracage professionnel avec des equipements adaptes a chaque configuration."
  ],
  'marquage-au-sol-parking-prive': [
    "Les coproprietes et residences privees des Yvelines font appel a notre expertise pour le marquage de leurs parkings. De Versailles a Saint-Germain-en-Laye, nous intervenons dans les residences de standing pour delimiter les places attribuees, tracer les zones visiteurs et assurer une circulation fluide entre les niveaux.",
    "Dans le 78, les parkings prives des residences haut de gamme necessitent un marquage soigne et durable. Notre entreprise realise le tracage personnalise de vos emplacements avec numerotation, fleches directionnelles et signalisation complete pour optimiser l'utilisation de votre espace privatif.",
    "Les syndics et gestionnaires d'immeubles des Yvelines nous confient le marquage de leurs parkings prives. Nous intervenons a Chatou, Houilles, Le Vesinet et dans tout le departement pour des travaux de tracage respectant le reglement de copropriete et les normes d'accessibilite.",
    "Votre parking prive dans les Yvelines merite un marquage professionnel valorisant votre patrimoine. Des residences de Maisons-Laffitte aux coproprietes de Conflans-Sainte-Honorine, nous realisons des tracages sur mesure avec places numerotees et signaletique adaptee a votre configuration.",
    "Le marquage des parkings prives du 78 repond a des exigences specifiques que nous maitrisons parfaitement. Attribution des places, zones reservees aux deux-roues, emplacements visiteurs : notre equipe configure votre parking selon vos besoins avec des materiaux haute resistance."
  ],
  'marquage-au-sol-stationnement': [
    "L'optimisation des zones de stationnement dans les Yvelines requiert une expertise technique que notre entreprise maitrise depuis des annees. De Versailles a Mantes-la-Jolie, nous reorganisons vos espaces pour maximiser le nombre de places tout en garantissant une circulation securisee et fluide.",
    "Dans le departement 78, chaque metre carre de stationnement compte. Notre bureau d'etudes analyse votre espace et propose une configuration optimale avec tracage des places aux dimensions reglementaires, voies de circulation adaptees et signalisation horizontale complete pour une gestion efficace.",
    "Les zones de stationnement des Yvelines beneficient de notre savoir-faire en optimisation d'espace. Que vous soyez a Poissy, Sartrouville ou Trappes, nous reconfigurons vos parkings pour augmenter leur capacite tout en respectant les normes de securite et d'accessibilite en vigueur.",
    "Maximisez la capacite de vos stationnements dans le 78 grace a notre expertise en marquage au sol. Etude de faisabilite, proposition de configuration optimisee, tracage professionnel : nous accompagnons les collectivites et entreprises des Yvelines dans leurs projets d'amenagement.",
    "Le stationnement dans les Yvelines represente un enjeu majeur pour les commerces et entreprises. Notre entreprise vous aide a optimiser vos espaces avec un marquage intelligent : places standard, PMR, livraison, deux-roues, le tout organise pour faciliter la rotation des vehicules."
  ],
  'marquage-au-sol-parking-entreprise': [
    "Les entreprises des Yvelines font confiance a notre expertise pour le marquage de leurs parkings professionnels. Des zones d'activites de Velizy-Villacoublay aux parcs tertiaires de Saint-Quentin-en-Yvelines, nous realisons des amenagements complets avec places nominatives, visiteurs et direction.",
    "Le parking de votre entreprise dans le 78 reflete votre image professionnelle. Nous intervenons dans les zones d'activites de Plaisir, Les Mureaux et tout le departement pour un marquage soigne incluant logo d'entreprise, places reservees et signaletique directionnelle personnalisee.",
    "Dans les Yvelines, les parkings d'entreprises necessitent une organisation rigoureuse. Notre equipe trace vos places collaborateurs, amenage les zones visiteurs et direction, installe la signalisation verticale et horizontale pour une gestion optimale de votre espace professionnel.",
    "De la start-up de Guyancourt au siege social de Montigny-le-Bretonneux, nous adaptons le marquage a la taille et aux besoins de chaque entreprise du 78. Places nominatives, bornes de recharge, deux-roues : votre parking devient un atout pour l'accueil de vos collaborateurs et clients.",
    "Les zones d'activites des Yvelines concentrent des milliers d'entreprises avec des besoins specifiques en stationnement. Notre entreprise propose des solutions completes de marquage incluant etude de flux, configuration optimisee et tracage professionnel avec intervention possible de nuit ou le week-end."
  ],
  'marquage-au-sol-entrepot': [
    "Les entrepots et plateformes logistiques des Yvelines necessitent un marquage au sol conforme aux normes de securite. De Poissy a Les Mureaux, nous realisons le tracage complet de vos zones de stockage, allees de circulation et quais de chargement avec des peintures industrielles haute resistance.",
    "Dans le 78, le secteur logistique exige un marquage d'entrepot rigoureux et durable. Notre equipe intervient dans les zones d'activites de Plaisir, Trappes et tout le departement pour delimiter vos emplacements palettes, zones de picking et voies de circulation engins conformes aux recommandations INRS.",
    "Le marquage de votre entrepot dans les Yvelines optimise vos operations quotidiennes. Codes couleurs normalises, numerotation des emplacements, fleches de circulation : nous structurons votre espace logistique pour ameliorer la productivite et garantir la securite de vos operateurs.",
    "Les plateformes logistiques du 78 font appel a notre expertise pour un marquage conforme aux exigences de leurs donneurs d'ordre. Tracage des zones de stockage, delimitation des aires de manoeuvre, signalisation des quais : nous couvrons tous les besoins de votre entrepot.",
    "De l'entrepot de e-commerce au centre de distribution, les Yvelines accueillent des installations logistiques majeures. Notre entreprise realise le marquage complet de ces espaces avec des peintures epoxy resistantes au passage intensif des chariots elevateurs et transpalettes."
  ],
  'marquage-au-sol-industriel': [
    "Le secteur industriel des Yvelines beneficie de notre expertise en marquage au sol haute performance. Des usines automobiles de Poissy aux sites aeronautiques des Mureaux, nous realisons des tracages resistants aux contraintes specifiques de l'environnement industriel avec des produits certifies.",
    "Dans le 78, les sites industriels exigent un marquage conforme aux normes de securite les plus strictes. Notre equipe intervient pour delimiter les zones de danger, tracer les allees de circulation et installer une signalisation au sol visible et durable dans vos ateliers de production.",
    "Les zones industrielles des Yvelines, de Mantes-la-Jolie a Sartrouville, nous confient le marquage de leurs installations. Peintures epoxy haute resistance, bandes antiderapantes, pictogrammes de securite : nous maitrisons toutes les techniques adaptees au milieu industriel.",
    "Le marquage industriel dans le 78 repond a des cahiers des charges exigeants que notre entreprise maitrise parfaitement. Zones ATEX, delimitation des postes de travail, cheminements pietons securises : nous garantissons la conformite de vos installations aux reglementations en vigueur.",
    "Automobile, aeronautique, pharmacie : les industries des Yvelines ont des besoins specifiques en marquage au sol. Notre expertise couvre tous ces secteurs avec des solutions adaptees aux contraintes de proprete, de resistance chimique et de visibilite de chaque environnement de production."
  ],
  'marquage-au-sol-usine': [
    "Les usines des Yvelines font appel a notre savoir-faire pour le marquage de leurs zones de production. Du site Stellantis de Poissy aux industries de Saint-Quentin-en-Yvelines, nous intervenons pendant vos arrets de production pour un tracage precis et resistant aux sollicitations industrielles.",
    "Dans le 78, le marquage d'usine contribue directement a la securite et a la productivite. Notre equipe realise le tracage des allees de circulation, la delimitation des zones machines et l'installation des pictogrammes de securite conformes aux exigences de votre secteur d'activite.",
    "Les sites de production des Yvelines necessitent un marquage au sol capable de resister aux passages intensifs et aux produits industriels. Nous utilisons des peintures epoxy bi-composants et des resines haute performance garantissant une tenue exceptionnelle dans le temps.",
    "Optimisez les flux de votre usine dans le 78 avec un marquage au sol structure et visible. Zones de stockage en-cours, allees logistiques, aires d'expedition : notre tracage organise votre espace de production pour une efficacite maximale de vos operations quotidiennes.",
    "L'intervention en usine dans les Yvelines requiert une organisation specifique que nous maitrisons. Travaux pendant les arrets techniques, coordination avec vos equipes de maintenance, respect des regles de securite : notre entreprise s'adapte aux contraintes de votre site industriel."
  ],
  'marquage-routier-au-sol': [
    "Le marquage routier sur voiries privees des Yvelines fait partie de nos specialites. Lotissements, zones d'activites, campus d'entreprises : nous realisons le tracage des lignes, passages pietons et signalisation horizontale avec des produits homologues repondant aux normes routieres en vigueur.",
    "Dans le 78, les voiries privees necessitent un marquage aussi qualitatif que les routes publiques. Notre entreprise intervient avec des peintures retroreflechissantes et des equipements professionnels pour tracer lignes de rive, axes, fleches directionnelles et passages pietons conformes.",
    "Les lotissements et residences fermees des Yvelines nous confient le marquage de leurs voiries internes. De Versailles a Saint-Germain-en-Laye, nous garantissons une signalisation horizontale durable et visible assurant la securite de tous les usagers de vos espaces prives.",
    "Le marquage routier dans le 78 requiert des competences specifiques et des equipements adaptes. Notre parc de traceuses professionnelles et notre expertise technique nous permettent d'intervenir sur tous types de voiries privees avec un resultat conforme aux attentes les plus exigeantes.",
    "Zones d'activites de Plaisir, campus de Guyancourt, lotissements de Maisons-Laffitte : le marquage routier des Yvelines repond a des normes strictes. Nos techniciens qualifies realisent des travaux durables avec des materiaux homologues pour une securite optimale."
  ],
  'marquage-garage-automobile': [
    "Les garages et concessions automobiles des Yvelines font appel a notre expertise pour le marquage de leurs espaces professionnels. De Poissy a Versailles, nous tracons vos zones atelier, aires de stockage vehicules et espaces clients avec des peintures resistantes aux produits automobiles.",
    "Dans le 78, les concessions automobiles necessitent un marquage soigne refletant leur image de marque. Notre entreprise realise le tracage complet de vos parkings exposition, zones SAV et ateliers mecaniques avec des solutions durables adaptees au trafic de vehicules neufs et d'occasion.",
    "Le marquage de votre garage automobile dans les Yvelines optimise votre espace de travail. Delimitation des postes de reparation, zones de preparation, aires de lavage : nous organisons votre atelier pour une productivite maximale avec des peintures epoxy haute resistance.",
    "Les professionnels de l'automobile du 78 nous font confiance pour le marquage de leurs installations. Concessions, centres auto, carrosseries : notre equipe intervient avec des produits specifiques resistants aux hydrocarbures, solvants et passages intensifs de vehicules.",
    "De l'atelier de mecanique independant a la grande concession, nous adaptons le marquage aux besoins de chaque professionnel automobile des Yvelines. Places clients, zone reception, parking collaborateurs : votre espace est organise pour accueillir efficacement votre clientele."
  ],
  'marquage-zones-pietonnes': [
    "La securite des pietons dans les Yvelines est notre priorite lors de chaque intervention. Nous delimitons clairement les zones de circulation pietonne dans vos parkings, entrepots et sites industriels du 78 avec des peintures contrastees et des revetements antiderapants certifies.",
    "Dans le departement 78, la cohabitation pietons-vehicules necessite un marquage au sol sans ambiguite. Notre entreprise trace des cheminements securises, des passages pietons visibles et des zones d'attente conformes aux normes d'accessibilite pour proteger tous les usagers de vos espaces.",
    "Les zones pietonnes des entreprises et commerces des Yvelines doivent etre clairement identifiees. Nous realisons le marquage de vos allees, traversees et espaces reserves aux pietons avec des couleurs normalisees et des materiaux antiderapants garantissant la securite meme par temps humide.",
    "De Versailles a Mantes-la-Jolie, nous securisons les circulations pietonnes dans tous types d'etablissements. Bandes podotactiles pour malvoyants, passages proteges, zones d'attente : notre marquage complet assure l'accessibilite et la securite de tous les usagers dans le 78.",
    "Le marquage des zones pietonnes dans les Yvelines repond a des exigences reglementaires strictes. Notre expertise couvre la delimitation des cheminements, l'installation de bandes de guidage PMR et le tracage des passages pietons conformes aux normes en vigueur sur votre site."
  ],
  'places-handicapees-pmr': [
    "La mise en accessibilite des parkings des Yvelines passe par des places PMR conformes a la reglementation. Notre entreprise realise le tracage des emplacements handicapes aux dimensions reglementaires avec pictogrammes, signalisation verticale et cheminements accessibles dans tout le 78.",
    "Dans les Yvelines, chaque parking doit disposer de places PMR correctement dimensionnees et signalees. Nous intervenons de Versailles a Saint-Quentin-en-Yvelines pour creer ou remettre aux normes vos emplacements handicapes avec un marquage bleu reglementaire et une signalisation complete.",
    "Les places handicapees du 78 doivent respecter des dimensions precises de 3,30 metres de large minimum. Notre equipe trace vos emplacements PMR avec le pictogramme reglementaire, les bandes de delimitation et l'espace de manoeuvre lateral obligatoire pour les fauteuils roulants.",
    "La conformite PMR des parkings des Yvelines est une obligation legale que notre entreprise vous aide a respecter. Nous realisons l'audit de vos installations existantes et proposons les amenagements necessaires : places aux normes, cheminements accessibles, signalisation adaptee.",
    "De la creation a la mise en conformite, nous accompagnons les gestionnaires de parkings du 78 dans leurs obligations d'accessibilite. Tracage des places PMR, installation des panneaux reglementaires, bandes de guidage : notre prestation complete garantit le respect des normes en vigueur."
  ],
  'signalisation-verticale': [
    "La signalisation verticale complete votre marquage au sol dans les Yvelines. Notre entreprise installe tous types de panneaux pour parkings, voiries privees et sites industriels du 78 : directionnels, reglementaires, informatifs, avec des supports adaptes a chaque configuration.",
    "Dans le departement 78, une signalisation verticale de qualite ameliore la lisibilite de vos espaces. Nous fournissons et posons panneaux de parking, totems directionnels, signalisation PMR et equipements de securite pour une signaletique complete et coherente.",
    "Les parkings et zones d'activites des Yvelines necessitent une signalisation verticale claire et durable. Notre equipe installe vos panneaux sur poteaux, en facade ou suspendus selon la configuration de votre site, avec des fixations adaptees garantissant une tenue parfaite.",
    "De Versailles a Mantes-la-Jolie, nous equipons vos espaces de la signalisation verticale reglementaire. Panneaux de stationnement, fleches directionnelles, indication des places PMR : notre gamme complete repond a tous les besoins de signaletique de votre parking ou site.",
    "La signalisation verticale dans le 78 doit respecter les normes en vigueur tout en s'adaptant a votre environnement. Notre bureau d'etudes propose des solutions sur mesure integrant panneaux standards et signaletique personnalisee pour une identification optimale de vos espaces."
  ],
  'pose-ralentisseur': [
    "La pose de ralentisseurs dans les Yvelines securise vos zones de circulation. Notre entreprise installe coussins berlinois, dos d'ane et ralentisseurs modulaires homologues dans les parkings, lotissements et zones d'activites du 78 pour maitriser la vitesse des vehicules.",
    "Dans le departement 78, les ralentisseurs contribuent a la securite des pietons et usagers. Nous posons des dispositifs conformes aux normes NF en vigueur, avec signalisation verticale et marquage au sol associes pour une efficacite maximale dans vos espaces de circulation.",
    "Les parkings et voiries privees des Yvelines beneficient de notre expertise en pose de ralentisseurs. Coussins berlinois pour conserver le passage des bus, dos d'ane pour zones 30 : nous conseillons et installons le dispositif adapte a votre configuration et vos objectifs.",
    "Securisez les abords de vos etablissements dans le 78 avec des ralentisseurs professionnels. Notre equipe intervient dans les ecoles, residences et entreprises des Yvelines pour installer des dispositifs de reduction de vitesse efficaces et conformes a la reglementation.",
    "La pose de ralentisseurs dans les Yvelines respecte des regles techniques precises que nous maitrisons. Etude d'implantation, choix du dispositif adapte, installation avec signalisation complete : notre prestation cle en main garantit la securite de vos zones de circulation."
  ],
  'installation-panneaux-parking': [
    "L'installation de panneaux de parking dans les Yvelines ameliore l'orientation de vos usagers. Notre entreprise pose toute la signaletique necessaire a vos espaces de stationnement du 78 : entrees, sorties, numeros de niveaux, places reservees, tarifs et informations diverses.",
    "Dans le departement 78, une signaletique de parking claire facilite l'experience de vos visiteurs. Nous concevons et installons panneaux directionnels, totems d'entree, indications de niveaux et affichages informatifs adaptes a la configuration de votre parking souterrain ou de surface.",
    "Les parkings des Yvelines necessitent une signaletique complete pour guider efficacement les automobilistes. Notre equipe installe panneaux d'orientation, indication des places disponibles par niveau et signalisation de sortie avec des supports robustes adaptes a votre environnement.",
    "De Versailles a Saint-Quentin-en-Yvelines, nous equipons vos parkings d'une signaletique professionnelle. Panneaux sur poteaux, suspendus ou muraux : notre gamme complete de solutions s'adapte a toutes les configurations pour une orientation optimale de vos usagers.",
    "L'installation de panneaux dans les parkings du 78 repond a des enjeux de fluidite et de securite. Notre bureau d'etudes analyse les flux de votre parking et propose une signaletique directionnelle efficace facilitant l'acces aux places et la sortie des vehicules."
  ],
  'pose-miroir-circulation': [
    "La pose de miroirs de circulation dans les Yvelines ameliore la visibilite dans vos parkings et voiries. Notre entreprise installe miroirs convexes et hemisphereiques dans les angles morts, sorties de parking et intersections du 78 pour prevenir les accidents.",
    "Dans le departement 78, les miroirs de securite sont essentiels dans les parkings souterrains et zones a visibilite reduite. Nous posons des miroirs adaptes a chaque situation : interieurs, exterieurs, anti-givre, avec fixation murale ou sur poteau selon votre configuration.",
    "Les parkings en ouvrage des Yvelines necessitent des miroirs aux points strategiques. Notre equipe determine les emplacements optimaux et installe des miroirs convexes professionnels offrant un angle de vision large pour securiser les manoeuvres dans vos espaces souterrains.",
    "Securisez les zones aveugles de vos installations dans le 78 avec des miroirs de circulation adaptes. Sorties de parking, croisements d'allees, angles de batiments : nous identifions les points critiques et installons les equipements garantissant une visibilite optimale.",
    "La pose de miroirs dans les Yvelines repond a des besoins de securite que notre entreprise analyse avec precision. Etude des angles morts, choix du diametre adapte, installation a la bonne hauteur : notre expertise garantit l'efficacite de chaque miroir installe."
  ],
  'installation-bornes-parking': [
    "L'installation de bornes de parking dans les Yvelines protege vos places reservees et organise votre stationnement. Notre entreprise pose bornes fixes, amovibles et retractables dans les parkings du 78 pour securiser les emplacements direction, PMR ou livraison.",
    "Dans le departement 78, les bornes de parking materialisent clairement les places reservees. Nous installons des bornes metalliques robustes, avec systeme de verrouillage pour les modeles amovibles, garantissant la protection durable de vos emplacements attribues.",
    "Les parkings des Yvelines utilisent les bornes pour delimiter et proteger les places specifiques. Notre equipe pose bornes fixes en acier, bornes rabattables avec cle et bornes automatiques retractables selon le niveau de securite et la frequence d'utilisation souhaitee.",
    "Protegez les places de votre parking dans le 78 avec des bornes adaptees a vos besoins. Direction, visiteurs VIP, pompiers, livraison : nous installons les dispositifs securisant chaque emplacement reserve avec des solutions fixes ou amovibles selon vos contraintes.",
    "L'installation de bornes dans les Yvelines s'adapte a chaque configuration de parking. Scellement dans le beton, fixation mecanique, alimentation electrique pour modeles motorises : notre expertise technique garantit une pose durable et un fonctionnement fiable de vos equipements."
  ],
  'pose-butees-parking': [
    "La pose de butees de parking dans les Yvelines facilite le positionnement des vehicules et protege vos installations. Notre entreprise installe des butees de roues en caoutchouc, beton ou plastique recycle dans les parkings du 78 pour un stationnement securise.",
    "Dans le departement 78, les butees de parking guident les conducteurs et protegent murs et equipements. Nous posons des butees aux dimensions standard ou sur mesure, avec fixation mecanique ou collee, adaptees au trafic et aux contraintes de votre parking.",
    "Les parkings des Yvelines beneficient de notre expertise en pose de butees de roues. Positionnees a la distance optimale, nos butees permettent aux vehicules de se garer correctement tout en preservant l'espace de circulation pieton et les equipements en bout de place.",
    "Securisez les places de votre parking dans le 78 avec des butees professionnelles. Notre equipe installe des butees haute visibilite en caoutchouc recycle, resistantes aux chocs et aux intemperies, pour un stationnement organise et des installations protegees.",
    "La pose de butees dans les Yvelines repond a des objectifs de securite et d'organisation. Nous determinons l'emplacement optimal de chaque butee pour garantir le bon positionnement des vehicules tout en preservant les cheminements pietons et acces techniques de votre parking."
  ]
};

const descriptions: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    "Notre equipe realise le marquage complet de vos parkings dans les Yvelines : delimitation des places numerotees, tracage des fleches directionnelles, passages pietons securises et zones interdites. Nous utilisons des peintures routieres certifiees, resistantes au trafic intense. Places PMR conformes aux normes d'accessibilite incluses dans toutes nos prestations.",
    "Intervention sur tous types de parkings du 78 : souterrains, aeriens, en ouvrage. Nos techniciens tracent vos places aux dimensions reglementaires, installent la signalisation horizontale complete et realisent les finitions soignees. Travaux possibles de nuit ou le week-end pour ne pas perturber votre activite.",
    "Marquage professionnel pour parkings des Yvelines avec peintures haute resistance. Delimitation precise des emplacements, fleches de circulation visibles, zones de manoeuvre securisees. Nos traceurs utilisent des equipements de pointe garantissant un rendu net et durable sur tous types de revetements."
  ],
  'marquage-au-sol-parking-prive': [
    "Nous amenageons les parkings prives des Yvelines avec un marquage personnalise. Numerotation des places attribuees, zones visiteurs clairement identifiees, signalisation adaptee au reglement de copropriete. Nos peintures professionnelles resistent aux passages quotidiens et aux intemperies pour un resultat durable.",
    "Les coproprietes du 78 nous confient le tracage de leurs parkings. Places numerotees selon vos plans, emplacements deux-roues, zones de circulation : nous configurons votre espace selon les besoins de vos residents. Intervention rapide avec minimum de gene pour les occupants.",
    "Valorisez votre parking prive dans les Yvelines avec un marquage soigne et professionnel. Notre equipe trace places et circulations avec precision, installe la signaletique necessaire et garantit un rendu esthetique correspondant au standing de votre residence ou immeuble."
  ],
  'marquage-au-sol-stationnement': [
    "Optimisez la capacite de vos zones de stationnement dans le 78 avec notre expertise. Etude de configuration, tracage aux dimensions reglementaires, integration des places PMR et zones specifiques. Nos solutions maximisent le nombre de places tout en garantissant une circulation fluide.",
    "Le marquage de vos stationnements dans les Yvelines suit les normes en vigueur. Places standard de 2,30 m, voies de circulation adaptees aux vehicules, zones de manoeuvre securisees. Nous integrons places handicapees, livraison et deux-roues selon vos besoins specifiques.",
    "Nous reorganisons vos espaces de stationnement du 78 pour une utilisation optimale. Analyse des flux, proposition de configuration amelioree, tracage professionnel. Nos solutions augmentent la capacite de vos parkings tout en ameliorant le confort des usagers."
  ],
  'marquage-au-sol-parking-entreprise': [
    "Le parking de votre entreprise dans les Yvelines beneficie d'un marquage valorisant votre image. Places direction, visiteurs, collaborateurs clairement identifiees. Logo entreprise integrable au tracage. Intervention possible de nuit pour ne pas perturber votre activite professionnelle.",
    "Nous accompagnons les entreprises du 78 dans l'amenagement de leurs parkings. Configuration optimisee des places, signalisation directionnelle complete, integration des bornes de recharge. Un parking bien organise ameliore l'accueil de vos clients et le quotidien de vos equipes.",
    "Marquage professionnel pour parkings d'entreprises des Yvelines. Places nominatives avec plaques, zones visiteurs proches de l'entree, emplacements livraison accessibles. Nos solutions refletent le professionnalisme de votre societe des l'arrivee sur votre site."
  ],
  'marquage-au-sol-entrepot': [
    "Le marquage de votre entrepot dans le 78 respecte les normes de securite INRS. Allees de circulation engins, zones de stockage codifiees par couleur, emplacements palettes numerotes. Nos peintures industrielles resistent au passage intensif des chariots elevateurs et transpalettes.",
    "Nous tracons vos zones logistiques dans les Yvelines avec precision. Delimitation des aires de picking, zones de reception et expedition, voies de circulation pietons securisees. Notre marquage structure optimise vos operations quotidiennes et renforce la securite de vos operateurs.",
    "Entrepots et plateformes logistiques du 78 : notre marquage repond aux exigences de vos donneurs d'ordre. Codes couleurs normalises, numerotation des emplacements, signalisation des zones dangereuses. Intervention rapide avec peintures a sechage accelere pour limiter l'interruption de votre activite."
  ],
  'marquage-au-sol-industriel': [
    "Les sites industriels des Yvelines beneficient de notre expertise en marquage haute performance. Peintures epoxy resistantes aux produits chimiques, bandes antiderapantes securisees, pictogrammes conformes. Nous intervenons dans tous les secteurs : automobile, aeronautique, pharmacie, agroalimentaire.",
    "Marquage industriel dans le 78 conforme aux normes de securite les plus strictes. Delimitation des zones dangereuses, chemins de circulation pietons, aires de stockage. Nos produits certifies garantissent une visibilite durable meme dans les environnements les plus exigeants.",
    "Nous securisons vos installations industrielles des Yvelines avec un marquage professionnel. Zones ATEX, postes de travail, allees de circulation engins et pietons. Notre experience du milieu industriel nous permet de repondre aux cahiers des charges les plus techniques."
  ],
  'marquage-au-sol-usine': [
    "Le marquage de votre usine dans le 78 optimise les flux de production. Allees logistiques, zones de stockage en-cours, aires de preparation. Nos peintures epoxy bi-composants resistent aux contraintes industrielles les plus severes pour une tenue exceptionnelle dans le temps.",
    "Intervention en usine dans les Yvelines pendant vos arrets techniques. Coordination avec vos equipes de maintenance, respect des delais impartis. Nous realisons le tracage complet de vos zones de production avec des produits adaptes a votre secteur d'activite.",
    "Les usines du 78 nous confient le marquage de leurs ateliers. Delimitation des postes de travail, voies de circulation, zones de stockage. Notre tracage structure votre espace de production pour une efficacite maximale et une securite renforcee de vos operateurs."
  ],
  'marquage-routier-au-sol': [
    "Marquage routier professionnel sur voiries privees des Yvelines. Lignes axiales et de rive, passages pietons normalises, fleches directionnelles. Nos peintures retroreflechissantes homologuees garantissent une visibilite optimale de jour comme de nuit sur vos voiries internes.",
    "Nous intervenons sur les voiries privees du 78 avec des equipements professionnels. Traceuses autoportees, peintures aux normes routieres, microbilles de verre pour retroreflexion. Votre lotissement ou zone d'activites beneficie d'un marquage aussi qualitatif que les routes publiques.",
    "Le marquage routier dans les Yvelines respecte les normes de signalisation horizontale. Nos techniciens qualifies realisent lignes, passages pietons et marquages speciaux avec des produits certifies. Travaux possibles de nuit pour les zones a fort trafic."
  ],
  'marquage-garage-automobile': [
    "Nous amenageons les garages automobiles des Yvelines avec des peintures adaptees. Resistantes aux hydrocarbures et solvants, nos solutions supportent le trafic intensif des vehicules. Delimitation des postes de travail, zones clients, aires de stockage pour une organisation optimale.",
    "Les concessions du 78 font appel a notre expertise pour le marquage de leurs installations. Parkings exposition, zones SAV, ateliers mecaniques : nous tracons chaque espace avec des produits specifiques au milieu automobile garantissant une tenue excellente.",
    "Votre garage automobile dans les Yvelines beneficie d'un marquage professionnel durable. Peintures epoxy haute resistance, delimitation precise des zones, signalisation adaptee. Nous organisons votre espace pour une productivite maximale et un accueil client optimal."
  ],
  'marquage-zones-pietonnes': [
    "La securite des pietons dans les Yvelines passe par un marquage clairement visible. Nous delimitons vos cheminements avec des peintures contrastees, installons des revetements antiderapants et posons des bandes podotactiles pour les personnes malvoyantes conformement aux normes.",
    "Separons les flux pietons et vehicules dans vos installations du 78. Passages proteges, zones d'attente securisees, allees clairement identifiees. Notre marquage conforme aux codes couleurs normalises garantit la securite de tous les usagers de vos espaces.",
    "Marquage des zones pietonnes dans les Yvelines pour entreprises et commerces. Cheminements accessibles PMR, traversees securisees, zones d'attente. Nous utilisons des materiaux antiderapants garantissant la securite meme par temps humide."
  ],
  'places-handicapees-pmr': [
    "Creation de places PMR conformes dans les Yvelines. Dimensions reglementaires de 3,30 m de large, pictogramme normalise, bandes de delimitation bleues. Nous installons egalement la signalisation verticale obligatoire et les cheminements accessibles jusqu'a l'entree de votre etablissement.",
    "Mise en conformite PMR de vos parkings du 78. Audit de l'existant, recommandations d'amenagement, tracage aux normes. Nos places handicapees respectent toutes les exigences reglementaires : dimensions, marquage, signalisation, accessibilite du cheminement.",
    "Les places handicapees des Yvelines doivent repondre a des normes precises. Nous realisons le tracage complet avec espace de manoeuvre lateral, pictogramme reglementaire et raccordement au cheminement accessible. Signalisation verticale fournie et installee."
  ],
  'signalisation-verticale': [
    "Installation de panneaux pour parkings et voiries des Yvelines. Signalisation reglementaire, directionnelle, informative. Nous fournissons et posons tous types de panneaux sur poteaux, en facade ou suspendus avec des fixations adaptees a votre configuration.",
    "Complete votre marquage au sol dans le 78 avec une signalisation verticale coherente. Panneaux de stationnement, fleches directionnelles, indication PMR. Notre gamme repond a tous les besoins de signaletique pour une orientation optimale des usagers.",
    "Signalisation verticale professionnelle pour sites des Yvelines. Totems d'entree, panneaux de niveaux, indications de places disponibles. Nous concevons et installons des solutions sur mesure integrant votre charte graphique si souhaite."
  ],
  'pose-ralentisseur': [
    "Installation de ralentisseurs homologues dans les Yvelines. Coussins berlinois, dos d'ane, plateaux traversants conformes aux normes NF. Nous realisons la pose complete avec signalisation verticale et marquage au sol associes pour une efficacite maximale.",
    "Securisez vos zones de circulation dans le 78 avec des ralentisseurs adaptes. Etude d'implantation, choix du dispositif selon vos contraintes, installation professionnelle. Nos equipements homologues garantissent la securite des pietons et la reduction effective des vitesses.",
    "Les ralentisseurs des Yvelines doivent respecter la reglementation. Nous installons des dispositifs conformes avec signalisation associee. Coussins berlinois preservant le passage des bus, dos d'ane pour zones residentielles : conseil et pose par nos techniciens."
  ],
  'installation-panneaux-parking': [
    "Signaletique complete pour parkings des Yvelines. Panneaux d'entree et sortie, indications de niveaux, fleches directionnelles, tarifs. Nous concevons et installons une signalisation claire facilitant l'orientation de vos usagers dans votre parking.",
    "Les parkings du 78 beneficient de notre expertise en signaletique. Totems d'entree, panneaux directionnels, indication des places par niveau. Nos solutions sur mesure s'adaptent a la configuration de votre parking souterrain ou de surface.",
    "Installation professionnelle de panneaux de parking dans les Yvelines. Supports robustes, fixations adaptees, panneaux haute visibilite. Nous equipons vos espaces de stationnement d'une signaletique complete pour une experience usager optimale."
  ],
  'pose-miroir-circulation': [
    "Miroirs de securite pour parkings et voiries des Yvelines. Modeles convexes et hemisphereiques adaptes a chaque situation. Nous determinons les emplacements optimaux et installons vos miroirs a la bonne hauteur pour une visibilite maximale des angles morts.",
    "Ameliorez la securite dans vos parkings du 78 avec des miroirs de circulation professionnels. Sorties, croisements, angles de manoeuvre : nous equipons les zones a risque avec des miroirs adaptes. Installation rapide par nos techniciens.",
    "La pose de miroirs dans les Yvelines securise vos zones de circulation. Miroirs interieurs ou exterieurs, anti-givre pour les espaces non couverts. Nous analysons votre configuration et installons les equipements garantissant une visibilite parfaite."
  ],
  'installation-bornes-parking': [
    "Bornes de protection pour parkings des Yvelines. Modeles fixes, amovibles ou retractables selon vos besoins. Nous installons des bornes metalliques robustes securisant vos places reservees : direction, PMR, pompiers, livraison.",
    "Protegez les places specifiques de votre parking dans le 78 avec des bornes adaptees. Systeme de verrouillage pour modeles amovibles, motorisation possible pour bornes retractables. Installation soignee avec scellement ou fixation mecanique selon le support.",
    "Les bornes de parking des Yvelines materialisent clairement vos places reservees. Nous posons bornes fixes en acier, bornes rabattables avec cle et bornes automatiques. Solutions durables avec finitions resistantes a la corrosion."
  ],
  'pose-butees-parking': [
    "Butees de parking pour stationnements des Yvelines. Modeles en caoutchouc recycle, beton ou plastique haute resistance. Nous installons vos butees a la distance optimale pour guider le positionnement des vehicules et proteger vos murs ou equipements.",
    "Facilitez le stationnement dans vos parkings du 78 avec des butees professionnelles. Positionnees avec precision, elles guident les conducteurs et preservent les espaces pietons. Fixation mecanique ou collee selon le type de sol.",
    "La pose de butees dans les Yvelines organise votre parking et protege vos installations. Butees haute visibilite jaune et noir, resistantes aux chocs et intemperies. Installation rapide par nos techniciens avec finition soignee."
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
    metaDescription: `${serviceName} a ${city.name} dans les Yvelines. Entreprise specialisee, intervention rapide. Devis gratuit sous 24h.`,
    content: {
      introduction: intro,
      localContext: city.context,
      serviceDescription: desc
    },
    faqs: [
      {
        question: `Quel est le delai d'intervention a ${city.name} ?`,
        answer: `Nous intervenons sous 24 a 48h a ${city.name} (78). La visite technique et le devis sont gratuits.`
      },
      {
        question: `Intervenez-vous dans les quartiers de ${city.name} ?`,
        answer: `Oui, nous couvrons tous les quartiers de ${city.name} : ${city.zones.join(', ')} et environs.`
      },
      {
        question: `Quelles garanties proposez-vous a ${city.name} ?`,
        answer: `Tous nos travaux a ${city.name} sont garantis 5 ans minimum. Peintures professionnelles haute resistance.`
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
