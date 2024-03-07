using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels.MedicoDTO;
using medicitaBack.Models.VModels.CitaDTO;
using medicitaBack.Models.VModels.HistorialCitaDTO;

namespace medicitaBack.DAL.Contrato
{
    public interface ICitaBusquedaRepository
    {


        Task<IQueryable<Cita>> ObtenerPorIdMedico(int idMedico);


    }
}


