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

// Generer toutes les pages villes en SSG
export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    ville: slug,
  }));
}

// Generer les metadonnees SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}): Promise<Metadata> {
  const { ville } = await params;
  const location = getLocationBySlug(ville);

  if (!location) {
    return {
      title: 'Page non trouvee',
    };
  }

  return generateCityMetadata(location);
}

// FAQ specifique a la ville
function getCityFaqs(locationName: string, departmentName: string, nearbyCities: string[]) {
  return [
    {
      question: `Quels services de marquage au sol proposez-vous a ${locationName} ?`,
      answer: `Nous proposons 17 services de marquage au sol a ${locationName} : marquage parking (standard, prive, entreprise), marquage entrepot et industriel, places PMR, signalisation verticale, pose de ralentisseurs, bornes et butees. Tous nos travaux sont realises selon les normes NF et PMR.`,
    },
    {
      question: `Quel est le delai d'intervention a ${locationName} ?`,
      answer: `Nous intervenons sous 24 a 48h a ${locationName} et dans tout le ${departmentName}. Pour les projets planifies, le delai moyen est de 1 a 2 semaines apres validation du devis. La visite technique est gratuite et realisee sous 48h.`,
    },
    {
      question: `Intervenez-vous dans les villes proches de ${locationName} ?`,
      answer: `Oui, nous intervenons a ${locationName} ainsi que dans les communes voisines${nearbyCities.length > 0 ? ` : ${nearbyCities.slice(0, 4).join(', ')}` : ''}. Notre zone d'intervention couvre l'ensemble du ${departmentName} et de l'Ile-de-France.`,
    },
    {
      question: `Combien coute un marquage au sol a ${locationName} ?`,
      answer: `Le prix depend du type de marquage et de la surface. Nous proposons des devis gratuits et sans engagement a ${locationName}. Contactez-nous pour une estimation precise adaptee a votre projet.`,
    },
    {
      question: `Proposez-vous des interventions en dehors des heures de travail a ${locationName} ?`,
      answer: `Oui, nous pouvons intervenir la nuit, le week-end ou pendant les fermetures a ${locationName} pour ne pas perturber votre activite. Nous nous adaptons a vos contraintes operationnelles.`,
    },
    {
      question: `Vos marquages sont-ils conformes aux normes a ${locationName} ?`,
      answer: `Absolument. Tous nos marquages a ${locationName} respectent les normes NF P98-350 pour le marquage routier, les normes PMR pour l'accessibilite, et les reglementations de securite industrielle. Nous fournissons une attestation de conformite a la fin de chaque intervention.`,
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

  // FAQs personnalisees pour cette ville
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
        title={`Questions frequentes - ${location.name}`}
        description={`Tout ce que vous devez savoir sur nos services de marquage au sol a ${location.name}`}
        faqs={cityFaqs}
      />

      {/* CTA */}
      <CTABanner
        title={`Besoin d'un marquage au sol a ${location.name} ?`}
        description={`Notre equipe intervient rapidement a ${location.name} et dans tout le ${location.department}. Devis gratuit sous 24h.`}
      />
    </>
  );
}
