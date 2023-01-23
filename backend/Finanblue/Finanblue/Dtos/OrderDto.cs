using Finanblue.Models;

namespace Finanblue.Dtos
{
    public class OrderDto : BaseDto
    {
        public DateTime OrderDate { get; set; } = DateTime.UtcNow;

        public List<OrderItemDto> Items { get; set; }

        public decimal TotalPrice { get; set; }
    }


    public class OrderItemDto : BaseDto
    {
        public ProductDto Product { get; set; }
        public Guid ProductId { get; set; }
        public int ItemCount { get; set; }
        public decimal TotalValue { get; set; }
    }
}
