using medicitaBack.Models.VModels.MedicoDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.BLL.contrato
{
    public interface IMedicoService: IGenericService<CreacionMedicoDTO, MedicoDTO>
    {
        Task<MedicoDTO> ActivoInactivo(int idMedico, string idUser);
        Task<PaginasMedicosDTO> ObtenerPorFiltro(int regXPagina, int paginaActual, string? nombre, int? idEspecialidad);      
    }
}
