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
      <section className="relative py-16 lg:py-24 bg-asphalt-50 grid-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-route-500/5 via-transparent to-route-500/5" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-asphalt-500">
              <li>
                <Link href="/" className="hover:text-route-600 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-route-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-route-600">{category.name}</li>
            </ol>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-asphalt-900 sm:text-5xl">
              <span className="text-route-600">{category.name}</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-asphalt-600">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Categories navigation */}
      <section className="py-8 bg-white border-b border-asphalt-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full bg-asphalt-100 px-4 py-2 text-sm font-medium text-asphalt-700 hover:bg-asphalt-200 hover:text-asphalt-900 transition-colors"
            >
              Tous les articles
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog/${cat.slug}`}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  cat.id === category.id
                    ? 'bg-route-500 text-asphalt-900'
                    : 'bg-asphalt-100 text-asphalt-700 hover:bg-asphalt-200 hover:text-asphalt-900'
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 lg:py-16 bg-asphalt-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {categoryArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-asphalt-500">Aucun article dans cette categorie pour le moment.</p>
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
