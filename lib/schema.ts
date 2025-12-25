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
      name: COMPANY_NAME
    },
    areaServed: {
      '@type': 'State',
      name: 'Ile-de-France'
    },
    serviceType: service.category === 'marquage' ? 'Marquage au sol' : 'Signalisation'
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
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}/blog/${category.slug}/${article.slug}`,
    headline: article.title,
    description: article.excerpt,
    image: `${SITE_URL}${article.image}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Organization',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.webp`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${category.slug}/${article.slug}`
    }
  };
}
