import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import Container from 'react-bootstrap/Container';

import { getCharactersInfo } from '../../queries';
import LoadingSpinner from '../loading-spinner';
import ErrorIndicator from '../error-indicator';
import ImageLink from '../image-link';

import './image-link-list.css';

const ImageLinkList = () => {
  const { loading, error, } = useQuery(getCharactersInfo);
  const [charactersId, setCharactersId] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);
  const imagesNumber = 10;

  useEffect(() => {
    if (charactersId.length < imagesNumber) {
      const newArr = [];
      for (let i = 0; i < imagesNumber; i++) {
        let newRandomId = null;
        while (newArr.includes(newRandomId) || newRandomId === null) {
          newRandomId = Math.floor(Math.random() * 641) + 1;
        } 
        newArr.push(newRandomId);
      }
      setCharactersId([...newArr]);
    }

    const intervalId = setInterval(() => {
      const newRandomIndex = Math.floor(Math.random() * imagesNumber);
      setRandomIndex(newRandomIndex);
      
      let randomId = null;
      while (charactersId.includes(randomId) || randomId === null) {
        randomId = Math.floor(Math.random() * 641) + 1;
      }
      setCharactersId([
        ...charactersId.slice(0, randomIndex),
        randomId,
        ...charactersId.slice(randomIndex + 1)
      ]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [charactersId, randomIndex]);

  if (loading) {
    return <Container><LoadingSpinner /></Container>
  }

  if (error) {
    return <Container><ErrorIndicator errorMessage={error.message} /></Container>
  }

  const links = charactersId.map((id) => {
    return <ImageLink key={id} id={id} />
  });

  return (
    <Container className="image-link-list">
      { links } 
    </Container>
  );
};

export default ImageLinkList;

