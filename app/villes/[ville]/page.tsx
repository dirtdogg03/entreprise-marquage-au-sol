import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locations, getLocationBySlug, getAllLocationSlugs } from '@/lib/data/locations';
import { generateCityMetadata } from '@/lib/metadata';
import { generateCitySchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import CityHero from '@/components/cities/CityHero';
import CityServicesGrid from '@/components/cities/CityServicesGrid';
import NearbyCities from '@/components/cities/NearbyCities';
import FAQSection from '@/components/blocks/FAQSection';
import CTABanner from '@/components/blocks/CTABanner';

// Générer toutes les pages villes en SSG
export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    ville: slug,
  }));
}

// Générer les métadonnées SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}): Promise<Metadata> {
  const { ville } = await params;
  const location = getLocationBySlug(ville);

  if (!location) {
    return {
      title: 'Page non trouvée',
    };
  }

  return generateCityMetadata(location);
}

// FAQ spécifique à la ville
function getCityFaqs(locationName: string, departmentName: string, nearbyCities: string[]) {
  return [
    {
      question: `Quels services de marquage au sol proposez-vous à ${locationName} ?`,
      answer: `Nous proposons 17 services de marquage au sol à ${locationName} : marquage parking (standard, privé, entreprise), marquage entrepôt et industriel, places PMR, signalisation verticale, pose de ralentisseurs, bornes et butées. Tous nos travaux sont réalisés selon les normes NF et PMR.`,
    },
    {
      question: `Quel est le délai d'intervention à ${locationName} ?`,
      answer: `Nous intervenons sous 24 à 48h à ${locationName} et dans tout le ${departmentName}. Pour les projets planifiés, le délai moyen est de 1 à 2 semaines après validation du devis. La visite technique est gratuite et réalisée sous 48h.`,
    },
    {
      question: `Intervenez-vous dans les villes proches de ${locationName} ?`,
      answer: `Oui, nous intervenons à ${locationName} ainsi que dans les communes voisines${nearbyCities.length > 0 ? ` : ${nearbyCities.slice(0, 4).join(', ')}` : ''}. Notre zone d'intervention couvre l'ensemble du ${departmentName} et de l'Île-de-France.`,
    },
    {
      question: `Combien coûte un marquage au sol à ${locationName} ?`,
      answer: `Le prix dépend du type de marquage et de la surface. Nous proposons des devis gratuits et sans engagement à ${locationName}. Contactez-nous pour une estimation précise adaptée à votre projet.`,
    },
    {
      question: `Proposez-vous des interventions en dehors des heures de travail à ${locationName} ?`,
      answer: `Oui, nous pouvons intervenir la nuit, le week-end ou pendant les fermetures à ${locationName} pour ne pas perturber votre activité. Nous nous adaptons à vos contraintes opérationnelles.`,
    },
    {
      question: `Vos marquages sont-ils conformes aux normes à ${locationName} ?`,
      answer: `Absolument. Tous nos marquages à ${locationName} respectent les normes NF P98-350 pour le marquage routier, les normes PMR pour l'accessibilité, et les réglementations de sécurité industrielle. Nous fournissons une attestation de conformité à la fin de chaque intervention.`,
    },
  ];
}

export default async function VillePage({
  params,
}: {
  params: Promise<{ ville: string }>;
}) {
  const { ville } = await params;
  const location = getLocationBySlug(ville);

  if (!location) {
    notFound();
  }

  // FAQs personnalisées pour cette ville
  const cityFaqs = getCityFaqs(location.name, location.department, location.nearby);

  // Schemas JSON-LD
  const citySchema = generateCitySchema(location);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: location.department, url: `/departements/${location.departmentCode}` },
    { name: location.name, url: `/villes/${location.slug}` },
  ]);
  const faqSchema = generateFAQSchema(cityFaqs);

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(citySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero */}
      <CityHero location={location} />

      {/* Services Grid */}
      <CityServicesGrid location={location} />

      {/* Villes proches */}
      <NearbyCities location={location} />

      {/* FAQ */}
      <FAQSection
        title={`Questions fréquentes - ${location.name}`}
        description={`Tout ce que vous devez savoir sur nos services de marquage au sol à ${location.name}`}
        faqs={cityFaqs}
      />

      {/* CTA */}
      <CTABanner
        title={`Besoin d'un marquage au sol à ${location.name} ?`}
        description={`Notre équipe intervient rapidement à ${location.name} et dans tout le ${location.department}. Devis gratuit sous 24h.`}
      />
    </>
  );
}
