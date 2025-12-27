'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const departments = [
  { code: '75', name: 'Paris', slug: 'paris' },
  { code: '92', name: 'Hauts-de-Seine', slug: 'hauts-de-seine' },
  { code: '93', name: 'Seine-Saint-Denis', slug: 'seine-saint-denis' },
  { code: '94', name: 'Val-de-Marne', slug: 'val-de-marne' },
  { code: '91', name: 'Essonne', slug: 'essonne' },
  { code: '78', name: 'Yvelines', slug: 'yvelines' },
  { code: '95', name: "Val-d'Oise", slug: 'val-d-oise' },
  { code: '77', name: 'Seine-et-Marne', slug: 'seine-et-marne' },
];

export default function LocalCoverage() {
  return (
    <section className="py-16 lg:py-24 bg-asphalt-900 grid-bg-dark relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-mono text-route-500 mb-4 block">Zones d&apos;intervention</span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Intervention dans toute<br />
              <span className="text-route-500">l&apos;Ile-de-France</span>
            </h2>
            <p className="mt-4 text-lg text-asphalt-300">
              Notre equipe intervient rapidement dans tous les departements d&apos;Ile-de-France : Paris, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Essonne, Yvelines, Val-d&apos;Oise et Seine-et-Marne.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="icon-signal w-10 h-10">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24-48h</div>
                  <div className="text-sm text-asphalt-400">Intervention</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="icon-signal w-10 h-10">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Gratuit</div>
                  <div className="text-sm text-asphalt-400">Devis & visite</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-orthogonal inline-flex items-center gap-2"
              >
                Demander un devis
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Right: Departments grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.code}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={`/departements/${dept.slug}`}
                    className="group flex flex-col items-center justify-center p-6 rounded-xl bg-asphalt-800/50 ring-1 ring-asphalt-700 hover:ring-route-500/50 hover:bg-asphalt-800 transition-all duration-300"
                  >
                    <span className="text-route-500 font-mono text-2xl font-bold">{dept.code}</span>
                    <span className="mt-2 text-white font-semibold text-center group-hover:text-route-500 transition-colors text-sm">
                      {dept.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
