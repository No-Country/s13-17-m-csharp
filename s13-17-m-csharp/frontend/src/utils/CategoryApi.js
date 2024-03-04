import axios from 'axios';

const url = 'https://www.medicita.somee.com/api/especialidades';

export const fetchData = async () => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data; // Devolver los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    throw error; 
  }
};