// import style from './TurnoAsignado.module.css'
import { useLocation } from 'react-router-dom';
import { formatDate } from '../../utils/schedule';


const TurnoAsignado = () => {
    const location = useLocation();
    const hour = location.state?.hour;
    const date = location.state?.date;



    return (
        <div className='font-font-text'>
            <p className="ml-[35px] text-sm font-medium mb-2 md:text-lg text-[#333333]"><strong>Fecha:</strong> {formatDate(date)}</p>
            <p className="ml-[35px] text-sm font-medium mb-2 md:text-lg text-[#333333]"><strong>Hora:</strong> {hour}</p>
            <p className="ml-[35px] text-sm font-medium mb-2 md:text-lg text-[#333333]"><strong>Dirección:</strong> Av. Independencia 265</p>
        </div>
    )
}

export default TurnoAsignado