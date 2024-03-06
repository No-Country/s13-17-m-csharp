import { useNavigate } from 'react-router-dom';

const Hour = ({ available, hour }) => {
  const navigate = useNavigate();

  return (
    <li className="w-full my-1 font-font-text text-sm">
      <button
        disabled={!available}
        onClick={() => navigate('/confirm')}
        className={`${available ? 'bg-color-cards text-color-primary' : 'bg-color-cards-light'}  w-full h-[40px] md:h-[30px] flex items-center justify-center rounded`}>
        {hour}
      </button>
    </li>
  );
};

export { Hour };
