'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTABannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  phone?: string;
}

export default function CTABanner({
  title = "Besoin d'un devis pour votre projet de marquage ?",
  description = "Notre equipe vous repond sous 24h. Devis gratuit et sans engagement.",
  ctaText = "Demander un devis gratuit",
  ctaHref = "/contact",
  phone = "01 23 45 67 89"
}: CTABannerProps) {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600" />
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={ctaHref}
              className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary-600 shadow-lg hover:bg-primary-50 transition-all duration-300 hover:scale-105"
            >
              {ctaText}
            </Link>
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 rounded-xl bg-primary-700/50 px-8 py-4 text-lg font-semibold text-white hover:bg-primary-700 transition-all duration-300 ring-1 ring-white/20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
