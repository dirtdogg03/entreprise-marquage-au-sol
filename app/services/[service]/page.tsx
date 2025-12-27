import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, getServiceBySlug } from '@/lib/data/services';
import { locations } from '@/lib/data/locations';
import { generateServiceMetadata } from '@/lib/metadata';
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import CTABanner from '@/components/blocks/CTABanner';
import FAQSection from '@/components/blocks/FAQSection';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceLocations from '@/components/services/ServiceLocations';
import RelatedServices from '@/components/services/RelatedServices';

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) return {};
  return generateServiceMetadata(service);
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  const serviceFaqs = [
    {
      question: `Quel est le prix du ${service.name.toLowerCase()} ?`,
      answer: `Le prix depend de la surface a traiter, du type de marquage et des contraintes specifiques. Contactez-nous pour un devis gratuit personnalise. Nous intervenons sous 48h pour la visite technique.`,
    },
    {
      question: `Quelle est la duree d'intervention pour ${service.name.toLowerCase()} ?`,
      answer: `La duree depend de la surface et de la complexite du projet. En moyenne, comptez 1 a 3 jours pour un parking standard. Nous pouvons intervenir la nuit ou le week-end pour ne pas perturber votre activite.`,
    },
    {
      question: `Le ${service.name.toLowerCase()} est-il conforme aux normes ?`,
      answer: `Absolument. Tous nos marquages respectent les normes NF en vigueur, les reglementations PMR pour l'accessibilite et les normes de securite industrielle. Une attestation de conformite vous est remise.`,
    },
    {
      question: `Quelle garantie pour ${service.name.toLowerCase()} ?`,
      answer: `Nous garantissons nos travaux 5 ans minimum. Nos peintures et resines professionnelles assurent une durabilite optimale selon les conditions d'utilisation.`,
    },
    {
      question: `Intervenez-vous dans ma ville pour ${service.name.toLowerCase()} ?`,
      answer: `Nous intervenons dans toute l'Ile-de-France : Paris et tous les departements (92, 93, 94, 91, 78, 95, 77). Devis et visite technique gratuits.`,
    },
  ];

  const jsonLd = [
    generateServiceSchema(service),
    generateBreadcrumbSchema([
      { name: 'Accueil', url: '/' },
      { name: 'Services', url: '/services' },
      { name: service.name, url: `/services/${service.slug}` },
    ]),
    generateFAQSchema(serviceFaqs),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceHero service={service} />

      <ServiceBenefits service={service} />

      <ServiceLocations service={service} locations={locations} />

      <RelatedServices service={service} />

      <FAQSection
        title={`Questions sur ${service.name}`}
        description="Tout ce que vous devez savoir sur ce service"
        faqs={serviceFaqs}
      />

      <CTABanner
        title={`Besoin de ${service.name.toLowerCase()} ?`}
        description="Devis gratuit sous 24h. Intervention rapide en Ile-de-France."
        ctaText="Demander un devis"
        ctaHref="/contact"
      />
    </>
  );
}
