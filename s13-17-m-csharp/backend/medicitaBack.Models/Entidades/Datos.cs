using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.Models.Entidades
{
    public class Datos
    {
       
        public int Id { get; set; }

        [MaxLength(45)]
        public string Nombre { get; set; } = string.Empty;

        [MaxLength(45)]
        public string Apellido { get; set; } = string.Empty;
        
        [MaxLength(250)]
        public string Direccion { get; set; } = string.Empty;              
        
        [MaxLength(45)]
        public string DNI { get; set; } = string.Empty;

        [MaxLength(250)]
        public string Telefono { get; set; } = string.Empty;

        [MaxLength(250)]
        public string PerfilMedico { get; set; } = string.Empty;


    }
}
