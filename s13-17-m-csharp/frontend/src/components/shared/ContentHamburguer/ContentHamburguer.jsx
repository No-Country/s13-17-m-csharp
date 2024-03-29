/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import calendar from '../../../assets/img/Calendar.svg';
import capsule from '../../../assets/img/Capsule.svg';
import time from '../../../assets/img/Time.svg';
import customer from '../../../assets/img/Customer.svg';
import support from '../../../assets/img/Support.svg';
import info from '../../../assets/img/Info.svg';
import styles from '../ContentHamburguer/ContentHamburguer.module.css';
import React from 'react';
import { AppContext } from '../../../context/AppContext';
import Cookies from 'js-cookie';

const ContentHamburguer = ({ handleToggle }) => {
  const navigate = useNavigate();
  const { authUser } = React.useContext(AppContext);

  const closeSession = () => {
    Cookies.remove('token');
    authUser(false);
    navigate('/inicio');
  };

  return (
    <div className={`${styles.bgContenedor}`}>
      <div className={`${styles.bgWhite}`}>
        <div className="flex  items-center gap-2 mb-6 hover:scale-105 ease-in duration-100">
          <img width={30} src={customer} alt="" />
          <li className={styles.li}>Información de contacto</li>
        </div>
        <div className="flex items-center gap-2 mb-6 hover:scale-105 ease-in duration-100">
          <img width={30} src={capsule} alt="" />
          <li className={styles.li}>Información médica</li>
        </div>

        <div className="flex items-center mb-6 gap-2 hover:scale-105 ease-in duration-100">
          <img width={30} src={time} alt="" />
          <li className={styles.li}>Historial médico</li>
        </div>

        <div className="flex items-center gap-2 mb-6 hover:scale-105 ease-in duration-100">
          <img width={30} src={calendar} alt="" />
          <Link to="/misturnos">
            <li className={styles.li} onClick={handleToggle}>
              Turnos
            </li>
          </Link>
        </div>

        <div className="flex items-center gap-2 mb-6 mt-32 hover:scale-105 ease-in duration-100">
          <img width={30} src={support} alt="" />
          <li className={`${styles.li}`}>Contacto</li>
        </div>

        <div className="flex items-center gap-2 mb-6 hover:scale-105 ease-in duration-100">
          <img width={30} src={info} alt="" />
          <li className={styles.li}>Términos y condiciones</li>
        </div>

        <li
          onClick={closeSession}
          className={`${styles.li} mt-5 pl-11 md:pl-0 md:text-center md:mt-6 cursor-pointer text-[#097DCA]  hover:scale-105 ease-in duration-100`}
          href="">
          Cerrar sesión
        </li>
      </div>
    </div>
  );
};

export default ContentHamburguer;
