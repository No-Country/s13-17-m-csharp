using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels.EspecialidadDTO;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.Models.VModels.MedicoDTO
{
    public class MedicoDTO
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Se requiere el Nombre del Medico")]
        [MaxLength(75)]
        public string nombre { get; set; }

        [MaxLength(250)]
        public string? Descripcion { get; set; }

        [MaxLength(250)]
        public string? Horario { get; set; }

        public int EspecialidadId { get; set; }
        public EspecialidadDTO.EspecialidadDTO Especialidad { get; set; }
                
        public bool Activo { get; set; }     
        
    }
}
