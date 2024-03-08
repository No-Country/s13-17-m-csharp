using AutoMapper;
using medicitaBack.API.Exceptions;
using medicitaBack.DAL.Contrato;
using medicitaBack.DAL.Dbcontext;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels.CitaDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace medicitaBack.DAL.Repository
{

    public class CitasRepository : IGenericRepository<CreacionCitaDTO, CitaDTO, Cita>,ICitaBusquedaRepository
    {
        private readonly AplicationDBcontext _dbcontext;
        private readonly IMapper mapper;

        public CitasRepository(AplicationDBcontext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            this.mapper = mapper;
        }

        public async Task<CitaDTO> Actualizar(int id, CreacionCitaDTO modelo)
        {
            try 
            {
                var cita = await _dbcontext.Citas.Where(c => c.Id == id).FirstOrDefaultAsync();

                if (cita == null) throw new NotFoundException();

                cita.Id = id;

                cita.UsuarioId = modelo.UsuarioId;

                cita.Motivo = modelo.Motivo;

                cita.fecha_cita = modelo.fecha_cita;             

                cita.Activo = modelo.Activo;
                
                cita.MedicoId = modelo.MedicoId;               



                _dbcontext.Update(cita);

                await _dbcontext.SaveChangesAsync();

                return mapper.Map<CitaDTO>(cita);
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
                var citas = await _dbcontext.Citas.Where(c => c.Id == id).FirstOrDefaultAsync();

                if (citas== null) throw new NotFoundException();

                _dbcontext.Remove(citas);

                await _dbcontext.SaveChangesAsync();

                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<CitaDTO> Insertar(CreacionCitaDTO modelo)
        {
            try 
            { 
                var cita= mapper.Map<Cita>(modelo);

                _dbcontext.Add(cita);

                await _dbcontext.SaveChangesAsync();
                
                return mapper.Map<CitaDTO>(cita);
            }
            catch (Exception) 
            {
                throw;
            }
        }

        public async Task<CitaDTO> ObtenerPorId(int id)
        {
            var cita = await _dbcontext.Citas.Where(c => c.Id == id).Include(p => p.Medico).ThenInclude(p => p.Especialidad).FirstOrDefaultAsync();

            if (cita == null) throw new NotFoundException();

            return mapper.Map<CitaDTO>(cita);
        }

        public async Task<IQueryable<Cita>> ObtenerTodos()
        {
            try
            {
                IQueryable<Cita> queryCitas = _dbcontext.Citas.Include(p => p.Medico).ThenInclude(p => p.Especialidad);
                return queryCitas;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<IQueryable<Cita>> ObtenerPorIdMedico(int idMedico)
        {          
          

            IQueryable<Cita> cita = _dbcontext.Citas.Where(c => c.MedicoId == idMedico).Include(p => p.Medico).ThenInclude(p => p.Especialidad);

            if (cita == null) throw new NotFoundException();

            return cita;
        }

    }
}
