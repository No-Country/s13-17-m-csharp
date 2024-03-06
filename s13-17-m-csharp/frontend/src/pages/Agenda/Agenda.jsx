import React from 'react';
import { useLocation } from 'react-router-dom';
import { getDoctorInfo } from '../../api/services/doctor.service';
import { Calendar } from '../../components/Calendar/Calendar';
import { DoctorCard } from '../../components/DoctorCard/DoctorCard';
import Volver from '../../components/Volver/Volver';
const Agenda = () => {
  const location = useLocation();

  const getDoctor = async () => {
    const doctorId = location.pathname.slice(8);
    const data = await getDoctorInfo(doctorId);
    console.log(data);
  };

  React.useEffect(() => {
    getDoctor();
  }, []);

  return (
    <>
      <Volver title={'Ver otros médicos'} />
      <main className="w-full flex justify-center">
        <DoctorCard viewAgenda={true}>
          <Calendar />
        </DoctorCard>
      </main>
    </>
  );
};

export { Agenda };
