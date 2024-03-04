/* eslint-disable react/prop-types */
import mobileLogo from '../../../assets/img/logo-header-mobile.svg';
import desktopLogo from '../../../assets/img/logo-header-desktop.svg';
import { NavLink } from 'react-router-dom';
import Menu from '../../Hamburguer/Menu';

const Header = ({ isLoggedIn }) => {
  return (
    <header className="w-full h-20 top-0 z-50 flex justify-between items-center font-font-main text-base mb-5 fixed">
      <div className="w-full h-20  bg-[#eeeeeef0] z-50 flex justify-between items-center font-font-main text-base fixed">
        <picture>
          <source media="(min-width:768px)" srcSet={desktopLogo} />
          <NavLink to="/">
            <img
              className="ml-4 w-24 md:w-36 md:ml-10"
              alt="logo"
              src={mobileLogo}
            />
          </NavLink>
        </picture>
        <nav className="hidden md:flex w-2/5 justify-self-center">
          <ul className="flex justify-evenly  w-full">
            <li>
              <NavLink to="/" className="hover:text-color-primary">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nosotros"
                className="hover:text-color-primary">
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-color-primary">
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-color-primary">
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
        {isLoggedIn ? (
          <section className="flex text-sm">
            <Menu />
          </section>
        ) : (
          <section className="flex text-sm">
            <NavLink to="/login">
              <button className="h-10 w-24 bg-color-primary  rounded flex items-center justify-center mr-4 md:mr-10 md:rounded-md md:h-7">
                Ingresar
              </button>
            </NavLink>
          </section>
        )}
      </div>
    </header>
  );
};

export { Header };
