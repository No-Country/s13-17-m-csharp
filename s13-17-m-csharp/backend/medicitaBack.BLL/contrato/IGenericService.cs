﻿using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace medicitaBack.BLL.contrato
{
    public interface IGenericService<DTOCreacion,DTO>
    {
        Task<DTO> Registrar(DTOCreacion modelo);

        Task<DTO> Actualizar(int id, DTOCreacion modelo);

        Task<bool> Eliminar(int id);

        Task<DTO> ObtenerPorId(int id);

        Task<IEnumerable<DTO>> ObtenerTodos();
    }
}
