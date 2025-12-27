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
      images: [
        {
          url: `${SITE_URL}/images/og-home.webp`,
          width: 1200,
          height: 630,
          alt: 'Entreprise Marquage au Sol - Ile-de-France',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      images: [`${SITE_URL}/images/og-home.webp`],
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

  // Meta description optimisee: <155 caracteres avec benefices et CTA
  const shortDesc = service.shortDescription.length > 80
    ? service.shortDescription.substring(0, 77) + '...'
    : service.shortDescription;
  const description = `${shortDesc} Intervention 48h en Ile-de-France. Devis gratuit, garantie 5 ans.`;

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
      images: [
        {
          url: `${SITE_URL}/images/services/${service.slug}.webp`,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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

  // Meta description optimisee: <155 caracteres avec CTA
  // Prendre le debut de l'excerpt et ajouter un CTA
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
      images: [
        {
          url: `${SITE_URL}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}${article.image}`],
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
  const description = 'Demandez un devis gratuit pour vos travaux de marquage au sol. Reponse sous 24h, intervention rapide en Ile-de-France.';

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
  // SEO Exact Match: Title sans preposition "a" pour matcher les requetes utilisateurs
  // Ex: "Marquage au Sol Paris (75001) - Devis Gratuit"
  const postalCode = location.postalCodes[0] || '';
  const title = `Marquage au Sol ${location.name} (${postalCode}) - Devis Gratuit`;

  // Description avec "a" pour langage naturel
  const description = `Expert en marquage au sol a ${location.name} (${location.department}). Parking, entrepot, industriel, PMR. Intervention rapide sous 24-48h. Devis gratuit et garantie 5 ans.`;

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
