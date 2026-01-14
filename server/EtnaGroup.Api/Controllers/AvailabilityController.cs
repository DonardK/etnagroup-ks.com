using Microsoft.AspNetCore.Mvc;
using EtnaGroup.Api.DTOs;
using EtnaGroup.Api.Services;

namespace EtnaGroup.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AvailabilityController : ControllerBase
{
    private readonly IAvailabilityService _availabilityService;

    public AvailabilityController(IAvailabilityService availabilityService)
    {
        _availabilityService = availabilityService;
    }

    [HttpGet("summary")]
    public async Task<ActionResult<IEnumerable<AvailabilitySummaryDto>>> GetSummary()
    {
        var summary = await _availabilityService.GetAvailabilitySummaryAsync();
        return Ok(summary);
    }

    [HttpGet("move-in-ready")]
    public async Task<ActionResult<IEnumerable<UnitDto>>> GetMoveInReady()
    {
        var units = await _availabilityService.GetMoveInReadyUnitsAsync();
        return Ok(units);
    }
}
