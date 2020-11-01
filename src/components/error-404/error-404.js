import React from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import image404 from './404rickandmorty.png';

const Error404 = () => {
  return (
    <Container style={{ backgroundColor: 'black' }}>
      <Image style={{ width: '100%' }} src={image404} />
    </Container>
  );
};

export default Error404;

