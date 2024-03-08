using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.Models.Entidades
{
    public class Cita
    {
        public int Id { get; set; }

        public string UsuarioId { get; set; }

        public string? Motivo { get; set; }
     
        public int MedicoId { get; set; }

        public Medico Medico { get; set; }
       
        public DateTime fecha_cita { get; set; } 

        public bool Activo {  get; set; }
     

    }
}
