using medicitaBack.API.Exceptions;
using medicitaBack.BLL.contrato;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels.DatosDTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace medicitaBack.API.Controllers
{
    [EnableCors("ReglasCors")]
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DatosController : ControllerBase
    {
        private readonly IGenericService<CreacionDatosDTO, DatosDTO> _datosService;
        private readonly IDatosService _datosService1;
        private readonly UserManager<Usuario> _userManager;

        public DatosController(IGenericService<CreacionDatosDTO, DatosDTO> datosService, IDatosService datosService1,UserManager<Usuario> userManager)
        {
            _datosService = datosService;
            _datosService1 = datosService1;
            _userManager = userManager;
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "admin")]
        [HttpGet("BusquedaXID")]
        public async Task<ActionResult<DatosDTO>> ListarporID(int id) 
        {
            try
            {
                var datos = await _datosService.ObtenerPorId(id);

                return Ok(datos);
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
        [HttpGet("BuquedaCompleta")]
        public async Task<ActionResult<IEnumerable<DatosDTO>>> Obtenertodo()
        {
            try 
            { 
                var datos = await  _datosService.ObtenerTodos();
                return Ok(datos);
            }
            catch (Exception)
            {
                return StatusCode(500, "Error interno del servidor");
            }
        }
     

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost]
        public async Task<ActionResult<DatosDTO>>registrar(CreacionDatosDTO modelo) 
        {
            var datos = await _datosService.Registrar(modelo);

            return Ok(datos);
        }


        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPut]
        public async Task<ActionResult<DatosDTO>>Actualizar(int id, CreacionDatosDTO modelo) 
        {   
            try 
            {
                var datos = await _datosService.Actualizar(id, modelo);

                return Ok(datos);
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
        [HttpDelete]
        public async Task<IActionResult> Eliminar(int id)
        {
            try 
            { 
               var resultado = await _datosService.Eliminar(id);

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

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet("MisDatos")]
    public async Task<ActionResult<DatosDTO>> ListarporID()
    {
        try
        {
            var claim = HttpContext.User.Claims.Where(c => c.Type == "id").FirstOrDefault();
            var user = await _userManager.FindByIdAsync(claim.Value);                
            var datos = await _datosService.ObtenerPorId((int)user.DatosId);

            return Ok(datos);
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
