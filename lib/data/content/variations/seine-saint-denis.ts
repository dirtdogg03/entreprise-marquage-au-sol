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
    slug: 'saint-denis',
    name: 'Saint-Denis',
    context: 'Saint-Denis accueille le Stade de France et la future gare du Grand Paris. Les zones logistiques de la Plaine Saint-Denis, les quartiers en rénovation et les entreprises du secteur génèrent une demande importante en marquage professionnel.',
    zones: ['Plaine Saint-Denis', 'Pleyel', 'Stade de France', 'Basilique', 'Floreal']
  },
  {
    slug: 'montreuil',
    name: 'Montreuil',
    context: 'Montreuil combine zones résidentielles et activités artisanales. Les parkings des centres commerciaux, les ateliers reconvertis et les résidences nécessitent un marquage adapté à la diversite des usages.',
    zones: ['Croix de Chavaux', 'Mairie', 'Robespierre', 'Vincennes', 'Bas-Montreuil']
  },
  {
    slug: 'aubervilliers',
    name: 'Aubervilliers',
    context: 'Aubervilliers connaît une transformation majeure avec les projets du Grand Paris. Les zones d\'activités, les nouveaux quartiers et les entrepôts font appel à notre expertise en marquage au sol.',
    zones: ['Fort d\'Aubervilliers', 'Quatre Chemins', 'Canal', 'Front Populaire', 'Mairie']
  },
  {
    slug: 'aulnay-sous-bois',
    name: 'Aulnay-sous-Bois',
    context: 'Aulnay-sous-Bois dispose de zones industrielles importantes et de nombreuses résidences. Les parkings d\'entreprises, les centres commerciaux et les copropriétés requièrent un marquage professionnel régulier.',
    zones: ['Gare', 'Nonneville', 'Rose des Vents', 'Europe', 'Mitry']
  },
  {
    slug: 'drancy',
    name: 'Drancy',
    context: 'Drancy, proche de l\'aéroport du Bourget, melange habitat collectif et zones d\'activités. Les parkings des résidences, les surfaces commerciales et les entreprises locales constituent notre clientèle régulière.',
    zones: ['Centre', 'Bobigny Pablo Picasso', 'Avenir Parisien', 'La Muette', 'Gaston Roulaud']
  },
  {
    slug: 'noisy-le-grand',
    name: 'Noisy-le-Grand',
    context: 'Noisy-le-Grand accueille le quartier d\'affaires du Mont d\'Est. Les tours de bureaux, les commerces et les résidences de Noisy nécessitent des prestations de marquage régulières et professionnelles.',
    zones: ['Mont d\'Est', 'Champy', 'Pavements', 'Hauts Batons', 'Centre-ville']
  },
  {
    slug: 'pantin',
    name: 'Pantin',
    context: 'Pantin est devenu un pole creatif et tertiaire dynamique. Les studios, les entreprises du numerique et les résidences modernes demandent un marquage au sol de qualité pour leurs espaces de stationnement.',
    zones: ['Eglise', 'Quatre Chemins', 'Aubervilliers Pantin', 'Magasins généraux', 'Canal']
  },
  {
    slug: 'bondy',
    name: 'Bondy',
    context: 'Bondy poursuit sa rénovation urbaine avec de nouveaux programmes immobiliers. Les parkings des résidences, les équipements publics et les zones commerciales font appel à nos services de marquage.',
    zones: ['Centre-ville', 'Blumenthal', 'Terre-Saint-Blaise', 'Gare', 'Noisy-le-Sec']
  },
  {
    slug: 'epinay-sur-seine',
    name: 'Epinay-sur-Seine',
    context: 'Epinay-sur-Seine développe de nouveaux quartiers le long de la Seine. Les résidences, les équipements sportifs et les zones d\'activités nécessitent un marquage conforme aux normes actuelles.',
    zones: ['Centre', 'Orgemont', 'Sources', 'Bords de Seine', 'La Briche']
  },
  {
    slug: 'sevran',
    name: 'Sevran',
    context: 'Sevran bénéficie du prolongement du tramway et de nouveaux aménagements. Les parkings des commerces, les résidences et les zones d\'activités constituent un marché en croissance pour le marquage.',
    zones: ['Beaudottes', 'Rougemont', 'Montceleux', 'Livry-Gargan', 'Centre']
  },
  {
    slug: 'livry-gargan',
    name: 'Livry-Gargan',
    context: 'Livry-Gargan allie zones pavillonnaires et collectifs. Les parkings de résidences, les centres commerciaux locaux et les équipements municipaux nécessitent un marquage au sol professionnel.',
    zones: ['Centre', 'Poudrerie', 'Danton', 'Jacob', 'Abbaye']
  },
  {
    slug: 'le-blanc-mesnil',
    name: 'Le Blanc-Mesnil',
    context: 'Le Blanc-Mesnil profite de la proximité de l\'aéroport pour son développement économique. Les zones logistiques, les entreprises de transport et les résidences font appel à nos services de traçage.',
    zones: ['Centre', 'Cosmonautes', 'Leo Lagrange', 'Petit Drancy', 'Pont Yblon']
  }
];

const intros: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    'Entreprise spécialisée dans le marquage au sol de parkings en Seine-Saint-Denis, nous intervenons auprès des copropriétés, centres commerciaux et entreprises du 93. Notre expertise couvre les parkings souterrains comme aériens, avec des peintures professionnelles garantissant une durabilité optimale même sur les sols à fort trafic des zones logistiques du département.',
    'Le département de Seine-Saint-Denis, avec ses nombreuses zones d\'activités autour de Roissy et Garonor, génère une forte demande en marquage de parkings professionnels. Notre équipe intervient rapidement pour tracer vos places, allées de circulation et signalisation horizontale, en respectant les normes en vigueur et vos contraintes opérationnelles.',
    'Spécialistes reconnus du marquage au sol dans le 93, nous accompagnons les gestionnaires de parkings, syndics et entreprises de Seine-Saint-Denis. Des grandes surfaces commerciales de Saint-Denis aux parkings d\'entreprises d\'Aubervilliers, nous garantissons un traçage précis et durable adapté à l\'intensité d\'utilisation de chaque site.',
    'Notre entreprise de marquage au sol intervient dans toute la Seine-Saint-Denis pour vos projets de traçage de parking. Que vous soyez à Montreuil, Pantin ou Aulnay-sous-Bois, nous déployons des équipes expérimentées capables de réaliser un marquage complet incluant places, passages piétons et flèches directionnelles.',
    'Fort de notre implantation en Île-de-France, nous assurons le marquage de parkings dans tout le département 93. Les zones en pleine rénovation urbaine comme la Plaine Saint-Denis ou le quartier du Stade de France font régulièrement appel à notre savoir-faire pour leurs nouveaux aménagements de stationnement.'
  ],
  'marquage-au-sol-parking-prive': [
    'Les parkings privés de Seine-Saint-Denis, qu\'il s\'agisse de résidences à Noisy-le-Grand ou de copropriétés à Bondy, nécessitent un marquage sur mesure. Nous réalisons le traçage complet de vos places numérotées, zones visiteurs et emplacements réservés, avec des peintures haute résistance adaptées aux usages résidentiels et professionnels.',
    'Spécialistes du marquage de parkings privés dans le 93, nous intervenons pour les syndics, gestionnaires immobiliers et propriétaires. De l\'optimisation des places existantes à la création de nouvelles configurations, notre expertise permet d\'améliorer la capacité et la fluidité de circulation dans vos parkings de résidences.',
    'Votre parking privé en Seine-Saint-Denis mérite un traçage professionnel valorisant votre patrimoine immobilier. Nous réalisons le marquage des places, la signalisation horizontale et les pictogrammes réglementés, que vous soyez une résidence à Drancy, une copropriété à Pantin ou un immeuble de bureaux à Saint-Denis.',
    'Les résidences et copropriétés du 93 font appel à notre entreprise pour le marquage de leurs parkings privés. Nous proposons des solutions personnalisées intégrant numérotation des places, zones de manœuvre et emplacements PMR, avec une intervention rapide minimisant la gêne pour les résidents.',
    'Notre équipe spécialisée réalise le marquage de parkings privés sur tout le territoire de Seine-Saint-Denis. Des lotissements de Livry-Gargan aux résidences de standing de Noisy-le-Grand, nous adaptons nos prestations aux spécificités de chaque site pour un résultat professionnel et durable.'
  ],
  'marquage-au-sol-stationnement': [
    'L\'optimisation des zones de stationnement en Seine-Saint-Denis est notre spécialité. Nous analysons la configuration de vos espaces pour maximiser le nombre de places tout en garantissant une circulation fluide. Des parkings de centres commerciaux aux aires de stationnement d\'entreprises, notre expertise permet des gains de capacité significatifs.',
    'Le marquage de stationnement dans le 93 répond à des enjeux spécifiques liés à la densité urbaine du département. Notre entreprise propose des solutions techniques adaptées, incluant l\'étude de l\'existant, le redessin des places et le traçage avec des peintures homologuées pour une visibilité optimale.',
    'Spécialistes du traçage de zones de stationnement en Seine-Saint-Denis, nous intervenons pour reconfigurer ou créer vos espaces de parking. Notre approche inclut une analyse préalable permettant d\'optimiser le nombre de places tout en respectant les dimensions réglementaires et l\'accessibilité PMR.',
    'Les besoins en stationnement du département 93, entre zones logistiques et quartiers résidentiels, exigent un marquage professionnel. Nous réalisons le traçage de vos places avec précision, intégrant flèches de circulation, passages piétons et signalisation horizontale pour une gestion optimale des flux.',
    'Notre entreprise de marquage intervient dans toute la Seine-Saint-Denis pour vos projets de stationnement. Que ce soit pour un parking existant à rénover ou de nouvelles places à créer, nous apportons notre expertise technique pour un résultat conforme aux normes et adapté à votre fréquentation.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Les entreprises de Seine-Saint-Denis, des zones d\'activités de la Plaine Saint-Denis aux parcs tertiaires de Noisy-le-Grand, font appel à notre expertise pour le marquage de leurs parkings. Nous réalisons des aménagements complets incluant places nominatives, zones visiteurs, emplacements direction et accessibilité PMR réglementaire.',
    'Le parking de votre entreprise dans le 93 constitue la première image offerte à vos visiteurs et collaborateurs. Notre équipe spécialisée réalise un marquage professionnel valorisant votre site, avec des options de personnalisation comme le marquage du logo d\'entreprise ou des codes couleurs spécifiques.',
    'Spécialistes du marquage de parkings d\'entreprise en Seine-Saint-Denis, nous accompagnons les PME comme les grands groupes. Des bureaux de Pantin aux sites industriels d\'Aulnay-sous-Bois, nous adaptons nos prestations aux contraintes de chaque activité avec des interventions possibles en dehors des heures ouvrables.',
    'Notre entreprise de traçage intervient auprès des professionnels du 93 pour l\'aménagement de leurs parkings. Nous proposons une offre complète incluant le marquage des places, la signalisation horizontale, les flèches directionnelles et l\'intégration des emplacements réglementés pour véhicules électriques ou PMR.',
    'Les zones d\'activités de Seine-Saint-Denis génèrent une demande importante en marquage de parkings professionnels. Notre équipe répond à ces besoins avec des prestations sur mesure, de l\'étude de configuration au traçage final, en passant par le conseil sur les normes applicables à votre secteur d\'activité.'
  ],
  'marquage-au-sol-entrepôt': [
    'La Seine-Saint-Denis concentre d\'importantes plateformes logistiques autour de Roissy, Garonor et du Bourget. Notre entreprise spécialisée réalise le marquage au sol de ces entrepôts selon les normes de sécurité INRS, avec un traçage précis des zones de stockage, allées de circulation et emplacements de quais de chargement.',
    'Le marquage d\'entrepôt dans le 93 répond à des exigences spécifiques de sécurité et d\'organisation logistique. Nous maîtrisons les codes couleurs réglementés, les dimensions d\'allées pour engins de manutention et le balisage des zones de danger, garantissant un environnement de travail conforme aux normes.',
    'Spécialistes du traçage d\'entrepôts en Seine-Saint-Denis, nous intervenons sur les sites logistiques du département pour optimiser leurs espaces. Notre expertise couvre le marquage des zones de picking, des emplacements de stockage palettes et des voies de circulation piétons séparées des zones d\'évolution des chariots.',
    'Les plateformes logistiques du 93, véritables poumons économiques du département, nécessitent un marquage au sol rigoureux. Notre entreprise réalise le traçage complet de vos entrepôts avec des peintures époxy haute résistance, adaptées aux passages intensifs des transpalettes et chariots élévateurs.',
    'Notre équipe de marquage intervient dans les entrepôts de Seine-Saint-Denis pour sécuriser vos espaces de travail. Du balisage des allées principales au traçage des zones de chargement, nous appliquons les recommandations INRS et les codes couleurs normalisés pour une lisibilité optimale de votre organisation logistique.'
  ],
  'marquage-au-sol-industriel': [
    'Le tissu industriel de Seine-Saint-Denis, des ateliers de Montreuil aux usines d\'Aulnay-sous-Bois, fait appel à notre expertise en marquage au sol. Nous réalisons le traçage des zones de production, allées de sécurité et emplacements machines selon les normes industrielles, avec des peintures haute résistance aux contraintes mécaniques.',
    'Spécialistes du marquage industriel dans le 93, nous accompagnons les sites de production dans l\'organisation visuelle de leurs espaces. Notre savoir-faire couvre le balisage des zones de danger, la délimitation des postes de travail et le traçage des voies de circulation conformes aux exigences de sécurité.',
    'Les sites industriels de Seine-Saint-Denis nécessitent un marquage au sol professionnel garantissant sécurité et productivité. Notre entreprise intervient sur tous types d\'installations pour réaliser un traçage durable, résistant aux produits chimiques, huiles et contraintes mécaniques propres au milieu industriel.',
    'Notre équipe de marquage industriel opère dans tout le département 93 pour sécuriser vos installations. Du traçage des allées piétonnes aux zones de stockage, en passant par le balisage des équipements fixes, nous appliquons les codes couleurs normalisés assurant une lecture immédiate de l\'organisation spatiale.',
    'Le marquage industriel en Seine-Saint-Denis répond à des enjeux de sécurité et d\'efficacité opérationnelle. Nous proposons des solutions adaptées à chaque secteur d\'activité, avec des peintures époxy ou polyuréthane sélectionnées en fonction des contraintes spécifiques de votre environnement de production.'
  ],
  'marquage-au-sol-usine': [
    'Les usines de Seine-Saint-Denis font appel à notre expertise pour le marquage au sol de leurs ateliers de production. Nous réalisons le traçage des zones de travail, allées de circulation et emplacements de stockage avec des peintures industrielles résistantes, intervenant pendant vos périodes d\'arrêt pour limiter l\'impact sur votre activité.',
    'Spécialistes du marquage d\'usine dans le 93, nous accompagnons les sites de production dans l\'optimisation visuelle de leurs espaces. Notre équipe maîtrise les contraintes du milieu industriel et propose des solutions durables adaptées aux passages intensifs, projections de produits et sollicitations mécaniques.',
    'Le marquage au sol de votre usine en Seine-Saint-Denis contribue directement à la sécurité et l\'efficacité de vos opérations. Nous réalisons le traçage des zones réglementées, allées de sécurité et emplacements de stockage selon les normes INRS, avec des peintures haute performance garantissant une lisibilité durable.',
    'Notre entreprise intervient dans les usines du département 93 pour réaliser des marquages industriels conformes aux exigences de sécurité. Du balisage des machines au traçage des voies de circulation, nous déployons des solutions techniques adaptées à l\'intensité d\'utilisation de vos espaces de production.',
    'Les sites de production de Seine-Saint-Denis, des PME industrielles aux grandes unités manufacturières, bénéficient de notre expertise en marquage d\'usine. Nous proposons des interventions planifiées en fonction de vos contraintes de production, avec des temps de séchage optimisés pour une remise en service rapide.'
  ],
  'marquage-routier-au-sol': [
    'Notre entreprise réalise le marquage routier sur les voiries privées de Seine-Saint-Denis. Que ce soit pour les accès de zones industrielles, les routes de dessertes de lotissements ou les parkings de grandes surfaces, nous appliquons les mêmes standards que le marquage public avec des peintures homologuées et billes de verre rétroréfléchissantes.',
    'Le marquage routier dans le 93 concerne de nombreuses voiries privées nécessitant un traçage professionnel. Notre équipe spécialisée réalise les lignes de rive, passages piétons, flèches directionnelles et autres signalisations horizontales selon les normes en vigueur, garantissant sécurité et lisibilité pour tous les usagers.',
    'Spécialistes du traçage routier en Seine-Saint-Denis, nous intervenons sur les voies privées des entreprises, résidences et zones commerciales. Nos prestations incluent le marquage des lignes, zèbres, céder-le-passage et autres signalisations horizontales avec des produits professionnels certifiés pour l\'usage routier.',
    'Les voiries privées de Seine-Saint-Denis, nombreuses dans les zones d\'activités et les ensembles résidentiels, méritent un marquage routier de qualité. Notre entreprise utilise des traceuses professionnelles et des peintures homologuées pour réaliser un traçage conforme aux normes de la signalisation publique.',
    'Notre expertise en marquage routier couvre l\'ensemble du département 93. Des accès aux zones logistiques de Garonor aux voies de circulation des parcs d\'activités, nous réalisons un traçage durable avec des matériaux sélectionnés pour résister au trafic poids-lourds et aux intempéries.'
  ],
  'marquage-garage-automobile': [
    'Les garages et concessions automobiles de Seine-Saint-Denis font appel à notre expertise pour le marquage de leurs espaces. Nous réalisons le traçage des zones d\'atelier, emplacements de travail et aires de stockage véhicules avec des peintures époxy résistantes aux huiles, solvants et passages intensifs de véhicules.',
    'Spécialistes du marquage de garages dans le 93, nous accompagnons les professionnels de l\'automobile dans l\'organisation de leurs espaces. Des concessions de Saint-Denis aux ateliers de Montreuil, nous proposons des solutions de traçage adaptées aux contraintes spécifiques du secteur automobile.',
    'Le marquage au sol de votre garage en Seine-Saint-Denis optimise l\'utilisation de vos espaces et renforce la sécurité. Nous réalisons le traçage des zones de levage, emplacements d\'outillage et voies de circulation avec des peintures professionnelles résistant aux agressions chimiques du milieu automobile.',
    'Notre entreprise intervient dans les garages et ateliers mécaniques du département 93 pour réaliser des marquages durables. La délimitation des postes de travail, zones de stockage pieces et allées de circulation est réalisée avec des produits haute résistance garantissant une tenue optimale dans l\'environnement automobile.',
    'Les carrosseries, concessions et centres auto de Seine-Saint-Denis bénéficient de notre savoir-faire en marquage au sol. Nous proposons des solutions techniques adaptées aux showrooms comme aux ateliers, avec des peintures sélectionnées pour résister aux contraintes spécifiques de chaque zone.'
  ],
  'marquage-zones-piétonnes': [
    'La sécurité des piétons en Seine-Saint-Denis passe par un marquage au sol visible et durable. Notre entreprise réalise le traçage des cheminements piétons, passages protégés et zones de circulation dans les parkings, entrepôts et sites industriels du 93, avec des peintures antidérapantes conformes aux normes d\'accessibilité.',
    'Spécialistes du marquage de zones piétonnes dans le 93, nous sécurisons les espaces de circulation dans les entreprises et sites logistiques. La séparation des flux piétons et véhicules, essentielle dans les entrepôts de Garonor ou les usines d\'Aulnay, est réalisée selon les codes couleurs normalisés.',
    'Le marquage des zones piétonnes en Seine-Saint-Denis répond à des enjeux de sécurité au travail. Notre équipe réalise le traçage des passages protégés, bandes podotactiles et cheminements sécurisés avec des matériaux antidérapants garantissant la sécurité des usagers même par temps humide.',
    'Notre entreprise intervient dans tout le département 93 pour le marquage des circulations piétonnes. Des parkings de centres commerciaux aux zones logistiques, nous réalisons un traçage visible et durable intégrant les pictogrammes réglementaires et les bandes de guidage pour personnes à mobilité réduite.',
    'Les sites industriels et logistiques de Seine-Saint-Denis nécessitent un marquage piéton rigoureux. Nous réalisons la délimitation des allées piétonnes, passages zèbres et zones d\'attente sécurisées avec des peintures haute visibilité conformes aux recommandations INRS pour la prévention des risques.'
  ],
  'places-handicapees-pmr': [
    'La mise en accessibilité des parkings en Seine-Saint-Denis passe par des places PMR conformes à la réglementation. Notre entreprise réalise le traçage des emplacements handicapés aux dimensions réglementaires de 3,30m x 5m minimum, avec pictogrammes normalisés et signalisation verticale associée pour une conformité totale.',
    'Spécialistes des places handicapées dans le 93, nous accompagnons les gestionnaires de parkings dans leur mise en conformité. Que ce soit pour créer de nouveaux emplacements PMR ou rénover l\'existant, nous garantissons un traçage conforme à la législation sur l\'accessibilité applicable dans le département.',
    'Les places PMR en Seine-Saint-Denis doivent respecter des normes strictes que notre entreprise maîtrise parfaitement. Nous réalisons le marquage complet incluant le traçage bleu réglementaire, le pictogramme fauteuil roulant, la bande d\'accès latérale et la signalisation verticale obligatoire.',
    'Notre équipe spécialisée intervient dans tout le département 93 pour la création ou la rénovation de places handicapées. Des parkings de commerces aux résidences, nous assurons un traçage PMR conforme aux exigences d\'accessibilité avec des matériaux durables garantissant une lisibilité optimale.',
    'L\'accessibilité des parkings en Seine-Saint-Denis est un enjeu réglementaire que nous maîtrisons. Notre entreprise propose une offre complète pour vos places PMR, incluant l\'analyse de conformité, le traçage aux dimensions réglementaires et la pose de la signalisation verticale obligatoire.'
  ],
  'signalisation-verticale': [
    'Notre entreprise installe la signalisation verticale complète pour les parkings et voiries privées de Seine-Saint-Denis. Panneaux directionnels, indications de stationnement, limitations de vitesse et signalisation réglementaire sont posés par nos équipes qualifiées selon les normes en vigueur dans le département.',
    'La signalisation verticale complète le marquage au sol pour une orientation optimale dans vos espaces de circulation du 93. Nous proposons une gamme complète de panneaux normalisés : directionnels, interdictions, obligations et informations, installés avec des fixations adaptées à chaque configuration.',
    'Spécialistes de la signalétique en Seine-Saint-Denis, nous équipons les parkings, zones industrielles et voiries privées. Notre offre inclut le conseil sur les panneaux nécessaires, la fourniture de matériels homologués et l\'installation par nos équipes dans le respect des hauteurs et emplacements réglementaires.',
    'Les parkings et sites d\'entreprise du département 93 nécessitent une signalisation verticale adaptée. Nous installons les panneaux de direction, d\'indication de services et de réglementation avec des supports durables résistants aux conditions climatiques et aux sollicitations du milieu urbain.',
    'Notre équipe réalise l\'installation de signalisation verticale dans toute la Seine-Saint-Denis. Des panneaux de parking aux totems directionnels, nous proposons des solutions sur mesure intégrant votre identité visuelle tout en respectant les normes de lisibilité et de sécurité applicables.'
  ],
  'pose-ralentisseur': [
    'La sécurisation des zones de circulation en Seine-Saint-Denis passe par l\'installation de ralentisseurs adaptés. Notre entreprise pose des dispositifs homologués conformes aux normes : coussins berlinois, dos d\'âne et plateaux ralentisseurs, avec la signalisation verticale et horizontale obligatoire associée.',
    'Spécialistes de la pose de ralentisseurs dans le 93, nous équipons les parkings, voiries privées et zones d\'activités. Le choix du dispositif adapté dépend du trafic et de la vitesse cible, nous vous conseillons sur la solution optimale pour votre configuration et vos objectifs de sécurité.',
    'Les ralentisseurs installés en Seine-Saint-Denis doivent respecter des normes précises que notre entreprise maîtrise. Nous posons des équipements homologués avec un dimensionnement adapté au type de voie, garantissant une réduction de vitesse efficace sans détérioration des véhicules ni gêne excessive.',
    'Notre équipe intervient dans tout le département 93 pour la pose de dispositifs de réduction de vitesse. Des parkings de résidences aux zones logistiques, nous installons des ralentisseurs adaptés au trafic avec le marquage au sol et la signalisation verticale réglementaires.',
    'La sécurité routière dans les espaces privés de Seine-Saint-Denis passe par des ralentisseurs correctement dimensionnés et installés. Notre entreprise propose une prestation complète incluant l\'étude d\'implantation, la fourniture du matériel homologué et la pose avec signalisation conforme.'
  ],
  'installation-panneaux-parking': [
    'Notre entreprise équipe les parkings de Seine-Saint-Denis avec une signalétique complète et professionnelle. Panneaux de direction, indication des niveaux, flèches d\'orientation et informations pratiques sont conçus et installés pour faciliter la circulation et optimiser l\'expérience des usagers dans vos espaces de stationnement.',
    'Les parkings du département 93 nécessitent une signalétique claire pour une orientation intuitive. Nous proposons des panneaux directionnels sur mesure, intégrant votre charte graphique tout en respectant les normes de lisibilité, avec une installation professionnelle par nos équipes qualifiées.',
    'Spécialistes de l\'installation de panneaux en Seine-Saint-Denis, nous aménageons vos parkings avec une signalisation efficace. Des totems d\'entrée aux panneaux de niveaux, notre offre complète couvre tous les besoins d\'orientation pour des parkings souterrains comme de surface.',
    'L\'installation de panneaux parking dans le 93 contribue à fluidifier la circulation et réduire les incidents. Notre entreprise conçoit et pose une signalétique adaptée à la configuration de vos espaces, avec des matériaux durables résistants aux conditions d\'utilisation intensives.',
    'Notre équipe réalise l\'installation complète de la signalétique parking en Seine-Saint-Denis. Panneaux directionnels, informations tarifaires, indications de services : nous proposons des solutions sur mesure pour les parkings publics, de commerces ou d\'entreprises du département.'
  ],
  'pose-miroir-circulation': [
    'La pose de miroirs de circulation en Seine-Saint-Denis sécurise les zones à visibilité réduite. Notre entreprise installe des miroirs convexes et hémisphériques adaptés aux angles morts de vos parkings, sorties de garage et intersections, améliorant significativement la sécurité des manœuvres pour tous les usagers.',
    'Spécialistes de l\'installation de miroirs dans le 93, nous équipons les parkings souterrains, rampes d\'accès et zones de manœuvre. Le choix du miroir adapté dépend de la distance de vision nécessaire et de l\'angle à couvrir, nous vous conseillons sur la solution optimale pour chaque situation.',
    'Les miroirs de sécurité installés en Seine-Saint-Denis réduisent significativement les risques d\'accident dans les zones à visibilité limitée. Notre entreprise pose des équipements de qualité avec des fixations adaptées à chaque support, garantissant stabilité et orientation optimale du miroir.',
    'Notre équipe intervient dans tout le département 93 pour la pose de miroirs de circulation. Des parkings d\'entreprises aux résidences, nous installons des dispositifs adaptés aux contraintes de chaque site pour améliorer la visibilité dans les virages, intersections et zones de croisement.',
    'L\'installation de miroirs en Seine-Saint-Denis est une solution efficace pour sécuriser vos espaces de circulation. Notre entreprise propose une gamme complète de miroirs convexes, de différents diamètres et matériaux, avec une pose professionnelle garantissant une vision optimale des zones aveugles.'
  ],
  'installation-bornes-parking': [
    'Notre entreprise installe des bornes de parking en Seine-Saint-Denis pour protéger vos places réservées et contrôler les accès. Bornes fixes, amovibles ou rétractables, nous proposons des solutions adaptées à chaque usage : places direction, emplacements handicapés, accès pompiers ou zones de livraison.',
    'L\'installation de bornes dans le 93 répond à des besoins de gestion et de protection des espaces de stationnement. Notre équipe pose des équipements robustes et esthétiques, avec différentes options de verrouillage pour les bornes amovibles et des systèmes de commande pour les versions rétractables.',
    'Spécialistes de la pose de bornes parking en Seine-Saint-Denis, nous équipons les sites professionnels et résidentiels. La protection des places réservées, la délimitation des zones privatives et le contrôle des accès sont assurés par des bornes sélectionnées pour leur robustesse et leur facilité d\'utilisation.',
    'Les parkings du département 93 font appel à notre expertise pour l\'installation de bornes. Du scellement dans le béton à la fixation mécanique sur enrobé, nous adaptons la méthode de pose au support existant pour garantir une tenue optimale des équipements dans la durée.',
    'Notre équipe réalise l\'installation de bornes de parking dans toute la Seine-Saint-Denis. Bornes anti-stationnement, potelets de protection ou bornes escamotables, nous proposons des solutions adaptées à vos besoins de gestion des accès et de protection de vos espaces réservés.'
  ],
  'pose-butees-parking': [
    'La pose de butées de parking en Seine-Saint-Denis facilite le stationnement et protège vos infrastructures. Notre entreprise installe des butées de roues en caoutchouc, béton ou plastique recyclé, adaptées à chaque configuration pour guider le positionnement des véhicules et protéger murs et équipements.',
    'Spécialistes de l\'installation de butées dans le 93, nous équipons les parkings résidentiels, commerciaux et d\'entreprises. Le choix du matériau et des dimensions dépend de l\'usage et du type de véhicules, nous vous conseillons sur la solution optimale pour votre situation.',
    'Les butées de parking installées en Seine-Saint-Denis préviennent les chocs contre les murs et facilitent l\'alignement des véhicules. Notre entreprise pose des équipements de qualité avec une fixation mécanique garantissant une tenue durable même sous les sollicitations répétées des manœuvres de stationnement.',
    'Notre équipe intervient dans tout le département 93 pour la pose de butées de parking. Des résidences de Noisy-le-Grand aux zones commerciales de Saint-Denis, nous installons des dispositifs adaptés aux contraintes de chaque site avec une fixation professionnelle assurant leur pérennité.',
    'L\'installation de butées en Seine-Saint-Denis optimise l\'utilisation de vos places de parking tout en protégeant vos installations. Notre entreprise propose des modèles jaunes ou noirs, de différentes longueurs, avec des bandes réfléchissantes pour une visibilité optimale de jour comme de nuit.'
  ],
  'marquage-au-sol-porte-de-garage': [
    'Protégez l\'accès à votre garage en Seine-Saint-Denis grâce à notre expertise en marquage au sol. Dans les zones denses du 93, de Saint-Denis à Montreuil, le stationnement sauvage devant les portes de garage est fréquent. Nous réalisons des bandes hachurées jaunes réglementaires dissuadant efficacement le stationnement gênant.',
    'Le marquage au sol devant porte de garage est une solution efficace adoptée par de nombreux résidents de Seine-Saint-Denis. Notre équipe réalise un traçage professionnel aux normes, avec des peintures haute visibilité garantissant une protection durable de votre accès dans les quartiers de Pantin, Aubervilliers ou Bondy.',
    'Spécialistes du marquage devant garage dans le département 93, nous intervenons chez les particuliers et syndics de copropriétés. Le traçage des zones d\'interdiction de stationnement, des lignes de recul et des bandes jaunes est réalisé avec des peintures professionnelles résistantes au trafic urbain intense.',
    'Les rues de Seine-Saint-Denis, souvent saturées de véhicules en stationnement, nécessitent un marquage visible devant les garages. Notre entreprise propose des solutions adaptées aux pavillons de Livry-Gargan comme aux immeubles collectifs de Drancy, avec intervention rapide et devis gratuit sous 24h.',
    'Notre expertise en marquage porte de garage couvre toute la Seine-Saint-Denis. Des zones rénovées de la Plaine Saint-Denis aux quartiers résidentiels d\'Épinay-sur-Seine, nous réalisons des tracés conformes à la réglementation pour protéger efficacement l\'accès à votre stationnement privé.'
  ],
  'marquage-au-sol-portail-coulissant': [
    'Le marquage au sol pour portail coulissant en Seine-Saint-Denis sécurise la zone de débattement de votre installation. Dans les résidences et entreprises du 93, de Noisy-le-Grand au Blanc-Mesnil, nous traçons les bandes hachurées indiquant la zone d\'évolution du portail conformément aux normes NF.',
    'Spécialistes du marquage portail coulissant dans le département 93, nous intervenons auprès des copropriétés, entreprises et particuliers. La délimitation visuelle de la zone de débattement protège le mécanisme et prévient le stationnement gênant l\'ouverture de votre portail automatique.',
    'Les portails coulissants automatiques des résidences de Seine-Saint-Denis nécessitent un marquage au sol réglementaire. Notre équipe réalise le traçage de la zone d\'interdiction de stationnement avec des peintures haute résistance, adaptées au trafic des parkings de Montreuil, Pantin ou Aulnay-sous-Bois.',
    'Notre entreprise de marquage intervient dans tout le 93 pour sécuriser vos portails coulissants. Des zones d\'activités de Garonor aux résidences de standing de Noisy-le-Grand, nous réalisons des tracés conformes aux normes garantissant la protection et le bon fonctionnement de vos équipements.',
    'Le marquage au sol devant portail coulissant en Seine-Saint-Denis combine sécurité et conformité réglementaire. Nous réalisons des bandes hachurées jaunes et noires, signalétique de danger et pictogrammes adaptés pour une visibilité optimale dans les quartiers de Saint-Denis, Aubervilliers ou Sevran.'
  ],
  'marquage-au-sol-portail-battant': [
    'Le marquage au sol pour portail battant en Seine-Saint-Denis délimite l\'aire d\'ouverture des vantaux. Dans les pavillons et résidences du 93, de Bondy à Drancy, nous traçons la zone de débattement avec des arcs de cercle ou bandes hachurées indiquant clairement l\'espace nécessaire à l\'ouverture.',
    'Spécialistes du marquage portail battant dans le département 93, nous sécurisons les accès des particuliers et copropriétés. Le traçage de la zone de balayage des vantaux prévient le stationnement gênant et protège votre portail automatique des chocs lors de l\'ouverture.',
    'Les portails battants à deux vantaux nécessitent un marquage au sol adapté en Seine-Saint-Denis. Notre équipe réalise le traçage de l\'aire de débattement selon les normes, avec des peintures résistantes adaptées aux passages fréquents des véhicules résidents à Pantin, Montreuil ou Livry-Gargan.',
    'Notre entreprise de marquage couvre toute la Seine-Saint-Denis pour vos portails battants. Des zones pavillonnaires d\'Épinay-sur-Seine aux résidences collectives d\'Aubervilliers, nous réalisons des tracés conformes signalant efficacement la zone d\'évolution de vos vantaux de portail.',
    'Le marquage portail battant en Seine-Saint-Denis protège vos équipements et sécurise les usagers. Nous réalisons des arcs de cercle jaunes, bandes de délimitation et pictogrammes réglementaires pour une signalisation optimale dans les quartiers du 93, du Blanc-Mesnil à Noisy-le-Grand.'
  ],
  'marquage-au-sol-barriere-levante': [
    'Le marquage au sol pour barrière levante en Seine-Saint-Denis sécurise les accès de parkings et zones d\'activités. Dans les nombreuses plateformes logistiques du 93 autour de Garonor et du Bourget, nous réalisons le traçage des zones de sécurité, lignes d\'arrêt et bandes de vigilance réglementaires.',
    'Spécialistes du marquage barrière levante dans le département 93, nous intervenons sur les sites professionnels et résidentiels. La délimitation des zones de danger devant les barrières automatiques garantit la sécurité des usagers dans les parkings de Saint-Denis, Pantin ou Aulnay-sous-Bois.',
    'Les parkings équipés de barrières levantes en Seine-Saint-Denis nécessitent un marquage au sol spécifique. Notre équipe réalise le traçage des lignes d\'arrêt, zébras de sécurité et pictogrammes d\'avertissement avec des peintures haute visibilité adaptées aux accès à fort trafic.',
    'Notre entreprise de marquage intervient dans tout le 93 pour sécuriser vos barrières levantes. Des zones logistiques de la Plaine Saint-Denis aux parkings de résidences de Noisy-le-Grand, nous réalisons des tracés conformes aux normes de sécurité des équipements automatiques.',
    'Le marquage au sol devant barrière levante en Seine-Saint-Denis combine sécurité et lisibilité. Nous réalisons le traçage complet incluant ligne d\'arrêt, zone hachurée de danger et signalétique de priorité pour une gestion optimale des flux dans vos parkings d\'entreprises ou de résidences.'
  ]
};

const descriptions: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    'Notre entreprise utilise exclusivement des peintures professionnelles homologuées pour le marquage de parkings en Seine-Saint-Denis. Les interventions peuvent être planifiées de nuit ou le week-end selon vos contraintes d\'exploitation. Devis gratuit sous 24h avec visite technique sur site pour évaluer précisément vos besoins.',
    'L\'expertise de notre équipe couvre tous les types de parkings du département 93 : souterrains, aériens, en structure ou de surface. Nous réalisons le traçage complet des places, allées de circulation, flèches directionnelles et signalisation horizontale avec des produits garantissant une durabilité de 3 à 5 ans.',
    'Le marquage est réalisé avec des traceuses professionnelles de dernière génération pour un rendu net et précis. Nos techniciens sont formés aux normes actuelles et maîtrisent les spécificités des différents supports rencontrés en Seine-Saint-Denis, de l\'enrobé aux dalles de parking en passant par le béton.'
  ],
  'marquage-au-sol-parking-prive': [
    'Votre parking privé en Seine-Saint-Denis bénéficie d\'un marquage entièrement personnalisé selon vos spécifications. Nous intervenons dans les copropriétés et résidences du 93 avec des solutions adaptées incluant numérotation des places, zones visiteurs et emplacements réservés conformes à vos besoins.',
    'Nos prestations de marquage pour parkings privés incluent le traçage précis des places, la délimitation des zones de circulation et la signalisation complète. Chaque projet fait l\'objet d\'une étude préalable pour optimiser la configuration et maximiser le nombre de places dans le respect des normes.',
    'Un parking privé bien marqué valorise votre patrimoine immobilier et facilite la gestion quotidienne du stationnement. Confiez votre projet à notre entreprise pour un résultat professionnel et durable, réalisé avec des peintures haute résistance adaptées au trafic de votre résidence ou copropriété.'
  ],
  'marquage-au-sol-stationnement': [
    'L\'optimisation de vos zones de stationnement en Seine-Saint-Denis permet d\'augmenter significativement la capacité tout en améliorant la fluidité de circulation. Notre étude technique préalable analyse les contraintes de votre site pour proposer une configuration maximisant le nombre de places dans le respect des normes.',
    'Nos solutions de marquage de stationnement s\'adaptent à tous les contextes du département 93 : parkings de surface, aires de stationnement, zones commerciales. Les peintures utilisées sont sélectionnées pour leur résistance au trafic et aux conditions climatiques garantissant une durabilité optimale.',
    'Le traçage respecte scrupuleusement les dimensions réglementaires des places avec intégration obligatoire des emplacements PMR et zones de livraison. Notre expertise permet de concilier capacité maximale et conformité aux normes d\'accessibilité applicables en Seine-Saint-Denis.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Votre parking d\'entreprise en Seine-Saint-Denis est un espace stratégique méritant une attention particulière. Nous proposons des solutions complètes incluant places nominatives pour la direction, zones visiteurs identifiées et signalisation adaptée à votre organisation interne.',
    'Les zones d\'activités du département 93 font régulièrement appel à notre expertise pour le marquage de leurs parkings professionnels. Nous proposons des interventions de nuit ou le week-end pour limiter les perturbations sur votre activité et celle de vos collaborateurs.',
    'Le marquage de votre parking professionnel reflète directement l\'image de votre entreprise. Nous réalisons des finitions soignées avec des peintures haute résistance, et pouvons intégrer votre logo ou codes couleurs pour une personnalisation complète de vos espaces de stationnement.'
  ],
  'marquage-au-sol-entrepôt': [
    'Le marquage d\'entrepôt en Seine-Saint-Denis répond à des normes spécifiques de sécurité que notre entreprise maîtrise parfaitement. Nous connaissons les codes couleurs réglementés et les exigences dimensionnelles pour les allées de circulation des engins de manutention dans les zones logistiques du 93.',
    'Nos interventions en entrepôt couvrent le traçage complet des zones : emplacements de stockage, allées de picking, voies de circulation pour chariots élévateurs et cheminements piétons séparés. Chaque projet est réalisé selon les recommandations INRS pour la prévention des risques professionnels.',
    'La sécurité en entrepôt passe par un marquage au sol clair et durable. Notre entreprise réalise des traçages conformes aux normes avec des peintures époxy haute résistance, adaptées aux passages intensifs des engins de manutention et aux sollicitations du milieu logistique.'
  ],
  'marquage-au-sol-industriel': [
    'Les sites industriels de Seine-Saint-Denis nécessitent des marquages haute résistance que notre entreprise maîtrise. Nous sélectionnons les peintures adaptées aux contraintes spécifiques de chaque environnement : résistance aux produits chimiques, aux huiles, aux températures ou aux sollicitations mécaniques.',
    'Notre expertise industrielle couvre le traçage des zones de danger, allées de circulation, emplacements machines et zones de stockage. Chaque marquage est réalisé selon les codes couleurs normalisés pour garantir une lecture immédiate de l\'organisation spatiale par tous les opérateurs.',
    'Nous intervenons dans tous les secteurs industriels présents en Seine-Saint-Denis : agroalimentaire, chimie, métallurgie, logistique. Nos techniciens adaptent les produits et méthodes aux contraintes spécifiques de chaque activité pour un résultat durable et conforme aux exigences de sécurité.'
  ],
  'marquage-au-sol-usine': [
    'Le marquage au sol d\'usine en Seine-Saint-Denis doit être clair pour optimiser les flux de production. Nous réalisons le traçage des zones de travail, aires de stockage et voies de circulation selon votre organisation industrielle, avec des peintures résistant aux contraintes de votre environnement.',
    'Nos interventions en usine sont planifiées pendant vos périodes d\'arrêt de production pour limiter l\'impact sur votre activité. La préparation du support et l\'application des peintures sont réalisées dans les règles de l\'art pour garantir une adhérence et une durabilité optimales.',
    'Les peintures époxy ou polyuréthane haute performance que nous utilisons résistent aux contraintes industrielles : passages d\'engins, chutes d\'objets, projections de produits. Cette sélection de produits adaptés garantit un marquage durable même dans les environnements les plus exigeants.'
  ],
  'marquage-routier-au-sol': [
    'Le marquage routier sur voiries privées en Seine-Saint-Denis respecte les mêmes exigences que la voie publique. Nous utilisons des produits homologués et des techniques professionnelles pour réaliser des traçages durables conformes aux normes de signalisation horizontale.',
    'Nos prestations de marquage routier incluent le traçage de lignes, passages piétons, flèches directionnelles et cédez-le-passage. L\'application de billes de verre garantit la retroreflexion nocturne indispensable à la sécurité des usagers de vos voiries privées.',
    'Les travaux de marquage routier sont réalisés par des techniciens qualifiés équipés de traceuses professionnelles. Notre expertise couvre tous les types de voiries privées du 93, des accès d\'entreprises aux routes de lotissements en passant par les zones logistiques.'
  ],
  'marquage-garage-automobile': [
    'Le marquage de garage automobile en Seine-Saint-Denis est adapté aux contraintes spécifiques du secteur. Nous utilisons des peintures époxy résistantes aux huiles, solvants et produits de nettoyage, garantissant une durabilité optimale même dans les zones les plus sollicitées de vos ateliers.',
    'Concessions, ateliers mécaniques et carrosseries du département 93 font appel à notre expertise. Nous réalisons le traçage des zones de levage, emplacements de travail et voies de circulation avec des produits sélectionnés pour résister aux agressions chimiques du milieu automobile.',
    'Les sols de garage subissent des contraintes importantes nécessitant des peintures haute performance. Nos solutions époxy ou polyuréthane résistent durablement aux passages de véhicules, aux produits mécaniques et aux nettoyages fréquents caractéristiques des ateliers automobiles.'
  ],
  'marquage-zones-piétonnes': [
    'La séparation des flux piétons et véhicules est essentielle pour la sécurité en Seine-Saint-Denis. Nous réalisons des cheminements clairement délimités avec des peintures antidérapantes conformes aux normes d\'accessibilité, garantissant la sécurité des usagers même par temps humide.',
    'Les zones piétonnes dans les sites industriels et logistiques du 93 sont tracées selon les codes couleurs conformes aux normes. Cette signalisation visuelle immédiate permet d\'identifier les espaces réservés aux piétons et de réduire significativement les risques d\'accident.',
    'Notre marquage piéton protège vos collaborateurs et visiteurs dans tous vos espaces de circulation. Nous intégrons les bandes podotactiles et pictogrammes PMR nécessaires à l\'accessibilité, assurant la conformité de vos installations aux normes en vigueur en Seine-Saint-Denis.'
  ],
  'places-handicapees-pmr': [
    'Les places PMR en Seine-Saint-Denis respectent des dimensions précises : 3,30m de largeur minimum et 5m de longueur avec bande d\'accès latérale. Notre traçage conforme à la réglementation garantit l\'accessibilité effective de vos emplacements pour les personnes à mobilité réduite.',
    'Nous réalisons le marquage complet des places handicapées incluant le pictogramme normalisé au sol, le traçage bleu réglementaire et la signalisation verticale obligatoire. Cette prestation complète assure la conformité totale de vos emplacements PMR dans le département 93.',
    'La création ou la mise en conformité de places handicapées en Seine-Saint-Denis est notre spécialité. Nous analysons votre parking existant, proposons les emplacements optimaux selon la réglementation et réalisons un traçage professionnel avec devis gratuit préalable.'
  ],
  'signalisation-verticale': [
    'La signalisation verticale complète efficacement le marquage au sol pour une orientation optimale dans vos espaces du 93. Nous proposons tous types de panneaux : directionnels, d\'interdiction, d\'obligation et d\'information, fabriqués selon les normes et installés par nos équipes.',
    'L\'installation est réalisée par nos équipes qualifiées avec des fixations adaptées à chaque type de support. Nous respectons les hauteurs réglementaires et les distances de visibilité pour garantir l\'efficacité de votre signalétique dans vos parkings et voiries de Seine-Saint-Denis.',
    'Un parking bien signalé améliore significativement l\'expérience des usagers et réduit les incidents de circulation. Nos solutions sur mesure intègrent votre charte graphique tout en respectant les normes de lisibilité applicables dans le département 93.'
  ],
  'pose-ralentisseur': [
    'Les ralentisseurs installés en Seine-Saint-Denis sont essentiels pour sécuriser les zones à vitesse limitée. Nous fournissons et posons des équipements homologués adaptés au type de trafic, avec les dimensions réglementaires garantissant une réduction de vitesse efficace sans agressivité.',
    'Notre expertise couvre tous les types de dispositifs : coussins berlinois pour le passage des bus, dos d\'âne classiques et plateaux ralentisseurs. Nous vous conseillons sur le dispositif optimal en fonction de votre configuration et du trafic de votre site dans le 93.',
    'La pose est réalisée dans les règles de l\'art avec la signalisation horizontale et verticale réglementaire associée. Cette installation complète garantit la conformité de vos équipements aux normes en vigueur et la sécurité des usagers de vos voiries en Seine-Saint-Denis.'
  ],
  'installation-panneaux-parking': [
    'Une signalétique claire facilite la circulation et réduit les incidents dans vos parkings de Seine-Saint-Denis. Nous concevons et installons des panneaux directionnels, des indications de niveaux et des informations pratiques pour une orientation intuitive des usagers.',
    'Les panneaux sont réalisés sur mesure selon vos spécifications. Notre service inclut la conception graphique, la fabrication en matériaux durables et l\'installation complète dans vos parkings souterrains ou de surface du département 93.',
    'Nous pouvons intégrer votre charte graphique et logo dans la conception des supports pour une cohérence visuelle avec votre identité. Cette personnalisation améliore l\'expérience usager tout en renforçant votre image de marque.'
  ],
  'pose-miroir-circulation': [
    'Les miroirs de sécurité installés en Seine-Saint-Denis permettent de voir les angles morts dans vos parkings et zones de manœuvre. Nous proposons des équipements adaptés à chaque configuration, convexes ou hémisphériques selon la zone à couvrir et la distance de vision nécessaire.',
    'Notre gamme complète de miroirs répond à tous les besoins du département 93. Des modèles intérieurs pour parkings souterrains aux miroirs extérieurs résistant aux intempéries, nous sélectionnons l\'équipement optimal pour chaque situation.',
    'L\'emplacement du miroir est déterminé précisément pour une efficacité maximale. Notre installation professionnelle garantit une orientation optimale et une fixation durable permettant de visualiser efficacement les zones dangereuses.'
  ],
  'installation-bornes-parking': [
    'Les bornes de parking en Seine-Saint-Denis protègent vos places réservées et contrôlent les accès. Nous installons des équipements fixes robustes, des bornes amovibles avec clé ou cadenas, et des systèmes rétractables pour une gestion flexible de vos espaces de stationnement.',
    'La protection des places direction, accès pompiers et zones privatives est assurée par des bornes sélectionnées pour leur robustesse. Notre installation en Seine-Saint-Denis s\'adapte à tous les supports avec des fixations garantissant une tenue optimale face aux sollicitations.',
    'Le scellement dans le béton ou la fixation mécanique sur enrobé sont réalisés selon les règles de l\'art. Nos finitions soignées garantissent un résultat esthétique et fonctionnel pour vos bornes de parking dans tout le département 93.'
  ],
  'pose-butees-parking': [
    'Les butées de parking facilitent le positionnement des véhicules et protègent vos murs et équipements en Seine-Saint-Denis. Nous installons des modèles adaptés à chaque usage : caoutchouc souple pour limiter les chocs, béton pour les zones à fort trafic ou plastique recyclé pour une solution économique.',
    'Le choix du matériau et des dimensions dépend de l\'usage prévu et du type de véhicules stationnant sur votre parking du 93. Nous vous conseillons sur la solution optimale en fonction de votre configuration et de vos contraintes.',
    'La fixation mécanique que nous réalisons garantit une tenue optimale des butées même sous les sollicitations répétées des manœuvres de stationnement. Notre installation rapide et propre limite les perturbations sur votre parking en Seine-Saint-Denis.'
  ],
  'marquage-au-sol-porte-de-garage': [
    'Le marquage devant porte de garage en Seine-Saint-Denis est réalisé avec des peintures routières homologuées. Les bandes jaunes réglementaires respectent les dimensions et espacements prescrits par le code de la route pour une validité juridique optimale de votre signalisation.',
    'Notre intervention pour le marquage de garage dans le 93 comprend la préparation du support, le traçage précis et l\'application de peinture haute résistance. Le séchage rapide permet une remise en service de la zone sous 2 heures.',
    'Un marquage professionnel devant votre garage en Seine-Saint-Denis dissuade efficacement le stationnement gênant. Nos peintures résistent aux intempéries et au trafic urbain intense, garantissant une visibilité durable de votre signalisation.'
  ],
  'marquage-au-sol-portail-coulissant': [
    'Le marquage pour portail coulissant en Seine-Saint-Denis respecte les normes NF relatives aux équipements automatiques. Nous réalisons le traçage de la zone de débattement avec des bandes hachurées conformes, incluant la signalétique de danger obligatoire.',
    'Notre expertise en marquage portail coulissant dans le 93 garantit la conformité de votre installation. Les peintures utilisées résistent aux passages répétés des véhicules et aux conditions climatiques pour une durabilité optimale du traçage.',
    'La sécurisation de votre portail coulissant passe par un marquage professionnel en Seine-Saint-Denis. Nous réalisons le traçage complet de la zone d\'évolution avec intervention rapide et devis gratuit sous 24h.'
  ],
  'marquage-au-sol-portail-battant': [
    'Le marquage pour portail battant en Seine-Saint-Denis délimite précisément l\'aire de balayage des vantaux. Nous réalisons des arcs de cercle ou bandes hachurées selon la configuration, avec des peintures haute visibilité adaptées à l\'usage résidentiel.',
    'Notre équipe de marquage portail battant dans le 93 maîtrise les spécificités des différentes configurations. Le traçage respecte les dimensions exactes de débattement pour une protection optimale de votre équipement automatique.',
    'La signalisation de votre portail battant en Seine-Saint-Denis protège votre installation et sécurise les usagers. Nos interventions sont réalisées avec des peintures professionnelles garantissant une tenue de 3 à 5 ans.'
  ],
  'marquage-au-sol-barriere-levante': [
    'Le marquage pour barrière levante en Seine-Saint-Denis répond aux normes de sécurité des équipements automatiques. Nous réalisons le traçage des lignes d\'arrêt, zones hachurées et pictogrammes d\'avertissement avec des peintures haute visibilité.',
    'Notre expertise en marquage barrière levante dans le 93 garantit la conformité de vos accès. Les zones de danger sont clairement délimitées avec des couleurs normalisées pour une lecture immédiate par les usagers.',
    'La sécurisation de votre barrière levante passe par un marquage professionnel en Seine-Saint-Denis. Nous intervenons sur tous types de parkings avec des solutions adaptées au volume de trafic de votre installation.'
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
    metaTitle: `${serviceName} a ${city.name} (93) | Devis Gratuit`,
    metaDescription: `${serviceName} a ${city.name} en Seine-Saint-Denis. Entreprise spécialisée, intervention rapide. Devis gratuit sous 24h.`,
    content: {
      introduction: intro,
      localContext: city.context,
      serviceDescription: desc
    },
    faqs: [
      {
        question: `Quel est le délai d'intervention a ${city.name} ?`,
        answer: `Nous intervenons sous 24 a 48h a ${city.name} (93). La visite technique et le devis sont gratuits.`
      },
      {
        question: `Intervenez-vous dans les quartiers de ${city.name} ?`,
        answer: `Oui, nous couvrons tous les quartiers de ${city.name} : ${city.zones.join(', ')} et alentours.`
      },
      {
        question: `Quelles garanties proposez-vous a ${city.name} ?`,
        answer: `Tous nos travaux a ${city.name} sont garantis 5 ans minimum. Peintures professionnelles haute résistance.`
      }
    ]
  };
}

export const seineSaintDenisVariations: ServiceLocationContent[] = [];

cities.forEach((city, cityIndex) => {
  services.forEach((serviceSlug, serviceIndex) => {
    seineSaintDenisVariations.push(generateVariation(city, serviceSlug, cityIndex + serviceIndex));
  });
});
