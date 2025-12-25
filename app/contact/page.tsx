import { Metadata } from 'next';
import { generateContactMetadata } from '@/lib/metadata';
import ContactForm from '@/components/forms/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = generateContactMetadata();

export default function ContactPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative py-16 lg:py-24 bg-hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="text-primary-500">Contactez</span>-nous
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-300">
              Demandez votre devis gratuit pour votre projet de marquage au sol. Notre equipe vous repond sous 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 lg:py-24 bg-secondary-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
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

      {/* Map section placeholder */}
      <section className="py-16 bg-secondary-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white">
              Zone d&apos;intervention
            </h2>
            <p className="mt-4 text-secondary-400">
              Nous intervenons dans toute l&apos;Ile-de-France
            </p>
          </div>
          <div className="rounded-2xl bg-secondary-900 p-8 ring-1 ring-secondary-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-500">75</div>
                <div className="text-sm text-secondary-400">Paris</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-500">92</div>
                <div className="text-sm text-secondary-400">Hauts-de-Seine</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-500">93</div>
                <div className="text-sm text-secondary-400">Seine-Saint-Denis</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-500">94</div>
                <div className="text-sm text-secondary-400">Val-de-Marne</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-500">91</div>
                <div className="text-sm text-secondary-400">Essonne</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-500">78</div>
                <div className="text-sm text-secondary-400">Yvelines</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-500">95</div>
                <div className="text-sm text-secondary-400">Val-d&apos;Oise</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-500">77</div>
                <div className="text-sm text-secondary-400">Seine-et-Marne</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
