using medicitaBack.Models.Entidades;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.Models.VModels.CitaDTO
{
    public class CreacionCitaDTO
    {
       
        public string UsuarioId { get; set; }

        public DateTime fecha_cita { get; set; }

        public int MedicoId { get; set; }
           

        [MaxLength(45)]
        public string? EstadoCita { get; set; }

    }
}
