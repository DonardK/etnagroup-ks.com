using EtnaGroup.Api.Models;

namespace EtnaGroup.Api.DTOs;

public class InquiryDto
{
    public int Id { get; set; }
    public int UnitId { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public string? Source { get; set; }
    public InquiryStatus Status { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class CreateInquiryDto
{
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
    public string? Source { get; set; }
}

public class UpdateInquiryStatusDto
{
    public InquiryStatus Status { get; set; }
}
