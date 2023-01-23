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
            List<CompanyDto> list = _companyService.GetAll().ToList<CompanyDto>();
            if (list == null) return NotFound();
            return Ok(list);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            CompanyDto? dto = _companyService.GetByid(id);

            if(dto == null) { return NotFound(); };

            return Ok(dto);
        }

        [HttpPost]
        public IActionResult Create([FromBody] CompanyDto companyDto)
        {
            CompanyDto dto = _companyService.Create(companyDto);
            return CreatedAtAction(nameof(GetById), new { dto.Id }, dto);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Guid id, [FromBody] CompanyDto companyDto)
        {
            CompanyDto? dto = _companyService.GetByid(id);

            if (dto == null) { return NotFound(); };

            _companyService.Update(companyDto);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            CompanyDto? dto = _companyService.GetByid(id);

            if (dto == null) { return NotFound(); };

            _companyService.Delete(id);

            return NoContent();
        }
    }
}
