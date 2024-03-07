import { useEffect, useState } from 'react';


import styles from '../Staff/staff.module.css';

const Staff = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://www.medicita.somee.com/api/Medico/Busqueda?regXPagina=10&paginaActual=2');
          const jsonData = await response.json();
          setData(jsonData);
          
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);

    const imagenes = [
      '/img/medicos/medico8.png',
      '/img/medicos/medico2.png',
      '/img/medicos/medico5.png',
      '/img/medicos/medico4.png',
      '/img/medicos/medico3.png',
      '/img/medicos/medico6.png',
      '/img/medicos/medico10.png',
      '/img/medicos/medico7.png',
      '/img/medicos/medico1.png',
      '/img/medicos/medico13.png',
    ];


    return (
        <div className={styles.contenedorStaff}>
            <div className="p-4">
                <h2 className={styles.titulo}>Staff médico</h2>
            </div>

            <div className={"overflow-x-scroll flex flex-col flex-wrap " + styles.areaStaff}>
                {data && data.medicos && data.medicos.length > 0 && data.medicos.map((dato, index) => (
                    <div key={index} className={styles.cardMedico}>
                        <div className={styles.contenedorFotoMedico} >
                        {imagenes.map((imagen, indexI) => (
                            (index === indexI) && (
                              <img key={indexI} className={styles.fotoMedico} src={imagen} alt="foto-medico1"/>
                            )                          
                          ))}
                        </div>
                        <h6 className={styles.nombreMedico}>{dato.nombre}</h6>
                        <p className={styles.especialidadMedico}>{dato.descripcion}</p>
                    </div>
                  
                ))
                }
              
            </div>
        </div>
        
    )
  }
  
  export default Staff;