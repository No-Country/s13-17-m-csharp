using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.Models.VModels.Lista_CitaDTO
{
    public class CreacionLista_CitaDTO
    {
        
        public int ListaCita { get; set; }

        public int MedicoId { get; set; }

        public int CitaId { get; set; }

    
    }
}
