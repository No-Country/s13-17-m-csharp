import { useEffect, useState } from 'react';
import {getProfile} from '../../api/getProfile';

import styles from '../Staff/staff.module.css';
const Staff = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getProfile();
          setData(data);
          
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);

    return (
        <div className={styles.contenedorStaff}>
            <div className="p-4">
                <h2 className={styles.titulo}>Staff médico</h2>
            </div>

            <div className={"overflow-x-scroll flex flex-col flex-wrap " + styles.areaStaff}>
                {data && data.length > 0 && data.map((dato, index) => (
                    <div key={index} className={styles.cardMedico}>
                        <div className={styles.contenedorFotoMedico} >
                            <img className={styles.fotoMedico} src={dato.img} alt="foto-medico1"/>
                        </div>
                        <h6 className={styles.nombreMedico}>{dato.name} {dato.lastName}</h6>
                        <p className={styles.especialidadMedico}>{dato.speciality}</p>
                    </div>
                  
                ))
                }
              
            </div>
        </div>
        
    )
  }
  
  export default Staff;