import { useNavigate } from 'react-router-dom';

const Hour = ({ available, date, hour, medico }) => {
  const navigate = useNavigate();

  const handleHourClick = () => {
    navigate('/confirm', { state: { medico, date, hour } });
  };

  return (
    <li className="w-full my-1 font-font-text text-sm">
      <button
        disabled={!available}
        onClick={() => handleHourClick()}
        className={`${available ? 'bg-color-cards text-color-primary' : 'bg-color-cards-light'}  w-full h-[40px] md:h-[30px] flex items-center justify-center rounded`}>
        {hour}
      </button>
    </li>
  );
};

export { Hour };
