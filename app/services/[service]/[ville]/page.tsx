import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/lib/data/services';
import { locations, getLocationBySlug } from '@/lib/data/locations';
import { generateServiceLocationMetadata } from '@/lib/metadata';
import { generateServiceLocationSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import { getServiceLocationContent } from '@/lib/data/content';
import CTABanner from '@/components/blocks/CTABanner';
import FAQSection from '@/components/blocks/FAQSection';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceLocalContent from '@/components/services/ServiceLocalContent';
import NearbyLocations from '@/components/services/NearbyLocations';
import ServiceRelatedArticles from '@/components/services/ServiceRelatedArticles';

interface ServiceLocationPageProps {
  params: Promise<{ service: string; ville: string }>;
}

export async function generateStaticParams() {
  const params: { service: string; ville: string }[] = [];

  for (const service of services) {
    for (const location of locations) {
      params.push({
        service: service.slug,
        ville: location.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: ServiceLocationPageProps): Promise<Metadata> {
  const { service: serviceSlug, ville: villeSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const location = getLocationBySlug(villeSlug);

  if (!service || !location) return {};

  // Use varied content if available
  const variedContent = getServiceLocationContent(serviceSlug, villeSlug);

  if (variedContent) {
    return {
      title: variedContent.metaTitle,
      description: variedContent.metaDescription,
      openGraph: {
        title: variedContent.metaTitle,
        description: variedContent.metaDescription,
        type: 'website',
        locale: 'fr_FR',
      },
      alternates: {
        canonical: `/services/${serviceSlug}/${villeSlug}`,
      },
    };
  }

  return generateServiceLocationMetadata(service, location);
}

export default async function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const { service: serviceSlug, ville: villeSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  const location = getLocationBySlug(villeSlug);

  if (!service || !location) {
    notFound();
  }

  // Get varied content if available
  const variedContent = getServiceLocationContent(serviceSlug, villeSlug);

  // Use varied FAQs or fall back to template FAQs
  const locationFaqs = variedContent?.faqs || [
    {
      question: `Où intervenez-vous à ${location.name} pour ${service.name.toLowerCase()} ?`,
      answer: `Nous intervenons dans tout ${location.name} et les villes environnantes : ${location.nearby.join(', ')}. Notre équipe se déplace gratuitement pour établir un devis sur site.`,
    },
    {
      question: `Quel est le délai d'intervention à ${location.name} ?`,
      answer: `Nous intervenons sous 24 à 48h à ${location.name} (${location.departmentCode}). La visite technique est gratuite et le devis est remis sous 24h.`,
    },
    {
      question: `Combien coûte ${service.name.toLowerCase()} à ${location.name} ?`,
      answer: `Le prix dépend de la surface, du type de marquage et des contraintes du site. Contactez-nous pour un devis gratuit personnalisé. Nos tarifs sont compétitifs pour la région ${location.department}.`,
    },
    {
      question: `Travaillez-vous le week-end à ${location.name} ?`,
      answer: `Oui, nous pouvons intervenir la nuit, le week-end ou pendant vos fermetures pour ne pas perturber votre activité à ${location.name}.`,
    },
    {
      question: `Vos marquages à ${location.name} sont-ils garantis ?`,
      answer: `Tous nos travaux de ${service.name.toLowerCase()} à ${location.name} sont garantis 5 ans minimum. Nous utilisons des matériaux professionnels haute résistance.`,
    },
  ];

  const jsonLd = [
    generateServiceLocationSchema(service, location),
    generateBreadcrumbSchema([
      { name: 'Accueil', url: '/' },
      { name: 'Services', url: '/services' },
      { name: service.name, url: `/services/${service.slug}` },
      { name: location.name, url: `/services/${service.slug}/${location.slug}` },
    ]),
    generateFAQSchema(locationFaqs),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceHero
        service={service}
        location={{ name: location.name, department: location.department }}
      />

      {/* Contenu local varié si disponible */}
      {variedContent && (
        <ServiceLocalContent
          content={variedContent.content}
          locationName={location.name}
          serviceName={service.name}
        />
      )}

      <ServiceBenefits service={service} />

      <NearbyLocations
        service={service}
        currentLocation={location}
        locations={locations}
      />

      <ServiceRelatedArticles serviceSlug={service.slug} />

      <FAQSection
        title={`${service.name} à ${location.name}`}
        description={`Questions fréquentes sur nos services à ${location.name}`}
        faqs={locationFaqs}
      />

      <CTABanner
        title={`${service.name} à ${location.name}`}
        description={`Devis gratuit sous 24h pour votre projet à ${location.name} et environs.`}
        ctaText="Demander un devis"
        ctaHref="/contact"
      />
    </>
  );
}
