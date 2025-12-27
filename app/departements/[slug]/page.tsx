import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { departments, getDepartmentBySlug, getAllDepartmentSlugs } from '@/lib/data/departments';
import { getLocationsByDepartment } from '@/lib/data/locations';
import { services } from '@/lib/data/services';
import CTABanner from '@/components/blocks/CTABanner';
import FAQSection from '@/components/blocks/FAQSection';

interface DepartmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllDepartmentSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: DepartmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);
  if (!department) return {};

  return {
    title: department.seoTitle,
    description: department.seoDescription,
    openGraph: {
      title: department.seoTitle,
      description: department.seoDescription,
      type: 'website',
      locale: 'fr_FR',
    },
  };
}

export default async function DepartmentPage({ params }: DepartmentPageProps) {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);

  if (!department) {
    notFound();
  }

  const cities = getLocationsByDepartment(department.code);
  const mainServices = services.slice(0, 6);

  const departmentFaqs = [
    {
      question: `Dans quelles villes intervenez-vous dans ${department.fullName === 'Paris' ? 'Paris' : `le ${department.fullName}`} ?`,
      answer: `Nous intervenons dans toutes les communes ${department.fullName === 'Paris' ? 'de Paris' : `du ${department.fullName}`} : ${cities.slice(0, 8).map(c => c.name).join(', ')}${cities.length > 8 ? ' et bien d\'autres' : ''}. Devis gratuit sous 24h.`,
    },
    {
      question: `Quel est le delai d'intervention ${department.fullName === 'Paris' ? 'a Paris' : `dans le ${department.fullName}`} ?`,
      answer: `Nous intervenons sous 24 a 48h pour la visite technique et l'etablissement du devis. Les travaux peuvent demarrer des la semaine suivante selon votre planning.`,
    },
    {
      question: `Quels types de marquage proposez-vous ${department.fullName === 'Paris' ? 'a Paris' : `dans le ${department.fullName}`} ?`,
      answer: `Nous realisons tous types de marquage au sol : parkings, entrepots, places PMR, voies de circulation, zones de securite, signalisation horizontale. Peintures, resines et thermoplastiques disponibles.`,
    },
    {
      question: `Intervenez-vous la nuit ou le week-end ${department.fullName === 'Paris' ? 'a Paris' : `dans le ${department.fullName}`} ?`,
      answer: `Oui, nous adaptons nos interventions a votre activite. Travaux possibles de nuit, le week-end ou pendant les periodes de fermeture pour minimiser l'impact sur votre exploitation.`,
    },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Marquage au Sol IDF',
      description: department.description,
      areaServed: {
        '@type': 'AdministrativeArea',
        name: department.fullName,
      },
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          addressCountry: 'FR',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://entreprise-marquage-au-sol.fr',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Departements',
          item: 'https://entreprise-marquage-au-sol.fr/departements',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: department.fullName,
          item: `https://entreprise-marquage-au-sol.fr/departements/${department.slug}`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-asphalt-900 overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-asphalt-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>/</li>
              <li className="text-route-500">{department.fullName}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-route-500/10 text-route-500 text-sm font-semibold mb-6">
                <span className="font-mono text-lg">{department.code}</span>
                Departement
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Marquage au Sol<br />
                <span className="text-route-500">{department.fullName}</span>
              </h1>
              <p className="mt-6 text-lg text-asphalt-300 leading-relaxed">
                {department.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-route-500 text-asphalt-900 font-semibold rounded-lg hover:bg-route-400 transition-colors"
                >
                  Demander un devis gratuit
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+33123456789"
                  className="inline-flex items-center gap-2 px-6 py-3 ring-1 ring-asphalt-700 text-white font-semibold rounded-lg hover:bg-asphalt-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  01 23 45 67 89
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-asphalt-800/50 ring-1 ring-asphalt-700">
                <div className="text-4xl font-bold text-route-500">{cities.length}</div>
                <div className="mt-2 text-asphalt-300">Villes desservies</div>
              </div>
              <div className="p-6 rounded-xl bg-asphalt-800/50 ring-1 ring-asphalt-700">
                <div className="text-4xl font-bold text-route-500">24-48h</div>
                <div className="mt-2 text-asphalt-300">Intervention rapide</div>
              </div>
              <div className="p-6 rounded-xl bg-asphalt-800/50 ring-1 ring-asphalt-700">
                <div className="text-4xl font-bold text-route-500">5 ans</div>
                <div className="mt-2 text-asphalt-300">Garantie travaux</div>
              </div>
              <div className="p-6 rounded-xl bg-asphalt-800/50 ring-1 ring-asphalt-700">
                <div className="text-4xl font-bold text-route-500">100%</div>
                <div className="mt-2 text-asphalt-300">Conforme normes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characteristics */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-asphalt-900 mb-8">
            Nos interventions {department.fullName === 'Paris' ? 'a Paris' : `dans le ${department.fullName}`}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {department.characteristics.map((characteristic) => (
              <div
                key={characteristic}
                className="flex items-center gap-3 p-4 rounded-lg bg-asphalt-50"
              >
                <svg className="w-5 h-5 text-route-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-asphalt-700">{characteristic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-asphalt-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-asphalt-900 mb-2">
            Nos services de marquage
          </h2>
          <p className="text-asphalt-600 mb-8">
            Solutions completes de marquage au sol {department.fullName === 'Paris' ? 'a Paris' : `dans le ${department.fullName}`}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group p-6 rounded-xl bg-white ring-1 ring-asphalt-200 hover:ring-route-500 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-asphalt-900 group-hover:text-route-600 transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-asphalt-600 line-clamp-2">
                  {service.shortDescription}
                </p>
                <div className="mt-4 flex items-center text-sm text-route-600 font-medium">
                  En savoir plus
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 ring-1 ring-asphalt-300 text-asphalt-700 font-semibold rounded-lg hover:bg-asphalt-100 transition-colors"
            >
              Voir tous nos services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-asphalt-900 mb-2">
            Villes d&apos;intervention {department.fullName === 'Paris' ? 'a Paris' : `dans le ${department.fullName}`}
          </h2>
          <p className="text-asphalt-600 mb-8">
            {cities.length} commune{cities.length > 1 ? 's' : ''} desservie{cities.length > 1 ? 's' : ''} dans le departement {department.code}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cities.map((city) => (
              <div
                key={city.id}
                className="p-3 rounded-lg bg-asphalt-50 text-center"
              >
                <span className="text-asphalt-700 text-sm">{city.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title={`Questions frequentes sur le marquage au sol ${department.fullName === 'Paris' ? 'a Paris' : `dans le ${department.fullName}`}`}
        faqs={departmentFaqs}
      />

      {/* CTA */}
      <CTABanner />
    </>
  );
}
