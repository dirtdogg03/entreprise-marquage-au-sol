'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/lib/data/services';
import { departments } from '@/lib/data/departments';

// Filter services by category
const marquageServices = services.filter(s => s.category === 'marquage');
const signalisationServices = services.filter(s => s.category === 'signalisation');

// Split departments for 2 columns
const departmentsCol1 = departments.slice(0, 4);
const departmentsCol2 = departments.slice(4, 8);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileAccordion = (key: string) => {
    setMobileAccordion(mobileAccordion === key ? null : key);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b-2 border-route-500'
          : 'bg-white/90 backdrop-blur-sm border-b border-asphalt-200'
      }`}
    >
      <nav ref={menuRef} className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo - Signal Expert Style */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            {/* Logo box with prism effect */}
            <div className="relative">
              <div className="w-10 h-10 bg-route-500 flex items-center justify-center border-2 border-asphalt-900 transform group-hover:-translate-y-0.5 transition-transform">
                <span className="text-asphalt-900 font-black text-xl">M</span>
              </div>
              {/* Prism shadow */}
              <div className="absolute top-1 left-1 w-10 h-10 border-2 border-route-500 opacity-30 -z-10" />
            </div>
            <div className="hidden sm:block">
              <span className="font-black text-asphalt-800 text-lg tracking-tight">ENTREPRISE</span>
              <span className="font-black text-route-500 text-lg tracking-tight ml-1">MARQUAGE</span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2.5 text-asphalt-600 hover:text-route-500 hover:bg-asphalt-100 transition-colors border border-asphalt-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation with Mega Menu */}
        <div className="hidden lg:flex lg:gap-x-6 lg:items-center">
          {/* Accueil */}
          <Link href="/" className="nav-link-signal relative py-2">
            Accueil
          </Link>

          {/* Services Mega Menu */}
          <div className="relative">
            <button
              className={`nav-link-signal relative py-2 flex items-center gap-1 ${activeMenu === 'services' ? 'text-route-600' : ''}`}
              onClick={() => setActiveMenu(activeMenu === 'services' ? null : 'services')}
              onMouseEnter={() => setActiveMenu('services')}
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${activeMenu === 'services' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <AnimatePresence>
              {activeMenu === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white border-2 border-asphalt-200 shadow-xl"
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <div className="grid grid-cols-2 gap-0">
                    {/* Marquage au Sol Column */}
                    <div className="p-6 border-r border-asphalt-200">
                      <h3 className="label-mono text-route-600 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-route-500"></span>
                        Marquage au Sol
                      </h3>
                      <ul className="space-y-2">
                        {marquageServices.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="block text-sm text-asphalt-600 hover:text-route-600 hover:bg-asphalt-50 px-3 py-2 transition-colors"
                              onClick={() => setActiveMenu(null)}
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Signalisation Verticale Column */}
                    <div className="p-6">
                      <h3 className="label-mono text-route-600 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-route-500"></span>
                        Signalisation Verticale
                      </h3>
                      <ul className="space-y-2">
                        {signalisationServices.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="block text-sm text-asphalt-600 hover:text-route-600 hover:bg-asphalt-50 px-3 py-2 transition-colors"
                              onClick={() => setActiveMenu(null)}
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {/* View all services link */}
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-route-600 hover:text-route-700"
                        onClick={() => setActiveMenu(null)}
                      >
                        Voir tous les services
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Zones d'intervention Mega Menu */}
          <div className="relative">
            <button
              className={`nav-link-signal relative py-2 flex items-center gap-1 ${activeMenu === 'zones' ? 'text-route-600' : ''}`}
              onClick={() => setActiveMenu(activeMenu === 'zones' ? null : 'zones')}
              onMouseEnter={() => setActiveMenu('zones')}
            >
              Zones d&apos;intervention
              <svg className={`w-4 h-4 transition-transform ${activeMenu === 'zones' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <AnimatePresence>
              {activeMenu === 'zones' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white border-2 border-asphalt-200 shadow-xl"
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <div className="grid grid-cols-2 gap-0">
                    {/* Column 1 - Petite couronne */}
                    <div className="p-6 border-r border-asphalt-200">
                      <h3 className="label-mono text-route-600 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-route-500"></span>
                        Petite Couronne
                      </h3>
                      <ul className="space-y-3">
                        {departmentsCol1.map((dept) => (
                          <li key={dept.code}>
                            <Link
                              href={`/departements/${dept.slug}`}
                              className="block group"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="flex items-center gap-2 text-asphalt-800 group-hover:text-route-600 transition-colors">
                                <span className="inline-flex items-center justify-center w-8 h-6 bg-asphalt-100 text-xs font-bold text-asphalt-700 group-hover:bg-route-500 group-hover:text-asphalt-900 transition-colors">
                                  {dept.code}
                                </span>
                                <span className="text-sm font-medium">{dept.name}</span>
                              </div>
                              <p className="text-xs text-asphalt-500 mt-1 ml-10 line-clamp-1">
                                {dept.mainCities.slice(0, 3).join(', ')}...
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2 - Grande couronne */}
                    <div className="p-6">
                      <h3 className="label-mono text-route-600 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-route-500"></span>
                        Grande Couronne
                      </h3>
                      <ul className="space-y-3">
                        {departmentsCol2.map((dept) => (
                          <li key={dept.code}>
                            <Link
                              href={`/departements/${dept.slug}`}
                              className="block group"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="flex items-center gap-2 text-asphalt-800 group-hover:text-route-600 transition-colors">
                                <span className="inline-flex items-center justify-center w-8 h-6 bg-asphalt-100 text-xs font-bold text-asphalt-700 group-hover:bg-route-500 group-hover:text-asphalt-900 transition-colors">
                                  {dept.code}
                                </span>
                                <span className="text-sm font-medium">{dept.name}</span>
                              </div>
                              <p className="text-xs text-asphalt-500 mt-1 ml-10 line-clamp-1">
                                {dept.mainCities.slice(0, 3).join(', ')}...
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer with call to action */}
                  <div className="px-6 py-4 bg-asphalt-50 border-t border-asphalt-200 flex items-center justify-between">
                    <p className="text-sm text-asphalt-600">
                      <span className="font-medium text-route-600">8 departements</span> couverts en Ile-de-France
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-route-600 hover:text-route-700"
                      onClick={() => setActiveMenu(null)}
                    >
                      Verifier ma zone
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Blog */}
          <Link href="/blog" className="nav-link-signal relative py-2">
            Blog
          </Link>

          {/* Contact */}
          <Link href="/contact" className="nav-link-signal relative py-2">
            Contact
          </Link>
        </div>

        {/* CTA Button - Signal Expert style */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-6">
          <a
            href="tel:+33123456789"
            className="label-mono text-asphalt-600 hover:text-route-600 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            01 23 45 67 89
          </a>
          <Link
            href="/contact"
            className="btn-orthogonal text-sm"
          >
            Devis gratuit
          </Link>
        </div>
      </nav>

      {/* Mobile menu with accordions */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t-2 border-route-500 max-h-[80vh] overflow-y-auto"
          >
            <div className="px-6 py-4">
              {/* Accueil */}
              <Link
                href="/"
                className="block px-4 py-3 nav-link-signal border-b border-asphalt-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>

              {/* Services Accordion */}
              <div className="border-b border-asphalt-100">
                <button
                  className="flex items-center justify-between w-full px-4 py-3 nav-link-signal"
                  onClick={() => toggleMobileAccordion('services')}
                >
                  <span>Services</span>
                  <svg className={`w-5 h-5 transition-transform ${mobileAccordion === 'services' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileAccordion === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-asphalt-50 overflow-hidden"
                    >
                      {/* Marquage au Sol */}
                      <div className="px-4 py-3">
                        <h4 className="label-mono text-route-600 text-xs mb-2">Marquage au Sol</h4>
                        <ul className="space-y-1">
                          {marquageServices.map((service) => (
                            <li key={service.id}>
                              <Link
                                href={`/services/${service.slug}`}
                                className="block text-sm text-asphalt-600 hover:text-route-600 py-1.5 pl-4"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Signalisation Verticale */}
                      <div className="px-4 py-3 border-t border-asphalt-200">
                        <h4 className="label-mono text-route-600 text-xs mb-2">Signalisation Verticale</h4>
                        <ul className="space-y-1">
                          {signalisationServices.map((service) => (
                            <li key={service.id}>
                              <Link
                                href={`/services/${service.slug}`}
                                className="block text-sm text-asphalt-600 hover:text-route-600 py-1.5 pl-4"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* View all */}
                      <div className="px-4 py-3 border-t border-asphalt-200">
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-2 text-sm font-medium text-route-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Voir tous les services
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Zones d'intervention Accordion */}
              <div className="border-b border-asphalt-100">
                <button
                  className="flex items-center justify-between w-full px-4 py-3 nav-link-signal"
                  onClick={() => toggleMobileAccordion('zones')}
                >
                  <span>Zones d&apos;intervention</span>
                  <svg className={`w-5 h-5 transition-transform ${mobileAccordion === 'zones' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileAccordion === 'zones' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-asphalt-50 overflow-hidden"
                    >
                      <div className="px-4 py-3">
                        <ul className="space-y-2">
                          {departments.map((dept) => (
                            <li key={dept.code}>
                              <Link
                                href={`/departements/${dept.slug}`}
                                className="flex items-center gap-3 py-2 group"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <span className="inline-flex items-center justify-center w-8 h-6 bg-asphalt-200 text-xs font-bold text-asphalt-700 group-hover:bg-route-500 group-hover:text-asphalt-900 transition-colors">
                                  {dept.code}
                                </span>
                                <div>
                                  <span className="text-sm font-medium text-asphalt-800 group-hover:text-route-600 transition-colors">{dept.name}</span>
                                  <p className="text-xs text-asphalt-500">{dept.mainCities.slice(0, 2).join(', ')}...</p>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Blog */}
              <Link
                href="/blog"
                className="block px-4 py-3 nav-link-signal border-b border-asphalt-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="block px-4 py-3 nav-link-signal border-b border-asphalt-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* CTA */}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+33123456789"
                  className="flex items-center gap-3 px-4 py-3 label-mono text-asphalt-700"
                >
                  <svg className="w-5 h-5 text-route-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  01 23 45 67 89
                </a>
                <Link
                  href="/contact"
                  className="block btn-orthogonal text-center w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Devis gratuit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
