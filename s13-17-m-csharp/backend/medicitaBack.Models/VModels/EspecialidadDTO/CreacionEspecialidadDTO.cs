using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.Models.VModels.EspecialidadDTO
{
    public class CreacionEspecialidadDTO
    {
        [Required]
        [MaxLength(45)]
        public string Nombre { get; set; }
    }
}
