namespace Finanblue.Models
{
    public class Company : BaseEntity
    {
        public string Name { get; set; }    
        public string Description { get; set; }
        public virtual List<Product> Products { get; set; }

    }
}
