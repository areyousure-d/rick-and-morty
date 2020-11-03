import React from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import ImageLinkList from '../image-link-list';
import './home.css';

const Home = () => {
  return (
    <Container className="home">
      <Jumbotron>
        <Container className="home-text">
          <h2>Welcome to Rick and Morty page!</h2>
          <p>
            You must be logged in to see the information about the characters, episodes and locations.
          </p>
        </Container>
        <ImageLinkList />
      </Jumbotron>
    </Container>
  );
};

export default Home;

