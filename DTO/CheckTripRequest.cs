
namespace PITXOnlineBooking.DTO
{
    public class CheckTripRequest
    {
        public required string Destination { get; set;}
        public required DateTime TripDate { get; set; }
    }
}