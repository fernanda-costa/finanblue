using AutoMapper;
using Finanblue.Dtos;
using Finanblue.Models;
using Finanblue.Repositories;

namespace Finanblue.Services
{
    public class ProductService : BaseService<Product, ProductDto, ProductDto>, IProductService
    {
        IProductRepository _repository;
        IMapper _mapper;

        public ProductService(IProductRepository repository, IMapper mapper) : base(repository, mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public List<ProductDto> GetByCompanyId(Guid id)
        {
            return _mapper.Map<List<ProductDto>>(_repository.GetByCompanyId(id).ToList());
        }
    }
}
