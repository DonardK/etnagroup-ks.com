using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using EtnaGroup.Api.Data;
using EtnaGroup.Api.Models;
using EtnaGroup.Api.DTOs;

namespace EtnaGroup.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ComplexesController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;

    public ComplexesController(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ComplexDto>>> GetComplexes()
    {
        var complexes = await _context.Complexes.ToListAsync();
        return Ok(_mapper.Map<IEnumerable<ComplexDto>>(complexes));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ComplexDto>> GetComplex(int id)
    {
        var complex = await _context.Complexes.FindAsync(id);

        if (complex == null)
        {
            return NotFound();
        }

        return Ok(_mapper.Map<ComplexDto>(complex));
    }

    [HttpPost]
    public async Task<ActionResult<ComplexDto>> CreateComplex(CreateComplexDto dto)
    {
        var complex = _mapper.Map<Complex>(dto);
        _context.Complexes.Add(complex);
        await _context.SaveChangesAsync();

        var complexDto = _mapper.Map<ComplexDto>(complex);
        return CreatedAtAction(nameof(GetComplex), new { id = complex.Id }, complexDto);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateComplex(int id, UpdateComplexDto dto)
    {
        var complex = await _context.Complexes.FindAsync(id);

        if (complex == null)
        {
            return NotFound();
        }

        _mapper.Map(dto, complex);
        complex.UpdatedAt = DateTime.UtcNow;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteComplex(int id)
    {
        var complex = await _context.Complexes.FindAsync(id);

        if (complex == null)
        {
            return NotFound();
        }

        _context.Complexes.Remove(complex);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
