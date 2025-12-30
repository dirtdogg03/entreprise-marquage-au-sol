import { ServiceLocationContent } from '../index';

const services = [
  'marquage-au-sol-parking', 'marquage-au-sol-parking-prive', 'marquage-au-sol-stationnement',
  'marquage-au-sol-parking-entreprise', 'marquage-au-sol-entrepôt', 'marquage-au-sol-industriel',
  'marquage-au-sol-usine', 'marquage-routier-au-sol', 'marquage-garage-automobile',
  'marquage-zones-piétonnes', 'places-handicapees-pmr', 'signalisation-verticale',
  'pose-ralentisseur', 'installation-panneaux-parking', 'pose-miroir-circulation',
  'installation-bornes-parking', 'pose-butees-parking',
  'marquage-au-sol-porte-de-garage', 'marquage-au-sol-portail-coulissant',
  'marquage-au-sol-portail-battant', 'marquage-au-sol-barriere-levante'
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
  'pose-butees-parking': 'Pose butées parking',
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
    slug: 'evry-courcouronnes',
    name: 'Évry-Courcouronnes',
    context: 'Préfecture de l\'Essonne, Évry-Courcouronnes accueille le centre commercial Évry 2, l\'université et de nombreuses entreprises. Les parkings du centre-ville, les zones d\'activités et les résidences représentent un marché important.',
    zones: ['Évry 2', 'Agora', 'Pyramides', 'Bois Sauvage', 'Champtier du Coq']
  },
  {
    slug: 'corbeil-essonnes',
    name: 'Corbeil-Essonnes',
    context: 'Corbeil-Essonnes est une ville industrielle historique en pleine mutation. Les zones logistiques, les nouvelles résidences et les équipements publics font appel à nos services de marquage au sol.',
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
    context: 'Savigny-sur-Orge combine zones pavillonnaires et centres commerciaux. Les parkings des commerces, les résidences et les équipements sportifs font appel à notre expertise en traçage.',
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
    context: 'Athis-Mons est située près de l\'aéroport d\'Orly avec des zones logistiques importantes. Les parkings d\'entreprises, les résidences et les commerces font appel à nos services de marquage.',
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
    context: 'Yerres est une ville résidentielle avec un riche patrimoine. Les parkings des résidences, du centre commercial et des équipements culturels font appel à notre expertise.',
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
    'Spécialistes du marquage au sol parking en Essonne (91), notre entreprise intervient sur l\'ensemble du département, de la zone d\'activités de Courtaboeuf aux parkings du pôle scientifique Paris-Saclay. Nous accompagnons les gestionnaires de parkings publics et privés avec des solutions durables adaptées aux flux importants caractéristiques de ce territoire dynamique aux portes de Paris.',
    'Notre société de marquage parking dans le 91 répond aux besoins spécifiques des entreprises technologiques de Paris-Saclay, des centres commerciaux d\'Évry-Courcouronnes et des zones logistiques proches d\'Orly. Chaque intervention est planifiée pour minimiser l\'impact sur votre activité, avec des travaux réalisés en horaires décalés et des peintures à séchage rapide.',
    'Experts en aménagement de parking implantés dans l\'Essonne, nous maîtrisons les contraintes spécifiques de ce département à forte densité économique. Des parkings-relais des gares RER aux aires de stationnement des centres de recherche du plateau de Saclay, nous garantissons un traçage conforme aux normes et résistant au trafic intense.',
    'Faites appel à notre expérience reconnue pour le marquage de votre parking dans le 91, territoire où se côtoient zones d\'innovation technologique, pôles commerciaux majeurs et quartiers résidentiels. Nous adaptons nos prestations à chaque contexte, qu\'il s\'agisse d\'un parking de copropriété à Massy ou d\'une aire de stationnement d\'entreprise à Courtaboeuf.',
    'Nous maîtrisons toutes les configurations de parking rencontrées en Essonne, des grandes surfaces de stationnement des zones d\'activités aux parkings souterrains des résidences. Notre connaissance du terrain, de Corbeil-Essonnes à Palaiseau, nous permet d\'intervenir rapidement avec des solutions techniques éprouvées et des matériaux haute performance.'
  ],
  'marquage-au-sol-parking-prive': [
    'Les parkings privés de l\'Essonne bénéficient de notre expertise en traçage sur mesure, que ce soit pour les copropriétés de Savigny-sur-Orge, les résidences de Sainte-Geneviève-des-Bois ou les ensembles immobiliers neufs du plateau de Saclay. Nous réalisons des marquages personnalisés intégrant places numérotées, zones visiteurs et signalisation adaptée à votre règlement intérieur.',
    'Nous aménageons les parkings de copropriétés du 91 avec un marquage professionnel qui optimise chaque mètre carré disponible. Notre bureau d\'études analyse la configuration de votre parking pour proposer un plan de traçage maximisant le nombre de places tout en garantissant des circulations fluides et sécurisées pour tous les résidents.',
    'Votre parking privé mérite un traçage professionnel et durable réalisé par des spécialistes du département. De Viry-Chatillon à Yerres, nous intervenons dans toutes les communes de l\'Essonne pour transformer vos aires de stationnement en espaces organisés, esthétiques et fonctionnels, reflétant la qualité de votre copropriété ou résidence.',
    'Optimisez l\'espace de votre parking privé avec nos solutions de marquage adaptées aux spécificités de l\'Essonne. Nous prenons en compte les contraintes locales, comme les hivers rigoureux du plateau de Saclay ou le trafic intense des zones proches d\'Orly, pour sélectionner les peintures et techniques les plus appropriées.',
    'Le marquage de votre parking privé est réalisé selon vos besoins spécifiques par notre équipe présente dans tout le 91. Nous proposons des plans de traçage personnalisés avec numérotation, flèches directionnelles, zones de livraison et places réservées, le tout dans le respect des normes d\'accessibilité PMR en vigueur.'
  ],
  'marquage-au-sol-stationnement': [
    'Nous optimisons vos zones de stationnement dans l\'Essonne grâce à une expertise développée auprès des collectivités et entreprises du département. Du centre-ville d\'Évry-Courcouronnes aux zones d\'activités de Massy-Palaiseau, nous concevons des plans de stationnement intelligents qui maximisent la capacité tout en facilitant les manœuvres des usagers.',
    'Le traçage de vos places de stationnement respecte scrupuleusement les normes en vigueur et s\'adapte aux réalités du terrain essonnien. Nous intervenons aussi bien sur les parkings des centres commerciaux que sur les aires de stationnement des entreprises du pôle Paris-Saclay, avec des techniques adaptées à chaque support et usage.',
    'Maximisez la capacité de vos stationnements avec notre expertise reconnue dans le 91. Notre bureau d\'études réalise des audits complets pour optimiser l\'implantation des places, intégrer les normes PMR et créer des circulations logiques qui réduisent les conflits d\'usage et améliorent l\'expérience des utilisateurs.',
    'Nos solutions de marquage stationnement s\'adaptent à tous les contextes du département de l\'Essonne, des parkings-relais des gares RER aux aires de covoiturage en plein développement. Nous utilisons des peintures routières homologuées, résistantes aux conditions climatiques et au trafic intense caractéristique des zones périurbaines.',
    'Un stationnement bien marqué facilite la gestion quotidienne de vos espaces dans le 91. Que vous gériez un parking de supermarché à Corbeil-Essonnes ou une aire de stationnement d\'entreprise aux Ulis, notre marquage clair et durable réduit les litiges, optimise le taux d\'occupation et sécurise les déplacements.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Les entreprises du 91 nous confient le marquage de leurs parkings car nous comprenons les enjeux d\'image et de fonctionnalité propres au monde professionnel. De la zone de Courtaboeuf au Génopôle d\'Évry, nous réalisons des traçages soignés avec places nominatives, zones visiteurs identifiées et signalisation directionnelle adaptée à vos flux.',
    'Nous accompagnons les professionnels de l\'Essonne dans leurs aménagements de parking avec une approche sur mesure. Notre équipe analyse vos besoins spécifiques : rotations du personnel, visites clients, livraisons, pour concevoir un marquage qui optimise chaque déplacement et renforce votre image de marque auprès de vos interlocuteurs.',
    'Votre parking d\'entreprise mérite un marquage professionnel à la hauteur de vos locaux et de votre activité. Implantés dans le 91, nous intervenons rapidement sur les zones d\'activités du département pour réaliser des travaux soignés, généralement en horaires décalés pour ne pas perturber votre activité quotidienne.',
    'Solutions complètes de marquage pour les zones d\'activités de l\'Essonne, de Courtaboeuf à Orly-Rungis. Nous proposons une offre globale incluant traçage des places, flèches de circulation, places PMR conformes, zones de livraison et signalisation verticale pour des parkings d\'entreprise parfaitement organisés et sécurisés.',
    'Le marquage professionnel de parking est notre spécialité depuis des années sur le territoire essonnien. Nous travaillons avec des entreprises de toutes tailles, des PME du tissu local aux multinationales du plateau de Saclay, en adaptant nos prestations aux contraintes techniques et budgétaires de chaque projet.'
  ],
  'marquage-au-sol-entrepôt': [
    'Les entrepôts du 91 nécessitent un marquage au sol conforme aux normes de sécurité et d\'organisation logistique. Notre expertise couvre les grandes plateformes de la zone d\'Orly aux entrepôts de Corbeil-Essonnes, avec des traçages résistants au passage des chariots élévateurs et conformes aux exigences des certifications qualité.',
    'Nous réalisons le traçage complet de vos zones logistiques dans l\'Essonne selon les recommandations INRS et les standards de votre secteur d\'activité. Allées de circulation, emplacements de stockage, zones de picking, aires de chargement : chaque élément est matérialisé avec des peintures industrielles haute résistance.',
    'Optimisez les flux de votre entrepôt essonnien avec un marquage professionnel structuré et lisible. Notre équipe intervient sur les plateformes logistiques du département pour créer des traçages durables qui améliorent la productivité, réduisent les risques d\'accident et facilitent la formation des nouveaux opérateurs.',
    'Notre expertise en marquage entrepôt couvre tous les besoins des sites logistiques du 91, des petits dépôts aux grandes plateformes e-commerce. Nous maîtrisons les codes couleurs normalisés, les pictogrammes de sécurité et les techniques de traçage adaptées aux sols industriels béton, résine ou enrobés.',
    'Marquage adapté aux contraintes d\'activité de vos entrepôts en Essonne, avec possibilité d\'intervention nocturne ou le week-end pour ne pas interrompre vos opérations. Nous utilisons des peintures à séchage rapide permettant une remise en service des zones traitées en quelques heures seulement.'
  ],
  'marquage-au-sol-industriel': [
    'Le secteur industriel du 91 fait appel à notre expertise pour des marquages résistants aux conditions d\'exploitation les plus sévères. Des ateliers de production aux zones de stockage, nous réalisons des traçages conformes aux normes de sécurité avec des peintures industrielles sélectionnées pour leur durabilité exceptionnelle.',
    'Nous intervenons sur les sites industriels de l\'Essonne pour tous types de traçages : voies de circulation engins, zones de danger, emplacements machines, aires de stockage. Notre connaissance des exigences réglementaires et des contraintes opérationnelles garantit des marquages fonctionnels et conformes aux audits de sécurité.',
    'Marquage haute résistance pour vos installations industrielles du département, réalisé avec des produits adaptés aux agressions chimiques, aux passages intensifs et aux sollicitations mécaniques. Nous travaillons avec les industries du 91, de l\'agroalimentaire à la fabrication mécanique, en adaptant nos solutions à chaque environnement.',
    'Sécurisez vos zones de production dans l\'Essonne avec un marquage au sol professionnel qui matérialise clairement les circulations, les zones de danger et les emplacements de travail. Notre équipe expérimentée réalise des traçages durables qui contribuent à la prévention des accidents et à l\'efficacité opérationnelle.',
    'Solutions de marquage adaptées au milieu industriel essonnien, des PME manufacturières aux grandes unités de production. Nous proposons une gamme complète de peintures et résines industrielles, avec des formulations spécifiques pour les environnements contraignants : zones humides, chambres froides, ateliers chimiques.'
  ],
  'marquage-au-sol-usine': [
    'Les usines de l\'Essonne bénéficient de notre savoir-faire en marquage industriel pour organiser leurs espaces de production et sécuriser leurs personnels. Nous intervenons sur les sites manufacturiers du département avec des techniques éprouvées et des matériaux haute performance adaptés aux environnements de fabrication.',
    'Nous aménageons vos zones de production essonniennes avec un marquage au sol précis et durable qui structure l\'espace de travail. Allées de circulation, postes de travail, zones de stockage intermédiaire, emplacements machines : chaque élément est matérialisé pour optimiser les flux et prévenir les accidents.',
    'Le marquage usine répond à des exigences spécifiques que nous maîtrisons parfaitement après des années d\'intervention sur les sites industriels du 91. Nous respectons les codes couleurs normalisés, intégrons les contraintes de vos process et garantissons des traçages résistants aux passages de chariots et aux projections.',
    'Optimisez les flux de votre usine essonnienne avec un traçage structuré réalisé par des professionnels du marquage industriel. Notre bureau d\'études peut vous accompagner dans la conception d\'un plan de circulation efficace, matérialisé ensuite par des marquages durables et parfaitement lisibles.',
    'Intervention pendant vos périodes d\'arrêt de production pour minimiser l\'impact sur votre activité industrielle. Notre équipe mobilise les moyens nécessaires pour réaliser le marquage complet de votre usine du 91 dans les délais impartis, avec des peintures à séchage rapide permettant une reprise d\'activité accélérée.'
  ],
  'marquage-routier-au-sol': [
    'Nous réalisons le marquage routier sur voiries privées dans tout le département de l\'Essonne, des accès aux zones d\'activités de Courtaboeuf aux voies internes des campus de Paris-Saclay. Notre expertise couvre les lignes axiales, rives, passages piétons et toute la signalisation horizontale réglementaire.',
    'Traçage de lignes et signalisation horizontale sur vos voiries privées du 91 avec des produits homologués et des techniques conformes aux exigences routières. Nous garantissons une rétroréflexion optimale pour une visibilité nocturne parfaite et une résistance au trafic adaptée à l\'intensité de circulation.',
    'Nos travaux de marquage routier dans l\'Essonne respectent les normes en vigueur pour les voiries privées ouvertes à la circulation. Nous utilisons des peintures routières certifiées NF, appliquées avec des équipements professionnels par des opérateurs formés aux techniques de traçage linéaire.',
    'Marquage routier durable pour les voiries et accès de vos sites essonniens, réalisé avec des matériaux sélectionnés pour leur tenue dans le temps. Nous proposons différentes gammes de produits, des peintures classiques aux enduits à froid, en fonction de l\'usage et de la durée de vie souhaitée.',
    'Équipements homologués et personnel qualifié pour un marquage routier professionnel dans le 91. Notre parc de traceuses autoportées permet d\'intervenir efficacement sur tous les linéaires, des petits parkings aux grandes voiries privées des zones industrielles et commerciales du département.'
  ],
  'marquage-garage-automobile': [
    'Les garages et concessions automobiles de l\'Essonne font appel à notre expertise pour des marquages adaptés à leurs activités spécifiques. Nous réalisons le traçage des zones d\'exposition, ateliers mécaniques, aires de préparation et parkings clients avec des peintures résistantes aux produits automobiles.',
    'Nous traçons les zones de vos ateliers automobiles du 91 avec des marquages fonctionnels et esthétiques. Emplacements de travail, voies de circulation, zones de stockage pièces, aires de livraison : chaque espace est clairement délimité pour optimiser l\'organisation de votre garage ou concession.',
    'Marquage adapté aux concessions et garages automobiles de l\'Essonne, résistant aux huiles, solvants et passages fréquents de véhicules. Nous proposons des solutions sur mesure intégrant votre charte graphique, avec des finitions soignées qui reflètent le professionnalisme de votre établissement.',
    'Optimisez l\'espace de votre atelier automobile essonnien avec un marquage professionnel qui structure les zones de travail et sécurise les déplacements. Notre équipe intervient sur les concessions et garages du département pour des traçages durables, réalisés en dehors des heures d\'ouverture.',
    'Solutions de marquage résistantes au trafic automobile intense et aux agressions chimiques pour les professionnels du secteur dans le 91. Nous utilisons des peintures époxy et polyuréthane haute performance, adaptées aux contraintes spécifiques des ateliers mécaniques et carrosseries.'
  ],
  'marquage-zones-piétonnes': [
    'La sécurité des piétons dans le 91 est notre priorité lors de chaque intervention de marquage. Nous matérialisons des cheminements sécurisés dans les entreprises, entrepôts et sites industriels de l\'Essonne, avec des traçages visibles et des revêtements antidérapants protégeant vos collaborateurs et visiteurs.',
    'Nous délimitons clairement vos circulations piétonnes sur les sites professionnels du département, séparant efficacement les flux piétons des zones de circulation véhicules et engins. Ce marquage conforme aux recommandations de sécurité réduit les risques d\'accident et facilite les audits réglementaires.',
    'Marquage des passages et allées piétonnes sécurisées dans les entreprises et sites logistiques de l\'Essonne. Nous utilisons des bandes de couleur normalisées, des pictogrammes et des revêtements spécifiques pour créer des cheminements parfaitement identifiés et protégés des autres flux de circulation.',
    'Protégez vos collaborateurs et visiteurs avec un marquage piéton professionnel sur vos sites essonniens. Notre expertise couvre les zones de production, les entrepôts, les parkings et les accès bâtiments, avec des solutions adaptées à chaque configuration et niveau de risque identifié.',
    'Solutions antidérapantes et hautement visibles pour le marquage des zones piétonnes dans le 91. Nous proposons des bandes podotactiles pour les personnes malvoyantes, des passages piétons surélevés et des revêtements colorés qui sécurisent les déplacements dans tous les environnements professionnels.'
  ],
  'places-handicapees-pmr': [
    'Nous réalisons des places PMR parfaitement conformes aux normes d\'accessibilité dans tout le 91, des parkings de commerces aux aires de stationnement d\'entreprises. Chaque place respecte les dimensions réglementaires de 3,30m x 5m minimum, avec un marquage complet incluant pictogramme, bandes et signalisation verticale.',
    'Mise en accessibilité de vos parkings essonniens avec des places handicapées conformes à la réglementation. Nous assurons le traçage des places aux dimensions requises, l\'application des pictogrammes normalisés et l\'installation de la signalisation verticale obligatoire pour une conformité totale.',
    'Places PMR aux dimensions et marquages strictement réglementaires pour les établissements recevant du public et les entreprises du 91. Notre expertise garantit des aménagements conformes aux contrôles des commissions d\'accessibilité, avec un dossier technique justifiant les caractéristiques de chaque place.',
    'Notre expertise en accessibilité garantit la conformité de vos places PMR dans l\'Essonne aux exigences légales les plus récentes. Nous réalisons des diagnostics de vos parkings existants et proposons des solutions de mise en conformité adaptées à votre configuration et votre budget.',
    'Traçage des places handicapées avec pictogrammes normalisés et signalisation complète dans tout le département. Nous intervenons sur les parkings neufs comme sur les aménagements existants à mettre en conformité, avec un accompagnement technique pour répondre aux obligations d\'accessibilité des ERP et entreprises.'
  ],
  'signalisation-verticale': [
    'Nous installons la signalisation verticale complète de vos parkings en Essonne, des panneaux directionnels aux indications de places réservées. Notre offre couvre tous les besoins : panneaux de police, flèches, totems d\'entrée, numérotation d\'allée et signalisation PMR réglementaire.',
    'Panneaux et équipements de signalisation pour les parkings du 91, fournis et posés par notre équipe spécialisée. Nous sélectionnons des supports de qualité, résistants aux intempéries et au vandalisme, avec des visuels conformes aux normes et adaptés à votre charte graphique si souhaité.',
    'Solutions complètes de signalétique pour organiser la circulation dans vos parkings essonniens. Nous concevons des plans de signalisation cohérents, intégrant panneaux directionnels, indications de zones et informations réglementaires pour guider efficacement les usagers vers leur destination.',
    'Installation professionnelle de panneaux de signalisation dans les parkings du département, avec ancrage adapté à chaque support : sol béton, enrobé, espace vert. Notre équipe assure une pose soignée garantissant la stabilité et la durabilité des équipements dans le temps.',
    'Signalisation verticale adaptée aux besoins spécifiques de votre parking dans le 91. Nous proposons des solutions sur mesure, des simples panneaux de police aux systèmes de guidage dynamique, en passant par la signalétique d\'orientation complète des grands parkings commerciaux.'
  ],
  'pose-ralentisseur': [
    'Nous installons des ralentisseurs homologués dans l\'Essonne pour sécuriser vos zones de passage à vitesse modérée. Coussins berlinois, dos d\'âne, plateaux traversants : nous proposons la solution adaptée à votre configuration, avec une pose conforme aux normes et une signalisation complète.',
    'Sécurisez vos zones de passage sur vos sites du 91 avec des dispositifs de réduction de vitesse adaptés aux flux et aux contraintes. Notre équipe analyse votre besoin pour préconiser le type de ralentisseur le plus pertinent, puis assure une installation soignée et durable.',
    'Coussins berlinois et dos d\'âne aux normes pour les voiries privées et parkings de l\'Essonne. Nous fournissons et posons des équipements homologués, accompagnés de la signalisation verticale et du marquage au sol obligatoires pour une mise en œuvre réglementaire complète.',
    'Pose de ralentisseurs pour les parkings et voiries privées du département, avec des équipements sélectionnés pour leur qualité et leur résistance. Nous proposons différents modèles en caoutchouc, métal ou résine, adaptés à l\'usage et au trafic de chaque site.',
    'Dispositifs de réduction de vitesse pour sécuriser les circulations sur vos sites essonniens. Notre expertise couvre le conseil, la fourniture et la pose de ralentisseurs, avec un accompagnement technique pour choisir la solution la plus efficace en fonction de vos objectifs de sécurité.'
  ],
  'installation-panneaux-parking': [
    'Nous équipons vos parkings de signalétique directionnelle et informative dans tout le 91, pour guider efficacement les usagers et optimiser la circulation. Notre gamme comprend panneaux d\'entrée, flèches directionnelles, indications de niveaux et toute la signalisation nécessaire à un parking bien organisé.',
    'Panneaux directionnels et informatifs pour les parkings de l\'Essonne, conçus pour une lisibilité optimale et une intégration harmonieuse à votre environnement. Nous proposons des solutions standard ou personnalisées, avec impression numérique haute définition pour les visuels sur mesure.',
    'Installation de signalisation de parking adaptée aux besoins spécifiques de votre site essonnien. Notre bureau d\'études analyse les flux et conçoit un plan de signalétique cohérent, matérialisé ensuite par des panneaux de qualité installés par notre équipe de poseurs expérimentés.',
    'Optimisez l\'orientation des usagers de votre parking avec une signalétique claire et professionnelle. Nous intervenons sur les parkings du 91 pour installer des panneaux directionnels, des indications de zones et toute la signalisation facilitant les déplacements et réduisant les manœuvres inutiles.',
    'Signalétique de parking sur mesure pour les gestionnaires et propriétaires essonniens. Nous concevons et fabriquons des panneaux adaptés à vos besoins spécifiques, intégrant votre identité visuelle, et assurons leur installation dans les règles de l\'art pour une tenue durable.'
  ],
  'pose-miroir-circulation': [
    'Nous installons des miroirs de sécurité dans l\'Essonne pour éliminer les angles morts et sécuriser les zones de manœuvre. Miroirs convexes intérieurs et extérieurs, miroirs hémisphériques : nous proposons le format adapté à chaque configuration, avec une pose garantissant une visibilité optimale.',
    'Miroirs convexes pour les angles morts de vos parkings et voiries privées du 91. Notre équipe évalue les zones à risque et préconise le type de miroir le plus adapté, puis assure une installation soignée à la hauteur et l\'angle optimaux pour une efficacité maximale.',
    'Améliorez la visibilité et la sécurité de vos parkings essonniens avec des miroirs de circulation stratégiquement positionnés. Nous traitons les intersections, sorties de parking, virages serrés et toutes les zones où la visibilité réduite génère des risques de collision.',
    'Pose de miroirs de sécurité adaptés aux contraintes de vos sites dans le 91 : miroirs de parking, miroirs de sortie véhicules, miroirs d\'angle pour entrepôts. Nous sélectionnons des équipements de qualité, résistants aux intempéries et au vandalisme pour une durée de vie optimale.',
    'Sécurisez les zones de manœuvre et les croisements de votre parking avec des miroirs de circulation professionnels. Notre expertise couvre l\'analyse des risques, le choix du matériel adapté et l\'installation dans les règles de l\'art pour éliminer les angles morts dangereux.'
  ],
  'installation-bornes-parking': [
    'Nous installons des bornes de protection et de réservation dans les parkings de l\'Essonne pour sécuriser vos places stratégiques. Bornes fixes, amovibles ou rétractables : nous proposons la solution adaptée à votre usage, avec une pose soignée garantissant stabilité et durabilité.',
    'Bornes fixes et amovibles pour la protection des places de parking dans le 91. Nous équipons vos emplacements réservés, places direction, accès pompiers et zones sensibles avec des bornes robustes, facilement identifiables et adaptées à la fréquence d\'utilisation prévue.',
    'Protection de vos places réservées et zones sensibles avec des bornes de parking professionnelles. Notre gamme couvre tous les besoins des sites essonniens, des bornes fixes économiques aux modèles rétractables automatiques pour les parkings à gestion dynamique.',
    'Solutions de bornage adaptées aux parkings du département, installées par notre équipe spécialisée. Nous assurons le scellement ou la fixation mécanique selon le support, avec des finitions soignées et une signalisation complémentaire si nécessaire pour une identification claire des zones protégées.',
    'Installation professionnelle de bornes de parking dans le 91, avec un accompagnement technique pour choisir le système le plus adapté à vos besoins. Nous proposons des bornes manuelles, à clé, à télécommande ou connectées selon le niveau de sécurité et de confort souhaité.'
  ],
  'pose-butees-parking': [
    'Nous posons des butées de parking dans l\'Essonne pour faciliter le positionnement des véhicules et protéger vos équipements. Butées en caoutchouc, béton ou plastique recyclé : nous proposons des modèles adaptés à chaque usage, avec une fixation solide garantissant leur tenue dans le temps.',
    'Butées de roues pour les parkings du 91, posées par notre équipe avec une fixation adaptée au support. Ces équipements simples mais efficaces facilitent le stationnement, protègent les murs et bordures, et évitent les dépassements sur les zones piétonnes ou espaces verts.',
    'Facilitez le positionnement des véhicules sur votre parking essonnien avec des butées de qualité professionnelle. Nous posons des butées haute visibilité, avec bandes réfléchissantes, qui guident les conducteurs et protègent les infrastructures des chocs et frottements répétés.',
    'Pose de butées professionnelles dans les parkings de l\'Essonne, avec chevillage mécanique sur béton ou fixation adaptée aux autres supports. Notre équipe assure une installation alignée et solide, pour des équipements qui resteront en place malgré les contacts véhicules.',
    'Protégez vos murs, poteaux et bordures avec des butées de parking robustes, posées dans les règles de l\'art. Nous intervenons sur les parkings du 91 pour installer ces équipements de protection essentiels, contribuant à maintenir vos infrastructures en bon état durablement.'
  ],
  'marquage-au-sol-porte-de-garage': [
    'Spécialistes du marquage au sol devant porte de garage en Essonne (91), nous intervenons de Massy aux pavillons de Savigny-sur-Orge pour protéger vos accès. Bandes hachurées jaunes, zones d\'interdiction de stationnement et lignes de recul sont réalisées avec des peintures haute visibilité pour dissuader efficacement le stationnement sauvage.',
    'Notre équipe réalise le marquage devant les garages des résidences et pavillons de l\'Essonne, du plateau de Saclay aux quartiers de Yerres. Nous appliquons les normes en vigueur pour créer des zones d\'interdiction clairement visibles et durables, protégeant votre accès au quotidien.',
    'Le stationnement gênant devant votre garage en Essonne est un problème récurrent que nous résolvons par un marquage professionnel. Des zones commerciales d\'Évry-Courcouronnes aux lotissements de Brunoy, nous réalisons des traçages dissuasifs conformes à la réglementation en vigueur.',
    'Protégez l\'accès à votre garage dans le 91 avec notre expertise en marquage au sol. Que vous soyez à Corbeil-Essonnes ou Palaiseau, nous intervenons rapidement pour tracer des zones d\'interdiction qui sécurisent vos entrées-sorties quotidiennes.',
    'Nous matérialisons les zones devant les portes de garage des particuliers et professionnels de l\'Essonne. Nos marquages à Athis-Mons, Viry-Châtillon ou Les Ulis sont réalisés avec des peintures résistantes aux intempéries et au trafic, garantissant une protection durable de vos accès.'
  ],
  'marquage-au-sol-portail-coulissant': [
    'Expert du marquage au sol pour portail coulissant en Essonne, nous sécurisons les zones de débattement des résidences et entreprises du 91. Du parc d\'activités de Courtabœuf aux ensembles résidentiels de Massy, nous réalisons des traçages conformes aux normes de sécurité.',
    'Les portails coulissants nécessitent un marquage au sol spécifique que nous maîtrisons parfaitement dans le 91. À Évry-Courcouronnes, Palaiseau ou Sainte-Geneviève-des-Bois, nous délimitons les zones de passage avec des bandes de sécurité haute visibilité protégeant les usagers.',
    'Nous intervenons sur les installations de portails coulissants automatiques dans l\'Essonne pour réaliser un marquage conforme aux exigences de sécurité. Les zones d\'activités de Paris-Saclay et les résidences du département bénéficient de notre expertise technique.',
    'Le marquage au sol de votre portail coulissant en Essonne est réalisé selon les normes NF en vigueur. Notre équipe trace les bandes de sécurité, zones d\'interdiction et signalisation au sol nécessaires pour prévenir les accidents et le stationnement gênant.',
    'Sécurisez votre portail coulissant dans le 91 avec un marquage professionnel adapté. De Draveil aux entreprises des Ulis, nous réalisons des traçages durables qui protègent la zone de débattement et garantissent un fonctionnement optimal de votre installation.'
  ],
  'marquage-au-sol-portail-battant': [
    'Spécialistes du marquage au sol pour portail battant en Essonne, nous délimitons l\'aire d\'ouverture des vantaux pour les résidences et sites professionnels du 91. À Yerres, Brunoy ou Savigny-sur-Orge, nos traçages en arc de cercle matérialisent clairement la zone à libérer.',
    'Le marquage au sol de portail battant requiert une expertise spécifique que notre équipe déploie dans tout le 91. Des pavillons de Viry-Châtillon aux entreprises d\'Athis-Mons, nous réalisons des traçages précis qui sécurisent l\'ouverture de vos portails à deux vantaux.',
    'Nous intervenons sur les portails battants automatiques et manuels de l\'Essonne pour tracer les zones de débattement réglementaires. Nos marquages à Massy, Corbeil-Essonnes ou Palaiseau utilisent des peintures haute visibilité résistantes aux passages répétés.',
    'Protégez votre portail battant en Essonne avec un marquage au sol professionnel qui matérialise l\'aire d\'ouverture. Notre équipe intervient d\'Évry-Courcouronnes à Draveil pour des traçages conformes qui préviennent les accrochages et le stationnement gênant.',
    'Le marquage devant portail battant est notre spécialité dans le 91. Nous réalisons des zones hachurées ou colorées qui signalent clairement l\'espace nécessaire à l\'ouverture complète des vantaux, sécurisant ainsi votre installation au quotidien.'
  ],
  'marquage-au-sol-barriere-levante': [
    'Expert du marquage au sol pour barrière levante en Essonne, nous sécurisons les accès des parkings privés, résidences et entreprises du 91. De la zone d\'Orly-Rungis aux sites de Courtabœuf, nous réalisons des traçages conformes incluant zones d\'arrêt et bandes de sécurité.',
    'Les barrières levantes de parking nécessitent un marquage au sol spécifique que nous maîtrisons dans tout le 91. À Massy, Palaiseau ou Les Ulis, nous traçons les lignes d\'arrêt, zones de danger et signalisation au sol qui sécurisent le passage des usagers.',
    'Nous intervenons sur les installations de barrières levantes en Essonne pour réaliser un marquage professionnel conforme aux normes de sécurité. Les parkings d\'entreprises de Paris-Saclay et les résidences du département bénéficient de notre savoir-faire technique.',
    'Le marquage au sol de votre barrière levante dans le 91 garantit la sécurité des piétons et automobilistes. Notre équipe trace les zones d\'arrêt réglementaires, les bandes de prudence et la signalisation complémentaire pour un accès parfaitement sécurisé.',
    'Sécurisez votre barrière levante en Essonne avec un marquage adapté aux flux de votre parking. De Corbeil-Essonnes à Évry-Courcouronnes, nous réalisons des traçages durables qui organisent la circulation et préviennent les incidents à l\'entrée de vos sites.'
  ]
};

const descriptions: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    'Peintures professionnelles pour marquage durable. Intervention nuit ou week-end. Devis gratuit sous 24h.',
    'Expertise tous types de parkings. Traçage complet avec signalétique.',
    'Équipements professionnels pour rendu optimal. Techniciens formés aux normes.'
  ],
  'marquage-au-sol-parking-prive': [
    'Marquage personnalisé selon vos attentes. Intervention copropriétés et résidences.',
    'Traçage des places, circulations et signalisation complète.',
    'Parking bien marqué valorisant votre bien. Résultat professionnel.'
  ],
  'marquage-au-sol-stationnement': [
    'Optimisation des stationnements pour capacité accrue. Étude et traçage.',
    'Solutions adaptées à tous contextes. Peintures résistantes au trafic.',
    'Traçage dimensions réglementaires avec places PMR et zones livraison.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Parking stratégique. Solutions places nominatives et visiteurs.',
    'Expertise zones d\'activités. Intervention de nuit.',
    'Marquage reflétant votre image. Finitions soignées.'
  ],
  'marquage-au-sol-entrepôt': [
    'Marquage conforme aux normes. Codes couleurs maîtrisés.',
    'Emplacements, zones picking et voies circulation.',
    'Sécurité par marquage clair. Recommandations INRS.'
  ],
  'marquage-au-sol-industriel': [
    'Marquages résistants pour sites industriels.',
    'Zones danger, allées, emplacements machines.',
    'Expertise agroalimentaire, chimique, logistique.'
  ],
  'marquage-au-sol-usine': [
    'Marquage pour optimiser les flux.',
    'Intervention arrêts de production.',
    'Peintures époxy haute performance.'
  ],
  'marquage-routier-au-sol': [
    'Marquage routier aux exigences voie publique. Produits homologués.',
    'Lignes, passages piétons, flèches. Rétroréflexion.',
    'Techniciens qualifiés avec traceuses professionnelles.'
  ],
  'marquage-garage-automobile': [
    'Marquage adapté. Peintures résistantes produits auto.',
    'Concessions, ateliers, carrosseries.',
    'Peintures époxy durables.'
  ],
  'marquage-zones-piétonnes': [
    'Séparation des flux. Cheminements antidérapants.',
    'Zones délimitées. Codes couleurs conformes.',
    'Protection collaborateurs. Bandes podotactiles PMR.'
  ],
  'places-handicapees-pmr': [
    'Places PMR 3,30m x 5m. Traçage conforme.',
    'Pictogrammes et signalisation. Places complètes.',
    'Création ou mise en conformité. Devis gratuit.'
  ],
  'signalisation-verticale': [
    'Signalisation orientation. Tous panneaux.',
    'Installation qualifiée. Fixation adaptée.',
    'Parking signalisé. Solutions sur mesure.'
  ],
  'pose-ralentisseur': [
    'Ralentisseurs zones limitées. Homologués.',
    'Coussins, dos d\'âne, plateaux. Conseil.',
    'Pose règles art avec signalisation.'
  ],
  'installation-panneaux-parking': [
    'Signalétique claire. Panneaux directionnels.',
    'Panneaux sur mesure. Conception installation.',
    'Supports adaptés. Expérience usager.'
  ],
  'pose-miroir-circulation': [
    'Miroirs angles morts. adaptés.',
    'Convexes et hémisphériques.',
    'Emplacement optimal. Rapide.'
  ],
  'installation-bornes-parking': [
    'Bornes protection. Fixes, amovibles, rétractables.',
    'Places direction, pompiers. adaptées.',
    'Scellement ou mécanique. Soignées.'
  ],
  'pose-butees-parking': [
    'Butées positionnement protection.',
    'Caoutchouc, béton, plastique.',
    'Fixation mécanique. Rapide propre.'
  ],
  'marquage-au-sol-porte-de-garage': [
    'Bandes jaunes et zones interdiction devant garage. Protection accès garantie.',
    'Marquage dissuasif stationnement gênant. Peinture haute visibilité.',
    'Traçage conforme réglementation. Intervention rapide 91.'
  ],
  'marquage-au-sol-portail-coulissant': [
    'Zone débattement portail coulissant. Sécurité normes NF.',
    'Bandes sécurité et signalisation. Portails automatiques.',
    'Marquage professionnel zone passage. Durabilité garantie.'
  ],
  'marquage-au-sol-portail-battant': [
    'Aire ouverture vantaux délimitée. Arc de cercle visible.',
    'Zone débattement portail battant. Traçage précis.',
    'Marquage sécurité portail 2 vantaux. Intervention rapide.'
  ],
  'marquage-au-sol-barriere-levante': [
    'Zone arrêt et sécurité barrière. Marquage conforme.',
    'Lignes stop et bandes prudence. Parking sécurisé.',
    'Signalisation barrière levante. Installation complète.'
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
    metaTitle: `${serviceName} à ${city.name} (91) | Devis Gratuit`,
    metaDescription: `${serviceName} à ${city.name} en Essonne. Entreprise spécialisée, intervention rapide. Devis gratuit sous 24h.`,
    content: {
      introduction: intro,
      localContext: city.context,
      serviceDescription: desc
    },
    faqs: [
      {
        question: `Quel est le délai d'intervention à ${city.name} ?`,
        answer: `Nous intervenons sous 24 à 48h à ${city.name} (91). La visite technique et le devis sont gratuits.`
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

export const essonneVariations: ServiceLocationContent[] = [];

cities.forEach((city, cityIndex) => {
  services.forEach((serviceSlug, serviceIndex) => {
    essonneVariations.push(generateVariation(city, serviceSlug, cityIndex + serviceIndex));
  });
});
