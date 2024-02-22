import ButtonLogin from '../../components/shared/Buttons/ButtonIniciarSesion/ButtonLogin';
import ButtonRegisterFill from '../../components/shared/Buttons/ButtonsRegistrarse/ButtonRegisterFill';
import './inicio.css';

export default function Inicio() {
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
        <ButtonLogin />
        <ButtonRegisterFill />
      </div>
    </div>
  );
}
