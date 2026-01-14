namespace EtnaGroup.Api.DTOs;

public class BuildingDto
{
    public int Id { get; set; }
    public int ComplexId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public int Floors { get; set; }
    public string Amenities { get; set; } = string.Empty;
    public string HeroImageUrl { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

public class CreateBuildingDto
{
    public int ComplexId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public int Floors { get; set; }
    public string Amenities { get; set; } = string.Empty;
    public string HeroImageUrl { get; set; } = string.Empty;
}

public class UpdateBuildingDto
{
    public string? Name { get; set; }
    public string? Code { get; set; }
    public string? Address { get; set; }
    public int? Floors { get; set; }
    public string? Amenities { get; set; }
    public string? HeroImageUrl { get; set; }
}
