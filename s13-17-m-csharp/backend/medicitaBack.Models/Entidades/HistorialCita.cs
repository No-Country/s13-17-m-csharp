using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.Models.Entidades
{
    public class HistorialCita
    {
               
        public int Id { get; set; }

        [MaxLength(250)]
        public string? Motivo { get; set; }

        public int MedicoId { get; set; }

        public DateTime FechaCitaUpdate { get; set; } 

     
        public virtual Medico Medico { get; set; } 


    }
}
