/**
 * Content Engine - FAQ Pools
 *
 * Pools de templates FAQ par categorie
 * Selection dynamique basée sur les caracteristiques ville+service
 */

import {
  EnrichedLocation,
  ServiceInfo,
  FAQTemplate,
  FAQPools,
  FAQ,
  ContentVariables,
} from './types';

import { getContentVariant, substituteVariables } from './generator';

// ═══════════════════════════════════════════════════════════════════
// POOLS DE FAQ PAR CATEGORIE
// ═══════════════════════════════════════════════════════════════════

/**
 * Pool de FAQ sur les tarifs
 */
const pricingPool: FAQTemplate[] = [
  {
    questionTemplate: 'Quel est le tarif du {service} a {ville} ?',
    answerTemplate:
      'Le tarif du {service} a {ville} dépend de la surface a traiter et du type de marquage. Nous proposons des devis gratuits personnalises. En moyenne, comptez entre 15EUR et 45EUR/m2 selon la complexite. Contactez-nous pour un chiffrage precis adapté a votre projet.',
    category: 'pricing',
  },
  {
    questionTemplate: 'Combien coute une prestation de {service} dans le {department} ?',
    answerTemplate:
      'Dans le {department}, nos tarifs pour le {service} varient selon plusieurs facteurs : surface, type de peinture, accèssibilité du site. Nous établissons systématiquement un devis gratuit après visite technique. Zone {pricingZone} applicable.',
    category: 'pricing',
    conditions: (city) => city.pricingZone !== undefined,
  },
  {
    questionTemplate: 'Les prix sont-ils les memes a {ville} qu\'a Paris ?',
    answerTemplate:
      'Nos tarifs peuvent legerement varier selon la localisation. {ville} se situé en zone {pricingZone}. Le déplacement et la logistique influencent le cout final. Demandez votre devis gratuit pour connaitre le tarif exact pour votre projet.',
    category: 'pricing',
    conditions: (city) => city.pricingZone !== undefined,
  },
  {
    questionTemplate: 'Y a-t-il des frais de déplacement pour {ville} ?',
    answerTemplate:
      'Basée en Île-de-France, notre entreprise intervient régulièrement a {ville} ({departmentCode}). Les frais de déplacement sont inclus ou minimaux pour la proche couronne. Pour {ville}, située a {distanceFromParis} de Paris, nous vous communiquons le détail dans votre devis gratuit.',
    category: 'pricing',
    conditions: (city) => city.distanceFromParis !== undefined,
  },
  {
    questionTemplate: 'Proposez-vous des tarifs reduits pour les grandes surfaces a {ville} ?',
    answerTemplate:
      'Oui, nous appliquons des tarifs dégressifs pour les grandes surfaces a {ville} et dans tout le {department}. Parkings de plus de 50 places, entrepôts industriels : contactez-nous pour bénéficier de nos meilleures conditions.',
    category: 'pricing',
  },
];

/**
 * Pool de FAQ sur les délais
 */
const delayPool: FAQTemplate[] = [
  {
    questionTemplate: 'Quel délai pour intervenir a {ville} ?',
    answerTemplate:
      'Nous intervenons généralement sous 24 a 48 heures a {ville} pour les urgences, et sous 1 semaine pour les projets planifiés. Notre équipe basée en Île-de-France se déplace quotidiennement dans le {department}.',
    category: 'delay',
  },
  {
    questionTemplate: 'Combien de temps dure une intervention de {service} a {ville} ?',
    answerTemplate:
      'La durée d\'une intervention de {service} a {ville} dépend de la surface. Comptez 1 journée pour un parking standard (20-50 places), 2-3 jours pour un entrepot industriel. Nous travaillons en horaires décalés si nécessaire pour minimiser la gêne.',
    category: 'delay',
  },
  {
    questionTemplate: 'Intervenez-vous en urgence dans le {department} ?',
    answerTemplate:
      'Oui, nous proposons des interventions en urgence dans le {department}. A {ville}, nous pouvons intervenir sous 24h pour les situations critiques (effacement accidentel, mise en conformité urgente). Contactez-nous par téléphone pour les urgences.',
    category: 'delay',
  },
  {
    questionTemplate: 'Travaillez-vous le week-end a {ville} ?',
    answerTemplate:
      'Nous intervenons le week-end a {ville} sur demande, notamment pour les sites qui ne peuvent pas fermer en semaine (centrès commerciaux, parkings publics). Un supplement peut s\'appliquer pour les interventions hors horaires standard.',
    category: 'delay',
  },
  {
    questionTemplate: 'Quel est le temps de séchage après une intervention a {ville} ?',
    answerTemplate:
      'Le temps de séchage après {service} dépend des conditions météo. A {ville}, comptez 1 a 2 heures pour la circulation piétonne, 4 a 6 heures pour les véhicules légers. Nous utilisons des peintures a séchage rapide adaptées au climat francilien.',
    category: 'delay',
  },
];

/**
 * Pool de FAQ spécifiques au contexte local
 */
const specificPool: FAQTemplate[] = [
  {
    questionTemplate: 'Le {service} est-il adapté aux zones industrielles de {ville} ?',
    answerTemplate:
      'Absolument. Notre {service} est particulièrement adapté aux contraintes des zones industrielles de {ville}. Nous utilisons des peintures haute résistance (charge lourde, produits chimiques) et respectons les normes de sécurité en milieu industriel.',
    category: 'specific',
    conditions: (city) => city.economicProfile === 'industriel' || city.zoneTypes?.includes('zone-industrielle') === true,
  },
  {
    questionTemplate: 'Faites-vous du {service} pour les centrès commerciaux de {ville} ?',
    answerTemplate:
      'Oui, nous intervenons régulièrement dans les centrès commerciaux de {ville} et du {department}. Nous proposons des interventions de nuit ou tot le matin pour éviter la gêne des clients. Marquage parkings visiteurs, zones livraison, places PMR.',
    category: 'specific',
    conditions: (city) => city.zoneTypes?.includes('zone-commerciale') === true || city.economicProfile === 'commercial',
  },
  {
    questionTemplate: 'Intervenez-vous sur les parkings de copropriété a {ville} ?',
    answerTemplate:
      'Nous réalisons fréquemment du {service} pour les copropriétés de {ville}. Numérotation des places, marquage des zones communes, signalisation des accès pompiers. Nous pouvons fournir un devis pour présentation en AG de copropriété.',
    category: 'specific',
    conditions: (city) => city.economicProfile === 'residentiel' || city.zoneTypes?.includes('zone-residentielle') === true,
  },
  {
    questionTemplate: 'Proposez-vous le {service} pour les entrepôts logistiques de {ville} ?',
    answerTemplate:
      'Les entrepôts logistiques de {ville} font partie de notre cœur de métier. Nous réalisons le {service} avec des peintures très haute résistance adaptées au trafic intense de chariots élévateurs. Allées de circulation, zones de stockage, quais de chargement.',
    category: 'specific',
    conditions: (city) => city.zoneTypes?.includes('zone-logistique') === true || city.economicContext?.hasLogisticsHub === true,
  },
  {
    questionTemplate: 'Intervenez-vous pres de la gare de {ville} ?',
    answerTemplate:
      'Nous intervenons régulièrement aux abords des gares, y compris celle de {ville}. Parkings de gare, parvis, zones de dépose-minute : nous connaissons les contraintes spécifiques de ces espaces a fort trafic.',
    category: 'specific',
    conditions: (city) => city.zoneTypes?.includes('gare') === true,
  },
  {
    questionTemplate: 'Faites-vous du {service} pour les administrations de {ville} ?',
    answerTemplate:
      'En tant que {cityType}, {ville} dispose de nombreux bâtiments administratifs. Nous intervenons régulièrement pour les mairies, préfectures, tribunaux. Nous sommes référencés pour les marchés publics et respectons les procédures administratives.',
    category: 'specific',
    conditions: (city) => city.cityType === 'prefecture' || city.cityType === 'sous-prefecture',
  },
  {
    questionTemplate: 'Realisez-vous du {service} pour les etablissements scolaires de {ville} ?',
    answerTemplate:
      'Oui, nous intervenons dans les écoles, collèges et lycées de {ville}. Cours de récréation, parkings enseignants, zones de dépose scolaire. Nous travaillons pendant les vacances scolaires pour éviter toute gêne.',
    category: 'specific',
  },
];

/**
 * Pool de FAQ sur la qualité
 */
const qualityPool: FAQTemplate[] = [
  {
    questionTemplate: 'Quelle garantie offrez-vous pour le {service} a {ville} ?',
    answerTemplate:
      'Nous garantissons tous nos travaux de {service} pendant 5 ans. Cette garantie couvre l\'usure anormale et les défauts de mise en œuvre. A {ville} comme dans tout le {department}, nous nous engageons sur la durabilité de nos réalisations.',
    category: 'quality',
  },
  {
    questionTemplate: 'Quels materiaux utilisez-vous pour le {service} a {ville} ?',
    answerTemplate:
      'A {ville}, nous utilisons exclusivement des peintures et résines aux normes NF et CE. Pour le {service}, nous sélectionnons les materiaux adaptés a votre usage : peintures epoxy pour l\'industrie, acrylique pour les parkings standards, thermoplastique pour l\'exterieur.',
    category: 'quality',
  },
  {
    questionTemplate: 'Etes-vous certifies pour le {service} dans le {department} ?',
    answerTemplate:
      'Notre entreprise possede toutes les certifications requises pour le {service} dans le {department} et en Île-de-France : certification Qualibat, assurance décennale, respect des normes NF P 98-351. Nous intervenons également pour les marchés publics.',
    category: 'quality',
  },
  {
    questionTemplate: 'Comment assurez-vous la durabilité du {service} a {ville} ?',
    answerTemplate:
      'La durabilité de notre {service} a {ville} repose sur trois piliers : préparation soignée du support (nettoyage, primaire), utilisation de peintures professionnelles, et respect des temps de séchage. Résultat : un marquage résistant au trafic et aux intempéries.',
    category: 'quality',
  },
  {
    questionTemplate: 'Le {service} est-il conforme aux normes PMR a {ville} ?',
    answerTemplate:
      'Oui, tout notre {service} a {ville} respecte scrupuleusement les normes d\'accèssibilité PMR. Largeur des places, pentes d\'accès, signalisation au sol : nous connaissons les réglementations et garantissons la conformité de vos installations.',
    category: 'quality',
  },
];

/**
 * Pool de FAQ sur la couverture géographique
 */
const coveragePool: FAQTemplate[] = [
  {
    questionTemplate: 'Intervenez-vous dans tout le {department} ?',
    answerTemplate:
      'Oui, nous couvrons l\'intégralité du {department}. De {ville} aux communes voisines ({nearbyList}), notre équipe intervient quotidiennement pour des travaux de {service}. Pas de frais de déplacement supplémentaires pour le {department}.',
    category: 'coverage',
  },
  {
    questionTemplate: 'Couvrez-vous les villes autour de {ville} ?',
    answerTemplate:
      'Nous intervenons a {ville} et dans toutes les communes environnantes : {nearbyList}. Notre positionnement en Île-de-France nous permet de couvrir l\'ensemble de la region pour vos projets de {service}.',
    category: 'coverage',
  },
  {
    questionTemplate: 'Ou est située votre entreprise par rapport a {ville} ?',
    answerTemplate:
      'Notre siège est situé en Île-de-France, a proximité de {ville}. Nous intervenons quotidiennement dans le {department} pour des travaux de {service}. Notre connaissance du terrain local est un atout pour vos projets.',
    category: 'coverage',
  },
  {
    questionTemplate: 'Faites-vous du {service} dans les zones rurales du {department} ?',
    answerTemplate:
      'Nous intervenons dans toutes les communes du {department}, y compris les zones rurales. Exploitations agricoles, entreprises isolées, petites communes : le {service} est notre spécialité, quelle que soit votre localisation.',
    category: 'coverage',
  },
];

// ═══════════════════════════════════════════════════════════════════
// AGGREGATION DES POOLS
// ═══════════════════════════════════════════════════════════════════

export const faqPools: FAQPools = {
  pricing: pricingPool,
  delay: delayPool,
  specific: specificPool,
  quality: qualityPool,
  coverage: coveragePool,
};

// ═══════════════════════════════════════════════════════════════════
// SELECTION DES FAQ
// ═══════════════════════════════════════════════════════════════════

/**
 * Filtre les FAQ applicables en fonction des conditions
 */
function filterApplicableFAQs(
  pool: FAQTemplate[],
  city: EnrichedLocation,
  service: ServiceInfo
): FAQTemplate[] {
  return pool.filter((faq) => {
    // Si pas de condition, la FAQ est toujours applicable
    if (!faq.conditions) return true;
    // Sinon, evaluer la condition
    return faq.conditions(city, service);
  });
}

/**
 * Selectionne N FAQ parmi un pool avec selection deterministe
 */
function selectFromPool(
  pool: FAQTemplate[],
  count: number,
  hash: number
): FAQTemplate[] {
  if (pool.length === 0) return [];
  if (pool.length <= count) return pool;

  const selected: FAQTemplate[] = [];
  const available = [...pool];

  for (let i = 0; i < count && available.length > 0; i++) {
    const index = (hash + i * 7) % available.length; // 7 est un nombre premier pour meilleure distribution
    selected.push(available[index]);
    available.splice(index, 1);
  }

  return selected;
}

/**
 * Selectionne les FAQ pour une page service+ville
 * Assure une bonne variete entre les categories
 */
export function selectFAQs(
  city: EnrichedLocation,
  service: ServiceInfo,
  variables: ContentVariables
): FAQ[] {
  const hash = getContentVariant(city.id, service.id, 'faq-selection');
  const faqs: FAQ[] = [];

  // Distribution cible: 1 pricing, 1 delay, 2 specific, 1 quality, 1 coverage = 6 FAQ
  // Mais on s'adapté aux conditions applicables

  const categories: { pool: FAQTemplate[]; count: number }[] = [
    { pool: filterApplicableFAQs(faqPools.specific, city, service), count: 2 },
    { pool: filterApplicableFAQs(faqPools.pricing, city, service), count: 1 },
    { pool: filterApplicableFAQs(faqPools.delay, city, service), count: 1 },
    { pool: filterApplicableFAQs(faqPools.quality, city, service), count: 1 },
    { pool: filterApplicableFAQs(faqPools.coverage, city, service), count: 1 },
  ];

  for (const { pool, count } of categories) {
    const categoryHash = hash + faqs.length * 13; // Variation par categorie
    const selected = selectFromPool(pool, count, categoryHash);

    for (const template of selected) {
      faqs.push({
        question: substituteVariables(template.questionTemplate, variables),
        answer: substituteVariables(template.answerTemplate, variables),
      });
    }
  }

  // Minimum 4 FAQ
  if (faqs.length < 4) {
    // Ajouter des FAQ gêneriques supplémentaires
    const gênericPool = [
      ...faqPools.pricing,
      ...faqPools.delay,
      ...faqPools.quality,
    ];
    const additional = selectFromPool(
      gênericPool.filter((f) => !faqs.some((existing) =>
        existing.question.includes(f.questionTemplate.split('{')[0])
      )),
      4 - faqs.length,
      hash + 1000
    );

    for (const template of additional) {
      faqs.push({
        question: substituteVariables(template.questionTemplate, variables),
        answer: substituteVariables(template.answerTemplate, variables),
      });
    }
  }

  return faqs;
}

/**
 * Retourne toutes les FAQ disponibles pour une combinaison (debug)
 */
export function getAllApplicableFAQs(
  city: EnrichedLocation,
  service: ServiceInfo
): { category: string; count: number }[] {
  return [
    { category: 'pricing', count: filterApplicableFAQs(faqPools.pricing, city, service).length },
    { category: 'delay', count: filterApplicableFAQs(faqPools.delay, city, service).length },
    { category: 'specific', count: filterApplicableFAQs(faqPools.specific, city, service).length },
    { category: 'quality', count: filterApplicableFAQs(faqPools.quality, city, service).length },
    { category: 'coverage', count: filterApplicableFAQs(faqPools.coverage, city, service).length },
  ];
}
