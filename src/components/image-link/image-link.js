import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import Image from 'react-bootstrap/Image';

import { getCharacterImage } from '../../queries';
import ErrorIndicator from '../error-indicator';
import square from './square.png';

import './image-link.css';

const ImageLink = ({ id }) => {
  const { loading, error, data } = useQuery(getCharacterImage, {
    variables: { id },
  });

  if (loading) {
    return (
      <Link 
        to={`/characters/1`}
        className="image-link"
      >
        <Image src={square}/>
      </Link>
    );
  }

  if (error) {
    return <ErrorIndicator errorMessage={error.message} />
  }

  return (
    <Link 
      to={`/characters/${id}`}
      className="image-link"
    >
      <Image 
        src={data.character.image} 
        title={data.character.name} 
      />
    </Link>
  );
};

export default ImageLink;

