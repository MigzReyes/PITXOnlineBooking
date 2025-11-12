using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PITXOnlineBooking.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedBookedTripAddedTripId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "userId",
                table: "BookedTrip",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "passengerNo",
                table: "BookedTrip",
                newName: "PassengerNo");

            migrationBuilder.AddColumn<int>(
                name: "TripId",
                table: "BookedTrip",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TripId",
                table: "BookedTrip");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "BookedTrip",
                newName: "userId");

            migrationBuilder.RenameColumn(
                name: "PassengerNo",
                table: "BookedTrip",
                newName: "passengerNo");
        }
    }
}
