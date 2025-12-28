'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Location, locations, getLocationBySlug } from '@/lib/data/locations';

interface NearbyCitiesProps {
  location: Location;
}

export default function NearbyCities({ location }: NearbyCitiesProps) {
  // Trouver les villes proches qui existent dans notre liste
  const nearbyCities = location.nearby
    .map(name => {
      // Chercher par nom exact
      return locations.find(l => l.name === name);
    })
    .filter((l): l is Location => l !== undefined);

  // Si pas assez de villes proches, ajouter d'autres villes du même département
  if (nearbyCities.length < 4) {
    const sameDeptCities = locations.filter(
      l => l.departmentCode === location.departmentCode &&
           l.id !== location.id &&
           !nearbyCities.some(nc => nc.id === l.id)
    );
    nearbyCities.push(...sameDeptCities.slice(0, 4 - nearbyCities.length));
  }

  if (nearbyCities.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-asphalt-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <span className="label-mono-route mb-4 block">Zone d&apos;intervention</span>
          <h2 className="heading-display-md">
            Villes <span className="text-route-500">Proches</span> de {location.name}
          </h2>
          <p className="mt-4 text-lg text-asphalt-600">
            Nous intervenons également dans les communes voisines de {location.name}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {nearbyCities.slice(0, 8).map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={`/villes/${city.slug}`} className="group block">
                <div className="card-signal p-5 border-2 border-asphalt-100 hover:border-route-500 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-route-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="label-mono text-asphalt-500">{city.departmentCode}</span>
                  </div>
                  <h3 className="text-lg font-bold text-asphalt-800 group-hover:text-route-600 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-asphalt-500 mt-1">
                    {city.postalCodes[0]}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Lien vers la page departement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href={`/departements/${location.departmentCode}`}
            className="btn-orthogonal-inverse inline-flex items-center gap-2"
          >
            Voir toutes les villes du {location.department}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
