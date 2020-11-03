import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Image from 'react-bootstrap/Image';

import LoadingSpinner from '../loading-spinner';
import ErrorIndicator from '../error-indicator';
import ItemPageLayout from '../item-page-layout';
import { getEpisodeById } from '../../queries';
import { formatDate } from '../../util';

const Episode = () => {
  const params = useParams();
  const episodeId = +params.id;
  const {loading, error, data} = useQuery(getEpisodeById, {
    variables: { id: episodeId },
  });

  if (loading ) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorIndicator />
  }

  const {
    name,
    air_date,
    episode,
    characters,
    created,
  } = data.episode;

  const formattedCreated = formatDate(created);

  const Info = (
    <>
      <h2>Episode: { name }</h2>
      <p>The air date of the episode: { air_date }</p>
      <p>Code of the episode: { episode }</p>
      <p>Created: { formattedCreated }</p>
    </>
  );

  const List = (
    <React.Fragment>
      { characters.map((character) => (
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
      listName="Characters in this episode"
    />
  );
};

export default Episode;

