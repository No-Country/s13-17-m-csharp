import { Calendar } from '../../components/Calendar/Calendar';
import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
import Volver from '../../components/Volver/Volver';
const Agenda = () => {
  return (
    <>
      <Volver title={'Ver otros médicos'} />
      <main className="w-full flex justify-center">
        <DoctorCard viewAgenda={true}>
          <Calendar />
        </DoctorCard>
      </main>
    </>
  );
};

export { Agenda };
