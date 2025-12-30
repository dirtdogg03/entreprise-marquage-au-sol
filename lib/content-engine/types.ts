/**
 * Content Engine - Types et Interfaces
 *
 * Systeme de generation de contenu unique pour pages service+ville
 * Objectif: 60-70% de contenu unique par page (vs 25-30% actuel)
 */

// ═══════════════════════════════════════════════════════════════════
// INTERFACES LOCATION ENRICHIE
// ═══════════════════════════════════════════════════════════════════

export type RegionPosition = 'nord' | 'sud' | 'est' | 'ouest' | 'centre';

export type CityType = 'prefecture' | 'sous-prefecture' | 'chef-lieu' | 'commune';

export type EconomicProfile = 'residentiel' | 'commercial' | 'industriel' | 'mixte' | 'tertiaire';

export type ZoneType =
  | 'zone-commerciale'
  | 'zone-industrielle'
  | 'zone-logistique'
  | 'zone-artisanale'
  | 'quartier-affaires'
  | 'zone-residentielle'
  | 'centre-ville'
  | 'gare'
  | 'aeroport';

export type LandmarkType =
  | 'centre-commercial'
  | 'zone-activite'
  | 'gare'
  | 'hopital'
  | 'universite'
  | 'stade'
  | 'marche'
  | 'monument'
  | 'centre-ville'
  | 'parc'
  | 'quartier-affaires'
  | 'aeroport';

export type PricingZone = 'premium' | 'standard' | 'economique';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Landmark {
  name: string;
  type: LandmarkType;
}

export interface EconomicContext {
  majorEmployers?: string[];
  businessSectors?: string[];
  hasIndustrialZone?: boolean;
  hasCommercialCenter?: boolean;
  hasLogisticsHub?: boolean;
}

/**
 * Interface Location enrichie avec donnees pour generation de contenu unique
 */
export interface EnrichedLocation {
  // Donnees de base (existantes)
  id: string;
  slug: string;
  name: string;
  department: string;
  departmentCode: string;
  population: number;
  postalCodes: string[];
  nearby: string[];

  // Nouvelles donnees d'enrichissement
  coordinates?: Coordinates;
  distanceFromParis?: number;
  regionPosition?: RegionPosition;
  cityType?: CityType;
  economicProfile?: EconomicProfile;
  zoneTypes?: ZoneType[];
  landmarks?: Landmark[];
  economicContext?: EconomicContext;
  pricingZone?: PricingZone;
}

// ═══════════════════════════════════════════════════════════════════
// INTERFACES SERVICE
// ═══════════════════════════════════════════════════════════════════

export interface ServiceInfo {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: 'marquage' | 'signalisation';
}

// ═══════════════════════════════════════════════════════════════════
// INTERFACES PATTERNS
// ═══════════════════════════════════════════════════════════════════

export type ConditionFn = (city: EnrichedLocation, service: ServiceInfo) => boolean;

export interface SentencePattern {
  id: string;
  condition: ConditionFn;
  templates: string[];
  weight: number;
}

export interface PatternCategory {
  introduction: SentencePattern[];
  localContext: SentencePattern[];
  serviceDescription: SentencePattern[];
}

// ═══════════════════════════════════════════════════════════════════
// INTERFACES FAQ
// ═══════════════════════════════════════════════════════════════════

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQTemplate {
  questionTemplate: string;
  answerTemplate: string;
  category: 'pricing' | 'delay' | 'specific' | 'quality' | 'coverage';
  conditions?: ConditionFn;
}

export interface FAQPools {
  pricing: FAQTemplate[];
  delay: FAQTemplate[];
  specific: FAQTemplate[];
  quality: FAQTemplate[];
  coverage: FAQTemplate[];
}

// ═══════════════════════════════════════════════════════════════════
// INTERFACES CONTENU GENERE
// ═══════════════════════════════════════════════════════════════════

export interface GeneratedContent {
  introduction: string;
  localContext: string;
  serviceDescription: string;
}

export interface GeneratedPageContent {
  metaTitle: string;
  metaDescription: string;
  content: GeneratedContent;
  faqs: FAQ[];
}

// ═══════════════════════════════════════════════════════════════════
// INTERFACES VARIABLES
// ═══════════════════════════════════════════════════════════════════

export interface ContentVariables {
  ville: string;
  villeLower: string;
  department: string;
  departmentCode: string;
  population: string;
  populationRaw: number;
  service: string;
  serviceLower: string;
  distanceFromParis?: string;
  regionPosition?: string;
  cityType?: string;
  economicProfile?: string;
  pricingZone?: string;
  nearbyFirst?: string;
  nearbyList?: string;
  landmarkFirst?: string;
  zoneTypeFirst?: string;
}
