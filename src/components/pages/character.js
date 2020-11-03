import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Image from 'react-bootstrap/Image';

import { getCharacterById } from '../../queries';
import ErrorIndicator from '../error-indicator';
import LoadingSpinner from '../loading-spinner';
import ItemPageLayout from '../item-page-layout';
import { formatDate } from '../../util';

const Character = () => {
  const params = useParams();
  const {loading, error, data} = useQuery(getCharacterById, {
    variables: { id: +params.id },
  });

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return (<ErrorIndicator errorMessage={error.message} />);
  }

  const { 
    name, 
    image, 
    status, 
    gender, 
    species, 
    origin, 
    location,
    episode, 
    created,
  } = data.character; 

  const formattedCreated = formatDate(created);

  const Info = (
    <>
      <h2>{ name }</h2>
      <p>Status: { status }</p>
      <p>Gender: { gender }</p>
      <p>Species: { species }</p>
      <p>
        Origin location: { 
          origin.id !== null 
            ? <Link to={`/locations/${origin.id}`}>
                { origin.name }
              </Link>
            : 'unknown'
        }
      </p>
      <p>Last known location: {
        location.id !== null
          ? <Link to={`/locations/${location.id}`}>
              { location.name }
            </Link>
          : 'unknown'
        }
      </p>
      <p>Created: { formattedCreated }</p>
    </>
  );

  const List = (
    episode.map((e) => (
      <Link 
        key={e.id} 
        to={`/episodes/${e.id}`}
        className="btn btn-outline-secondary btn-sm"
        role="button"
        style={{ margin: '2px' }}
      > { e.episode + " " + e.name } </Link>))
  );

  const characterImage = (
    <Image 
      style={{ height: '280px', width: '280px' }} 
      src={data && image } 
    />
  );

  return (
    <ItemPageLayout 
      info={Info}
      list={List}
      image={characterImage}
      listName="Episodes"
    />
  );
};

export default Character;

