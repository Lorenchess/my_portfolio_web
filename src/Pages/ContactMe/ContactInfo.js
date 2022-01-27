import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FaStreetView, FaPhoneAlt, FaEnvelope} from 'react-icons/fa'
import './ContactMe.scss'



const ContactInfo = () => {
  return (
  <Container id="contact">
     <Row>
        <Col>
            <Row>
               <Col>
               <h1><strong>I am always happy to hear from you</strong></h1>
               </Col> 
            </Row>
            <Row>
               <Col>
                  <ul>
                   <li><FaStreetView size={15}/> Pembroke Pines, Florida</li>
                     <li><FaPhoneAlt size={15}/> (956) 336-2323</li>
                     <li> <FaEnvelope size={15}/> ramon_lorente@yaho.com</li>
                  </ul>
               </Col> 
           
            </Row> 
         </Col>
     </Row>
    
  </Container>
  );
};

export default ContactInfo;
