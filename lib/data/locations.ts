// ═══════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════

export type RegionPosition = 'nord' | 'sud' | 'est' | 'ouest' | 'centre';
export type CityType = 'prefecture' | 'sous-prefecture' | 'chef-lieu' | 'commune';
export type EconomicProfile = 'residentiel' | 'commercial' | 'industriel' | 'mixte' | 'tertiaire';
export type PricingZone = 'premium' | 'standard' | 'economique';

export type ZoneType =
  | 'zone-commerciale'
  | 'zone-industrielle'
  | 'zone-logistique'
  | 'zone-artisanale'
  | 'quartier-affaires'
  | 'zone-residentielle'
  | 'centre-ville'
  | 'gare'
  | 'aeroport';

export type LandmarkType =
  | 'centre-commercial'
  | 'zone-activite'
  | 'gare'
  | 'hopital'
  | 'universite'
  | 'stade'
  | 'marche'
  | 'monument'
  | 'centre-ville'
  | 'parc'
  | 'quartier-affaires'
  | 'aeroport';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Landmark {
  name: string;
  type: LandmarkType;
}

export interface EconomicContext {
  majorEmployers?: string[];
  businessSectors?: string[];
  hasIndustrialZone?: boolean;
  hasCommercialCenter?: boolean;
  hasLogisticsHub?: boolean;
}

// ═══════════════════════════════════════════════════════════════════
// INTERFACE LOCATION ENRICHIE
// ═══════════════════════════════════════════════════════════════════

export interface Location {
  // Donnees de base
  id: string;
  slug: string;
  name: string;
  department: string;
  departmentCode: string;
  population: number;
  postalCodes: string[];
  nearby: string[];

  // Donnees d'enrichissement pour generation de contenu unique
  coordinates?: Coordinates;
  distanceFromParis?: number;
  regionPosition?: RegionPosition;
  cityType?: CityType;
  economicProfile?: EconomicProfile;
  zoneTypes?: ZoneType[];
  landmarks?: Landmark[];
  economicContext?: EconomicContext;
  pricingZone?: PricingZone;
}

export const locations: Location[] = [
  // ═══════════════════════════════════════════════════════════════════
  // 75 - PARIS (1 ville)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'paris',
    slug: 'paris',
    name: 'Paris',
    department: 'Paris',
    departmentCode: '75',
    population: 2165423,
    postalCodes: ['75001', '75002', '75003', '75004', '75005', '75006', '75007', '75008', '75009', '75010', '75011', '75012', '75013', '75014', '75015', '75016', '75017', '75018', '75019', '75020'],
    nearby: ['Boulogne-Billancourt', 'Saint-Denis', 'Montreuil', 'Nanterre'],
    // Enrichissement
    coordinates: { lat: 48.8566, lng: 2.3522 },
    distanceFromParis: 0,
    regionPosition: 'centre',
    cityType: 'prefecture',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'centre-ville', 'gare', 'zone-commerciale'],
    landmarks: [
      { name: 'La Defense', type: 'zone-activite' },
      { name: 'Gare du Nord', type: 'gare' },
      { name: 'Forum des Halles', type: 'centre-commercial' }
    ],
    economicContext: {
      businessSectors: ['finance', 'luxe', 'tourisme', 'tech'],
      hasCommercialCenter: true,
    },
    pricingZone: 'premium'
  },

  // ═══════════════════════════════════════════════════════════════════
  // 77 - SEINE-ET-MARNE (12 villes)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'meaux',
    slug: 'meaux',
    name: 'Meaux',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 55000,
    postalCodes: ['77100'],
    nearby: ['Chelles', 'Lagny-sur-Marne', 'Claye-Souilly', 'Villenoy'],
    coordinates: { lat: 48.9603, lng: 2.8788 },
    distanceFromParis: 41,
    regionPosition: 'est',
    cityType: 'sous-prefecture',
    economicProfile: 'mixte',
    zoneTypes: ['zone-commerciale', 'zone-industrielle', 'centre-ville', 'gare'],
    landmarks: [{ name: 'Centre Commercial Les Saisons', type: 'centre-commercial' }],
    economicContext: { hasCommercialCenter: true, hasIndustrialZone: true },
    pricingZone: 'economique'
  },
  {
    id: 'chelles',
    slug: 'chelles',
    name: 'Chelles',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 54000,
    postalCodes: ['77500'],
    nearby: ['Meaux', 'Montfermeil', 'Gagny', 'Gournay-sur-Marne'],
    coordinates: { lat: 48.8838, lng: 2.6003 },
    distanceFromParis: 19,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'mixte',
    zoneTypes: ['zone-residentielle', 'zone-commerciale', 'gare'],
    landmarks: [{ name: 'Gare de Chelles-Gournay', type: 'gare' }],
    pricingZone: 'standard'
  },
  {
    id: 'melun',
    slug: 'melun',
    name: 'Melun',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 40000,
    postalCodes: ['77000'],
    nearby: ['Dammarie-les-Lys', 'Le Mee-sur-Seine', 'Savigny-le-Temple', 'Vaux-le-Penil'],
    coordinates: { lat: 48.5392, lng: 2.6557 },
    distanceFromParis: 47,
    regionPosition: 'sud',
    cityType: 'prefecture',
    economicProfile: 'tertiaire',
    zoneTypes: ['centre-ville', 'zone-commerciale', 'gare'],
    landmarks: [{ name: 'Prefecture de Seine-et-Marne', type: 'zone-activite' }],
    economicContext: { businessSectors: ['administration', 'services'] },
    pricingZone: 'economique'
  },
  {
    id: 'pontault-combault',
    slug: 'pontault-combault',
    name: 'Pontault-Combault',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 38000,
    postalCodes: ['77340'],
    nearby: ['Roissy-en-Brie', 'Ozoir-la-Ferriere', 'Emerainville', 'Sucy-en-Brie'],
    coordinates: { lat: 48.8027, lng: 2.6055 },
    distanceFromParis: 22,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'commercial',
    zoneTypes: ['zone-commerciale', 'zone-residentielle'],
    landmarks: [{ name: 'Centre Commercial Bay 2', type: 'centre-commercial' }],
    economicContext: { hasCommercialCenter: true },
    pricingZone: 'standard'
  },
  {
    id: 'savigny-le-temple',
    slug: 'savigny-le-temple',
    name: 'Savigny-le-Temple',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 31000,
    postalCodes: ['77176'],
    nearby: ['Melun', 'Nandy', 'Cesson', 'Vert-Saint-Denis'],
    coordinates: { lat: 48.5849, lng: 2.5837 },
    distanceFromParis: 36,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'zone-commerciale'],
    pricingZone: 'economique'
  },
  {
    id: 'champs-sur-marne',
    slug: 'champs-sur-marne',
    name: 'Champs-sur-Marne',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 26000,
    postalCodes: ['77420'],
    nearby: ['Noisy-le-Grand', 'Noisiel', 'Torcy', 'Lognes'],
    coordinates: { lat: 48.8527, lng: 2.6003 },
    distanceFromParis: 18,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'zone-residentielle', 'gare'],
    landmarks: [{ name: 'Cite Descartes', type: 'universite' }],
    economicContext: { businessSectors: ['recherche', 'enseignement'] },
    pricingZone: 'standard'
  },
  {
    id: 'torcy',
    slug: 'torcy',
    name: 'Torcy',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 24000,
    postalCodes: ['77200'],
    nearby: ['Noisiel', 'Lognes', 'Champs-sur-Marne', 'Bussy-Saint-Georges'],
    coordinates: { lat: 48.8503, lng: 2.6552 },
    distanceFromParis: 22,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'commercial',
    zoneTypes: ['zone-commerciale', 'zone-residentielle', 'gare'],
    landmarks: [{ name: 'Bay 1 Torcy', type: 'centre-commercial' }],
    economicContext: { hasCommercialCenter: true },
    pricingZone: 'standard'
  },
  {
    id: 'bussy-saint-georges',
    slug: 'bussy-saint-georges',
    name: 'Bussy-Saint-Georges',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 28000,
    postalCodes: ['77600'],
    nearby: ['Torcy', 'Lagny-sur-Marne', 'Ferriere', 'Collegien'],
    coordinates: { lat: 48.8416, lng: 2.6989 },
    distanceFromParis: 27,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'mixte',
    zoneTypes: ['zone-residentielle', 'zone-commerciale', 'zone-logistique', 'gare'],
    economicContext: { hasLogisticsHub: true },
    pricingZone: 'standard'
  },
  {
    id: 'roissy-en-brie',
    slug: 'roissy-en-brie',
    name: 'Roissy-en-Brie',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 23000,
    postalCodes: ['77680'],
    nearby: ['Pontault-Combault', 'Ozoir-la-Ferriere', 'Emerainville', 'Ferolles-Attilly'],
    coordinates: { lat: 48.7903, lng: 2.6522 },
    distanceFromParis: 25,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'gare'],
    pricingZone: 'standard'
  },
  {
    id: 'lagny-sur-marne',
    slug: 'lagny-sur-marne',
    name: 'Lagny-sur-Marne',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 22000,
    postalCodes: ['77400'],
    nearby: ['Thorigny-sur-Marne', 'Pomponne', 'Bussy-Saint-Georges', 'Montevrain'],
    coordinates: { lat: 48.8733, lng: 2.7113 },
    distanceFromParis: 27,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'mixte',
    zoneTypes: ['centre-ville', 'zone-commerciale', 'gare'],
    landmarks: [{ name: 'Val d\'Europe', type: 'centre-commercial' }],
    pricingZone: 'standard'
  },
  {
    id: 'fontainebleau',
    slug: 'fontainebleau',
    name: 'Fontainebleau',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 15000,
    postalCodes: ['77300'],
    nearby: ['Avon', 'Samois-sur-Seine', 'Thomery', 'Bourron-Marlotte'],
    coordinates: { lat: 48.4048, lng: 2.7013 },
    distanceFromParis: 60,
    regionPosition: 'sud',
    cityType: 'sous-prefecture',
    economicProfile: 'tertiaire',
    zoneTypes: ['centre-ville', 'zone-residentielle', 'gare'],
    landmarks: [{ name: 'Chateau de Fontainebleau', type: 'zone-activite' }],
    economicContext: { businessSectors: ['tourisme', 'enseignement'] },
    pricingZone: 'economique'
  },
  {
    id: 'nemours',
    slug: 'nemours',
    name: 'Nemours',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 13000,
    postalCodes: ['77140'],
    nearby: ['Saint-Pierre-les-Nemours', 'Bagneaux-sur-Loing', 'Poligny', 'Grez-sur-Loing'],
    coordinates: { lat: 48.2656, lng: 2.6972 },
    distanceFromParis: 78,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'industriel',
    zoneTypes: ['zone-industrielle', 'centre-ville', 'gare'],
    economicContext: { hasIndustrialZone: true, businessSectors: ['industrie', 'verre'] },
    pricingZone: 'economique'
  },

  // ═══════════════════════════════════════════════════════════════════
  // 78 - YVELINES (12 villes)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'versailles',
    slug: 'versailles',
    name: 'Versailles',
    department: 'Yvelines',
    departmentCode: '78',
    population: 85862,
    postalCodes: ['78000'],
    nearby: ['Le Chesnay', 'Viroflay', 'Velizy-Villacoublay', 'Saint-Cyr-l\'Ecole'],
    coordinates: { lat: 48.8014, lng: 2.1301 },
    distanceFromParis: 17,
    regionPosition: 'ouest',
    cityType: 'prefecture',
    economicProfile: 'tertiaire',
    zoneTypes: ['centre-ville', 'zone-commerciale', 'gare'],
    landmarks: [
      { name: 'Chateau de Versailles', type: 'zone-activite' },
      { name: 'Gare de Versailles', type: 'gare' }
    ],
    economicContext: { businessSectors: ['tourisme', 'administration', 'services'] },
    pricingZone: 'premium'
  },
  {
    id: 'saint-germain-en-laye',
    slug: 'saint-germain-en-laye',
    name: 'Saint-Germain-en-Laye',
    department: 'Yvelines',
    departmentCode: '78',
    population: 46000,
    postalCodes: ['78100'],
    nearby: ['Le Vesinet', 'Poissy', 'Chambourcy', 'Maisons-Laffitte'],
    coordinates: { lat: 48.8989, lng: 2.0938 },
    distanceFromParis: 19,
    regionPosition: 'ouest',
    cityType: 'sous-prefecture',
    economicProfile: 'residentiel',
    zoneTypes: ['centre-ville', 'zone-residentielle', 'gare'],
    landmarks: [{ name: 'Chateau de Saint-Germain', type: 'zone-activite' }],
    pricingZone: 'premium'
  },
  {
    id: 'mantes-la-jolie',
    slug: 'mantes-la-jolie',
    name: 'Mantes-la-Jolie',
    department: 'Yvelines',
    departmentCode: '78',
    population: 44000,
    postalCodes: ['78200'],
    nearby: ['Mantes-la-Ville', 'Limay', 'Buchelay', 'Magnanville'],
    coordinates: { lat: 48.9908, lng: 1.7164 },
    distanceFromParis: 55,
    regionPosition: 'ouest',
    cityType: 'sous-prefecture',
    economicProfile: 'industriel',
    zoneTypes: ['zone-industrielle', 'centre-ville', 'gare'],
    economicContext: { hasIndustrialZone: true, businessSectors: ['automobile', 'logistique'] },
    pricingZone: 'economique'
  },
  {
    id: 'sartrouville',
    slug: 'sartrouville',
    name: 'Sartrouville',
    department: 'Yvelines',
    departmentCode: '78',
    population: 52000,
    postalCodes: ['78500'],
    nearby: ['Houilles', 'Maisons-Laffitte', 'Montesson', 'Le Pecq'],
    coordinates: { lat: 48.9397, lng: 2.1589 },
    distanceFromParis: 14,
    regionPosition: 'ouest',
    cityType: 'commune',
    economicProfile: 'mixte',
    zoneTypes: ['zone-residentielle', 'zone-commerciale', 'gare'],
    pricingZone: 'standard'
  },
  {
    id: 'poissy',
    slug: 'poissy',
    name: 'Poissy',
    department: 'Yvelines',
    departmentCode: '78',
    population: 37000,
    postalCodes: ['78300'],
    nearby: ['Carriere-sous-Poissy', 'Saint-Germain-en-Laye', 'Acheres', 'Orgeval'],
    coordinates: { lat: 48.9303, lng: 2.0461 },
    distanceFromParis: 25,
    regionPosition: 'ouest',
    cityType: 'commune',
    economicProfile: 'industriel',
    zoneTypes: ['zone-industrielle', 'centre-ville', 'gare'],
    landmarks: [{ name: 'Usine PSA Poissy', type: 'zone-activite' }],
    economicContext: { hasIndustrialZone: true, majorEmployers: ['Stellantis'], businessSectors: ['automobile'] },
    pricingZone: 'standard'
  },
  {
    id: 'conflans-sainte-honorine',
    slug: 'conflans-sainte-honorine',
    name: 'Conflans-Sainte-Honorine',
    department: 'Yvelines',
    departmentCode: '78',
    population: 36000,
    postalCodes: ['78700'],
    nearby: ['Acheres', 'Herblay', 'Maurecourt', 'Andressy'],
    coordinates: { lat: 49.0014, lng: 2.0972 },
    distanceFromParis: 27,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'mixte',
    zoneTypes: ['zone-logistique', 'zone-commerciale', 'gare'],
    economicContext: { hasLogisticsHub: true, businessSectors: ['transport fluvial'] },
    pricingZone: 'standard'
  },
  {
    id: 'montigny-le-bretonneux',
    slug: 'montigny-le-bretonneux',
    name: 'Montigny-le-Bretonneux',
    department: 'Yvelines',
    departmentCode: '78',
    population: 33000,
    postalCodes: ['78180'],
    nearby: ['Trappes', 'Guyancourt', 'Voisins-le-Bretonneux', 'Saint-Quentin-en-Yvelines'],
    coordinates: { lat: 48.7714, lng: 2.0347 },
    distanceFromParis: 26,
    regionPosition: 'ouest',
    cityType: 'commune',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'zone-commerciale', 'gare'],
    landmarks: [{ name: 'SQY Park', type: 'zone-activite' }],
    economicContext: { businessSectors: ['tech', 'defense', 'services'] },
    pricingZone: 'standard'
  },
  {
    id: 'les-mureaux',
    slug: 'les-mureaux',
    name: 'Les Mureaux',
    department: 'Yvelines',
    departmentCode: '78',
    population: 32000,
    postalCodes: ['78130'],
    nearby: ['Meulan', 'Ecquevilly', 'Bouafle', 'Hardricourt'],
    coordinates: { lat: 48.9881, lng: 1.9181 },
    distanceFromParis: 40,
    regionPosition: 'ouest',
    cityType: 'commune',
    economicProfile: 'industriel',
    zoneTypes: ['zone-industrielle', 'zone-residentielle', 'gare'],
    landmarks: [{ name: 'ArianeGroup', type: 'zone-activite' }],
    economicContext: { hasIndustrialZone: true, majorEmployers: ['ArianeGroup'], businessSectors: ['aerospatiale'] },
    pricingZone: 'economique'
  },
  {
    id: 'plaisir',
    slug: 'plaisir',
    name: 'Plaisir',
    department: 'Yvelines',
    departmentCode: '78',
    population: 31000,
    postalCodes: ['78370'],
    nearby: ['Elancourt', 'Maurepas', 'Les Clayes-sous-Bois', 'Trappes'],
    coordinates: { lat: 48.8219, lng: 1.9500 },
    distanceFromParis: 30,
    regionPosition: 'ouest',
    cityType: 'commune',
    economicProfile: 'commercial',
    zoneTypes: ['zone-commerciale', 'zone-residentielle', 'zone-industrielle'],
    landmarks: [{ name: 'Centre Commercial Auchan', type: 'centre-commercial' }],
    economicContext: { hasCommercialCenter: true },
    pricingZone: 'standard'
  },
  {
    id: 'trappes',
    slug: 'trappes',
    name: 'Trappes',
    department: 'Yvelines',
    departmentCode: '78',
    population: 31000,
    postalCodes: ['78190'],
    nearby: ['Montigny-le-Bretonneux', 'Plaisir', 'Elancourt', 'La Verriere'],
    coordinates: { lat: 48.7764, lng: 2.0019 },
    distanceFromParis: 28,
    regionPosition: 'ouest',
    cityType: 'commune',
    economicProfile: 'industriel',
    zoneTypes: ['zone-industrielle', 'zone-logistique', 'gare'],
    economicContext: { hasIndustrialZone: true, hasLogisticsHub: true },
    pricingZone: 'standard'
  },
  {
    id: 'houilles',
    slug: 'houilles',
    name: 'Houilles',
    department: 'Yvelines',
    departmentCode: '78',
    population: 32000,
    postalCodes: ['78800'],
    nearby: ['Sartrouville', 'Carrieres-sur-Seine', 'Bezons', 'Montesson'],
    coordinates: { lat: 48.9267, lng: 2.1897 },
    distanceFromParis: 11,
    regionPosition: 'ouest',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'gare'],
    pricingZone: 'standard'
  },
  {
    id: 'chatou',
    slug: 'chatou',
    name: 'Chatou',
    department: 'Yvelines',
    departmentCode: '78',
    population: 31000,
    postalCodes: ['78400'],
    nearby: ['Le Vesinet', 'Croissy-sur-Seine', 'Rueil-Malmaison', 'Montesson'],
    coordinates: { lat: 48.8892, lng: 2.1575 },
    distanceFromParis: 13,
    regionPosition: 'ouest',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'gare'],
    pricingZone: 'premium'
  },

  // ═══════════════════════════════════════════════════════════════════
  // 91 - ESSONNE (12 villes)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'evry-courcouronnes',
    slug: 'evry-courcouronnes',
    name: 'Evry-Courcouronnes',
    department: 'Essonne',
    departmentCode: '91',
    population: 67000,
    postalCodes: ['91000', '91080'],
    nearby: ['Corbeil-Essonnes', 'Ris-Orangis', 'Bondoufle', 'Lisses'],
    coordinates: { lat: 48.6244, lng: 2.4297 },
    distanceFromParis: 30,
    regionPosition: 'sud',
    cityType: 'prefecture',
    economicProfile: 'mixte',
    zoneTypes: ['quartier-affaires', 'zone-commerciale', 'zone-industrielle', 'gare'],
    landmarks: [
      { name: 'Prefecture de l\'Essonne', type: 'zone-activite' },
      { name: 'Universite d\'Evry', type: 'universite' }
    ],
    economicContext: { businessSectors: ['administration', 'tech', 'logistique'], hasIndustrialZone: true },
    pricingZone: 'standard'
  },
  {
    id: 'corbeil-essonnes',
    slug: 'corbeil-essonnes',
    name: 'Corbeil-Essonnes',
    department: 'Essonne',
    departmentCode: '91',
    population: 50000,
    postalCodes: ['91100'],
    nearby: ['Evry-Courcouronnes', 'Villabe', 'Saint-Germain-les-Corbeil', 'Etiolles'],
    coordinates: { lat: 48.6136, lng: 2.4825 },
    distanceFromParis: 33,
    regionPosition: 'sud',
    cityType: 'sous-prefecture',
    economicProfile: 'industriel',
    zoneTypes: ['zone-industrielle', 'centre-ville', 'gare'],
    economicContext: { hasIndustrialZone: true, businessSectors: ['industrie', 'imprimerie'] },
    pricingZone: 'standard'
  },
  {
    id: 'massy',
    slug: 'massy',
    name: 'Massy',
    department: 'Essonne',
    departmentCode: '91',
    population: 50000,
    postalCodes: ['91300'],
    nearby: ['Palaiseau', 'Antony', 'Verrieres-le-Buisson', 'Igny'],
    coordinates: { lat: 48.7303, lng: 2.2719 },
    distanceFromParis: 15,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'zone-commerciale', 'gare'],
    landmarks: [
      { name: 'Gare de Massy TGV', type: 'gare' },
      { name: 'Opera de Massy', type: 'zone-activite' }
    ],
    economicContext: { businessSectors: ['tech', 'services', 'transport'], hasCommercialCenter: true },
    pricingZone: 'standard'
  },
  {
    id: 'savigny-sur-orge',
    slug: 'savigny-sur-orge',
    name: 'Savigny-sur-Orge',
    department: 'Essonne',
    departmentCode: '91',
    population: 37000,
    postalCodes: ['91600'],
    nearby: ['Juvisy-sur-Orge', 'Viry-Chatillon', 'Morangis', 'Epinay-sur-Orge'],
    coordinates: { lat: 48.6814, lng: 2.3486 },
    distanceFromParis: 18,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'gare'],
    pricingZone: 'standard'
  },
  {
    id: 'sainte-genevieve-des-bois',
    slug: 'sainte-genevieve-des-bois',
    name: 'Sainte-Genevieve-des-Bois',
    department: 'Essonne',
    departmentCode: '91',
    population: 36000,
    postalCodes: ['91700'],
    nearby: ['Fleury-Merogis', 'Morsang-sur-Orge', 'Villemoisson-sur-Orge', 'Saint-Michel-sur-Orge'],
    coordinates: { lat: 48.6433, lng: 2.3267 },
    distanceFromParis: 24,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'commercial',
    zoneTypes: ['zone-commerciale', 'zone-residentielle', 'gare'],
    economicContext: { hasCommercialCenter: true },
    pricingZone: 'standard'
  },
  {
    id: 'viry-chatillon',
    slug: 'viry-chatillon',
    name: 'Viry-Chatillon',
    department: 'Essonne',
    departmentCode: '91',
    population: 32000,
    postalCodes: ['91170'],
    nearby: ['Savigny-sur-Orge', 'Juvisy-sur-Orge', 'Grigny', 'Athis-Mons'],
    coordinates: { lat: 48.6722, lng: 2.3756 },
    distanceFromParis: 19,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'zone-commerciale'],
    pricingZone: 'standard'
  },
  {
    id: 'athis-mons',
    slug: 'athis-mons',
    name: 'Athis-Mons',
    department: 'Essonne',
    departmentCode: '91',
    population: 34000,
    postalCodes: ['91200'],
    nearby: ['Juvisy-sur-Orge', 'Paray-Vieille-Poste', 'Morangis', 'Viry-Chatillon'],
    coordinates: { lat: 48.7056, lng: 2.3903 },
    distanceFromParis: 16,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'mixte',
    zoneTypes: ['zone-residentielle', 'aeroport', 'zone-logistique'],
    economicContext: { hasLogisticsHub: true, businessSectors: ['aeronautique', 'logistique'] },
    pricingZone: 'standard'
  },
  {
    id: 'palaiseau',
    slug: 'palaiseau',
    name: 'Palaiseau',
    department: 'Essonne',
    departmentCode: '91',
    population: 33000,
    postalCodes: ['91120'],
    nearby: ['Massy', 'Orsay', 'Saclay', 'Villebon-sur-Yvette'],
    coordinates: { lat: 48.7144, lng: 2.2456 },
    distanceFromParis: 18,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'zone-residentielle', 'gare'],
    landmarks: [{ name: 'Ecole Polytechnique', type: 'universite' }],
    economicContext: { businessSectors: ['recherche', 'tech', 'enseignement'], majorEmployers: ['Polytechnique', 'Thales'] },
    pricingZone: 'standard'
  },
  {
    id: 'yerres',
    slug: 'yerres',
    name: 'Yerres',
    department: 'Essonne',
    departmentCode: '91',
    population: 29000,
    postalCodes: ['91330'],
    nearby: ['Brunoy', 'Crosne', 'Montgeron', 'Quincy-sous-Senart'],
    coordinates: { lat: 48.7147, lng: 2.4903 },
    distanceFromParis: 20,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'gare'],
    pricingZone: 'standard'
  },
  {
    id: 'draveil',
    slug: 'draveil',
    name: 'Draveil',
    department: 'Essonne',
    departmentCode: '91',
    population: 29000,
    postalCodes: ['91210'],
    nearby: ['Vigneux-sur-Seine', 'Juvisy-sur-Orge', 'Soisy-sur-Seine', 'Montgeron'],
    coordinates: { lat: 48.6847, lng: 2.4117 },
    distanceFromParis: 19,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'gare'],
    pricingZone: 'standard'
  },
  {
    id: 'brunoy',
    slug: 'brunoy',
    name: 'Brunoy',
    department: 'Essonne',
    departmentCode: '91',
    population: 26000,
    postalCodes: ['91800'],
    nearby: ['Yerres', 'Montgeron', 'Epinay-sous-Senart', 'Boussy-Saint-Antoine'],
    coordinates: { lat: 48.6983, lng: 2.5008 },
    distanceFromParis: 21,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'gare'],
    pricingZone: 'standard'
  },
  {
    id: 'les-ulis',
    slug: 'les-ulis',
    name: 'Les Ulis',
    department: 'Essonne',
    departmentCode: '91',
    population: 25000,
    postalCodes: ['91940'],
    nearby: ['Orsay', 'Bures-sur-Yvette', 'Villejust', 'Gif-sur-Yvette'],
    coordinates: { lat: 48.6808, lng: 2.1689 },
    distanceFromParis: 23,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'zone-commerciale'],
    landmarks: [{ name: 'Centre Commercial Ulis 2', type: 'centre-commercial' }],
    economicContext: { hasCommercialCenter: true, businessSectors: ['tech', 'recherche'] },
    pricingZone: 'standard'
  },

  // ═══════════════════════════════════════════════════════════════════
  // 92 - HAUTS-DE-SEINE (12 villes)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'boulogne-billancourt',
    slug: 'boulogne-billancourt',
    name: 'Boulogne-Billancourt',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 121334,
    postalCodes: ['92100'],
    nearby: ['Paris', 'Issy-les-Moulineaux', 'Saint-Cloud', 'Sevres'],
    coordinates: { lat: 48.8352, lng: 2.2408 },
    distanceFromParis: 5,
    regionPosition: 'ouest',
    cityType: 'commune',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'zone-commerciale', 'gare'],
    landmarks: [
      { name: 'Studios de Boulogne', type: 'zone-activite' },
      { name: 'Ile Seguin', type: 'zone-activite' }
    ],
    economicContext: { majorEmployers: ['TF1', 'Renault'], businessSectors: ['media', 'automobile', 'tech'] },
    pricingZone: 'premium'
  },
  {
    id: 'nanterre',
    slug: 'nanterre',
    name: 'Nanterre',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 96851,
    postalCodes: ['92000'],
    nearby: ['Puteaux', 'Rueil-Malmaison', 'Colombes', 'La Garenne-Colombes'],
    coordinates: { lat: 48.8922, lng: 2.2069 },
    distanceFromParis: 9,
    regionPosition: 'ouest',
    cityType: 'prefecture',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'zone-commerciale', 'gare'],
    landmarks: [
      { name: 'La Defense', type: 'zone-activite' },
      { name: 'Universite Paris Nanterre', type: 'universite' }
    ],
    economicContext: { businessSectors: ['finance', 'conseil', 'tech'], hasCommercialCenter: true },
    pricingZone: 'premium'
  },
  {
    id: 'colombes',
    slug: 'colombes',
    name: 'Colombes',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 86378,
    postalCodes: ['92700'],
    nearby: ['Nanterre', 'Argenteuil', 'Asnieres-sur-Seine', 'La Garenne-Colombes'],
    coordinates: { lat: 48.9236, lng: 2.2525 },
    distanceFromParis: 8,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'mixte',
    zoneTypes: ['zone-residentielle', 'zone-commerciale', 'zone-industrielle', 'gare'],
    economicContext: { hasIndustrialZone: true },
    pricingZone: 'standard'
  },
  {
    id: 'asnieres-sur-seine',
    slug: 'asnieres-sur-seine',
    name: 'Asnieres-sur-Seine',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 88000,
    postalCodes: ['92600'],
    nearby: ['Colombes', 'Gennevilliers', 'Clichy', 'Bois-Colombes'],
    coordinates: { lat: 48.9119, lng: 2.2875 },
    distanceFromParis: 6,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'mixte',
    zoneTypes: ['zone-residentielle', 'zone-commerciale', 'gare'],
    pricingZone: 'standard'
  },
  {
    id: 'courbevoie',
    slug: 'courbevoie',
    name: 'Courbevoie',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 84000,
    postalCodes: ['92400'],
    nearby: ['La Defense', 'Puteaux', 'Nanterre', 'Levallois-Perret'],
    coordinates: { lat: 48.8967, lng: 2.2528 },
    distanceFromParis: 7,
    regionPosition: 'ouest',
    cityType: 'commune',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'zone-commerciale', 'gare'],
    landmarks: [{ name: 'La Defense', type: 'zone-activite' }],
    economicContext: { majorEmployers: ['Total', 'Societe Generale'], businessSectors: ['finance', 'energie', 'tech'] },
    pricingZone: 'premium'
  },
  {
    id: 'rueil-malmaison',
    slug: 'rueil-malmaison',
    name: 'Rueil-Malmaison',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 79000,
    postalCodes: ['92500'],
    nearby: ['Nanterre', 'Suresnes', 'Garches', 'Chatou'],
    coordinates: { lat: 48.8769, lng: 2.1894 },
    distanceFromParis: 12,
    regionPosition: 'ouest',
    cityType: 'commune',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'zone-residentielle', 'gare'],
    landmarks: [{ name: 'Chateau de Malmaison', type: 'zone-activite' }],
    economicContext: { majorEmployers: ['Schneider Electric', 'Vinci'], businessSectors: ['energie', 'BTP'] },
    pricingZone: 'premium'
  },
  {
    id: 'issy-les-moulineaux',
    slug: 'issy-les-moulineaux',
    name: 'Issy-les-Moulineaux',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 69000,
    postalCodes: ['92130'],
    nearby: ['Boulogne-Billancourt', 'Vanves', 'Meudon', 'Clamart'],
    coordinates: { lat: 48.8239, lng: 2.2700 },
    distanceFromParis: 5,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'zone-commerciale', 'gare'],
    landmarks: [{ name: 'Fort d\'Issy', type: 'zone-activite' }],
    economicContext: { majorEmployers: ['Microsoft', 'Orange', 'Coca-Cola'], businessSectors: ['tech', 'telecom', 'media'] },
    pricingZone: 'premium'
  },
  {
    id: 'levallois-perret',
    slug: 'levallois-perret',
    name: 'Levallois-Perret',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 66000,
    postalCodes: ['92300'],
    nearby: ['Neuilly-sur-Seine', 'Clichy', 'Courbevoie', 'Paris 17e'],
    coordinates: { lat: 48.8933, lng: 2.2875 },
    distanceFromParis: 4,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'zone-residentielle', 'gare'],
    economicContext: { businessSectors: ['luxe', 'services', 'tech'] },
    pricingZone: 'premium'
  },
  {
    id: 'antony',
    slug: 'antony',
    name: 'Antony',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 63000,
    postalCodes: ['92160'],
    nearby: ['Massy', 'Chatenay-Malabry', 'Fresnes', 'Bourg-la-Reine'],
    coordinates: { lat: 48.7539, lng: 2.2969 },
    distanceFromParis: 11,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'mixte',
    zoneTypes: ['zone-residentielle', 'zone-commerciale', 'gare'],
    economicContext: { hasCommercialCenter: true },
    pricingZone: 'standard'
  },
  {
    id: 'neuilly-sur-seine',
    slug: 'neuilly-sur-seine',
    name: 'Neuilly-sur-Seine',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 61000,
    postalCodes: ['92200'],
    nearby: ['Levallois-Perret', 'Paris 16e', 'Paris 17e', 'Puteaux'],
    coordinates: { lat: 48.8847, lng: 2.2689 },
    distanceFromParis: 3,
    regionPosition: 'ouest',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'centre-ville'],
    economicContext: { businessSectors: ['luxe', 'services'] },
    pricingZone: 'premium'
  },
  {
    id: 'clamart',
    slug: 'clamart',
    name: 'Clamart',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 53000,
    postalCodes: ['92140'],
    nearby: ['Issy-les-Moulineaux', 'Meudon', 'Vanves', 'Malakoff'],
    coordinates: { lat: 48.8008, lng: 2.2656 },
    distanceFromParis: 8,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'gare'],
    pricingZone: 'standard'
  },
  {
    id: 'meudon',
    slug: 'meudon',
    name: 'Meudon',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 45000,
    postalCodes: ['92190', '92360'],
    nearby: ['Issy-les-Moulineaux', 'Clamart', 'Sevres', 'Chaville'],
    coordinates: { lat: 48.8117, lng: 2.2350 },
    distanceFromParis: 9,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'tertiaire',
    zoneTypes: ['zone-residentielle', 'quartier-affaires', 'gare'],
    landmarks: [{ name: 'ONERA', type: 'zone-activite' }],
    economicContext: { majorEmployers: ['ONERA'], businessSectors: ['recherche', 'aerospatiale'] },
    pricingZone: 'standard'
  },

  // ═══════════════════════════════════════════════════════════════════
  // 93 - SEINE-SAINT-DENIS (12 villes)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'saint-denis',
    slug: 'saint-denis',
    name: 'Saint-Denis',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 113298,
    postalCodes: ['93200', '93210'],
    nearby: ['Paris', 'Aubervilliers', 'Epinay-sur-Seine', 'Pierrefitte-sur-Seine'],
    coordinates: { lat: 48.9362, lng: 2.3574 },
    distanceFromParis: 8,
    regionPosition: 'nord',
    cityType: 'sous-prefecture',
    economicProfile: 'mixte',
    zoneTypes: ['zone-industrielle', 'zone-commerciale', 'gare', 'centre-ville'],
    landmarks: [
      { name: 'Stade de France', type: 'stade' },
      { name: 'Basilique Saint-Denis', type: 'monument' }
    ],
    economicContext: { majorEmployers: ['Stade de France', 'Plaine Commune'], businessSectors: ['evenementiel', 'industrie', 'logistique'], hasIndustrialZone: true },
    pricingZone: 'standard'
  },
  {
    id: 'montreuil',
    slug: 'montreuil',
    name: 'Montreuil',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 111454,
    postalCodes: ['93100'],
    nearby: ['Paris', 'Vincennes', 'Bagnolet', 'Rosny-sous-Bois'],
    coordinates: { lat: 48.8638, lng: 2.4486 },
    distanceFromParis: 7,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'mixte',
    zoneTypes: ['zone-commerciale', 'zone-artisanale', 'centre-ville'],
    landmarks: [
      { name: 'Croix de Chavaux', type: 'centre-ville' },
      { name: 'Parc des Beaumonts', type: 'centre-ville' }
    ],
    economicContext: { businessSectors: ['artisanat', 'creative', 'tech'], hasCommercialCenter: true },
    pricingZone: 'standard'
  },
  {
    id: 'aubervilliers',
    slug: 'aubervilliers',
    name: 'Aubervilliers',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 87000,
    postalCodes: ['93300'],
    nearby: ['Saint-Denis', 'La Courneuve', 'Pantin', 'Paris 19e'],
    coordinates: { lat: 48.9147, lng: 2.3836 },
    distanceFromParis: 6,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'industriel',
    zoneTypes: ['zone-industrielle', 'zone-logistique', 'gare'],
    landmarks: [
      { name: 'Fort d\'Aubervilliers', type: 'zone-activite' }
    ],
    economicContext: { businessSectors: ['logistique', 'industrie', 'entreposage'], hasIndustrialZone: true, hasLogisticsHub: true },
    pricingZone: 'standard'
  },
  {
    id: 'aulnay-sous-bois',
    slug: 'aulnay-sous-bois',
    name: 'Aulnay-sous-Bois',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 85000,
    postalCodes: ['93600'],
    nearby: ['Le Blanc-Mesnil', 'Sevran', 'Villepinte', 'Livry-Gargan'],
    coordinates: { lat: 48.9386, lng: 2.4969 },
    distanceFromParis: 14,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'industriel',
    zoneTypes: ['zone-industrielle', 'zone-commerciale', 'gare'],
    landmarks: [
      { name: 'Parc Robert Ballanger', type: 'centre-ville' },
      { name: 'O\'Parinor', type: 'centre-commercial' }
    ],
    economicContext: { majorEmployers: ['PSA (ancien site)'], businessSectors: ['industrie', 'commerce', 'logistique'], hasIndustrialZone: true, hasCommercialCenter: true },
    pricingZone: 'economique'
  },
  {
    id: 'drancy',
    slug: 'drancy',
    name: 'Drancy',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 72000,
    postalCodes: ['93700'],
    nearby: ['Le Bourget', 'Bobigny', 'Le Blanc-Mesnil', 'Bondy'],
    coordinates: { lat: 48.9268, lng: 2.4505 },
    distanceFromParis: 10,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'gare', 'centre-ville'],
    landmarks: [
      { name: 'Cite de la Muette', type: 'centre-ville' }
    ],
    economicContext: { businessSectors: ['services', 'commerce'] },
    pricingZone: 'standard'
  },
  {
    id: 'noisy-le-grand',
    slug: 'noisy-le-grand',
    name: 'Noisy-le-Grand',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 67000,
    postalCodes: ['93160'],
    nearby: ['Champs-sur-Marne', 'Gournay-sur-Marne', 'Neuilly-sur-Marne', 'Villiers-sur-Marne'],
    coordinates: { lat: 48.8475, lng: 2.5523 },
    distanceFromParis: 15,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'zone-commerciale', 'gare'],
    landmarks: [
      { name: 'Les Arcades', type: 'centre-commercial' },
      { name: 'Mont d\'Est', type: 'quartier-affaires' }
    ],
    economicContext: { businessSectors: ['tertiaire', 'services', 'commerce'], hasCommercialCenter: true },
    pricingZone: 'standard'
  },
  {
    id: 'pantin',
    slug: 'pantin',
    name: 'Pantin',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 56000,
    postalCodes: ['93500'],
    nearby: ['Paris 19e', 'Aubervilliers', 'Les Lilas', 'Le Pre-Saint-Gervais'],
    coordinates: { lat: 48.8946, lng: 2.4053 },
    distanceFromParis: 5,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'zone-artisanale', 'gare'],
    landmarks: [
      { name: 'Grands Moulins de Pantin', type: 'zone-activite' },
      { name: 'Quartier du Canal', type: 'quartier-affaires' }
    ],
    economicContext: { majorEmployers: ['BNP Paribas', 'Hermes'], businessSectors: ['mode', 'luxe', 'tech'], hasCommercialCenter: true },
    pricingZone: 'premium'
  },
  {
    id: 'bondy',
    slug: 'bondy',
    name: 'Bondy',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 53000,
    postalCodes: ['93140'],
    nearby: ['Bobigny', 'Les Pavillons-sous-Bois', 'Noisy-le-Sec', 'Rosny-sous-Bois'],
    coordinates: { lat: 48.9022, lng: 2.4831 },
    distanceFromParis: 10,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'zone-commerciale', 'gare'],
    landmarks: [
      { name: 'Foret de Bondy', type: 'centre-ville' }
    ],
    economicContext: { businessSectors: ['services', 'commerce'] },
    pricingZone: 'standard'
  },
  {
    id: 'epinay-sur-seine',
    slug: 'epinay-sur-seine',
    name: 'Epinay-sur-Seine',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 53000,
    postalCodes: ['93800'],
    nearby: ['Saint-Denis', 'Villetaneuse', 'Argenteuil', 'Saint-Gratien'],
    coordinates: { lat: 48.9556, lng: 2.3095 },
    distanceFromParis: 12,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'zone-commerciale', 'gare'],
    landmarks: [
      { name: 'Ile des Impressionnistes', type: 'centre-ville' }
    ],
    economicContext: { businessSectors: ['services', 'commerce'] },
    pricingZone: 'standard'
  },
  {
    id: 'sevran',
    slug: 'sevran',
    name: 'Sevran',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 51000,
    postalCodes: ['93270'],
    nearby: ['Aulnay-sous-Bois', 'Livry-Gargan', 'Villepinte', 'Tremblay-en-France'],
    coordinates: { lat: 48.9458, lng: 2.5294 },
    distanceFromParis: 16,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'zone-commerciale', 'gare'],
    landmarks: [
      { name: 'Parc de la Poudrerie', type: 'centre-ville' }
    ],
    economicContext: { businessSectors: ['services', 'commerce'] },
    pricingZone: 'economique'
  },
  {
    id: 'livry-gargan',
    slug: 'livry-gargan',
    name: 'Livry-Gargan',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 45000,
    postalCodes: ['93190'],
    nearby: ['Aulnay-sous-Bois', 'Sevran', 'Clichy-sous-Bois', 'Les Pavillons-sous-Bois'],
    coordinates: { lat: 48.9192, lng: 2.5392 },
    distanceFromParis: 14,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'centre-ville'],
    economicContext: { businessSectors: ['services', 'commerce'] },
    pricingZone: 'economique'
  },
  {
    id: 'le-blanc-mesnil',
    slug: 'le-blanc-mesnil',
    name: 'Le Blanc-Mesnil',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 56000,
    postalCodes: ['93150'],
    nearby: ['Drancy', 'Aulnay-sous-Bois', 'Le Bourget', 'Dugny'],
    coordinates: { lat: 48.9386, lng: 2.4614 },
    distanceFromParis: 12,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'industriel',
    zoneTypes: ['zone-industrielle', 'aeroport', 'gare'],
    landmarks: [
      { name: 'Aeroport du Bourget', type: 'aeroport' }
    ],
    economicContext: { businessSectors: ['aeronautique', 'industrie', 'logistique'], hasIndustrialZone: true, hasLogisticsHub: true },
    pricingZone: 'standard'
  },

  // ═══════════════════════════════════════════════════════════════════
  // 94 - VAL-DE-MARNE (12 villes)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'creteil',
    slug: 'creteil',
    name: 'Creteil',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 91228,
    postalCodes: ['94000'],
    nearby: ['Maisons-Alfort', 'Saint-Maur-des-Fosses', 'Alfortville', 'Bonneuil-sur-Marne'],
    coordinates: { lat: 48.7897, lng: 2.4628 },
    distanceFromParis: 12,
    regionPosition: 'sud',
    cityType: 'prefecture',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'zone-commerciale', 'centre-ville', 'gare'],
    landmarks: [
      { name: 'Creteil Soleil', type: 'centre-commercial' },
      { name: 'Prefecture du Val-de-Marne', type: 'centre-ville' },
      { name: 'Universite Paris-Est Creteil', type: 'universite' }
    ],
    economicContext: { majorEmployers: ['Conseil Departemental 94', 'UPEC'], businessSectors: ['administration', 'education', 'commerce'], hasCommercialCenter: true },
    pricingZone: 'standard'
  },
  {
    id: 'vitry-sur-seine',
    slug: 'vitry-sur-seine',
    name: 'Vitry-sur-Seine',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 94838,
    postalCodes: ['94400'],
    nearby: ['Ivry-sur-Seine', 'Choisy-le-Roi', 'Villejuif', 'Thiais'],
    coordinates: { lat: 48.7875, lng: 2.3925 },
    distanceFromParis: 8,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'industriel',
    zoneTypes: ['zone-industrielle', 'zone-logistique', 'gare'],
    landmarks: [
      { name: 'Port de Vitry', type: 'zone-activite' }
    ],
    economicContext: { businessSectors: ['industrie', 'logistique', 'entreposage'], hasIndustrialZone: true, hasLogisticsHub: true },
    pricingZone: 'standard'
  },
  {
    id: 'champigny-sur-marne',
    slug: 'champigny-sur-marne',
    name: 'Champigny-sur-Marne',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 77000,
    postalCodes: ['94500'],
    nearby: ['Saint-Maur-des-Fosses', 'Joinville-le-Pont', 'Bry-sur-Marne', 'Villiers-sur-Marne'],
    coordinates: { lat: 48.8175, lng: 2.5153 },
    distanceFromParis: 12,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'zone-commerciale', 'gare'],
    landmarks: [
      { name: 'Bords de Marne', type: 'centre-ville' }
    ],
    economicContext: { businessSectors: ['services', 'commerce'] },
    pricingZone: 'standard'
  },
  {
    id: 'saint-maur-des-fosses',
    slug: 'saint-maur-des-fosses',
    name: 'Saint-Maur-des-Fosses',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 75000,
    postalCodes: ['94100', '94210'],
    nearby: ['Creteil', 'Champigny-sur-Marne', 'Joinville-le-Pont', 'Sucy-en-Brie'],
    coordinates: { lat: 48.8003, lng: 2.4900 },
    distanceFromParis: 11,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'centre-ville', 'gare'],
    landmarks: [
      { name: 'Boucle de la Marne', type: 'centre-ville' }
    ],
    economicContext: { businessSectors: ['services', 'commerce'] },
    pricingZone: 'standard'
  },
  {
    id: 'ivry-sur-seine',
    slug: 'ivry-sur-seine',
    name: 'Ivry-sur-Seine',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 62000,
    postalCodes: ['94200'],
    nearby: ['Paris 13e', 'Vitry-sur-Seine', 'Le Kremlin-Bicetre', 'Charenton-le-Pont'],
    coordinates: { lat: 48.8147, lng: 2.3886 },
    distanceFromParis: 5,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'industriel',
    zoneTypes: ['zone-industrielle', 'zone-commerciale', 'gare'],
    landmarks: [
      { name: 'Manufacture des Gobelins', type: 'zone-activite' }
    ],
    economicContext: { businessSectors: ['industrie', 'logistique', 'tech'], hasIndustrialZone: true },
    pricingZone: 'premium'
  },
  {
    id: 'maisons-alfort',
    slug: 'maisons-alfort',
    name: 'Maisons-Alfort',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 56000,
    postalCodes: ['94700'],
    nearby: ['Creteil', 'Alfortville', 'Saint-Maurice', 'Charenton-le-Pont'],
    coordinates: { lat: 48.8053, lng: 2.4378 },
    distanceFromParis: 8,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'centre-ville', 'gare'],
    landmarks: [
      { name: 'Ecole Veterinaire de Maisons-Alfort', type: 'universite' }
    ],
    economicContext: { majorEmployers: ['ENVA'], businessSectors: ['education', 'services'] },
    pricingZone: 'standard'
  },
  {
    id: 'fontenay-sous-bois',
    slug: 'fontenay-sous-bois',
    name: 'Fontenay-sous-Bois',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 53000,
    postalCodes: ['94120'],
    nearby: ['Vincennes', 'Nogent-sur-Marne', 'Montreuil', 'Rosny-sous-Bois'],
    coordinates: { lat: 48.8539, lng: 2.4722 },
    distanceFromParis: 9,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'zone-commerciale', 'gare'],
    landmarks: [
      { name: 'Val de Fontenay', type: 'gare' }
    ],
    economicContext: { businessSectors: ['services', 'commerce'] },
    pricingZone: 'standard'
  },
  {
    id: 'villejuif',
    slug: 'villejuif',
    name: 'Villejuif',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 55000,
    postalCodes: ['94800'],
    nearby: ['Vitry-sur-Seine', 'Le Kremlin-Bicetre', 'Arcueil', 'Cachan'],
    coordinates: { lat: 48.7917, lng: 2.3597 },
    distanceFromParis: 6,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'tertiaire',
    zoneTypes: ['zone-commerciale', 'centre-ville', 'gare'],
    landmarks: [
      { name: 'Institut Gustave Roussy', type: 'hopital' },
      { name: 'Campus Grand Parc', type: 'zone-activite' }
    ],
    economicContext: { majorEmployers: ['Institut Gustave Roussy', 'INSERM'], businessSectors: ['sante', 'recherche'] },
    pricingZone: 'premium'
  },
  {
    id: 'vincennes',
    slug: 'vincennes',
    name: 'Vincennes',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 49000,
    postalCodes: ['94300'],
    nearby: ['Montreuil', 'Fontenay-sous-Bois', 'Saint-Mande', 'Paris 12e'],
    coordinates: { lat: 48.8478, lng: 2.4392 },
    distanceFromParis: 6,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'centre-ville', 'gare'],
    landmarks: [
      { name: 'Chateau de Vincennes', type: 'centre-ville' },
      { name: 'Bois de Vincennes', type: 'centre-ville' }
    ],
    economicContext: { businessSectors: ['tourisme', 'services', 'commerce'] },
    pricingZone: 'premium'
  },
  {
    id: 'alfortville',
    slug: 'alfortville',
    name: 'Alfortville',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 45000,
    postalCodes: ['94140'],
    nearby: ['Maisons-Alfort', 'Creteil', 'Ivry-sur-Seine', 'Vitry-sur-Seine'],
    coordinates: { lat: 48.8053, lng: 2.4214 },
    distanceFromParis: 7,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'zone-commerciale', 'gare'],
    economicContext: { businessSectors: ['services', 'commerce'] },
    pricingZone: 'standard'
  },
  {
    id: 'choisy-le-roi',
    slug: 'choisy-le-roi',
    name: 'Choisy-le-Roi',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 45000,
    postalCodes: ['94600'],
    nearby: ['Vitry-sur-Seine', 'Thiais', 'Orly', 'Villeneuve-le-Roi'],
    coordinates: { lat: 48.7631, lng: 2.4103 },
    distanceFromParis: 10,
    regionPosition: 'sud',
    cityType: 'commune',
    economicProfile: 'industriel',
    zoneTypes: ['zone-industrielle', 'zone-logistique', 'gare'],
    landmarks: [
      { name: 'Port de Choisy', type: 'zone-activite' }
    ],
    economicContext: { businessSectors: ['logistique', 'industrie'], hasIndustrialZone: true, hasLogisticsHub: true },
    pricingZone: 'standard'
  },
  {
    id: 'nogent-sur-marne',
    slug: 'nogent-sur-marne',
    name: 'Nogent-sur-Marne',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 33000,
    postalCodes: ['94130'],
    nearby: ['Fontenay-sous-Bois', 'Le Perreux-sur-Marne', 'Joinville-le-Pont', 'Vincennes'],
    coordinates: { lat: 48.8372, lng: 2.4833 },
    distanceFromParis: 10,
    regionPosition: 'est',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'centre-ville', 'gare'],
    landmarks: [
      { name: 'Bords de Marne', type: 'centre-ville' }
    ],
    economicContext: { businessSectors: ['services', 'commerce'] },
    pricingZone: 'standard'
  },

  // ═══════════════════════════════════════════════════════════════════
  // 95 - VAL-D'OISE (12 villes)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'argenteuil',
    slug: 'argenteuil',
    name: 'Argenteuil',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 113738,
    postalCodes: ['95100'],
    nearby: ['Colombes', 'Bezons', 'Cormeilles-en-Parisis', 'Sannois'],
    coordinates: { lat: 48.9473, lng: 2.2467 },
    distanceFromParis: 12,
    regionPosition: 'nord',
    cityType: 'sous-prefecture',
    economicProfile: 'mixte',
    zoneTypes: ['zone-industrielle', 'zone-commerciale', 'centre-ville', 'gare'],
    landmarks: [
      { name: 'Cote Seine', type: 'centre-commercial' },
      { name: 'Gare d\'Argenteuil', type: 'gare' }
    ],
    economicContext: { businessSectors: ['industrie', 'logistique', 'services'], hasIndustrialZone: true, hasCommercialCenter: true },
    pricingZone: 'standard'
  },
  {
    id: 'cergy',
    slug: 'cergy',
    name: 'Cergy',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 66000,
    postalCodes: ['95000', '95800'],
    nearby: ['Pontoise', 'Osny', 'Eragny', 'Saint-Ouen-l\'Aumone'],
    coordinates: { lat: 49.0361, lng: 2.0631 },
    distanceFromParis: 30,
    regionPosition: 'nord',
    cityType: 'prefecture',
    economicProfile: 'tertiaire',
    zoneTypes: ['quartier-affaires', 'zone-commerciale', 'centre-ville', 'gare'],
    landmarks: [
      { name: 'Les 3 Fontaines', type: 'centre-commercial' },
      { name: 'Prefecture du Val-d\'Oise', type: 'centre-ville' },
      { name: 'Universite CY Cergy Paris', type: 'universite' }
    ],
    economicContext: { majorEmployers: ['Prefecture', 'Universite CY'], businessSectors: ['administration', 'education', 'tertiaire'], hasCommercialCenter: true },
    pricingZone: 'economique'
  },
  {
    id: 'sarcelles',
    slug: 'sarcelles',
    name: 'Sarcelles',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 58000,
    postalCodes: ['95200'],
    nearby: ['Garges-les-Gonesse', 'Villiers-le-Bel', 'Arnouville', 'Saint-Brice-sous-Foret'],
    coordinates: { lat: 48.9958, lng: 2.3792 },
    distanceFromParis: 15,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-commerciale', 'zone-residentielle', 'gare'],
    landmarks: [
      { name: 'Les Flanades', type: 'centre-commercial' },
      { name: 'Gare de Sarcelles-Saint-Brice', type: 'gare' }
    ],
    economicContext: { businessSectors: ['commerce', 'services'], hasCommercialCenter: true },
    pricingZone: 'standard'
  },
  {
    id: 'garges-les-gonesse',
    slug: 'garges-les-gonesse',
    name: 'Garges-les-Gonesse',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 42000,
    postalCodes: ['95140'],
    nearby: ['Sarcelles', 'Arnouville', 'Stains', 'Pierrefitte-sur-Seine'],
    coordinates: { lat: 48.9731, lng: 2.4006 },
    distanceFromParis: 14,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-commerciale', 'zone-residentielle'],
    landmarks: [
      { name: 'Avenue de Stalingrad', type: 'centre-commercial' }
    ],
    economicContext: { businessSectors: ['commerce', 'services'] },
    pricingZone: 'standard'
  },
  {
    id: 'franconville',
    slug: 'franconville',
    name: 'Franconville',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 35000,
    postalCodes: ['95130'],
    nearby: ['Sannois', 'Ermont', 'Le Plessis-Bouchard', 'Beauchamp'],
    coordinates: { lat: 48.9886, lng: 2.2306 },
    distanceFromParis: 17,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-commerciale', 'zone-residentielle', 'gare'],
    landmarks: [
      { name: 'Gare de Franconville-Le Plessis-Bouchard', type: 'gare' }
    ],
    economicContext: { businessSectors: ['commerce', 'services'] },
    pricingZone: 'standard'
  },
  {
    id: 'goussainville',
    slug: 'goussainville',
    name: 'Goussainville',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 31000,
    postalCodes: ['95190'],
    nearby: ['Roissy-en-France', 'Louvres', 'Le Thillay', 'Gonesse'],
    coordinates: { lat: 49.0336, lng: 2.4742 },
    distanceFromParis: 23,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'industriel',
    zoneTypes: ['zone-logistique', 'zone-industrielle', 'aeroport', 'gare'],
    landmarks: [
      { name: 'Zone Roissy-CDG', type: 'zone-activite' },
      { name: 'Gare de Goussainville', type: 'gare' }
    ],
    economicContext: { businessSectors: ['logistique', 'transport', 'aeronautique'], hasIndustrialZone: true, hasLogisticsHub: true },
    pricingZone: 'economique'
  },
  {
    id: 'pontoise',
    slug: 'pontoise',
    name: 'Pontoise',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 31000,
    postalCodes: ['95000', '95300'],
    nearby: ['Cergy', 'Saint-Ouen-l\'Aumone', 'Osny', 'Auvers-sur-Oise'],
    coordinates: { lat: 49.0511, lng: 2.1011 },
    distanceFromParis: 32,
    regionPosition: 'nord',
    cityType: 'sous-prefecture',
    economicProfile: 'tertiaire',
    zoneTypes: ['centre-ville', 'zone-commerciale', 'gare'],
    landmarks: [
      { name: 'Tribunal de Pontoise', type: 'centre-ville' },
      { name: 'Gare de Pontoise', type: 'gare' },
      { name: 'Hopital de Pontoise', type: 'hopital' }
    ],
    economicContext: { businessSectors: ['administration', 'justice', 'sante', 'commerce'], hasCommercialCenter: true },
    pricingZone: 'economique'
  },
  {
    id: 'bezons',
    slug: 'bezons',
    name: 'Bezons',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 30000,
    postalCodes: ['95870'],
    nearby: ['Argenteuil', 'Houilles', 'Colombes', 'Carrieres-sur-Seine'],
    coordinates: { lat: 48.9236, lng: 2.2128 },
    distanceFromParis: 13,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'industriel',
    zoneTypes: ['zone-industrielle', 'zone-commerciale'],
    landmarks: [
      { name: 'Zone industrielle des Bords de Seine', type: 'zone-activite' }
    ],
    economicContext: { businessSectors: ['industrie', 'logistique'], hasIndustrialZone: true },
    pricingZone: 'standard'
  },
  {
    id: 'ermont',
    slug: 'ermont',
    name: 'Ermont',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 29000,
    postalCodes: ['95120'],
    nearby: ['Franconville', 'Eaubonne', 'Saint-Gratien', 'Sannois'],
    coordinates: { lat: 48.9906, lng: 2.2608 },
    distanceFromParis: 15,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'zone-commerciale', 'gare'],
    landmarks: [
      { name: 'Gare d\'Ermont-Eaubonne', type: 'gare' }
    ],
    economicContext: { businessSectors: ['commerce', 'services'] },
    pricingZone: 'standard'
  },
  {
    id: 'villiers-le-bel',
    slug: 'villiers-le-bel',
    name: 'Villiers-le-Bel',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 28000,
    postalCodes: ['95400'],
    nearby: ['Sarcelles', 'Arnouville', 'Gonesse', 'Ecouen'],
    coordinates: { lat: 49.0092, lng: 2.3908 },
    distanceFromParis: 18,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'gare'],
    landmarks: [
      { name: 'Gare de Villiers-le-Bel-Gonesse-Arnouville', type: 'gare' }
    ],
    economicContext: { businessSectors: ['services'] },
    pricingZone: 'standard'
  },
  {
    id: 'taverny',
    slug: 'taverny',
    name: 'Taverny',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 27000,
    postalCodes: ['95150'],
    nearby: ['Saint-Leu-la-Foret', 'Beauchamp', 'Le Plessis-Bouchard', 'Franconville'],
    coordinates: { lat: 49.0269, lng: 2.2311 },
    distanceFromParis: 20,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'residentiel',
    zoneTypes: ['zone-residentielle', 'gare'],
    landmarks: [
      { name: 'Gare de Taverny', type: 'gare' },
      { name: 'Foret de Montmorency', type: 'centre-ville' }
    ],
    economicContext: { businessSectors: ['services', 'commerce'] },
    pricingZone: 'economique'
  },
  {
    id: 'saint-ouen-l-aumone',
    slug: 'saint-ouen-l-aumone',
    name: 'Saint-Ouen-l\'Aumone',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 24000,
    postalCodes: ['95310'],
    nearby: ['Cergy', 'Pontoise', 'Pierrelaye', 'Mery-sur-Oise'],
    coordinates: { lat: 49.0447, lng: 2.1125 },
    distanceFromParis: 30,
    regionPosition: 'nord',
    cityType: 'commune',
    economicProfile: 'industriel',
    zoneTypes: ['zone-industrielle', 'zone-logistique', 'zone-commerciale'],
    landmarks: [
      { name: 'Zone industrielle des Beurreries', type: 'zone-activite' },
      { name: 'Auchan Saint-Ouen-l\'Aumone', type: 'centre-commercial' }
    ],
    economicContext: { businessSectors: ['logistique', 'industrie', 'commerce'], hasIndustrialZone: true, hasLogisticsHub: true, hasCommercialCenter: true },
    pricingZone: 'economique'
  }
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(l => l.slug === slug);
};

export const getAllLocationSlugs = (): string[] => {
  return locations.map(l => l.slug);
};

export const getLocationsByDepartment = (departmentCode: string): Location[] => {
  return locations.filter(l => l.departmentCode === departmentCode);
};
