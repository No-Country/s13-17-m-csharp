using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.BLL.contrato
{
    public interface IEmailService
    {
        Task<bool> EnviarEmailAsync(string emailDestinatario, string asunto, string mensaje);
        
    }
}
