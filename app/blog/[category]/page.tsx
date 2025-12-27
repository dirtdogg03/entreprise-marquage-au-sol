import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles, categories, getCategoryBySlug, getArticlesByCategory, getPillarByCategory } from '@/lib/data/articles';
import ArticleCard from '@/components/blog/ArticleCard';
import CTABanner from '@/components/blocks/CTABanner';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) return {};

  return {
    title: `${category.name} | Blog Marquage au Sol`,
    description: category.description,
    alternates: {
      canonical: `/blog/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(category.id);

  return (
    <>
      {/* Hero section */}
      <section className="relative py-16 lg:py-24 bg-hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-secondary-400">
              <li>
                <Link href="/" className="hover:text-primary-500 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-primary-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-primary-500">{category.name}</li>
            </ol>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              <span className="text-primary-500">{category.name}</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-300">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Categories navigation */}
      <section className="py-8 bg-secondary-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full bg-secondary-800 px-4 py-2 text-sm font-medium text-secondary-300 hover:bg-secondary-700 hover:text-white transition-colors"
            >
              Tous les articles
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog/${cat.slug}`}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  cat.id === category.id
                    ? 'bg-primary-500 text-secondary-900'
                    : 'bg-secondary-800 text-secondary-300 hover:bg-secondary-700 hover:text-white'
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 lg:py-16 bg-secondary-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {categoryArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-secondary-400">Aucun article dans cette categorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Une question sur le marquage au sol ?"
        description="Nos experts sont la pour vous conseiller."
        ctaText="Contactez-nous"
        ctaHref="/contact"
      />
    </>
  );
}
