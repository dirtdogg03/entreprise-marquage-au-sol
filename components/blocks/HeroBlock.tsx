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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
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
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Industrial Background */}
      <div className="absolute inset-0 bg-hero-pattern" />

      {/* Diagonal Safety Stripe - Top Left */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute top-0 left-0 w-[150%] h-3 safety-stripe -rotate-2 origin-left"
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.4, 0.6],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 w-full">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {subtitle && (
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-bold tracking-wider text-primary-400 uppercase clip-industrial-sm glass-primary">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                {subtitle}
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white leading-[0.9]"
          >
            {title.split(' ').map((word, i) => (
              <span
                key={i}
                className={`inline-block ${word.toLowerCase().includes('marquage') ? 'text-gradient' : ''}`}
              >
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 text-xl leading-relaxed text-secondary-300 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href={ctaHref} className="w-full sm:w-auto">
              <motion.div
                className="btn-primary text-lg animate-pulse-glow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{ctaText}</span>
              </motion.div>
            </Link>
            <Link href={secondaryCtaHref} className="w-full sm:w-auto">
              <motion.div
                className="btn-secondary text-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {secondaryCtaText}
              </motion.div>
            </Link>
          </motion.div>

          {/* Phone CTA with industrial style */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-600" />
            <div className="flex items-center gap-3 text-secondary-400">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-500/10 ring-1 ring-primary-500/30"
              >
                <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </motion.div>
              <span className="text-sm uppercase tracking-wider">Appelez-nous</span>
              <a
                href="tel:+33123456789"
                className="font-display text-2xl text-white hover:text-primary-500 transition-colors"
              >
                01 23 45 67 89
              </a>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-600" />
          </motion.div>
        </motion.div>

        {/* Stats - Industrial Cards */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 lg:mt-28"
          >
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="card p-6 text-center h-full">
                    <div className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary-500 group-hover:text-gradient transition-all">
                      {stat.value}
                    </div>
                    <div className="mt-3 text-sm uppercase tracking-wider text-secondary-400 group-hover:text-secondary-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom safety stripe */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
        className="absolute bottom-0 right-0 w-[150%] h-3 safety-stripe rotate-2 origin-right"
      />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-secondary-950 via-secondary-950/80 to-transparent pointer-events-none" />
    </section>
  );
}
