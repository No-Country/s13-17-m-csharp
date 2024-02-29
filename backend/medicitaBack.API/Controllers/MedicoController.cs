using medicitaBack.API.Exceptions;
using medicitaBack.BLL.contrato;
using medicitaBack.BLL.Service;
using medicitaBack.Models.VModels.DatosDTO;
using medicitaBack.Models.VModels.MedicoDTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace medicitaBack.API.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class MedicoController : ControllerBase
    {
        private readonly IMedicoService _medicoService;

        public MedicoController(IMedicoService medicoService)
        {
            _medicoService = medicoService;
        }

      

        [HttpGet("BusquedaXID")]
        public async Task<ActionResult<MedicoDTO>> ListarporID(int id)
        {
            try
            {
                var producto = await _medicoService.ObtenerPorId(id);

                return Ok(producto);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {

                return StatusCode(500, "Error interno del servidor");
            }
        }

        [HttpGet("Busqueda")]
        public async Task<ActionResult<PaginasMedicosDTO>> Obtenertodo(int regXPagina, int paginaActual, string? nombre, int? idEspecialidad)
        {
            try
            {
                var producto = await _medicoService.ObtenerPorFiltro(regXPagina,paginaActual, nombre, idEspecialidad);
                return Ok(producto);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }


        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "admin")]
        [HttpPost]
        public async Task<ActionResult<MedicoDTO>> registrar([FromForm]CreacionMedicoDTO creacionMedicoDTO)
        {
            try { 
            var claim = HttpContext.User.Claims.Where(c => c.Type == "id").FirstOrDefault();
            var id = claim.Value;
                creacionMedicoDTO.UsuarioId = id;
            var producto = await _medicoService.Registrar(creacionMedicoDTO);

            return Ok(producto);
            }
            catch(Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "admin")]       
        [HttpPut]
        public async Task<ActionResult<MedicoDTO>> Actualizar(int id, CreacionMedicoDTO modelo)
        {
            try
            {
                var producto = await _medicoService.Actualizar(id, modelo);

                return Ok(producto);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "admin")]
        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {
            try
            {
                var resultado = await _medicoService.Eliminar(id);

                return NoContent();
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }

       [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles ="admin")]
        [HttpPut("activo")]
        public async Task<ActionResult<MedicoDTO>> ActivoInactivo(int idMedico)
        {
            try
            {
                var claim = HttpContext.User.Claims.Where(c => c.Type == "id").FirstOrDefault();
                var idUser = claim.Value;
                var producto = await _medicoService.ActivoInactivo(idMedico, idUser);

                return Ok(producto);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (UnauthorizedAccessException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }
    }
}
