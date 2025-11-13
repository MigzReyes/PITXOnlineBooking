namespace PITXOnlineBooking.Models
{
    public class BusTripModel
    {
        public int Id { get; set; }
        public int BusId { get; set; }
        public required string Departure { get; set; }
        public required string Destination { get; set; }
        public decimal TotalTripTime { get; set; }
        public int TripPrice { get; set; }
    }
}