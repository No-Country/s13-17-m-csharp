import { NavLink } from 'react-router-dom';
import ButtonLogin from '../../components/shared/Buttons/ButtonIniciarSesion/ButtonLogin';
import ButtonRegister from '../../components/shared/Buttons/ButtonsRegistrarse/ButtonRegister';
import './login.css';

export default function Login() {
  return (
    <div className="container-iniciarmain">
      <div className="container-iniciarsesion">
        <h1 className="title-iniciarsesion">Iniciar sesión</h1>
        <form className="form-iniciarsesion">
          <label className="label-iniciarsesion" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Mail"
            className="input-iniciarsesion"
          />
          <label className="label-iniciarsesion" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            name="contraseña"
            id="password"
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
          <div className="ocultarbtn-iniciarsesion">
            <ButtonRegister />
          </div>
        </div>
      </div>
    </div>
  );
}
