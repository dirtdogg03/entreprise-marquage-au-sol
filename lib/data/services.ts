export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string; // Chemin vers l'image du service
  category: 'marquage' | 'signalisation';
  keywords: string[];
  benefits: string[];
  searchVolume?: number; // Volume mensuel DataForSEO
  relatedServices?: string[]; // IDs des services complementaires
}

export const services: Service[] = [
  // ═══════════════════════════════════════════════════════════════════
  // MARQUAGE AU SOL (11 services)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'marquage-au-sol-parking',
    slug: 'marquage-au-sol-parking',
    name: 'Marquage au Sol Parking',
    shortDescription: 'Traçage professionnel de places de stationnement',
    description: 'Réalisation complète du marquage au sol de votre parking : places standards, PMR, directions, flèches et numérotation. Peinture haute résistance pour trafic intense.',
    icon: 'parking',
    image: '/images/services/marquage-au-sol-parking.jpg',
    category: 'marquage',
    keywords: ['marquage au sol parking', 'tracage parking', 'peinture parking'],
    benefits: ['Optimisation de l\'espace', 'Conformité PMR', 'Durabilité 5+ ans'],
    searchVolume: 320,
    relatedServices: ['places-handicapees-pmr', 'signalisation-verticale', 'installation-panneaux-parking', 'pose-butees-parking']
  },
  {
    id: 'marquage-au-sol-parking-prive',
    slug: 'marquage-au-sol-parking-prive',
    name: 'Marquage au Sol Parking Privé',
    shortDescription: 'Marquage pour parkings privés et résidences',
    description: 'Marquage au sol spécialisé pour parkings privés, résidences et copropriétés. Numérotation des places, flèches de circulation, zones visiteurs.',
    icon: 'lock',
    image: '/images/services/marquage-au-sol-parking-prive.jpg',
    category: 'marquage',
    keywords: ['marquage au sol parking prive', 'marquage parking residence', 'numerotation places'],
    benefits: ['Places numérotées', 'Gestion optimisée', 'Aspect professionnel'],
    searchVolume: 320,
    relatedServices: ['marquage-au-sol-parking', 'places-handicapees-pmr', 'pose-butees-parking', 'installation-panneaux-parking']
  },
  {
    id: 'marquage-au-sol-stationnement',
    slug: 'marquage-au-sol-stationnement',
    name: 'Marquage au Sol Stationnement',
    shortDescription: 'Solutions complètes de marquage stationnement',
    description: 'Marquage au sol pour zones de stationnement : places voitures, motos, vélos, livraisons. Signalisation horizontale conforme aux normes.',
    icon: 'car',
    image: '/images/services/marquage-au-sol-stationnement.jpg',
    category: 'marquage',
    keywords: ['marquage au sol stationnement', 'marquage places', 'signalisation stationnement'],
    benefits: ['Conformité réglementaire', 'Organisation claire', 'Durée de vie garantie'],
    searchVolume: 390,
    relatedServices: ['marquage-au-sol-parking', 'places-handicapees-pmr', 'signalisation-verticale', 'installation-bornes-parking']
  },
  {
    id: 'marquage-au-sol-parking-entreprise',
    slug: 'marquage-au-sol-parking-entreprise',
    name: 'Marquage au Sol Parking Entreprise',
    shortDescription: 'Marquage professionnel pour parkings d\'entreprise',
    description: 'Marquage au sol complet pour parkings d\'entreprise : places employés, visiteurs, direction, PMR. Image professionnelle garantie.',
    icon: 'building',
    image: '/images/services/marquage-au-sol-parking-entreprise.jpg',
    category: 'marquage',
    keywords: ['marquage au sol parking entreprise', 'parking societe', 'marquage professionnel'],
    benefits: ['Image corporate', 'Gestion des flux', 'Places réservées'],
    searchVolume: 40,
    relatedServices: ['marquage-au-sol-parking', 'places-handicapees-pmr', 'installation-panneaux-parking', 'signalisation-verticale']
  },
  {
    id: 'marquage-au-sol-entrepot',
    slug: 'marquage-au-sol-entrepot',
    name: 'Marquage au Sol Entrepôt',
    shortDescription: 'Marquage zones de stockage et circulation',
    description: 'Marquage au sol professionnel pour entrepôts : zones de stockage, allées de circulation, quais de chargement et zones de sécurité selon normes.',
    icon: 'warehouse',
    image: '/images/services/marquage-au-sol-entrepot.jpg',
    category: 'marquage',
    keywords: ['marquage au sol entrepot', 'marquage logistique', 'peinture sol entrepot'],
    benefits: ['Flux optimisés', 'Sécurité renforcée', 'Productivité accrue'],
    searchVolume: 110,
    relatedServices: ['marquage-au-sol-industriel', 'marquage-zones-pietonnes', 'signalisation-verticale', 'marquage-au-sol-usine']
  },
  {
    id: 'marquage-au-sol-industriel',
    slug: 'marquage-au-sol-industriel',
    name: 'Marquage au Sol Industriel',
    shortDescription: 'Marquage pour sites industriels et usines',
    description: 'Marquage au sol industriel haute résistance : zones de danger, allées de circulation, emplacements machines, chemins d\'évacuation. Conforme ICPE.',
    icon: 'factory',
    image: '/images/services/marquage-au-sol-industriel.jpg',
    category: 'marquage',
    keywords: ['marquage au sol industriel', 'marquage usine', 'peinture industrielle'],
    benefits: ['Résistance extrême', 'Conformité ICPE', 'Sécurité personnel'],
    searchVolume: 90,
    relatedServices: ['marquage-au-sol-entrepot', 'marquage-au-sol-usine', 'marquage-zones-pietonnes', 'signalisation-verticale']
  },
  {
    id: 'marquage-au-sol-usine',
    slug: 'marquage-au-sol-usine',
    name: 'Marquage au Sol Usine',
    shortDescription: 'Marquage spécialisé pour environnement usine',
    description: 'Marquage au sol adapté aux contraintes des usines : résistance chimique, trafic intense, zones ATEX. Intervention possible hors heures de production.',
    icon: 'cog',
    image: '/images/services/marquage-au-sol-usine.jpg',
    category: 'marquage',
    keywords: ['marquage au sol usine', 'marquage atelier', 'peinture sol usine'],
    benefits: ['Résistance chimique', 'Intervention flexible', 'Zones ATEX'],
    searchVolume: 40,
    relatedServices: ['marquage-au-sol-industriel', 'marquage-au-sol-entrepot', 'marquage-zones-pietonnes', 'signalisation-verticale']
  },
  {
    id: 'marquage-routier-au-sol',
    slug: 'marquage-routier-au-sol',
    name: 'Marquage Routier au Sol',
    shortDescription: 'Marquage voies de circulation et routes privées',
    description: 'Marquage routier au sol pour voiries privées : lignes de circulation, stops, cédez-le-passage, passages piétons, flèches directionnelles.',
    icon: 'road',
    image: '/images/services/marquage-routier-au-sol.jpg',
    category: 'marquage',
    keywords: ['marquage routier au sol', 'ligne circulation', 'signalisation horizontale'],
    benefits: ['Sécurité routière', 'Conformité code route', 'Visibilité optimale'],
    searchVolume: 170,
    relatedServices: ['signalisation-verticale', 'pose-ralentisseur', 'marquage-zones-pietonnes', 'installation-panneaux-parking']
  },
  {
    id: 'marquage-garage-automobile',
    slug: 'marquage-garage-automobile',
    name: 'Marquage Garage Automobile',
    shortDescription: 'Marquage spécialisé pour garages et concessions',
    description: 'Solutions de marquage pour garages automobiles, concessions et ateliers : zones de travail, circulation, stockage véhicules, baies de service.',
    icon: 'wrench',
    image: '/images/services/marquage-garage-automobile.jpg',
    category: 'marquage',
    keywords: ['marquage garage', 'peinture sol garage', 'marquage atelier auto'],
    benefits: ['Organisation optimale', 'Image professionnelle', 'Sécurité atelier'],
    relatedServices: ['marquage-au-sol-parking', 'signalisation-verticale', 'pose-butees-parking', 'marquage-zones-pietonnes']
  },
  {
    id: 'marquage-zones-pietonnes',
    slug: 'marquage-zones-pietonnes',
    name: 'Marquage Zones Piétonnes',
    shortDescription: 'Sécurisation des passages piétons',
    description: 'Marquage des zones piétonnes, passages protégés et cheminements sécurisés pour la protection de vos collaborateurs et visiteurs.',
    icon: 'pedestrian',
    image: '/images/services/marquage-zones-pietonnes.jpg',
    category: 'marquage',
    keywords: ['marquage pieton', 'passage pieton', 'zone pietonne securisee'],
    benefits: ['Sécurité maximale', 'Conformité réglementaire', 'Visibilité optimale'],
    relatedServices: ['marquage-au-sol-industriel', 'signalisation-verticale', 'pose-ralentisseur', 'marquage-routier-au-sol']
  },
  {
    id: 'places-handicapees-pmr',
    slug: 'places-handicapees-pmr',
    name: 'Places Handicapées PMR',
    shortDescription: 'Marquage conforme aux normes PMR',
    description: 'Réalisation de places de stationnement PMR conformes à la réglementation : dimensions 3.30m x 5m minimum, pictogrammes, signalisation verticale.',
    icon: 'accessible',
    image: '/images/services/places-handicapees-pmr.jpg',
    category: 'marquage',
    keywords: ['place PMR', 'place handicape', 'stationnement PMR', 'marquage PMR'],
    benefits: ['Conformité légale', 'Accessibilité totale', 'Signalisation normée'],
    relatedServices: ['marquage-au-sol-parking', 'signalisation-verticale', 'installation-panneaux-parking', 'marquage-au-sol-parking-entreprise']
  },

  // ═══════════════════════════════════════════════════════════════════
  // ACCES VEHICULES - Portails, Garages, Barrières (4 services)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'marquage-au-sol-porte-de-garage',
    slug: 'marquage-au-sol-porte-de-garage',
    name: 'Marquage au Sol Porte de Garage',
    shortDescription: 'Marquage zone interdiction devant porte de garage',
    description: 'Réalisation du marquage au sol devant votre porte de garage : bandes hachurées jaunes, zone interdiction de stationnement, ligne de recul. Protégez efficacement l\'accès à votre garage contre le stationnement sauvage avec un marquage conforme aux normes.',
    icon: 'garage',
    image: '/images/services/marquage-au-sol-porte-de-garage.jpg',
    category: 'marquage',
    keywords: ['marquage au sol porte de garage', 'marquage au sol sortie de garage', 'marquage au sol devant garage', 'interdiction stationner devant garage', 'ligne jaune devant garage', 'norme marquage porte garage'],
    benefits: ['Protection accès garage', 'Dissuasion stationnement', 'Conformité réglementaire', 'Intervention rapide'],
    searchVolume: 200,
    relatedServices: ['marquage-au-sol-portail-coulissant', 'marquage-au-sol-parking-prive', 'signalisation-verticale', 'installation-panneaux-parking']
  },
  {
    id: 'marquage-au-sol-portail-coulissant',
    slug: 'marquage-au-sol-portail-coulissant',
    name: 'Marquage au Sol Portail Coulissant',
    shortDescription: 'Marquage zone de débattement portail coulissant automatique',
    description: 'Marquage au sol professionnel pour portail coulissant automatique : zone de débattement, bandes de sécurité, signalisation interdiction de stationnement. Conformité aux normes NF pour la sécurité de votre accès et la protection contre le stationnement gênant.',
    icon: 'sliding-gate',
    image: '/images/services/marquage-au-sol-portail-coulissant.jpg',
    category: 'marquage',
    keywords: ['marquage au sol portail coulissant', 'norme marquage au sol portail coulissant', 'marquage au sol portail automatique', 'zone débattement portail coulissant', 'réglementation marquage portail coulissant'],
    benefits: ['Sécurité portail automatique', 'Conformité normes NF', 'Protection zone débattement', 'Durabilité garantie'],
    searchVolume: 140,
    relatedServices: ['marquage-au-sol-portail-battant', 'marquage-au-sol-porte-de-garage', 'signalisation-verticale', 'installation-panneaux-parking']
  },
  {
    id: 'marquage-au-sol-portail-battant',
    slug: 'marquage-au-sol-portail-battant',
    name: 'Marquage au Sol Portail Battant',
    shortDescription: 'Marquage zone de débattement portail battant automatique',
    description: 'Réalisation du marquage au sol pour portail battant (à 2 vantaux) : délimitation de la zone de débattement, bandes hachurées de sécurité, signalisation au sol. Protection optimale de l\'aire d\'ouverture de votre portail battant automatique.',
    icon: 'swing-gate',
    image: '/images/services/marquage-au-sol-portail-battant.jpg',
    category: 'marquage',
    keywords: ['marquage au sol portail battant', 'marquage au sol portail', 'norme marquage au sol portail', 'zone débattement portail battant', 'réglementation marquage portail automatique', 'signalisation portail automatique'],
    benefits: ['Protection aire d\'ouverture', 'Sécurité vantaux', 'Conformité réglementaire', 'Visibilité optimale'],
    searchVolume: 140,
    relatedServices: ['marquage-au-sol-portail-coulissant', 'marquage-au-sol-porte-de-garage', 'signalisation-verticale', 'installation-panneaux-parking']
  },
  {
    id: 'marquage-au-sol-barriere-levante',
    slug: 'marquage-au-sol-barriere-levante',
    name: 'Marquage au Sol Barrière Levante',
    shortDescription: 'Marquage zone de sécurité barrière levante automatique',
    description: 'Marquage au sol professionnel pour barrière levante de parking : zone de sécurité, bandes d\'arrêt, signalisation au sol, délimitation zone danger. Installation conforme aux normes pour parkings privés, résidences et entreprises.',
    icon: 'barrier',
    image: '/images/services/marquage-au-sol-barriere-levante.jpg',
    category: 'marquage',
    keywords: ['marquage au sol barrière levante', 'norme marquage au sol barrière levante', 'barrière levante parking', 'signalisation barrière automatique', 'zone sécurité barrière levante'],
    benefits: ['Sécurité usagers', 'Zone danger délimitée', 'Conformité normes parking', 'Visibilité renforcée'],
    searchVolume: 220,
    relatedServices: ['marquage-au-sol-parking', 'marquage-au-sol-parking-prive', 'signalisation-verticale', 'installation-bornes-parking']
  },

  // ═══════════════════════════════════════════════════════════════════
  // SIGNALISATION VERTICALE (6 services)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'signalisation-verticale',
    slug: 'signalisation-verticale',
    name: 'Signalisation Verticale',
    shortDescription: 'Installation complète de signalisation verticale',
    description: 'Installation de signalisation verticale pour parkings et sites privés : panneaux directionnels, interdiction, obligation, information. Fourniture et pose.',
    icon: 'sign',
    image: '/images/services/signalisation-verticale.jpg',
    category: 'signalisation',
    keywords: ['signalisation verticale', 'panneau signalisation', 'signalisation parking'],
    benefits: ['Installation complète', 'Conformité NF', 'Durabilité garantie'],
    searchVolume: 590,
    relatedServices: ['installation-panneaux-parking', 'pose-miroir-circulation', 'installation-bornes-parking', 'marquage-au-sol-parking']
  },
  {
    id: 'pose-ralentisseur',
    slug: 'pose-ralentisseur',
    name: 'Pose de Ralentisseur',
    shortDescription: 'Installation de ralentisseurs et dos d\'âne',
    description: 'Fourniture et pose de ralentisseurs pour parkings et voiries privées : dos d\'âne, coussins berlinois, ralentisseurs modulaires. Installation rapide.',
    icon: 'bump',
    image: '/images/services/pose-ralentisseur.jpg',
    category: 'signalisation',
    keywords: ['pose ralentisseur', 'installation dos ane', 'ralentisseur parking'],
    benefits: ['Sécurité renforcée', 'Réduction vitesse', 'Installation rapide'],
    searchVolume: 110,
    relatedServices: ['signalisation-verticale', 'marquage-routier-au-sol', 'installation-bornes-parking', 'marquage-zones-pietonnes']
  },
  {
    id: 'installation-panneaux-parking',
    slug: 'installation-panneaux-parking',
    name: 'Installation Panneaux Parking',
    shortDescription: 'Pose de panneaux pour parkings',
    description: 'Installation de panneaux de signalisation pour parkings : stationnement interdit, réservé, visiteurs, direction, limitation vitesse. Scellement ou platine.',
    icon: 'parking-sign',
    image: '/images/services/installation-panneaux-parking.jpg',
    category: 'signalisation',
    keywords: ['panneau parking', 'panneau stationnement', 'signalisation parking'],
    benefits: ['Orientation claire', 'Réglementation visible', 'Pose professionnelle'],
    searchVolume: 90,
    relatedServices: ['signalisation-verticale', 'marquage-au-sol-parking', 'pose-miroir-circulation', 'places-handicapees-pmr']
  },
  {
    id: 'pose-miroir-circulation',
    slug: 'pose-miroir-circulation',
    name: 'Pose Miroir de Circulation',
    shortDescription: 'Installation de miroirs de sécurité',
    description: 'Fourniture et pose de miroirs de circulation pour améliorer la visibilité dans les angles morts : miroirs convexes, hémisphériques, industriels.',
    icon: 'mirror',
    image: '/images/services/pose-miroir-circulation.jpg',
    category: 'signalisation',
    keywords: ['miroir circulation', 'miroir convexe', 'miroir securite parking'],
    benefits: ['Visibilité accrue', 'Réduction accidents', 'Installation solide'],
    searchVolume: 390,
    relatedServices: ['signalisation-verticale', 'installation-panneaux-parking', 'pose-ralentisseur', 'marquage-au-sol-parking']
  },
  {
    id: 'installation-bornes-parking',
    slug: 'installation-bornes-parking',
    name: 'Installation Bornes Parking',
    shortDescription: 'Pose de bornes et potelets',
    description: 'Installation de bornes et potelets pour parkings : bornes flexibles, potelets rabattables, bornes anti-stationnement. Protection et délimitation.',
    icon: 'bollard',
    image: '/images/services/installation-bornes-parking.jpg',
    category: 'signalisation',
    keywords: ['borne parking', 'potelet parking', 'borne anti-stationnement'],
    benefits: ['Protection efficace', 'Délimitation claire', 'Résistance chocs'],
    searchVolume: 90,
    relatedServices: ['signalisation-verticale', 'pose-butees-parking', 'installation-panneaux-parking', 'marquage-au-sol-parking']
  },
  {
    id: 'pose-butees-parking',
    slug: 'pose-butees-parking',
    name: 'Pose Butées de Parking',
    shortDescription: 'Installation de butées de stationnement',
    description: 'Fourniture et pose de butées de parking pour délimiter les places de stationnement : butées béton, caoutchouc, plastique recyclé. Fixation mécanique ou collée.',
    icon: 'stop-block',
    image: '/images/services/pose-butees-parking.jpg',
    category: 'signalisation',
    keywords: ['butee parking', 'butee stationnement', 'butee roue'],
    benefits: ['Délimitation précise', 'Protection murs', 'Installation durable'],
    searchVolume: 170,
    relatedServices: ['marquage-au-sol-parking', 'installation-bornes-parking', 'signalisation-verticale', 'marquage-au-sol-parking-prive']
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};

export const getServicesByCategory = (category: 'marquage' | 'signalisation'): Service[] => {
  return services.filter(s => s.category === category);
};

export const getAllServiceSlugs = (): string[] => {
  return services.map(s => s.slug);
};
