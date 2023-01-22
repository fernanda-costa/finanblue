using Finanblue.Models;

namespace Finanblue.Repositories
{
    public interface IBaseRepository<Entity> where Entity : BaseEntity
    {
        IQueryable<Entity> GetAll();
        Entity? GetById(Guid id);
        void Create(Entity entity);
        void Update(Entity entity);
        void Delete(Entity entity);
    }
}
