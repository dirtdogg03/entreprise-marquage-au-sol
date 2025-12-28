'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '@/lib/data/services';
import { Location } from '@/lib/data/locations';
import { departments, getDepartmentByCode } from '@/lib/data/departments';

interface ServiceLocationsProps {
  service: Service;
  locations: Location[];
}

export default function ServiceLocations({ service, locations }: ServiceLocationsProps) {
  // Group locations by department
  const locationsByDepartment = departments.map(dept => ({
    department: dept,
    locations: locations.filter(loc => loc.departmentCode === dept.code)
  })).filter(group => group.locations.length > 0);

  // State for expanded departments (all collapsed by default)
  const [expandedDepts, setExpandedDepts] = useState<Set<string>>(new Set());

  const toggleDepartment = (code: string) => {
    setExpandedDepts(prev => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedDepts(new Set(locationsByDepartment.map(g => g.department.code)));
  };

  const collapseAll = () => {
    setExpandedDepts(new Set());
  };

  return (
    <section className="py-16 lg:py-24 bg-asphalt-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-asphalt-900 sm:text-4xl">
            {service.name} en{' '}
            <span className="text-route-600">Île-de-France</span>
          </h2>
          <p className="mt-4 text-lg text-asphalt-600">
            Nous intervenons dans toutes les villes de la region parisienne
          </p>

          {/* Expand/Collapse buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={expandAll}
              className="px-4 py-2 text-sm font-medium text-route-600 hover:text-route-500 transition-colors"
            >
              Tout deployer
            </button>
            <span className="text-asphalt-400">|</span>
            <button
              onClick={collapseAll}
              className="px-4 py-2 text-sm font-medium text-route-600 hover:text-route-500 transition-colors"
            >
              Tout replier
            </button>
          </div>
        </motion.div>

        {/* Accordion by Department */}
        <div className="space-y-4">
          {locationsByDepartment.map((group, groupIndex) => {
            const isExpanded = expandedDepts.has(group.department.code);

            return (
              <motion.div
                key={group.department.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
                className="rounded-xl bg-white ring-1 ring-asphalt-200 overflow-hidden shadow-sm"
              >
                {/* Department Header (Clickable) */}
                <button
                  onClick={() => toggleDepartment(group.department.code)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-asphalt-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-route-500/10 text-route-600">
                      <span className="text-lg font-bold">{group.department.code}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-asphalt-900">
                        {group.department.name}
                      </h3>
                      <p className="text-sm text-asphalt-600">
                        {group.locations.length} ville{group.locations.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>

                  {/* Chevron Icon */}
                  <motion.svg
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-route-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </motion.svg>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                          {group.locations.map((location, index) => (
                            <motion.div
                              key={location.id}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, delay: index * 0.03 }}
                            >
                              <Link
                                href={`/services/${service.slug}/${location.slug}`}
                                className="group flex flex-col items-center p-3 rounded-lg bg-asphalt-50 ring-1 ring-asphalt-200 hover:ring-route-500 hover:bg-white hover:shadow-md transition-all duration-300"
                              >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-route-500/10 text-route-600 group-hover:bg-route-500 group-hover:text-asphalt-900 transition-all duration-300 mb-2">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                  </svg>
                                </div>
                                <span className="text-sm font-medium text-asphalt-900 group-hover:text-route-600 transition-colors text-center">
                                  {location.name}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Additional cities mention for SEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-asphalt-600">
            Nous intervenons egalement dans les villes avoisinantes :{' '}
            {locations.slice(0, 5).flatMap(l => l.nearby.slice(0, 2)).join(', ')}...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
