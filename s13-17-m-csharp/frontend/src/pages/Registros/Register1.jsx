import ButtonContinuar from '../../components/shared/Buttons/ButtonContinuar/ButtonContinuar';
import './register1.css';

export default function Register1() {
  return (
    <div className="container-register1">
      <h1 className="title-register1">Registro 1/2</h1>
      <form className="form-register1">
        <input
          type="text"
          className="input-register1"
          placeholder="Nombre completo"
        />
        <input
          type="email"
          className="input-register1"
          placeholder="Mail"
        />
        <input
          type="password"
          className="input-register1"
          placeholder="Contraseña"
        />
        <input
          type="number"
          className="input-register1"
          placeholder="DNI"
        />
        <input
          type="number"
          className="input-register1"
          placeholder="Celular"
        />
        <label>
          Fecha de nacimiento
          <input
            type="date"
            className="input-register1"
            placeholder="Fecha de nacimiento"
          />
        </label>
        <div className="container-btncontinuar1">
          <ButtonContinuar />
        </div>
      </form>
    </div>
  );
}
