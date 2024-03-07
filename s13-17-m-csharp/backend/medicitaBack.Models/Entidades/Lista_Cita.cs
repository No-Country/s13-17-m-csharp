using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.Models.Entidades
{
    public class Lista_Cita
    {
        public int Id { get; set; }

        public int ListaCita { get; set; }

        public int MedicoId { get; set; }

        public Medico Medico { get; set; }

        public int CitaId { get; set; }
        
        public Cita Cita { get; set; }        


    }
}
