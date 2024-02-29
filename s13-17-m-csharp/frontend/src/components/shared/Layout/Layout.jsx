/* eslint-disable react/prop-types */
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
const Layout = ({ children,isLoggedIn,setIsLoggedIn }) => {
  console.log(isLoggedIn);

  return (
    <>
      {isLoggedIn ? <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />   :  <Header /> }
      {/* <Header  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
        {children}
      <Footer />
    </>
  );
};

export { Layout };
