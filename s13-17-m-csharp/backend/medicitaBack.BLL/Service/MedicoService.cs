using AutoMapper;
using medicitaBack.BLL.contrato;
using medicitaBack.DAL.Contrato;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels.DatosDTO;
using medicitaBack.Models.VModels.MedicoDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.BLL.Service
{
    public class MedicoService : IMedicoService
    {
        private readonly IMedicoRepository _medicorepo;
        private readonly IMapper _mapper;
        

        public MedicoService(IMedicoRepository medicoRepo, IMapper mapper)
        {
            _medicorepo = medicoRepo;
            this._mapper = mapper;
       
        }

        public async Task<MedicoDTO> Actualizar(int id, CreacionMedicoDTO modelo)
        {
            return await _medicorepo.Actualizar(id, modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _medicorepo.Eliminar(id);
        }

        public async Task<MedicoDTO> ObtenerPorId(int id)
        {
            return await _medicorepo.ObtenerPorId(id);
        }

        public async Task<IEnumerable<MedicoDTO>> ObtenerTodos()
        {
            try
            {
                var query = await _medicorepo.ObtenerTodos();

                var lista = await query                                      
                    .Include(p => p.Especialidad)
                    .Where(p=>p.Activo)
                    .ToListAsync();
                return _mapper.Map<IEnumerable<MedicoDTO>>(lista);
            }
            catch (Exception)
            {
                throw;
            }
        }      

        public async Task<MedicoDTO> Registrar(CreacionMedicoDTO modelo)
        {
            try
            {
                var medico = await _medicorepo.Insertar(modelo);                
              

                return medico;
            }
            catch(Exception) { throw; }

        }

        public async Task<MedicoDTO> ActivoInactivo(int idProducto, string idUser)
        {
            return await _medicorepo.ActivoInactivo(idProducto, idUser);
        }

        public async Task<PaginasMedicosDTO> ObtenerPorFiltro( int regXPagina, int paginaActual, string? nombre, int? idEspecialidad)
        {
            try
            {
                var query = await _medicorepo.ObtenerTodos();

                query = query                                     
                    .Include(p => p.Especialidad)
                    .Where(p => p.Activo);

                if (nombre != null) query = query.Where(p => p.Nombre.Contains(nombre));
                if (idEspecialidad != null) query = query.Where(p => p.EspecialidadId == idEspecialidad);                
              

                var cantidadPaginas = Math.Ceiling((decimal)await query.CountAsync()/regXPagina);

                var search = await query.Skip((paginaActual - 1) * regXPagina).Take(regXPagina).ToListAsync();


                var paginasProductos = new PaginasMedicosDTO()
                {
                    Medicos = _mapper.Map<List<MedicoDTO>>(search),
                    Paginas = Convert.ToInt32(cantidadPaginas)
                };

                return paginasProductos;
            }
            catch(Exception) { throw; }
        }



    }
}
