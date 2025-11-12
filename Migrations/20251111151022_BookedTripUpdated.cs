using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PITXOnlineBooking.Migrations
{
    /// <inheritdoc />
    public partial class BookedTripUpdated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "passengerNo",
                table: "BookedTrip",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "userId",
                table: "BookedTrip",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "passengerNo",
                table: "BookedTrip");

            migrationBuilder.DropColumn(
                name: "userId",
                table: "BookedTrip");
        }
    }
}
