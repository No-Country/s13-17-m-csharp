import Cookies from 'js-cookie';

const headersJson = {
  accept: '*/*',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${Cookies.get('token')}`
};

export { headersJson };
