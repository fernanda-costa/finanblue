using Finanblue.Dtos;
using Finanblue.Models;
using Finanblue.Services;
using Finanblue.Validators;
using FluentValidation;
using FluentValidation.Results;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Finanblue.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            this._orderService = orderService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            List<OrderDto> list = _orderService.GetAll().ToList();

            if (list == null) return NotFound();

            return Ok(list);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            OrderDto? dto = _orderService.GetByid(id);

            if(dto == null) { return NotFound(); };

            return Ok(dto);
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateOrderDto orderDto)
        {
            OrderValidator validator = new OrderValidator();

            ValidationResult result = validator.Validate(orderDto);

            if(result.IsValid)
            {
                OrderDto dto = _orderService.Create(orderDto);
                return CreatedAtAction(nameof(GetById), new { dto.Id }, dto);
            }

            return BadRequest();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            OrderDto? dto = _orderService.GetByid(id);

            if(dto == null) { return NotFound(); }  

            _orderService.Delete(id);

            return NoContent();
        }
    }
}
