namespace EtnaGroup.Api.Models;

public class Unit
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
    public UnitStatus Status { get; set; } = UnitStatus.Available;
    public bool MoveInReady { get; set; }
    public string Facing { get; set; } = string.Empty;
    public int Floor { get; set; }
    public string Plan2DUrl { get; set; } = string.Empty;
    public string Plan3DUrl { get; set; } = string.Empty;
    public string Gallery { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Navigation properties
    public Building Building { get; set; } = null!;
    public ICollection<Inquiry> Inquiries { get; set; } = new List<Inquiry>();
}
