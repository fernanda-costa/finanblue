using Finanblue.Dtos;
using Finanblue.Models;

namespace Finanblue.Repositories
{
    public interface IProductRepository : IBaseRepository<Product>
    {
        IQueryable<Product> GetByCompanyId(Guid id);
    }
}
