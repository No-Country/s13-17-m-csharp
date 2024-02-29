/* eslint-disable react/prop-types */
import styles from '../Hamburguer/menu.module.css';
import { Turn as Hamburger } from 'hamburger-react';
import user from '../../assets/img/User.svg';
import { useState } from 'react';

import ContentHamburguer from '../shared/ContentHamburguer/ContentHamburguer';

const Menu = ({ isLoggedIn, setIsLoggedIn }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
        <div className="flex items-center gap-3 md:order-1 mr-[16px] md:mr-[40px]">
          <h4 className={`${styles.font} text-[#333333]`}>
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
            <img onClick={handleToggle} className={`${styles.imgUser}`} src={user} alt="" />
          </div>
        </div>

      {open ? (
        <>
          <ContentHamburguer
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        </>
      ) : null}
    </div>
  );
};

export default Menu;
