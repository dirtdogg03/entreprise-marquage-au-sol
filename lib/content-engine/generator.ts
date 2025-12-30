/**
 * Content Engine - Generator
 *
 * Logique de génération de contenu unique pour pages service+ville
 * Utilise des patterns conditionnels pour produire du contenu varié
 */

import {
  EnrichedLocation,
  ServiceInfo,
  SentencePattern,
  ContentVariables,
  GeneratedContent,
  GeneratedPageContent,
  FAQ,
} from './types';

import {
  introductionPatterns,
  localContextPatterns,
  serviceDescriptionPatterns,
} from './sentence-patterns';

import { selectFAQs } from './faq-pools';

// ═══════════════════════════════════════════════════════════════════
// UTILITAIRES
// ═══════════════════════════════════════════════════════════════════

/**
 * Hash simple pour génération déterministe
 * Permet de reproduire le même contenu pour une combinaison ville+service
 */
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Obtient un index de variant déterministe pour une section donnée
 */
export function getContentVariant(
  cityId: string,
  serviceId: string,
  section: string
): number {
  return simpleHash(`${cityId}-${serviceId}-${section}`);
}

/**
 * Selection aléatoire pondérée parmi les patterns
 * Utilise le hash pour la reproductibilité
 */
function weightedSelect(
  patterns: SentencePattern[],
  hash: number
): SentencePattern {
  if (patterns.length === 0) {
    throw new Error('No patterns available for selection');
  }

  if (patterns.length === 1) {
    return patterns[0];
  }

  // Calculer le poids total
  const totalWeight = patterns.reduce((sum, p) => sum + p.weight, 0);

  // Utiliser le hash pour obtenir une valeur entre 0 et totalWeight
  const target = (hash % 1000) / 1000 * totalWeight;

  // Sélectionner le pattern
  let cumulative = 0;
  for (const pattern of patterns) {
    cumulative += pattern.weight;
    if (target <= cumulative) {
      return pattern;
    }
  }

  // Fallback au dernier pattern
  return patterns[patterns.length - 1];
}

/**
 * Selection aléatoire d'un template parmi les variations
 */
function selectTemplate(templates: string[], hash: number): string {
  if (templates.length === 0) {
    return '';
  }
  const index = hash % templates.length;
  return templates[index];
}

/**
 * Formate un nombre avec séparateur de milliers
 */
function formatNumber(num: number | undefined): string {
  if (num === undefined) return '';
  return num.toLocaleString('fr-FR');
}

/**
 * Traduit le profil économique en français
 */
function translateEconomicProfile(profile: string | undefined): string {
  const translations: Record<string, string> = {
    'residentiel': 'résidentiel',
    'commercial': 'commercial',
    'industriel': 'industriel',
    'mixte': 'mixte',
    'tertiaire': 'tertiaire',
  };
  return profile ? translations[profile] || profile : '';
}

/**
 * Traduit la position régionale en français
 */
function translateRegionPosition(position: string | undefined): string {
  const translations: Record<string, string> = {
    'nord': 'au nord de Paris',
    'sud': 'au sud de Paris',
    'est': 'à l\'est de Paris',
    'ouest': 'à l\'ouest de Paris',
    'centre': 'au cœur de l\'Île-de-France',
  };
  return position ? translations[position] || position : '';
}

/**
 * Traduit le type de ville en français
 */
function translateCityType(type: string | undefined): string {
  const translations: Record<string, string> = {
    'prefecture': 'préfecture',
    'sous-prefecture': 'sous-préfecture',
    'chef-lieu': 'chef-lieu de canton',
    'commune': 'commune',
  };
  return type ? translations[type] || type : '';
}

/**
 * Traduit la zone de tarification
 */
function translatePricingZone(zone: string | undefined): string {
  const translations: Record<string, string> = {
    'premium': 'premium (Paris intra-muros)',
    'standard': 'standard (proche couronne)',
    'économique': 'économique (grande couronne)',
  };
  return zone ? translations[zone] || zone : '';
}

/**
 * Traduit un type de zone
 */
function translateZoneType(zone: string | undefined): string {
  const translations: Record<string, string> = {
    'zone-commerciale': 'zone commerciale',
    'zone-industrielle': 'zone industrielle',
    'zone-logistique': 'zone logistique',
    'zone-artisanale': 'zone artisanale',
    'quartier-affaires': 'quartier d\'affaires',
    'zone-residentielle': 'zone résidentielle',
    'centre-ville': 'centre-ville',
    'gare': 'gare',
    'aeroport': 'aéroport',
  };
  return zone ? translations[zone] || zone : '';
}

// ═══════════════════════════════════════════════════════════════════
// PREPARATION DES VARIABLES
// ═══════════════════════════════════════════════════════════════════

/**
 * Prépare toutes les variables de substitution pour les templates
 */
export function prepareVariables(
  city: EnrichedLocation,
  service: ServiceInfo
): ContentVariables {
  return {
    ville: city.name,
    villeLower: city.name.toLowerCase(),
    department: city.department,
    departmentCode: city.departmentCode,
    population: formatNumber(city.population),
    populationRaw: city.population || 0,
    service: service.name,
    serviceLower: service.name.toLowerCase(),
    distanceFromParis: city.distanceFromParis
      ? `${city.distanceFromParis} km`
      : undefined,
    regionPosition: translateRegionPosition(city.regionPosition),
    cityType: translateCityType(city.cityType),
    economicProfile: translateEconomicProfile(city.economicProfile),
    pricingZone: translatePricingZone(city.pricingZone),
    nearbyFirst: city.nearby?.[0],
    nearbyList: city.nearby?.slice(0, 3).join(', '),
    landmarkFirst: city.landmarks?.[0]?.name,
    zoneTypeFirst: city.zoneTypes?.[0]
      ? translateZoneType(city.zoneTypes[0])
      : undefined,
  };
}

/**
 * Substitue les variables dans un template
 */
export function substituteVariables(
  template: string,
  variables: ContentVariables
): string {
  let result = template;

  // Substitution de toutes les variables
  const replacements: Record<string, string | undefined> = {
    '{ville}': variables.ville,
    '{villeLower}': variables.villeLower,
    '{department}': variables.department,
    '{departmentCode}': variables.departmentCode,
    '{population}': variables.population,
    '{service}': variables.service,
    '{serviceLower}': variables.serviceLower,
    '{distanceFromParis}': variables.distanceFromParis,
    '{regionPosition}': variables.regionPosition,
    '{cityType}': variables.cityType,
    '{economicProfile}': variables.economicProfile,
    '{pricingZone}': variables.pricingZone,
    '{nearbyFirst}': variables.nearbyFirst,
    '{nearbyList}': variables.nearbyList,
    '{landmarkFirst}': variables.landmarkFirst,
    '{zoneTypeFirst}': variables.zoneTypeFirst,
  };

  for (const [placeholder, value] of Object.entries(replacements)) {
    if (value !== undefined) {
      result = result.replaceAll(placeholder, value);
    }
  }

  return result;
}

// ═══════════════════════════════════════════════════════════════════
// GENERATION DE CONTENU
// ═══════════════════════════════════════════════════════════════════

/**
 * Génère une section de contenu (introduction, contexte local, ou description service)
 */
function generateSection(
  patterns: SentencePattern[],
  city: EnrichedLocation,
  service: ServiceInfo,
  variables: ContentVariables,
  sectionName: string
): string {
  // 1. Filtrer les patterns applicables
  const applicablePatterns = patterns.filter((p) =>
    p.condition(city, service)
  );

  if (applicablePatterns.length === 0) {
    console.warn(`No applicable patterns for ${sectionName} in ${city.name}`);
    return '';
  }

  // 2. Obtenir le hash pour sélection déterministe
  const hash = getContentVariant(city.id, service.id, sectionName);

  // 3. Sélectionner un pattern avec pondération
  const selectedPattern = weightedSelect(applicablePatterns, hash);

  // 4. Sélectionner un template parmi les variations
  const templateHash = getContentVariant(city.id, service.id, `${sectionName}-template`);
  const template = selectTemplate(selectedPattern.templates, templateHash);

  // 5. Substituer les variables
  return substituteVariables(template, variables);
}

/**
 * Génère le contenu complet pour une page service+ville
 */
export function generateUniqueContent(
  city: EnrichedLocation,
  service: ServiceInfo
): GeneratedContent {
  // Préparer les variables une seule fois
  const variables = prepareVariables(city, service);

  return {
    introduction: generateSection(
      introductionPatterns,
      city,
      service,
      variables,
      'introduction'
    ),
    localContext: generateSection(
      localContextPatterns,
      city,
      service,
      variables,
      'localContext'
    ),
    serviceDescription: generateSection(
      serviceDescriptionPatterns,
      city,
      service,
      variables,
      'serviceDescription'
    ),
  };
}

/**
 * Génère le contenu complet de la page incluant meta et FAQ
 */
export function generatePageContent(
  city: EnrichedLocation,
  service: ServiceInfo
): GeneratedPageContent {
  const variables = prepareVariables(city, service);
  const content = generateUniqueContent(city, service);
  const faqs = selectFAQs(city, service, variables);

  // Meta title avec variation
  const titleHash = getContentVariant(city.id, service.id, 'meta-title');
  const titleVariants = [
    `${service.name} ${city.name} | Devis Gratuit | Expert IDF`,
    `${service.name} à ${city.name} (${city.departmentCode}) | Pro du Marquage`,
    `Expert ${service.name} ${city.name} | Intervention 24-48h`,
  ];
  const metaTitle = titleVariants[titleHash % titleVariants.length];

  // Meta description avec variation
  const descHash = getContentVariant(city.id, service.id, 'meta-desc');
  const descVariants = [
    `${service.name} à ${city.name} par des professionnels certifiés. Devis gratuit, intervention rapide dans le ${city.department}. Normes NF, garantie 5 ans.`,
    `Spécialiste ${service.name} à ${city.name} et environs. ${city.population ? `Service pour ${formatNumber(city.population)} habitants.` : ''} Intervention sous 48h, qualité garantie.`,
    `Entreprise de ${service.name} intervenant à ${city.name} (${city.departmentCode}). Tarifs compétitifs, travail soigné, respect des normes.`,
  ];
  const metaDescription = descVariants[descHash % descVariants.length];

  return {
    metaTitle,
    metaDescription,
    content,
    faqs,
  };
}

// ═══════════════════════════════════════════════════════════════════
// VALIDATION ET DEBUG
// ═══════════════════════════════════════════════════════════════════

/**
 * Calcule le pourcentage d'unicite estime du contenu genere
 * Utile pour le monitoring SEO
 */
export function estimateUniqueness(content: GeneratedContent): number {
  const intro = content.introduction.length;
  const local = content.localContext.length;
  const desc = content.serviceDescription.length;
  const total = intro + local + desc;

  if (total === 0) return 0;

  // Estimation basée sur les longueurs de section
  // Plus une section est longue, plus elle contribue à l'unicité
  const uniqueEstimate = (
    (intro * 0.9) + // Introduction 90% unique
    (local * 0.85) + // Contexte local 85% unique
    (desc * 0.80)    // Description 80% unique
  ) / total;

  return Math.round(uniqueEstimate * 100);
}

/**
 * Vérifie si le contenu généré est valide
 */
export function validateContent(content: GeneratedPageContent): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!content.metaTitle || content.metaTitle.length < 10) {
    errors.push('Meta title trop court ou manquant');
  }

  if (!content.metaDescription || content.metaDescription.length < 50) {
    errors.push('Meta description trop courte ou manquante');
  }

  if (!content.content.introduction || content.content.introduction.length < 50) {
    errors.push('Introduction trop courte ou manquante');
  }

  if (!content.content.localContext || content.content.localContext.length < 30) {
    errors.push('Contexte local trop court ou manquant');
  }

  if (content.faqs.length < 3) {
    errors.push('Moins de 3 FAQ générées');
  }

  // Vérifier qu'il n'y a pas de variables non substituées
  const fullText = JSON.stringify(content);
  const unsubstituted = fullText.match(/\{[a-zA-Z]+\}/g);
  if (unsubstituted && unsubstituted.length > 0) {
    errors.push(`Variables non substituées: ${unsubstituted.join(', ')}`);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Génère un rapport de debug pour une page
 */
export function debugPageGeneration(
  city: EnrichedLocation,
  service: ServiceInfo
): string {
  const content = generatePageContent(city, service);
  const validation = validateContent(content);
  const uniqueness = estimateUniqueness(content.content);

  return `
═══════════════════════════════════════════════════════════════
DEBUG: ${service.name} - ${city.name}
═══════════════════════════════════════════════════════════════

📊 METRIQUES
   • Unicité estimée: ${uniqueness}%
   • FAQ générées: ${content.faqs.length}
   • Validation: ${validation.valid ? '✅ OK' : '❌ ERREURS'}
   ${validation.errors.map((e) => `   • ${e}`).join('\n')}

📝 META
   • Title: ${content.metaTitle}
   • Description: ${content.metaDescription}

📄 CONTENU
   • Introduction (${content.content.introduction.length} chars):
     "${content.content.introduction.substring(0, 100)}..."

   • Contexte local (${content.content.localContext.length} chars):
     "${content.content.localContext.substring(0, 100)}..."

   • Description (${content.content.serviceDescription.length} chars):
     "${content.content.serviceDescription.substring(0, 100)}..."

❓ FAQ (${content.faqs.length})
   ${content.faqs.map((faq, i) => `${i + 1}. ${faq.question}`).join('\n   ')}

═══════════════════════════════════════════════════════════════
`;
}
