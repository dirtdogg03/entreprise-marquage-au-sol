import { Metadata } from 'next';
import { Service } from './data/services';
import { Location } from './data/locations';
import { Article, Category } from './data/articles';

const SITE_NAME = 'Entreprise Marquage au Sol';
const SITE_URL = 'https://entreprise-marquage-au-sol.fr';
const DEFAULT_DESCRIPTION = 'Entreprise specialisee dans le marquage au sol et la signalisation en Ile-de-France. Parking, entrepot, industriel, PMR. Devis gratuit.';

export function generateHomeMetadata(): Metadata {
  return {
    title: `${SITE_NAME} | Marquage Parking, Entrepot, Industriel en Ile-de-France`,
    description: DEFAULT_DESCRIPTION,
    keywords: ['entreprise marquage au sol', 'marquage parking', 'marquage entrepot', 'signalisation', 'Ile-de-France'],
    openGraph: {
      title: `${SITE_NAME} | Marquage Professionnel`,
      description: DEFAULT_DESCRIPTION,
      url: SITE_URL,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
    },
    alternates: {
      canonical: SITE_URL,
    },
  };
}

export function generateServiceMetadata(service: Service): Metadata {
  const title = `${service.name} | ${SITE_NAME}`;
  const description = `${service.description} Intervention rapide en Ile-de-France. Devis gratuit.`;

  return {
    title,
    description,
    keywords: [...service.keywords, 'entreprise marquage au sol', 'Ile-de-France'],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/services/${service.slug}`,
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
      canonical: `${SITE_URL}/services/${service.slug}`,
    },
  };
}

export function generateServiceLocationMetadata(service: Service, location: Location): Metadata {
  // SEO Exact Match: Title sans preposition "a" pour matcher les requetes utilisateurs
  // Ex: "Marquage au Sol Parking Paris - Devis Gratuit 75"
  const title = `${service.name} ${location.name} - Devis Gratuit ${location.departmentCode}`;

  // Description avec "a" pour langage naturel + code postal
  const postalCode = location.postalCodes[0] || '';
  const description = `Expert en ${service.name.toLowerCase()} a ${location.name} (${postalCode}). Intervention rapide en ${location.department}. Devis gratuit sous 24h. Garantie 5 ans.`;

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

  return {
    title,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author }],
    openGraph: {
      title,
      description: article.excerpt,
      url: `${SITE_URL}/blog/${category.slug}/${article.slug}`,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: article.excerpt,
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${category.slug}/${article.slug}`,
    },
  };
}

export function generateContactMetadata(): Metadata {
  const title = `Contact | ${SITE_NAME}`;
  const description = 'Contactez notre entreprise de marquage au sol pour un devis gratuit. Intervention rapide en Ile-de-France.';

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
    alternates: {
      canonical: `${SITE_URL}/contact`,
    },
  };
}
