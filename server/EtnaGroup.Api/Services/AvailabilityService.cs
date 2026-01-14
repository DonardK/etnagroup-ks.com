using Microsoft.EntityFrameworkCore;
using AutoMapper;
using EtnaGroup.Api.Data;
using EtnaGroup.Api.DTOs;
using EtnaGroup.Api.Models;

namespace EtnaGroup.Api.Services;

public class AvailabilityService : IAvailabilityService
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;

    public AvailabilityService(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<IEnumerable<AvailabilitySummaryDto>> GetAvailabilitySummaryAsync()
    {
        var summary = await _context.Units
            .Include(u => u.Building)
            .GroupBy(u => new { u.Building.Name, u.Type })
            .Select(g => new AvailabilitySummaryDto
            {
                BuildingName = g.Key.Name,
                UnitType = g.Key.Type,
                Available = g.Count(u => u.Status == UnitStatus.Available),
                Reserved = g.Count(u => u.Status == UnitStatus.Reserved),
                Sold = g.Count(u => u.Status == UnitStatus.Sold)
            })
            .ToListAsync();

        return summary;
    }

    public async Task<IEnumerable<UnitDto>> GetMoveInReadyUnitsAsync()
    {
        var units = await _context.Units
            .Where(u => u.MoveInReady && u.Status == UnitStatus.Available)
            .ToListAsync();

        return _mapper.Map<IEnumerable<UnitDto>>(units);
    }
}
