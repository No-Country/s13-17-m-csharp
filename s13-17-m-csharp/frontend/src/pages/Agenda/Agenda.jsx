import { Calendar } from '../../components/Calendar/Calendar';
import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
import Volver from '../../components/Volver/Volver';
import { useLocation } from 'react-router-dom';
const Agenda = () => {


  const location = useLocation();
  const medico = location.state?.medico;




  return (
    <>
      <Volver title={'Ver otros médicos'} />
      <main className="w-full flex justify-center">
        <DoctorCard key={medico.id} medico={medico}    viewAgenda={true}>
          <Calendar medico={medico} />
        </DoctorCard>
      </main>
    </>
  );
};

export { Agenda };
