using EtnaGroup.Api.Models;

namespace EtnaGroup.Api.DTOs;

public class AvailabilitySummaryDto
{
    public string BuildingName { get; set; } = string.Empty;
    public UnitType UnitType { get; set; }
    public int Available { get; set; }
    public int Reserved { get; set; }
    public int Sold { get; set; }
}
