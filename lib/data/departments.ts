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
    description: 'Capitale de la France, Paris concentre de nombreuses entreprises, commerces et parkings souterrains necessitant un marquage au sol professionnel. Nous intervenons dans tous les arrondissements pour le tracage de places, la signalisation PMR et le marquage de zones de livraison.',
    seoTitle: 'Marquage au Sol Paris (75) | Parking, Entreprise, PMR',
    seoDescription: 'Entreprise de marquage au sol a Paris. Intervention rapide dans tous les arrondissements : parking, places PMR, zones de livraison. Devis gratuit sous 24h.',
    mainCities: ['Paris 1er', 'Paris 8e', 'Paris 12e', 'Paris 15e', 'Paris 17e', 'La Defense'],
    characteristics: ['Parkings souterrains', 'Zones de livraison', 'Places PMR', 'Voies de bus']
  },
  {
    code: '92',
    slug: 'hauts-de-seine',
    name: 'Hauts-de-Seine',
    fullName: 'Hauts-de-Seine',
    description: 'Le departement des Hauts-de-Seine, avec le quartier d\'affaires de La Defense, regroupe de nombreux sieges sociaux et centres commerciaux. Notre equipe intervient pour le marquage de parkings d\'entreprise, entrepots et zones industrielles.',
    seoTitle: 'Marquage au Sol Hauts-de-Seine (92) | Parking, Entrepot',
    seoDescription: 'Specialiste marquage au sol dans les Hauts-de-Seine : La Defense, Nanterre, Boulogne. Parkings entreprise, entrepots, PMR. Devis gratuit.',
    mainCities: ['Boulogne-Billancourt', 'Nanterre', 'Colombes', 'Courbevoie', 'Rueil-Malmaison', 'Issy-les-Moulineaux'],
    characteristics: ['Sieges sociaux', 'Quartier La Defense', 'Centres commerciaux', 'Parkings relais']
  },
  {
    code: '93',
    slug: 'seine-saint-denis',
    name: 'Seine-Saint-Denis',
    fullName: 'Seine-Saint-Denis',
    description: 'La Seine-Saint-Denis est un departement dynamique avec de nombreuses zones logistiques, entrepots et parcs d\'activites. Nous realisons le marquage au sol pour les plateformes logistiques, usines et parkings de centres commerciaux.',
    seoTitle: 'Marquage au Sol Seine-Saint-Denis (93) | Logistique, Entrepot',
    seoDescription: 'Marquage au sol en Seine-Saint-Denis : entrepots, plateformes logistiques, parkings. Saint-Denis, Montreuil, Aubervilliers. Intervention rapide.',
    mainCities: ['Saint-Denis', 'Montreuil', 'Aubervilliers', 'Aulnay-sous-Bois', 'Drancy', 'Pantin'],
    characteristics: ['Zones logistiques', 'Entrepots', 'Parcs d\'activites', 'Stade de France']
  },
  {
    code: '94',
    slug: 'val-de-marne',
    name: 'Val-de-Marne',
    fullName: 'Val-de-Marne',
    description: 'Le Val-de-Marne dispose d\'un tissu economique diversifie avec le marche de Rungis, de nombreuses zones d\'activites et des centres hospitaliers. Nous intervenons pour tous types de marquage au sol professionnel.',
    seoTitle: 'Marquage au Sol Val-de-Marne (94) | Parking, Industriel',
    seoDescription: 'Entreprise de marquage au sol dans le Val-de-Marne. Creteil, Vitry, Champigny. Parkings, zones industrielles, PMR. Devis gratuit 24h.',
    mainCities: ['Creteil', 'Vitry-sur-Seine', 'Champigny-sur-Marne', 'Saint-Maur-des-Fosses', 'Ivry-sur-Seine', 'Maisons-Alfort'],
    characteristics: ['Marche de Rungis', 'Zones d\'activites', 'Centres hospitaliers', 'Aeroport d\'Orly']
  },
  {
    code: '91',
    slug: 'essonne',
    name: 'Essonne',
    fullName: 'Essonne',
    description: 'L\'Essonne accueille de nombreuses entreprises high-tech autour du plateau de Saclay, ainsi que des zones logistiques. Notre equipe realise le marquage de parkings, entrepots et voies de circulation internes.',
    seoTitle: 'Marquage au Sol Essonne (91) | Parking, Entrepot, Logistique',
    seoDescription: 'Marquage au sol professionnel en Essonne : Evry, Massy, Corbeil. Parkings entreprise, entrepots logistiques. Devis gratuit.',
    mainCities: ['Evry-Courcouronnes', 'Corbeil-Essonnes', 'Massy', 'Savigny-sur-Orge', 'Palaiseau', 'Les Ulis'],
    characteristics: ['Plateau de Saclay', 'Zones logistiques', 'Parcs technologiques', 'Centres commerciaux']
  },
  {
    code: '78',
    slug: 'yvelines',
    name: 'Yvelines',
    fullName: 'Yvelines',
    description: 'Les Yvelines combinent zones residentielles et poles economiques comme Velizy ou Saint-Quentin-en-Yvelines. Nous intervenons pour le marquage de parkings d\'entreprise, centres commerciaux et residences.',
    seoTitle: 'Marquage au Sol Yvelines (78) | Versailles, Saint-Quentin',
    seoDescription: 'Specialiste marquage au sol dans les Yvelines. Versailles, Saint-Germain, Poissy. Parkings, entrepots, places PMR. Devis gratuit.',
    mainCities: ['Versailles', 'Saint-Germain-en-Laye', 'Sartrouville', 'Poissy', 'Montigny-le-Bretonneux', 'Plaisir'],
    characteristics: ['Chateau de Versailles', 'Saint-Quentin-en-Yvelines', 'Usine PSA', 'Centres commerciaux']
  },
  {
    code: '95',
    slug: 'val-d-oise',
    name: "Val-d'Oise",
    fullName: "Val-d'Oise",
    description: 'Le Val-d\'Oise beneficie de la proximite de l\'aeroport Roissy-CDG avec de nombreuses zones logistiques et d\'activites. Nous realisons le marquage pour entrepots, parkings d\'entreprise et zones commerciales.',
    seoTitle: 'Marquage au Sol Val-d\'Oise (95) | Roissy, Cergy, Argenteuil',
    seoDescription: 'Marquage au sol professionnel dans le Val-d\'Oise. Zone Roissy-CDG, Cergy-Pontoise, Argenteuil. Logistique, parkings. Devis gratuit.',
    mainCities: ['Argenteuil', 'Cergy', 'Sarcelles', 'Pontoise', 'Franconville', 'Goussainville'],
    characteristics: ['Aeroport Roissy-CDG', 'Cergy-Pontoise', 'Zones logistiques', 'Parcs d\'activites']
  },
  {
    code: '77',
    slug: 'seine-et-marne',
    name: 'Seine-et-Marne',
    fullName: 'Seine-et-Marne',
    description: 'La Seine-et-Marne, plus grand departement d\'Ile-de-France, accueille Disneyland Paris, de nombreuses zones logistiques et agricoles. Nous intervenons pour le marquage de grands parkings, entrepots et sites industriels.',
    seoTitle: 'Marquage au Sol Seine-et-Marne (77) | Meaux, Melun, Marne-la-Vallee',
    seoDescription: 'Entreprise de marquage au sol en Seine-et-Marne. Meaux, Melun, Marne-la-Vallee. Entrepots, parkings, industriel. Devis gratuit.',
    mainCities: ['Meaux', 'Chelles', 'Melun', 'Pontault-Combault', 'Torcy', 'Bussy-Saint-Georges'],
    characteristics: ['Disneyland Paris', 'Marne-la-Vallee', 'Zones logistiques', 'Val d\'Europe']
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
