using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels.MedicoDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.DAL.Contrato
{
    public interface IMedicoRepository : IGenericRepository<CreacionMedicoDTO, MedicoDTO, Medico>
    {
        Task<MedicoDTO> ActivoInactivo(int idMedico, string idUser);

    }
}
