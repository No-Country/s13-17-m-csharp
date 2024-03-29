﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace medicitaBack.Models.Entidades
{
    public  class Usuario: IdentityUser
    {
        
        public DateTime FechaCreacion { get; set; }
        
        public bool Activo {  get; set; } 

        public Datos? Datos { get; set; }

        public int? DatosId { get; set; }


    }
}
