import { useQuery } from '@tanstack/react-query'
import { availabilityApi } from '../api/availability'

export const useAvailabilitySummary = () => {
  return useQuery({
    queryKey: ['availability', 'summary'],
    queryFn: availabilityApi.getSummary,
  })
}

export const useMoveInReadyUnits = () => {
  return useQuery({
    queryKey: ['availability', 'move-in-ready'],
    queryFn: availabilityApi.getMoveInReady,
  })
}
