using Finanblue.Dtos;
using Finanblue.Models;
using Finanblue.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Finanblue.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IProductService _productService;

        public ProductController(IProductService productService)
        {
            this._productService = productService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            List<ProductDto> list = _productService.GetAll().ToList();
            if (list == null) return NotFound();
            return Ok(list);
        }

        [HttpGet("company/{id}")]
        public IActionResult GetByCompanyId(Guid id)
        {
            List<ProductDto> list = _productService.GetByCompanyId(id);
            if (list == null) return NotFound();
            return Ok(list);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            ProductDto? dto = _productService.GetByid(id);

            if(dto == null) { return NotFound(); };

            return Ok(dto);
        }

        [HttpPost]
        public IActionResult Create([FromBody] ProductDto productDto)
        {
            ProductDto dto = _productService.Create(productDto);
            return CreatedAtAction(nameof(GetById), new { Id = dto.Id }, dto);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Guid id, [FromBody] ProductDto productDto)
        {
            _productService.Update(productDto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            _productService.Delete(id);
            return NoContent();
        }
    }
}
