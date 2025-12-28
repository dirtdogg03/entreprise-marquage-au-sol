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
    slug: 'creteil',
    name: 'Créteil',
    context: 'Préfecture du Val-de-Marne, Créteil accueille l\'université Paris-Est et le centre commercial régional. Les parkings du Créteil Soleil, les zones tertiaires et les résidences génèrent une demande constante en marquage professionnel.',
    zones: ['Créteil Soleil', 'L\'Echat', 'Préfecture', 'Université', 'Mont-Mesly']
  },
  {
    slug: 'vitry-sur-seine',
    name: 'Vitry-sur-Seine',
    context: 'Vitry-sur-Seine est la commune la plus peuplée du Val-de-Marne. Les zones industrielles des bords de Seine, les nouveaux quartiers et les résidences nécessitent des prestations de marquage régulières.',
    zones: ['Gare', 'Port a l\'Anglais', 'Plateau', 'Paul Froment', 'Mairie']
  },
  {
    slug: 'champigny-sur-marne',
    name: 'Champigny-sur-Marne',
    context: 'Champigny-sur-Marne dispose de zones d\'activités dynamiques le long de la Marne. Les parkings commerciaux, les entreprises et les résidences font appel a notre expertise en marquage au sol.',
    zones: ['Centre', 'Plant', 'Coeuilly', 'Bois l\'Abbe', 'Mordacs']
  },
  {
    slug: 'saint-maur-des-fosses',
    name: 'Saint-Maur-des-Fosses',
    context: 'Saint-Maur-des-Fosses est une commune résidentielle prisée. Les parkings de résidences de standing, les copropriétés et les commerces de quartier requièrent un marquage soigné et professionnel.',
    zones: ['La Varenne', 'Adamville', 'Créteil', 'Parc', 'Le Parc']
  },
  {
    slug: 'ivry-sur-seine',
    name: 'Ivry-sur-Seine',
    context: 'Ivry-sur-Seine combine industries traditionnelles et nouveaux quartiers. Les zones logistiques, les entreprises innovantes et les programmes immobiliers constituent un marché diversifié pour le marquage.',
    zones: ['Mairie', 'Pierre et Marie Curie', 'Confluence', 'Moulin', 'Ivry Port']
  },
  {
    slug: 'maisons-alfort',
    name: 'Maisons-Alfort',
    context: 'Maisons-Alfort accueille l\'École Vétérinaire et de nombreuses entreprises. Les parkings d\'établissements, les résidences et les zones commerciales font appel a nos services de traçage.',
    zones: ['École Vétérinaire', 'Stade', 'Charentonneau', 'Centre', 'Alfortville']
  },
  {
    slug: 'fontenay-sous-bois',
    name: 'Fontenay-sous-Bois',
    context: 'Fontenay-sous-Bois est desservie par le RER A et bénéficie d\'un renouveau urbain. Les parkings des centres commerciaux, les résidences et les équipements publics nécessitent un marquage conforme.',
    zones: ['Val de Fontenay', 'Rigollots', 'Centre', 'Alouettes', 'Redoute']
  },
  {
    slug: 'villejuif',
    name: 'Villejuif',
    context: 'Villejuif accueille l\'Institut Gustave Roussy et de nombreux établissements de sante. Les parkings hospitaliers, les résidences et les commerces demandent un marquage professionnel et adapté.',
    zones: ['Louis Aragon', 'Paul Vaillant-Couturier', 'Leo Lagrange', 'IGR', 'Centre']
  },
  {
    slug: 'vincennes',
    name: 'Vincennes',
    context: 'Vincennes bénéficie de la proximité du Bois et du Chateau. Les parkings residentiels haut de gamme, les commerces et les équipements culturels exigent un marquage de qualité.',
    zones: ['Chateau', 'Centre', 'Daumesnil', 'Montreuil', 'Saint-Mande']
  },
  {
    slug: 'alfortville',
    name: 'Alfortville',
    context: 'Alfortville développe de nouveaux quartiers le long de la Seine. Les résidences modernes, les zones commerciales et les parkings d\'entreprises constituent notre clientèle dans cette ville.',
    zones: ['Confluent', 'Ecoles', 'Mairie', 'Port', 'Chantereine']
  },
  {
    slug: 'choisy-le-roi',
    name: 'Choisy-le-Roi',
    context: 'Choisy-le-Roi connaît une rénovation importante avec l\'arrivee du Grand Paris Express. Les nouveaux programmes, les zones d\'activités et les équipements publics génèrent des besoins en marquage.',
    zones: ['Gondoles', 'Navigateurs', 'Centre', 'Lugo', 'Les Hautes Bornes']
  },
  {
    slug: 'nogent-sur-marne',
    name: 'Nogent-sur-Marne',
    context: 'Nogent-sur-Marne est une commune résidentielle des bords de Marne. Les parkings de copropriétés, les guinguettes et les commerces font appel a notre expertise pour un marquage de qualité.',
    zones: ['Centre', 'Baltard', 'Beaute', 'Port', 'Marne']
  }
];

const intros: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    'Specialistes du marquage parking dans le Val-de-Marne (94), notre entreprise intervient sur l\'ensemble du département, de Créteil a Vincennes en passant par les zones d\'activités autour de Rungis et Orly. Nous maitrisons les contraintes spécifiques des parkings souterrains comme aeriens, avec des peintures haute résistance adaptées au trafic intense des zones commerciales val-de-marnaises.',
    'Le Val-de-Marne concentre une forte densite de parkings professionnels et residentiels que nous marquons quotidiennement. Des centres commerciaux de Créteil Soleil aux parkings d\'entreprises de Vitry-sur-Seine et Ivry-sur-Seine, notre expertise couvre tous les besoins. Nos équipes interviennent de nuit où le week-end pour minimiser la gene sur vos activités.',
    'Implantes dans le 94, nous connaissons parfaitement le tissu économique local : zones logistiques proches de Rungis, parcs d\'activités d\'Orly, quartiers d\'affaires de Créteil. Cette connaissance du terrain nous permet d\'adapter nos interventions aux spécificités de chaque site et de proposer des solutions de marquage parking optimales pour les professionnels val-de-marnais.',
    'Notre entreprise de marquage au sol accompagne les gestionnaires de parkings du Val-de-Marne depuis de nombreuses annees. Que vous geriez un parking de centre commercial, une copropriété a Saint-Maur-des-Fosses ou un parc de stationnement d\'entreprise près d\'Orly, nous apportons une reponse technique adaptée avec des materiaux professionnels durables.',
    'Le département du Val-de-Marne presente des enjeux spécifiques en matiere de stationnement : forte densite urbaine, proximité de grandes infrastructures comme Orly et le MIN de Rungis, nombreux hôpitaux. Notre expertise en marquage parking répond a ces contraintes particulieres avec des prestations sur mesure et une réactivité exemplaire sur tout le 94.'
  ],
  'marquage-au-sol-parking-prive': [
    'Les parkings prives du Val-de-Marne meritent un marquage professionnel à la hauteur des attentes des résidents et proprietaires. De Vincennes a Champigny-sur-Marne, nous intervenons dans les copropriétés, résidences de standing et parkings d\'immeubles pour réaliser un traçage précis et durable. Nos peintures resistantes garantissent une lisibilite parfaite pendant plusieurs annees.',
    'Proprietaires et syndics du 94 nous font confiance pour le marquage de leurs parkings prives. Nous comprenons les contraintes des copropriétés val-de-marnaises : interventions en horaires decales, respect du voisinage, coordination avec les résidents. De Maisons-Alfort a Fontenay-sous-Bois, chaque projet bénéficie d\'un accompagnement personnalisé.',
    'Votre parking prive dans le Val-de-Marne nécessite un traçage adapté a son usage spécifique. Que vous soyez a Villejuif, Alfortville ou Nogent-sur-Marne, nous etudions la configuration de votre espace pour optimiser le nombre de places tout en respectant les normes PMR. Un devis detaille vous est remis sous 24 heures après visite technique.',
    'Dans un département aussi dense que le Val-de-Marne, chaque place de parking compte. Notre expertise en marquage de parkings prives permet d\'optimiser l\'espace disponible dans les résidences de Saint-Maur-des-Fosses comme dans les copropriétés de Créteil. Nous utilisons des peintures professionnelles garantissant une tenue optimale même sous fort trafic.',
    'Le marquage de votre parking prive dans le 94 est réalise avec le même niveau d\'exigence que pour nos clients professionnels. Places numerotees, zones visiteurs, emplacements deux-roues : nous concevons un plan de marquage complet adapté à vos besoins. Intervention possible de nuit pour ne pas perturber les résidents de votre copropriété val-de-marnaise.'
  ],
  'marquage-au-sol-stationnement': [
    'L\'optimisation des zones de stationnement représente un enjeu majeur dans le Val-de-Marne, département particulierement dense. De Créteil a Vitry-sur-Seine, nous aidons les collectivités, entreprises et copropriétés a maximiser leur capacité de stationnement. Notre expertise technique permet de gagner jusqu\'a 15% de places supplementaires grâce à un traçage optimise.',
    'Le traçage de vos places de stationnement dans le 94 respecte scrupuleusement les normes en vigueur tout en s\'adaptant aux contraintes locales. Pres d\'Orly comme aux abords de Rungis, nous maitrisons les reglementations spécifiques aux zones d\'activités. Chaque projet fait l\'objet d\'une étude prealable pour garantir un resultat optimal.',
    'Maximisez la capacité de vos stationnements val-de-marnais grâce à notre expertise en traçage. Les parkings de centres commerciaux, les zones de stationnement d\'entreprises et les aires de livraison nécessitent un marquage reflechi. Nous intervenons sur tout le département, de Champigny-sur-Marne a Choisy-le-Roi, avec des solutions adaptées à chaque contexte.',
    'Nos solutions de marquage s\'adaptent a tous les contextes du Val-de-Marne : parkings de surface, stationnements souterrains, aires de covoiturage près des gares RER. La densite du 94 impose une gestion optimale de l\'espace que nous facilitons par un traçage professionnel. Devis gratuit et intervention rapide sur Ivry-sur-Seine, Maisons-Alfort et environs.',
    'Un stationnement bien marque facilite la gestion quotidienne et reduit les conflits d\'usage. Dans le Val-de-Marne, où la pression fonciere est forte, chaque metre carre compte. Notre expertise permet d\'organiser efficacement vos zones de stationnement, qu\'il s\'agisse d\'un parking d\'entreprise a Villejuif ou d\'une résidence a Fontenay-sous-Bois.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Les entreprises du Val-de-Marne nous confient le marquage de leurs parkings pour bénéficier d\'un resultat professionnel et durable. Zones d\'activités de Rungis, parcs tertiaires de Créteil, sites industriels d\'Ivry-sur-Seine : nous intervenons sur tous types d\'infrastructures. Places nominatives, zones visiteurs, emplacements direction : chaque detail est soigné.',
    'Nous accompagnons les professionnels du 94 dans l\'aménagement complet de leurs parkings d\'entreprise. De la conception du plan de marquage à la réalisation, notre équipe prend en charge l\'integralite du projet. Les entreprises situees près d\'Orly ou dans les zones d\'activités de Vitry-sur-Seine apprecient notre réactivité et la qualité de nos finitions.',
    'Votre parking d\'entreprise dans le Val-de-Marne merite un marquage a l\'image de votre societe. Nous realisons des prestations haut de gamme pour les sieges sociaux de Vincennes, les sites logistiques de Rungis où les centres de recherche de Villejuif. Peintures durables, pictogrammes soignes, signalisation complète : rien n\'est laisse au hasard.',
    'Les parcs d\'activités du Val-de-Marne bénéficient de solutions de marquage complètes adaptées aux contraintes professionnelles. Nous intervenons de nuit où le week-end pour ne pas perturber votre activité. Des zones industrielles de Champigny-sur-Marne aux quartiers tertiaires d\'Alfortville, chaque projet est réalise dans les regles de l\'art.',
    'Le marquage professionnel de votre parking d\'entreprise dans le 94 reflete votre serieux et votre souci du detail. Nous travaillons avec les gestionnaires de parcs d\'activités, les directeurs de sites industriels et les responsables de flottes. Intervention possible sur l\'ensemble du Val-de-Marne avec devis gratuit sous 24 heures.'
  ],
  'marquage-au-sol-entrepôt': [
    'Les entrepôts du Val-de-Marne, notamment ceux proches du MIN de Rungis et de la zone d\'Orly, nécessitent un marquage conforme aux normes de sécurité les plus strictes. Nous maitrisons parfaitement les exigences INRS en matiere de codes couleurs, délimitation des zones de stockage et circulation des engins. Nos peintures epoxy resistent aux contraintes logistiques intensives.',
    'Le secteur logistique du 94 fait appel a notre expertise pour le traçage de zones d\'entrepôts. Plateformes de Rungis, centres de distribution d\'Orly, entrepôts de Vitry-sur-Seine : nous intervenons sur des surfaces importantes avec des équipements professionnels. Nos marquages au sol optimisent les flux de marchandises et securisent les circulations.',
    'Optimisez les flux de votre entrepôt val-de-marnais avec un marquage professionnel adapté à vos activités. Zones de picking, emplacements palettes, voies de circulation chariots : chaque element est tracé avec précision. Notre connaissance des sites logistiques autour de Rungis et Orly nous permet d\'anticiper vos besoins spécifiques.',
    'Notre expertise couvre tous les besoins de marquage en entrepôt dans le Val-de-Marne. Des codes couleurs normalises aux pictogrammes de sécurité, nous realisons un traçage complet conforme aux recommandations INRS. Les gestionnaires d\'entrepôts de Champigny-sur-Marne, Ivry-sur-Seine et Créteil nous font confiance depuis des annees.',
    'Le marquage de votre entrepôt dans le 94 s\'adapté à vos contraintes d\'activité spécifiques. Intervention de nuit, travaux par zones pour maintenir votre exploitation, peintures sechage rapide : nous trouvons toujours une solution. entrepôts frigorifiques, plateformes e-commerce, centres logistiques près de Rungis bénéficient de notre savoir-faire.'
  ],
  'marquage-au-sol-industriel': [
    'Le secteur industriel du Val-de-Marne fait appel a notre expertise pour des marquages haute résistance. Les sites de production de Vitry-sur-Seine, Ivry-sur-Seine et Champigny-sur-Marne nécessitent des peintures capables de resister aux passages d\'engins, aux produits chimiques et aux contraintes mecaniques. Nous selectionnons les produits adaptés à chaque environnement.',
    'Nous intervenons sur les sites industriels du 94 pour tous types de tracages au sol. délimitation des zones de travail, marquage des allees de circulation, signalisation des dangers : notre équipe maîtrise les normes spécifiques au milieu industriel. Les usines val-de-marnaises bénéficient d\'un accompagnement technique personnalisé.',
    'Le marquage haute résistance pour vos installations industrielles du Val-de-Marne répond aux exigences les plus strictes. Nous utilisons des peintures epoxy ou polyurethane selon les contraintes de votre site. Zones de production, ateliers, aires de stockage extérieures : chaque surface recoit le traitement approprie pour une durabilité maximale.',
    'Securisez vos zones de production dans le 94 avec un marquage industriel professionnel. La réglementation impose des delimitations claires entre espaces de travail, voies de circulation et zones de stockage. Notre expertise permet aux industriels val-de-marnais de se mettre en conformité tout en optimisant leurs flux de production.',
    'Les solutions de marquage adaptées au milieu industriel du Val-de-Marne tiennent compte des spécificités de chaque secteur. Agroalimentaire a Rungis, chimie a Ivry-sur-Seine, metallurgie a Vitry-sur-Seine : nous adaptons nos produits et techniques aux contraintes de votre activité. Intervention possible pendant les arrêts de production.'
  ],
  'marquage-au-sol-usine': [
    'Les usines du Val-de-Marne bénéficient de notre savoir-faire en marquage industriel depuis de nombreuses annees. Sites de production de Champigny-sur-Marne, usines de Vitry-sur-Seine, ateliers d\'Ivry-sur-Seine : nous intervenons sur tous types d\'installations. Notre expertise garantit un traçage conforme aux normes de sécurité les plus exigeantes.',
    'Nous aménageons vos zones de production val-de-marnaises avec précision et methode. Le marquage d\'une usine nécessite une planification rigoureuse pour minimiser l\'impact sur votre activité. Nos équipes interviennent de nuit, le week-end ou pendant vos arrêts de maintenance pour réaliser les travaux sans perturber votre production.',
    'Le marquage en usine répond à des exigences spécifiques que nous maitrisons parfaitement dans le Val-de-Marne. délimitation des postes de travail, zones de stockage, voies de circulation des chariots : chaque element contribue à la sécurité et a l\'efficacite de votre site. Nos peintures industrielles resistent aux sollicitations les plus intenses.',
    'Optimisez les flux de votre usine du 94 avec un traçage structure et reflechi. Nous realisons une étude prealable de vos circulations pour proposer un plan de marquage coherent. Les industriels de Maisons-Alfort, Alfortville et Choisy-le-Roi apprecient notre approche méthodique et notre respect des délais d\'intervention.',
    'L\'intervention en usine pendant vos periodes d\'arrêt est notre specialite dans le Val-de-Marne. Nous coordonnons nos travaux avec vos équipes de maintenance pour profiter des fenêtres de disponibilité. arrêts techniques, conges d\'ete, week-ends prolonges : nous nous adaptons à votre planning pour un resultat optimal sans impact sur votre production.'
  ],
  'marquage-routier-au-sol': [
    'Nous realisons le marquage routier sur voiries privées dans tout le Val-de-Marne avec les mêmes exigences de qualité que pour la voirie publique. Voies d\'accès aux sites industriels de Rungis, routes privées des zones d\'Orly, allees de résidences a Saint-Maur-des-Fosses : nos tracages respectent les normes NF en vigueur pour une sécurité optimale.',
    'Le traçage de lignes et la signalisation horizontale dans le 94 font partie de notre coeur de metier. Lignes de rive, passages piétons, flèches directionnelles, logos : nous maitrisons toutes les techniques de marquage routier. Nos peintures routieres homologuees integrent des billes de verre pour une retroreflexion conforme aux normes.',
    'Nos travaux de marquage routier dans le Val-de-Marne respectent scrupuleusement les normes en vigueur. Que vous geriez une voirie de zone industrielle a Vitry-sur-Seine ou un parking de grande surface a Créteil, nous appliquons les mêmes standards de qualité. Tracages durables et conformes pour une signalisation efficace.',
    'Le marquage durable pour voiries et accès prives du Val-de-Marne nécessite des produits adaptés au trafic poids lourds. Pres de Rungis et Orly, les voiries supportent des flux importants de véhicules. Nous selectionnons des peintures haute résistance et appliquons des epaisseurs conformes pour garantir une tenue dans le temps.',
    'Nos équipements homologues garantissent un resultat professionnel pour le marquage routier dans le 94. Traceuses automotrices, pistolets airless, peintures certifiees : nous investissons dans du materiel de qualité pour des prestations irremprochables. Les gestionnaires de voiries privées val-de-marnais apprecient notre rigueur technique.'
  ],
  'marquage-garage-automobile': [
    'Les garages automobiles du Val-de-Marne font appel a notre expertise pour un marquage adapté a leurs contraintes spécifiques. Concessions de Créteil, ateliers mecaniques de Champigny-sur-Marne, carrosseries d\'Ivry-sur-Seine : nous utilisons des peintures epoxy resistantes aux huiles, solvants et passages repetes de véhicules.',
    'Nous traceons les zones de travail de vos ateliers automobiles dans le 94 avec des produits haute performance. Emplacements de levage, zones de stockage pieces, circulations clients : chaque espace est delimite clairement. Les professionnels de l\'automobile val-de-marnais apprecient la durabilité de nos marquages face aux contraintes du metier.',
    'Le marquage adapté aux concessions et garages du Val-de-Marne répond à des exigences esthetiques et fonctionnelles. Halls d\'exposition de Vincennes, ateliers de Villejuif, centres techniques de Maisons-Alfort : nous realisons des tracages précis qui optimisent l\'organisation de vos espaces tout en valorisant votre image de marque.',
    'Optimisez l\'espace de votre atelier automobile dans le 94 grâce à un marquage professionnel reflechi. Nous etudions vos flux de véhicules et vos besoins spécifiques pour proposer un plan d\'aménagement coherent. Les garagistes de Fontenay-sous-Bois, Nogent-sur-Marne et Alfortville nous font confiance pour leurs travaux de traçage.',
    'Les solutions de marquage resistantes au trafic automobile sont notre specialite dans le Val-de-Marne. Peintures epoxy bi-composants, resines polyurethane : nous selectionnons les produits les mieux adaptés à votre activité. Votre garage bénéficie d\'un marquage durable malgre les passages repetes de véhicules et l\'exposition aux produits automobiles.'
  ],
  'marquage-zones-piétonnes': [
    'La sécurité des piétons dans le Val-de-Marne constitue une priorite absolue de nos interventions. Zones industrielles de Rungis, sites logistiques d\'Orly, entreprises de Vitry-sur-Seine : nous delimitons clairement les cheminements piétons pour proteger vos collaborateurs et visiteurs. Nos marquages respectent les codes couleurs imposes par la réglementation.',
    'Nous delimitons clairement vos circulations piétonnes dans le 94 pour garantir la cohabitation sécurisée avec les véhicules et engins. entrepôts, parkings, sites industriels : chaque configuration nécessite une étude spécifique. Les entreprises val-de-marnaises apprecient notre expertise en matiere de sécurité au sol.',
    'Le marquage des passages et allees sécurisées dans le Val-de-Marne protège efficacement les usagers de vos installations. Nous utilisons des peintures antiderapantes et des couleurs contrastees pour une visibilité optimale. Sites de production, centres commerciaux, parkings d\'entreprises : chaque projet bénéficie d\'une attention particuliere.',
    'Protegez vos collaborateurs et visiteurs dans vos locaux du 94 avec un marquage de zones piétonnes conforme aux normes. La cohabitation piétons-véhicules représente un risque majeur en entreprise. Notre expertise permet de sécuriser efficacement les circulations dans vos entrepôts, usines et parkings val-de-marnais.',
    'Les solutions antiderapantes pour zones piétonnes sont disponibles dans tout le Val-de-Marne. Nous appliquons des revetements spécifiques dans les zones a risque : sorties de batiments, traversees de voies de circulation, escaliers extérieurs. Nos produits offrent une adherence optimale même par temps humide pour sécuriser vos installations.'
  ],
  'places-handicapees-pmr': [
    'Nous realisons les places PMR conformes à la réglementation dans tout le Val-de-Marne. Commerces de Créteil, entreprises de Vitry-sur-Seine, copropriétés de Saint-Maur-des-Fosses : chaque établissement recevant du public doit disposer de places handicapees aux normes. Nos tracages respectent les dimensions imposees et integrent pictogrammes et signalisation verticale.',
    'La mise en accessibilite de vos parkings dans le 94 constitue une obligation légale que nous vous aidons a respecter. Places de 3,30 m x 5 m minimum, bande de circulation laterale, pictogramme au sol, panneau vertical : nous realisons des aménagements complets. Les ERP val-de-marnais font appel a notre expertise pour leur mise en conformité.',
    'Les places aux dimensions et marquages réglementaires sont notre specialite dans le Val-de-Marne. La legislation impose des caracteristiques précises que nous maitrisons parfaitement. Parkings de supermarches, établissements de sante comme l\'hôpital Henri Mondor, administrations de Créteil : nous intervenons sur tous types d\'équipements.',
    'Notre expertise en places PMR garantit la conformité de vos installations val-de-marnaises. Au-dela du simple traçage, nous vous conseillons sur le nombre de places obligatoires, leur positionnement optimal et la signalisation associee. Les gestionnaires de parkings du 94 apprecient notre accompagnement technique complet.',
    'Le traçage de places handicapees avec pictogrammes normalises dans le Val-de-Marne répond aux exigences d\'accessibilite. Nous utilisons des pochoirs homologues pour les symboles au sol et pouvons fournir la signalisation verticale associee. Mise en conformité ou création de nouvelles places : devis gratuit sous 24 heures.'
  ],
  'signalisation-verticale': [
    'Nous installons la signalisation verticale complète pour vos parkings du Val-de-Marne. Panneaux directionnels, indications de niveau, flèches de sens unique : votre parking de Créteil, Vincennes ou Champigny-sur-Marne bénéficie d\'une signaletique coherente. Nous assurons la fourniture et la pose de tous les elements nécessaires.',
    'Les panneaux et équipements de signalisation pour le 94 sont selectionnes pour leur qualité et leur durabilité. Nous travaillons avec des fournisseurs reconnus pour proposer des produits conformes aux normes. Les gestionnaires de parkings val-de-marnais apprecient notre capacité a fournir des solutions complètes.',
    'Nos solutions complètes de signaletique verticale s\'adaptent a tous les contextes du Val-de-Marne. Parkings de bureaux a Villejuif, centres commerciaux a Créteil Soleil, résidences a Saint-Maur-des-Fosses : chaque projet fait l\'objet d\'une étude pour determiner les panneaux nécessaires et leur positionnement optimal.',
    'L\'installation professionnelle de panneaux de signalisation dans le 94 garantit la sécurité et l\'efficacite de votre parking. Fixations adaptées au support, hauteur réglementaire, visibilité optimale : nous maitrisons tous les aspects techniques. Intervention sur l\'ensemble du Val-de-Marne avec devis gratuit.',
    'La signalisation verticale adaptée à vos besoins permet d\'orienter efficacement les usagers de vos parkings val-de-marnais. Nous concevons des plans de signaletique coherents integrant panneaux directionnels, informations tarifaires et pictogrammes réglementaires. Les parkings bien signalés reduisent les conflits et ameliorent la satisfaction des utilisateurs.'
  ],
  'pose-ralentisseur': [
    'Nous installons des ralentisseurs homologues dans le Val-de-Marne pour sécuriser vos zones de circulation. accès aux entreprises de Rungis, voiries de zones industrielles d\'Orly, parkings de résidences a Maisons-Alfort : chaque dispositif est choisi en fonction du contexte et installe dans les regles de l\'art.',
    'Securisez vos zones de passage dans le 94 avec des ralentisseurs adaptés au trafic. Coussins berlinois, dos d\'ane, plateaux sureleves : nous vous conseillons sur le dispositif le plus approprie à votre situation. Les gestionnaires de voiries privées val-de-marnais apprecient notre expertise technique.',
    'Les coussins berlinois et dos d\'ane installes dans le Val-de-Marne respectent les normes en vigueur pour une efficacite optimale. Dimensions, signalisation associee, materiaux : chaque element est conforme aux specifications techniques. Nous intervenons sur tous les types de voiries privées du 94.',
    'La pose de ralentisseurs pour parkings et voies d\'accès dans le Val-de-Marne reduit les vitesses et securise les circulations. Zones piétonnes, abords d\'ecoles, entrées de résidences : les ralentisseurs constituent une solution efficace. Nous assurons la fourniture et la pose avec la signalisation réglementaire.',
    'Les dispositifs de reduction de vitesse que nous installons dans le 94 sont homologues et certifies. Caoutchouc recycle, beton, plastique haute densite : nous proposons différents materiaux selon vos contraintes. L\'installation inclut le marquage au sol et la signalisation verticale réglementaires.'
  ],
  'installation-panneaux-parking': [
    'Nous equipons vos parkings du Val-de-Marne d\'une signaletique complète et coherente. Panneaux directionnels, indications de places disponibles, informations tarifaires : chaque element contribue a l\'experience usager. Les parkings de Créteil, Vincennes et Champigny-sur-Marne bénéficient de notre expertise en signaletique.',
    'Les panneaux directionnels pour parkings du 94 guident efficacement les automobilistes vers les places disponibles. Nous concevons des parcours signaletiques logiques qui reduisent le temps de recherche et les conflits. Centres commerciaux, parkings d\'entreprises, résidences : chaque configuration fait l\'objet d\'une étude spécifique.',
    'L\'installation de panneaux adaptée à vos besoins prend en compte la configuration spécifique de votre parking val-de-marnais. Niveaux multiples, zones differenciees, places réservées : la signaletique doit être claire et intuitive. Nous realisons des plans d\'implantation detailles avant chaque intervention.',
    'Optimisez l\'orientation dans votre parking du 94 avec une signaletique professionnelle. Les usagers trouvent plus facilement leur place et leur véhicule, reduisant stress et perte de temps. Nous intervenons sur tous types de parkings dans le Val-de-Marne avec des solutions sur mesure.',
    'La signaletique sur mesure pour parkings du Val-de-Marne s\'intègre à votre identite visuelle. Nous pouvons personnaliser les panneaux aux couleurs de votre entreprise ou de votre résidence. Les gestionnaires de parkings val-de-marnais apprecient cette flexibilite pour des installations harmonieuses.'
  ],
  'pose-miroir-circulation': [
    'Nous installons des miroirs de circulation dans le Val-de-Marne pour sécuriser les zones a visibilité reduite. Angles morts de parkings, intersections de voies privées, sorties de batiments : chaque situation nécessite un miroir adapté. Nos installations couvrent l\'ensemble du 94, de Créteil a Vincennes.',
    'Les miroirs convexes pour angles morts ameliorent considerablement la sécurité dans vos parkings et voiries du Val-de-Marne. Nous selectionnons le diametre et l\'angle de vue adaptés à chaque configuration. Les gestionnaires de parkings val-de-marnais font confiance a notre expertise pour des installations optimales.',
    'Ameliorez la visibilité de vos parkings et zones de circulation dans le 94 avec des miroirs professionnels. Sorties de parking, croisements de voies, zones de manoeuvre : les miroirs permettent d\'anticiper les dangers. Nous proposons une gamme complète adaptée a tous les contextes du Val-de-Marne.',
    'La pose de miroirs de circulation adaptés à vos besoins prend en compte les spécificités de votre site val-de-marnais. Miroirs intérieurs, extérieurs, anti-givre : nous selectionnons le produit optimal. L\'installation est realisee à la hauteur et avec l\'orientation garantissant la meilleure visibilité.',
    'Securisez vos zones de manoeuvre dans le Val-de-Marne avec des miroirs de qualité professionnelle. Parkings en spirale, sorties aveugles, croisements dangereux : chaque point critique peut être securise. Intervention rapide sur l\'ensemble du 94 avec devis gratuit sous 24 heures.'
  ],
  'installation-bornes-parking': [
    'Nous installons des bornes de protection pour vos places de parking dans le Val-de-Marne. Places de direction, emplacements réservés, accès pompiers : les bornes permettent de controler l\'usage de vos places. Fixes, amovibles ou retractables, nous proposons des solutions adaptées à chaque besoin du 94.',
    'Les bornes fixes et amovibles pour le Val-de-Marne securisent efficacement vos places réservées. Entreprises de Créteil, résidences de Saint-Maur-des-Fosses, commerces de Vincennes : chaque installation est realisee avec soin. Nous proposons différents modeles adaptés à votre budget et vos contraintes.',
    'La protection de vos places réservées dans le 94 passe par l\'installation de bornes adaptées. Places nominatives, emplacements visiteurs VIP, accès livraisons : les bornes permettent de reserver efficacement vos espaces. Scellement dans le beton ou fixation mecanique selon la configuration de votre parking val-de-marnais.',
    'Nos solutions de bornage s\'adaptent a tous les contextes du Val-de-Marne. Bornes en acier, aluminium ou plastique haute résistance : nous selectionnons le materiau optimal selon l\'usage. Les gestionnaires de parkings d\'entreprises et de résidences apprecient la qualité de nos installations.',
    'L\'installation professionnelle de bornes de parking dans le 94 garantit durabilité et efficacite. Nous assurons le scellement, l\'alignement parfait et les finitions soignees. Les bornes amovibles sont livrees avec leurs clés et systèmes de verrouillage. Intervention sur l\'ensemble du Val-de-Marne.'
  ],
  'pose-butees-parking': [
    'Nous posons des butees de parking dans le Val-de-Marne pour faciliter le positionnement des véhicules et proteger vos équipements. Murs, jardineries, bornes de recharge : les butees evitent les degats lors des manoeuvres. Intervention sur tout le 94, de Créteil a Champigny-sur-Marne en passant par Vitry-sur-Seine.',
    'Les butees de roues pour vos parkings val-de-marnais guident les automobilistes et protegent votre environnement. Nous proposons différents modeles en caoutchouc, beton ou plastique selon vos contraintes. Les copropriétés et entreprises du 94 apprecient ces équipements simples mais essentiels.',
    'Facilitez le positionnement des véhicules dans vos parkings du Val-de-Marne avec des butees professionnelles. Les conducteurs savent exactement ou s\'arreter, evitant les debordements sur les voies de circulation. Installation soignée avec fixation mecanique garantissant la tenue dans le temps.',
    'La pose de butees professionnelles dans le 94 protège vos installations et clarifie le stationnement. Pieds de murs, équipements techniques, espaces verts : les butees evitent les accrochages. Nous intervenons dans tout le Val-de-Marne avec un stock de butees disponible pour une pose rapide.',
    'Protegez vos équipements et delimitez clairement vos places de parking dans le Val-de-Marne. Les butees constituent un investissement modeste pour des benefices importants : moins de degats, stationnement plus ordonne, facilite de circulation. Devis gratuit et pose dans les 48 heures sur le 94.'
  ]
};

const descriptions: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    'Nos peintures professionnelles garantissent un marquage durable adapté aux contraintes des parkings val-de-marnais. Qu\'il s\'agisse des centres commerciaux de Créteil ou des parkings d\'entreprises près d\'Orly, nous utilisons des produits haute résistance. Intervention de nuit où le week-end pour minimiser la gene. Devis gratuit sous 24 heures après visite technique.',
    'Notre expertise couvre tous types de parkings dans le Val-de-Marne : souterrains, aeriens, commerciaux et residentiels. Des parkings de Rungis aux résidences de Saint-Maur-des-Fosses, nous realisons un traçage complet incluant places, circulations, signalisation horizontale et pictogrammes. Chaque projet bénéficie d\'une étude prealable pour un resultat optimal.',
    'Nos équipements professionnels garantissent un rendu optimal dans tout le 94. Traceuses automotrices, pistolets airless, peintures homologuees : nous investissons dans du materiel de qualité. Nos techniciens sont formes aux dernières normes et maitrisent les spécificités des parkings du Val-de-Marne, des zones commerciales aux sites industriels.'
  ],
  'marquage-au-sol-parking-prive': [
    'Le marquage personnalisé de votre parking prive dans le Val-de-Marne répond à vos attentes spécifiques. Nous intervenons dans les copropriétés et résidences de Vincennes, Saint-Maur-des-Fosses et Nogent-sur-Marne avec une attention particuliere au respect du voisinage. Horaires adaptés, nuisances sonores minimisees, proprete du chantier garantie.',
    'Le traçage des places, circulations et signalisation complète transforme votre parking prive en espace organise et securise. Dans le 94, nous accompagnons syndics et proprietaires pour des aménagements durables. numérotation des places, zones visiteurs, emplacements deux-roues : chaque element est soigneusement planifie avant intervention.',
    'Un parking bien marque valorise votre bien immobilier dans le Val-de-Marne. Les copropriétés de Créteil, Maisons-Alfort et Fontenay-sous-Bois font appel a notre expertise pour un resultat professionnel garanti. Nous utilisons des peintures resistantes au trafic residentiel avec une durée de vie de plusieurs annees.'
  ],
  'marquage-au-sol-stationnement': [
    'L\'optimisation des zones de stationnement dans le Val-de-Marne permet d\'augmenter significativement votre capacité. Notre expertise technique, eprouvee sur les parkings de Créteil Soleil comme sur les aires de Rungis, garantit un gain de places sans compromettre la circulation. étude prealable gratuite et traçage complet aux normes.',
    'Nos solutions de marquage s\'adaptent a tous les contextes du 94 : parkings de surface, aires de stationnement temporaires, zones de livraison. Les peintures selectionnees resistent au trafic intense des zones d\'activités d\'Orly et Rungis. Devis detaille avec plan d\'aménagement propose sous 48 heures.',
    'Le traçage aux dimensions réglementaires inclut systematiquement les places PMR obligatoires et les zones de livraison. Dans le Val-de-Marne, nous maitrisons les contraintes locales : proximité d\'équipements publics, flux piétons, accès véhicules de secours. Chaque projet respecte scrupuleusement les normes en vigueur.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Votre parking d\'entreprise dans le Val-de-Marne merite un aménagement strategique refletant votre professionnalisme. Nous concevons des plans incluant places nominatives direction, zones visiteurs clairement identifiées et emplacements collaborateurs optimises. Les entreprises de Créteil, Vitry-sur-Seine et Ivry-sur-Seine apprecient notre approche sur mesure.',
    'Notre expertise pour les zones d\'activités du 94 couvre tous les besoins des professionnels. Parcs d\'entreprises de Rungis, sites logistiques d\'Orly, zones tertiaires de Villejuif : nous intervenons de nuit où le week-end pour ne pas perturber votre activité. Coordination avec vos services techniques assuree.',
    'Le marquage professionnel de votre parking reflete l\'image de votre entreprise val-de-marnaise. Finitions soignees, pictogrammes précis, lignes parfaitement droites : chaque detail compte. Nous realisons également la signalisation verticale pour un aménagement complet. Garantie 5 ans sur tous nos travaux dans le 94.'
  ],
  'marquage-au-sol-entrepôt': [
    'Le marquage de votre entrepôt dans le Val-de-Marne respecte les normes de sécurité les plus strictes. Codes couleurs INRS, délimitation des zones de stockage, voies de circulation engins : nous maitrisons les exigences réglementaires. Les plateformes logistiques de Rungis et Orly font appel a notre expertise reconnue.',
    'L\'aménagement de vos emplacements palettes, zones de picking et voies de circulation des chariots optimise vos flux logistiques. Dans le 94, nous intervenons sur des surfaces importantes avec des équipements professionnels adaptés. Tracage précis au laser pour un alignement parfait de vos racks et allees.',
    'La sécurité de votre entrepôt val-de-marnais passe par un marquage clair conforme aux recommandations INRS. Zones de danger en jaune, circulations piétonnes en vert, stockage en blanc : chaque couleur a sa signification. Nos peintures epoxy resistent aux passages intensifs de chariots elevateurs.'
  ],
  'marquage-au-sol-industriel': [
    'Les marquages haute résistance pour sites industriels du Val-de-Marne supportent les contraintes les plus severes. Peintures epoxy et polyurethane adaptées aux passages d\'engins lourds, aux produits chimiques et aux chocs thermiques. Sites de Vitry-sur-Seine, Ivry-sur-Seine, Champigny-sur-Marne : notre expertise est reconnue.',
    'La délimitation des zones de danger, allees de circulation et emplacements machines securise votre site industriel du 94. Nous respectons les codes couleurs reglementes et integrons pictogrammes et symboles normalises. Vos collaborateurs bénéficient d\'un environnement de travail clairement organise.',
    'Notre expertise couvre les secteurs agroalimentaire près de Rungis, chimique a Ivry-sur-Seine, metallurgique a Vitry-sur-Seine et logistique autour d\'Orly. Chaque environnement nécessite des produits spécifiques que nous maitrisons. étude technique prealable pour selectionner les peintures les mieux adaptées à vos contraintes.'
  ],
  'marquage-au-sol-usine': [
    'Un marquage clair dans votre usine du Val-de-Marne optimise les flux de production. Zones de travail, aires de stockage, voies de circulation : chaque espace est delimite avec précision. Nos interventions sur les sites de Champigny-sur-Marne, Vitry-sur-Seine et Maisons-Alfort ameliorent l\'efficacite operationnelle.',
    'Nos interventions pendant vos arrêts de production minimisent l\'impact sur votre activité. Week-ends, periodes de maintenance, conges d\'ete : nous nous adaptons à votre planning. Les industriels du 94 apprecient notre flexibilite et notre capacité a respecter des délais serres.',
    'Les peintures epoxy ou polyurethane haute performance que nous appliquons resistent aux sollicitations intensives des environnements industriels. Passages d\'engins, produits agressifs, nettoyages frequents : vos marquages conservent leur lisibilite. Garantie etendue sur tous nos travaux dans le Val-de-Marne.'
  ],
  'marquage-routier-au-sol': [
    'Notre marquage routier sur voiries privées du Val-de-Marne répond aux mêmes exigences que la voirie publique. Produits homologues NF, epaisseurs conformes, retroreflexion aux normes : vos voies d\'accès bénéficient d\'une signalisation professionnelle. Sites industriels de Rungis, zones d\'Orly, résidences privées : couverture complète du 94.',
    'Lignes de rive, passages piétons, flèches directionnelles, logos et symboles : nous maitrisons toutes les techniques de marquage routier. Nos peintures integrent des billes de verre pour une retroreflexion optimale de nuit. Les gestionnaires de voiries privées val-de-marnaises apprecient la qualité de nos prestations.',
    'Nos techniciens qualifies utilisent des traceuses professionnelles automotrices pour un resultat parfait. Les voies d\'accès aux zones d\'activités de Rungis, Orly et Vitry-sur-Seine bénéficient d\'un marquage durable et conforme. Devis gratuit avec étude technique pour tout projet dans le Val-de-Marne.'
  ],
  'marquage-garage-automobile': [
    'Le marquage adapté aux garages automobiles du Val-de-Marne utilise des peintures resistantes aux huiles, solvants et passages repetes de véhicules. Concessions de Créteil, ateliers de Champigny-sur-Marne, carrosseries d\'Ivry-sur-Seine : nos produits epoxy supportent les contraintes spécifiques du secteur automobile.',
    'L\'aménagement de vos concessions, ateliers et carrosseries dans le 94 optimise l\'utilisation de votre espace de travail. Emplacements de levage, zones de stockage pieces, circulations clients et collaborateurs : chaque flux est pris en compte. Nous concevons des plans d\'aménagement sur mesure pour les professionnels de l\'automobile.',
    'Les peintures epoxy durables que nous appliquons resistent aux sols soumis aux contraintes des garages automobiles. Produits chimiques, passages de pneus, nettoyages haute pression : vos marquages conservent leur intégrité. Les garagistes de Vincennes, Villejuif et Maisons-Alfort nous font confiance.'
  ],
  'marquage-zones-piétonnes': [
    'La separation des flux piétons et véhicules constitue un enjeu essentiel de sécurité dans le Val-de-Marne. Nos cheminements clairement traces avec peintures antiderapantes protegent efficacement vos collaborateurs et visiteurs. entrepôts de Rungis, sites d\'Orly, usines de Vitry-sur-Seine : expertise reconnue dans le 94.',
    'Les zones piétonnes bien delimitees dans vos installations val-de-marnaises respectent les codes couleurs reglementes. Vert pour les circulations, jaune pour les dangers, blanc pour les limites : chaque teinte a sa signification. Nos marquages ameliorent significativement la sécurité de vos sites industriels et logistiques.',
    'La protection de vos collaborateurs passe par un marquage piéton conforme aux normes. Bandes podotactiles pour malvoyants, pictogrammes PMR, passages protégés : nous realisons des aménagements complets dans tout le Val-de-Marne. Les responsables sécurité apprecient notre connaissance des reglementations en vigueur.'
  ],
  'places-handicapees-pmr': [
    'Les places PMR que nous realisons dans le Val-de-Marne respectent les dimensions minimales de 3,30 m x 5 m imposees par la loi. Tracage conforme avec bande de circulation laterale, pictogramme au sol et signalisation verticale. Commerces, entreprises, ERP du 94 : mise en conformité assuree.',
    'Nos aménagements PMR complets incluent pictogrammes normalises et signalisation verticale réglementaire. Les établissements recevant du public de Créteil, Vitry-sur-Seine et Champigny-sur-Marne font appel a notre expertise pour des places handicapees conformes. Accompagnement dans vos démarches de mise en accessibilite.',
    'création de nouvelles places PMR ou mise en conformité de l\'existant : nous intervenons dans tout le Val-de-Marne. Notre connaissance de la réglementation accessibilite garantit des aménagements valides. Devis gratuit avec étude du nombre de places obligatoires selon la capacité de votre parking.'
  ],
  'signalisation-verticale': [
    'Notre signalisation verticale complète oriente efficacement les usagers de vos parkings val-de-marnais. Panneaux directionnels, indications de niveau, flèches de sens : chaque element contribue à une circulation fluide. Fourniture et pose dans le 94 avec fixation adaptée à chaque support.',
    'L\'installation par nos équipes qualifiees garantit des fixations durables et conformes. Hauteur réglementaire, visibilité optimale, résistance aux intemperies : chaque panneau est pose dans les regles de l\'art. Les gestionnaires de parkings de Créteil, Vincennes et Saint-Maur-des-Fosses font confiance a notre expertise.',
    'Un parking bien signalise facilite l\'experience de vos usagers et reduit les tensions. Nos solutions sur mesure s\'adaptent a tous les contextes du Val-de-Marne : parkings souterrains, aeriens, de grande surface. étude prealable gratuite pour determiner les besoins en signaletique de votre installation.'
  ],
  'pose-ralentisseur': [
    'Les ralentisseurs que nous installons dans le Val-de-Marne sont homologues et adaptés aux zones a vitesse limitee. Coussins berlinois, dos d\'ane, plateaux sureleves : chaque dispositif répond à un usage spécifique. Voiries d\'entreprises de Rungis, accès résidences de Maisons-Alfort : installation dans les regles de l\'art.',
    'Notre conseil technique vous oriente vers le dispositif le plus approprie à votre situation. Trafic poids lourds, passage bus, zone piétonne : chaque contexte du 94 nécessite une solution adaptée. Coussins berlinois, dos d\'ane, bandes sonores : nous maitrisons toutes les options disponibles.',
    'La pose de ralentisseurs dans le Val-de-Marne inclut systematiquement le marquage au sol et la signalisation verticale réglementaires. Panneaux d\'annonce, bandes de signalisation : l\'ensemble est conforme aux normes. Equipements certifies avec garantie fabricant pour une installation perenne.'
  ],
  'installation-panneaux-parking': [
    'Notre signaletique claire ameliore l\'orientation dans vos parkings du Val-de-Marne. Panneaux directionnels, indications de zones, informations tarifaires : chaque element guide efficacement les automobilistes. Conception sur mesure adaptée à la configuration spécifique de votre parking dans le 94.',
    'Les panneaux personnalisés que nous concevons s\'integrent à votre identite visuelle. Logo, couleurs, typographie : votre signaletique reflete l\'image de votre entreprise ou résidence val-de-marnaise. Installation professionnelle avec fixations durables adaptées à chaque support.',
    'Nos supports de signaletique sont selectionnes pour leur robustesse et leur esthetique. Poteaux, potences, fixations murales : chaque installation dans le Val-de-Marne bénéficie de notre expertise technique. Experience usager optimisee grâce à une signaletique intuitive et coherente.'
  ],
  'pose-miroir-circulation': [
    'Les miroirs de sécurité que nous installons dans le Val-de-Marne couvrent efficacement vos angles morts. Diametre, angle de vue, materiau : chaque caracteristique est adaptée à votre configuration. Parkings, voiries privées, zones de manoeuvre : securisation complète de vos installations du 94.',
    'Notre gamme complète de miroirs convexes et hemispheriques répond a tous les besoins du Val-de-Marne. Miroirs intérieurs en acrylique, extérieurs en inox, anti-givre pour zones exposees : nous selectionnons le produit optimal. Installation à la hauteur garantissant la meilleure visibilité.',
    'L\'emplacement optimal de vos miroirs est déterminé par une étude prealable de votre site val-de-marnais. Sortie de parking, croisement de voies, zone de manoeuvre engins : chaque point critique est analyse. Installation rapide par nos techniciens avec materiel de fixation adapté.'
  ],
  'installation-bornes-parking': [
    'Les bornes de protection que nous installons dans le Val-de-Marne securisent efficacement vos places réservées. Direction, visiteurs VIP, accès pompiers, livraisons : chaque usage nécessite une solution adaptée. Bornes fixes, amovibles ou retractables selon vos contraintes dans le 94.',
    'Nos solutions de bornage couvrent tous les besoins des parkings du Val-de-Marne. Places de direction a Créteil, accès pompiers a Villejuif, emplacements livraisons a Rungis : chaque configuration fait l\'objet d\'une étude spécifique. Scellement beton ou fixation mecanique selon votre sol.',
    'L\'installation professionnelle de bornes dans le 94 garantit un alignement parfait et des finitions soignees. Bornes amovibles livrees avec clés et systèmes de verrouillage, bornes fixes ancrees durablement : notre pose respecte les regles de l\'art. Garantie sur tous nos travaux dans le Val-de-Marne.'
  ],
  'pose-butees-parking': [
    'Les butees de parking que nous posons dans le Val-de-Marne facilitent le positionnement des véhicules et protegent vos équipements. Murs, bornes de recharge, espaces verts, jardineries : les butees evitent les accrochages lors des manoeuvres. Installation rapide et soignée sur tout le 94.',
    'Nous proposons différentes solutions de butees adaptées à vos contraintes : caoutchouc recycle économique, beton resistant, plastique haute densite colore. Les copropriétés de Saint-Maur-des-Fosses comme les entreprises de Vitry-sur-Seine trouvent la solution adaptée a leur budget et usage.',
    'La fixation mecanique de nos butees garantit une tenue parfaite dans le temps. Chevilles metalliques, vis inox : chaque installation dans le Val-de-Marne resiste aux sollicitations repetees. Pose propre avec nettoyage du chantier. Devis gratuit et intervention sous 48 heures dans le 94.'
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
    metaTitle: `${serviceName} a ${city.name} (94) | Devis Gratuit`,
    metaDescription: `${serviceName} a ${city.name} dans le Val-de-Marne. Entreprise spécialisée, intervention rapide. Devis gratuit sous 24h.`,
    content: {
      introduction: intro,
      localContext: city.context,
      serviceDescription: desc
    },
    faqs: [
      {
        question: `Quel est le délai d'intervention a ${city.name} ?`,
        answer: `Nous intervenons sous 24 a 48h a ${city.name} (94). La visite technique et le devis sont gratuits.`
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

export const valDeMarneVariations: ServiceLocationContent[] = [];

cities.forEach((city, cityIndex) => {
  services.forEach((serviceSlug, serviceIndex) => {
    valDeMarneVariations.push(generateVariation(city, serviceSlug, cityIndex + serviceIndex));
  });
});
