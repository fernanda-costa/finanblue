namespace Finanblue.Dtos
{
    public class CreateOrderDto : BaseDto
    {
        public DateTime OrderDate { get; set; } = DateTime.UtcNow;

        public List<CreateOrderItemDto> Items { get; set; }

        public decimal TotalPrice { get; set; }
    }


    public class CreateOrderItemDto : BaseDto
    {
        public Guid ProductId { get; set; }
        public int ItemCount { get; set; }
        public decimal TotalValue { get; set; }
    }
}
