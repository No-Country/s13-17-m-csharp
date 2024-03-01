import React from 'react';
import Cookies from 'js-cookie';

const initialState = {
  user: {
    name: null,
    lastName: null,
    email: null,
    isAuth: Cookies.get('token') ? true : false
  }
};

function useInitialState() {
  const [state, setState] = React.useState(initialState);

  const authUser = () => {
    setState({ ...state, user: { ...state.user, isAuth: true } });
  };

  return { authUser, state };
}

export { useInitialState };
