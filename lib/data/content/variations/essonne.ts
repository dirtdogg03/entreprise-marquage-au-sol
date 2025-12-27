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
    slug: 'evry-courcouronnes',
    name: 'Evry-Courcouronnes',
    context: 'Prefecture de l\'Essonne, Evry-Courcouronnes accueille le centre commercial Evry 2, l\'universite et de nombreuses entreprises. Les parkings du centre-ville, les zones d\'activites et les residences representent un marche important.',
    zones: ['Evry 2', 'Agora', 'Pyramides', 'Bois Sauvage', 'Champtier du Coq']
  },
  {
    slug: 'corbeil-essonnes',
    name: 'Corbeil-Essonnes',
    context: 'Corbeil-Essonnes est une ville industrielle historique en pleine mutation. Les zones logistiques, les nouvelles residences et les equipements publics font appel a nos services de marquage au sol.',
    zones: ['Centre', 'Tarterets', 'Montconseil', 'Robinson', 'Papeteries']
  },
  {
    slug: 'massy',
    name: 'Massy',
    context: 'Massy est un hub de transport majeur avec sa gare TGV et RER. Les parkings relais, les zones tertiaires d\'Atlantis et les residences necessitent un marquage professionnel de qualite.',
    zones: ['Atlantis', 'Gare', 'Massy-Opera', 'Vilmorin', 'Villaine']
  },
  {
    slug: 'savigny-sur-orge',
    name: 'Savigny-sur-Orge',
    context: 'Savigny-sur-Orge combine zones pavillonnaires et centres commerciaux. Les parkings des commerces, les residences et les equipements sportifs font appel a notre expertise en tracage.',
    zones: ['Centre', 'Grand Vaux', 'Champagne', 'Rossays', 'Gare']
  },
  {
    slug: 'sainte-genevieve-des-bois',
    name: 'Sainte-Genevieve-des-Bois',
    context: 'Sainte-Genevieve-des-Bois dispose de zones commerciales importantes et de nombreuses residences. Les parkings des centres commerciaux et des coproprietes constituent notre marche principal.',
    zones: ['Centre Commercial', 'Croix Blanche', 'Perray', 'Donjon', 'Mairie']
  },
  {
    slug: 'viry-chatillon',
    name: 'Viry-Chatillon',
    context: 'Viry-Chatillon beneficie de la proximite de l\'aeroport d\'Orly pour son developpement economique. Les zones d\'activites, les residences et les equipements publics necessitent un marquage conforme.',
    zones: ['Port Aviation', 'Plateau', 'Coteaux de l\'Orge', 'Centre', 'Cilof']
  },
  {
    slug: 'athis-mons',
    name: 'Athis-Mons',
    context: 'Athis-Mons est situee pres de l\'aeroport d\'Orly avec des zones logistiques importantes. Les parkings d\'entreprises, les residences et les commerces font appel a nos services de marquage.',
    zones: ['Centre', 'Noyer Renard', 'Coteaux', 'Gare', 'Porte de l\'Essonne']
  },
  {
    slug: 'palaiseau',
    name: 'Palaiseau',
    context: 'Palaiseau accueille l\'Ecole Polytechnique et le plateau de Saclay. Les parkings des etablissements de recherche, les residences et les zones d\'innovation requierent un marquage de qualite.',
    zones: ['Polytechnique', 'Centre', 'Lozere', 'Pileu', 'Camille Claudel']
  },
  {
    slug: 'yerres',
    name: 'Yerres',
    context: 'Yerres est une ville residentielle avec un riche patrimoine. Les parkings des residences, du centre commercial et des equipements culturels font appel a notre expertise.',
    zones: ['Centre', 'Caillebotte', 'Tournelles', 'Brossolette', 'Gare']
  },
  {
    slug: 'draveil',
    name: 'Draveil',
    context: 'Draveil beneficie d\'un cadre de vie agreable le long de la Seine. Les parkings des residences, des centres de loisirs et des commerces necessitent un marquage professionnel.',
    zones: ['Centre', 'Villiers', 'Bergeries', 'Bords de Seine', 'Pyramides']
  },
  {
    slug: 'brunoy',
    name: 'Brunoy',
    context: 'Brunoy combine quartiers pavillonnaires et centres commerciaux. Les parkings des commerces, des residences et des equipements sportifs constituent notre clientele locale.',
    zones: ['Centre', 'Gare', 'Talma', 'Pyramides', 'Mandres']
  },
  {
    slug: 'les-ulis',
    name: 'Les Ulis',
    context: 'Les Ulis disposent d\'un important parc d\'activites et du centre commercial Ulis 2. Les parkings d\'entreprises, les zones commerciales et les residences generent une demande reguliere.',
    zones: ['Ulis 2', 'Bois des Vignes', 'Coteaux', 'Froux', 'Dauniere']
  }
];

const intros: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    'Specialistes du marquage au sol parking en Essonne (91), notre entreprise intervient sur l\'ensemble du departement, de la zone d\'activites de Courtaboeuf aux parkings du pole scientifique Paris-Saclay. Nous accompagnons les gestionnaires de parkings publics et prives avec des solutions durables adaptees aux flux importants caracteristiques de ce territoire dynamique aux portes de Paris.',
    'Notre societe de marquage parking dans le 91 repond aux besoins specifiques des entreprises technologiques de Paris-Saclay, des centres commerciaux d\'Evry-Courcouronnes et des zones logistiques proches d\'Orly. Chaque intervention est planifiee pour minimiser l\'impact sur votre activite, avec des travaux realises en horaires decales et des peintures a sechage rapide.',
    'Experts en amenagement de parking implantes dans l\'Essonne, nous maitrisons les contraintes specifiques de ce departement a forte densite economique. Des parkings-relais des gares RER aux aires de stationnement des centres de recherche du plateau de Saclay, nous garantissons un tracage conforme aux normes et resistant au trafic intense.',
    'Faites appel a notre experience reconnue pour le marquage de votre parking dans le 91, territoire ou se cotoient zones d\'innovation technologique, poles commerciaux majeurs et quartiers residentiels. Nous adaptons nos prestations a chaque contexte, qu\'il s\'agisse d\'un parking de copropriete a Massy ou d\'une aire de stationnement d\'entreprise a Courtaboeuf.',
    'Nous maitrisons toutes les configurations de parking rencontrees en Essonne, des grandes surfaces de stationnement des zones d\'activites aux parkings souterrains des residences. Notre connaissance du terrain, de Corbeil-Essonnes a Palaiseau, nous permet d\'intervenir rapidement avec des solutions techniques eprouvees et des materiaux haute performance.'
  ],
  'marquage-au-sol-parking-prive': [
    'Les parkings prives de l\'Essonne beneficient de notre expertise en tracage sur mesure, que ce soit pour les coproprietes de Savigny-sur-Orge, les residences de Sainte-Genevieve-des-Bois ou les ensembles immobiliers neufs du plateau de Saclay. Nous realisons des marquages personnalises integrant places numerotees, zones visiteurs et signalisation adaptee a votre reglement interieur.',
    'Nous amenageons les parkings de coproprietes du 91 avec un marquage professionnel qui optimise chaque metre carre disponible. Notre bureau d\'etudes analyse la configuration de votre parking pour proposer un plan de tracage maximisant le nombre de places tout en garantissant des circulations fluides et securisees pour tous les residents.',
    'Votre parking prive merite un tracage professionnel et durable realise par des specialistes du departement. De Viry-Chatillon a Yerres, nous intervenons dans toutes les communes de l\'Essonne pour transformer vos aires de stationnement en espaces organises, esthetiques et fonctionnels, refletant la qualite de votre copropriete ou residence.',
    'Optimisez l\'espace de votre parking prive avec nos solutions de marquage adaptees aux specificites de l\'Essonne. Nous prenons en compte les contraintes locales, comme les hivers rigoureux du plateau de Saclay ou le trafic intense des zones proches d\'Orly, pour selectionner les peintures et techniques les plus appropriees.',
    'Le marquage de votre parking prive est realise selon vos besoins specifiques par notre equipe presente dans tout le 91. Nous proposons des plans de tracage personnalises avec numerotation, fleches directionnelles, zones de livraison et places reservees, le tout dans le respect des normes d\'accessibilite PMR en vigueur.'
  ],
  'marquage-au-sol-stationnement': [
    'Nous optimisons vos zones de stationnement dans l\'Essonne grace a une expertise developpee aupres des collectivites et entreprises du departement. Du centre-ville d\'Evry-Courcouronnes aux zones d\'activites de Massy-Palaiseau, nous concevons des plans de stationnement intelligents qui maximisent la capacite tout en facilitant les manoeuvres des usagers.',
    'Le tracage de vos places de stationnement respecte scrupuleusement les normes en vigueur et s\'adapte aux realites du terrain essonnien. Nous intervenons aussi bien sur les parkings des centres commerciaux que sur les aires de stationnement des entreprises du pole Paris-Saclay, avec des techniques adaptees a chaque support et usage.',
    'Maximisez la capacite de vos stationnements avec notre expertise reconnue dans le 91. Notre bureau d\'etudes realise des audits complets pour optimiser l\'implantation des places, integrer les normes PMR et creer des circulations logiques qui reduisent les conflits d\'usage et ameliorent l\'experience des utilisateurs.',
    'Nos solutions de marquage stationnement s\'adaptent a tous les contextes du departement de l\'Essonne, des parkings-relais des gares RER aux aires de covoiturage en plein developpement. Nous utilisons des peintures routieres homologuees, resistantes aux conditions climatiques et au trafic intense caracteristique des zones periurbaines.',
    'Un stationnement bien marque facilite la gestion quotidienne de vos espaces dans le 91. Que vous geriez un parking de supermarche a Corbeil-Essonnes ou une aire de stationnement d\'entreprise aux Ulis, notre marquage clair et durable reduit les litiges, optimise le taux d\'occupation et securise les deplacements.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Les entreprises du 91 nous confient le marquage de leurs parkings car nous comprenons les enjeux d\'image et de fonctionnalite propres au monde professionnel. De la zone de Courtaboeuf au Genopole d\'Evry, nous realisons des tracages soignes avec places nominatives, zones visiteurs identifiees et signalisation directionnelle adaptee a vos flux.',
    'Nous accompagnons les professionnels de l\'Essonne dans leurs amenagements de parking avec une approche sur mesure. Notre equipe analyse vos besoins specifiques : rotations du personnel, visites clients, livraisons, pour concevoir un marquage qui optimise chaque deplacement et renforce votre image de marque aupres de vos interlocuteurs.',
    'Votre parking d\'entreprise merite un marquage professionnel a la hauteur de vos locaux et de votre activite. Implantes dans le 91, nous intervenons rapidement sur les zones d\'activites du departement pour realiser des travaux soignes, generalement en horaires decales pour ne pas perturber votre activite quotidienne.',
    'Solutions completes de marquage pour les zones d\'activites de l\'Essonne, de Courtaboeuf a Orly-Rungis. Nous proposons une offre globale incluant tracage des places, fleches de circulation, places PMR conformes, zones de livraison et signalisation verticale pour des parkings d\'entreprise parfaitement organises et securises.',
    'Le marquage professionnel de parking est notre specialite depuis des annees sur le territoire essonnien. Nous travaillons avec des entreprises de toutes tailles, des PME du tissu local aux multinationales du plateau de Saclay, en adaptant nos prestations aux contraintes techniques et budgetaires de chaque projet.'
  ],
  'marquage-au-sol-entrepot': [
    'Les entrepots du 91 necessitent un marquage au sol conforme aux normes de securite et d\'organisation logistique. Notre expertise couvre les grandes plateformes de la zone d\'Orly aux entrepots de Corbeil-Essonnes, avec des tracages resistants au passage des chariots elevateurs et conformes aux exigences des certifications qualite.',
    'Nous realisons le tracage complet de vos zones logistiques dans l\'Essonne selon les recommandations INRS et les standards de votre secteur d\'activite. Allees de circulation, emplacements de stockage, zones de picking, aires de chargement : chaque element est materialise avec des peintures industrielles haute resistance.',
    'Optimisez les flux de votre entrepot essonnien avec un marquage professionnel structure et lisible. Notre equipe intervient sur les plateformes logistiques du departement pour creer des tracages durables qui ameliorent la productivite, reduisent les risques d\'accident et facilitent la formation des nouveaux operateurs.',
    'Notre expertise en marquage entrepot couvre tous les besoins des sites logistiques du 91, des petits depots aux grandes plateformes e-commerce. Nous maitrisons les codes couleurs normalises, les pictogrammes de securite et les techniques de tracage adaptees aux sols industriels beton, resine ou enrobes.',
    'Marquage adapte aux contraintes d\'activite de vos entrepots en Essonne, avec possibilite d\'intervention nocturne ou le week-end pour ne pas interrompre vos operations. Nous utilisons des peintures a sechage rapide permettant une remise en service des zones traitees en quelques heures seulement.'
  ],
  'marquage-au-sol-industriel': [
    'Le secteur industriel du 91 fait appel a notre expertise pour des marquages resistants aux conditions d\'exploitation les plus severes. Des ateliers de production aux zones de stockage, nous realisons des tracages conformes aux normes de securite avec des peintures industrielles selectionnees pour leur durabilite exceptionnelle.',
    'Nous intervenons sur les sites industriels de l\'Essonne pour tous types de tracages : voies de circulation engins, zones de danger, emplacements machines, aires de stockage. Notre connaissance des exigences reglementaires et des contraintes operationnelles garantit des marquages fonctionnels et conformes aux audits de securite.',
    'Marquage haute resistance pour vos installations industrielles du departement, realise avec des produits adaptes aux agressions chimiques, aux passages intensifs et aux sollicitations mecaniques. Nous travaillons avec les industries du 91, de l\'agroalimentaire a la fabrication mecanique, en adaptant nos solutions a chaque environnement.',
    'Securisez vos zones de production dans l\'Essonne avec un marquage au sol professionnel qui materialise clairement les circulations, les zones de danger et les emplacements de travail. Notre equipe experimente realise des tracages durables qui contribuent a la prevention des accidents et a l\'efficacite operationnelle.',
    'Solutions de marquage adaptees au milieu industriel essonnien, des PME manufacturieres aux grandes unites de production. Nous proposons une gamme complete de peintures et resines industrielles, avec des formulations specifiques pour les environnements contraignants : zones humides, chambres froides, ateliers chimiques.'
  ],
  'marquage-au-sol-usine': [
    'Les usines de l\'Essonne beneficient de notre savoir-faire en marquage industriel pour organiser leurs espaces de production et securiser leurs personnels. Nous intervenons sur les sites manufacturiers du departement avec des techniques eprouvees et des materiaux haute performance adaptes aux environnements de fabrication.',
    'Nous amenageons vos zones de production essonniennes avec un marquage au sol precis et durable qui structure l\'espace de travail. Allees de circulation, postes de travail, zones de stockage intermediaire, emplacements machines : chaque element est materialise pour optimiser les flux et prevenir les accidents.',
    'Le marquage usine repond a des exigences specifiques que nous maitrisons parfaitement apres des annees d\'intervention sur les sites industriels du 91. Nous respectons les codes couleurs normalises, integrons les contraintes de vos process et garantissons des tracages resistants aux passages de chariots et aux projections.',
    'Optimisez les flux de votre usine essonnienne avec un tracage structure realise par des professionnels du marquage industriel. Notre bureau d\'etudes peut vous accompagner dans la conception d\'un plan de circulation efficace, materialise ensuite par des marquages durables et parfaitement lisibles.',
    'Intervention pendant vos periodes d\'arret de production pour minimiser l\'impact sur votre activite industrielle. Notre equipe mobilise les moyens necessaires pour realiser le marquage complet de votre usine du 91 dans les delais impartis, avec des peintures a sechage rapide permettant une reprise d\'activite acceleree.'
  ],
  'marquage-routier-au-sol': [
    'Nous realisons le marquage routier sur voiries privees dans tout le departement de l\'Essonne, des acces aux zones d\'activites de Courtaboeuf aux voies internes des campus de Paris-Saclay. Notre expertise couvre les lignes axiales, rives, passages pietons et toute la signalisation horizontale reglementaire.',
    'Tracage de lignes et signalisation horizontale sur vos voiries privees du 91 avec des produits homologues et des techniques conformes aux exigences routieres. Nous garantissons une retroreflexion optimale pour une visibilite nocturne parfaite et une resistance au trafic adaptee a l\'intensite de circulation.',
    'Nos travaux de marquage routier dans l\'Essonne respectent les normes en vigueur pour les voiries privees ouvertes a la circulation. Nous utilisons des peintures routieres certifiees NF, appliquees avec des equipements professionnels par des operateurs formes aux techniques de tracage lineaire.',
    'Marquage routier durable pour les voiries et acces de vos sites essonniens, realise avec des materiaux selectionnes pour leur tenue dans le temps. Nous proposons differentes gammes de produits, des peintures classiques aux enduits a froid, en fonction de l\'usage et de la duree de vie souhaitee.',
    'Equipements homologues et personnel qualifie pour un marquage routier professionnel dans le 91. Notre parc de traceuses autoportees permet d\'intervenir efficacement sur tous les lineaires, des petits parkings aux grandes voiries privees des zones industrielles et commerciales du departement.'
  ],
  'marquage-garage-automobile': [
    'Les garages et concessions automobiles de l\'Essonne font appel a notre expertise pour des marquages adaptes a leurs activites specifiques. Nous realisons le tracage des zones d\'exposition, ateliers mecaniques, aires de preparation et parkings clients avec des peintures resistantes aux produits automobiles.',
    'Nous traceons les zones de vos ateliers automobiles du 91 avec des marquages fonctionnels et esthetiques. Emplacements de travail, voies de circulation, zones de stockage pieces, aires de livraison : chaque espace est clairement delimite pour optimiser l\'organisation de votre garage ou concession.',
    'Marquage adapte aux concessions et garages automobiles de l\'Essonne, resistant aux huiles, solvants et passages frequents de vehicules. Nous proposons des solutions sur mesure integrant votre charte graphique, avec des finitions soignees qui refletent le professionnalisme de votre etablissement.',
    'Optimisez l\'espace de votre atelier automobile essonnien avec un marquage professionnel qui structure les zones de travail et securise les deplacements. Notre equipe intervient sur les concessions et garages du departement pour des tracages durables, realises en dehors des heures d\'ouverture.',
    'Solutions de marquage resistantes au trafic automobile intense et aux agressions chimiques pour les professionnels du secteur dans le 91. Nous utilisons des peintures epoxy et polyurethane haute performance, adaptees aux contraintes specifiques des ateliers mecaniques et carrosseries.'
  ],
  'marquage-zones-pietonnes': [
    'La securite des pietons dans le 91 est notre priorite lors de chaque intervention de marquage. Nous materialisons des cheminements securises dans les entreprises, entrepots et sites industriels de l\'Essonne, avec des tracages visibles et des revetements antiderapants protegeant vos collaborateurs et visiteurs.',
    'Nous delimitons clairement vos circulations pietonnes sur les sites professionnels du departement, separant efficacement les flux pietons des zones de circulation vehicules et engins. Ce marquage conforme aux recommandations de securite reduit les risques d\'accident et facilite les audits reglementaires.',
    'Marquage des passages et allees pietonnes securisees dans les entreprises et sites logistiques de l\'Essonne. Nous utilisons des bandes de couleur normalisees, des pictogrammes et des revetements specifiques pour creer des cheminements parfaitement identifies et proteges des autres flux de circulation.',
    'Protegez vos collaborateurs et visiteurs avec un marquage pieton professionnel sur vos sites essonniens. Notre expertise couvre les zones de production, les entrepots, les parkings et les acces batiments, avec des solutions adaptees a chaque configuration et niveau de risque identifie.',
    'Solutions antiderapantes et hautement visibles pour le marquage des zones pietonnes dans le 91. Nous proposons des bandes podotactiles pour les personnes malvoyantes, des passages pietons sureleves et des revetements colores qui securisent les deplacements dans tous les environnements professionnels.'
  ],
  'places-handicapees-pmr': [
    'Nous realisons des places PMR parfaitement conformes aux normes d\'accessibilite dans tout le 91, des parkings de commerces aux aires de stationnement d\'entreprises. Chaque place respecte les dimensions reglementaires de 3,30m x 5m minimum, avec un marquage complet incluant pictogramme, bandes et signalisation verticale.',
    'Mise en accessibilite de vos parkings essonniens avec des places handicapees conformes a la reglementation. Nous assurons le tracage des places aux dimensions requises, l\'application des pictogrammes normalises et l\'installation de la signalisation verticale obligatoire pour une conformite totale.',
    'Places PMR aux dimensions et marquages strictement reglementaires pour les etablissements recevant du public et les entreprises du 91. Notre expertise garantit des amenagements conformes aux controles des commissions d\'accessibilite, avec un dossier technique justifiant les caracteristiques de chaque place.',
    'Notre expertise en accessibilite garantit la conformite de vos places PMR dans l\'Essonne aux exigences legales les plus recentes. Nous realisons des diagnostics de vos parkings existants et proposons des solutions de mise en conformite adaptees a votre configuration et votre budget.',
    'Tracage des places handicapees avec pictogrammes normalises et signalisation complete dans tout le departement. Nous intervenons sur les parkings neufs comme sur les amenagements existants a mettre en conformite, avec un accompagnement technique pour repondre aux obligations d\'accessibilite des ERP et entreprises.'
  ],
  'signalisation-verticale': [
    'Nous installons la signalisation verticale complete de vos parkings en Essonne, des panneaux directionnels aux indications de places reservees. Notre offre couvre tous les besoins : panneaux de police, fleches, totems d\'entree, numerotation d\'allee et signalisation PMR reglementaire.',
    'Panneaux et equipements de signalisation pour les parkings du 91, fournis et poses par notre equipe specialisee. Nous selectionnons des supports de qualite, resistants aux intemperies et au vandalisme, avec des visuels conformes aux normes et adaptes a votre charte graphique si souhaite.',
    'Solutions completes de signaletique pour organiser la circulation dans vos parkings essonniens. Nous concevons des plans de signalisation coherents, integrant panneaux directionnels, indications de zones et informations reglementaires pour guider efficacement les usagers vers leur destination.',
    'Installation professionnelle de panneaux de signalisation dans les parkings du departement, avec ancrage adapte a chaque support : sol beton, enrobe, espace vert. Notre equipe assure une pose soignee garantissant la stabilite et la durabilite des equipements dans le temps.',
    'Signalisation verticale adaptee aux besoins specifiques de votre parking dans le 91. Nous proposons des solutions sur mesure, des simples panneaux de police aux systemes de guidage dynamique, en passant par la signaletique d\'orientation complete des grands parkings commerciaux.'
  ],
  'pose-ralentisseur': [
    'Nous installons des ralentisseurs homologues dans l\'Essonne pour securiser vos zones de passage a vitesse moderee. Coussins berlinois, dos d\'ane, plateaux traversants : nous proposons la solution adaptee a votre configuration, avec une pose conforme aux normes et une signalisation complete.',
    'Securisez vos zones de passage sur vos sites du 91 avec des dispositifs de reduction de vitesse adaptes aux flux et aux contraintes. Notre equipe analyse votre besoin pour preconiser le type de ralentisseur le plus pertinent, puis assure une installation soignee et durable.',
    'Coussins berlinois et dos d\'ane aux normes pour les voiries privees et parkings de l\'Essonne. Nous fournissons et posons des equipements homologues, accompagnes de la signalisation verticale et du marquage au sol obligatoires pour une mise en oeuvre reglementaire complete.',
    'Pose de ralentisseurs pour les parkings et voiries privees du departement, avec des equipements selectionnes pour leur qualite et leur resistance. Nous proposons differents modeles en caoutchouc, metal ou resine, adaptes a l\'usage et au trafic de chaque site.',
    'Dispositifs de reduction de vitesse pour securiser les circulations sur vos sites essonniens. Notre expertise couvre le conseil, la fourniture et la pose de ralentisseurs, avec un accompagnement technique pour choisir la solution la plus efficace en fonction de vos objectifs de securite.'
  ],
  'installation-panneaux-parking': [
    'Nous equipons vos parkings de signaletique directionnelle et informative dans tout le 91, pour guider efficacement les usagers et optimiser la circulation. Notre gamme comprend panneaux d\'entree, fleches directionnelles, indications de niveaux et toute la signalisation necessaire a un parking bien organise.',
    'Panneaux directionnels et informatifs pour les parkings de l\'Essonne, concus pour une lisibilite optimale et une integration harmonieuse a votre environnement. Nous proposons des solutions standard ou personnalisees, avec impression numerique haute definition pour les visuels sur mesure.',
    'Installation de signalisation de parking adaptee aux besoins specifiques de votre site essonnien. Notre bureau d\'etudes analyse les flux et concoit un plan de signaletique coherent, materialise ensuite par des panneaux de qualite installes par notre equipe de poseurs experimentes.',
    'Optimisez l\'orientation des usagers de votre parking avec une signaletique claire et professionnelle. Nous intervenons sur les parkings du 91 pour installer des panneaux directionnels, des indications de zones et toute la signalisation facilitant les deplacements et reduisant les manoeuvres inutiles.',
    'Signaletique de parking sur mesure pour les gestionnaires et proprietaires essonniens. Nous concevons et fabriquons des panneaux adaptes a vos besoins specifiques, integrant votre identite visuelle, et assurons leur installation dans les regles de l\'art pour une tenue durable.'
  ],
  'pose-miroir-circulation': [
    'Nous installons des miroirs de securite dans l\'Essonne pour eliminer les angles morts et securiser les zones de manoeuvre. Miroirs convexes interieurs et exterieurs, miroirs hemisphereiques : nous proposons le format adapte a chaque configuration, avec une pose garantissant une visibilite optimale.',
    'Miroirs convexes pour les angles morts de vos parkings et voiries privees du 91. Notre equipe evalue les zones a risque et preconise le type de miroir le plus adapte, puis assure une installation soignee a la hauteur et l\'angle optimaux pour une efficacite maximale.',
    'Ameliorez la visibilite et la securite de vos parkings essonniens avec des miroirs de circulation strategiquement positionnes. Nous traitons les intersections, sorties de parking, virages serres et toutes les zones ou la visibilite reduite genere des risques de collision.',
    'Pose de miroirs de securite adaptes aux contraintes de vos sites dans le 91 : miroirs de parking, miroirs de sortie vehicules, miroirs d\'angle pour entrepots. Nous selectionnons des equipements de qualite, resistants aux intemperies et au vandalisme pour une duree de vie optimale.',
    'Securisez les zones de manoeuvre et les croisements de votre parking avec des miroirs de circulation professionnels. Notre expertise couvre l\'analyse des risques, le choix du materiel adapte et l\'installation dans les regles de l\'art pour eliminer les angles morts dangereux.'
  ],
  'installation-bornes-parking': [
    'Nous installons des bornes de protection et de reservation dans les parkings de l\'Essonne pour securiser vos places strategiques. Bornes fixes, amovibles ou retractables : nous proposons la solution adaptee a votre usage, avec une pose soignee garantissant stabilite et durabilite.',
    'Bornes fixes et amovibles pour la protection des places de parking dans le 91. Nous equipons vos emplacements reserves, places direction, acces pompiers et zones sensibles avec des bornes robustes, facilement identifiables et adaptees a la frequence d\'utilisation prevue.',
    'Protection de vos places reservees et zones sensibles avec des bornes de parking professionnelles. Notre gamme couvre tous les besoins des sites essonniens, des bornes fixes economiques aux modeles retractables automatiques pour les parkings a gestion dynamique.',
    'Solutions de bornage adaptees aux parkings du departement, installees par notre equipe specialisee. Nous assurons le scellement ou la fixation mecanique selon le support, avec des finitions soignees et une signalisation complementaire si necessaire pour une identification claire des zones protegees.',
    'Installation professionnelle de bornes de parking dans le 91, avec un accompagnement technique pour choisir le systeme le plus adapte a vos besoins. Nous proposons des bornes manuelles, a cle, a telecommande ou connectees selon le niveau de securite et de confort souhaite.'
  ],
  'pose-butees-parking': [
    'Nous posons des butees de parking dans l\'Essonne pour faciliter le positionnement des vehicules et proteger vos equipements. Butees en caoutchouc, beton ou plastique recycle : nous proposons des modeles adaptes a chaque usage, avec une fixation solide garantissant leur tenue dans le temps.',
    'Butees de roues pour les parkings du 91, posees par notre equipe avec une fixation adaptee au support. Ces equipements simples mais efficaces facilitent le stationnement, protegent les murs et bordures, et evitent les depassements sur les zones pietonnes ou espaces verts.',
    'Facilitez le positionnement des vehicules sur votre parking essonnien avec des butees de qualite professionnelle. Nous posons des butees haute visibilite, avec bandes reflechissantes, qui guident les conducteurs et protegent les infrastructures des chocs et frottements repetes.',
    'Pose de butees professionnelles dans les parkings de l\'Essonne, avec chevillage mecanique sur beton ou fixation adaptee aux autres supports. Notre equipe assure une installation alignee et solide, pour des equipements qui resteront en place malgre les contacts vehicules.',
    'Protegez vos murs, poteaux et bordures avec des butees de parking robustes, posees dans les regles de l\'art. Nous intervenons sur les parkings du 91 pour installer ces equipements de protection essentiels, contribuant a maintenir vos infrastructures en bon etat durablement.'
  ]
};

const descriptions: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    'Peintures professionnelles pour marquage durable. Intervention nuit ou week-end. Devis gratuit sous 24h.',
    'Expertise tous types de parkings. Tracage complet avec signaletique.',
    'Equipements professionnels pour rendu optimal. Techniciens formes aux normes.'
  ],
  'marquage-au-sol-parking-prive': [
    'Marquage personnalise selon vos attentes. Intervention coproprietes et residences.',
    'Tracage des places, circulations et signalisation complete.',
    'Parking bien marque valorisant votre bien. Resultat professionnel.'
  ],
  'marquage-au-sol-stationnement': [
    'Optimisation des stationnements pour capacite accrue. Etude et tracage.',
    'Solutions adaptees a tous contextes. Peintures resistantes au trafic.',
    'Tracage dimensions reglementaires avec places PMR et zones livraison.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Parking strategique. Solutions places nominatives et visiteurs.',
    'Expertise zones d\'activites. Intervention de nuit.',
    'Marquage refletant votre image. Finitions soignees.'
  ],
  'marquage-au-sol-entrepot': [
    'Marquage conforme aux normes. Codes couleurs maitrisés.',
    'Emplacements, zones picking et voies circulation.',
    'Securite par marquage clair. Recommandations INRS.'
  ],
  'marquage-au-sol-industriel': [
    'Marquages resistants pour sites industriels.',
    'Zones danger, allees, emplacements machines.',
    'Expertise agroalimentaire, chimique, logistique.'
  ],
  'marquage-au-sol-usine': [
    'Marquage pour optimiser les flux.',
    'Intervention arrets de production.',
    'Peintures epoxy haute performance.'
  ],
  'marquage-routier-au-sol': [
    'Marquage routier aux exigences voie publique. Produits homologues.',
    'Lignes, passages pietons, fleches. Retroreflexion.',
    'Techniciens qualifies avec traceuses professionnelles.'
  ],
  'marquage-garage-automobile': [
    'Marquage adapte. Peintures resistantes produits auto.',
    'Concessions, ateliers, carrosseries.',
    'Peintures epoxy durables.'
  ],
  'marquage-zones-pietonnes': [
    'Separation des flux. Cheminements antiderapants.',
    'Zones delimitees. Codes couleurs conformes.',
    'Protection collaborateurs. Bandes podotactiles PMR.'
  ],
  'places-handicapees-pmr': [
    'Places PMR 3,30m x 5m. Tracage conforme.',
    'Pictogrammes et signalisation. Places completes.',
    'Creation ou mise en conformite. Devis gratuit.'
  ],
  'signalisation-verticale': [
    'Signalisation orientation. Tous panneaux.',
    'Installation qualifiee. Fixation adaptee.',
    'Parking signalise. Solutions sur mesure.'
  ],
  'pose-ralentisseur': [
    'Ralentisseurs zones limitees. Homologues.',
    'Coussins, dos d\'ane, plateaux. Conseil.',
    'Pose regles art avec signalisation.'
  ],
  'installation-panneaux-parking': [
    'Signaletique claire. Panneaux directionnels.',
    'Panneaux sur mesure. Conception installation.',
    'Supports adaptes. Experience usager.'
  ],
  'pose-miroir-circulation': [
    'Miroirs angles morts. Adaptes.',
    'Convexes et hemisphereiques.',
    'Emplacement optimal. Rapide.'
  ],
  'installation-bornes-parking': [
    'Bornes protection. Fixes, amovibles, retractables.',
    'Places direction, pompiers. Adaptees.',
    'Scellement ou mecanique. Soignees.'
  ],
  'pose-butees-parking': [
    'Butees positionnement protection.',
    'Caoutchouc, beton, plastique.',
    'Fixation mecanique. Rapide propre.'
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
    metaTitle: `${serviceName} a ${city.name} (91) | Devis Gratuit`,
    metaDescription: `${serviceName} a ${city.name} en Essonne. Entreprise specialisee, intervention rapide. Devis gratuit sous 24h.`,
    content: {
      introduction: intro,
      localContext: city.context,
      serviceDescription: desc
    },
    faqs: [
      {
        question: `Quel est le delai d'intervention a ${city.name} ?`,
        answer: `Nous intervenons sous 24 a 48h a ${city.name} (91). La visite technique et le devis sont gratuits.`
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

export const essonneVariations: ServiceLocationContent[] = [];

cities.forEach((city, cityIndex) => {
  services.forEach((serviceSlug, serviceIndex) => {
    essonneVariations.push(generateVariation(city, serviceSlug, cityIndex + serviceIndex));
  });
});
