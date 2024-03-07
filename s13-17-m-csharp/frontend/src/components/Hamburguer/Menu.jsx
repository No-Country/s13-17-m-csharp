/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import styles from '../Hamburguer/menu.module.css';
import user from '../../assets/img/User.svg';
import { useLocation } from 'react-router-dom';
import ContentHamburguer from '../shared/ContentHamburguer/ContentHamburguer';
import { profileData } from '../../api/services/profile.service';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [profileName, setProfileName] = useState('');
  const location = useLocation();

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const datos = await profileData();
        setProfileName(datos.nombre);
      } catch (error) {
        console.error('Error al obtener datos del perfil:', error);
      }
    };
    getProfileData();
  }, []);

  return (
    <div>
      <div className="flex items-center gap-3 md:order-1 mr-[16px] md:mr-[40px] hover:scale-110 ease-in duration-100">
        <h4 className={`${styles.flip} text-[#333333]`}>
          ¡Hola {profileName}!
        </h4>
        <div className="md:hidden ">
          <Hamburger onToggle={handleToggle} size={30} color="#097DCA" />
        </div>
        <div className="hidden md:block cursor-pointer hover:scale-110 ease-in duration-100">
          <img onClick={handleToggle} className={`${styles.imgUser}`} src={user} alt="" />
        </div>
      </div>

      {open && <ContentHamburguer handleToggle={handleToggle} />}
    </div>
  );
};

export default Menu;
