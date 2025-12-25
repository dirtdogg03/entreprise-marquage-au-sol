import { articleContents } from './article-contents';

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  categoryId: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  image: string;
  tags: string[];
  featured: boolean;
}

export const categories: Category[] = [
  {
    id: 'conseils',
    slug: 'conseils',
    name: 'Conseils Marquage',
    description: 'Guides et astuces pour votre projet de marquage au sol'
  },
  {
    id: 'reglementation',
    slug: 'reglementation',
    name: 'Reglementation',
    description: 'Normes et obligations legales du marquage au sol'
  },
  {
    id: 'securite',
    slug: 'securite',
    name: 'Securite',
    description: 'Bonnes pratiques de securite et prevention'
  },
  {
    id: 'actualites',
    slug: 'actualites',
    name: 'Actualites',
    description: 'Nouveautes et tendances du secteur'
  }
];

export const articles: Article[] = [
  {
    id: 'choisir-type-marquage',
    slug: 'comment-choisir-type-marquage-au-sol',
    title: 'Comment choisir son type de marquage au sol ?',
    excerpt: 'Guide complet pour selectionner le marquage adapte a vos besoins : peinture, resine, thermoplastique. Comparatif des solutions.',
    content: articleContents['choisir-type-marquage'] || '',
    categoryId: 'conseils',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-15',
    updatedAt: '2025-01-15',
    readTime: 8,
    image: '/images/blog/choisir-marquage.webp',
    tags: ['marquage au sol', 'peinture', 'resine', 'thermoplastique'],
    featured: true
  },
  {
    id: 'reglementation-parking-2025',
    slug: 'reglementation-marquage-parking-entreprise-2025',
    title: 'Reglementation marquage parking entreprise 2025',
    excerpt: 'Toutes les obligations legales pour le marquage de votre parking professionnel : dimensions, couleurs, signalisation PMR.',
    content: articleContents['reglementation-parking-2025'] || '',
    categoryId: 'reglementation',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-10',
    updatedAt: '2025-01-10',
    readTime: 10,
    image: '/images/blog/reglementation-parking.webp',
    tags: ['reglementation', 'parking', 'PMR', 'normes'],
    featured: true
  },
  {
    id: 'normes-securite-industriel',
    slug: 'marquage-sol-industriel-normes-securite',
    title: 'Marquage au sol industriel : normes de securite',
    excerpt: 'Les normes de securite a respecter pour le marquage au sol en environnement industriel : couleurs, zones, signalisation.',
    content: articleContents['normes-securite-industriel'] || '',
    categoryId: 'securite',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-08',
    updatedAt: '2025-01-08',
    readTime: 7,
    image: '/images/blog/securite-industriel.webp',
    tags: ['securite', 'industriel', 'normes', 'couleurs'],
    featured: false
  },
  {
    id: 'prix-marquage-guide',
    slug: 'prix-marquage-au-sol-guide-complet',
    title: 'Prix marquage au sol : guide complet',
    excerpt: 'Combien coute un marquage au sol ? Tous les facteurs de prix et estimations pour votre projet de marquage professionnel.',
    content: articleContents['prix-marquage-guide'] || '',
    categoryId: 'conseils',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-05',
    updatedAt: '2025-01-05',
    readTime: 6,
    image: '/images/blog/prix-marquage.webp',
    tags: ['prix', 'devis', 'budget', 'tarif'],
    featured: true
  },
  {
    id: 'entretien-duree-vie',
    slug: 'entretien-duree-vie-marquage-sol',
    title: 'Entretien et duree de vie du marquage au sol',
    excerpt: 'Comment entretenir votre marquage pour maximiser sa duree de vie ? Conseils d\'experts et bonnes pratiques.',
    content: articleContents['entretien-duree-vie'] || '',
    categoryId: 'conseils',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-03',
    updatedAt: '2025-01-03',
    readTime: 5,
    image: '/images/blog/entretien-marquage.webp',
    tags: ['entretien', 'duree de vie', 'maintenance'],
    featured: false
  },
  {
    id: 'places-pmr-obligations',
    slug: 'places-pmr-obligations-legales',
    title: 'Places PMR : obligations legales',
    excerpt: 'Tout savoir sur les obligations legales des places handicapees : nombre, dimensions, signalisation, sanctions.',
    content: articleContents['places-pmr-obligations'] || '',
    categoryId: 'reglementation',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2024-12-28',
    updatedAt: '2024-12-28',
    readTime: 8,
    image: '/images/blog/places-pmr.webp',
    tags: ['PMR', 'handicape', 'accessibilite', 'obligations'],
    featured: false
  },
  {
    id: 'marquage-entrepot-bonnes-pratiques',
    slug: 'marquage-entrepot-logistique-bonnes-pratiques',
    title: 'Marquage entrepot logistique : bonnes pratiques',
    excerpt: 'Optimisez votre entrepot grace au marquage au sol : zones de stockage, circulation, securite. Guide des meilleures pratiques.',
    content: articleContents['marquage-entrepot-bonnes-pratiques'] || '',
    categoryId: 'conseils',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2024-12-20',
    updatedAt: '2024-12-20',
    readTime: 9,
    image: '/images/blog/entrepot-logistique.webp',
    tags: ['entrepot', 'logistique', 'stockage', 'circulation'],
    featured: false
  },
  {
    id: 'signalisation-horizontale-verticale',
    slug: 'signalisation-horizontale-vs-verticale',
    title: 'Signalisation horizontale vs verticale',
    excerpt: 'Comprendre les differences entre signalisation horizontale et verticale : usages, avantages, complementarite.',
    content: articleContents['signalisation-horizontale-verticale'] || '',
    categoryId: 'conseils',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2024-12-15',
    updatedAt: '2024-12-15',
    readTime: 6,
    image: '/images/blog/signalisation-comparaison.webp',
    tags: ['signalisation', 'horizontale', 'verticale', 'panneaux'],
    featured: false
  },
  {
    id: 'marquage-exterieur-materiaux',
    slug: 'marquage-exterieur-materiaux-resistants',
    title: 'Marquage exterieur : materiaux resistants',
    excerpt: 'Quels materiaux choisir pour un marquage exterieur durable ? Resistance UV, intemperies, trafic intense.',
    content: articleContents['marquage-exterieur-materiaux'] || '',
    categoryId: 'conseils',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2024-12-10',
    updatedAt: '2024-12-10',
    readTime: 7,
    image: '/images/blog/marquage-exterieur.webp',
    tags: ['exterieur', 'materiaux', 'resistance', 'UV'],
    featured: false
  },
  {
    id: 'cas-client-parking',
    slug: 'cas-client-transformation-parking-entreprise',
    title: 'Cas client : transformation parking entreprise',
    excerpt: 'Decouvrez comment nous avons transforme le parking d\'une entreprise de 200 places en Ile-de-France. Avant/apres.',
    content: articleContents['cas-client-parking'] || '',
    categoryId: 'actualites',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2024-12-05',
    updatedAt: '2024-12-05',
    readTime: 4,
    image: '/images/blog/cas-client-parking.webp',
    tags: ['cas client', 'parking', 'avant apres', 'temoignage'],
    featured: true
  }
];

// Helper functions
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(c => c.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(a => a.slug === slug);
};

export const getArticlesByCategory = (categoryId: string): Article[] => {
  return articles.filter(a => a.categoryId === categoryId);
};

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(a => a.featured);
};

export const getRecentArticles = (count: number = 5): Article[] => {
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
};
