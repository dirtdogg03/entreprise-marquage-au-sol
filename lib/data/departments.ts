export interface Department {
  code: string;
  slug: string;
  name: string;
  fullName: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  mainCities: string[];
  characteristics: string[];
}

export const departments: Department[] = [
  {
    code: '75',
    slug: 'paris',
    name: 'Paris',
    fullName: 'Paris',
    description: 'Capitale de la France, Paris concentre de nombreuses entreprises, commerces et parkings souterrains nécessitant un marquage au sol professionnel. Nous intervenons dans tous les arrondissements pour le traçage de places, la signalisation PMR et le marquage de zones de livraison.',
    seoTitle: 'Marquage au Sol Paris (75) | Parking, Entreprise, PMR',
    seoDescription: 'Entreprise de marquage au sol à Paris. Intervention rapide dans tous les arrondissements : parking, places PMR, zones de livraison. Devis gratuit sous 24h.',
    mainCities: ['Paris 1er', 'Paris 8e', 'Paris 12e', 'Paris 15e', 'Paris 17e', 'La Défense'],
    characteristics: ['Parkings souterrains', 'Zones de livraison', 'Places PMR', 'Voies de bus']
  },
  {
    code: '92',
    slug: 'hauts-de-seine',
    name: 'Hauts-de-Seine',
    fullName: 'Hauts-de-Seine',
    description: 'Le département des Hauts-de-Seine, avec le quartier d\'affaires de La Défense, regroupe de nombreux sièges sociaux et centres commerciaux. Notre équipe intervient pour le marquage de parkings d\'entreprise, entrepôts et zones industrielles.',
    seoTitle: 'Marquage au Sol Hauts-de-Seine (92) | Parking, Entrepôt',
    seoDescription: 'Spécialiste marquage au sol dans les Hauts-de-Seine : La Défense, Nanterre, Boulogne. Parkings entreprise, entrepôts, PMR. Devis gratuit.',
    mainCities: ['Boulogne-Billancourt', 'Nanterre', 'Colombes', 'Courbevoie', 'Rueil-Malmaison', 'Issy-les-Moulineaux'],
    characteristics: ['Sièges sociaux', 'Quartier La Défense', 'Centres commerciaux', 'Parkings relais']
  },
  {
    code: '93',
    slug: 'seine-saint-denis',
    name: 'Seine-Saint-Denis',
    fullName: 'Seine-Saint-Denis',
    description: 'La Seine-Saint-Denis est un département dynamique avec de nombreuses zones logistiques, entrepôts et parcs d\'activités. Nous réalisons le marquage au sol pour les plateformes logistiques, usines et parkings de centres commerciaux.',
    seoTitle: 'Marquage au Sol Seine-Saint-Denis (93) | Logistique, Entrepôt',
    seoDescription: 'Marquage au sol en Seine-Saint-Denis : entrepôts, plateformes logistiques, parkings. Saint-Denis, Montreuil, Aubervilliers. Intervention rapide.',
    mainCities: ['Saint-Denis', 'Montreuil', 'Aubervilliers', 'Aulnay-sous-Bois', 'Drancy', 'Pantin'],
    characteristics: ['Zones logistiques', 'Entrepôts', 'Parcs d\'activités', 'Stade de France']
  },
  {
    code: '94',
    slug: 'val-de-marne',
    name: 'Val-de-Marne',
    fullName: 'Val-de-Marne',
    description: 'Le Val-de-Marne dispose d\'un tissu économique diversifié avec le marché de Rungis, de nombreuses zones d\'activités et des centres hospitaliers. Nous intervenons pour tous types de marquage au sol professionnel.',
    seoTitle: 'Marquage au Sol Val-de-Marne (94) | Parking, Industriel',
    seoDescription: 'Entreprise de marquage au sol dans le Val-de-Marne. Créteil, Vitry, Champigny. Parkings, zones industrielles, PMR. Devis gratuit 24h.',
    mainCities: ['Créteil', 'Vitry-sur-Seine', 'Champigny-sur-Marne', 'Saint-Maur-des-Fossés', 'Ivry-sur-Seine', 'Maisons-Alfort'],
    characteristics: ['Marché de Rungis', 'Zones d\'activités', 'Centres hospitaliers', 'Aéroport d\'Orly']
  },
  {
    code: '91',
    slug: 'essonne',
    name: 'Essonne',
    fullName: 'Essonne',
    description: 'L\'Essonne accueille de nombreuses entreprises high-tech autour du plateau de Saclay, ainsi que des zones logistiques. Notre équipe réalise le marquage de parkings, entrepôts et voies de circulation internes.',
    seoTitle: 'Marquage au Sol Essonne (91) | Parking, Entrepôt, Logistique',
    seoDescription: 'Marquage au sol professionnel en Essonne : Évry, Massy, Corbeil. Parkings entreprise, entrepôts logistiques. Devis gratuit.',
    mainCities: ['Évry-Courcouronnes', 'Corbeil-Essonnes', 'Massy', 'Savigny-sur-Orge', 'Palaiseau', 'Les Ulis'],
    characteristics: ['Plateau de Saclay', 'Zones logistiques', 'Parcs technologiques', 'Centres commerciaux']
  },
  {
    code: '78',
    slug: 'yvelines',
    name: 'Yvelines',
    fullName: 'Yvelines',
    description: 'Les Yvelines combinent zones résidentielles et pôles économiques comme Vélizy ou Saint-Quentin-en-Yvelines. Nous intervenons pour le marquage de parkings d\'entreprise, centres commerciaux et résidences.',
    seoTitle: 'Marquage au Sol Yvelines (78) | Versailles, Saint-Quentin',
    seoDescription: 'Spécialiste marquage au sol dans les Yvelines. Versailles, Saint-Germain, Poissy. Parkings, entrepôts, places PMR. Devis gratuit.',
    mainCities: ['Versailles', 'Saint-Germain-en-Laye', 'Sartrouville', 'Poissy', 'Montigny-le-Bretonneux', 'Plaisir'],
    characteristics: ['Château de Versailles', 'Saint-Quentin-en-Yvelines', 'Usine PSA', 'Centres commerciaux']
  },
  {
    code: '95',
    slug: 'val-d-oise',
    name: "Val-d'Oise",
    fullName: "Val-d'Oise",
    description: 'Le Val-d\'Oise bénéficie de la proximité de l\'aéroport Roissy-CDG avec de nombreuses zones logistiques et d\'activités. Nous réalisons le marquage pour entrepôts, parkings d\'entreprise et zones commerciales.',
    seoTitle: 'Marquage au Sol Val-d\'Oise (95) | Roissy, Cergy, Argenteuil',
    seoDescription: 'Marquage au sol professionnel dans le Val-d\'Oise. Zone Roissy-CDG, Cergy-Pontoise, Argenteuil. Logistique, parkings. Devis gratuit.',
    mainCities: ['Argenteuil', 'Cergy', 'Sarcelles', 'Pontoise', 'Franconville', 'Goussainville'],
    characteristics: ['Aéroport Roissy-CDG', 'Cergy-Pontoise', 'Zones logistiques', 'Parcs d\'activités']
  },
  {
    code: '77',
    slug: 'seine-et-marne',
    name: 'Seine-et-Marne',
    fullName: 'Seine-et-Marne',
    description: 'La Seine-et-Marne, plus grand département d\'Île-de-France, accueille Disneyland Paris, de nombreuses zones logistiques et agricoles. Nous intervenons pour le marquage de grands parkings, entrepôts et sites industriels.',
    seoTitle: 'Marquage au Sol Seine-et-Marne (77) | Meaux, Melun, Marne-la-Vallée',
    seoDescription: 'Entreprise de marquage au sol en Seine-et-Marne. Meaux, Melun, Marne-la-Vallée. Entrepôts, parkings, industriel. Devis gratuit.',
    mainCities: ['Meaux', 'Chelles', 'Melun', 'Pontault-Combault', 'Torcy', 'Bussy-Saint-Georges'],
    characteristics: ['Disneyland Paris', 'Marne-la-Vallée', 'Zones logistiques', 'Val d\'Europe']
  }
];

export const getDepartmentBySlug = (slug: string): Department | undefined => {
  return departments.find(d => d.slug === slug);
};

export const getAllDepartmentSlugs = (): string[] => {
  return departments.map(d => d.slug);
};

export const getDepartmentByCode = (code: string): Department | undefined => {
  return departments.find(d => d.code === code);
};
