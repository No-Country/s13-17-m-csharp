import Cookies from 'js-cookie';
import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { headersJson } from '../../api/headers';
import { login } from '../../api/services/user.service';
import ButtonLogin from '../../components/shared/Buttons/ButtonIniciarSesion/ButtonLogin';
import ButtonRegister from '../../components/shared/Buttons/ButtonsRegistrarse/ButtonRegister';
import { AppContext } from '../../context/AppContext';
import { useMakeRequest } from '../../hooks/useMakeRequest';
import { useValidateFields } from '../../hooks/useValidateFields';
import './login.css';
import Volver from '../../components/Volver/Volver';
// eslint-disable-next-line react/prop-types
export default function Login() {
  //context
  const { authUser } = useContext(AppContext);

  const navigate = useNavigate();
  const [validEmail, setValidEmail] = React.useState(true);
  const [validPas, setValidPass] = React.useState(true);
  const formRef = new React.useRef(null);

  //custom hooks
  const {
    state: { loading, response, error },
    sendRequest
  } = useMakeRequest();
  const { validateEmail, validatePass } = useValidateFields();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(formRef.current);
    const data = {
      email: form.get('email'),
      password: form.get('password')
    };

    if (data.email && data.password) {
      if (validEmail && validPas) {
        await sendRequest(data, login);
      }
    } else {
      if (!data.email) setValidEmail(false);

      if (!data.password) setValidPass(false);
    }
  };

  React.useEffect(() => {
    if (response?.token) {
      //Guarda el jwt en una cookie
      Cookies.set('token', response.token);
      //Modifica headersJson para que todas las peticiones incluyan el token
      headersJson.Authorization = `Bearer ${response.token}`;
      authUser(true);
      navigate('/');
    }
  }, [response]);

  return (
    <>
      <Volver title={'Volver'} />
      {loading && <h1>Cargando</h1>}
      {error && <h2>Alert de error</h2>}

      <div className="container-iniciarmain">
        <div className="container-iniciarsesion">
          <h1 className="title-iniciarsesion">Iniciar sesión</h1>
          <form ref={formRef} className="form-iniciarsesion">
            <label className="label-iniciarsesion" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Mail"
              className={`${!validEmail && 'focus:outline-red-700 '} input-iniciarsesion`}
              onChange={(e) => validateEmail(e, setValidEmail)}
            />
            {!validEmail && (
              <p className="mb-1 w-[328px] text-red-700">
                Introduce un correo válido
              </p>
            )}
            <label className="label-iniciarsesion" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              className={`${!validPas && 'focus:outline-red-700 '} input-iniciarsesion`}
              onChange={(e) => validatePass(e, setValidPass)}
            />
            {!validPas && (
              <p className="mb-1 w-[328px] text-red-700">
                La contraseña debe incluir letras, números y
                caracteres especiales
              </p>
            )}
            <a href="#" className="text-iniciarsesion">
              Olvide mi contraseña
            </a>
            <div className="btns-iniciarsesion">
              <ButtonLogin onClick={(e) => handleSubmit(e)} />

              <div className="ocultarbtn-iniciarsesion">
                <ButtonRegister />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
