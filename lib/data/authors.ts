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
    name: 'Equipe Technique',
    role: 'Experts en Marquage au Sol',
    bio: `Notre equipe technique regroupe des professionnels du marquage au sol avec plus de 15 ans d'experience cumlee dans le secteur. Specialises dans les interventions en Ile-de-France, nous maitrisons toutes les techniques de marquage : peinture routiere, resine epoxy, thermoplastique et signalisation horizontale.

Chaque membre de l'equipe est forme aux normes en vigueur (Code de la route, accessibilite PMR, ICPE pour les sites industriels) et possede les certifications necessaires pour intervenir sur tous types de surfaces : parkings, entrepots, usines, centres commerciaux.

Notre expertise couvre l'ensemble du processus : diagnostic initial, choix des materiaux adaptes, preparation des surfaces, application et controle qualite. Nous assurons un suivi rigoureux de chaque projet pour garantir durabilite et conformite.`,
    expertise: [
      'Marquage au sol parking et stationnement',
      'Marquage industriel et logistique',
      'Signalisation horizontale',
      'Normes PMR et accessibilite',
      'Reglementations ICPE',
      'Materiaux haute performance',
    ],
    experience: '15+ ans',
    certifications: [
      'Formation Marquage Routier SETRA',
      'Habilitation travaux sur voirie',
      'Formation Securite PRAP',
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
