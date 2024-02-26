import { NavLink } from 'react-router-dom';
import ButtonContinuar from '../../components/shared/Buttons/ButtonContinuar/ButtonContinuar';
import './register1.css';

export default function Register1() {
  return (
    <div className="container-registermain1">
      <div className="container-register1">
        <h1 className="title-register1">Registro 1/2</h1>
        <form className="form-register1">
          <label htmlFor="fullname" className="label-registro1">
            Nombre completo:
          </label>
          <input
            type="text"
            className="input-register1"
            placeholder="Nombre completo"
            id="fullname"
          />
          <label htmlFor="mail" className="label-registro1">
            Email:
          </label>
          <input
            type="email"
            className="input-register1"
            placeholder="Mail"
            id="mail"
          />
          <label htmlFor="contraseña" className="label-registro1">
            Contraseña:
          </label>
          <input
            type="password"
            className="input-register1"
            placeholder="Contraseña"
            id="contraseña"
          />
          <label htmlFor="dni" className="label-registro1">
            DNI:
          </label>
          <input
            type="number"
            className="input-register1"
            placeholder="DNI"
            id="dni"
          />
          <label htmlFor="celular" className="label-registro1">
            Celular:
          </label>
          <input
            type="number"
            className="input-register1"
            placeholder="Celular"
            id="celular"
          />
          <label
            htmlFor="fechanacimiento"
            className="label-registro1">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            className="input-register1"
            placeholder="Fecha de nacimiento"
            id="fechanacimiento"
          />
          <div className="container-btncontinuar1">
            <ButtonContinuar />
          </div>
        </form>
      </div>
    </div>
  );
}
