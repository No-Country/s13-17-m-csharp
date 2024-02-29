import { NavLink } from 'react-router-dom';
import ButtonLogin from '../../components/shared/Buttons/ButtonIniciarSesion/ButtonLogin';
import ButtonRegisterFill from '../../components/shared/Buttons/ButtonsRegistrarse/ButtonRegisterFill';
import './inicio.css';

// eslint-disable-next-line react/prop-types
export default function Inicio({isLoggedIn,setIsLoggedIn}) {
  return (
    <div>
      <div className="img-containerinicio">
        <img
          src="Onlinecalendar-pana1.svg"
          alt="MediCita"
          className="img-inicio"
        />
      </div>
      <p className="text-inicio">
        Registrate en MediCita y agendá tu próximo turno médico desde
        la comodidad de tu casa{' '}
      </p>
      <div className="btns-logreg">
        <NavLink to='/login'>
          <ButtonLogin  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </NavLink>
        <NavLink to='/register/step1'>
          <ButtonRegisterFill   isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </NavLink>
      </div>
    </div>
  );
}
