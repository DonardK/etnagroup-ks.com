import { useQuery } from '@tanstack/react-query'
import { unitsApi } from '../api/units'
import type { UnitFilterParams } from '../types'

export const useUnits = () => {
  return useQuery({
    queryKey: ['units'],
    queryFn: unitsApi.getAll,
  })
}

export const useUnit = (id: number) => {
  return useQuery({
    queryKey: ['units', id],
    queryFn: () => unitsApi.getById(id),
    enabled: !!id,
  })
}

export const useUnitsByBuilding = (buildingId: number) => {
  return useQuery({
    queryKey: ['units', 'building', buildingId],
    queryFn: () => unitsApi.getByBuilding(buildingId),
    enabled: !!buildingId,
  })
}

export const useFilteredUnits = (filters: UnitFilterParams) => {
  return useQuery({
    queryKey: ['units', 'filter', filters],
    queryFn: () => unitsApi.filter(filters),
  })
}
