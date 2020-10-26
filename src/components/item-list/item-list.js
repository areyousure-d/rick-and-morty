import React from 'react';
import { useQuery } from '@apollo/client';

import Container from 'react-bootstrap/Container';

import ErrorIndicator from '../error-indicator';
import Item from '../item';
import LoadingSpinner from '../loading-spinner';
import './item-list.css';

const ItemList = ({ page, query }) => {
  const { loading, error, data } = useQuery(query, { 
    variables: { page }
  });

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

  if (error) {
    return <ErrorIndicator errorMessage={ error.message } />
  }

  const characters = data.characters.results;

  const items = characters.map((item) => {
    return (
      <Item 
        key={item.id} 
        id={item.id} 
        image={item.image} 
        name={item.name} 
      />
    );
  });

  return (
    <Container className="d-flex item-list">
      { items }
    </Container>
  );
};

export default ItemList;

