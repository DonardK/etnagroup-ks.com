namespace EtnaGroup.Api.Models;

public class Building
{
    public int Id { get; set; }
    public int ComplexId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public int Floors { get; set; }
    public string Amenities { get; set; } = string.Empty;
    public string HeroImageUrl { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

    // Navigation properties
    public Complex Complex { get; set; } = null!;
    public ICollection<Unit> Units { get; set; } = new List<Unit>();
}
