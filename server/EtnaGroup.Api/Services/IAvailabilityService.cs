using EtnaGroup.Api.DTOs;

namespace EtnaGroup.Api.Services;

public interface IAvailabilityService
{
    Task<IEnumerable<AvailabilitySummaryDto>> GetAvailabilitySummaryAsync();
    Task<IEnumerable<UnitDto>> GetMoveInReadyUnitsAsync();
}
