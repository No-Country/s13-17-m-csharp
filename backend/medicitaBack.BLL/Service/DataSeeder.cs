using medicitaBack.BLL.contrato;
using medicitaBack.DAL.Contrato;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels.EspecialidadDTO;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.BLL.Service
{
    public class DataSeeder : IDataSeeder
    {
        private readonly UserManager<Usuario> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IGenericRepository<CreacionEspecialidadDTO, EspecialidadDTO, Especialidad> _especialidadRepo;

        public DataSeeder(UserManager<Usuario> userManager, RoleManager<IdentityRole> roleManager, IGenericRepository<CreacionEspecialidadDTO, EspecialidadDTO, Especialidad> especialidadRepo)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            _especialidadRepo = especialidadRepo;
        }

        public async Task CrearCategorias()
        {
            List<CreacionEspecialidadDTO> especialidad = new List<CreacionEspecialidadDTO>()
            {
                new CreacionEspecialidadDTO(){Nombre="Games" },
                new CreacionEspecialidadDTO(){Nombre="Celulares" },
                new CreacionEspecialidadDTO(){Nombre="Muebles" }
            };
            var query = await _especialidadRepo.ObtenerTodos();
            foreach(var x in especialidad)
            {
                try
                {
                    var existeEspecialidad = await query.Where(c => c.Nombre == x.Nombre).FirstOrDefaultAsync();
                    if (existeEspecialidad == null) await _especialidadRepo.Insertar(x);
                }
                catch(Exception) { throw; }
            }
        }

        public async Task CrearRoles()
        {
            string[] roles = { "admin", "usuario" };

            foreach (string rol in roles)
            {
                try
                {
                    var existeRol = await roleManager.RoleExistsAsync(roleName: rol);

                    if (!existeRol) await roleManager.CreateAsync(new IdentityRole(roleName: rol));

                }
                catch (Exception)
                {

                    throw;
                }
            }

        }

        public async Task CrearUsuarioAdmin()
        {
            try
            {
                string email = "admin@gmail.com";

                var admin = await userManager.FindByEmailAsync(email);

                if (admin != null) return;

                var nuevoAdmin = new Usuario { UserName = email, Email = email };

                var resultado = await userManager.CreateAsync(nuevoAdmin, "Admin123!");

                if (!resultado.Succeeded) throw new Exception("No se pudo crear el usuario administrador");

                var resultadoRol = await userManager.AddToRoleAsync(nuevoAdmin, "admin");

            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
