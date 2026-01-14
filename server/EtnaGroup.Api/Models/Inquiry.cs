namespace EtnaGroup.Api.Models;

public class Inquiry
{
    public int Id { get; set; }
    public int UnitId { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public string? Source { get; set; }
    public InquiryStatus Status { get; set; } = InquiryStatus.New;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Navigation properties
    public Unit Unit { get; set; } = null!;
}
