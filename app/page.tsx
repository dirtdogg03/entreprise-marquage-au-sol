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
        subtitle="Entreprise Marquage au Sol - Ile-de-France"
        title="Expert en Marquage au Sol Professionnel"
        description="Specialiste du marquage au sol pour entreprises, parkings et entrepots en Ile-de-France. Intervention rapide, materiaux premium et conformite garantie."
        ctaText="Demander un devis gratuit"
        ctaHref="/contact"
        secondaryCtaText="Decouvrir nos services"
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
        title="Votre projet de marquage merite des experts"
        description="Devis gratuit sous 24h. Plus de 2000 projets realises en Ile-de-France."
        ctaText="Obtenir mon devis gratuit"
        ctaHref="/contact"
      />
    </>
  );
}
