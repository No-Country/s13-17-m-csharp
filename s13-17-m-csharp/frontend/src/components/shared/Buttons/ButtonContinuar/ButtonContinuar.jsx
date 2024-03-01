/* eslint-disable react/prop-types */
import './buttonContinuar.css';

export default function ButtonContinuar({ title }) {
  const handleLogin = () => {
    // Lógica para autenticar al usuario
    //setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={() => handleLogin()} className="btn-continuar">
        {title}
      </button>
    </div>
  );
}
