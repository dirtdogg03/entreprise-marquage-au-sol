/**
 * Contenu SEO varie pour les pages Service+Ville
 *
 * Chaque page a un contenu unique avec:
 * - Formulations variees (pas de copier-coller)
 * - Contexte local specifique
 * - FAQs localisees
 */

export interface ServiceLocationContent {
  serviceSlug: string;
  locationSlug: string;
  metaTitle: string;
  metaDescription: string;
  content: {
    introduction: string;
    localContext: string;
    serviceDescription: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

// Import des variations par departement
import { parisVariations } from './variations/paris';
import { hautsDeSeineVariations } from './variations/hauts-de-seine';
import { seineSaintDenisVariations } from './variations/seine-saint-denis';
import { valDeMarneVariations } from './variations/val-de-marne';
import { essonneVariations } from './variations/essonne';
import { yvelinesVariations } from './variations/yvelines';
import { valDOiseVariations } from './variations/val-d-oise';
import { seineetMarneVariations } from './variations/seine-et-marne';

// Aggregation de toutes les variations
export const allServiceLocationContent: ServiceLocationContent[] = [
  ...parisVariations,
  ...hautsDeSeineVariations,
  ...seineSaintDenisVariations,
  ...valDeMarneVariations,
  ...essonneVariations,
  ...yvelinesVariations,
  ...valDOiseVariations,
  ...seineetMarneVariations,
];

/**
 * Recupere le contenu specifique pour une combinaison service+ville
 */
export function getServiceLocationContent(
  serviceSlug: string,
  locationSlug: string
): ServiceLocationContent | undefined {
  return allServiceLocationContent.find(
    (c) => c.serviceSlug === serviceSlug && c.locationSlug === locationSlug
  );
}

/**
 * Verifie si un contenu existe pour une combinaison
 */
export function hasServiceLocationContent(
  serviceSlug: string,
  locationSlug: string
): boolean {
  return allServiceLocationContent.some(
    (c) => c.serviceSlug === serviceSlug && c.locationSlug === locationSlug
  );
}
