using System.ComponentModel.DataAnnotations;

namespace PITXOnlineBooking.Models
{
    public class BusModel
    {
        public int Id { get; set; }

        [Required]
        public required string Operator { get; set; }

        [Required]
        public required string Type { get; set; }

        [Required]
        public required string ImgInside { get; set; }

        [Required]
        public required string ImgOutside { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}