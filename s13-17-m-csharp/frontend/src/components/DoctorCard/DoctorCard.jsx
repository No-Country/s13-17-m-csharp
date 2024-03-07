/* eslint-disable react/prop-types */
import addresIcon from '../../assets/icons/address-icon.svg';
import docIcon from '../../assets/icons/doc-icon.svg';
import DoctorData from '../DoctorData/DoctorData';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({
  children,
  viewAgenda,
  medico,
}) => {
  const { descripcion, especialidad, horario, nombre } = medico;

  const navigate = useNavigate();

  const handleAgendaClick = () => {
    navigate(`/agenda/${medico.id}`); // Navega a Agenda y pasa el estado
  };

  return (
    <article className="mb-5 w-[91%] bg-color-cards p-3 rounded md:w-[90%] md:max-w-[561px] md:bg-color-cards-desk md:p-5 md:rounded-xl md:m-5">
      <section>
        <DoctorData nombre={nombre} descripcion={descripcion} horario={horario} />

        <section className="text-[#333333] hidden md:flex flex-col mt-5 font-font-text mb-8 md:my-5">
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
              <p className="ml-2">Consulta {descripcion} </p>
            </div>
            <p className="mr-10">$60</p>
          </div>
        </section>
        <footer className="rounded-md flex flex-col justify-between items-center bg-white py-1 text-xs font-normal font-font-title">
          <section className="w-full flex justify-between items-center">
            <a className="ml-[6px] underline">
              {/* Próxima fecha disponible: 20/2 */}
            </a>
            <button
              onClick={handleAgendaClick}
              className="flex items-center">
              <p className="underline">Ver agenda</p>
              <img
                className={`${viewAgenda ? 'rotate-[-90deg]' : 'rotate-180'} ml-2 mt-[2px] h-6 `}
                alt="arrow"
                src="../Back.svg"
              />
            </button>
          </section>
          {children}
        </footer>
      </section>
    </article>
  );
};

export { DoctorCard };
