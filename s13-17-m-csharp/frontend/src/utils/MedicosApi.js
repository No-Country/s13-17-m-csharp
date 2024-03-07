import axios from 'axios';

const url = 'https://www.medicita.somee.com/api/Medico/Busqueda?regXPagina=40&paginaActual=1';

export const medicosApi = async () => {
  try {
    const response = await axios.get(url);
    const data = response.data;

    return data; 



  } catch (error) {
    console.error(error);
    throw error; 
  }
};