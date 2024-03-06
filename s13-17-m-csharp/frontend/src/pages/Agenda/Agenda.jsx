import { Fade } from 'react-awesome-reveal';
import { Calendar } from '../../components/Calendar/Calendar';
import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
import Volver from '../../components/Volver/Volver';
const Agenda = () => {


  const medico = {
    descripcion: "Consulta para cardiologo",
    especialidad: "especialidad",
    horario: "Ejemplo de horario",
    nombre: " Diego ",
    id:crypto.randomUUID()
 };


  return (
    <>
      <Volver title={'Ver otros médicos'} />
      <main className="w-full flex justify-center">

        <Fade className="w-full flex justify-center" cascade triggerOnce="true">
          {/*<DoctorCard viewAgenda={true}>*/}

        <DoctorCard key={medico.id} medico={medico}    viewAgenda={true}>

          <Calendar />
        </DoctorCard>
        </Fade>
      </main>
    </>
  );
};

export { Agenda };
