import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
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
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-secondary-500">
              <li>
                <Link href="/" className="hover:text-primary-600 transition-colors">
                  Accueil
                </Link>
              </li>
              <li className="text-secondary-400">/</li>
              <li>
                <Link href="/blog" className="hover:text-primary-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li className="text-secondary-400">/</li>
              <li>
                <Link href={`/blog/${category.slug}`} className="hover:text-primary-600 transition-colors">
                  {category.name}
                </Link>
              </li>
              <li className="text-secondary-400">/</li>
              <li className="text-primary-600 truncate max-w-[200px]">{article.title}</li>
            </ol>
          </nav>

          <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700 mb-6">
            {category.name}
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="mt-6 flex items-center gap-4 text-secondary-500">
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

          <p className="mt-6 text-lg text-secondary-600">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <article className="prose prose-lg prose-stone max-w-none
            prose-headings:text-secondary-900
            prose-h1:text-3xl prose-h1:font-bold prose-h1:mt-8 prose-h1:mb-6
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-secondary-800
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-secondary-800
            prose-p:text-secondary-700 prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-secondary-900 prose-strong:font-semibold
            prose-ul:text-secondary-700 prose-ul:my-4
            prose-ol:text-secondary-700 prose-ol:my-4
            prose-li:my-1 prose-li:marker:text-primary-500
            prose-table:text-sm prose-table:my-6
            prose-thead:bg-secondary-100
            prose-th:text-secondary-900 prose-th:font-semibold prose-th:px-4 prose-th:py-3 prose-th:text-left
            prose-td:px-4 prose-td:py-3 prose-td:border-secondary-200
            prose-tr:border-b prose-tr:border-secondary-200
            prose-a:text-primary-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-primary-500 prose-blockquote:bg-primary-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:italic prose-blockquote:text-secondary-600
            prose-code:text-primary-700 prose-code:bg-primary-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-secondary-900 prose-pre:text-secondary-100
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {article.content}
            </ReactMarkdown>
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-secondary-200">
            <h3 className="text-sm font-medium text-secondary-500 mb-4">Mots-cles</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-secondary-100 px-3 py-1 text-sm text-secondary-700"
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
        <section className="py-12 lg:py-16 bg-secondary-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-8">Articles similaires</h2>
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
