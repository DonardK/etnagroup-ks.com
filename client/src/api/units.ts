import { apiClient } from './client'
import type { Unit, UnitFilterParams } from '../types'

export const unitsApi = {
  getAll: () => apiClient.get<Unit[]>('/units'),
  
  getById: (id: number) => apiClient.get<Unit>(`/units/${id}`),
  
  getByBuilding: (buildingId: number) =>
    apiClient.get<Unit[]>(`/units/buildings/${buildingId}/units`),
  
  filter: (params: UnitFilterParams) =>
    apiClient.get<Unit[]>('/units/filter', params),
}
