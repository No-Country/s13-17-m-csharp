import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
import Volver from '../../components/Volver/Volver';
import { useParams } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { medicosApi } from '../../utils/MedicosApi';
import { useEffect, useState } from 'react';

const SearchResults = () => {
  const params = useParams();
  const { especialidad } = params;

  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    const fetchMedicos = async () => {
      try {
        const data = await medicosApi();
        const medicosFiltrados = data.medicos.filter(
          (medico) => medico.especialidad.nombre === especialidad
        );
        setMedicos(medicosFiltrados);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMedicos();
  }, [especialidad]);

  return (
    <>
      <Volver title={'Ir al home'} />
      <main className="w-full flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly">
        <Fade
          className="md:w-[600px] w-full flex  justify-center"
          cascade
          triggerOnce="true"
          damping="0.2">
          {medicos.map((medico) => (
            <DoctorCard
              key={medico.id}
              medico={medico}
              medicoNombre={medico.nombre}
            />
          ))}
        </Fade>
      </main>
    </>
  );
};

export { SearchResults };
