import React from 'react';
import { useLocation } from 'react-router-dom';
import { getDoctorInfo } from '../../api/services/doctor.service';
import { Fade } from 'react-awesome-reveal';
import { Calendar } from '../../components/Calendar/Calendar';
import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
import Volver from '../../components/Volver/Volver';
import { useMakeRequest } from '../../hooks/useMakeRequest';
import Loader from '../../components/shared/Loader/Loader';

const Agenda = () => {
  const location = useLocation();

  const {
    state: { loading, error, response: doctor },
    sendRequest
  } = useMakeRequest();

  const getDoctor = async () => {
    const doctorId = location.pathname.slice(8);
    await sendRequest(doctorId, getDoctorInfo);
  };

  React.useEffect(() => {
    getDoctor();
  }, []);
  console.log(doctor);
  return (
    <>
      <Volver title={'Ver otros médicos'} />

      <main className="min-h-[80vh] w-full flex justify-center items-center">
        {loading && (
          <div className="h-[1000px]">
            <Loader />
          </div>
        )}
        {doctor && (
          <Fade
            className="w-full flex justify-center"
            cascade
            triggerOnce="true">
            <DoctorCard
              key={doctor.id}
              medico={doctor}
              viewAgenda={true}>
              <Calendar
                doctor={doctor}
                appointments={doctor.appointments}
              />
            </DoctorCard>
          </Fade>
        )}
        {error && (
          <h2 className="font-bold text-xl text-center">
            El médico que tratas de buscar no existe o no está
            disponible.
          </h2>
        )}
      </main>
    </>
  );
};

export { Agenda };
