'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    number: '01',
    title: 'Expertise Certifiee',
    description: 'Plus de 15 ans d\'experience dans le marquage au sol professionnel. Equipes formees et certifiees.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Intervention Rapide',
    description: 'Intervention sous 24 a 48h en Ile-de-France. Travail soigne sans perturber votre activite.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Materiaux Premium',
    description: 'Peintures et resines professionnelles haute resistance. Durabilite garantie 5 ans minimum.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Conformite Garantie',
    description: 'Respect strict des normes NF, PMR et reglementations en vigueur. Attestation de conformite fournie.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pourquoi choisir <span className="text-primary-500">notre entreprise</span> ?
          </h2>
          <p className="mt-4 text-lg text-secondary-400">
            Des solutions professionnelles pour tous vos besoins en marquage au sol
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex gap-6 rounded-2xl bg-secondary-900 p-6 ring-1 ring-secondary-800 hover:ring-primary-500/30 transition-all"
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-secondary-900 transition-all duration-300">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-bold text-primary-500/30">{benefit.number}</span>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-secondary-400">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
