import React from 'react';
import SignModal from './sign-modal';

const Signin = ({ show, onHide }) => {
  return (
    <SignModal 
      show={show} 
      onHide={onHide}
      isSignupModal={false} 
      label="Signin" 
    />
  );
};

export default Signin;

