/* eslint-disable react/prop-types */
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import React from 'react';
import { AppContext } from '../../../context/AppContext';

const Layout = ({ children }) => {
  const {
    state: {
      user: { isAuth }
    }
  } = React.useContext(AppContext);
  return (
    <>
      {isAuth ? <Header isLoggedIn={isAuth} /> : <Header />}
      {children}
      <Footer />
    </>
  );
};

export { Layout };
