'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-secondary-900/95 backdrop-blur-sm border-b border-secondary-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-secondary-900 font-bold text-xl">M</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg">Entreprise</span>
              <span className="text-primary-500 font-bold text-lg ml-1">Marquage</span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-secondary-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-secondary-300 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-secondary-900 shadow-glow hover:bg-primary-400 transition-all duration-300 hover:shadow-glow-lg"
          >
            Devis Gratuit
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-secondary-900 border-t border-secondary-800"
          >
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-secondary-300 hover:bg-secondary-800 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block rounded-lg bg-primary-500 px-3 py-2 text-base font-semibold text-secondary-900 text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Devis Gratuit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
