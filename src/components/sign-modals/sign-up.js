import React from 'react';
import SignModal from './sign-modal';

const Signup = ({ show, onHide }) => {
  return (
    <SignModal 
      show={show} 
      onHide={onHide}
      isSignupModal={true} 
      label="Регистрация" 
    />
  );
};

export default Signup;

