import { Fade } from 'react-awesome-reveal';
import { Calendar } from '../../components/Calendar/Calendar';
import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
import Volver from '../../components/Volver/Volver';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';



const Agenda = () => {







  




  const [medicoProfile, setMedicoProfile] = useState("")
  const params = useParams()
  console.log(params);

  useEffect(() => { 
      const medico = {
        descripcion: "Consulta para cardiologo",
        especialidad: "especialidad",
        horario: "Ejemplo de horario",
        nombre: "qqqqqqqqq",
        id:crypto.randomUUID()
      };

    return () => {
      setMedicoProfile(medico)
    }
  }, [])


  return (
    <>
      <Volver title={'Ver otros médicos'} />
      <main className="w-full flex justify-center">
        <Fade className="w-full flex justify-center" cascade triggerOnce="true">
          <DoctorCard key={medicoProfile.id} medico={medicoProfile}    viewAgenda={true}>
            <Calendar />
          </DoctorCard>
        </Fade>
      </main>
    </>
  );
};

export { Agenda };


// import { Fade } from 'react-awesome-reveal';
// import { Calendar } from '../../components/Calendar/Calendar';
// import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
// import Volver from '../../components/Volver/Volver';
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// const Agenda = () => {
//   const [medicoProfile, setMedicoProfile] = useState(null);
//   const params = useParams();

//   useEffect(() => {
//     // Aquí podrías realizar alguna lógica para obtener los datos del médico
//     // utilizando los parámetros de ruta (params) y luego establecer el estado
//     // medicoProfile con esos datos.
//     // Por ejemplo:
//     const medicoId = params.id;
//     // Lógica para obtener los datos del médico con el ID medicoId
//     // Luego establecer el estado medicoProfile con los datos obtenidos
//     const datosMedico = obtenerDatosMedicoPorId(medicoId); // Función hipotética para obtener los datos del médico
//     setMedicoProfile(datosMedico);
//   }, [params.id]);

//   // Función hipotética para obtener los datos del médico por su ID
//   const obtenerDatosMedicoPorId = (id) => {
//     // Lógica para obtener los datos del médico utilizando su ID
//     // Retorna los datos del médico
//     return {
//       descripcion: "Consulta para cardiologo",
//       especialidad: "especialidad",
//       horario: "Ejemplo de horario",
//       nombre: "asdadsad",
//       id: id // Utilizamos el mismo ID recibido como parámetro
//     };
//   };

//   return (
//     <>
//       <Volver title={'Ver otros médicos'} />
//       <main className="w-full flex justify-center">
//         <Fade className="w-full flex justify-center" cascade triggerOnce="true">
//           {medicoProfile && (
//             <DoctorCard key={medicoProfile.id} medico={medicoProfile} viewAgenda={true}>
//               <Calendar />
//             </DoctorCard>
//           )}
//         </Fade>
//       </main>
//     </>
//   );
// };

// export { Agenda };
