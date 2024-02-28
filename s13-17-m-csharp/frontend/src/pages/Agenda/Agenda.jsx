import { Calendar } from '../../components/Calendar/Calendar';
import { Layout } from '../../components/shared/Layout/Layout';
import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
const Agenda = () => {
  return (
    <Layout>
      <main className="w-full flex flex-col items-center ">
        <DoctorCard viewAgenda={true}>
          <Calendar />
        </DoctorCard>
      </main>
    </Layout>
  );
};

export { Agenda };
