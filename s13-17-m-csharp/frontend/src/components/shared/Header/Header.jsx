import logo from '../../../assets/mediCita-icon.svg';
const Header = () => {
  return (
    <header className="w-full h-14 flex justify-evenly items-center font-font-main text-base pt-5">
      <img className="w-28 md:w-40" alt="logo" src={logo} />
      <nav className="hidden md:flex w-2/5">
        <ul className="flex justify-evenly  w-full">
          <li>
            <a className="text-color-primary" href="/home">
              Home
            </a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
      <section className="flex text-sm">
        <button className="h-9 w-28 bg-color-secondary text-white rounded-md flex items-center justify-center mr-4">
          Ingresar
        </button>
        <button className="h-9 w-28 bg-color-secondary text-white rounded-md flex items-center justify-center">
          Registrarse
        </button>
      </section>
    </header>
  );
};

export { Header };
