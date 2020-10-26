import React from 'react';

import Alert from 'react-bootstrap/Alert';

const ErrorIndicator = ({ errorMessage }) => {
  return (
    <Alert 
      variant="danger"
    >
      <Alert.Heading>Oops, something wrong</Alert.Heading>
      <p> { errorMessage } </p>
    </Alert>
  );
};

export default ErrorIndicator;

