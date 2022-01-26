import React, {useState} from 'react';
import {Card, Container, Col, Row, Button} from 'react-bootstrap';
import './MyProjects.scss';
import '../../Shared/Modal/Modal.scss';
//import isaGrooming from '../../Assets/isaGrooming-img.jpg';
import isaGrooming from '../../Assets/isaDog.jpg';
import beautifulChess from '../../Assets/dubrovnik-burnt-boxwood.jpg';
import businessCard from '../../Assets/ledo.jpg';
import LineSeparator from '../../Shared/LineSeparator';
import BusinessCardModal from '../../Shared/Modal/BusinessCardModal';
import ChessModal from '../../Shared/Modal/ChessModal';
import GroomingModal from '../../Shared/Modal/GroomingModal';


const MyProjects = () => {
   const [modalGroomingShow, setModalGroomingShow] = useState(false);
   const [modalChessShow, setModalChessShow] = useState(false);
   const [modalBusinessShow, setModalBusinessShow] = useState(false);

   return (
      <>
       <Container className="myProjects-wrapper mt-5 py-3" id="projects">
          <Row >
            <Col xs="12 mb-5" className="separator-wrapper">        
                <h1 className="projects-heading mx-auto d-block">My Projects</h1>
            </Col>
          </Row >
          <Row>
            
               <Col xm="12" lg="4">
                     <Card className='project-card mx-auto justify-centent-center'>
                        <Card.Img variant="top" src={isaGrooming} className="img-wrapper-1 mx-auto d-block"/>
                        <Card.Body>
                           <Card.Title className='project-card-title'>Isa Grooming</Card.Title>
                           <Card.Text className='project-card-text'>
                              Isa grooming is a real world application for a grooming business located in Miami, Florida. 
                           </Card.Text>
                           <Button className='project-btn text-center' onClick={() => setModalGroomingShow(true)}>Case Study</Button>
                           <GroomingModal
                            show={modalGroomingShow}
                            onHide={() => setModalGroomingShow(false)}
                           />
                        </Card.Body>
                     </Card>
               </Col> 
               <Col xm="12" lg="4">    
                     <Card className='project-card mx-auto justify-centent-center'>
                           <Card.Img variant="top" src={beautifulChess} className="img-wrapper-2 mx-auto d-block"/>
                           <Card.Body>
                              <Card.Title className='project-card-title'>Beautiful Chess E-commerce</Card.Title>
                              <Card.Text className='project-card-text'>
                                 Beautiful chess is an e-commerce site that simulates sales of gorgous chess sets. The site is a full stack application with its own database, user registration and login, payments using stripes and more.
                              </Card.Text>
                              <Button className='project-btn text-center' onClick={() => setModalChessShow(true)}>Case Study</Button>
                           <ChessModal
                            show={modalChessShow}
                            onHide={() => setModalChessShow(false)}
                           />
                           </Card.Body>
                        </Card>
               </Col>      
               <Col xm="12" lg="4">     
                        <Card className='project-card mx-auto justify-centent-center'>
                           <Card.Img variant="top" src={businessCard} className="img-wrapper-3 mx-auto d-block"/>
                           <Card.Body>
                              <Card.Title className='project-card-title'> Digital Business Card</Card.Title>
                              <Card.Text className='project-card-text'>
                                 Digital business card application with a full stack form to promote the chess lessons of the International Master Roberto Gomez Ledo in Spain. 
                              </Card.Text>
                              
                           <Button className='project-btn text-center' onClick={() => setModalBusinessShow(true)}>Case Study</Button>
                           <BusinessCardModal
                            show={modalBusinessShow}
                            onHide={() => setModalBusinessShow(false)}
                           />
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
