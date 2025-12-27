export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
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
    shortDescription: 'Tracage professionnel de places de stationnement',
    description: 'Realisation complete du marquage au sol de votre parking : places standards, PMR, directions, fleches et numerotation. Peinture haute resistance pour trafic intense.',
    icon: 'parking',
    category: 'marquage',
    keywords: ['marquage au sol parking', 'tracage parking', 'peinture parking'],
    benefits: ['Optimisation de l\'espace', 'Conformite PMR', 'Durabilite 5+ ans'],
    searchVolume: 320,
    relatedServices: ['places-handicapees-pmr', 'signalisation-verticale', 'installation-panneaux-parking', 'pose-butees-parking']
  },
  {
    id: 'marquage-au-sol-parking-prive',
    slug: 'marquage-au-sol-parking-prive',
    name: 'Marquage au Sol Parking Prive',
    shortDescription: 'Marquage pour parkings prives et residences',
    description: 'Marquage au sol specialise pour parkings prives, residences et coproprietes. Numerotation des places, fleches de circulation, zones visiteurs.',
    icon: 'lock',
    category: 'marquage',
    keywords: ['marquage au sol parking prive', 'marquage parking residence', 'numerotation places'],
    benefits: ['Places numerotees', 'Gestion optimisee', 'Aspect professionnel'],
    searchVolume: 320,
    relatedServices: ['marquage-au-sol-parking', 'places-handicapees-pmr', 'pose-butees-parking', 'installation-panneaux-parking']
  },
  {
    id: 'marquage-au-sol-stationnement',
    slug: 'marquage-au-sol-stationnement',
    name: 'Marquage au Sol Stationnement',
    shortDescription: 'Solutions completes de marquage stationnement',
    description: 'Marquage au sol pour zones de stationnement : places voitures, motos, velos, livraisons. Signalisation horizontale conforme aux normes.',
    icon: 'car',
    category: 'marquage',
    keywords: ['marquage au sol stationnement', 'marquage places', 'signalisation stationnement'],
    benefits: ['Conformite reglementaire', 'Organisation claire', 'Duree de vie garantie'],
    searchVolume: 390,
    relatedServices: ['marquage-au-sol-parking', 'places-handicapees-pmr', 'signalisation-verticale', 'installation-bornes-parking']
  },
  {
    id: 'marquage-au-sol-parking-entreprise',
    slug: 'marquage-au-sol-parking-entreprise',
    name: 'Marquage au Sol Parking Entreprise',
    shortDescription: 'Marquage professionnel pour parkings d\'entreprise',
    description: 'Marquage au sol complet pour parkings d\'entreprise : places employes, visiteurs, direction, PMR. Image professionnelle garantie.',
    icon: 'building',
    category: 'marquage',
    keywords: ['marquage au sol parking entreprise', 'parking societe', 'marquage professionnel'],
    benefits: ['Image corporate', 'Gestion des flux', 'Places reservees'],
    searchVolume: 40,
    relatedServices: ['marquage-au-sol-parking', 'places-handicapees-pmr', 'installation-panneaux-parking', 'signalisation-verticale']
  },
  {
    id: 'marquage-au-sol-entrepot',
    slug: 'marquage-au-sol-entrepot',
    name: 'Marquage au Sol Entrepot',
    shortDescription: 'Marquage zones de stockage et circulation',
    description: 'Marquage au sol professionnel pour entrepots : zones de stockage, allees de circulation, quais de chargement et zones de securite selon normes.',
    icon: 'warehouse',
    category: 'marquage',
    keywords: ['marquage au sol entrepot', 'marquage logistique', 'peinture sol entrepot'],
    benefits: ['Flux optimises', 'Securite renforcee', 'Productivite accrue'],
    searchVolume: 110,
    relatedServices: ['marquage-au-sol-industriel', 'marquage-zones-pietonnes', 'signalisation-verticale', 'marquage-au-sol-usine']
  },
  {
    id: 'marquage-au-sol-industriel',
    slug: 'marquage-au-sol-industriel',
    name: 'Marquage au Sol Industriel',
    shortDescription: 'Marquage pour sites industriels et usines',
    description: 'Marquage au sol industriel haute resistance : zones de danger, allees de circulation, emplacements machines, chemins d\'evacuation. Conforme ICPE.',
    icon: 'factory',
    category: 'marquage',
    keywords: ['marquage au sol industriel', 'marquage usine', 'peinture industrielle'],
    benefits: ['Resistance extreme', 'Conformite ICPE', 'Securite personnel'],
    searchVolume: 90,
    relatedServices: ['marquage-au-sol-entrepot', 'marquage-au-sol-usine', 'marquage-zones-pietonnes', 'signalisation-verticale']
  },
  {
    id: 'marquage-au-sol-usine',
    slug: 'marquage-au-sol-usine',
    name: 'Marquage au Sol Usine',
    shortDescription: 'Marquage specialise pour environnement usine',
    description: 'Marquage au sol adapte aux contraintes des usines : resistance chimique, trafic intense, zones ATEX. Intervention possible hors heures de production.',
    icon: 'cog',
    category: 'marquage',
    keywords: ['marquage au sol usine', 'marquage atelier', 'peinture sol usine'],
    benefits: ['Resistance chimique', 'Intervention flexible', 'Zones ATEX'],
    searchVolume: 40,
    relatedServices: ['marquage-au-sol-industriel', 'marquage-au-sol-entrepot', 'marquage-zones-pietonnes', 'signalisation-verticale']
  },
  {
    id: 'marquage-routier-au-sol',
    slug: 'marquage-routier-au-sol',
    name: 'Marquage Routier au Sol',
    shortDescription: 'Marquage voies de circulation et routes privees',
    description: 'Marquage routier au sol pour voiries privees : lignes de circulation, stops, cedez-le-passage, passages pietons, fleches directionnelles.',
    icon: 'road',
    category: 'marquage',
    keywords: ['marquage routier au sol', 'ligne circulation', 'signalisation horizontale'],
    benefits: ['Securite routiere', 'Conformite code route', 'Visibilite optimale'],
    searchVolume: 170,
    relatedServices: ['signalisation-verticale', 'pose-ralentisseur', 'marquage-zones-pietonnes', 'installation-panneaux-parking']
  },
  {
    id: 'marquage-garage-automobile',
    slug: 'marquage-garage-automobile',
    name: 'Marquage Garage Automobile',
    shortDescription: 'Marquage specialise pour garages et concessions',
    description: 'Solutions de marquage pour garages automobiles, concessions et ateliers : zones de travail, circulation, stockage vehicules, baies de service.',
    icon: 'wrench',
    category: 'marquage',
    keywords: ['marquage garage', 'peinture sol garage', 'marquage atelier auto'],
    benefits: ['Organisation optimale', 'Image professionnelle', 'Securite atelier'],
    relatedServices: ['marquage-au-sol-parking', 'signalisation-verticale', 'pose-butees-parking', 'marquage-zones-pietonnes']
  },
  {
    id: 'marquage-zones-pietonnes',
    slug: 'marquage-zones-pietonnes',
    name: 'Marquage Zones Pietonnes',
    shortDescription: 'Securisation des passages pietons',
    description: 'Marquage des zones pietonnes, passages proteges et cheminements securises pour la protection de vos collaborateurs et visiteurs.',
    icon: 'pedestrian',
    category: 'marquage',
    keywords: ['marquage pieton', 'passage pieton', 'zone pietonne securisee'],
    benefits: ['Securite maximale', 'Conformite reglementaire', 'Visibilite optimale'],
    relatedServices: ['marquage-au-sol-industriel', 'signalisation-verticale', 'pose-ralentisseur', 'marquage-routier-au-sol']
  },
  {
    id: 'places-handicapees-pmr',
    slug: 'places-handicapees-pmr',
    name: 'Places Handicapees PMR',
    shortDescription: 'Marquage conforme aux normes PMR',
    description: 'Realisation de places de stationnement PMR conformes a la reglementation : dimensions 3.30m x 5m minimum, pictogrammes, signalisation verticale.',
    icon: 'accessible',
    category: 'marquage',
    keywords: ['place PMR', 'place handicape', 'stationnement PMR', 'marquage PMR'],
    benefits: ['Conformite legale', 'Accessibilite totale', 'Signalisation normee'],
    relatedServices: ['marquage-au-sol-parking', 'signalisation-verticale', 'installation-panneaux-parking', 'marquage-au-sol-parking-entreprise']
  },

  // ═══════════════════════════════════════════════════════════════════
  // SIGNALISATION VERTICALE (6 services)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'signalisation-verticale',
    slug: 'signalisation-verticale',
    name: 'Signalisation Verticale',
    shortDescription: 'Installation complete de signalisation verticale',
    description: 'Installation de signalisation verticale pour parkings et sites prives : panneaux directionnels, interdiction, obligation, information. Fourniture et pose.',
    icon: 'sign',
    category: 'signalisation',
    keywords: ['signalisation verticale', 'panneau signalisation', 'signalisation parking'],
    benefits: ['Installation complete', 'Conformite NF', 'Durabilite garantie'],
    searchVolume: 590,
    relatedServices: ['installation-panneaux-parking', 'pose-miroir-circulation', 'installation-bornes-parking', 'marquage-au-sol-parking']
  },
  {
    id: 'pose-ralentisseur',
    slug: 'pose-ralentisseur',
    name: 'Pose de Ralentisseur',
    shortDescription: 'Installation de ralentisseurs et dos d\'ane',
    description: 'Fourniture et pose de ralentisseurs pour parkings et voiries privees : dos d\'ane, coussins berlinois, ralentisseurs modulaires. Installation rapide.',
    icon: 'bump',
    category: 'signalisation',
    keywords: ['pose ralentisseur', 'installation dos ane', 'ralentisseur parking'],
    benefits: ['Securite renforcee', 'Reduction vitesse', 'Installation rapide'],
    searchVolume: 110,
    relatedServices: ['signalisation-verticale', 'marquage-routier-au-sol', 'installation-bornes-parking', 'marquage-zones-pietonnes']
  },
  {
    id: 'installation-panneaux-parking',
    slug: 'installation-panneaux-parking',
    name: 'Installation Panneaux Parking',
    shortDescription: 'Pose de panneaux pour parkings',
    description: 'Installation de panneaux de signalisation pour parkings : stationnement interdit, reserve, visiteurs, direction, limitation vitesse. Scellement ou platine.',
    icon: 'parking-sign',
    category: 'signalisation',
    keywords: ['panneau parking', 'panneau stationnement', 'signalisation parking'],
    benefits: ['Orientation claire', 'Reglementation visible', 'Pose professionnelle'],
    searchVolume: 90,
    relatedServices: ['signalisation-verticale', 'marquage-au-sol-parking', 'pose-miroir-circulation', 'places-handicapees-pmr']
  },
  {
    id: 'pose-miroir-circulation',
    slug: 'pose-miroir-circulation',
    name: 'Pose Miroir de Circulation',
    shortDescription: 'Installation de miroirs de securite',
    description: 'Fourniture et pose de miroirs de circulation pour ameliorer la visibilite dans les angles morts : miroirs convexes, hemispheriques, industriels.',
    icon: 'mirror',
    category: 'signalisation',
    keywords: ['miroir circulation', 'miroir convexe', 'miroir securite parking'],
    benefits: ['Visibilite accrue', 'Reduction accidents', 'Installation solide'],
    searchVolume: 390,
    relatedServices: ['signalisation-verticale', 'installation-panneaux-parking', 'pose-ralentisseur', 'marquage-au-sol-parking']
  },
  {
    id: 'installation-bornes-parking',
    slug: 'installation-bornes-parking',
    name: 'Installation Bornes Parking',
    shortDescription: 'Pose de bornes et potelets',
    description: 'Installation de bornes et potelets pour parkings : bornes flexibles, potelets rabattables, bornes anti-stationnement. Protection et delimitation.',
    icon: 'bollard',
    category: 'signalisation',
    keywords: ['borne parking', 'potelet parking', 'borne anti-stationnement'],
    benefits: ['Protection efficace', 'Delimitation claire', 'Resistance chocs'],
    searchVolume: 90,
    relatedServices: ['signalisation-verticale', 'pose-butees-parking', 'installation-panneaux-parking', 'marquage-au-sol-parking']
  },
  {
    id: 'pose-butees-parking',
    slug: 'pose-butees-parking',
    name: 'Pose Butees de Parking',
    shortDescription: 'Installation de butees de stationnement',
    description: 'Fourniture et pose de butees de parking pour delimiter les places de stationnement : butees beton, caoutchouc, plastique recycle. Fixation mecanique ou collee.',
    icon: 'stop-block',
    category: 'signalisation',
    keywords: ['butee parking', 'butee stationnement', 'butee roue'],
    benefits: ['Delimitation precise', 'Protection murs', 'Installation durable'],
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
