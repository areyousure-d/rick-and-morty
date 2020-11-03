import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemPageLayout = ({ image, info, list, listName, }) => {

  return (
    <Container>
      <Row style={{ margin: '10px'}}>
        { image
          ? <Col>{ image }</Col>
          : null
        }
        <Col>
          { info }
        </Col>
      </Row>
      <Row>
        <Col>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="info" eventKey="0">
                  { listName } 
                </Accordion.Toggle>  
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  { list }
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

ItemPageLayout.propTypes = {
  listName: PropTypes.string.isRequired,
  info: PropTypes.node.isRequired,
  image: PropTypes.node,
  list: PropTypes.node.isRequired,
};

export default ItemPageLayout;

