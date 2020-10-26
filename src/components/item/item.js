import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './item.css';

const Item = ({ image, name, id }) => {
  const history = useHistory();
  const clickHandler = () => {
    history.push(id);
  };

  return (
    <Card className="item" bg="light" text="dark">
      { image
        ? <Card.Img variant="top" src={image} />
        : null
      }
      <Card.Body>
        <Card.Title>{ name }</Card.Title>
      </Card.Body>
      <Card.Footer style={{ textAlign: 'right' }}>
        <Button 
          type="button" 
          variant="outline-info"
          onClick={clickHandler}
        >Details</Button>
      </Card.Footer>
    </Card>
  );
};

Item.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Item;

