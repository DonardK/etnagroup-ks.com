using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using EtnaGroup.Api.Data;
using EtnaGroup.Api.Models;
using EtnaGroup.Api.DTOs;

namespace EtnaGroup.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BuildingsController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;

    public BuildingsController(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<BuildingDto>>> GetBuildings()
    {
        var buildings = await _context.Buildings.ToListAsync();
        return Ok(_mapper.Map<IEnumerable<BuildingDto>>(buildings));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<BuildingDto>> GetBuilding(int id)
    {
        var building = await _context.Buildings.FindAsync(id);

        if (building == null)
        {
            return NotFound();
        }

        return Ok(_mapper.Map<BuildingDto>(building));
    }

    [HttpGet("complexes/{complexId}/buildings")]
    public async Task<ActionResult<IEnumerable<BuildingDto>>> GetBuildingsByComplex(int complexId)
    {
        var buildings = await _context.Buildings
            .Where(b => b.ComplexId == complexId)
            .ToListAsync();

        return Ok(_mapper.Map<IEnumerable<BuildingDto>>(buildings));
    }

    [HttpPost]
    public async Task<ActionResult<BuildingDto>> CreateBuilding(CreateBuildingDto dto)
    {
        var building = _mapper.Map<Building>(dto);
        _context.Buildings.Add(building);
        await _context.SaveChangesAsync();

        var buildingDto = _mapper.Map<BuildingDto>(building);
        return CreatedAtAction(nameof(GetBuilding), new { id = building.Id }, buildingDto);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateBuilding(int id, UpdateBuildingDto dto)
    {
        var building = await _context.Buildings.FindAsync(id);

        if (building == null)
        {
            return NotFound();
        }

        _mapper.Map(dto, building);
        building.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBuilding(int id)
    {
        var building = await _context.Buildings.FindAsync(id);

        if (building == null)
        {
            return NotFound();
        }

        _context.Buildings.Remove(building);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
