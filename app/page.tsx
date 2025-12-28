import HeroBlock from '@/components/blocks/HeroBlock';
import ServicesGrid from '@/components/blocks/ServicesGrid';
import BenefitsSection from '@/components/blocks/BenefitsSection';
import CTABanner from '@/components/blocks/CTABanner';
import ProcessSteps from '@/components/blocks/ProcessSteps';
import TestimonialsSection from '@/components/blocks/TestimonialsSection';
import FAQSection from '@/components/blocks/FAQSection';
import LocalCoverage from '@/components/blocks/LocalCoverage';
import BlogPreview from '@/components/blocks/BlogPreview';

export default function HomePage() {
  return (
    <>
      <HeroBlock
        subtitle="Entreprise Marquage au Sol - Île-de-France"
        title="Expert en Marquage au Sol Professionnel"
        description="Spécialiste du marquage au sol pour entreprises, parkings et entrepôts en Île-de-France. Intervention rapide, matériaux premium et conformité garantie."
        ctaText="Demander un devis gratuit"
        ctaHref="/contact"
        secondaryCtaText="Découvrir nos services"
        secondaryCtaHref="/services"
        showStats={true}
      />

      <ServicesGrid maxItems={8} />

      <BenefitsSection />

      <ProcessSteps />

      <TestimonialsSection />

      <LocalCoverage />

      <FAQSection />

      <BlogPreview maxItems={3} />

      <CTABanner
        title="Votre projet de marquage mérite des experts"
        description="Devis gratuit sous 24h. Plus de 2000 projets réalisés en Île-de-France."
        ctaText="Obtenir mon devis gratuit"
        ctaHref="/contact"
      />
    </>
  );
}
