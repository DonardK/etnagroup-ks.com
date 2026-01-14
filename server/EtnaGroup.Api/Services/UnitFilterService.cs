using Microsoft.EntityFrameworkCore;
using AutoMapper;
using EtnaGroup.Api.Data;
using EtnaGroup.Api.DTOs;
using EtnaGroup.Api.Models;

namespace EtnaGroup.Api.Services;

public class UnitFilterService : IUnitFilterService
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;

    public UnitFilterService(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<IEnumerable<UnitDto>> FilterUnitsAsync(UnitFilterDto filter)
    {
        var query = _context.Units.AsQueryable();

        if (filter.Type.HasValue)
        {
            query = query.Where(u => u.Type == filter.Type.Value);
        }

        if (filter.Status.HasValue)
        {
            query = query.Where(u => u.Status == filter.Status.Value);
        }

        if (filter.MoveInReady.HasValue)
        {
            query = query.Where(u => u.MoveInReady == filter.MoveInReady.Value);
        }

        if (filter.MinPrice.HasValue)
        {
            query = query.Where(u => u.Price >= filter.MinPrice.Value);
        }

        if (filter.MaxPrice.HasValue)
        {
            query = query.Where(u => u.Price <= filter.MaxPrice.Value);
        }

        if (filter.Bedrooms.HasValue)
        {
            query = query.Where(u => u.Bedrooms == filter.Bedrooms.Value);
        }

        if (filter.BuildingId.HasValue)
        {
            query = query.Where(u => u.BuildingId == filter.BuildingId.Value);
        }

        var units = await query.ToListAsync();
        return _mapper.Map<IEnumerable<UnitDto>>(units);
    }
}
