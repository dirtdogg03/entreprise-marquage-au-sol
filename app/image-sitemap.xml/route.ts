import { NextResponse } from 'next/server';
import { services } from '@/lib/data/services';
import { articles, getCategoryById } from '@/lib/data/articles';

const SITE_URL = 'https://entreprise-marquage-au-sol.fr';

interface ImageEntry {
  pageUrl: string;
  imageUrl: string;
  title: string;
  caption?: string;
  geoLocation?: string;
}

export async function GET() {
  const images: ImageEntry[] = [];

  // Logo on homepage
  images.push({
    pageUrl: SITE_URL,
    imageUrl: `${SITE_URL}/images/logo.webp`,
    title: 'Entreprise Marquage au Sol - Logo',
    caption: 'Specialiste du marquage au sol en Ile-de-France',
    geoLocation: 'Paris, France',
  });

  // Service images
  for (const service of services) {
    images.push({
      pageUrl: `${SITE_URL}/services/${service.slug}`,
      imageUrl: `${SITE_URL}/images/services/${service.slug}.webp`,
      title: service.name,
      caption: service.description.substring(0, 150),
      geoLocation: 'Ile-de-France, France',
    });
  }

  // Blog article images
  for (const article of articles) {
    const category = getCategoryById(article.categoryId);
    if (category) {
      images.push({
        pageUrl: `${SITE_URL}/blog/${category.slug}/${article.slug}`,
        imageUrl: `${SITE_URL}${article.image}`,
        title: article.title,
        caption: article.excerpt.substring(0, 150),
      });
    }
  }

  // OG images for social sharing
  images.push({
    pageUrl: SITE_URL,
    imageUrl: `${SITE_URL}/og/home.png`,
    title: 'Entreprise Marquage au Sol - Open Graph',
    caption: 'Image de partage pour les reseaux sociaux',
  });

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images
  .map(
    (img) => `  <url>
    <loc>${img.pageUrl}</loc>
    <image:image>
      <image:loc>${img.imageUrl}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      ${img.caption ? `<image:caption>${escapeXml(img.caption)}</image:caption>` : ''}
      ${img.geoLocation ? `<image:geo_location>${escapeXml(img.geoLocation)}</image:geo_location>` : ''}
    </image:image>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
