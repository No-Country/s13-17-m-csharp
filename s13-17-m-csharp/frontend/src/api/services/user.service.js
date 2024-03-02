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

export { login };
