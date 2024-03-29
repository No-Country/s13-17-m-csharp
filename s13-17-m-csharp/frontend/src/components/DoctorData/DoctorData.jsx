/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Valoracion from '../Valoracion/Valoracion';
const DoctorData = ({ nombre, descripcion, medico, horario }) => {
  const [showValoracion, setShowValoracion] = useState(true);
  const location = useLocation();


  useEffect(() => {
    if (location.pathname === '/agenda') {
      setShowValoracion(false);
    } else {
      setShowValoracion(true);
    }
  }, [location.pathname]);

  return (
    <main className="flex font-font-text mb-5">
      <img
        className="w-20 h-20 rounded-2xl  object-cover  md:w-[100px] md:h-[110px] s:rounded-[20px] md:rounded-md"
        alt="Doctor photo"
        src={medico ? medico.horario : horario}
      />
      <section className="ml-2 md:mt-[5px]">
        <h2 className="ml-[7px] text-base font-medium mb-2 md:text-lg text-[#333333]">
          Dr. {medico ? medico.nombre : nombre}
        </h2>
        <p className="ml-[7px] text-sm font-medium mb-2 md:text-base md:text-[#627282] text-[#333333]">
          {medico ? medico.descripcion : descripcion}
        </p>
        {showValoracion && <Valoracion />}
      </section>
    </main>
  );
};

export default DoctorData;
