// import React from 'react'
import style from './Misturnos.module.css';
import TurnoAsignado from '../../components/TurnoAsignado/TurnoAsignado';
import Volver from '../../components/Volver/Volver';
const Misturnos = () => {
  return (
    <>
      <Volver title={'Ir al Home'} />
      <main className="w-[91%] bg-color-cards mx-auto  p-3 rounded md:w-[72%] lg:bg-color-cards-desk lg:p-3 ">
        <p className=" ml-[35px] text-lg underline font-medium mb-2 md:text-[20px] text-[#333333]">
          Turno asignado
        </p>
        <div className="font-font-text">
          <p className=" ml-[35px] text-sm font-medium mb-2 md:text-lg text-[#333333]">
            <strong>Especialidad:</strong> Oftalmología
          </p>
          <p className="ml-[35px] text-sm font-medium mb-2 md:text-lg text-[#333333]">
            <strong>Médico:</strong> Gimenez, Laura
          </p>
          <TurnoAsignado />
          <div className="flex justify-end mt-[35px] sm:mr-[35px] ">
            <button className={style.btnContinuar}>
              Cancelar turno
            </button>
          </div>
          <br />
        </div>
      </main>
    </>
  );
};

export default Misturnos;
