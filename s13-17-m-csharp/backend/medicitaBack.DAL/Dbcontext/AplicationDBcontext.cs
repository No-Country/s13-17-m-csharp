using medicitaBack.Models.Entidades;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;


namespace medicitaBack.DAL.Dbcontext
{
    public class AplicationDBcontext : IdentityDbContext<Usuario>
    {
        public AplicationDBcontext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Datos> Datos { get; set; }

        public DbSet<Especialidad> Especialidades { get; set; }        

        public DbSet<Medico> Medicos { get; set; }

        public DbSet<Cita> Citas { get; set; } 

        public DbSet<HistorialCita> HistorialCitas { get; set; }

        public DbSet<Lista_Cita> ListaCitas { get; set;}

    }
}
