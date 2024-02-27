import { NavLink } from 'react-router-dom';
import ButtonContinuar from '../../components/shared/Buttons/ButtonContinuar/ButtonContinuar';
import './register2.css';

export default function Register2() {
  return (
    <div className="container-registermain2">
      <div className="container-register2">
        <h1 className="title-register2">Registro 2/2</h1>
        <form className="form-register2">
          <label className="label-register2">
            ¿Sufre algún tipo de alergia? De ser positivo indique cuál{' '}
            <input
              type="text"
              className="input-register2"
              placeholder="Su respuesta"
            />
          </label>
          <label className="label-register2">
            ¿Sufre de alguna enfermedad? De ser positivo indique cuál{' '}
            <input
              type="text"
              className="input-register2"
              placeholder="Su respuesta"
            />
          </label>
          <fieldset>
            <legend className="title-opcionessexo">
              Indique su sexo
            </legend>
            <div className="container-opcionessexo">
              <input type="radio" id="masculino" name="genero" />
              <label
                className="label-opcionessexo"
                htmlFor="masculino">
                <div className="circle"></div>
                Masculino
              </label>
              <input type="radio" id="femenino" name="genero" />
              <label
                className="label-opcionessexo"
                htmlFor="femenino">
                <div className="circle"></div>
                Femenino
              </label>
              <input type="radio" id="nodecirlo" name="genero" />
              <label
                className="label-opcionessexo"
                htmlFor="nodecirlo">
                <div className="circle"></div>
                Prefiero no decirlo
              </label>
            </div>
          </fieldset>
          <div className="container-btncontinuar2">
            <NavLink to='/'>
              <ButtonContinuar />
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
