import { apiClient } from './client'
import type { Building } from '../types'

export const buildingsApi = {
  getAll: () => apiClient.get<Building[]>('/buildings'),
  
  getById: (id: number) => apiClient.get<Building>(`/buildings/${id}`),
  
  getByComplex: (complexId: number) =>
    apiClient.get<Building[]>(`/buildings/complexes/${complexId}/buildings`),
}
