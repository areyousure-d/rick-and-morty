import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useLocation, useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PaginationBar from '../pagination-bar';
import LoadingSpinner from '../loading-spinner';
import { getCharactersInfo, getCharacters } from '../../queries';

const CharacterList = () => {
  /*
  const location = useLocation();
  const history = useHistory();
  const [search, setSearch] = useState(location.search);
  const prevSearch = location.search;

  if (search === "") {
    setSearch('?page=1');
    location.search = search;
    console.log('search', search);
  }

  const params = new URLSearchParams(location.search);
  const currentPage = +params.get('page');

  if (location.search && search !== newSearch) {
    console.log('history.push')
    history.push(location);
  
  }
  */

  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(getCharactersInfo);

  const onPaginationClick = (pageNumber) => {
    setPage(pageNumber);
    /*
    location.search = `?page=${pageNumber}`;
    history.push(location);
    */
  };

  if (loading) {
    return (
      <Container>
        <LoadingSpinner />  
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="justify-content-center">
        <ErrorIndicator errorMessage={ error.message } />
      </Container>
    );
  }

  let allCharacters = null;
  let pages = null;

  if (data) { 
    allCharacters = data.characters.info.count; 
    pages = data.characters.info.pages;
  }

  return (
    <Container style={{ maxWidth: '700px' }}>
      <h2>Characters</h2>
      <p>{ "All Characters: " + allCharacters }</p>
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <div>{ data && "Page: " + page + "/" + pages }</div>
        <div >
          <PaginationBar 
            currentPage={ page } 
            totalPages={ pages } 
            onPaginationClick={onPaginationClick}
          />
        </div>
      </div>

       <ItemList page={page} query={getCharacters} />
    </Container>
  );
};

export default CharacterList;

