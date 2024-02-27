/* eslint-disable react/prop-types */
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import Menu from '../../Hamburguer/Menu';
const Layout = ({ children,isLoggedIn,setIsLoggedIn }) => {

  return (
    <>
      {isLoggedIn ? <Menu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />   :  <Header /> }
      {children}
      <Footer />
    </>
  );
};

export { Layout };
