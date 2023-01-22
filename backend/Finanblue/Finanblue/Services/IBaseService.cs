using Finanblue.Dtos;
using Finanblue.Models;

namespace Finanblue.Services
{
    public interface IBaseService<T, DTO> where T : BaseEntity where DTO : BaseDto
    {
        DTO? Find(Guid id);
        List<DTO> List();
        DTO Add(DTO item);
        void Remove(Guid id);
        void Edit(DTO item);
    }
}
