export interface Project {
  id: string
  name: string
  nameEn: string
  description: string
  location: string
  heroImage: string
  /** Image for cards on Home/About – different from hero so same image isn’t reused */
  cardImage?: string
  logo?: string
  features: string[]
  totalUnits: number
  availableUnits: number
  status: 'completed' | 'under-construction' | 'planning'
  completionDate?: string
  buildingCount: number
  hasInteractivePlans: boolean
}

export const projects: Project[] = [
  {
    id: 'elsa',
    name: 'Elsa Residence',
    nameEn: 'Elsa Residence',
    description:
      'Elsa Residence është një kompleks rezidencial premium në qendër të Prishtinës, që kombinon elegancën moderne me rehatinë maksimale. Çdo njësi është projektuar me kujdes për të ofruar një jetesë luksoze në një ambient të sigurt dhe të përshtatshëm.',
    location: 'Prishtinë, Rr. Malush Kosova',
    heroImage: '/visuals/ElsaResidenceVisuals/Renderi 1.jpg',
    cardImage: '/visuals/ElsaResidenceVisuals/Renderi 2.jpg',
    features: [
      'Terraza private integrale',
      'Siguri 24/7',
      'Parkim nëntokësor',
      'Elevator modern',
      'Materiale premium',
      'Pamje panoramike të qytetit',
    ],
    totalUnits: 0,
    availableUnits: 0,
    status: 'under-construction',
    completionDate: 'Në Ndërtim',
    buildingCount: 6,
    hasInteractivePlans: true,
  },
  {
    id: 'tiani',
    name: 'Tiani Residence',
    nameEn: 'Tiani Residence',
    description:
      'Tiani Residence është një kompleks rezidencial i ri që kombinon dizajnin bashkëkohor me teknologjinë më të fundit. Me 8 kate dhe njësi të larmishme, ofron mundësi për çdo stil jetese.',
    location: 'Prizren, Rr. Tahir Sinani',
    heroImage: '/visuals/TianiResidenceVisuals/01_1 - Photo.jpg',
    cardImage: '/visuals/TianiResidenceVisuals/01_2 - Photo.jpg',
    features: [
      'Loft apartments me hapësirë të hapur',
      'Garden area',
      'Siguri 24/7',
      'Parkim nëntokësor',
      'Premium flooring',
      'Energy efficient design',
    ],
    totalUnits: 100,
    availableUnits: 26,
    status: 'under-construction',
    completionDate: 'Në Ndërtim',
    buildingCount: 2,
    hasInteractivePlans: true,
  },
  {
    id: 'tara',
    name: 'Tara Residence',
    nameEn: 'Tara Residence',
    description:
      'Tara Residence përfaqëson kulmin e arkitekturës moderne dhe jetës premium. Me 8 kate dhe njësi të dizajnuara me sofistikim, ky kompleks ofron një eksperiencë jetese të pazakontë në zemër të Prizrenit.',
    location: 'Prizren, Rr. 5 Maji',
    heroImage: '/visuals/TaraResidenceVisuals/A1.jpg',
    cardImage: '/visuals/TaraResidenceVisuals/A2.jpg',
    features: [
      'Penthouse me terrazë panoramike',
      'Rooftop terrace',
      'Siguri 24/7',
      'Parkim nëntokësor',
      'Ventilated facade system',
      'Acoustic insulation premium',
    ],
    totalUnits: 53,
    availableUnits: 2,
    status: 'under-construction',
    completionDate: 'Në Ndërtim',
    buildingCount: 1,
    hasInteractivePlans: true,
  },
  {
    id: 'joni',
    name: 'Joni Residence',
    nameEn: 'Joni Residence',
    description:
      'Joni Residence është një kompleks rezidencial i ri që po zhvillohet në Malishevë. Ky projekt premium ofron mundësi për një jetesë moderne dhe komode në një ambient të sigurt dhe të përshtatshëm.',
    location: 'Malishevë, Rr. Imer Krasniqi',
    heroImage: '/visuals/JoniResidenceVisuals/01_3 - Photo.jpg',
    cardImage: '/visuals/JoniResidenceVisuals/01_4 - Photo.jpg',
    features: [
      'Terraza private',
      'Siguri 24/7',
      'Parkim nëntokësor',
      'Elevator modern',
      'Materiale premium',
      'Dizajn modern',
    ],
    totalUnits: 0,
    availableUnits: 0,
    status: 'planning',
    completionDate: 'Në Planifikim',
    buildingCount: 1,
    hasInteractivePlans: true,
  },
  {
    id: 'etna',
    name: 'Etna Residence',
    nameEn: 'Etna Residence',
    description:
      'Etna Residence është projekti flagë i Etna Group, që përfshin më të mirën e arkitekturës moderne dhe teknologjisë së avancuar. Ky kompleks premium ofron një standard jetese të lartë në një lokacion strategjik. Të gjitha njësitë janë shitur.',
    location: 'Fushë Kosovë, Rr. Rexhep Mala',
    heroImage: '/buildings/etna-hero.jpg',
    features: [
      'Integrated private terraces',
      '24/7 security',
      'Underground parking',
      'Elevator modern',
      'Premium materials në të gjitha njësitë',
      'Rooftop amenities',
    ],
    totalUnits: 0,
    availableUnits: 0,
    status: 'completed',
    completionDate: 'I Përfunduar',
    buildingCount: 1,
    hasInteractivePlans: false, // All sold, no interactive plans needed
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id)
}

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.id === slug.toLowerCase())
}
