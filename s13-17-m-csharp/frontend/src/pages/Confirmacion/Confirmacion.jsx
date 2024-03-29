import React, { useState, useEffect } from 'react';
import style from './Confirmacion.module.css';
import Loader from '../../components/shared/Loader/Loader';
import { Fade } from 'react-awesome-reveal';
import { NavLink } from 'react-router-dom';

const Confirmacion = () => {
  return (
    <div>
      <Fade
        className="w-full flex justify-center"
        cascade
        triggerOnce="true">
        <main className="flex justify-center content-center mt-[120px] text-center">
          <div className={style.container}>
            <section>
              <h2>¡Tu turno ha sido confirmado!</h2>
            </section>
            <section className="flex justify-center">
              <img src="Confirmed2.svg" alt="" />
            </section>
            <section>
              <p>
                No olvides cancelar tu turno en caso de no poder
                asistir.
              </p>
              <p>
                <NavLink to="/misturnos">Cancelar turno.</NavLink>
              </p>
            </section>
          </div>
        </main>
      </Fade>
    </div>
  );
};

export default Confirmacion;
