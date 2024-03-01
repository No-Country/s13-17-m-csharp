import { NavLink } from 'react-router-dom';
import './buttonRegister.css';

export default function ButtonRegister() {
  return (
    <div className="btn-containerregister">
      <NavLink to="register/step1" className="btn-register">
        Registrarse
      </NavLink>
    </div>
  );
}
