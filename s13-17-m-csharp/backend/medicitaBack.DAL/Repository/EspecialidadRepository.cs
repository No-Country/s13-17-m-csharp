using AutoMapper;
using medicitaBack.API.Exceptions;
using medicitaBack.DAL.Contrato;
using medicitaBack.DAL.Dbcontext;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels.EspecialidadDTO;
using Microsoft.EntityFrameworkCore;

namespace medicitaBack.DAL.Repository
{
    public class EspecialidadRepository:IGenericRepository<CreacionEspecialidadDTO, EspecialidadDTO, Especialidad>
    {
            private readonly AplicationDBcontext _dbcontext;
            private readonly IMapper mapper;

        public EspecialidadRepository(AplicationDBcontext dbcontext, IMapper mapper)
        {
                _dbcontext = dbcontext;
            this.mapper = mapper;
        }

        public async Task<EspecialidadDTO> Actualizar(int id,CreacionEspecialidadDTO modelo)
        {
            try
            {
                var categoria = await _dbcontext.Especialidades.Where(c => c.Id == id && c.Activo == true).FirstOrDefaultAsync();

                if (categoria == null) throw new NotFoundException();

                categoria.Nombre = modelo.Nombre;

                await _dbcontext.SaveChangesAsync();
                return mapper.Map<EspecialidadDTO>(categoria);
            }
            catch (Exception)
            {
                throw;
            }

        }

        public async Task<bool> Eliminar(int id)
        {
                try
                {
                    var categoria = await _dbcontext.Especialidades.Where(c => c.Id == id && c.Activo == true).FirstOrDefaultAsync();

                    if (categoria == null) throw new NotFoundException();

                    categoria.Activo = false;
                    
                    await _dbcontext.SaveChangesAsync();

                    return true;
                }
                catch (Exception)
                {
                    throw;
                }
        }


        public async Task<EspecialidadDTO> Insertar(CreacionEspecialidadDTO modelo)
        {
            try
            {
                var categoria = mapper.Map<Especialidad>(modelo);
                categoria.Activo = true;
                _dbcontext.Add(categoria);
                await _dbcontext.SaveChangesAsync();
                return mapper.Map<EspecialidadDTO>(categoria);
            }
            catch (Exception)
            {
                throw;
            }

        }


            public async Task<IQueryable<Especialidad>> ObtenerTodos()
            {
                try
                {
                    IQueryable<Especialidad> queryMarcas =   _dbcontext.Especialidades.Where( c => c.Activo == true);
                    return queryMarcas;
                }
                catch (Exception)
                {
                    throw;
                }
            }

        public async Task<EspecialidadDTO>ObtenerPorId(int id)
        {
            try
            {
                var categoria = await _dbcontext.Especialidades.Where(x => x.Id == id && x.Activo == true).FirstOrDefaultAsync();

                if (categoria == null) throw new NotFoundException();

                return mapper.Map<EspecialidadDTO>(categoria);
            }
            catch (Exception)
            {
                throw;
            }
        }

        
    }
}
