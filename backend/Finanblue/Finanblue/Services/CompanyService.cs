using AutoMapper;
using Finanblue.Dtos;
using Finanblue.Models;
using Finanblue.Repositories;

namespace Finanblue.Services
{
    public class CompanyService : BaseService<Company, CompanyDto, CompanyDto>, ICompanyService
    {

        public CompanyService(ICompanyRepository repository, IMapper mapper) : base(repository, mapper)
        {
        }
    }
}
