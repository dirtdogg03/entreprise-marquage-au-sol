import { ServiceLocationContent } from '../index';

// 12 villes du 92: Boulogne-Billancourt, Nanterre, Colombes, Asnieres-sur-Seine, Courbevoie, Rueil-Malmaison, Issy-les-Moulineaux, Levallois-Perret, Antony, Neuilly-sur-Seine, Clamart, Meudon
// 17 services = 204 variations

const services = [
  'marquage-au-sol-parking',
  'marquage-au-sol-parking-prive',
  'marquage-au-sol-stationnement',
  'marquage-au-sol-parking-entreprise',
  'marquage-au-sol-entrepôt',
  'marquage-au-sol-industriel',
  'marquage-au-sol-usine',
  'marquage-routier-au-sol',
  'marquage-garage-automobile',
  'marquage-zones-piétonnes',
  'places-handicapees-pmr',
  'signalisation-verticale',
  'pose-ralentisseur',
  'installation-panneaux-parking',
  'pose-miroir-circulation',
  'installation-bornes-parking',
  'pose-butees-parking'
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
    slug: 'boulogne-billancourt',
    name: 'Boulogne-Billancourt',
    context: 'première commune des Hauts-de-Seine avec plus de 120 000 habitants, Boulogne-Billancourt concentre de nombreux sieges sociaux et centres commerciaux. Le quartier du Trapeze, les abords du Parc de Billancourt et les zones tertiaires autour du metro nécessitent un marquage professionnel régulier.',
    zones: ['Trapeze', 'Pont de Sevres', 'Marcel Sembat', 'Jean Jaures', 'Billancourt']
  },
  {
    slug: 'nanterre',
    name: 'Nanterre',
    context: 'Préfecture des Hauts-de-Seine, Nanterre accueille le quartier d\'affaires de La Defense sur son territoire. Les tours de bureaux, les parkings souterrains et les zones logistiques représentent un marché important pour le marquage au sol professionnel.',
    zones: ['La Defense', 'Préfecture', 'Université', 'Chemin de l\'Ile', 'Centre-ville']
  },
  {
    slug: 'colombes',
    name: 'Colombes',
    context: 'Avec près de 90 000 habitants, Colombes est une ville dynamique entre activité industrielle et residentiel. Les parkings des centres commerciaux, les zones d\'activités et les résidences collectives requièrent des prestations de marquage régulières.',
    zones: ['Gare', 'Stade', 'Petit-Colombes', 'Europe', 'Les Vallees']
  },
  {
    slug: 'asnieres-sur-seine',
    name: 'Asnieres-sur-Seine',
    context: 'Asnieres-sur-Seine connaît une forte croissance avec de nombreux programmes immobiliers. Les parkings residentiels, les surfaces commerciales et les voiries privées nécessitent un marquage conforme aux derniers standards.',
    zones: ['Bords de Seine', 'Gare', 'Becon', 'Quatre Routes', 'Centre']
  },
  {
    slug: 'courbevoie',
    name: 'Courbevoie',
    context: 'Courbevoie partage avec Puteaux et Nanterre le quartier de La Defense. Les tours de bureaux, les parkings mutualisees et les espaces commerciaux génèrent une demande constante en marquage au sol haute qualité.',
    zones: ['La Defense', 'Becon', 'Charras', 'Marceau', 'Gare de Courbevoie']
  },
  {
    slug: 'rueil-malmaison',
    name: 'Rueil-Malmaison',
    context: 'Rueil-Malmaison combine zones résidentielles haut de gamme et parcs d\'activités. Le Parc d\'activités de Rueil 2000, les parkings des résidences et les voiries privées constituent un marché exigeant pour le marquage professionnel.',
    zones: ['Rueil 2000', 'Centre-ville', 'Buzenval', 'Plaine-Gare', 'Jonchery']
  },
  {
    slug: 'issy-les-moulineaux',
    name: 'Issy-les-Moulineaux',
    context: 'Issy-les-Moulineaux s\'est transforme en pole tertiaire majeur avec l\'ecoquartier du Fort d\'Issy. Les parkings d\'entreprises, les résidences modernes et les équipements publics demandent un marquage au sol exemplaire.',
    zones: ['Fort d\'Issy', 'Val de Seine', 'Corentin Celton', 'Les Arches', 'Centre-ville']
  },
  {
    slug: 'levallois-perret',
    name: 'Levallois-Perret',
    context: 'Commune la plus densement peuplée de France, Levallois-Perret optimise chaque espace de stationnement. Les parkings souterrains, les cours d\'immeubles et les surfaces commerciales exigent un marquage précis et durable.',
    zones: ['Mairie', 'Anatole France', 'Louise Michel', 'Villiers', 'Front Populaire']
  },
  {
    slug: 'antony',
    name: 'Antony',
    context: 'Au sud des Hauts-de-Seine, Antony combine habitat pavillonnaire et zones d\'activités. La Croix de Berny, les centres commerciaux et les résidences demandent des prestations de marquage adaptées à chaque contexte.',
    zones: ['Croix de Berny', 'Centre-ville', 'Fontaine-Michalon', 'Pajeaud', 'Noyer-Doré']
  },
  {
    slug: 'neuilly-sur-seine',
    name: 'Neuilly-sur-Seine',
    context: 'Neuilly-sur-Seine est reputee pour son standing élevé. Les résidences de prestige, les cliniques privées et les parkings souterrains requièrent un marquage au sol de haute qualité avec des finitions soignees.',
    zones: ['Sablons', 'Pont de Neuilly', 'Bagatelle', 'Ile de la Jatte', 'Centre-ville']
  },
  {
    slug: 'clamart',
    name: 'Clamart',
    context: 'Clamart allie quartiers residentiels et zone d\'activités. Le Panorama, le centre commercial et les nombreuses résidences collectives génèrent une demande variee en marquage au sol.',
    zones: ['Panorama', 'Jardin Parisien', 'Gare', 'Petit-Clamart', 'Trivaux']
  },
  {
    slug: 'meudon',
    name: 'Meudon',
    context: 'Meudon se caracterise par ses espaces verts et ses zones tertiaires comme Meudon Campus. Les parkings d\'entreprises, les résidences et les voiries privées nécessitent un marquage professionnel régulier.',
    zones: ['Meudon-la-forêt', 'Val Fleury', 'Bellevue', 'Campus', 'Centre-ville']
  }
];

// Formulations variees par service - Contenu riche spécifique aux Hauts-de-Seine (92)
const intros: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    'Les Hauts-de-Seine concentrent une densite exceptionnelle de parkings : tours de La Defense, résidences de standing de Neuilly et Boulogne-Billancourt, centres commerciaux de Rueil-Malmaison. Notre entreprise intervient dans tout le 92 pour le traçage professionnel de vos places de stationnement, flèches directionnelles et zones piétonnes avec des peintures haute résistance.',
    'De Nanterre a Antony, des parkings souterrains de Courbevoie aux résidences de Clamart, nous assurons le marquage complet de vos espaces de stationnement. Notre équipe connaît parfaitement les contraintes des parkings du 92 : hauteurs limitees, trafic intense, exigences esthetiques élevées des copropriétés haut de gamme.',
    'Le département des Hauts-de-Seine accueille les plus grands parkings d\'Île-de-France, notamment sous les tours de La Defense. Notre expertise nous permet d\'intervenir sur tous types de surfaces : parkings souterrains multi-niveaux, aires de stationnement extérieures, parkings relais des gares RER du 92.',
    'Specialistes du marquage parking dans les Hauts-de-Seine depuis plus de 15 ans, nous intervenons a Levallois-Perret, Issy-les-Moulineaux, Colombes et dans toutes les communes du 92. Nos techniciens qualifies utilisent des équipements professionnels adaptés aux parkings les plus exigeants du département.',
    'Dans les Hauts-de-Seine, chaque parking a ses spécificités : parkings d\'affaires à la Defense, résidences privées a Meudon, surfaces commerciales a Asnieres. Notre entreprise s\'adapté à chaque contexte pour delivrer un marquage au sol conforme aux normes et durable dans le temps.'
  ],
  'marquage-au-sol-parking-prive': [
    'Les copropriétés des Hauts-de-Seine, notamment a Neuilly-sur-Seine, Boulogne-Billancourt et Levallois-Perret, exigent un marquage parking de haute qualité. Nous intervenons dans les résidences privées du 92 pour tracer vos places numerotees, zones visiteurs et emplacements réservés avec des finitions soignees.',
    'Votre parking prive dans le 92 merite un traçage professionnel. Que vous soyez syndic a Courbevoie, gestionnaire de résidence a Rueil-Malmaison ou proprietaire a Issy-les-Moulineaux, nous realisons un marquage personnalisé adapté aux contraintes de votre copropriété et aux attentes de vos résidents.',
    'Dans les Hauts-de-Seine, les parkings prives des résidences de standing nécessitent une attention particuliere. Notre équipe intervient a Meudon, Clamart, Antony et dans tout le département pour un traçage précis des places, avec numérotation, flèches et pictogrammes conformes aux normes.',
    'Les parkings souterrains prives du 92 requièrent des peintures spécifiques : haute adherence, résistance a l\'humidite, sechage rapide. De Nanterre a Colombes, nous utilisons des produits adaptés aux conditions des parkings couverts des Hauts-de-Seine pour un resultat durable.',
    'Syndics et gestionnaires de copropriétés dans les Hauts-de-Seine, confiez-nous le marquage de vos parkings prives. Intervention rapide a Asnieres-sur-Seine, Boulogne-Billancourt, Neuilly et dans toutes les communes du 92. Devis gratuit et travaux réalises de nuit pour ne pas gener les résidents.'
  ],
  'marquage-au-sol-stationnement': [
    'L\'optimisation du stationnement est cruciale dans les Hauts-de-Seine, département le plus dense d\'Île-de-France après Paris. Notre expertise permet de maximiser la capacité de vos parkings a Levallois-Perret, Boulogne-Billancourt ou Courbevoie tout en respectant les normes de circulation et d\'accessibilite PMR.',
    'Dans le 92, chaque place de stationnement compte. Nous intervenons pour retracer et optimiser vos zones de stationnement a Nanterre, Colombes, Rueil-Malmaison et dans tout le département. Notre approche méthodique garantit un gain de places tout en ameliorant la fluidite de circulation.',
    'Les Hauts-de-Seine concentrent entreprises, commerces et résidences avec des besoins de stationnement importants. Notre équipe réalise le marquage complet de vos aires de stationnement : places standards, PMR, livraisons, deux-roues. Intervention dans tout le 92 avec des peintures certifiees haute durabilité.',
    'De la préfecture de Nanterre aux zones commerciales d\'Antony, nous optimisons les espaces de stationnement des Hauts-de-Seine. Notre expertise technique permet d\'adapter le traçage aux contraintes spécifiques de chaque site : pentes, piliers, angles, tout en maximisant le nombre de places.',
    'Le stationnement dans les Hauts-de-Seine représente un enjeu majeur pour les collectivités et les entreprises. Nous accompagnons les gestionnaires de parkings du 92 dans l\'optimisation de leurs espaces avec un marquage conforme, lisible et durable face au trafic intense du département.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Le quartier d\'affaires de La Defense et les parcs tertiaires des Hauts-de-Seine accueillent les sieges sociaux des plus grandes entreprises francaises. Nous realisons le marquage de leurs parkings avec un niveau d\'exigence élevé : places nominatives direction, visiteurs, zones VIP, signaletique corporate intégrée.',
    'Dans les Hauts-de-Seine, votre parking d\'entreprise reflete votre image professionnelle. De Courbevoie a Issy-les-Moulineaux, de Boulogne-Billancourt a Rueil-Malmaison, nous intervenons dans les parcs d\'activités du 92 pour un marquage soigné avec places réservées, numérotation et flèches directionnelles.',
    'Les zones d\'activités des Hauts-de-Seine comme Rueil 2000 où le Val de Seine nécessitent un marquage parking professionnel. Notre équipe intervient aupres des entreprises du 92 pour tracer places collaborateurs, visiteurs, livraisons et PMR selon les normes en vigueur et vos specifications.',
    'Gestionnaires de parcs tertiaires dans les Hauts-de-Seine, optimisez vos parkings d\'entreprise. Nous intervenons à la Defense, Nanterre, Levallois-Perret et dans tout le 92 pour un traçage complet : places numerotees, zones réservées, circulation, passages piétons securises.',
    'Les entreprises des Hauts-de-Seine meritent un parking a leur image. Notre expertise couvre le marquage de tous les espaces professionnels du 92 : sieges sociaux a Neuilly, entrepôts a Gennevilliers, showrooms a Boulogne. Peintures haute résistance et finitions impeccables garanties.'
  ],
  'marquage-au-sol-entrepôt': [
    'Les zones logistiques des Hauts-de-Seine, notamment a Gennevilliers, Nanterre et Colombes, nécessitent un marquage au sol rigoureux. Nous traceons vos zones de stockage, allees de circulation engins, emplacements palettes et zones de sécurité conformement aux normes INRS et aux exigences de vos assureurs.',
    'Dans le 92, les entrepôts modernes requièrent un marquage professionnel pour optimiser les flux logistiques. Notre équipe intervient dans les zones d\'activités de Rueil-Malmaison, Nanterre et Colombes pour tracer zones de picking, quais de chargement, allees piétonnes et zones dangereuses.',
    'Le marquage en entrepôt dans les Hauts-de-Seine répond à des normes strictes de sécurité. Nous realisons le traçage complet de vos surfaces logistiques avec codes couleurs réglementaires : jaune pour circulation, vert pour stockage, rouge pour danger, blanc pour zones piétonnes.',
    'Les plateformes logistiques du 92 font appel a notre expertise pour le marquage de leurs entrepôts. De Gennevilliers a Antony, nous intervenons pour tracer emplacements de stockage, voies de circulation caristes, zones de préparation et aires de stationnement poids lourds.',
    'Optimisez votre surface d\'entreposage dans les Hauts-de-Seine grâce à un marquage rationnel. Notre équipe analyse vos flux, propose un plan de marquage adapté et réalise les travaux en limitant l\'interruption de votre activité. Intervention nuit et week-end possible dans tout le 92.'
  ],
  'marquage-au-sol-industriel': [
    'Les sites industriels des Hauts-de-Seine exigent un marquage resistant aux contraintes spécifiques de chaque activité. Nous intervenons a Nanterre, Colombes, Gennevilliers et dans tout le 92 avec des peintures epoxy et polyurethane adaptées aux passages d\'engins, produits chimiques et temperatures extremes.',
    'Dans le 92, le secteur industriel reste present malgre la tertiarisation. Notre équipe réalise le marquage des zones de production, allees de circulation, emplacements machines et zones de danger pour les usines et ateliers des Hauts-de-Seine avec des produits certifies haute performance.',
    'La sécurité industrielle passe par un marquage au sol clair et durable. Nous accompagnons les sites de production des Hauts-de-Seine dans la mise en conformité de leurs espaces de travail : bandes de sécurité, passages piétons, zones de stockage, emplacements extincteurs.',
    'Les industries des Hauts-de-Seine, de l\'agroalimentaire à la metallurgie, font appel a notre expertise pour le marquage de leurs locaux. Nous selectionnons les peintures adaptées à chaque environnement : résistance chimique a Gennevilliers, antiderapant a Colombes, alimentaire a Nanterre.',
    'Responsables HSE des Hauts-de-Seine, confiez-nous le marquage de vos sites industriels. Notre connaissance des normes de sécurité et notre experience dans le 92 garantissent un traçage conforme aux exigences réglementaires et adapté aux contraintes de votre activité.'
  ],
  'marquage-au-sol-usine': [
    'Les usines des Hauts-de-Seine nécessitent un marquage au sol adapté a leurs process de production. Nous intervenons dans les sites industriels de Nanterre, Colombes et Gennevilliers pour tracer zones de travail, allees de circulation, stockages et zones dangereuses avec des peintures haute résistance.',
    'Dans le 92, les sites de production requièrent un marquage précis pour optimiser les flux et garantir la sécurité. Notre équipe réalise le traçage complet de vos usines : postes de travail, zones machines, allees operateurs, stockages matieres premières et produits finis.',
    'Le marquage en usine dans les Hauts-de-Seine doit resister aux sollicitations intensives : passages de chariots, produits chimiques, nettoyages frequents. Nous utilisons des peintures epoxy bicomposant ou polyurethane selectionnees pour leur durabilité dans les conditions industrielles.',
    'Ameliorez l\'organisation de votre usine dans le 92 grâce à un marquage au sol structure. Nous analysons vos flux de production et proposons un plan de traçage optimise pour vos ateliers de fabrication, zones de contrôle qualité et aires de conditionnement.',
    'Les arrêts de production sont precieux dans les usines des Hauts-de-Seine. Notre équipe intervient durant vos periodes de fermeture pour réaliser le marquage complet de vos espaces de travail. préparation du support et application dans les regles de l\'art pour une tenue maximale.'
  ],
  'marquage-routier-au-sol': [
    'Les voiries privées des Hauts-de-Seine, nombreuses dans les résidences et parcs d\'activités, nécessitent un marquage routier conforme aux normes. Nous traceons lignes de circulation, passages piétons, flèches et stop sur les voies privées du 92 avec des équipements professionnels homologues.',
    'De Boulogne-Billancourt a Rueil-Malmaison, les copropriétés et entreprises du 92 possedent des voiries internes. Notre équipe réalise leur marquage routier : lignes axiales, rives, cedez-le-passage, zones 30. Peintures retroreflechissantes avec billes de verre pour une visibilité optimale.',
    'Le marquage routier dans les Hauts-de-Seine couvre les accès d\'entreprises, les voies de résidences et les parkings de surface. Nous intervenons avec des traceuses professionnelles pour un traçage précis des lignes, flèches directionnelles et signalisation horizontale.',
    'Les zones d\'activités du 92 comme La Defense, Rueil 2000 où le Val de Seine disposent de voiries privées necessitant un marquage routier professionnel. Notre expertise garantit des travaux conformes aux normes de la signalisation routiere francaise.',
    'Gestionnaires de voiries privées dans les Hauts-de-Seine, assurez la sécurité des usagers avec un marquage routier professionnel. Nous intervenons a Nanterre, Courbevoie, Levallois-Perret et dans tout le 92 pour le traçage de vos chaussees privées.'
  ],
  'marquage-garage-automobile': [
    'Les garages automobiles et concessions des Hauts-de-Seine, nombreux le long des grands axes du 92, nécessitent un marquage adapté. Nous traceons zones de levage, circulation clients, stockage véhicules et aires de préparation pour les professionnels de l\'automobile a Boulogne, Nanterre ou Colombes.',
    'Concessions automobiles de Rueil-Malmaison, garages de Courbevoie, carrosseries de Levallois : nous intervenons dans tous les établissements automobiles du 92. Notre marquage resiste aux huiles, solvants et trafic intensif avec des peintures epoxy haute performance.',
    'Dans les Hauts-de-Seine, les showrooms et ateliers automobiles requièrent un marquage professionnel. Notre équipe tracé vos espaces d\'exposition, zones atelier, aires de livraison et parkings clients avec des finitions soignees adaptées a l\'image des marques representees.',
    'Le marquage de votre garage automobile dans le 92 optimise l\'espace et la productivite. Nous delimitons baies de travail, zones de stockage pieces, allees de circulation et emplacements clients pour les garages des Hauts-de-Seine avec des peintures resistantes aux produits automobiles.',
    'Professionnels de l\'automobile dans les Hauts-de-Seine, beneficiez d\'un marquage adapté à votre activité. Notre expertise couvre les concessions, ateliers mecaniques, carrosseries et centres de contrôle technique du 92 avec des solutions durables et esthetiques.'
  ],
  'marquage-zones-piétonnes': [
    'La sécurité des piétons dans les Hauts-de-Seine, département a forte densite urbaine, passe par un marquage clair des zones de circulation. Nous delimitons passages piétons, allees sécurisées et zones protégées dans les parkings, entrepôts et sites industriels du 92.',
    'A La Defense comme dans les zones d\'activités de Nanterre ou Colombes, la separation des flux piétons et véhicules est essentielle. Notre équipe réalise le marquage des zones piétonnes avec bandes colorees, pictogrammes et surfaces antiderapantes pour les sites du 92.',
    'Les entrepôts et usines des Hauts-de-Seine doivent proteger leurs collaborateurs avec des zones piétonnes bien marquees. Nous traceons allees de circulation, passages securises et zones d\'attente conformement aux recommandations INRS pour les sites industriels du 92.',
    'Dans les parkings des Hauts-de-Seine, le marquage des zones piétonnes previent les accidents. Notre expertise garantit des tracages visibles et durables : passages piétons zebres, allees delimitees, zones de traversee sécurisées dans les parkings du 92.',
    'Responsables sécurité des Hauts-de-Seine, securisez vos sites avec un marquage piéton professionnel. Nous intervenons a Issy-les-Moulineaux, Boulogne-Billancourt, Clamart et dans tout le 92 pour délimiter les zones de circulation piétonne dans vos établissements.'
  ],
  'places-handicapees-pmr': [
    'L\'accessibilite PMR est obligatoire dans les Hauts-de-Seine comme partout en France. Notre équipe réalise le marquage des places handicapees dans les parkings du 92 : dimensions réglementaires 3,30m x 5m, pictogramme normalise, couleur bleue, signalisation verticale associee.',
    'Les copropriétés et entreprises des Hauts-de-Seine doivent disposer de places PMR conformes. Nous intervenons a Nanterre, Boulogne-Billancourt, Courbevoie et dans tout le 92 pour creer ou mettre en conformité vos emplacements handicapes avec les normes d\'accessibilite en vigueur.',
    'Dans les parkings publics et prives des Hauts-de-Seine, les places PMR doivent respecter des specifications précises. Notre expertise garantit un marquage conforme : largeur majoree, bande de circulation laterale, pictogramme au sol, signalisation verticale. Intervention dans tout le 92.',
    'Gestionnaires de parkings dans les Hauts-de-Seine, assurez la conformité de vos places handicapees. Nous realisons l\'audit de vos installations et effectuons les travaux de mise aux normes pour les parkings de Neuilly, Levallois-Perret, Antony et de toutes les communes du 92.',
    'Le marquage des places PMR dans les Hauts-de-Seine requiert une expertise spécifique. Notre équipe connaît parfaitement la réglementation et intervient pour tracer des emplacements accessibles conformes dans les résidences, commerces et entreprises du 92.'
  ],
  'signalisation-verticale': [
    'La signalisation verticale complète le marquage au sol dans les Hauts-de-Seine. Nous installons panneaux directionnels, réglementaires et informatifs dans les parkings et voiries privées de La Defense, Boulogne-Billancourt, Nanterre et de tout le 92.',
    'Dans les parkings des Hauts-de-Seine, une signaletique verticale claire guide les usagers. Notre équipe pose panneaux de circulation, indicateurs d\'etages, flèches directionnelles et panneaux de places réservées pour les parkings multi-niveaux du 92.',
    'Les voiries privées des Hauts-de-Seine nécessitent une signalisation verticale conforme. Nous installons stops, cedez-le-passage, limitation de vitesse et panneaux de direction pour les résidences et zones d\'activités du 92 avec des supports adaptés.',
    'De Courbevoie a Antony, les espaces de stationnement du 92 requièrent une signalisation verticale complète. Notre expertise couvre l\'installation de tous types de panneaux : entrée/sortie, sens de circulation, places réservées, informations tarifaires.',
    'Gestionnaires de parkings et de voiries dans les Hauts-de-Seine, equipez vos espaces d\'une signalisation verticale professionnelle. Nous realisons l\'étude, la fourniture et la pose de panneaux adaptés à vos besoins dans tout le 92.'
  ],
  'pose-ralentisseur': [
    'La securisation de la vitesse dans les Hauts-de-Seine passe par l\'installation de ralentisseurs homologues. Nous posons coussins berlinois, dos d\'ane et plateaux dans les parkings, résidences et voiries privées du 92 pour proteger piétons et usagers.',
    'Dans les résidences et zones d\'activités des Hauts-de-Seine, les ralentisseurs limitent la vitesse et securisent les passages. Notre équipe installe des dispositifs adaptés au trafic et aux contraintes de vos sites a Nanterre, Rueil-Malmaison, Colombes et dans tout le 92.',
    'Les parkings et voiries privées des Hauts-de-Seine nécessitent des ralentisseurs pour maîtriser la vitesse. Nous selectionnons le dispositif adapté : coussin berlinois pour voies etroites, dos d\'ane pour zones piétonnes, plateau pour intersections.',
    'Coproprietes du 92, securisez vos voies internes avec des ralentisseurs professionnels. Notre équipe intervient a Boulogne-Billancourt, Issy-les-Moulineaux, Levallois-Perret et dans tout le département pour la pose de dispositifs homologues avec signalisation réglementaire.',
    'La pose de ralentisseur dans les Hauts-de-Seine garantit la sécurité des zones de circulation. Nous installons des équipements certifies conformes aux normes, avec fixation adaptée au support et marquage au sol réglementaire pour les sites du 92.'
  ],
  'installation-panneaux-parking': [
    'Les parkings des Hauts-de-Seine nécessitent une signaletique claire pour guider les usagers. Nous installons panneaux directionnels, numéros de niveaux, indications de places et consignes de sécurité dans les parkings de La Defense, Boulogne et de tout le 92.',
    'Dans les parkings multi-niveaux du 92, une signalisation adaptée est indispensable. Notre équipe pose panneaux de circulation, flèches, indications de sorties et signaletique des places réservées pour les grands parkings des Hauts-de-Seine.',
    'Les copropriétés des Hauts-de-Seine equipent leurs parkings de panneaux informatifs. Nous realisons la conception et l\'installation de signaletique personnalisée : numéros de places, places visiteurs, consignes, dans tout le 92.',
    'Gestionnaires de parkings dans les Hauts-de-Seine, ameliorez l\'orientation des usagers. Nous installons une signaletique complète et coherente pour vos espaces de stationnement a Nanterre, Courbevoie, Neuilly et dans toutes les communes du département.',
    'L\'installation de panneaux parking dans les Hauts-de-Seine optimise la circulation et reduit les incivilites. Notre expertise couvre tous les types de signaletique : directionnelle, réglementaire, informative, pour les parkings du 92.'
  ],
  'pose-miroir-circulation': [
    'Les miroirs de circulation ameliorent la visibilité dans les parkings et voiries des Hauts-de-Seine. Nous installons miroirs convexes et panoramiques aux angles morts des parkings souterrains de La Defense, des résidences de Neuilly et des entreprises du 92.',
    'Dans les parkings multi-niveaux des Hauts-de-Seine, les angles de virage nécessitent des miroirs de sécurité. Notre équipe pose des équipements adaptés aux contraintes de chaque site : dimensions, fixation, positionnement optimal pour une visibilité maximale.',
    'Les voiries privées du 92 comportent souvent des intersections a visibilité reduite. Nous installons des miroirs de circulation homologues pour sécuriser les carrefours des résidences et zones d\'activités des Hauts-de-Seine.',
    'Securisez les zones de manoeuvre de vos parkings dans les Hauts-de-Seine. Notre équipe installe miroirs convexes intérieurs et extérieurs aux emplacements strategiques pour prevenir les collisions dans les parkings du 92.',
    'La pose de miroir de circulation dans les Hauts-de-Seine répond à des enjeux de sécurité importants. Nous selectionnons les équipements adaptés et determinons leur positionnement optimal pour les parkings et voiries du 92.'
  ],
  'installation-bornes-parking': [
    'Les bornes de parking protegent les places réservées dans les Hauts-de-Seine. Nous installons bornes fixes, amovibles et retractables pour les copropriétés de Neuilly, les entreprises de La Defense et les résidences du 92.',
    'Dans les parkings des Hauts-de-Seine, les bornes delimitent les espaces et gerent les accès. Notre équipe pose des dispositifs adaptés : bornes fixes pour délimitation permanente, amovibles pour places réservées, retractables pour accès contrôles.',
    'Les places direction et visiteurs des entreprises du 92 nécessitent une protection par bornes. Nous installons des équipements de qualité professionnelle dans les parcs d\'activités de Rueil-Malmaison, Nanterre, Colombes et de tout le département.',
    'Coproprietes des Hauts-de-Seine, protegez vos places privatives avec des bornes de parking. Notre équipe intervient a Boulogne-Billancourt, Issy-les-Moulineaux, Levallois-Perret et dans tout le 92 pour l\'installation de bornes adaptées.',
    'L\'installation de bornes parking dans les Hauts-de-Seine securise vos espaces réservés. Nous proposons une gamme complète de solutions : bornes rabattables, poteaux amovibles, bornes automatiques pour les parkings du 92.'
  ],
  'pose-butees-parking': [
    'Les butees de parking facilitent le positionnement des véhicules dans les Hauts-de-Seine. Nous posons butees en caoutchouc, beton ou plastique dans les parkings de La Defense, les résidences de Boulogne et les entreprises du 92.',
    'Dans les parkings souterrains des Hauts-de-Seine, les butees protegent murs et équipements. Notre équipe installe des butees de roues adaptées aux contraintes de chaque site : parkings etroits, places en bataille ou en épi.',
    'Les copropriétés du 92 equipent leurs places de parking de butees pour le confort des résidents. Nous posons des butees de qualité professionnelle a Neuilly-sur-Seine, Levallois-Perret, Courbevoie et dans toutes les communes des Hauts-de-Seine.',
    'La pose de butees parking dans les Hauts-de-Seine evite les debordements de véhicules. Nous selectionnons le materiau adapté à chaque usage : caoutchouc recycle pour flexibilite, beton pour durabilité, plastique pour legerte.',
    'Gestionnaires de parkings dans les Hauts-de-Seine, equipez vos places de butees professionnelles. Notre équipe intervient dans tout le 92 pour la pose de butees de roues avec fixation adaptée au support et positionnement précis.'
  ]
};

const descriptions: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    'Nous utilisons des peintures acryliques et epoxy haute résistance pour un marquage durable. Places standards, PMR, livraisons : toutes configurations sont realisables. Nos équipes interviennent de nuit où le week-end pour ne pas perturber votre activité.',
    'Notre expertise couvre le traçage de places, les flèches directionnelles, les passages piétons et la numérotation. Nous garantissons des travaux conformes aux DTU et normes NF. Devis gratuit sous 24h.',
    'Le marquage de votre parking est réalise avec des équipements professionnels : traceuses airless, pochoirs normes, peintures homologuees. Nous assurons une prestation soignée avec un rendu parfait.',
    'De la préparation du support au traçage final, nous maitrisons toutes les etapes du marquage parking. Nos techniciens sont formes aux dernières techniques et normes en vigueur.'
  ],
  'marquage-au-sol-parking-prive': [
    'Votre parking prive bénéficie d\'un marquage personnalisé : couleurs, numérotation, logos. Nous adaptons nos solutions aux contraintes de votre site et à vos attentes esthetiques.',
    'Les parkings de copropriété, résidences et entreprises sont notre specialite. Nous intervenons rapidement avec un materiel adapté aux espaces confines des parkings souterrains.',
    'Nos prestations incluent le traçage des places, les zones de circulation, les pictogrammes et la signalisation complète de votre parking prive.',
    'Un parking prive bien marque valorise votre bien et facilite le quotidien des usagers. Confiez-nous votre projet pour un resultat professionnel.'
  ],
  'marquage-au-sol-stationnement': [
    'L\'optimisation de vos zones de stationnement permet d\'augmenter la capacité tout en respectant les normes. Nous realisons les études prealables et le traçage complet.',
    'Nos solutions de marquage stationnement s\'adaptent a tous les contextes : parkings de surface, voiries, zones commerciales. Peintures resistantes aux intemperies et au trafic.',
    'Le traçage des places de stationnement respecte les dimensions réglementaires. Nous integrons les places PMR, les zones de livraison et les circulations.',
    'Un marquage stationnement bien concu ameliore la fluidite et reduit les conflits entre usagers. Notre expertise vous garantit un resultat optimal.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Votre parking d\'entreprise est un espace strategique pour l\'image et la sécurité. Nous proposons des solutions complètes incluant places nominatives, visiteurs et direction.',
    'Les zones d\'activités et parcs d\'entreprises font appel a notre expertise pour le marquage de leurs parkings. Intervention de nuit possible pour limiter les perturbations.',
    'Nous accompagnons les gestionnaires de parcs tertiaires dans la mise en conformité et l\'optimisation de leurs parkings. Devis personnalisé selon vos besoins.',
    'Le marquage de votre parking entreprise reflete votre professionnalisme. Nos finitions soignees et nos peintures durables garantissent un rendu impeccable.'
  ],
  'marquage-au-sol-entrepôt': [
    'Le marquage en entrepôt répond à des normes spécifiques : zones de stockage, allees de circulation, zones de danger. Nous maitrisons les codes couleurs et les exigences réglementaires.',
    'Nos interventions en entrepôt incluent le traçage des emplacements palettes, les zones de picking et les voies de circulation des engins. Peintures resistantes a l\'abrasion.',
    'La sécurité en entrepôt passe par un marquage clair des zones piétonnes et véhicules. Nous realisons les tracages conformes aux recommandations INRS.',
    'Optimisez votre surface de stockage avec un marquage rationnel. Nos équipes interviennent sans perturber votre activité logistique.'
  ],
  'marquage-au-sol-industriel': [
    'Les sites industriels exigent des marquages resistants aux produits chimiques, aux temperatures extremes et au trafic intensif. Nous selectionnons les peintures adaptées à vos contraintes.',
    'Zones de danger, allees de circulation, emplacements machines : nous realisons tous les tracages nécessaires à la sécurité de vos installations.',
    'Notre expertise industrielle couvre les secteurs agroalimentaire, chimique, metallurgique et logistique. Chaque site fait l\'objet d\'une étude spécifique.',
    'Le marquage industriel est un element clé de la prévention des risques. Nous vous accompagnons dans la mise en conformité de vos espaces de travail.'
  ],
  'marquage-au-sol-usine': [
    'L\'usine moderne nécessite un marquage clair pour optimiser les flux de production. Nous traceons les zones de travail, stockage et circulation selon vos process.',
    'Nos équipes interviennent pendant les arrêts de production pour réaliser les travaux de marquage. préparation du support et application dans les regles de l\'art.',
    'Le marquage en usine doit resister aux contraintes mecaniques et chimiques. Nous utilisons des peintures epoxy ou polyurethane haute performance.',
    'Ameliorez l\'ergonomie et la sécurité de votre usine avec un marquage professionnel. Nos techniciens sont formes aux exigences du milieu industriel.'
  ],
  'marquage-routier-au-sol': [
    'Le marquage routier sur voiries privées respecte les mêmes exigences que la voirie publique. Nous utilisons des produits homologues et des équipements professionnels.',
    'Lignes continues, discontinues, passages piétons, flèches : nous maitrisons toutes les configurations de marquage routier. Billes de verre pour retroreflexion.',
    'Nos travaux de marquage routier sont réalises par des techniciens qualifies avec des traceuses professionnelles. Resultat conforme aux normes NF.',
    'Voiries de résidence, accès industriels, parkings de surface : nous intervenons sur tous types de voiries privées pour le marquage horizontal.'
  ],
  'marquage-garage-automobile': [
    'Le garage automobile requiert un marquage adapté : zones de levage, circulation clients, stockage. Nous proposons des peintures resistantes aux produits automobiles.',
    'Concessions, ateliers mecaniques et carrosseries font appel a notre expertise pour l\'aménagement de leurs espaces de travail.',
    'Un marquage clair dans votre garage ameliore la productivite et la sécurité. Nous realisons les tracages selon vos besoins spécifiques.',
    'Les sols de garage subissent des contraintes importantes : huiles, solvants, trafic. Nos peintures epoxy resistent durablement a ces agressions.'
  ],
  'marquage-zones-piétonnes': [
    'La separation des flux piétons et véhicules est essentielle à la sécurité. Nous traceons des cheminements clairs avec des peintures antiderapantes.',
    'Zones piétonnes, passages securises, allees de circulation : notre expertise garantit un marquage visible et durable pour la protection de tous.',
    'Les sites industriels et commerciaux nécessitent des zones piétonnes bien delimitees. Nous utilisons des codes couleurs conformes aux normes.',
    'Le marquage piéton protège vos collaborateurs et visiteurs. Nos solutions incluent bandes podotactiles et pictogrammes pour les PMR.'
  ],
  'places-handicapees-pmr': [
    'Les places PMR doivent respecter des dimensions précises : 3,30m x 5m minimum avec bande de circulation. Nous garantissons un traçage conforme à la loi.',
    'Pictogrammes normalises, couleur bleue réglementaire, signalisation verticale : nous realisons des places PMR complètes et conformes.',
    'La mise en accessibilite de vos parkings passe par des places PMR bien positionnees et correctement dimensionnees. Notre expertise vous accompagne.',
    'Nous intervenons pour la création où la mise en conformité de vos places handicapees. Devis gratuit incluant l\'étude de votre situation.'
  ],
  'signalisation-verticale': [
    'La signalisation verticale complète le marquage au sol pour une orientation optimale. Nous installons tous types de panneaux pour parkings et voiries.',
    'Panneaux directionnels, réglementaires, informatifs : nous proposons une gamme complète adaptée à vos besoins de signalisation.',
    'L\'installation de signalisation verticale est realisee par nos équipes qualifiees. Fixation adaptée au support et mise en conformité.',
    'Un parking bien signalise ameliore l\'experience usager. Nous concevons des solutions sur mesure pour vos espaces de stationnement.'
  ],
  'pose-ralentisseur': [
    'Les ralentisseurs sont essentiels pour sécuriser les zones a vitesse limitee. Nous installons des équipements homologues et adaptés au trafic.',
    'Coussins berlinois, dos d\'ane, plateaux : chaque solution répond à des contraintes spécifiques. Nous vous conseillons le dispositif adapté.',
    'La pose de ralentisseur est realisee dans les regles de l\'art avec fixation adaptée et signalisation réglementaire.',
    'Securisez les abords de vos batiments, ecoles ou résidences avec des ralentisseurs professionnels. Devis gratuit et pose rapide.'
  ],
  'installation-panneaux-parking': [
    'Une signaletique claire facilite la circulation dans votre parking. Nous installons panneaux directionnels, numéros d\'etage et informations pratiques.',
    'Les panneaux de parking sont réalises sur mesure selon vos besoins : places réservées, sens de circulation, consignes de sécurité.',
    'Notre expertise couvre la conception et l\'installation de signaletique complète pour parkings de toutes tailles.',
    'Optimisez l\'experience de vos usagers avec une signaletique professionnelle. Nous realisons les supports adaptés à votre charte graphique.'
  ],
  'pose-miroir-circulation': [
    'Les miroirs de sécurité offrent une visibilité sur les angles morts. Nous installons des équipements adaptés aux contraintes de vos espaces.',
    'Miroirs convexes intérieurs et extérieurs, miroirs hemisphereiques : notre gamme répond a tous les besoins de visibilité.',
    'La pose de miroir est realisee avec une fixation adaptée au support. Nous determinons l\'emplacement optimal pour une efficacite maximale.',
    'Securisez vos parkings et voiries avec des miroirs de circulation professionnels. Installation rapide et garantie qualité.'
  ],
  'installation-bornes-parking': [
    'Les bornes protegent vos places réservées et delimitent les espaces. Nous installons bornes fixes, amovibles ou retractables selon vos besoins.',
    'Protection des places direction, des accès pompiers ou des zones privatives : nos solutions de bornage s\'adaptent a tous les contextes.',
    'L\'installation de bornes est realisee avec scellement ou fixation mecanique selon le support. Finitions soignees et résistance garantie.',
    'Gerez efficacement les accès à vos espaces avec des bornes de qualité professionnelle. Large choix de modeles et finitions.'
  ],
  'pose-butees-parking': [
    'Les butees de parking facilitent le positionnement et protegent les murs ou équipements. Nous posons des butees adaptées à vos places.',
    'Butees en caoutchouc recycle, beton prefabrique ou plastique haute résistance : nous selectionnons le materiau adapté à votre usage.',
    'La pose de butees est realisee avec fixation mecanique pour une tenue optimale. Positionnement précis pour chaque place.',
    'Equipez vos places de parking de butees professionnelles pour un confort d\'utilisation optimal. Installation rapide et propre.'
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
    metaTitle: `${serviceName} a ${city.name} (92) | Devis Gratuit`,
    metaDescription: `${serviceName} a ${city.name} dans les Hauts-de-Seine. Entreprise spécialisée, intervention rapide. Devis gratuit sous 24h.`,
    content: {
      introduction: intro.replace('${location}', city.name),
      localContext: city.context,
      serviceDescription: desc
    },
    faqs: [
      {
        question: `Quel est le délai d'intervention a ${city.name} ?`,
        answer: `Nous intervenons sous 24 a 48h a ${city.name} (92). La visite technique et le devis sont gratuits.`
      },
      {
        question: `Intervenez-vous dans les quartiers de ${city.name} ?`,
        answer: `Oui, nous couvrons tous les quartiers de ${city.name} : ${city.zones.join(', ')} et alentours.`
      },
      {
        question: `Quelles garanties proposez-vous a ${city.name} ?`,
        answer: `Tous nos travaux a ${city.name} sont garantis 5 ans minimum. Nous utilisons des peintures professionnelles haute résistance.`
      }
    ]
  };
}

export const hautsDeSeineVariations: ServiceLocationContent[] = [];

cities.forEach((city, cityIndex) => {
  services.forEach((serviceSlug, serviceIndex) => {
    hautsDeSeineVariations.push(generateVariation(city, serviceSlug, cityIndex + serviceIndex));
  });
});
