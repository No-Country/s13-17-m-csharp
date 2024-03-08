using AutoMapper;
using medicitaBack.BLL.contrato;
using medicitaBack.DAL.Contrato;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels.DatosDTO;
using medicitaBack.Models.VModels.Lista_CitaDTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace medicitaBack.BLL.Service
{
    public class Lista_CitaService: IGenericService<CreacionLista_CitaDTO, Lista_CitaDTO>
    {
        private readonly IGenericRepository<CreacionLista_CitaDTO, Lista_CitaDTO, Lista_Cita> _listaRepo;
        private readonly IMapper mapper;

        public Lista_CitaService(IGenericRepository<CreacionLista_CitaDTO, Lista_CitaDTO, Lista_Cita> renglonesRepo, IMapper mapper)
        {
            _listaRepo = renglonesRepo;
            this.mapper = mapper;
        }

        public async Task<Lista_CitaDTO> Actualizar(int id, CreacionLista_CitaDTO modelo)
        {
            return await _listaRepo.Actualizar(id, modelo);
        }

        public async Task<bool> Eliminar(int id)
        {
            return await _listaRepo.Eliminar(id);
        }

        public async Task<Lista_CitaDTO> ObtenerPorId(int id)
        {
            return await _listaRepo.ObtenerPorId(id);
        }

        public async Task<IEnumerable<Lista_CitaDTO>> ObtenerTodos()
        {
            var query = await _listaRepo.ObtenerTodos();

            var lista = await query.ToListAsync();
            return mapper.Map<IEnumerable<Lista_CitaDTO>>(lista);
        }

        public async Task<Lista_CitaDTO> Registrar(CreacionLista_CitaDTO modelo)
        {
            return await _listaRepo.Insertar(modelo);
        }
    }
}
