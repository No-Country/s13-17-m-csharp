import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
import { Layout } from '../../components/shared/Layout/Layout';
import Volver from '../../components/Volver/Volver';
const SearchResults = () => {
  return (
    <Layout>
      <Volver title={'Volver'} />
      <main className="w-full flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </main>
    </Layout>
  );
};

export { SearchResults };
