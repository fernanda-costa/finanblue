using Finanblue.Data;
using Finanblue.Models;

namespace Finanblue.Repositories
{
    public class CompanyRepository : BaseRepository<Company>, ICompanyRepository
    {
        public CompanyRepository(AppDbContext context) : base(context)
        {

        }
    }
}
