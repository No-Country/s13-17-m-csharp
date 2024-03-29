import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import DoctorData from '../../components/DoctorData/DoctorData';
import ButtonContinuar from '../../components/shared/Buttons/ButtonContinuar/ButtonContinuar';
import style from './Turno.module.css';
import TurnoAsignado from '../../components/TurnoAsignado/TurnoAsignado';
import Volver from '../../components/Volver/Volver';

import { Fade } from 'react-awesome-reveal';
import { useLocation } from 'react-router-dom';
import { formatDate } from '../../utils/schedule';
import { makeAppointment } from '../../api/services/user.service';
import { useMakeRequest } from '../../hooks/useMakeRequest';
import Loader from '../../components/shared/Loader/Loader';

const Turno = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const medico = location.state?.medico;
  const hour = location.state?.hour;
  const date = location.state?.date;

  const appointmentDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    parseInt(hour.slice(0, 2)),
    parseInt(hour.slice(3))
  );

  const {
    state: { loading, response },
    sendRequest
  } = useMakeRequest();

  const confirmAppointment = async () => {
    await sendRequest(
      { date: appointmentDate.toISOString(), doctorId: medico.id },
      makeAppointment
    );
  };

  React.useEffect(() => {
    if (response) {
      navigate('/confirmacion');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);
  return (
    <>
      <Volver title={'Modificar fecha'} />
      {loading && <Loader />}
      <Fade>
        <article className="w-[91%] bg-color-cards mx-auto p-3 rounded md:w-[72%] lg:bg-color-cards-desk lg:p-3 ">
          <section className="s:w-[55%] md:w-[100%]">
            <DoctorData medico={medico} />
            <footer className="md:hidden md:mt-0 mt-4 rounded-md flex-column justify-between items-center bg-white py-1 text-xs font-normal font-font-title">
              <TurnoAsignado localDate={appointmentDate} />
              <div className="md:hidden flex justify-center mt-20 mb-2">
                <NavLink to="/confirmacion">
                  <ButtonContinuar onClick={confirmAppointment} title="Confirmar el turno" />
                </NavLink>
              </div>
            </footer>
          </section>
        </article>
      </Fade>
      <Fade>
        <article className="w-[91%] mx-auto md:p-0 p-3 rounded md:w-[72%] ">
          <section className="s:w-[55%] md:w-[100%]">
            <footer className="hidden md:flex md:flex-col rounded-md flex-column justify-between bg-white py-1 text-xs font-normal font-font-title">
              <div className="space-y-3 space-x-[6px] intems-left font-font-text">
                <br />
                <div className={style.parent}>
                  <div className={style.div1}>
                    <div>
                      <img
                        className="w-[16px] h-[16px]"
                        src="./Vector.svg"
                        alt="calendar.svg"
                      />
                      <p className="ml-[7px] text-[16px] font-[600] mb-2 md:text-base text-[#333333]">
                        Fecha:
                      </p>
                    </div>
                  </div>
                  <div className={style.div2}>
                    <p className="ml-[7px] text-[16px] font-[600] mb-2 md:text-base text-[#333333]">
                      {`${formatDate(date)} ${date.getFullYear()} a las ${hour}hrs.`}
                    </p>
                    <NavLink
                      to={`/agenda/${medico.id}`}
                      className="ml-[7px] text-[16px] font-[600] mb-2 md:text-base text-[#1662C6]">
                      Cambiar la fecha
                    </NavLink>
                  </div>
                  <div className={style.div3}>
                    <div>
                      <img
                        className="w-[16px] h-[16px] div3"
                        src="./location.svg"
                        alt="location.svg"
                      />
                      <p className="ml-[7px] text-[16px] font-[600] mb-2 md:text-base text-[#333333]">
                        Dirección:
                      </p>
                    </div>
                  </div>
                  <div className={style.div4}>
                    <p className="ml-[7px] text-sm font-[600] mb-2 md:text-base text-[#333333] div4">
                      Av. Próceres De La Independencia N°1722, S.J.L.
                      piso 3, Lima
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-20 mb-2">
                <ButtonContinuar
                  onClick={confirmAppointment}
                  title="Confirmar el turno"
                />
              </div>
            </footer>
          </section>
        </article>
      </Fade>
    </>
  );
};

export default Turno;
