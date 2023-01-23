using Finanblue.Data;
using Finanblue.Dtos;
using Finanblue.Models;
using Microsoft.EntityFrameworkCore;

namespace Finanblue.Repositories
{
    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        private AppDbContext _context;

        public ProductRepository(AppDbContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<Product> GetByCompanyId(Guid id)
        {
            return _context.Products.Where(product => product.CompanyId == id).Include(p => p.Company);
        }
    }
}
