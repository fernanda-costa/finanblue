using AutoMapper;
using Finanblue.Dtos;
using Finanblue.Models;

namespace Finanblue.Profiles
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<Product, ProductDto>();
            CreateMap<ProductDto, Product>();
        }
    }
}
