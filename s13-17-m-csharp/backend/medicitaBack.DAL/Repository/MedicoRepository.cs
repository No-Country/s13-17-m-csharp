using AutoMapper;
using medicitaBack.API.Exceptions;
using medicitaBack.DAL.Contrato;
using medicitaBack.DAL.Dbcontext;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels.MedicoDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace medicitaBack.DAL.Repository
{
    public class MedicoRepository: IMedicoRepository
    {
        private readonly AplicationDBcontext _dbcontext;
        private readonly IMapper mapper;

        public MedicoRepository(AplicationDBcontext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            this.mapper = mapper;
        }

        public async Task<MedicoDTO> Actualizar(int id, CreacionMedicoDTO modelo)
        {
            try 
            {
                var medico = await _dbcontext.Medicos.Where(c=> c.Id== id && c.Activo==true).FirstOrDefaultAsync();

                if (medico == null) throw new NotFoundException();

                medico.Nombre = modelo.nombre;

                medico.Descripcion = modelo.Descripcion;   

                medico.EspecialidadId = modelo.EspecialidadId;    
                
                medico.Horario = modelo.Horario;

                medico.Activo = modelo.Activo;              

                _dbcontext.Update(medico);

                await _dbcontext.SaveChangesAsync();


                return mapper.Map<MedicoDTO>(medico);
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
                var medico = await _dbcontext.Medicos.Where(c => c.Id == id).FirstOrDefaultAsync();

                if (medico == null) throw new NotFoundException();

                _dbcontext.Remove(medico);

                await _dbcontext.SaveChangesAsync();

                return true;
            }catch (Exception) 
            {
                throw;                     
            }
        }

        public async Task<MedicoDTO> Insertar(CreacionMedicoDTO modelo)
        {
            var medicoAdd = mapper.Map<Medico>(modelo);
            medicoAdd.Activo = true;
            _dbcontext.Add(medicoAdd);
            await _dbcontext.SaveChangesAsync();
            return mapper.Map<MedicoDTO>(medicoAdd);
        }

        public async Task<MedicoDTO> ObtenerPorId(int id)
        {
            try
            {
                var medico = await _dbcontext.Medicos
                    .Where(p => p.Activo == true)              
                    .Include(p=>p.Especialidad)                 
                    .FirstOrDefaultAsync(p => p.Id == id);
                if (medico == null) throw new NotFoundException();
                return mapper.Map<MedicoDTO>(medico);
            }
            catch (Exception)
            {
                throw;
            }

        }

        public async Task<IQueryable<Medico>> ObtenerTodos()
        {
            try
            {
                IQueryable<Medico> queryProducto = _dbcontext.Medicos;
                return queryProducto;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<MedicoDTO> ActivoInactivo(int idMedico, string idUser)
        {
            try
            {
                var medico = await _dbcontext.Medicos.Where(c => c.Id == idMedico).FirstOrDefaultAsync();

                if (medico == null) throw new NotFoundException();
                
                medico.Activo = !medico.Activo;

                _dbcontext.Update(medico);

                await _dbcontext.SaveChangesAsync();

                return mapper.Map<MedicoDTO>(medico);
            }
            catch (Exception)
            {
                throw;
            }
        }

       

    }
}
