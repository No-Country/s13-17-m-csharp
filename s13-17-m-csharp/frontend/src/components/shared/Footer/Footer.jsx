import logo from '../../../assets/img/logo-footer.svg';
import fbIcon from '../../../assets/icons/facebook-icon.svg';
import insIcon from '../../../assets/icons/instagram-icon.svg';
import twiIcon from '../../../assets/icons/twitter-icon.svg';
import youIcon from '../../../assets/icons/youtube-icon.svg';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="mt-9 pt-4 pb-4 text-white font-font-text w-full bg-color-secondary flex flex-col  md:flex-row md:justify-evenly ">
      <section className=" mb-5 md:flex flex-col justify-between md:pt-24 md:pb-10">
        <div className="flex flex-col items-center md:items-start">
          <img
            className="w-40 mb-3"
            src={logo}
            alt="medicita footer logo"
          />
          <p className="mb-4">
            El mejor servicio de salud a su alcance.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="mb-3">Siguenos en nuestras redes:</p>
          <ul className="flex">
            <li className="mr-4 hover:scale-110 ease-in duration-100">
              <img src={fbIcon} alt="facebook icon" />
            </li>
            <li className="mr-4 hover:scale-110 ease-in duration-100">
              <img src={twiIcon} alt="twitter icon" />
            </li>
            <li className="mr-4 hover:scale-110 ease-in duration-100">
              <img src={insIcon} alt="instagram icon" />
            </li>
            <li className="mr-4 hover:scale-110 ease-in duration-100">
              <img src={youIcon} alt="youtube icon" />
            </li>
          </ul>
        </div>
      </section>

      <section className="flex justify-evenly md:w-1/2 md:justify-between md:pt-24 md:pb-24">
        <section>
          <h2 className="mb-2 text-xl font-bold md:mb-5">
            Especialidades
          </h2>
          <ul className="text-base text-color-text-footer">
            <li className="mb-1 md:mb-3 hover:text-white ease-in duration-100">Cardiología</li>
            <li className="mb-1 md:mb-3 hover:text-white ease-in duration-100">Dermatología</li>
            <li className="mb-1 md:mb-3 hover:text-white ease-in duration-100">Pediatría</li>
            <li className="mb-1 md:mb-3 hover:text-white ease-in duration-100">Traumatología</li>
            <li className="mb-1 md:mb-3 hover:text-white ease-in duration-100">Ortopedistas</li>
          </ul>
        </section>
        <section className="md:flex md:w-1/2 md:justify-between">
          <div>
            <Link to='/nosotros'>
              <h2 className="mb-2 text-xl font-bold md:mb-5">
                Nosotros
              </h2>
            </Link>
            <ul className="text-base text-color-text-footer mb-4">
              <li className="mb-1 md:mb-3 hover:text-white ease-in duration-100">Conócenos</li>
              <li className="mb-1 md:mb-3 hover:text-white ease-in duration-100">Servicios</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-bold md:mb-5">
              Política
            </h2>
            <ul className="text-base text-color-text-footer">
              <li className="mb-1 md:mb-3 hover:text-white ease-in duration-100">Términos</li>
              <li className="mb-1 md:mb-3 hover:text-white ease-in duration-100">Privacidad</li>
            </ul>
          </div>
        </section>
      </section>
    </footer>
  );
};

export { Footer };
