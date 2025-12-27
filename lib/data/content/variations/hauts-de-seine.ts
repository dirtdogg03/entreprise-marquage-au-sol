import { ServiceLocationContent } from '../index';

// 12 villes du 92: Boulogne-Billancourt, Nanterre, Colombes, Asnieres-sur-Seine, Courbevoie, Rueil-Malmaison, Issy-les-Moulineaux, Levallois-Perret, Antony, Neuilly-sur-Seine, Clamart, Meudon
// 17 services = 204 variations

const services = [
  'marquage-au-sol-parking',
  'marquage-au-sol-parking-prive',
  'marquage-au-sol-stationnement',
  'marquage-au-sol-parking-entreprise',
  'marquage-au-sol-entrepot',
  'marquage-au-sol-industriel',
  'marquage-au-sol-usine',
  'marquage-routier-au-sol',
  'marquage-garage-automobile',
  'marquage-zones-pietonnes',
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
    slug: 'boulogne-billancourt',
    name: 'Boulogne-Billancourt',
    context: 'Premiere commune des Hauts-de-Seine avec plus de 120 000 habitants, Boulogne-Billancourt concentre de nombreux sieges sociaux et centres commerciaux. Le quartier du Trapeze, les abords du Parc de Billancourt et les zones tertiaires autour du metro necessitent un marquage professionnel regulier.',
    zones: ['Trapeze', 'Pont de Sevres', 'Marcel Sembat', 'Jean Jaures', 'Billancourt']
  },
  {
    slug: 'nanterre',
    name: 'Nanterre',
    context: 'Prefecture des Hauts-de-Seine, Nanterre accueille le quartier d\'affaires de La Defense sur son territoire. Les tours de bureaux, les parkings souterrains et les zones logistiques representent un marche important pour le marquage au sol professionnel.',
    zones: ['La Defense', 'Prefecture', 'Universite', 'Chemin de l\'Ile', 'Centre-ville']
  },
  {
    slug: 'colombes',
    name: 'Colombes',
    context: 'Avec pres de 90 000 habitants, Colombes est une ville dynamique entre activite industrielle et residentiel. Les parkings des centres commerciaux, les zones d\'activites et les residences collectives requierent des prestations de marquage regulieres.',
    zones: ['Gare', 'Stade', 'Petit-Colombes', 'Europe', 'Les Vallees']
  },
  {
    slug: 'asnieres-sur-seine',
    name: 'Asnieres-sur-Seine',
    context: 'Asnieres-sur-Seine connait une forte croissance avec de nombreux programmes immobiliers. Les parkings residentiels, les surfaces commerciales et les voiries privees necessitent un marquage conforme aux derniers standards.',
    zones: ['Bords de Seine', 'Gare', 'Becon', 'Quatre Routes', 'Centre']
  },
  {
    slug: 'courbevoie',
    name: 'Courbevoie',
    context: 'Courbevoie partage avec Puteaux et Nanterre le quartier de La Defense. Les tours de bureaux, les parkings mutualisees et les espaces commerciaux generent une demande constante en marquage au sol haute qualite.',
    zones: ['La Defense', 'Becon', 'Charras', 'Marceau', 'Gare de Courbevoie']
  },
  {
    slug: 'rueil-malmaison',
    name: 'Rueil-Malmaison',
    context: 'Rueil-Malmaison combine zones residentielles haut de gamme et parcs d\'activites. Le Parc d\'Activites de Rueil 2000, les parkings des residences et les voiries privees constituent un marche exigeant pour le marquage professionnel.',
    zones: ['Rueil 2000', 'Centre-ville', 'Buzenval', 'Plaine-Gare', 'Jonchery']
  },
  {
    slug: 'issy-les-moulineaux',
    name: 'Issy-les-Moulineaux',
    context: 'Issy-les-Moulineaux s\'est transforme en pole tertiaire majeur avec l\'ecoquartier du Fort d\'Issy. Les parkings d\'entreprises, les residences modernes et les equipements publics demandent un marquage au sol exemplaire.',
    zones: ['Fort d\'Issy', 'Val de Seine', 'Corentin Celton', 'Les Arches', 'Centre-ville']
  },
  {
    slug: 'levallois-perret',
    name: 'Levallois-Perret',
    context: 'Commune la plus densement peuplee de France, Levallois-Perret optimise chaque espace de stationnement. Les parkings souterrains, les cours d\'immeubles et les surfaces commerciales exigent un marquage precis et durable.',
    zones: ['Mairie', 'Anatole France', 'Louise Michel', 'Villiers', 'Front Populaire']
  },
  {
    slug: 'antony',
    name: 'Antony',
    context: 'Au sud des Hauts-de-Seine, Antony combine habitat pavillonnaire et zones d\'activites. La Croix de Berny, les centres commerciaux et les residences demandent des prestations de marquage adaptees a chaque contexte.',
    zones: ['Croix de Berny', 'Centre-ville', 'Fontaine-Michalon', 'Pajeaud', 'Noyer-Doré']
  },
  {
    slug: 'neuilly-sur-seine',
    name: 'Neuilly-sur-Seine',
    context: 'Neuilly-sur-Seine est reputee pour son standing eleve. Les residences de prestige, les cliniques privees et les parkings souterrains requierent un marquage au sol de haute qualite avec des finitions soignees.',
    zones: ['Sablons', 'Pont de Neuilly', 'Bagatelle', 'Ile de la Jatte', 'Centre-ville']
  },
  {
    slug: 'clamart',
    name: 'Clamart',
    context: 'Clamart allie quartiers residentiels et zone d\'activites. Le Panorama, le centre commercial et les nombreuses residences collectives generent une demande variee en marquage au sol.',
    zones: ['Panorama', 'Jardin Parisien', 'Gare', 'Petit-Clamart', 'Trivaux']
  },
  {
    slug: 'meudon',
    name: 'Meudon',
    context: 'Meudon se caracterise par ses espaces verts et ses zones tertiaires comme Meudon Campus. Les parkings d\'entreprises, les residences et les voiries privees necessitent un marquage professionnel regulier.',
    zones: ['Meudon-la-Foret', 'Val Fleury', 'Bellevue', 'Campus', 'Centre-ville']
  }
];

// Formulations variees par service - Contenu riche specifique aux Hauts-de-Seine (92)
const intros: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    'Les Hauts-de-Seine concentrent une densite exceptionnelle de parkings : tours de La Defense, residences de standing de Neuilly et Boulogne-Billancourt, centres commerciaux de Rueil-Malmaison. Notre entreprise intervient dans tout le 92 pour le tracage professionnel de vos places de stationnement, fleches directionnelles et zones pietonnes avec des peintures haute resistance.',
    'De Nanterre a Antony, des parkings souterrains de Courbevoie aux residences de Clamart, nous assurons le marquage complet de vos espaces de stationnement. Notre equipe connait parfaitement les contraintes des parkings du 92 : hauteurs limitees, trafic intense, exigences esthetiques elevees des coproprietes haut de gamme.',
    'Le departement des Hauts-de-Seine accueille les plus grands parkings d\'Ile-de-France, notamment sous les tours de La Defense. Notre expertise nous permet d\'intervenir sur tous types de surfaces : parkings souterrains multi-niveaux, aires de stationnement exterieures, parkings relais des gares RER du 92.',
    'Specialistes du marquage parking dans les Hauts-de-Seine depuis plus de 15 ans, nous intervenons a Levallois-Perret, Issy-les-Moulineaux, Colombes et dans toutes les communes du 92. Nos techniciens qualifies utilisent des equipements professionnels adaptes aux parkings les plus exigeants du departement.',
    'Dans les Hauts-de-Seine, chaque parking a ses specificites : parkings d\'affaires a La Defense, residences privees a Meudon, surfaces commerciales a Asnieres. Notre entreprise s\'adapte a chaque contexte pour delivrer un marquage au sol conforme aux normes et durable dans le temps.'
  ],
  'marquage-au-sol-parking-prive': [
    'Les coproprietes des Hauts-de-Seine, notamment a Neuilly-sur-Seine, Boulogne-Billancourt et Levallois-Perret, exigent un marquage parking de haute qualite. Nous intervenons dans les residences privees du 92 pour tracer vos places numerotees, zones visiteurs et emplacements reserves avec des finitions soignees.',
    'Votre parking prive dans le 92 merite un tracage professionnel. Que vous soyez syndic a Courbevoie, gestionnaire de residence a Rueil-Malmaison ou proprietaire a Issy-les-Moulineaux, nous realisons un marquage personnalise adapte aux contraintes de votre copropriete et aux attentes de vos residents.',
    'Dans les Hauts-de-Seine, les parkings prives des residences de standing necessitent une attention particuliere. Notre equipe intervient a Meudon, Clamart, Antony et dans tout le departement pour un tracage precis des places, avec numerotation, fleches et pictogrammes conformes aux normes.',
    'Les parkings souterrains prives du 92 requierent des peintures specifiques : haute adherence, resistance a l\'humidite, sechage rapide. De Nanterre a Colombes, nous utilisons des produits adaptes aux conditions des parkings couverts des Hauts-de-Seine pour un resultat durable.',
    'Syndics et gestionnaires de coproprietes dans les Hauts-de-Seine, confiez-nous le marquage de vos parkings prives. Intervention rapide a Asnieres-sur-Seine, Boulogne-Billancourt, Neuilly et dans toutes les communes du 92. Devis gratuit et travaux realises de nuit pour ne pas gener les residents.'
  ],
  'marquage-au-sol-stationnement': [
    'L\'optimisation du stationnement est cruciale dans les Hauts-de-Seine, departement le plus dense d\'Ile-de-France apres Paris. Notre expertise permet de maximiser la capacite de vos parkings a Levallois-Perret, Boulogne-Billancourt ou Courbevoie tout en respectant les normes de circulation et d\'accessibilite PMR.',
    'Dans le 92, chaque place de stationnement compte. Nous intervenons pour retracer et optimiser vos zones de stationnement a Nanterre, Colombes, Rueil-Malmaison et dans tout le departement. Notre approche methodique garantit un gain de places tout en ameliorant la fluidite de circulation.',
    'Les Hauts-de-Seine concentrent entreprises, commerces et residences avec des besoins de stationnement importants. Notre equipe realise le marquage complet de vos aires de stationnement : places standards, PMR, livraisons, deux-roues. Intervention dans tout le 92 avec des peintures certifiees haute durabilite.',
    'De la prefecture de Nanterre aux zones commerciales d\'Antony, nous optimisons les espaces de stationnement des Hauts-de-Seine. Notre expertise technique permet d\'adapter le tracage aux contraintes specifiques de chaque site : pentes, piliers, angles, tout en maximisant le nombre de places.',
    'Le stationnement dans les Hauts-de-Seine represente un enjeu majeur pour les collectivites et les entreprises. Nous accompagnons les gestionnaires de parkings du 92 dans l\'optimisation de leurs espaces avec un marquage conforme, lisible et durable face au trafic intense du departement.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Le quartier d\'affaires de La Defense et les parcs tertiaires des Hauts-de-Seine accueillent les sieges sociaux des plus grandes entreprises francaises. Nous realisons le marquage de leurs parkings avec un niveau d\'exigence eleve : places nominatives direction, visiteurs, zones VIP, signaletique corporate integree.',
    'Dans les Hauts-de-Seine, votre parking d\'entreprise reflete votre image professionnelle. De Courbevoie a Issy-les-Moulineaux, de Boulogne-Billancourt a Rueil-Malmaison, nous intervenons dans les parcs d\'activites du 92 pour un marquage soigne avec places reservees, numerotation et fleches directionnelles.',
    'Les zones d\'activites des Hauts-de-Seine comme Rueil 2000 ou le Val de Seine necessitent un marquage parking professionnel. Notre equipe intervient aupres des entreprises du 92 pour tracer places collaborateurs, visiteurs, livraisons et PMR selon les normes en vigueur et vos specifications.',
    'Gestionnaires de parcs tertiaires dans les Hauts-de-Seine, optimisez vos parkings d\'entreprise. Nous intervenons a La Defense, Nanterre, Levallois-Perret et dans tout le 92 pour un tracage complet : places numerotees, zones reservees, circulation, passages pietons securises.',
    'Les entreprises des Hauts-de-Seine meritent un parking a leur image. Notre expertise couvre le marquage de tous les espaces professionnels du 92 : sieges sociaux a Neuilly, entrepots a Gennevilliers, showrooms a Boulogne. Peintures haute resistance et finitions impeccables garanties.'
  ],
  'marquage-au-sol-entrepot': [
    'Les zones logistiques des Hauts-de-Seine, notamment a Gennevilliers, Nanterre et Colombes, necessitent un marquage au sol rigoureux. Nous traceons vos zones de stockage, allees de circulation engins, emplacements palettes et zones de securite conformement aux normes INRS et aux exigences de vos assureurs.',
    'Dans le 92, les entrepots modernes requierent un marquage professionnel pour optimiser les flux logistiques. Notre equipe intervient dans les zones d\'activites de Rueil-Malmaison, Nanterre et Colombes pour tracer zones de picking, quais de chargement, allees pietonnes et zones dangereuses.',
    'Le marquage en entrepot dans les Hauts-de-Seine repond a des normes strictes de securite. Nous realisons le tracage complet de vos surfaces logistiques avec codes couleurs reglementaires : jaune pour circulation, vert pour stockage, rouge pour danger, blanc pour zones pietonnes.',
    'Les plateformes logistiques du 92 font appel a notre expertise pour le marquage de leurs entrepots. De Gennevilliers a Antony, nous intervenons pour tracer emplacements de stockage, voies de circulation caristes, zones de preparation et aires de stationnement poids lourds.',
    'Optimisez votre surface d\'entreposage dans les Hauts-de-Seine grace a un marquage rationnel. Notre equipe analyse vos flux, propose un plan de marquage adapte et realise les travaux en limitant l\'interruption de votre activite. Intervention nuit et week-end possible dans tout le 92.'
  ],
  'marquage-au-sol-industriel': [
    'Les sites industriels des Hauts-de-Seine exigent un marquage resistant aux contraintes specifiques de chaque activite. Nous intervenons a Nanterre, Colombes, Gennevilliers et dans tout le 92 avec des peintures epoxy et polyurethane adaptees aux passages d\'engins, produits chimiques et temperatures extremes.',
    'Dans le 92, le secteur industriel reste present malgre la tertiarisation. Notre equipe realise le marquage des zones de production, allees de circulation, emplacements machines et zones de danger pour les usines et ateliers des Hauts-de-Seine avec des produits certifies haute performance.',
    'La securite industrielle passe par un marquage au sol clair et durable. Nous accompagnons les sites de production des Hauts-de-Seine dans la mise en conformite de leurs espaces de travail : bandes de securite, passages pietons, zones de stockage, emplacements extincteurs.',
    'Les industries des Hauts-de-Seine, de l\'agroalimentaire a la metallurgie, font appel a notre expertise pour le marquage de leurs locaux. Nous selectionnons les peintures adaptees a chaque environnement : resistance chimique a Gennevilliers, antiderapant a Colombes, alimentaire a Nanterre.',
    'Responsables HSE des Hauts-de-Seine, confiez-nous le marquage de vos sites industriels. Notre connaissance des normes de securite et notre experience dans le 92 garantissent un tracage conforme aux exigences reglementaires et adapte aux contraintes de votre activite.'
  ],
  'marquage-au-sol-usine': [
    'Les usines des Hauts-de-Seine necessitent un marquage au sol adapte a leurs process de production. Nous intervenons dans les sites industriels de Nanterre, Colombes et Gennevilliers pour tracer zones de travail, allees de circulation, stockages et zones dangereuses avec des peintures haute resistance.',
    'Dans le 92, les sites de production requierent un marquage precis pour optimiser les flux et garantir la securite. Notre equipe realise le tracage complet de vos usines : postes de travail, zones machines, allees operateurs, stockages matieres premieres et produits finis.',
    'Le marquage en usine dans les Hauts-de-Seine doit resister aux sollicitations intensives : passages de chariots, produits chimiques, nettoyages frequents. Nous utilisons des peintures epoxy bicomposant ou polyurethane selectionnees pour leur durabilite dans les conditions industrielles.',
    'Ameliorez l\'organisation de votre usine dans le 92 grace a un marquage au sol structure. Nous analysons vos flux de production et proposons un plan de tracage optimise pour vos ateliers de fabrication, zones de controle qualite et aires de conditionnement.',
    'Les arrets de production sont precieux dans les usines des Hauts-de-Seine. Notre equipe intervient durant vos periodes de fermeture pour realiser le marquage complet de vos espaces de travail. Preparation du support et application dans les regles de l\'art pour une tenue maximale.'
  ],
  'marquage-routier-au-sol': [
    'Les voiries privees des Hauts-de-Seine, nombreuses dans les residences et parcs d\'activites, necessitent un marquage routier conforme aux normes. Nous traceons lignes de circulation, passages pietons, fleches et stop sur les voies privees du 92 avec des equipements professionnels homologues.',
    'De Boulogne-Billancourt a Rueil-Malmaison, les coproprietes et entreprises du 92 possedent des voiries internes. Notre equipe realise leur marquage routier : lignes axiales, rives, cedez-le-passage, zones 30. Peintures retroreflechissantes avec billes de verre pour une visibilite optimale.',
    'Le marquage routier dans les Hauts-de-Seine couvre les acces d\'entreprises, les voies de residences et les parkings de surface. Nous intervenons avec des traceuses professionnelles pour un tracage precis des lignes, fleches directionnelles et signalisation horizontale.',
    'Les zones d\'activites du 92 comme La Defense, Rueil 2000 ou le Val de Seine disposent de voiries privees necessitant un marquage routier professionnel. Notre expertise garantit des travaux conformes aux normes de la signalisation routiere francaise.',
    'Gestionnaires de voiries privees dans les Hauts-de-Seine, assurez la securite des usagers avec un marquage routier professionnel. Nous intervenons a Nanterre, Courbevoie, Levallois-Perret et dans tout le 92 pour le tracage de vos chaussees privees.'
  ],
  'marquage-garage-automobile': [
    'Les garages automobiles et concessions des Hauts-de-Seine, nombreux le long des grands axes du 92, necessitent un marquage adapte. Nous traceons zones de levage, circulation clients, stockage vehicules et aires de preparation pour les professionnels de l\'automobile a Boulogne, Nanterre ou Colombes.',
    'Concessions automobiles de Rueil-Malmaison, garages de Courbevoie, carrosseries de Levallois : nous intervenons dans tous les etablissements automobiles du 92. Notre marquage resiste aux huiles, solvants et trafic intensif avec des peintures epoxy haute performance.',
    'Dans les Hauts-de-Seine, les showrooms et ateliers automobiles requierent un marquage professionnel. Notre equipe trace vos espaces d\'exposition, zones atelier, aires de livraison et parkings clients avec des finitions soignees adaptees a l\'image des marques representees.',
    'Le marquage de votre garage automobile dans le 92 optimise l\'espace et la productivite. Nous delimitons baies de travail, zones de stockage pieces, allees de circulation et emplacements clients pour les garages des Hauts-de-Seine avec des peintures resistantes aux produits automobiles.',
    'Professionnels de l\'automobile dans les Hauts-de-Seine, beneficiez d\'un marquage adapte a votre activite. Notre expertise couvre les concessions, ateliers mecaniques, carrosseries et centres de controle technique du 92 avec des solutions durables et esthetiques.'
  ],
  'marquage-zones-pietonnes': [
    'La securite des pietons dans les Hauts-de-Seine, departement a forte densite urbaine, passe par un marquage clair des zones de circulation. Nous delimitons passages pietons, allees securisees et zones protegees dans les parkings, entrepots et sites industriels du 92.',
    'A La Defense comme dans les zones d\'activites de Nanterre ou Colombes, la separation des flux pietons et vehicules est essentielle. Notre equipe realise le marquage des zones pietonnes avec bandes colorees, pictogrammes et surfaces antiderapantes pour les sites du 92.',
    'Les entrepots et usines des Hauts-de-Seine doivent proteger leurs collaborateurs avec des zones pietonnes bien marquees. Nous traceons allees de circulation, passages securises et zones d\'attente conformement aux recommandations INRS pour les sites industriels du 92.',
    'Dans les parkings des Hauts-de-Seine, le marquage des zones pietonnes previent les accidents. Notre expertise garantit des tracages visibles et durables : passages pietons zebres, allees delimitees, zones de traversee securisees dans les parkings du 92.',
    'Responsables securite des Hauts-de-Seine, securisez vos sites avec un marquage pieton professionnel. Nous intervenons a Issy-les-Moulineaux, Boulogne-Billancourt, Clamart et dans tout le 92 pour delimiter les zones de circulation pietonne dans vos etablissements.'
  ],
  'places-handicapees-pmr': [
    'L\'accessibilite PMR est obligatoire dans les Hauts-de-Seine comme partout en France. Notre equipe realise le marquage des places handicapees dans les parkings du 92 : dimensions reglementaires 3,30m x 5m, pictogramme normalise, couleur bleue, signalisation verticale associee.',
    'Les coproprietes et entreprises des Hauts-de-Seine doivent disposer de places PMR conformes. Nous intervenons a Nanterre, Boulogne-Billancourt, Courbevoie et dans tout le 92 pour creer ou mettre en conformite vos emplacements handicapes avec les normes d\'accessibilite en vigueur.',
    'Dans les parkings publics et prives des Hauts-de-Seine, les places PMR doivent respecter des specifications precises. Notre expertise garantit un marquage conforme : largeur majoree, bande de circulation laterale, pictogramme au sol, signalisation verticale. Intervention dans tout le 92.',
    'Gestionnaires de parkings dans les Hauts-de-Seine, assurez la conformite de vos places handicapees. Nous realisons l\'audit de vos installations et effectuons les travaux de mise aux normes pour les parkings de Neuilly, Levallois-Perret, Antony et de toutes les communes du 92.',
    'Le marquage des places PMR dans les Hauts-de-Seine requiert une expertise specifique. Notre equipe connait parfaitement la reglementation et intervient pour tracer des emplacements accessibles conformes dans les residences, commerces et entreprises du 92.'
  ],
  'signalisation-verticale': [
    'La signalisation verticale complete le marquage au sol dans les Hauts-de-Seine. Nous installons panneaux directionnels, reglementaires et informatifs dans les parkings et voiries privees de La Defense, Boulogne-Billancourt, Nanterre et de tout le 92.',
    'Dans les parkings des Hauts-de-Seine, une signaletique verticale claire guide les usagers. Notre equipe pose panneaux de circulation, indicateurs d\'etages, fleches directionnelles et panneaux de places reservees pour les parkings multi-niveaux du 92.',
    'Les voiries privees des Hauts-de-Seine necessitent une signalisation verticale conforme. Nous installons stops, cedez-le-passage, limitation de vitesse et panneaux de direction pour les residences et zones d\'activites du 92 avec des supports adaptes.',
    'De Courbevoie a Antony, les espaces de stationnement du 92 requierent une signalisation verticale complete. Notre expertise couvre l\'installation de tous types de panneaux : entree/sortie, sens de circulation, places reservees, informations tarifaires.',
    'Gestionnaires de parkings et de voiries dans les Hauts-de-Seine, equipez vos espaces d\'une signalisation verticale professionnelle. Nous realisons l\'etude, la fourniture et la pose de panneaux adaptes a vos besoins dans tout le 92.'
  ],
  'pose-ralentisseur': [
    'La securisation de la vitesse dans les Hauts-de-Seine passe par l\'installation de ralentisseurs homologues. Nous posons coussins berlinois, dos d\'ane et plateaux dans les parkings, residences et voiries privees du 92 pour proteger pietons et usagers.',
    'Dans les residences et zones d\'activites des Hauts-de-Seine, les ralentisseurs limitent la vitesse et securisent les passages. Notre equipe installe des dispositifs adaptes au trafic et aux contraintes de vos sites a Nanterre, Rueil-Malmaison, Colombes et dans tout le 92.',
    'Les parkings et voiries privees des Hauts-de-Seine necessitent des ralentisseurs pour maitriser la vitesse. Nous selectionnons le dispositif adapte : coussin berlinois pour voies etroites, dos d\'ane pour zones pietonnes, plateau pour intersections.',
    'Coproprietes du 92, securisez vos voies internes avec des ralentisseurs professionnels. Notre equipe intervient a Boulogne-Billancourt, Issy-les-Moulineaux, Levallois-Perret et dans tout le departement pour la pose de dispositifs homologues avec signalisation reglementaire.',
    'La pose de ralentisseur dans les Hauts-de-Seine garantit la securite des zones de circulation. Nous installons des equipements certifies conformes aux normes, avec fixation adaptee au support et marquage au sol reglementaire pour les sites du 92.'
  ],
  'installation-panneaux-parking': [
    'Les parkings des Hauts-de-Seine necessitent une signaletique claire pour guider les usagers. Nous installons panneaux directionnels, numeros de niveaux, indications de places et consignes de securite dans les parkings de La Defense, Boulogne et de tout le 92.',
    'Dans les parkings multi-niveaux du 92, une signalisation adaptee est indispensable. Notre equipe pose panneaux de circulation, fleches, indications de sorties et signaletique des places reservees pour les grands parkings des Hauts-de-Seine.',
    'Les coproprietes des Hauts-de-Seine equipent leurs parkings de panneaux informatifs. Nous realisons la conception et l\'installation de signaletique personnalisee : numeros de places, places visiteurs, consignes, dans tout le 92.',
    'Gestionnaires de parkings dans les Hauts-de-Seine, ameliorez l\'orientation des usagers. Nous installons une signaletique complete et coherente pour vos espaces de stationnement a Nanterre, Courbevoie, Neuilly et dans toutes les communes du departement.',
    'L\'installation de panneaux parking dans les Hauts-de-Seine optimise la circulation et reduit les incivilites. Notre expertise couvre tous les types de signaletique : directionnelle, reglementaire, informative, pour les parkings du 92.'
  ],
  'pose-miroir-circulation': [
    'Les miroirs de circulation ameliorent la visibilite dans les parkings et voiries des Hauts-de-Seine. Nous installons miroirs convexes et panoramiques aux angles morts des parkings souterrains de La Defense, des residences de Neuilly et des entreprises du 92.',
    'Dans les parkings multi-niveaux des Hauts-de-Seine, les angles de virage necessitent des miroirs de securite. Notre equipe pose des equipements adaptes aux contraintes de chaque site : dimensions, fixation, positionnement optimal pour une visibilite maximale.',
    'Les voiries privees du 92 comportent souvent des intersections a visibilite reduite. Nous installons des miroirs de circulation homologues pour securiser les carrefours des residences et zones d\'activites des Hauts-de-Seine.',
    'Securisez les zones de manoeuvre de vos parkings dans les Hauts-de-Seine. Notre equipe installe miroirs convexes interieurs et exterieurs aux emplacements strategiques pour prevenir les collisions dans les parkings du 92.',
    'La pose de miroir de circulation dans les Hauts-de-Seine repond a des enjeux de securite importants. Nous selectionnons les equipements adaptes et determinons leur positionnement optimal pour les parkings et voiries du 92.'
  ],
  'installation-bornes-parking': [
    'Les bornes de parking protegent les places reservees dans les Hauts-de-Seine. Nous installons bornes fixes, amovibles et retractables pour les coproprietes de Neuilly, les entreprises de La Defense et les residences du 92.',
    'Dans les parkings des Hauts-de-Seine, les bornes delimitent les espaces et gerent les acces. Notre equipe pose des dispositifs adaptes : bornes fixes pour delimitation permanente, amovibles pour places reservees, retractables pour acces controles.',
    'Les places direction et visiteurs des entreprises du 92 necessitent une protection par bornes. Nous installons des equipements de qualite professionnelle dans les parcs d\'activites de Rueil-Malmaison, Nanterre, Colombes et de tout le departement.',
    'Coproprietes des Hauts-de-Seine, protegez vos places privatives avec des bornes de parking. Notre equipe intervient a Boulogne-Billancourt, Issy-les-Moulineaux, Levallois-Perret et dans tout le 92 pour l\'installation de bornes adaptees.',
    'L\'installation de bornes parking dans les Hauts-de-Seine securise vos espaces reserves. Nous proposons une gamme complete de solutions : bornes rabattables, poteaux amovibles, bornes automatiques pour les parkings du 92.'
  ],
  'pose-butees-parking': [
    'Les butees de parking facilitent le positionnement des vehicules dans les Hauts-de-Seine. Nous posons butees en caoutchouc, beton ou plastique dans les parkings de La Defense, les residences de Boulogne et les entreprises du 92.',
    'Dans les parkings souterrains des Hauts-de-Seine, les butees protegent murs et equipements. Notre equipe installe des butees de roues adaptees aux contraintes de chaque site : parkings etroits, places en bataille ou en epi.',
    'Les coproprietes du 92 equipent leurs places de parking de butees pour le confort des residents. Nous posons des butees de qualite professionnelle a Neuilly-sur-Seine, Levallois-Perret, Courbevoie et dans toutes les communes des Hauts-de-Seine.',
    'La pose de butees parking dans les Hauts-de-Seine evite les debordements de vehicules. Nous selectionnons le materiau adapte a chaque usage : caoutchouc recycle pour flexibilite, beton pour durabilite, plastique pour legerte.',
    'Gestionnaires de parkings dans les Hauts-de-Seine, equipez vos places de butees professionnelles. Notre equipe intervient dans tout le 92 pour la pose de butees de roues avec fixation adaptee au support et positionnement precis.'
  ]
};

const descriptions: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    'Nous utilisons des peintures acryliques et epoxy haute resistance pour un marquage durable. Places standards, PMR, livraisons : toutes configurations sont realisables. Nos equipes interviennent de nuit ou le week-end pour ne pas perturber votre activite.',
    'Notre expertise couvre le tracage de places, les fleches directionnelles, les passages pietons et la numerotation. Nous garantissons des travaux conformes aux DTU et normes NF. Devis gratuit sous 24h.',
    'Le marquage de votre parking est realise avec des equipements professionnels : traceuses airless, pochoirs normes, peintures homologuees. Nous assurons une prestation soignee avec un rendu parfait.',
    'De la preparation du support au tracage final, nous maitrisons toutes les etapes du marquage parking. Nos techniciens sont formes aux dernieres techniques et normes en vigueur.'
  ],
  'marquage-au-sol-parking-prive': [
    'Votre parking prive beneficie d\'un marquage personnalise : couleurs, numerotation, logos. Nous adaptons nos solutions aux contraintes de votre site et a vos attentes esthetiques.',
    'Les parkings de copropriete, residences et entreprises sont notre specialite. Nous intervenons rapidement avec un materiel adapte aux espaces confines des parkings souterrains.',
    'Nos prestations incluent le tracage des places, les zones de circulation, les pictogrammes et la signalisation complete de votre parking prive.',
    'Un parking prive bien marque valorise votre bien et facilite le quotidien des usagers. Confiez-nous votre projet pour un resultat professionnel.'
  ],
  'marquage-au-sol-stationnement': [
    'L\'optimisation de vos zones de stationnement permet d\'augmenter la capacite tout en respectant les normes. Nous realisons les etudes prealables et le tracage complet.',
    'Nos solutions de marquage stationnement s\'adaptent a tous les contextes : parkings de surface, voiries, zones commerciales. Peintures resistantes aux intemperies et au trafic.',
    'Le tracage des places de stationnement respecte les dimensions reglementaires. Nous integrons les places PMR, les zones de livraison et les circulations.',
    'Un marquage stationnement bien concu ameliore la fluidite et reduit les conflits entre usagers. Notre expertise vous garantit un resultat optimal.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Votre parking d\'entreprise est un espace strategique pour l\'image et la securite. Nous proposons des solutions completes incluant places nominatives, visiteurs et direction.',
    'Les zones d\'activites et parcs d\'entreprises font appel a notre expertise pour le marquage de leurs parkings. Intervention de nuit possible pour limiter les perturbations.',
    'Nous accompagnons les gestionnaires de parcs tertiaires dans la mise en conformite et l\'optimisation de leurs parkings. Devis personnalise selon vos besoins.',
    'Le marquage de votre parking entreprise reflete votre professionnalisme. Nos finitions soignees et nos peintures durables garantissent un rendu impeccable.'
  ],
  'marquage-au-sol-entrepot': [
    'Le marquage en entrepot repond a des normes specifiques : zones de stockage, allees de circulation, zones de danger. Nous maitrisons les codes couleurs et les exigences reglementaires.',
    'Nos interventions en entrepot incluent le tracage des emplacements palettes, les zones de picking et les voies de circulation des engins. Peintures resistantes a l\'abrasion.',
    'La securite en entrepot passe par un marquage clair des zones pietonnes et vehicules. Nous realisons les tracages conformes aux recommandations INRS.',
    'Optimisez votre surface de stockage avec un marquage rationnel. Nos equipes interviennent sans perturber votre activite logistique.'
  ],
  'marquage-au-sol-industriel': [
    'Les sites industriels exigent des marquages resistants aux produits chimiques, aux temperatures extremes et au trafic intensif. Nous selectionnons les peintures adaptees a vos contraintes.',
    'Zones de danger, allees de circulation, emplacements machines : nous realisons tous les tracages necessaires a la securite de vos installations.',
    'Notre expertise industrielle couvre les secteurs agroalimentaire, chimique, metallurgique et logistique. Chaque site fait l\'objet d\'une etude specifique.',
    'Le marquage industriel est un element cle de la prevention des risques. Nous vous accompagnons dans la mise en conformite de vos espaces de travail.'
  ],
  'marquage-au-sol-usine': [
    'L\'usine moderne necessite un marquage clair pour optimiser les flux de production. Nous traceons les zones de travail, stockage et circulation selon vos process.',
    'Nos equipes interviennent pendant les arrets de production pour realiser les travaux de marquage. Preparation du support et application dans les regles de l\'art.',
    'Le marquage en usine doit resister aux contraintes mecaniques et chimiques. Nous utilisons des peintures epoxy ou polyurethane haute performance.',
    'Ameliorez l\'ergonomie et la securite de votre usine avec un marquage professionnel. Nos techniciens sont formes aux exigences du milieu industriel.'
  ],
  'marquage-routier-au-sol': [
    'Le marquage routier sur voiries privees respecte les memes exigences que la voirie publique. Nous utilisons des produits homologues et des equipements professionnels.',
    'Lignes continues, discontinues, passages pietons, fleches : nous maitrisons toutes les configurations de marquage routier. Billes de verre pour retroreflexion.',
    'Nos travaux de marquage routier sont realises par des techniciens qualifies avec des traceuses professionnelles. Resultat conforme aux normes NF.',
    'Voiries de residence, acces industriels, parkings de surface : nous intervenons sur tous types de voiries privees pour le marquage horizontal.'
  ],
  'marquage-garage-automobile': [
    'Le garage automobile requiert un marquage adapte : zones de levage, circulation clients, stockage. Nous proposons des peintures resistantes aux produits automobiles.',
    'Concessions, ateliers mecaniques et carrosseries font appel a notre expertise pour l\'amenagement de leurs espaces de travail.',
    'Un marquage clair dans votre garage ameliore la productivite et la securite. Nous realisons les tracages selon vos besoins specifiques.',
    'Les sols de garage subissent des contraintes importantes : huiles, solvants, trafic. Nos peintures epoxy resistent durablement a ces agressions.'
  ],
  'marquage-zones-pietonnes': [
    'La separation des flux pietons et vehicules est essentielle a la securite. Nous traceons des cheminements clairs avec des peintures antiderapantes.',
    'Zones pietonnes, passages securises, allees de circulation : notre expertise garantit un marquage visible et durable pour la protection de tous.',
    'Les sites industriels et commerciaux necessitent des zones pietonnes bien delimitees. Nous utilisons des codes couleurs conformes aux normes.',
    'Le marquage pieton protege vos collaborateurs et visiteurs. Nos solutions incluent bandes podotactiles et pictogrammes pour les PMR.'
  ],
  'places-handicapees-pmr': [
    'Les places PMR doivent respecter des dimensions precises : 3,30m x 5m minimum avec bande de circulation. Nous garantissons un tracage conforme a la loi.',
    'Pictogrammes normalises, couleur bleue reglementaire, signalisation verticale : nous realisons des places PMR completes et conformes.',
    'La mise en accessibilite de vos parkings passe par des places PMR bien positionnees et correctement dimensionnees. Notre expertise vous accompagne.',
    'Nous intervenons pour la creation ou la mise en conformite de vos places handicapees. Devis gratuit incluant l\'etude de votre situation.'
  ],
  'signalisation-verticale': [
    'La signalisation verticale complete le marquage au sol pour une orientation optimale. Nous installons tous types de panneaux pour parkings et voiries.',
    'Panneaux directionnels, reglementaires, informatifs : nous proposons une gamme complete adaptee a vos besoins de signalisation.',
    'L\'installation de signalisation verticale est realisee par nos equipes qualifiees. Fixation adaptee au support et mise en conformite.',
    'Un parking bien signalise ameliore l\'experience usager. Nous concevons des solutions sur mesure pour vos espaces de stationnement.'
  ],
  'pose-ralentisseur': [
    'Les ralentisseurs sont essentiels pour securiser les zones a vitesse limitee. Nous installons des equipements homologues et adaptes au trafic.',
    'Coussins berlinois, dos d\'ane, plateaux : chaque solution repond a des contraintes specifiques. Nous vous conseillons le dispositif adapte.',
    'La pose de ralentisseur est realisee dans les regles de l\'art avec fixation adaptee et signalisation reglementaire.',
    'Securisez les abords de vos batiments, ecoles ou residences avec des ralentisseurs professionnels. Devis gratuit et pose rapide.'
  ],
  'installation-panneaux-parking': [
    'Une signaletique claire facilite la circulation dans votre parking. Nous installons panneaux directionnels, numeros d\'etage et informations pratiques.',
    'Les panneaux de parking sont realises sur mesure selon vos besoins : places reservees, sens de circulation, consignes de securite.',
    'Notre expertise couvre la conception et l\'installation de signaletique complete pour parkings de toutes tailles.',
    'Optimisez l\'experience de vos usagers avec une signaletique professionnelle. Nous realisons les supports adaptes a votre charte graphique.'
  ],
  'pose-miroir-circulation': [
    'Les miroirs de securite offrent une visibilite sur les angles morts. Nous installons des equipements adaptes aux contraintes de vos espaces.',
    'Miroirs convexes interieurs et exterieurs, miroirs hemisphereiques : notre gamme repond a tous les besoins de visibilite.',
    'La pose de miroir est realisee avec une fixation adaptee au support. Nous determinons l\'emplacement optimal pour une efficacite maximale.',
    'Securisez vos parkings et voiries avec des miroirs de circulation professionnels. Installation rapide et garantie qualite.'
  ],
  'installation-bornes-parking': [
    'Les bornes protegent vos places reservees et delimitent les espaces. Nous installons bornes fixes, amovibles ou retractables selon vos besoins.',
    'Protection des places direction, des acces pompiers ou des zones privatives : nos solutions de bornage s\'adaptent a tous les contextes.',
    'L\'installation de bornes est realisee avec scellement ou fixation mecanique selon le support. Finitions soignees et resistance garantie.',
    'Gerez efficacement les acces a vos espaces avec des bornes de qualite professionnelle. Large choix de modeles et finitions.'
  ],
  'pose-butees-parking': [
    'Les butees de parking facilitent le positionnement et protegent les murs ou equipements. Nous posons des butees adaptees a vos places.',
    'Butees en caoutchouc recycle, beton prefabrique ou plastique haute resistance : nous selectionnons le materiau adapte a votre usage.',
    'La pose de butees est realisee avec fixation mecanique pour une tenue optimale. Positionnement precis pour chaque place.',
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
    metaDescription: `${serviceName} a ${city.name} dans les Hauts-de-Seine. Entreprise specialisee, intervention rapide. Devis gratuit sous 24h.`,
    content: {
      introduction: intro.replace('${location}', city.name),
      localContext: city.context,
      serviceDescription: desc
    },
    faqs: [
      {
        question: `Quel est le delai d'intervention a ${city.name} ?`,
        answer: `Nous intervenons sous 24 a 48h a ${city.name} (92). La visite technique et le devis sont gratuits.`
      },
      {
        question: `Intervenez-vous dans les quartiers de ${city.name} ?`,
        answer: `Oui, nous couvrons tous les quartiers de ${city.name} : ${city.zones.join(', ')} et alentours.`
      },
      {
        question: `Quelles garanties proposez-vous a ${city.name} ?`,
        answer: `Tous nos travaux a ${city.name} sont garantis 5 ans minimum. Nous utilisons des peintures professionnelles haute resistance.`
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
