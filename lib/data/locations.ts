export interface Location {
  id: string;
  slug: string;
  name: string;
  department: string;
  departmentCode: string;
  population: number;
  postalCodes: string[];
  nearby: string[];
}

export const locations: Location[] = [
  {
    id: 'paris',
    slug: 'paris',
    name: 'Paris',
    department: 'Paris',
    departmentCode: '75',
    population: 2165423,
    postalCodes: ['75001', '75002', '75003', '75004', '75005', '75006', '75007', '75008', '75009', '75010', '75011', '75012', '75013', '75014', '75015', '75016', '75017', '75018', '75019', '75020'],
    nearby: ['Boulogne-Billancourt', 'Saint-Denis', 'Montreuil', 'Nanterre']
  },
  {
    id: 'boulogne-billancourt',
    slug: 'boulogne-billancourt',
    name: 'Boulogne-Billancourt',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 121334,
    postalCodes: ['92100'],
    nearby: ['Paris', 'Issy-les-Moulineaux', 'Saint-Cloud', 'Sevres']
  },
  {
    id: 'saint-denis',
    slug: 'saint-denis',
    name: 'Saint-Denis',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 113298,
    postalCodes: ['93200', '93210'],
    nearby: ['Paris', 'Aubervilliers', 'Epinay-sur-Seine', 'Pierrefitte']
  },
  {
    id: 'montreuil',
    slug: 'montreuil',
    name: 'Montreuil',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 111454,
    postalCodes: ['93100'],
    nearby: ['Paris', 'Vincennes', 'Bagnolet', 'Rosny-sous-Bois']
  },
  {
    id: 'argenteuil',
    slug: 'argenteuil',
    name: 'Argenteuil',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 113738,
    postalCodes: ['95100'],
    nearby: ['Colombes', 'Bezons', 'Cormeilles', 'Sannois']
  },
  {
    id: 'versailles',
    slug: 'versailles',
    name: 'Versailles',
    department: 'Yvelines',
    departmentCode: '78',
    population: 85862,
    postalCodes: ['78000'],
    nearby: ['Le Chesnay', 'Viroflay', 'Velizy', 'Saint-Cyr-l\'Ecole']
  },
  {
    id: 'nanterre',
    slug: 'nanterre',
    name: 'Nanterre',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 96851,
    postalCodes: ['92000'],
    nearby: ['Puteaux', 'Rueil-Malmaison', 'Colombes', 'La Garenne-Colombes']
  },
  {
    id: 'creteil',
    slug: 'creteil',
    name: 'Creteil',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 91228,
    postalCodes: ['94000'],
    nearby: ['Maisons-Alfort', 'Saint-Maur', 'Alfortville', 'Bonneuil']
  },
  {
    id: 'vitry-sur-seine',
    slug: 'vitry-sur-seine',
    name: 'Vitry-sur-Seine',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 94838,
    postalCodes: ['94400'],
    nearby: ['Ivry-sur-Seine', 'Choisy-le-Roi', 'Villejuif', 'Thiais']
  },
  {
    id: 'colombes',
    slug: 'colombes',
    name: 'Colombes',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 86378,
    postalCodes: ['92700'],
    nearby: ['Nanterre', 'Argenteuil', 'Asnieres', 'La Garenne-Colombes']
  }
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(l => l.slug === slug);
};

export const getAllLocationSlugs = (): string[] => {
  return locations.map(l => l.slug);
};
