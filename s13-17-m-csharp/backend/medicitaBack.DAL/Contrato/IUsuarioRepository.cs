using medicitaBack.Models.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.DAL.Contrato
{
    public interface IUsuarioRepository
    {
        Task<bool> Registrar(Usuario modelo, string password);

        Task<bool> ActualizarIdDatos(int datosId, string email);

        Task<Usuario> GetByEmailAsync(string email);


    }
}
