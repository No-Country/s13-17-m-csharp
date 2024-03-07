using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.Models.Entidades
{
    public class Especialidad
    {
        public int Id { get; set; }
        [MaxLength(45)]
        public string Nombre { get; set; } = string.Empty;

        public bool Activo { get; set; }
    }
}
