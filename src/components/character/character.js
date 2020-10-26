import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import { getCharacterById } from '../../queries';
import ErrorIndicator from '../error-indicator';
import LoadingSpinner from '../loading-spinner';

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
  } = data && data.character; 

  return (
    <Container>
      <Row style={{ margin: '10px'}}>
        <Col>
          <Image 
            style={{ height: '300px' }} 
            src={data && image } 
          />
        </Col>
        <Col>
          <h2>{ data && name }</h2>
          <p>Status: { data && status }</p>
          <p>Gender: { data && gender }</p>
          <p>Species: { data && species }</p>
          <p>
            Origin location: { origin === 'unknown' ? <Link to={`/locations/${origin.id}`}>
              { data && origin.name }
            </Link>
              : 'unknown'
            }
          </p>
          <p>Last known location: <Link to={`/locations/${location.id}`}>
              { data && location.name }
            </Link>
          </p>
          <p>Created: { data && created }</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Episodes
                </Accordion.Toggle>  
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                { episode.map((e, index) => (
                  <Link 
                    key={index} 
                    to={`/episodes/${e.id}`}
                  > { e.name } </Link>))
                }
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Character;

