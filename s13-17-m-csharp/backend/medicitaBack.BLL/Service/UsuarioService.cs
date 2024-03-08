using medicitaBack.BLL.contrato;
using medicitaBack.DAL.Contrato;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels;
using medicitaBack.Models.VModels.Auth;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.BLL.Service
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _registrarRepo;
        private readonly ITokenService tokenService;

        public UsuarioService( IUsuarioRepository registrarRepo, ITokenService tokenService)
        {
            _registrarRepo = registrarRepo;
            this.tokenService = tokenService;
        }

        public Task<bool> Actualizar(Usuario modelo)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Eliminar(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Usuario> ObtenerPorId(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IQueryable<Usuario>> ObtenerTodos()
        {
            throw new NotImplementedException();
        }

        public async Task<bool> Registrar(CreacionUsuarioDTO modelo)
        {
            Usuario Usuario = new Usuario()
            {
                UserName = modelo.Email,
                Email = modelo.Email,
                FechaCreacion = DateTime.Now,
            };
            return await _registrarRepo.Registrar(Usuario, modelo.Password);
        }

        public async Task<bool> ActualizarIdDatos(int datosId, string email)
        {
            
            return await _registrarRepo.ActualizarIdDatos(datosId, email);
        }

        public async Task<RespuestaAuth> GetCredencialesAsync(string email)
        {
            try
            {
                var usuario = await _registrarRepo.GetByEmailAsync(email);

                var token = tokenService.GenerarToken(email, 1);

                return new RespuestaAuth() { 
                           
                    Token = token.Result};



            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
