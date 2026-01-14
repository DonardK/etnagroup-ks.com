import { apiClient } from './client'
import type { AvailabilitySummary, Unit } from '../types'

export const availabilityApi = {
  getSummary: () =>
    apiClient.get<AvailabilitySummary[]>('/availability/summary'),
  
  getMoveInReady: () =>
    apiClient.get<Unit[]>('/availability/move-in-ready'),
}
