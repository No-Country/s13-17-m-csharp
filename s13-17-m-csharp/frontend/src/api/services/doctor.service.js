import { headersJson } from '../headers';
import { endPoints } from '../endPoints';

const getDoctorInfo = async (doctorId) => {
  const response = await fetch(endPoints.doctors.info(doctorId), {
    method: 'GET',
    headers: headersJson
  });
  const data = await response.json();
  const response2 = await fetch(
    endPoints.doctors.appointments(doctorId),
    {
      method: 'GET',
      headers: headersJson
    }
  );
  data.appointments = await response2.json();
  return data;
};

export { getDoctorInfo };
