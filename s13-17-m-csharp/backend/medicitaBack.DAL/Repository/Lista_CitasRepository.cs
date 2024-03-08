using AutoMapper;
using medicitaBack.API.Exceptions;
using medicitaBack.DAL.Contrato;
using medicitaBack.DAL.Dbcontext;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels.DatosDTO;
using medicitaBack.Models.VModels.CitaDTO;
using medicitaBack.Models.VModels.Lista_CitaDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.DAL.Repository
{
    public class Lista_CitasRepository : IGenericRepository<CreacionLista_CitaDTO, Lista_CitaDTO, Lista_Cita>
    {
        private readonly AplicationDBcontext _dbcontext;
        private readonly IMapper mapper;

        public Lista_CitasRepository(AplicationDBcontext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            this.mapper = mapper;
        }

        public async Task<Lista_CitaDTO> Actualizar(int id, CreacionLista_CitaDTO modelo)
        {
            try
            {
                var listaCita = await _dbcontext.ListaCitas.Where(c => c.CitaId == modelo.CitaId).ToListAsync();

                if (listaCita == null) throw new NotFoundException();

                foreach (var lista in listaCita) 
                { 
                lista.Id = id;

                lista.CitaId = modelo.CitaId;

                lista.ListaCita = modelo.ListaCita;

                lista.MedicoId = modelo.MedicoId;

              

                _dbcontext.Update(lista);

                }
                //await _dbcontext.SaveChangesAsync();

                return mapper.Map<Lista_CitaDTO>(listaCita);
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
                var detallesCita = await _dbcontext.ListaCitas.Where(c => c.MedicoId == id).ToListAsync();

                if (detallesCita == null) throw new NotFoundException();

              foreach(var detalle in detallesCita) { 
                _dbcontext.Remove(detalle);
                }
                await _dbcontext.SaveChangesAsync();

                return true;

            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<Lista_CitaDTO> Insertar(CreacionLista_CitaDTO modelo)
        {
            try
            {
                var detallesCita  = mapper.Map<Lista_Cita>(modelo);
                _dbcontext.Add(detallesCita);
                await _dbcontext.SaveChangesAsync();

                return mapper.Map<Lista_CitaDTO>(detallesCita);

            }
            catch (Exception)
            {
                throw;

            }
        }

        public async Task<Lista_CitaDTO> ObtenerPorId(int id)
        {

             
            var detallesCita = await _dbcontext.ListaCitas.Where(c => c.MedicoId == id).OrderBy(c => c.ListaCita).ToListAsync();
            
            if (detallesCita == null) throw new NotFoundException();

           

            return mapper.Map<Lista_CitaDTO>(detallesCita);
        }

        public async Task<IQueryable<Lista_Cita>> ObtenerTodos()
        {
            try
            {
                IQueryable<Lista_Cita> queryDetalleCitas = _dbcontext.ListaCitas;
                return queryDetalleCitas;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
