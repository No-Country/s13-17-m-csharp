using AutoMapper;
using medicitaBack.API.Exceptions;
using medicitaBack.DAL.Contrato;
using medicitaBack.DAL.Dbcontext;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels.MedicoDTO;
using medicitaBack.Models.VModels.HistorialCitaDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.DAL.Repository
{
    public class HistorialCitaRepository : ICitaRepository
    {
        private readonly AplicationDBcontext _dbcontext;
        private readonly IMapper _mapper;

        public HistorialCitaRepository(AplicationDBcontext dbcontext, IMapper mapper)
        {
            _dbcontext = dbcontext;
            _mapper = mapper;
        }

     
        public async Task<List<HistorialCitaDTO>> BusquedaPorIdMedico(int idMedico)
        {

            try
            {
                var cita = await _dbcontext.HistorialCitas.Where(s => s.MedicoId == idMedico).ToListAsync();
                
                return _mapper.Map<List<HistorialCitaDTO>>(cita);
            }
            catch (Exception)
            {
                throw;
            }
        }
                 
          
    }
}
