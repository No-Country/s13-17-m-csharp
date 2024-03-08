using medicitaBack.Models.Entidades;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using medicitaBack.Models.VModels.MedicoDTO;

namespace medicitaBack.Models.VModels.HistorialCitaDTO
{
    public class HistorialCitaDTO
    {
        
        public int Id { get; set; }

        public string? Motivo { get; set; }
    
        public int MedicoId { get; set; }

        public DateTime FechaCitaUpdate { get; set; }


    }
}
