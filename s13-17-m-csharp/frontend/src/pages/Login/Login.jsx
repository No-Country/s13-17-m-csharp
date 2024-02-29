import { NavLink } from 'react-router-dom';
import ButtonLogin from '../../components/shared/Buttons/ButtonIniciarSesion/ButtonLogin';
import ButtonRegister from '../../components/shared/Buttons/ButtonsRegistrarse/ButtonRegister';
import './login.css';

// eslint-disable-next-line react/prop-types
export default function Login({ isLoggedIn, setIsLoggedIn }) {

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
          <NavLink to="/">
            <ButtonLogin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </NavLink>
          <div className="ocultarbtn-iniciarsesion">
            <ButtonRegister />
          </div>
        </div>
      </div>
    </div>
  );
}
