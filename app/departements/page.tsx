import { Metadata } from 'next';
import Link from 'next/link';
import { departments } from '@/lib/data/departments';
import { generateBreadcrumbSchema } from '@/lib/schema';
import CTABanner from '@/components/blocks/CTABanner';

export const metadata: Metadata = {
  title: 'Marquage au Sol Île-de-France | Tous les Départements',
  description: 'Entreprise de marquage au sol intervenant dans les 8 départements d\'Île-de-France : Paris, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Essonne, Yvelines, Val-d\'Oise, Seine-et-Marne.',
  alternates: {
    canonical: '/departements',
  },
};

export default function DepartementsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Départements', url: '/departements' },
  ]);

  // Stats globales
  const totalCities = departments.reduce((acc, dept) => acc + dept.mainCities.length, 0);
  const totalDepartments = departments.length;

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
              <li className="text-route-600">Départements</li>
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
              {totalDepartments} départements couverts
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-asphalt-900 sm:text-5xl">
              Marquage au sol en{' '}
              <span className="text-route-600">Île-de-France</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-asphalt-600">
              Notre équipe intervient dans l&apos;ensemble de la région Île-de-France
              pour vos projets de marquage au sol : parkings, entrepôts, voiries,
              places PMR. Découvrez nos zones d&apos;intervention par département.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-route-600">{totalDepartments}</div>
              <div className="text-sm text-asphalt-500">Départements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-route-600">{totalCities}+</div>
              <div className="text-sm text-asphalt-500">Villes couvertes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-route-600">24-48h</div>
              <div className="text-sm text-asphalt-500">Intervention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-route-600">15+</div>
              <div className="text-sm text-asphalt-500">Ans d&apos;expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des departements */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-asphalt-900 mb-8">
            Nos zones d&apos;intervention
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept) => (
              <Link
                key={dept.code}
                href={`/departements/${dept.slug}`}
                className="group relative bg-asphalt-50 rounded-2xl p-6 hover:shadow-lg hover:ring-2 hover:ring-route-500 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-route-500 text-asphalt-900 font-bold text-xl">
                    {dept.code}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-asphalt-900 group-hover:text-route-600 transition-colors">
                      {dept.name}
                    </h3>
                    <p className="mt-2 text-sm text-asphalt-600 line-clamp-2">
                      {dept.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {dept.mainCities.slice(0, 4).map((city) => (
                        <span
                          key={city}
                          className="inline-flex items-center rounded-full bg-asphalt-100 px-2.5 py-0.5 text-xs text-asphalt-700"
                        >
                          {city}
                        </span>
                      ))}
                      {dept.mainCities.length > 4 && (
                        <span className="inline-flex items-center text-xs text-asphalt-500">
                          +{dept.mainCities.length - 4} villes
                        </span>
                      )}
                    </div>
                  </div>
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-asphalt-400 group-hover:text-route-500 group-hover:translate-x-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Caracteristiques */}
                <div className="mt-4 pt-4 border-t border-asphalt-200">
                  <div className="flex flex-wrap gap-2">
                    {dept.characteristics.slice(0, 3).map((char) => (
                      <span
                        key={char}
                        className="inline-flex items-center rounded-md bg-route-100 px-2 py-1 text-xs font-medium text-route-700"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-asphalt-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-asphalt-900">
              Nos services de marquage au sol
            </h2>
            <p className="mt-4 text-asphalt-600">
              Disponibles dans toute l&apos;Île-de-France
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Parking',
                description: 'Traçage de places, flèches directionnelles, numérotation',
                href: '/services/marquage-au-sol-parking',
              },
              {
                title: 'Places PMR',
                description: 'Places handicapées conformes aux normes NF P 98-351',
                href: '/services/places-handicapees-pmr',
              },
              {
                title: 'Entrepôt',
                description: 'Zones de stockage, allées de circulation, sécurité',
                href: '/services/marquage-au-sol-entrepot',
              },
              {
                title: 'Voirie',
                description: 'Passages piétons, stops, cédez-le-passage',
                href: '/services/marquage-au-sol-exterieur',
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-xl p-6 hover:shadow-md hover:ring-2 hover:ring-route-500 transition-all"
              >
                <h3 className="font-semibold text-asphalt-900">{service.title}</h3>
                <p className="mt-2 text-sm text-asphalt-600">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-route-600 hover:text-route-700 font-medium"
            >
              Voir tous nos services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Un projet de marquage au sol ?"
        description="Contactez-nous pour un devis gratuit sous 24h. Intervention rapide dans toute l'Île-de-France."
        ctaText="Demander un devis"
        ctaHref="/contact"
      />
    </>
  );
}
