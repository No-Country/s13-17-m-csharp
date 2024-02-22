import { NavLink } from 'react-router-dom';
import ButtonLogin from '../../components/shared/Buttons/ButtonIniciarSesion/ButtonLogin';
import ButtonRegister from '../../components/shared/Buttons/ButtonsRegistrarse/ButtonRegister';
import './login.css';

export default function Login() {
  return (
    <div>
      <h1 className="title-iniciarsesion">Iniciar sesión</h1>
      <form className="form-iniciarsesion">
        <input
          type="email"
          name="email"
          placeholder="Mail"
          className="input-iniciarsesion"
        />
        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          className="input-iniciarsesion"
        />
      </form>
      <a href="#" className="text-iniciarsesion">
        Olvide mi contraseña
      </a>
      <div className="btns-iniciarsesion">
        <NavLink to='/'>
          <ButtonLogin />
        </NavLink>
        <NavLink to='register/step1'>
          <ButtonRegister />
        </NavLink>
      </div>
    </div>
  );
}
