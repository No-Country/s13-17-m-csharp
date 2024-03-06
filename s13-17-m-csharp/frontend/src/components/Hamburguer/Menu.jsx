/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import styles from '../Hamburguer/menu.module.css';
import user from '../../assets/img/User.svg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContentHamburguer from '../shared/ContentHamburguer/ContentHamburguer';
import { profileData } from '../../api/services/profile.service';





const Menu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  console.log(profileData);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false); 
  }, [location]);



// Luego puedes llamar a la función profileData en tu código
const obtenerDatosPerfil = async () => {
  try {
      const datos = await profileData({ email: 'ejemplo@example.com', nombre: 'Nombre', apellido: 'Apellido', password: 'contraseña' });
      console.log(datos); // Hacer algo con los datos del perfil obtenidos
  } catch (error) {
      console.error('Error al obtener datos del perfil:', error);
  }
};

// Llama a la función obtenerDatosPerfil para iniciar el proceso de obtención de datos del perfil
obtenerDatosPerfil();




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
