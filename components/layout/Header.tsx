'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b-2 border-route-500'
          : 'bg-white/90 backdrop-blur-sm border-b border-asphalt-200'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
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

        {/* Desktop navigation - JetBrains Mono uppercase */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link-signal relative py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-route-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
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

      {/* Mobile menu - Signal Expert style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t-2 border-route-500"
          >
            <div className="space-y-1 px-6 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 nav-link-signal border-b border-asphalt-100 last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
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
