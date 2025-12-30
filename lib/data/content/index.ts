/**
 * Contenu SEO varie pour les pages Service+Ville
 *
 * Systeme hybride:
 * 1. Contenu statique (variations manuelles) - prioritaire
 * 2. Content Engine (generation programmatique) - fallback
 *
 * Objectif: 60-70% de contenu unique par page
 */

import { generatePageContent } from '@/lib/content-engine';
import type { EnrichedLocation, ServiceInfo } from '@/lib/content-engine';
import { locations, type Location } from '@/lib/data/locations';
import { services, type Service } from '@/lib/data/services';

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
  // Indicateur de source du contenu
  source?: 'static' | 'generated';
}

// Import des variations par departement (contenu statique)
import { parisVariations } from './variations/paris';
import { hautsDeSeineVariations } from './variations/hauts-de-seine';
import { seineSaintDenisVariations } from './variations/seine-saint-denis';
import { valDeMarneVariations } from './variations/val-de-marne';
import { essonneVariations } from './variations/essonne';
import { yvelinesVariations } from './variations/yvelines';
import { valDOiseVariations } from './variations/val-d-oise';
import { seineetMarneVariations } from './variations/seine-et-marne';

// Aggregation de toutes les variations statiques
export const allStaticContent: ServiceLocationContent[] = [
  ...parisVariations,
  ...hautsDeSeineVariations,
  ...seineSaintDenisVariations,
  ...valDeMarneVariations,
  ...essonneVariations,
  ...yvelinesVariations,
  ...valDOiseVariations,
  ...seineetMarneVariations,
].map(c => ({ ...c, source: 'static' as const }));

// Alias pour compatibilite
export const allServiceLocationContent = allStaticContent;

/**
 * Convertit un Service en ServiceInfo pour le content engine
 */
function toServiceInfo(service: Service): ServiceInfo {
  return {
    id: service.id,
    slug: service.slug,
    name: service.name,
    shortDescription: service.shortDescription,
    description: service.description,
    category: service.category,
  };
}

/**
 * Convertit une Location en EnrichedLocation pour le content engine
 */
function toEnrichedLocation(location: Location): EnrichedLocation {
  return {
    id: location.id,
    slug: location.slug,
    name: location.name,
    department: location.department,
    departmentCode: location.departmentCode,
    population: location.population,
    postalCodes: location.postalCodes,
    nearby: location.nearby,
    coordinates: location.coordinates,
    distanceFromParis: location.distanceFromParis,
    regionPosition: location.regionPosition,
    cityType: location.cityType,
    economicProfile: location.economicProfile,
    zoneTypes: location.zoneTypes,
    landmarks: location.landmarks,
    economicContext: location.economicContext,
    pricingZone: location.pricingZone,
  };
}

/**
 * Recupere le contenu statique s'il existe
 */
function getStaticContent(
  serviceSlug: string,
  locationSlug: string
): ServiceLocationContent | undefined {
  return allStaticContent.find(
    (c) => c.serviceSlug === serviceSlug && c.locationSlug === locationSlug
  );
}

/**
 * Genere du contenu dynamique via le content engine
 */
function generateDynamicContent(
  serviceSlug: string,
  locationSlug: string
): ServiceLocationContent | undefined {
  // Trouver le service et la location
  const service = services.find((s) => s.slug === serviceSlug);
  const location = locations.find((l) => l.slug === locationSlug);

  if (!service || !location) {
    return undefined;
  }

  // Generer le contenu via le content engine
  const generated = generatePageContent(
    toEnrichedLocation(location),
    toServiceInfo(service)
  );

  // Convertir en ServiceLocationContent
  return {
    serviceSlug,
    locationSlug,
    metaTitle: generated.metaTitle,
    metaDescription: generated.metaDescription,
    content: {
      introduction: generated.content.introduction,
      localContext: generated.content.localContext,
      serviceDescription: generated.content.serviceDescription,
    },
    faqs: generated.faqs,
    source: 'generated',
  };
}

/**
 * Recupere le contenu pour une combinaison service+ville
 * Priorite: contenu statique > contenu genere
 */
export function getServiceLocationContent(
  serviceSlug: string,
  locationSlug: string
): ServiceLocationContent | undefined {
  // 1. Chercher dans le contenu statique
  const staticContent = getStaticContent(serviceSlug, locationSlug);
  if (staticContent) {
    return staticContent;
  }

  // 2. Generer dynamiquement si pas de contenu statique
  return generateDynamicContent(serviceSlug, locationSlug);
}

/**
 * Verifie si un contenu existe pour une combinaison
 * (statique ou generable)
 */
export function hasServiceLocationContent(
  serviceSlug: string,
  locationSlug: string
): boolean {
  // Verifier le contenu statique
  const hasStatic = allStaticContent.some(
    (c) => c.serviceSlug === serviceSlug && c.locationSlug === locationSlug
  );
  if (hasStatic) return true;

  // Verifier si on peut generer (service et location existent)
  const serviceExists = services.some((s) => s.slug === serviceSlug);
  const locationExists = locations.some((l) => l.slug === locationSlug);

  return serviceExists && locationExists;
}

/**
 * Verifie si un contenu statique existe (pour debug/stats)
 */
export function hasStaticContent(
  serviceSlug: string,
  locationSlug: string
): boolean {
  return allStaticContent.some(
    (c) => c.serviceSlug === serviceSlug && c.locationSlug === locationSlug
  );
}

/**
 * Obtient des statistiques sur le contenu
 */
export function getContentStats(): {
  totalStatic: number;
  totalServices: number;
  totalLocations: number;
  totalPossibleCombinations: number;
  coveragePercent: number;
} {
  const totalStatic = allStaticContent.length;
  const totalServices = services.length;
  const totalLocations = locations.length;
  const totalPossibleCombinations = totalServices * totalLocations;
  const coveragePercent = Math.round((totalStatic / totalPossibleCombinations) * 100);

  return {
    totalStatic,
    totalServices,
    totalLocations,
    totalPossibleCombinations,
    coveragePercent,
  };
}
