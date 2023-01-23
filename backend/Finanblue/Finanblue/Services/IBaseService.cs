using Finanblue.Dtos;
using Finanblue.Models;

namespace Finanblue.Services
{
    public interface IBaseService<T, InputDTO, OutputDto> where T : BaseEntity where InputDTO : BaseDto where OutputDto : BaseDto
    {
        OutputDto? GetByid(Guid id);
        List<OutputDto> GetAll();
        OutputDto Create(InputDTO item);
        void Delete(Guid id);
        void Update(InputDTO item);
    }
}
