import { Metadata } from 'next';
import Link from 'next/link';
import { articles, categories } from '@/lib/data/articles';
import ArticleCard from '@/components/blog/ArticleCard';
import CTABanner from '@/components/blocks/CTABanner';

export const metadata: Metadata = {
  title: 'Blog | Conseils Marquage au Sol',
  description: 'Conseils, guides et actualites sur le marquage au sol professionnel. Reglementation, securite, bonnes pratiques pour parking et entrepot.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const sortedArticles = [...articles].sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const featuredArticle = sortedArticles[0];
  const otherArticles = sortedArticles.slice(1);

  return (
    <>
      {/* Hero section */}
      <section className="relative py-16 lg:py-24 bg-hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Notre <span className="text-primary-500">Blog</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-300">
              Conseils, guides pratiques et actualites sur le marquage au sol professionnel
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-secondary-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full bg-primary-500 px-4 py-2 text-sm font-medium text-secondary-900"
            >
              Tous les articles
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog/${category.slug}`}
                className="inline-flex items-center rounded-full bg-secondary-800 px-4 py-2 text-sm font-medium text-secondary-300 hover:bg-secondary-700 hover:text-white transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featuredArticle && (
        <section className="py-12 lg:py-16 bg-secondary-950">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Article a la une</h2>
            <ArticleCard article={featuredArticle} featured />
          </div>
        </section>
      )}

      {/* All articles */}
      <section className="py-12 lg:py-16 bg-secondary-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Tous nos articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Besoin de conseils personnalises ?"
        description="Nos experts sont la pour vous accompagner dans votre projet de marquage."
        ctaText="Contactez-nous"
        ctaHref="/contact"
      />
    </>
  );
}
