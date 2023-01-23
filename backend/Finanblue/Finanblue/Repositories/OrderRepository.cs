using Finanblue.Data;
using Finanblue.Models;
using Microsoft.EntityFrameworkCore;

namespace Finanblue.Repositories
{
    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        private AppDbContext _context;

        public OrderRepository(AppDbContext context) : base(context)
        {
            _context = context;
        }
        public new IQueryable<Order> GetAll() => _context.Orders
            .Include(p => p.Items)
            .ThenInclude(e => e.Product);
    }
}
