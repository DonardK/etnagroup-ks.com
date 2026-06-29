import type { Locale } from '../i18n/translations'

export interface Project {
  id: string
  name: string
  nameEn: string
  description: string
  descriptionEn?: string
  descriptionDe?: string
  location: string
  heroImage: string
  /** Image for cards on Home/About – different from hero so same image isn’t reused */
  cardImage?: string
  logo?: string
  features: string[]
  featuresEn?: string[]
  featuresDe?: string[]
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
    descriptionEn:
      'Elsa Residence is a premium residential complex in central Prishtina, combining modern elegance with maximum comfort. Every unit is carefully designed for luxurious living in a safe, well-connected environment.',
    descriptionDe:
      'Elsa Residence ist ein erstklassiger Wohnkomplex im Zentrum von Prishtina, der moderne Eleganz mit maximalem Komfort verbindet. Jede Einheit ist sorgfältig für luxuriöses Wohnen in einer sicheren und gut angebundenen Umgebung konzipiert.',
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
    featuresEn: [
      'Integrated private terraces',
      '24/7 security',
      'Underground parking',
      'Modern elevator',
      'Premium materials',
      'Panoramic city views',
    ],
    featuresDe: [
      'Integrierte private Terrassen',
      '24/7 Sicherheit',
      'Tiefgarage',
      'Moderner Aufzug',
      'Premium-Materialien',
      'Panoramablick auf die Stadt',
    ],
    totalUnits: 0,
    availableUnits: 0,
    status: 'under-construction',
    completionDate: 'Në Ndërtim',
    buildingCount: 5,
    hasInteractivePlans: true,
  },
  {
    id: 'tiani',
    name: 'Tiani Residence',
    nameEn: 'Tiani Residence',
    description:
      'Tiani Residence është një kompleks rezidencial i ri që kombinon dizajnin bashkëkohor me teknologjinë më të fundit. Me 8 kate dhe njësi të larmishme, ofron mundësi për çdo stil jetese.',
    descriptionEn:
      'Tiani Residence is a new residential complex combining contemporary design with the latest technology. With 8 floors and diverse unit types, it suits every lifestyle.',
    descriptionDe:
      'Tiani Residence ist ein neuer Wohnkomplex, der zeitgenössisches Design mit neuester Technologie verbindet. Mit 8 Etagen und vielfältigen Wohnungstypen eignet er sich für jeden Lebensstil.',
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
    featuresEn: [
      'Loft apartments with open floor plans',
      'Garden area',
      '24/7 security',
      'Underground parking',
      'Premium flooring',
      'Energy-efficient design',
    ],
    featuresDe: [
      'Loft-Wohnungen mit offenem Grundriss',
      'Gartenbereich',
      '24/7 Sicherheit',
      'Tiefgarage',
      'Premium-Bodenbeläge',
      'Energieeffizientes Design',
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
    descriptionEn:
      'Tara Residence represents the pinnacle of modern architecture and premium living. With 8 floors and sophisticated units, this complex offers an exceptional experience in the heart of Prizren.',
    descriptionDe:
      'Tara Residence steht für den Gipfel moderner Architektur und exklusiven Wohnens. Mit 8 Etagen und anspruchsvoll gestalteten Einheiten bietet dieser Komplex ein außergewöhnliches Wohnerlebnis im Herzen von Prizren.',
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
    featuresEn: [
      'Penthouse with panoramic terrace',
      'Rooftop terrace',
      '24/7 security',
      'Underground parking',
      'Ventilated facade system',
      'Premium acoustic insulation',
    ],
    featuresDe: [
      'Penthouse mit Panoramterrasse',
      'Dachterrasse',
      '24/7 Sicherheit',
      'Tiefgarage',
      'Belüftete Fassade',
      'Premium-Schallschutz',
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
    descriptionEn:
      'Joni Residence is a new residential complex under development in Malisheva, offering modern, comfortable living in a safe and convenient setting.',
    descriptionDe:
      'Joni Residence ist ein neuer Wohnkomplex in Entwicklung in Malisheva, der modernes und komfortables Wohnen in einer sicheren und günstigen Umgebung bietet.',
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
    featuresEn: [
      'Private terraces',
      '24/7 security',
      'Underground parking',
      'Modern elevator',
      'Premium materials',
      'Modern design',
    ],
    featuresDe: [
      'Private Terrassen',
      '24/7 Sicherheit',
      'Tiefgarage',
      'Moderner Aufzug',
      'Premium-Materialien',
      'Modernes Design',
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
    descriptionEn:
      'Etna Residence is Etna Group\'s flagship project, featuring the best of modern architecture and advanced technology. All units are sold out.',
    descriptionDe:
      'Etna Residence ist das Flaggschiffprojekt der Etna Group und vereint modernste Architektur mit fortschrittlicher Technologie. Alle Einheiten sind ausverkauft.',
    location: 'Fushë Kosovë, Rr. Rexhep Mala',
    heroImage: '/visuals/EtnaResidenceVisuals/BG_SLIDE1.jpg',
    cardImage: '/visuals/EtnaResidenceVisuals/objekti-scaled.jpg',
    features: [
      'Terraza private të integruara',
      'Siguri 24/7',
      'Parkim nëntokësor',
      'Elevator modern',
      'Materiale premium në të gjitha njësitë',
      'Amenities në çati',
    ],
    featuresEn: [
      'Integrated private terraces',
      '24/7 security',
      'Underground parking',
      'Modern elevator',
      'Premium materials in every unit',
      'Rooftop amenities',
    ],
    featuresDe: [
      'Integrierte private Terrassen',
      '24/7 Sicherheit',
      'Tiefgarage',
      'Moderner Aufzug',
      'Premium-Materialien in allen Einheiten',
      'Dachterrassen-Ausstattung',
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

export const getLocalizedProject = (project: Project, locale: Locale): Project => {
  if (locale === 'sq') return project

  const description =
    locale === 'de'
      ? (project.descriptionDe ?? project.descriptionEn ?? project.description)
      : (project.descriptionEn ?? project.description)

  const features =
    locale === 'de' && project.featuresDe
      ? project.featuresDe
      : locale === 'en' && project.featuresEn
        ? project.featuresEn
        : project.features

  return { ...project, description, features }
}
