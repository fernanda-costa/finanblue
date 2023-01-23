using Finanblue.Dtos;
using Finanblue.Models;
using FluentValidation;

namespace Finanblue.Validators
{
    public class CompanyValidator : AbstractValidator<CompanyDto>
    {
        public CompanyValidator()
        {
            RuleFor(company => company.Name).NotEmpty().NotNull();
        }
    }
}
