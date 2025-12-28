import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateBreadcrumbSchema } from '@/lib/schema';
import CTABanner from '@/components/blocks/CTABanner';

export const metadata: Metadata = {
  title: 'À Propos | Entreprise Marquage au Sol Île-de-France',
  description: 'Découvrez Entreprise Marquage au Sol : 15 ans d\'expérience en marquage au sol professionnel en Île-de-France. Équipe certifiée, matériaux premium, intervention rapide.',
  alternates: {
    canonical: '/a-propos',
  },
};

const stats = [
  { value: '15+', label: 'Années d\'expérience' },
  { value: '2000+', label: 'Projets réalisés' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '8', label: 'Départements couverts' },
];

const values = [
  {
    title: 'Excellence',
    description: 'Nous nous engageons à délivrer un travail de qualité supérieure, en utilisant les meilleurs matériaux et techniques du marché.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Réactivité',
    description: 'Intervention sous 24 à 48h en Île-de-France. Nous comprenons l\'urgence de vos projets et nous adaptons à vos contraintes.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Expertise',
    description: 'Nos équipes sont formées et certifiées pour garantir un travail conforme aux normes NF et PMR en vigueur.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Transparence',
    description: 'Devis détaillé gratuit sous 24h, sans surprise. Nous vous accompagnons de l\'étude à la réalisation.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const certifications = [
  'Certification NF Marquage Routier',
  'Habilitation PMR',
  'Qualification QUALIBAT',
  'Assurance décennale',
];

export default function AProposPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'A propos', url: '/a-propos' },
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
              <li className="text-route-600">A propos</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero section */}
      <section className="relative py-16 lg:py-24 bg-asphalt-50 grid-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-route-500/5 via-transparent to-route-500/5" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-route-500 px-4 py-1.5 text-sm font-medium text-asphalt-900 mb-6">
              Depuis plus de 15 ans
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-asphalt-900 sm:text-5xl lg:text-6xl">
              Votre partenaire en{' '}
              <span className="text-route-600">marquage au sol</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-asphalt-600">
              Entreprise Marquage au Sol est specialisee dans le tracage et la signalisation
              horizontale pour les professionnels en Île-de-France. Notre mission : vous offrir
              un marquage durable, conforme et realise dans les delais.
            </p>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-route-600 lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-asphalt-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-16 lg:py-24 bg-asphalt-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-asphalt-900 mb-6">
                Notre histoire
              </h2>
              <div className="space-y-4 text-asphalt-600">
                <p>
                  Fondée il y a plus de 15 ans par des professionnels du BTP, Entreprise Marquage
                  au Sol s&apos;est spécialisée dans le marquage au sol et la signalisation horizontale
                  pour répondre aux besoins croissants des entreprises franciliennes.
                </p>
                <p>
                  Au fil des années, nous avons développé une expertise reconnue dans le traçage
                  de parkings, la signalisation industrielle et le marquage de zones PMR, en
                  collaborant avec des entreprises de toutes tailles : PME, grands groupes,
                  collectivités et gestionnaires immobiliers.
                </p>
                <p>
                  Aujourd&apos;hui, notre équipe de techniciens qualifiés intervient dans les 8
                  départements d&apos;Île-de-France, avec un objectif constant : la satisfaction
                  client à travers un travail soigné, rapide et conforme aux normes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-route-500 to-route-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl font-bold mb-2">15+</div>
                    <div className="text-xl">ans d&apos;expérience</div>
                    <div className="mt-4 text-route-100">en Île-de-France</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-asphalt-900">Nos valeurs</h2>
            <p className="mt-4 text-lg text-asphalt-600">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-asphalt-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-route-500 text-asphalt-900 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-asphalt-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-asphalt-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-asphalt-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Nos certifications</h2>
            <p className="mt-4 text-lg text-asphalt-300">
              Des garanties professionnelles pour votre tranquillité
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-asphalt-800 rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-route-500 text-asphalt-900 mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-asphalt-900">Zone d&apos;intervention</h2>
            <p className="mt-4 text-lg text-asphalt-600">
              Nous intervenons dans toute l&apos;Île-de-France
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { code: '75', name: 'Paris', slug: 'paris' },
              { code: '92', name: 'Hauts-de-Seine', slug: 'hauts-de-seine' },
              { code: '93', name: 'Seine-Saint-Denis', slug: 'seine-saint-denis' },
              { code: '94', name: 'Val-de-Marne', slug: 'val-de-marne' },
              { code: '91', name: 'Essonne', slug: 'essonne' },
              { code: '78', name: 'Yvelines', slug: 'yvelines' },
              { code: '95', name: "Val-d'Oise", slug: 'val-d-oise' },
              { code: '77', name: 'Seine-et-Marne', slug: 'seine-et-marne' },
            ].map((dept) => (
              <Link
                key={dept.code}
                href={`/departements/${dept.slug}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-asphalt-50 hover:bg-route-50 hover:ring-2 hover:ring-route-500 transition-all"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-route-500 text-asphalt-900 font-bold text-sm">
                  {dept.code}
                </span>
                <span className="text-asphalt-900 font-medium">{dept.name}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/departements"
              className="inline-flex items-center gap-2 text-route-600 hover:text-route-700 font-medium"
            >
              Voir tous nos départements
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Prêt à démarrer votre projet ?"
        description="Contactez-nous pour un devis gratuit sous 24h. Notre équipe se tient à votre disposition."
        ctaText="Demander un devis"
        ctaHref="/contact"
      />
    </>
  );
}
