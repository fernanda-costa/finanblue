namespace Finanblue.Models
{
    public class OrderItem : BaseEntity
    {
        public virtual Product Product { get; set; }
        public Guid ProductId { get; set; }
        public int ItemCount { get; set; }
        public decimal TotalValue { get; set; }
        public virtual Order order { get; set; }
        public Guid OrderId { get; set; }
    }
}
