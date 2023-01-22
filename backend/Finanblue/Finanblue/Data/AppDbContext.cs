using Finanblue.Models;
using Microsoft.EntityFrameworkCore;

namespace Finanblue.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> opts) : base(opts) { }
        
        public DbSet<Company> Companies { get; set; }   

    }
}
