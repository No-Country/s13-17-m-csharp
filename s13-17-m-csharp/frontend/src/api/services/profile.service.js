import { endPoints } from '../endPoints';
import { headersJson } from '../headers';

const profileData = async () => {
    const response = await fetch(endPoints.profile.datos, {
        method: 'GET',
        headers: headersJson,
    });
    const data = await response.json();
    return data;
};

export { profileData }; 