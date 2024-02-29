import { Calendar } from '../../components/Calendar/Calendar';
// import { Layout } from '../../components/shared/Layout/Layout';
import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
// import Volver from '../../components/Volver/Volver';
const Agenda = () => {
  return (
    <>
      {/* <Volver title="Volver" /> */}
      <main className="w-full flex justify-center">
        <DoctorCard viewAgenda={true}>
          <Calendar />
        </DoctorCard>
      </main>
    </>
  );
};

export { Agenda };
