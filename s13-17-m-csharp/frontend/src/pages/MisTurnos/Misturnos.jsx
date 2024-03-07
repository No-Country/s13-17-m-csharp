// import React from 'react'
import style from './Misturnos.module.css';
import TurnoAsignado from '../../components/TurnoAsignado/TurnoAsignado';
import Volver from '../../components/Volver/Volver';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';
import React from 'react';
import { useMakeRequest } from '../../hooks/useMakeRequest';
import {
  cancelAppointment,
  myAppoiments
} from '../../api/services/user.service';
import Loader from '../../components/shared/Loader/Loader';

const Misturnos = () => {
  const [appointments, setAppointments] = React.useState([]);
  const {
    state: { loading, response },
    sendRequest
  } = useMakeRequest();

  const getMyAppointments = async () => {
    await sendRequest('', myAppoiments);
  };

  const cancelTurno = (id, index) => {
    Swal.fire({
      title: 'Cancelar turno',
      text: `Esta seguro que desa cancelar el turno?`,
      showCancelButton: true,
      confirmButtonText: 'Si, cancelar turno',
      cancelButtonText: 'No, volver atrás',
      confirmButtonColor: '#00a1a3',
      focusCancel: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        await cancelAppointment(id);

        Swal.fire({
          text: 'Su turno fue cancelado con éxito',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        });

        const newAppointments = [...appointments];
        newAppointments.splice(index, 1);
        setAppointments(newAppointments);
      }
    });
  };

  React.useEffect(() => {
    getMyAppointments();
  }, []);

  React.useEffect(() => {
    setAppointments(response || []);
  }, [response]);
  return (
    <>
      <Volver title={'Ir al Home'} />
      {loading && <Loader />}
      <Fade>
        <main className="min-h-[80vh] w-[91%] mx-auto  p-3 rounded md:w-[72%] lg:p-3 ">
          {appointments?.length > 0 &&
            !loading &&
            appointments.map((appointment, index) => (
              <article
                key={appointment.id}
                className="pt-5 bg-color-cards mb-10 lg:bg-color-cards-desk">
                <p className=" ml-[35px] text-lg underline font-medium mb-2 md:text-[20px] text-[#333333]">
                  Turno asignado
                </p>
                <div className="font-font-text">
                  <p className=" ml-[35px] text-sm font-medium mb-2 md:text-lg text-[#333333]">
                    <strong>Especialidad:</strong>{' '}
                    {appointment.medico.especialidad.nombre}
                  </p>
                  <p className="ml-[35px] text-sm font-medium mb-2 md:text-lg text-[#333333]">
                    <strong>Médico:</strong>{' '}
                    {appointment.medico.nombre}
                  </p>
                  <TurnoAsignado dateUTC={appointment.fecha_cita} />
                  <div className="flex justify-center md:justify-end mt-[35px] sm:mr-[35px] ">
                    <button
                      onClick={() =>
                        cancelTurno(appointment.id, index)
                      }
                      className={style.btnContinuar}>
                      Cancelar turno
                    </button>
                  </div>
                  <br />
                </div>
              </article>
            ))}
          {!loading && appointments.length < 1 && (
            <h2 className="font-bold text-xl">
              Aún no has agendado ninguna cita
            </h2>
          )}
        </main>
      </Fade>
    </>
  );
};

export default Misturnos;
