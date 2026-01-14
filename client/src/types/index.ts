export enum UnitStatus {
  Available = 'Available',
  Reserved = 'Reserved',
  Sold = 'Sold',
}

export enum UnitType {
  Penthouse = 'Penthouse',
  Loft = 'Loft',
  TypeA = 'TypeA',
  TypeB = 'TypeB',
}

export enum InquiryStatus {
  New = 'New',
  Contacted = 'Contacted',
  Qualified = 'Qualified',
  Lost = 'Lost',
}

export interface Complex {
  id: number
  name: string
  city: string
  country: string
  description: string
  heroImageUrl: string
  createdAt: string
  updatedAt: string
}

export interface Building {
  id: number
  complexId: number
  name: string
  code: string
  address: string
  floors: number
  amenities: string
  heroImageUrl: string
  createdAt: string
  updatedAt: string
}

export interface Unit {
  id: number
  buildingId: number
  unitNumber: string
  type: UnitType
  bedrooms: number
  bathrooms: number
  interiorSqm: number
  exteriorSqm: number
  totalSqm: number
  price: number
  status: UnitStatus
  moveInReady: boolean
  facing: string
  floor: number
  plan2DUrl: string
  plan3DUrl: string
  gallery: string
  createdAt: string
  updatedAt: string
}

export interface Inquiry {
  id: number
  unitId: number
  fullName: string
  email: string
  phone: string
  message: string
  source?: string
  status: InquiryStatus
  createdAt: string
}

export interface UnitFilterParams {
  type?: UnitType
  status?: UnitStatus
  moveInReady?: boolean
  minPrice?: number
  maxPrice?: number
  bedrooms?: number
  buildingId?: number
}

export interface AvailabilitySummary {
  buildingName: string
  unitType: UnitType
  available: number
  reserved: number
  sold: number
}
