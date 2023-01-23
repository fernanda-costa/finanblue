using AutoMapper;
using Finanblue.Dtos;
using Finanblue.Models;
using Finanblue.Repositories;

namespace Finanblue.Services
{
    public class BaseService<T, InputDto, OutputDto> : IBaseService<T, InputDto, OutputDto> where T : BaseEntity where InputDto : BaseDto where OutputDto : BaseDto
    {
        IBaseRepository<T> _repository;
        private IMapper _mapper;

        public BaseService(IBaseRepository<T> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public OutputDto? GetByid(Guid id)
        {
            return _mapper.Map<OutputDto>(_repository.GetById(id));
        }

        public List<OutputDto> GetAll()
        {
            return _mapper.Map<List<OutputDto>>(_repository.GetAll().ToList());
        }

        public OutputDto Create(InputDto item)
        {
            T entity = _mapper.Map<InputDto, T>(item);


            _repository.Create(entity);
            OutputDto dto = _mapper.Map<T, OutputDto>(entity);

            return dto;

        }

        public void Delete(Guid id)
        {
            T? entity = _repository.GetById(id);
            if(entity != null)
                _repository.Delete(entity);
        }

        public void Update(InputDto item)
        {
            T entity = _mapper.Map<InputDto, T>(item);
            _repository.Update(entity);
        }
    }
}
