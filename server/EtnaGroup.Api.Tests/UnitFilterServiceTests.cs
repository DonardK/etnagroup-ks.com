using Microsoft.EntityFrameworkCore;
using AutoMapper;
using Xunit;
using EtnaGroup.Api.Data;
using EtnaGroup.Api.Models;
using EtnaGroup.Api.DTOs;
using EtnaGroup.Api.Services;
using EtnaGroup.Api.Profiles;

namespace EtnaGroup.Api.Tests;

public class UnitFilterServiceTests
{
    private readonly IMapper _mapper;

    public UnitFilterServiceTests()
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
    public async Task FilterUnitsAsync_ByType_ReturnsFilteredUnits()
    {
        // Arrange
        using var context = GetInMemoryDbContext();
        context.Units.AddRange(
            new Unit { Id = 1, Type = UnitType.Penthouse, BuildingId = 1, UnitNumber = "PH1", Price = 100000 },
            new Unit { Id = 2, Type = UnitType.Loft, BuildingId = 1, UnitNumber = "L1", Price = 80000 },
            new Unit { Id = 3, Type = UnitType.Penthouse, BuildingId = 1, UnitNumber = "PH2", Price = 120000 }
        );
        await context.SaveChangesAsync();

        var service = new UnitFilterService(context, _mapper);
        var filter = new UnitFilterDto { Type = UnitType.Penthouse };

        // Act
        var result = await service.FilterUnitsAsync(filter);

        // Assert
        Assert.Equal(2, result.Count());
        Assert.All(result, u => Assert.Equal(UnitType.Penthouse, u.Type));
    }

    [Fact]
    public async Task FilterUnitsAsync_ByStatus_ReturnsFilteredUnits()
    {
        // Arrange
        using var context = GetInMemoryDbContext();
        context.Units.AddRange(
            new Unit { Id = 1, Status = UnitStatus.Available, BuildingId = 1, UnitNumber = "U1", Type = UnitType.TypeA, Price = 100000 },
            new Unit { Id = 2, Status = UnitStatus.Sold, BuildingId = 1, UnitNumber = "U2", Type = UnitType.TypeA, Price = 80000 },
            new Unit { Id = 3, Status = UnitStatus.Available, BuildingId = 1, UnitNumber = "U3", Type = UnitType.TypeA, Price = 120000 }
        );
        await context.SaveChangesAsync();

        var service = new UnitFilterService(context, _mapper);
        var filter = new UnitFilterDto { Status = UnitStatus.Available };

        // Act
        var result = await service.FilterUnitsAsync(filter);

        // Assert
        Assert.Equal(2, result.Count());
        Assert.All(result, u => Assert.Equal(UnitStatus.Available, u.Status));
    }

    [Fact]
    public async Task FilterUnitsAsync_ByMoveInReady_ReturnsFilteredUnits()
    {
        // Arrange
        using var context = GetInMemoryDbContext();
        context.Units.AddRange(
            new Unit { Id = 1, MoveInReady = true, BuildingId = 1, UnitNumber = "U1", Type = UnitType.TypeA, Price = 100000 },
            new Unit { Id = 2, MoveInReady = false, BuildingId = 1, UnitNumber = "U2", Type = UnitType.TypeA, Price = 80000 },
            new Unit { Id = 3, MoveInReady = true, BuildingId = 1, UnitNumber = "U3", Type = UnitType.TypeA, Price = 120000 }
        );
        await context.SaveChangesAsync();

        var service = new UnitFilterService(context, _mapper);
        var filter = new UnitFilterDto { MoveInReady = true };

        // Act
        var result = await service.FilterUnitsAsync(filter);

        // Assert
        Assert.Equal(2, result.Count());
        Assert.All(result, u => Assert.True(u.MoveInReady));
    }

    [Fact]
    public async Task FilterUnitsAsync_ByPriceRange_ReturnsFilteredUnits()
    {
        // Arrange
        using var context = GetInMemoryDbContext();
        context.Units.AddRange(
            new Unit { Id = 1, Price = 50000, BuildingId = 1, UnitNumber = "U1", Type = UnitType.TypeA },
            new Unit { Id = 2, Price = 100000, BuildingId = 1, UnitNumber = "U2", Type = UnitType.TypeA },
            new Unit { Id = 3, Price = 150000, BuildingId = 1, UnitNumber = "U3", Type = UnitType.TypeA }
        );
        await context.SaveChangesAsync();

        var service = new UnitFilterService(context, _mapper);
        var filter = new UnitFilterDto { MinPrice = 75000, MaxPrice = 125000 };

        // Act
        var result = await service.FilterUnitsAsync(filter);

        // Assert
        Assert.Single(result);
        Assert.Equal(100000, result.First().Price);
    }

    [Fact]
    public async Task FilterUnitsAsync_MultipleFilters_ReturnsCorrectUnits()
    {
        // Arrange
        using var context = GetInMemoryDbContext();
        context.Units.AddRange(
            new Unit { Id = 1, Type = UnitType.Penthouse, Status = UnitStatus.Available, Price = 150000, BuildingId = 1, UnitNumber = "PH1" },
            new Unit { Id = 2, Type = UnitType.Penthouse, Status = UnitStatus.Sold, Price = 160000, BuildingId = 1, UnitNumber = "PH2" },
            new Unit { Id = 3, Type = UnitType.Loft, Status = UnitStatus.Available, Price = 100000, BuildingId = 1, UnitNumber = "L1" }
        );
        await context.SaveChangesAsync();

        var service = new UnitFilterService(context, _mapper);
        var filter = new UnitFilterDto 
        { 
            Type = UnitType.Penthouse, 
            Status = UnitStatus.Available 
        };

        // Act
        var result = await service.FilterUnitsAsync(filter);

        // Assert
        Assert.Single(result);
        Assert.Equal(UnitType.Penthouse, result.First().Type);
        Assert.Equal(UnitStatus.Available, result.First().Status);
    }
}
