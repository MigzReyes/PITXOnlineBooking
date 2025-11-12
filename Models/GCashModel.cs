namespace PITXOnlineBooking.Models
{
    public class GCashModel
    {
        public int Id { get; set; }

        public int AvailableBalance { get; set; }
        public int Amount { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}