import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://entreprise-marquage-au-sol.fr';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
