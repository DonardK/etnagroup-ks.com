using Microsoft.EntityFrameworkCore;
using AutoMapper;
using Xunit;
using EtnaGroup.Api.Data;
using EtnaGroup.Api.Models;
using EtnaGroup.Api.Services;
using EtnaGroup.Api.Profiles;

namespace EtnaGroup.Api.Tests;

public class AvailabilityServiceTests
{
    private readonly IMapper _mapper;

    public AvailabilityServiceTests()
    {
        var config = new MapperConfiguration(cfg => cfg.AddProfile<MappingProfile>());
        _mapper = config.CreateMapper();
    }

    private AppDbContext GetInMemoryDbContext()
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
            .Options;

        return new AppDbContext(options);
    }

    [Fact]
    public async Task GetAvailabilitySummaryAsync_ReturnsCorrectSummary()
    {
        // Arrange
        using var context = GetInMemoryDbContext();
        
        var building = new Building 
        { 
            Id = 1, 
            Name = "Test Building", 
            ComplexId = 1,
            Code = "TB",
            Address = "123 Test St"
        };
        context.Buildings.Add(building);
        
        context.Units.AddRange(
            new Unit { Id = 1, Type = UnitType.Penthouse, Status = UnitStatus.Available, BuildingId = 1, UnitNumber = "PH1", Price = 100000 },
            new Unit { Id = 2, Type = UnitType.Penthouse, Status = UnitStatus.Available, BuildingId = 1, UnitNumber = "PH2", Price = 110000 },
            new Unit { Id = 3, Type = UnitType.Penthouse, Status = UnitStatus.Reserved, BuildingId = 1, UnitNumber = "PH3", Price = 120000 },
            new Unit { Id = 4, Type = UnitType.Penthouse, Status = UnitStatus.Sold, BuildingId = 1, UnitNumber = "PH4", Price = 130000 }
        );
        await context.SaveChangesAsync();

        var service = new AvailabilityService(context, _mapper);

        // Act
        var result = await service.GetAvailabilitySummaryAsync();

        // Assert
        var summary = result.First();
        Assert.Equal("Test Building", summary.BuildingName);
        Assert.Equal(UnitType.Penthouse, summary.UnitType);
        Assert.Equal(2, summary.Available);
        Assert.Equal(1, summary.Reserved);
        Assert.Equal(1, summary.Sold);
    }

    [Fact]
    public async Task GetMoveInReadyUnitsAsync_ReturnsOnlyAvailableAndReady()
    {
        // Arrange
        using var context = GetInMemoryDbContext();
        context.Units.AddRange(
            new Unit { Id = 1, MoveInReady = true, Status = UnitStatus.Available, BuildingId = 1, UnitNumber = "U1", Type = UnitType.TypeA, Price = 100000 },
            new Unit { Id = 2, MoveInReady = true, Status = UnitStatus.Sold, BuildingId = 1, UnitNumber = "U2", Type = UnitType.TypeA, Price = 80000 },
            new Unit { Id = 3, MoveInReady = false, Status = UnitStatus.Available, BuildingId = 1, UnitNumber = "U3", Type = UnitType.TypeA, Price = 120000 }
        );
        await context.SaveChangesAsync();

        var service = new AvailabilityService(context, _mapper);

        // Act
        var result = await service.GetMoveInReadyUnitsAsync();

        // Assert
        Assert.Single(result);
        var unit = result.First();
        Assert.True(unit.MoveInReady);
        Assert.Equal(UnitStatus.Available, unit.Status);
    }

    [Fact]
    public async Task GetAvailabilitySummaryAsync_GroupsByBuildingAndType()
    {
        // Arrange
        using var context = GetInMemoryDbContext();
        
        var building1 = new Building { Id = 1, Name = "Building 1", ComplexId = 1, Code = "B1", Address = "123" };
        var building2 = new Building { Id = 2, Name = "Building 2", ComplexId = 1, Code = "B2", Address = "456" };
        context.Buildings.AddRange(building1, building2);
        
        context.Units.AddRange(
            new Unit { Id = 1, Type = UnitType.Penthouse, Status = UnitStatus.Available, BuildingId = 1, UnitNumber = "PH1", Price = 100000 },
            new Unit { Id = 2, Type = UnitType.Loft, Status = UnitStatus.Available, BuildingId = 1, UnitNumber = "L1", Price = 80000 },
            new Unit { Id = 3, Type = UnitType.Penthouse, Status = UnitStatus.Available, BuildingId = 2, UnitNumber = "PH2", Price = 120000 }
        );
        await context.SaveChangesAsync();

        var service = new AvailabilityService(context, _mapper);

        // Act
        var result = await service.GetAvailabilitySummaryAsync();

        // Assert
        Assert.Equal(3, result.Count());
        Assert.Contains(result, r => r.BuildingName == "Building 1" && r.UnitType == UnitType.Penthouse);
        Assert.Contains(result, r => r.BuildingName == "Building 1" && r.UnitType == UnitType.Loft);
        Assert.Contains(result, r => r.BuildingName == "Building 2" && r.UnitType == UnitType.Penthouse);
    }
}
