using Finanblue.Dtos;
using Finanblue.Models;

namespace Finanblue.Services
{
    public interface IOrderService : IBaseService<Order, CreateOrderDto, OrderDto>
    {
    }
}
