using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PITXOnlineBooking.Migrations
{
    /// <inheritdoc />
    public partial class CreatedTheRequiredModels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "BookedTrip",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DateBooked",
                table: "BookedTrip",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "InsuranceType",
                table: "BookedTrip",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "PaymentMethod",
                table: "BookedTrip",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<int>(
                name: "TotalPrice",
                table: "BookedTrip",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "BookedTrip");

            migrationBuilder.DropColumn(
                name: "DateBooked",
                table: "BookedTrip");

            migrationBuilder.DropColumn(
                name: "InsuranceType",
                table: "BookedTrip");

            migrationBuilder.DropColumn(
                name: "PaymentMethod",
                table: "BookedTrip");

            migrationBuilder.DropColumn(
                name: "TotalPrice",
                table: "BookedTrip");
        }
    }
}
