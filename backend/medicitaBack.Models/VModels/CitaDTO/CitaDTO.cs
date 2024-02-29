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

        public string? usuarioId { get; set; }

        public DateTime fecha_cita { get; set; }

        [MaxLength(45)]
        public string? EstadoCita { get; set; }

        public List<Lista_CitaDTO.Lista_CitaDTO> Lista_Cita { get; set; } = new List<Lista_CitaDTO.Lista_CitaDTO>();
    }
}
