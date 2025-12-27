'use client';

import { useState } from 'react';
import Link from 'next/link';
import { services } from '@/lib/data/services';
import { locations, getLocationsByDepartment } from '@/lib/data/locations';
import { categories } from '@/lib/data/articles';

const departments = [
  { code: '75', name: 'Paris' },
  { code: '92', name: 'Hauts-de-Seine' },
  { code: '93', name: 'Seine-Saint-Denis' },
  { code: '94', name: 'Val-de-Marne' },
  { code: '91', name: 'Essonne' },
  { code: '78', name: 'Yvelines' },
  { code: '95', name: "Val-d'Oise" },
  { code: '77', name: 'Seine-et-Marne' },
];

const footerNavigation = {
  services: services.slice(0, 6).map(s => ({ name: s.name, href: `/services/${s.slug}` })),
  company: [
    { name: 'A propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Mentions legales', href: '/mentions-legales' },
    { name: 'Politique de confidentialite', href: '/politique-confidentialite' },
  ],
};

export default function Footer() {
  const [expandedDept, setExpandedDept] = useState<string | null>(null);

  const toggleDepartment = (code: string) => {
    setExpandedDept(expandedDept === code ? null : code);
  };

  return (
    <footer className="bg-asphalt-900 grid-bg-dark">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo & Description */}
          <div className="space-y-6">
            {/* Logo - Signal Expert style */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-route-500 flex items-center justify-center border-2 border-white">
                  <span className="text-asphalt-900 font-black text-xl">M</span>
                </div>
                {/* Prism shadow */}
                <div className="absolute top-1 left-1 w-10 h-10 border-2 border-route-500 opacity-30 -z-10" />
              </div>
              <div>
                <span className="text-white font-black text-lg tracking-tight">ENTREPRISE</span>
                <span className="text-route-500 font-black text-lg tracking-tight ml-1">MARQUAGE</span>
              </div>
            </div>

            <p className="text-asphalt-300 text-sm max-w-xs leading-relaxed">
              Specialiste du marquage au sol et de la signalisation en Ile-de-France.
              Parking, entrepot, industriel, PMR.
            </p>

            {/* Contact boxes - Signal Expert style */}
            <div className="space-y-3">
              <a href="tel:+33123456789" className="flex items-center gap-3 text-white hover:text-route-500 transition-colors group">
                <div className="icon-signal w-10 h-10 group-hover:bg-route-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <span className="label-mono text-asphalt-300 block">Appelez-nous</span>
                  <span className="font-bold">01 23 45 67 89</span>
                </div>
              </a>
              <a href="mailto:contact@entreprise-marquage.fr" className="flex items-center gap-3 text-white hover:text-route-500 transition-colors group">
                <div className="icon-signal w-10 h-10 group-hover:bg-route-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <span className="label-mono text-asphalt-300 block">Email</span>
                  <span className="font-bold text-sm">contact@entreprise-marquage.fr</span>
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Services */}
              <div>
                <h3 className="label-mono text-route-500 mb-4">Services</h3>
                <ul className="space-y-3">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-asphalt-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Zones d'intervention - Accordion par département */}
              <div className="mt-10 md:mt-0">
                <h3 className="label-mono text-route-500 mb-4">Zones d&apos;intervention</h3>
                <ul className="space-y-2">
                  {departments.map((dept) => {
                    const deptLocations = getLocationsByDepartment(dept.code);
                    const isExpanded = expandedDept === dept.code;

                    return (
                      <li key={dept.code}>
                        <button
                          onClick={() => toggleDepartment(dept.code)}
                          className="flex items-center justify-between w-full text-sm text-asphalt-300 hover:text-white transition-colors py-1 text-left"
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-route-500 font-mono text-xs">{dept.code}</span>
                            {dept.name}
                          </span>
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>

                        {/* Liste des villes du département */}
                        <div
                          className={`overflow-hidden transition-all duration-200 ${
                            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <ul className="pl-6 pt-2 pb-1 space-y-1 border-l border-asphalt-700 ml-2">
                            {deptLocations.map((location) => (
                              <li key={location.id}>
                                <Link
                                  href={`/villes/${location.slug}`}
                                  className="text-sm text-asphalt-300 hover:text-route-500 transition-colors"
                                >
                                  {location.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Blog */}
              <div>
                <h3 className="label-mono text-route-500 mb-4">Blog</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/blog" className="text-sm text-asphalt-300 hover:text-white transition-colors font-medium">
                      Tous les articles
                    </Link>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link href={`/blog/${category.slug}`} className="text-sm text-asphalt-300 hover:text-white transition-colors">
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Entreprise & Legal */}
              <div className="mt-10 md:mt-0">
                <h3 className="label-mono text-route-500 mb-4">Entreprise</h3>
                <ul className="space-y-3">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-asphalt-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h3 className="label-mono text-route-500 mb-4 mt-8">Legal</h3>
                <ul className="space-y-3">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-asphalt-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Signal Expert style with route border */}
        <div className="mt-12 border-t-2 border-route-500 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="label-mono text-asphalt-300">
            &copy; {new Date().getFullYear()} Entreprise Marquage au Sol. Tous droits reserves.
          </p>
          <p className="label-mono text-asphalt-300 flex items-center gap-2">
            <svg className="w-4 h-4 text-route-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Intervention en Ile-de-France
          </p>
        </div>
      </div>
    </footer>
  );
}
