'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroBlockProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showStats?: boolean;
}

const stats = [
  { value: '15+', label: 'Annees d\'experience' },
  { value: '2000+', label: 'Projets realises' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '24h', label: 'Intervention rapide' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function HeroBlock({
  title,
  subtitle,
  description,
  ctaText = 'Demander un devis',
  ctaHref = '/contact',
  secondaryCtaText = 'Nos services',
  secondaryCtaHref = '/services',
  showStats = true,
}: HeroBlockProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-asphalt-50 grid-bg">
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 w-full">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {subtitle && (
            <motion.div variants={itemVariants} className="mb-6">
              <span className="badge-signal">
                {subtitle}
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={itemVariants}
            className="heading-display-xl"
          >
            {title.split(' ').map((word, i) => (
              <span
                key={i}
                className={`inline-block ${word.toLowerCase().includes('marquage') ? 'text-route-500' : ''}`}
              >
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg leading-relaxed text-asphalt-600 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href={ctaHref} className="w-full sm:w-auto">
              <span className="btn-orthogonal text-base w-full sm:w-auto flex items-center justify-center gap-2">
                {ctaText}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
            <Link href={secondaryCtaHref} className="w-full sm:w-auto">
              <span className="btn-orthogonal-inverse text-base w-full sm:w-auto flex items-center justify-center">
                {secondaryCtaText}
              </span>
            </Link>
          </motion.div>

          {/* Phone CTA - Signal Expert style */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <div className="flex items-center gap-3 text-asphalt-600">
              <div className="icon-signal-outline w-10 h-10">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <span className="label-mono">ou appelez-nous</span>
              <a
                href="tel:+33123456789"
                className="font-black text-lg text-asphalt-800 hover:text-route-500 transition-colors"
              >
                01 23 45 67 89
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Cards - Signal Expert style with prism-border */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 lg:mt-20"
          >
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="group"
                >
                  <div className="stat-box h-full group-hover:border-asphalt-800 transition-colors">
                    <div className="stat-box-value group-hover:text-route-600 transition-colors">
                      {stat.value}
                    </div>
                    <div className="stat-box-label">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
