using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PITXOnlineBooking.Models
{
    public class TripModel
    {
        public int Id { get; set; }

        [Required]
        public required int BusTripId { get; set; }

        [Required]
        public required string Destination { get; set; }

        [Required]
        public required DateTime DepartureTime { get; set; }

        [Required]
        public required DateTime ArrivalTime { get; set; }

        [Column(TypeName = "TIME")]
        [Required]
        public required TimeSpan TotalTripTime { get; set; }

        [Required]
        public required string TripNo { get; set; }

        [Required]
        public required string Gate { get; set; }

        [Required]
        public required string Bay { get; set; }

        [Required]
        public required int Price { get; set; }

        [Required]
        public required DateTime TripDate { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}