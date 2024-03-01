import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const NoAuthWrapper = () => {
  const {
    state: {
      user: { isAuth }
    }
  } = React.useContext(AppContext);
  //Evita que un usuario autenticado entre a las páginas de login y registro
  if (isAuth) {
    return <Navigate to="/" />;
  }
};

export { NoAuthWrapper };
