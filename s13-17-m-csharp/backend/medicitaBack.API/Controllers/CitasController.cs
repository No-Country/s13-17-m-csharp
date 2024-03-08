using medicitaBack.API.Exceptions;
using medicitaBack.BLL.contrato;
using medicitaBack.BLL.Service;
using medicitaBack.Models.VModels.CitaDTO;
using medicitaBack.Models.VModels.MedicoDTO;
using medicitaBack.Models.VModels.Lista_CitaDTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace medicitaBack.API.Controllers
{
    [EnableCors("ReglasCors")]
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CitasController : ControllerBase
    {
        private readonly ICitaService _iCitaService;
        private readonly IGenericService<CreacionLista_CitaDTO, Lista_CitaDTO> _listaService;


        public CitasController(ICitaService iCitaService, IGenericService<CreacionLista_CitaDTO, Lista_CitaDTO> renglonService)
        {
            _iCitaService = iCitaService;
            _listaService = renglonService;
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("ObtenerxID")]
        public async Task<ActionResult<CitaDTO>> ListarporID(int id)
        {
            try
            {
                var cita = await _iCitaService.ObtenerPorId(id);
              
                return Ok(cita);
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

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("ObtenerxIDMedico")]
        public async Task<ActionResult<List<CitaDTO>>> ListarporIDMedico(int idMedico)
        {
            try
            {
                var cita = await _iCitaService.ObtenerPorIdMedico(idMedico);

                return Ok(cita);
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

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("MisCitas")]
        public async Task<ActionResult<List<CitaDTO>>> Listar()
        {
            try
            {
                var claim = HttpContext.User.Claims.Where(c => c.Type == "id").FirstOrDefault();
                var id = claim.Value;
                var cita = await _iCitaService.misCitas(id);

                return Ok(cita);
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

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost("Registrar")]
        public async Task<ActionResult<CitaDTO>>RegistrarCita(CreacionCitaDTO modelo) 
        {
            try
            {
                var claim = HttpContext.User.Claims.Where(c => c.Type == "id").FirstOrDefault();
                var id = claim.Value;
                modelo.UsuarioId = id;                                         

                var citaFinal = await _iCitaService.Registrar(modelo);


                return Ok(citaFinal);

            }
            catch(BadRequestException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {

                return StatusCode(500, "Error interno del servidor");
            }

        }

        

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPut("ActualizarCita")]
        public async Task<ActionResult<CitaDTO>> Actualizar(int id, CreacionCitaDTO modelo)
        {
            try
            {
                var cita = await _iCitaService.Actualizar(id, modelo);

                return Ok(cita);
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


        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpDelete("Eliminar Cita")]
        public async Task<IActionResult> EliminarCita(int id) 
        {
            try
            {
                var resultado = await _iCitaService.Eliminar(id);

               
                await _listaService.Eliminar(id);

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

    }
}
