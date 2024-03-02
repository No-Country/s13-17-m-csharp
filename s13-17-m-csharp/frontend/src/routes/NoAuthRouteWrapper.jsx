import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const NoAuthWrapper = ({ children }) => {
  const {
    state: {
      user: { isAuth }
    }
  } = React.useContext(AppContext);
  //Evita que un usuario autenticado entre a las páginas de login, registro o inicio
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export { NoAuthWrapper };
