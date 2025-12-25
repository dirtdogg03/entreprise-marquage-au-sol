'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { locations } from '@/lib/data/locations';

export default function LocalCoverage() {
  return (
    <section className="py-16 lg:py-24 bg-secondary-900/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Intervention dans toute<br />
              <span className="text-primary-500">l&apos;Ile-de-France</span>
            </h2>
            <p className="mt-4 text-lg text-secondary-400">
              Notre equipe intervient rapidement dans tous les departements d&apos;Ile-de-France : Paris, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Essonne, Yvelines, Val-d&apos;Oise et Seine-et-Marne.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/10 text-primary-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24-48h</div>
                  <div className="text-sm text-secondary-400">Intervention</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/10 text-primary-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Gratuit</div>
                  <div className="text-sm text-secondary-400">Devis & visite</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-6 py-3 font-semibold text-secondary-900 shadow-glow hover:bg-primary-400 transition-all duration-300 hover:shadow-glow-lg hover:scale-105"
              >
                Demander un devis
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Right: Cities grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {locations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={`/services/marquage-parking/${location.slug}`}
                    className="group flex flex-col items-center justify-center p-4 rounded-xl bg-secondary-900/50 ring-1 ring-secondary-800 hover:ring-primary-500/50 hover:bg-secondary-900 transition-all duration-300"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-secondary-900 transition-all duration-300 mb-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white group-hover:text-primary-500 transition-colors text-center">
                      {location.name}
                    </span>
                    <span className="text-xs text-secondary-500">
                      {location.departmentCode}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* All departments */}
            <div className="mt-6 text-center">
              <p className="text-secondary-400 text-sm">
                Nous intervenons aussi dans toutes les villes : Versailles, Nanterre, Creteil, Saint-Quentin-en-Yvelines, Evry, Pontoise...
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
