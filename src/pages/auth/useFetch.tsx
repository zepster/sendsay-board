import React from 'react';

export const useFetch = () => {
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState('');
  const [data, setData] = React.useState(null);

  const startRequest = () => {
    setStatus('loading');
    setError('');
    setData(null);
  };

  const successRequest = (response: any) => {
    setStatus('success');
    setData(response);
  };

  const errorRequest = (err: any) => {
    setStatus('error');
    setData(null);
    setError(err.id);
  };

  const run = (fn: () => Promise<any>) => {
    startRequest();
    fn()
      .then(
        (response) => successRequest(response),
      ).catch(
        (e) => errorRequest(e),
      );
  };

  return {
    run,
    isSuccess: status === 'success',
    isLoading: status === 'loading',
    isError: status === 'error',
    error,
    data,
  };
};
