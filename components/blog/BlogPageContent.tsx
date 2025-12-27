'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { articles, categories, Article } from '@/lib/data/articles';
import ArticleCard from '@/components/blog/ArticleCard';
import Pagination from '@/components/blog/Pagination';

const ARTICLES_PER_PAGE = 12;

interface BlogPageContentProps {
  sortedArticles: Article[];
}

export default function BlogPageContent({ sortedArticles }: BlogPageContentProps) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  // Calculate pagination
  const totalPages = Math.ceil(sortedArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = sortedArticles.slice(startIndex, endIndex);

  // For first page, show featured article separately
  const isFirstPage = currentPage === 1;
  const featuredArticle = isFirstPage ? currentArticles[0] : null;
  const otherArticles = isFirstPage ? currentArticles.slice(1) : currentArticles;

  return (
    <>
      {/* Categories */}
      <section className="py-8 bg-white border-b border-asphalt-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full bg-route-500 px-4 py-2 text-sm font-medium text-asphalt-900"
            >
              Tous les articles
            </Link>
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
      </section>

      {/* Featured article (only on first page) */}
      {featuredArticle && (
        <section className="py-12 lg:py-16 bg-asphalt-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-asphalt-900 mb-8">Article a la une</h2>
            <ArticleCard article={featuredArticle} featured />
          </div>
        </section>
      )}

      {/* Articles grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-asphalt-900">
              {isFirstPage ? 'Tous nos articles' : `Articles - Page ${currentPage}`}
            </h2>
            <p className="text-sm text-asphalt-500">
              {sortedArticles.length} article{sortedArticles.length > 1 ? 's' : ''} au total
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 pt-8 border-t border-asphalt-200">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                basePath="/blog"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
