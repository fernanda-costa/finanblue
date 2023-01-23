using Finanblue.Models;

namespace Finanblue.Dtos
{
    public class ProductDto : BaseDto
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public Guid CompanyId { get; set; }
        public CompanyDto? Company { get; set; }
    }
}
