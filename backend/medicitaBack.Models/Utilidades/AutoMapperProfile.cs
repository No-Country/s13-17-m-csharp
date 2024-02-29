using AutoMapper;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.VModels;
using medicitaBack.Models.VModels.EspecialidadDTO;
using medicitaBack.Models.VModels.DatosDTO;
using medicitaBack.Models.VModels.CitaDTO;
using medicitaBack.Models.VModels.MedicoDTO;
using medicitaBack.Models.VModels.Lista_CitaDTO;
using medicitaBack.Models.VModels.HistorialCitaDTO;

namespace medicitaBack.Models.Utilidades
{
    public class AutoMapperProfile:Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<EspecialidadDTO, Especialidad>().ReverseMap();
            
            CreateMap<CreacionEspecialidadDTO, Especialidad>().ReverseMap();                      
            
            CreateMap<DatosDTO, Datos>().ReverseMap();
            
            CreateMap<CreacionDatosDTO, Datos>().ReverseMap();
            
            CreateMap<MedicoDTO, Medico>().ReverseMap();
            
            CreateMap<CreacionMedicoDTO, Medico>().ReverseMap();

            CreateMap<CreacionCitaDTO, Cita>().ReverseMap();

            CreateMap<CitaDTO, Cita>().ReverseMap();

            CreateMap<CreacionLista_CitaDTO, Lista_Cita>().ReverseMap();

            CreateMap<Lista_CitaDTO, Lista_Cita>().ReverseMap();
            
            CreateMap<HistorialCitaDTO, HistorialCita>().ReverseMap();
        }
    }
}
