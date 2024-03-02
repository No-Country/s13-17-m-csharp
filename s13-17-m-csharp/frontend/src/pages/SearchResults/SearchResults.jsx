import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
import Volver from '../../components/Volver/Volver';
const SearchResults = () => {
  return (
    <>
      <Volver title={'Ir al home'} />
      <main className="w-full flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </main>
    </>
  );
};

export { SearchResults };
