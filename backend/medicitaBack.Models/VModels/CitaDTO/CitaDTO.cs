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
    public class CitaDTO
    {
        public int Id { get; set; }

        public string UsuarioId { get; set; }

        [MaxLength(250)]
        public string? Motivo { get; set; }

        public int MedicoId { get; set; }

        public MedicoDTO.MedicoDTO Medico {  get; set; } 

        public DateTime fecha_cita { get; set; }

        public bool Activo { get; set; }


    }
}
