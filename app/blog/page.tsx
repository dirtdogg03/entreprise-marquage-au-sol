import { Suspense } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/lib/data/articles';
import CTABanner from '@/components/blocks/CTABanner';
import BlogPageContent from '@/components/blog/BlogPageContent';
import { generateBreadcrumbSchema } from '@/lib/schema';

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

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-asphalt-50 border-b border-asphalt-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <nav>
            <ol className="flex items-center gap-2 text-sm text-asphalt-500">
              <li>
                <Link href="/" className="hover:text-route-600 transition-colors">
                  Accueil
                </Link>
              </li>
              <li className="text-asphalt-400">/</li>
              <li className="text-route-600">Blog</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero section */}
      <section className="relative py-16 lg:py-24 bg-asphalt-50 grid-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-route-500/5 via-transparent to-route-500/5" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-asphalt-900 sm:text-5xl lg:text-6xl">
              Notre <span className="text-route-600">Blog</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-asphalt-600">
              Conseils, guides pratiques et actualites sur le marquage au sol professionnel
            </p>
          </div>
        </div>
      </section>

      {/* Blog content with pagination */}
      <Suspense fallback={
        <div className="py-16 text-center">
          <div className="animate-pulse text-asphalt-500">Chargement...</div>
        </div>
      }>
        <BlogPageContent sortedArticles={sortedArticles} />
      </Suspense>

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
