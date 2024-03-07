using medicitaBack.Models.VModels.CitaDTO;
using medicitaBack.Models.VModels.Lista_CitaDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.BLL.contrato
{
    public interface ICitaService
    {
        Task<CitaDTO> Registrar(CreacionCitaDTO modelo);

        Task<CitaDTO> Actualizar(int id, CreacionCitaDTO modelo);

        Task<bool> Eliminar(int id);

        Task<CitaDTO> ObtenerPorId(int id);

        Task<IEnumerable<CitaDTO>> ObtenerTodos();

        Task<IEnumerable<CitaDTO>> misCitas(string userId);

        Task<IEnumerable<CitaDTO>> ObtenerPorIdMedico(int idMedico);
    }
}
