using Finanblue.Dtos;
using Finanblue.Models;

namespace Finanblue.Services
{
    public interface IProductService : IBaseService<Product, ProductDto, ProductDto>
    {
        List<ProductDto> GetByCompanyId(Guid id);
    }
}
