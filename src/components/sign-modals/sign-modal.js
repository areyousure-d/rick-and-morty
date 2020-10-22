import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import { useAuth } from '../../hooks';

const SignModal = ({ show, onHide, isSignupModal, label }) => {
  const auth = useAuth();
  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm();
  const [signError, setSignError] = useState(null);
  const signFunc = isSignupModal ? auth.signup : auth.signin;

  const handleSign = (data) => {
    const { email, pass } = data;
    signFunc(email, pass)
      .then(() => {
        history.push('/');
        onHide();
      })
      .catch((error) => {
        setSignError(error.message)
      });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{ label }</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        { signError &&
          <Alert variant="danger" onClose={() => {setSignError(false)}} dismissible >
            { signError }
          </Alert>
        }
        <Form onSubmit={handleSubmit(handleSign)}>
          <Form.Group as={Form.Row}>
            <Form.Label column sm={2}>Email</Form.Label> 
            <Col sm={10}>
              <Form.Control 
                name="email"
                type="email" 
                placeholder="Enter Email" 
                ref={register({ required: true })} 
              />
              <Form.Text
                as="span"
                className="text-danger"
              >
                { errors.email && "Email is Required"}
              </Form.Text>
            </Col>
          </Form.Group>

          <Form.Group
            as={Form.Row}
            controlId="formBasicPassword"
          >
            <Form.Label column sm={2}>Password</Form.Label>
            <Col sm={10}>
              <Form.Control 
                name="pass"
                type="password" 
                placeholder="Password" 
                ref={register({ required: true })}
              />
              <Form.Text
                as="span"
                className="text-danger"
              >
                { errors.pass && "Password is Required"}
              </Form.Text>
            </Col>
          </Form.Group>

          {
            isSignupModal ?
              <Form.Group
                as={Form.Row}
              >
                <Form.Label column sm={2}>Password</Form.Label>
                <Col sm={10}>
                  <Form.Control 
                    name="passConfirm"
                    type="password" 
                    placeholder="Confirm Password" 
                    ref={register({ 
                      required: true, 
                      validate: (value) => value === watch('pass') || "Password don't match",
                    })}
                  />
                  <Form.Text
                    as="span"
                    className="text-danger"
                  >
                    { 
                      errors.passConfirm 
                        && errors.passConfirm.type === "required" 
                        && "Password is Required"
                    }
                    { errors.passConfirm
                        && errors.passConfirm.type === "validate"
                        && "Password don’t match"}
                  </Form.Text>
                </Col>
              </Form.Group>
              : null
          }

          <Form.Group className="d-flex justify-content-end">
            <Button 
              className="mr-2" 
              variant="secondary" 
              type="reset"
            >Очистить</Button>
            <Button variant="primary" type="submit">{ label }</Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

SignModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  isSignupModal: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default SignModal;

