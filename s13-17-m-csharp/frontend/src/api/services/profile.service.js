import { endPoints } from '../endPoints';
import { headersJson } from '../headers';

const profileData = async ({ email, nombre, apellido, password }) => {
    const response = await fetch(endPoints.profile.datos, {
        method: 'POST',
        headers: headersJson,
        body: JSON.stringify({ email, nombre, apellido, password })
    });
    const data = await response.json();
    return data;
};

export { profileData }; 
