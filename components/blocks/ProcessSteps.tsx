'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Prise de Contact',
    description: 'Appelez-nous ou remplissez le formulaire. Un expert vous rappelle sous 2h pour comprendre votre projet.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Visite Technique',
    description: 'Un technicien se deplace gratuitement pour evaluer les surfaces, prendre les mesures et definir les besoins.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Devis Detaille',
    description: 'Reception de votre devis gratuit sous 24h avec plan, materiaux proposes et planning d\'intervention.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Realisation',
    description: 'Intervention rapide par nos equipes certifiees. Travail soigne, propre et conforme aux normes en vigueur.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <section className="section-padding bg-secondary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-12 lg:mb-16"
        >
          <h2 className="heading-lg text-secondary-900">
            Comment ca <span className="text-primary-600">fonctionne</span> ?
          </h2>
          <p className="mt-4 text-lg text-secondary-600">
            Un processus simple et efficace pour un resultat parfait
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Step card */}
                <div className="card h-full">
                  {/* Number badge */}
                  <div className="absolute -top-3 left-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white font-bold text-sm shadow-primary">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 icon-box group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 text-lg font-semibold text-secondary-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-secondary-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-3 transform z-10">
                    <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
