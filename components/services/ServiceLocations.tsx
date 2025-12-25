'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Service } from '@/lib/data/services';
import { Location } from '@/lib/data/locations';

interface ServiceLocationsProps {
  service: Service;
  locations: Location[];
}

export default function ServiceLocations({ service, locations }: ServiceLocationsProps) {
  return (
    <section className="py-16 lg:py-24 bg-secondary-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {service.name} en{' '}
            <span className="text-primary-500">Ile-de-France</span>
          </h2>
          <p className="mt-4 text-lg text-secondary-400">
            Nous intervenons dans toutes les villes de la region parisienne
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={`/services/${service.slug}/${location.slug}`}
                className="group flex flex-col items-center p-4 rounded-xl bg-secondary-900/50 ring-1 ring-secondary-800 hover:ring-primary-500/50 hover:bg-secondary-900 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-secondary-900 transition-all duration-300 mb-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-white group-hover:text-primary-500 transition-colors text-center">
                  {service.name}
                </span>
                <span className="text-xs text-primary-500 font-medium">
                  {location.name}
                </span>
                <span className="text-xs text-secondary-500">
                  ({location.departmentCode})
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional cities mention for SEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-secondary-400">
            Nous intervenons egalement dans les villes avoisinantes :{' '}
            {locations.slice(0, 5).flatMap(l => l.nearby.slice(0, 2)).join(', ')}...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
