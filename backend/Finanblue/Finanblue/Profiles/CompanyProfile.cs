using AutoMapper;
using Finanblue.Dtos;
using Finanblue.Models;

namespace Finanblue.Profiles
{
    public class CompanyProfile : Profile
    {
        public CompanyProfile()
        {
            CreateMap<CreateCompanyDto, Company>();
            CreateMap<UpdateCompanyDto, Company>();
            CreateMap<Company, ReadCompanyDto>();
            CreateMap<Company, CompanyDto>();
            CreateMap<CompanyDto, Company>();
        }
    }
}
