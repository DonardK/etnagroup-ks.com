using EtnaGroup.Api.Models;

namespace EtnaGroup.Api.DTOs;

public class UnitDto
{
    public int Id { get; set; }
    public int BuildingId { get; set; }
    public string UnitNumber { get; set; } = string.Empty;
    public UnitType Type { get; set; }
    public int Bedrooms { get; set; }
    public decimal Bathrooms { get; set; }
    public decimal InteriorSqm { get; set; }
    public decimal ExteriorSqm { get; set; }
    public decimal TotalSqm { get; set; }
    public decimal Price { get; set; }
    public UnitStatus Status { get; set; }
    public bool MoveInReady { get; set; }
    public string Facing { get; set; } = string.Empty;
    public int Floor { get; set; }
    public string Plan2DUrl { get; set; } = string.Empty;
    public string Plan3DUrl { get; set; } = string.Empty;
    public string Gallery { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class CreateUnitDto
{
    public int BuildingId { get; set; }
    public string UnitNumber { get; set; } = string.Empty;
    public UnitType Type { get; set; }
    public int Bedrooms { get; set; }
    public decimal Bathrooms { get; set; }
    public decimal InteriorSqm { get; set; }
    public decimal ExteriorSqm { get; set; }
    public decimal TotalSqm { get; set; }
    public decimal Price { get; set; }
    public UnitStatus Status { get; set; } = UnitStatus.Available;
    public bool MoveInReady { get; set; }
    public string Facing { get; set; } = string.Empty;
    public int Floor { get; set; }
    public string Plan2DUrl { get; set; } = string.Empty;
    public string Plan3DUrl { get; set; } = string.Empty;
    public string Gallery { get; set; } = string.Empty;
}

public class UpdateUnitDto
{
    public string? UnitNumber { get; set; }
    public UnitType? Type { get; set; }
    public int? Bedrooms { get; set; }
    public decimal? Bathrooms { get; set; }
    public decimal? InteriorSqm { get; set; }
    public decimal? ExteriorSqm { get; set; }
    public decimal? TotalSqm { get; set; }
    public decimal? Price { get; set; }
    public UnitStatus? Status { get; set; }
    public bool? MoveInReady { get; set; }
    public string? Facing { get; set; }
    public int? Floor { get; set; }
    public string? Plan2DUrl { get; set; }
    public string? Plan3DUrl { get; set; }
    public string? Gallery { get; set; }
}

public class UnitFilterDto
{
    public UnitType? Type { get; set; }
    public UnitStatus? Status { get; set; }
    public bool? MoveInReady { get; set; }
    public decimal? MinPrice { get; set; }
    public decimal? MaxPrice { get; set; }
    public int? Bedrooms { get; set; }
    public int? BuildingId { get; set; }
}
