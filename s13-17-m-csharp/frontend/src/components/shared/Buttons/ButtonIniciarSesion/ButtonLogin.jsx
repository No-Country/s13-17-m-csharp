/* eslint-disable react/prop-types */
import './buttonLogin.css';

export default function ButtonLogin({ onClick }) {
  return (
    <div>
      <button type="submit" onClick={onClick} className="btn-login">
        Iniciar sesión
      </button>
    </div>
  );
}
