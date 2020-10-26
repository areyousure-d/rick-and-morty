import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import { useAuth } from '../../hooks/useAuth';

const EmailSignToggle = ({ handleShowSignin, handleShowSignup }) => {
  const auth = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState('email');

  useEffect(() => {
    setEmail(auth.user && auth.user.user.email) 
  }, [auth.user]);

  const signoutHandler = () => {
    auth.signout()
      .then(() => history.push("/"));
  };

  return (
    <>
      { auth.getAccessToken()
        ? <Row expand="sm">
            <Card className="mr-2 p-2">{ email }</Card>
            <Button variant="secondary" onClick={signoutHandler}>Выйти</Button>
          </Row>
        : <Row expand="sm">
            <Button className="mr-2" onClick={handleShowSignin}>Signin</Button>
            <Button className="mr-2" onClick={handleShowSignup}>Signup</Button>
          </Row>
      }
    </>
  );
};

EmailSignToggle.propTypes = {
  handleShowSignin: PropTypes.func.isRequired,
  handleShowSignup: PropTypes.func.isRequired,
};

export default EmailSignToggle;

