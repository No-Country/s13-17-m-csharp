using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.Models.Entidades
{
    public class Medico
    {
       
        public int Id { get; set; }

        [MaxLength(75)]
        public string Nombre { get; set; }

        [MaxLength(250)]
        public string? Descripcion { get; set; }
        public string Horario { get; set; }             
        public int EspecialidadId { get; set; }
        public Especialidad Especialidad { get; set; }                        
        public bool Activo { get; set; }             
    }
}
