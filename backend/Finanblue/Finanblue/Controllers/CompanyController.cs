using Finanblue.Dtos;
using Finanblue.Models;
using Finanblue.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Finanblue.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private ICompanyService _companyService;

        public CompanyController(ICompanyService companyService)
        {
            this._companyService = companyService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            List<CompanyDto> list = _companyService.List().ToList<CompanyDto>();
            if (list == null) return NotFound();
            return Ok(list);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            CompanyDto? dto = _companyService.Find(id);

            if(dto == null) { return NotFound(); };

            return Ok(dto);
        }

        [HttpPost]
        public IActionResult Create([FromBody] CompanyDto companyDto)
        {
            CompanyDto dto = _companyService.Add(companyDto);
            return CreatedAtAction(nameof(GetById), new { Id = dto.Id }, dto);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Guid id, [FromBody] CompanyDto companyDto)
        {
            _companyService.Edit(companyDto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            _companyService.Remove(id);
            return NoContent();
        }
    }
}
