/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import styles from '../Hamburguer/menu.module.css';
import user from '../../assets/img/User.svg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContentHamburguer from '../shared/ContentHamburguer/ContentHamburguer';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false); 
  }, [location]);

  return (
    <div>

      <div className="flex items-center gap-3 md:order-1 mr-[16px] md:mr-[40px]">
        <h4 className={`${styles.flip} text-[#333333]`}>
          ¡Hola Julia!{' '}
        </h4>
        <div className="md:hidden">
          <Hamburger
            onToggle={handleToggle}
            size={30}
            color="#097DCA"
          />
        </div>
        <div className="hidden md:block cursor-pointer ">
          <img
            onClick={handleToggle}
            className={`${styles.imgUser}`}
            src={user}
            alt=""
          />
        </div>
      </div>

      {open ? (
        <>
          <ContentHamburguer handleToggle={handleToggle} />
        </>
      ) : null}
    </div>
  );
};

export default Menu;
