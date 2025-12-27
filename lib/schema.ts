import { Service } from './data/services';
import { Location } from './data/locations';
import { Article, Category } from './data/articles';

const SITE_URL = 'https://entreprise-marquage-au-sol.fr';
const COMPANY_NAME = 'Entreprise Marquage au Sol';
const COMPANY_PHONE = '+33 1 23 45 67 89'; // Placeholder
const COMPANY_EMAIL = 'contact@entreprise-marquage-au-sol.fr'; // Placeholder
const COMPANY_ADDRESS = {
  streetAddress: '123 Rue du Marquage',
  addressLocality: 'Paris',
  postalCode: '75001',
  addressCountry: 'FR'
};

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    description: 'Entreprise specialisee dans le marquage au sol et la signalisation en Ile-de-France. Parking, entrepot, industriel, PMR.',
    url: SITE_URL,
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    address: {
      '@type': 'PostalAddress',
      ...COMPANY_ADDRESS
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '48.8566',
      longitude: '2.3522'
    },
    areaServed: {
      '@type': 'State',
      name: 'Ile-de-France',
      containedIn: {
        '@type': 'Country',
        name: 'France'
      }
    },
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      }
    ],
    sameAs: [],
    image: `${SITE_URL}/images/logo.webp`
  };
}

export function generateServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${service.slug}`,
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#organization`,
      name: COMPANY_NAME,
      telephone: COMPANY_PHONE,
      email: COMPANY_EMAIL
    },
    areaServed: {
      '@type': 'State',
      name: 'Ile-de-France',
      containedIn: {
        '@type': 'Country',
        name: 'France'
      }
    },
    serviceType: service.category === 'marquage' ? 'Marquage au sol' : 'Signalisation',
    // Proprietes enrichies
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: service.benefits.map((benefit, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: benefit
        },
        position: index + 1
      }))
    },
    // Disponibilite et contact
    potentialAction: {
      '@type': 'OrderAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/contact`,
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform'
        ]
      },
      deliveryMethod: 'http://purl.org/goodrelations/v1#DeliveryModeDirectDownload'
    }
  };
}

export function generateServiceLocationSchema(service: Service, location: Location) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${service.slug}/${location.slug}`,
    name: `${service.name} a ${location.name}`,
    description: `${service.description} Intervention a ${location.name} et environs.`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#organization`,
      name: COMPANY_NAME,
      telephone: COMPANY_PHONE,
      address: {
        '@type': 'PostalAddress',
        addressLocality: location.name,
        addressRegion: location.department,
        postalCode: location.postalCodes[0],
        addressCountry: 'FR'
      }
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
      containedIn: {
        '@type': 'AdministrativeArea',
        name: location.department
      }
    },
    serviceType: service.category === 'marquage' ? 'Marquage au sol' : 'Signalisation'
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`
    }))
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateArticleSchema(article: Article, category: Category) {
  // Calculer le nombre de mots (approximatif depuis le contenu)
  const wordCount = article.content
    ? article.content.split(/\s+/).filter(word => word.length > 0).length
    : 0;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}/blog/${category.slug}/${article.slug}`,
    headline: article.title,
    description: article.excerpt,
    image: {
      '@type': 'ImageObject',
      url: `${SITE_URL}${article.image}`,
      width: 1200,
      height: 630
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: article.author,
      url: SITE_URL
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: COMPANY_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.webp`,
        width: 600,
        height: 60
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${category.slug}/${article.slug}`
    },
    // Proprietes enrichies pour SEO avance
    wordCount: wordCount,
    articleSection: category.name,
    keywords: article.tags.join(', '),
    inLanguage: 'fr-FR',
    isAccessibleForFree: true,
    // Speakable pour assistants vocaux (Google Assistant)
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['article h1', 'article h2', 'article p']
    },
    // Potentiel d'affichage en position zero
    isPartOf: {
      '@type': 'Blog',
      '@id': `${SITE_URL}/blog`,
      name: 'Blog Marquage au Sol',
      publisher: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`
      }
    }
  };
}

// Schema HowTo pour articles tutoriels (extraction des etapes depuis le contenu)
export function generateHowToSchema(
  article: Article,
  category: Category,
  steps: { name: string; text: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${SITE_URL}/blog/${category.slug}/${article.slug}#howto`,
    name: article.title,
    description: article.excerpt,
    image: `${SITE_URL}${article.image}`,
    totalTime: `PT${article.readTime}M`,
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'EUR',
      value: '0'
    },
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Peinture de marquage'
      },
      {
        '@type': 'HowToTool',
        name: 'Pochoirs'
      }
    ],
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${SITE_URL}/blog/${category.slug}/${article.slug}#step-${index + 1}`
    })),
    author: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: article.author
    }
  };
}

export function generateCitySchema(location: Location) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/villes/${location.slug}`,
    name: `${COMPANY_NAME} - ${location.name}`,
    description: `Services de marquage au sol professionnel a ${location.name}. Parking, entrepot, industriel, PMR. Intervention rapide en ${location.department}.`,
    url: `${SITE_URL}/villes/${location.slug}`,
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: location.department,
      postalCode: location.postalCodes[0],
      addressCountry: 'FR'
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
      containedIn: {
        '@type': 'AdministrativeArea',
        name: location.department
      }
    },
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      }
    ],
    image: `${SITE_URL}/images/logo.webp`
  };
}
