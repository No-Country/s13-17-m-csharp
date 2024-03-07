import { formatDate, formatTime } from '../../utils/schedule';

const TurnoAsignado = ({ dateUTC, localDate }) => {
  const date = new Date(localDate || dateUTC + 'Z');

  return (
    <div className="font-font-text">
      <p className="ml-[35px] text-sm font-medium mb-2 md:text-lg text-[#333333]">
        <strong>Fecha:</strong> {formatDate(date)}
      </p>
      <p className="ml-[35px] text-sm font-medium mb-2 md:text-lg text-[#333333]">
        <strong>Hora:</strong>{' '}
        {`${formatTime(date.getHours())}:${formatTime(date.getMinutes())} hrs.`}
      </p>
      <p className="ml-[35px] text-sm font-medium mb-2 md:text-lg text-[#333333]">
        <strong>Dirección:</strong> Av. Independencia 265
      </p>
    </div>
  );
};


export default TurnoAsignado;

