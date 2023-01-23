using Finanblue.Models;
using Microsoft.EntityFrameworkCore;

namespace Finanblue.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Company> Companies { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> opts) : base(opts) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {

            builder.Entity<Product>()
                .HasOne(product => product.Company)
                .WithMany(company => company.Products)
                .HasForeignKey(product => product.CompanyId);

            builder.Entity<OrderItem>()
             .HasOne(order => order.Product)
             .WithMany(p => p.Items)
             .HasForeignKey(o => o.ProductId);

            builder.Entity<Order>()
             .HasMany(order => order.Items)
             .WithOne(p => p.order)
             .HasForeignKey(o => o.OrderId);

        }

    }
}
