const API_URL = import.meta.env.VITE_API_URL;

const endPoints = {
  users: {
    login: `${API_URL}/Cuentas/login`
  },
  profile: {
    datos: `${API_URL}/Cuentas/registro`
  }
};

export { endPoints };
