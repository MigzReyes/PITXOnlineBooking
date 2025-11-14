using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PITXOnlineBooking.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedTripTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BusId",
                table: "Trip",
                newName: "BusTripId");

            migrationBuilder.AlterColumn<TimeSpan>(
                name: "TotalTripTime",
                table: "Trip",
                type: "TIME",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime(6)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BusTripId",
                table: "Trip",
                newName: "BusId");

            migrationBuilder.AlterColumn<DateTime>(
                name: "TotalTripTime",
                table: "Trip",
                type: "datetime(6)",
                nullable: false,
                oldClrType: typeof(TimeSpan),
                oldType: "TIME");
        }
    }
}
