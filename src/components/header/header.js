import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import { Signup, Signin } from '../sign-modals';
import EmailSignToggle from '../email-sign-toggle';

import './header.css';

const Header = () => {
  const history = useHistory();

  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleCloseSignin = () => {
    history.push('/')
    setShowSignin(false);
  };
  const handleShowSignin = () => {
    history.push('/login');
    setShowSignin(true);
  };

  const handleCloseSignup = () => {
    history.push('/');
    setShowSignup(false);
  };
  const handleShowSignup = () => {
    history.push('/signup');
    setShowSignup(true);
  };

  return (
  <>
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" >
    <Container expand="md" className="d-flex" style={{ flexWrap: 'wrap' }}>
      <Navbar.Brand>
        <Link className="nav-link text-primary" to="/">Rick and Morty</Link>
      </Navbar.Brand>

      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link className="mr-2 nav-link" to="/characters/">Characters</Link>
        <Link className="mr-2 nav-link" to="/episodes/">Episodes</Link>
        <Link className="nav-link" to="/locations/">Locations</Link>
      </Nav>
      </Navbar.Collapse>

      <EmailSignToggle 
        handleShowSignin={handleShowSignin} 
        handleShowSignup={handleShowSignup}
      />

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </Container>
    </Navbar>
    <Signin show={showSignin} onHide={handleCloseSignin} />
    <Signup show={showSignup} onHide={handleCloseSignup} />
  </>
  );
}

export default Header;

