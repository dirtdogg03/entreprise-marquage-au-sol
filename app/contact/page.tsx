import { Metadata } from 'next';
import Link from 'next/link';
import { generateContactMetadata } from '@/lib/metadata';
import { generateBreadcrumbSchema } from '@/lib/schema';
import ContactForm from '@/components/forms/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = generateContactMetadata();

const departments = [
  { code: '75', name: 'Paris', slug: 'paris' },
  { code: '92', name: 'Hauts-de-Seine', slug: 'hauts-de-seine' },
  { code: '93', name: 'Seine-Saint-Denis', slug: 'seine-saint-denis' },
  { code: '94', name: 'Val-de-Marne', slug: 'val-de-marne' },
  { code: '91', name: 'Essonne', slug: 'essonne' },
  { code: '78', name: 'Yvelines', slug: 'yvelines' },
  { code: '95', name: "Val-d'Oise", slug: 'val-d-oise' },
  { code: '77', name: 'Seine-et-Marne', slug: 'seine-et-marne' },
];

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Contact', url: '/contact' },
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
              <li className="text-route-600">Contact</li>
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
              <span className="text-route-600">Contactez</span>-nous
            </h1>
            <p className="mt-6 text-lg leading-8 text-asphalt-600">
              Demandez votre devis gratuit pour votre projet de marquage au sol. Notre equipe vous repond sous 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-asphalt-900 mb-6">
                Demande de devis gratuit
              </h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="py-16 bg-asphalt-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-asphalt-900">
              Zone d&apos;intervention
            </h2>
            <p className="mt-4 text-asphalt-600">
              Nous intervenons dans toute l&apos;Ile-de-France
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 ring-1 ring-asphalt-200 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {departments.map((dept) => (
                <Link
                  key={dept.code}
                  href={`/departements/${dept.slug}`}
                  className="text-center p-4 rounded-xl hover:bg-asphalt-50 transition-colors group"
                >
                  <div className="text-2xl font-bold text-route-600 group-hover:text-route-700">{dept.code}</div>
                  <div className="text-sm text-asphalt-600 group-hover:text-asphalt-900">{dept.name}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/departements"
              className="inline-flex items-center gap-2 text-route-600 hover:text-route-700 font-medium"
            >
              Voir tous nos departements
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-asphalt-900">
              Explorez nos ressources
            </h2>
            <p className="mt-4 text-asphalt-600">
              Decouvrez nos services et conseils pratiques
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/services"
              className="bg-asphalt-50 rounded-2xl p-6 hover:shadow-lg hover:ring-2 hover:ring-route-500 transition-all group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-route-500 text-asphalt-900 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-asphalt-900 group-hover:text-route-600">
                Nos services
              </h3>
              <p className="mt-2 text-sm text-asphalt-600">
                Decouvrez notre gamme complete de services de marquage au sol
              </p>
            </Link>

            <Link
              href="/blog"
              className="bg-asphalt-50 rounded-2xl p-6 hover:shadow-lg hover:ring-2 hover:ring-route-500 transition-all group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-route-500 text-asphalt-900 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-asphalt-900 group-hover:text-route-600">
                Notre blog
              </h3>
              <p className="mt-2 text-sm text-asphalt-600">
                Conseils, guides et actualites sur le marquage au sol
              </p>
            </Link>

            <Link
              href="/a-propos"
              className="bg-asphalt-50 rounded-2xl p-6 hover:shadow-lg hover:ring-2 hover:ring-route-500 transition-all group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-route-500 text-asphalt-900 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-asphalt-900 group-hover:text-route-600">
                A propos
              </h3>
              <p className="mt-2 text-sm text-asphalt-600">
                Decouvrez notre entreprise et notre expertise
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
