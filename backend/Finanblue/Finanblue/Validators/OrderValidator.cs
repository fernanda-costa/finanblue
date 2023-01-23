using Finanblue.Dtos;
using Finanblue.Models;
using FluentValidation;

namespace Finanblue.Validators
{
    public class OrderValidator : AbstractValidator<CreateOrderDto>
    {
        public OrderValidator()
        {
            RuleFor(order => order.Items).Must(items => items.Count > 0);
        }
    }
}
