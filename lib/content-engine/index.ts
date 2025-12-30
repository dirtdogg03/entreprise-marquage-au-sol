/**
 * Content Engine - Main Export
 *
 * Systeme de generation de contenu unique pour pages service+ville
 * Objectif: 60-70% de contenu unique par page (vs 25-30% actuel)
 *
 * Usage:
 * ```typescript
 * import { generatePageContent } from '@/lib/content-engine';
 *
 * const content = generatePageContent(enrichedCity, serviceInfo);
 * ```
 */

// Types
export type {
  RegionPosition,
  CityType,
  EconomicProfile,
  ZoneType,
  LandmarkType,
  PricingZone,
  Coordinates,
  Landmark,
  EconomicContext,
  EnrichedLocation,
  ServiceInfo,
  ConditionFn,
  SentencePattern,
  PatternCategory,
  FAQ,
  FAQTemplate,
  FAQPools,
  GeneratedContent,
  GeneratedPageContent,
  ContentVariables,
} from './types';

// Generator functions
export {
  generateUniqueContent,
  generatePageContent,
  prepareVariables,
  substituteVariables,
  getContentVariant,
  estimateUniqueness,
  validateContent,
  debugPageGeneration,
} from './generator';

// FAQ pools
export {
  faqPools,
  selectFAQs,
  getAllApplicableFAQs,
} from './faq-pools';

// Sentence patterns (for extension/debugging)
export {
  introductionPatterns,
  localContextPatterns,
  serviceDescriptionPatterns,
} from './sentence-patterns';
