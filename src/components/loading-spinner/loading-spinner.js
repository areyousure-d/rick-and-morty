import React from 'react';

import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
  return (
    <Spinner 
      animation="border" 
      role="status" 
      style={{ marginLeft: '50%', marginTop: '100px'}}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>    
  );
};

export default LoadingSpinner;

