using EtnaGroup.Api.DTOs;

namespace EtnaGroup.Api.Services;

public interface IUnitFilterService
{
    Task<IEnumerable<UnitDto>> FilterUnitsAsync(UnitFilterDto filter);
}
