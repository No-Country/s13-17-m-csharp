using AutoMapper;
using medicitaBack.API.Exceptions;
using medicitaBack.BLL.contrato;
using medicitaBack.DAL.Contrato;
using medicitaBack.DAL.Dbcontext;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels.CitaDTO;
using medicitaBack.Models.VModels.Lista_CitaDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.BLL.Service
{
    public class CitaService : ICitaService
    {
        private readonly IGenericRepository<CreacionCitaDTO, CitaDTO, Cita> _citarepo;
        private readonly IMedicoService _medicorepo;
        private readonly IMapper _mapper;
        private readonly IGenericService<CreacionLista_CitaDTO, Lista_CitaDTO> _listaService;
        private readonly IEmailService _emailService;
        private readonly AplicationDBcontext _context;
       

        public CitaService(IGenericRepository<CreacionCitaDTO, CitaDTO, Cita> citarepo, IMedicoService medicoService,
            IMapper mapper, IGenericService<CreacionLista_CitaDTO, Lista_CitaDTO> listaService,
            IEmailService emailService, AplicationDBcontext aplicationDBcontext)
        {
            this._citarepo = citarepo;
            this._medicorepo = medicoService;
            this._mapper = mapper;
            this._listaService = listaService;
            this._emailService = emailService;
            this._context = aplicationDBcontext;
          
           
        }

        public async Task<CitaDTO> Actualizar(int id, CreacionCitaDTO modelo)
        {
            return await _citarepo.Actualizar(id, modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _citarepo.Eliminar(id);
        }

        public async Task<CitaDTO> ObtenerPorId(int id)
        {
            return await _citarepo.ObtenerPorId(id);
        }

        public async Task<IEnumerable<CitaDTO>> ObtenerTodos()
        {
            var query = await _citarepo.ObtenerTodos();

            var lista = await query.ToListAsync();
            return _mapper.Map<IEnumerable<CitaDTO>>(lista);
        }

        public async Task<CitaDTO> Registrar(string idUsuario,string email,DateTime Fecha_cita)
        {
            var transaction = await _context.Database.BeginTransactionAsync();
            try
            {
                    var cita = new CreacionCitaDTO()
                    {
                        UsuarioId = idUsuario,

                        fecha_cita = Fecha_cita,

                        EstadoCita = "Sin Procesar",

                    };

                    var citaCreada = await _citarepo.Insertar(cita);

                                                       

                    await transaction.CommitAsync();

                    CreacionCitaDTO creacionCita = new CreacionCitaDTO()
                    {
                      

                        EstadoCita = "Agendado",

                        fecha_cita = citaCreada.fecha_cita,

                        UsuarioId = citaCreada.usuarioId,

                      
                    };

                    var citaFinal = await Actualizar(citaCreada.Id, creacionCita);

                    

                    await _emailService.EnviarEmailAsync(email, "TU CITA HA SIDO AGENDADA", $"{citaFinal.Id}");
                    
                    

                    return citaFinal;

            }
            catch (Exception)
            {
                await transaction.RollbackAsync();
                throw;
            }

        }


        public async Task<IEnumerable<CitaDTO>> misCitas(string userId) 
        {
            var query = await _citarepo.ObtenerTodos();

            var lista = await query
                .Include(p=>p.HistorialCitas)
                    .ThenInclude(r=>r.Medico)                        
                .Where(p=>p.UsuarioId==userId)
                .ToListAsync();
            return _mapper.Map<IEnumerable<CitaDTO>>(lista);
        }
    }
}
