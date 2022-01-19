import React from 'react';
import {Card, Container, Col, Row, Button} from 'react-bootstrap';
import './MyProjects.scss';
import isaGrooming from '../../Assets/isaGrooming-img.jpg';
import beautifulChess from '../../Assets/dubrovnik-burnt-boxwood.jpg';
import businessCard from '../../Assets/business-card.jpg';
import LineSeparator from '../../Shared/LineSeparator';
// import MySkills from '../AboutMe/MySkills';

const MyProjects = () => {
   return (
      <>
       {/* <MySkills /> */}
       <Container className="myProjects-wrapper mt-5 py-3">
          <Row >
            <Col xs="12 mb-5" className="separator-wrapper">        
                <h1 className="projects-heading mx-auto d-block">My Projects</h1>
            </Col>
          </Row >
          <Row>
             <Col lg="4">
               <Card className='project-card mx-auto justify-centent-center'>
                  <Card.Img variant="top" src={beautifulChess} className="img-wrapper mx-auto d-block"/>
                  <Card.Body>
                     <Card.Title className='project-card-title'>Beautiful Chess E-commerce</Card.Title>
                     <Card.Text className='project-card-text'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </Card.Text>
                     <Button className='project-btn'>See more...</Button>
                  </Card.Body>
               </Card>
             </Col>
             <Col lg="4">
             <Card className='project-card mx-auto justify-centent-center'>
                  <Card.Img variant="top" src={isaGrooming} className="img-wrapper mx-auto d-block"/>
                  <Card.Body>
                     <Card.Title className='project-card-title'>Isa Grooming</Card.Title>
                     <Card.Text className='project-card-text'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </Card.Text>
                     <Button className='project-btn'>See more...</Button>
                  </Card.Body>
               </Card>
             </Col>
             <Col lg="4">
             <Card className='project-card mx-auto justify-centent-center'>
                  <Card.Img variant="top" src={businessCard} className="img-wrapper mx-auto d-block"/>
                  <Card.Body>
                     <Card.Title className='project-card-title'> Digital Business Card</Card.Title>
                     <Card.Text className='project-card-text'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </Card.Text>
                     <Button className='project-btn'>See more...</Button>
                  </Card.Body>
               </Card>
             </Col>
          </Row>
          <LineSeparator />
       </Container> 
      </>
   )
}

export default MyProjects
