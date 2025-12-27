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
        className="prism-border p-8 text-center"
      >
        <div className="icon-signal w-16 h-16 mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="heading-display-md text-asphalt-900 mb-3">
          Demande envoyee !
        </h3>
        <p className="text-asphalt-600 max-w-md mx-auto">
          Notre equipe vous recontactera sous 24h pour etablir votre devis gratuit.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="label-signal">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="input-signal"
            placeholder="Jean Dupont"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="label-signal">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="input-signal"
            placeholder="jean@entreprise.fr"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="label-signal">
            Telephone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="input-signal"
            placeholder="01 23 45 67 89"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="label-signal">
            Entreprise
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="input-signal"
            placeholder="Nom de votre entreprise"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="label-signal">
          Type de service *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="input-signal"
        >
          <option value="">Selectionnez un service</option>
          <option value="marquage-parking">Marquage au sol parking</option>
          <option value="marquage-entrepot">Marquage au sol entrepot</option>
          <option value="marquage-industriel">Marquage au sol industriel</option>
          <option value="places-pmr">Places handicapees PMR</option>
          <option value="signalisation">Signalisation verticale</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="label-signal">
          Description du projet *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="input-signal resize-none"
          placeholder="Decrivez votre projet : surface, type de marquage souhaite, contraintes particulieres..."
        />
      </div>

      {/* Submit button with shimmer effect */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`
          w-full btn-orthogonal py-3 text-base
          disabled:opacity-70 disabled:cursor-not-allowed
          flex items-center justify-center gap-3
          ${isSubmitting ? 'shimmer-loading shimmer-loading-dark' : ''}
        `}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Envoi en cours...</span>
          </>
        ) : (
          <>
            <span>Envoyer ma demande</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </>
        )}
      </button>

    </form>
  );
}
