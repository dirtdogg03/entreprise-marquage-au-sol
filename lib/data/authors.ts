export interface Author {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  experience: string;
  certifications: string[];
  image: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

export const authors: Author[] = [
  {
    id: 'equipe-marquage',
    slug: 'equipe-technique',
    name: 'Équipe Technique',
    role: 'Experts en Marquage au Sol',
    bio: `Notre équipe technique regroupe des professionnels du marquage au sol avec plus de 15 ans d'expérience cumulée dans le secteur. Spécialisés dans les interventions en Île-de-France, nous maîtrisons toutes les techniques de marquage : peinture routière, résine époxy, thermoplastique et signalisation horizontale.

Chaque membre de l'équipe est formé aux normes en vigueur (Code de la route, accessibilité PMR, ICPE pour les sites industriels) et possède les certifications nécessaires pour intervenir sur tous types de surfaces : parkings, entrepôts, usines, centres commerciaux.

Notre expertise couvre l'ensemble du processus : diagnostic initial, choix des matériaux adaptés, préparation des surfaces, application et contrôle qualité. Nous assurons un suivi rigoureux de chaque projet pour garantir durabilité et conformité.`,
    expertise: [
      'Marquage au sol parking et stationnement',
      'Marquage industriel et logistique',
      'Signalisation horizontale',
      'Normes PMR et accessibilité',
      'Réglementations ICPE',
      'Matériaux haute performance',
    ],
    experience: '15+ ans',
    certifications: [
      'Formation Marquage Routier SETRA',
      'Habilitation travaux sur voirie',
      'Formation Sécurité PRAP',
      'Certification Qualibat',
    ],
    image: '/images/authors/equipe-technique.webp',
    social: {
      linkedin: 'https://linkedin.com/company/entreprise-marquage-au-sol',
    },
  },
];

export const getAuthorById = (id: string): Author | undefined => {
  return authors.find((a) => a.id === id);
};

export const getAuthorBySlug = (slug: string): Author | undefined => {
  return authors.find((a) => a.slug === slug);
};

export const getDefaultAuthor = (): Author => {
  return authors[0];
};
