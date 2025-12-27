import { ImageResponse } from 'next/og';
import { articles, getCategoryById } from '@/lib/data/articles';

export const runtime = 'edge';

export const alt = 'Article blog marquage au sol';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  return [
    {
      id: slug,
      alt: article ? article.title : 'Article marquage au sol',
      size,
      contentType,
    },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  const category = article ? getCategoryById(article.categoryId) : null;

  const title = article?.title || 'Article sur le marquage au sol';
  const categoryName = category?.name || 'Blog';
  const readTime = article?.readTime || 5;
  const date = article
    ? new Date(article.publishedAt).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#1a1a1a',
          backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          position: 'relative',
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            backgroundColor: '#FACC15',
          }}
        />

        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(250, 204, 21, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(250, 204, 21, 0.02) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '60px 80px',
            height: '100%',
          }}
        >
          {/* Top section */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            {/* Category badge */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#FACC15',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {categoryName}
              </div>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                {readTime} min de lecture
              </div>
            </div>

            {/* Logo */}
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#FACC15',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '26px',
                fontWeight: 900,
                color: '#1a1a1a',
              }}
            >
              M
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontSize: '48px',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.2,
                maxWidth: '1000px',
              }}
            >
              {title}
            </div>
          </div>

          {/* Bottom section */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(250, 204, 21, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#FACC15',
                }}
              >
                ET
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    fontSize: '14px',
                    color: '#ffffff',
                    fontWeight: 600,
                  }}
                >
                  Equipe Technique
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  {date}
                </div>
              </div>
            </div>

            <div
              style={{
                fontSize: '16px',
                color: '#FACC15',
                fontWeight: 500,
              }}
            >
              entreprise-marquage-au-sol.fr/blog
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
