using medicitaBack.Models.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.BLL.contrato
{
    public interface ITokenService
    {
        Task<string> GenerarToken(string email, int diasExpiracion);
    }
}
