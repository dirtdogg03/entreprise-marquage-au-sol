'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-secondary-900 p-8 ring-1 ring-primary-500/50 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 mx-auto mb-4">
          <svg className="w-8 h-8 text-secondary-900" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Demande envoyee avec succes !
        </h3>
        <p className="text-secondary-400">
          Notre equipe vous recontactera sous 24h pour etablir votre devis gratuit.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary-300 mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl bg-secondary-900 px-4 py-3 text-white placeholder-secondary-500 ring-1 ring-secondary-800 focus:ring-primary-500 focus:outline-none transition-all"
            placeholder="Jean Dupont"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl bg-secondary-900 px-4 py-3 text-white placeholder-secondary-500 ring-1 ring-secondary-800 focus:ring-primary-500 focus:outline-none transition-all"
            placeholder="jean@entreprise.fr"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-300 mb-2">
            Telephone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl bg-secondary-900 px-4 py-3 text-white placeholder-secondary-500 ring-1 ring-secondary-800 focus:ring-primary-500 focus:outline-none transition-all"
            placeholder="01 23 45 67 89"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-secondary-300 mb-2">
            Entreprise
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-xl bg-secondary-900 px-4 py-3 text-white placeholder-secondary-500 ring-1 ring-secondary-800 focus:ring-primary-500 focus:outline-none transition-all"
            placeholder="Nom de votre entreprise"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-secondary-300 mb-2">
          Type de service *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full rounded-xl bg-secondary-900 px-4 py-3 text-white ring-1 ring-secondary-800 focus:ring-primary-500 focus:outline-none transition-all"
        >
          <option value="">Selectionnez un service</option>
          <option value="marquage-parking">Marquage parking</option>
          <option value="marquage-entrepot">Marquage entrepot</option>
          <option value="marquage-industriel">Marquage industriel</option>
          <option value="places-pmr">Places PMR</option>
          <option value="signalisation">Signalisation verticale</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary-300 mb-2">
          Description du projet *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl bg-secondary-900 px-4 py-3 text-white placeholder-secondary-500 ring-1 ring-secondary-800 focus:ring-primary-500 focus:outline-none transition-all resize-none"
          placeholder="Decrivez votre projet : surface, type de marquage souhaite, contraintes particulieres..."
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-primary-500 px-8 py-4 text-lg font-semibold text-secondary-900 shadow-glow hover:bg-primary-400 transition-all duration-300 hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer ma demande
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-secondary-500 text-center">
        En soumettant ce formulaire, vous acceptez notre politique de confidentialite.
        Vos donnees sont protegees et ne seront jamais partagees.
      </p>
    </form>
  );
}
