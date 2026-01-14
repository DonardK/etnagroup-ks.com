export interface Project {
  id: string
  name: string
  nameEn: string
  description: string
  location: string
  heroImage: string
  logo?: string
  features: string[]
  totalUnits: number
  availableUnits: number
  status: 'completed' | 'under-construction' | 'planning'
  completionDate?: string
}

export const projects: Project[] = [
  {
    id: 'tara',
    name: 'Tara Residence',
    nameEn: 'Tara Residence',
    description:
      'Tara Residence përfaqëson kulmin e arkitekturës moderne dhe jetës premium. Me 8 kate dhe njësi të dizajnuara me sofistikim, ky kompleks ofron një eksperiencë jetese të pazakontë në zemër të Prishtinës.',
    location: 'Prishtinë, Kosovë',
    heroImage: '/buildings/tara-hero.jpg',
    features: [
      'Penthouse me terrazë panoramike',
      'Fitness center në kompleks',
      'Rooftop terrace',
      'Co-working spaces',
      'Ventilated facade system',
      'Acoustic insulation premium',
    ],
    totalUnits: 53, // Total residential units (excluding garages and commercial)
    availableUnits: 2, // TR_41, TR_P_50 (status: Lirë)
    status: 'completed',
    completionDate: '2024',
  },
  {
    id: 'tiani',
    name: 'Tiani Residence',
    nameEn: 'Tiani Residence',
    description:
      'Tiani Residence është një kompleks rezidencial i ri që kombinon dizajnin bashkëkohor me teknologjinë më të fundit. Me 8 kate dhe njësi të larmishme, ofron mundësi për çdo stil jetese.',
    location: 'Prishtinë, Kosovë',
    heroImage: '/buildings/tiani-hero.jpg',
    features: [
      'Loft apartments me hapësirë të hapur',
      'Swimming pool në kompleks',
      'Garden area',
      'Smart access control',
      'Premium flooring',
      'Energy efficient design',
    ],
    totalUnits: 100, // Total residential units (A + B blocks, excluding garages and commercial)
    availableUnits: 26, // Count of units with "Lirë" status from both blocks
    status: 'completed',
    completionDate: '2024',
  },
  {
    id: 'elsa',
    name: 'Elsa Residence',
    nameEn: 'Elsa Residence',
    description:
      'Elsa Residence është një kompleks rezidencial premium në qendër të Prishtinës, që kombinon elegancën moderne me rehatinë maksimale. Çdo njësi është projektuar me kujdes për të ofruar një jetesë luksoze në një ambient të sigurt dhe të përshtatshëm.',
    location: 'Prishtinë, Kosovë',
    heroImage: '/buildings/elsa-hero.jpg',
    features: [
      'Terraza private integrale',
      'Siguri 24/7',
      'Parkim nëntokësor',
      'Sistem shtëpi inteligjente',
      'Materiale premium',
      'Pamje panoramike të qytetit',
    ],
    totalUnits: 0,
    availableUnits: 0,
    status: 'planning',
    completionDate: 'Së Shpejti',
  },
  {
    id: 'etna',
    name: 'Etna Residence',
    nameEn: 'Etna Residence',
    description:
      'Etna Residence është projekti flagë i Etna Group, që përfshin më të mirën e arkitekturës moderne dhe teknologjisë së avancuar. Ky kompleks premium ofron një standard jetese të lartë në një lokacion strategjik.',
    location: 'Prishtinë, Kosovë',
    heroImage: '/buildings/etna-hero.jpg',
    features: [
      'Integrated private terraces',
      '24/7 security me smart access',
      'Underground parking me EV charging',
      'Smart home systems të integruara',
      'Premium materials në të gjitha njësitë',
      'Rooftop amenities',
    ],
    totalUnits: 0,
    availableUnits: 0,
    status: 'planning',
    completionDate: 'Së Shpejti',
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id)
}

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.id === slug.toLowerCase())
}
