'use client';

import { motion } from 'framer-motion';

interface ServiceLocalContentProps {
  content: {
    introduction: string;
    localContext: string;
    serviceDescription: string;
  };
  locationName: string;
  serviceName: string;
}

export default function ServiceLocalContent({
  content,
  locationName,
  serviceName,
}: ServiceLocalContentProps) {
  return (
    <section className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-stone-700 leading-relaxed">
              {content.introduction}
            </p>
          </div>

          {/* Contexte local */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-stone-800">
                {serviceName} a {locationName}
              </h2>
            </div>
            <p className="text-stone-600 leading-relaxed">
              {content.localContext}
            </p>
          </div>

          {/* Description du service */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-stone-800">
                Nos prestations
              </h2>
            </div>
            <p className="text-stone-600 leading-relaxed">
              {content.serviceDescription}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
