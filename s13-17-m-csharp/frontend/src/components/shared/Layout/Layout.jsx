/* eslint-disable react/prop-types */
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Layout = ({ children,isLoggedIn,setIsLoggedIn }) => {

  return (
    <>
      {isLoggedIn ? <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />   :  <Header /> }
        {children}
      <Footer />
    </>
  );
};

export { Layout };
