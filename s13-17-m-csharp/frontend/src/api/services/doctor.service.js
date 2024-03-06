import { headersJson } from '../headers';
import { endPoints } from '../endPoints';

const getDoctorInfo = async (doctorId) => {
  const response = await fetch(endPoints.doctors.info(doctorId), {
    method: 'GET',
    headers: headersJson
  });
  const data = await response.json();
  return data;
};

export { getDoctorInfo };
