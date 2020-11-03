import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Image from 'react-bootstrap/Image';

import LoadingSpinner from '../loading-spinner';
import ErrorIndicator from '../error-indicator';
import ItemPageLayout from '../item-page-layout';
import { getLocationById } from '../../queries';
import { formatDate } from '../../util';

const Location = () => {
  const params = useParams();
  const locationId = +params.id;
  const {loading, error, data} = useQuery(getLocationById, {
    variables: { id: locationId },
  });

  if (loading ) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorIndicator />
  }

  const {
    name,
    type,
    dimension,
    residents,
    created,
  } = data.location;

  const formattedCreated = formatDate(created);

  const Info = (
    <>
      <h2>Location: { name }</h2>
      <p>The type of location: { type }</p>
      <p>The dimension in which the location is located: { dimension }</p>
      <p>Created: { formattedCreated }</p>
    </>
  );

  const List = (
    <React.Fragment>
      { residents.map((character) => (
          <Link 
            key={character.id} 
            to={`/characters/${character.id}`}
            >
              <Image 
                src={character.image} 
                title={character.name}
                style={{ width: '70px', height: '70px'}}
              />
          </Link>))
      }
    </React.Fragment>
  );

  return (
    <ItemPageLayout 
      image={null}
      info={Info}
      list={List}
      listName="Residents (last seen in the location)"
    />
  );
};

export default Location;

