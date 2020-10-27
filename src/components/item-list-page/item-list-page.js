import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import Container from 'react-bootstrap/Container';

import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PaginationBar from '../pagination-bar';
import LoadingSpinner from '../loading-spinner';
import { capitalizeFirstLetter } from '../../util';

const ItemListPage = ({ getInfoQuery, getItemsQuery, label, }) => {

  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(getInfoQuery);

  const onPaginationClick = (pageNumber) => {
    setPage(pageNumber);
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

  let allItems = null;
  let pages = null;

  if (data) { 
    allItems = data[label].info.count; 
    pages = data[label].info.pages;
  }

  const capitalizedLabel = capitalizeFirstLetter(label);

  const PaginationAndPages = (
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
  );

  return (
    <Container style={{ maxWidth: '700px' }}>
      <h2>{ capitalizedLabel }</h2>
      <p>{ `All ${capitalizedLabel}: ` + allItems }</p>
      { PaginationAndPages } 

      <ItemList label={label} page={page} query={getItemsQuery} />

      {  PaginationAndPages } 
    </Container>
  );
};

ItemListPage.propTypes = { 
  getInfoQuery: PropTypes.object.isRequired, 
  getItemsQuery: PropTypes.object.isRequired, 
  label: PropTypes.string.isRequired, 
};

export default ItemListPage;

