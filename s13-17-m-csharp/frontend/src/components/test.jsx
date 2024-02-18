import { useEffect, useState } from 'react';
import {getProfile} from '../api/getProfile'
import './test.css';

const Test = () => {
  
  //---------- Para llamar al resultado de getProfile y usarlo en el estado effect----//
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
  //-----FIN de Para llamar al resultado de getProfile y usarlo en el estado effect----//
  
  return (
    <>
      <h1 className='font-bold underline'>hello world!</h1>
      <ul>
        {data && data.length > 0 &&
          data.map((dat, index) => (
            <li key={index}>
              <p>Nombre: {dat.name}</p>
              <p>Apellido: {dat.lastName}</p>
              <p>Especialidad: {dat.speciality}</p>
              <div>
                <img src={dat.img} alt="profile photo"/>
              </div>
            </li>
          ))
        }
      </ul>
      <div>
      </div>
    </>
  );
};

export default Test;
