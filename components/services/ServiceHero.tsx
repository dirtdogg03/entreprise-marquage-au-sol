'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Service } from '@/lib/data/services';

interface ServiceHeroProps {
  service: Service;
  location?: {
    name: string;
    department: string;
  };
}

export default function ServiceHero({ service, location }: ServiceHeroProps) {
  const title = location
    ? `${service.name} a ${location.name}`
    : service.name;

  const subtitle = location
    ? `Service de ${service.name.toLowerCase()} professionnel a ${location.name} (${location.department})`
    : `Service de ${service.name.toLowerCase()} professionnel en Ile-de-France`;

  return (
    <section className="relative py-16 lg:py-24 bg-hero-pattern overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10" />
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <ol className="flex items-center gap-2 text-sm text-secondary-400">
            <li>
              <Link href="/" className="hover:text-primary-500 transition-colors">
                Accueil
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="hover:text-primary-500 transition-colors">
                Services
              </Link>
            </li>
            <li>/</li>
            {location ? (
              <>
                <li>
                  <Link href={`/services/${service.slug}`} className="hover:text-primary-500 transition-colors">
                    {service.name}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-primary-500">{location.name}</li>
              </>
            ) : (
              <li className="text-primary-500">{service.name}</li>
            )}
          </ol>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-400 ring-1 ring-inset ring-primary-500/30 mb-6">
              {service.category === 'marquage' ? 'Marquage au Sol' : 'Signalisation'}
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title.split(' ').map((word, i) => (
                <span key={i} className={word.toLowerCase().includes('marquage') || (location && word === location.name) ? 'text-primary-500' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p className="mt-6 text-lg leading-8 text-secondary-300">
              {service.description}
            </p>

            {/* Quick benefits */}
            <div className="mt-8 flex flex-wrap gap-3">
              {service.benefits.slice(0, 4).map((benefit) => (
                <span
                  key={benefit}
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary-800/50 px-3 py-1.5 text-sm text-secondary-300"
                >
                  <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {benefit}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-primary-500 px-8 py-4 text-lg font-semibold text-secondary-900 shadow-glow hover:bg-primary-400 transition-all duration-300 hover:shadow-glow-lg hover:scale-105 text-center"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="tel:+33123456789"
                className="rounded-xl bg-secondary-800 px-8 py-4 text-lg font-semibold text-white hover:bg-secondary-700 transition-all duration-300 ring-1 ring-secondary-700 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                01 23 45 67 89
              </a>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-secondary-900/80 backdrop-blur-sm p-8 ring-1 ring-secondary-800">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-2xl bg-secondary-800/50">
                  <div className="text-3xl font-bold text-primary-500">15+</div>
                  <div className="mt-1 text-sm text-secondary-400">Annees d&apos;experience</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-secondary-800/50">
                  <div className="text-3xl font-bold text-primary-500">2000+</div>
                  <div className="mt-1 text-sm text-secondary-400">Projets realises</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-secondary-800/50">
                  <div className="text-3xl font-bold text-primary-500">24-48h</div>
                  <div className="mt-1 text-sm text-secondary-400">Intervention rapide</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-secondary-800/50">
                  <div className="text-3xl font-bold text-primary-500">5 ans</div>
                  <div className="mt-1 text-sm text-secondary-400">Garantie minimum</div>
                </div>
              </div>

              {/* Trust badge */}
              <div className="mt-6 flex items-center justify-center gap-4 pt-6 border-t border-secondary-800">
                <div className="flex items-center gap-2 text-sm text-secondary-400">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  Certifie NF
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary-400">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  Conforme PMR
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
