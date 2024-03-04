import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
import Volver from '../../components/Volver/Volver';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
const params=useParams()
const {especialidad} = params



  return (
    <>
      <Volver title={'Ir al home'} />
    <h2> {especialidad} </h2>
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
