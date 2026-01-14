import { useQuery } from '@tanstack/react-query'
import { buildingsApi } from '../api/buildings'

export const useBuildings = () => {
  return useQuery({
    queryKey: ['buildings'],
    queryFn: buildingsApi.getAll,
  })
}

export const useBuilding = (id: number) => {
  return useQuery({
    queryKey: ['buildings', id],
    queryFn: () => buildingsApi.getById(id),
    enabled: !!id,
  })
}

export const useBuildingsByComplex = (complexId: number) => {
  return useQuery({
    queryKey: ['buildings', 'complex', complexId],
    queryFn: () => buildingsApi.getByComplex(complexId),
    enabled: !!complexId,
  })
}
