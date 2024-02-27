import './buttonLogin.css';

export default function ButtonLogin({isLoggedIn,setIsLoggedIn}) {
  console.log(setIsLoggedIn)

  
  const changeMenu=()=>{

    // cambiar menu
    setIsLoggedIn(!isLoggedIn)
  }


  return (
    <div className="btn-logincontainer">
      <button onClick={changeMenu} className="btn-login">Iniciar sesión</button>
    </div>
  );
}
