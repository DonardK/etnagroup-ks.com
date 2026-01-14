using Microsoft.EntityFrameworkCore;
using EtnaGroup.Api.Models;

namespace EtnaGroup.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Complex> Complexes { get; set; } = null!;
    public DbSet<Building> Buildings { get; set; } = null!;
    public DbSet<Unit> Units { get; set; } = null!;
    public DbSet<Inquiry> Inquiries { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Complex configuration
        modelBuilder.Entity<Complex>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Name).IsRequired().HasMaxLength(200);
            entity.Property(e => e.City).IsRequired().HasMaxLength(100);
            entity.Property(e => e.Country).IsRequired().HasMaxLength(100);
            entity.Property(e => e.Description).HasMaxLength(2000);
            entity.Property(e => e.HeroImageUrl).HasMaxLength(500);
        });

        // Building configuration
        modelBuilder.Entity<Building>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Name).IsRequired().HasMaxLength(200);
            entity.Property(e => e.Code).IsRequired().HasMaxLength(50);
            entity.Property(e => e.Address).HasMaxLength(500);
            entity.Property(e => e.Amenities).HasMaxLength(2000);
            entity.Property(e => e.HeroImageUrl).HasMaxLength(500);

            entity.HasOne(e => e.Complex)
                .WithMany(e => e.Buildings)
                .HasForeignKey(e => e.ComplexId)
                .OnDelete(DeleteBehavior.Cascade);
        });

        // Unit configuration
        modelBuilder.Entity<Unit>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.UnitNumber).IsRequired().HasMaxLength(50);
            entity.Property(e => e.Type).IsRequired();
            entity.Property(e => e.Status).IsRequired();
            entity.Property(e => e.Price).HasPrecision(18, 2);
            entity.Property(e => e.InteriorSqm).HasPrecision(10, 2);
            entity.Property(e => e.ExteriorSqm).HasPrecision(10, 2);
            entity.Property(e => e.TotalSqm).HasPrecision(10, 2);
            entity.Property(e => e.Bathrooms).HasPrecision(3, 1);
            entity.Property(e => e.Facing).HasMaxLength(50);
            entity.Property(e => e.Plan2DUrl).HasMaxLength(500);
            entity.Property(e => e.Plan3DUrl).HasMaxLength(500);
            entity.Property(e => e.Gallery).HasMaxLength(2000);

            entity.HasOne(e => e.Building)
                .WithMany(e => e.Units)
                .HasForeignKey(e => e.BuildingId)
                .OnDelete(DeleteBehavior.Cascade);
        });

        // Inquiry configuration
        modelBuilder.Entity<Inquiry>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.FullName).IsRequired().HasMaxLength(200);
            entity.Property(e => e.Email).IsRequired().HasMaxLength(200);
            entity.Property(e => e.Phone).IsRequired().HasMaxLength(50);
            entity.Property(e => e.Message).HasMaxLength(2000);
            entity.Property(e => e.Source).HasMaxLength(100);
            entity.Property(e => e.Status).IsRequired();

            entity.HasOne(e => e.Unit)
                .WithMany(e => e.Inquiries)
                .HasForeignKey(e => e.UnitId)
                .OnDelete(DeleteBehavior.Cascade);
        });

        // Seed data
        SeedData(modelBuilder);
    }

    private void SeedData(ModelBuilder modelBuilder)
    {
        // Seed Complex
        modelBuilder.Entity<Complex>().HasData(
            new Complex
            {
                Id = 1,
                Name = "Etna Residence",
                City = "Pristina",
                Country = "Kosovo",
                Description = "Premium residential complex offering modern living spaces with world-class amenities",
                HeroImageUrl = "/buildings/etna-hero.jpg",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            }
        );

        // Seed Buildings - Tara and Tiani
        modelBuilder.Entity<Building>().HasData(
            new Building
            {
                Id = 1,
                ComplexId = 1,
                Name = "Tara",
                Code = "TARA",
                Address = "Etna Residence, Pristina",
                Floors = 12,
                Amenities = "24/7 Security, Underground Parking, Fitness Center, Rooftop Terrace",
                HeroImageUrl = "/buildings/tara-hero.jpg",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new Building
            {
                Id = 2,
                ComplexId = 1,
                Name = "Tiani",
                Code = "TIANI",
                Address = "Etna Residence, Pristina",
                Floors = 10,
                Amenities = "24/7 Security, Underground Parking, Swimming Pool, Garden Area",
                HeroImageUrl = "/buildings/tiani-hero.jpg",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            }
        );

        // Seed Units - Sample units for Tara
        modelBuilder.Entity<Unit>().HasData(
            new Unit
            {
                Id = 1,
                BuildingId = 1,
                UnitNumber = "PH-01",
                Type = UnitType.Penthouse,
                Bedrooms = 3,
                Bathrooms = 2.5m,
                InteriorSqm = 180.5m,
                ExteriorSqm = 85.0m,
                TotalSqm = 265.5m,
                Price = 450000m,
                Status = UnitStatus.Available,
                MoveInReady = true,
                Facing = "South",
                Floor = 12,
                Plan2DUrl = "/buildings/tara-plan-2d.png",
                Plan3DUrl = "/buildings/tara-plan-3d.png",
                Gallery = "[]",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new Unit
            {
                Id = 2,
                BuildingId = 1,
                UnitNumber = "PH-02",
                Type = UnitType.Penthouse,
                Bedrooms = 4,
                Bathrooms = 3.0m,
                InteriorSqm = 220.0m,
                ExteriorSqm = 120.0m,
                TotalSqm = 340.0m,
                Price = 580000m,
                Status = UnitStatus.Available,
                MoveInReady = false,
                Facing = "North",
                Floor = 12,
                Plan2DUrl = "/buildings/tara-plan-2d.png",
                Plan3DUrl = "/buildings/tara-plan-3d.png",
                Gallery = "[]",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new Unit
            {
                Id = 3,
                BuildingId = 1,
                UnitNumber = "A-05",
                Type = UnitType.TypeA,
                Bedrooms = 2,
                Bathrooms = 2.0m,
                InteriorSqm = 95.0m,
                ExteriorSqm = 15.0m,
                TotalSqm = 110.0m,
                Price = 185000m,
                Status = UnitStatus.Available,
                MoveInReady = true,
                Facing = "East",
                Floor = 5,
                Plan2DUrl = "/buildings/tara-plan-2d.png",
                Plan3DUrl = "/buildings/tara-plan-3d.png",
                Gallery = "[]",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new Unit
            {
                Id = 4,
                BuildingId = 2,
                UnitNumber = "L-01",
                Type = UnitType.Loft,
                Bedrooms = 2,
                Bathrooms = 1.5m,
                InteriorSqm = 120.0m,
                ExteriorSqm = 25.0m,
                TotalSqm = 145.0m,
                Price = 245000m,
                Status = UnitStatus.Reserved,
                MoveInReady = true,
                Facing = "West",
                Floor = 8,
                Plan2DUrl = "/buildings/tiani-plan-2d.png",
                Plan3DUrl = "/buildings/tiani-plan-3d.png",
                Gallery = "[]",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new Unit
            {
                Id = 5,
                BuildingId = 2,
                UnitNumber = "B-03",
                Type = UnitType.TypeB,
                Bedrooms = 3,
                Bathrooms = 2.0m,
                InteriorSqm = 135.0m,
                ExteriorSqm = 20.0m,
                TotalSqm = 155.0m,
                Price = 265000m,
                Status = UnitStatus.Sold,
                MoveInReady = false,
                Facing = "South",
                Floor = 4,
                Plan2DUrl = "/buildings/tiani-plan-2d.png",
                Plan3DUrl = "/buildings/tiani-plan-3d.png",
                Gallery = "[]",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            }
        );
    }
}
