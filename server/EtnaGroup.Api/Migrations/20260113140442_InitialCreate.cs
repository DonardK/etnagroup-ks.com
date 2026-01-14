using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace EtnaGroup.Api.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Complexes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    City = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Country = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "TEXT", maxLength: 2000, nullable: false),
                    HeroImageUrl = table.Column<string>(type: "TEXT", maxLength: 500, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Complexes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Buildings",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ComplexId = table.Column<int>(type: "INTEGER", nullable: false),
                    Name = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    Code = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false),
                    Address = table.Column<string>(type: "TEXT", maxLength: 500, nullable: false),
                    Floors = table.Column<int>(type: "INTEGER", nullable: false),
                    Amenities = table.Column<string>(type: "TEXT", maxLength: 2000, nullable: false),
                    HeroImageUrl = table.Column<string>(type: "TEXT", maxLength: 500, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Buildings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Buildings_Complexes_ComplexId",
                        column: x => x.ComplexId,
                        principalTable: "Complexes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Units",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    BuildingId = table.Column<int>(type: "INTEGER", nullable: false),
                    UnitNumber = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false),
                    Type = table.Column<int>(type: "INTEGER", nullable: false),
                    Bedrooms = table.Column<int>(type: "INTEGER", nullable: false),
                    Bathrooms = table.Column<decimal>(type: "TEXT", precision: 3, scale: 1, nullable: false),
                    InteriorSqm = table.Column<decimal>(type: "TEXT", precision: 10, scale: 2, nullable: false),
                    ExteriorSqm = table.Column<decimal>(type: "TEXT", precision: 10, scale: 2, nullable: false),
                    TotalSqm = table.Column<decimal>(type: "TEXT", precision: 10, scale: 2, nullable: false),
                    Price = table.Column<decimal>(type: "TEXT", precision: 18, scale: 2, nullable: false),
                    Status = table.Column<int>(type: "INTEGER", nullable: false),
                    MoveInReady = table.Column<bool>(type: "INTEGER", nullable: false),
                    Facing = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false),
                    Floor = table.Column<int>(type: "INTEGER", nullable: false),
                    Plan2DUrl = table.Column<string>(type: "TEXT", maxLength: 500, nullable: false),
                    Plan3DUrl = table.Column<string>(type: "TEXT", maxLength: 500, nullable: false),
                    Gallery = table.Column<string>(type: "TEXT", maxLength: 2000, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Units", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Units_Buildings_BuildingId",
                        column: x => x.BuildingId,
                        principalTable: "Buildings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Inquiries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UnitId = table.Column<int>(type: "INTEGER", nullable: false),
                    FullName = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    Email = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    Phone = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false),
                    Message = table.Column<string>(type: "TEXT", maxLength: 2000, nullable: false),
                    Source = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    Status = table.Column<int>(type: "INTEGER", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Inquiries", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Inquiries_Units_UnitId",
                        column: x => x.UnitId,
                        principalTable: "Units",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Complexes",
                columns: new[] { "Id", "City", "Country", "CreatedAt", "Description", "HeroImageUrl", "Name", "UpdatedAt" },
                values: new object[] { 1, "Pristina", "Kosovo", new DateTime(2026, 1, 13, 14, 4, 41, 253, DateTimeKind.Utc).AddTicks(3775), "Premium residential complex offering modern living spaces with world-class amenities", "/buildings/etna-hero.jpg", "Etna Residence", new DateTime(2026, 1, 13, 14, 4, 41, 253, DateTimeKind.Utc).AddTicks(4116) });

            migrationBuilder.InsertData(
                table: "Buildings",
                columns: new[] { "Id", "Address", "Amenities", "Code", "ComplexId", "CreatedAt", "Floors", "HeroImageUrl", "Name", "UpdatedAt" },
                values: new object[,]
                {
                    { 1, "Etna Residence, Pristina", "24/7 Security, Underground Parking, Fitness Center, Rooftop Terrace", "TARA", 1, new DateTime(2026, 1, 13, 14, 4, 41, 255, DateTimeKind.Utc).AddTicks(3779), 12, "/buildings/tara-hero.jpg", "Tara", new DateTime(2026, 1, 13, 14, 4, 41, 255, DateTimeKind.Utc).AddTicks(4143) },
                    { 2, "Etna Residence, Pristina", "24/7 Security, Underground Parking, Swimming Pool, Garden Area", "TIANI", 1, new DateTime(2026, 1, 13, 14, 4, 41, 255, DateTimeKind.Utc).AddTicks(4425), 10, "/buildings/tiani-hero.jpg", "Tiani", new DateTime(2026, 1, 13, 14, 4, 41, 255, DateTimeKind.Utc).AddTicks(4427) }
                });

            migrationBuilder.InsertData(
                table: "Units",
                columns: new[] { "Id", "Bathrooms", "Bedrooms", "BuildingId", "CreatedAt", "ExteriorSqm", "Facing", "Floor", "Gallery", "InteriorSqm", "MoveInReady", "Plan2DUrl", "Plan3DUrl", "Price", "Status", "TotalSqm", "Type", "UnitNumber", "UpdatedAt" },
                values: new object[,]
                {
                    { 1, 2.5m, 3, 1, new DateTime(2026, 1, 13, 14, 4, 41, 256, DateTimeKind.Utc).AddTicks(3444), 85.0m, "South", 12, "[]", 180.5m, true, "/buildings/tara-plan-2d.png", "/buildings/tara-plan-3d.png", 450000m, 0, 265.5m, 0, "PH-01", new DateTime(2026, 1, 13, 14, 4, 41, 256, DateTimeKind.Utc).AddTicks(3732) },
                    { 2, 3.0m, 4, 1, new DateTime(2026, 1, 13, 14, 4, 41, 256, DateTimeKind.Utc).AddTicks(4038), 120.0m, "North", 12, "[]", 220.0m, false, "/buildings/tara-plan-2d.png", "/buildings/tara-plan-3d.png", 580000m, 0, 340.0m, 0, "PH-02", new DateTime(2026, 1, 13, 14, 4, 41, 256, DateTimeKind.Utc).AddTicks(4040) },
                    { 3, 2.0m, 2, 1, new DateTime(2026, 1, 13, 14, 4, 41, 256, DateTimeKind.Utc).AddTicks(4055), 15.0m, "East", 5, "[]", 95.0m, true, "/buildings/tara-plan-2d.png", "/buildings/tara-plan-3d.png", 185000m, 0, 110.0m, 2, "A-05", new DateTime(2026, 1, 13, 14, 4, 41, 256, DateTimeKind.Utc).AddTicks(4056) },
                    { 4, 1.5m, 2, 2, new DateTime(2026, 1, 13, 14, 4, 41, 256, DateTimeKind.Utc).AddTicks(4067), 25.0m, "West", 8, "[]", 120.0m, true, "/buildings/tiani-plan-2d.png", "/buildings/tiani-plan-3d.png", 245000m, 1, 145.0m, 1, "L-01", new DateTime(2026, 1, 13, 14, 4, 41, 256, DateTimeKind.Utc).AddTicks(4069) },
                    { 5, 2.0m, 3, 2, new DateTime(2026, 1, 13, 14, 4, 41, 256, DateTimeKind.Utc).AddTicks(4080), 20.0m, "South", 4, "[]", 135.0m, false, "/buildings/tiani-plan-2d.png", "/buildings/tiani-plan-3d.png", 265000m, 2, 155.0m, 3, "B-03", new DateTime(2026, 1, 13, 14, 4, 41, 256, DateTimeKind.Utc).AddTicks(4082) }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Buildings_ComplexId",
                table: "Buildings",
                column: "ComplexId");

            migrationBuilder.CreateIndex(
                name: "IX_Inquiries_UnitId",
                table: "Inquiries",
                column: "UnitId");

            migrationBuilder.CreateIndex(
                name: "IX_Units_BuildingId",
                table: "Units",
                column: "BuildingId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Inquiries");

            migrationBuilder.DropTable(
                name: "Units");

            migrationBuilder.DropTable(
                name: "Buildings");

            migrationBuilder.DropTable(
                name: "Complexes");
        }
    }
}
