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
    slug: 'creteil',
    name: 'Creteil',
    context: 'Prefecture du Val-de-Marne, Creteil accueille l\'universite Paris-Est et le centre commercial regional. Les parkings du Creteil Soleil, les zones tertiaires et les residences generent une demande constante en marquage professionnel.',
    zones: ['Creteil Soleil', 'L\'Echat', 'Prefecture', 'Universite', 'Mont-Mesly']
  },
  {
    slug: 'vitry-sur-seine',
    name: 'Vitry-sur-Seine',
    context: 'Vitry-sur-Seine est la commune la plus peuplee du Val-de-Marne. Les zones industrielles des bords de Seine, les nouveaux quartiers et les residences necessitent des prestations de marquage regulieres.',
    zones: ['Gare', 'Port a l\'Anglais', 'Plateau', 'Paul Froment', 'Mairie']
  },
  {
    slug: 'champigny-sur-marne',
    name: 'Champigny-sur-Marne',
    context: 'Champigny-sur-Marne dispose de zones d\'activites dynamiques le long de la Marne. Les parkings commerciaux, les entreprises et les residences font appel a notre expertise en marquage au sol.',
    zones: ['Centre', 'Plant', 'Coeuilly', 'Bois l\'Abbe', 'Mordacs']
  },
  {
    slug: 'saint-maur-des-fosses',
    name: 'Saint-Maur-des-Fosses',
    context: 'Saint-Maur-des-Fosses est une commune residentielle prisee. Les parkings de residences de standing, les coproprietes et les commerces de quartier requierent un marquage soigne et professionnel.',
    zones: ['La Varenne', 'Adamville', 'Creteil', 'Parc', 'Le Parc']
  },
  {
    slug: 'ivry-sur-seine',
    name: 'Ivry-sur-Seine',
    context: 'Ivry-sur-Seine combine industries traditionnelles et nouveaux quartiers. Les zones logistiques, les entreprises innovantes et les programmes immobiliers constituent un marche diversifie pour le marquage.',
    zones: ['Mairie', 'Pierre et Marie Curie', 'Confluence', 'Moulin', 'Ivry Port']
  },
  {
    slug: 'maisons-alfort',
    name: 'Maisons-Alfort',
    context: 'Maisons-Alfort accueille l\'Ecole Veterinaire et de nombreuses entreprises. Les parkings d\'etablissements, les residences et les zones commerciales font appel a nos services de tracage.',
    zones: ['Ecole Veterinaire', 'Stade', 'Charentonneau', 'Centre', 'Alfortville']
  },
  {
    slug: 'fontenay-sous-bois',
    name: 'Fontenay-sous-Bois',
    context: 'Fontenay-sous-Bois est desservie par le RER A et beneficie d\'un renouveau urbain. Les parkings des centres commerciaux, les residences et les equipements publics necessitent un marquage conforme.',
    zones: ['Val de Fontenay', 'Rigollots', 'Centre', 'Alouettes', 'Redoute']
  },
  {
    slug: 'villejuif',
    name: 'Villejuif',
    context: 'Villejuif accueille l\'Institut Gustave Roussy et de nombreux etablissements de sante. Les parkings hospitaliers, les residences et les commerces demandent un marquage professionnel et adapte.',
    zones: ['Louis Aragon', 'Paul Vaillant-Couturier', 'Leo Lagrange', 'IGR', 'Centre']
  },
  {
    slug: 'vincennes',
    name: 'Vincennes',
    context: 'Vincennes beneficie de la proximite du Bois et du Chateau. Les parkings residentiels haut de gamme, les commerces et les equipements culturels exigent un marquage de qualite.',
    zones: ['Chateau', 'Centre', 'Daumesnil', 'Montreuil', 'Saint-Mande']
  },
  {
    slug: 'alfortville',
    name: 'Alfortville',
    context: 'Alfortville developpe de nouveaux quartiers le long de la Seine. Les residences modernes, les zones commerciales et les parkings d\'entreprises constituent notre clientele dans cette ville.',
    zones: ['Confluent', 'Ecoles', 'Mairie', 'Port', 'Chantereine']
  },
  {
    slug: 'choisy-le-roi',
    name: 'Choisy-le-Roi',
    context: 'Choisy-le-Roi connait une renovation importante avec l\'arrivee du Grand Paris Express. Les nouveaux programmes, les zones d\'activites et les equipements publics generent des besoins en marquage.',
    zones: ['Gondoles', 'Navigateurs', 'Centre', 'Lugo', 'Les Hautes Bornes']
  },
  {
    slug: 'nogent-sur-marne',
    name: 'Nogent-sur-Marne',
    context: 'Nogent-sur-Marne est une commune residentielle des bords de Marne. Les parkings de coproprietes, les guinguettes et les commerces font appel a notre expertise pour un marquage de qualite.',
    zones: ['Centre', 'Baltard', 'Beaute', 'Port', 'Marne']
  }
];

const intros: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    'Specialistes du marquage parking dans le Val-de-Marne (94), notre entreprise intervient sur l\'ensemble du departement, de Creteil a Vincennes en passant par les zones d\'activites autour de Rungis et Orly. Nous maitrisons les contraintes specifiques des parkings souterrains comme aeriens, avec des peintures haute resistance adaptees au trafic intense des zones commerciales val-de-marnaises.',
    'Le Val-de-Marne concentre une forte densite de parkings professionnels et residentiels que nous marquons quotidiennement. Des centres commerciaux de Creteil Soleil aux parkings d\'entreprises de Vitry-sur-Seine et Ivry-sur-Seine, notre expertise couvre tous les besoins. Nos equipes interviennent de nuit ou le week-end pour minimiser la gene sur vos activites.',
    'Implantes dans le 94, nous connaissons parfaitement le tissu economique local : zones logistiques proches de Rungis, parcs d\'activites d\'Orly, quartiers d\'affaires de Creteil. Cette connaissance du terrain nous permet d\'adapter nos interventions aux specificites de chaque site et de proposer des solutions de marquage parking optimales pour les professionnels val-de-marnais.',
    'Notre entreprise de marquage au sol accompagne les gestionnaires de parkings du Val-de-Marne depuis de nombreuses annees. Que vous geriez un parking de centre commercial, une copropriete a Saint-Maur-des-Fosses ou un parc de stationnement d\'entreprise pres d\'Orly, nous apportons une reponse technique adaptee avec des materiaux professionnels durables.',
    'Le departement du Val-de-Marne presente des enjeux specifiques en matiere de stationnement : forte densite urbaine, proximite de grandes infrastructures comme Orly et le MIN de Rungis, nombreux hopitaux. Notre expertise en marquage parking repond a ces contraintes particulieres avec des prestations sur mesure et une reactivite exemplaire sur tout le 94.'
  ],
  'marquage-au-sol-parking-prive': [
    'Les parkings prives du Val-de-Marne meritent un marquage professionnel a la hauteur des attentes des residents et proprietaires. De Vincennes a Champigny-sur-Marne, nous intervenons dans les coproprietes, residences de standing et parkings d\'immeubles pour realiser un tracage precis et durable. Nos peintures resistantes garantissent une lisibilite parfaite pendant plusieurs annees.',
    'Proprietaires et syndics du 94 nous font confiance pour le marquage de leurs parkings prives. Nous comprenons les contraintes des coproprietes val-de-marnaises : interventions en horaires decales, respect du voisinage, coordination avec les residents. De Maisons-Alfort a Fontenay-sous-Bois, chaque projet beneficie d\'un accompagnement personnalise.',
    'Votre parking prive dans le Val-de-Marne necessite un tracage adapte a son usage specifique. Que vous soyez a Villejuif, Alfortville ou Nogent-sur-Marne, nous etudions la configuration de votre espace pour optimiser le nombre de places tout en respectant les normes PMR. Un devis detaille vous est remis sous 24 heures apres visite technique.',
    'Dans un departement aussi dense que le Val-de-Marne, chaque place de parking compte. Notre expertise en marquage de parkings prives permet d\'optimiser l\'espace disponible dans les residences de Saint-Maur-des-Fosses comme dans les coproprietes de Creteil. Nous utilisons des peintures professionnelles garantissant une tenue optimale meme sous fort trafic.',
    'Le marquage de votre parking prive dans le 94 est realise avec le meme niveau d\'exigence que pour nos clients professionnels. Places numerotees, zones visiteurs, emplacements deux-roues : nous concevons un plan de marquage complet adapte a vos besoins. Intervention possible de nuit pour ne pas perturber les residents de votre copropriete val-de-marnaise.'
  ],
  'marquage-au-sol-stationnement': [
    'L\'optimisation des zones de stationnement represente un enjeu majeur dans le Val-de-Marne, departement particulierement dense. De Creteil a Vitry-sur-Seine, nous aidons les collectivites, entreprises et coproprietes a maximiser leur capacite de stationnement. Notre expertise technique permet de gagner jusqu\'a 15% de places supplementaires grace a un tracage optimise.',
    'Le tracage de vos places de stationnement dans le 94 respecte scrupuleusement les normes en vigueur tout en s\'adaptant aux contraintes locales. Pres d\'Orly comme aux abords de Rungis, nous maitrisons les reglementations specifiques aux zones d\'activites. Chaque projet fait l\'objet d\'une etude prealable pour garantir un resultat optimal.',
    'Maximisez la capacite de vos stationnements val-de-marnais grace a notre expertise en tracage. Les parkings de centres commerciaux, les zones de stationnement d\'entreprises et les aires de livraison necessitent un marquage reflechi. Nous intervenons sur tout le departement, de Champigny-sur-Marne a Choisy-le-Roi, avec des solutions adaptees a chaque contexte.',
    'Nos solutions de marquage s\'adaptent a tous les contextes du Val-de-Marne : parkings de surface, stationnements souterrains, aires de covoiturage pres des gares RER. La densite du 94 impose une gestion optimale de l\'espace que nous facilitons par un tracage professionnel. Devis gratuit et intervention rapide sur Ivry-sur-Seine, Maisons-Alfort et environs.',
    'Un stationnement bien marque facilite la gestion quotidienne et reduit les conflits d\'usage. Dans le Val-de-Marne, ou la pression fonciere est forte, chaque metre carre compte. Notre expertise permet d\'organiser efficacement vos zones de stationnement, qu\'il s\'agisse d\'un parking d\'entreprise a Villejuif ou d\'une residence a Fontenay-sous-Bois.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Les entreprises du Val-de-Marne nous confient le marquage de leurs parkings pour beneficier d\'un resultat professionnel et durable. Zones d\'activites de Rungis, parcs tertiaires de Creteil, sites industriels d\'Ivry-sur-Seine : nous intervenons sur tous types d\'infrastructures. Places nominatives, zones visiteurs, emplacements direction : chaque detail est soigne.',
    'Nous accompagnons les professionnels du 94 dans l\'amenagement complet de leurs parkings d\'entreprise. De la conception du plan de marquage a la realisation, notre equipe prend en charge l\'integralite du projet. Les entreprises situees pres d\'Orly ou dans les zones d\'activites de Vitry-sur-Seine apprecient notre reactivite et la qualite de nos finitions.',
    'Votre parking d\'entreprise dans le Val-de-Marne merite un marquage a l\'image de votre societe. Nous realisons des prestations haut de gamme pour les sieges sociaux de Vincennes, les sites logistiques de Rungis ou les centres de recherche de Villejuif. Peintures durables, pictogrammes soignes, signalisation complete : rien n\'est laisse au hasard.',
    'Les parcs d\'activites du Val-de-Marne beneficient de solutions de marquage completes adaptees aux contraintes professionnelles. Nous intervenons de nuit ou le week-end pour ne pas perturber votre activite. Des zones industrielles de Champigny-sur-Marne aux quartiers tertiaires d\'Alfortville, chaque projet est realise dans les regles de l\'art.',
    'Le marquage professionnel de votre parking d\'entreprise dans le 94 reflete votre serieux et votre souci du detail. Nous travaillons avec les gestionnaires de parcs d\'activites, les directeurs de sites industriels et les responsables de flottes. Intervention possible sur l\'ensemble du Val-de-Marne avec devis gratuit sous 24 heures.'
  ],
  'marquage-au-sol-entrepot': [
    'Les entrepots du Val-de-Marne, notamment ceux proches du MIN de Rungis et de la zone d\'Orly, necessitent un marquage conforme aux normes de securite les plus strictes. Nous maitrisons parfaitement les exigences INRS en matiere de codes couleurs, delimitation des zones de stockage et circulation des engins. Nos peintures epoxy resistent aux contraintes logistiques intensives.',
    'Le secteur logistique du 94 fait appel a notre expertise pour le tracage de zones d\'entrepots. Plateformes de Rungis, centres de distribution d\'Orly, entrepots de Vitry-sur-Seine : nous intervenons sur des surfaces importantes avec des equipements professionnels. Nos marquages au sol optimisent les flux de marchandises et securisent les circulations.',
    'Optimisez les flux de votre entrepot val-de-marnais avec un marquage professionnel adapte a vos activites. Zones de picking, emplacements palettes, voies de circulation chariots : chaque element est trace avec precision. Notre connaissance des sites logistiques autour de Rungis et Orly nous permet d\'anticiper vos besoins specifiques.',
    'Notre expertise couvre tous les besoins de marquage en entrepot dans le Val-de-Marne. Des codes couleurs normalises aux pictogrammes de securite, nous realisons un tracage complet conforme aux recommandations INRS. Les gestionnaires d\'entrepots de Champigny-sur-Marne, Ivry-sur-Seine et Creteil nous font confiance depuis des annees.',
    'Le marquage de votre entrepot dans le 94 s\'adapte a vos contraintes d\'activite specifiques. Intervention de nuit, travaux par zones pour maintenir votre exploitation, peintures sechage rapide : nous trouvons toujours une solution. Entrepots frigorifiques, plateformes e-commerce, centres logistiques pres de Rungis beneficient de notre savoir-faire.'
  ],
  'marquage-au-sol-industriel': [
    'Le secteur industriel du Val-de-Marne fait appel a notre expertise pour des marquages haute resistance. Les sites de production de Vitry-sur-Seine, Ivry-sur-Seine et Champigny-sur-Marne necessitent des peintures capables de resister aux passages d\'engins, aux produits chimiques et aux contraintes mecaniques. Nous selectionnons les produits adaptes a chaque environnement.',
    'Nous intervenons sur les sites industriels du 94 pour tous types de tracages au sol. Delimitation des zones de travail, marquage des allees de circulation, signalisation des dangers : notre equipe maitrise les normes specifiques au milieu industriel. Les usines val-de-marnaises beneficient d\'un accompagnement technique personnalise.',
    'Le marquage haute resistance pour vos installations industrielles du Val-de-Marne repond aux exigences les plus strictes. Nous utilisons des peintures epoxy ou polyurethane selon les contraintes de votre site. Zones de production, ateliers, aires de stockage exterieures : chaque surface recoit le traitement approprie pour une durabilite maximale.',
    'Securisez vos zones de production dans le 94 avec un marquage industriel professionnel. La reglementation impose des delimitations claires entre espaces de travail, voies de circulation et zones de stockage. Notre expertise permet aux industriels val-de-marnais de se mettre en conformite tout en optimisant leurs flux de production.',
    'Les solutions de marquage adaptees au milieu industriel du Val-de-Marne tiennent compte des specificites de chaque secteur. Agroalimentaire a Rungis, chimie a Ivry-sur-Seine, metallurgie a Vitry-sur-Seine : nous adaptons nos produits et techniques aux contraintes de votre activite. Intervention possible pendant les arrets de production.'
  ],
  'marquage-au-sol-usine': [
    'Les usines du Val-de-Marne beneficient de notre savoir-faire en marquage industriel depuis de nombreuses annees. Sites de production de Champigny-sur-Marne, usines de Vitry-sur-Seine, ateliers d\'Ivry-sur-Seine : nous intervenons sur tous types d\'installations. Notre expertise garantit un tracage conforme aux normes de securite les plus exigeantes.',
    'Nous amenageons vos zones de production val-de-marnaises avec precision et methode. Le marquage d\'une usine necessite une planification rigoureuse pour minimiser l\'impact sur votre activite. Nos equipes interviennent de nuit, le week-end ou pendant vos arrets de maintenance pour realiser les travaux sans perturber votre production.',
    'Le marquage en usine repond a des exigences specifiques que nous maitrisons parfaitement dans le Val-de-Marne. Delimitation des postes de travail, zones de stockage, voies de circulation des chariots : chaque element contribue a la securite et a l\'efficacite de votre site. Nos peintures industrielles resistent aux sollicitations les plus intenses.',
    'Optimisez les flux de votre usine du 94 avec un tracage structure et reflechi. Nous realisons une etude prealable de vos circulations pour proposer un plan de marquage coherent. Les industriels de Maisons-Alfort, Alfortville et Choisy-le-Roi apprecient notre approche methodique et notre respect des delais d\'intervention.',
    'L\'intervention en usine pendant vos periodes d\'arret est notre specialite dans le Val-de-Marne. Nous coordonnons nos travaux avec vos equipes de maintenance pour profiter des fenetres de disponibilite. Arrets techniques, conges d\'ete, week-ends prolonges : nous nous adaptons a votre planning pour un resultat optimal sans impact sur votre production.'
  ],
  'marquage-routier-au-sol': [
    'Nous realisons le marquage routier sur voiries privees dans tout le Val-de-Marne avec les memes exigences de qualite que pour la voirie publique. Voies d\'acces aux sites industriels de Rungis, routes privees des zones d\'Orly, allees de residences a Saint-Maur-des-Fosses : nos tracages respectent les normes NF en vigueur pour une securite optimale.',
    'Le tracage de lignes et la signalisation horizontale dans le 94 font partie de notre coeur de metier. Lignes de rive, passages pietons, fleches directionnelles, logos : nous maitrisons toutes les techniques de marquage routier. Nos peintures routieres homologuees integrent des billes de verre pour une retroreflexion conforme aux normes.',
    'Nos travaux de marquage routier dans le Val-de-Marne respectent scrupuleusement les normes en vigueur. Que vous geriez une voirie de zone industrielle a Vitry-sur-Seine ou un parking de grande surface a Creteil, nous appliquons les memes standards de qualite. Tracages durables et conformes pour une signalisation efficace.',
    'Le marquage durable pour voiries et acces prives du Val-de-Marne necessite des produits adaptes au trafic poids lourds. Pres de Rungis et Orly, les voiries supportent des flux importants de vehicules. Nous selectionnons des peintures haute resistance et appliquons des epaisseurs conformes pour garantir une tenue dans le temps.',
    'Nos equipements homologues garantissent un resultat professionnel pour le marquage routier dans le 94. Traceuses automotrices, pistolets airless, peintures certifiees : nous investissons dans du materiel de qualite pour des prestations irremprochables. Les gestionnaires de voiries privees val-de-marnais apprecient notre rigueur technique.'
  ],
  'marquage-garage-automobile': [
    'Les garages automobiles du Val-de-Marne font appel a notre expertise pour un marquage adapte a leurs contraintes specifiques. Concessions de Creteil, ateliers mecaniques de Champigny-sur-Marne, carrosseries d\'Ivry-sur-Seine : nous utilisons des peintures epoxy resistantes aux huiles, solvants et passages repetes de vehicules.',
    'Nous traceons les zones de travail de vos ateliers automobiles dans le 94 avec des produits haute performance. Emplacements de levage, zones de stockage pieces, circulations clients : chaque espace est delimite clairement. Les professionnels de l\'automobile val-de-marnais apprecient la durabilite de nos marquages face aux contraintes du metier.',
    'Le marquage adapte aux concessions et garages du Val-de-Marne repond a des exigences esthetiques et fonctionnelles. Halls d\'exposition de Vincennes, ateliers de Villejuif, centres techniques de Maisons-Alfort : nous realisons des tracages precis qui optimisent l\'organisation de vos espaces tout en valorisant votre image de marque.',
    'Optimisez l\'espace de votre atelier automobile dans le 94 grace a un marquage professionnel reflechi. Nous etudions vos flux de vehicules et vos besoins specifiques pour proposer un plan d\'amenagement coherent. Les garagistes de Fontenay-sous-Bois, Nogent-sur-Marne et Alfortville nous font confiance pour leurs travaux de tracage.',
    'Les solutions de marquage resistantes au trafic automobile sont notre specialite dans le Val-de-Marne. Peintures epoxy bi-composants, resines polyurethane : nous selectionnons les produits les mieux adaptes a votre activite. Votre garage beneficie d\'un marquage durable malgre les passages repetes de vehicules et l\'exposition aux produits automobiles.'
  ],
  'marquage-zones-pietonnes': [
    'La securite des pietons dans le Val-de-Marne constitue une priorite absolue de nos interventions. Zones industrielles de Rungis, sites logistiques d\'Orly, entreprises de Vitry-sur-Seine : nous delimitons clairement les cheminements pietons pour proteger vos collaborateurs et visiteurs. Nos marquages respectent les codes couleurs imposes par la reglementation.',
    'Nous delimitons clairement vos circulations pietonnes dans le 94 pour garantir la cohabitation securisee avec les vehicules et engins. Entrepots, parkings, sites industriels : chaque configuration necessite une etude specifique. Les entreprises val-de-marnaises apprecient notre expertise en matiere de securite au sol.',
    'Le marquage des passages et allees securisees dans le Val-de-Marne protege efficacement les usagers de vos installations. Nous utilisons des peintures antiderapantes et des couleurs contrastees pour une visibilite optimale. Sites de production, centres commerciaux, parkings d\'entreprises : chaque projet beneficie d\'une attention particuliere.',
    'Protegez vos collaborateurs et visiteurs dans vos locaux du 94 avec un marquage de zones pietonnes conforme aux normes. La cohabitation pietons-vehicules represente un risque majeur en entreprise. Notre expertise permet de securiser efficacement les circulations dans vos entrepots, usines et parkings val-de-marnais.',
    'Les solutions antiderapantes pour zones pietonnes sont disponibles dans tout le Val-de-Marne. Nous appliquons des revetements specifiques dans les zones a risque : sorties de batiments, traversees de voies de circulation, escaliers exterieurs. Nos produits offrent une adherence optimale meme par temps humide pour securiser vos installations.'
  ],
  'places-handicapees-pmr': [
    'Nous realisons les places PMR conformes a la reglementation dans tout le Val-de-Marne. Commerces de Creteil, entreprises de Vitry-sur-Seine, coproprietes de Saint-Maur-des-Fosses : chaque etablissement recevant du public doit disposer de places handicapees aux normes. Nos tracages respectent les dimensions imposees et integrent pictogrammes et signalisation verticale.',
    'La mise en accessibilite de vos parkings dans le 94 constitue une obligation legale que nous vous aidons a respecter. Places de 3,30 m x 5 m minimum, bande de circulation laterale, pictogramme au sol, panneau vertical : nous realisons des amenagements complets. Les ERP val-de-marnais font appel a notre expertise pour leur mise en conformite.',
    'Les places aux dimensions et marquages reglementaires sont notre specialite dans le Val-de-Marne. La legislation impose des caracteristiques precises que nous maitrisons parfaitement. Parkings de supermarches, etablissements de sante comme l\'hopital Henri Mondor, administrations de Creteil : nous intervenons sur tous types d\'equipements.',
    'Notre expertise en places PMR garantit la conformite de vos installations val-de-marnaises. Au-dela du simple tracage, nous vous conseillons sur le nombre de places obligatoires, leur positionnement optimal et la signalisation associee. Les gestionnaires de parkings du 94 apprecient notre accompagnement technique complet.',
    'Le tracage de places handicapees avec pictogrammes normalises dans le Val-de-Marne repond aux exigences d\'accessibilite. Nous utilisons des pochoirs homologues pour les symboles au sol et pouvons fournir la signalisation verticale associee. Mise en conformite ou creation de nouvelles places : devis gratuit sous 24 heures.'
  ],
  'signalisation-verticale': [
    'Nous installons la signalisation verticale complete pour vos parkings du Val-de-Marne. Panneaux directionnels, indications de niveau, fleches de sens unique : votre parking de Creteil, Vincennes ou Champigny-sur-Marne beneficie d\'une signaletique coherente. Nous assurons la fourniture et la pose de tous les elements necessaires.',
    'Les panneaux et equipements de signalisation pour le 94 sont selectionnes pour leur qualite et leur durabilite. Nous travaillons avec des fournisseurs reconnus pour proposer des produits conformes aux normes. Les gestionnaires de parkings val-de-marnais apprecient notre capacite a fournir des solutions completes.',
    'Nos solutions completes de signaletique verticale s\'adaptent a tous les contextes du Val-de-Marne. Parkings de bureaux a Villejuif, centres commerciaux a Creteil Soleil, residences a Saint-Maur-des-Fosses : chaque projet fait l\'objet d\'une etude pour determiner les panneaux necessaires et leur positionnement optimal.',
    'L\'installation professionnelle de panneaux de signalisation dans le 94 garantit la securite et l\'efficacite de votre parking. Fixations adaptees au support, hauteur reglementaire, visibilite optimale : nous maitrisons tous les aspects techniques. Intervention sur l\'ensemble du Val-de-Marne avec devis gratuit.',
    'La signalisation verticale adaptee a vos besoins permet d\'orienter efficacement les usagers de vos parkings val-de-marnais. Nous concevons des plans de signaletique coherents integrant panneaux directionnels, informations tarifaires et pictogrammes reglementaires. Les parkings bien signales reduisent les conflits et ameliorent la satisfaction des utilisateurs.'
  ],
  'pose-ralentisseur': [
    'Nous installons des ralentisseurs homologues dans le Val-de-Marne pour securiser vos zones de circulation. Acces aux entreprises de Rungis, voiries de zones industrielles d\'Orly, parkings de residences a Maisons-Alfort : chaque dispositif est choisi en fonction du contexte et installe dans les regles de l\'art.',
    'Securisez vos zones de passage dans le 94 avec des ralentisseurs adaptes au trafic. Coussins berlinois, dos d\'ane, plateaux sureleves : nous vous conseillons sur le dispositif le plus approprie a votre situation. Les gestionnaires de voiries privees val-de-marnais apprecient notre expertise technique.',
    'Les coussins berlinois et dos d\'ane installes dans le Val-de-Marne respectent les normes en vigueur pour une efficacite optimale. Dimensions, signalisation associee, materiaux : chaque element est conforme aux specifications techniques. Nous intervenons sur tous les types de voiries privees du 94.',
    'La pose de ralentisseurs pour parkings et voies d\'acces dans le Val-de-Marne reduit les vitesses et securise les circulations. Zones pietonnes, abords d\'ecoles, entrees de residences : les ralentisseurs constituent une solution efficace. Nous assurons la fourniture et la pose avec la signalisation reglementaire.',
    'Les dispositifs de reduction de vitesse que nous installons dans le 94 sont homologues et certifies. Caoutchouc recycle, beton, plastique haute densite : nous proposons differents materiaux selon vos contraintes. L\'installation inclut le marquage au sol et la signalisation verticale reglementaires.'
  ],
  'installation-panneaux-parking': [
    'Nous equipons vos parkings du Val-de-Marne d\'une signaletique complete et coherente. Panneaux directionnels, indications de places disponibles, informations tarifaires : chaque element contribue a l\'experience usager. Les parkings de Creteil, Vincennes et Champigny-sur-Marne beneficient de notre expertise en signaletique.',
    'Les panneaux directionnels pour parkings du 94 guident efficacement les automobilistes vers les places disponibles. Nous concevons des parcours signaletiques logiques qui reduisent le temps de recherche et les conflits. Centres commerciaux, parkings d\'entreprises, residences : chaque configuration fait l\'objet d\'une etude specifique.',
    'L\'installation de panneaux adaptee a vos besoins prend en compte la configuration specifique de votre parking val-de-marnais. Niveaux multiples, zones differenciees, places reservees : la signaletique doit etre claire et intuitive. Nous realisons des plans d\'implantation detailles avant chaque intervention.',
    'Optimisez l\'orientation dans votre parking du 94 avec une signaletique professionnelle. Les usagers trouvent plus facilement leur place et leur vehicule, reduisant stress et perte de temps. Nous intervenons sur tous types de parkings dans le Val-de-Marne avec des solutions sur mesure.',
    'La signaletique sur mesure pour parkings du Val-de-Marne s\'integre a votre identite visuelle. Nous pouvons personnaliser les panneaux aux couleurs de votre entreprise ou de votre residence. Les gestionnaires de parkings val-de-marnais apprecient cette flexibilite pour des installations harmonieuses.'
  ],
  'pose-miroir-circulation': [
    'Nous installons des miroirs de circulation dans le Val-de-Marne pour securiser les zones a visibilite reduite. Angles morts de parkings, intersections de voies privees, sorties de batiments : chaque situation necessite un miroir adapte. Nos installations couvrent l\'ensemble du 94, de Creteil a Vincennes.',
    'Les miroirs convexes pour angles morts ameliorent considerablement la securite dans vos parkings et voiries du Val-de-Marne. Nous selectionnons le diametre et l\'angle de vue adaptes a chaque configuration. Les gestionnaires de parkings val-de-marnais font confiance a notre expertise pour des installations optimales.',
    'Ameliorez la visibilite de vos parkings et zones de circulation dans le 94 avec des miroirs professionnels. Sorties de parking, croisements de voies, zones de manoeuvre : les miroirs permettent d\'anticiper les dangers. Nous proposons une gamme complete adaptee a tous les contextes du Val-de-Marne.',
    'La pose de miroirs de circulation adaptes a vos besoins prend en compte les specificites de votre site val-de-marnais. Miroirs interieurs, exterieurs, anti-givre : nous selectionnons le produit optimal. L\'installation est realisee a la hauteur et avec l\'orientation garantissant la meilleure visibilite.',
    'Securisez vos zones de manoeuvre dans le Val-de-Marne avec des miroirs de qualite professionnelle. Parkings en spirale, sorties aveugles, croisements dangereux : chaque point critique peut etre securise. Intervention rapide sur l\'ensemble du 94 avec devis gratuit sous 24 heures.'
  ],
  'installation-bornes-parking': [
    'Nous installons des bornes de protection pour vos places de parking dans le Val-de-Marne. Places de direction, emplacements reserves, acces pompiers : les bornes permettent de controler l\'usage de vos places. Fixes, amovibles ou retractables, nous proposons des solutions adaptees a chaque besoin du 94.',
    'Les bornes fixes et amovibles pour le Val-de-Marne securisent efficacement vos places reservees. Entreprises de Creteil, residences de Saint-Maur-des-Fosses, commerces de Vincennes : chaque installation est realisee avec soin. Nous proposons differents modeles adaptes a votre budget et vos contraintes.',
    'La protection de vos places reservees dans le 94 passe par l\'installation de bornes adaptees. Places nominatives, emplacements visiteurs VIP, acces livraisons : les bornes permettent de reserver efficacement vos espaces. Scellement dans le beton ou fixation mecanique selon la configuration de votre parking val-de-marnais.',
    'Nos solutions de bornage s\'adaptent a tous les contextes du Val-de-Marne. Bornes en acier, aluminium ou plastique haute resistance : nous selectionnons le materiau optimal selon l\'usage. Les gestionnaires de parkings d\'entreprises et de residences apprecient la qualite de nos installations.',
    'L\'installation professionnelle de bornes de parking dans le 94 garantit durabilite et efficacite. Nous assurons le scellement, l\'alignement parfait et les finitions soignees. Les bornes amovibles sont livrees avec leurs cles et systemes de verrouillage. Intervention sur l\'ensemble du Val-de-Marne.'
  ],
  'pose-butees-parking': [
    'Nous posons des butees de parking dans le Val-de-Marne pour faciliter le positionnement des vehicules et proteger vos equipements. Murs, jardineries, bornes de recharge : les butees evitent les degats lors des manoeuvres. Intervention sur tout le 94, de Creteil a Champigny-sur-Marne en passant par Vitry-sur-Seine.',
    'Les butees de roues pour vos parkings val-de-marnais guident les automobilistes et protegent votre environnement. Nous proposons differents modeles en caoutchouc, beton ou plastique selon vos contraintes. Les coproprietes et entreprises du 94 apprecient ces equipements simples mais essentiels.',
    'Facilitez le positionnement des vehicules dans vos parkings du Val-de-Marne avec des butees professionnelles. Les conducteurs savent exactement ou s\'arreter, evitant les debordements sur les voies de circulation. Installation soignee avec fixation mecanique garantissant la tenue dans le temps.',
    'La pose de butees professionnelles dans le 94 protege vos installations et clarifie le stationnement. Pieds de murs, equipements techniques, espaces verts : les butees evitent les accrochages. Nous intervenons dans tout le Val-de-Marne avec un stock de butees disponible pour une pose rapide.',
    'Protegez vos equipements et delimitez clairement vos places de parking dans le Val-de-Marne. Les butees constituent un investissement modeste pour des benefices importants : moins de degats, stationnement plus ordonne, facilite de circulation. Devis gratuit et pose dans les 48 heures sur le 94.'
  ]
};

const descriptions: Record<string, string[]> = {
  'marquage-au-sol-parking': [
    'Nos peintures professionnelles garantissent un marquage durable adapte aux contraintes des parkings val-de-marnais. Qu\'il s\'agisse des centres commerciaux de Creteil ou des parkings d\'entreprises pres d\'Orly, nous utilisons des produits haute resistance. Intervention de nuit ou le week-end pour minimiser la gene. Devis gratuit sous 24 heures apres visite technique.',
    'Notre expertise couvre tous types de parkings dans le Val-de-Marne : souterrains, aeriens, commerciaux et residentiels. Des parkings de Rungis aux residences de Saint-Maur-des-Fosses, nous realisons un tracage complet incluant places, circulations, signalisation horizontale et pictogrammes. Chaque projet beneficie d\'une etude prealable pour un resultat optimal.',
    'Nos equipements professionnels garantissent un rendu optimal dans tout le 94. Traceuses automotrices, pistolets airless, peintures homologuees : nous investissons dans du materiel de qualite. Nos techniciens sont formes aux dernieres normes et maitrisent les specificites des parkings du Val-de-Marne, des zones commerciales aux sites industriels.'
  ],
  'marquage-au-sol-parking-prive': [
    'Le marquage personnalise de votre parking prive dans le Val-de-Marne repond a vos attentes specifiques. Nous intervenons dans les coproprietes et residences de Vincennes, Saint-Maur-des-Fosses et Nogent-sur-Marne avec une attention particuliere au respect du voisinage. Horaires adaptes, nuisances sonores minimisees, proprete du chantier garantie.',
    'Le tracage des places, circulations et signalisation complete transforme votre parking prive en espace organise et securise. Dans le 94, nous accompagnons syndics et proprietaires pour des amenagements durables. Numerotation des places, zones visiteurs, emplacements deux-roues : chaque element est soigneusement planifie avant intervention.',
    'Un parking bien marque valorise votre bien immobilier dans le Val-de-Marne. Les coproprietes de Creteil, Maisons-Alfort et Fontenay-sous-Bois font appel a notre expertise pour un resultat professionnel garanti. Nous utilisons des peintures resistantes au trafic residentiel avec une duree de vie de plusieurs annees.'
  ],
  'marquage-au-sol-stationnement': [
    'L\'optimisation des zones de stationnement dans le Val-de-Marne permet d\'augmenter significativement votre capacite. Notre expertise technique, eprouvee sur les parkings de Creteil Soleil comme sur les aires de Rungis, garantit un gain de places sans compromettre la circulation. Etude prealable gratuite et tracage complet aux normes.',
    'Nos solutions de marquage s\'adaptent a tous les contextes du 94 : parkings de surface, aires de stationnement temporaires, zones de livraison. Les peintures selectionnees resistent au trafic intense des zones d\'activites d\'Orly et Rungis. Devis detaille avec plan d\'amenagement propose sous 48 heures.',
    'Le tracage aux dimensions reglementaires inclut systematiquement les places PMR obligatoires et les zones de livraison. Dans le Val-de-Marne, nous maitrisons les contraintes locales : proximite d\'equipements publics, flux pietons, acces vehicules de secours. Chaque projet respecte scrupuleusement les normes en vigueur.'
  ],
  'marquage-au-sol-parking-entreprise': [
    'Votre parking d\'entreprise dans le Val-de-Marne merite un amenagement strategique refletant votre professionnalisme. Nous concevons des plans incluant places nominatives direction, zones visiteurs clairement identifiees et emplacements collaborateurs optimises. Les entreprises de Creteil, Vitry-sur-Seine et Ivry-sur-Seine apprecient notre approche sur mesure.',
    'Notre expertise pour les zones d\'activites du 94 couvre tous les besoins des professionnels. Parcs d\'entreprises de Rungis, sites logistiques d\'Orly, zones tertiaires de Villejuif : nous intervenons de nuit ou le week-end pour ne pas perturber votre activite. Coordination avec vos services techniques assuree.',
    'Le marquage professionnel de votre parking reflete l\'image de votre entreprise val-de-marnaise. Finitions soignees, pictogrammes precis, lignes parfaitement droites : chaque detail compte. Nous realisons egalement la signalisation verticale pour un amenagement complet. Garantie 5 ans sur tous nos travaux dans le 94.'
  ],
  'marquage-au-sol-entrepot': [
    'Le marquage de votre entrepot dans le Val-de-Marne respecte les normes de securite les plus strictes. Codes couleurs INRS, delimitation des zones de stockage, voies de circulation engins : nous maitrisons les exigences reglementaires. Les plateformes logistiques de Rungis et Orly font appel a notre expertise reconnue.',
    'L\'amenagement de vos emplacements palettes, zones de picking et voies de circulation des chariots optimise vos flux logistiques. Dans le 94, nous intervenons sur des surfaces importantes avec des equipements professionnels adaptes. Tracage precis au laser pour un alignement parfait de vos racks et allees.',
    'La securite de votre entrepot val-de-marnais passe par un marquage clair conforme aux recommandations INRS. Zones de danger en jaune, circulations pietonnes en vert, stockage en blanc : chaque couleur a sa signification. Nos peintures epoxy resistent aux passages intensifs de chariots elevateurs.'
  ],
  'marquage-au-sol-industriel': [
    'Les marquages haute resistance pour sites industriels du Val-de-Marne supportent les contraintes les plus severes. Peintures epoxy et polyurethane adaptees aux passages d\'engins lourds, aux produits chimiques et aux chocs thermiques. Sites de Vitry-sur-Seine, Ivry-sur-Seine, Champigny-sur-Marne : notre expertise est reconnue.',
    'La delimitation des zones de danger, allees de circulation et emplacements machines securise votre site industriel du 94. Nous respectons les codes couleurs reglementes et integrons pictogrammes et symboles normalises. Vos collaborateurs beneficient d\'un environnement de travail clairement organise.',
    'Notre expertise couvre les secteurs agroalimentaire pres de Rungis, chimique a Ivry-sur-Seine, metallurgique a Vitry-sur-Seine et logistique autour d\'Orly. Chaque environnement necessite des produits specifiques que nous maitrisons. Etude technique prealable pour selectionner les peintures les mieux adaptees a vos contraintes.'
  ],
  'marquage-au-sol-usine': [
    'Un marquage clair dans votre usine du Val-de-Marne optimise les flux de production. Zones de travail, aires de stockage, voies de circulation : chaque espace est delimite avec precision. Nos interventions sur les sites de Champigny-sur-Marne, Vitry-sur-Seine et Maisons-Alfort ameliorent l\'efficacite operationnelle.',
    'Nos interventions pendant vos arrets de production minimisent l\'impact sur votre activite. Week-ends, periodes de maintenance, conges d\'ete : nous nous adaptons a votre planning. Les industriels du 94 apprecient notre flexibilite et notre capacite a respecter des delais serres.',
    'Les peintures epoxy ou polyurethane haute performance que nous appliquons resistent aux sollicitations intensives des environnements industriels. Passages d\'engins, produits agressifs, nettoyages frequents : vos marquages conservent leur lisibilite. Garantie etendue sur tous nos travaux dans le Val-de-Marne.'
  ],
  'marquage-routier-au-sol': [
    'Notre marquage routier sur voiries privees du Val-de-Marne repond aux memes exigences que la voirie publique. Produits homologues NF, epaisseurs conformes, retroreflexion aux normes : vos voies d\'acces beneficient d\'une signalisation professionnelle. Sites industriels de Rungis, zones d\'Orly, residences privees : couverture complete du 94.',
    'Lignes de rive, passages pietons, fleches directionnelles, logos et symboles : nous maitrisons toutes les techniques de marquage routier. Nos peintures integrent des billes de verre pour une retroreflexion optimale de nuit. Les gestionnaires de voiries privees val-de-marnaises apprecient la qualite de nos prestations.',
    'Nos techniciens qualifies utilisent des traceuses professionnelles automotrices pour un resultat parfait. Les voies d\'acces aux zones d\'activites de Rungis, Orly et Vitry-sur-Seine beneficient d\'un marquage durable et conforme. Devis gratuit avec etude technique pour tout projet dans le Val-de-Marne.'
  ],
  'marquage-garage-automobile': [
    'Le marquage adapte aux garages automobiles du Val-de-Marne utilise des peintures resistantes aux huiles, solvants et passages repetes de vehicules. Concessions de Creteil, ateliers de Champigny-sur-Marne, carrosseries d\'Ivry-sur-Seine : nos produits epoxy supportent les contraintes specifiques du secteur automobile.',
    'L\'amenagement de vos concessions, ateliers et carrosseries dans le 94 optimise l\'utilisation de votre espace de travail. Emplacements de levage, zones de stockage pieces, circulations clients et collaborateurs : chaque flux est pris en compte. Nous concevons des plans d\'amenagement sur mesure pour les professionnels de l\'automobile.',
    'Les peintures epoxy durables que nous appliquons resistent aux sols soumis aux contraintes des garages automobiles. Produits chimiques, passages de pneus, nettoyages haute pression : vos marquages conservent leur integrite. Les garagistes de Vincennes, Villejuif et Maisons-Alfort nous font confiance.'
  ],
  'marquage-zones-pietonnes': [
    'La separation des flux pietons et vehicules constitue un enjeu essentiel de securite dans le Val-de-Marne. Nos cheminements clairement traces avec peintures antiderapantes protegent efficacement vos collaborateurs et visiteurs. Entrepots de Rungis, sites d\'Orly, usines de Vitry-sur-Seine : expertise reconnue dans le 94.',
    'Les zones pietonnes bien delimitees dans vos installations val-de-marnaises respectent les codes couleurs reglementes. Vert pour les circulations, jaune pour les dangers, blanc pour les limites : chaque teinte a sa signification. Nos marquages ameliorent significativement la securite de vos sites industriels et logistiques.',
    'La protection de vos collaborateurs passe par un marquage pieton conforme aux normes. Bandes podotactiles pour malvoyants, pictogrammes PMR, passages proteges : nous realisons des amenagements complets dans tout le Val-de-Marne. Les responsables securite apprecient notre connaissance des reglementations en vigueur.'
  ],
  'places-handicapees-pmr': [
    'Les places PMR que nous realisons dans le Val-de-Marne respectent les dimensions minimales de 3,30 m x 5 m imposees par la loi. Tracage conforme avec bande de circulation laterale, pictogramme au sol et signalisation verticale. Commerces, entreprises, ERP du 94 : mise en conformite assuree.',
    'Nos amenagements PMR complets incluent pictogrammes normalises et signalisation verticale reglementaire. Les etablissements recevant du public de Creteil, Vitry-sur-Seine et Champigny-sur-Marne font appel a notre expertise pour des places handicapees conformes. Accompagnement dans vos demarches de mise en accessibilite.',
    'Creation de nouvelles places PMR ou mise en conformite de l\'existant : nous intervenons dans tout le Val-de-Marne. Notre connaissance de la reglementation accessibilite garantit des amenagements valides. Devis gratuit avec etude du nombre de places obligatoires selon la capacite de votre parking.'
  ],
  'signalisation-verticale': [
    'Notre signalisation verticale complete oriente efficacement les usagers de vos parkings val-de-marnais. Panneaux directionnels, indications de niveau, fleches de sens : chaque element contribue a une circulation fluide. Fourniture et pose dans le 94 avec fixation adaptee a chaque support.',
    'L\'installation par nos equipes qualifiees garantit des fixations durables et conformes. Hauteur reglementaire, visibilite optimale, resistance aux intemperies : chaque panneau est pose dans les regles de l\'art. Les gestionnaires de parkings de Creteil, Vincennes et Saint-Maur-des-Fosses font confiance a notre expertise.',
    'Un parking bien signalise facilite l\'experience de vos usagers et reduit les tensions. Nos solutions sur mesure s\'adaptent a tous les contextes du Val-de-Marne : parkings souterrains, aeriens, de grande surface. Etude prealable gratuite pour determiner les besoins en signaletique de votre installation.'
  ],
  'pose-ralentisseur': [
    'Les ralentisseurs que nous installons dans le Val-de-Marne sont homologues et adaptes aux zones a vitesse limitee. Coussins berlinois, dos d\'ane, plateaux sureleves : chaque dispositif repond a un usage specifique. Voiries d\'entreprises de Rungis, acces residences de Maisons-Alfort : installation dans les regles de l\'art.',
    'Notre conseil technique vous oriente vers le dispositif le plus approprie a votre situation. Trafic poids lourds, passage bus, zone pietonne : chaque contexte du 94 necessite une solution adaptee. Coussins berlinois, dos d\'ane, bandes sonores : nous maitrisons toutes les options disponibles.',
    'La pose de ralentisseurs dans le Val-de-Marne inclut systematiquement le marquage au sol et la signalisation verticale reglementaires. Panneaux d\'annonce, bandes de signalisation : l\'ensemble est conforme aux normes. Equipements certifies avec garantie fabricant pour une installation perenne.'
  ],
  'installation-panneaux-parking': [
    'Notre signaletique claire ameliore l\'orientation dans vos parkings du Val-de-Marne. Panneaux directionnels, indications de zones, informations tarifaires : chaque element guide efficacement les automobilistes. Conception sur mesure adaptee a la configuration specifique de votre parking dans le 94.',
    'Les panneaux personnalises que nous concevons s\'integrent a votre identite visuelle. Logo, couleurs, typographie : votre signaletique reflete l\'image de votre entreprise ou residence val-de-marnaise. Installation professionnelle avec fixations durables adaptees a chaque support.',
    'Nos supports de signaletique sont selectionnes pour leur robustesse et leur esthetique. Poteaux, potences, fixations murales : chaque installation dans le Val-de-Marne beneficie de notre expertise technique. Experience usager optimisee grace a une signaletique intuitive et coherente.'
  ],
  'pose-miroir-circulation': [
    'Les miroirs de securite que nous installons dans le Val-de-Marne couvrent efficacement vos angles morts. Diametre, angle de vue, materiau : chaque caracteristique est adaptee a votre configuration. Parkings, voiries privees, zones de manoeuvre : securisation complete de vos installations du 94.',
    'Notre gamme complete de miroirs convexes et hemispheriques repond a tous les besoins du Val-de-Marne. Miroirs interieurs en acrylique, exterieurs en inox, anti-givre pour zones exposees : nous selectionnons le produit optimal. Installation a la hauteur garantissant la meilleure visibilite.',
    'L\'emplacement optimal de vos miroirs est determine par une etude prealable de votre site val-de-marnais. Sortie de parking, croisement de voies, zone de manoeuvre engins : chaque point critique est analyse. Installation rapide par nos techniciens avec materiel de fixation adapte.'
  ],
  'installation-bornes-parking': [
    'Les bornes de protection que nous installons dans le Val-de-Marne securisent efficacement vos places reservees. Direction, visiteurs VIP, acces pompiers, livraisons : chaque usage necessite une solution adaptee. Bornes fixes, amovibles ou retractables selon vos contraintes dans le 94.',
    'Nos solutions de bornage couvrent tous les besoins des parkings du Val-de-Marne. Places de direction a Creteil, acces pompiers a Villejuif, emplacements livraisons a Rungis : chaque configuration fait l\'objet d\'une etude specifique. Scellement beton ou fixation mecanique selon votre sol.',
    'L\'installation professionnelle de bornes dans le 94 garantit un alignement parfait et des finitions soignees. Bornes amovibles livrees avec cles et systemes de verrouillage, bornes fixes ancrees durablement : notre pose respecte les regles de l\'art. Garantie sur tous nos travaux dans le Val-de-Marne.'
  ],
  'pose-butees-parking': [
    'Les butees de parking que nous posons dans le Val-de-Marne facilitent le positionnement des vehicules et protegent vos equipements. Murs, bornes de recharge, espaces verts, jardineries : les butees evitent les accrochages lors des manoeuvres. Installation rapide et soignee sur tout le 94.',
    'Nous proposons differentes solutions de butees adaptees a vos contraintes : caoutchouc recycle economique, beton resistant, plastique haute densite colore. Les coproprietes de Saint-Maur-des-Fosses comme les entreprises de Vitry-sur-Seine trouvent la solution adaptee a leur budget et usage.',
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
    metaDescription: `${serviceName} a ${city.name} dans le Val-de-Marne. Entreprise specialisee, intervention rapide. Devis gratuit sous 24h.`,
    content: {
      introduction: intro,
      localContext: city.context,
      serviceDescription: desc
    },
    faqs: [
      {
        question: `Quel est le delai d'intervention a ${city.name} ?`,
        answer: `Nous intervenons sous 24 a 48h a ${city.name} (94). La visite technique et le devis sont gratuits.`
      },
      {
        question: `Intervenez-vous dans les quartiers de ${city.name} ?`,
        answer: `Oui, nous couvrons tous les quartiers de ${city.name} : ${city.zones.join(', ')} et alentours.`
      },
      {
        question: `Quelles garanties proposez-vous a ${city.name} ?`,
        answer: `Tous nos travaux a ${city.name} sont garantis 5 ans minimum. Peintures professionnelles haute resistance.`
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
