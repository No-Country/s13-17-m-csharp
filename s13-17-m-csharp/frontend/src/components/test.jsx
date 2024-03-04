import { useEffect, useState } from 'react';
import {getProfile} from '../api/getProfile'
import {getUser} from '../api/getUser'
import './test.css';

const Test = () => {
  
  //---------- Para llamar a la api en el estado effect----//
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {

    // LLAMAR A PROFILE
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();

    // LLAMAR A USER
    const fetchUser = async ()=>{
      try {
        const user = await getUser();
        setUser(user); 
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();

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
      <ul>
        {user && user.length > 0 &&
          user.map((us, index) => (
            <li key={index}>
              <p>Nombre: {us.fullName}</p>
              <p>Telefono: {us.phone}</p>
              <p>Alergias?: {us.allergy}</p>
              <p>Fecha de Nacimiento: {us.birdDate}</p>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default Test;
