/**
 * Content Engine - Bibliothèque de Patterns de Phrases
 *
 * Chaque pattern a:
 * - condition: fonction qui détermine si le pattern s'applique
 * - templates: variations de phrases pour ce pattern
 * - weight: poids pour la sélection (plus élevé = plus probable)
 */

import { SentencePattern, EnrichedLocation, ServiceInfo } from './types';

// ═══════════════════════════════════════════════════════════════════
// PATTERNS INTRODUCTION (150-200 mots)
// ═══════════════════════════════════════════════════════════════════

export const introductionPatterns: SentencePattern[] = [
  // Grande ville (>100k habitants)
  {
    id: 'intro-grande-ville',
    condition: (city) => city.population > 100000,
    templates: [
      "En tant que grande ville de l'Île-de-France avec ses {population} habitants, {ville} présente des besoins importants en {service}. Notre équipe spécialisée intervient régulièrement dans cette métropole pour accompagner entreprises, collectivités et syndics de copropriété dans leurs projets de marquage et signalisation.",
      "{ville}, métropole de {population} habitants, nécessite des solutions professionnelles de {service} adaptées à son envergure. Fort de notre expérience en Île-de-France, nous proposons des prestations sur mesure pour répondre aux exigences des grandes agglomérations.",
      "Avec {population} habitants, {ville} constitue l'une des plus grandes villes d'Île-de-France. Nos équipes de professionnels du {service} interviennent quotidiennement dans cette commune pour des projets de toute envergure, du parking d'entreprise aux voies de circulation.",
    ],
    weight: 1.0,
  },

  // Ville moyenne (50k-100k habitants)
  {
    id: 'intro-ville-moyenne',
    condition: (city) => city.population >= 50000 && city.population <= 100000,
    templates: [
      "Ville dynamique du {department} comptant {population} habitants, {ville} bénéficie de notre expertise en {service}. Notre proximité et notre connaissance du territoire nous permettent d'intervenir rapidement pour tous vos besoins de marquage au sol.",
      "Avec {population} habitants, {ville} constitue un pôle majeur du {department} où notre savoir-faire en {service} est particulièrement sollicité. Nous accompagnons les acteurs locaux dans la mise en conformité et l'amélioration de leurs espaces.",
      "{ville} et ses {population} habitants représentent un territoire où nous intervenons régulièrement pour des prestations de {service}. Notre équipe connaît parfaitement les spécificités de cette commune du {department}.",
    ],
    weight: 1.0,
  },

  // Ville à profil industriel
  {
    id: 'intro-industriel',
    condition: (city) => city.economicProfile === 'industriel',
    templates: [
      "Le tissu industriel de {ville} requiert des solutions de {service} adaptées aux contraintes des environnements de production. Nos équipes interviennent auprès des entreprises locales pour des marquages résistant aux passages intensifs et aux sollicitations mécaniques.",
      "La vocation industrielle de {ville} implique des exigences spécifiques en matière de {service}, notamment pour la sécurité des flux et la conformité aux normes. Notre expertise en milieu industriel nous permet de répondre à ces besoins avec précision.",
      "{ville}, commune à forte activité industrielle du {department}, fait appel à nos services pour des prestations de {service} adaptées aux entrepôts, usines et zones de stockage. Nous maîtrisons les contraintes spécifiques de ces environnements.",
    ],
    weight: 1.2,
  },

  // Ville avec zones commerciales
  {
    id: 'intro-commercial',
    condition: (city) => city.zoneTypes?.includes('zone-commerciale') === true,
    templates: [
      "Les nombreuses zones commerciales de {ville} nécessitent un {service} conforme aux normes d'accessibilité et de sécurité. Nous intervenons régulièrement auprès des centres commerciaux, grandes surfaces et commerces de la commune.",
      "Forte de ses centres commerciaux, {ville} fait appel à nos services de {service} pour garantir une expérience client optimale. Places handicapées, passages piétons, signalisation directionnelle : nous couvrons tous les besoins.",
      "L'activité commerciale de {ville} génère des besoins importants en {service}. Nos équipes interviennent pour le marquage des parkings visiteurs, la signalisation des accès et la mise aux normes PMR.",
    ],
    weight: 1.1,
  },

  // Ville avec zone logistique
  {
    id: 'intro-logistique',
    condition: (city) => city.zoneTypes?.includes('zone-logistique') === true,
    templates: [
      "Hub logistique du {department}, {ville} concentre des entrepôts et plateformes où le {service} est stratégique pour l'efficacité opérationnelle. Nous réalisons des marquages adaptés aux flux de poids lourds et aux opérations de manutention.",
      "L'activité logistique de {ville} impose des standards élevés en matière de {service}. Zones de chargement, allées de circulation, emplacements de stockage : notre expertise répond aux besoins des professionnels du secteur.",
      "{ville}, pôle logistique majeur du {department}, requiert des solutions de {service} robustes et durables. Nos interventions s'adaptent aux contraintes spécifiques des plateformes de distribution et centres de tri.",
    ],
    weight: 1.3,
  },

  // Préfecture
  {
    id: 'intro-préfecture',
    condition: (city) => city.cityType === 'prefecture',
    templates: [
      "Préfecture du {department}, {ville} concentre administrations, commerces et entreprises nécessitant un {service} de qualité professionnelle. Notre équipe intervient régulièrement dans cette ville centre pour des projets variés.",
      "En tant que préfecture du {department}, {ville} présente une diversité de besoins en {service} : bâtiments publics, zones d'activité, quartiers résidentiels. Notre polyvalence nous permet de répondre à toutes ces demandes.",
      "Chef-lieu du {department}, {ville} accueille de nombreuses institutions et entreprises. Nos prestations de {service} s'adaptent aux exigences spécifiques de cette commune administrative et économique.",
    ],
    weight: 1.0,
  },

  // Sous-préfecture
  {
    id: 'intro-sous-préfecture',
    condition: (city) => city.cityType === 'sous-prefecture',
    templates: [
      "Sous-préfecture du {department}, {ville} bénéficie de notre expertise locale en {service}. Nous accompagnons les acteurs publics et privés dans leurs projets de marquage et signalisation.",
      "{ville}, importante sous-préfecture du {department}, fait appel à nos services pour des prestations de {service} adaptées aux besoins d'une ville de cette envergure.",
    ],
    weight: 0.9,
  },

  // Ville résidentielle
  {
    id: 'intro-résidentiel',
    condition: (city) => city.economicProfile === 'residentiel',
    templates: [
      "Commune à dominante résidentielle, {ville} présente des besoins spécifiques en {service} pour les copropriétés, résidences et parkings privés. Notre équipe intervient avec discrétion et professionnalisme.",
      "{ville}, ville résidentielle du {department}, nous sollicite régulièrement pour des prestations de {service} adaptées aux ensembles immobiliers et espaces de stationnement privatifs.",
      "Le caractère résidentiel de {ville} implique des interventions de {service} respectueuses du cadre de vie. Nous réalisons des marquages soignés pour les parkings de résidence et les voies privées.",
    ],
    weight: 0.9,
  },

  // Ville proche de Paris (< 15km)
  {
    id: 'intro-proche-paris',
    condition: (city) => city.distanceFromParis !== undefined && city.distanceFromParis < 15,
    templates: [
      "A seulement {distanceFromParis} km de Paris, {ville} bénéficie d'une intervention rapide de nos équipes pour vos besoins en {service}. Notre proximité garantit une réactivité optimale.",
      "Située aux portes de Paris ({distanceFromParis} km), {ville} profite de notre capacité d'intervention immédiate pour tout projet de {service}. Devis gratuit sous 24h, réalisation sous 48-72h.",
    ],
    weight: 1.1,
  },

  // Pattern par défaut
  {
    id: 'intro-default',
    condition: () => true,
    templates: [
      "Située dans le {department}, {ville} fait appel à notre expertise en {service} pour répondre aux besoins de ses entreprises et collectivités. Notre équipe intervient avec professionnalisme et réactivité.",
      "Notre équipe intervient régulièrement à {ville} ({department}) pour des prestations de {service} auprès de clients variés : entreprises, collectivités, syndics de copropriété.",
      "{ville}, commune du {department}, bénéficie de notre savoir-faire en {service}. Nous accompagnons les acteurs locaux dans tous leurs projets de marquage et signalisation au sol.",
    ],
    weight: 0.5,
  },
];

// ═══════════════════════════════════════════════════════════════════
// PATTERNS CONTEXTE LOCAL (100-150 mots)
// ═══════════════════════════════════════════════════════════════════

export const localContextPatterns: SentencePattern[] = [
  // Ville avec zone industrielle
  {
    id: 'context-zone-industrielle',
    condition: (city) => city.economicContext?.hasIndustrialZone === true,
    templates: [
      "Les zones d'activité de {ville} accueillent de nombreuses entreprises nécessitant des solutions de {service} adaptées aux environnements professionnels. Marquage d'entrepôts, signalisation d'ateliers, délimitation de zones de stockage : nous maîtrisons ces interventions.",
      "Le parc d'activités de {ville} génère des besoins réguliers en {service}. Nos équipes connaissent les exigences des entreprises locales et proposent des solutions pérennes.",
    ],
    weight: 1.2,
  },

  // Ville avec centre commercial
  {
    id: 'context-centre-commercial',
    condition: (city) => city.economicContext?.hasCommercialCenter === true,
    templates: [
      "Les centres commerciaux de {ville} font régulièrement appel à nos services pour le {service} de leurs parkings et espaces de circulation. Conformité PMR, signalisation directionnelle, places réservées : nous assurons une prestation complète.",
      "L'offre commerciale de {ville} nécessite des parkings bien organisés. Notre expertise en {service} permet d'optimiser les flux de circulation et de garantir l'accessibilité pour tous.",
    ],
    weight: 1.1,
  },

  // Ville avec hub logistique
  {
    id: 'context-hub-logistique',
    condition: (city) => city.economicContext?.hasLogisticsHub === true,
    templates: [
      "Les plateformes logistiques implantées à {ville} nécessitent un {service} résistant et durable. Quais de chargement, zones de manœuvre, allées de circulation : nos marquages répondent aux contraintes du secteur.",
      "L'activité logistique de {ville} implique des flux intenses de véhicules. Notre {service} s'adapte à ces exigences avec des matériaux haute résistance.",
    ],
    weight: 1.3,
  },

  // Ville avec gare
  {
    id: 'context-gare',
    condition: (city) => city.zoneTypes?.includes('gare') === true,
    templates: [
      "La présence d'une gare à {ville} génère des besoins spécifiques en {service} : parking de la gare, accès taxis, dépose-minute, stationnement vélos. Nous intervenons pour ces aménagements spécialisés.",
      "Le pôle gare de {ville} nécessite une signalisation au sol claire et conforme. Nos prestations de {service} contribuent à la fluidité des déplacements autour de cette infrastructure.",
    ],
    weight: 1.0,
  },

  // Ville avec aéroport (Roissy, Orly)
  {
    id: 'context-aéroport',
    condition: (city) => city.zoneTypes?.includes('aeroport') === true,
    templates: [
      "La proximité de l'aéroport confère à {ville} une activité économique soutenue. Nos prestations de {service} s'adressent aux entreprises de la zone aéroportuaire et aux parkings de longue durée.",
      "L'influence de la zone aéroportuaire sur {ville} se traduit par des besoins importants en {service} pour les hôtels, loueurs de véhicules et entreprises de logistique.",
    ],
    weight: 1.2,
  },

  // Ville position nord
  {
    id: 'context-position-nord',
    condition: (city) => city.regionPosition === 'nord',
    templates: [
      "Située au nord de Paris, {ville} bénéficie de notre intervention rapide depuis nos bases franciliennes. Le {service} que nous proposons répond aux besoins des acteurs économiques de ce secteur dynamique.",
    ],
    weight: 0.8,
  },

  // Ville position sud
  {
    id: 'context-position-sud',
    condition: (city) => city.regionPosition === 'sud',
    templates: [
      "Au sud de la région parisienne, {ville} fait partie de notre zone d'intervention prioritaire pour le {service}. Nos équipes connaissent parfaitement ce territoire.",
    ],
    weight: 0.8,
  },

  // Ville position est
  {
    id: 'context-position-est',
    condition: (city) => city.regionPosition === 'est',
    templates: [
      "A l'est de Paris, {ville} s'inscrit dans un bassin économique dynamique où nos prestations de {service} sont régulièrement sollicitées par les entreprises et collectivités locales.",
    ],
    weight: 0.8,
  },

  // Ville position ouest
  {
    id: 'context-position-ouest',
    condition: (city) => city.regionPosition === 'ouest',
    templates: [
      "Dans l'ouest parisien, {ville} présente un tissu économique diversifié. Notre expertise en {service} répond aux attentes de ce secteur exigeant.",
    ],
    weight: 0.8,
  },

  // Villes voisines mentionnees
  {
    id: 'context-voisinage',
    condition: (city) => city.nearby && city.nearby.length > 0,
    templates: [
      "Notre intervention à {ville} s'étend naturellement aux communes voisines comme {nearbyFirst}. Cette connaissance du territoire optimise nos prestations de {service}.",
      "Basée stratégiquement, notre équipe couvre {ville} et les communes alentours ({nearbyList}) pour tous vos besoins en {service}.",
    ],
    weight: 0.7,
  },

  // Pattern par défaut
  {
    id: 'context-default',
    condition: () => true,
    templates: [
      "Le tissu économique de {ville} génère des besoins variés en {service}. Entreprises, commerces, résidences : nous adaptons nos prestations à chaque contexte.",
      "Notre connaissance de {ville} et de son environnement nous permet de proposer des solutions de {service} parfaitement adaptées aux réalités locales.",
      "A {ville}, notre équipe intervient pour des projets de {service} de toute nature, avec une attention particulière portée à la qualité et à la durabilité des réalisations.",
    ],
    weight: 0.5,
  },
];

// ═══════════════════════════════════════════════════════════════════
// PATTERNS DESCRIPTION SERVICE LOCALISEE (200-250 mots)
// ═══════════════════════════════════════════════════════════════════

export const serviceDescriptionPatterns: SentencePattern[] = [
  // Service marquage parking + ville industrielle
  {
    id: 'service-parking-industriel',
    condition: (city, service) =>
      service.slug.includes('parking') && city.economicProfile === 'industriel',
    templates: [
      "Notre intervention de {service} à {ville} s'adapte aux spécificités du tissu industriel local. A {distanceFromParis} km de Paris, nous garantissons une intervention sous 24-48h. Pour les entreprises de {ville}, nous proposons notamment : marquage zones de stockage, allées de circulation engins, quais de chargement, passages piétons sécurisés. Nos peintures haute résistance supportent le passage intensif des chariots élévateurs et poids lourds.",
    ],
    weight: 1.3,
  },

  // Service marquage parking + ville commerciale
  {
    id: 'service-parking-commercial',
    condition: (city, service) =>
      service.slug.includes('parking') &&
      (city.economicProfile === 'commercial' || city.zoneTypes?.includes('zone-commerciale') === true),
    templates: [
      "A {ville}, notre expertise en {service} répond aux exigences des surfaces commerciales. Parkings visiteurs, places PMR, signalisation directionnelle : chaque élément est réalisé selon les normes en vigueur. Intervention rapide pour minimiser l'impact sur votre activité, avec des horaires adaptés si nécessaire.",
    ],
    weight: 1.2,
  },

  // Service marquage entrepot + ville logistique
  {
    id: 'service-entrepot-logistique',
    condition: (city, service) =>
      service.slug.includes('entrepot') && city.zoneTypes?.includes('zone-logistique') === true,
    templates: [
      "Les entrepôts et plateformes logistiques de {ville} bénéficient de notre expertise en {service}. Délimitation des zones de stockage, marquage des allées de circulation, signalisation des quais : nous concevons des solutions optimisées pour vos flux. Matériaux haute résistance adaptés aux sollicitations intensives des environnements logistiques.",
    ],
    weight: 1.4,
  },

  // Service signalisation + préfecture/sous-préfecture
  {
    id: 'service-signalisation-admin',
    condition: (city, service) =>
      service.category === 'signalisation' &&
      (city.cityType === 'prefecture' || city.cityType === 'sous-prefecture'),
    templates: [
      "En tant que {cityType} du {department}, {ville} nécessite une signalisation conforme aux normes les plus strictes. Notre expertise en {service} s'applique aux bâtiments publics, parkings administratifs et espaces de circulation. Devis gratuit et conseil personnalisé.",
    ],
    weight: 1.1,
  },

  // Service PMR (toutes villes)
  {
    id: 'service-pmr',
    condition: (_, service) => service.slug.includes('pmr') || service.slug.includes('handicape'),
    templates: [
      "La mise aux normes accessibilité PMR à {ville} est notre spécialité. Places de stationnement, bandes de guidage, passages piétons adaptés : nous assurons la conformité de vos espaces. Notre intervention inclut le conseil réglementaire pour respecter les obligations légales.",
    ],
    weight: 1.2,
  },

  // Zone tarification premium
  {
    id: 'service-zone-premium',
    condition: (city) => city.pricingZone === 'premium',
    templates: [
      "Située dans une zone à forte activité, {ville} bénéficie de notre service premium avec intervention prioritaire. Devis sous 24h, réalisation sous 48-72h, garantie étendue. Notre proximité permet une réactivité optimale pour vos projets de {service}.",
    ],
    weight: 1.0,
  },

  // Zone tarification économique
  {
    id: 'service-zone-économique',
    condition: (city) => city.pricingZone === 'economique',
    templates: [
      "A {ville}, nous proposons des tarifs optimisées grâce à notre organisation logistique. Regroupement d'interventions dans le secteur, déplacements mutualisés : bénéficiez de notre {service} au meilleur rapport qualité-prix.",
    ],
    weight: 0.9,
  },

  // Pattern par défaut
  {
    id: 'service-default',
    condition: () => true,
    templates: [
      "Notre prestation de {service} à {ville} couvre l'ensemble de vos besoins : étude préalable, préparation du support, application des marquages, finitions soignées. Nous utilisons des matériaux professionnels garantissant une tenue optimale dans le temps. Devis gratuit sous 48h.",
      "A {ville} ({department}), notre équipe réalise votre {service} avec le plus grand professionnalisme. De l'analyse du site à la livraison finale, nous vous accompagnons à chaque étape. Garantie de satisfaction et suivi après intervention.",
      "Pour votre projet de {service} à {ville}, faites confiance à notre expérience. Intervention rapide, matériaux certifiés, respect des normes en vigueur. Contactez-nous pour un devis personnalisé gratuit.",
    ],
    weight: 0.5,
  },
];
