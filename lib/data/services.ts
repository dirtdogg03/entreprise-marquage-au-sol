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
}

export const services: Service[] = [
  // MARQUAGE AU SOL
  {
    id: 'marquage-parking',
    slug: 'marquage-parking-entreprise',
    name: 'Marquage Parking Entreprise',
    shortDescription: 'Tracage professionnel de places de stationnement',
    description: 'Realisation complete du marquage de votre parking entreprise : places standards, PMR, directions, fleches et numerotation.',
    icon: 'parking',
    category: 'marquage',
    keywords: ['marquage parking', 'tracage parking', 'peinture parking entreprise'],
    benefits: ['Optimisation de l\'espace', 'Conformite PMR', 'Durabilite 5+ ans']
  },
  {
    id: 'marquage-entrepot',
    slug: 'marquage-entrepot-logistique',
    name: 'Marquage Entrepot Logistique',
    shortDescription: 'Marquage zones de stockage et circulation',
    description: 'Marquage professionnel pour entrepots : zones de stockage, allees de circulation, quais de chargement et zones de securite.',
    icon: 'warehouse',
    category: 'marquage',
    keywords: ['marquage entrepot', 'marquage logistique', 'peinture sol entrepot'],
    benefits: ['Flux optimises', 'Securite renforcee', 'Productivite accrue']
  },
  {
    id: 'marquage-garage',
    slug: 'marquage-garage-automobile',
    name: 'Marquage Garage Automobile',
    shortDescription: 'Marquage specialise pour garages et concessions',
    description: 'Solutions de marquage pour garages automobiles, concessions et ateliers : zones de travail, circulation, stockage vehicules.',
    icon: 'car',
    category: 'marquage',
    keywords: ['marquage garage', 'peinture sol garage', 'marquage atelier'],
    benefits: ['Organisation optimale', 'Image professionnelle', 'Securite atelier']
  },
  {
    id: 'marquage-pietons',
    slug: 'marquage-zones-pietonnes',
    name: 'Marquage Zones Pietonnes',
    shortDescription: 'Securisation des passages pietons',
    description: 'Marquage des zones pietonnes, passages proteges et cheminements securises pour la protection de vos collaborateurs et visiteurs.',
    icon: 'pedestrian',
    category: 'marquage',
    keywords: ['marquage pieton', 'passage pieton', 'zone pietonne'],
    benefits: ['Securite maximale', 'Conformite reglementaire', 'Visibilite optimale']
  },
  {
    id: 'places-pmr',
    slug: 'places-handicapees-pmr',
    name: 'Places Handicapees PMR',
    shortDescription: 'Marquage conforme aux normes PMR',
    description: 'Realisation de places de stationnement PMR conformes a la reglementation : dimensions, pictogrammes, signalisation verticale.',
    icon: 'accessible',
    category: 'marquage',
    keywords: ['place PMR', 'place handicape', 'stationnement PMR'],
    benefits: ['Conformite legale', 'Accessibilite totale', 'Signalisation normee']
  },
  {
    id: 'marquage-securite',
    slug: 'marquage-securite-industriel',
    name: 'Marquage Securite Industriel',
    shortDescription: 'Zones de danger et securite industrielle',
    description: 'Marquage de securite pour sites industriels : zones de danger, equipements de securite, chemins d\'evacuation, pictogrammes.',
    icon: 'shield',
    category: 'marquage',
    keywords: ['marquage securite', 'zone danger', 'marquage industriel'],
    benefits: ['Prevention accidents', 'Conformite ICPE', 'Protection personnel']
  },
  {
    id: 'lignes-circulation',
    slug: 'lignes-circulation',
    name: 'Lignes de Circulation',
    shortDescription: 'Tracage des voies de circulation',
    description: 'Marquage des lignes de circulation pour vehicules et engins : fleches directionnelles, separations de voies, stops.',
    icon: 'road',
    category: 'marquage',
    keywords: ['ligne circulation', 'fleche directionnelle', 'voie circulation'],
    benefits: ['Fluidite trafic', 'Securite renforcee', 'Organisation claire']
  },
  {
    id: 'marquage-portes',
    slug: 'marquage-portes-automatiques',
    name: 'Marquage Portes Automatiques',
    shortDescription: 'Zones de securite portes et portails',
    description: 'Marquage des zones de securite autour des portes automatiques, portails et quais : bandes de recul, zones de danger.',
    icon: 'door',
    category: 'marquage',
    keywords: ['marquage porte automatique', 'zone securite portail', 'bande recul'],
    benefits: ['Prevention accidents', 'Conformite normes', 'Securite utilisateurs']
  },
  // SIGNALISATION VERTICALE
  {
    id: 'panneaux-directionnels',
    slug: 'panneaux-directionnels',
    name: 'Panneaux Directionnels',
    shortDescription: 'Signalisation directionnelle complete',
    description: 'Installation de panneaux directionnels pour orienter vehicules et pietons : fleches, indications, numerotation zones.',
    icon: 'sign',
    category: 'signalisation',
    keywords: ['panneau directionnel', 'signaletique', 'fleche direction'],
    benefits: ['Orientation claire', 'Image professionnelle', 'Installation rapide']
  },
  {
    id: 'signalisation-securite',
    slug: 'signalisation-securite',
    name: 'Signalisation Securite',
    shortDescription: 'Panneaux de securite et danger',
    description: 'Installation de signalisation de securite : panneaux danger, interdiction, obligation, evacuation selon normes NF.',
    icon: 'warning',
    category: 'signalisation',
    keywords: ['panneau securite', 'signalisation danger', 'panneau obligation'],
    benefits: ['Conformite NF', 'Prevention risques', 'Information claire']
  },
  {
    id: 'miroirs-circulation',
    slug: 'miroirs-circulation',
    name: 'Miroirs de Circulation',
    shortDescription: 'Miroirs de securite et angles morts',
    description: 'Fourniture et pose de miroirs de circulation pour ameliorer la visibilite : miroirs convexes, hemispheriques, industriels.',
    icon: 'mirror',
    category: 'signalisation',
    keywords: ['miroir circulation', 'miroir convexe', 'miroir securite'],
    benefits: ['Visibilite accrue', 'Reduction accidents', 'Installation simple']
  },
  {
    id: 'bornes-poteaux',
    slug: 'bornes-poteaux',
    name: 'Bornes et Poteaux',
    shortDescription: 'Delimitation et protection des zones',
    description: 'Installation de bornes et poteaux pour delimiter et proteger vos espaces : bornes flexibles, poteaux fixes, balises.',
    icon: 'bollard',
    category: 'signalisation',
    keywords: ['borne parking', 'poteau delimitation', 'balise'],
    benefits: ['Protection efficace', 'Delimitation claire', 'Resistance chocs']
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};

export const getServicesByCategory = (category: 'marquage' | 'signalisation'): Service[] => {
  return services.filter(s => s.category === category);
};
