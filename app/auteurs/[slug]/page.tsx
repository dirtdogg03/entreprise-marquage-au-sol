import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { authors, getAuthorBySlug } from '@/lib/data/authors';
import { articles, getCategoryById } from '@/lib/data/articles';
import { generateBreadcrumbSchema } from '@/lib/schema';
import ArticleCard from '@/components/blog/ArticleCard';
import CTABanner from '@/components/blocks/CTABanner';

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) return {};

  const title = `${author.name} - ${author.role} | Entreprise Marquage au Sol`;
  const description = `Decouvrez l'expertise de ${author.name}, ${author.role}. ${author.experience} d'experience en marquage au sol professionnel en Île-de-France.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      url: `https://entreprise-marquage-au-sol.fr/auteurs/${author.slug}`,
    },
    alternates: {
      canonical: `https://entreprise-marquage-au-sol.fr/auteurs/${author.slug}`,
    },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  // Get articles by this author
  const authorArticles = articles.filter(
    (article) => article.author === 'Entreprise Marquage au Sol'
  );

  // Schema.org Person
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `https://entreprise-marquage-au-sol.fr/auteurs/${author.slug}#person`,
    name: author.name,
    jobTitle: author.role,
    description: author.bio.substring(0, 200),
    image: `https://entreprise-marquage-au-sol.fr${author.image}`,
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://entreprise-marquage-au-sol.fr/#organization',
      name: 'Entreprise Marquage au Sol',
    },
    knowsAbout: author.expertise,
    hasCredential: author.certifications.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert,
    })),
    sameAs: [author.social?.linkedin].filter(Boolean),
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Auteurs', url: '/auteurs' },
    { name: author.name, url: `/auteurs/${author.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([personSchema, breadcrumbSchema]),
        }}
      />

      {/* Author Header */}
      <section className="relative py-16 lg:py-24 bg-asphalt-50 grid-bg">
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Fil d'Ariane">
            <ol className="flex items-center gap-2 text-sm text-asphalt-500">
              <li>
                <Link href="/" className="hover:text-route-600 transition-colors">
                  Accueil
                </Link>
              </li>
              <li className="text-asphalt-400">/</li>
              <li className="text-route-600">{author.name}</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Author Avatar Placeholder */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-route-500 rounded-full flex items-center justify-center text-asphalt-900 text-4xl font-black">
                {author.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
            </div>

            <div>
              <span className="inline-flex items-center rounded-full bg-route-500 px-4 py-1.5 text-sm font-medium text-asphalt-900 mb-4">
                {author.role}
              </span>

              <h1 className="text-3xl font-bold tracking-tight text-asphalt-900 sm:text-4xl">
                {author.name}
              </h1>

              <p className="mt-4 text-lg text-asphalt-600">
                {author.experience} d&apos;experience en marquage au sol professionnel
              </p>

              {author.social?.linkedin && (
                <div className="mt-4">
                  <a
                    href={author.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-route-600 hover:text-route-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Voir le profil LinkedIn
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-asphalt-900 mb-6">A propos</h2>
          <div className="prose prose-lg max-w-none text-asphalt-600">
            {author.bio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Expertise */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-asphalt-900 mb-4">Domaines d&apos;expertise</h3>
            <div className="flex flex-wrap gap-2">
              {author.expertise.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full bg-asphalt-100 px-4 py-2 text-sm text-asphalt-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-asphalt-900 mb-4">Certifications</h3>
            <ul className="space-y-3">
              {author.certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-3 text-asphalt-600">
                  <svg
                    className="w-5 h-5 text-route-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Author Articles */}
      {authorArticles.length > 0 && (
        <section className="py-12 lg:py-16 bg-asphalt-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-asphalt-900 mb-8">
              Articles rediges ({authorArticles.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authorArticles.slice(0, 6).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            {authorArticles.length > 6 && (
              <div className="mt-8 text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-route-600 hover:text-route-700 font-medium"
                >
                  Voir tous les articles
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <CTABanner
        title="Une question sur le marquage au sol ?"
        description="Notre equipe d'experts vous repond sous 24h."
        ctaText="Nous contacter"
        ctaHref="/contact"
      />
    </>
  );
}
