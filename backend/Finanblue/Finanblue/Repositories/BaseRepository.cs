using Finanblue.Data;
using Finanblue.Models;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;

namespace Finanblue.Repositories
{
    public class BaseRepository<Entity> : IBaseRepository<Entity> where Entity : BaseEntity
    {
        private AppDbContext _context;
        public BaseRepository(AppDbContext context)
        {
            this._context = context;
        }

        public IQueryable<Entity> GetAll()
        {
            return _context.Set<Entity>();
        }

        public Entity? GetById(Guid id)
        {
            Entity? entity = _context.Set<Entity>().Find(id);
            _context.Entry(entity).State = EntityState.Detached;
            return entity;
        }

        public void Create(Entity entity)
        {
            _context.Set<Entity>().Add(entity);
            _context.SaveChanges();
        }

        public void Update(Entity entity)
        {
            _context.Set<Entity>().Update(entity);
            _context.SaveChanges();
        }

        public void Delete(Entity entity)
        {
            _context.Set<Entity>().Remove(entity);
            _context.SaveChanges();
        }
    }
}
