// import React from 'react'
import style from './Misturnos.module.css';
import TurnoAsignado from '../../components/TurnoAsignado/TurnoAsignado';
import Volver from '../../components/Volver/Volver';
import Swal from "sweetalert2";
import { Fade } from 'react-awesome-reveal';

const cancelTurno = () => {
  Swal.fire({
    title: "Cancelar turno",
    text: `Esta seguro que desa cancelar el turno?`,
    // icon: "question",
    showCancelButton: true,
    confirmButtonText: "Si, cancelar turno",
    cancelButtonText: "No, volver atrás",
    confirmButtonColor: "#00a1a3",
    // cancelButtonColor:  "#00a1a3",
    focusCancel: true,

  })
  .then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        text: "Su turno fue cancelado con éxito",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,

        //! ACA PONER LA FUNCION QUE ELIMINA EL TURNO

      })
    }
  });
}

const Misturnos = () => {
  return (
    <>
    <Fade>

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
            <button onClick={cancelTurno} className={style.btnContinuar}>
              Cancelar turno
            </button>
          </div>
          <br />
        </div>
      </main>
    </Fade>
    </>
  );
};

export default Misturnos;

