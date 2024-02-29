using medicitaBack.API.Exceptions;
using medicitaBack.BLL.contrato;
using medicitaBack.Models.VModels.EspecialidadDTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace medicitaBack.API.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/especialidades")]
    [ApiController]
    public class EspecialidadController : ControllerBase
    {
        private readonly IGenericService<CreacionEspecialidadDTO, EspecialidadDTO> _especialidadService;

        public EspecialidadController(IGenericService<CreacionEspecialidadDTO, EspecialidadDTO> especialidadService)
        {
            this._especialidadService = especialidadService;
        }
        
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "admin")]
        [HttpPost("Registrar especialidad")]
        public async Task<ActionResult<EspecialidadDTO>> Post(CreacionEspecialidadDTO modelo)
        {
            try
            {
                var especialidad = await _especialidadService.Registrar(modelo);

                return Ok(especialidad);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
                
            }
        }
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme,Roles ="admin")]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                bool resultado = await _especialidadService.Eliminar(id);
               
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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EspecialidadDTO>>> GetAll()
        {
            try
            {
                var especialidad = await _especialidadService.ObtenerTodos();
                return Ok(especialidad);

            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<EspecialidadDTO>> Get(int id)
        {
            try
            {
                var especialidad = await _especialidadService.ObtenerPorId(id);

                
                return Ok(especialidad);
            }
            catch(NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {

                return StatusCode(500, "Error interno del servidor");
            }
        }
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "admin")]
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, CreacionEspecialidadDTO creacionEspecialidadDTO)
        {
            try
            {
                var especialidad = await _especialidadService.Actualizar(id, creacionEspecialidadDTO);
                return Ok(especialidad);

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
