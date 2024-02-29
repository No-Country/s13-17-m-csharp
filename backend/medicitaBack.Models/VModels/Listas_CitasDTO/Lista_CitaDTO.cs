using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.Models.VModels.Lista_CitaDTO
{
    public class Lista_CitaDTO
    {
        public int Id { get; set; }

        public int Lista { get; set; }

        public int MedicoId { get; set; }

        public int CitaId { get; set; }
        public MedicoDTO.MedicoDTO Medico {  get; set; } 
 
       
    }
}
