import React from 'react'

import calendar from '../../../assets/img/Calendar.svg';
import capsule from '../../../assets/img/Capsule.svg';
import time from '../../../assets/img/Time.svg';
import customer from '../../../assets/img/Customer.svg';
import support from '../../../assets/img/Support.svg';
import info from '../../../assets/img/Info.svg';
import styles from '../ContentHamburguer/ContentHamburguer.module.css'
import { NavLink } from 'react-router-dom';



const ContentHamburguer = ({isLoggedIn,setIsLoggedIn}) => {

    const closeSession=()=>{
      console.log(isLoggedIn);
        setIsLoggedIn(!isLoggedIn)
    }


  return (
    <div className={`${styles.bgContenedor}`}>
      <div className={`${styles.bgWhite}`}>
        <div className="flex  items-center gap-2 mb-6">
            <img width={30} src={customer} alt="" />
            <li className={styles.li}>Información de contacto</li>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <img width={30} src={capsule} alt="" />
          <li className={styles.li} >Información médica</li>
        </div>

        <div className="flex items-center mb-6 gap-2">
          <img width={30} src={time} alt="" />
          <li className={styles.li} >Historial médico</li>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <img width={30} src={calendar} alt="" />
          <NavLink to='/misturnos'>
            <li className={styles.li} >Turnos</li>
          </NavLink>
        </div>

        <div className="flex items-center gap-2 mb-6 mt-32">
        <img width={30} src={support} alt="" />
        <li className={`${styles.li}`}>Contacto</li>
        </div>

        <div className='flex items-center gap-2 mb-6'>
          <img width={30} src={info} alt="" />
        <li className={styles.li}>Términos y condiciones</li>
        </div>
        <NavLink to='/'>
          <li onClick={closeSession}  className={`${styles.li} mt-5 pl-11 md:pl-0 md:text-center md:mt-6 cursor-pointer text-[#097DCA] `}  href="">Cerrar sesión</li>
        </NavLink>
      </div>
    </div>
  )
}

export default ContentHamburguer
