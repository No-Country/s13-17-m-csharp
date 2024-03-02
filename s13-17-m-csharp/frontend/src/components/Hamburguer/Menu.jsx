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
          <img
            onClick={handleToggle}
            className={`${styles.imgUser}`}
            src={user}
            alt=""
          />

       {/* <div className="flex items-center gap-3 md:order-1 mr-[16px] md:mr-[40px]">
          <h4 className={`${styles.font} text-[#333333]`}>
            ¡Hola Julia!{' '}
          </h4>
          <div className="md:hidden">
            <Hamburger
              toggled={open} 
              toggle={setOpen} 
              size={30}
              color="#097DCA"
            />
          </div>
          <div className="hidden md:block cursor-pointer ">
            <img onClick={handleToggle} className={`${styles.imgUser}`} src={user} alt="" />
          </div>*/}

        </div>
      </div>


      {open ? (
        <>
          <ContentHamburguer handleToggle={handleToggle} />
        </>
      ) : null}

      {/*{open && (
        <ContentHamburguer
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          handleToggle={handleToggle}
        />
      )}*/}

    </div>
  );
};

export default Menu;

// /* eslint-disable react/prop-types */
// import styles from '../Hamburguer/menu.module.css';
// import { Turn as Hamburger } from 'hamburger-react';
// import user from '../../assets/img/User.svg';
// import { useState } from 'react';
// import mobileLogo from '../../assets/img/mobileLogo.svg'

// import ContentHamburguer from '../shared/ContentHamburguer/ContentHamburguer';

// const Menu = ({ isLoggedIn, setIsLoggedIn }) => {
//   const [open, setOpen] = useState(false);

//   const handleToggle = () => {
//     setOpen(!open);
//   };

//   return (
//     <div>
//       <header className={`${styles.header} w-full  h-14 flex  justify-between items-center font-font-main text-base pt-5 mb-5`} >
//         {/*  <source media="(min-width:768px)" srcSet={desktopLogo} />*/}

//         <div>
//           <img
//             className="ml-4 w-28 md:w-36 md:ml-10"
//             alt="logo"
//             src={mobileLogo}
//           />
//         </div>

//         <div className="flex items-center gap-3 md:order-1 ">

//           <h4 className={`${styles.font} text-[#333333]`}>
//             ¡Hola Julia!{' '}
//           </h4>
//           <div className="md:hidden">
//             <Hamburger
//               onToggle={handleToggle}
//               size={30}
//               color="#097DCA"
//             />
//           </div>
//           <div className="hidden md:block cursor-pointer ">
//             <img onClick={handleToggle} className={`${styles.imgUser}`} src={user} alt="" />
//           </div>
//         </div>

//       {open ? (
//         <>
//           <ContentHamburguer
//             isLoggedIn={isLoggedIn}
//             setIsLoggedIn={setIsLoggedIn}
//           />
//         </>
//       ) : null}
//     </header>
//     </div>
//   );
// };

// export default Menu;
