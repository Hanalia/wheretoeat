import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const Loader = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/results');
    }, 3000);

    return () => clearTimeout(timer);
  }, [history]);

  return <div>Loading...</div>;
};
