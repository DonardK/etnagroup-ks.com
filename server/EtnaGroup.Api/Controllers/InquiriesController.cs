using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using EtnaGroup.Api.Data;
using EtnaGroup.Api.Models;
using EtnaGroup.Api.DTOs;

namespace EtnaGroup.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class InquiriesController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;

    public InquiriesController(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<InquiryDto>>> GetInquiries()
    {
        var inquiries = await _context.Inquiries.ToListAsync();
        return Ok(_mapper.Map<IEnumerable<InquiryDto>>(inquiries));
    }

    [HttpPost("units/{unitId}/inquiries")]
    public async Task<ActionResult<InquiryDto>> CreateInquiry(int unitId, CreateInquiryDto dto)
    {
        var unit = await _context.Units.FindAsync(unitId);
        if (unit == null)
        {
            return NotFound("Unit not found");
        }

        var inquiry = _mapper.Map<Inquiry>(dto);
        inquiry.UnitId = unitId;
        
        _context.Inquiries.Add(inquiry);
        await _context.SaveChangesAsync();

        var inquiryDto = _mapper.Map<InquiryDto>(inquiry);
        return CreatedAtAction(nameof(GetInquiries), new { id = inquiry.Id }, inquiryDto);
    }

    [HttpPatch("{id}/status")]
    public async Task<IActionResult> UpdateInquiryStatus(int id, UpdateInquiryStatusDto dto)
    {
        var inquiry = await _context.Inquiries.FindAsync(id);

        if (inquiry == null)
        {
            return NotFound();
        }

        inquiry.Status = dto.Status;
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
