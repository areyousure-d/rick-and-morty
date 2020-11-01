import React from 'react';
import PropTypes from 'prop-types';

import Alert from 'react-bootstrap/Alert';

const ErrorIndicator = ({ errorMessage }) => {
  return (
    <Alert 
      variant="danger"
      className="mt-2"
    >
      <Alert.Heading>Oops, something wrong</Alert.Heading>
      <p> { errorMessage } </p>
    </Alert>
  );
};

ErrorIndicator.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorIndicator;

