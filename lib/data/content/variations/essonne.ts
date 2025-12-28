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
    slug: 'evry-courcouronnes',
    name: 'Évry-Courcouronnes',
    context: 'Préfecture de l\'Essonne, Évry-Courcouronnes accueille le centre commercial Évry 2, l\'université et de nombreuses entreprises. Les parkings du centre-ville, les zones d\'activités et les résidences représentent un marché important.',
    zones: ['Évry 2', 'Agora', 'Pyramides', 'Bois Sauvage', 'Champtier du Coq']
  },
  {
    slug: 'corbeil-essonnes',
    name: 'Corbeil-Essonnes',
    context: 'Corbeil-Essonnes est une ville industrielle historique en pleine mutation. Les zones logistiques, les nouvelles résidences et les équipements publics font appel a nos services de marquage au sol.',
    zones: ['Centre', 'Tarterets', 'Montconseil', 'Robinson', 'Papeteries']
  },
  {
    slug: 'massy',
    name: 'Massy',
    context: 'Massy est un hub de transport majeur avec sa gare TGV et RER. Les parkings relais, les zones tertiaires d\'Atlantis et les résidences nécessitent un marquage professionnel de qualité.',
    zones: ['Atlantis', 'Gare', 'Massy-Opera', 'Vilmorin', 'Villaine']
  },
  {
    slug: 'savigny-sur-orge',
    name: 'Savigny-sur-Orge',
    context: 'Savigny-sur-Orge combine zones pavillonnaires et centres commerciaux. Les parkings des commerces, les résidences et les équipements sportifs font appel a notre expertise en traçage.',
    zones: ['Centre', 'Grand Vaux', 'Champagne', 'Rossays', 'Gare']
  },
  {
    slug: 'sainte-genevieve-des-bois',
    name: 'Sainte-Geneviève-des-Bois',
    context: 'Sainte-Geneviève-des-Bois dispose de zones commerciales importantes et de nombreuses résidences. Les parkings des centres commerciaux et des copropriétés constituent notre marché principal.',
    zones: ['Centre Commercial', 'Croix Blanche', 'Perray', 'Donjon', 'Mairie']
  },
  {
    slug: 'viry-chatillon',
    name: 'Viry-Chatillon',
    context: 'Viry-Chatillon bénéficie de la proximité de l\'aéroport d\'Orly pour son développement économique. Les zones d\'activités, les résidences et les équipements publics nécessitent un marquage conforme.',
    zones: ['Port Aviation', 'Plateau', 'Coteaux de l\'Orge', 'Centre', 'Cilof']
  },
  {
    slug: 'athis-mons',
    name: 'Athis-Mons',
    context: 'Athis-Mons est située près de l\'aéroport d\'Orly avec des zones logistiques importantes. Les parkings d\'entreprises, les résidences et les commerces font appel a nos services de marquage.',
    zones: ['Centre', 'Noyer Renard', 'Coteaux', 'Gare', 'Porte de l\'Essonne']
  },
  {
    slug: 'palaiseau',
    name: 'Palaiseau',
    context: 'Palaiseau accueille l\'École Polytechnique et le plateau de Saclay. Les parkings des établissements de recherche, les résidences et les zones d\'innovation requièrent un marquage de qualité.',
    zones: ['Polytechnique', 'Centre', 'Lozere', 'Pileu', 'Camille Claudel']
  },
  {
    slug: 'yerres',
    name: 'Yerres',
    context: 'Yerres est une ville résidentielle avec un riche patrimoine. Les parkings des résidences, du centre commercial et des équipements culturels font appel a notre expertise.',
    zones: ['Centre', 'Caillebotte', 'Tournelles', 'Brossolette', 'Gare']
  },
  {
    slug: 'draveil',
    name: 'Draveil',
    context: 'Draveil bénéficie d\'un cadre de vie agréable le long de la Seine. Les parkings des résidences, des centres de loisirs et des commerces nécessitent un marquage professionnel.',
    zones: ['Centre', 'Villiers', 'Bergeries', 'Bords de Seine', 'Pyramides']
  },
  {
    slug: 'brunoy',
    name: 'Brunoy',
    context: 'Brunoy combine quartiers pavillonnaires et centres commerciaux. Les parkings des commerces, des résidences et des équipements sportifs constituent notre clientèle locale.',
    zones: ['Centre', 'Gare', 'Talma', 'Pyramides', 'Mandres']
  },
  {
    slug: 'les-ulis',
    name: 'Les Ulis',
    context: 'Les Ulis disposent d\'un important parc d\'activités et du centre commercial Ulis 2. Les parkings d\'entreprises, les zones commerciales et les résidences génèrent une demande régulière.',
    zones: ['Ulis 2', 'Bois des Vignes', 'Coteaux', 'Froux', 'Dauniere']
  }
];

const intros: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    'Specialistes du marquage au sol parking en Essonne (91), notre entreprise intervient sur l\'ensemble du département, de la zone d\'activités de Courtaboeuf aux parkings du pole scientifique Paris-Saclay. Nous accompagnons les gestionnaires de parkings publics et prives avec des solutions durables adaptées aux flux importants caracteristiques de ce territoire dynamique aux portes de Paris.',
    'Notre societe de marquage parking dans le 91 répond aux besoins spécifiques des entreprises technologiques de Paris-Saclay, des centres commerciaux d\'Évry-Courcouronnes et des zones logistiques proches d\'Orly. Chaque intervention est planifiee pour minimiser l\'impact sur votre activité, avec des travaux réalises en horaires decales et des peintures a sechage rapide.',
    'Experts en aménagement de parking implantes dans l\'Essonne, nous maitrisons les contraintes spécifiques de ce département a forte densite économique. Des parkings-relais des gares RER aux aires de stationnement des centres de recherche du plateau de Saclay, nous garantissons un traçage conforme aux normes et resistant au trafic intense.',
    'Faites appel a notre experience reconnue pour le marquage de votre parking dans le 91, territoire ou se cotoient zones d\'innovation technologique, poles commerciaux majeurs et quartiers residentiels. Nous adaptons nos prestations à chaque contexte, qu\'il s\'agisse d\'un parking de copropriété a Massy ou d\'une aire de stationnement d\'entreprise a Courtaboeuf.',
    'Nous maitrisons toutes les configurations de parking rencontrees en Essonne, des grandes surfaces de stationnement des zones d\'activités aux parkings souterrains des résidences. Notre connaissance du terrain, de Corbeil-Essonnes a Palaiseau, nous permet d\'intervenir rapidement avec des solutions techniques eprouvees et des materiaux haute performance.'
  ],
  'marquage-au-sol-parking-prive': [
    'Les parkings prives de l\'Essonne bénéficient de notre expertise en traçage sur mesure, que ce soit pour les copropriétés de Savigny-sur-Orge, les résidences de Sainte-Geneviève-des-Bois où les ensembles immobiliers neufs du plateau de Saclay. Nous realisons des marquages personnalisés integrant places numerotees, zones visiteurs et signalisation adaptée à votre règlement intérieur.',
    'Nous aménageons les parkings de copropriétés du 91 avec un marquage professionnel qui optimise chaque metre carre disponible. Notre bureau d\'études analyse la configuration de votre parking pour proposer un plan de traçage maximisant le nombre de places tout en garantissant des circulations fluides et sécurisées pour tous les résidents.',
    'Votre parking prive merite un traçage professionnel et durable réalise par des specialistes du département. De Viry-Chatillon a Yerres, nous intervenons dans toutes les communes de l\'Essonne pour transformer vos aires de stationnement en espaces organises, esthetiques et fonctionnels, refletant la qualité de votre copropriété ou résidence.',
    'Optimisez l\'espace de votre parking prive avec nos solutions de marquage adaptées aux spécificités de l\'Essonne. Nous prenons en compte les contraintes locales, comme les hivers rigoureux du plateau de Saclay où le trafic intense des zones proches d\'Orly, pour selectionner les peintures et techniques les plus appropriees.',
    'Le marquage de votre parking prive est réalise selon vos besoins spécifiques par notre équipe presente dans tout le 91. Nous proposons des plans de traçage personnalisés avec numérotation, flèches directionnelles, zones de livraison et places réservées, le tout dans le respect des normes d\'accessibilite PMR en vigueur.'
  ],
  'marquage-au-sol-stationnement': [
    'Nous optimisons vos zones de stationnement dans l\'Essonne grâce à une expertise développée aupres des collectivités et entreprises du département. Du centre-ville d\'Évry-Courcouronnes aux zones d\'activités de Massy-Palaiseau, nous concevons des plans de stationnement intelligents qui maximisent la capacité tout en facilitant les manoeuvres des usagers.',
    'Le traçage de vos places de stationnement respecte scrupuleusement les normes en vigueur et s\'adapté aux realites du terrain essonnien. Nous intervenons aussi bien sur les parkings des centres commerciaux que sur les aires de stationnement des entreprises du pole Paris-Saclay, avec des techniques adaptées à chaque support et usage.',
    'Maximisez la capacité de vos stationnements avec notre expertise reconnue dans le 91. Notre bureau d\'études réalise des audits complets pour optimiser l\'implantation des places, integrer les normes PMR et creer des circulations logiques qui reduisent les conflits d\'usage et ameliorent l\'experience des utilisateurs.',
    'Nos solutions de marquage stationnement s\'adaptent a tous les contextes du département de l\'Essonne, des parkings-relais des gares RER aux aires de covoiturage en plein développement. Nous utilisons des peintures routieres homologuees, resistantes aux conditions climatiques et au trafic intense caracteristique des zones periurbaines.',
    'Un stationnement bien marque facilite la gestion quotidienne de vos espaces dans le 91. Que vous geriez un parking de supermarche a Corbeil-Essonnes ou une aire de stationnement d\'entreprise aux Ulis, notre marquage clair et durable reduit les litiges, optimise le taux d\'occupation et securise les deplacements.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Les entreprises du 91 nous confient le marquage de leurs parkings car nous comprenons les enjeux d\'image et de fonctionnalite propres au monde professionnel. De la zone de Courtaboeuf au Genopole d\'Évry, nous realisons des tracages soignes avec places nominatives, zones visiteurs identifiées et signalisation directionnelle adaptée à vos flux.',
    'Nous accompagnons les professionnels de l\'Essonne dans leurs aménagements de parking avec une approche sur mesure. Notre équipe analyse vos besoins spécifiques : rotations du personnel, visites clients, livraisons, pour concevoir un marquage qui optimise chaque deplacement et renforce votre image de marque aupres de vos interlocuteurs.',
    'Votre parking d\'entreprise merite un marquage professionnel à la hauteur de vos locaux et de votre activité. Implantes dans le 91, nous intervenons rapidement sur les zones d\'activités du département pour réaliser des travaux soignes, généralement en horaires decales pour ne pas perturber votre activité quotidienne.',
    'Solutions complètes de marquage pour les zones d\'activités de l\'Essonne, de Courtaboeuf a Orly-Rungis. Nous proposons une offre globale incluant traçage des places, flèches de circulation, places PMR conformes, zones de livraison et signalisation verticale pour des parkings d\'entreprise parfaitement organises et securises.',
    'Le marquage professionnel de parking est notre specialite depuis des annees sur le territoire essonnien. Nous travaillons avec des entreprises de toutes tailles, des PME du tissu local aux multinationales du plateau de Saclay, en adaptant nos prestations aux contraintes techniques et budgetaires de chaque projet.'
  ],
  'marquage-au-sol-entrepôt': [
    'Les entrepôts du 91 nécessitent un marquage au sol conforme aux normes de sécurité et d\'organisation logistique. Notre expertise couvre les grandes plateformes de la zone d\'Orly aux entrepôts de Corbeil-Essonnes, avec des tracages resistants au passage des chariots elevateurs et conformes aux exigences des certifications qualité.',
    'Nous realisons le traçage complet de vos zones logistiques dans l\'Essonne selon les recommandations INRS et les standards de votre secteur d\'activité. Allees de circulation, emplacements de stockage, zones de picking, aires de chargement : chaque element est materialise avec des peintures industrielles haute résistance.',
    'Optimisez les flux de votre entrepôt essonnien avec un marquage professionnel structure et lisible. Notre équipe intervient sur les plateformes logistiques du département pour creer des tracages durables qui ameliorent la productivite, reduisent les risques d\'accident et facilitent la formation des nouveaux operateurs.',
    'Notre expertise en marquage entrepôt couvre tous les besoins des sites logistiques du 91, des petits dépôts aux grandes plateformes e-commerce. Nous maitrisons les codes couleurs normalises, les pictogrammes de sécurité et les techniques de traçage adaptées aux sols industriels beton, resine ou enrobes.',
    'Marquage adapté aux contraintes d\'activité de vos entrepôts en Essonne, avec possibilite d\'intervention nocturne où le week-end pour ne pas interrompre vos opérations. Nous utilisons des peintures a sechage rapide permettant une remise en service des zones traitees en quelques heures seulement.'
  ],
  'marquage-au-sol-industriel': [
    'Le secteur industriel du 91 fait appel a notre expertise pour des marquages resistants aux conditions d\'exploitation les plus severes. Des ateliers de production aux zones de stockage, nous realisons des tracages conformes aux normes de sécurité avec des peintures industrielles selectionnees pour leur durabilité exceptionnelle.',
    'Nous intervenons sur les sites industriels de l\'Essonne pour tous types de tracages : voies de circulation engins, zones de danger, emplacements machines, aires de stockage. Notre connaissance des exigences réglementaires et des contraintes operationnelles garantit des marquages fonctionnels et conformes aux audits de sécurité.',
    'Marquage haute résistance pour vos installations industrielles du département, réalise avec des produits adaptés aux agressions chimiques, aux passages intensifs et aux sollicitations mecaniques. Nous travaillons avec les industries du 91, de l\'agroalimentaire à la fabrication mecanique, en adaptant nos solutions à chaque environnement.',
    'Securisez vos zones de production dans l\'Essonne avec un marquage au sol professionnel qui materialise clairement les circulations, les zones de danger et les emplacements de travail. Notre équipe experimente réalise des tracages durables qui contribuent à la prévention des accidents et a l\'efficacite operationnelle.',
    'Solutions de marquage adaptées au milieu industriel essonnien, des PME manufacturieres aux grandes unites de production. Nous proposons une gamme complète de peintures et resines industrielles, avec des formulations spécifiques pour les environnements contraignants : zones humides, chambres froides, ateliers chimiques.'
  ],
  'marquage-au-sol-usine': [
    'Les usines de l\'Essonne bénéficient de notre savoir-faire en marquage industriel pour organiser leurs espaces de production et sécuriser leurs personnels. Nous intervenons sur les sites manufacturiers du département avec des techniques eprouvees et des materiaux haute performance adaptés aux environnements de fabrication.',
    'Nous aménageons vos zones de production essonniennes avec un marquage au sol précis et durable qui structure l\'espace de travail. Allees de circulation, postes de travail, zones de stockage intermediaire, emplacements machines : chaque element est materialise pour optimiser les flux et prevenir les accidents.',
    'Le marquage usine répond à des exigences spécifiques que nous maitrisons parfaitement après des annees d\'intervention sur les sites industriels du 91. Nous respectons les codes couleurs normalises, integrons les contraintes de vos process et garantissons des tracages resistants aux passages de chariots et aux projections.',
    'Optimisez les flux de votre usine essonnienne avec un traçage structure réalise par des professionnels du marquage industriel. Notre bureau d\'études peut vous accompagner dans la conception d\'un plan de circulation efficace, materialise ensuite par des marquages durables et parfaitement lisibles.',
    'Intervention pendant vos periodes d\'arrêt de production pour minimiser l\'impact sur votre activité industrielle. Notre équipe mobilise les moyens nécessaires pour réaliser le marquage complet de votre usine du 91 dans les délais impartis, avec des peintures a sechage rapide permettant une reprise d\'activité acceleree.'
  ],
  'marquage-routier-au-sol': [
    'Nous realisons le marquage routier sur voiries privées dans tout le département de l\'Essonne, des accès aux zones d\'activités de Courtaboeuf aux voies internes des campus de Paris-Saclay. Notre expertise couvre les lignes axiales, rives, passages piétons et toute la signalisation horizontale réglementaire.',
    'Tracage de lignes et signalisation horizontale sur vos voiries privées du 91 avec des produits homologues et des techniques conformes aux exigences routieres. Nous garantissons une retroreflexion optimale pour une visibilité nocturne parfaite et une résistance au trafic adaptée a l\'intensite de circulation.',
    'Nos travaux de marquage routier dans l\'Essonne respectent les normes en vigueur pour les voiries privées ouvertes à la circulation. Nous utilisons des peintures routieres certifiees NF, appliquees avec des équipements professionnels par des operateurs formes aux techniques de traçage lineaire.',
    'Marquage routier durable pour les voiries et accès de vos sites essonniens, réalise avec des materiaux selectionnes pour leur tenue dans le temps. Nous proposons différentes gammes de produits, des peintures classiques aux enduits a froid, en fonction de l\'usage et de la durée de vie souhaitee.',
    'Equipements homologues et personnel qualifie pour un marquage routier professionnel dans le 91. Notre parc de traceuses autoportees permet d\'intervenir efficacement sur tous les lineaires, des petits parkings aux grandes voiries privées des zones industrielles et commerciales du département.'
  ],
  'marquage-garage-automobile': [
    'Les garages et concessions automobiles de l\'Essonne font appel a notre expertise pour des marquages adaptés a leurs activités spécifiques. Nous realisons le traçage des zones d\'exposition, ateliers mecaniques, aires de préparation et parkings clients avec des peintures resistantes aux produits automobiles.',
    'Nous traceons les zones de vos ateliers automobiles du 91 avec des marquages fonctionnels et esthetiques. Emplacements de travail, voies de circulation, zones de stockage pieces, aires de livraison : chaque espace est clairement delimite pour optimiser l\'organisation de votre garage ou concession.',
    'Marquage adapté aux concessions et garages automobiles de l\'Essonne, resistant aux huiles, solvants et passages frequents de véhicules. Nous proposons des solutions sur mesure integrant votre charte graphique, avec des finitions soignees qui refletent le professionnalisme de votre établissement.',
    'Optimisez l\'espace de votre atelier automobile essonnien avec un marquage professionnel qui structure les zones de travail et securise les deplacements. Notre équipe intervient sur les concessions et garages du département pour des tracages durables, réalises en dehors des heures d\'ouverture.',
    'Solutions de marquage resistantes au trafic automobile intense et aux agressions chimiques pour les professionnels du secteur dans le 91. Nous utilisons des peintures epoxy et polyurethane haute performance, adaptées aux contraintes spécifiques des ateliers mecaniques et carrosseries.'
  ],
  'marquage-zones-piétonnes': [
    'La sécurité des piétons dans le 91 est notre priorite lors de chaque intervention de marquage. Nous materialisons des cheminements securises dans les entreprises, entrepôts et sites industriels de l\'Essonne, avec des tracages visibles et des revetements antiderapants protegeant vos collaborateurs et visiteurs.',
    'Nous delimitons clairement vos circulations piétonnes sur les sites professionnels du département, separant efficacement les flux piétons des zones de circulation véhicules et engins. Ce marquage conforme aux recommandations de sécurité reduit les risques d\'accident et facilite les audits réglementaires.',
    'Marquage des passages et allees piétonnes sécurisées dans les entreprises et sites logistiques de l\'Essonne. Nous utilisons des bandes de couleur normalisees, des pictogrammes et des revetements spécifiques pour creer des cheminements parfaitement identifiés et protégés des autres flux de circulation.',
    'Protegez vos collaborateurs et visiteurs avec un marquage piéton professionnel sur vos sites essonniens. Notre expertise couvre les zones de production, les entrepôts, les parkings et les accès batiments, avec des solutions adaptées à chaque configuration et niveau de risque identifie.',
    'Solutions antiderapantes et hautement visibles pour le marquage des zones piétonnes dans le 91. Nous proposons des bandes podotactiles pour les personnes malvoyantes, des passages piétons sureleves et des revetements colores qui securisent les deplacements dans tous les environnements professionnels.'
  ],
  'places-handicapees-pmr': [
    'Nous realisons des places PMR parfaitement conformes aux normes d\'accessibilite dans tout le 91, des parkings de commerces aux aires de stationnement d\'entreprises. Chaque place respecte les dimensions réglementaires de 3,30m x 5m minimum, avec un marquage complet incluant pictogramme, bandes et signalisation verticale.',
    'Mise en accessibilite de vos parkings essonniens avec des places handicapees conformes à la réglementation. Nous assurons le traçage des places aux dimensions requises, l\'application des pictogrammes normalises et l\'installation de la signalisation verticale obligatoire pour une conformité totale.',
    'Places PMR aux dimensions et marquages strictement réglementaires pour les établissements recevant du public et les entreprises du 91. Notre expertise garantit des aménagements conformes aux contrôles des commissions d\'accessibilite, avec un dossier technique justifiant les caracteristiques de chaque place.',
    'Notre expertise en accessibilite garantit la conformité de vos places PMR dans l\'Essonne aux exigences légales les plus récentes. Nous realisons des diagnostics de vos parkings existants et proposons des solutions de mise en conformité adaptées à votre configuration et votre budget.',
    'Tracage des places handicapees avec pictogrammes normalises et signalisation complète dans tout le département. Nous intervenons sur les parkings neufs comme sur les aménagements existants a mettre en conformité, avec un accompagnement technique pour répondre aux obligations d\'accessibilite des ERP et entreprises.'
  ],
  'signalisation-verticale': [
    'Nous installons la signalisation verticale complète de vos parkings en Essonne, des panneaux directionnels aux indications de places réservées. Notre offre couvre tous les besoins : panneaux de police, flèches, totems d\'entrée, numérotation d\'allee et signalisation PMR réglementaire.',
    'Panneaux et équipements de signalisation pour les parkings du 91, fournis et poses par notre équipe spécialisée. Nous selectionnons des supports de qualité, resistants aux intemperies et au vandalisme, avec des visuels conformes aux normes et adaptés à votre charte graphique si souhaite.',
    'Solutions complètes de signaletique pour organiser la circulation dans vos parkings essonniens. Nous concevons des plans de signalisation coherents, integrant panneaux directionnels, indications de zones et informations réglementaires pour guider efficacement les usagers vers leur destination.',
    'Installation professionnelle de panneaux de signalisation dans les parkings du département, avec ancrage adapté à chaque support : sol beton, enrobe, espace vert. Notre équipe assure une pose soignée garantissant la stabilite et la durabilité des équipements dans le temps.',
    'Signalisation verticale adaptée aux besoins spécifiques de votre parking dans le 91. Nous proposons des solutions sur mesure, des simples panneaux de police aux systèmes de guidage dynamique, en passant par la signaletique d\'orientation complète des grands parkings commerciaux.'
  ],
  'pose-ralentisseur': [
    'Nous installons des ralentisseurs homologues dans l\'Essonne pour sécuriser vos zones de passage a vitesse moderee. Coussins berlinois, dos d\'ane, plateaux traversants : nous proposons la solution adaptée à votre configuration, avec une pose conforme aux normes et une signalisation complète.',
    'Securisez vos zones de passage sur vos sites du 91 avec des dispositifs de reduction de vitesse adaptés aux flux et aux contraintes. Notre équipe analyse votre besoin pour preconiser le type de ralentisseur le plus pertinent, puis assure une installation soignée et durable.',
    'Coussins berlinois et dos d\'ane aux normes pour les voiries privées et parkings de l\'Essonne. Nous fournissons et posons des équipements homologues, accompagnes de la signalisation verticale et du marquage au sol obligatoires pour une mise en oeuvre réglementaire complète.',
    'Pose de ralentisseurs pour les parkings et voiries privées du département, avec des équipements selectionnes pour leur qualité et leur résistance. Nous proposons différents modeles en caoutchouc, metal ou resine, adaptés a l\'usage et au trafic de chaque site.',
    'Dispositifs de reduction de vitesse pour sécuriser les circulations sur vos sites essonniens. Notre expertise couvre le conseil, la fourniture et la pose de ralentisseurs, avec un accompagnement technique pour choisir la solution la plus efficace en fonction de vos objectifs de sécurité.'
  ],
  'installation-panneaux-parking': [
    'Nous equipons vos parkings de signaletique directionnelle et informative dans tout le 91, pour guider efficacement les usagers et optimiser la circulation. Notre gamme comprend panneaux d\'entrée, flèches directionnelles, indications de niveaux et toute la signalisation nécessaire à un parking bien organise.',
    'Panneaux directionnels et informatifs pour les parkings de l\'Essonne, concus pour une lisibilite optimale et une integration harmonieuse à votre environnement. Nous proposons des solutions standard ou personnalisées, avec impression numerique haute définition pour les visuels sur mesure.',
    'Installation de signalisation de parking adaptée aux besoins spécifiques de votre site essonnien. Notre bureau d\'études analyse les flux et concoit un plan de signaletique coherent, materialise ensuite par des panneaux de qualité installes par notre équipe de poseurs experimentes.',
    'Optimisez l\'orientation des usagers de votre parking avec une signaletique claire et professionnelle. Nous intervenons sur les parkings du 91 pour installer des panneaux directionnels, des indications de zones et toute la signalisation facilitant les deplacements et reduisant les manoeuvres inutiles.',
    'Signaletique de parking sur mesure pour les gestionnaires et proprietaires essonniens. Nous concevons et fabriquons des panneaux adaptés à vos besoins spécifiques, integrant votre identite visuelle, et assurons leur installation dans les regles de l\'art pour une tenue durable.'
  ],
  'pose-miroir-circulation': [
    'Nous installons des miroirs de sécurité dans l\'Essonne pour eliminer les angles morts et sécuriser les zones de manoeuvre. Miroirs convexes intérieurs et extérieurs, miroirs hemisphereiques : nous proposons le format adapté à chaque configuration, avec une pose garantissant une visibilité optimale.',
    'Miroirs convexes pour les angles morts de vos parkings et voiries privées du 91. Notre équipe evalue les zones a risque et préconisé le type de miroir le plus adapté, puis assure une installation soignée à la hauteur et l\'angle optimaux pour une efficacite maximale.',
    'Ameliorez la visibilité et la sécurité de vos parkings essonniens avec des miroirs de circulation strategiquement positionnes. Nous traitons les intersections, sorties de parking, virages serres et toutes les zones où la visibilité reduite génère des risques de collision.',
    'Pose de miroirs de sécurité adaptés aux contraintes de vos sites dans le 91 : miroirs de parking, miroirs de sortie véhicules, miroirs d\'angle pour entrepôts. Nous selectionnons des équipements de qualité, resistants aux intemperies et au vandalisme pour une durée de vie optimale.',
    'Securisez les zones de manoeuvre et les croisements de votre parking avec des miroirs de circulation professionnels. Notre expertise couvre l\'analyse des risques, le choix du materiel adapté et l\'installation dans les regles de l\'art pour eliminer les angles morts dangereux.'
  ],
  'installation-bornes-parking': [
    'Nous installons des bornes de protection et de reservation dans les parkings de l\'Essonne pour sécuriser vos places strategiques. Bornes fixes, amovibles ou retractables : nous proposons la solution adaptée à votre usage, avec une pose soignée garantissant stabilite et durabilité.',
    'Bornes fixes et amovibles pour la protection des places de parking dans le 91. Nous equipons vos emplacements réservés, places direction, accès pompiers et zones sensibles avec des bornes robustes, facilement identifiables et adaptées à la frequence d\'utilisation prévue.',
    'Protection de vos places réservées et zones sensibles avec des bornes de parking professionnelles. Notre gamme couvre tous les besoins des sites essonniens, des bornes fixes économiques aux modeles retractables automatiques pour les parkings a gestion dynamique.',
    'Solutions de bornage adaptées aux parkings du département, installees par notre équipe spécialisée. Nous assurons le scellement où la fixation mecanique selon le support, avec des finitions soignees et une signalisation complementaire si nécessaire pour une identification claire des zones protégées.',
    'Installation professionnelle de bornes de parking dans le 91, avec un accompagnement technique pour choisir le système le plus adapté à vos besoins. Nous proposons des bornes manuelles, a clé, a telecommande ou connectees selon le niveau de sécurité et de confort souhaite.'
  ],
  'pose-butees-parking': [
    'Nous posons des butees de parking dans l\'Essonne pour faciliter le positionnement des véhicules et proteger vos équipements. Butees en caoutchouc, beton ou plastique recycle : nous proposons des modeles adaptés à chaque usage, avec une fixation solide garantissant leur tenue dans le temps.',
    'Butees de roues pour les parkings du 91, posees par notre équipe avec une fixation adaptée au support. Ces équipements simples mais efficaces facilitent le stationnement, protegent les murs et bordures, et evitent les depassements sur les zones piétonnes ou espaces verts.',
    'Facilitez le positionnement des véhicules sur votre parking essonnien avec des butees de qualité professionnelle. Nous posons des butees haute visibilité, avec bandes reflechissantes, qui guident les conducteurs et protegent les infrastructures des chocs et frottements repetes.',
    'Pose de butees professionnelles dans les parkings de l\'Essonne, avec chevillage mecanique sur beton ou fixation adaptée aux autres supports. Notre équipe assure une installation alignee et solide, pour des équipements qui resteront en place malgre les contacts véhicules.',
    'Protegez vos murs, poteaux et bordures avec des butees de parking robustes, posees dans les regles de l\'art. Nous intervenons sur les parkings du 91 pour installer ces équipements de protection essentiels, contribuant a maintenir vos infrastructures en bon etat durablement.'
  ]
};

const descriptions: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    'Peintures professionnelles pour marquage durable. Intervention nuit ou week-end. Devis gratuit sous 24h.',
    'Expertise tous types de parkings. Tracage complet avec signaletique.',
    'Equipements professionnels pour rendu optimal. Techniciens formes aux normes.'
  ],
  'marquage-au-sol-parking-prive': [
    'Marquage personnalisé selon vos attentes. Intervention copropriétés et résidences.',
    'Tracage des places, circulations et signalisation complète.',
    'Parking bien marque valorisant votre bien. Resultat professionnel.'
  ],
  'marquage-au-sol-stationnement': [
    'Optimisation des stationnements pour capacité accrue. étude et traçage.',
    'Solutions adaptées a tous contextes. Peintures resistantes au trafic.',
    'Tracage dimensions réglementaires avec places PMR et zones livraison.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Parking strategique. Solutions places nominatives et visiteurs.',
    'Expertise zones d\'activités. Intervention de nuit.',
    'Marquage refletant votre image. Finitions soignees.'
  ],
  'marquage-au-sol-entrepôt': [
    'Marquage conforme aux normes. Codes couleurs maitrisés.',
    'Emplacements, zones picking et voies circulation.',
    'sécurité par marquage clair. Recommandations INRS.'
  ],
  'marquage-au-sol-industriel': [
    'Marquages resistants pour sites industriels.',
    'Zones danger, allees, emplacements machines.',
    'Expertise agroalimentaire, chimique, logistique.'
  ],
  'marquage-au-sol-usine': [
    'Marquage pour optimiser les flux.',
    'Intervention arrêts de production.',
    'Peintures epoxy haute performance.'
  ],
  'marquage-routier-au-sol': [
    'Marquage routier aux exigences voie publique. Produits homologues.',
    'Lignes, passages piétons, flèches. Retroreflexion.',
    'Techniciens qualifies avec traceuses professionnelles.'
  ],
  'marquage-garage-automobile': [
    'Marquage adapté. Peintures resistantes produits auto.',
    'Concessions, ateliers, carrosseries.',
    'Peintures epoxy durables.'
  ],
  'marquage-zones-piétonnes': [
    'Separation des flux. Cheminements antiderapants.',
    'Zones delimitees. Codes couleurs conformes.',
    'Protection collaborateurs. Bandes podotactiles PMR.'
  ],
  'places-handicapees-pmr': [
    'Places PMR 3,30m x 5m. Tracage conforme.',
    'Pictogrammes et signalisation. Places complètes.',
    'création ou mise en conformité. Devis gratuit.'
  ],
  'signalisation-verticale': [
    'Signalisation orientation. Tous panneaux.',
    'Installation qualifiee. Fixation adaptée.',
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
    'Supports adaptés. Experience usager.'
  ],
  'pose-miroir-circulation': [
    'Miroirs angles morts. adaptés.',
    'Convexes et hemisphereiques.',
    'Emplacement optimal. Rapide.'
  ],
  'installation-bornes-parking': [
    'Bornes protection. Fixes, amovibles, retractables.',
    'Places direction, pompiers. adaptées.',
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
    metaDescription: `${serviceName} a ${city.name} en Essonne. Entreprise spécialisée, intervention rapide. Devis gratuit sous 24h.`,
    content: {
      introduction: intro,
      localContext: city.context,
      serviceDescription: desc
    },
    faqs: [
      {
        question: `Quel est le délai d'intervention a ${city.name} ?`,
        answer: `Nous intervenons sous 24 a 48h a ${city.name} (91). La visite technique et le devis sont gratuits.`
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

export const essonneVariations: ServiceLocationContent[] = [];

cities.forEach((city, cityIndex) => {
  services.forEach((serviceSlug, serviceIndex) => {
    essonneVariations.push(generateVariation(city, serviceSlug, cityIndex + serviceIndex));
  });
});
