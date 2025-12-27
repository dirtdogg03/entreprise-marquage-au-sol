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
  isPillar?: boolean;
  relatedArticles?: string[];
  relatedServices?: string[]; // IDs des services lies
}

export const categories: Category[] = [
  {
    id: 'materiaux',
    slug: 'materiaux',
    name: 'Materiaux & Techniques',
    description: 'Guide complet des materiaux de marquage : peinture, resine, thermoplastique, epoxy'
  },
  {
    id: 'applications',
    slug: 'applications',
    name: 'Applications & Secteurs',
    description: 'Solutions de marquage par secteur : parking, entrepot, industrie, commerce'
  },
  {
    id: 'reglementation',
    slug: 'reglementation',
    name: 'Reglementation & Normes',
    description: 'Cadre legal et obligations du marquage au sol professionnel en France'
  },
  {
    id: 'securite',
    slug: 'securite',
    name: 'Securite Industrielle',
    description: 'Prevention des risques et securite au travail par le marquage au sol'
  },
  {
    id: 'budget',
    slug: 'budget',
    name: 'Budget & Projet',
    description: 'Prix, devis, ROI et gestion de projet de marquage au sol'
  }
];

export const articles: Article[] = [
  {
    id: 'choisir-type-marquage',
    slug: 'comment-choisir-type-marquage-au-sol',
    title: 'Comment choisir son type de marquage au sol ?',
    excerpt: 'Guide complet pour selectionner le marquage adapte a vos besoins : peinture, resine, thermoplastique. Comparatif des solutions.',
    content: articleContents['choisir-type-marquage'] || '',
    categoryId: 'materiaux',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-15',
    updatedAt: '2025-01-15',
    readTime: 8,
    image: '/images/blog/choisir-marquage.webp',
    tags: ['marquage au sol', 'peinture', 'resine', 'thermoplastique', 'epoxy'],
    featured: true,
    isPillar: true,
    relatedArticles: ['marquage-exterieur-materiaux'],
    relatedServices: ['marquage-au-sol-parking', 'marquage-au-sol-industriel', 'marquage-au-sol-entrepot']
  },
  {
    id: 'reglementation-parking-2025',
    slug: 'reglementation-marquage-parking-entreprise-2025',
    title: 'Marquage au sol parking : reglementation entreprise 2025',
    excerpt: 'Toutes les obligations legales pour le marquage de votre parking professionnel : dimensions, couleurs, signalisation PMR.',
    content: articleContents['reglementation-parking-2025'] || '',
    categoryId: 'reglementation',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-10',
    updatedAt: '2025-01-10',
    readTime: 10,
    image: '/images/blog/reglementation-parking.webp',
    tags: ['reglementation', 'parking', 'PMR', 'normes', 'code de la route'],
    featured: true,
    isPillar: true,
    relatedArticles: ['places-pmr-obligations', 'signalisation-horizontale-verticale'],
    relatedServices: ['marquage-au-sol-parking', 'places-handicapees-pmr', 'signalisation-verticale']
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
    tags: ['securite', 'industriel', 'normes', 'couleurs', 'zones danger'],
    featured: true,
    isPillar: true,
    relatedArticles: [],
    relatedServices: ['marquage-au-sol-industriel', 'marquage-zones-pietonnes', 'marquage-au-sol-usine']
  },
  {
    id: 'prix-marquage-guide',
    slug: 'prix-marquage-au-sol-guide-complet',
    title: 'Prix marquage au sol : guide complet',
    excerpt: 'Combien coute un marquage au sol ? Tous les facteurs de prix et estimations pour votre projet de marquage professionnel.',
    content: articleContents['prix-marquage-guide'] || '',
    categoryId: 'budget',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-05',
    updatedAt: '2025-01-05',
    readTime: 6,
    image: '/images/blog/prix-marquage.webp',
    tags: ['prix', 'devis', 'budget', 'tarif', 'cout'],
    featured: true,
    isPillar: true,
    relatedArticles: ['entretien-duree-vie', 'cas-client-parking'],
    relatedServices: ['marquage-au-sol-parking', 'marquage-au-sol-industriel', 'signalisation-verticale']
  },
  {
    id: 'entretien-duree-vie',
    slug: 'entretien-duree-vie-marquage-sol',
    title: 'Entretien et duree de vie du marquage au sol',
    excerpt: 'Comment entretenir votre marquage pour maximiser sa duree de vie ? Conseils d\'experts et bonnes pratiques.',
    content: articleContents['entretien-duree-vie'] || '',
    categoryId: 'budget',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-03',
    updatedAt: '2025-01-03',
    readTime: 5,
    image: '/images/blog/entretien-marquage.webp',
    tags: ['entretien', 'duree de vie', 'maintenance', 'renovation'],
    featured: false,
    relatedArticles: ['prix-marquage-guide']
  },
  {
    id: 'places-pmr-obligations',
    slug: 'places-pmr-obligations-legales',
    title: 'Marquage au sol places PMR : obligations legales 2025',
    excerpt: 'Tout savoir sur les obligations legales des places handicapees : nombre, dimensions, signalisation, sanctions.',
    content: articleContents['places-pmr-obligations'] || '',
    categoryId: 'reglementation',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2024-12-28',
    updatedAt: '2024-12-28',
    readTime: 8,
    image: '/images/blog/places-pmr.webp',
    tags: ['PMR', 'handicape', 'accessibilite', 'obligations', 'loi'],
    featured: false,
    relatedArticles: ['reglementation-parking-2025'],
    relatedServices: ['places-handicapees-pmr', 'marquage-au-sol-parking', 'installation-panneaux-parking']
  },
  {
    id: 'marquage-entrepot-bonnes-pratiques',
    slug: 'marquage-entrepot-logistique-bonnes-pratiques',
    title: 'Marquage au sol entrepot : bonnes pratiques logistique',
    excerpt: 'Optimisez votre entrepot grace au marquage au sol : zones de stockage, circulation, securite. Guide des meilleures pratiques.',
    content: articleContents['marquage-entrepot-bonnes-pratiques'] || '',
    categoryId: 'applications',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2024-12-20',
    updatedAt: '2024-12-20',
    readTime: 9,
    image: '/images/blog/entrepot-logistique.webp',
    tags: ['entrepot', 'logistique', 'stockage', 'circulation', 'industrie'],
    featured: true,
    isPillar: true,
    relatedArticles: ['cas-client-parking'],
    relatedServices: ['marquage-au-sol-entrepot', 'marquage-zones-pietonnes', 'signalisation-verticale']
  },
  {
    id: 'signalisation-horizontale-verticale',
    slug: 'signalisation-horizontale-vs-verticale',
    title: 'Marquage au sol et signalisation horizontale : comparatif',
    excerpt: 'Comprendre les differences entre signalisation horizontale et verticale : usages, avantages, complementarite.',
    content: articleContents['signalisation-horizontale-verticale'] || '',
    categoryId: 'reglementation',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2024-12-15',
    updatedAt: '2024-12-15',
    readTime: 6,
    image: '/images/blog/signalisation-comparaison.webp',
    tags: ['signalisation', 'horizontale', 'verticale', 'panneaux', 'code'],
    featured: false,
    relatedArticles: ['reglementation-parking-2025'],
    relatedServices: ['signalisation-verticale', 'marquage-routier-au-sol', 'installation-panneaux-parking']
  },
  {
    id: 'marquage-exterieur-materiaux',
    slug: 'marquage-exterieur-materiaux-resistants',
    title: 'Marquage au sol exterieur : materiaux resistants',
    excerpt: 'Quels materiaux choisir pour un marquage exterieur durable ? Resistance UV, intemperies, trafic intense.',
    content: articleContents['marquage-exterieur-materiaux'] || '',
    categoryId: 'materiaux',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2024-12-10',
    updatedAt: '2024-12-10',
    readTime: 7,
    image: '/images/blog/marquage-exterieur.webp',
    tags: ['exterieur', 'materiaux', 'resistance', 'UV', 'peinture'],
    featured: false,
    relatedArticles: ['choisir-type-marquage']
  },
  {
    id: 'cas-client-parking',
    slug: 'cas-client-transformation-parking-entreprise',
    title: 'Marquage au sol parking : etude de cas transformation',
    excerpt: 'Decouvrez comment nous avons transforme le parking d\'une entreprise de 200 places en Ile-de-France. Avant/apres.',
    content: articleContents['cas-client-parking'] || '',
    categoryId: 'applications',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2024-12-05',
    updatedAt: '2024-12-05',
    readTime: 4,
    image: '/images/blog/cas-client-parking.webp',
    tags: ['cas client', 'parking', 'avant apres', 'temoignage', 'entreprise'],
    featured: true,
    relatedArticles: ['marquage-entrepot-bonnes-pratiques', 'prix-marquage-guide'],
    relatedServices: ['marquage-au-sol-parking', 'marquage-au-sol-parking-entreprise', 'signalisation-verticale']
  },
  // === NOUVEAUX ARTICLES - Cluster Matériaux ===
  {
    id: 'epoxy-vs-polyurethane',
    slug: 'peinture-epoxy-vs-polyurethane-comparatif',
    title: 'Marquage au sol : peinture epoxy vs polyurethane',
    excerpt: 'Comparaison detaillee des peintures epoxy et polyurethane pour le marquage au sol. Avantages, inconvenients et cas d\'usage.',
    content: articleContents['epoxy-vs-polyurethane'] || '',
    categoryId: 'materiaux',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-20',
    updatedAt: '2025-01-20',
    readTime: 9,
    image: '/images/blog/epoxy-polyurethane.webp',
    tags: ['epoxy', 'polyurethane', 'peinture sol', 'comparatif', 'industrie'],
    featured: false,
    relatedArticles: ['choisir-type-marquage', 'resine-sol-avantages'],
    relatedServices: ['marquage-au-sol-industriel', 'marquage-au-sol-entrepot', 'marquage-au-sol-usine']
  },
  {
    id: 'resine-sol-avantages',
    slug: 'resine-sol-avantages-inconvenients',
    title: 'Marquage au sol resine : avantages et inconvenients',
    excerpt: 'Tout savoir sur les resines de sol pour marquage professionnel. Performances, durabilite, applications et limites.',
    content: articleContents['resine-sol-avantages'] || '',
    categoryId: 'materiaux',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-19',
    updatedAt: '2025-01-19',
    readTime: 10,
    image: '/images/blog/resine-sol.webp',
    tags: ['resine', 'revetement sol', 'epoxy', 'polyurethane', 'durabilite'],
    featured: false,
    relatedArticles: ['choisir-type-marquage', 'epoxy-vs-polyurethane'],
    relatedServices: ['marquage-au-sol-industriel', 'marquage-au-sol-usine', 'marquage-garage-automobile']
  },
  {
    id: 'thermoplastique-marquage',
    slug: 'marquage-thermoplastique-guide-complet',
    title: 'Marquage au sol thermoplastique : guide complet',
    excerpt: 'Le thermoplastique pour le marquage au sol : application, durabilite, prix. Solution ideale pour trafic intense.',
    content: articleContents['thermoplastique-marquage'] || '',
    categoryId: 'materiaux',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-18',
    updatedAt: '2025-01-18',
    readTime: 10,
    image: '/images/blog/thermoplastique.webp',
    tags: ['thermoplastique', 'marquage routier', 'durabilite', 'voirie', 'parking'],
    featured: false,
    relatedArticles: ['choisir-type-marquage', 'marquage-exterieur-materiaux'],
    relatedServices: ['marquage-routier-au-sol', 'marquage-au-sol-parking', 'marquage-zones-pietonnes']
  },
  // === NOUVEAUX ARTICLES - Cluster Applications ===
  {
    id: 'parking-centre-commercial',
    slug: 'marquage-parking-centre-commercial',
    title: 'Marquage au sol parking centre commercial : guide complet',
    excerpt: 'Conception et realisation du marquage au sol pour centres commerciaux. Normes, flux, accessibilite PMR.',
    content: articleContents['parking-centre-commercial'] || '',
    categoryId: 'applications',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-17',
    updatedAt: '2025-01-17',
    readTime: 11,
    image: '/images/blog/parking-commercial.webp',
    tags: ['parking', 'centre commercial', 'PMR', 'signalisation', 'flux'],
    featured: false,
    relatedArticles: ['reglementation-parking-2025', 'places-pmr-obligations'],
    relatedServices: ['marquage-au-sol-parking', 'places-handicapees-pmr', 'signalisation-verticale']
  },
  {
    id: 'marquage-usine-atelier',
    slug: 'marquage-sol-usine-atelier-production',
    title: 'Marquage au sol usine et atelier de production',
    excerpt: 'Solutions de marquage pour environnements industriels. Zones de travail, securite, flux logistiques.',
    content: articleContents['marquage-usine-atelier'] || '',
    categoryId: 'applications',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-16',
    updatedAt: '2025-01-16',
    readTime: 10,
    image: '/images/blog/usine-atelier.webp',
    tags: ['usine', 'atelier', 'industrie', 'production', 'securite'],
    featured: false,
    relatedArticles: ['marquage-entrepot-bonnes-pratiques', 'normes-securite-industriel'],
    relatedServices: ['marquage-au-sol-usine', 'marquage-au-sol-industriel', 'marquage-zones-pietonnes']
  },
  {
    id: 'voirie-privee',
    slug: 'marquage-voirie-privee-entreprise',
    title: 'Marquage au sol voirie privee : reglementation 2025',
    excerpt: 'Tout sur le marquage des voiries privees d\'entreprise. Reglementation, types de marquage, entretien.',
    content: articleContents['voirie-privee'] || '',
    categoryId: 'applications',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-14',
    updatedAt: '2025-01-14',
    readTime: 10,
    image: '/images/blog/voirie-privee.webp',
    tags: ['voirie', 'prive', 'entreprise', 'circulation', 'signalisation'],
    featured: false,
    relatedArticles: ['reglementation-parking-2025', 'thermoplastique-marquage'],
    relatedServices: ['marquage-routier-au-sol', 'signalisation-verticale', 'pose-ralentisseur']
  },
  // === NOUVEAUX ARTICLES - Cluster Réglementation ===
  {
    id: 'code-couleur-marquage',
    slug: 'code-couleur-marquage-sol-signification',
    title: 'Code couleur marquage au sol : significations',
    excerpt: 'Signification des couleurs de marquage au sol selon les normes. Jaune, blanc, rouge, bleu, vert : guide complet.',
    content: articleContents['code-couleur-marquage'] || '',
    categoryId: 'reglementation',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-13',
    updatedAt: '2025-01-13',
    readTime: 9,
    image: '/images/blog/code-couleur.webp',
    tags: ['couleur', 'code', 'norme', 'signalisation', 'securite'],
    featured: false,
    relatedArticles: ['normes-securite-industriel', 'zones-danger-delimitation']
  },
  {
    id: 'non-conformite-sanctions',
    slug: 'non-conformite-marquage-sol-sanctions',
    title: 'Non-conformite marquage au sol : risques et sanctions',
    excerpt: 'Consequences juridiques et financieres d\'un marquage non conforme. Responsabilites et mises en conformite.',
    content: articleContents['non-conformite-sanctions'] || '',
    categoryId: 'reglementation',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-12',
    updatedAt: '2025-01-12',
    readTime: 7,
    image: '/images/blog/non-conformite.webp',
    tags: ['conformite', 'sanctions', 'reglementation', 'responsabilite', 'juridique'],
    featured: false,
    relatedArticles: ['reglementation-parking-2025', 'code-couleur-marquage']
  },
  // === NOUVEAUX ARTICLES - Cluster Sécurité ===
  {
    id: 'zones-danger-delimitation',
    slug: 'zones-danger-delimitation-marquage-sol',
    title: 'Marquage au sol zones de danger : normes et delimitation',
    excerpt: 'Comment delimiter les zones dangereuses par marquage au sol. Normes, couleurs, pictogrammes, maintenance.',
    content: articleContents['zones-danger-delimitation'] || '',
    categoryId: 'securite',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-11',
    updatedAt: '2025-01-11',
    readTime: 12,
    image: '/images/blog/zones-danger.webp',
    tags: ['danger', 'securite', 'zone', 'delimitation', 'pictogramme'],
    featured: true,
    relatedArticles: ['normes-securite-industriel', 'code-couleur-marquage'],
    relatedServices: ['marquage-zones-pietonnes', 'marquage-au-sol-industriel', 'signalisation-verticale']
  },
  {
    id: 'marquage-antiderapant',
    slug: 'marquage-sol-antiderapant-securite',
    title: 'Marquage au sol antiderapant : solutions et normes',
    excerpt: 'Tout sur le marquage antiderapant pour prevenir les chutes. Materiaux, normes, zones a risque.',
    content: articleContents['marquage-antiderapant'] || '',
    categoryId: 'securite',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-09',
    updatedAt: '2025-01-09',
    readTime: 8,
    image: '/images/blog/antiderapant.webp',
    tags: ['antiderapant', 'chute', 'securite', 'glissade', 'prevention'],
    featured: false,
    relatedArticles: ['normes-securite-industriel', 'resine-sol-avantages']
  },
  {
    id: 'flux-pietons-vehicules',
    slug: 'separation-flux-pietons-vehicules-marquage',
    title: 'Marquage au sol : separation pietons et vehicules',
    excerpt: 'Comment organiser la cohabitation pietons-vehicules par le marquage au sol. Normes INRS, solutions pratiques.',
    content: articleContents['flux-pietons-vehicules'] || '',
    categoryId: 'securite',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-07',
    updatedAt: '2025-01-07',
    readTime: 9,
    image: '/images/blog/flux-pietons.webp',
    tags: ['pietons', 'vehicules', 'flux', 'circulation', 'securite'],
    featured: false,
    relatedArticles: ['marquage-entrepot-bonnes-pratiques', 'zones-danger-delimitation'],
    relatedServices: ['marquage-zones-pietonnes', 'pose-ralentisseur', 'marquage-au-sol-entrepot']
  },
  {
    id: 'marquage-evacuation',
    slug: 'marquage-evacuation-issues-secours',
    title: 'Marquage au sol evacuation : bandes photoluminescentes',
    excerpt: 'Reglementation et solutions pour le marquage d\'evacuation. Bandes photoluminescentes, normes ERP, maintenance.',
    content: articleContents['marquage-evacuation'] || '',
    categoryId: 'securite',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-06',
    updatedAt: '2025-01-06',
    readTime: 11,
    image: '/images/blog/evacuation.webp',
    tags: ['evacuation', 'secours', 'photoluminescent', 'ERP', 'incendie'],
    featured: false,
    relatedArticles: ['normes-securite-industriel', 'zones-danger-delimitation'],
    relatedServices: ['marquage-zones-pietonnes', 'signalisation-verticale', 'marquage-au-sol-industriel']
  },
  // === NOUVEAUX ARTICLES - Cluster Budget ===
  {
    id: 'devis-marquage-comparer',
    slug: 'devis-marquage-sol-comparer-offres',
    title: 'Devis marquage au sol : comment bien comparer',
    excerpt: 'Guide pour analyser et comparer les devis de marquage au sol. Criteres, pieges a eviter, questions cles.',
    content: articleContents['devis-marquage-comparer'] || '',
    categoryId: 'budget',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-04',
    updatedAt: '2025-01-04',
    readTime: 10,
    image: '/images/blog/devis-comparer.webp',
    tags: ['devis', 'prix', 'comparatif', 'budget', 'negociation'],
    featured: false,
    relatedArticles: ['prix-marquage-guide', 'roi-marquage-sol']
  },
  {
    id: 'renovation-creation-marquage',
    slug: 'renovation-ou-creation-marquage-guide',
    title: 'Marquage au sol : renovation ou creation neuve ?',
    excerpt: 'Faut-il renover ou refaire entierement votre marquage au sol ? Criteres de decision, couts, avantages.',
    content: articleContents['renovation-creation-marquage'] || '',
    categoryId: 'budget',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-02',
    updatedAt: '2025-01-02',
    readTime: 9,
    image: '/images/blog/renovation-marquage.webp',
    tags: ['renovation', 'creation', 'budget', 'diagnostic', 'preparation'],
    featured: false,
    relatedArticles: ['entretien-duree-vie', 'prix-marquage-guide']
  },
  {
    id: 'roi-marquage-sol',
    slug: 'roi-retour-investissement-marquage-sol',
    title: 'ROI marquage au sol : calculer votre retour investissement',
    excerpt: 'Comment calculer le ROI de votre projet de marquage. Benefices mesurables, reduction accidents, productivite.',
    content: articleContents['roi-marquage-sol'] || '',
    categoryId: 'budget',
    author: 'Entreprise Marquage au Sol',
    publishedAt: '2025-01-01',
    updatedAt: '2025-01-01',
    readTime: 12,
    image: '/images/blog/roi-marquage.webp',
    tags: ['ROI', 'investissement', 'rentabilite', 'productivite', 'securite'],
    featured: true,
    relatedArticles: ['prix-marquage-guide', 'devis-marquage-comparer']
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

export const getPillarArticles = (): Article[] => {
  return articles.filter(a => a.isPillar === true);
};

export const getPillarByCategory = (categoryId: string): Article | undefined => {
  return articles.find(a => a.categoryId === categoryId && a.isPillar === true);
};

export const getRelatedArticles = (articleId: string): Article[] => {
  const article = articles.find(a => a.id === articleId);
  if (!article?.relatedArticles) return [];
  return article.relatedArticles
    .map(id => articles.find(a => a.id === id))
    .filter((a): a is Article => a !== undefined);
};

export const getClusterArticles = (pillarId: string): Article[] => {
  const pillar = articles.find(a => a.id === pillarId && a.isPillar);
  if (!pillar) return [];
  return articles.filter(a =>
    a.categoryId === pillar.categoryId &&
    a.id !== pillarId
  );
};
