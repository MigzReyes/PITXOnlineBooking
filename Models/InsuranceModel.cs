using System.ComponentModel.DataAnnotations;

namespace PITXOnlineBooking.Models
{
    public class InsuranceModel
    {
        public int Id { get; set; }

        [Required]
        public required string Package { get; set; }

        [Required]
        public required int Price { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}