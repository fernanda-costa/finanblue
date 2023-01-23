namespace Finanblue.Models
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }         
        public decimal Price { get; set; }
        public virtual Company Company { get; set; }
        public virtual List<OrderItem> Items { get; set; }
        public Guid CompanyId { get; set; }
    }
}
