import { Metadata } from 'next';
import Link from 'next/link';
import { authors } from '@/lib/data/authors';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Nos Experts en Marquage au Sol | Équipe Technique',
  description: `Découvrez notre équipe d'experts en marquage au sol : ${authors.length} professionnel(s) certifié(s) avec plus de 15 ans d'expérience en signalisation horizontale, peinture industrielle et conformité PMR.`,
  alternates: {
    canonical: '/auteurs',
  },
};

export default function AuteursPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Auteurs', url: '/auteurs' },
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
              <li className="text-route-600">Auteurs</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-asphalt-50 grid-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-route-500/5 via-transparent to-route-500/5" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-route-500 px-4 py-1.5 text-sm font-medium text-asphalt-900 mb-6">
              Notre équipe
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-asphalt-900 sm:text-5xl">
              Nos experts en{' '}
              <span className="text-route-600">marquage au sol</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-asphalt-600">
              Découvrez les professionnels qui rédigent nos guides et articles.
              Une équipe de spécialistes du marquage au sol, de la signalisation
              horizontale et de la conformité réglementaire.
            </p>
          </div>
        </div>
      </section>

      {/* Liste des auteurs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {authors.map((author) => (
              <Link
                key={author.id}
                href={`/auteurs/${author.slug}`}
                className="group bg-asphalt-50 rounded-2xl p-6 hover:shadow-lg hover:ring-1 hover:ring-route-500 transition-all duration-200"
              >
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-route-400 to-route-600 flex items-center justify-center text-white text-2xl font-bold">
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-asphalt-900 group-hover:text-route-600 transition-colors">
                      {author.name}
                    </h2>
                    <p className="text-sm text-asphalt-500">{author.role}</p>
                  </div>
                </div>

                {/* Bio courte */}
                <p className="text-sm text-asphalt-600 line-clamp-3 mb-4">
                  {author.bio}
                </p>

                {/* Expertise */}
                {author.expertise && author.expertise.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {author.expertise.slice(0, 3).map((exp) => (
                        <span
                          key={exp}
                          className="inline-flex items-center rounded-full bg-route-100 px-2.5 py-0.5 text-xs font-medium text-route-700"
                        >
                          {exp}
                        </span>
                      ))}
                      {author.expertise.length > 3 && (
                        <span className="inline-flex items-center rounded-full bg-asphalt-200 px-2.5 py-0.5 text-xs font-medium text-asphalt-600">
                          +{author.expertise.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Experience */}
                {author.experience && (
                  <div className="flex items-center gap-2 text-sm text-asphalt-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{author.experience}</span>
                  </div>
                )}

                {/* Certifications */}
                {author.certifications && author.certifications.length > 0 && (
                  <div className="mt-3 flex items-center gap-2 text-sm text-asphalt-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    <span>{author.certifications.length} certification(s)</span>
                  </div>
                )}

                {/* Lien */}
                <div className="mt-4 flex items-center text-sm text-route-600 font-medium">
                  Voir le profil complet
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section expertise */}
      <section className="py-16 lg:py-24 bg-asphalt-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-asphalt-900">
              Une expertise reconnue
            </h2>
            <p className="mt-4 text-asphalt-600">
              Nos rédacteurs sont des professionnels du terrain
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: '15+',
                label: 'Années d\'expérience',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                value: '2000+',
                label: 'Projets réalisés',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                value: 'NF',
                label: 'Certifications normes',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                value: '100%',
                label: 'Contenus vérifiés',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ),
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-route-100 text-route-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-route-600">{stat.value}</div>
                <div className="text-sm text-asphalt-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-asphalt-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Besoin de conseils personnalisés ?
            </h2>
            <p className="mt-4 text-asphalt-300 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre disposition pour répondre à vos
              questions sur le marquage au sol et vous accompagner dans vos projets.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-route-500 text-asphalt-900 font-semibold rounded-lg hover:bg-route-400 transition-colors"
              >
                Nous contacter
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 ring-1 ring-asphalt-600 text-white font-semibold rounded-lg hover:bg-asphalt-800 transition-colors"
              >
                Lire nos articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
