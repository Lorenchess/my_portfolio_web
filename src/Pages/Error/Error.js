import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import dogsPlaying from '../../Assets/dogs_playing_chess.jpg';

const Error = () => {
  return (
  <>
    <Container id='error'>
       <Row>
          <Col>
            <h1>Ups...we looked hard but we coun't find you.</h1>
            <img src={dogsPlaying} alt="dogs playing chess" />
            <h1>No worries, you can go back HOME</h1>
          </Col>
       </Row>
    </Container>
    

  </>
  );
};

export default Error;
