import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const AuthRouteWrapper = ({ children }) => {
  const {
    state: {
      user: { isAuth }
    }
  } = React.useContext(AppContext);

  //Evita que usuarios no autenticados accesen a rutas que requieren credenciales.

  if (!isAuth) {
    return <Navigate to="/inicio" />;
  }
  return <>{children}</>;
};

export { AuthRouteWrapper };
