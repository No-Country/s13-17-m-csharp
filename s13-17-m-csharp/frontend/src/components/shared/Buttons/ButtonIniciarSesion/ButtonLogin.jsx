/* eslint-disable react/prop-types */
import './buttonLogin.css';

export default function ButtonLogin({
  onClick,
  isLoggedIn,
  setIsLoggedIn
}) {
  const handleLogin = () => {
    // Lógica para autenticar al usuario

    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button type="submit" onClick={onClick} className="btn-login">
        Iniciar sesión
      </button>
    </div>
  );
}
