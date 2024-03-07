using AutoMapper;
using medicitaBack.BLL.contrato;
using medicitaBack.DAL.Contrato;
using medicitaBack.DAL.Repository;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels.EspecialidadDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.BLL.Service
{
    public class EspecialidadService : IGenericService<CreacionEspecialidadDTO, EspecialidadDTO>
    {
        private readonly IGenericRepository<CreacionEspecialidadDTO, EspecialidadDTO, Especialidad> _especialidadRepo;
        private readonly IMapper _mapper;

        public EspecialidadService(IGenericRepository<CreacionEspecialidadDTO, EspecialidadDTO, Especialidad> categoriaRepository, IMapper mapper)
        {
            this._especialidadRepo = categoriaRepository;
            this._mapper = mapper;
        }
        public async Task<IEnumerable<EspecialidadDTO>> ObtenerTodos()
        {
            try
            {
                var queryable = await _especialidadRepo.ObtenerTodos();


                var listCategorias = await queryable.ToListAsync();

                return  _mapper.Map<IEnumerable<EspecialidadDTO>>(listCategorias);

            }
            catch (Exception)
            {

                throw;
            }
        }
        public async Task<EspecialidadDTO> ObtenerPorId(int id)
        {
            try
            {
                return await _especialidadRepo.ObtenerPorId(id);

            }
            catch (Exception)
            {

                throw;
            }
        }
        public async Task<EspecialidadDTO> Registrar(CreacionEspecialidadDTO modelo)
        {
            try
            {
                return await _especialidadRepo.Insertar(modelo);

            }
            catch (Exception)
            {

                throw;
            }
        }
        public async Task<EspecialidadDTO> Actualizar(int id,CreacionEspecialidadDTO modelo)
        {
            try
            {
                return await _especialidadRepo.Actualizar(id, modelo);

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
                return await _especialidadRepo.Eliminar(id);

            }
            catch (Exception)
            {

                throw;
            }
        }



    }
}
