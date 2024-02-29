import { Calendar } from '../../components/Calendar/Calendar';
import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
const Agenda = () => {
  return (
    <>
      <main className="w-full flex justify-center">
        <DoctorCard viewAgenda={true}>
          <Calendar />
        </DoctorCard>
      </main>
    </>
  );
};

export { Agenda };
