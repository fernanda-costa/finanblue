using AutoMapper;
using Finanblue.Dtos;
using Finanblue.Models;
using Finanblue.Repositories;

namespace Finanblue.Services
{
    public class BaseService<T, DTO> : IBaseService<T, DTO> where T : BaseEntity where DTO : BaseDto
    {
        IBaseRepository<T> _repository;
        private IMapper _mapper;

        public BaseService(IBaseRepository<T> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public DTO? Find(Guid id)
        {
            return _mapper.Map<DTO>(_repository.GetById(id));
        }

        public List<DTO> List()
        {
            return _mapper.Map<List<DTO>>(_repository.GetAll().ToList());
        }

        public DTO Add(DTO item)
        {
            T entity = _mapper.Map<DTO, T>(item);
            _repository.Create(entity);
            DTO dto = _mapper.Map<T, DTO>(entity);

            return dto;

        }

        public void Remove(Guid id)
        {
            T? entity = _repository.GetById(id);
            if(entity != null)
                _repository.Delete(entity);
        }

        public void Edit(DTO item)
        {
            T entity = _mapper.Map<DTO, T>(item);
            _repository.Update(entity);
        }
    }
}
