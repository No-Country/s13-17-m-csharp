/* eslint-disable react/prop-types */
import './buttonLogin.css';

export default function ButtonLogin({isLoggedIn,setIsLoggedIn}) {
  console.log(setIsLoggedIn)

  const handleLogin = () => {
    // Lógica para autenticar al usuario
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="btn-logincontainer">
      <button onClick={()=>handleLogin()} className="btn-login">Iniciar sesión</button>
    </div>
  );
}
