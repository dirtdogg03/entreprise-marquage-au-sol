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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function ServiceHero({ service, location }: ServiceHeroProps) {
  // SEO Exact Match: H1 sans preposition "a" pour matcher les requetes utilisateurs
  // Ex: "Marquage au Sol Parking Paris" au lieu de "Marquage au Sol Parking a Paris"
  const title = location
    ? `${service.name} ${location.name}`
    : service.name;

  // Subtitle avec "a" pour langage naturel
  const subtitle = location
    ? `Expert en ${service.name.toLowerCase()} a ${location.name} (${location.department})`
    : `Service de ${service.name.toLowerCase()} professionnel en Ile-de-France`;

  return (
    <section className="relative py-16 lg:py-24 bg-asphalt-50 grid-bg overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb - Signal Expert style */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <ol className="flex items-center gap-2 label-mono">
            <li>
              <Link href="/" className="hover:text-route-600 transition-colors">
                Accueil
              </Link>
            </li>
            <li className="text-asphalt-400">/</li>
            <li>
              <Link href="/services" className="hover:text-route-600 transition-colors">
                Services
              </Link>
            </li>
            <li className="text-asphalt-400">/</li>
            {location ? (
              <>
                <li>
                  <Link href={`/services/${service.slug}`} className="hover:text-route-600 transition-colors">
                    {service.name}
                  </Link>
                </li>
                <li className="text-asphalt-400">/</li>
                <li className="text-route-600 font-bold">{location.name}</li>
              </>
            ) : (
              <li className="text-route-600 font-bold">{service.name}</li>
            )}
          </ol>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="badge-signal mb-6">
                {service.category === 'marquage' ? 'Marquage au Sol' : 'Signalisation'}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="heading-display-lg"
            >
              {title.split(' ').map((word, i) => (
                <span
                  key={i}
                  className={`inline-block ${
                    word.toLowerCase().includes('marquage') || (location && word === location.name)
                      ? 'text-route-500'
                      : ''
                  }`}
                >
                  {word}{' '}
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-relaxed text-asphalt-600 max-w-xl"
            >
              {service.description}
            </motion.p>

            {/* Quick benefits - Signal Expert style */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              {service.benefits.slice(0, 4).map((benefit) => (
                <span
                  key={benefit}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-asphalt-200 text-sm text-asphalt-700"
                >
                  <svg className="w-4 h-4 text-route-500" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {benefit}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons - Signal Expert orthogonal style */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <span className="btn-orthogonal text-base w-full sm:w-auto flex items-center justify-center gap-2">
                  Demander un devis gratuit
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
              <a
                href="tel:+33123456789"
                className="btn-orthogonal-inverse text-base w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                01 23 45 67 89
              </a>
            </motion.div>
          </motion.div>

          {/* Stats card - Signal Expert prism-border style */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="prism-border p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="stat-box">
                  <div className="stat-box-value">15+</div>
                  <div className="stat-box-label">Annees d&apos;experience</div>
                </div>
                <div className="stat-box">
                  <div className="stat-box-value">2000+</div>
                  <div className="stat-box-label">Projets realises</div>
                </div>
                <div className="stat-box">
                  <div className="stat-box-value">24-48h</div>
                  <div className="stat-box-label">Intervention rapide</div>
                </div>
                <div className="stat-box">
                  <div className="stat-box-value">5 ans</div>
                  <div className="stat-box-label">Garantie minimum</div>
                </div>
              </div>

              {/* Trust badges - Signal Expert style */}
              <div className="mt-6 flex items-center justify-center gap-6 pt-6 border-t-2 border-route-500">
                <div className="flex items-center gap-2">
                  <div className="icon-signal w-8 h-8">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <span className="label-mono text-asphalt-700">Certifie NF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="icon-signal w-8 h-8">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <span className="label-mono text-asphalt-700">Conforme PMR</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
