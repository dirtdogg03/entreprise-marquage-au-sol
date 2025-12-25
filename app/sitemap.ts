import { MetadataRoute } from 'next';
import { services } from '@/lib/data/services';
import { locations } from '@/lib/data/locations';
import { articles, getCategoryById } from '@/lib/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://entreprise-marquage-au-sol.fr';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Service + Location pages
  const serviceLocationPages: MetadataRoute.Sitemap = [];
  for (const service of services) {
    for (const location of locations) {
      serviceLocationPages.push({
        url: `${baseUrl}/services/${service.slug}/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    }
  }

  // Blog article pages
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => {
    const category = getCategoryById(article.categoryId);
    return {
      url: `${baseUrl}/blog/${category?.slug}/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    };
  });

  return [
    ...staticPages,
    ...servicePages,
    ...serviceLocationPages,
    ...articlePages,
  ];
}
