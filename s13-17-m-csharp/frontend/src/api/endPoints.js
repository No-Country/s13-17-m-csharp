const API_URL = import.meta.env.VITE_API_URL;

const endPoints = {
  users: {
    login: `${API_URL}/Cuentas/login`
  }
};

export { endPoints };
