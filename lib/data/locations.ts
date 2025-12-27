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
    nearby: ['Boulogne-Billancourt', 'Saint-Denis', 'Montreuil', 'Nanterre']
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
    nearby: ['Chelles', 'Lagny-sur-Marne', 'Claye-Souilly', 'Villenoy']
  },
  {
    id: 'chelles',
    slug: 'chelles',
    name: 'Chelles',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 54000,
    postalCodes: ['77500'],
    nearby: ['Meaux', 'Montfermeil', 'Gagny', 'Gournay-sur-Marne']
  },
  {
    id: 'melun',
    slug: 'melun',
    name: 'Melun',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 40000,
    postalCodes: ['77000'],
    nearby: ['Dammarie-les-Lys', 'Le Mee-sur-Seine', 'Savigny-le-Temple', 'Vaux-le-Penil']
  },
  {
    id: 'pontault-combault',
    slug: 'pontault-combault',
    name: 'Pontault-Combault',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 38000,
    postalCodes: ['77340'],
    nearby: ['Roissy-en-Brie', 'Ozoir-la-Ferriere', 'Emerainville', 'Sucy-en-Brie']
  },
  {
    id: 'savigny-le-temple',
    slug: 'savigny-le-temple',
    name: 'Savigny-le-Temple',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 31000,
    postalCodes: ['77176'],
    nearby: ['Melun', 'Nandy', 'Cesson', 'Vert-Saint-Denis']
  },
  {
    id: 'champs-sur-marne',
    slug: 'champs-sur-marne',
    name: 'Champs-sur-Marne',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 26000,
    postalCodes: ['77420'],
    nearby: ['Noisy-le-Grand', 'Noisiel', 'Torcy', 'Lognes']
  },
  {
    id: 'torcy',
    slug: 'torcy',
    name: 'Torcy',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 24000,
    postalCodes: ['77200'],
    nearby: ['Noisiel', 'Lognes', 'Champs-sur-Marne', 'Bussy-Saint-Georges']
  },
  {
    id: 'bussy-saint-georges',
    slug: 'bussy-saint-georges',
    name: 'Bussy-Saint-Georges',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 28000,
    postalCodes: ['77600'],
    nearby: ['Torcy', 'Lagny-sur-Marne', 'Ferriere', 'Collegien']
  },
  {
    id: 'roissy-en-brie',
    slug: 'roissy-en-brie',
    name: 'Roissy-en-Brie',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 23000,
    postalCodes: ['77680'],
    nearby: ['Pontault-Combault', 'Ozoir-la-Ferriere', 'Emerainville', 'Ferolles-Attilly']
  },
  {
    id: 'lagny-sur-marne',
    slug: 'lagny-sur-marne',
    name: 'Lagny-sur-Marne',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 22000,
    postalCodes: ['77400'],
    nearby: ['Thorigny-sur-Marne', 'Pomponne', 'Bussy-Saint-Georges', 'Montevrain']
  },
  {
    id: 'fontainebleau',
    slug: 'fontainebleau',
    name: 'Fontainebleau',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 15000,
    postalCodes: ['77300'],
    nearby: ['Avon', 'Samois-sur-Seine', 'Thomery', 'Bourron-Marlotte']
  },
  {
    id: 'nemours',
    slug: 'nemours',
    name: 'Nemours',
    department: 'Seine-et-Marne',
    departmentCode: '77',
    population: 13000,
    postalCodes: ['77140'],
    nearby: ['Saint-Pierre-les-Nemours', 'Bagneaux-sur-Loing', 'Poligny', 'Grez-sur-Loing']
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
    nearby: ['Le Chesnay', 'Viroflay', 'Velizy-Villacoublay', 'Saint-Cyr-l\'Ecole']
  },
  {
    id: 'saint-germain-en-laye',
    slug: 'saint-germain-en-laye',
    name: 'Saint-Germain-en-Laye',
    department: 'Yvelines',
    departmentCode: '78',
    population: 46000,
    postalCodes: ['78100'],
    nearby: ['Le Vesinet', 'Poissy', 'Chambourcy', 'Maisons-Laffitte']
  },
  {
    id: 'mantes-la-jolie',
    slug: 'mantes-la-jolie',
    name: 'Mantes-la-Jolie',
    department: 'Yvelines',
    departmentCode: '78',
    population: 44000,
    postalCodes: ['78200'],
    nearby: ['Mantes-la-Ville', 'Limay', 'Buchelay', 'Magnanville']
  },
  {
    id: 'sartrouville',
    slug: 'sartrouville',
    name: 'Sartrouville',
    department: 'Yvelines',
    departmentCode: '78',
    population: 52000,
    postalCodes: ['78500'],
    nearby: ['Houilles', 'Maisons-Laffitte', 'Montesson', 'Le Pecq']
  },
  {
    id: 'poissy',
    slug: 'poissy',
    name: 'Poissy',
    department: 'Yvelines',
    departmentCode: '78',
    population: 37000,
    postalCodes: ['78300'],
    nearby: ['Carriere-sous-Poissy', 'Saint-Germain-en-Laye', 'Acheres', 'Orgeval']
  },
  {
    id: 'conflans-sainte-honorine',
    slug: 'conflans-sainte-honorine',
    name: 'Conflans-Sainte-Honorine',
    department: 'Yvelines',
    departmentCode: '78',
    population: 36000,
    postalCodes: ['78700'],
    nearby: ['Acheres', 'Herblay', 'Maurecourt', 'Andressy']
  },
  {
    id: 'montigny-le-bretonneux',
    slug: 'montigny-le-bretonneux',
    name: 'Montigny-le-Bretonneux',
    department: 'Yvelines',
    departmentCode: '78',
    population: 33000,
    postalCodes: ['78180'],
    nearby: ['Trappes', 'Guyancourt', 'Voisins-le-Bretonneux', 'Saint-Quentin-en-Yvelines']
  },
  {
    id: 'les-mureaux',
    slug: 'les-mureaux',
    name: 'Les Mureaux',
    department: 'Yvelines',
    departmentCode: '78',
    population: 32000,
    postalCodes: ['78130'],
    nearby: ['Meulan', 'Ecquevilly', 'Bouafle', 'Hardricourt']
  },
  {
    id: 'plaisir',
    slug: 'plaisir',
    name: 'Plaisir',
    department: 'Yvelines',
    departmentCode: '78',
    population: 31000,
    postalCodes: ['78370'],
    nearby: ['Elancourt', 'Maurepas', 'Les Clayes-sous-Bois', 'Trappes']
  },
  {
    id: 'trappes',
    slug: 'trappes',
    name: 'Trappes',
    department: 'Yvelines',
    departmentCode: '78',
    population: 31000,
    postalCodes: ['78190'],
    nearby: ['Montigny-le-Bretonneux', 'Plaisir', 'Elancourt', 'La Verriere']
  },
  {
    id: 'houilles',
    slug: 'houilles',
    name: 'Houilles',
    department: 'Yvelines',
    departmentCode: '78',
    population: 32000,
    postalCodes: ['78800'],
    nearby: ['Sartrouville', 'Carrieres-sur-Seine', 'Bezons', 'Montesson']
  },
  {
    id: 'chatou',
    slug: 'chatou',
    name: 'Chatou',
    department: 'Yvelines',
    departmentCode: '78',
    population: 31000,
    postalCodes: ['78400'],
    nearby: ['Le Vesinet', 'Croissy-sur-Seine', 'Rueil-Malmaison', 'Montesson']
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
    nearby: ['Corbeil-Essonnes', 'Ris-Orangis', 'Bondoufle', 'Lisses']
  },
  {
    id: 'corbeil-essonnes',
    slug: 'corbeil-essonnes',
    name: 'Corbeil-Essonnes',
    department: 'Essonne',
    departmentCode: '91',
    population: 50000,
    postalCodes: ['91100'],
    nearby: ['Evry-Courcouronnes', 'Villabe', 'Saint-Germain-les-Corbeil', 'Etiolles']
  },
  {
    id: 'massy',
    slug: 'massy',
    name: 'Massy',
    department: 'Essonne',
    departmentCode: '91',
    population: 50000,
    postalCodes: ['91300'],
    nearby: ['Palaiseau', 'Antony', 'Verrieres-le-Buisson', 'Igny']
  },
  {
    id: 'savigny-sur-orge',
    slug: 'savigny-sur-orge',
    name: 'Savigny-sur-Orge',
    department: 'Essonne',
    departmentCode: '91',
    population: 37000,
    postalCodes: ['91600'],
    nearby: ['Juvisy-sur-Orge', 'Viry-Chatillon', 'Morangis', 'Epinay-sur-Orge']
  },
  {
    id: 'sainte-genevieve-des-bois',
    slug: 'sainte-genevieve-des-bois',
    name: 'Sainte-Genevieve-des-Bois',
    department: 'Essonne',
    departmentCode: '91',
    population: 36000,
    postalCodes: ['91700'],
    nearby: ['Fleury-Merogis', 'Morsang-sur-Orge', 'Villemoisson-sur-Orge', 'Saint-Michel-sur-Orge']
  },
  {
    id: 'viry-chatillon',
    slug: 'viry-chatillon',
    name: 'Viry-Chatillon',
    department: 'Essonne',
    departmentCode: '91',
    population: 32000,
    postalCodes: ['91170'],
    nearby: ['Savigny-sur-Orge', 'Juvisy-sur-Orge', 'Grigny', 'Athis-Mons']
  },
  {
    id: 'athis-mons',
    slug: 'athis-mons',
    name: 'Athis-Mons',
    department: 'Essonne',
    departmentCode: '91',
    population: 34000,
    postalCodes: ['91200'],
    nearby: ['Juvisy-sur-Orge', 'Paray-Vieille-Poste', 'Morangis', 'Viry-Chatillon']
  },
  {
    id: 'palaiseau',
    slug: 'palaiseau',
    name: 'Palaiseau',
    department: 'Essonne',
    departmentCode: '91',
    population: 33000,
    postalCodes: ['91120'],
    nearby: ['Massy', 'Orsay', 'Saclay', 'Villebon-sur-Yvette']
  },
  {
    id: 'yerres',
    slug: 'yerres',
    name: 'Yerres',
    department: 'Essonne',
    departmentCode: '91',
    population: 29000,
    postalCodes: ['91330'],
    nearby: ['Brunoy', 'Crosne', 'Montgeron', 'Quincy-sous-Senart']
  },
  {
    id: 'draveil',
    slug: 'draveil',
    name: 'Draveil',
    department: 'Essonne',
    departmentCode: '91',
    population: 29000,
    postalCodes: ['91210'],
    nearby: ['Vigneux-sur-Seine', 'Juvisy-sur-Orge', 'Soisy-sur-Seine', 'Montgeron']
  },
  {
    id: 'brunoy',
    slug: 'brunoy',
    name: 'Brunoy',
    department: 'Essonne',
    departmentCode: '91',
    population: 26000,
    postalCodes: ['91800'],
    nearby: ['Yerres', 'Montgeron', 'Epinay-sous-Senart', 'Boussy-Saint-Antoine']
  },
  {
    id: 'les-ulis',
    slug: 'les-ulis',
    name: 'Les Ulis',
    department: 'Essonne',
    departmentCode: '91',
    population: 25000,
    postalCodes: ['91940'],
    nearby: ['Orsay', 'Bures-sur-Yvette', 'Villejust', 'Gif-sur-Yvette']
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
    nearby: ['Paris', 'Issy-les-Moulineaux', 'Saint-Cloud', 'Sevres']
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
    id: 'colombes',
    slug: 'colombes',
    name: 'Colombes',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 86378,
    postalCodes: ['92700'],
    nearby: ['Nanterre', 'Argenteuil', 'Asnieres-sur-Seine', 'La Garenne-Colombes']
  },
  {
    id: 'asnieres-sur-seine',
    slug: 'asnieres-sur-seine',
    name: 'Asnieres-sur-Seine',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 88000,
    postalCodes: ['92600'],
    nearby: ['Colombes', 'Gennevilliers', 'Clichy', 'Bois-Colombes']
  },
  {
    id: 'courbevoie',
    slug: 'courbevoie',
    name: 'Courbevoie',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 84000,
    postalCodes: ['92400'],
    nearby: ['La Defense', 'Puteaux', 'Nanterre', 'Levallois-Perret']
  },
  {
    id: 'rueil-malmaison',
    slug: 'rueil-malmaison',
    name: 'Rueil-Malmaison',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 79000,
    postalCodes: ['92500'],
    nearby: ['Nanterre', 'Suresnes', 'Garches', 'Chatou']
  },
  {
    id: 'issy-les-moulineaux',
    slug: 'issy-les-moulineaux',
    name: 'Issy-les-Moulineaux',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 69000,
    postalCodes: ['92130'],
    nearby: ['Boulogne-Billancourt', 'Vanves', 'Meudon', 'Clamart']
  },
  {
    id: 'levallois-perret',
    slug: 'levallois-perret',
    name: 'Levallois-Perret',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 66000,
    postalCodes: ['92300'],
    nearby: ['Neuilly-sur-Seine', 'Clichy', 'Courbevoie', 'Paris 17e']
  },
  {
    id: 'antony',
    slug: 'antony',
    name: 'Antony',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 63000,
    postalCodes: ['92160'],
    nearby: ['Massy', 'Chatenay-Malabry', 'Fresnes', 'Bourg-la-Reine']
  },
  {
    id: 'neuilly-sur-seine',
    slug: 'neuilly-sur-seine',
    name: 'Neuilly-sur-Seine',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 61000,
    postalCodes: ['92200'],
    nearby: ['Levallois-Perret', 'Paris 16e', 'Paris 17e', 'Puteaux']
  },
  {
    id: 'clamart',
    slug: 'clamart',
    name: 'Clamart',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 53000,
    postalCodes: ['92140'],
    nearby: ['Issy-les-Moulineaux', 'Meudon', 'Vanves', 'Malakoff']
  },
  {
    id: 'meudon',
    slug: 'meudon',
    name: 'Meudon',
    department: 'Hauts-de-Seine',
    departmentCode: '92',
    population: 45000,
    postalCodes: ['92190', '92360'],
    nearby: ['Issy-les-Moulineaux', 'Clamart', 'Sevres', 'Chaville']
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
    nearby: ['Paris', 'Aubervilliers', 'Epinay-sur-Seine', 'Pierrefitte-sur-Seine']
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
    id: 'aubervilliers',
    slug: 'aubervilliers',
    name: 'Aubervilliers',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 87000,
    postalCodes: ['93300'],
    nearby: ['Saint-Denis', 'La Courneuve', 'Pantin', 'Paris 19e']
  },
  {
    id: 'aulnay-sous-bois',
    slug: 'aulnay-sous-bois',
    name: 'Aulnay-sous-Bois',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 85000,
    postalCodes: ['93600'],
    nearby: ['Le Blanc-Mesnil', 'Sevran', 'Villepinte', 'Livry-Gargan']
  },
  {
    id: 'drancy',
    slug: 'drancy',
    name: 'Drancy',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 72000,
    postalCodes: ['93700'],
    nearby: ['Le Bourget', 'Bobigny', 'Le Blanc-Mesnil', 'Bondy']
  },
  {
    id: 'noisy-le-grand',
    slug: 'noisy-le-grand',
    name: 'Noisy-le-Grand',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 67000,
    postalCodes: ['93160'],
    nearby: ['Champs-sur-Marne', 'Gournay-sur-Marne', 'Neuilly-sur-Marne', 'Villiers-sur-Marne']
  },
  {
    id: 'pantin',
    slug: 'pantin',
    name: 'Pantin',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 56000,
    postalCodes: ['93500'],
    nearby: ['Paris 19e', 'Aubervilliers', 'Les Lilas', 'Le Pre-Saint-Gervais']
  },
  {
    id: 'bondy',
    slug: 'bondy',
    name: 'Bondy',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 53000,
    postalCodes: ['93140'],
    nearby: ['Bobigny', 'Les Pavillons-sous-Bois', 'Noisy-le-Sec', 'Rosny-sous-Bois']
  },
  {
    id: 'epinay-sur-seine',
    slug: 'epinay-sur-seine',
    name: 'Epinay-sur-Seine',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 53000,
    postalCodes: ['93800'],
    nearby: ['Saint-Denis', 'Villetaneuse', 'Argenteuil', 'Saint-Gratien']
  },
  {
    id: 'sevran',
    slug: 'sevran',
    name: 'Sevran',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 51000,
    postalCodes: ['93270'],
    nearby: ['Aulnay-sous-Bois', 'Livry-Gargan', 'Villepinte', 'Tremblay-en-France']
  },
  {
    id: 'livry-gargan',
    slug: 'livry-gargan',
    name: 'Livry-Gargan',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 45000,
    postalCodes: ['93190'],
    nearby: ['Aulnay-sous-Bois', 'Sevran', 'Clichy-sous-Bois', 'Les Pavillons-sous-Bois']
  },
  {
    id: 'le-blanc-mesnil',
    slug: 'le-blanc-mesnil',
    name: 'Le Blanc-Mesnil',
    department: 'Seine-Saint-Denis',
    departmentCode: '93',
    population: 56000,
    postalCodes: ['93150'],
    nearby: ['Drancy', 'Aulnay-sous-Bois', 'Le Bourget', 'Dugny']
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
    nearby: ['Maisons-Alfort', 'Saint-Maur-des-Fosses', 'Alfortville', 'Bonneuil-sur-Marne']
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
    id: 'champigny-sur-marne',
    slug: 'champigny-sur-marne',
    name: 'Champigny-sur-Marne',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 77000,
    postalCodes: ['94500'],
    nearby: ['Saint-Maur-des-Fosses', 'Joinville-le-Pont', 'Bry-sur-Marne', 'Villiers-sur-Marne']
  },
  {
    id: 'saint-maur-des-fosses',
    slug: 'saint-maur-des-fosses',
    name: 'Saint-Maur-des-Fosses',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 75000,
    postalCodes: ['94100', '94210'],
    nearby: ['Creteil', 'Champigny-sur-Marne', 'Joinville-le-Pont', 'Sucy-en-Brie']
  },
  {
    id: 'ivry-sur-seine',
    slug: 'ivry-sur-seine',
    name: 'Ivry-sur-Seine',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 62000,
    postalCodes: ['94200'],
    nearby: ['Paris 13e', 'Vitry-sur-Seine', 'Le Kremlin-Bicetre', 'Charenton-le-Pont']
  },
  {
    id: 'maisons-alfort',
    slug: 'maisons-alfort',
    name: 'Maisons-Alfort',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 56000,
    postalCodes: ['94700'],
    nearby: ['Creteil', 'Alfortville', 'Saint-Maurice', 'Charenton-le-Pont']
  },
  {
    id: 'fontenay-sous-bois',
    slug: 'fontenay-sous-bois',
    name: 'Fontenay-sous-Bois',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 53000,
    postalCodes: ['94120'],
    nearby: ['Vincennes', 'Nogent-sur-Marne', 'Montreuil', 'Rosny-sous-Bois']
  },
  {
    id: 'villejuif',
    slug: 'villejuif',
    name: 'Villejuif',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 55000,
    postalCodes: ['94800'],
    nearby: ['Vitry-sur-Seine', 'Le Kremlin-Bicetre', 'Arcueil', 'Cachan']
  },
  {
    id: 'vincennes',
    slug: 'vincennes',
    name: 'Vincennes',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 49000,
    postalCodes: ['94300'],
    nearby: ['Montreuil', 'Fontenay-sous-Bois', 'Saint-Mande', 'Paris 12e']
  },
  {
    id: 'alfortville',
    slug: 'alfortville',
    name: 'Alfortville',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 45000,
    postalCodes: ['94140'],
    nearby: ['Maisons-Alfort', 'Creteil', 'Ivry-sur-Seine', 'Vitry-sur-Seine']
  },
  {
    id: 'choisy-le-roi',
    slug: 'choisy-le-roi',
    name: 'Choisy-le-Roi',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 45000,
    postalCodes: ['94600'],
    nearby: ['Vitry-sur-Seine', 'Thiais', 'Orly', 'Villeneuve-le-Roi']
  },
  {
    id: 'nogent-sur-marne',
    slug: 'nogent-sur-marne',
    name: 'Nogent-sur-Marne',
    department: 'Val-de-Marne',
    departmentCode: '94',
    population: 33000,
    postalCodes: ['94130'],
    nearby: ['Fontenay-sous-Bois', 'Le Perreux-sur-Marne', 'Joinville-le-Pont', 'Vincennes']
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
    nearby: ['Colombes', 'Bezons', 'Cormeilles-en-Parisis', 'Sannois']
  },
  {
    id: 'cergy',
    slug: 'cergy',
    name: 'Cergy',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 66000,
    postalCodes: ['95000', '95800'],
    nearby: ['Pontoise', 'Osny', 'Eragny', 'Saint-Ouen-l\'Aumone']
  },
  {
    id: 'sarcelles',
    slug: 'sarcelles',
    name: 'Sarcelles',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 58000,
    postalCodes: ['95200'],
    nearby: ['Garges-les-Gonesse', 'Villiers-le-Bel', 'Arnouville', 'Saint-Brice-sous-Foret']
  },
  {
    id: 'garges-les-gonesse',
    slug: 'garges-les-gonesse',
    name: 'Garges-les-Gonesse',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 42000,
    postalCodes: ['95140'],
    nearby: ['Sarcelles', 'Arnouville', 'Stains', 'Pierrefitte-sur-Seine']
  },
  {
    id: 'franconville',
    slug: 'franconville',
    name: 'Franconville',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 35000,
    postalCodes: ['95130'],
    nearby: ['Sannois', 'Ermont', 'Le Plessis-Bouchard', 'Beauchamp']
  },
  {
    id: 'goussainville',
    slug: 'goussainville',
    name: 'Goussainville',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 31000,
    postalCodes: ['95190'],
    nearby: ['Roissy-en-France', 'Louvres', 'Le Thillay', 'Gonesse']
  },
  {
    id: 'pontoise',
    slug: 'pontoise',
    name: 'Pontoise',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 31000,
    postalCodes: ['95000', '95300'],
    nearby: ['Cergy', 'Saint-Ouen-l\'Aumone', 'Osny', 'Auvers-sur-Oise']
  },
  {
    id: 'bezons',
    slug: 'bezons',
    name: 'Bezons',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 30000,
    postalCodes: ['95870'],
    nearby: ['Argenteuil', 'Houilles', 'Colombes', 'Carrieres-sur-Seine']
  },
  {
    id: 'ermont',
    slug: 'ermont',
    name: 'Ermont',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 29000,
    postalCodes: ['95120'],
    nearby: ['Franconville', 'Eaubonne', 'Saint-Gratien', 'Sannois']
  },
  {
    id: 'villiers-le-bel',
    slug: 'villiers-le-bel',
    name: 'Villiers-le-Bel',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 28000,
    postalCodes: ['95400'],
    nearby: ['Sarcelles', 'Arnouville', 'Gonesse', 'Ecouen']
  },
  {
    id: 'taverny',
    slug: 'taverny',
    name: 'Taverny',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 27000,
    postalCodes: ['95150'],
    nearby: ['Saint-Leu-la-Foret', 'Beauchamp', 'Le Plessis-Bouchard', 'Franconville']
  },
  {
    id: 'saint-ouen-l-aumone',
    slug: 'saint-ouen-l-aumone',
    name: 'Saint-Ouen-l\'Aumone',
    department: 'Val-d\'Oise',
    departmentCode: '95',
    population: 24000,
    postalCodes: ['95310'],
    nearby: ['Cergy', 'Pontoise', 'Pierrelaye', 'Mery-sur-Oise']
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
