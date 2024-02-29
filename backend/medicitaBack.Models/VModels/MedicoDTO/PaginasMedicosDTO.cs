using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.Models.VModels.MedicoDTO
{
    public class PaginasMedicosDTO
    {
        public int Paginas { get; set; }
        public List<MedicoDTO> Medicos { get; set; }
    }
}
