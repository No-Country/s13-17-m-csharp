import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
import Volver from '../../components/Volver/Volver';
import { useParams } from 'react-router-dom';
import {Fade} from 'react-awesome-reveal'

const SearchResults = () => {
const params=useParams()
const {especialidad} = params



  return (
    <>
      <Volver title={'Ir al home'} />
      <h2 className='flex text-[20px] text-[--color-secondary] font-bold md:mx-[180px] justify-center md:justify-start mx-[63px] my-[35px]'> {especialidad} </h2>
      <main className="w-full flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly">
        <Fade className="md:w-[600px] w-full flex  justify-center" cascade triggerOnce="true" damping="0.2">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </Fade>
      </main>
    </>
  );
};

export { SearchResults };
