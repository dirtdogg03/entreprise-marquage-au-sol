import Link from 'next/link';
import { articles, getCategoryById, Article } from '@/lib/data/articles';

interface ServiceRelatedArticlesProps {
  serviceSlug: string;
}

/**
 * Trouve tous les articles qui ont ce service dans leur relatedServices
 */
function getArticlesForService(serviceSlug: string): Article[] {
  return articles
    .filter(article =>
      article.relatedServices?.includes(serviceSlug)
    )
    .slice(0, 3);
}

export default function ServiceRelatedArticles({ serviceSlug }: ServiceRelatedArticlesProps) {
  const relatedArticles = getArticlesForService(serviceSlug);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-asphalt-900 sm:text-3xl">
            Articles de blog associés
          </h2>
          <p className="mt-3 text-asphalt-600">
            Guides et conseils pour approfondir le sujet
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedArticles.map((article) => {
            const category = getCategoryById(article.categoryId);

            return (
              <Link
                key={article.id}
                href={`/blog/${category?.slug || 'guides'}/${article.slug}`}
                className="group flex flex-col bg-asphalt-50 rounded-xl overflow-hidden border border-asphalt-200 hover:border-route-500 hover:shadow-lg transition-all duration-200"
              >
                {/* Image placeholder */}
                <div className="relative h-40 bg-gradient-to-br from-route-100 to-route-200 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-route-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  {category && (
                    <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-route-500 text-asphalt-900 rounded">
                      {category.name}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-5">
                  <h3 className="font-semibold text-asphalt-900 group-hover:text-route-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-asphalt-600 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-route-600 font-medium">
                    Lire l&apos;article
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 ring-1 ring-asphalt-300 text-asphalt-700 font-semibold rounded-lg hover:bg-asphalt-100 transition-colors"
          >
            Voir tous nos articles
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
