import { NavLink } from 'react-router-dom';
import addresIcon from '../../assets/icons/address-icon.svg';
import docIcon from '../../assets/icons/doc-icon.svg';
import DoctorData from '../DoctorData/DoctorData';
import ButtonContinuar from '../shared/Buttons/ButtonContinuar/ButtonContinuar';

const DoctorCard = () => {
  return (
    <article className="w-[91%] bg-color-cards mx-auto p-3 rounded md:w-[72%] md:bg-color-cards-desk md:p-8">
      <section className="md:w-[55%]">
        <DoctorData/>
        <footer className="text-[#333333] hidden md:flex flex-col mt-5 font-font-text mb-8">
          <h3 className="text-lg mb-2 font-medium">Dirección</h3>
          <span className="mb-2 w-full h-[1px] bg-[#333333]"></span>
          <div className="flex items-center mb-3">
            <img alt="address icon" src={addresIcon} />
            <p className="ml-2">
              Av Próceres De la Independencia N° 1722, S.J.L. piso 3,
              Lima
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <img alt="doc icon" src={docIcon} />
              <p className="ml-2">Consulta oftalmológica</p>
            </div>
            <p className="mr-10">$60</p>
          </div>
        </footer>
        <footer className="mt-8 rounded-md flex justify-between items-center bg-white py-1 text-xs font-normal font-font-title">
          <a className="ml-[6px] underline">
            Próxima fecha disponible: 20/2
          </a>
          <button className="flex items-center">
            <p className="underline">Ver agenda</p>
            <img
              className="ml-2 mt-[2px] h-6 rotate-180"
              alt="arrow"
              src="./Back.svg"
            />
          </button>
        </footer>
      </section>
          <div className='flex justify-center mt-20 mb-2'>
            <NavLink to='/agenda'>
              <ButtonContinuar title='Continuar'/>
            </NavLink>
          </div>
      <aside></aside>
    </article>
  );
};

export { DoctorCard };
