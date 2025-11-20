using Microsoft.EntityFrameworkCore;
using PITXOnlineBooking.Models;

namespace PITXOnlineBooking.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        
        public DbSet<BookedTripModel> BookedTrip { get; set; }
        public DbSet<BusModel> Bus { get; set; }
        public DbSet<GCashModel> GCash { get; set; }
        public DbSet<InsuranceModel> Insurance { get; set; }
        public DbSet<PassengerModel> Passenger { get; set; }
        public DbSet<PayMayaModel> PayMaya { get; set; }
        public DbSet<TripModel> Trip { get; set; }
        public DbSet<UserModel> User { get; set; }
        public DbSet<BusTripModel> BusTrip { get; set; } 
    }
}