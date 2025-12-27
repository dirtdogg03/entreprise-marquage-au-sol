'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: 'Quels types de marquage au sol proposez-vous ?',
    answer: 'Nous proposons tous types de marquage : marquage parking (places, fleches, numeros), marquage entrepot (zones de stockage, voies de circulation, zones de securite), marquage industriel, places PMR, passages pietons, et signalisation au sol specifique selon vos besoins.',
  },
  {
    question: 'Quelle est la duree de vie du marquage au sol ?',
    answer: 'La duree de vie depend du type de peinture et de l\'usage. Nos peintures professionnelles garantissent 3 a 5 ans minimum en exterieur et 5 a 10 ans en interieur. Nous utilisons des resines epoxy et peintures polyurethane haute resistance pour une durabilite maximale.',
  },
  {
    question: 'Intervenez-vous en dehors des heures de travail ?',
    answer: 'Oui, nous pouvons intervenir la nuit, le week-end ou pendant les fermetures pour ne pas perturber votre activite. Nous nous adaptons a vos contraintes operationnelles.',
  },
  {
    question: 'Quel est le delai d\'intervention ?',
    answer: 'Nous intervenons sous 24 a 48h en Ile-de-France pour les urgences. Pour les projets planifies, le delai moyen est de 1 a 2 semaines apres validation du devis. La visite technique est gratuite et realisee sous 48h.',
  },
  {
    question: 'Vos marquages sont-ils conformes aux normes ?',
    answer: 'Absolument. Tous nos marquages respectent les normes NF P98-350 pour le marquage routier, les normes PMR pour l\'accessibilite, et les reglementations de securite industrielle. Nous fournissons une attestation de conformite a la fin de chaque intervention.',
  },
  {
    question: 'Proposez-vous des devis gratuits ?',
    answer: 'Oui, le devis est 100% gratuit et sans engagement. Il comprend une visite technique sur site, une analyse de vos besoins, un plan detaille avec les mesures, et un chiffrage precis. Vous recevez le devis sous 24h apres la visite.',
  },
];

export default function FAQSection({
  title = 'Questions frequentes',
  description = 'Tout ce que vous devez savoir sur nos services de marquage au sol',
  faqs = defaultFaqs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-12 lg:mb-16"
        >
          <h2 className="heading-lg text-secondary-900">
            {title.split(' ').map((word, i) => (
              <span key={i} className={`inline-block mr-[0.3em] ${i === title.split(' ').length - 1 ? 'text-primary-600' : ''}`}>
                {word}
              </span>
            ))}
          </h2>
          <p className="mt-4 text-lg text-secondary-600">
            {description}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div
                className={`rounded-2xl bg-secondary-50 border transition-all duration-200 ${
                  openIndex === index ? 'border-primary-200 bg-primary-50/50' : 'border-secondary-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-base font-medium text-secondary-900 pr-4">{faq.question}</span>
                  <span className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                        openIndex === index ? 'bg-primary-500 text-white' : 'bg-secondary-200 text-secondary-600'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </motion.div>
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-secondary-200 pt-4">
                          <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-secondary-600 mb-4">
            Vous avez d&apos;autres questions ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-500 transition-colors"
          >
            Contactez-nous
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
