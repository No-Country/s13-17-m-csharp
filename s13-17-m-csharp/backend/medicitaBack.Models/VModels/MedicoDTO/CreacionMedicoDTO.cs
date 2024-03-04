using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.Models.VModels.MedicoDTO
{
    public class CreacionMedicoDTO
    {
        

        [Required(ErrorMessage ="Se requiere el Nombre del Medico")]
        [MaxLength(75)]
        public string nombre { get; set; }= string.Empty;

        [MaxLength(250)]
        public string? Descripcion { get; set; } = string.Empty;

        public string Horario { get; set; } = string.Empty;

        public int EspecialidadId { get; set; }              

        public bool Activo { get; set; }

        public string UsuarioId { get; set; }

 
    }
}
