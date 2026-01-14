using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using EtnaGroup.Api.Data;
using EtnaGroup.Api.Models;
using EtnaGroup.Api.DTOs;
using EtnaGroup.Api.Services;

namespace EtnaGroup.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UnitsController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;
    private readonly IUnitFilterService _filterService;

    public UnitsController(AppDbContext context, IMapper mapper, IUnitFilterService filterService)
    {
        _context = context;
        _mapper = mapper;
        _filterService = filterService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<UnitDto>>> GetUnits()
    {
        var units = await _context.Units.ToListAsync();
        return Ok(_mapper.Map<IEnumerable<UnitDto>>(units));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<UnitDto>> GetUnit(int id)
    {
        var unit = await _context.Units.FindAsync(id);

        if (unit == null)
        {
            return NotFound();
        }

        return Ok(_mapper.Map<UnitDto>(unit));
    }

    [HttpGet("buildings/{buildingId}/units")]
    public async Task<ActionResult<IEnumerable<UnitDto>>> GetUnitsByBuilding(int buildingId)
    {
        var units = await _context.Units
            .Where(u => u.BuildingId == buildingId)
            .ToListAsync();

        return Ok(_mapper.Map<IEnumerable<UnitDto>>(units));
    }

    [HttpGet("filter")]
    public async Task<ActionResult<IEnumerable<UnitDto>>> FilterUnits(
        [FromQuery] UnitType? type,
        [FromQuery] UnitStatus? status,
        [FromQuery] bool? moveInReady,
        [FromQuery] decimal? minPrice,
        [FromQuery] decimal? maxPrice,
        [FromQuery] int? bedrooms,
        [FromQuery] int? buildingId)
    {
        var filter = new UnitFilterDto
        {
            Type = type,
            Status = status,
            MoveInReady = moveInReady,
            MinPrice = minPrice,
            MaxPrice = maxPrice,
            Bedrooms = bedrooms,
            BuildingId = buildingId
        };

        var units = await _filterService.FilterUnitsAsync(filter);
        return Ok(units);
    }

    [HttpPost]
    public async Task<ActionResult<UnitDto>> CreateUnit(CreateUnitDto dto)
    {
        var unit = _mapper.Map<Unit>(dto);
        _context.Units.Add(unit);
        await _context.SaveChangesAsync();

        var unitDto = _mapper.Map<UnitDto>(unit);
        return CreatedAtAction(nameof(GetUnit), new { id = unit.Id }, unitDto);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUnit(int id, UpdateUnitDto dto)
    {
        var unit = await _context.Units.FindAsync(id);

        if (unit == null)
        {
            return NotFound();
        }

        _mapper.Map(dto, unit);
        unit.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpPatch("{id}/status")]
    public async Task<IActionResult> UpdateUnitStatus(int id, [FromBody] UnitStatus status)
    {
        var unit = await _context.Units.FindAsync(id);

        if (unit == null)
        {
            return NotFound();
        }

        unit.Status = status;
        unit.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUnit(int id)
    {
        var unit = await _context.Units.FindAsync(id);

        if (unit == null)
        {
            return NotFound();
        }

        _context.Units.Remove(unit);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
