import { Metadata } from 'next';
import { Service } from './data/services';
import { Location } from './data/locations';
import { Article, Category } from './data/articles';

const SITE_NAME = 'Entreprise Marquage au Sol';
const SITE_URL = 'https://entreprise-marquage-au-sol.fr';
const DEFAULT_DESCRIPTION = 'Entreprise spécialisée dans le marquage au sol et la signalisation en Île-de-France. Parking, entrepôt, industriel, PMR. Devis gratuit.';

export function generateHomeMetadata(): Metadata {
  return {
    title: `${SITE_NAME} | Marquage Parking, Entrepôt, Industriel en Île-de-France`,
    description: DEFAULT_DESCRIPTION,
    keywords: ['entreprise marquage au sol', 'marquage parking', 'marquage entrepôt', 'signalisation', 'Île-de-France'],
    openGraph: {
      title: `${SITE_NAME} | Marquage Professionnel`,
      description: DEFAULT_DESCRIPTION,
      url: SITE_URL,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type: 'website',
      // Images générées dynamiquement via opengraph-image.tsx
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      // Images générées dynamiquement via opengraph-image.tsx
    },
    alternates: {
      canonical: SITE_URL,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateServiceMetadata(service: Service): Metadata {
  const title = `${service.name} | ${SITE_NAME}`;

  // Meta description optimisée: <155 caractères avec bénéfices et CTA
  const shortDesc = service.shortDescription.length > 80
    ? service.shortDescription.substring(0, 77) + '...'
    : service.shortDescription;
  const description = `${shortDesc} Intervention 48h en Île-de-France. Devis gratuit, garantie 5 ans.`;

  return {
    title,
    description,
    keywords: [...service.keywords, 'entreprise marquage au sol', 'Île-de-France'],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/services/${service.slug}`,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type: 'website',
      // Images générées dynamiquement via opengraph-image.tsx
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      // Images générées dynamiquement via opengraph-image.tsx
    },
    alternates: {
      canonical: `${SITE_URL}/services/${service.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  };
}

export function generateServiceLocationMetadata(service: Service, location: Location): Metadata {
  // SEO Exact Match: Title sans préposition "à" pour matcher les requêtes utilisateurs
  // Ex: "Marquage au Sol Parking Paris - Devis Gratuit 75"
  const title = `${service.name} ${location.name} - Devis Gratuit ${location.departmentCode}`;

  // Description avec "à" pour langage naturel + code postal
  const postalCode = location.postalCodes[0] || '';
  const description = `Expert en ${service.name.toLowerCase()} à ${location.name} (${postalCode}). Intervention rapide en ${location.department}. Devis gratuit sous 24h. Garantie 5 ans.`;

  return {
    title,
    description,
    keywords: [
      `${service.name.toLowerCase()} ${location.name.toLowerCase()}`,
      ...service.keywords.map(k => `${k} ${location.name}`),
      `marquage au sol ${location.name}`,
      `entreprise marquage ${location.department}`,
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/services/${service.slug}/${location.slug}`,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${SITE_URL}/services/${service.slug}/${location.slug}`,
    },
  };
}

export function generateArticleMetadata(article: Article, category: Category): Metadata {
  const title = `${article.title} | Blog ${SITE_NAME}`;

  // Meta description optimisée: <155 caractères avec CTA
  // Prendre le début de l'excerpt et ajouter un CTA
  const truncatedExcerpt = article.excerpt.length > 120
    ? article.excerpt.substring(0, 117) + '...'
    : article.excerpt;
  const description = `${truncatedExcerpt} Conseils d'experts.`;

  return {
    title,
    description,
    keywords: article.tags,
    authors: [{ name: article.author }],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog/${category.slug}/${article.slug}`,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      // Images générées dynamiquement via opengraph-image.tsx
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      // Images générées dynamiquement via opengraph-image.tsx
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${category.slug}/${article.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  };
}

export function generateContactMetadata(): Metadata {
  const title = `Contact | ${SITE_NAME}`;
  const description = 'Demandez un devis gratuit pour vos travaux de marquage au sol. Réponse sous 24h, intervention rapide en Île-de-France.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/contact`,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${SITE_URL}/contact`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateCityMetadata(location: Location): Metadata {
  // SEO Exact Match: Title sans préposition "à" pour matcher les requêtes utilisateurs
  // Ex: "Marquage au Sol Paris (75001) - Devis Gratuit"
  const postalCode = location.postalCodes[0] || '';
  const title = `Marquage au Sol ${location.name} (${postalCode}) - Devis Gratuit`;

  // Description avec "à" pour langage naturel
  const description = `Expert en marquage au sol à ${location.name} (${location.department}). Parking, entrepôt, industriel, PMR. Intervention rapide sous 24-48h. Devis gratuit et garantie 5 ans.`;

  return {
    title,
    description,
    keywords: [
      `marquage au sol ${location.name.toLowerCase()}`,
      `marquage parking ${location.name.toLowerCase()}`,
      `peinture sol ${location.name.toLowerCase()}`,
      `signalisation ${location.name.toLowerCase()}`,
      `entreprise marquage ${location.department.toLowerCase()}`,
      `marquage au sol ${location.departmentCode}`,
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/villes/${location.slug}`,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${SITE_URL}/villes/${location.slug}`,
    },
  };
}
