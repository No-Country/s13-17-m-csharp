import { endPoints } from '../endPoints';
import { headersJson } from '../headers';

const login = async ({ email, password }) => {
  const response = await fetch(endPoints.users.login, {
    method: 'POST',
    headers: headersJson,
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();

  return data;
};

const makeAppointment = async ({ date, doctorId }) => {
  const response = await fetch(
    endPoints.users.appointments.schedule,
    {
      method: 'POST',
      headers: headersJson,
      body: JSON.stringify({
        usuarioId: '',
        motivo: 'Consulta médica',
        fecha_cita: date,
        medicoId: doctorId,
        activo: true
      })
    }
  );
  return response.status;
};

export { login, makeAppointment };
