const API_URL = import.meta.env.VITE_API_URL;

const endPoints = {
  users: {
    login: `${API_URL}/Cuentas/login`
  },
  appointments: {
    schedule: `${API_URL}/Citas/Registrar`
  },
  doctors: {
    info: (doctorId) => `${API_URL}/Medico/BusquedaXID?id=${doctorId}`
  },
  profile: {
    datos: `${API_URL}/Datos/MisDatos`
  }
};

export { endPoints };
