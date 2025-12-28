import { Metadata } from 'next';
import Link from 'next/link';
import ServicesGrid from '@/components/blocks/ServicesGrid';
import CTABanner from '@/components/blocks/CTABanner';
import FAQSection from '@/components/blocks/FAQSection';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Nos Services de Marquage au Sol | Entreprise Marquage au Sol',
  description: 'Découvrez tous nos services de marquage au sol et signalisation : parking, entrepôt, industriel, PMR, sécurité. Intervention en Île-de-France.',
  alternates: {
    canonical: '/services',
  },
};

const serviceFaqs = [
  {
    question: 'Quels types de surfaces pouvez-vous marquer ?',
    answer: 'Nous intervenons sur tous types de surfaces : béton, enrobé, asphalte, résine, carrelage industriel. Nos techniciens adaptent les techniques et produits selon la nature du sol pour garantir une adhérence optimale.',
  },
  {
    question: 'Proposez-vous des marquages personnalisés ?',
    answer: 'Oui, nous réalisons tous types de marquages personnalisés : logos d\'entreprise, pictogrammes spécifiques, couleurs sur mesure, numérotations personnalisées. Nos designers créent les gabarits selon vos spécifications.',
  },
  {
    question: 'Comment choisir entre peinture et résine ?',
    answer: 'La peinture convient aux zones à trafic modéré et offre un bon rapport qualité/prix. La résine époxy est recommandée pour les zones à fort trafic (entrepôts, industries) car elle offre une résistance supérieure à l\'abrasion et aux produits chimiques.',
  },
  {
    question: 'Intervenez-vous pour des retouches ou rénovations ?',
    answer: 'Absolument. Nous proposons des services de rénovation et rafraîchissement de marquages existants. Nous pouvons également effacer d\'anciens marquages avant de réaliser de nouvelles signalisations.',
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Services', url: '/services' },
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
              <li className="text-route-600">Services</li>
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
              Tous nos <span className="text-route-600">Services</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-asphalt-600">
              Solutions complètes de marquage au sol et signalisation pour entreprises, parkings, entrepôts et sites industriels en Île-de-France.
            </p>
          </div>
        </div>
      </section>

      {/* All services */}
      <ServicesGrid showAll={true} category="all" />

      {/* FAQ */}
      <FAQSection
        title="Questions sur nos services"
        description="Les réponses à vos questions les plus fréquentes"
        faqs={serviceFaqs}
      />

      {/* CTA */}
      <CTABanner
        title="Un projet de marquage ?"
        description="Contactez-nous pour un devis personnalisé gratuit et sans engagement."
        ctaText="Demander un devis"
        ctaHref="/contact"
      />
    </>
  );
}
