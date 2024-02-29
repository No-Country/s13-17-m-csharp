/* eslint-disable react/prop-types */
import './buttonRegisterFill.css';

export default function ButtonRegisterFill({isLoggedIn,setIsLoggedIn}) {

  const handleLogin = () => {
    // Lógica para autenticar al usuario
    setIsLoggedIn(!isLoggedIn);
  };
  
  return (
    <div>
      <button onClick={()=>handleLogin()} className="btn-registerfill">Registrarse</button>
    </div>
  );
}
