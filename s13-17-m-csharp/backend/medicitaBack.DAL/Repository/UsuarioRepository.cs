﻿using medicitaBack.API.Exceptions;
using medicitaBack.DAL.Contrato;
using medicitaBack.DAL.Dbcontext;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.DAL.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly UserManager<Usuario> userManager;
        private readonly AplicationDBcontext _dbcontext;
        public UsuarioRepository(UserManager<Usuario> userManager, AplicationDBcontext dbcontext)
        {
            this.userManager = userManager;

            this._dbcontext = dbcontext;
        }

        public async Task<bool> Registrar(Usuario modelo, string password)
        {
            var trasaction = await _dbcontext.Database.BeginTransactionAsync();
            try
            {
                var resultado = await userManager.CreateAsync(modelo, password);
                if (!resultado.Succeeded) return false;
                var resultadoRol =   await userManager.AddToRoleAsync(modelo, "usuario");
                if (!resultadoRol.Succeeded) 
                { 
                    
                await trasaction.RollbackAsync();
                 return false;
                }
                await trasaction.CommitAsync();
                
                return true;
            }
            catch (Exception ex)
            {
                await trasaction.RollbackAsync();
                return false;
            }
        }

        public async Task<bool> ActualizarIdDatos(int datosId, string email)
        {
            try
            {
                var user = await userManager.FindByEmailAsync(email);

                if (user == null) throw new NotFoundException();

                user.DatosId= datosId;

                _dbcontext.Update(user);
                await _dbcontext.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<Usuario> GetByEmailAsync(string email)
        {
            try
            {
                var user = await _dbcontext.Users.Where(user => user.Email == email).Include(user => user.Datos).FirstOrDefaultAsync();

                if(user == null) throw new NotFoundException();


                return user;
            }
            catch (Exception)
            {
                throw;
            }
        }



    }

     

        
    
}
