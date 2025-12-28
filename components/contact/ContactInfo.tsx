'use client';

import { motion } from 'framer-motion';

const contactDetails = [
  {
    title: 'Telephone',
    value: '01 23 45 67 89',
    href: 'tel:+33123456789',
    description: 'Du lundi au vendredi, 8h - 18h',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    value: 'contact@entreprise-marquage-au-sol.fr',
    href: 'mailto:contact@entreprise-marquage-au-sol.fr',
    description: 'Reponse sous 24h',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: 'Adresse',
    value: 'Île-de-France',
    href: null,
    description: 'Intervention dans tous les departements',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

const benefits = [
  'Devis gratuit et sans engagement',
  'Visite technique offerte',
  'Reponse sous 24h garantie',
  'Intervention rapide 24-48h',
  'Garantie 5 ans minimum',
  'Conformite normes NF et PMR',
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-asphalt-900 mb-6">
          Nos coordonnees
        </h2>

        <div className="space-y-4">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              {detail.href ? (
                <a
                  href={detail.href}
                  className="flex items-start gap-4 p-4 rounded-xl bg-asphalt-50 ring-1 ring-asphalt-200 hover:ring-route-500 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-route-500/10 text-route-600 group-hover:bg-route-500 group-hover:text-asphalt-900 transition-all duration-300">
                    {detail.icon}
                  </div>
                  <div>
                    <div className="text-sm text-asphalt-500">{detail.title}</div>
                    <div className="text-lg font-semibold text-asphalt-900 group-hover:text-route-600 transition-colors">
                      {detail.value}
                    </div>
                    <div className="text-sm text-asphalt-500">{detail.description}</div>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4 p-4 rounded-xl bg-asphalt-50 ring-1 ring-asphalt-200">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-route-500/10 text-route-600">
                    {detail.icon}
                  </div>
                  <div>
                    <div className="text-sm text-asphalt-500">{detail.title}</div>
                    <div className="text-lg font-semibold text-asphalt-900">{detail.value}</div>
                    <div className="text-sm text-asphalt-500">{detail.description}</div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl bg-route-500/10 p-6 ring-1 ring-route-500/20"
      >
        <h3 className="text-lg font-semibold text-asphalt-900 mb-4">
          Pourquoi nous contacter ?
        </h3>
        <ul className="space-y-3">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <svg className="w-5 h-5 text-route-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-asphalt-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Opening hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl bg-asphalt-50 p-6 ring-1 ring-asphalt-200"
      >
        <h3 className="text-lg font-semibold text-asphalt-900 mb-4">
          Horaires d&apos;ouverture
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-asphalt-600">Lundi - Vendredi</span>
            <span className="text-asphalt-900 font-medium">8h00 - 18h00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-asphalt-600">Samedi</span>
            <span className="text-asphalt-900 font-medium">Sur rendez-vous</span>
          </div>
          <div className="flex justify-between">
            <span className="text-asphalt-600">Dimanche</span>
            <span className="text-asphalt-500">Ferme</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-asphalt-500">
          Interventions possibles en dehors des heures d&apos;ouverture sur demande.
        </p>
      </motion.div>
    </div>
  );
}
