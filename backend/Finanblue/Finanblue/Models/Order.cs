namespace Finanblue.Models
{
    public class Order : BaseEntity
    {
        public DateTime OrderDate { get; set; } = DateTime.Now;
        public virtual List<OrderItem> Items { get; set; }
        public decimal TotalPrice { get; set; }

    }
}
