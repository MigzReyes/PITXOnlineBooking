using System.ComponentModel.DataAnnotations;

namespace PITXOnlineBooking.Models
{
    public class TripModel
    {
        public int Id { get; set; }

        [Required]
        public required int BusId { get; set; }

        [Required]
        public required string Destination { get; set; }

        [Required]
        public required DateTime DepartureTime { get; set; }

        [Required]
        public required DateTime ArrivalTime { get; set; }

        [Required]
        public required decimal TotalTripTime { get; set; }

        [Required]
        public required string TripNo { get; set; }

        [Required]
        public required string Gate { get; set; }

        [Required]
        public required string Bay { get; set; }

        [Required]
        public required int Price { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}