import { NavLink } from 'react-router-dom';
import ButtonLogin from '../../components/shared/Buttons/ButtonIniciarSesion/ButtonLogin';
import ButtonRegisterFill from '../../components/shared/Buttons/ButtonsRegistrarse/ButtonRegisterFill';
import './inicio.css';
import Volver from '../../components/Volver/Volver';

// eslint-disable-next-line react/prop-types
export default function Inicio() {
  return (
    <>
      <Volver title={'Volver'} />
      <div>
        <div className="img-containerinicio">
          <img
            src="Onlinecalendar-pana1.svg"
            alt="MediCita"
            className="img-inicio"
          />
        </div>
        <p className="text-inicio">
          Registrate en MediCita y agendá tu próximo turno médico
          desde la comodidad de tu casa{' '}
        </p>
        <div className="btns-logreg">
          <NavLink to="/login">
            <ButtonLogin />
          </NavLink>
          <NavLink to="/register/step1">
            <ButtonRegisterFill />
          </NavLink>
        </div>
      </div>
    </>
  );
}
