'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Service } from '@/lib/data/services';
import { Location } from '@/lib/data/locations';

interface NearbyLocationsProps {
  service: Service;
  currentLocation: Location;
  locations: Location[];
}

export default function NearbyLocations({ service, currentLocation, locations }: NearbyLocationsProps) {
  // Get other locations in the same or nearby departments
  const nearbyLocations = locations.filter(l => l.id !== currentLocation.id);

  return (
    <section className="py-16 lg:py-24 bg-secondary-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {service.name} dans les{' '}
            <span className="text-primary-500">villes proches</span>
          </h2>
          <p className="mt-4 text-secondary-400">
            Nous intervenons egalement dans ces villes de la region
          </p>
        </motion.div>

        {/* Nearby cities from current location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold text-white mb-4 text-center">
            Villes proches de {currentLocation.name}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {currentLocation.nearby.map((city) => (
              <span
                key={city}
                className="inline-flex items-center rounded-full bg-secondary-800/50 px-4 py-2 text-sm text-secondary-300"
              >
                {city}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Other main locations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {nearbyLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <Link
                href={`/services/${service.slug}/${location.slug}`}
                className="group flex flex-col items-center p-3 rounded-xl bg-secondary-900/50 ring-1 ring-secondary-800 hover:ring-primary-500/50 hover:bg-secondary-900 transition-all duration-300"
              >
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

        {/* Other services in this location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-secondary-400 mb-4">
            Decouvrez nos autres services a {currentLocation.name}
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-400 transition-colors"
          >
            Voir tous nos services
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
