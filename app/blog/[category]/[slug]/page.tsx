import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles, categories, getCategoryBySlug, getArticleBySlug, getArticlesByCategory } from '@/lib/data/articles';
import { generateArticleMetadata } from '@/lib/metadata';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import ArticleCard from '@/components/blog/ArticleCard';
import CTABanner from '@/components/blocks/CTABanner';

interface ArticlePageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];

  for (const article of articles) {
    const category = categories.find(c => c.id === article.categoryId);
    if (category) {
      params.push({
        category: category.slug,
        slug: article.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { category: categorySlug, slug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const article = getArticleBySlug(slug);

  if (!category || !article) return {};

  return generateArticleMetadata(article, category);
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category: categorySlug, slug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const article = getArticleBySlug(slug);

  if (!category || !article) {
    notFound();
  }

  const relatedArticles = getArticlesByCategory(category.id)
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  const jsonLd = [
    generateArticleSchema(article, category),
    generateBreadcrumbSchema([
      { name: 'Accueil', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: category.name, url: `/blog/${category.slug}` },
      { name: article.title, url: `/blog/${category.slug}/${article.slug}` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article header */}
      <section className="relative py-16 lg:py-24 bg-hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
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
              <li>
                <Link href={`/blog/${category.slug}`} className="hover:text-primary-500 transition-colors">
                  {category.name}
                </Link>
              </li>
              <li>/</li>
              <li className="text-primary-500 truncate max-w-[200px]">{article.title}</li>
            </ol>
          </nav>

          <span className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-500/30 mb-6">
            {category.name}
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="mt-6 flex items-center gap-4 text-secondary-400">
            <span>
              {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>•</span>
            <span>{article.readTime} min de lecture</span>
          </div>

          <p className="mt-6 text-lg text-secondary-300">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article content */}
      <section className="py-12 lg:py-16 bg-secondary-950">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg prose-invert prose-primary max-w-none">
            {/* Article content would be rendered here */}
            <div className="text-secondary-300 space-y-6">
              <p>
                {article.excerpt}
              </p>
              <p>
                Le marquage au sol est un element essentiel de la signalisation dans les espaces
                professionnels. Que ce soit pour un parking, un entrepot ou un site industriel,
                il contribue a la securite et a l&apos;organisation des flux.
              </p>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                L&apos;importance du marquage professionnel
              </h2>
              <p>
                Un marquage au sol de qualite professionnelle offre de nombreux avantages :
                durabilite accrue, meilleure visibilite, conformite aux normes en vigueur.
                Notre entreprise utilise des materiaux premium pour garantir un resultat
                optimal.
              </p>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Nos recommandations
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Faites appel a des professionnels certifies</li>
                <li>Verifiez la conformite aux normes NF et PMR</li>
                <li>Demandez une garantie ecrite sur les travaux</li>
                <li>Prevoyez un entretien regulier du marquage</li>
              </ul>
              <p className="mt-6">
                Pour plus d&apos;informations sur nos services de marquage au sol, n&apos;hesitez
                pas a nous contacter pour un devis gratuit.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-secondary-800">
            <h3 className="text-sm font-medium text-secondary-400 mb-4">Mots-cles</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-secondary-800 px-3 py-1 text-sm text-secondary-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 lg:py-16 bg-secondary-900/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTABanner
        title="Besoin d'un devis pour votre projet ?"
        description="Contactez-nous pour une etude personnalisee gratuite."
        ctaText="Demander un devis"
        ctaHref="/contact"
      />
    </>
  );
}
