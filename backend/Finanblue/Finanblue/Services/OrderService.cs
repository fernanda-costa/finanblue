using AutoMapper;
using Finanblue.Dtos;
using Finanblue.Models;
using Finanblue.Repositories;

namespace Finanblue.Services
{
    public class OrderService : BaseService<Order, CreateOrderDto, OrderDto>, IOrderService
    {

        public OrderService(IOrderRepository repository, IMapper mapper) : base(repository, mapper)
        {
        }
    }
}
