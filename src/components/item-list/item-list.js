import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import Container from 'react-bootstrap/Container';

import ErrorIndicator from '../error-indicator';
import Item from '../item';
import LoadingSpinner from '../loading-spinner';
import './item-list.css';

const ItemList = ({ page, query, label }) => {
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

  const items = data[label].results;

  const itemsArr = items.map((item) => {
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
      { itemsArr }
    </Container>
  );
};

ItemList.propTypes = { 
  page: PropTypes.number.isRequired, 
  query: PropTypes.object.isRequired, 
  label: PropTypes.string.isRequired, 
};

export default ItemList;

