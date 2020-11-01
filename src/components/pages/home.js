import React from 'react';

import Container from 'react-bootstrap/Container';

import ImageLinkList from '../image-link-list';
import './home.css';

const Home = () => {
  return (
    <Container className="home">
      <Container>
        <h2>Welcome to Rick and Morty page!</h2>
        <p>You must be logged in to see the information about the characters.</p>
      </Container>
      <ImageLinkList />
    </Container>
  );
};

export default Home;

