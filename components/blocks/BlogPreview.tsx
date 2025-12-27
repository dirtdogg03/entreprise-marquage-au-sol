'use client';

import Link from 'next/link';
import { articles, categories } from '@/lib/data/articles';
import ArticleCard from '@/components/blog/ArticleCard';

interface BlogPreviewProps {
  maxItems?: number;
}

export default function BlogPreview({ maxItems = 3 }: BlogPreviewProps) {
  // Get latest articles
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, maxItems);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center rounded-full bg-route-100 px-3 py-1 text-sm font-medium text-route-700 mb-4">
              Conseils & Actualites
            </span>
            <h2 className="text-3xl font-bold text-asphalt-900">
              Derniers articles du blog
            </h2>
            <p className="mt-4 text-lg text-asphalt-600 max-w-2xl">
              Guides pratiques, reglementations et bonnes pratiques pour vos projets de marquage au sol
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-route-600 hover:text-route-700 font-medium"
          >
            Voir tous les articles
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-route-600 hover:text-route-700 font-medium"
          >
            Voir tous les articles
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Categories preview */}
        <div className="mt-12 pt-8 border-t border-asphalt-200">
          <h3 className="text-sm font-medium text-asphalt-500 mb-4">Parcourir par categorie</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog/${category.slug}`}
                className="inline-flex items-center rounded-full bg-asphalt-100 px-4 py-2 text-sm font-medium text-asphalt-700 hover:bg-asphalt-200 hover:text-asphalt-900 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
