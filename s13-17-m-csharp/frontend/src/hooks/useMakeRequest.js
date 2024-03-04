import React from 'react';

const initialState = {
  loading: false,
  error: false,
  response: null
};

function useMakeRequest() {
  const [state, setState] = React.useState(initialState);

  const sendRequest = async (data, reqFun) => {
    try {
      setState({ loading: true, response: null, error: false });
      const res = await reqFun(data);
      setState({ response: res, loading: false, error: false });
    } catch (err) {
      setState({ loading: false, response: null, error: true });
    }
  };

  return { state, sendRequest };
}

export { useMakeRequest };
