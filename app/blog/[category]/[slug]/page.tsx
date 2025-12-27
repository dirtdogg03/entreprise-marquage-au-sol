import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { articles, categories, getCategoryBySlug, getArticleBySlug, getArticlesByCategory } from '@/lib/data/articles';
import { generateArticleMetadata } from '@/lib/metadata';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import ArticleCard from '@/components/blog/ArticleCard';
import CTABanner from '@/components/blocks/CTABanner';
import FAQSection from '@/components/blocks/FAQSection';
import { getArticleFaqs, hasArticleFaqs } from '@/lib/data/article-faqs';
import TableOfContents from '@/components/blog/TableOfContents';
import ArticleRelatedServices from '@/components/blog/ArticleRelatedServices';

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

  // Get FAQs for this article
  const articleFaqs = getArticleFaqs(article.id);

  // Build Schema.org JSON-LD
  const jsonLd: object[] = [
    generateArticleSchema(article, category),
    generateBreadcrumbSchema([
      { name: 'Accueil', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: category.name, url: `/blog/${category.slug}` },
      { name: article.title, url: `/blog/${category.slug}/${article.slug}` },
    ]),
  ];

  // Add FAQPage schema if article has FAQs
  if (articleFaqs.length > 0) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: articleFaqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article header */}
      <section className="relative py-16 lg:py-24 bg-asphalt-50 grid-bg">
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-asphalt-500">
              <li>
                <Link href="/" className="hover:text-route-600 transition-colors">
                  Accueil
                </Link>
              </li>
              <li className="text-asphalt-400">/</li>
              <li>
                <Link href="/blog" className="hover:text-route-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li className="text-asphalt-400">/</li>
              <li>
                <Link href={`/blog/${category.slug}`} className="hover:text-route-600 transition-colors">
                  {category.name}
                </Link>
              </li>
              <li className="text-asphalt-400">/</li>
              <li className="text-route-600 truncate max-w-[200px]">{article.title}</li>
            </ol>
          </nav>

          <span className="inline-flex items-center rounded-full bg-route-500 px-4 py-1.5 text-sm font-medium text-asphalt-900 mb-6">
            {category.name}
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-asphalt-900 sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="mt-6 flex items-center gap-4 text-asphalt-500">
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

          <p className="mt-6 text-lg text-asphalt-600">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article content with TOC */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="xl:grid xl:grid-cols-[1fr_280px] xl:gap-12">
            {/* Main content */}
            <div className="max-w-4xl">
              {/* Mobile TOC */}
              <TableOfContents content={article.content} />

              <article className="prose prose-lg max-w-none
                prose-headings:text-asphalt-900 prose-headings:scroll-mt-24
                prose-h1:text-3xl prose-h1:font-bold prose-h1:mt-8 prose-h1:mb-6
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-asphalt-900
                prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-asphalt-900
                prose-p:text-asphalt-600 prose-p:leading-relaxed prose-p:mb-4
                prose-strong:text-asphalt-900 prose-strong:font-semibold
                prose-ul:text-asphalt-600 prose-ul:my-4
                prose-ol:text-asphalt-600 prose-ol:my-4
                prose-li:my-1 prose-li:marker:text-route-500
                prose-table:text-sm prose-table:my-6
                prose-thead:bg-asphalt-100
                prose-th:text-asphalt-900 prose-th:font-semibold prose-th:px-4 prose-th:py-3 prose-th:text-left
                prose-td:px-4 prose-td:py-3 prose-td:border-asphalt-200
                prose-tr:border-b prose-tr:border-asphalt-200
                prose-a:text-route-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-route-500 prose-blockquote:bg-asphalt-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:italic prose-blockquote:text-asphalt-600
                prose-code:text-route-700 prose-code:bg-asphalt-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-pre:bg-asphalt-900 prose-pre:text-asphalt-100
              ">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSlug]}>
                  {article.content}
                </ReactMarkdown>
              </article>

              {/* FAQ Section - Accordion */}
              {articleFaqs.length > 0 && (
                <div className="mt-12">
                  <FAQSection
                    title="Questions frequentes"
                    faqs={articleFaqs}
                  />
                </div>
              )}

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-asphalt-200">
                <h3 className="text-sm font-medium text-asphalt-500 mb-4">Mots-cles</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-asphalt-100 px-3 py-1 text-sm text-asphalt-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              <ArticleRelatedServices article={article} />
            </div>

            {/* Desktop TOC Sidebar */}
            <aside className="hidden xl:block">
              <TableOfContents content={article.content} />
            </aside>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 lg:py-16 bg-asphalt-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-asphalt-900 mb-8">Articles similaires</h2>
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
