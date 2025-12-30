import { Metadata } from 'next';
import Link from 'next/link';
import { locations, getLocationsByDepartment } from '@/lib/data/locations';
import { departments } from '@/lib/data/departments';
import { generateBreadcrumbSchema } from '@/lib/schema';
import CTABanner from '@/components/blocks/CTABanner';

export const metadata: Metadata = {
  title: 'Marquage au Sol | Toutes les Villes d\'Île-de-France',
  description: `Entreprise de marquage au sol intervenant dans ${locations.length} villes d'Île-de-France : Paris, Boulogne-Billancourt, Saint-Denis, Versailles, Créteil et toutes les communes de la région.`,
  alternates: {
    canonical: '/villes',
  },
};

export default function VillesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Villes', url: '/villes' },
  ]);

  // Grouper les villes par département
  const citiesByDepartment = departments.map((dept) => ({
    ...dept,
    cities: getLocationsByDepartment(dept.code).sort((a, b) =>
      b.population - a.population
    ),
  }));

  // Stats globales
  const totalCities = locations.length;
  const totalDepartments = departments.length;
  const totalPopulation = locations.reduce((acc, loc) => acc + (loc.population || 0), 0);

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
              <li className="text-route-600">Villes</li>
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
              {totalCities} villes couvertes
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-asphalt-900 sm:text-5xl">
              Marquage au sol dans{' '}
              <span className="text-route-600">toutes les villes</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-asphalt-600">
              Notre équipe de professionnels intervient dans {totalCities} communes
              d&apos;Île-de-France pour vos projets de marquage au sol : parkings,
              entrepôts, voiries, places PMR. Trouvez votre ville ci-dessous.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-route-600">{totalCities}</div>
              <div className="text-sm text-asphalt-500">Villes couvertes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-route-600">{totalDepartments}</div>
              <div className="text-sm text-asphalt-500">Départements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-route-600">24-48h</div>
              <div className="text-sm text-asphalt-500">Intervention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-route-600">
                {Math.round(totalPopulation / 1000000)}M+
              </div>
              <div className="text-sm text-asphalt-500">Habitants couverts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des villes par département */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-asphalt-900 mb-8">
            Nos zones d&apos;intervention par département
          </h2>

          <div className="space-y-12">
            {citiesByDepartment.map((dept) => (
              <div key={dept.code}>
                {/* Header département */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-route-500 text-asphalt-900 font-bold text-lg">
                    {dept.code}
                  </div>
                  <div>
                    <Link
                      href={`/departements/${dept.slug}`}
                      className="text-xl font-semibold text-asphalt-900 hover:text-route-600 transition-colors"
                    >
                      {dept.name}
                    </Link>
                    <p className="text-sm text-asphalt-500">
                      {dept.cities.length} villes couvertes
                    </p>
                  </div>
                </div>

                {/* Grille des villes */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {dept.cities.map((city) => (
                    <Link
                      key={city.id}
                      href={`/villes/${city.slug}`}
                      className="group p-3 rounded-lg bg-asphalt-50 hover:bg-route-500/10 hover:ring-1 hover:ring-route-500 transition-all"
                    >
                      <span className="text-sm text-asphalt-700 group-hover:text-route-600 transition-colors font-medium">
                        {city.name}
                      </span>
                      {city.population > 100000 && (
                        <span className="ml-2 inline-flex items-center rounded-full bg-route-100 px-1.5 py-0.5 text-xs text-route-700">
                          {Math.round(city.population / 1000)}k
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 lg:py-24 bg-asphalt-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-asphalt-900">
              Pourquoi nous choisir pour votre marquage au sol ?
            </h2>
            <p className="mt-4 text-asphalt-600">
              Une équipe de professionnels à votre service
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Intervention rapide',
                description: 'Visite technique sous 24-48h dans toutes les villes',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Devis gratuit',
                description: 'Estimation personnalisée sans engagement',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                ),
              },
              {
                title: 'Garantie 5 ans',
                description: 'Tous nos travaux sont garantis 5 ans minimum',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: 'Conformité normes',
                description: 'Marquages conformes NF et accessibilité PMR',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-route-100 text-route-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-asphalt-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-asphalt-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Votre ville n'est pas listée ?"
        description="Nous intervenons dans toute l'Île-de-France. Contactez-nous pour un devis gratuit sous 24h."
        ctaText="Demander un devis"
        ctaHref="/contact"
      />
    </>
  );
}
